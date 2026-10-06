# Calendar

A month grid for picking one date, localised with Intl.

**Use when** the date is near today or the user benefits from seeing weekdays.

**Don't** use for birthdays or dates far away — a typed field is faster.

**You provide** `value`/`defaultValue`, `onChange(date)`, `min`, `max`, `isDateDisabled(date)`, `locale`, `weekStartsOn` (0 Sunday, 1 Monday).

**Accessibility** Grid pattern: arrows move by day/week, Page Up/Down by month, Home/End to week edges, Enter/Space selects. Today has `aria-current="date"`; selected has `aria-selected`. Month title is a polite live region.
