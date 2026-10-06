import React, { useState, useRef, useEffect, useId } from './react';
import { cx, Icon, useOutside, usePresence } from './util';
const same = (a?: Date | null, b?: Date | null) => !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

export type CalendarProps = { value?: Date | null; defaultValue?: Date | null; onChange?: (d: Date) => void; min?: Date; max?: Date; locale?: string; weekStartsOn?: 0 | 1; isDateDisabled?: (d: Date) => boolean; className?: string };
/** Month grid. Arrow keys move by day/week, Page Up/Down by month, Home/End to week edges. Localised via Intl. */
export function Calendar({ value, defaultValue = null, onChange, min, max, locale, weekStartsOn = 1, isDateDisabled, className }: CalendarProps) {
  const [sel, setSel] = useState<Date | null>(value ?? defaultValue); const cur = value !== undefined ? value : sel;
  const [focus, setFocus] = useState<Date>(cur || new Date());
  const [view, setView] = useState(new Date(focus.getFullYear(), focus.getMonth(), 1));
  const grid = useRef<any>(null); const kb = useRef(false);
  useEffect(() => { if (kb.current) grid.current?.querySelector('[tabindex="0"]')?.focus(); kb.current = false; }, [focus]);
  const today = new Date();
  const fmtMonth = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' });
  const fmtDay = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  const fmtFull = new Intl.DateTimeFormat(locale, { dateStyle: 'full' });
  const start = addDays(view, -((view.getDay() - weekStartsOn + 7) % 7));
  const days = Array.from({ length: 42 }, (_, i) => addDays(start, i));
  const disabled = (d: Date) => (min && d < addDays(min, 0) && !same(d, min)) || (max && d > max && !same(d, max)) || !!isDateDisabled?.(d);
  const move = (d: Date) => { kb.current = true; setFocus(d); if (d.getMonth() !== view.getMonth() || d.getFullYear() !== view.getFullYear()) setView(new Date(d.getFullYear(), d.getMonth(), 1)); };
  const pick = (d: Date) => { if (disabled(d)) return; setSel(d); setFocus(d); onChange?.(d); };
  const onKey = (e: any) => {
    const m: any = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
    if (m[e.key] !== undefined) { e.preventDefault(); move(addDays(focus, m[e.key])); }
    else if (e.key === 'PageUp' || e.key === 'PageDown') { e.preventDefault(); const d = new Date(focus); d.setMonth(d.getMonth() + (e.key === 'PageUp' ? -1 : 1)); move(d); }
    else if (e.key === 'Home') { e.preventDefault(); move(addDays(focus, -((focus.getDay() - weekStartsOn + 7) % 7))); }
    else if (e.key === 'End') { e.preventDefault(); move(addDays(focus, 6 - ((focus.getDay() - weekStartsOn + 7) % 7))); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(focus); }
  };
  const shift = (n: number) => { const v = new Date(view.getFullYear(), view.getMonth() + n, 1); setView(v); setFocus(v); };
  const titleId = useId();
  return (
    <div className={cx('nad-cal', className)}>
      <div className="nad-cal__head">
        <button type="button" className="nad-btn nad-iconbtn nad-btn--ghost nad-btn--sm" aria-label="Previous month" onClick={() => shift(-1)}><Icon name="chevron-back" size={20} /></button>
        <h2 id={titleId} className="nad-cal__title" aria-live="polite">{fmtMonth.format(view)}</h2>
        <button type="button" className="nad-btn nad-iconbtn nad-btn--ghost nad-btn--sm" aria-label="Next month" onClick={() => shift(1)}><Icon name="chevron-forward" size={20} /></button>
      </div>
      <table className="nad-cal__grid" role="grid" aria-labelledby={titleId} ref={grid} onKeyDown={onKey}>
        <thead><tr>{days.slice(0, 7).map(d => <th key={+d} scope="col" abbr={fmtDay.format(d)}>{fmtDay.format(d).slice(0, 2)}</th>)}</tr></thead>
        <tbody>{[0, 1, 2, 3, 4, 5].map(w => (
          <tr key={w}>{days.slice(w * 7, w * 7 + 7).map(d => {
            const out = d.getMonth() !== view.getMonth(), dis = disabled(d), s = same(d, cur);
            return (
              <td key={+d} role="gridcell" aria-selected={s || undefined}>
                <button type="button" tabIndex={same(d, focus) ? 0 : -1} disabled={dis} aria-label={fmtFull.format(d)} aria-current={same(d, today) ? 'date' : undefined}
                  className={cx('nad-cal__day', out && 'is-outside', s && 'is-selected', same(d, today) && 'is-today')} onClick={() => pick(d)}>{d.getDate()}</button>
              </td>);
          })}</tr>))}</tbody>
      </table>
    </div>
  );
}

export type DatePickerProps = { label: string; value?: Date | null; defaultValue?: Date | null; onChange?: (d: Date) => void; helperText?: string; error?: string; disabled?: boolean; min?: Date; max?: Date; locale?: string; placeholder?: string; className?: string };
/** A field that opens a Calendar popover. Esc closes and returns focus. On mobile prefer the native date input. */
export function DatePicker({ label, value, defaultValue = null, onChange, helperText, error, disabled, min, max, locale, placeholder = 'Select a date', className }: DatePickerProps) {
  const [open, setOpen] = useState(false); const [v, setV] = useState<Date | null>(value ?? defaultValue); const cur = value !== undefined ? value : v;
  const ref = useRef<any>(null), btn = useRef<any>(null); const id = useId();
  useOutside(ref, open, () => setOpen(false));
  const [mounted, exiting] = usePresence(open, 120);
  const fmt = new Intl.DateTimeFormat(locale, { dateStyle: 'medium' });
  return (
    <div className={cx('nad-field', 'nad-datepicker', error && 'is-invalid', className)} ref={ref} onKeyDown={(e: any) => { if (e.key === 'Escape' && open) { setOpen(false); btn.current?.focus(); } }}>
      <span className="nad-field__label" id={`${id}-l`}>{label}</span>
      <button ref={btn} type="button" className={cx('nad-input', 'nad-input--md', 'nad-input--button', disabled && 'is-disabled')} disabled={disabled}
        aria-haspopup="dialog" aria-expanded={open} aria-labelledby={`${id}-l ${id}-v`} aria-describedby={error || helperText ? `${id}-msg` : undefined} onClick={() => setOpen(o => !o)}>
        <Icon name="calendar" size={20} className="nad-input__icon" />
        <span id={`${id}-v`} className={cur ? '' : 'nad-input__ph'}>{cur ? fmt.format(cur) : placeholder}</span>
      </button>
      {mounted && <div className={cx('nad-popover', 'nad-datepicker__pop', exiting && 'is-exiting')} role="dialog" aria-label={`Choose ${label}`}>
        <Calendar value={cur} min={min} max={max} locale={locale} onChange={d => { setV(d); onChange?.(d); setOpen(false); btn.current?.focus(); }} />
      </div>}
      {(error || helperText) && <div className="nad-field__foot">{error ? <p id={`${id}-msg`} className="nad-field__error"><Icon name="alert-circle" variant="filled" size={16} />{error}</p> : <p id={`${id}-msg`} className="nad-field__help">{helperText}</p>}</div>}
    </div>
  );
}
