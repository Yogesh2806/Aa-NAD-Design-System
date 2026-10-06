# Toast

A brief, non-blocking message about something that just happened.

**Use when** confirming an action (“Link copied”) or offering undo/retry.

**Don't** put critical errors only in a toast, or stack more than 3.

**You provide** Wrap the app in `<ToastProvider>` once and call `useToast().show({title, description, tone, action, duration})`. `Toast` renders one statically.

**Accessibility** Toasts live in a polite live region; they pause on hover/focus, auto-dismiss after 5s, and never auto-dismiss when they carry an action.

**Mobile** Toasts span the full width at the bottom on phones (above the TabBar).
