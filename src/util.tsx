import React, { useEffect } from './react';
import { ICONS } from './icons.generated';
export const cx = (...a: any[]) => a.filter(Boolean).join(' ');

export type IconProps = { name: string; variant?: 'outline' | 'filled'; size?: 16 | 20 | 24 | 32 | number; label?: string; className?: string; style?: any };
/** Ionicons outline + filled. Decorative unless `label` is given. */
export function Icon({ name, variant = 'outline', size = 20, label, className, style }: IconProps) {
  const e = ICONS[name] || {};
  const html = (variant === 'filled' ? e.f || e.o : e.o || e.f) || '';
  return (
    <svg className={cx('nad-icon', className)} viewBox="0 0 512 512" width={size} height={size} fill="currentColor" stroke="currentColor"
      style={{ strokeWidth: 0, ...style }} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}
      focusable="false" dangerouslySetInnerHTML={{ __html: html.replace(/stroke="currentColor"/g, 'stroke="currentColor" fill="none"') }} />
  );
}
export const iconNames = () => Object.keys(ICONS);

/** Escape key + focus trap for overlays. */
export function useFocusTrap(open: boolean, ref: any, onClose?: () => void) {
  useEffect(() => {
    if (!open || !ref.current) return;
    const prev = document.activeElement as HTMLElement | null;
    const sel = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
    const els = () => Array.from(ref.current?.querySelectorAll(sel) || []) as HTMLElement[];
    (els()[0] || ref.current).focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) { e.stopPropagation(); onClose(); }
      if (e.key !== 'Tab') return;
      const list = els(); if (!list.length) return;
      const first = list[0], last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey, true);
    return () => { document.removeEventListener('keydown', onKey, true); prev?.focus?.(); };
  }, [open]);
}
export function useOutside(ref: any, open: boolean, cb: () => void) {
  useEffect(() => {
    if (!open) return;
    const h = (e: any) => { if (ref.current && !ref.current.contains(e.target)) cb(); };
    document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h);
  }, [open]);
}

const reduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
/** Keeps an element mounted while it plays its exit animation. Returns [mounted, exiting]. */
export function usePresence(open: boolean, exitMs = 200): [boolean, boolean] {
  const [mounted, setMounted] = (React as any).useState(open);
  const [exiting, setExiting] = (React as any).useState(false);
  useEffect(() => {
    if (open) { setMounted(true); setExiting(false); return; }
    if (!mounted) return;
    if (reduced()) { setMounted(false); return; }
    setExiting(true);
    const t = setTimeout(() => { setMounted(false); setExiting(false); }, exitMs);
    return () => clearTimeout(t);
  }, [open]);
  return [mounted, exiting];
}

/** Sets data-theme on <html> from the OS: prefers-contrast: more → high-contrast, dark scheme → dark, else light. Returns an unsubscribe function. */
export function watchSystemTheme(el: HTMLElement = document.documentElement) {
  const qc = matchMedia('(prefers-contrast: more)'), qd = matchMedia('(prefers-color-scheme: dark)');
  const apply = () => el.setAttribute('data-theme', qc.matches ? 'high-contrast' : qd.matches ? 'dark' : 'light');
  apply(); qc.addEventListener('change', apply); qd.addEventListener('change', apply);
  return () => { qc.removeEventListener('change', apply); qd.removeEventListener('change', apply); };
}
