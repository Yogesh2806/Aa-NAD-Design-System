# Carousel

A horizontally scrolling set of slides with buttons, dots and swipe.

**Use when** browsing a small set (≤8) of equal items where not all need to be seen.

**Don't** autoplay, or hide important content in later slides.

**You provide** `items` (React nodes), `label`, `itemsPerView`, `loop`, `showDots`.

**Accessibility** `aria-roledescription="carousel"`; slides are labelled “n of N”; arrow keys and buttons move; respects reduced motion. No autoplay by design.

**Mobile** Swipe uses native scroll-snap.
