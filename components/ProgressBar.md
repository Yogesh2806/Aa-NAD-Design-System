# ProgressBar

Shows progress of a task — determinate (a value) or indeterminate.

**Use when** uploads, multi-step processing, quotas.

**Don't** use for loading that finishes in under a second.

**You provide** `label`, `value`, `max`, `showValue`, `size`, `tone` (`default`, `success`, `danger`), `hideLabel`.

**Accessibility** `role="progressbar"` with value attributes when determinate; label always present for screen readers.
