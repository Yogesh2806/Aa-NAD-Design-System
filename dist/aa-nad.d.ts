/* Aa NAD — component types (documentation). Runtime: window.AaNAD; React 18 from the page. */

import type * as React from 'react';

// ---- util ----
export declare const cx: (...a: any[]) => string;
export type IconProps = {
    name: string;
    variant?: 'outline' | 'filled';
    size?: 16 | 20 | 24 | 32 | number;
    label?: string;
    className?: string;
    style?: any;
};
/** Ionicons outline + filled. Decorative unless `label` is given. */
export declare function Icon({ name, variant, size, label, className, style }: IconProps): React.ReactElement | null;
export declare const iconNames: () => string[];
/** Escape key + focus trap for overlays. */
export declare function useFocusTrap(open: boolean, ref: any, onClose?: () => void): void;
export declare function useOutside(ref: any, open: boolean, cb: () => void): void;
/** Keeps an element mounted while it plays its exit animation. Returns [mounted, exiting]. */
export declare function usePresence(open: boolean, exitMs?: number): [boolean, boolean];
/** Sets data-theme on <html> from the OS: prefers-contrast: more → high-contrast, dark scheme → dark, else light. Returns an unsubscribe function. */
export declare function watchSystemTheme(el?: HTMLElement): () => void;

// ---- actions ----
export type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    iconStart?: string;
    iconEnd?: string;
    loading?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (e: any) => void;
    children?: any;
    className?: string;
    [k: string]: any;
};
/** The one way to trigger an action. */
export declare function Button(props: ButtonProps & { ref?: React.Ref<any> }): React.ReactElement;
export type IconButtonProps = {
    icon: string;
    label: string;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    filled?: boolean;
    [k: string]: any;
};
/** Icon-only button; `label` is required and becomes its accessible name. */
export declare function IconButton(props: IconButtonProps & { ref?: React.Ref<any> }): React.ReactElement;
export type LinkProps = {
    href?: string;
    external?: boolean;
    disabled?: boolean;
    standalone?: boolean;
    iconStart?: string;
    children?: any;
    [k: string]: any;
};
/** Inline or standalone link. Ink + underline; never colour alone. */
export declare function Link({ href, external, disabled, standalone, iconStart, className, children, ...rest }: LinkProps): React.ReactElement | null;

// ---- forms ----
export type FieldBase = {
    label: string;
    hideLabel?: boolean;
    helperText?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};
