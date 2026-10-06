import React, { useState, useRef, useId, useEffect, useLayoutEffect } from './react';
import { cx, Icon } from './util';

export type TabItem = { id: string; label: string; icon?: string; badge?: any; disabled?: boolean; content?: any };
export type TabsProps = { items: TabItem[]; value?: string; defaultValue?: string; onChange?: (id: string) => void; variant?: 'line' | 'contained'; fullWidth?: boolean; label: string; className?: string };
/** Switch between views of the same context. Arrow keys move and activate (automatic), Home/End jump. */
export function Tabs({ items, value, defaultValue, onChange, variant = 'line', fullWidth, label, className }: TabsProps) {
  const [v, setV] = useState(value ?? defaultValue ?? items.find(i => !i.disabled)?.id); const cur = value ?? v; const base = useId(); const list = useRef<any>(null);
  const select = (id: string, focus = false) => { setV(id); onChange?.(id); if (focus) list.current?.querySelector(`[data-id="${id}"]`)?.focus(); };
  const onKey = (e: any) => {
    const en = items.filter(i => !i.disabled); const i = en.findIndex(t => t.id === cur);
    const n = e.key === 'ArrowRight' ? en[(i + 1) % en.length] : e.key === 'ArrowLeft' ? en[(i - 1 + en.length) % en.length] : e.key === 'Home' ? en[0] : e.key === 'End' ? en[en.length - 1] : null;
    if (n) { e.preventDefault(); select(n.id, true); }
  };
  const active = items.find(i => i.id === cur);
  const [ink, setInk] = useState<any>(null);
  useLayoutEffect(() => {
    const measure = () => { const el = list.current?.querySelector(`[data-id="${cur}"]`); if (el) setInk({ left: el.offsetLeft, width: el.offsetWidth }); };
    measure(); const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null; ro?.observe(list.current); return () => ro?.disconnect();
  }, [cur, items.length]);
  return (
    <div className={cx('nad-tabs', `nad-tabs--${variant}`, fullWidth && 'nad-tabs--full', className)}>
      <div role="tablist" aria-label={label} ref={list} onKeyDown={onKey} className="nad-tabs__list">
        {items.map(t => <button key={t.id} data-id={t.id} type="button" role="tab" id={`${base}-${t.id}`} aria-selected={cur === t.id} aria-controls={`${base}-${t.id}-p`}
          tabIndex={cur === t.id ? 0 : -1} disabled={t.disabled} className={cx('nad-tab', cur === t.id && 'is-selected')} onClick={() => select(t.id)}>
          {t.icon && <Icon name={t.icon} variant={cur === t.id ? 'filled' : 'outline'} size={20} />}<span>{t.label}</span>{t.badge}</button>)}
        {ink && <span className="nad-tabs__ink" aria-hidden="true" style={{ transform: `translateX(${ink.left}px)`, width: ink.width }} />}
      </div>
      {active?.content !== undefined && <div role="tabpanel" id={`${base}-${cur}-p`} aria-labelledby={`${base}-${cur}`} tabIndex={0} className="nad-tabs__panel">{active.content}</div>}
    </div>
  );
}

export type AccordionItem = { id: string; title: string; content: any; disabled?: boolean; icon?: string };
/** Progressive disclosure of sections. Headings wrap real buttons with aria-expanded. */
export function Accordion({ items, multiple = false, defaultOpen = [], headingLevel = 3, variant = 'divided', className }: { items: AccordionItem[]; multiple?: boolean; defaultOpen?: string[]; headingLevel?: 2 | 3 | 4 | 5; variant?: 'divided' | 'contained'; className?: string }) {
  const [open, setOpen] = useState<string[]>(defaultOpen); const base = useId(); const H: any = `h${headingLevel}`;
  const toggle = (id: string) => setOpen(o => o.includes(id) ? o.filter(x => x !== id) : multiple ? [...o, id] : [id]);
  return <div className={cx('nad-accordion', `nad-accordion--${variant}`, className)}>
    {items.map(it => { const isO = open.includes(it.id); return (
      <div key={it.id} className={cx('nad-accordion__item', isO && 'is-open')}>
        <H className="nad-accordion__h"><button type="button" id={`${base}-${it.id}`} aria-expanded={isO} aria-controls={`${base}-${it.id}-p`} disabled={it.disabled} className="nad-accordion__trigger" onClick={() => toggle(it.id)}>
          {it.icon && <Icon name={it.icon} size={20} />}<span>{it.title}</span><Icon name="chevron-down" size={20} className="nad-accordion__chev" /></button></H>
        <div id={`${base}-${it.id}-p`} role="region" aria-labelledby={`${base}-${it.id}`} aria-hidden={!isO || undefined} className="nad-accordion__panel"><div className="nad-accordion__inner"><div className="nad-accordion__content">{it.content}</div></div></div>
      </div>); })}
  </div>;
}

