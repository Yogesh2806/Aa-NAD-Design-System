# Contributing

## Proposing a change

1. **Check first.** Can an existing component or token do it with composition? Most requests end here.
2. **Open a proposal** with the problem (not the solution), where it occurs in at least two products, screenshots, and the accessibility needs.
3. **Design in tokens.** New colours, sizes or radii must come from the existing scales. A new token needs a usage note and a contrast check in both themes.
4. **Build:** a React component in `components/src`, styles in `bundle.css` with the `nad-` prefix, a `preview.html` showing every state, and a `README.md` in the house format (summary, Use when, Don't, You provide, Accessibility, Mobile).
5. **Review:** keyboard-only pass, screen-reader pass (VoiceOver and NVDA), both themes, 320px width, 200% text, reduced motion.

## Versioning

Semantic versioning. Token renames and removed props are **major**, new components and props are **minor**, and fixes are **patch**. Deprecations live for one minor release with a console warning before removal.

## Decision log

| Date | Decision |
|---|---|
| 2026-10-06 | Monochrome base with a replaceable `primary-*` brand slot. |
| 2026-10-06 | Atkinson Hyperlegible Next and Mono over Roboto, for legibility; Roboto stays in the fallback stack. |
| 2026-10-06 | 8px spacing with a 4px half-step; 4px component radius. |
| 2026-10-06 | Ionicons 8, outline at rest and filled when active. |
| 2026-10-06 | Module Aa block logo (8px-grid blocks, 4px corners) as the primary mark. |
| 2026-10-06 | Illustrations are black and grey line art with no accent colour. |
| 2026-10-06 | 1.1: high-contrast (AAA) theme; Combobox and MultiSelect; calm and precise motion layer with exit animations. |
| 2026-10-06 | 1.2: FileUpload. Disabled switches use a dashed, dimmed track so they can't be confused with “off” (all themes). A dark high-contrast theme is deferred. |

## Design tools

`tokens/tokens.json` is the source of truth.

- **Figma:** run the plugin in [`figma-plugin/`](../figma-plugin/README.md) in an empty file. It builds the editable library: variables with Light, Dark and High contrast modes, text and effect styles, icon components and 15 component sets. You can also import `tokens/aa-nad.figma-tokens.json` (W3C design-token format) with Tokens Studio.
- After a token change, rebuild and run the plugin again in a fresh file. Don't edit values in Figma by hand.
