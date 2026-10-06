# Image

A responsive image with fixed aspect ratio, lazy loading, srcset and an error fallback.

**Use when** showing photos, thumbnails, media in cards.

**Don't** use for icons or illustrations that are decorative SVGs — use `<img alt="">` or `Icon`.

**You provide** `src`, `alt` (required; `""` only when decorative), `ratio`, `srcSet`/`sizes` (for screen density), `fit`, `radius`, `fallback`.

**Accessibility** Alt text describes what matters in context, not “image of”. Failed images keep the space and show a labelled fallback.