export type TextFieldProps = FieldBase & {
    type?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: any) => void;
    prefix?: string;
    suffix?: string;
    iconStart?: string;
    iconEnd?: string;
    [k: string]: any;
};
/** Single-line text input with label, helper text, error, icons and prefix/suffix. */
export declare function TextField(props: TextFieldProps & { ref?: React.Ref<any> }): React.ReactElement;
export type TextAreaProps = FieldBase & {
    rows?: number;
    maxLength?: number;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: any) => void;
    [k: string]: any;
};
/** Multi-line text input; shows a live character count when `maxLength` is set. */
export declare function TextArea(p: TextAreaProps): React.ReactElement | null;
export type SelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
};
export type SelectProps = FieldBase & {
    options: SelectOption[];
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: any) => void;
    iconStart?: string;
    [k: string]: any;
};
/** Native select, styled — keyboard, screen-reader and mobile pickers come free. */
export declare function Select(p: SelectProps): React.ReactElement | null;
export type CheckboxProps = {
    label: any;
    description?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    error?: string;
    onChange?: (e: any) => void;
    [k: string]: any;
};
/** A single yes/no choice, or one of several in a CheckboxGroup. Supports indeterminate. */
export declare function Checkbox({ label, description, indeterminate, error, disabled, className, id: idp, ...rest }: CheckboxProps): React.ReactElement | null;
export declare function CheckboxGroup({ legend, children, error, helperText, className }: {
    legend: string;
    children: any;
    error?: string;
    helperText?: string;
    className?: string;
}): React.ReactElement | null;
export type RadioGroupProps = {
    legend: string;
    name?: string;
    options: (SelectOption & {
        description?: string;
    })[];
    value?: string;
    defaultValue?: string;
    onChange?: (v: string) => void;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    orientation?: 'vertical' | 'horizontal';
    className?: string;
};
/** One choice from 2–6 visible options. Arrow keys move between options (native). */
export declare function RadioGroup({ legend, name, options, value, defaultValue, onChange, error, helperText, disabled, orientation, className }: RadioGroupProps): React.ReactElement | null;
export type SwitchProps = {
    label: string;
    description?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (e: any) => void;
    labelPosition?: 'start' | 'end';
    [k: string]: any;
};
/** Instant on/off setting (no Save button). role="switch". */
export declare function Switch({ label, description, disabled, labelPosition, className, id: idp, ...rest }: SwitchProps): React.ReactElement | null;
export type SliderProps = {
    label: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    defaultValue?: number;
    onChange?: (v: number) => void;
    showValue?: boolean;
    formatValue?: (v: number) => string;
    disabled?: boolean;
    className?: string;
};
/** Pick a value on a range. Native range input: arrows, Page Up/Down, Home/End. */
export declare function Slider({ label, min, max, step, value, defaultValue, onChange, showValue, formatValue, disabled, className }: SliderProps): React.ReactElement | null;
export type SegmentedControlProps = {
    label: string;
    options: (SelectOption & {
        icon?: string;
    })[];
    value?: string;
    defaultValue?: string;
    onChange?: (v: string) => void;
    size?: 'sm' | 'md';
    fullWidth?: boolean;
    className?: string;
};
/** 2–5 mutually exclusive views or modes, switched instantly. */
export declare function SegmentedControl({ label, options, value, defaultValue, onChange, size, fullWidth, className }: SegmentedControlProps): React.ReactElement | null;

// ---- date ----
export type CalendarProps = {
    value?: Date | null;
    defaultValue?: Date | null;
    onChange?: (d: Date) => void;
    min?: Date;
    max?: Date;
    locale?: string;
    weekStartsOn?: 0 | 1;
    isDateDisabled?: (d: Date) => boolean;
    className?: string;
};
/** Month grid. Arrow keys move by day/week, Page Up/Down by month, Home/End to week edges. Localised via Intl. */
export declare function Calendar({ value, defaultValue, onChange, min, max, locale, weekStartsOn, isDateDisabled, className }: CalendarProps): React.ReactElement | null;
export type DatePickerProps = {
    label: string;
    value?: Date | null;
    defaultValue?: Date | null;
    onChange?: (d: Date) => void;
    helperText?: string;
    error?: string;
    disabled?: boolean;
    min?: Date;
    max?: Date;
    locale?: string;
    placeholder?: string;
    className?: string;
};
/** A field that opens a Calendar popover. Esc closes and returns focus. On mobile prefer the native date input. */
export declare function DatePicker({ label, value, defaultValue, onChange, helperText, error, disabled, min, max, locale, placeholder, className }: DatePickerProps): React.ReactElement | null;

