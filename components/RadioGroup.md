# RadioGroup

One choice from 2–6 options that are all visible at once.

**Use when** the options are mutually exclusive and comparing them matters.

**Don't** use for more than ~6 options (use `Select`) or for instant view switching (use `SegmentedControl`).

**You provide** `legend`, `options` (`{value,label,description,disabled}`), `value`/`defaultValue`, `onChange(value)`, `orientation`, `error`, `helperText`.

**Accessibility** `<fieldset>` + native radios: arrow keys move the selection, Tab enters/leaves the group.
