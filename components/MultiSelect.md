# MultiSelect

A combobox for choosing several options; choices appear as removable tags inside the field.

**Use when** tagging, filtering by several values, or adding people.

**Don't** use for 2–6 options (use `CheckboxGroup`), or when order matters.

**You provide** `label`, `options`, `value`/`defaultValue` (string array), `onChange(values)`, `max`, `placeholder`, `helperText`, `error`, `emptyText`, `filter`, `defaultOpen`.

**Accessibility** Listbox has `aria-multiselectable`; the list stays open while picking. Each tag has a “Remove <name>” button, and Backspace in the empty field removes the last tag. Every add or remove is announced (“React added, 3 selected”). When `max` is reached, a message explains why nothing was added.