// ---- display ----
export type Tone = 'neutral' | 'inverse' | 'danger' | 'warning' | 'success' | 'info' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'pink';
export type BadgeProps = {
    tone?: Tone;
    variant?: 'subtle' | 'solid' | 'outline';
    size?: 'sm' | 'md';
    icon?: string;
    dot?: boolean;
    count?: number;
    max?: number;
    children?: any;
    className?: string;
};
/** Short status or count. Not interactive. Pair colour with a word or icon. */
export declare function Badge({ tone, variant, size, icon, dot, count, max, children, className }: BadgeProps): React.ReactElement | null;
export type TagProps = {
    tone?: Tone;
    icon?: string;
    onRemove?: () => void;
    removeLabel?: string;
    selected?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    children: any;
    className?: string;
};
/** Keyword, filter chip or selected value. Removable and/or selectable. */
export declare function Tag({ tone, icon, onRemove, removeLabel, selected, onClick, disabled, children, className }: TagProps): React.ReactElement | null;
export type AvatarProps = {
    name: string;
    src?: string;
    size?: 24 | 32 | 40 | 48 | 64 | 96;
    shape?: 'circle' | 'square';
    tone?: string;
    status?: 'online' | 'busy' | 'away' | 'offline';
    decorative?: boolean;
    className?: string;
};
/** A person. Photo or illustration → initials → icon fallback. Colour is derived from the name. */
export declare function Avatar({ name, src, size, shape, tone, status, decorative, className }: AvatarProps): React.ReactElement | null;
export declare function AvatarGroup({ children, max, size, label }: {
    children: any;
    max?: number;
    size?: 24 | 32 | 40 | 48;
    label?: string;
}): React.ReactElement | null;
export type CardProps = {
    title?: string;
    subtitle?: string;
    media?: any;
    actions?: any;
    footer?: any;
    variant?: 'outline' | 'elevated' | 'filled';
    href?: string;
    onClick?: () => void;
    selected?: boolean;
    padding?: 'sm' | 'md' | 'lg';
    children?: any;
    className?: string;
};
/** Groups content about one subject. Whole-card links use a stretched title link (one tab stop). */
export declare function Card({ title, subtitle, media, actions, footer, variant, href, onClick, selected, padding, children, className }: CardProps): React.ReactElement | null;
/** Responsive card grid; `animateIn` fades cards up in a short stagger. */
export declare function CardGroup({ children, min, animateIn }: {
    children: any;
    min?: number;
    animateIn?: boolean;
}): React.ReactElement | null;
export declare function Divider({ orientation, label, decorative }: {
    orientation?: 'horizontal' | 'vertical';
    label?: string;
    decorative?: boolean;
}): React.ReactElement | null;
export type ListItem = {
    id: string;
    title: string;
    description?: string;
    icon?: string;
    avatar?: any;
    meta?: any;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
};
/** Vertical list of rows; rows can be links or buttons. */
export declare function List({ items, ordered, dividers, label, animateIn, className }: {
    items: ListItem[];
    ordered?: boolean;
    dividers?: boolean;
    label?: string;
    animateIn?: boolean;
    className?: string;
}): React.ReactElement | null;
export type Column = {
    key: string;
    header: string;
    align?: 'start' | 'end' | 'center';
    sortable?: boolean;
    render?: (row: any) => any;
    width?: string;
};
/** Data table with sortable columns, sticky header and caption. Scrolls horizontally on small screens. */
export declare function Table({ columns, rows, caption, hideCaption, rowKey, striped, density, emptyText, className }: {
    columns: Column[];
    rows: any[];
    caption: string;
    hideCaption?: boolean;
    rowKey?: string;
    striped?: boolean;
    density?: 'sm' | 'md';
    emptyText?: string;
    className?: string;
}): React.ReactElement | null;
export type ImageProps = {
    src: string;
    alt: string;
    ratio?: '1:1' | '4:3' | '16:9' | '3:2' | 'auto';
    srcSet?: string;
    sizes?: string;
    fit?: 'cover' | 'contain';
    radius?: 'none' | 'sm' | 'md' | 'lg';
    fallback?: any;
    className?: string;
};
/** Responsive image with aspect ratio, lazy loading, srcset and a fallback. `alt=""` only when decorative. */
export declare function Image({ src, alt, ratio, srcSet, sizes, fit, radius, fallback, className }: ImageProps): React.ReactElement | null;
export declare function Skeleton({ shape, width, height, lines, className }: {
    shape?: 'text' | 'rect' | 'circle';
    width?: number | string;
    height?: number | string;
    lines?: number;
    className?: string;
}): React.ReactElement | null;
export declare function SkeletonGroup({ label, children }: {
    label?: string;
    children: any;
}): React.ReactElement | null;
export declare function Spinner({ size, label, tone }: {
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    tone?: 'default' | 'inverse';
}): React.ReactElement | null;
export declare function ProgressBar({ label, value, max, showValue, size, tone, hideLabel }: {
    label: string;
    value?: number;
    max?: number;
    showValue?: boolean;
    size?: 'sm' | 'md' | 'lg';
    tone?: 'default' | 'success' | 'danger';
    hideLabel?: boolean;
}): React.ReactElement | null;
export type EmptyStateProps = {
    title: string;
    description?: string;
    illustration?: string | any;
    illustrationAlt?: string;
    primaryAction?: any;
    secondaryAction?: any;
    size?: 'sm' | 'md' | 'lg';
    headingLevel?: 2 | 3 | 4;
    className?: string;
};
/** Errors, empty lists, success and onboarding moments, with an Aa NAD line illustration. */
export declare function EmptyState({ title, description, illustration, illustrationAlt, primaryAction, secondaryAction, size, headingLevel, className }: EmptyStateProps): React.ReactElement | null;

