# Breadcrumbs

Shows where the current page sits in a hierarchy.

**Use when** sites with 3+ levels.

**Don't** use as the only navigation, or on flat sites.

**You provide** `items` (`{label,href,icon,disabled}` — the last is the current page), `maxItems` (collapses the middle), `separator`.

**Accessibility** `<nav aria-label="Breadcrumb">` + ordered list; current page has `aria-current="page"`; separators are hidden from screen readers.

**Mobile** Collapse to the parent link only on phones.
