# Avatar

Represents a person: illustrated or photo image, then initials, then a person icon.

**Use when** showing who owns, wrote or is assigned something.

**Don't** use avatars as the only way to identify someone in critical flows — show the name too.

**You provide** `name` (required — it is the accessible name and drives initials and colour), `src` (use the Aa NAD illustrated avatars in `assets/Avatars` or a photo), `size` (24–96), `shape`, `status`, `decorative`. Group with `<AvatarGroup max>`.

**Accessibility** `role="img"` + `aria-label={name}`; `decorative` hides it when the name is already printed beside it. Status dot has a text alternative. Initials use the hue’s `-100`/`-800` pair (≥7:1).
