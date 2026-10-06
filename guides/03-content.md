# Content and microcopy

## Tone

Clear, calm and direct. Write like a helpful colleague: short sentences, plain words, no jargon, no blame, no hype.

| Moment | Do | Don't |
|---|---|---|
| Error | “We couldn't save your changes. Check your connection and try again.” | “Oops! Something went wrong!!” |
| Empty | “No projects yet. Create one to get started.” | “Nothing to see here 🙈” |
| Success | “Project created.” | “Awesome!! You did it!” |
| Destructive | “Delete project? 24 files will be permanently deleted.” | “Are you sure?” |

## Terminology

Use one word for one thing across the product:

| Use | Not |
|---|---|
| Sign in / Sign out | Log in, Login, Logout |
| Delete (permanent) / Remove (from a list) | Erase, Destroy |
| Settings | Preferences, Options |
| Save changes | Submit, Apply |
| Cancel | Dismiss, Close (unless it closes a panel) |

## Patterns

- **Buttons:** verb + object, sentence case, 1–3 words. On confirmation dialogs, repeat the verb from the title: “Delete project?” → “Delete project”.
- **Labels:** nouns, no colons, no “please”. Mark the minority: if most fields are required, mark the optional ones “(optional)”.
- **Helper text:** say the format or the reason, not the obvious: “As it appears on your ID.”
- **Errors:** say what happened and how to fix it, near the field, in `danger` with an icon. Don't clear what the user typed.
- **Placeholders:** examples only (“Jane Doe”), never instructions.
- **Numbers and dates:** use `Intl.NumberFormat` and `Intl.DateTimeFormat` with the user's locale, and keep tabular data aligned to the end.
- **Truncation:** truncate with an ellipsis and show the full text in a tooltip or detail view. Never truncate buttons or errors.

## Internationalisation

- Allow 30–40% text expansion. Don't size buttons or tabs to the English label.
- Use logical CSS properties (`margin-inline-start`). Components flip in right-to-left layouts with `dir="rtl"`, and directional icons (`chevron-forward`, `arrow-back`) should be mirrored by the consumer.
- Never build sentences from fragments, and never embed text in images or illustrations.
