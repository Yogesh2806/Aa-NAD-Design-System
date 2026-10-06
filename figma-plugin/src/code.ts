// Aa NAD — Figma library builder. Run once in an empty Figma file:
// Plugins → Development → Import plugin from manifest… → Aa NAD → Build library.
// Creates variables (with Light / Dark / High contrast modes where the plan allows), text and effect styles,
// icon / logo / illustration / avatar vectors and 15 component sets bound to the variables.
import { DATA } from './data';

type V = Variable;
type Host = PageNode | SectionNode;
const issues: string[] = [];
const log = (m: string) => { console.log('[Aa NAD] ' + m); };
const warn = (m: string) => { issues.push(m); console.warn('[Aa NAD] ' + m); };

// ---------- colour helpers ----------
function hex(h: string): RGBA {
  h = h.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const n = parseInt(h.slice(0, 6), 16);
  return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255, a: h.length === 8 ? parseInt(h.slice(6), 16) / 255 : 1 };
}
function rgba(s: string): RGBA {
  const m = s.match(/rgba?\(([^)]+)\)/);
  if (!m) return hex(s);
  const p = m[1].split(',').map(x => parseFloat(x));
  return { r: p[0] / 255, g: p[1] / 255, b: p[2] / 255, a: p.length > 3 ? p[3] : 1 };
}
const col = (s: string) => (s.startsWith('#') ? hex(s) : rgba(s));

// ---------- state ----------
const VARS: Record<string, V> = {};        // token name → variable (semantic "Color" collection or primitives)
const FLOATS: Record<string, V> = {};
let colorCollection: VariableCollection | null = null;
let modeIds: { light: string; dark?: string; hc?: string } = { light: '' };
const TEXT: Record<string, TextStyle> = {};
const EFFECT: Record<string, EffectStyle> = {};
const ICON: Record<string, ComponentNode> = {};   // "name/outline" → component
let FAMILY = 'Inter', MONO = 'Roboto Mono';
const STYLE_FOR: Record<number, string> = {};
const MONO_STYLE_FOR: Record<number, string> = {};

// ---------- fonts ----------
async function setupFonts() {
  const all = await figma.listAvailableFontsAsync();
  const fam = (name: string) => all.filter(f => f.fontName.family === name).map(f => f.fontName.style);
  const pick = (styles: string[], w: number) => {
    const want: Record<number, string[]> = { 400: ['Regular'], 500: ['Medium', 'Regular'], 600: ['SemiBold', 'Semi Bold', 'Bold'], 700: ['Bold'], 800: ['ExtraBold', 'Extra Bold', 'Black', 'Bold'] };
    return (want[w] || ['Regular']).find(s => styles.includes(s)) || styles.find(s => /regular/i.test(s)) || styles[0];
  };
  let s = fam('Atkinson Hyperlegible Next');
  if (s.length) FAMILY = 'Atkinson Hyperlegible Next';
  else { s = fam('Atkinson Hyperlegible'); if (s.length) FAMILY = 'Atkinson Hyperlegible'; else { s = fam('Inter'); warn('Atkinson Hyperlegible Next is not available in this Figma account — used Inter. Install the font from assets/fonts and run again.'); } }
  let m = fam('Atkinson Hyperlegible Mono');
  if (m.length) MONO = 'Atkinson Hyperlegible Mono'; else { m = fam('Roboto Mono'); if (!m.length) { MONO = FAMILY; m = s; } }
  for (const w of [400, 500, 600, 700, 800]) { STYLE_FOR[w] = pick(s, w); MONO_STYLE_FOR[w] = pick(m, w); }
  const loads: Promise<void>[] = [];
  for (const w of [400, 500, 600, 700, 800]) { loads.push(figma.loadFontAsync({ family: FAMILY, style: STYLE_FOR[w] })); loads.push(figma.loadFontAsync({ family: MONO, style: MONO_STYLE_FOR[w] })); }
  await Promise.all(loads);
  log(`Fonts: ${FAMILY} / ${MONO}`);
}

// ---------- variables ----------
const cssName = (n: string) => `var(--${n})`;
function scopesFor(n: string): VariableScope[] {
  if (/^(border|focus)/.test(n)) return ['STROKE_COLOR'];
  if (/^(bg|surface|overlay)/.test(n) || /-(bg|solid)$/.test(n)) return ['FRAME_FILL', 'SHAPE_FILL'];
  if (/^action/.test(n)) return ['FRAME_FILL', 'SHAPE_FILL', 'STROKE_COLOR'];
  return ['TEXT_FILL', 'SHAPE_FILL', 'STROKE_COLOR'];
}
const semName = (n: string) => {
  const special: Record<string, string> = { bg: 'bg/default', text: 'text/default', icon: 'icon/default', border: 'border/default', action: 'action/default', link: 'link/default', overlay: 'overlay/default', danger: 'danger/default', warning: 'warning/default', success: 'success/default', info: 'info/default' };
  if (special[n]) return special[n];
  const i = n.indexOf('-'); return i < 0 ? n : n.slice(0, i) + '/' + n.slice(i + 1);
};
const primName = (n: string) => { const i = n.lastIndexOf('-'); return n.slice(0, i) + '/' + n.slice(i + 1); };

async function buildVariables() {
  const prim = figma.variables.createVariableCollection('Primitives');
  prim.renameMode(prim.modes[0].modeId, 'Value');
  const pm = prim.modes[0].modeId;
  for (const [name, value, usage] of DATA.prim) {
    const v = figma.variables.createVariable('color/' + primName(name), prim, 'COLOR');
    v.setValueForMode(pm, col(value)); v.scopes = []; v.description = usage; v.setVariableCodeSyntax('WEB', cssName(name));
    VARS[name] = v;
  }
  for (const [name, target, usage] of DATA.alias) {
    const v = figma.variables.createVariable('brand/' + primName(name), prim, 'COLOR');
    v.setValueForMode(pm, figma.variables.createVariableAlias(VARS[target])); v.scopes = []; v.description = usage; v.setVariableCodeSyntax('WEB', cssName(name));
    VARS[name] = v;
  }
  // Semantic colours with modes
  const c = figma.variables.createVariableCollection('Color');
  colorCollection = c;
  c.renameMode(c.modes[0].modeId, 'Light'); modeIds.light = c.modes[0].modeId;
  let extra: VariableCollection[] = [];
  try { modeIds.dark = c.addMode('Dark'); modeIds.hc = c.addMode('High contrast'); }
  catch (e) {
    warn('This Figma plan allows one mode per collection, so Dark and High contrast were created as separate collections ("Color · Dark", "Color · High contrast"). Upgrade to a paid plan and run again for switchable modes.');
    extra = [figma.variables.createVariableCollection('Color · Dark'), figma.variables.createVariableCollection('Color · High contrast')];
    extra.forEach((x, i) => x.renameMode(x.modes[0].modeId, i ? 'High contrast' : 'Dark'));
  }
  const valueOf = (raw: string): VariableValue => raw.startsWith('{') ? figma.variables.createVariableAlias(VARS[raw.slice(1, -1)]) : col(raw);
  const pending: [string, string, string, string, string][] = DATA.sem;
  // Some semantic tokens alias other semantic tokens? (none today) — primitives only, so one pass is enough.
  for (const [name, light, dark, hc, usage] of pending) {
    const v = figma.variables.createVariable(semName(name), c, 'COLOR');
    v.setValueForMode(modeIds.light, valueOf(light));
    if (modeIds.dark) v.setValueForMode(modeIds.dark, valueOf(dark));
    if (modeIds.hc) v.setValueForMode(modeIds.hc, valueOf(hc));
    v.scopes = scopesFor(name); v.description = usage; v.setVariableCodeSyntax('WEB', cssName(name));
    VARS[name] = v;
    if (extra.length) {
      [dark, hc].forEach((raw, i) => { const x = figma.variables.createVariable(semName(name), extra[i], 'COLOR'); x.setValueForMode(extra[i].modes[0].modeId, valueOf(raw)); x.scopes = scopesFor(name); x.setVariableCodeSyntax('WEB', cssName(name)); });
    }
  }
  const sp = figma.variables.createVariableCollection('Spacing'); sp.renameMode(sp.modes[0].modeId, 'Value');
  for (const [name, value, usage] of DATA.space) { const v = figma.variables.createVariable('space/' + name.replace('space-', ''), sp, 'FLOAT'); v.setValueForMode(sp.modes[0].modeId, value); v.scopes = ['GAP']; v.description = usage; v.setVariableCodeSyntax('WEB', cssName(name)); FLOATS[name] = v; }
  const rd = figma.variables.createVariableCollection('Radius'); rd.renameMode(rd.modes[0].modeId, 'Value');
  for (const [name, value, usage] of DATA.radius) { const v = figma.variables.createVariable('radius/' + name.replace('radius-', ''), rd, 'FLOAT'); v.setValueForMode(rd.modes[0].modeId, value); v.scopes = ['CORNER_RADIUS']; v.description = usage; v.setVariableCodeSyntax('WEB', cssName(name)); FLOATS[name] = v; }
  log(`Variables: ${Object.keys(VARS).length} colours, ${Object.keys(FLOATS).length} numbers`);
}

