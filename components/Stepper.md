# Stepper

Shows progress through a multi-step flow.

**Use when** checkout, onboarding, setup wizards with 3–6 steps.

**Don't** use for more than ~6 steps or non-linear navigation.

**You provide** `steps` (`{id,label,description,status: complete|current|upcoming|error}`), `orientation`, `label`.

**Accessibility** Ordered list in a labelled nav; current step has `aria-current="step"`; each status is spoken (“— complete”). Status is shown by icon and shape, not colour alone.

**Mobile** Use `vertical` on phones.
