import React, { useState, Children } from './react';
import { cx, Icon } from './util';
type Tone = 'neutral' | 'inverse' | 'danger' | 'warning' | 'success' | 'info' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'pink';

export type BadgeProps = { tone?: Tone; variant?: 'subtle' | 'solid' | 'outline'; size?: 'sm' | 'md'; icon?: string; dot?: boolean; count?: number; max?: number; children?: any; className?: string };
/** Short status or count. Not interactive. Pair colour with a word or icon. */
export function Badge({ tone = 'neutral', variant = 'subtle', size = 'md', icon, dot, count, max = 99, children, className }: BadgeProps) {
  const content = count !== undefined ? (count > max ? `${max}+` : String(count)) : children;
  return <span className={cx('nad-badge', `nad-tone--${tone}`, `nad-badge--${variant}`, `nad-badge--${size}`, dot && 'nad-badge--dot', className)}>
    {dot && <span className="nad-badge__dot" aria-hidden="true" />}{icon && <Icon name={icon} size={size === 'sm' ? 12 : 14} />}{content}
  </span>;
}

export type TagProps = { tone?: Tone; icon?: string; onRemove?: () => void; removeLabel?: string; selected?: boolean; onClick?: () => void; disabled?: boolean; children: any; className?: string };
/** Keyword, filter chip or selected value. Removable and/or selectable. */
export function Tag({ tone = 'neutral', icon, onRemove, removeLabel, selected, onClick, disabled, children, className }: TagProps) {
  const body = <>{icon && <Icon name={icon} size={14} />}<span>{children}</span></>;
  return (
    <span className={cx('nad-tag', `nad-tone--${tone}`, selected && 'is-selected', disabled && 'is-disabled', className)}>
      {onClick ? <button type="button" className="nad-tag__main" aria-pressed={selected} disabled={disabled} onClick={onClick}>{selected && <Icon name="checkmark" size={14} />}{body}</button> : <span className="nad-tag__main">{body}</span>}
      {onRemove && <button type="button" className="nad-tag__x" disabled={disabled} aria-label={removeLabel || `Remove ${typeof children === 'string' ? children : ''}`} onClick={onRemove}><Icon name="close" size={14} /></button>}
    </span>
  );
}

const HUES = ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'teal', 'cyan', 'blue', 'indigo', 'violet', 'pink'];
const hueFor = (s: string) => HUES[[...s].reduce((a, c) => a + c.charCodeAt(0), 0) % HUES.length];
const initials = (n: string) => n.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
export type AvatarProps = { name: string; src?: string; size?: 24 | 32 | 40 | 48 | 64 | 96; shape?: 'circle' | 'square'; tone?: string; status?: 'online' | 'busy' | 'away' | 'offline'; decorative?: boolean; className?: string };
/** A person. Photo or illustration → initials → icon fallback. Colour is derived from the name. */
export function Avatar({ name, src, size = 40, shape = 'circle', tone, status, decorative, className }: AvatarProps) {
  const [err, setErr] = useState(false); const hue = tone || hueFor(name || '?');
  const ini = name ? initials(name) : '';
  return (
    <span className={cx('nad-avatar', `nad-avatar--${shape}`, `nad-tone--${hue}`, className)} style={{ width: size, height: size, fontSize: Math.round(size * 0.4) }}
      role={decorative ? undefined : 'img'} aria-label={decorative ? undefined : name} aria-hidden={decorative || undefined}>
      {src && !err ? <img src={src} alt="" onError={() => setErr(true)} /> : ini ? <span aria-hidden="true">{ini}</span> : <Icon name="person" variant="filled" size={Math.round(size * 0.55)} />}
      {status && <span className={cx('nad-avatar__status', `is-${status}`)} title={status}><span className="nad-sr">{status}</span></span>}
    </span>
  );
}
export function AvatarGroup({ children, max = 4, size = 32, label }: { children: any; max?: number; size?: 24 | 32 | 40 | 48; label?: string }) {
  const items = Children.toArray(children); const extra = items.length - max;
  return <span className="nad-avatar-group" role="group" aria-label={label || `${items.length} people`}>
    {items.slice(0, max).map((c: any, i: number) => React.cloneElement(c, { key: i, size }))}
    {extra > 0 && <span className="nad-avatar nad-avatar--circle nad-tone--neutral" style={{ width: size, height: size, fontSize: Math.round(size * 0.36) }} aria-label={`and ${extra} more`} role="img">+{extra}</span>}
  </span>;
}

