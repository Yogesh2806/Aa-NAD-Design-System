# Tooltip

A short text label shown on hover and keyboard focus.

**Use when** naming icon-only controls or revealing truncated text.

**Don't** put links, buttons or essential information inside — tooltips are not reachable on touch.

**You provide** `content` (≤ one short sentence), `children` (one focusable element), `placement`, `delay`.

**Accessibility** Opens on hover AND focus, closes on Esc and blur; wired with `aria-describedby`.

**Mobile** Tooltips do not exist on touch: the information must also be available another way.
