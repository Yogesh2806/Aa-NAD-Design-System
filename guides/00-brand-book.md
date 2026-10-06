# Aa NAD — brand book

Aa NAD is a universal, monochrome design system for web and mobile products. It is written for two kinds of reader: designers and developers, and the AI coding agents that build alongside them. Everything is a token, a component or a rule you can follow without guessing.

## Principles

1. **Legible first.** Type is Atkinson Hyperlegible Next, and body text never drops below 16px on web. Every text pairing passes WCAG AA in both themes.
2. **Three themes.** Light, dark and high contrast. High contrast is an added theme meeting WCAG AAA (7:1) for people with low vision; the brand themes stay as they are.
3. **Monochrome by default, colour with meaning.** Ink and paper carry the interface. Colour appears only to say something: status (danger, warning, success, info) or category (the 12-hue palette).
4. **Built on 8.** Spacing, sizes and layout step in 8px, with 4px as the only half-step. Components use a 4px corner radius.
5. **Your brand slots in.** Products bring their own primary ramp. Nothing else changes.
6. **Readable by machines.** Use token names, never raw values. If a rule isn't written here, it isn't a rule.

## Voice and content

- Write in plain English at a reading age of about 12. Use sentence case everywhere, including buttons, titles and menu items. Use uppercase only in the `overline` style.
- Address the reader as “you”. Use “we” for the product. No exclamation marks in errors.
- Buttons start with a verb and name the outcome: “Save changes”, “Delete project”, not “OK” or “Submit”.
- An error message says what happened and how to fix it: “Enter a valid email, like name@example.com.”
- Don't use emoji as decoration or in place of icons.
- Format numbers, dates and currency with `Intl` for the user's locale (“₹4,000”, “6 Oct 2026”).

More guidance is in the **Content** section.

## Colour

