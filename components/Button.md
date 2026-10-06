# Button

The one way to trigger an action; `primary` (ink fill) at most once per view, for the action the screen exists for.

**Use when** the user commits, saves, submits or starts something. Variants: `primary` (main action), `secondary` (default, bordered), `tertiary` (filled grey, low emphasis), `ghost` (toolbars, inline), `danger` (destructive confirm only).

**Don't** use a Button to navigate — use `Link`. Never put two primaries side by side; never disable a submit button to signal invalid input — let it submit and show field errors.

**You provide** `children` (verb-first, sentence case: “Save changes”), optional `iconStart`/`iconEnd` (Ionicons names), `size` (`sm` 32px desktop-dense only, `md` 40px web default, `lg` 48px mobile default), `loading`, `fullWidth`, plus native button props.

**Accessibility** Native `<button>`. `loading` sets `aria-busy` and keeps the label. Focus ring = 2px `focus-ring`, 2px offset. Icon-only? Use `IconButton`.

**Mobile** Use `size="lg"` (48px) and `fullWidth` for the main action at the bottom of a screen.

```jsx
<Button variant="primary" iconEnd="arrow-forward">Continue</Button>
```
