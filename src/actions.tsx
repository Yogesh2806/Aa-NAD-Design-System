import React, { forwardRef } from './react';
import { cx, Icon } from './util';
export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg'; iconStart?: string; iconEnd?: string; loading?: boolean; fullWidth?: boolean;
  disabled?: boolean; type?: 'button' | 'submit' | 'reset'; onClick?: (e: any) => void; children?: any; className?: string; [k: string]: any;
};
/** The one way to trigger an action. */
export const Button = forwardRef(function Button({ variant = 'secondary', size = 'md', iconStart, iconEnd, loading, fullWidth, disabled, type = 'button', className, children, ...rest }: ButtonProps, ref: any) {
  const isz = size === 'lg' ? 20 : 16;
  return (
    <button ref={ref} type={type} className={cx('nad-btn', `nad-btn--${variant}`, `nad-btn--${size}`, fullWidth && 'nad-btn--full', loading && 'is-loading', className)}
      disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>
      {loading ? <span className="nad-spinner nad-spinner--inline" aria-hidden="true" /> : iconStart && <Icon name={iconStart} size={isz} />}
      <span className="nad-btn__label">{children}</span>
      {iconEnd && !loading && <Icon name={iconEnd} size={isz} />}
      {loading && <span className="nad-sr">Loading</span>}
    </button>
  );
});
export type IconButtonProps = { icon: string; label: string; variant?: 'primary' | 'secondary' | 'ghost'; size?: 'sm' | 'md' | 'lg'; filled?: boolean; [k: string]: any };
/** Icon-only button; `label` is required and becomes its accessible name. */
export const IconButton = forwardRef(function IconButton({ icon, label, variant = 'ghost', size = 'md', filled, className, ...rest }: IconButtonProps, ref: any) {
  return (
    <button ref={ref} type="button" aria-label={label} title={label} className={cx('nad-btn', 'nad-iconbtn', `nad-btn--${variant}`, `nad-btn--${size}`, className)} {...rest}>
      <Icon name={icon} variant={filled ? 'filled' : 'outline'} size={size === 'lg' ? 24 : 20} />
    </button>
  );
});
export type LinkProps = { href?: string; external?: boolean; disabled?: boolean; standalone?: boolean; iconStart?: string; children?: any; [k: string]: any };
/** Inline or standalone link. Ink + underline; never colour alone. */
export function Link({ href, external, disabled, standalone, iconStart, className, children, ...rest }: LinkProps) {
  if (disabled) return <span className={cx('nad-link', 'is-disabled', className)} aria-disabled="true" role="link">{children}</span>;
  return (
    <a href={href} className={cx('nad-link', standalone && 'nad-link--standalone', className)} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {iconStart && <Icon name={iconStart} size={16} />}{children}
      {external && <><Icon name="open" size={14} /><span className="nad-sr"> (opens in a new tab)</span></>}
    </a>
  );
}
