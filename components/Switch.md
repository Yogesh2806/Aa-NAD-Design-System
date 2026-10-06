# Switch

An on/off setting that takes effect immediately, with no Save step.

**Use when** toggling a preference (dark mode, notifications).

**Don't** use inside forms that are submitted later — use `Checkbox`.

**You provide** `label`, `description`, `checked`/`defaultChecked`, `onChange`, `labelPosition` (`start` for settings rows), `disabled`.

**Accessibility** Native checkbox with `role="switch"`; state is conveyed by thumb position AND fill, not colour alone.

**Mobile** Use `labelPosition="start"` in settings lists so the control aligns to the right edge.
