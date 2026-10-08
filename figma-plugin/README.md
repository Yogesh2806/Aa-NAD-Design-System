# Aa NAD Figma library builder

This plugin builds the **editable** Aa NAD library inside any Figma file. Everything it makes is native Figma: real variables, styles, components and variants. Nothing is a flat image.

## What it creates

| Page | Contents |
|---|---|
| Cover | Module Aa logo, title and tagline |
| Foundations | Semantic colours shown in each mode, the 12-hue palette, type specimens, spacing, radius and elevation, all bound to variables |
| Icons | 49 curated Ionicons as components, outline and filled (98 total), named `Icon/<name>/<variant>` |
| Logo & illustrations | Logos, 15 line illustrations and 8 avatars as editable vectors |
| 15 core component pages | Button, IconButton, TextField, Select, Checkbox, Radio, Switch, Badge, Tag, Avatar, Card, Alert, Toast, Tab (plus an example Tabs bar), Modal |
| 29 more component pages | Run **Add more components**: Link, TextArea, Combobox, MultiSelect, FileUpload, Slider, SegmentedControl, Calendar, DatePicker, Divider, List item, Table cell, Image, Carousel, Tooltip, Spinner, ProgressBar, Skeleton, EmptyState, BlockLoader, Drawer, BottomSheet, Menu item, Accordion item, Breadcrumbs, Pagination, Stepper, NavBar, TabBar item |

**Variables**

| Collection | Contents |
|---|---|
| Primitives | 133 palette colours and 11 `brand/primary/*` aliases. Hidden from pickers. |
| Color | 44 semantic colours with **Light**, **Dark** and **High contrast** modes, aliased to primitives |
| Spacing | 8px grid with a 4px half-step |
| Radius | Corner radii |

Every variable has scopes, and its Dev Mode code syntax is set to the CSS name, for example `var(--action)`.

**Styles:** 18 text styles (`Display/…`, `Heading/…`, `Body/…`, `Label/…`, `Code/…`) and 4 shadow effect styles.

**Components** are built with auto layout. Fills, strokes, padding, gaps and corner radii are bound to variables.

| Property type | Examples |
|---|---|
| Variant | `Variant`, `Size`, `State`, `Tone` |
| Text | `Label`, `Title`, `Helper` |
| Boolean | `Show start icon`, `Show helper`, `Dismissible` |
| Instance swap | Icons |

Switch a frame to Dark or High contrast in the right panel under **Layer → Appearance → Color**.

## Run it (about 1 minute)

1. **Install the fonts** on your computer: double-click the two `.ttf` files in [`assets/fonts/desktop`](../assets/fonts/desktop) (Atkinson Hyperlegible Next and Mono, variable fonts from Google Fonts). Figma may already list them through Google Fonts. Restart Figma so it sees them. If they are missing, the plugin uses Inter and tells you.
2. Open the **Figma desktop app** and create a **new, empty design file**. Name it `Aa NAD Design System`.
3. Go to **Menu → Plugins → Development → Import plugin from manifest…** and choose `figma-plugin/manifest.json` from this repository.
4. Run it from **Plugins → Development → Aa NAD Library Builder**.
5. When it finishes, Figma shows a summary. To see any notes, open **Plugins → Development → Show/Hide console**.

> **Free (Starter) plan:** Figma allows only one mode per collection on this plan. The plugin then creates `Color · Dark` and `Color · High contrast` as separate collections. On Professional or above, all three are modes of one collection.

## Make it a library

- **In your team:** open the **Assets** panel (book icon) and choose **Publish library**. This needs a paid plan.
- **On Figma Community (free, public):** follow [PUBLISHING.md](../PUBLISHING.md#3-publish-the-figma-file-to-figma-community). People can duplicate the file and use or edit everything.

## Rebuild after changing the code

```bash
cd figma-plugin
npm install
npm run typecheck && npm run build   # writes code.js
```

The data in `src/data.ts` (tokens, icon SVGs, logos, illustrations) is generated from `tokens/tokens.json` and `assets/`. Don't edit values in Figma by hand. Change the tokens, rebuild, and run the plugin again in a fresh file.

## Licence

The plugin code is MIT. The library it generates (logo, illustrations, avatars and the Figma file) is CC BY 4.0. Ionicons are MIT, and Atkinson Hyperlegible is OFL 1.1.
