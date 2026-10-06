# Select

Native select styled to the system — keyboard, screen readers and mobile pickers work out of the box.

**Use when** one choice from 5–15 known options.

**Don't** use for 2–4 options (use `RadioGroup` or `SegmentedControl`) or for long searchable lists.

**You provide** `label`, `options` (`{value,label,disabled}`), `placeholder`, `helperText`, `error`, `iconStart`, `size`.

**Accessibility** Native `<select>` with a real label; error linked by `aria-describedby`.

**Mobile** Opens the OS picker (wheel on iOS, sheet on Android).
