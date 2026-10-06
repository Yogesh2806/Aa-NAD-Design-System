# Mobile (iOS and Android)

Aa NAD ships React components for web, and **specs** for native apps built in SwiftUI or Jetpack Compose. Native teams use the same tokens, exported as JSON, and the rules below.

## Mapping tokens

| Aa NAD | iOS (SwiftUI) | Android (Compose) |
|---|---|---|
| `space-*` px | points (1:1) | dp (1:1) |
| type `fontSize` px | points; register Atkinson Hyperlegible Next and map `body` → 17pt to match iOS Body | sp (1:1); `body` stays 16sp |
| `radius-sm` / `radius-md` / `radius-lg` | 4 / 8 / 16 pt (`RoundedRectangle(cornerRadius:)`, `.continuous`) | 4 / 8 / 16 dp (`RoundedCornerShape`) |
| colour tokens | Asset catalog colour sets, Any/Dark appearances from `light`/`dark` | `lightColorScheme`/`darkColorScheme` + an extended `NadColors` object |
| `duration-*` / `ease-*` | `Animation.timingCurve(0.2, 0, 0, 1, duration:)` | `tween(durationMillis, CubicBezierEasing(0.2f, 0f, 0f, 1f))` |

Support **Dynamic Type** (iOS) and **font scale** (Android). Let text grow and let rows grow with it, never truncating labels at 200%.

## Layout

- Screen margins are `space-16` on phones and `space-24` on tablets. The grid is 4 columns with 16px gutters.
- Respect safe areas: the notch and Dynamic Island, the home indicator, Android system bars and gesture insets. `TabBar` and `BottomSheet` already pad for `env(safe-area-inset-bottom)` on the web.
- Touch targets are at least 44×44pt on iOS and 48×48dp on Android, even when the visible control is smaller.

## Component specs

| Component | Mobile spec |
|---|---|
| App bar (`NavBar variant="mobile"`) | 56 tall (iOS: 44 + large title optional). Leading back or menu button (48 target), centred `heading-5` title (17pt on iOS), up to 2 trailing icon buttons. |
| Bottom navigation (`TabBar`) | 3–5 items, 56 tall plus inset. Icons are 24 (outline at rest, filled when selected) with an 11/16 label that is always visible. The selected item gets a `surface-pressed` pill behind its icon. Badges use `danger-solid`. |
| Buttons | `size-control-lg` (48). Primary actions are full width, pinned above the home indicator with `space-16` margins. |
| Text fields | 48 tall with a 16 font (prevents iOS zoom). The label sits above the field, never only as a placeholder. Set keyboard type and autofill hints (`textContentType`, `autofillHints`). |
| Lists | Rows at least 56 tall with 16 padding. A trailing chevron means navigation, a trailing switch means a setting. Use the platform's swipe actions for delete and archive. |
| Bottom sheet | `radius-lg` top corners, 40×4 grab handle, a close button always present, half or full height. Use it instead of centred modals for pickers and share menus. |
| Dialogs | Use `alertdialog` for destructive confirms only. Buttons stack vertically with the primary action last (bottom). |
| Toast / Snackbar | Full width minus 16 margins, above the bottom navigation. Auto-hides after 5s unless it has an action. |
| Date pickers | Prefer the native picker: `DatePicker` in SwiftUI, `DatePickerDialog` in Compose, `<input type="date">` on mobile web. |
| Pull to refresh | Use the native control; the spinner uses `icon` colour. |

## Platform conventions

- **iOS:** use the back chevron with no label, or the previous title. Actions go in `.toolbar`. Use SF Symbols only where Ionicons has no equivalent, and keep the outline weight.
- **Android:** use the back arrow and predictive back. Respect edge-to-edge drawing. The FAB is optional and uses `action`/`on-action` with `radius-lg`.
- Haptics: light feedback for toggles, medium for confirming a destructive action. Never use haptics for decoration.
