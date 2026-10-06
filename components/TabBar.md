# TabBar

Bottom navigation for 3–5 top-level destinations on mobile.

**Use when** the main sections of a mobile app.

**Don't** use for actions, or with more than 5 items.

**You provide** `items` (`{id,label,icon,badge,href}`), `value`, `onChange`, `label`.

**Accessibility** Labelled `<nav>`; current item has `aria-current="page"`, a filled icon and a pill — never colour alone. Labels are always visible.

**Mobile** 56px tall + safe-area inset; each target is at least 48×48.
