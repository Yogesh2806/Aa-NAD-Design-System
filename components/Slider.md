# Slider

Choose a value from a continuous range.

**Use when** the exact value matters less than the relative position (volume, price ceiling).

**Don't** use when users need a precise number — pair with or use a `TextField`.

**You provide** `label`, `min`, `max`, `step`, `value`/`defaultValue`, `onChange(number)`, `formatValue` (shown and announced), `showValue`.

**Accessibility** Native range input: arrows, Page Up/Down, Home/End. `aria-valuetext` uses `formatValue` (“₹4,000”).
