# Card

Groups content and actions about one subject.

**Use when** listing items (projects, products, articles) or grouping a settings block.

**Don't** nest cards in cards, or make a card clickable AND fill it with other buttons without `actions`/`footer` slots.

**You provide** `title`, `subtitle`, `media`, `children`, `actions` (top-right), `footer`, `variant` (`outline` default, `elevated`, `filled`), `href` or `onClick` (whole card clickable), `selected`, `padding`. Lay out with `<CardGroup min={240}>`.

**Accessibility** Clickable cards use one stretched link on the title (one tab stop, a sensible link name); actions/footer sit above it and stay separately focusable.

**Mobile** Cards stack full-width under 640px; use `padding="sm"` on phones.