export type CardProps = { title?: string; subtitle?: string; media?: any; actions?: any; footer?: any; variant?: 'outline' | 'elevated' | 'filled'; href?: string; onClick?: () => void; selected?: boolean; padding?: 'sm' | 'md' | 'lg'; children?: any; className?: string };
/** Groups content about one subject. Whole-card links use a stretched title link (one tab stop). */
export function Card({ title, subtitle, media, actions, footer, variant = 'outline', href, onClick, selected, padding = 'md', children, className }: CardProps) {
  const interactive = !!(href || onClick);
  const T = title && (href ? <a href={href} className="nad-card__link">{title}</a> : onClick ? <button type="button" className="nad-card__link" onClick={onClick}>{title}</button> : title);
  return (
    <article className={cx('nad-card', `nad-card--${variant}`, `nad-card--pad-${padding}`, interactive && 'is-interactive', selected && 'is-selected', className)}>
      {media && <div className="nad-card__media">{media}</div>}
      <div className="nad-card__body">
        {(title || actions) && <header className="nad-card__head"><div>{title && <h3 className="nad-card__title">{T}</h3>}{subtitle && <p className="nad-card__sub">{subtitle}</p>}</div>{actions && <div className="nad-card__actions">{actions}</div>}</header>}
        {children}
      </div>
      {footer && <footer className="nad-card__foot">{footer}</footer>}
    </article>
  );
}
/** Responsive card grid; `animateIn` fades cards up in a short stagger. */
export function CardGroup({ children, min = 240, animateIn }: { children: any; min?: number; animateIn?: boolean }) { return <div className={cx('nad-card-group', animateIn && 'nad-stagger')} style={{ gridTemplateColumns: `repeat(auto-fill, minmax(min(${min}px, 100%), 1fr))` }}>{children}</div>; }

export function Divider({ orientation = 'horizontal', label, decorative = false }: { orientation?: 'horizontal' | 'vertical'; label?: string; decorative?: boolean }) {
  if (label) return <div className="nad-divider nad-divider--label" role={decorative ? 'none' : 'separator'}><span>{label}</span></div>;
  return <div className={cx('nad-divider', `nad-divider--${orientation}`)} role={decorative ? 'none' : 'separator'} aria-orientation={orientation} />;
}

export type ListItem = { id: string; title: string; description?: string; icon?: string; avatar?: any; meta?: any; href?: string; onClick?: () => void; disabled?: boolean };
/** Vertical list of rows; rows can be links or buttons. */
export function List({ items, ordered, dividers = true, label, animateIn, className }: { items: ListItem[]; ordered?: boolean; dividers?: boolean; label?: string; animateIn?: boolean; className?: string }) {
  const Tag: any = ordered ? 'ol' : 'ul';
  return <Tag className={cx('nad-list', dividers && 'nad-list--dividers', animateIn && 'nad-stagger', className)} aria-label={label}>
    {items.map(it => {
      const inner = <>{it.avatar || (it.icon && <span className="nad-list__icon"><Icon name={it.icon} size={20} /></span>)}<span className="nad-list__text"><span className="nad-list__title">{it.title}</span>{it.description && <span className="nad-list__desc">{it.description}</span>}</span>{it.meta && <span className="nad-list__meta">{it.meta}</span>}{(it.href || it.onClick) && <Icon name="chevron-forward" size={16} className="nad-list__chev" />}</>;
      return <li key={it.id} className={cx('nad-list__item', it.disabled && 'is-disabled')}>
        {it.href ? <a className="nad-list__row is-action" href={it.href}>{inner}</a> : it.onClick ? <button type="button" className="nad-list__row is-action" onClick={it.onClick} disabled={it.disabled}>{inner}</button> : <div className="nad-list__row">{inner}</div>}
      </li>;
    })}
  </Tag>;
}

export type Column = { key: string; header: string; align?: 'start' | 'end' | 'center'; sortable?: boolean; render?: (row: any) => any; width?: string };
/** Data table with sortable columns, sticky header and caption. Scrolls horizontally on small screens. */
export function Table({ columns, rows, caption, hideCaption, rowKey = 'id', striped, density = 'md', emptyText = 'No results', className }: { columns: Column[]; rows: any[]; caption: string; hideCaption?: boolean; rowKey?: string; striped?: boolean; density?: 'sm' | 'md'; emptyText?: string; className?: string }) {
  const [sort, setSort] = useState<{ key: string; dir: 'ascending' | 'descending' } | null>(null);
  const sorted = sort ? [...rows].sort((a, b) => { const x = a[sort.key], y = b[sort.key]; const r = x < y ? -1 : x > y ? 1 : 0; return sort.dir === 'ascending' ? r : -r; }) : rows;
  return (
    <div className={cx('nad-table-wrap', className)} tabIndex={0} role="region" aria-label={caption}>
      <table className={cx('nad-table', striped && 'nad-table--striped', `nad-table--${density}`)}>
        <caption className={hideCaption ? 'nad-sr' : ''}>{caption}</caption>
        <thead><tr>{columns.map(c => (
          <th key={c.key} scope="col" style={{ width: c.width, textAlign: c.align === 'end' ? 'right' : c.align === 'center' ? 'center' : 'left' }} aria-sort={sort?.key === c.key ? sort.dir : c.sortable ? 'none' : undefined}>
            {c.sortable ? <button type="button" className="nad-table__sort" onClick={() => setSort(s => ({ key: c.key, dir: s?.key === c.key && s.dir === 'ascending' ? 'descending' : 'ascending' }))}>
              {c.header}<Icon name={sort?.key === c.key ? (sort.dir === 'ascending' ? 'arrow-up' : 'arrow-down') : 'swap-vertical'} size={14} /></button> : c.header}
          </th>))}</tr></thead>
        <tbody>{sorted.length ? sorted.map(r => <tr key={r[rowKey]}>{columns.map(c => <td key={c.key} style={{ textAlign: c.align === 'end' ? 'right' : c.align === 'center' ? 'center' : 'left' }}>{c.render ? c.render(r) : r[c.key]}</td>)}</tr>)
          : <tr><td colSpan={columns.length} className="nad-table__empty">{emptyText}</td></tr>}</tbody>
      </table>
    </div>
  );
}

