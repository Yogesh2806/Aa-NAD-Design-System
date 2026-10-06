# Icon

Renders any Ionicons 8 glyph in outline or filled style, sized to the 8px grid.

**Use when** supporting a label, or as a universally understood symbol.

**Don't** use icons without a text label unless the meaning is universal — then give `label` (or use `IconButton`).

**You provide** `name` (any Ionicons name, e.g. `home`, `notifications`, `logo-github` — 515 available; `AaNAD.iconNames()` lists them), `variant` (`outline` default, `filled` for selected/active), `size` (16, 20 default, 24, 32), `label`.

**Accessibility** Decorative by default (`aria-hidden`); with `label` it becomes `role="img"`. Icon colour follows `currentColor` — meaningful icons need ≥3:1 contrast.

**Mobile** Use 24px in app bars and the TabBar.

Outline = default/resting; filled = selected or active state (TabBar, Tabs, liked).
