# List

A vertical list of rows with icon/avatar, title, description and meta; rows can be links or buttons.

**Use when** settings menus, contacts, files, navigation lists.

**Don't** use for tabular data with many columns — use `Table`.

**You provide** `items` (`{id,title,description,icon,avatar,meta,href,onClick,disabled}`), `ordered`, `dividers`, `label`.

**Accessibility** Real `<ul>/<ol>`; actionable rows are full-width links or buttons (56px tall) with a chevron.

**Mobile** Rows are 56px+ — comfortable 48px targets.
