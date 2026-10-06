# BlockLoader

The brand loader: the Module Aa blocks light up in sequence.

**Use when** full-screen or section loads, app start, and empty canvases while data arrives.

**Don't** use inside buttons or small controls (use `Spinner`), or for loads under ~400ms.

**You provide** `size` (px width, default 48), `label` (announced), `tone` (`inverse` on dark fills).

**Accessibility** `role="status"` with a visually hidden label. Under reduced motion the blocks stay lit and the whole mark pulses gently.
