# Alert

An inline, persistent message about a page or section.

**Use when** explaining a state the user should know about (trial ending, payment failed).

**Don't** use for transient confirmations — use `Toast`.

**You provide** `tone` (`info`, `success`, `warning`, `danger`, `neutral`), `title`, `children`, `actions`, `onDismiss`, `variant` (`subtle`, `outline`), `live` (announce when it appears).

**Accessibility** Every tone has its own icon so meaning is not colour-only. Use `live` only for alerts injected after load (danger → `role="alert"`, others → `role="status"`).
