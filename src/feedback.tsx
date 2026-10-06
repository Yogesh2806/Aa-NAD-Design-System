import React, { useState, useEffect, useRef, useId, createContext, useContext, useCallback, cloneElement } from './react';
import { cx, Icon } from './util';
const ICON: any = { info: 'information-circle', success: 'checkmark-circle', warning: 'warning', danger: 'alert-circle', neutral: 'information-circle' };

export type AlertProps = { tone?: 'info' | 'success' | 'warning' | 'danger' | 'neutral'; title?: string; children?: any; icon?: string | false; actions?: any; onDismiss?: () => void; variant?: 'subtle' | 'outline'; live?: boolean; className?: string };
/** Inline, persistent message about the page or a section. role="alert" only for urgent, newly-shown errors (`live`). */
export function Alert({ tone = 'info', title, children, icon, actions, onDismiss, variant = 'subtle', live, className }: AlertProps) {
  return (
    <div className={cx('nad-alert', `nad-alert--${tone}`, `nad-alert--${variant}`, className)} role={live ? (tone === 'danger' ? 'alert' : 'status') : undefined}>
      {icon !== false && <Icon name={icon || ICON[tone]} variant="filled" size={20} className="nad-alert__icon" />}
      <div className="nad-alert__body">{title && <p className="nad-alert__title">{title}</p>}{children && <div className="nad-alert__text">{children}</div>}{actions && <div className="nad-alert__actions">{actions}</div>}</div>
      {onDismiss && <button type="button" className="nad-btn nad-iconbtn nad-btn--ghost nad-btn--sm nad-alert__x" aria-label="Dismiss" onClick={onDismiss}><Icon name="close" size={20} /></button>}
    </div>
  );
}

type ToastT = { id: number; title: string; description?: string; tone?: 'neutral' | 'success' | 'danger' | 'warning' | 'info'; action?: { label: string; onClick: () => void }; duration?: number };
const ToastCtx = createContext<any>(null);
/** Wrap the app once; call `useToast().show({...})`. Toasts stack bottom-centre (mobile) / bottom-right (desktop). */
export function ToastProvider({ children, placement = 'bottom-end' }: { children: any; placement?: 'bottom-end' | 'bottom-center' | 'top-end' }) {
  const [list, setList] = useState<ToastT[]>([]);
  const dismiss = useCallback((id: number) => setList(l => l.filter(t => t.id !== id)), []);
  const show = useCallback((t: Omit<ToastT, 'id'>) => { const id = Date.now() + Math.random(); setList(l => [...l.slice(-2), { duration: 5000, ...t, id }]); return id; }, []);
  return <ToastCtx.Provider value={{ show, dismiss }}>{children}
    <div className={cx('nad-toaster', `nad-toaster--${placement}`)} role="region" aria-label="Notifications">
      <div role="status" aria-live="polite" aria-atomic="false">{list.map(t => <Toast key={t.id} {...t} onDismiss={() => dismiss(t.id)} />)}</div>
    </div>
  </ToastCtx.Provider>;
}
export const useToast = () => useContext(ToastCtx) || { show: () => 0, dismiss: () => {} };
/** One toast. Auto-dismisses (default 5s; never when it has an action), pauses on hover/focus. */
export function Toast({ title, description, tone = 'neutral', action, duration = 5000, onDismiss }: Omit<ToastT, 'id'> & { onDismiss?: () => void }) {
  const [paused, setPaused] = useState(false); const [leaving, setLeaving] = useState<0 | 1 | -1 | 2>(0); const [dx, setDx] = useState(0); const start = useRef<number | null>(null);
  const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const close = (dir: 1 | -1 | 2 = 2) => { if (!onDismiss) return; if (reduce) return onDismiss(); setLeaving(dir); setTimeout(onDismiss, 200); };
  useEffect(() => { if (paused || action || !duration || !onDismiss) return; const t = setTimeout(() => close(), duration); return () => clearTimeout(t); }, [paused]);
  const drag = {
    onPointerDown: (e: any) => { if (e.target.closest('button')) return; start.current = e.clientX; e.currentTarget.setPointerCapture?.(e.pointerId); },
    onPointerMove: (e: any) => { if (start.current !== null) setDx(e.clientX - start.current); },
    onPointerUp: () => { if (start.current === null) return; start.current = null; if (Math.abs(dx) > 80) close(dx > 0 ? 1 : -1); else setDx(0); },
  };
  const style = leaving === 1 || leaving === -1 ? { transform: `translateX(${leaving * 120}%)`, opacity: 0 } : dx ? { transform: `translateX(${dx}px)`, opacity: Math.max(0.3, 1 - Math.abs(dx) / 240), transition: 'none' } : undefined;
  return (
    <div className={cx('nad-toast', `nad-toast--${tone}`, leaving === 2 && 'is-exiting')} style={style} {...(onDismiss ? drag : {})} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      {tone !== 'neutral' && <Icon name={ICON[tone]} variant="filled" size={20} className="nad-toast__icon" />}
      <div className="nad-toast__body"><p className="nad-toast__title">{title}</p>{description && <p className="nad-toast__desc">{description}</p>}</div>
      {action && <button type="button" className="nad-toast__action" onClick={() => { action.onClick(); close(); }}>{action.label}</button>}
      {onDismiss && <button type="button" className="nad-toast__x" aria-label="Dismiss notification" onClick={() => close()}><Icon name="close" size={20} /></button>}
    </div>
  );
}

export type TooltipProps = { content: string; children: any; placement?: 'top' | 'bottom' | 'start' | 'end'; delay?: number };
/** Short label for an icon or truncated text. Shows on hover AND focus; Esc hides. Never put interactive content inside. */
export function Tooltip({ content, children, placement = 'top', delay = 300 }: TooltipProps) {
  const [open, setOpen] = useState(false); const id = useId(); const t = useRef<any>(null);
  const show = () => { clearTimeout(t.current); t.current = setTimeout(() => setOpen(true), delay); };
  const hide = () => { clearTimeout(t.current); setOpen(false); };
  useEffect(() => { if (!open) return; const k = (e: any) => e.key === 'Escape' && hide(); document.addEventListener('keydown', k); return () => document.removeEventListener('keydown', k); }, [open]);
  return <span className="nad-tooltip-anchor" onMouseEnter={show} onMouseLeave={hide} onFocus={() => { clearTimeout(t.current); setOpen(true); }} onBlur={hide}>
    {cloneElement(children, { 'aria-describedby': id })}
    <span id={id} role="tooltip" className={cx('nad-tooltip', `nad-tooltip--${placement}`, open && 'is-open')}>{content}</span>
  </span>;
}
