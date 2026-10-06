# DatePicker

A field that opens a `Calendar` in a popover.

**Use when** a date input in a form on desktop/web.

**Don't** use on mobile web when the native `<input type="date">` would do — prefer the native picker there.

**You provide** `label`, `value`/`defaultValue`, `onChange(date)`, `helperText`, `error`, `min`, `max`, `locale`, `placeholder`.

**Accessibility** Trigger is a button with `aria-haspopup="dialog"` and `aria-expanded`; Esc closes and returns focus to the trigger; picking a date closes the popover.
