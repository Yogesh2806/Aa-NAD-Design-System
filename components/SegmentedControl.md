# SegmentedControl

Switches between 2–5 views or modes instantly.

**Use when** changing how the same content is shown (list/grid, day/week).

**Don't** use for navigation between different content (use `Tabs`) or for form choices that are submitted (use `RadioGroup`).

**You provide** `label` (for screen readers), `options` (`{value,label,icon,disabled}`), `value`/`defaultValue`, `onChange`, `size`, `fullWidth`.

**Accessibility** A fieldset of native radios — arrow keys move between segments.
