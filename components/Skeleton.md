# Skeleton

Grey placeholder shapes shown while content loads.

**Use when** the layout is known and loading takes more than ~300ms.

**Don't** use for more than a few seconds — explain the wait instead.

**You provide** `shape` (`text`, `rect`, `circle`), `width`, `height`, `lines`. Wrap a group in `<SkeletonGroup label>` so it is announced once.

**Accessibility** Shapes are `aria-hidden`; the group is a busy status region. Pulses gently; static under reduced motion.
