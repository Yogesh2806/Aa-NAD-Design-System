# Accordion

Collapsible sections that reveal content on demand.

**Use when** FAQs, long settings pages, optional detail.

**Don't** hide content most users need.

**You provide** `items` (`{id,title,content,disabled,icon}`), `multiple`, `defaultOpen`, `headingLevel`, `variant` (`divided`, `contained`).

**Accessibility** Each header is a heading wrapping a button with `aria-expanded`/`aria-controls`; panels are labelled regions.
