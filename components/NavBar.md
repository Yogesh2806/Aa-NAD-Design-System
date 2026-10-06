# NavBar

The top app bar: logo, main links and actions on web; back/menu, centred title and actions on mobile.

**Use when** every top-level page.

**Don't** put more than 5 links in it — move the rest into a menu.

**You provide** `variant` (`web`, `mobile`), `logo` (use `assets/Logos/module-aa-nad-horizontal.svg` or your product logo), `title`, `links` (`{label,href,current}`), `actions`, `onBack`, `onMenu`, `sticky`.

**Accessibility** Links in a labelled `<nav>`; current link has `aria-current="page"` and an underline (not colour only). Back/menu buttons are 48px.

**Mobile** `mobile` variant is 56px tall with 48px targets; links collapse into the menu button under 768px.
