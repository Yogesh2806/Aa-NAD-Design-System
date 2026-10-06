# BottomSheet

A sheet rising from the bottom edge on phones, with a grab handle.

**Use when** short pickers, share/action lists and quick forms on mobile.

**Don't** use on wide screens — use `Modal` or `Menu`.

**You provide** `open`, `onClose`, `title`, `children`, `footer`.

**Accessibility** Same focus management as `Modal`; the close button is always present (the handle is decorative).

**Mobile** Respects the home-indicator safe area. Footer buttons are full-width.
