# Checkbox

A yes/no choice, or several independent choices inside `CheckboxGroup`; supports indeterminate for “select all”.

**Use when** options are independent and the user may pick any number, or must agree to something.

**Don't** use a Checkbox for instant settings — use `Switch`.

**You provide** `label`, `description`, `checked`/`defaultChecked`, `indeterminate`, `error`, `disabled`. Wrap related boxes in `<CheckboxGroup legend>`.

**Accessibility** Native checkbox (Space toggles). Group uses `<fieldset>`/`<legend>`. 20px box, 2px `border-strong` border (≥3:1); checked = `action` fill with `on-action` tick.
