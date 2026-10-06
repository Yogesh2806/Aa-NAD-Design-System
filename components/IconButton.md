# IconButton

A square button showing only an icon; `label` is required and becomes its accessible name and tooltip.

**Use when** the icon is universally understood (close, more, search, like) and space is tight.

**Don't** use it for actions that need words to be understood — use `Button` with `iconStart`.

**You provide** `icon`, `label`, `variant` (`ghost` default, `secondary`, `primary`), `size`, `filled` (filled glyph for “on” states such as a liked heart).

**Accessibility** Rendered as `<button aria-label>`; minimum 40px target (48px with `size="lg"`).

**Mobile** Use `size="lg"` in app bars so the target is 48×48.