export type Crumb = { label: string; href?: string; icon?: string; disabled?: boolean };
/** Where you are in a hierarchy. Collapses the middle when there are more than `maxItems`. */
export function Breadcrumbs({ items, maxItems = 4, separator = 'chevron', className }: { items: Crumb[]; maxItems?: number; separator?: 'chevron' | 'slash'; className?: string }) {
  const [expanded, setExpanded] = useState(false);
  const collapse = !expanded && items.length > maxItems;
  const shown: any[] = collapse ? [items[0], { ellipsis: true }, ...items.slice(-(maxItems - 2))] : items;
  return <nav aria-label="Breadcrumb" className={cx('nad-crumbs', `nad-crumbs--${separator}`, className)}><ol>
    {shown.map((c, i) => { const last = i === shown.length - 1; return <li key={i}>
      {c.ellipsis ? <button type="button" className="nad-crumbs__more" aria-label={`Show ${items.length - maxItems + 1} more`} onClick={() => setExpanded(true)}>…</button>
        : last ? <span aria-current="page" className="nad-crumbs__current">{c.icon && <Icon name={c.icon} size={16} />}{c.label}</span>
        : c.disabled || !c.href ? <span className="nad-crumbs__disabled">{c.icon && <Icon name={c.icon} size={16} />}{c.label}</span>
        : <a href={c.href} className="nad-link">{c.icon && <Icon name={c.icon} size={16} />}{c.label}</a>}
      {!last && <span className="nad-crumbs__sep" aria-hidden="true">{separator === 'slash' ? '/' : <Icon name="chevron-forward" size={14} />}</span>}
    </li>; })}
  </ol></nav>;
}

export type PaginationProps = { page: number; totalPages?: number; onChange: (p: number) => void; siblings?: number; pageSize?: number; pageSizeOptions?: number[]; onPageSizeChange?: (n: number) => void; totalItems?: number; hasNext?: boolean; compact?: boolean; className?: string };
/** Page through results. Works with a known total or an unknown one (`hasNext`). */
export function Pagination({ page, totalPages, onChange, siblings = 1, pageSize, pageSizeOptions, onPageSizeChange, totalItems, hasNext, compact, className }: PaginationProps) {
  const known = totalPages !== undefined; const last = totalPages || 0;
  const range: (number | '…')[] = [];
  if (known && !compact) {
    const s = Math.max(2, page - siblings), e = Math.min(last - 1, page + siblings);
    range.push(1); if (s > 2) range.push('…'); for (let i = s; i <= e; i++) range.push(i); if (e < last - 1) range.push('…'); if (last > 1) range.push(last);
  }
  const canNext = known ? page < last : !!hasNext;
  return <nav aria-label="Pagination" className={cx('nad-pagination', className)}>
    {pageSize && pageSizeOptions && <label className="nad-pagination__size">Rows per page <select value={pageSize} onChange={(e: any) => onPageSizeChange?.(+e.target.value)}>{pageSizeOptions.map(n => <option key={n}>{n}</option>)}</select></label>}
    {totalItems !== undefined && pageSize && <span className="nad-pagination__count" aria-live="polite">{(page - 1) * pageSize + 1}–{Math.min(page * pageSize, totalItems)} of {totalItems}</span>}
    <ul>
      <li><button type="button" className="nad-page nad-page--nav" disabled={page <= 1} onClick={() => onChange(page - 1)} aria-label="Previous page"><Icon name="chevron-back" size={16} /><span className="nad-page__txt">Previous</span></button></li>
      {known && !compact ? range.map((p, i) => <li key={i}>{p === '…' ? <span className="nad-page nad-page--gap" aria-hidden="true">…</span>
        : <button type="button" className={cx('nad-page', p === page && 'is-current')} aria-current={p === page ? 'page' : undefined} aria-label={`Page ${p}`} onClick={() => onChange(p as number)}>{p}</button>}</li>)
        : <li><span className="nad-page nad-page--gap" aria-current="page">Page {page}{known ? ` of ${last}` : ''}</span></li>}
      <li><button type="button" className="nad-page nad-page--nav" disabled={!canNext} onClick={() => onChange(page + 1)} aria-label="Next page"><span className="nad-page__txt">Next</span><Icon name="chevron-forward" size={16} /></button></li>
    </ul>
  </nav>;
}

