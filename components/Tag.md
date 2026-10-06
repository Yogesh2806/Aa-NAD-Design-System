# Tag

A keyword, filter chip or chosen value that can be removed or toggled.

**Use when** showing applied filters, selected values in a multi-select, or topic labels.

**Don't** use for status (use `Badge`) or for primary actions.

**You provide** `children`, `tone`, `icon`, `onRemove` (+ `removeLabel`), `onClick` + `selected` (filter chip), `disabled`.

**Accessibility** Selectable tags are toggle buttons (`aria-pressed`). The remove “×” is a separate button named “Remove <tag>”. 32px tall; remove target 32×32.
