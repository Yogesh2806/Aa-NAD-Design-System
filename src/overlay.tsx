import React, { useRef, useState, useId, useEffect, Children, cloneElement } from './react';
import { cx, Icon, useFocusTrap, useOutside, usePresence } from './util';
function useScrollLock(open: boolean) { useEffect(() => { if (!open) return; const o = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = o; }; }, [open]); }

export type ModalProps = { open: boolean; onClose: () => void; title: string; description?: string; children?: any; footer?: any; size?: 'sm' | 'md' | 'lg' | 'full'; role?: 'dialog' | 'alertdialog'; closeOnScrim?: boolean; inline?: boolean };
/** Blocking dialog. Traps focus, Esc closes, returns focus to the trigger, locks scroll. Use `alertdialog` for destructive confirms. */
export function Modal({ open, onClose, title, description, children, footer, size = 'md', role = 'dialog', closeOnScrim = true, inline }: ModalProps) {
  const ref = useRef<any>(null); const id = useId();
  const [mounted, exiting] = usePresence(open, 200);
  useFocusTrap(open && mounted && !inline, ref, onClose); useScrollLock(open && !inline);
  if (!mounted) return null;
  return (
    <div className={cx('nad-scrim', inline && 'is-inline', exiting && 'is-exiting')} onMouseDown={e => { if (closeOnScrim && e.target === e.currentTarget) onClose(); }}>
      <div ref={ref} className={cx('nad-modal', `nad-modal--${size}`)} role={role} aria-modal="true" aria-labelledby={`${id}-t`} aria-describedby={description ? `${id}-d` : undefined} tabIndex={-1}>
        <header className="nad-modal__head"><div><h2 id={`${id}-t`} className="nad-modal__title">{title}</h2>{description && <p id={`${id}-d`} className="nad-modal__desc">{description}</p>}</div>
          <button type="button" className="nad-btn nad-iconbtn nad-btn--ghost nad-btn--md" aria-label="Close" onClick={onClose}><Icon name="close" size={20} /></button></header>
        {children && <div className="nad-modal__body">{children}</div>}
        {footer && <footer className="nad-modal__foot">{footer}</footer>}
      </div>
    </div>
  );
}

export type DrawerProps = { open: boolean; onClose: () => void; title: string; children?: any; footer?: any; side?: 'start' | 'end'; size?: 'sm' | 'md' | 'lg'; inline?: boolean };
/** Side panel for secondary tasks, filters or navigation. Same focus rules as Modal. */
export function Drawer({ open, onClose, title, children, footer, side = 'end', size = 'md', inline }: DrawerProps) {
  const ref = useRef<any>(null); const id = useId();
  const [mounted, exiting] = usePresence(open, 200);
  useFocusTrap(open && mounted && !inline, ref, onClose); useScrollLock(open && !inline);
  if (!mounted) return null;
  return (
    <div className={cx('nad-scrim', 'nad-scrim--drawer', `nad-scrim--${side}`, inline && 'is-inline', exiting && 'is-exiting')} onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={ref} className={cx('nad-drawer', `nad-drawer--${side}`, `nad-drawer--${size}`)} role="dialog" aria-modal="true" aria-labelledby={`${id}-t`} tabIndex={-1}>
        <header className="nad-modal__head"><h2 id={`${id}-t`} className="nad-modal__title">{title}</h2>
          <button type="button" className="nad-btn nad-iconbtn nad-btn--ghost nad-btn--md" aria-label="Close" onClick={onClose}><Icon name="close" size={20} /></button></header>
        <div className="nad-modal__body">{children}</div>
        {footer && <footer className="nad-modal__foot">{footer}</footer>}
      </div>
    </div>
  );
}

