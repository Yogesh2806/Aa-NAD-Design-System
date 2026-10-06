# EmptyState

A full message for errors, empty lists, success and onboarding — with an Aa NAD line illustration.

**Use when** 404/500/offline/no access pages, empty lists and search results, success confirmations, welcome and permission screens.

**Don't** leave a screen blank, or blame the user.

**You provide** `title` (what happened), `description` (why and what to do), `illustration` (an asset URL from `assets/Illustrations`, e.g. `error-404.svg`), `illustrationAlt` (empty when the title says it all), `primaryAction`, `secondaryAction`, `size`, `headingLevel`.

**Accessibility** Heading level is configurable so it fits the page outline. Illustrations are decorative by default. In dark theme the line art is inverted automatically.

| Situation | Illustration |
|---|---|
| Page not found | `error-404.svg` |
| Server error | `error-500.svg` |
| Offline | `error-offline.svg` |
| No permission | `error-access-denied.svg` |
| Nothing yet | `empty-data.svg` |
| No search results | `empty-search.svg` |
| Inbox zero | `empty-inbox.svg` |
| Empty cart | `empty-cart.svg` |
| No notifications | `empty-notifications.svg` |
| Done | `success-done.svg` |
| Paid | `success-payment.svg` |
| Account created | `success-account.svg` |
| Welcome | `onboarding-welcome.svg` |
| Ask permission | `onboarding-permission.svg` |
| Maintenance | `onboarding-maintenance.svg` |
