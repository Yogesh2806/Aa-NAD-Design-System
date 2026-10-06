# Pagination

Moves through pages of results.

**Use when** long result sets where position matters (search, tables).

**Don't** use for feeds — use “Load more” or infinite scroll with a clear end.

**You provide** `page`, `onChange(page)`, `totalPages` (or `hasNext` when the total is unknown), `siblings`, `pageSize` + `pageSizeOptions` + `onPageSizeChange`, `totalItems`, `compact`.

**Accessibility** `<nav aria-label="Pagination">`; current page has `aria-current="page"`; every button has a full label (“Page 5”, “Next page”); item range is a live region.

**Mobile** “Previous/Next” labels collapse to icons under 640px.