// ---- feedback ----
export type AlertProps = {
    tone?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
    title?: string;
    children?: any;
    icon?: string | false;
    actions?: any;
    onDismiss?: () => void;
    variant?: 'subtle' | 'outline';
    live?: boolean;
    className?: string;
};
/** Inline, persistent message about the page or a section. role="alert" only for urgent, newly-shown errors (`live`). */
export declare function Alert({ tone, title, children, icon, actions, onDismiss, variant, live, className }: AlertProps): React.ReactElement | null;
export type ToastT = {
    id: number;
    title: string;
    description?: string;
    tone?: 'neutral' | 'success' | 'danger' | 'warning' | 'info';
    action?: {
        label: string;
        onClick: () => void;
    };
    duration?: number;
};
/** Wrap the app once; call `useToast().show({...})`. Toasts stack bottom-centre (mobile) / bottom-right (desktop). */
export declare function ToastProvider({ children, placement }: {
    children: any;
    placement?: 'bottom-end' | 'bottom-center' | 'top-end';
}): React.ReactElement | null;
export declare const useToast: () => any;
/** One toast. Auto-dismisses (default 5s; never when it has an action), pauses on hover/focus. */
export declare function Toast({ title, description, tone, action, duration, onDismiss }: Omit<ToastT, 'id'> & {
    onDismiss?: () => void;
}): React.ReactElement | null;
export type TooltipProps = {
    content: string;
    children: any;
    placement?: 'top' | 'bottom' | 'start' | 'end';
    delay?: number;
};
/** Short label for an icon or truncated text. Shows on hover AND focus; Esc hides. Never put interactive content inside. */
export declare function Tooltip({ content, children, placement, delay }: TooltipProps): React.ReactElement | null;

// ---- overlay ----
export type ModalProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    children?: any;
    footer?: any;
    size?: 'sm' | 'md' | 'lg' | 'full';
    role?: 'dialog' | 'alertdialog';
    closeOnScrim?: boolean;
    inline?: boolean;
};
/** Blocking dialog. Traps focus, Esc closes, returns focus to the trigger, locks scroll. Use `alertdialog` for destructive confirms. */
export declare function Modal({ open, onClose, title, description, children, footer, size, role, closeOnScrim, inline }: ModalProps): React.ReactElement | null;
export type DrawerProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    children?: any;
    footer?: any;
    side?: 'start' | 'end';
    size?: 'sm' | 'md' | 'lg';
    inline?: boolean;
};
/** Side panel for secondary tasks, filters or navigation. Same focus rules as Modal. */
export declare function Drawer({ open, onClose, title, children, footer, side, size, inline }: DrawerProps): React.ReactElement | null;
export type BottomSheetProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    children?: any;
    footer?: any;
    inline?: boolean;
};
/** Mobile sheet from the bottom edge with a grab handle. Use for short pickers and action lists on phones. */
export declare function BottomSheet({ open, onClose, title, children, footer, inline }: BottomSheetProps): React.ReactElement | null;
export type MenuItem = {
    id: string;
    label: string;
    icon?: string;
    shortcut?: string;
    danger?: boolean;
    disabled?: boolean;
    onSelect?: () => void;
    divider?: boolean;
};
export type MenuProps = {
    trigger: any;
    items: MenuItem[];
    label?: string;
    align?: 'start' | 'end';
    openOnHover?: boolean;
    defaultOpen?: boolean;
};
/** Dropdown of actions. Arrow keys / Home / End / type-ahead; Esc closes and returns focus; flips up near the viewport bottom. */
export declare function Menu({ trigger, items, label, align, openOnHover, defaultOpen }: MenuProps): React.ReactElement | null;