export type BottomSheetProps = { open: boolean; onClose: () => void; title: string; children?: any; footer?: any; inline?: boolean };
/** Mobile sheet from the bottom edge with a grab handle. Use for short pickers and action lists on phones. */
export function BottomSheet({ open, onClose, title, children, footer, inline }: BottomSheetProps) {
  const ref = useRef<any>(null); const id = useId();
  const [mounted, exiting] = usePresence(open, 200);
  useFocusTrap(open && mounted && !inline, ref, onClose); useScrollLock(open && !inline);
  if (!mounted) return null;
  return (
    <div className={cx('nad-scrim', 'nad-scrim--sheet', inline && 'is-inline', exiting && 'is-exiting')} onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={ref} className="nad-sheet" role="dialog" aria-modal="true" aria-labelledby={`${id}-t`} tabIndex={-1}>
        <span className="nad-sheet__handle" aria-hidden="true" />
        <header className="nad-sheet__head"><h2 id={`${id}-t`} className="nad-modal__title">{title}</h2>
          <button type="button" className="nad-btn nad-iconbtn nad-btn--ghost nad-btn--md" aria-label="Close" onClick={onClose}><Icon name="close" size={20} /></button></header>
        <div className="nad-modal__body">{children}</div>
        {footer && <footer className="nad-modal__foot nad-sheet__foot">{footer}</footer>}
      </div>
    </div>
  );
}

export type MenuItem = { id: string; label: string; icon?: string; shortcut?: string; danger?: boolean; disabled?: boolean; onSelect?: () => void; divider?: boolean };
export type MenuProps = { trigger: any; items: MenuItem[]; label?: string; align?: 'start' | 'end'; openOnHover?: boolean; defaultOpen?: boolean };
/** Dropdown of actions. Arrow keys / Home / End / type-ahead; Esc closes and returns focus; flips up near the viewport bottom. */
export function Menu({ trigger, items, label, align = 'start', openOnHover, defaultOpen = false }: MenuProps) {
  const [open, setOpen] = useState(defaultOpen); const [up, setUp] = useState(false);
  const wrap = useRef<any>(null), list = useRef<any>(null), btn = useRef<any>(null); const id = useId();
  useOutside(wrap, open, () => setOpen(false));
  const [mounted, exiting] = usePresence(open, 120);
  const enabled = () => Array.from(list.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])') || []) as HTMLElement[];
  useEffect(() => { if (!open || !mounted) return; const r = wrap.current.getBoundingClientRect(); setUp(window.innerHeight - r.bottom < 240 && r.top > 240); if (!defaultOpen) enabled()[0]?.focus(); }, [open, mounted]);
  const close = (refocus = true) => { setOpen(false); if (refocus) btn.current?.focus(); };
  const onKey = (e: any) => {
    const els = enabled(); const i = els.indexOf(document.activeElement as HTMLElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); els[(i + 1) % els.length]?.focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); els[(i - 1 + els.length) % els.length]?.focus(); }
    else if (e.key === 'Home') { e.preventDefault(); els[0]?.focus(); } else if (e.key === 'End') { e.preventDefault(); els[els.length - 1]?.focus(); }
    else if (e.key === 'Escape') { e.preventDefault(); close(); } else if (e.key === 'Tab') close(false);
    else if (e.key.length === 1) { const m = els.find(el => el.textContent?.trim().toLowerCase().startsWith(e.key.toLowerCase())); m?.focus(); }
  };
  const trig = cloneElement(trigger, { ref: btn, 'aria-haspopup': 'menu', 'aria-expanded': open, 'aria-controls': id, onClick: () => setOpen(o => !o),
    onKeyDown: (e: any) => { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); setOpen(true); } } });
  return (
    <span className="nad-menu" ref={wrap} onMouseEnter={openOnHover ? () => setOpen(true) : undefined} onMouseLeave={openOnHover ? () => setOpen(false) : undefined}>
      {trig}
      {mounted && <ul id={id} ref={list} role="menu" aria-label={label} className={cx('nad-popover', 'nad-menu__list', `nad-menu--${align}`, up && 'is-up', exiting && 'is-exiting')} onKeyDown={onKey}>
        {items.map(it => it.divider ? <li key={it.id} role="separator" className="nad-menu__sep" /> :
          <li key={it.id} role="menuitem" tabIndex={-1} aria-disabled={it.disabled || undefined} className={cx('nad-menu__item', it.danger && 'is-danger')}
            onClick={() => { if (it.disabled) return; it.onSelect?.(); close(); }} onKeyDown={(e: any) => { if ((e.key === 'Enter' || e.key === ' ') && !it.disabled) { e.preventDefault(); it.onSelect?.(); close(); } }}>
            {it.icon && <Icon name={it.icon} size={20} />}<span className="nad-menu__label">{it.label}</span>{it.shortcut && <kbd className="nad-menu__kbd">{it.shortcut}</kbd>}
          </li>)}
      </ul>}
    </span>
  );
}
