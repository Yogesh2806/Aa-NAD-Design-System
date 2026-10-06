import React, { useState, useRef, useId, useEffect, useMemo } from './react';
import { cx, Icon, usePresence } from './util';

export type ComboOption = { value: string; label: string; description?: string; icon?: string; disabled?: boolean };
type Common = { label: string; options: ComboOption[]; placeholder?: string; helperText?: string; error?: string; disabled?: boolean; required?: boolean; size?: 'sm' | 'md' | 'lg';
  emptyText?: string; filter?: (o: ComboOption, query: string) => boolean; defaultOpen?: boolean; className?: string };
const defaultFilter = (o: ComboOption, q: string) => o.label.toLowerCase().includes(q.trim().toLowerCase());

function useListbox(items: ComboOption[], onPick: (o: ComboOption) => void, initial = false) {
  const [open, setOpen] = useState(initial); const [active, setActive] = useState(-1);
  const enabled = items.map((o, i) => (o.disabled ? -1 : i)).filter(i => i >= 0);
  const move = (dir: 1 | -1) => { if (!enabled.length) return; const pos = enabled.indexOf(active); setActive(enabled[(pos + dir + enabled.length) % enabled.length] ?? enabled[0]); };
  const onKeyDown = (e: any) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); if (!open) { setOpen(true); setActive(enabled[0] ?? -1); } else move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (!open) { setOpen(true); setActive(enabled[enabled.length - 1] ?? -1); } else move(-1); }
    else if (e.key === 'Enter' && open && active >= 0 && items[active]) { e.preventDefault(); onPick(items[active]); }
    else if (e.key === 'Escape') { if (open) { e.preventDefault(); setOpen(false); } }
    else if (e.key === 'Tab') setOpen(false);
  };
  return { open, setOpen, active, setActive, onKeyDown };
}

function Listbox({ id, items, active, selected, onPick, setActive, multiple, emptyText, exiting }: any) {
  const ref = useRef<any>(null);
  useEffect(() => { ref.current?.querySelector('[data-active="true"]')?.scrollIntoView?.({ block: 'nearest' }); }, [active]);
  return (
    <ul id={id} ref={ref} role="listbox" aria-multiselectable={multiple || undefined} className={cx('nad-popover', 'nad-combo__list', exiting && 'is-exiting')} onMouseDown={(e: any) => e.preventDefault()}>
      {items.length === 0 && <li className="nad-combo__empty" role="presentation">{emptyText}</li>}
      {items.map((o: ComboOption, i: number) => {
        const sel = selected.includes(o.value);
        return (
          <li key={o.value} id={`${id}-o-${i}`} role="option" aria-selected={sel} aria-disabled={o.disabled || undefined} data-active={i === active}
            className={cx('nad-combo__opt', i === active && 'is-active', sel && 'is-selected', o.disabled && 'is-disabled')}
            onMouseMove={() => !o.disabled && setActive(i)} onClick={() => !o.disabled && onPick(o)}>
            {multiple ? <span className="nad-combo__box" aria-hidden="true"><Icon name="checkmark" size={14} /></span> : null}
            {o.icon && <Icon name={o.icon} size={20} />}
            <span className="nad-combo__text"><span>{o.label}</span>{o.description && <span className="nad-combo__desc">{o.description}</span>}</span>
            {!multiple && sel && <Icon name="checkmark" size={20} className="nad-combo__tick" />}
          </li>);
      })}
    </ul>
  );
}

