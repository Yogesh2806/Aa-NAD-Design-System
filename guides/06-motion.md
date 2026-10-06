# Motion

The motion style is **calm and precise**. Motion tells people what changed, where something came from and where it went. It never decorates, never bounces and never autoplays.

## Rules

1. **Small distances.** Elements move 2–8px. Overlays travel their own size: drawers slide their width, sheets their height.
2. **Short durations, and faster exits.** Use `duration-fast` 120ms for feedback, `duration-base` 200ms for state changes and all exits, and `duration-slow` 320ms for large entrances.
3. **The right curve.** `ease-enter` for things arriving (they decelerate), `ease-exit` for things leaving (they accelerate), `ease-standard` for things that move or resize on screen.
4. **Animate only `transform`, `opacity` and colour.** Never animate layout properties such as `width`, `top` or `margin` on large areas. The only exceptions are the accordion's grid rows and the tab ink's width.
5. **Reduced motion is respected everywhere.** Under `prefers-reduced-motion: reduce`, durations collapse to `duration-instant`, press and lift transforms switch off, skeletons stop, and loaders pulse in place. Information is never lost.

## Catalogue

| Group | Interaction | Spec |
|---|---|---|
| Hover & press | Button / IconButton press | scale 0.97, `duration-fast`, `ease-standard` |
| | Trailing icon nudge (e.g. `arrow-forward`) | translateX 2px on hover |
| | Clickable Card | lift translateY −2px and `shadow-2` on hover; settles back on press |
| | Rows, menu items, tabs, chips | background and colour fade, `duration-fast` |
| | List row chevron | translateX 2px on hover |
| | Pagination, TabBar, calendar day press | scale 0.95 |
| Controls | Checkbox | tick draws in (stroke-dashoffset), `duration-base`, `ease-enter`; the box squeezes to 0.92 while pressed |
| | Radio | dot scales 0 → 1, `duration-fast` |
| | Switch | thumb slides `duration-fast`; stretches to 20px while pressed |
| | Tabs | the ink bar slides and resizes to the new tab, `duration-base` |
| | Accordion | height opens and closes (grid rows 0fr ↔ 1fr) and the chevron rotates 180°, `duration-base` |
| | Combobox / Select chevron | rotates 180° when open |
| | Slider, ProgressBar | value changes ease with `duration-slow` |
| Enter / exit | Modal | in: fade, translateY 8px and scale 0.98, `duration-slow`, `ease-enter`; out: reverse in `duration-base`, `ease-exit` |
| | Drawer | slides from its edge, out the same way |
| | BottomSheet | rises from the bottom, out the same way |
| | Scrim | fade in and out |
| | Menu, Combobox list, DatePicker | grow from the trigger: scale 0.96 and fade, origin at the trigger corner, `duration-fast`; flipped menus grow upward |
| | Tooltip | fade and 4px slide toward the trigger, `duration-fast` |
| | Toast | in: rise 8px; out: fade and shrink, or swipe sideways more than 80px to dismiss (it follows the finger, then flies out) |
| | Alert, selected tag in MultiSelect | fade in, or grow from 0.96 |
| Loading & lists | Skeleton | a soft shimmer crosses every 1.4s; static under reduced motion |
| | Stagger (`animateIn` on List and CardGroup) | each item rises 8px and fades in, 40ms apart, capped at 480ms |
| | Spinner | 0.8s rotation; pulses under reduced motion |
| | BlockLoader | the Module Aa blocks light up in sequence, 45ms apart on a 1.8s loop |
| | TabBar current pill | grows in from 40% width |
| | FileUpload drag-over | the border turns solid, the zone scales to 1.01 and the cloud icon lifts 4px, all in `duration-fast`; new file rows stagger in and progress eases |

## Building your own

- Use the tokens in CSS: `transition: transform var(--duration-fast) var(--ease-standard)`.
- To keep something mounted while it exits, use `AaNAD.usePresence(open, 200)`. It returns `[mounted, exiting]`: render while `mounted`, and add an `is-exiting` class while `exiting`.
- For lists that load in, add `animateIn`. For other containers, put the `nad-stagger` class on the parent.
- Native: iOS uses `.timingCurve(0.2, 0, 0, 1, duration: 0.2)` and Android uses `tween(200, easing = CubicBezierEasing(0.2f, 0f, 0f, 1f))`. Both check the system's reduce-motion setting.
