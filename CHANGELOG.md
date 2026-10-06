# Changelog

All notable changes follow [Semantic Versioning](https://semver.org).

## 1.2.1 — 2026-10-06
- **Figma plugin:** new cover built from live component instances; plugin menu now has *Build library* and *Repair & rebuild cover*.
- **Fixed:** icons rendered as solid squares (strokes weren't scaled with the shapes); wrapped text boxes no longer overlap the content below.

## 1.2.0 — 2026-10-06
- **New:** Figma library builder plugin (`figma-plugin/`). It creates variables with three modes, styles, 98 icon components and 15 bound component sets.
- **Open source:** MIT for code, CC BY 4.0 for assets, and a GitHub Pages docs site.
- **New:** `FileUpload`, with a dropzone or button layout, type, size and count checks, per-file progress, retry and remove, and full screen-reader announcements.
- **Fixed:** disabled `Switch` now uses a dashed, dimmed track and a hollow knob so it can't be confused with “off”. High contrast adds “(unavailable)”.

## 1.1.0 — 2026-10-06
- **New theme:** `high-contrast` (WCAG AAA, 7:1 text, visible borders, 3px focus ring). Added `watchSystemTheme()` and forced-colours support.
- **New:** `Combobox`, `MultiSelect`, `BlockLoader`.
- **Motion:** calm and precise micro-interactions: press, lift, drawn checkbox tick, sliding tab ink, animated accordion, exit animations for all overlays, swipe-to-dismiss toasts, shimmer skeletons and list stagger (`animateIn`). Respects `prefers-reduced-motion`.

## 1.0.0 — 2026-10-06
- First release: tokens (light and dark), 41 React components, the Module Aa logo, Ionicons, 15 illustrations, 8 illustrated avatars, and guides for accessibility, mobile, content, the checklist and contributing.
