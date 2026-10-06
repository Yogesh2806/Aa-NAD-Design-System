import React, { useId, useState, forwardRef } from './react';
import { cx, Icon } from './util';

type FieldBase = { label: string; hideLabel?: boolean; helperText?: string; error?: string; required?: boolean; disabled?: boolean; size?: 'sm' | 'md' | 'lg'; className?: string };
function Field({ id, label, hideLabel, helperText, error, required, className, children, counter }: any) {
  return (
    <div className={cx('nad-field', error && 'is-invalid', className)}>
      <label htmlFor={id} className={cx('nad-field__label', hideLabel && 'nad-sr')}>{label}{required && <span className="nad-field__req" aria-hidden="true"> *</span>}</label>
      {children}
      {(error || helperText || counter) && (
        <div className="nad-field__foot">
          {error ? <p id={`${id}-msg`} className="nad-field__error"><Icon name="alert-circle" variant="filled" size={16} />{error}</p>
            : helperText ? <p id={`${id}-msg`} className="nad-field__help">{helperText}</p> : <span />}
          {counter}
        </div>
      )}
    </div>
  );
}
const describe = (id: string, p: any) => (p.error || p.helperText ? `${id}-msg` : undefined);

export type TextFieldProps = FieldBase & { type?: string; placeholder?: string; value?: string; defaultValue?: string; onChange?: (e: any) => void; prefix?: string; suffix?: string; iconStart?: string; iconEnd?: string; [k: string]: any };
/** Single-line text input with label, helper text, error, icons and prefix/suffix. */
export const TextField = forwardRef(function TextField(p: TextFieldProps, ref: any) {
  const { label, hideLabel, helperText, error, required, disabled, size = 'md', className, prefix, suffix, iconStart, iconEnd, type = 'text', id: idp, ...rest } = p;
  const auto = useId(); const id = idp || auto;
  return (
    <Field {...{ id, label, hideLabel, helperText, error, required, className }}>
      <div className={cx('nad-input', `nad-input--${size}`, disabled && 'is-disabled')}>
        {iconStart && <Icon name={iconStart} size={20} className="nad-input__icon" />}
        {prefix && <span className="nad-input__affix">{prefix}</span>}
        <input ref={ref} id={id} type={type} disabled={disabled} required={required} aria-invalid={!!error || undefined} aria-describedby={describe(id, p)} {...rest} />
        {suffix && <span className="nad-input__affix">{suffix}</span>}
        {iconEnd && <Icon name={iconEnd} size={20} className="nad-input__icon" />}
      </div>
    </Field>
  );
});

export type TextAreaProps = FieldBase & { rows?: number; maxLength?: number; placeholder?: string; value?: string; defaultValue?: string; onChange?: (e: any) => void; [k: string]: any };
/** Multi-line text input; shows a live character count when `maxLength` is set. */
export function TextArea(p: TextAreaProps) {
  const { label, hideLabel, helperText, error, required, disabled, size = 'md', className, rows = 4, maxLength, onChange, id: idp, ...rest } = p;
  const auto = useId(); const id = idp || auto;
  const [n, setN] = useState((p.value ?? p.defaultValue ?? '').length);
  const counter = maxLength ? <span className="nad-field__count" aria-live="polite">{n}/{maxLength}</span> : null;
  return (
    <Field {...{ id, label, hideLabel, helperText, error, required, className, counter }}>
      <div className={cx('nad-input', 'nad-input--area', `nad-input--${size}`, disabled && 'is-disabled')}>
        <textarea id={id} rows={rows} maxLength={maxLength} disabled={disabled} required={required} aria-invalid={!!error || undefined} aria-describedby={describe(id, p)}
          onChange={(e: any) => { setN(e.target.value.length); onChange?.(e); }} {...rest} />
      </div>
    </Field>
  );
}