// ---------- styles ----------
function parseShadow(s: string): DropShadowEffect[] {
  if (!s || s === 'none') return [];
  return s.split(/,(?![^(]*\))/).map(part => {
    const c = part.match(/rgba?\([^)]+\)|#[0-9a-f]+/i);
    const nums = part.replace(c ? c[0] : '', '').trim().split(/\s+/).map(x => parseFloat(x));
    return { type: 'DROP_SHADOW', color: c ? col(c[0]) : { r: 0, g: 0, b: 0, a: 0.1 }, offset: { x: nums[0] || 0, y: nums[1] || 0 }, radius: nums[2] || 0, spread: nums[3] || 0, visible: true, blendMode: 'NORMAL' } as DropShadowEffect;
  });
}
async function buildStyles() {
  for (const [group, name, family, size, lh, weight, ls, , usage] of DATA.type) {
    const st = figma.createTextStyle();
    st.name = `${group}/${name}`;
    st.fontName = { family: family === 'mono' ? MONO : FAMILY, style: (family === 'mono' ? MONO_STYLE_FOR : STYLE_FOR)[weight] || 'Regular' };
    st.fontSize = size; st.lineHeight = { unit: 'PIXELS', value: lh };
    st.letterSpacing = { unit: 'PERCENT', value: parseFloat(ls) * 100 || 0 };
    if (name === 'overline') st.textCase = 'UPPER';
    st.description = usage;
    TEXT[name] = st;
  }
  for (const [name, value, usage] of DATA.shadow) {
    if (value === 'none') continue;
    const e = figma.createEffectStyle(); e.name = `Shadow/${name}`; e.effects = parseShadow(value); e.description = usage; EFFECT[name] = e;
  }
  log(`Styles: ${Object.keys(TEXT).length} text, ${Object.keys(EFFECT).length} effect`);
}

// ---------- node helpers ----------
function paint(token: string): SolidPaint {
  const base: SolidPaint = { type: 'SOLID', color: { r: 0, g: 0, b: 0 } };
  const v = VARS[token];
  if (!v) { warn(`missing colour token ${token}`); return base; }
  return figma.variables.setBoundVariableForPaint(base, 'color', v);
}
function bindFloat(n: SceneNode & { setBoundVariable: any }, field: VariableBindableNodeField, token: string) {
  const v = FLOATS[token]; if (v) n.setBoundVariable(field, v); else warn(`missing number token ${token}`);
}
type FrameOpts = { dir?: 'HORIZONTAL' | 'VERTICAL' | 'NONE'; pad?: [string, string] | string; gap?: string; fill?: string | null; stroke?: string; strokeW?: number; radius?: string; align?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN'; cross?: 'MIN' | 'CENTER' | 'MAX'; w?: number; h?: number; dashed?: boolean };
function setup(f: FrameNode | ComponentNode, name: string, o: FrameOpts = {}) {
  f.name = name;
  f.layoutMode = o.dir || 'HORIZONTAL';
  if (f.layoutMode !== 'NONE') {
    f.primaryAxisSizingMode = 'AUTO'; f.counterAxisSizingMode = 'AUTO';
    f.primaryAxisAlignItems = o.align || 'MIN'; f.counterAxisAlignItems = o.cross || 'CENTER';
    if (o.pad) { const [y, x] = typeof o.pad === 'string' ? [o.pad, o.pad] : o.pad; bindFloat(f, 'paddingTop', y); bindFloat(f, 'paddingBottom', y); bindFloat(f, 'paddingLeft', x); bindFloat(f, 'paddingRight', x); }
    if (o.gap) bindFloat(f, 'itemSpacing', o.gap);
  }
  f.fills = o.fill ? [paint(o.fill)] : [];
  if (o.stroke) { f.strokes = [paint(o.stroke)]; f.strokeWeight = o.strokeW || 1; f.strokeAlign = 'INSIDE'; if (o.dashed) f.dashPattern = [4, 4]; }
  if (o.radius) for (const k of ['topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius'] as VariableBindableNodeField[]) bindFloat(f, k, o.radius);
  if (o.w || o.h) {
    f.resize(o.w || 100, o.h || 100);
    if (o.w) { if (f.layoutMode === 'HORIZONTAL') f.primaryAxisSizingMode = 'FIXED'; else if (f.layoutMode === 'VERTICAL') f.counterAxisSizingMode = 'FIXED'; }
    if (o.h) { if (f.layoutMode === 'HORIZONTAL') f.counterAxisSizingMode = 'FIXED'; else if (f.layoutMode === 'VERTICAL') f.primaryAxisSizingMode = 'FIXED'; }
  }
  return f;
}
const frame = (name: string, o: FrameOpts = {}) => setup(figma.createFrame(), name, o) as FrameNode;
const comp = (name: string, o: FrameOpts = {}) => setup(figma.createComponent(), name, o) as ComponentNode;
async function text(chars: string, style: string, color = 'text', name?: string, width?: number) {
  const t = figma.createText();
  const st = TEXT[style];
  t.fontName = st ? st.fontName : { family: FAMILY, style: STYLE_FOR[400] };
  if (width) { t.resize(width, 20); t.textAutoResize = 'HEIGHT'; } // resize() resets auto-resize, so set it after
  t.characters = chars;
  if (st) await t.setTextStyleIdAsync(st.id);
  t.fills = [paint(color)];
  t.name = name || chars.slice(0, 24);
  return t;
}
function add<T extends SceneNode>(parent: BaseNode & ChildrenMixin, child: T): T { parent.appendChild(child); return child; }
function icon(name: string, variant: 'outline' | 'filled', size: number, color: string): InstanceNode {
  const c = ICON[`${name}/${variant}`] || ICON[`${name}/outline`] || ICON['help-circle/outline'];
  const i = c.createInstance(); i.name = 'Icon';
  i.resize(size, size);
  recolor(i, color);
  return i;
}
function recolor(n: SceneNode, color: string) {
  const vectors = 'findAll' in n ? (n as FrameNode).findAll(x => x.type === 'VECTOR' || x.type === 'BOOLEAN_OPERATION' || x.type === 'ELLIPSE' || x.type === 'RECTANGLE' || x.type === 'POLYGON' || x.type === 'LINE') : [];
  for (const v of vectors as GeometryMixin[]) {
    if (Array.isArray(v.fills) && v.fills.length) v.fills = [paint(color)];
    if (Array.isArray(v.strokes) && v.strokes.length) v.strokes = [paint(color)];
  }
}
function variantOf(set: ComponentSetNode, props: Record<string, string>): ComponentNode {
  const want = Object.entries(props).map(([k, v]) => `${k}=${v}`);
  const c = set.children.find(ch => want.every(w => ch.name.split(', ').includes(w))) as ComponentNode;
  if (!c) throw new Error(`variant not found: ${want.join(', ')}`);
  return c;
}
function combine(page: Host, comps: ComponentNode[], name: string, cols: number, description: string, x = 0, y = 0) {
  for (const c of comps) page.appendChild(c); // variants must share the set's page
  const set = figma.combineAsVariants(comps, page);
  set.name = name; set.description = description;
  const gap = 24;
  const colW: number[] = []; const rowH: number[] = [];
  set.children.forEach((ch, i) => { const c = i % cols, r = Math.floor(i / cols); colW[c] = Math.max(colW[c] || 0, ch.width); rowH[r] = Math.max(rowH[r] || 0, ch.height); });
  set.children.forEach((ch, i) => { const c = i % cols, r = Math.floor(i / cols); ch.x = gap + colW.slice(0, c).reduce((a, b) => a + b + gap, 0); ch.y = gap + rowH.slice(0, r).reduce((a, b) => a + b + gap, 0); });
  let mx = 0, my = 0; for (const ch of set.children) { mx = Math.max(mx, ch.x + ch.width); my = Math.max(my, ch.y + ch.height); }
  set.resizeWithoutConstraints(mx + gap, my + gap);
  set.x = x; set.y = y;
  set.strokes = [{ type: 'SOLID', color: { r: 0.592, g: 0.278, b: 1 } }]; set.dashPattern = [6, 4]; set.strokeWeight = 1; set.cornerRadius = 8;
  return set;
}
function own(root: ComponentNode, pred: (n: SceneNode) => boolean): SceneNode[] {
  const out: SceneNode[] = [];
  const walk = (n: SceneNode) => { if (pred(n)) out.push(n); if (n.type !== 'INSTANCE' && 'children' in n) for (const c of (n as FrameNode).children) walk(c); };
  for (const c of root.children) walk(c);
  return out;
}
function linkText(set: ComponentSetNode, prop: string, def: string, nodeName: string) {
  const key = set.addComponentProperty(prop, 'TEXT', def);
  for (const v of set.children) for (const t of own(v as ComponentNode, n => n.type === 'TEXT' && n.name === nodeName)) t.componentPropertyReferences = { characters: key };
}
function linkBool(set: ComponentSetNode, prop: string, def: boolean, nodeName: string) {
  const key = set.addComponentProperty(prop, 'BOOLEAN', def);
  for (const v of set.children) for (const t of own(v as ComponentNode, n => n.name === nodeName)) t.componentPropertyReferences = Object.assign({}, t.componentPropertyReferences, { visible: key });
}
function linkSwap(set: ComponentSetNode, prop: string, defIcon: string, nodeName: string) {
  const def = ICON[defIcon]; if (!def) return;
  const key = set.addComponentProperty(prop, 'INSTANCE_SWAP', def.id, { preferredValues: Object.keys(ICON).filter(k => k.endsWith('/outline')).slice(0, 24).map(k => ({ type: 'COMPONENT' as const, key: ICON[k].key })) });
  for (const v of set.children) for (const t of own(v as ComponentNode, n => n.type === 'INSTANCE' && n.name === nodeName)) t.componentPropertyReferences = Object.assign({}, t.componentPropertyReferences, { mainComponent: key });
}
function focusRing(n: ComponentNode | FrameNode) {
  const ring = (spread: number, token: string): DropShadowEffect => {
    const e: DropShadowEffect = { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 1 }, offset: { x: 0, y: 0 }, radius: 0, spread, visible: true, blendMode: 'NORMAL', showShadowBehindNode: true };
    try { return figma.variables.setBoundVariableForEffect(e, 'color', VARS[token]) as DropShadowEffect; } catch (err) { return e; }
  };
  n.effects = [ring(2, 'bg'), ring(4, 'focus-ring')];
}
// Starter (free) plans allow 3 pages per file. In that case every part becomes a Section on one of three pages.
let LIMITED = false;
const GROUP_PAGES: Record<string, PageNode> = {};
const CURSOR = new Map<PageNode, number>();
const SECTIONS: SectionNode[] = [];
function probePageLimit() {
  const made: PageNode[] = [];
  try { for (let i = 0; i < 3; i++) made.push(figma.createPage()); }
  catch (e) { LIMITED = true; }
  for (const p of made) p.remove();
  if (LIMITED) warn('This Figma plan allows 3 pages per file, so the library is laid out on 3 pages (Cover & Foundations, Assets, Components) with one section per part.');
}
function groupPage(group: string): PageNode {
  if (group === 'Cover & Foundations') return figma.root.children[0];
  if (!GROUP_PAGES[group]) { const p = figma.createPage(); p.name = group; GROUP_PAGES[group] = p; }
  return GROUP_PAGES[group];
}
async function docPage(name: string, title: string, desc: string, group = 'Components'): Promise<Host> {
  let host: Host;
  if (LIMITED) { const s = figma.createSection(); s.name = name; groupPage(group).appendChild(s); host = s; SECTIONS.push(s); }
  else { const page = figma.createPage(); page.name = name; host = page; }
  const head = frame('Header', { dir: 'VERTICAL', gap: 'space-8', fill: null });
  head.counterAxisAlignItems = 'MIN';
  add(head, await text(title, 'heading-1', 'text', 'Title'));
  add(head, await text(desc, 'body-lg', 'text-muted', 'Description', 880));
  host.appendChild(head); head.x = 0; head.y = -40 - head.height;
  return host;
}
// Fit a section around its content and stack it below the previous section on the same page.
function finishHost(host: Host) {
  if (host.type !== 'SECTION') return;
  const kids = host.children as SceneNode[]; if (!kids.length) return;
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const k of kids) { x0 = Math.min(x0, k.x); y0 = Math.min(y0, k.y); x1 = Math.max(x1, k.x + k.width); y1 = Math.max(y1, k.y + k.height); }
  const pad = 80;
  for (const k of kids) { k.x += pad - x0; k.y += pad - y0; }
  host.resizeWithoutConstraints(x1 - x0 + pad * 2, y1 - y0 + pad * 2);
  const page = host.parent as PageNode;
  const y = CURSOR.get(page) || 0;
  host.x = 0; host.y = y; CURSOR.set(page, y + host.height + 200);
}