- **Ink and paper.** Text is `text` on `bg`, `surface` or `surface-raised`. Secondary text is `text-muted`. Placeholders and metadata use `text-subtle`, never for body copy. `text-disabled` is for disabled labels only.
- **Surfaces.** `bg` is the page. `bg-subtle` is used for alternate bands. `surface` is for cards and inputs. `surface-raised` is for modals, menus and toasts, always with a shadow. `surface-sunken` is for wells and tracks. Hover and press fills are `surface-hover` and `surface-pressed`. `surface-inverse` with `text-inverse` is for tooltips and toasts.
- **Borders.** `border` is decorative: dividers and card outlines. `border-strong` is for anything a person must find: input, checkbox and radio edges. It meets 3:1 on every surface.
- **Action.** Primary buttons, checked controls, selected tabs and switches use `action`, with `on-action` for text and icons on it. Hover is `action-hover` and press is `action-pressed`. These alias the brand slot (`primary-50…950`). Out of the box that slot is the monochrome ramp, so `action` is NAD Ink `#111111`.
- **Status.** `danger`, `warning`, `success` and `info` are for text and icons. `*-bg` and `*-border` are for alerts and fields. `*-solid` with `on-*-solid` is for filled badges and the destructive button. Status never relies on hue alone: always pair it with an icon or a word.
- **Palette.** There are 12 hues (`red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `blue`, `indigo`, `violet`, `pink`), each in steps 50–900. Use `-100` fills with `-800` text for tags and avatars (≥7.9:1). Use `-600` for text, icons and solid fills on white (≥4.5:1). Steps `-400`/`-500` are for charts and decoration only.
- **Bring your brand.** Replace the 11 `primary-*` tokens with your ramp. `primary-950` must reach 4.5:1 against white, and white text must reach 4.5:1 on it. If your brand colour is lighter, set `on-action` to `gray-950`. In the dark theme `action` stays near-white unless you override it.
- **High contrast.** The `high-contrast` theme is black on white. All text reaches 7:1, `border` becomes ink so every card and divider is visible, status colours deepen to `-800`, inputs get 2px borders and the focus ring is 3px. Don't design for it separately: use the semantic tokens and it follows.
- **Focus.** The focus indicator is a 2px `focus-ring` outline with a 2px offset in the page colour. It is ink in the light theme and near-white in the dark theme, so it is visible on every surface. Never remove it.

## Typography

- One family, Atkinson Hyperlegible Next (weights 200–800, with italics), and its mono partner, Atkinson Hyperlegible Mono. Both are under the SIL Open Font License and live in `fonts/`. Use the stacks `--font-sans` and `--font-mono`.
- The scale is `display-xl` 64/72 · `display-lg` 48/56 · `heading-1` 40/48 · `heading-2` 32/40 · `heading-3` 24/32 · `heading-4` 20/28 · `heading-5` 18/24 · `heading-6` 16/24 · `body-lg` 18/28 · `body` 16/24 · `body-sm` 14/20 · `caption` 12/16 · `label-lg` 16/24 · `label` 14/20 · `label-sm` 12/16 · `overline` 12/16 · `code` 14/20 · `code-sm` 12/16. Every line height is on the 4px grid.
- Use one `heading-1` per page and don't skip heading levels. Keep paragraphs to 45–75 characters per line (`size-container-sm` is 640px). Body text is `body`, never smaller for running text.
- Mobile: `display-*` styles step down one size under `bp-md`, and body text stays 16px. iOS apps may map `body` to 17pt (see **Mobile**).

## Spacing, size and layout

- The space scale is `space-0`, `space-2` (focus offset only), `space-4`, `space-8`, `space-12`, `space-16`, `space-24`, `space-32`, `space-40`, `space-48`, `space-64`, `space-80`, `space-96` and `space-128`. Pick the smallest step that separates the groups. Related items are 8 apart, groups 24, sections 48 or more.
- Control heights are `size-control-sm` 32, `size-control-md` 40 (web default) and `size-control-lg` 48 (mobile default). Touch targets are at least `size-touch-ios` 44 or `size-touch-android` 48.
- Icons come in `size-icon-sm` 16, `size-icon-md` 20 (default) and `size-icon-lg` 24.
- Breakpoints are `bp-sm` 640, `bp-md` 768, `bp-lg` 1024, `bp-xl` 1280 and `bp-2xl` 1536. The grid is 4 columns with 16px gutters on phones, 8 columns with 24px gutters from `bp-md`, and 12 columns with 24px gutters from `bp-lg`. Content maxes out at `size-container-lg` (1200px).

## Shape, borders and elevation

- The corner scale is `radius-sm` 4px (the default for buttons, inputs, tags, menus, tooltips), `radius-md` 8px (cards, modals, alerts, toasts), `radius-lg` 16px (bottom sheets, large tiles) and `radius-full` (pills, avatars, switches, radios). `radius-none` is for tables and full-bleed media.
- Borders are `border-1` 1px by default and `border-2` 2px for focus and selection.
- Prefer borders to shadows. `shadow-1` is for hover and sticky headers, `shadow-2` for menus and popovers, `shadow-3` for toasts and drawers, and `shadow-4` for modals. Shadows deepen in the dark theme, and raised surfaces also get lighter there.
- Layers: `z-dropdown` < `z-sticky` < `z-overlay` < `z-modal` < `z-popover` < `z-toast` < `z-tooltip`.

## Motion

- The motion style is **calm and precise**: short fades and 2–8px movements, no bounce or overshoot. Motion explains a change. It is never decoration, and nothing autoplays.
- Durations: `duration-fast` 120ms (hover, press, toggles, menus opening), `duration-base` 200ms (tooltips, accordions, tab ink, every exit), `duration-slow` 320ms (modals, drawers, sheets entering, list stagger). Exits are faster than entrances.
- Easing: `ease-standard` for things that move or resize, `ease-enter` for arrivals, `ease-exit` for departures, and `ease-linear` only for progress.
- Built-in interactions: buttons press to 97%, trailing icons nudge 2px on hover, clickable cards lift 2px, the checkbox tick draws itself, the switch thumb stretches while pressed, tab ink slides, accordions animate their height, overlays animate both in and out, toasts swipe away, lists and card groups can fade up in a stagger (`animateIn`), and skeletons shimmer. `BlockLoader` is the brand loader.
- Under `prefers-reduced-motion` every duration becomes `duration-instant`: press and lift transforms are off, skeletons stop, and loaders pulse instead of moving. Full catalogue: **Motion** section.

## Iconography

- The icon set is **Ionicons 8** (MIT licence): 515 glyphs, each in an **outline** and a **filled** style. Use outline at rest and filled for the selected or active state (TabBar, Tabs, a liked heart).
- In code, use the `Icon` component (`<Icon name="notifications" />`). It inherits `currentColor` and sizes to 16/20/24/32. The `Icons` asset group holds the 46 most-used glyphs in both styles as SVG files, drawn in NAD Ink `#111111`.
- An icon on its own needs a label (`IconButton label`, or `Icon label`). Icons that carry meaning need 3:1 contrast.

## Illustration and avatars

- Illustrations are black line art on white with grey (`gray-400`, `gray-100`) fills. There are no colours: an ink outline about 3px wide, rounded joins, a ground line, grey leaf clusters, and dashed paths for journeys. There are 15 scenes in **Illustrations** covering errors, empty states, success and onboarding. Use them through `EmptyState`. They invert automatically in the dark theme.
- Avatars are 8 illustrated people in **Avatars**, drawn in the same line style on tinted `-100` hue circles. Use them as `Avatar src`. Without an image, `Avatar` shows initials on a hue derived from the name, then a person icon.

## Logo

- The logo is **Module Aa**: “Aa” assembled from 8px-grid blocks with 4px corners, knocked out of a rounded tile. Use `module-aa-nad-horizontal.svg` as the primary logo. Use `module-aa-nad-stacked.svg` in square spaces and `module-aa-nad-symbol.svg` for app icons and avatars. Below 32px use `module-aa-nad-symbol-small.svg`, whose blocks merge so the gaps don't fill in. On dark backgrounds use the `-reversed` files.
- The logo is always NAD Ink or white. A product's primary colour never recolours it.
- Keep clear space of a quarter of the tile's height. Don't stretch, rotate, add effects or rearrange blocks. Animating blocks is allowed in loaders only.

## Using the components

- The components are React 18 and live in `components/bundle.js` as `window.AaNAD`, styled by `components/bundle.css` on top of `tokens.css`. They use the `nad-` class prefix. Set `data-theme="light"`, `"dark"` or `"high-contrast"` on `<html>` to switch themes, or call `AaNAD.watchSystemTheme()` to follow the OS (`prefers-contrast: more` → high contrast, dark scheme → dark).
- There are 45 components: Actions (Button, IconButton, Link), Forms (TextField, TextArea, Select, Combobox, MultiSelect, FileUpload, Checkbox, RadioGroup, Switch, Slider, SegmentedControl), Date (Calendar, DatePicker), Data display (Badge, Tag, Avatar, Card, Divider, List, Table), Media (Icon, Image, Carousel), Feedback (Alert, Toast, Tooltip, Spinner, BlockLoader, ProgressBar, Skeleton, EmptyState), Overlays (Modal, Drawer, BottomSheet, Menu) and Navigation (Tabs, Accordion, Breadcrumbs, Pagination, Stepper, NavBar, TabBar).
- Each component's README says when to use it, what you provide, and how it behaves for keyboard and screen-reader users.

## For AI coding agents

- Read this README first, then the component's README. Use token names as CSS custom properties (`var(--space-16)`, `var(--text-muted)`, `var(--radius-sm)`) and never paste hex values or pixel numbers that a token already names.
- Choose components before writing markup. If no component fits, compose from tokens and follow the same focus, contrast and target-size rules.
- Theme with `data-theme`. Don't hand-write dark-mode colours.
- Every interactive element must be reachable by keyboard, show the focus ring, and have an accessible name.
