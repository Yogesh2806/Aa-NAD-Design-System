# Combobox

A text field with a filtered list: type to narrow a long list, then pick one.

**Use when** choosing from long or searchable lists such as countries, people, time zones or products.

**Don't** use for fewer than about 8 options (use `Select` or `RadioGroup`), or for free search with no fixed answers.

**You provide** `label`, `options` (`{value,label,description,icon,disabled}`), `value`/`defaultValue`, `onChange(value, option)`, `placeholder`, `helperText`, `error`, `emptyText`, `filter(option, query)` (default: case-insensitive contains), `clearable`, `size`, `defaultOpen`.

**Accessibility** ARIA 1.2 combobox: the input has `role="combobox"`, `aria-expanded`, `aria-controls` and `aria-activedescendant`. ↓/↑ open and move, Enter picks, Esc closes (a second Esc clears), Tab leaves. The number of results is announced politely. Leaving the field restores the last valid choice.

**Mobile** The list opens below the field, at most 288px tall, and scrolls the active option into view. On native apps use the platform searchable picker.