// ---------- assets ----------
async function buildIcons(page: Host) {
  let x = 0, y = 0, i = 0;
  for (const [name, v] of Object.entries(DATA.icons as Record<string, Record<string, string>>)) {
    for (const variant of ['outline', 'filled'] as const) {
      const svg = figma.createNodeFromSvg(v[variant]);
      svg.rescale(24 / svg.width); // rescale scales the vectors inside; resize would only crop the frame
      const c = figma.createComponent(); c.name = `Icon/${name}/${variant}`; c.resize(24, 24); c.fills = [];
      c.appendChild(svg); svg.x = 0; svg.y = 0; svg.name = 'glyph'; svg.fills = []; svg.constraints = { horizontal: 'SCALE', vertical: 'SCALE' }; for (const d of svg.findAll(() => true)) if ('constraints' in d) (d as ConstraintMixin & SceneNode).constraints = { horizontal: 'SCALE', vertical: 'SCALE' };
      recolor(c, 'icon');
      c.description = `Ionicons ${name} (${variant}). MIT.`;
      page.appendChild(c); c.x = x + (variant === 'filled' ? 32 : 0); c.y = y;
      ICON[`${name}/${variant}`] = c;
    }
    i++; x += 96; if (i % 10 === 0) { x = 0; y += 48; }
  }
  log(`Icons: ${Object.keys(ICON).length}`);
}
async function placeSvgs(page: Host, title: string, svgs: Record<string, string>, y: number, w: number, perRow: number, bg?: string) {
  add(page, await text(title, 'heading-3', 'text', title)).y = y;
  let i = 0;
  for (const [name, svg] of Object.entries(svgs)) {
    const n = figma.createNodeFromSvg(svg); n.name = name;
    n.rescale(w / n.width);
    if (bg) { const f = frame(name, { dir: 'NONE', fill: bg, radius: 'radius-md' }); f.resize(w + 32, n.height + 32); f.appendChild(n); n.x = 16; n.y = 16; page.appendChild(f); f.x = (i % perRow) * (w + 56); f.y = y + 48 + Math.floor(i / perRow) * (n.height + 64); }
    else { page.appendChild(n); n.x = (i % perRow) * (w + 40); n.y = y + 48 + Math.floor(i / perRow) * (n.height + 40); }
    i++;
  }
}

// ---------- foundations ----------
async function buildFoundations(page: Host) {
  const root = frame('Foundations', { dir: 'VERTICAL', gap: 'space-48', fill: 'bg', pad: 'space-48' }); root.counterAxisAlignItems = 'MIN';
  page.appendChild(root);
  // Semantic colours, one column per mode
  add(root, await text('Semantic colours', 'heading-2'));
  const cols = frame('Modes', { gap: 'space-24', fill: null }); cols.counterAxisAlignItems = 'MIN'; add(root, cols);
  const modes: [string, string | undefined][] = [['Light', modeIds.light], ['Dark', modeIds.dark], ['High contrast', modeIds.hc]];
  for (const [label, id] of modes) {
    if (!id) continue;
    const c = frame(label, { dir: 'VERTICAL', gap: 'space-8', fill: 'bg', pad: 'space-24', radius: 'radius-md', stroke: 'border' }); c.counterAxisAlignItems = 'MIN';
    if (colorCollection) c.setExplicitVariableModeForCollection(colorCollection, id);
    add(c, await text(label, 'heading-4'));
    for (const [name] of DATA.sem) {
      const row = frame(name, { gap: 'space-12', fill: null });
      const sw = add(row, figma.createRectangle()); sw.resize(40, 24); sw.fills = [paint(name)]; sw.strokes = [paint('border')]; sw.cornerRadius = 4;
      add(row, await text(name, 'code-sm', 'text'));
      add(c, row);
    }
    add(cols, c);
  }
  // Palette
  add(root, await text('Palette', 'heading-2'));
  const hues = ['gray', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'teal', 'cyan', 'blue', 'indigo', 'violet', 'pink'];
  for (const h of hues) {
    const row = frame(h, { gap: 'space-4', fill: null });
    add(row, await text(h, 'label', 'text', h, 72));
    for (const s of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]) { const r = add(row, figma.createRectangle()); r.name = `${h}-${s}`; r.resize(56, 40); r.cornerRadius = 4; r.fills = [paint(`${h}-${s}`)]; }
    add(root, row);
  }
  // Type
  add(root, await text('Typography', 'heading-2'));
  for (const [, name, , size, lh, weight, , sample] of DATA.type) {
    const row = frame(name, { gap: 'space-24', fill: null }); row.counterAxisAlignItems = 'CENTER';
    add(row, await text(`${name}\n${size}/${lh} · ${weight}`, 'code-sm', 'text-muted', 'spec', 160));
    add(row, await text(sample, name, 'text', 'sample'));
    add(root, row);
  }
  // Spacing + radius
  add(root, await text('Spacing', 'heading-2'));
  for (const [name, value] of DATA.space) {
    const row = frame(name, { gap: 'space-16', fill: null });
    add(row, await text(name, 'code-sm', 'text-muted', name, 96));
    const bar = add(row, figma.createRectangle()); bar.resize(Math.max(value, 1), 16); bar.fills = [paint('action')]; if (value > 0 && FLOATS[name]) { try { bar.setBoundVariable('width', FLOATS[name]); } catch (e) { /* keep fixed width */ } }
    add(root, row);
  }
  add(root, await text('Radius', 'heading-2'));
  const rr = frame('Radii', { gap: 'space-16', fill: null }); add(root, rr);
  for (const [name] of DATA.radius) {
    const b = frame(name, { dir: 'VERTICAL', fill: 'surface', stroke: 'border-strong', strokeW: 2, radius: name, pad: 'space-8', w: 96, h: 96, align: 'MAX' });
    add(b, await text(name, 'code-sm', 'text-muted')); add(rr, b);
  }
  add(root, await text('Elevation', 'heading-2'));
  const er = frame('Shadows', { gap: 'space-24', fill: null, pad: 'space-16' }); add(root, er);
  for (const [name, st] of Object.entries(EFFECT)) {
    const b = frame(name, { dir: 'VERTICAL', fill: 'surface-raised', radius: 'radius-md', w: 160, h: 96, align: 'CENTER', cross: 'CENTER' });
    await b.setEffectStyleIdAsync(st.id); add(b, await text(name, 'code-sm', 'text-muted')); add(er, b);
  }
}

