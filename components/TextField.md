# TextField

Single-line input with a visible label, helper text, error message, icons and prefix/suffix.

**Use when** collecting short free text: names, emails, search, amounts.

**Don't** use placeholder text as the label, or hide the label without a reason (`hideLabel` keeps it for screen readers).

**You provide** `label` (required), `type`, `placeholder`, `helperText`, `error` (replaces helper text and turns the border `danger`), `required`, `disabled`, `prefix`/`suffix` text, `iconStart`/`iconEnd`, `size`, and native input props.

**Accessibility** Label is a real `<label for>`; helper/error linked via `aria-describedby`; `aria-invalid` when `error` is set; error messages start with an icon and say how to fix it (“Enter a valid email, like name@example.com”).

**Mobile** Use `size="lg"` (48px). Set the right `type`/`inputMode` (`email`, `tel`, `numeric`) to get the right keyboard. Text is 16px so iOS does not zoom.