export type SelectOption = { value: string; label: string; disabled?: boolean };
export type SelectProps = FieldBase & { options: SelectOption[]; placeholder?: string; value?: string; defaultValue?: string; onChange?: (e: any) => void; iconStart?: string; [k: string]: any };
/** Native select, styled — keyboard, screen-reader and mobile pickers come free. */
export function Select(p: SelectProps) {
  const { label, hideLabel, helperText, error, required, disabled, size = 'md', className, options, placeholder, iconStart, id: idp, ...rest } = p;
  const auto = useId(); const id = idp || auto;
  return (
    <Field {...{ id, label, hideLabel, helperText, error, required, className }}>
      <div className={cx('nad-input', 'nad-input--select', `nad-input--${size}`, disabled && 'is-disabled')}>
        {iconStart && <Icon name={iconStart} size={20} className="nad-input__icon" />}
        <select id={id} disabled={disabled} required={required} aria-invalid={!!error || undefined} aria-describedby={describe(id, p)} defaultValue={p.value === undefined && p.defaultValue === undefined && placeholder ? '' : undefined} {...rest}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map(o => <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>)}
        </select>
        <Icon name="chevron-down" size={20} className="nad-input__chev" />
      </div>
    </Field>
  );
}

export type CheckboxProps = { label: any; description?: string; checked?: boolean; defaultChecked?: boolean; indeterminate?: boolean; disabled?: boolean; error?: string; onChange?: (e: any) => void; [k: string]: any };
/** A single yes/no choice, or one of several in a CheckboxGroup. Supports indeterminate. */
export function Checkbox({ label, description, indeterminate, error, disabled, className, id: idp, ...rest }: CheckboxProps) {
  const auto = useId(); const id = idp || auto;
  const ref = (el: any) => { if (el) el.indeterminate = !!indeterminate; };
  return (
    <div className={cx('nad-check', disabled && 'is-disabled', error && 'is-invalid', className)}>
      <span className="nad-check__box">
        <input ref={ref} id={id} type="checkbox" disabled={disabled} aria-invalid={!!error || undefined} aria-describedby={description || error ? `${id}-d` : undefined} {...rest} />
        <svg viewBox="0 0 16 16" aria-hidden="true" className="nad-check__mark"><path d="M3.5 8.5l3 3 6-7" /></svg>
        <svg viewBox="0 0 16 16" aria-hidden="true" className="nad-check__dash"><path d="M4 8h8" /></svg>
      </span>
      <span className="nad-check__text">
        <label htmlFor={id} className="nad-check__label">{label}</label>
        {(description || error) && <span id={`${id}-d`} className={error ? 'nad-field__error' : 'nad-check__desc'}>{error || description}</span>}
      </span>
    </div>
  );
}
export function CheckboxGroup({ legend, children, error, helperText, className }: { legend: string; children: any; error?: string; helperText?: string; className?: string }) {
  return <fieldset className={cx('nad-group', error && 'is-invalid', className)}><legend className="nad-field__label">{legend}</legend>{helperText && <p className="nad-field__help">{helperText}</p>}<div className="nad-group__items">{children}</div>{error && <p className="nad-field__error"><Icon name="alert-circle" variant="filled" size={16} />{error}</p>}</fieldset>;
}

export type RadioGroupProps = { legend: string; name?: string; options: (SelectOption & { description?: string })[]; value?: string; defaultValue?: string; onChange?: (v: string) => void; error?: string; helperText?: string; disabled?: boolean; orientation?: 'vertical' | 'horizontal'; className?: string };
/** One choice from 2–6 visible options. Arrow keys move between options (native). */
export function RadioGroup({ legend, name, options, value, defaultValue, onChange, error, helperText, disabled, orientation = 'vertical', className }: RadioGroupProps) {
  const auto = useId(); const nm = name || auto;
  return (
    <fieldset className={cx('nad-group', `nad-group--${orientation}`, error && 'is-invalid', className)} disabled={disabled}>
      <legend className="nad-field__label">{legend}</legend>
      {helperText && <p className="nad-field__help">{helperText}</p>}
      <div className="nad-group__items" role="presentation">
        {options.map(o => {
          const id = `${nm}-${o.value}`;
          return (
            <div key={o.value} className={cx('nad-radio', (disabled || o.disabled) && 'is-disabled')}>
              <input type="radio" id={id} name={nm} value={o.value} disabled={o.disabled}
                {...(value !== undefined ? { checked: value === o.value } : { defaultChecked: defaultValue === o.value })}
                onChange={() => onChange?.(o.value)} aria-invalid={!!error || undefined} />
              <span className="nad-check__text"><label htmlFor={id} className="nad-check__label">{o.label}</label>{o.description && <span className="nad-check__desc">{o.description}</span>}</span>
            </div>
          );
        })}
      </div>
      {error && <p className="nad-field__error"><Icon name="alert-circle" variant="filled" size={16} />{error}</p>}
    </fieldset>
  );
}

