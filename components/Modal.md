# Modal

A blocking dialog for a focused decision or short task.

**Use when** confirming destructive actions (`role="alertdialog"`) or short tasks that must finish before continuing.

**Don't** use for long forms or content people need to compare with the page — use a page or `Drawer`.

**You provide** `open`, `onClose`, `title`, `description`, `children`, `footer` (buttons: secondary first, primary last), `size`, `role`, `closeOnScrim`.

**Accessibility** Focus moves into the dialog, Tab is trapped, Esc closes, focus returns to the trigger, background scroll is locked; labelled by its title.

**Mobile** Footer buttons stack full-width under 640px; consider `BottomSheet` on phones.