export type Step = { id: string; label: string; description?: string; status?: 'complete' | 'current' | 'upcoming' | 'error' };
/** Progress through a multi-step flow. */
export function Stepper({ steps, orientation = 'horizontal', label = 'Progress', className }: { steps: Step[]; orientation?: 'horizontal' | 'vertical'; label?: string; className?: string }) {
  return <nav aria-label={label} className={cx('nad-stepper', `nad-stepper--${orientation}`, className)}><ol>
    {steps.map((s, i) => { const st = s.status || 'upcoming'; return <li key={s.id} className={cx('nad-step', `is-${st}`)} aria-current={st === 'current' ? 'step' : undefined}>
      <span className="nad-step__dot" aria-hidden="true">{st === 'complete' ? <Icon name="checkmark" size={16} /> : st === 'error' ? <Icon name="alert" size={16} /> : i + 1}</span>
      <span className="nad-step__text"><span className="nad-step__label">{s.label}<span className="nad-sr"> — {st}</span></span>{s.description && <span className="nad-step__desc">{s.description}</span>}</span>
    </li>; })}
  </ol></nav>;
}

export type CarouselProps = { items: any[]; label: string; itemsPerView?: number; loop?: boolean; showDots?: boolean; className?: string };
/** Horizontally scrolling set of items. Buttons, dots, swipe (scroll-snap) and arrow keys. No autoplay. */
export function Carousel({ items, label, itemsPerView = 1, loop = false, showDots = true, className }: CarouselProps) {
  const [i, setI] = useState(0); const track = useRef<any>(null); const pages = Math.max(1, items.length - itemsPerView + 1);
  const go = (n: number) => { const t = loop ? (n + pages) % pages : Math.max(0, Math.min(pages - 1, n)); setI(t); const el = track.current?.children[t]; el && track.current.scrollTo({ left: el.offsetLeft - track.current.offsetLeft, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); };
  const onScroll = () => { const el = track.current; if (!el) return; const w = el.children[0]?.offsetWidth || 1; setI(Math.round(el.scrollLeft / w)); };
  return <section className={cx('nad-carousel', className)} aria-roledescription="carousel" aria-label={label} onKeyDown={(e: any) => { if (e.key === 'ArrowRight') go(i + 1); if (e.key === 'ArrowLeft') go(i - 1); }}>
    <div className="nad-carousel__track" ref={track} onScroll={onScroll} style={{ ['--per' as any]: itemsPerView }}>
      {items.map((it, n) => <div key={n} className="nad-carousel__slide" role="group" aria-roledescription="slide" aria-label={`${n + 1} of ${items.length}`}>{it}</div>)}
    </div>
    <div className="nad-carousel__controls">
      <button type="button" className="nad-btn nad-iconbtn nad-btn--secondary nad-btn--sm" aria-label="Previous slide" disabled={!loop && i === 0} onClick={() => go(i - 1)}><Icon name="chevron-back" size={20} /></button>
      {showDots && <div className="nad-carousel__dots">{Array.from({ length: pages }, (_, n) => <button key={n} type="button" className={cx('nad-carousel__dot', n === i && 'is-current')} aria-label={`Go to slide ${n + 1}`} aria-current={n === i || undefined} onClick={() => go(n)} />)}</div>}
      <button type="button" className="nad-btn nad-iconbtn nad-btn--secondary nad-btn--sm" aria-label="Next slide" disabled={!loop && i >= pages - 1} onClick={() => go(i + 1)}><Icon name="chevron-forward" size={20} /></button>
    </div>
  </section>;
}

export type NavBarProps = { title?: string; logo?: any; links?: { label: string; href: string; current?: boolean }[]; actions?: any; onBack?: () => void; onMenu?: () => void; variant?: 'web' | 'mobile'; sticky?: boolean; className?: string };
/** Top app bar. `web`: logo + links + actions. `mobile`: back/menu + centred title + up to 2 actions. */
export function NavBar({ title, logo, links = [], actions, onBack, onMenu, variant = 'web', sticky, className }: NavBarProps) {
  return <header className={cx('nad-navbar', `nad-navbar--${variant}`, sticky && 'is-sticky', className)}>
    {variant === 'mobile' ? <>
      <div className="nad-navbar__lead">{onBack ? <button type="button" className="nad-btn nad-iconbtn nad-btn--ghost nad-btn--lg" aria-label="Back" onClick={onBack}><Icon name="chevron-back" size={24} /></button>
        : onMenu ? <button type="button" className="nad-btn nad-iconbtn nad-btn--ghost nad-btn--lg" aria-label="Open menu" onClick={onMenu}><Icon name="menu" size={24} /></button> : null}</div>
      <h1 className="nad-navbar__title">{title}</h1><div className="nad-navbar__trail">{actions}</div></>
      : <>{logo && <a href="/" className="nad-navbar__logo" aria-label="Home">{logo}</a>}{title && !logo && <span className="nad-navbar__title">{title}</span>}
        {links.length > 0 && <nav aria-label="Main" className="nad-navbar__links"><ul>{links.map(l => <li key={l.href}><a href={l.href} aria-current={l.current ? 'page' : undefined} className={cx('nad-navbar__link', l.current && 'is-current')}>{l.label}</a></li>)}</ul></nav>}
        <div className="nad-navbar__trail">{actions}</div>
        {onMenu && <button type="button" className="nad-btn nad-iconbtn nad-btn--ghost nad-btn--md nad-navbar__burger" aria-label="Open menu" onClick={onMenu}><Icon name="menu" size={24} /></button>}</>}
  </header>;
}

export type TabBarItem = { id: string; label: string; icon: string; badge?: number; href?: string };
/** Mobile bottom navigation, 3–5 top-level destinations. 48px+ targets, labels always visible. */
export function TabBar({ items, value, onChange, label = 'Main', className }: { items: TabBarItem[]; value: string; onChange?: (id: string) => void; label?: string; className?: string }) {
  return <nav aria-label={label} className={cx('nad-tabbar', className)}><ul>
    {items.map(it => { const on = it.id === value; const inner = <><span className="nad-tabbar__icon"><Icon name={it.icon} variant={on ? 'filled' : 'outline'} size={24} />{it.badge ? <span className="nad-tabbar__badge" aria-label={`${it.badge} new`}>{it.badge > 99 ? '99+' : it.badge}</span> : null}</span><span className="nad-tabbar__label">{it.label}</span></>;
      return <li key={it.id}>{it.href ? <a href={it.href} className={cx('nad-tabbar__item', on && 'is-current')} aria-current={on ? 'page' : undefined}>{inner}</a>
        : <button type="button" className={cx('nad-tabbar__item', on && 'is-current')} aria-current={on ? 'page' : undefined} onClick={() => onChange?.(it.id)}>{inner}</button>}</li>; })}
  </ul></nav>;
}
