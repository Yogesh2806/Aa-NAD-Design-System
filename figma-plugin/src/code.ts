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
  for (const n of figma.root.findAllWithCriteria({ types: ['COMPONENT'] })) if (!n.name.startsWith('Icon/') && n.parent && n.parent.type !== 'COMPONENT_SET' && !out[n.name]) out[n.name] = n;
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
// ---------- more components (v1.3) ----------
// Each builder adds one page. All fills, strokes, spacing and radii are bound to the same variables as the core 15.
type Sets = Record<string, AnyComp>;
const vcol = (name: string, gap = 'space-8', o: FrameOpts = {}) => { const f = frame(name, Object.assign({ dir: 'VERTICAL', gap, fill: null }, o)); f.counterAxisAlignItems = 'MIN'; return f; };
const hrow = (name: string, gap = 'space-8', o: FrameOpts = {}) => frame(name, Object.assign({ gap, fill: null }, o));
function rect(name: string, w: number, h: number, fill: string, r = 4) { const x = figma.createRectangle(); x.name = name; x.resize(w, h); x.cornerRadius = r; x.fills = [paint(fill)]; return x; }
function fillW(n: SceneNode) { (n as FrameNode).layoutSizingHorizontal = 'FILL'; }
function swapIcon(name: string) { const c = ICON[`${name}/outline`]; return c ? c.id : undefined; }
function iconBtn(sets: Sets, name: string, variant = 'Ghost', size = 'md') { const id = swapIcon(name); return inst(sets, 'IconButton', { Variant: variant, Size: size, State: 'Default' }, id ? { Icon: id } : undefined); }
async function setInstText(i: InstanceNode, nodeName: string, value: string) { const t = i.findOne(n => n.type === 'TEXT' && n.name === nodeName) as TextNode | null; if (!t) return; if (t.fontName !== figma.mixed) await figma.loadFontAsync(t.fontName as FontName); t.characters = value; }
function put2(p: FrameNode | ComponentNode, n: SceneNode | null) { if (n) p.appendChild(n); return n; }
async function fieldLabel(c: ComponentNode | FrameNode, label: string) { add(c, await text(label, 'label', 'text', 'Label')); }
async function helper(c: ComponentNode | FrameNode, msg: string, error = false) {
  const f = hrow('Helper', 'space-4'); if (error) add(f, icon('alert-circle', 'filled', 16, 'danger')).name = 'Error icon';
  add(f, await text(msg, 'body-sm', error ? 'danger' : 'text-muted', 'Helper text')); add(c, f); return f;
}
function inputBox(state: string, h = 40) {
  const stroke = state === 'Error' ? 'danger' : state === 'Focus' || state === 'Open' ? 'text' : state === 'Disabled' ? 'border' : 'border-strong';
  const b = frame('Input', { pad: ['space-0', 'space-12'], gap: 'space-8', fill: state === 'Disabled' ? 'surface-sunken' : 'surface', stroke, strokeW: state === 'Focus' || state === 'Error' || state === 'Open' ? 2 : 1, radius: 'radius-sm', h });
  if (state === 'Focus' || state === 'Open') focusRing(b);
  return b;
}
async function listPanel(items: string[], selected: number, highlight: number, check = true) {
  const p = vcol('Listbox', 'space-0', { fill: 'surface-raised', stroke: 'border', radius: 'radius-sm', pad: ['space-4', 'space-0'] });
  if (EFFECT['shadow-3']) await p.setEffectStyleIdAsync(EFFECT['shadow-3'].id);
  for (let i = 0; i < items.length; i++) {
    const r = hrow('Option', 'space-8', { pad: ['space-8', 'space-12'], fill: i === highlight ? 'surface-hover' : null, cross: 'CENTER' });
    const t = add(r, await text(items[i], 'body', 'text', 'Option label')); t.layoutGrow = 1;
    if (check && i === selected) add(r, icon('checkmark', 'outline', 16, 'text')).name = 'Check';
    add(p, r); fillW(r);
  }
  return p;
}