// ---------- components ----------
const BTN_FILL: Record<string, [string | null, string, string | undefined]> = { Primary: ['action', 'on-action', undefined], Secondary: ['surface', 'text', 'border-strong'], Tertiary: ['surface-sunken', 'text', undefined], Ghost: [null, 'text', undefined], Danger: ['danger-solid', 'on-danger-solid', undefined] };
const BTN_HOVER: Record<string, string | null> = { Primary: 'action-hover', Secondary: 'surface-hover', Tertiary: 'surface-pressed', Ghost: 'surface-hover', Danger: 'danger-solid' };
const BTN_PRESS: Record<string, string | null> = { Primary: 'action-pressed', Secondary: 'surface-pressed', Tertiary: 'surface-pressed', Ghost: 'surface-pressed', Danger: 'danger-solid' };
const SIZE: Record<string, { h: number; pad: string; font: string; icon: number; gap: string }> = { sm: { h: 32, pad: 'space-12', font: 'label-sm', icon: 16, gap: 'space-4' }, md: { h: 40, pad: 'space-16', font: 'label', icon: 16, gap: 'space-8' }, lg: { h: 48, pad: 'space-24', font: 'label-lg', icon: 20, gap: 'space-8' } };

async function buildButton(page: Host) {
  const comps: ComponentNode[] = [];
  for (const variant of Object.keys(BTN_FILL)) for (const size of ['sm', 'md', 'lg']) for (const state of ['Default', 'Hover', 'Pressed', 'Focus', 'Disabled']) {
    const [fill, fg, stroke] = BTN_FILL[variant]; const z = SIZE[size];
    const f = state === 'Hover' ? BTN_HOVER[variant] : state === 'Pressed' ? BTN_PRESS[variant] : fill;
    const c = comp(`Variant=${variant}, Size=${size}, State=${state}`, { pad: ['space-0', z.pad], gap: z.gap, fill: f, stroke, radius: 'radius-sm', h: z.h, align: 'CENTER' });
    c.primaryAxisSizingMode = 'AUTO';
    const i1 = add(c, icon('add', 'outline', z.icon, fg)); i1.name = 'Icon start'; i1.visible = false;
    add(c, await text('Button', z.font, fg, 'Label'));
    const i2 = add(c, icon('arrow-forward', 'outline', z.icon, fg)); i2.name = 'Icon end'; i2.visible = false;
    if (state === 'Focus') focusRing(c);
    if (state === 'Disabled') c.opacity = 0.4;
    comps.push(c);
  }
  const set = combine(page, comps, 'Button', 5, 'The one way to trigger an action. Primary (ink) at most once per view. Verb-first, sentence case. Sizes: sm 32 (dense desktop), md 40 (web default), lg 48 (mobile default).');
  linkText(set, 'Label', 'Button', 'Label');
  linkBool(set, 'Show start icon', false, 'Icon start'); linkBool(set, 'Show end icon', false, 'Icon end');
  linkSwap(set, 'Start icon', 'add/outline', 'Icon start'); linkSwap(set, 'End icon', 'arrow-forward/outline', 'Icon end');
  return set;
}
async function buildIconButton(page: Host) {
  const comps: ComponentNode[] = [];
  for (const variant of ['Ghost', 'Secondary', 'Primary']) for (const size of ['sm', 'md', 'lg']) for (const state of ['Default', 'Hover', 'Focus', 'Disabled']) {
    const [fill, fg, stroke] = BTN_FILL[variant]; const z = SIZE[size];
    const c = comp(`Variant=${variant}, Size=${size}, State=${state}`, { fill: state === 'Hover' ? BTN_HOVER[variant] : fill, stroke, radius: 'radius-sm', w: z.h, h: z.h, align: 'CENTER', cross: 'CENTER' });
    add(c, icon('heart', 'outline', size === 'lg' ? 24 : 20, fg)).name = 'Icon';
    if (state === 'Focus') focusRing(c); if (state === 'Disabled') c.opacity = 0.4;
    comps.push(c);
  }
  const set = combine(page, comps, 'IconButton', 4, 'Icon-only button. Always give it an accessible label in code (label prop). lg = 48px touch target.');
  linkSwap(set, 'Icon', 'heart/outline', 'Icon');
  return set;
}
async function field(c: ComponentNode, label: string, inner: FrameNode, helper: string, helperColor: string, error: boolean) {
  add(c, await text(label, 'label', 'text', 'Label'));
  add(c, inner); inner.layoutSizingHorizontal = 'FILL';
  const foot = frame('Helper', { gap: 'space-4', fill: null });
  if (error) add(foot, icon('alert-circle', 'filled', 16, 'danger')).name = 'Error icon';
  add(foot, await text(helper, 'body-sm', helperColor, 'Helper text'));
  add(c, foot);
}
async function buildTextField(page: Host) {
  const comps: ComponentNode[] = [];
  for (const size of ['md', 'lg']) for (const state of ['Default', 'Hover', 'Focus', 'Filled', 'Error', 'Disabled']) {
    const c = comp(`Size=${size}, State=${state}`, { dir: 'VERTICAL', gap: 'space-4', fill: null, w: 320 }); c.counterAxisAlignItems = 'MIN';
    const stroke = state === 'Error' ? 'danger' : state === 'Hover' || state === 'Focus' ? 'text' : state === 'Disabled' ? 'border' : 'border-strong';
    const box = frame('Input', { pad: ['space-0', 'space-12'], gap: 'space-8', fill: state === 'Disabled' ? 'surface-sunken' : 'surface', stroke, strokeW: state === 'Focus' || state === 'Error' ? 2 : 1, radius: 'radius-sm', h: size === 'lg' ? 48 : 40 });
    add(box, icon('search', 'outline', 20, 'icon-muted')).name = 'Icon';
    const value = state === 'Filled' || state === 'Error' ? 'jane@example' : 'Placeholder';
    const t = add(box, await text(value, 'body', state === 'Disabled' ? 'text-disabled' : value === 'Placeholder' ? 'text-subtle' : 'text', 'Value'));
    t.layoutGrow = 1;
    if (state === 'Focus') focusRing(box);
    await field(c, 'Label', box, state === 'Error' ? 'Enter a valid email, like name@example.com' : 'Helper text', state === 'Error' ? 'danger' : 'text-muted', state === 'Error');
    comps.push(c);
  }
  const set = combine(page, comps, 'TextField', 6, 'Single-line input. The label is always visible (never placeholder-only); errors say how to fix it and use an icon, not colour alone. md 40px (web), lg 48px (mobile, 16px text prevents iOS zoom).');
  linkText(set, 'Label', 'Label', 'Label'); linkText(set, 'Value', 'Placeholder', 'Value'); linkText(set, 'Helper', 'Helper text', 'Helper text');
  linkBool(set, 'Show icon', true, 'Icon'); linkBool(set, 'Show helper', true, 'Helper'); linkSwap(set, 'Leading icon', 'search/outline', 'Icon');
  return set;
}
async function buildSelect(page: Host) {
  const comps: ComponentNode[] = [];
  for (const state of ['Default', 'Focus', 'Error', 'Disabled']) {
    const c = comp(`State=${state}`, { dir: 'VERTICAL', gap: 'space-4', fill: null, w: 280 }); c.counterAxisAlignItems = 'MIN';
    const box = frame('Input', { pad: ['space-0', 'space-12'], gap: 'space-8', fill: state === 'Disabled' ? 'surface-sunken' : 'surface', stroke: state === 'Error' ? 'danger' : state === 'Focus' ? 'text' : state === 'Disabled' ? 'border' : 'border-strong', strokeW: state === 'Focus' || state === 'Error' ? 2 : 1, radius: 'radius-sm', h: 40 });
    add(box, await text('Choose…', 'body', state === 'Disabled' ? 'text-disabled' : 'text', 'Value')).layoutGrow = 1;
    add(box, icon('chevron-down', 'outline', 20, 'icon-muted')).name = 'Chevron';
    if (state === 'Focus') focusRing(box);
    await field(c, 'Country', box, state === 'Error' ? 'Choose a country.' : 'Helper text', state === 'Error' ? 'danger' : 'text-muted', state === 'Error');
    comps.push(c);
  }
  const set = combine(page, comps, 'Select', 4, 'Native select. Use for 5–15 known options; use Combobox for long or searchable lists.');
  linkText(set, 'Label', 'Country', 'Label'); linkText(set, 'Value', 'Choose…', 'Value'); linkText(set, 'Helper', 'Helper text', 'Helper text'); linkBool(set, 'Show helper', true, 'Helper');
  return set;
}
async function control(c: ComponentNode, label: string, state: string) {
  const t = add(c, await text(label, 'body', state === 'Disabled' ? 'text-disabled' : 'text', 'Label'));
  return t;
}
async function buildCheckbox(page: Host) {
  const comps: ComponentNode[] = [];
  for (const checked of ['False', 'True', 'Indeterminate']) for (const state of ['Default', 'Hover', 'Focus', 'Error', 'Disabled']) {
    const c = comp(`Checked=${checked}, State=${state}`, { gap: 'space-12', fill: null });
    const on = checked !== 'False';
    const box = frame('Box', { fill: on ? 'action' : 'surface', stroke: state === 'Error' ? 'danger' : on ? 'action' : state === 'Hover' ? 'text' : 'border-strong', strokeW: 2, radius: 'radius-sm', w: 20, h: 20, align: 'CENTER', cross: 'CENTER' });
    if (on) add(box, icon(checked === 'True' ? 'checkmark' : 'remove', 'outline', 16, 'on-action')).name = 'Mark';
    if (state === 'Focus') focusRing(box);
    add(c, box); await control(c, 'Checkbox label', state);
    if (state === 'Disabled') box.opacity = 0.4;
    comps.push(c);
  }
  const set = combine(page, comps, 'Checkbox', 5, 'Independent yes/no choices. 20px box, 2px border-strong (≥3:1); checked = action fill. Indeterminate for “select all”.');
  linkText(set, 'Label', 'Checkbox label', 'Label');
  return set;
}
async function buildRadio(page: Host) {
  const comps: ComponentNode[] = [];
  for (const sel of ['False', 'True']) for (const state of ['Default', 'Focus', 'Error', 'Disabled']) {
    const c = comp(`Selected=${sel}, State=${state}`, { gap: 'space-12', fill: null });
    const ring = frame('Ring', { fill: 'surface', stroke: state === 'Error' ? 'danger' : sel === 'True' ? 'action' : 'border-strong', strokeW: 2, radius: 'radius-full', w: 20, h: 20, align: 'CENTER', cross: 'CENTER' });
    if (sel === 'True') { const d = add(ring, figma.createEllipse()); d.name = 'Dot'; d.resize(10, 10); d.fills = [paint('action')]; }
    if (state === 'Focus') focusRing(ring); if (state === 'Disabled') ring.opacity = 0.4;
    add(c, ring); await control(c, 'Radio label', state);
    comps.push(c);
  }
  const set = combine(page, comps, 'Radio', 4, 'One choice from 2–6 visible options; group in a RadioGroup with a legend. Arrow keys move the selection.');
  linkText(set, 'Label', 'Radio label', 'Label');
  return set;
}
async function buildSwitch(page: Host) {
  const comps: ComponentNode[] = [];
  for (const on of ['False', 'True']) for (const state of ['Default', 'Focus', 'Disabled']) {
    const c = comp(`On=${on}, State=${state}`, { gap: 'space-12', fill: null });
    const isOn = on === 'True';
    const track = frame('Track', { dir: 'NONE', fill: isOn ? 'action' : 'surface', stroke: isOn ? 'action' : 'border-strong', strokeW: 2, radius: 'radius-full', w: 44, h: 24 });
    if (state === 'Disabled') { track.dashPattern = [3, 3]; track.opacity = 0.4; }
    const thumb = add(track, figma.createEllipse()); thumb.name = 'Thumb'; thumb.resize(16, 16); thumb.x = isOn ? 24 : 4; thumb.y = 4;
    if (state === 'Disabled') { thumb.fills = []; thumb.strokes = [paint('border-strong')]; thumb.strokeWeight = 2; } else thumb.fills = [paint(isOn ? 'on-action' : 'border-strong')];
    if (state === 'Focus') focusRing(track);
    add(c, track); await control(c, 'Switch label', state);
    comps.push(c);
  }
  const set = combine(page, comps, 'Switch', 3, 'Instant on/off setting (no Save). Disabled = dashed, dimmed track with a hollow knob so it is never confused with “off”.');
  linkText(set, 'Label', 'Switch label', 'Label');
  return set;
}
const TONES: Record<string, [string, string, string, string, string]> = { Neutral: ['surface-sunken', 'text', 'action', 'on-action', 'border-strong'], Info: ['info-bg', 'info', 'info-solid', 'on-info-solid', 'info-border'], Success: ['success-bg', 'success', 'success-solid', 'on-success-solid', 'success-border'], Warning: ['warning-bg', 'warning', 'warning-solid', 'on-warning-solid', 'warning-border'], Danger: ['danger-bg', 'danger', 'danger-solid', 'on-danger-solid', 'danger-border'] };
const TONE_ICON: Record<string, string> = { Neutral: 'information-circle', Info: 'information-circle', Success: 'checkmark-circle', Warning: 'warning', Danger: 'alert-circle' };
async function buildBadge(page: Host) {
  const comps: ComponentNode[] = [];
  for (const tone of Object.keys(TONES)) for (const style of ['Subtle', 'Solid', 'Outline']) {
    const [bg, fg, solid, on, bd] = TONES[tone];
    const fill = style === 'Subtle' ? bg : style === 'Solid' ? solid : null; const color = style === 'Solid' ? on : fg;
    const c = comp(`Tone=${tone}, Style=${style}`, { pad: ['space-0', 'space-8'], gap: 'space-4', fill, stroke: style === 'Outline' ? bd : undefined, radius: 'radius-sm', h: 24 });
    add(c, icon(TONE_ICON[tone], 'outline', 14, color)).name = 'Icon';
    add(c, await text(tone === 'Neutral' ? 'Draft' : tone, 'label-sm', color, 'Label'));
    comps.push(c);
  }
  const set = combine(page, comps, 'Badge', 3, 'Short, non-interactive status. Always pair colour with a word or icon.');
  linkText(set, 'Label', 'Badge', 'Label'); linkBool(set, 'Show icon', true, 'Icon'); linkSwap(set, 'Icon', 'information-circle/outline', 'Icon');
  return set;
}
async function buildTag(page: Host) {
  const comps: ComponentNode[] = [];
  for (const type of ['Static', 'Removable', 'Selectable', 'Selected', 'Disabled']) {
    const sel = type === 'Selected';
    const c = comp(`Type=${type}`, { pad: ['space-0', 'space-12'], gap: 'space-4', fill: sel ? 'action' : 'surface-sunken', stroke: sel ? 'action' : 'border-strong', radius: 'radius-sm', h: 32 });
    if (sel) add(c, icon('checkmark', 'outline', 14, 'on-action')).name = 'Check';
    add(c, await text('Tag', 'label', sel ? 'on-action' : 'text', 'Label'));
    if (type === 'Removable' || type === 'Disabled') add(c, icon('close', 'outline', 14, 'text')).name = 'Remove';
    if (type === 'Disabled') c.opacity = 0.4;
    comps.push(c);
  }
  const set = combine(page, comps, 'Tag', 5, 'Keyword, filter chip or chosen value. Remove button is its own 32px target named “Remove <tag>”.');
  linkText(set, 'Label', 'Tag', 'Label');
  return set;
}
async function buildAvatar(page: Host) {
  const comps: ComponentNode[] = [];
  for (const type of ['Initials', 'Illustration', 'Icon']) for (const size of [24, 32, 40, 48, 64]) {
    const c = comp(`Type=${type}, Size=${size}`, { fill: type === 'Initials' ? 'blue-100' : type === 'Icon' ? 'gray-100' : null, radius: 'radius-full', w: size, h: size, align: 'CENTER', cross: 'CENTER' });
    c.clipsContent = true;
    if (type === 'Initials') { const t = add(c, await text('AR', 'label', 'blue-800', 'Initials')); t.fontSize = Math.round(size * 0.4); }
    else if (type === 'Icon') add(c, icon('person', 'filled', Math.round(size * 0.55), 'gray-700'));
    else { c.layoutMode = 'NONE'; const a = figma.createNodeFromSvg(DATA.avatars['avatar-01']); a.rescale(size / a.width); a.name = 'Illustration'; c.appendChild(a); a.x = 0; a.y = 0; }
    comps.push(c);
  }
  const set = combine(page, comps, 'Avatar', 5, 'A person: illustration or photo → initials → icon. Always has a name (accessible label). Colour comes from a palette hue (-100 fill, -800 text).');
  return set;
}
async function buildCard(page: Host, button: ComponentSetNode) {
  const comps: ComponentNode[] = [];
  for (const variant of ['Outline', 'Elevated', 'Filled']) {
    const c = comp(`Variant=${variant}`, { dir: 'VERTICAL', fill: variant === 'Filled' ? 'surface-sunken' : 'surface', stroke: variant === 'Outline' ? 'border' : undefined, radius: 'radius-md', w: 320 }); c.counterAxisAlignItems = 'MIN'; c.clipsContent = true;
    if (variant === 'Elevated' && EFFECT['shadow-2']) await c.setEffectStyleIdAsync(EFFECT['shadow-2'].id);
    const body = frame('Body', { dir: 'VERTICAL', gap: 'space-8', pad: 'space-16', fill: null }); body.counterAxisAlignItems = 'MIN';
    add(body, await text('Card title', 'heading-5', 'text', 'Title'));
    add(body, await text('Supporting text that explains what this card is about.', 'body-sm', 'text-muted', 'Body', 288));
    add(c, body); body.layoutSizingHorizontal = 'FILL';
    const foot = frame('Footer', { gap: 'space-8', pad: ['space-12', 'space-16'], fill: null, stroke: 'border' }); foot.strokeTopWeight = 1; foot.strokeBottomWeight = 0; foot.strokeLeftWeight = 0; foot.strokeRightWeight = 0;
    const b = variantOf(button, { Variant: 'Primary', Size: 'sm', State: 'Default' }).createInstance(); add(foot, b);
    add(c, foot); foot.layoutSizingHorizontal = 'FILL';
    comps.push(c);
  }
  const set = combine(page, comps, 'Card', 3, 'Groups content about one subject. Outline by default; elevated for floating content. Whole-card links use one stretched title link.');
  linkText(set, 'Title', 'Card title', 'Title'); linkText(set, 'Body', 'Supporting text that explains what this card is about.', 'Body'); linkBool(set, 'Show footer', true, 'Footer');
  return set;
}
async function buildAlert(page: Host) {
  const comps: ComponentNode[] = [];
  for (const tone of ['Info', 'Success', 'Warning', 'Danger', 'Neutral']) {
    const [bg, fg, , , bd] = TONES[tone];
    const c = comp(`Tone=${tone}`, { gap: 'space-12', pad: ['space-12', 'space-16'], fill: tone === 'Neutral' ? 'surface-sunken' : bg, stroke: tone === 'Neutral' ? 'border' : bd, radius: 'radius-md', w: 480 }); c.counterAxisAlignItems = 'MIN';
    add(c, icon(TONE_ICON[tone], 'filled', 20, tone === 'Neutral' ? 'icon' : fg)).name = 'Icon';
    const body = frame('Content', { dir: 'VERTICAL', gap: 'space-4', fill: null }); body.counterAxisAlignItems = 'MIN';
    add(body, await text(`${tone} title`, 'label-lg', 'text', 'Title'));
    add(body, await text('Explain what happened and what to do next.', 'body-sm', 'text', 'Body', 380));
    add(c, body); body.layoutGrow = 1;
    add(c, icon('close', 'outline', 20, 'icon')).name = 'Dismiss';
    comps.push(c);
  }
  const set = combine(page, comps, 'Alert', 1, 'Inline, persistent message. Each tone has its own icon so meaning never relies on colour.');
  linkText(set, 'Title', 'Title', 'Title'); linkText(set, 'Body', 'Explain what happened and what to do next.', 'Body'); linkBool(set, 'Dismissible', true, 'Dismiss');
  return set;
}
async function buildToast(page: Host) {
  const comps: ComponentNode[] = [];
  for (const tone of ['Neutral', 'Success', 'Danger']) {
    const c = comp(`Tone=${tone}`, { gap: 'space-12', pad: ['space-12', 'space-16'], fill: 'surface-inverse', radius: 'radius-md', w: 360 }); c.counterAxisAlignItems = 'MIN';
    if (EFFECT['shadow-3']) await c.setEffectStyleIdAsync(EFFECT['shadow-3'].id);
    const ic = add(c, icon(TONE_ICON[tone], 'filled', 20, tone === 'Success' ? 'green-300' : tone === 'Danger' ? 'red-300' : 'text-inverse')); ic.name = 'Icon'; ic.visible = tone !== 'Neutral';
    const body = frame('Content', { dir: 'VERTICAL', gap: 'space-4', fill: null }); body.counterAxisAlignItems = 'MIN';
    add(body, await text(tone === 'Danger' ? 'Message not sent' : tone === 'Success' ? 'Project created' : 'Link copied', 'label', 'text-inverse', 'Title'));
    add(body, await text('Optional description.', 'body-sm', 'text-inverse', 'Description', 220));
    add(c, body); body.layoutGrow = 1;
    add(c, await text('Undo', 'label', 'text-inverse', 'Action')).textDecoration = 'UNDERLINE';
    add(c, icon('close', 'outline', 20, 'text-inverse')).name = 'Dismiss';
    comps.push(c);
  }
  const set = combine(page, comps, 'Toast', 3, 'Brief, non-blocking confirmation. Auto-hides after 5s unless it has an action; pauses on hover/focus; swipe to dismiss.');
  linkText(set, 'Title', 'Title', 'Title'); linkText(set, 'Description', 'Optional description.', 'Description'); linkText(set, 'Action', 'Undo', 'Action');
  linkBool(set, 'Show description', true, 'Description'); linkBool(set, 'Show action', true, 'Action');
  return set;
}
async function buildTabs(page: Host) {
  const comps: ComponentNode[] = [];
  for (const state of ['Selected', 'Default', 'Hover', 'Disabled']) {
    const c = comp(`State=${state}`, { dir: 'VERTICAL', fill: state === 'Hover' ? 'surface-hover' : null, h: 48, align: 'SPACE_BETWEEN' }); c.counterAxisAlignItems = 'CENTER';
    const row = frame('Content', { gap: 'space-8', pad: ['space-12', 'space-12'], fill: null });
    add(row, icon('home', state === 'Selected' ? 'filled' : 'outline', 20, state === 'Disabled' ? 'text-disabled' : state === 'Selected' ? 'text' : 'text-muted')).name = 'Icon';
    add(row, await text('Tab', 'label', state === 'Disabled' ? 'text-disabled' : state === 'Selected' ? 'text' : 'text-muted', 'Label'));
    add(c, row);
    const ink = add(c, figma.createRectangle()); ink.name = 'Ink'; ink.resize(40, 3); ink.fills = state === 'Selected' ? [paint('action')] : []; ink.layoutAlign = 'STRETCH';
    comps.push(c);
  }
  const set = combine(page, comps, 'Tab', 4, 'One tab. Compose in a row over a 1px border; the selected tab has the ink bar and a filled icon. Arrow keys move and select.');
  linkText(set, 'Label', 'Tab', 'Label'); linkBool(set, 'Show icon', false, 'Icon'); linkSwap(set, 'Icon', 'home/outline', 'Icon');
  // Example bar
  const bar = comp('Tabs', { gap: 'space-8', fill: null, stroke: 'border' }); bar.strokeTopWeight = 0; bar.strokeLeftWeight = 0; bar.strokeRightWeight = 0; bar.strokeBottomWeight = 1; bar.counterAxisAlignItems = 'MAX';
  const labels = ['Overview', 'Files', 'Settings', 'Archive'];
  labels.forEach((l, i) => { const t = variantOf(set, { State: i === 0 ? 'Selected' : i === 3 ? 'Disabled' : 'Default' }).createInstance(); add(bar, t); });
  bar.description = 'Example tab bar built from Tab instances.';
  page.appendChild(bar); bar.x = 0; bar.y = set.y + set.height + 64;
  return set;
}
async function buildModal(page: Host, button: ComponentSetNode) {
  const comps: ComponentNode[] = [];
  for (const size of ['sm', 'md']) for (const kind of ['Dialog', 'Destructive']) {
    const c = comp(`Size=${size}, Kind=${kind}`, { dir: 'VERTICAL', fill: 'surface-raised', radius: 'radius-md', w: size === 'sm' ? 400 : 560 }); c.counterAxisAlignItems = 'MIN';
    if (EFFECT['shadow-4']) await c.setEffectStyleIdAsync(EFFECT['shadow-4'].id);
    const head = frame('Header', { gap: 'space-16', pad: ['space-24', 'space-24'], fill: null }); head.counterAxisAlignItems = 'MIN';
    const tt = frame('Titles', { dir: 'VERTICAL', gap: 'space-4', fill: null }); tt.counterAxisAlignItems = 'MIN';
    add(tt, await text(kind === 'Destructive' ? 'Delete project?' : 'Dialog title', 'heading-3', 'text', 'Title'));
    add(tt, await text(kind === 'Destructive' ? 'This project and its 24 files will be permanently deleted.' : 'A short description of what this dialog is for.', 'body', 'text-muted', 'Description', size === 'sm' ? 304 : 464));
    add(head, tt); tt.layoutGrow = 1; add(head, icon('close', 'outline', 20, 'icon')).name = 'Close';
    add(c, head); head.layoutSizingHorizontal = 'FILL';
    const foot = frame('Footer', { gap: 'space-8', pad: ['space-16', 'space-24'], fill: null, align: 'MAX' });
    add(foot, variantOf(button, { Variant: 'Secondary', Size: 'md', State: 'Default' }).createInstance());
    add(foot, variantOf(button, { Variant: kind === 'Destructive' ? 'Danger' : 'Primary', Size: 'md', State: 'Default' }).createInstance());
    add(c, foot); foot.layoutSizingHorizontal = 'FILL';
    comps.push(c);
  }
  const set = combine(page, comps, 'Modal', 2, 'Blocking dialog. Focus is trapped, Esc closes, focus returns to the trigger. Use Destructive (alertdialog) for irreversible actions; secondary first, primary last.');
  linkText(set, 'Title', 'Dialog title', 'Title'); linkText(set, 'Description', 'A short description of what this dialog is for.', 'Description');
  return set;
}

