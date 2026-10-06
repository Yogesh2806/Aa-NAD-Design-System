# Menu

A dropdown list of actions opened from a button.

**Use when** grouping secondary actions (Edit, Duplicate, Delete) behind one trigger.

**Don't** use for choosing a form value — use `Select`. Don’t nest menus.

**You provide** `trigger` (a `Button` or `IconButton`), `items` (`{id,label,icon,shortcut,danger,disabled,onSelect,divider}`), `label`, `align`.

**Accessibility** Menu button pattern: Enter/Space/↓ opens and focuses the first item; ↑/↓, Home/End and type-ahead move; Esc closes and returns focus; Tab closes. Flips upward near the bottom of the viewport.