export type ComboboxProps = Common & { value?: string | null; defaultValue?: string | null; onChange?: (value: string | null, option?: ComboOption) => void; clearable?: boolean };
/** Type to filter a long list, pick one. ARIA 1.2 combobox: ↓/↑ move, Enter picks, Esc closes then clears. */
export function Combobox({ label, options, value, defaultValue = null, onChange, placeholder = 'Search…', helperText, error, disabled, required, size = 'md', emptyText = 'No matches', filter = defaultFilter, clearable = true, defaultOpen, className }: ComboboxProps) {
  const [v, setV] = useState<string | null>(value !== undefined ? value : defaultValue); const cur = value !== undefined ? value : v;
  const selectedOpt = options.find(o => o.value === cur);
  const [query, setQuery] = useState(selectedOpt?.label ?? ''); const [typed, setTyped] = useState(false);
  const items = useMemo(() => (typed && query ? options.filter(o => filter(o, query)) : options), [options, query, typed]);
  const id = useId(); const input = useRef<any>(null); const wrap = useRef<any>(null);
  const pick = (o: ComboOption) => { setV(o.value); onChange?.(o.value, o); setQuery(o.label); setTyped(false); lb.setOpen(false); };
  const lb = useListbox(items, pick, defaultOpen);
  const [mounted, exiting] = usePresence(lb.open, 120);
  useEffect(() => { setQuery(selectedOpt?.label ?? ''); }, [cur]);
  const clear = () => { setV(null); onChange?.(null); setQuery(''); setTyped(false); input.current?.focus(); };
  const onKeyDown = (e: any) => { if (e.key === 'Escape' && !lb.open && query && clearable) { e.preventDefault(); clear(); return; } lb.onKeyDown(e); };
  return (
    <div className={cx('nad-field', 'nad-combo', error && 'is-invalid', className)} ref={wrap}
      onBlur={(e: any) => { if (!wrap.current.contains(e.relatedTarget)) { lb.setOpen(false); setQuery(selectedOpt?.label ?? ''); setTyped(false); } }}>
      <label htmlFor={id} className="nad-field__label">{label}{required && <span className="nad-field__req" aria-hidden="true"> *</span>}</label>
      <div className="nad-combo__anchor"><div className={cx('nad-input', `nad-input--${size}`, disabled && 'is-disabled')}>
        <Icon name="search" size={20} className="nad-input__icon" />
        <input ref={input} id={id} role="combobox" aria-expanded={lb.open} aria-controls={`${id}-lb`} aria-autocomplete="list" autoComplete="off"
          aria-activedescendant={lb.open && lb.active >= 0 ? `${id}-lb-o-${lb.active}` : undefined} aria-invalid={!!error || undefined}
          aria-describedby={error || helperText ? `${id}-msg` : undefined} disabled={disabled} required={required} placeholder={placeholder} value={query}
          onChange={(e: any) => { setQuery(e.target.value); setTyped(true); lb.setOpen(true); lb.setActive(-1); }} onKeyDown={onKeyDown} onClick={() => lb.setOpen(true)} />
        {clearable && query && !disabled && <button type="button" className="nad-combo__clear" aria-label={`Clear ${label}`} onClick={clear}><Icon name="close-circle" variant="filled" size={20} /></button>}
        <button type="button" tabIndex={-1} aria-hidden="true" className="nad-combo__toggle" disabled={disabled} onClick={() => { lb.setOpen(!lb.open); input.current?.focus(); }}><Icon name="chevron-down" size={20} className={cx('nad-combo__chev', lb.open && 'is-open')} /></button>
      </div>
      {mounted && <Listbox id={`${id}-lb`} items={items} active={lb.active} selected={cur ? [cur] : []} onPick={pick} setActive={lb.setActive} emptyText={emptyText} exiting={exiting} />}</div>
      <span className="nad-sr" role="status" aria-live="polite">{lb.open ? `${items.length} ${items.length === 1 ? 'result' : 'results'}` : ''}</span>
      {(error || helperText) && <div className="nad-field__foot">{error ? <p id={`${id}-msg`} className="nad-field__error"><Icon name="alert-circle" variant="filled" size={16} />{error}</p> : <p id={`${id}-msg`} className="nad-field__help">{helperText}</p>}</div>}
    </div>
  );
}