// ---------- cover ----------
type AnyComp = ComponentSetNode | ComponentNode;
function collectSets(): Record<string, AnyComp> {
  const out: Record<string, AnyComp> = {};
  for (const n of figma.root.findAllWithCriteria({ types: ['COMPONENT_SET'] })) out[n.name] = n;
  for (const n of figma.root.findAllWithCriteria({ types: ['COMPONENT'] })) if (n.name === 'Tabs' && n.parent && n.parent.type !== 'COMPONENT_SET') out['Tabs'] = n;
  return out;
}
function propKey(i: InstanceNode, name: string) { return Object.keys(i.componentProperties).find(k => k.split('#')[0] === name); }
function inst(sets: Record<string, AnyComp>, name: string, variant?: Record<string, string>, props?: Record<string, string | boolean>): InstanceNode | null {
  const s = sets[name]; if (!s) { warn(`cover: missing component ${name}`); return null; }
  let c: ComponentNode;
  try { c = s.type === 'COMPONENT_SET' ? variantOf(s, variant || {}) : s; } catch (e: any) { warn('cover: ' + e.message); return null; }
  const i = c.createInstance();
  if (props) { const p: Record<string, string | boolean> = {}; for (const [k, v] of Object.entries(props)) { const key = propKey(i, k); if (key) p[key] = v; } try { if (Object.keys(p).length) i.setProperties(p); } catch (e: any) { warn('cover props: ' + e.message); } }
  return i;
}
function put(parent: FrameNode, n: SceneNode | null) { if (n) parent.appendChild(n); return n; }
// Rebuilds the Cover frame from live instances of the library's own components, so it follows the variables.
async function buildCover(page: PageNode, sets: Record<string, AnyComp>) {
  page.children.filter(n => n.name === 'Cover').forEach(n => n.remove());
  const f = frame('Cover', { dir: 'HORIZONTAL', gap: 'space-64', pad: 'space-80', fill: 'bg', w: 1440, h: 960, cross: 'CENTER' });
  page.appendChild(f); f.x = 0; f.y = 0;
  // Left: identity
  const L = frame('Intro', { dir: 'VERTICAL', gap: 'space-24', fill: null, w: 600 }); L.counterAxisAlignItems = 'MIN'; f.appendChild(L);
  const logo = figma.createNodeFromSvg(DATA.logos['module-aa-nad-horizontal']); logo.name = 'Logo'; logo.rescale(64 / logo.height); L.appendChild(logo);
  add(L, await text('OPEN-SOURCE DESIGN SYSTEM · V1.2', 'overline', 'text-muted', 'Eyebrow'));
  const t = add(L, await text('Design\nSystem.', 'display-xl', 'text', 'Title')); t.fontSize = 120; t.lineHeight = { unit: 'PIXELS', value: 112 }; t.letterSpacing = { unit: 'PERCENT', value: -4 };
  add(L, await text('A universal, monochrome, accessibility-first design system for web and mobile — written so designers, developers and AI agents can all follow it.', 'body-lg', 'text-muted', 'Tagline', 560));
  const chips = frame('Highlights', { gap: 'space-8', fill: null, w: 600 }); chips.layoutWrap = 'WRAP'; chips.counterAxisSpacing = 8; L.appendChild(chips);
  for (const c of ['Variables · 3 modes', '15 components', '98 icons', 'WCAG AA / AAA', 'Open source']) {
    const ch = frame(c, { pad: ['space-4', 'space-12'], fill: 'surface', stroke: 'text', strokeW: 1.5, radius: 'radius-sm' }); ch.appendChild(await text(c, 'code-sm', 'text')); chips.appendChild(ch);
  }
  const brand = frame('Brand ramp', { dir: 'VERTICAL', gap: 'space-8', fill: null }); brand.counterAxisAlignItems = 'MIN'; L.appendChild(brand);
  const ramp = frame('Swatches', { gap: 'space-4', fill: null }); brand.appendChild(ramp);
  for (const [n] of DATA.alias) { const r = figma.createRectangle(); r.name = n; r.resize(40, 40); r.cornerRadius = 4; r.fills = [paint(n)]; r.strokes = [paint('border')]; ramp.appendChild(r); }
  add(brand, await text('brand/primary — swap these 11 variables to recolour every component.', 'code-sm', 'text-muted', 'Ramp note', 560));
  add(L, await text('github.com/Yogesh2806/Aa-NAD-Design-System · MIT + CC BY 4.0', 'code-sm', 'text-subtle', 'Meta'));
  // Right: live component showcase
  const S = frame('Showcase', { dir: 'VERTICAL', gap: 'space-24', pad: 'space-40', fill: 'surface-sunken', radius: 'radius-lg', align: 'CENTER' }); S.counterAxisAlignItems = 'MIN';
  f.appendChild(S); S.layoutGrow = 1; S.layoutAlign = 'STRETCH';
  const row = (name: string, cross: 'MIN' | 'CENTER' | 'MAX' = 'CENTER') => { const r = frame(name, { gap: 'space-16', fill: null, cross }); S.appendChild(r); return r; };
  const r1 = row('Card & controls', 'MIN');
  const card = put(r1, inst(sets, 'Card', { Variant: 'Elevated' }, { Title: 'Release 1.2', Body: 'Tokens, components and docs — shipped together.' }));
  const ctr = frame('Controls', { dir: 'VERTICAL', gap: 'space-16', fill: null }); ctr.counterAxisAlignItems = 'MIN'; r1.appendChild(ctr);
  put(ctr, inst(sets, 'Switch', { On: 'True', State: 'Default' }, { Label: 'Dark mode' }));
  put(ctr, inst(sets, 'Switch', { On: 'False', State: 'Default' }, { Label: 'High contrast' }));
  put(ctr, inst(sets, 'Checkbox', { Checked: 'True', State: 'Default' }, { Label: 'Use my brand colour' }));
  put(ctr, inst(sets, 'Radio', { Selected: 'True', State: 'Default' }, { Label: 'Monthly billing' }));
  const r2 = row('Buttons');
  put(r2, inst(sets, 'Button', { Variant: 'Primary', Size: 'md', State: 'Default' }, { Label: 'Get started', 'Show end icon': true }));
  put(r2, inst(sets, 'Button', { Variant: 'Secondary', Size: 'md', State: 'Default' }, { Label: 'Read the docs' }));
  put(r2, inst(sets, 'Button', { Variant: 'Ghost', Size: 'md', State: 'Default' }, { Label: 'Figma' }));
  put(r2, inst(sets, 'IconButton', { Variant: 'Secondary', Size: 'md', State: 'Default' }));
  const r3 = row('Badges & tags');
  put(r3, inst(sets, 'Badge', { Tone: 'Success', Style: 'Solid' }, { Label: 'Live' }));
  put(r3, inst(sets, 'Badge', { Tone: 'Info', Style: 'Subtle' }, { Label: 'In review' }));
  put(r3, inst(sets, 'Badge', { Tone: 'Warning', Style: 'Outline' }, { Label: 'Beta' }));
  put(r3, inst(sets, 'Tag', { Type: 'Selected' }, { Label: 'Design' }));
  put(r3, inst(sets, 'Tag', { Type: 'Removable' }, { Label: 'Tokens' }));
  const r4 = row('Field & people', 'MAX');
  put(r4, inst(sets, 'TextField', { Size: 'md', State: 'Focus' }, { Label: 'Email', Value: 'you@company.com', Helper: 'We never share it.' }));
  for (const ty of ['Initials', 'Illustration', 'Icon']) put(r4, inst(sets, 'Avatar', { Type: ty, Size: '48' }));
  const r5 = row('Tabs'); put(r5, inst(sets, 'Tabs'));
  const r6 = row('Alert'); put(r6, inst(sets, 'Alert', { Tone: 'Success' }, { Title: 'Library ready', Body: '207 variables, 22 styles and 15 component sets, all bound to tokens.', Dismissible: false }));
  return f;
}
async function loadExisting() {
  await figma.loadAllPagesAsync();
  const vars = await figma.variables.getLocalVariablesAsync();
  const cols = await figma.variables.getLocalVariableCollectionsAsync();
  const colName = (v: Variable) => { const c = cols.find(c => c.id === v.variableCollectionId); return c ? c.name : ''; };
  const find = (coll: string, name: string) => vars.find(v => v.name === name && colName(v) === coll);
  for (const [n] of DATA.prim) { const v = find('Primitives', 'color/' + primName(n)); if (v) VARS[n] = v; }
  for (const [n] of DATA.alias) { const v = find('Primitives', 'brand/' + primName(n)); if (v) VARS[n] = v; }
  for (const [n] of DATA.sem) { const v = find('Color', semName(n)); if (v) VARS[n] = v; }
  colorCollection = cols.find(c => c.name === 'Color') || null;
  for (const [n] of DATA.space) { const v = find('Spacing', 'space/' + n.replace('space-', '')); if (v) FLOATS[n] = v; }
  for (const [n] of DATA.radius) { const v = find('Radius', 'radius/' + n.replace('radius-', '')); if (v) FLOATS[n] = v; }
  for (const st of await figma.getLocalTextStylesAsync()) TEXT[st.name.split('/').pop() as string] = st;
  for (const st of await figma.getLocalEffectStylesAsync()) EFFECT[st.name.split('/').pop() as string] = st;
  for (const c of figma.root.findAllWithCriteria({ types: ['COMPONENT'] })) if (c.name.startsWith('Icon/')) ICON[c.name.slice(5)] = c;
}
// Repairs files built by v1.2.0, where SVG frames were resized without scaling their vectors and wrapped text had a fixed height.
function repairSvg(node: FrameNode, svg: string): boolean {
  const kids = node.children as SceneNode[]; if (!kids.length) return false;
  let ext = 0; for (const k of kids) ext = Math.max(ext, k.x + k.width, k.y + k.height);
  if (ext <= Math.max(node.width, node.height) * 1.2) return false; // already scaled
  const tmp = figma.createNodeFromSvg(svg); const w0 = tmp.width; tmp.remove();
  const s = node.width / w0;
  for (const k of kids) { k.x *= s; k.y *= s; if ('rescale' in k) (k as any).rescale(s); }
  return true;
}
function insideInstance(n: BaseNode) { let p = n.parent; while (p) { if (p.type === 'INSTANCE') return true; p = p.parent; } return false; }
async function repairFile() {
  let svgs = 0, texts = 0;
  for (const [key, c] of Object.entries(ICON)) {
    const [name, variant] = key.split('/'); const g = c.children.find(n => n.name === 'glyph') as FrameNode | undefined;
    const src = (DATA.icons as any)[name] && (DATA.icons as any)[name][variant];
    if (g && g.width > c.width * 1.2) { g.rescale(c.width / g.width); g.x = 0; g.y = 0; svgs++; } // glyph frame never shrank
    else if (g && src && repairSvg(g, src)) svgs++;
    // v1.2.0 shrank icon shapes but kept the 512-grid stroke (32px) — scale strokes to the 24px icon (1.5px).
    if (g) for (const v of g.findAll(n => 'strokeWeight' in n) as (SceneNode & MinimalStrokesMixin)[]) {
      const w = v.strokeWeight; if (typeof w === 'number' && w > c.width / 8) { v.strokeWeight = w * c.width / 512; svgs++; }
    }
  }
  const pools: Record<string, string>[] = [DATA.logos, DATA.illus, DATA.avatars];
  for (const n of figma.root.findAllWithCriteria({ types: ['FRAME'] })) {
    if (insideInstance(n)) continue;
    let src: string | undefined;
    for (const pool of pools) if (pool[n.name]) src = pool[n.name];
    if (n.name === 'Illustration' && n.parent && n.parent.type === 'COMPONENT') src = DATA.avatars['avatar-01'];
    const par = n.parent as (FrameNode | ComponentNode) | null;
    if (src && n.name === 'Illustration' && par && par.type === 'COMPONENT' && n.width > par.width * 1.2) { n.rescale(par.width / n.width); n.x = 0; n.y = 0; svgs++; }
    else if (src && repairSvg(n, src)) svgs++;
  }
  for (const t of figma.root.findAllWithCriteria({ types: ['TEXT'] })) {
    if (t.textAutoResize !== 'NONE' || insideInstance(t)) continue;
    if (t.fontName !== figma.mixed) await figma.loadFontAsync(t.fontName as FontName);
    t.textAutoResize = 'HEIGHT'; texts++;
  }
  log(`Repaired ${svgs} vector frames and ${texts} text boxes`);
  return svgs + texts;
}
async function rebuildCover() {
  await setupFonts();
  await loadExisting();
  if (!VARS['bg']) { figma.closePlugin('No Aa NAD library in this file — run "Build library" first.'); return; }
  const fixed = await repairFile();
  const cover = figma.root.children[0];
  await figma.setCurrentPageAsync(cover);
  const f = await buildCover(cover, collectSets());
  figma.viewport.scrollAndZoomIntoView([f]);
  figma.closePlugin('Cover rebuilt from live component instances' + (fixed ? `; repaired ${fixed} icons, vectors and text boxes` : '') + '.' + (issues.length ? ` ${issues.length} note(s) in the console.` : ''));
}

