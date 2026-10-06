# Spinner

An indeterminate loading indicator.

**Use when** loading takes 1–5 seconds and the layout is unknown.

**Don't** use for page loads with known layout — use `Skeleton`.

**You provide** `size`, `label` (announced), `tone` (`inverse` on dark fills).

**Accessibility** `role="status"` with a visually hidden label. Under reduced motion it pulses instead of spinning.
