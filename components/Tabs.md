# Tabs

Switches between views of the same context.

**Use when** splitting related content into peer sections (Overview, Files, Settings).

**Don't** use for sequential steps (use `Stepper`) or site navigation (use `NavBar`).

**You provide** `label`, `items` (`{id,label,icon,badge,disabled,content}`), `value`/`defaultValue`, `onChange`, `variant` (`line`, `contained`), `fullWidth`.

**Accessibility** WAI-ARIA tabs: arrow keys move AND activate, Home/End jump; roving tabindex; panels are labelled by their tab.

**Mobile** Tab lists scroll horizontally on narrow screens; use `fullWidth` for 2–3 tabs.