// ---------- main ----------
const CANVAS: Paint[] = [{ type: 'SOLID', color: { r: 0.957, g: 0.957, b: 0.957 } }];
function lightCanvas() { for (const p of figma.root.children) p.backgrounds = CANVAS; }
async function main() {
  if (figma.command === 'cover') return rebuildCover();
  // Re-running on a file that already holds the library only refreshes page backgrounds; it never builds a duplicate.
  if (figma.root.children.some(p => p.name === 'Foundations' || p.name === 'Cover & Foundations')) {
    lightCanvas();
    figma.closePlugin('Aa NAD library is already in this file — refreshed page backgrounds. Run in an empty file to build a new copy.');
    return;
  }
  figma.notify('Aa NAD: building the library… this takes about a minute.', { timeout: 60000 });
  await setupFonts();
  await buildVariables();
  await buildStyles();
  probePageLimit();
  const cover = figma.root.children[0]; cover.name = LIMITED ? 'Cover & Foundations' : 'Cover';
  if (LIMITED) CURSOR.set(cover, 1160);
  const found = await docPage('Foundations', 'Foundations', 'Colour (three modes), palette, typography, spacing, radius and elevation, all bound to variables.', 'Cover & Foundations');
  const iconsPage = await docPage('Icons', 'Icons', 'Ionicons 8 (MIT), outline for rest and filled for active states. Each icon is a component; swap them through the Icon properties on components.', 'Assets');
  await buildIcons(iconsPage); finishHost(iconsPage);
  const assets = await docPage('Logo & illustrations', 'Logo, illustrations, avatars', 'Module Aa logo, 15 line illustrations and 8 illustrated avatars as editable vectors. CC BY 4.0.', 'Assets');
  await placeSvgs(assets, 'Logo', Object.fromEntries(Object.entries(DATA.logos as Record<string, string>).filter(([k]) => !/white|reversed/.test(k))), 0, 240, 4);
  await placeSvgs(assets, 'Logo on dark', Object.fromEntries(Object.entries(DATA.logos as Record<string, string>).filter(([k]) => /white|reversed/.test(k))), 560, 240, 4, 'gray-950');
  await placeSvgs(assets, 'Illustrations', DATA.illus, 900, 320, 4);
  await placeSvgs(assets, 'Avatars', DATA.avatars, 2400, 96, 8); finishHost(assets);
  try { await buildFoundations(found); } catch (e: any) { warn('Foundations page: ' + e.message); }
  finishHost(found);
  if (!LIMITED) { const sep = figma.createPage(); sep.name = '———  COMPONENTS  ———'; }
  const builders: [string, string, (p: Host, b?: any) => Promise<ComponentSetNode>][] = [
    ['Button', 'Primary, secondary, tertiary, ghost and danger × 3 sizes × 5 states.', buildButton],
    ['IconButton', 'Icon-only buttons; always labelled in code.', buildIconButton],
    ['TextField', 'Text input with label, helper, error and icon.', buildTextField],
    ['Select', 'Native select field.', buildSelect],
    ['Checkbox', 'Checked, unchecked and indeterminate.', buildCheckbox],
    ['Radio', 'Single choice within a group.', buildRadio],
    ['Switch', 'Instant on/off settings.', buildSwitch],
    ['Badge', 'Status in five tones and three styles.', buildBadge],
    ['Tag', 'Keywords, filter chips, chosen values.', buildTag],
    ['Avatar', 'Initials, illustration or icon in five sizes.', buildAvatar],
    ['Card', 'Outline, elevated, filled.', buildCard],
    ['Alert', 'Inline messages in five tones.', buildAlert],
    ['Toast', 'Brief confirmations on the inverse surface.', buildToast],
    ['Tabs', 'Tab items and an example bar.', buildTabs],
    ['Modal', 'Dialogs and destructive confirmations.', buildModal],
  ];
  let button: ComponentSetNode | undefined; let done = 0;
  for (const [name, desc, fn] of builders) {
    try {
      const page = await docPage(name, name, desc);
      const set = await fn(page, button);
      if (name === 'Button') button = set;
      finishHost(page);
      done++;
    } catch (e: any) { warn(`${name}: ${e.message}`); }
  }
  try { await buildCover(cover, collectSets()); } catch (e: any) { warn('Cover: ' + e.message); }
  lightCanvas();
  await figma.setCurrentPageAsync(cover);
  const msg = `Aa NAD library built: ${Object.keys(VARS).length + Object.keys(FLOATS).length} variables, ${Object.keys(TEXT).length} text styles, ${Object.keys(ICON).length} icons, ${done}/15 components.` + (issues.length ? ` ${issues.length} note(s) — see the console (Plugins → Development → Show/Hide console).` : '');
  figma.closePlugin(msg);
}
main().catch(e => { console.error(e); figma.closePlugin('Aa NAD failed: ' + (e && e.message ? e.message : e)); });