export type SwitchProps = { label: string; description?: string; checked?: boolean; defaultChecked?: boolean; disabled?: boolean; onChange?: (e: any) => void; labelPosition?: 'start' | 'end'; [k: string]: any };
/** Instant on/off setting (no Save button). role="switch". */
export function Switch({ label, description, disabled, labelPosition = 'end', className, id: idp, ...rest }: SwitchProps) {
  const auto = useId(); const id = idp || auto;
  return (
    <div className={cx('nad-switch', `nad-switch--${labelPosition}`, disabled && 'is-disabled', className)}>
      <span className="nad-switch__ctl"><input id={id} type="checkbox" role="switch" disabled={disabled} aria-describedby={description ? `${id}-d` : undefined} {...rest} /><span className="nad-switch__track" aria-hidden="true"><span className="nad-switch__thumb" /></span></span>
      <span className="nad-check__text"><label htmlFor={id} className="nad-check__label">{label}</label>{description && <span id={`${id}-d`} className="nad-check__desc">{description}</span>}</span>
    </div>
  );
}

export type SliderProps = { label: string; min?: number; max?: number; step?: number; value?: number; defaultValue?: number; onChange?: (v: number) => void; showValue?: boolean; formatValue?: (v: number) => string; disabled?: boolean; className?: string };
/** Pick a value on a range. Native range input: arrows, Page Up/Down, Home/End. */
export function Slider({ label, min = 0, max = 100, step = 1, value, defaultValue = 50, onChange, showValue = true, formatValue = String, disabled, className }: SliderProps) {
  const id = useId(); const [v, setV] = useState(value ?? defaultValue); const cur = value ?? v;
  const pct = ((cur - min) / (max - min)) * 100;
  return (
    <div className={cx('nad-field', 'nad-slider', disabled && 'is-disabled', className)}>
      <div className="nad-slider__head"><label htmlFor={id} className="nad-field__label">{label}</label>{showValue && <output htmlFor={id} className="nad-slider__val">{formatValue(cur)}</output>}</div>
      <input id={id} type="range" min={min} max={max} step={step} value={cur} disabled={disabled} aria-valuetext={formatValue(cur)}
        style={{ ['--pct' as any]: `${pct}%` }} onChange={(e: any) => { const n = +e.target.value; setV(n); onChange?.(n); }} />
    </div>
  );
}

export type SegmentedControlProps = { label: string; options: (SelectOption & { icon?: string })[]; value?: string; defaultValue?: string; onChange?: (v: string) => void; size?: 'sm' | 'md'; fullWidth?: boolean; className?: string };
/** 2–5 mutually exclusive views or modes, switched instantly. */
export function SegmentedControl({ label, options, value, defaultValue, onChange, size = 'md', fullWidth, className }: SegmentedControlProps) {
  const nm = useId(); const [v, setV] = useState(value ?? defaultValue ?? options[0]?.value); const cur = value ?? v;
  return (
    <fieldset className={cx('nad-seg', `nad-seg--${size}`, fullWidth && 'nad-seg--full', className)}>
      <legend className="nad-sr">{label}</legend>
      {options.map(o => (
        <label key={o.value} className={cx('nad-seg__opt', cur === o.value && 'is-selected', o.disabled && 'is-disabled')}>
          <input type="radio" name={nm} value={o.value} checked={cur === o.value} disabled={o.disabled} onChange={() => { setV(o.value); onChange?.(o.value); }} />
          {o.icon && <Icon name={o.icon} size={16} />}<span>{o.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
