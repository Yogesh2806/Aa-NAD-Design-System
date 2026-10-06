# Badge

A short, non-interactive status or count.

**Use when** labelling state (Draft, Live, Failed) or counts (unread 12).

**Don't** use a Badge as a button or filter — use `Tag`. Never rely on colour alone: add a word or icon.

**You provide** `tone` (`neutral`, `info`, `success`, `warning`, `danger`, `inverse`, or any palette hue), `variant` (`subtle` default, `solid`, `outline`), `size`, `icon`, `dot`, `count` + `max`.

**Accessibility** Plain text in a span. Subtle badges use `<role>-bg` + `<role>` text (≥4.5:1); palette hues use `-100` fill + `-800` text.