export type MultiSelectProps = Common & { value?: string[]; defaultValue?: string[]; onChange?: (values: string[]) => void; max?: number };
/** Pick several from a long list. Choices become removable tags; Backspace on an empty field removes the last one. */
export function MultiSelect({ label, options, value, defaultValue = [], onChange, placeholder = 'Search…', helperText, error, disabled, required, size = 'md', emptyText = 'No matches', filter = defaultFilter, max, defaultOpen, className }: MultiSelectProps) {
  const [v, setV] = useState<string[]>(value ?? defaultValue); const cur = value ?? v;
  const [query, setQuery] = useState(''); const [announce, setAnnounce] = useState('');
  const items = useMemo(() => (query ? options.filter(o => filter(o, query)) : options), [options, query]);
  const id = useId(); const input = useRef<any>(null); const wrap = useRef<any>(null);
  const set = (next: string[], msg: string) => { setV(next); onChange?.(next); setAnnounce(msg); };
  const toggle = (o: ComboOption) => {
    if (cur.includes(o.value)) set(cur.filter(x => x !== o.value), `${o.label} removed`);
    else if (!max || cur.length < max) set([...cur, o.value], `${o.label} added, ${cur.length + 1} selected`);
    else setAnnounce(`You can choose up to ${max}`);
    setQuery(''); input.current?.focus();
  };
  const lb = useListbox(items, toggle, defaultOpen);
  const [mounted, exiting] = usePresence(lb.open, 120);
  const onKeyDown = (e: any) => {
    if (e.key === 'Backspace' && !query && cur.length) { const last = options.find(o => o.value === cur[cur.length - 1]); set(cur.slice(0, -1), `${last?.label ?? 'Item'} removed`); return; }
    lb.onKeyDown(e);
  };
  return (
    <div className={cx('nad-field', 'nad-combo', 'nad-multi', error && 'is-invalid', className)} ref={wrap}
      onBlur={(e: any) => { if (!wrap.current.contains(e.relatedTarget)) { lb.setOpen(false); setQuery(''); } }}>
      <label htmlFor={id} className="nad-field__label">{label}{required && <span className="nad-field__req" aria-hidden="true"> *</span>}</label>
      <div className="nad-combo__anchor"><div className={cx('nad-input', 'nad-multi__box', `nad-input--${size}`, disabled && 'is-disabled')} onClick={() => input.current?.focus()}>
        <ul className="nad-multi__tags" aria-label={`Selected ${label}`}>
          {cur.map(val => { const o = options.find(x => x.value === val); if (!o) return null; return (
            <li key={val} className="nad-tag nad-tone--neutral nad-multi__tag"><span className="nad-tag__main">{o.label}</span>
              <button type="button" className="nad-tag__x" disabled={disabled} aria-label={`Remove ${o.label}`} onClick={(e: any) => { e.stopPropagation(); toggle(o); }}><Icon name="close" size={14} /></button></li>); })}
        </ul>
        <input ref={input} id={id} role="combobox" aria-expanded={lb.open} aria-controls={`${id}-lb`} aria-autocomplete="list" autoComplete="off"
          aria-activedescendant={lb.open && lb.active >= 0 ? `${id}-lb-o-${lb.active}` : undefined} aria-invalid={!!error || undefined}
          aria-describedby={error || helperText ? `${id}-msg` : undefined} disabled={disabled} placeholder={cur.length ? '' : placeholder} value={query}
          onChange={(e: any) => { setQuery(e.target.value); lb.setOpen(true); lb.setActive(-1); }} onKeyDown={onKeyDown} onFocus={() => lb.setOpen(true)} />
        <Icon name="chevron-down" size={20} className={cx('nad-input__icon', 'nad-combo__chev', lb.open && 'is-open')} />
      </div>
      {mounted && <Listbox id={`${id}-lb`} items={items} active={lb.active} selected={cur} onPick={toggle} setActive={lb.setActive} multiple emptyText={emptyText} exiting={exiting} />}</div>
      <span className="nad-sr" role="status" aria-live="polite">{announce}</span>
      {(error || helperText || max) && <div className="nad-field__foot">{error ? <p id={`${id}-msg`} className="nad-field__error"><Icon name="alert-circle" variant="filled" size={16} />{error}</p> : <p id={`${id}-msg`} className="nad-field__help">{helperText}</p>}{max && <span className="nad-field__count">{cur.length}/{max}</span>}</div>}
    </div>
  );
}

const A6 = ['tl # # tr', '# . . #', '# . . #', '# # # #', '# . . #', '# . . #'];
const A2 = ['. . .', '. . .', '# # tr', '. . #', 'tl # #', 'bl # #'];
/** Brand loader: the Module Aa blocks fill in sequence. Pulses as a whole under reduced motion. */
export function BlockLoader({ size = 48, label = 'Loading', tone = 'default' }: { size?: number; label?: string; tone?: 'default' | 'inverse' }) {
  const c = 4, g = 1, cells: any[] = []; let n = 0;
  const add = (rows: string[], ox: number) => rows.forEach((row, ri) => row.split(' ').forEach((k, ci) => {
    if (k === '.') return; const x = ox + ci * (c + g), y = ri * (c + g); const d = n++ * 45;
    const shape = k === '#' ? <rect x={x} y={y} width={c} height={c} rx={0.9} /> : k === 'tl' ? <path d={`M${x},${y + c}A${c},${c} 0 0 1 ${x + c},${y}V${y + c}Z`} /> : k === 'tr' ? <path d={`M${x},${y}A${c},${c} 0 0 1 ${x + c},${y + c}H${x}Z`} /> : <path d={`M${x},${y}H${x + c}V${y + c}A${c},${c} 0 0 1 ${x},${y}Z`} />;
    cells.push(<g key={n} style={{ animationDelay: `${d}ms` }}>{shape}</g>);
  }));
  add(A6, 0); add(A2, 4 * (c + g) + 2);
  const w = 4 * (c + g) + 2 + 3 * (c + g) - g, h = 6 * (c + g) - g;
  return <span className={cx('nad-blockloader', tone === 'inverse' && 'nad-blockloader--inverse')} role="status">
    <svg viewBox={`0 0 ${w} ${h}`} width={size} height={size * h / w} aria-hidden="true" fill="currentColor">{cells}</svg><span className="nad-sr">{label}</span></span>;
}
