# Checklist coverage

How Aa NAD 1.0 covers the open-source design system checklist (designsystemchecklist.com) and the guidance on designsystems.com.

## Design language

| Item | Status | Where |
|---|---|---|
| Vision and design principles | Done | README → Principles |
| Tone of voice, terminology, writing and microcopy guidelines | Done | Content |
| Brand assets: logo, fonts, icons, illustrations | Done | Logos, fonts/, Icons, Illustrations, Avatars |
| Accessibility guidelines | Done | Accessibility |
| Internationalisation | Partly done | Content → Internationalisation. RTL is supported by logical layout; mirroring icons is up to the consumer. |

## Foundations

| Item | Status | Where |
|---|---|---|
| Colour: accessibility, semantic colours, dark mode, guidelines | Done | tokens, README → Colour |
| Layout: units, grid, breakpoints, spacing | Done | `space-*`, `bp-*`, README → Spacing |
| Typography: responsiveness, grid relation, readability, performance | Done | Variable WOFF2 latin subsets (about 35KB each), 4px line-height grid |
| Elevation: shadows, background colours, z-index | Done | `shadow-*`, `surface-*`, `z-*` |
| Motion: easing, duration, accessibility | Done | `duration-*`, `ease-*`, the Motion section, reduced-motion rules |
| Iconography: style, naming, grid, keywords, reserved icons | Done | Ionicons names. Reserved: `close` dismisses, `trash` deletes permanently, `chevron-forward` navigates. |

## Core components

All 29 checklist components are covered: Accordion, Alert, Avatar, Badge, Button, Breadcrumbs, Calendar, Card, Carousel, Checkbox, Divider, Dropdown (`Menu`), Icon, Image, Link, List, Loading indicator (`Spinner`), Modal, Pagination, Progress bar, Input radio (`RadioGroup`), Select, Skeleton, Switch, Tabs, Text area, Text field, Toast and Tooltip.

There are also 16 more: IconButton, Slider, SegmentedControl, Combobox, MultiSelect, FileUpload, DatePicker, Tag, Table, EmptyState, BlockLoader, Drawer, BottomSheet, Stepper, NavBar and TabBar.

## Maintenance

| Item | Status |
|---|---|
| Component anatomy, properties, composition examples | Done: each component README plus its live preview |
| Getting started, design and development best practices | Done: README → Using the components, For AI coding agents |
| Browser / OS support | Evergreen browsers (last 2 versions of Chrome, Edge, Firefox, Safari), iOS 16+ and Android 10+. Uses `:has()` for focus styling and degrades gracefully without it. |
| Contribution, release cycle, decision log | See **Contributing** |
| Roadmap | A dark high-contrast theme (deferred), a coded Figma library. Shipped in 1.1: high-contrast theme, Combobox, MultiSelect, motion layer. Shipped in 1.2: FileUpload. |
