# Accessibility

Aa NAD targets **WCAG 2.2 level AA** in the light and dark themes, and **AAA** (7:1 text) in the high-contrast theme. These rules are part of the system, not optional extras.

## Contrast

| Pair | Light | Dark | High contrast | Needs (AA / AAA) |
|---|---|---|---|---|
| `text` on `bg` / `surface` | 18.9:1 | 16.6:1 | 21:1 | 4.5 / 7 |
| `text-muted` on `surface` | 6.7:1 | 8.3:1 | 12.6:1 | 4.5 / 7 |
| `text-subtle` on `surface` | 4.7:1 | 5.6:1 | 9.7:1 | 4.5 / 7 |
| `on-action` on `action` | 18.9:1 | 17.3:1 | 21:1 | 4.5 / 7 |
| `border-strong` on `surface` (controls) | 4.7:1 | 5.2:1 | 18.9:1 | 3:1 |
| `focus-ring` on any surface | ≥15:1 | ≥15:1 | 21:1, 3px | 3:1 |
| `danger` / `warning` / `success` / `info` on their `-bg` | ≥4.5:1 | ≥4.5:1 | ≥7:1 | 4.5 / 7 |
| Palette tag text on fill (`-800` on `-100` light, `-100` on `-900` dark) | ≥7.9:1 | ≥11:1 | ≥7.9:1 | 4.5 / 7 |

All 90 semantic pairs (30 per theme) were checked programmatically. High contrast is held to 7:1 for text. Palette steps `-400` and `-500` are for charts and decoration only. They fall below 4.5:1 on white.

## High-contrast theme

`data-theme="high-contrast"`, or `AaNAD.watchSystemTheme()`, which turns it on when the OS asks for more contrast. It adds visible borders to every card, menu and dialog, 2px input borders, a 3px focus ring and underlined active tabs and options. Windows forced-colours mode is also respected: components fall back to system colours with real borders.

## Never colour alone

Status always carries an icon or a word: Alerts have per-tone icons, Badges take `icon`, and form errors start with an alert icon. Selected tabs get an underline or fill, the current TabBar item gets a filled icon and a pill, and the current NavBar link is underlined. Success and danger are similar in lightness, so the icon (checkmark versus alert) is what tells them apart for colour-blind users. Never remove it.

## Keyboard and focus

- Everything interactive is reachable with Tab, in reading order, and shows the 2px `focus-ring` with a 2px offset.
- Composite widgets follow the WAI-ARIA Authoring Practices: Tabs (arrows, Home/End), Menu (arrows, type-ahead, Esc), Calendar (arrows, Page Up/Down, Home/End), RadioGroup and SegmentedControl (arrows).
- Modal, Drawer and BottomSheet trap focus, close on Esc, lock page scroll and return focus to their trigger.
- Tooltips open on focus as well as hover and close on Esc. They never hold interactive content.

## Screen readers

- Every input has a real `<label>`. Helper and error text are linked with `aria-describedby`, and invalid fields set `aria-invalid`.
- Icon-only buttons require `label`. Decorative icons are `aria-hidden`.
- Live regions: toasts are polite, an Alert with `live` is assertive for danger, pagination ranges and character counters are polite, and loading groups are busy status regions.
- Images need `alt`. Illustrations in `EmptyState` are decorative unless `illustrationAlt` is set.

## Targets and zoom

- Minimum target is 24×24 (WCAG 2.5.8). The defaults are larger: 40px controls on web, and 48px on mobile (`size-control-lg`, `size-touch-android`) or 44px on iOS (`size-touch-ios`).
- Layouts reflow at 320px wide and 400% zoom with no two-dimensional scrolling, except Table, which scrolls inside its own labelled region.
- Text uses `px` tokens that scale with browser zoom. Don't lock the viewport (`user-scalable=no`).

## Motion

Every animation respects `prefers-reduced-motion`: durations collapse to `duration-instant`, spinners pulse, skeletons stop, and the carousel scrolls without smoothing. Nothing autoplays or flashes.

## Checklist before shipping

- [ ] Can I complete the task with only a keyboard?
- [ ] Can I see where focus is at every step?
- [ ] Does every control have a name a screen reader will announce?
- [ ] Do errors say how to fix the problem, and are they announced?
- [ ] Does it still work at 200% text size and in the dark theme?
- [ ] Is any information carried by colour alone?
