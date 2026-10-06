# Table

Displays data in rows and columns with sortable headers, caption and striping.

**Use when** comparing records across several attributes.

**Don't** use for layout, or on phones with more than 3 columns — switch to `List`/`Card`.

**You provide** `caption` (required; `hideCaption` keeps it for screen readers), `columns` (`{key,header,align,sortable,render,width}`), `rows`, `rowKey`, `striped`, `density`, `emptyText`.

**Accessibility** Native table semantics with `scope="col"`; sortable headers are buttons and set `aria-sort`. The scroll container is a focusable, labelled region so keyboard users can scroll it.

**Mobile** The table scrolls horizontally inside its container; keep the first column short.