async function buildLink(page: Host) {
  const comps: ComponentNode[] = [];
  for (const v of ['Inline', 'Standalone', 'External']) for (const s of ['Default', 'Hover', 'Focus', 'Disabled']) {
    const c = comp(`Variant=${v}, State=${s}`, { gap: 'space-4', fill: null, cross: 'CENTER' });
    const color = s === 'Disabled' ? 'text-disabled' : 'link';
    const t = add(c, await text(v === 'Inline' ? 'Read the guide' : v === 'External' ? 'Open on GitHub' : 'View all components', v === 'Inline' ? 'body' : 'label', color, 'Label'));
    if (s !== 'Disabled') t.textDecoration = 'UNDERLINE';
    if (v !== 'Inline') add(c, icon(v === 'External' ? 'share-social' : 'arrow-forward', 'outline', 16, color)).name = 'Icon';
    if (s === 'Focus') focusRing(c);
    comps.push(c);
  }
  const set = combine(page, comps, 'Link', 4, 'Navigates somewhere. Inline links sit in text and are always underlined; standalone links get an arrow; external links say where they go.');
  return set;
}
async function buildTextArea(page: Host) {
  const comps: ComponentNode[] = [];
  for (const s of ['Default', 'Focus', 'Filled', 'Error', 'Disabled']) {
    const c = comp(`State=${s}`, { dir: 'VERTICAL', gap: 'space-4', fill: null, w: 320 }); c.counterAxisAlignItems = 'MIN';
    await fieldLabel(c, 'Message');
    const b = inputBox(s, 120); b.layoutMode = 'VERTICAL'; b.primaryAxisSizingMode = 'FIXED'; b.resize(320, 120); b.paddingTop = 10; b.paddingBottom = 10; b.counterAxisAlignItems = 'MIN'; b.primaryAxisAlignItems = 'MIN';
    const filled = s === 'Filled' || s === 'Error';
    add(b, await text(filled ? 'Loved the new tokens — could we add a warning-subtle background?' : 'Tell us what you think…', 'body', s === 'Disabled' ? 'text-disabled' : filled ? 'text' : 'text-subtle', 'Value', 296));
    add(c, b); fillW(b);
    const foot = hrow('Footer', 'space-8', { w: 320 }); foot.primaryAxisAlignItems = 'SPACE_BETWEEN';
    await helper(foot, s === 'Error' ? 'Keep it under 200 characters.' : 'Optional', s === 'Error');
    add(foot, await text(s === 'Error' ? '212/200' : filled ? '64/200' : '0/200', 'code-sm', s === 'Error' ? 'danger' : 'text-muted', 'Count'));
    add(c, foot); fillW(foot);
    comps.push(c);
  }
  const set = combine(page, comps, 'TextArea', 5, 'Multi-line input with a live character count. Grows with content; the label is always visible.');
  linkText(set, 'Label', 'Message', 'Label');
  return set;
}
async function buildCombobox(page: Host) {
  const comps: ComponentNode[] = [];
  for (const s of ['Default', 'Focus', 'Open', 'Error', 'Disabled']) {
    const c = comp(`State=${s}`, { dir: 'VERTICAL', gap: 'space-4', fill: null, w: 320 }); c.counterAxisAlignItems = 'MIN';
    await fieldLabel(c, 'Country');
    const b = inputBox(s); add(b, icon('search', 'outline', 20, 'icon-muted')).name = 'Icon';
    add(b, await text(s === 'Open' ? 'In' : 'Search countries', 'body', s === 'Open' ? 'text' : s === 'Disabled' ? 'text-disabled' : 'text-subtle', 'Value')).layoutGrow = 1;
    const ch = add(b, icon('chevron-down', 'outline', 20, 'icon-muted')); ch.name = 'Chevron'; if (s === 'Open') ch.rotation = 180;
    add(c, b); fillW(b);
    if (s === 'Open') { const l = await listPanel(['India', 'Indonesia', 'Ireland', 'Iceland'], 0, 1); add(c, l); fillW(l); }
    else await helper(c, s === 'Error' ? 'Choose a country from the list.' : 'Type to filter 195 countries', s === 'Error');
    comps.push(c);
  }
  const set = combine(page, comps, 'Combobox', 5, 'Searchable select for long lists. ↓↑ to move, Enter to choose, Esc to close; the result count is announced.');
  linkText(set, 'Label', 'Country', 'Label');
  return set;
}
async function buildMultiSelect(page: Host, sets: Sets) {
  const comps: ComponentNode[] = [];
  for (const s of ['Default', 'Filled', 'Open', 'Disabled']) {
    const c = comp(`State=${s}`, { dir: 'VERTICAL', gap: 'space-4', fill: null, w: 360 }); c.counterAxisAlignItems = 'MIN';
    await fieldLabel(c, 'Skills');
    const b = inputBox(s === 'Filled' ? 'Default' : s, 48); b.layoutWrap = 'WRAP'; b.counterAxisSpacing = 4; b.paddingLeft = 8; b.counterAxisSizingMode = 'AUTO'; b.paddingTop = 8; b.paddingBottom = 8;
    if (s !== 'Default') for (const t of ['Figma', 'Research']) put2(b, inst(sets, 'Tag', { Type: s === 'Disabled' ? 'Disabled' : 'Removable' }, { Label: t }));
    add(b, await text(s === 'Default' ? 'Add skills…' : '', 'body', 'text-subtle', 'Value'));
    add(c, b); fillW(b);
    if (s === 'Open') {
      const p = vcol('Listbox', 'space-8', { fill: 'surface-raised', stroke: 'border', radius: 'radius-sm', pad: 'space-12' });
      if (EFFECT['shadow-3']) await p.setEffectStyleIdAsync(EFFECT['shadow-3'].id);
      for (const [l, on] of [['Figma', 'True'], ['Research', 'True'], ['Prototyping', 'False'], ['Accessibility', 'False']] as [string, string][]) put2(p, inst(sets, 'Checkbox', { Checked: on, State: 'Default' }, { Label: l }));
      add(c, p); fillW(p);
    } else await helper(c, 'Pick up to 5. Backspace removes the last tag.');
    comps.push(c);
  }
  const set = combine(page, comps, 'MultiSelect', 4, 'Choose several values; chosen values show as removable tags inside the field.');
  linkText(set, 'Label', 'Skills', 'Label');
  return set;
}
async function buildFileUpload(page: Host, sets: Sets) {
  const comps: ComponentNode[] = [];
  for (const s of ['Default', 'Drag over', 'Error']) {
    const c = comp(`Type=Dropzone, State=${s}`, { dir: 'VERTICAL', gap: 'space-8', fill: s === 'Drag over' ? 'surface-hover' : 'surface', stroke: s === 'Error' ? 'danger' : s === 'Drag over' ? 'text' : 'border-strong', strokeW: s === 'Drag over' ? 2 : 1.5, dashed: s !== 'Drag over', radius: 'radius-md', pad: 'space-32', w: 400, align: 'CENTER', cross: 'CENTER' });
    add(c, icon('cloud-upload', 'outline', 32, s === 'Error' ? 'danger' : 'icon'));
    add(c, await text(s === 'Drag over' ? 'Drop to upload' : 'Drag files here or browse', 'label-lg', 'text', 'Title'));
    add(c, await text(s === 'Error' ? 'That file type isn’t supported. Use PNG, JPG or PDF.' : 'PNG, JPG or PDF · up to 10 MB', 'body-sm', s === 'Error' ? 'danger' : 'text-muted', 'Hint'));
    comps.push(c);
  }
  for (const s of ['Uploading', 'Complete', 'Failed']) {
    const c = comp(`Type=File, State=${s}`, { gap: 'space-12', fill: 'surface', stroke: s === 'Failed' ? 'danger-border' : 'border', radius: 'radius-sm', pad: ['space-12', 'space-12'], w: 400, cross: 'CENTER' });
    add(c, icon(s === 'Failed' ? 'alert-circle' : s === 'Complete' ? 'checkmark-circle' : 'document-text', s === 'Uploading' ? 'outline' : 'filled', 24, s === 'Failed' ? 'danger' : s === 'Complete' ? 'success' : 'icon'));
    const m = vcol('Meta', 'space-4');
    add(m, await text('brand-guidelines.pdf', 'label', 'text', 'File name'));
    if (s === 'Uploading') { const tr = rect('Track', 300, 4, 'surface-sunken', 2); const bar = frame('Progress', { dir: 'NONE', fill: 'surface-sunken', radius: 'radius-full', w: 300, h: 4 }); const fl = rect('Fill', 180, 4, 'action', 2); bar.appendChild(fl); add(m, bar); tr.remove(); }
    add(m, await text(s === 'Uploading' ? '2.4 of 4.0 MB · 60%' : s === 'Complete' ? '4.0 MB' : 'Upload failed. Check your connection.', 'body-sm', s === 'Failed' ? 'danger' : 'text-muted', 'Status'));
    add(c, m); m.layoutGrow = 1;
    put2(c, iconBtn(sets, s === 'Failed' ? 'refresh' : 'close', 'Ghost', 'sm'));
    comps.push(c);
  }
  return combine(page, comps, 'FileUpload', 3, 'Dropzone or button, with per-file progress, retry and remove. Every change is announced to screen readers.');
}
async function buildSlider(page: Host) {
  const comps: ComponentNode[] = [];
  for (const s of ['Default', 'Focus', 'Disabled']) {
    const c = comp(`State=${s}`, { dir: 'VERTICAL', gap: 'space-8', fill: null, w: 320 }); c.counterAxisAlignItems = 'MIN';
    const top = hrow('Header', 'space-8', { w: 320 }); top.primaryAxisAlignItems = 'SPACE_BETWEEN';
    add(top, await text('Volume', 'label', s === 'Disabled' ? 'text-disabled' : 'text', 'Label')); add(top, await text('40', 'code-sm', 'text-muted', 'Value'));
    add(c, top); fillW(top);
    const tr = frame('Track', { dir: 'NONE', fill: null, w: 320, h: 20 });
    const base = rect('Rail', 320, 4, 'surface-sunken', 2); tr.appendChild(base); base.y = 8;
    const fl = rect('Fill', 128, 4, s === 'Disabled' ? 'border-strong' : 'action', 2); tr.appendChild(fl); fl.y = 8;
    const th = figma.createEllipse(); th.name = 'Thumb'; th.resize(20, 20); th.fills = [paint('surface')]; th.strokes = [paint(s === 'Disabled' ? 'border-strong' : 'action')]; th.strokeWeight = 2; tr.appendChild(th); th.x = 118; th.y = 0;
    if (s === 'Focus') th.effects = [{ type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 1 }, offset: { x: 0, y: 0 }, radius: 0, spread: 3, visible: true, blendMode: 'NORMAL', showShadowBehindNode: true } as DropShadowEffect];
    add(c, tr); if (s === 'Disabled') c.opacity = 0.6;
    comps.push(c);
  }
  const set = combine(page, comps, 'Slider', 3, 'Pick a value in a range. Arrow keys step, Page Up/Down jump; the value is always shown.');
  linkText(set, 'Label', 'Volume', 'Label'); linkText(set, 'Value', '40', 'Value');
  return set;
}
async function buildSegmented(page: Host) {
  const comps: ComponentNode[] = [];
  for (const size of ['sm', 'md']) for (const n of [2, 3, 4]) {
    const c = comp(`Size=${size}, Options=${n}`, { gap: 'space-2', fill: 'surface-sunken', radius: 'radius-sm', pad: 'space-2' });
    const labels = ['Light', 'Dark', 'HC', 'Auto'].slice(0, n);
    for (let i = 0; i < n; i++) {
      const s = frame(`Segment ${i + 1}`, { pad: ['space-0', size === 'sm' ? 'space-12' : 'space-16'], fill: i === 0 ? 'surface' : null, stroke: i === 0 ? 'border-strong' : undefined, radius: 'radius-sm', h: size === 'sm' ? 28 : 36, align: 'CENTER', cross: 'CENTER' });
      add(s, await text(labels[i], size === 'sm' ? 'label-sm' : 'label', i === 0 ? 'text' : 'text-muted', 'Label')); add(c, s);
    }
    comps.push(c);
  }
  return combine(page, comps, 'SegmentedControl', 3, '2–5 mutually exclusive views or modes, switched instantly. The selected segment is raised.');
}
async function makeCalendar(name = 'Calendar') {
  const c = comp(name, { dir: 'VERTICAL', gap: 'space-8', fill: 'surface-raised', stroke: 'border', radius: 'radius-md', pad: 'space-16' }); c.counterAxisAlignItems = 'MIN';
  const head = hrow('Header', 'space-8', { w: 280, cross: 'CENTER' }); head.primaryAxisAlignItems = 'SPACE_BETWEEN';
  add(head, icon('chevron-back', 'outline', 20, 'icon')).name = 'Previous'; add(head, await text('October 2026', 'label-lg', 'text', 'Month')); add(head, icon('chevron-forward', 'outline', 20, 'icon')).name = 'Next';
  add(c, head);
  const grid = vcol('Grid', 'space-2');
  const wk = hrow('Weekdays', 'space-2'); for (const d of ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']) { const cell = frame(d, { w: 38, h: 28, align: 'CENTER', cross: 'CENTER', fill: null }); add(cell, await text(d, 'caption', 'text-muted')); add(wk, cell); }
  add(grid, wk);
  let day = 1 - 3; // Oct 2026 starts on Thursday
  for (let w = 0; w < 5; w++) {
    const r = hrow(`Week ${w + 1}`, 'space-2');
    for (let i = 0; i < 7; i++, day++) {
      const inMonth = day >= 1 && day <= 31; const sel = day === 14, today = day === 8;
      const cell = frame(inMonth ? `Day ${day}` : 'Empty', { w: 38, h: 38, align: 'CENTER', cross: 'CENTER', fill: sel ? 'action' : null, stroke: today ? 'text' : undefined, strokeW: 1.5, radius: 'radius-full' });
      if (inMonth) add(cell, await text(String(day), sel ? 'label' : 'body', sel ? 'on-action' : 'text', 'Day'));
      add(r, cell);
    }
    add(grid, r);
  }
  add(c, grid);
  return c;
}
async function buildCalendar(page: Host) {
  const c = await makeCalendar(); c.description = 'Keyboard grid (arrows, Page Up/Down, Home/End). Today has a ring, the selected day is filled; disabled dates are dimmed.';
  page.appendChild(c); return c;
}
async function buildDatePicker(page: Host, sets: Sets) {
  const comps: ComponentNode[] = [];
  for (const s of ['Default', 'Filled', 'Open', 'Error']) {
    const c = comp(`State=${s}`, { dir: 'VERTICAL', gap: 'space-4', fill: null, w: 320 }); c.counterAxisAlignItems = 'MIN';
    await fieldLabel(c, 'Start date');
    const b = inputBox(s); add(b, await text(s === 'Default' ? 'DD / MM / YYYY' : s === 'Error' ? '31 / 02 / 2026' : '14 / 10 / 2026', 'body', s === 'Default' ? 'text-subtle' : 'text', 'Value')).layoutGrow = 1;
    add(b, icon('calendar', 'outline', 20, 'icon-muted')).name = 'Icon'; add(c, b); fillW(b);
    if (s === 'Open') put2(c, inst(sets, 'Calendar')); else await helper(c, s === 'Error' ? 'That date doesn’t exist. Pick a day in February.' : 'Type a date or use the calendar', s === 'Error');
    comps.push(c);
  }
  const set = combine(page, comps, 'DatePicker', 4, 'A date field with a popover calendar. Typing always works; the calendar is a helper, not a requirement.');
  linkText(set, 'Label', 'Start date', 'Label');
  return set;
}
async function buildDivider(page: Host) {
  const comps: ComponentNode[] = [];
  let c = comp('Orientation=Horizontal, Label=False', { dir: 'VERTICAL', fill: null, w: 320 }); const l = rect('Line', 320, 1, 'border', 0); add(c, l); fillW(l); comps.push(c);
  c = comp('Orientation=Horizontal, Label=True', { gap: 'space-12', fill: null, w: 320, cross: 'CENTER' });
  const a = rect('Line', 100, 1, 'border', 0); add(c, a); a.layoutGrow = 1; add(c, await text('or', 'caption', 'text-muted', 'Label')); const b = rect('Line', 100, 1, 'border', 0); add(c, b); b.layoutGrow = 1; comps.push(c);
  c = comp('Orientation=Vertical, Label=False', { fill: null, h: 48 }); const v = rect('Line', 1, 48, 'border', 0); add(c, v); comps.push(c);
  return combine(page, comps, 'Divider', 3, 'Separates groups. Prefer spacing first; use a divider only when spacing alone is ambiguous.');
}
async function buildList(page: Host, sets: Sets) {
  const comps: ComponentNode[] = [];
  for (const t of ['Text', 'Icon', 'Avatar']) for (const s of ['Default', 'Hover', 'Selected']) {
    const c = comp(`Leading=${t}, State=${s}`, { gap: 'space-12', pad: ['space-12', 'space-16'], fill: s === 'Hover' ? 'surface-hover' : s === 'Selected' ? 'surface-sunken' : 'surface', w: 360, cross: 'CENTER' });
    if (t === 'Icon') add(c, icon('folder', 'outline', 24, 'icon')).name = 'Leading';
    if (t === 'Avatar') { const av = inst(sets, 'Avatar', { Type: 'Initials', Size: '40' }); if (av) { av.name = 'Leading'; add(c, av); } }
    const m = vcol('Text', 'space-2');
    add(m, await text(t === 'Avatar' ? 'Ana Ruiz' : 'Design tokens', 'label', 'text', 'Title')); add(m, await text(t === 'Avatar' ? 'Product designer' : 'Updated 2 hours ago', 'body-sm', 'text-muted', 'Description'));
    add(c, m); m.layoutGrow = 1; add(c, await text('24', 'code-sm', 'text-muted', 'Meta')); add(c, icon('chevron-forward', 'outline', 20, 'icon-muted')).name = 'Chevron';
    comps.push(c);
  }
  const set = combine(page, comps, 'List item', 3, 'One row of a list: leading text, icon or avatar, a title and description, meta and a chevron for navigation.');
  linkBool(set, 'Show meta', true, 'Meta'); linkBool(set, 'Show chevron', true, 'Chevron');
  return set;
}
async function buildTable(page: Host, sets: Sets) {
  const comps: ComponentNode[] = [];
  for (const t of ['Header', 'Text', 'Number', 'Status']) {
    const c = comp(`Type=${t}`, { pad: ['space-12', 'space-16'], gap: 'space-4', fill: t === 'Header' ? 'surface-sunken' : 'surface', stroke: 'border', w: 180, align: t === 'Number' ? 'MAX' : 'MIN', cross: 'CENTER' });
    c.strokeTopWeight = 0; c.strokeLeftWeight = 0; c.strokeRightWeight = 0; c.strokeBottomWeight = 1;
    if (t === 'Status') put2(c, inst(sets, 'Badge', { Tone: 'Success', Style: 'Subtle' }, { Label: 'Paid' }));
    else { add(c, await text(t === 'Header' ? 'Invoice' : t === 'Number' ? '₹12,400' : 'INV-1042', t === 'Header' ? 'label-sm' : 'body', t === 'Header' ? 'text-muted' : 'text', 'Value')); if (t === 'Header') add(c, icon('chevron-down', 'outline', 14, 'icon-muted')).name = 'Sort'; }
    comps.push(c);
  }
  const set = combine(page, comps, 'Table cell', 4, 'Cells for data tables. Numbers align right; headers can sort. Always give the table a caption.');
  // Example table built from cell instances
  const tbl = comp('Table', { dir: 'VERTICAL', fill: 'surface', stroke: 'border', radius: 'radius-md' }); tbl.clipsContent = true; tbl.counterAxisAlignItems = 'MIN';
  const data = [['Invoice', 'Customer', 'Amount', 'Status'], ['INV-1042', 'Acme Ltd', '₹12,400', 'Paid'], ['INV-1043', 'Northwind', '₹8,250', 'Due'], ['INV-1044', 'Globex', '₹21,900', 'Overdue']];
  for (let r = 0; r < data.length; r++) {
    const rw = hrow(`Row ${r + 1}`, 'space-0');
    for (let k = 0; k < 4; k++) {
      const type = r === 0 ? 'Header' : k === 2 ? 'Number' : k === 3 ? 'Status' : 'Text';
      const i = variantOf(set, { Type: type }).createInstance();
      if (type === 'Status') { const b = i.findOne(n => n.type === 'INSTANCE') as InstanceNode | null; if (b) { const tone = data[r][k] === 'Paid' ? 'Success' : data[r][k] === 'Due' ? 'Warning' : 'Danger'; try { b.setProperties({ Tone: tone }); const key = propKey(b, 'Label'); if (key) b.setProperties({ [key]: data[r][k] }); } catch (e) { } } }
      else await setInstText(i, 'Value', data[r][k]);
      add(rw, i);
    }
    add(tbl, rw);
  }
  tbl.description = 'Example invoice table composed from Table cell instances.';
  page.appendChild(tbl); tbl.x = 0; tbl.y = set.y + set.height + 64;
  return set;
}
async function buildImage(page: Host) {
  const comps: ComponentNode[] = [];
  for (const [ratio, w, h] of [['1:1', 200, 200], ['4:3', 240, 180], ['16:9', 320, 180]] as [string, number, number][]) for (const s of ['Loaded', 'Fallback']) {
    const c = comp(`Ratio=${ratio}, State=${s}`, { dir: 'VERTICAL', fill: s === 'Loaded' ? 'gray-300' : 'surface-sunken', radius: 'radius-md', w, h, align: 'CENTER', cross: 'CENTER' }); c.clipsContent = true;
    if (s === 'Loaded') { const ill = figma.createNodeFromSvg(DATA.illus['onboarding-welcome']); ill.rescale((h * 0.8) / ill.height); ill.name = 'Placeholder'; add(c, ill); }
    else { add(c, icon('image', 'outline', 32, 'icon-muted')); add(c, await text('Image unavailable', 'caption', 'text-muted', 'Fallback')); }
    comps.push(c);
  }
  return combine(page, comps, 'Image', 2, 'Fixed aspect ratios with rounded corners. Swap the fill for your photo (Fill → Image). Fallback shows when an image fails; always write alt text.');
}
async function buildCarousel(page: Host, sets: Sets) {
  const c = comp('Carousel', { dir: 'VERTICAL', gap: 'space-12', fill: null, w: 560 }); c.counterAxisAlignItems = 'CENTER';
  const track = hrow('Slides', 'space-12'); track.clipsContent = true;
  for (let i = 0; i < 3; i++) { const sl = frame(`Slide ${i + 1}`, { dir: 'VERTICAL', fill: i === 0 ? 'gray-300' : 'surface-sunken', radius: 'radius-md', w: i === 0 ? 400 : 120, h: 240, align: 'CENTER', cross: 'CENTER' }); add(sl, icon('image', 'outline', 32, 'icon-muted')); add(track, sl); }
  add(c, track);
  const nav = hrow('Controls', 'space-12', { cross: 'CENTER' });
  put2(nav, iconBtn(sets, 'chevron-back', 'Secondary', 'sm'));
  const dots = hrow('Dots', 'space-8', { cross: 'CENTER' }); for (let i = 0; i < 4; i++) { const d = figma.createEllipse(); d.name = `Dot ${i + 1}`; d.resize(8, 8); d.fills = [paint(i === 0 ? 'action' : 'border-strong')]; add(dots, d); }
  add(nav, dots); put2(nav, iconBtn(sets, 'chevron-forward', 'Secondary', 'sm'));
  add(c, nav);
  c.description = 'Snap-scrolling slides with buttons and dots. Never autoplays; every slide is reachable by keyboard.';
  page.appendChild(c); return c;
}
async function buildTooltip(page: Host) {
  const comps: ComponentNode[] = [];
  for (const p of ['Top', 'Bottom', 'Left', 'Right']) {
    const c = comp(`Placement=${p}`, { dir: p === 'Top' || p === 'Bottom' ? 'VERTICAL' : 'HORIZONTAL', gap: 'space-0', fill: null, cross: 'CENTER' });
    const bub = frame('Bubble', { pad: ['space-8', 'space-12'], fill: 'surface-inverse', radius: 'radius-sm' }); add(bub, await text('Copy link', 'label-sm', 'text-inverse', 'Label'));
    const ar = figma.createPolygon(); ar.name = 'Arrow'; ar.pointCount = 3; ar.resize(12, 6); ar.fills = [paint('surface-inverse')];
    ar.rotation = p === 'Top' ? 180 : p === 'Bottom' ? 0 : p === 'Left' ? 90 : -90;
    if (p === 'Top' || p === 'Left') { add(c, bub); add(c, ar); } else { add(c, ar); add(c, bub); }
    comps.push(c);
  }
  const set = combine(page, comps, 'Tooltip', 4, 'Short label on hover and focus; Esc hides it. Never put essential or interactive content in a tooltip.');
  linkText(set, 'Label', 'Copy link', 'Label');
  return set;
}
async function buildSpinner(page: Host) {
  const comps: ComponentNode[] = [];
  for (const [sz, px] of [['sm', 16], ['md', 24], ['lg', 40]] as [string, number][]) for (const tone of ['Default', 'Inverse']) {
    const c = comp(`Size=${sz}, Tone=${tone}`, { dir: 'NONE', fill: tone === 'Inverse' ? 'surface-inverse' : null, w: px + 16, h: px + 16, radius: 'radius-sm' });
    const tr = figma.createEllipse(); tr.name = 'Track'; tr.resize(px, px); tr.arcData = { startingAngle: 0, endingAngle: 2 * Math.PI, innerRadius: 0.8 }; tr.fills = [paint(tone === 'Inverse' ? 'gray-700' : 'border')]; c.appendChild(tr); tr.x = 8; tr.y = 8;
    const arc = figma.createEllipse(); arc.name = 'Arc'; arc.resize(px, px); arc.arcData = { startingAngle: -Math.PI / 2, endingAngle: Math.PI / 2, innerRadius: 0.8 }; arc.fills = [paint(tone === 'Inverse' ? 'text-inverse' : 'action')]; c.appendChild(arc); arc.x = 8; arc.y = 8;
    comps.push(c);
  }
  return combine(page, comps, 'Spinner', 2, '0.8s rotation in code; pulses under reduced motion. Always pair with a label for screen readers.');
}
async function buildProgress(page: Host) {
  const comps: ComponentNode[] = [];
  for (const [tone, val, fill] of [['Default', 64, 'action'], ['Success', 100, 'success-solid'], ['Danger', 40, 'danger-solid']] as [string, number, string][]) for (const size of ['sm', 'md']) {
    const c = comp(`Tone=${tone}, Size=${size}`, { dir: 'VERTICAL', gap: 'space-8', fill: null, w: 320 }); c.counterAxisAlignItems = 'MIN';
    const top = hrow('Header', 'space-8', { w: 320 }); top.primaryAxisAlignItems = 'SPACE_BETWEEN';
    add(top, await text(tone === 'Danger' ? 'Upload failed' : tone === 'Success' ? 'Upload complete' : 'Uploading', 'label', 'text', 'Label')); add(top, await text(`${val}%`, 'code-sm', 'text-muted', 'Value'));
    add(c, top); fillW(top);
    const h = size === 'sm' ? 4 : 8; const tr = frame('Track', { dir: 'NONE', fill: 'surface-sunken', radius: 'radius-full', w: 320, h }); tr.clipsContent = true;
    const f = rect('Fill', 320 * val / 100, h, fill, h / 2); tr.appendChild(f); add(c, tr);
    comps.push(c);
  }
  const set = combine(page, comps, 'ProgressBar', 2, 'Determinate progress with a visible label and value. Colour changes are always paired with words.');
  return set;
}
async function buildSkeleton(page: Host) {
  const comps: ComponentNode[] = [];
  let c = comp('Shape=Text', { dir: 'VERTICAL', gap: 'space-8', fill: null, w: 280 }); c.counterAxisAlignItems = 'MIN';
  for (const w of [280, 240, 160]) add(c, rect('Line', w, 12, 'surface-sunken', 4)); comps.push(c);
  c = comp('Shape=Rect', { fill: null }); add(c, rect('Block', 280, 160, 'surface-sunken', 8)); comps.push(c);
  c = comp('Shape=Circle', { fill: null }); const e = figma.createEllipse(); e.name = 'Circle'; e.resize(48, 48); e.fills = [paint('surface-sunken')]; add(c, e); comps.push(c);
  c = comp('Shape=Card', { dir: 'VERTICAL', gap: 'space-12', fill: 'surface', stroke: 'border', radius: 'radius-md', pad: 'space-16', w: 300 }); c.counterAxisAlignItems = 'MIN';
  const hd = hrow('Head', 'space-12', { cross: 'CENTER' }); const av = figma.createEllipse(); av.resize(40, 40); av.fills = [paint('surface-sunken')]; add(hd, av); const tl = vcol('Lines', 'space-8'); add(tl, rect('Line', 140, 12, 'surface-sunken')); add(tl, rect('Line', 90, 10, 'surface-sunken')); add(hd, tl); add(c, hd);
  add(c, rect('Media', 268, 120, 'surface-sunken', 6)); add(c, rect('Line', 220, 12, 'surface-sunken')); comps.push(c);
  return combine(page, comps, 'Skeleton', 4, 'Shows the shape of loading content. A soft shimmer in code; static under reduced motion. Match the real layout.');
}
async function buildEmptyState(page: Host, sets: Sets) {
  const comps: ComponentNode[] = [];
  for (const [kind, ill, title, body, cta] of [['Empty', 'empty-inbox', 'No messages yet', 'When someone writes to you, it will show up here.', 'Start a conversation'], ['Search', 'empty-search', 'No results for “tokns”', 'Check the spelling or try a broader term.', 'Clear search'], ['Error', 'error-offline', 'You’re offline', 'Check your connection and try again.', 'Retry'], ['Success', 'success-done', 'All done!', 'Every task on your list is complete.', 'Back to home']] as string[][]) {
    const c = comp(`Kind=${kind}`, { dir: 'VERTICAL', gap: 'space-16', fill: 'surface', pad: 'space-32', w: 400, align: 'CENTER', cross: 'CENTER', radius: 'radius-md', stroke: 'border' });
    const n = figma.createNodeFromSvg((DATA.illus as Record<string, string>)[ill]); n.rescale(160 / n.height); n.name = 'Illustration'; add(c, n);
    const t = add(c, await text(title, 'heading-4', 'text', 'Title')); t.textAlignHorizontal = 'CENTER';
    const d = add(c, await text(body, 'body', 'text-muted', 'Description', 320)); d.textAlignHorizontal = 'CENTER';
    put2(c, inst(sets, 'Button', { Variant: kind === 'Error' ? 'Secondary' : 'Primary', Size: 'md', State: 'Default' }, { Label: cta }));
    comps.push(c);
  }
  const set = combine(page, comps, 'EmptyState', 4, 'Explains why a view is empty and what to do next. Uses the line illustrations; one clear action.');
  return set;
}
async function buildBlockLoader(page: Host) {
  const comps: ComponentNode[] = [];
  for (const [sz, px] of [['sm', 24], ['md', 40], ['lg', 64]] as [string, number][]) for (const tone of ['Default', 'Inverse']) {
    const c = comp(`Size=${sz}, Tone=${tone}`, { fill: tone === 'Inverse' ? 'surface-inverse' : null, pad: 'space-8', radius: 'radius-sm' });
    const n = figma.createNodeFromSvg(DATA.logos[tone === 'Inverse' ? 'module-aa-nad-blocks-white' : 'module-aa-nad-blocks']); n.rescale(px / n.height); n.name = 'Blocks'; add(c, n);
    comps.push(c);
  }
  return combine(page, comps, 'BlockLoader', 2, 'Brand loader: the Module Aa blocks light up in sequence (45ms apart, 1.8s loop) in code. Use for full-page loads.');
}
async function overlayPanel(name: string, w: number, h: number, sets: Sets, title: string) {
  const c = comp(name, { dir: 'VERTICAL', fill: 'surface-raised', w, h, radius: 'radius-none' }); c.counterAxisAlignItems = 'MIN';
  if (EFFECT['shadow-4']) await c.setEffectStyleIdAsync(EFFECT['shadow-4'].id);
  const hd = hrow('Header', 'space-12', { pad: ['space-16', 'space-24'], cross: 'CENTER' }); const t = add(hd, await text(title, 'heading-4', 'text', 'Title')); t.layoutGrow = 1; put2(hd, iconBtn(sets, 'close')); add(c, hd); fillW(hd);
  const body = vcol('Body', 'space-16', { pad: ['space-8', 'space-24'] }); add(c, body); fillW(body); body.layoutGrow = 1;
  return { c, body };
}
async function buildDrawer(page: Host, sets: Sets) {
  const comps: ComponentNode[] = [];
  for (const side of ['Right', 'Left']) {
    const { c, body } = await overlayPanel(`Side=${side}`, 360, 560, sets, 'Filters');
    for (const l of ['In stock', 'On sale', 'Free delivery']) put2(body, inst(sets, 'Checkbox', { Checked: l === 'In stock' ? 'True' : 'False', State: 'Default' }, { Label: l }));
    put2(body, inst(sets, 'Divider', { Orientation: 'Horizontal', Label: 'False' }));
    for (const l of ['Newest', 'Price: low to high']) put2(body, inst(sets, 'Radio', { Selected: l === 'Newest' ? 'True' : 'False', State: 'Default' }, { Label: l }));
    const ft = hrow('Footer', 'space-8', { pad: ['space-16', 'space-24'], align: 'MAX', stroke: 'border' }); ft.strokeTopWeight = 1; ft.strokeBottomWeight = 0; ft.strokeLeftWeight = 0; ft.strokeRightWeight = 0;
    put2(ft, inst(sets, 'Button', { Variant: 'Secondary', Size: 'md', State: 'Default' }, { Label: 'Reset' })); put2(ft, inst(sets, 'Button', { Variant: 'Primary', Size: 'md', State: 'Default' }, { Label: 'Show 24 results' }));
    add(c, ft); fillW(ft);
    comps.push(c);
  }
  const set = combine(page, comps, 'Drawer', 2, 'Side panel for filters and secondary tasks. Slides from its edge; focus is trapped and returns to the trigger.');
  linkText(set, 'Title', 'Filters', 'Title');
  return set;
}
async function buildBottomSheet(page: Host, sets: Sets) {
  const comps: ComponentNode[] = [];
  for (const kind of ['Actions', 'Content']) {
    const c = comp(`Kind=${kind}`, { dir: 'VERTICAL', gap: 'space-8', fill: 'surface-raised', w: 390, pad: ['space-8', 'space-0'] }); c.counterAxisAlignItems = 'CENTER';
    c.topLeftRadius = 16; c.topRightRadius = 16; c.bottomLeftRadius = 0; c.bottomRightRadius = 0;
    if (EFFECT['shadow-4']) await c.setEffectStyleIdAsync(EFFECT['shadow-4'].id);
    add(c, rect('Handle', 36, 4, 'border-strong', 2));
    const t = add(c, await text(kind === 'Actions' ? 'Share design' : 'Order summary', 'heading-5', 'text', 'Title'));
    const body = vcol('Body', 'space-0', { pad: ['space-8', 'space-0'] }); add(c, body); fillW(body);
    if (kind === 'Actions') for (const [ic, l] of [['link', 'Copy link'], ['mail', 'Email'], ['download', 'Download PNG']]) { const r = hrow(l, 'space-16', { pad: ['space-12', 'space-24'], cross: 'CENTER' }); add(r, icon(ic, 'outline', 24, 'icon')); add(r, await text(l, 'body', 'text')); add(body, r); fillW(r); }
    else { for (const [a, b] of [['Subtotal', '₹2,400'], ['Delivery', 'Free'], ['Total', '₹2,400']]) { const r = hrow(a, 'space-8', { pad: ['space-8', 'space-24'] }); r.primaryAxisAlignItems = 'SPACE_BETWEEN'; add(r, await text(a, 'body', a === 'Total' ? 'text' : 'text-muted')); add(r, await text(b, a === 'Total' ? 'label' : 'body', 'text')); add(body, r); fillW(r); } }
    const ft = vcol('Footer', 'space-8', { pad: ['space-8', 'space-24'] }); const btn = put2(ft, inst(sets, 'Button', { Variant: kind === 'Actions' ? 'Secondary' : 'Primary', Size: 'lg', State: 'Default' }, { Label: kind === 'Actions' ? 'Cancel' : 'Pay ₹2,400' })); add(c, ft); fillW(ft); if (btn) fillW(btn);
    comps.push(c);
  }
  const set = combine(page, comps, 'BottomSheet', 2, 'Mobile sheet with a drag handle. Rises from the bottom; swipe or Esc to dismiss. Keep actions within thumb reach.');
  return set;
}
async function buildMenu(page: Host) {
  const comps: ComponentNode[] = [];
  for (const s of ['Default', 'Hover', 'Danger', 'Disabled']) {
    const c = comp(`State=${s}`, { gap: 'space-12', pad: ['space-8', 'space-12'], fill: s === 'Hover' ? 'surface-hover' : 'surface-raised', w: 240, cross: 'CENTER' });
    const color = s === 'Danger' ? 'danger' : s === 'Disabled' ? 'text-disabled' : 'text';
    add(c, icon(s === 'Danger' ? 'trash' : 'copy', 'outline', 20, color)).name = 'Icon';
    add(c, await text(s === 'Danger' ? 'Delete' : 'Duplicate', 'body', color, 'Label')).layoutGrow = 1;
    add(c, await text(s === 'Danger' ? 'Del' : 'Ctrl+D', 'code-sm', 'text-muted', 'Shortcut'));
    comps.push(c);
  }
  const set = combine(page, comps, 'Menu item', 4, 'One action in a menu. Arrow keys move, type-ahead jumps, Esc closes. Destructive items go last, in red with a trash icon.');
  linkBool(set, 'Show icon', true, 'Icon'); linkBool(set, 'Show shortcut', true, 'Shortcut'); linkSwap(set, 'Icon', 'copy/outline', 'Icon');
  const m = comp('Menu', { dir: 'VERTICAL', fill: 'surface-raised', stroke: 'border', radius: 'radius-sm', pad: ['space-4', 'space-0'] }); m.counterAxisAlignItems = 'MIN';
  if (EFFECT['shadow-3']) await m.setEffectStyleIdAsync(EFFECT['shadow-3'].id);
  for (const [s, l, ic] of [['Default', 'Rename', 'create'], ['Hover', 'Duplicate', 'copy'], ['Default', 'Share', 'share-social'], ['Disabled', 'Move to…', 'folder']]) {
    const i = variantOf(set, { State: s }).createInstance(); const ik = propKey(i, 'Icon'); if (ik && ICON[`${ic}/outline`]) i.setProperties({ [ik]: ICON[`${ic}/outline`].id }); await setInstText(i, 'Label', l); await setInstText(i, 'Shortcut', { Rename: 'F2', Duplicate: 'Ctrl+D', Share: 'Ctrl+S', 'Move to…': 'Ctrl+M' }[l] || ''); add(m, i);
  }
  const dv = rect('Divider', 240, 1, 'border', 0); add(m, dv);
  add(m, variantOf(set, { State: 'Danger' }).createInstance());
  m.description = 'Example actions menu built from Menu item instances.';
  page.appendChild(m); m.x = 0; m.y = set.y + set.height + 64;
  return set;
}
async function buildAccordion(page: Host) {
  const comps: ComponentNode[] = [];
  for (const s of ['Collapsed', 'Expanded']) for (const st of ['Default', 'Hover', 'Focus']) {
    const c = comp(`State=${s}, Interaction=${st}`, { dir: 'VERTICAL', fill: st === 'Hover' ? 'surface-hover' : 'surface', stroke: 'border', w: 400 }); c.counterAxisAlignItems = 'MIN';
    c.strokeTopWeight = 0; c.strokeLeftWeight = 0; c.strokeRightWeight = 0; c.strokeBottomWeight = 1;
    const hd = hrow('Header', 'space-12', { pad: ['space-16', 'space-16'], cross: 'CENTER' }); add(hd, await text('How do I change the brand colour?', 'label-lg', 'text', 'Title')).layoutGrow = 1;
    const ch = add(hd, icon('chevron-down', 'outline', 20, 'icon')); ch.name = 'Chevron'; if (s === 'Expanded') ch.rotation = 180;
    add(c, hd); fillW(hd); if (st === 'Focus') focusRing(hd);
    if (s === 'Expanded') { const b = vcol('Content', 'space-8', { pad: ['space-0', 'space-16'] }); b.paddingBottom = 16; add(b, await text('Swap the 11 brand/primary variables. Every component that uses an action colour updates automatically.', 'body', 'text-muted', 'Body', 368)); add(c, b); fillW(b); }
    comps.push(c);
  }
  const set = combine(page, comps, 'Accordion item', 3, 'Expandable section. The header is a button with aria-expanded; the chevron rotates 180°. Use single or multiple open.');
  linkText(set, 'Title', 'How do I change the brand colour?', 'Title');
  return set;
}
async function buildBreadcrumbs(page: Host) {
  const comps: ComponentNode[] = [];
  for (const sep of ['Chevron', 'Slash']) for (const coll of ['False', 'True']) {
    const c = comp(`Separator=${sep}, Collapsed=${coll}`, { gap: 'space-8', fill: null, cross: 'CENTER' });
    const items = coll === 'True' ? ['Home', '…', 'Components', 'Button'] : ['Home', 'Design system', 'Components', 'Button'];
    for (let i = 0; i < items.length; i++) {
      const last = i === items.length - 1;
      if (i === 0) add(c, icon('home', 'outline', 16, 'link')).name = 'Home icon';
      const t = add(c, await text(items[i], last ? 'label' : 'body-sm', last ? 'text' : 'link', last ? 'Current' : `Item ${i + 1}`)); if (!last && items[i] !== '…') t.textDecoration = 'UNDERLINE';
      if (!last) { if (sep === 'Chevron') add(c, icon('chevron-forward', 'outline', 14, 'icon-muted')).name = 'Separator'; else add(c, await text('/', 'body-sm', 'text-muted', 'Separator')); }
    }
    comps.push(c);
  }
  return combine(page, comps, 'Breadcrumbs', 2, 'Shows where you are. The current page is plain text (aria-current); long trails collapse the middle.');
}
async function buildPagination(page: Host, sets: Sets) {
  const comps: ComponentNode[] = [];
  for (const kind of ['Numbered', 'Compact']) {
    const c = comp(`Type=${kind}`, { gap: 'space-4', fill: null, cross: 'CENTER' });
    put2(c, iconBtn(sets, 'chevron-back', 'Ghost', 'sm'));
    if (kind === 'Numbered') for (const p of ['1', '2', '3', '…', '12']) { const b = frame(`Page ${p}`, { w: 32, h: 32, align: 'CENTER', cross: 'CENTER', fill: p === '2' ? 'action' : null, radius: 'radius-sm' }); add(b, await text(p, 'label', p === '2' ? 'on-action' : 'text')); add(c, b); }
    else add(c, await text('Page 2 of 12', 'label', 'text', 'Status'));
    put2(c, iconBtn(sets, 'chevron-forward', 'Ghost', 'sm'));
    comps.push(c);
  }
  return combine(page, comps, 'Pagination', 2, 'Move between pages of results. The current page is filled and announced; use Compact on small screens.');
}
async function buildStepper(page: Host) {
  const comps: ComponentNode[] = [];
  const steps: [string, string][] = [['Cart', 'complete'], ['Address', 'current'], ['Payment', 'upcoming']];
  for (const o of ['Horizontal', 'Vertical']) {
    const c = comp(`Orientation=${o}`, { dir: o === 'Horizontal' ? 'HORIZONTAL' : 'VERTICAL', gap: 'space-12', fill: null, cross: o === 'Horizontal' ? 'CENTER' : 'MIN' }); if (o === 'Vertical') c.counterAxisAlignItems = 'MIN';
    for (let i = 0; i < steps.length; i++) {
      const [l, st] = steps[i];
      const s = frame(l, { dir: o === 'Horizontal' ? 'VERTICAL' : 'HORIZONTAL', gap: 'space-8', fill: null, cross: 'CENTER' });
      const dot = frame('Marker', { w: 32, h: 32, align: 'CENTER', cross: 'CENTER', radius: 'radius-full', fill: st === 'complete' ? 'action' : 'surface', stroke: st === 'upcoming' ? 'border-strong' : 'action', strokeW: 2 });
      if (st === 'complete') add(dot, icon('checkmark', 'outline', 16, 'on-action')); else add(dot, await text(String(i + 1), 'label', st === 'current' ? 'text' : 'text-muted'));
      add(s, dot); add(s, await text(l, st === 'current' ? 'label' : 'body-sm', st === 'upcoming' ? 'text-muted' : 'text', 'Label'));
      add(c, s);
      if (i < steps.length - 1) add(c, rect('Connector', o === 'Horizontal' ? 64 : 2, o === 'Horizontal' ? 2 : 24, st === 'complete' ? 'action' : 'border', 1));
    }
    comps.push(c);
  }
  return combine(page, comps, 'Stepper', 2, 'Progress through a multi-step flow: complete, current, upcoming or error. Steps are announced with their status.');
}
async function buildNavBar(page: Host, sets: Sets) {
  const comps: ComponentNode[] = [];
  let c = comp('Platform=Web', { gap: 'space-32', pad: ['space-12', 'space-24'], fill: 'surface', stroke: 'border', w: 960, cross: 'CENTER' }); c.strokeTopWeight = 0; c.strokeLeftWeight = 0; c.strokeRightWeight = 0; c.strokeBottomWeight = 1;
  const lg = figma.createNodeFromSvg(DATA.logos['module-aa-nad-horizontal']); lg.rescale(32 / lg.height); lg.name = 'Logo'; add(c, lg);
  const links = hrow('Links', 'space-24', { cross: 'CENTER' }); for (const [l, on] of [['Docs', true], ['Components', false], ['Tokens', false], ['Figma', false]] as [string, boolean][]) add(links, await text(l, 'label', on ? 'text' : 'text-muted', l)); add(c, links); links.layoutGrow = 1;
  put2(c, iconBtn(sets, 'search')); put2(c, inst(sets, 'Button', { Variant: 'Primary', Size: 'sm', State: 'Default' }, { Label: 'Get started' }));
  comps.push(c);
  c = comp('Platform=Mobile', { gap: 'space-8', pad: ['space-8', 'space-8'], fill: 'surface', stroke: 'border', w: 390, cross: 'CENTER' }); c.strokeTopWeight = 0; c.strokeLeftWeight = 0; c.strokeRightWeight = 0; c.strokeBottomWeight = 1;
  put2(c, iconBtn(sets, 'arrow-back')); const t = add(c, await text('Settings', 'heading-5', 'text', 'Title')); t.layoutGrow = 1; t.textAlignHorizontal = 'CENTER'; put2(c, iconBtn(sets, 'ellipsis-horizontal'));
  comps.push(c);
  return combine(page, comps, 'NavBar', 1, 'Web top bar and mobile app bar. Mobile: back on the left, title centred, one overflow action on the right; 48px targets.');
}
async function buildTabBar(page: Host) {
  const comps: ComponentNode[] = [];
  for (const on of ['True', 'False']) {
    const c = comp(`Active=${on}`, { dir: 'VERTICAL', gap: 'space-4', fill: null, w: 78, pad: ['space-8', 'space-0'], cross: 'CENTER' });
    const pill = frame('Indicator', { w: 56, h: 32, align: 'CENTER', cross: 'CENTER', radius: 'radius-full', fill: on === 'True' ? 'surface-sunken' : null });
    add(pill, icon('home', on === 'True' ? 'filled' : 'outline', 24, on === 'True' ? 'text' : 'icon-muted')).name = 'Icon'; add(c, pill);
    add(c, await text('Home', 'label-sm', on === 'True' ? 'text' : 'text-muted', 'Label'));
    comps.push(c);
  }
  const set = combine(page, comps, 'TabBar item', 2, 'One destination in the mobile bottom bar: filled icon and a pill when active.');
  linkText(set, 'Label', 'Home', 'Label');
  const bar = comp('TabBar', { gap: 'space-0', pad: ['space-4', 'space-8'], fill: 'surface', stroke: 'border', w: 390, align: 'SPACE_BETWEEN' }); bar.strokeTopWeight = 1; bar.strokeBottomWeight = 0; bar.strokeLeftWeight = 0; bar.strokeRightWeight = 0;
  for (const [l, ic, on] of [['Home', 'home', true], ['Search', 'search', false], ['Saved', 'bookmark', false], ['Profile', 'person', false]] as [string, string, boolean][]) {
    const i = variantOf(set, { Active: on ? 'True' : 'False' }).createInstance(); const k = propKey(i, 'Label'); if (k) i.setProperties({ [k]: l });
    const ico = i.findOne(n => n.type === 'INSTANCE' && n.name === 'Icon') as InstanceNode | null; const target = ICON[`${ic}/${on ? 'filled' : 'outline'}`]; if (ico && target) ico.swapComponent(target); add(bar, i);
  }
  bar.description = 'Mobile bottom navigation with 3–5 destinations.';
  page.appendChild(bar); bar.x = 0; bar.y = set.y + set.height + 64;
  return set;
}

const MORE: [string, string, (p: Host, s: Sets) => Promise<SceneNode>][] = [
  ['Link', 'Inline, standalone and external links.', buildLink],
  ['TextArea', 'Multi-line input with a character count.', buildTextArea],
  ['Combobox', 'Searchable single select.', buildCombobox],
  ['MultiSelect', 'Several values as tags in the field.', buildMultiSelect],
  ['FileUpload', 'Dropzone and file rows with progress.', buildFileUpload],
  ['Slider', 'A value in a range.', buildSlider],
  ['SegmentedControl', '2–5 instant options.', buildSegmented],
  ['Calendar', 'Month grid with today and selection.', buildCalendar],
  ['DatePicker', 'Date field with popover calendar.', buildDatePicker],
  ['Divider', 'Horizontal, labelled and vertical.', buildDivider],
  ['List item', 'Rows with text, icon or avatar.', buildList],
  ['Table cell', 'Data table cells and an example table.', buildTable],
  ['Image', 'Aspect ratios and fallback.', buildImage],
  ['Carousel', 'Slides, buttons and dots.', buildCarousel],
  ['Tooltip', 'Four placements.', buildTooltip],
  ['Spinner', 'Three sizes, default and inverse.', buildSpinner],
  ['ProgressBar', 'Determinate progress in three tones.', buildProgress],
  ['Skeleton', 'Loading placeholders.', buildSkeleton],
  ['EmptyState', 'Empty, search, error and success.', buildEmptyState],
  ['BlockLoader', 'The Module Aa brand loader.', buildBlockLoader],
  ['Drawer', 'Side panel with filters.', buildDrawer],
  ['BottomSheet', 'Mobile sheet with handle.', buildBottomSheet],
  ['Menu item', 'Menu items and an example menu.', buildMenu],
  ['Accordion item', 'Expandable sections.', buildAccordion],
  ['Breadcrumbs', 'Where you are.', buildBreadcrumbs],
  ['Pagination', 'Numbered and compact.', buildPagination],
  ['Stepper', 'Horizontal and vertical.', buildStepper],
  ['NavBar', 'Web and mobile bars.', buildNavBar],
  ['TabBar item', 'Mobile bottom navigation.', buildTabBar],
];
async function rebuildMoreComponents() {
  await figma.loadAllPagesAsync();
  await figma.setCurrentPageAsync(figma.root.children[0]); // the current page can't be removed
  const names = new Set(MORE.map(([n]) => n.replace(/ (item|cell)$/, '')));
  let removed = 0;
  for (const p of [...figma.root.children]) if (names.has(p.name) && figma.root.children.length > 1) { p.remove(); removed++; }
  const compPage = figma.root.children.find(p => p.name === 'Components');
  if (compPage) for (const n of [...compPage.children]) if (n.type === 'SECTION' && names.has(n.name)) { n.remove(); removed++; }
  log(`Removed ${removed} generated pages`);
  return addMoreComponents();
}
async function addMoreComponents() {
  await setupFonts();
  await loadExisting();
  if (!VARS['bg']) { figma.closePlugin('No Aa NAD library in this file — run "Build library" first.'); return; }
  const sets: Sets = collectSets();
  // Files built on a 3-page plan keep components as sections on a "Components" page.
  const compPage = figma.root.children.find(p => p.name === 'Components');
  if (compPage) { LIMITED = true; GROUP_PAGES['Components'] = compPage; let y = 0; for (const n of compPage.children) y = Math.max(y, n.y + n.height + 200); CURSOR.set(compPage, y); }
  let added = 0, skipped = 0;
  // Calendar must exist before DatePicker uses it; MORE is already in dependency order.
  for (const [name, desc, fn] of MORE) {
    if (sets[name]) { skipped++; continue; }
    try {
      const page = await docPage(name.replace(/ (item|cell)$/, ''), name.replace(/ (item|cell)$/, ''), desc);
      const node = await fn(page, sets);
      if (node.type === 'COMPONENT_SET' || node.type === 'COMPONENT') sets[name] = node as AnyComp;
      finishHost(page); added++;
    } catch (e: any) { warn(`${name}: ${e.message}`); }
  }
  lightCanvas();
  figma.closePlugin(`Aa NAD: added ${added} components${skipped ? `, ${skipped} already present` : ''}.` + (issues.length ? ` ${issues.length} note(s) in the console.` : ''));
}

const CANVAS: Paint[] = [{ type: 'SOLID', color: { r: 0.957, g: 0.957, b: 0.957 } }];
function lightCanvas() { for (const p of figma.root.children) p.backgrounds = CANVAS; }
async function main() {
  if (figma.command === 'cover') return rebuildCover();
  if (figma.command === 'more') return addMoreComponents();
  if (figma.command === 'more-rebuild') return rebuildMoreComponents();
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