// ---- nav ----
export type TabItem = {
    id: string;
    label: string;
    icon?: string;
    badge?: any;
    disabled?: boolean;
    content?: any;
};
export type TabsProps = {
    items: TabItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (id: string) => void;
    variant?: 'line' | 'contained';
    fullWidth?: boolean;
    label: string;
    className?: string;
};
/** Switch between views of the same context. Arrow keys move and activate (automatic), Home/End jump. */
export declare function Tabs({ items, value, defaultValue, onChange, variant, fullWidth, label, className }: TabsProps): React.ReactElement | null;
export type AccordionItem = {
    id: string;
    title: string;
    content: any;
    disabled?: boolean;
    icon?: string;
};
/** Progressive disclosure of sections. Headings wrap real buttons with aria-expanded. */
export declare function Accordion({ items, multiple, defaultOpen, headingLevel, variant, className }: {
    items: AccordionItem[];
    multiple?: boolean;
    defaultOpen?: string[];
    headingLevel?: 2 | 3 | 4 | 5;
    variant?: 'divided' | 'contained';
    className?: string;
}): React.ReactElement | null;
export type Crumb = {
    label: string;
    href?: string;
    icon?: string;
    disabled?: boolean;
};
/** Where you are in a hierarchy. Collapses the middle when there are more than `maxItems`. */
export declare function Breadcrumbs({ items, maxItems, separator, className }: {
    items: Crumb[];
    maxItems?: number;
    separator?: 'chevron' | 'slash';
    className?: string;
}): React.ReactElement | null;
export type PaginationProps = {
    page: number;
    totalPages?: number;
    onChange: (p: number) => void;
    siblings?: number;
    pageSize?: number;
    pageSizeOptions?: number[];
    onPageSizeChange?: (n: number) => void;
    totalItems?: number;
    hasNext?: boolean;
    compact?: boolean;
    className?: string;
};
/** Page through results. Works with a known total or an unknown one (`hasNext`). */
export declare function Pagination({ page, totalPages, onChange, siblings, pageSize, pageSizeOptions, onPageSizeChange, totalItems, hasNext, compact, className }: PaginationProps): React.ReactElement | null;
export type Step = {
    id: string;
    label: string;
    description?: string;
    status?: 'complete' | 'current' | 'upcoming' | 'error';
};
/** Progress through a multi-step flow. */
export declare function Stepper({ steps, orientation, label, className }: {
    steps: Step[];
    orientation?: 'horizontal' | 'vertical';
    label?: string;
    className?: string;
}): React.ReactElement | null;
export type CarouselProps = {
    items: any[];
    label: string;
    itemsPerView?: number;
    loop?: boolean;
    showDots?: boolean;
    className?: string;
};
/** Horizontally scrolling set of items. Buttons, dots, swipe (scroll-snap) and arrow keys. No autoplay. */
export declare function Carousel({ items, label, itemsPerView, loop, showDots, className }: CarouselProps): React.ReactElement | null;
export type NavBarProps = {
    title?: string;
    logo?: any;
    links?: {
        label: string;
        href: string;
        current?: boolean;
    }[];
    actions?: any;
    onBack?: () => void;
    onMenu?: () => void;
    variant?: 'web' | 'mobile';
    sticky?: boolean;
    className?: string;
};
/** Top app bar. `web`: logo + links + actions. `mobile`: back/menu + centred title + up to 2 actions. */
export declare function NavBar({ title, logo, links, actions, onBack, onMenu, variant, sticky, className }: NavBarProps): React.ReactElement | null;
export type TabBarItem = {
    id: string;
    label: string;
    icon: string;
    badge?: number;
    href?: string;
};
/** Mobile bottom navigation, 3–5 top-level destinations. 48px+ targets, labels always visible. */
export declare function TabBar({ items, value, onChange, label, className }: {
    items: TabBarItem[];
    value: string;
    onChange?: (id: string) => void;
    label?: string;
    className?: string;
}): React.ReactElement | null;