export type ImageProps = { src: string; alt: string; ratio?: '1:1' | '4:3' | '16:9' | '3:2' | 'auto'; srcSet?: string; sizes?: string; fit?: 'cover' | 'contain'; radius?: 'none' | 'sm' | 'md' | 'lg'; fallback?: any; className?: string };
/** Responsive image with aspect ratio, lazy loading, srcset and a fallback. `alt=""` only when decorative. */
export function Image({ src, alt, ratio = 'auto', srcSet, sizes, fit = 'cover', radius = 'md', fallback, className }: ImageProps) {
  const [err, setErr] = useState(false);
  return <span className={cx('nad-image', `nad-radius--${radius}`, className)} style={{ aspectRatio: ratio === 'auto' ? undefined : ratio.replace(':', ' / ') }}>
    {err ? (fallback || <span className="nad-image__fallback" role="img" aria-label={alt || undefined}><Icon name="image" size={32} /></span>)
      : <img src={src} srcSet={srcSet} sizes={sizes} alt={alt} loading="lazy" decoding="async" style={{ objectFit: fit }} onError={() => setErr(true)} />}
  </span>;
}

export function Skeleton({ shape = 'text', width, height, lines = 1, className }: { shape?: 'text' | 'rect' | 'circle'; width?: number | string; height?: number | string; lines?: number; className?: string }) {
  if (shape === 'text' && lines > 1) return <span className={cx('nad-skel-stack', className)} aria-hidden="true">{Array.from({ length: lines }, (_, i) => <span key={i} className="nad-skel nad-skel--text" style={{ width: i === lines - 1 ? '60%' : width || '100%' }} />)}</span>;
  return <span className={cx('nad-skel', `nad-skel--${shape}`, className)} style={{ width, height }} aria-hidden="true" />;
}
export function SkeletonGroup({ label = 'Loading', children }: { label?: string; children: any }) { return <div role="status" aria-live="polite" aria-busy="true"><span className="nad-sr">{label}</span>{children}</div>; }

export function Spinner({ size = 'md', label = 'Loading', tone = 'default' }: { size?: 'sm' | 'md' | 'lg'; label?: string; tone?: 'default' | 'inverse' }) {
  return <span className={cx('nad-spinner', `nad-spinner--${size}`, tone === 'inverse' && 'nad-spinner--inverse')} role="status"><span className="nad-sr">{label}</span></span>;
}

export function ProgressBar({ label, value, max = 100, showValue = true, size = 'md', tone = 'default', hideLabel }: { label: string; value?: number; max?: number; showValue?: boolean; size?: 'sm' | 'md' | 'lg'; tone?: 'default' | 'success' | 'danger'; hideLabel?: boolean }) {
  const indet = value === undefined; const pct = indet ? 0 : Math.round((value! / max) * 100);
  return <div className={cx('nad-progress', `nad-progress--${size}`, `nad-progress--${tone}`, indet && 'is-indeterminate')}>
    <div className={cx('nad-progress__head', hideLabel && 'nad-sr')}><span>{label}</span>{showValue && !indet && <span>{pct}%</span>}</div>
    <div className="nad-progress__track" role="progressbar" aria-label={label} aria-valuemin={indet ? undefined : 0} aria-valuemax={indet ? undefined : 100} aria-valuenow={indet ? undefined : pct}>
      <div className="nad-progress__bar" style={{ width: indet ? undefined : `${pct}%` }} /></div>
  </div>;
}

export type EmptyStateProps = { title: string; description?: string; illustration?: string | any; illustrationAlt?: string; primaryAction?: any; secondaryAction?: any; size?: 'sm' | 'md' | 'lg'; headingLevel?: 2 | 3 | 4; className?: string };
/** Errors, empty lists, success and onboarding moments, with an Aa NAD line illustration. */
export function EmptyState({ title, description, illustration, illustrationAlt = '', primaryAction, secondaryAction, size = 'md', headingLevel = 2, className }: EmptyStateProps) {
  const H: any = `h${headingLevel}`;
  return <section className={cx('nad-empty', `nad-empty--${size}`, className)}>
    {illustration && <div className="nad-empty__art">{typeof illustration === 'string' ? <img src={illustration} alt={illustrationAlt} /> : illustration}</div>}
    <H className="nad-empty__title">{title}</H>
    {description && <p className="nad-empty__desc">{description}</p>}
    {(primaryAction || secondaryAction) && <div className="nad-empty__actions">{primaryAction}{secondaryAction}</div>}
  </section>;
}
