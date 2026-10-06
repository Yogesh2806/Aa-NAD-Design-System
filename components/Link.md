# Link

Navigates to another page or place; always underlined ink, never colour alone.

**Use when** the user goes somewhere (a URL, a section, a document).

**Don't** use a Link for actions (submit, delete) — use `Button`.

**You provide** `href`, `children`, optional `external` (opens a new tab, adds an icon and a screen-reader note), `standalone` (bold, for links on their own line), `iconStart`, `disabled`.

**Accessibility** Native `<a>`. External links announce “(opens in a new tab)”. Disabled links render as text with `aria-disabled`.
