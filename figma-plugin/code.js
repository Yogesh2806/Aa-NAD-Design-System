(() => {
  // data.ts
  var DATA = { "prim": [["gray-0", "#ffffff", "Pure white. Page and surface in light theme."], ["gray-50", "#f7f7f7", "Subtle background, zebra rows (light)."], ["gray-100", "#efefef", "Sunken areas, hover fills on white."], ["gray-200", "#e2e2e2", "Hairline borders and dividers (decorative, light)."], ["gray-300", "#c9c9c9", "Disabled borders; skeleton shapes."], ["gray-400", "#a3a3a3", "Disabled text/icons (light). Never for readable text."], ["gray-500", "#737373", "Control borders and placeholder (4.7:1 on white)."], ["gray-600", "#5c5c5c", "Secondary text on white (6.7:1)."], ["gray-700", "#444444", "Strong secondary text; dark-theme borders."], ["gray-800", "#2b2b2b", "Dark-theme raised surface hover."], ["gray-900", "#1c1c1c", "Dark-theme raised surfaces."], ["gray-950", "#111111", "NAD Ink \u2014 primary text, default action fill, the logo colour."], ["gray-1000", "#000000", "Pure black. Overlays only."], ["red-50", "#fff4f3", "Danger / destructive. Tinted background (tags, avatars, alerts)."], ["red-100", "#ffe6e4", "Danger / destructive. Tag / avatar fill; text on it uses -800."], ["red-200", "#ffcdc8", "Danger / destructive. Hover on tinted fills; chart fills."], ["red-300", "#ffaba3", "Danger / destructive. Borders on tinted fills."], ["red-400", "#fc7a73", "Danger / destructive. Icons & text on dark surfaces."], ["red-500", "#e15955", "Danger / destructive. Charts and decorative marks only (\u22483.5:1 on white \u2014 not for text)."], ["red-600", "#bd3d3b", "Danger / destructive. Text, icons and solid fills on white (\u22654.5:1). White text on it passes."], ["red-700", "#9c2f2e", "Danger / destructive. Text on -50/-100 fills; hover for -600 fills."], ["red-800", "#782222", "Danger / destructive. Text on -100 fills; pressed state."], ["red-900", "#551918", "Danger / destructive. Deepest shade; dark-theme tinted backgrounds."], ["orange-50", "#fff4ef", "Tinted background (tags, avatars, alerts)."], ["orange-100", "#ffe7dc", "Tag / avatar fill; text on it uses -800."], ["orange-200", "#ffcfb7", "Hover on tinted fills; chart fills."], ["orange-300", "#ffae84", "Borders on tinted fills."], ["orange-400", "#f68443", "Icons & text on dark surfaces."], ["orange-500", "#db640e", "Charts and decorative marks only (\u22483.5:1 on white \u2014 not for text)."], ["orange-600", "#b24e00", "Text, icons and solid fills on white (\u22654.5:1). White text on it passes."], ["orange-700", "#923f00", "Text on -50/-100 fills; hover for -600 fills."], ["orange-800", "#712f00", "Text on -100 fills; pressed state."], ["orange-900", "#511f00", "Deepest shade; dark-theme tinted backgrounds."], ["amber-50", "#fff5e9", "Warning. Tinted background (tags, avatars, alerts)."], ["amber-100", "#ffe9cf", "Warning. Tag / avatar fill; text on it uses -800."], ["amber-200", "#ffd29b", "Warning. Hover on tinted fills; chart fills."], ["amber-300", "#f8b65d", "Warning. Borders on tinted fills."], ["amber-400", "#e39500", "Warning. Icons & text on dark surfaces."], ["amber-500", "#be7c00", "Warning. Charts and decorative marks only (\u22483.5:1 on white \u2014 not for text)."], ["amber-600", "#996300", "Warning. Text, icons and solid fills on white (\u22654.5:1). White text on it passes."], ["amber-700", "#7d5000", "Warning. Text on -50/-100 fills; hover for -600 fills."], ["amber-800", "#603c00", "Warning. Text on -100 fills; pressed state."], ["amber-900", "#452a00", "Warning. Deepest shade; dark-theme tinted backgrounds."], ["yellow-50", "#fbf7e8", "Tinted background (tags, avatars, alerts)."], ["yellow-100", "#f7edcb", "Tag / avatar fill; text on it uses -800."], ["yellow-200", "#f0da95", "Hover on tinted fills; chart fills."], ["yellow-300", "#e2c157", "Borders on tinted fills."], ["yellow-400", "#c9a300", "Icons & text on dark surfaces."], ["yellow-500", "#a98800", "Charts and decorative marks only (\u22483.5:1 on white \u2014 not for text)."], ["yellow-600", "#876d00", "Text, icons and solid fills on white (\u22654.5:1). White text on it passes."], ["yellow-700", "#6e5800", "Text on -50/-100 fills; hover for -600 fills."], ["yellow-800", "#544300", "Text on -100 fills; pressed state."], ["yellow-900", "#3c2f00", "Deepest shade; dark-theme tinted backgrounds."], ["lime-50", "#f3faeb", "Tinted background (tags, avatars, alerts)."], ["lime-100", "#e4f3d3", "Tag / avatar fill; text on it uses -800."], ["lime-200", "#cae7a7", "Hover on tinted fills; chart fills."], ["lime-300", "#acd476", "Borders on tinted fills."], ["lime-400", "#8aba3e", "Icons & text on dark surfaces."], ["lime-500", "#6e9e00", "Charts and decorative marks only (\u22483.5:1 on white \u2014 not for text)."], ["lime-600", "#577f00", "Text, icons and solid fills on white (\u22654.5:1). White text on it passes."], ["lime-700", "#466700", "Text on -50/-100 fills; hover for -600 fills."], ["lime-800", "#354f00", "Text on -100 fills; pressed state."], ["lime-900", "#243700", "Deepest shade; dark-theme tinted backgrounds."], ["green-50", "#eefbf0", "Success. Tinted background (tags, avatars, alerts)."], ["green-100", "#d9f6dd", "Success. Tag / avatar fill; text on it uses -800."], ["green-200", "#b0ecbc", "Success. Hover on tinted fills; chart fills."], ["green-300", "#83dc97", "Success. Borders on tinted fills."], ["green-400", "#4ec36f", "Success. Icons & text on dark surfaces."], ["green-500", "#17a750", "Success. Charts and decorative marks only (\u22483.5:1 on white \u2014 not for text)."], ["green-600", "#00873c", "Success. Text, icons and solid fills on white (\u22654.5:1). White text on it passes."], ["green-700", "#006e30", "Success. Text on -50/-100 fills; hover for -600 fills."], ["green-800", "#005423", "Success. Text on -100 fills; pressed state."], ["green-900", "#003c17", "Success. Deepest shade; dark-theme tinted backgrounds."], ["teal-50", "#e9fcf8", "Tinted background (tags, avatars, alerts)."], ["teal-100", "#cdf7ef", "Tag / avatar fill; text on it uses -800."], ["teal-200", "#94efdf", "Hover on tinted fills; chart fills."], ["teal-300", "#45dfca", "Borders on tinted fills."], ["teal-400", "#00c2ae", "Icons & text on dark surfaces."], ["teal-500", "#00a291", "Charts and decorative marks only (\u22483.5:1 on white \u2014 not for text)."], ["teal-600", "#008274", "Text, icons and solid fills on white (\u22654.5:1). White text on it passes."], ["teal-700", "#006a5e", "Text on -50/-100 fills; hover for -600 fills."], ["teal-800", "#005148", "Text on -100 fills; pressed state."], ["teal-900", "#003932", "Deepest shade; dark-theme tinted backgrounds."], ["cyan-50", "#e8fbff", "Tinted background (tags, avatars, alerts)."], ["cyan-100", "#cbf6ff", "Tag / avatar fill; text on it uses -800."], ["cyan-200", "#91ebfd", "Hover on tinted fills; chart fills."], ["cyan-300", "#3ddaf5", "Borders on tinted fills."], ["cyan-400", "#00bcd6", "Icons & text on dark surfaces."], ["cyan-500", "#009db3", "Charts and decorative marks only (\u22483.5:1 on white \u2014 not for text)."], ["cyan-600", "#007e90", "Text, icons and solid fills on white (\u22654.5:1). White text on it passes."], ["cyan-700", "#006775", "Text on -50/-100 fills; hover for -600 fills."], ["cyan-800", "#004e5a", "Text on -100 fills; pressed state."], ["cyan-900", "#003740", "Deepest shade; dark-theme tinted backgrounds."], ["blue-50", "#f2f7ff", "Info and links in charts. Tinted background (tags, avatars, alerts)."], ["blue-100", "#e2eeff", "Info and links in charts. Tag / avatar fill; text on it uses -800."], ["blue-200", "#c5ddff", "Info and links in charts. Hover on tinted fills; chart fills."], ["blue-300", "#a0c6ff", "Info and links in charts. Borders on tinted fills."], ["blue-400", "#6ea8ff", "Info and links in charts. Icons & text on dark surfaces."], ["blue-500", "#438af1", "Info and links in charts. Charts and decorative marks only (\u22483.5:1 on white \u2014 not for text)."], ["blue-600", "#286dce", "Info and links in charts. Text, icons and solid fills on white (\u22654.5:1). White text on it passes."], ["blue-700", "#1d58aa", "Info and links in charts. Text on -50/-100 fills; hover for -600 fills."], ["blue-800", "#154384", "Info and links in charts. Text on -100 fills; pressed state."], ["blue-900", "#0f2f5d", "Info and links in charts. Deepest shade; dark-theme tinted backgrounds."], ["indigo-50", "#f4f6ff", "Tinted background (tags, avatars, alerts)."], ["indigo-100", "#e8ecff", "Tag / avatar fill; text on it uses -800."], ["indigo-200", "#d0d9ff", "Hover on tinted fills; chart fills."], ["indigo-300", "#b4c0ff", "Borders on tinted fills."], ["indigo-400", "#909eff", "Icons & text on dark surfaces."], ["indigo-500", "#727ef1", "Charts and decorative marks only (\u22483.5:1 on white \u2014 not for text)."], ["indigo-600", "#5962ce", "Text, icons and solid fills on white (\u22654.5:1). White text on it passes."], ["indigo-700", "#474eaa", "Text on -50/-100 fills; hover for -600 fills."], ["indigo-800", "#363b84", "Text on -100 fills; pressed state."], ["indigo-900", "#252a5d", "Deepest shade; dark-theme tinted backgrounds."], ["violet-50", "#f8f5ff", "Tinted background (tags, avatars, alerts)."], ["violet-100", "#f0e9ff", "Tag / avatar fill; text on it uses -800."], ["violet-200", "#e1d2ff", "Hover on tinted fills; chart fills."], ["violet-300", "#ceb5ff", "Borders on tinted fills."], ["violet-400", "#b88efc", "Icons & text on dark surfaces."], ["violet-500", "#9d6fe3", "Charts and decorative marks only (\u22483.5:1 on white \u2014 not for text)."], ["violet-600", "#8053c0", "Text, icons and solid fills on white (\u22654.5:1). White text on it passes."], ["violet-700", "#69429f", "Text on -50/-100 fills; hover for -600 fills."], ["violet-800", "#50327b", "Text on -100 fills; pressed state."], ["violet-900", "#382356", "Deepest shade; dark-theme tinted backgrounds."], ["pink-50", "#fff3f8", "Tinted background (tags, avatars, alerts)."], ["pink-100", "#ffe4f0", "Tag / avatar fill; text on it uses -800."], ["pink-200", "#ffc9e1", "Hover on tinted fills; chart fills."], ["pink-300", "#ffa3cf", "Borders on tinted fills."], ["pink-400", "#f079b6", "Icons & text on dark surfaces."], ["pink-500", "#d4599b", "Charts and decorative marks only (\u22483.5:1 on white \u2014 not for text)."], ["pink-600", "#b23d7d", "Text, icons and solid fills on white (\u22654.5:1). White text on it passes."], ["pink-700", "#922f66", "Text on -50/-100 fills; hover for -600 fills."], ["pink-800", "#71234e", "Text on -100 fills; pressed state."], ["pink-900", "#501937", "Deepest shade; dark-theme tinted backgrounds."]], "alias": [["primary-50", "gray-50", "Brand slot. Defaults to gray-50. Replace primary-50\u2026950 with your own ramp; components only read the action-* tokens below, which alias this ramp."], ["primary-100", "gray-100", "Brand slot. Defaults to gray-100. Replace primary-50\u2026950 with your own ramp; components only read the action-* tokens below, which alias this ramp."], ["primary-200", "gray-200", "Brand slot. Defaults to gray-200. Replace primary-50\u2026950 with your own ramp; components only read the action-* tokens below, which alias this ramp."], ["primary-300", "gray-300", "Brand slot. Defaults to gray-300. Replace primary-50\u2026950 with your own ramp; components only read the action-* tokens below, which alias this ramp."], ["primary-400", "gray-400", "Brand slot. Defaults to gray-400. Replace primary-50\u2026950 with your own ramp; components only read the action-* tokens below, which alias this ramp."], ["primary-500", "gray-500", "Brand slot. Defaults to gray-500. Replace primary-50\u2026950 with your own ramp; components only read the action-* tokens below, which alias this ramp."], ["primary-600", "gray-600", "Brand slot. Defaults to gray-600. Replace primary-50\u2026950 with your own ramp; components only read the action-* tokens below, which alias this ramp."], ["primary-700", "gray-700", "Brand slot. Defaults to gray-700. Replace primary-50\u2026950 with your own ramp; components only read the action-* tokens below, which alias this ramp."], ["primary-800", "gray-800", "Brand slot. Defaults to gray-800. Replace primary-50\u2026950 with your own ramp; components only read the action-* tokens below, which alias this ramp."], ["primary-900", "gray-900", "Brand slot. Defaults to gray-900. Replace primary-50\u2026950 with your own ramp; components only read the action-* tokens below, which alias this ramp."], ["primary-950", "gray-950", "Brand slot. Defaults to gray-950. Replace primary-50\u2026950 with your own ramp; components only read the action-* tokens below, which alias this ramp."]], "sem": [["bg", "#ffffff", "#0b0b0b", "#ffffff", "Page background."], ["bg-subtle", "{gray-50}", "#121212", "#ffffff", "Alternate page bands, sidebars."], ["surface", "#ffffff", "#161616", "#ffffff", "Cards, inputs, menus."], ["surface-raised", "#ffffff", "#1e1e1e", "#ffffff", "Modals, popovers, toasts (pair with a shadow)."], ["surface-sunken", "{gray-100}", "#0b0b0b", "{gray-50}", "Wells, code blocks, track of sliders/progress."], ["surface-hover", "{gray-100}", "#242424", "{gray-100}", "Hover fill for rows, menu items, ghost buttons."], ["surface-pressed", "{gray-200}", "#2e2e2e", "{gray-200}", "Pressed fill for rows, menu items, ghost buttons."], ["surface-inverse", "{gray-950}", "#f5f5f5", "#000000", "Tooltips, snackbars \u2014 the inverted surface."], ["border", "{gray-200}", "#2e2e2e", "{gray-950}", "Decorative dividers and card outlines (not for controls)."], ["border-strong", "{gray-500}", "#8a8a8a", "{gray-950}", "Input, checkbox and radio borders \u2014 \u22653:1 on bg and surface in both themes."], ["text", "{gray-950}", "#f5f5f5", "#000000", "Primary text on bg, surface, surface-raised (18.9:1 light, 17:1 dark)."], ["text-muted", "{gray-600}", "#b0b0b0", "#333333", "Secondary text, helper text, captions on bg/surface (\u22656.7:1)."], ["text-subtle", "{gray-500}", "#8f8f8f", "{gray-700}", "Placeholders, metadata on bg/surface (\u22654.5:1). Not for body copy."], ["text-disabled", "{gray-400}", "#5c5c5c", "{gray-500}", "Disabled labels only (exempt from contrast)."], ["text-inverse", "#ffffff", "{gray-950}", "#ffffff", "Text on surface-inverse and on action."], ["icon", "{gray-950}", "#f5f5f5", "#000000", "Default icon colour."], ["icon-muted", "{gray-600}", "#b0b0b0", "#333333", "Secondary icons (\u22653:1 needed, has 6.7:1)."], ["action", "{primary-950}", "#f5f5f5", "#000000", "Primary button fill, selected states, switch on, checkbox checked. Brand slot: light reads primary-950."], ["action-hover", "{primary-800}", "{gray-300}", "{gray-800}", "Hover on action fills."], ["action-pressed", "{gray-1000}", "{gray-400}", "{gray-700}", "Pressed on action fills."], ["on-action", "#ffffff", "{gray-950}", "#ffffff", "Text/icons on action fills."], ["focus-ring", "{gray-950}", "#f5f5f5", "#000000", "2px focus outline with a 2px offset in bg colour \u2014 \u22653:1 against every surface."], ["link", "{gray-950}", "#f5f5f5", "#000000", "Links are ink + underline; never colour alone."], ["overlay", "rgba(0, 0, 0, 0.56)", "rgba(0, 0, 0, 0.72)", "rgba(0, 0, 0, 0.72)", "Scrim behind modals and drawers."], ["danger", "{red-600}", "{red-400}", "{red-800}", "Errors, destructive actions. Text and icons on bg/surface (\u22654.5:1). Always pair with an icon or word."], ["danger-solid", "{red-600}", "{red-400}", "{red-800}", "Solid fill (badges, filled alerts, destructive button)."], ["on-danger-solid", "#ffffff", "{gray-950}", "#ffffff", "Text/icons on danger-solid."], ["danger-bg", "{red-50}", "#2a1414", "{red-50}", "Tinted background for danger alerts and fields."], ["danger-border", "{red-300}", "{red-700}", "{red-800}", "Border of danger alerts; error-state input border uses `danger`."], ["warning", "{amber-600}", "{amber-400}", "{amber-800}", "Caution, pending risk. Text and icons on bg/surface (\u22654.5:1). Always pair with an icon or word."], ["warning-solid", "{amber-400}", "{amber-400}", "{amber-800}", "Solid fill (badges, filled alerts, destructive button)."], ["on-warning-solid", "{gray-950}", "{gray-950}", "#ffffff", "Text/icons on warning-solid."], ["warning-bg", "{amber-50}", "#2a1f0a", "{amber-50}", "Tinted background for warning alerts and fields."], ["warning-border", "{amber-300}", "{amber-700}", "{amber-800}", "Border of warning alerts; error-state input border uses `warning`."], ["success", "{green-700}", "{green-400}", "{green-800}", "Completion, positive status. Text and icons on bg/surface (\u22654.5:1). Always pair with an icon or word."], ["success-solid", "{green-600}", "{green-400}", "{green-800}", "Solid fill (badges, filled alerts, destructive button)."], ["on-success-solid", "#ffffff", "{gray-950}", "#ffffff", "Text/icons on success-solid."], ["success-bg", "{green-50}", "#0f2416", "{green-50}", "Tinted background for success alerts and fields."], ["success-border", "{green-300}", "{green-700}", "{green-800}", "Border of success alerts; error-state input border uses `success`."], ["info", "{blue-600}", "{blue-400}", "{blue-800}", "Neutral information, tips. Text and icons on bg/surface (\u22654.5:1). Always pair with an icon or word."], ["info-solid", "{blue-600}", "{blue-400}", "{blue-800}", "Solid fill (badges, filled alerts, destructive button)."], ["on-info-solid", "#ffffff", "{gray-950}", "#ffffff", "Text/icons on info-solid."], ["info-bg", "{blue-50}", "#111d33", "{blue-50}", "Tinted background for info alerts and fields."], ["info-border", "{blue-300}", "{blue-700}", "{blue-800}", "Border of info alerts; error-state input border uses `info`."]], "space": [["space-0", 0, "No space."], ["space-2", 2, "Hairline nudges only: focus-ring offset, badge dot gaps. The one sub-4 step."], ["space-4", 4, "Half-step: icon-to-label gap in small controls, tight stacks."], ["space-8", 8, "Base unit. Gap between related items; icon-to-label in buttons."], ["space-12", 12, "Input horizontal padding; compact list rows."], ["space-16", 16, "Default padding in cards and modals (mobile); gap between form fields."], ["space-24", 24, "Card padding (desktop); gap between groups."], ["space-32", 32, "Section padding inside pages; modal padding on desktop."], ["space-40", 40, "Gap between page sections (mobile)."], ["space-48", 48, "Gap between page sections (desktop)."], ["space-64", 64, "Hero padding; large layout gutters."], ["space-80", 80, "Marketing section rhythm."], ["space-96", 96, "Top-level page spacing on wide screens."], ["space-128", 128, "Maximum layout spacing."]], "radius": [["radius-none", 0, "Tables, full-bleed media, dividers."], ["radius-sm", 4, "DEFAULT for components: buttons, inputs, checkboxes, tags, tooltips, menus."], ["radius-md", 8, "Cards, modals, popovers, toasts, alerts."], ["radius-lg", 16, "Bottom sheets, large panels, app-icon-like tiles."], ["radius-full", 9999, "Pills, avatars, switches, radio dots."]], "type": [["Display", "display-xl", "sans", 64, 72, 800, "-0.02em", "Built for everyone", "Hero headlines on marketing pages (desktop only; use display-lg \u2264 md)."], ["Display", "display-lg", "sans", 48, 56, 800, "-0.02em", "Built for everyone", "Page heroes; landing sections."], ["Heading", "heading-1", "sans", 40, 48, 700, "-0.01em", "Account settings", "One per page: the page title."], ["Heading", "heading-2", "sans", 32, 40, 700, "-0.01em", "Notifications", "Section titles."], ["Heading", "heading-3", "sans", 24, 32, 700, "0em", "Delete project?", "Card and modal titles."], ["Heading", "heading-4", "sans", 20, 28, 700, "0em", "Email preferences", "Sub-sections, drawer titles."], ["Heading", "heading-5", "sans", 18, 24, 700, "0em", "Billing address", "Group labels inside cards."], ["Heading", "heading-6", "sans", 16, 24, 700, "0em", "Recent activity", "Smallest heading; table group headers."], ["Body", "body-lg", "sans", 18, 28, 400, "0em", "Aa NAD is a design system anyone can read \u2014 people and AI agents alike.", "Lead paragraphs, long-form reading."], ["Body", "body", "sans", 16, 24, 400, "0em", "Your changes are saved automatically.", "Default text. Never smaller for paragraphs on web."], ["Body", "body-sm", "sans", 14, 20, 400, "0em", "Last edited 2 minutes ago", "Dense UI: tables, helper text, secondary info."], ["Body", "caption", "sans", 12, 16, 400, "0em", "Updated 06 Oct 2026", "Timestamps, footnotes, chart labels. Not for sentences longer than one line."], ["Label", "label-lg", "sans", 16, 24, 600, "0em", "Continue", "Large buttons, prominent tabs."], ["Label", "label", "sans", 14, 20, 600, "0em", "Save changes", "Buttons, form labels, tabs, menu items."], ["Label", "label-sm", "sans", 12, 16, 600, "0em", "New", "Small buttons, badges, tags."], ["Label", "overline", "sans", 12, 16, 700, "0.08em", "FOUNDATIONS", "Eyebrows above headings. Uppercase."], ["Code", "code", "mono", 14, 20, 400, "0em", "npm i @aa-nad/react", "Inline code and code blocks."], ["Code", "code-sm", "mono", 12, 16, 400, "0em", "--space-16", "Token names, dense code."]], "shadow": [["shadow-0", "none", "Flat. Default for cards (use border)."], ["shadow-1", "0px 1px 2px rgba(0, 0, 0, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.04)", "Raised cards on hover, sticky headers."], ["shadow-2", "0px 4px 8px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.04)", "Dropdowns, menus, popovers."], ["shadow-3", "0px 8px 24px rgba(0, 0, 0, 0.12), 0px 2px 8px rgba(0, 0, 0, 0.06)", "Toasts, drawers."], ["shadow-4", "0px 16px 48px rgba(0, 0, 0, 0.16), 0px 4px 16px rgba(0, 0, 0, 0.08)", "Modals and dialogs."]], "shadowDark": { "shadow-0": "none", "shadow-1": "0px 1px 2px rgba(0, 0, 0, 0.5)", "shadow-2": "0px 4px 8px rgba(0, 0, 0, 0.6)", "shadow-3": "0px 8px 24px rgba(0, 0, 0, 0.7)", "shadow-4": "0px 16px 48px rgba(0, 0, 0, 0.8)" }, "icons": { "add": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 112v288M400 256H112" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 112v288M400 256H112" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>' }, "close": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M368 368 144 144M368 144 144 368" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34Z"/></svg>' }, "checkmark": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 128 192 384l-96-96" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 128 192 384l-96-96" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>' }, "chevron-back": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M328 112 184 256l144 144" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="48px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M328 112 184 256l144 144" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="48px"/></svg>' }, "chevron-forward": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m184 112 144 144-144 144" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="48px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m184 112 144 144-144 144" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="48px"/></svg>' }, "chevron-down": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m112 184 144 144 144-144" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="48px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m112 184 144 144 144-144" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="48px"/></svg>' }, "arrow-back": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 400 100 256l144-144M120 256h292" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="48px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 400 100 256l144-144M120 256h292" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="48px"/></svg>' }, "arrow-forward": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m268 112 144 144-144 144M392 256H100" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="48px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m268 112 144 144-144 144M392 256H100" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="48px"/></svg>' }, "menu": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M80 160h352M80 256h352M80 352h352" fill="none" stroke="#111111" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M88 152h336M88 256h336M88 360h336" fill="none" stroke="#111111" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48px"/></svg>' }, "search": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/><path d="M338.29 338.29 448 448" fill="none" stroke="#111111" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M456.69 421.39 362.6 327.3a173.8 173.8 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.8 173.8 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3M97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8"/></svg>' }, "filter": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 144h448M112 256h288M208 368h96" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48M392 280H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48M296 392h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48"/></svg>' }, "ellipsis-horizontal": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="32" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/><circle cx="416" cy="256" r="32" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/><circle cx="96" cy="256" r="32" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="48"/><circle cx="416" cy="256" r="48"/><circle cx="96" cy="256" r="48"/></svg>' }, "home": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"/><path d="m490.91 244.15-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"/></svg>' }, "person": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304Z" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480"/></svg>' }, "people": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304Z" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="#111111" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256M467.83 432H204.18a27.71 27.71 0 0 1-22-10.67 30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432M147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91M212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89"/></svg>' }, "settings": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M262.29 192.31a64 64 0 1 0 57.4 57.4 64.13 64.13 0 0 0-57.4-57.4M416.39 256a154 154 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.5 164.5 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22 155 155 0 0 1-21.46-12.57 16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.5 164.5 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22 155 155 0 0 1 21.46 12.57 16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="48"/><path d="m470.39 300-.47-.38-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.6 1.6 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56-5.57 39.67a16 16 0 0 1-8.13 11.82 175 175 0 0 0-10 5.82 15.92 15.92 0 0 1-14.43 1.27l-37.13-15-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38 31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.6 1.6 0 0 1 .13.22 26.86 26.86 0 0 0 32.45 11.3l.35-.13 37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56 5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95.35.14a26.85 26.85 0 0 0 32.48-11.34 3 3 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11m-134.48-40.24a80 80 0 1 1-83.66-83.67 80.21 80.21 0 0 1 83.66 83.67"/></svg>' }, "notifications": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57M320 384v16a64 64 0 0 1-128 0v-16" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.1 3.1 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66M256 480a80.06 80.06 0 0 0 70.44-42.13 4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480"/></svg>' }, "mail": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="416" height="320" x="48" y="96" rx="40" ry="40" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="m112 160 144 112 144-112" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56m-14.18 92.63-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26"/></svg>' }, "chatbubble": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a45 45 0 0 0-2.54-3.8 199.8 199.8 0 0 1-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 0 1 4.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.1 31.1 0 0 0-11.12-2.07 30.7 30.7 0 0 0-12.09 2.43l-67.83 24.48a16 16 0 0 1-4.67 1.22 9.6 9.6 0 0 1-9.57-9.74 16 16 0 0 1 .6-3.29Z" fill="none" stroke="#111111" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M76.83 480a25.69 25.69 0 0 1-25.57-25.74 29.1 29.1 0 0 1 1.2-7.63L70.88 380c.77-2.46-.1-4.94-1.23-6.9l-.22-.4c-.08-.13-.46-.66-.73-1.05s-.58-.81-.86-1.22l-.19-.27A215.66 215.66 0 0 1 32 251.37c-.18-57.59 22.35-112 63.46-153.28C138 55.47 194.9 32 255.82 32A227.4 227.4 0 0 1 398 81.84c39.45 31.75 66.87 76 77.21 124.68a213.5 213.5 0 0 1 4.78 45c0 58.93-22.64 114.28-63.76 155.87-41.48 42-97.18 65.06-156.83 65.06-21 0-47.87-5.36-60.77-9-15.52-4.34-30.23-10-31.85-10.6a15.1 15.1 0 0 0-5.37-1 14.75 14.75 0 0 0-5.8 1.15l-.85.33-67.48 24.38A29.4 29.4 0 0 1 76.83 480m10.65-100"/></svg>' }, "calendar": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="416" height="384" x="48" y="80" fill="none" stroke="#111111" stroke-linejoin="round" stroke-width="32" rx="48"/><circle cx="296" cy="232" r="24"/><circle cx="376" cy="232" r="24"/><circle cx="296" cy="312" r="24"/><circle cx="376" cy="312" r="24"/><circle cx="136" cy="312" r="24"/><circle cx="216" cy="312" r="24"/><circle cx="136" cy="392" r="24"/><circle cx="216" cy="392" r="24"/><circle cx="296" cy="392" r="24"/><path fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 48v32M384 48v32"/><path fill="none" stroke="#111111" stroke-linejoin="round" stroke-width="32" d="M464 160H48"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4ZM32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3H35a3 3 0 0 0-3 3Zm344-208a24 24 0 1 1-24 24 24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24 24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24 24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24 24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24"/></svg>' }, "time": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Z" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/><path d="M256 128v144h96" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48m96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32"/></svg>' }, "heart": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56"/></svg>' }, "star": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160Z" fill="none" stroke="#111111" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"/></svg>' }, "bookmark": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 48H160a48 48 0 0 0-48 48v368l144-128 144 128V96a48 48 0 0 0-48-48" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M400 480a16 16 0 0 1-10.63-4L256 357.41 122.63 476A16 16 0 0 1 96 464V96a64.07 64.07 0 0 1 64-64h192a64.07 64.07 0 0 1 64 64v368a16 16 0 0 1-16 16"/></svg>' }, "share-social": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="128" cy="256" r="48" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><circle cx="384" cy="112" r="48" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><circle cx="384" cy="400" r="48" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="m169.83 279.53 172.34 96.94M342.17 135.53l-172.34 96.94" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336"/></svg>' }, "link": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M208 352h-64a96 96 0 0 1 0-192h64M304 160h64a96 96 0 0 1 0 192h-64M163.29 256h187.42" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="36px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M200.66 352H144a96 96 0 0 1 0-192h55.41M312.59 160H368a96 96 0 0 1 0 192h-56.66M169.07 256h175.86" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="48px"/></svg>' }, "download": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M336 176h40a40 40 0 0 1 40 40v208a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V216a40 40 0 0 1 40-40h40" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="m176 272 80 80 80-80M256 48v288" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M376 160H272v153.37l52.69-52.68a16 16 0 0 1 22.62 22.62l-80 80a16 16 0 0 1-22.62 0l-80-80a16 16 0 0 1 22.62-22.62L240 313.37V160H136a56.06 56.06 0 0 0-56 56v208a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V216a56.06 56.06 0 0 0-56-56M272 48a16 16 0 0 0-32 0v112h32Z"/></svg>' }, "cloud-upload": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="m320 255.79-64-64-64 64M256 448.21V207.79" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M473.66 210c-14-10.38-31.2-18-49.36-22.11a16.11 16.11 0 0 1-12.19-12.22c-7.8-34.75-24.59-64.55-49.27-87.13C334.15 62.25 296.21 47.79 256 47.79c-35.35 0-68 11.08-94.37 32.05a150.1 150.1 0 0 0-42.06 53 16 16 0 0 1-11.31 8.87c-26.75 5.4-50.9 16.87-69.34 33.12C13.46 197.33 0 227.24 0 261.39c0 34.52 14.49 66 40.79 88.76 25.12 21.69 58.94 33.64 95.21 33.64h104V230.42l-36.69 36.69a16 16 0 0 1-23.16-.56c-5.8-6.37-5.24-16.3.85-22.39l63.69-63.68a16 16 0 0 1 22.62 0L331 244.14c6.28 6.29 6.64 16.6.39 22.91a16 16 0 0 1-22.68.06L272 230.42v153.37h124c31.34 0 59.91-8.8 80.45-24.77 23.26-18.1 35.55-44 35.55-74.83 0-29.94-13.26-55.61-38.34-74.19M240 448.21a16 16 0 1 0 32 0v-64.42h-32Z"/></svg>' }, "trash": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m112 112 20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="M80 112h352" stroke="#111111" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32px"/><path d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8" fill="none"/><path d="M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32M192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416M272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8Zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14Z"/></svg>' }, "create": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38M399.34 90 218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38M399.34 90 218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0"/><path d="M386.34 193.66 264.45 315.79A41.1 41.1 0 0 1 247.58 326l-25.9 8.67a35.92 35.92 0 0 1-44.33-44.33l8.67-25.9a41.1 41.1 0 0 1 10.19-16.87l122.13-121.91a8 8 0 0 0-5.65-13.66H104a56 56 0 0 0-56 56v240a56 56 0 0 0 56 56h240a56 56 0 0 0 56-56V199.31a8 8 0 0 0-13.66-5.65"/></svg>' }, "copy": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="336" height="336" x="128" y="128" rx="57" ry="57" fill="none" stroke="#111111" stroke-linejoin="round" stroke-width="32px"/><path d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M408 480H184a72 72 0 0 1-72-72V184a72 72 0 0 1 72-72h224a72 72 0 0 1 72 72v224a72 72 0 0 1-72 72"/><path d="M160 80h235.88A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80"/></svg>' }, "document-text": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62Z" fill="none" stroke="#111111" stroke-linejoin="round" stroke-width="32px"/><path d="M256 56v120a32 32 0 0 0 32 32h120M176 288h160M176 368h160" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4m-92 160H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32m0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32"/><path d="M419.22 188.59 275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41"/></svg>' }, "folder": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M440 432H72a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H440a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40M32 192h448" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496 152a56 56 0 0 0-56-56H220.11a23.9 23.9 0 0 1-13.31-4L179 73.41A55.77 55.77 0 0 0 147.89 64H72a56 56 0 0 0-56 56v48a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8ZM16 392a56 56 0 0 0 56 56h368a56 56 0 0 0 56-56V216a8 8 0 0 0-8-8H24a8 8 0 0 0-8 8Z"/></svg>' }, "image": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="416" height="352" x="48" y="80" rx="48" ry="48" fill="none" stroke="#111111" stroke-linejoin="round" stroke-width="32px"/><circle cx="336" cy="176" r="32" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/><path d="m304 335.79-90.66-90.49a32 32 0 0 0-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0 1 43.11-2L464 368" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 64H96a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V128a64.07 64.07 0 0 0-64-64m-80 64a48 48 0 1 1-48 48 48.05 48.05 0 0 1 48-48M96 416a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81L172.37 416Zm352-32a32 32 0 0 1-32 32H217.63l121.42-121.42a47.72 47.72 0 0 1 61.64-.16L448 333.84Z"/></svg>' }, "camera": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m350.54 148.68-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h352a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><circle cx="256" cy="272" r="80" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/><path d="M124 158v-22h-24v22" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="272" r="64"/><path d="M432 144h-59c-3 0-6.72-1.94-9.62-5l-25.94-40.94a15.5 15.5 0 0 0-1.37-1.85C327.11 85.76 315 80 302 80h-92c-13 0-25.11 5.76-34.07 16.21a15.5 15.5 0 0 0-1.37 1.85l-25.94 41c-2.22 2.42-5.34 5-8.62 5v-8a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v8h-4a48.05 48.05 0 0 0-48 48V384a48.05 48.05 0 0 0 48 48h352a48.05 48.05 0 0 0 48-48V192a48.05 48.05 0 0 0-48-48M256 368a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96"/></svg>' }, "eye": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><circle cx="256" cy="256" r="80" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="64"/><path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76M256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96"/></svg>' }, "eye-off": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448M255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.1 239.1 0 0 0 75.8-12.58 2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1 204.8 204.8 0 0 1-51.16 6.47M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.3 227.3 0 0 0-74.89 12.83 2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1 192.8 192.8 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16 310.7 310.7 0 0 1-64.12 72.73 2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13 343.5 343.5 0 0 0 68.64-78.48 32.2 32.2 0 0 0-.1-34.78"/><path d="M256 160a96 96 0 0 0-21.37 2.4 2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160M165.78 233.66a2 2 0 0 0-3.38 1 96 96 0 0 0 115 115 2 2 0 0 0 1-3.38Z"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448M248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69 64.11 64.11 0 0 0 53.49 53.49 2 2 0 0 0 1.69-3.39M264 196.15 315.87 248a2 2 0 0 0 3.4-1.69 64.13 64.13 0 0 0-53.55-53.55 2 2 0 0 0-1.72 3.39"/><path d="M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.5 226.5 0 0 0-71.82 11.79 4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05 96 96 0 0 1 116 116 4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24 343.8 343.8 0 0 0 67.24-77.4M256 352a96 96 0 0 1-93.3-118.63 4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.2 238.2 0 0 0 72.64-11.55 4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352"/></svg>' }, "lock-closed": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M336 208v-95a80 80 0 0 0-160 0v95" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><rect width="320" height="272" x="96" y="208" rx="48" ry="48" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M368 192h-16v-80a96 96 0 1 0-192 0v80h-16a64.07 64.07 0 0 0-64 64v176a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V256a64.07 64.07 0 0 0-64-64m-48 0H192v-80a64 64 0 1 1 128 0Z"/></svg>' }, "log-out": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16M459.31 244.69l-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62"/></svg>' }, "refresh": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160" fill="none" stroke="#111111" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32px"/><path d="m256 58 80 80-80 80" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160" fill="none" stroke="#111111" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32px"/><path d="m256 58 80 80-80 80" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>' }, "information-circle": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64Z" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/><path d="M220 220h32v116" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="M208 340h88" fill="none" stroke="#111111" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32px"/><path fill="#111111" d="M248 130a26 26 0 1 0 26 26 26 26 0 0 0-26-26"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56m0 82a26 26 0 1 1-26 26 26 26 0 0 1 26-26m48 226h-88a16 16 0 0 1 0-32h28v-88h-16a16 16 0 0 1 0-32h32a16 16 0 0 1 16 16v104h28a16 16 0 0 1 0 32"/></svg>' }, "alert-circle": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/><path d="M250.26 166.05 256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="M256 367.91a20 20 0 1 1 20-20 20 20 0 0 1-20 20"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48m0 319.91a20 20 0 1 1 20-20 20 20 0 0 1-20 20m21.72-201.15-5.74 122a16 16 0 0 1-32 0l-5.74-121.94v-.05a21.74 21.74 0 1 1 43.44 0Z"/></svg>' }, "warning": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="m250.26 195.39 5.74 122 5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path fill="#111111" d="M256 397.25a20 20 0 1 1 20-20 20 20 0 0 1-20 20"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M449.07 399.08 278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17m-198.6-1.83a20 20 0 1 1 20-20 20 20 0 0 1-20 20m21.72-201.15-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z"/></svg>' }, "checkmark-circle": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/><path d="M352 176 217.6 336 160 272" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48m108.25 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58"/></svg>' }, "close-circle": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/><path d="M320 320 192 192M192 320l128-128" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48m75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z"/></svg>' }, "help-circle": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80Z" fill="none" stroke="#111111" stroke-miterlimit="10" stroke-width="32px"/><path d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296" fill="none" stroke="#111111" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28px"/><circle cx="250" cy="348" r="20"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64m-6 304a20 20 0 1 1 20-20 20 20 0 0 1-20 20m33.44-102C267.23 276.88 265 286.85 265 296a14 14 0 0 1-28 0c0-21.91 10.08-39.33 30.82-53.26C287.1 229.8 298 221.6 298 203.57c0-12.26-7-21.57-21.49-28.46-3.41-1.62-11-3.2-20.34-3.09-11.72.15-20.82 2.95-27.83 8.59C215.12 191.25 214 202.83 214 203a14 14 0 1 1-28-1.35c.11-2.43 1.8-24.32 24.77-42.8 11.91-9.58 27.06-14.56 45-14.78 12.7-.15 24.63 2 32.72 5.82C312.7 161.34 326 180.43 326 203.57c0 33.83-22.61 49.02-42.56 62.43"/></svg>' }, "cart": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="176" cy="416" r="16" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><circle cx="400" cy="416" r="16" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="M48 80h64l48 272h256" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/><path d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="176" cy="416" r="32"/><circle cx="400" cy="416" r="32"/><path d="M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93"/></svg>' }, "remove": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M400 256H112" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M400 256H112" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-width="32px"/></svg>' }, "attach": { "outline": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74" fill="none" stroke="#111111" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32px"/></svg>', "filled": '<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74" fill="none" stroke="#111111" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32px"/></svg>' } }, "logos": { "module-aa-nad-blocks-white": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#FFFFFF" d="M17.5,63.5 A26,26 0 0 1 43.5,37.5 V63.5 Z M52.5,37.5 H70.5 A4,4 0 0 1 74.5,41.5 V59.5 A4,4 0 0 1 70.5,63.5 H52.5 A4,4 0 0 1 48.5,59.5 V41.5 A4,4 0 0 1 52.5,37.5 Z M83.5,37.5 H101.5 A4,4 0 0 1 105.5,41.5 V59.5 A4,4 0 0 1 101.5,63.5 H83.5 A4,4 0 0 1 79.5,59.5 V41.5 A4,4 0 0 1 83.5,37.5 Z M110.5,37.5 A26,26 0 0 1 136.5,63.5 H110.5 Z M21.5,68.5 H39.5 A4,4 0 0 1 43.5,72.5 V90.5 A4,4 0 0 1 39.5,94.5 H21.5 A4,4 0 0 1 17.5,90.5 V72.5 A4,4 0 0 1 21.5,68.5 Z M114.5,68.5 H132.5 A4,4 0 0 1 136.5,72.5 V90.5 A4,4 0 0 1 132.5,94.5 H114.5 A4,4 0 0 1 110.5,90.5 V72.5 A4,4 0 0 1 114.5,68.5 Z M21.5,99.5 H39.5 A4,4 0 0 1 43.5,103.5 V121.5 A4,4 0 0 1 39.5,125.5 H21.5 A4,4 0 0 1 17.5,121.5 V103.5 A4,4 0 0 1 21.5,99.5 Z M114.5,99.5 H132.5 A4,4 0 0 1 136.5,103.5 V121.5 A4,4 0 0 1 132.5,125.5 H114.5 A4,4 0 0 1 110.5,121.5 V103.5 A4,4 0 0 1 114.5,99.5 Z M21.5,130.5 H39.5 A4,4 0 0 1 43.5,134.5 V152.5 A4,4 0 0 1 39.5,156.5 H21.5 A4,4 0 0 1 17.5,152.5 V134.5 A4,4 0 0 1 21.5,130.5 Z M52.5,130.5 H70.5 A4,4 0 0 1 74.5,134.5 V152.5 A4,4 0 0 1 70.5,156.5 H52.5 A4,4 0 0 1 48.5,152.5 V134.5 A4,4 0 0 1 52.5,130.5 Z M83.5,130.5 H101.5 A4,4 0 0 1 105.5,134.5 V152.5 A4,4 0 0 1 101.5,156.5 H83.5 A4,4 0 0 1 79.5,152.5 V134.5 A4,4 0 0 1 83.5,130.5 Z M114.5,130.5 H132.5 A4,4 0 0 1 136.5,134.5 V152.5 A4,4 0 0 1 132.5,156.5 H114.5 A4,4 0 0 1 110.5,152.5 V134.5 A4,4 0 0 1 114.5,130.5 Z M21.5,161.5 H39.5 A4,4 0 0 1 43.5,165.5 V183.5 A4,4 0 0 1 39.5,187.5 H21.5 A4,4 0 0 1 17.5,183.5 V165.5 A4,4 0 0 1 21.5,161.5 Z M114.5,161.5 H132.5 A4,4 0 0 1 136.5,165.5 V183.5 A4,4 0 0 1 132.5,187.5 H114.5 A4,4 0 0 1 110.5,183.5 V165.5 A4,4 0 0 1 114.5,161.5 Z M21.5,192.5 H39.5 A4,4 0 0 1 43.5,196.5 V214.5 A4,4 0 0 1 39.5,218.5 H21.5 A4,4 0 0 1 17.5,214.5 V196.5 A4,4 0 0 1 21.5,192.5 Z M114.5,192.5 H132.5 A4,4 0 0 1 136.5,196.5 V214.5 A4,4 0 0 1 132.5,218.5 H114.5 A4,4 0 0 1 110.5,214.5 V196.5 A4,4 0 0 1 114.5,192.5 Z M154.5,99.5 H172.5 A4,4 0 0 1 176.5,103.5 V121.5 A4,4 0 0 1 172.5,125.5 H154.5 A4,4 0 0 1 150.5,121.5 V103.5 A4,4 0 0 1 154.5,99.5 Z M185.5,99.5 H203.5 A4,4 0 0 1 207.5,103.5 V121.5 A4,4 0 0 1 203.5,125.5 H185.5 A4,4 0 0 1 181.5,121.5 V103.5 A4,4 0 0 1 185.5,99.5 Z M212.5,99.5 A26,26 0 0 1 238.5,125.5 H212.5 Z M216.5,130.5 H234.5 A4,4 0 0 1 238.5,134.5 V152.5 A4,4 0 0 1 234.5,156.5 H216.5 A4,4 0 0 1 212.5,152.5 V134.5 A4,4 0 0 1 216.5,130.5 Z M150.5,187.5 A26,26 0 0 1 176.5,161.5 V187.5 Z M185.5,161.5 H203.5 A4,4 0 0 1 207.5,165.5 V183.5 A4,4 0 0 1 203.5,187.5 H185.5 A4,4 0 0 1 181.5,183.5 V165.5 A4,4 0 0 1 185.5,161.5 Z M216.5,161.5 H234.5 A4,4 0 0 1 238.5,165.5 V183.5 A4,4 0 0 1 234.5,187.5 H216.5 A4,4 0 0 1 212.5,183.5 V165.5 A4,4 0 0 1 216.5,161.5 Z M150.5,192.5 H176.5 V218.5 A26,26 0 0 1 150.5,192.5 Z M185.5,192.5 H203.5 A4,4 0 0 1 207.5,196.5 V214.5 A4,4 0 0 1 203.5,218.5 H185.5 A4,4 0 0 1 181.5,214.5 V196.5 A4,4 0 0 1 185.5,192.5 Z M216.5,192.5 H234.5 A4,4 0 0 1 238.5,196.5 V214.5 A4,4 0 0 1 234.5,218.5 H216.5 A4,4 0 0 1 212.5,214.5 V196.5 A4,4 0 0 1 216.5,192.5 Z"/></svg>', "module-aa-nad-blocks": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#111111" d="M17.5,63.5 A26,26 0 0 1 43.5,37.5 V63.5 Z M52.5,37.5 H70.5 A4,4 0 0 1 74.5,41.5 V59.5 A4,4 0 0 1 70.5,63.5 H52.5 A4,4 0 0 1 48.5,59.5 V41.5 A4,4 0 0 1 52.5,37.5 Z M83.5,37.5 H101.5 A4,4 0 0 1 105.5,41.5 V59.5 A4,4 0 0 1 101.5,63.5 H83.5 A4,4 0 0 1 79.5,59.5 V41.5 A4,4 0 0 1 83.5,37.5 Z M110.5,37.5 A26,26 0 0 1 136.5,63.5 H110.5 Z M21.5,68.5 H39.5 A4,4 0 0 1 43.5,72.5 V90.5 A4,4 0 0 1 39.5,94.5 H21.5 A4,4 0 0 1 17.5,90.5 V72.5 A4,4 0 0 1 21.5,68.5 Z M114.5,68.5 H132.5 A4,4 0 0 1 136.5,72.5 V90.5 A4,4 0 0 1 132.5,94.5 H114.5 A4,4 0 0 1 110.5,90.5 V72.5 A4,4 0 0 1 114.5,68.5 Z M21.5,99.5 H39.5 A4,4 0 0 1 43.5,103.5 V121.5 A4,4 0 0 1 39.5,125.5 H21.5 A4,4 0 0 1 17.5,121.5 V103.5 A4,4 0 0 1 21.5,99.5 Z M114.5,99.5 H132.5 A4,4 0 0 1 136.5,103.5 V121.5 A4,4 0 0 1 132.5,125.5 H114.5 A4,4 0 0 1 110.5,121.5 V103.5 A4,4 0 0 1 114.5,99.5 Z M21.5,130.5 H39.5 A4,4 0 0 1 43.5,134.5 V152.5 A4,4 0 0 1 39.5,156.5 H21.5 A4,4 0 0 1 17.5,152.5 V134.5 A4,4 0 0 1 21.5,130.5 Z M52.5,130.5 H70.5 A4,4 0 0 1 74.5,134.5 V152.5 A4,4 0 0 1 70.5,156.5 H52.5 A4,4 0 0 1 48.5,152.5 V134.5 A4,4 0 0 1 52.5,130.5 Z M83.5,130.5 H101.5 A4,4 0 0 1 105.5,134.5 V152.5 A4,4 0 0 1 101.5,156.5 H83.5 A4,4 0 0 1 79.5,152.5 V134.5 A4,4 0 0 1 83.5,130.5 Z M114.5,130.5 H132.5 A4,4 0 0 1 136.5,134.5 V152.5 A4,4 0 0 1 132.5,156.5 H114.5 A4,4 0 0 1 110.5,152.5 V134.5 A4,4 0 0 1 114.5,130.5 Z M21.5,161.5 H39.5 A4,4 0 0 1 43.5,165.5 V183.5 A4,4 0 0 1 39.5,187.5 H21.5 A4,4 0 0 1 17.5,183.5 V165.5 A4,4 0 0 1 21.5,161.5 Z M114.5,161.5 H132.5 A4,4 0 0 1 136.5,165.5 V183.5 A4,4 0 0 1 132.5,187.5 H114.5 A4,4 0 0 1 110.5,183.5 V165.5 A4,4 0 0 1 114.5,161.5 Z M21.5,192.5 H39.5 A4,4 0 0 1 43.5,196.5 V214.5 A4,4 0 0 1 39.5,218.5 H21.5 A4,4 0 0 1 17.5,214.5 V196.5 A4,4 0 0 1 21.5,192.5 Z M114.5,192.5 H132.5 A4,4 0 0 1 136.5,196.5 V214.5 A4,4 0 0 1 132.5,218.5 H114.5 A4,4 0 0 1 110.5,214.5 V196.5 A4,4 0 0 1 114.5,192.5 Z M154.5,99.5 H172.5 A4,4 0 0 1 176.5,103.5 V121.5 A4,4 0 0 1 172.5,125.5 H154.5 A4,4 0 0 1 150.5,121.5 V103.5 A4,4 0 0 1 154.5,99.5 Z M185.5,99.5 H203.5 A4,4 0 0 1 207.5,103.5 V121.5 A4,4 0 0 1 203.5,125.5 H185.5 A4,4 0 0 1 181.5,121.5 V103.5 A4,4 0 0 1 185.5,99.5 Z M212.5,99.5 A26,26 0 0 1 238.5,125.5 H212.5 Z M216.5,130.5 H234.5 A4,4 0 0 1 238.5,134.5 V152.5 A4,4 0 0 1 234.5,156.5 H216.5 A4,4 0 0 1 212.5,152.5 V134.5 A4,4 0 0 1 216.5,130.5 Z M150.5,187.5 A26,26 0 0 1 176.5,161.5 V187.5 Z M185.5,161.5 H203.5 A4,4 0 0 1 207.5,165.5 V183.5 A4,4 0 0 1 203.5,187.5 H185.5 A4,4 0 0 1 181.5,183.5 V165.5 A4,4 0 0 1 185.5,161.5 Z M216.5,161.5 H234.5 A4,4 0 0 1 238.5,165.5 V183.5 A4,4 0 0 1 234.5,187.5 H216.5 A4,4 0 0 1 212.5,183.5 V165.5 A4,4 0 0 1 216.5,161.5 Z M150.5,192.5 H176.5 V218.5 A26,26 0 0 1 150.5,192.5 Z M185.5,192.5 H203.5 A4,4 0 0 1 207.5,196.5 V214.5 A4,4 0 0 1 203.5,218.5 H185.5 A4,4 0 0 1 181.5,214.5 V196.5 A4,4 0 0 1 185.5,192.5 Z M216.5,192.5 H234.5 A4,4 0 0 1 238.5,196.5 V214.5 A4,4 0 0 1 234.5,218.5 H216.5 A4,4 0 0 1 212.5,214.5 V196.5 A4,4 0 0 1 216.5,192.5 Z"/></svg>', "module-aa-nad-horizontal-reversed": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 623 256"><path fill="#FFFFFF" fill-rule="evenodd" d="M56,0 H200 A56,56 0 0 1 256,56 V200 A56,56 0 0 1 200,256 H56 A56,56 0 0 1 0,200 V56 A56,56 0 0 1 56,0 Z M46.5,80.0 A19,19 0 0 1 65.5,61.0 V80.0 Z M73.5,61.0 H84.5 A4,4 0 0 1 88.5,65.0 V76.0 A4,4 0 0 1 84.5,80.0 H73.5 A4,4 0 0 1 69.5,76.0 V65.0 A4,4 0 0 1 73.5,61.0 Z M96.5,61.0 H107.5 A4,4 0 0 1 111.5,65.0 V76.0 A4,4 0 0 1 107.5,80.0 H96.5 A4,4 0 0 1 92.5,76.0 V65.0 A4,4 0 0 1 96.5,61.0 Z M115.5,61.0 A19,19 0 0 1 134.5,80.0 H115.5 Z M50.5,84.0 H61.5 A4,4 0 0 1 65.5,88.0 V99.0 A4,4 0 0 1 61.5,103.0 H50.5 A4,4 0 0 1 46.5,99.0 V88.0 A4,4 0 0 1 50.5,84.0 Z M119.5,84.0 H130.5 A4,4 0 0 1 134.5,88.0 V99.0 A4,4 0 0 1 130.5,103.0 H119.5 A4,4 0 0 1 115.5,99.0 V88.0 A4,4 0 0 1 119.5,84.0 Z M50.5,107.0 H61.5 A4,4 0 0 1 65.5,111.0 V122.0 A4,4 0 0 1 61.5,126.0 H50.5 A4,4 0 0 1 46.5,122.0 V111.0 A4,4 0 0 1 50.5,107.0 Z M119.5,107.0 H130.5 A4,4 0 0 1 134.5,111.0 V122.0 A4,4 0 0 1 130.5,126.0 H119.5 A4,4 0 0 1 115.5,122.0 V111.0 A4,4 0 0 1 119.5,107.0 Z M50.5,130.0 H61.5 A4,4 0 0 1 65.5,134.0 V145.0 A4,4 0 0 1 61.5,149.0 H50.5 A4,4 0 0 1 46.5,145.0 V134.0 A4,4 0 0 1 50.5,130.0 Z M73.5,130.0 H84.5 A4,4 0 0 1 88.5,134.0 V145.0 A4,4 0 0 1 84.5,149.0 H73.5 A4,4 0 0 1 69.5,145.0 V134.0 A4,4 0 0 1 73.5,130.0 Z M96.5,130.0 H107.5 A4,4 0 0 1 111.5,134.0 V145.0 A4,4 0 0 1 107.5,149.0 H96.5 A4,4 0 0 1 92.5,145.0 V134.0 A4,4 0 0 1 96.5,130.0 Z M119.5,130.0 H130.5 A4,4 0 0 1 134.5,134.0 V145.0 A4,4 0 0 1 130.5,149.0 H119.5 A4,4 0 0 1 115.5,145.0 V134.0 A4,4 0 0 1 119.5,130.0 Z M50.5,153.0 H61.5 A4,4 0 0 1 65.5,157.0 V168.0 A4,4 0 0 1 61.5,172.0 H50.5 A4,4 0 0 1 46.5,168.0 V157.0 A4,4 0 0 1 50.5,153.0 Z M119.5,153.0 H130.5 A4,4 0 0 1 134.5,157.0 V168.0 A4,4 0 0 1 130.5,172.0 H119.5 A4,4 0 0 1 115.5,168.0 V157.0 A4,4 0 0 1 119.5,153.0 Z M50.5,176.0 H61.5 A4,4 0 0 1 65.5,180.0 V191.0 A4,4 0 0 1 61.5,195.0 H50.5 A4,4 0 0 1 46.5,191.0 V180.0 A4,4 0 0 1 50.5,176.0 Z M119.5,176.0 H130.5 A4,4 0 0 1 134.5,180.0 V191.0 A4,4 0 0 1 130.5,195.0 H119.5 A4,4 0 0 1 115.5,191.0 V180.0 A4,4 0 0 1 119.5,176.0 Z M148.5,107.0 H159.5 A4,4 0 0 1 163.5,111.0 V122.0 A4,4 0 0 1 159.5,126.0 H148.5 A4,4 0 0 1 144.5,122.0 V111.0 A4,4 0 0 1 148.5,107.0 Z M171.5,107.0 H182.5 A4,4 0 0 1 186.5,111.0 V122.0 A4,4 0 0 1 182.5,126.0 H171.5 A4,4 0 0 1 167.5,122.0 V111.0 A4,4 0 0 1 171.5,107.0 Z M190.5,107.0 A19,19 0 0 1 209.5,126.0 H190.5 Z M194.5,130.0 H205.5 A4,4 0 0 1 209.5,134.0 V145.0 A4,4 0 0 1 205.5,149.0 H194.5 A4,4 0 0 1 190.5,145.0 V134.0 A4,4 0 0 1 194.5,130.0 Z M144.5,172.0 A19,19 0 0 1 163.5,153.0 V172.0 Z M171.5,153.0 H182.5 A4,4 0 0 1 186.5,157.0 V168.0 A4,4 0 0 1 182.5,172.0 H171.5 A4,4 0 0 1 167.5,168.0 V157.0 A4,4 0 0 1 171.5,153.0 Z M194.5,153.0 H205.5 A4,4 0 0 1 209.5,157.0 V168.0 A4,4 0 0 1 205.5,172.0 H194.5 A4,4 0 0 1 190.5,168.0 V157.0 A4,4 0 0 1 194.5,153.0 Z M144.5,176.0 H163.5 V195.0 A19,19 0 0 1 144.5,176.0 Z M171.5,176.0 H182.5 A4,4 0 0 1 186.5,180.0 V191.0 A4,4 0 0 1 182.5,195.0 H171.5 A4,4 0 0 1 167.5,191.0 V180.0 A4,4 0 0 1 171.5,176.0 Z M194.5,176.0 H205.5 A4,4 0 0 1 209.5,180.0 V191.0 A4,4 0 0 1 205.5,195.0 H194.5 A4,4 0 0 1 190.5,191.0 V180.0 A4,4 0 0 1 194.5,176.0 Z"/><g fill="#FFFFFF"><path d="M298.696 158.0V75.168H324.984L355.984 132.084V75.168H376.196V158.0H349.784L318.908 101.208V158.0ZM382.388 158.0 413.76 75.168H436.948L468.44399999999996 158.0H445.38L440.668 143.864H410.04L405.452 158.0ZM415.62 126.876H435.08799999999997L425.292 97.612ZM474.636 158.0V75.168H502.784Q513.572 75.168 522.438 77.4Q531.304 79.632 537.752 84.53Q544.2 89.428 547.734 97.30199999999999Q551.268 105.176 551.268 116.584Q551.268 128.11599999999999 547.734 136.052Q544.2 143.988 537.752 148.824Q531.304 153.66 522.376 155.82999999999998Q513.448 158.0 502.784 158.0ZM495.716 140.268H503.28Q508.86 140.268 513.696 139.276Q518.532 138.284 522.066 135.742Q525.6 133.2 527.5840000000001 128.55Q529.568 123.9 529.568 116.584Q529.568 109.268 527.5840000000001 104.618Q525.6 99.968 522.066 97.364Q518.532 94.75999999999999 513.696 93.70599999999999Q508.86 92.652 503.28 92.652H495.716Z"/><path d="M297.8037529897804 206.0V185.96H304.1899978256143Q306.7531224179169 185.96 308.8634344422701 186.49718743205045Q310.9737464666232 187.0343748641009 312.49905849097627 188.21656229615132Q314.0243705153294 189.39874972820178 314.85030767558163 191.30656229615136Q315.67624483583387 193.2143748641009 315.67624483583387 195.9743748641009Q315.67624483583387 198.78125027179823 314.841869971733 200.7040628397478Q314.0074951076321 202.62687540769733 312.4643705153294 203.79406283974777Q310.92124592302673 204.9612502717982 308.82874646662316 205.48062513589912Q306.7362470102196 206.0 304.1899978256143 206.0ZM302.18374429223746 202.31375733855185H304.2518721461187Q305.7368732333116 202.31375733855185 307.0024994564036 202.05313220265276Q308.26812567949554 201.79250706675364 309.19531419873886 201.11656881930855Q310.1225027179822 200.44063057186344 310.64281582952816 199.19375407697325Q311.16312894107415 197.94687758208306 311.16312894107415 195.9743748641009Q311.16312894107415 194.00749728201782 310.64281582952816 192.75124592302674Q310.1225027179822 191.49499456403566 309.1831267666884 190.8068688845401Q308.24375081539466 190.11874320504458 306.9903120243531 189.85811806914546Q305.7368732333116 189.59749293324637 304.2518721461187 189.59749293324637H302.18374429223746ZM323.94375298978036 206.0V185.96H338.90061969993474V189.8037421178517H328.32374429223745V193.77312894107413H335.1037508153946V197.61687105892585H328.32374429223745V202.15625788214828H339.02061969993474V206.0ZM354.6343726897151 206.36Q352.54562513589906 206.36 350.85156338334417 205.77687540769733Q349.1575016307893 205.19375081539465 347.96031419873884 204.07062622309198Q346.7631267666884 202.9475016307893 346.1500021743857 201.3518764948902L350.14374429223744 199.91000434877148Q350.40061969993474 200.82500543596433 351.0549956512285 201.4746934116112Q351.70937160252225 202.1243813872581 352.6674972820178 202.47219395520767Q353.62562296151333 202.82000652315722 354.7543726897151 202.82000652315722Q355.75749945640354 202.82000652315722 356.6087508153946 202.57625570776256Q357.4600021743857 202.3325048923679 358.0009404218308 201.7812535333768Q358.5418786692759 201.23000217438573 358.5418786692759 200.32250054359645Q358.5418786692759 199.28749945640357 357.71125353337675 198.7324983692107Q356.88062839747766 198.17749728201784 354.9925005435964 197.77812133072408L352.51187432050443 197.26999565122853Q350.64812567949554 196.87999565122854 349.33843879104154 196.1590584909763Q348.0287519025875 195.43812133072407 347.3293770384866 194.32718417047184Q346.6300021743857 193.2162470102196 346.6300021743857 191.69187214611873Q346.6300021743857 190.2668732333116 347.27031419873884 189.13718634485758Q347.910626223092 188.00749945640356 349.0375005435964 187.22093716025222Q350.16437486410086 186.4343748641009 351.6456240487062 186.01718743205043Q353.1268732333116 185.6 354.8331224179169 185.6Q356.4193716025223 185.6 357.90343335507714 186.04156229615134Q359.38749510763205 186.4831245923027 360.5678071319852 187.40562404870624Q361.7481191563383 188.3281235051098 362.3724940204392 189.83749728201784L358.4031267666884 191.27936942813656Q358.11062622309197 190.57249402043922 357.53968797564687 190.09905631659058Q356.9687497282018 189.6256186127419 356.19624918460534 189.38280604479235Q355.4237486410089 189.1399934768428 354.469373776908 189.1399934768428Q353.48124809741245 189.1399934768428 352.6928093063709 189.38749402043922Q351.9043705153294 189.63499456403565 351.4571819960861 190.1299956512285Q351.0099934768428 190.6249967384214 351.0099934768428 191.33374864100892Q351.0099934768428 192.16812567949555 351.64843226788435 192.69406392694066Q352.28687105892584 193.22000217438574 353.4718721461187 193.47687758208306L356.1943726897151 194.0393781256795Q358.11437268971514 194.44062839747772 359.63124701021957 195.06687866927592Q361.14812133072405 195.69312894107415 362.03499565122854 196.82750380517504Q362.921869971733 197.96187866927593 362.921869971733 199.8537529897804Q362.921869971733 201.94437703848664 361.75655794737986 203.39843879104154Q360.59124592302675 204.85250054359642 358.7115590345727 205.60625027179822Q356.8318721461187 206.36 354.6343726897151 206.36ZM370.5818764948902 206.0V202.778756251359H373.3775016307893V189.181243748641H370.5818764948902V185.96H380.55311806914546V189.181243748641H377.75749293324634V202.778756251359H380.55311806914546V206.0ZM397.2543748641009 206.36Q394.32562513589914 206.36 392.21531311154604 205.0737497282018Q390.1050010871929 203.78749945640357 388.96687649489024 201.43531202435312Q387.82875190258756 199.08312459230268 387.82875190258756 195.9256251358991Q387.82875190258756 192.75687540769732 389.09625135899114 190.44406283974777Q390.36375081539467 188.13125027179822 392.6493748641009 186.8656251358991Q394.93499891280715 185.6 397.9256229615134 185.6Q400.5674972820178 185.6 402.76874646662316 186.69406283974777Q404.96999565122854 187.78812567949555 406.03874537943034 189.95937595129377L402.0806283974777 191.4012480974125Q401.591252446184 190.48437051532943 400.53656338334423 189.84874429223746Q399.48187432050446 189.21311806914548 397.84874755381605 189.21311806914548Q396.3468710589259 189.21311806914548 395.1140574037835 189.96686888454013Q393.88124374864105 190.72061969993476 393.1603055011959 192.21312133072405Q392.43936725375085 193.70562296151337 392.43936725375085 195.9256251358991Q392.43936725375085 198.10437703848663 393.12468036529685 199.62406610132638Q393.8099934768428 201.14375516416612 395.02780713198524 201.94531854751034Q396.2456207871277 202.74688193085453 397.86187214611874 202.74688193085453Q398.70562296151337 202.74688193085453 399.5484366166558 202.5556316590563Q400.39125027179824 202.3643813872581 401.07843879104155 201.9378180039139Q401.76562731028486 201.5112546205697 402.1837529897804 200.79594042183084Q402.60187866927595 200.08062622309197 402.60187866927595 199.0081235051098V198.42124809741247H397.84874755381605V194.84562948467058H406.95374429223745V206.0H404.11500108719287L403.43812567949556 203.7237486410089Q402.4781256794956 205.05874972820178 400.93500000000006 205.70937486410088Q399.3918743205045 206.36 397.2543748641009 206.36ZM415.69375298978036 206.0V185.96H421.37499456403566L429.37375081539466 200.757512502718V185.96H433.60749293324636V206.0H427.93187649489016L419.92749510763207 191.18561208958468V206.0ZM464.99437268971514 206.36Q462.9056251358991 206.36 461.2115633833442 205.77687540769733Q459.5175016307893 205.19375081539465 458.32031419873886 204.07062622309198Q457.1231267666884 202.9475016307893 456.5100021743857 201.3518764948902L460.50374429223746 199.91000434877148Q460.76061969993475 200.82500543596433 461.41499565122854 201.4746934116112Q462.06937160252227 202.1243813872581 463.0274972820178 202.47219395520767Q463.98562296151334 202.82000652315722 465.11437268971514 202.82000652315722Q466.11749945640355 202.82000652315722 466.9687508153946 202.57625570776256Q467.8200021743857 202.3325048923679 468.36094042183083 201.7812535333768Q468.9018786692759 201.23000217438573 468.9018786692759 200.32250054359645Q468.9018786692759 199.28749945640357 468.07125353337676 198.7324983692107Q467.2406283974777 198.17749728201784 465.3525005435964 197.77812133072408L462.87187432050445 197.26999565122853Q461.00812567949555 196.87999565122854 459.69843879104155 196.1590584909763Q458.3887519025875 195.43812133072407 457.6893770384866 194.32718417047184Q456.9900021743857 193.2162470102196 456.9900021743857 191.69187214611873Q456.9900021743857 190.2668732333116 457.63031419873886 189.13718634485758Q458.270626223092 188.00749945640356 459.39750054359644 187.22093716025222Q460.5243748641009 186.4343748641009 462.00562404870624 186.01718743205043Q463.4868732333116 185.6 465.1931224179169 185.6Q466.7793716025223 185.6 468.26343335507715 186.04156229615134Q469.74749510763206 186.4831245923027 470.9278071319852 187.40562404870624Q472.1081191563383 188.3281235051098 472.7324940204392 189.83749728201784L468.7631267666884 191.27936942813656Q468.470626223092 190.57249402043922 467.8996879756469 190.09905631659058Q467.3287497282018 189.6256186127419 466.55624918460535 189.38280604479235Q465.7837486410089 189.1399934768428 464.829373776908 189.1399934768428Q463.84124809741246 189.1399934768428 463.05280930637093 189.38749402043922Q462.2643705153294 189.63499456403565 461.8171819960861 190.1299956512285Q461.3699934768428 190.6249967384214 461.3699934768428 191.33374864100892Q461.3699934768428 192.16812567949555 462.00843226788436 192.69406392694066Q462.64687105892585 193.22000217438574 463.8318721461187 193.47687758208306L466.55437268971514 194.0393781256795Q468.47437268971515 194.44062839747772 469.9912470102196 195.06687866927592Q471.50812133072407 195.69312894107415 472.39499565122856 196.82750380517504Q473.281869971733 197.96187866927593 473.281869971733 199.8537529897804Q473.281869971733 201.94437703848664 472.1165579473799 203.39843879104154Q470.95124592302676 204.85250054359642 469.0715590345727 205.60625027179822Q467.1918721461187 206.36 464.99437268971514 206.36ZM486.50124809741243 206.0V198.2056251358991L478.92999999999995 185.96H483.99436399217217L488.66686888454007 194.04125896934116L493.33374864100887 185.96H498.42248749728196L490.8812393998695 198.1812502717982V206.0ZM512.3543726897152 206.36Q510.2656251358991 206.36 508.5715633833442 205.77687540769733Q506.8775016307893 205.19375081539465 505.68031419873887 204.07062622309198Q504.48312676668843 202.9475016307893 503.8700021743857 201.3518764948902L507.86374429223747 199.91000434877148Q508.12061969993476 200.82500543596433 508.77499565122855 201.4746934116112Q509.4293716025223 202.1243813872581 510.3874972820178 202.47219395520767Q511.34562296151336 202.82000652315722 512.4743726897152 202.82000652315722Q513.4774994564036 202.82000652315722 514.3287508153946 202.57625570776256Q515.1800021743858 202.3325048923679 515.7209404218308 201.7812535333768Q516.2618786692759 201.23000217438573 516.2618786692759 200.32250054359645Q516.2618786692759 199.28749945640357 515.4312535333768 198.7324983692107Q514.6006283974777 198.17749728201784 512.7125005435964 197.77812133072408L510.23187432050446 197.26999565122853Q508.36812567949556 196.87999565122854 507.05843879104157 196.1590584909763Q505.7487519025875 195.43812133072407 505.0493770384866 194.32718417047184Q504.35000217438574 193.2162470102196 504.35000217438574 191.69187214611873Q504.35000217438574 190.2668732333116 504.9903141987389 189.13718634485758Q505.630626223092 188.00749945640356 506.75750054359645 187.22093716025222Q507.8843748641009 186.4343748641009 509.36562404870625 186.01718743205043Q510.8468732333116 185.6 512.5531224179169 185.6Q514.1393716025223 185.6 515.6234333550772 186.04156229615134Q517.1074951076321 186.4831245923027 518.2878071319852 187.40562404870624Q519.4681191563384 188.3281235051098 520.0924940204392 189.83749728201784L516.1231267666884 191.27936942813656Q515.8306262230919 190.57249402043922 515.2596879756468 190.09905631659058Q514.6887497282017 189.6256186127419 513.9162491846052 189.38280604479235Q513.1437486410089 189.1399934768428 512.189373776908 189.1399934768428Q511.2012480974125 189.1399934768428 510.41280930637095 189.38749402043922Q509.6243705153294 189.63499456403565 509.1771819960861 190.1299956512285Q508.7299934768428 190.6249967384214 508.7299934768428 191.33374864100892Q508.7299934768428 192.16812567949555 509.3684322678844 192.69406392694066Q510.00687105892587 193.22000217438574 511.1918721461187 193.47687758208306L513.9143726897152 194.0393781256795Q515.8343726897151 194.44062839747772 517.3512470102196 195.06687866927592Q518.8681213307241 195.69312894107415 519.7549956512285 196.82750380517504Q520.641869971733 197.96187866927593 520.641869971733 199.8537529897804Q520.641869971733 201.94437703848664 519.4765579473799 203.39843879104154Q518.3112459230267 204.85250054359642 516.4315590345727 205.60625027179822Q514.5518721461187 206.36 512.3543726897152 206.36ZM533.6212502717981 206.0V189.8037421178517H527.1318743205044V185.96H544.4906175255489V189.8037421178517H538.0012415742552V206.0ZM552.2237529897803 206.0V185.96H567.1806196999347V189.8037421178517H556.6037442922374V193.77312894107413H563.3837508153946V197.61687105892585H556.6037442922374V202.15625788214828H567.3006196999347V206.0ZM575.6337529897803 206.0V185.96H582.3124918460534L586.7018721461186 200.70688410524028L591.1400021743857 185.96H597.769991302457V206.0H593.4874994564035V189.9968688845401L588.5262448358338 206.0H584.8343748641008L579.891869971733 189.9968688845401V206.0Z"/></g></svg>', "module-aa-nad-horizontal": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 623 256"><path fill="#111111" fill-rule="evenodd" d="M56,0 H200 A56,56 0 0 1 256,56 V200 A56,56 0 0 1 200,256 H56 A56,56 0 0 1 0,200 V56 A56,56 0 0 1 56,0 Z M46.5,80.0 A19,19 0 0 1 65.5,61.0 V80.0 Z M73.5,61.0 H84.5 A4,4 0 0 1 88.5,65.0 V76.0 A4,4 0 0 1 84.5,80.0 H73.5 A4,4 0 0 1 69.5,76.0 V65.0 A4,4 0 0 1 73.5,61.0 Z M96.5,61.0 H107.5 A4,4 0 0 1 111.5,65.0 V76.0 A4,4 0 0 1 107.5,80.0 H96.5 A4,4 0 0 1 92.5,76.0 V65.0 A4,4 0 0 1 96.5,61.0 Z M115.5,61.0 A19,19 0 0 1 134.5,80.0 H115.5 Z M50.5,84.0 H61.5 A4,4 0 0 1 65.5,88.0 V99.0 A4,4 0 0 1 61.5,103.0 H50.5 A4,4 0 0 1 46.5,99.0 V88.0 A4,4 0 0 1 50.5,84.0 Z M119.5,84.0 H130.5 A4,4 0 0 1 134.5,88.0 V99.0 A4,4 0 0 1 130.5,103.0 H119.5 A4,4 0 0 1 115.5,99.0 V88.0 A4,4 0 0 1 119.5,84.0 Z M50.5,107.0 H61.5 A4,4 0 0 1 65.5,111.0 V122.0 A4,4 0 0 1 61.5,126.0 H50.5 A4,4 0 0 1 46.5,122.0 V111.0 A4,4 0 0 1 50.5,107.0 Z M119.5,107.0 H130.5 A4,4 0 0 1 134.5,111.0 V122.0 A4,4 0 0 1 130.5,126.0 H119.5 A4,4 0 0 1 115.5,122.0 V111.0 A4,4 0 0 1 119.5,107.0 Z M50.5,130.0 H61.5 A4,4 0 0 1 65.5,134.0 V145.0 A4,4 0 0 1 61.5,149.0 H50.5 A4,4 0 0 1 46.5,145.0 V134.0 A4,4 0 0 1 50.5,130.0 Z M73.5,130.0 H84.5 A4,4 0 0 1 88.5,134.0 V145.0 A4,4 0 0 1 84.5,149.0 H73.5 A4,4 0 0 1 69.5,145.0 V134.0 A4,4 0 0 1 73.5,130.0 Z M96.5,130.0 H107.5 A4,4 0 0 1 111.5,134.0 V145.0 A4,4 0 0 1 107.5,149.0 H96.5 A4,4 0 0 1 92.5,145.0 V134.0 A4,4 0 0 1 96.5,130.0 Z M119.5,130.0 H130.5 A4,4 0 0 1 134.5,134.0 V145.0 A4,4 0 0 1 130.5,149.0 H119.5 A4,4 0 0 1 115.5,145.0 V134.0 A4,4 0 0 1 119.5,130.0 Z M50.5,153.0 H61.5 A4,4 0 0 1 65.5,157.0 V168.0 A4,4 0 0 1 61.5,172.0 H50.5 A4,4 0 0 1 46.5,168.0 V157.0 A4,4 0 0 1 50.5,153.0 Z M119.5,153.0 H130.5 A4,4 0 0 1 134.5,157.0 V168.0 A4,4 0 0 1 130.5,172.0 H119.5 A4,4 0 0 1 115.5,168.0 V157.0 A4,4 0 0 1 119.5,153.0 Z M50.5,176.0 H61.5 A4,4 0 0 1 65.5,180.0 V191.0 A4,4 0 0 1 61.5,195.0 H50.5 A4,4 0 0 1 46.5,191.0 V180.0 A4,4 0 0 1 50.5,176.0 Z M119.5,176.0 H130.5 A4,4 0 0 1 134.5,180.0 V191.0 A4,4 0 0 1 130.5,195.0 H119.5 A4,4 0 0 1 115.5,191.0 V180.0 A4,4 0 0 1 119.5,176.0 Z M148.5,107.0 H159.5 A4,4 0 0 1 163.5,111.0 V122.0 A4,4 0 0 1 159.5,126.0 H148.5 A4,4 0 0 1 144.5,122.0 V111.0 A4,4 0 0 1 148.5,107.0 Z M171.5,107.0 H182.5 A4,4 0 0 1 186.5,111.0 V122.0 A4,4 0 0 1 182.5,126.0 H171.5 A4,4 0 0 1 167.5,122.0 V111.0 A4,4 0 0 1 171.5,107.0 Z M190.5,107.0 A19,19 0 0 1 209.5,126.0 H190.5 Z M194.5,130.0 H205.5 A4,4 0 0 1 209.5,134.0 V145.0 A4,4 0 0 1 205.5,149.0 H194.5 A4,4 0 0 1 190.5,145.0 V134.0 A4,4 0 0 1 194.5,130.0 Z M144.5,172.0 A19,19 0 0 1 163.5,153.0 V172.0 Z M171.5,153.0 H182.5 A4,4 0 0 1 186.5,157.0 V168.0 A4,4 0 0 1 182.5,172.0 H171.5 A4,4 0 0 1 167.5,168.0 V157.0 A4,4 0 0 1 171.5,153.0 Z M194.5,153.0 H205.5 A4,4 0 0 1 209.5,157.0 V168.0 A4,4 0 0 1 205.5,172.0 H194.5 A4,4 0 0 1 190.5,168.0 V157.0 A4,4 0 0 1 194.5,153.0 Z M144.5,176.0 H163.5 V195.0 A19,19 0 0 1 144.5,176.0 Z M171.5,176.0 H182.5 A4,4 0 0 1 186.5,180.0 V191.0 A4,4 0 0 1 182.5,195.0 H171.5 A4,4 0 0 1 167.5,191.0 V180.0 A4,4 0 0 1 171.5,176.0 Z M194.5,176.0 H205.5 A4,4 0 0 1 209.5,180.0 V191.0 A4,4 0 0 1 205.5,195.0 H194.5 A4,4 0 0 1 190.5,191.0 V180.0 A4,4 0 0 1 194.5,176.0 Z"/><g fill="#111111"><path d="M298.696 158.0V75.168H324.984L355.984 132.084V75.168H376.196V158.0H349.784L318.908 101.208V158.0ZM382.388 158.0 413.76 75.168H436.948L468.44399999999996 158.0H445.38L440.668 143.864H410.04L405.452 158.0ZM415.62 126.876H435.08799999999997L425.292 97.612ZM474.636 158.0V75.168H502.784Q513.572 75.168 522.438 77.4Q531.304 79.632 537.752 84.53Q544.2 89.428 547.734 97.30199999999999Q551.268 105.176 551.268 116.584Q551.268 128.11599999999999 547.734 136.052Q544.2 143.988 537.752 148.824Q531.304 153.66 522.376 155.82999999999998Q513.448 158.0 502.784 158.0ZM495.716 140.268H503.28Q508.86 140.268 513.696 139.276Q518.532 138.284 522.066 135.742Q525.6 133.2 527.5840000000001 128.55Q529.568 123.9 529.568 116.584Q529.568 109.268 527.5840000000001 104.618Q525.6 99.968 522.066 97.364Q518.532 94.75999999999999 513.696 93.70599999999999Q508.86 92.652 503.28 92.652H495.716Z"/><path d="M297.8037529897804 206.0V185.96H304.1899978256143Q306.7531224179169 185.96 308.8634344422701 186.49718743205045Q310.9737464666232 187.0343748641009 312.49905849097627 188.21656229615132Q314.0243705153294 189.39874972820178 314.85030767558163 191.30656229615136Q315.67624483583387 193.2143748641009 315.67624483583387 195.9743748641009Q315.67624483583387 198.78125027179823 314.841869971733 200.7040628397478Q314.0074951076321 202.62687540769733 312.4643705153294 203.79406283974777Q310.92124592302673 204.9612502717982 308.82874646662316 205.48062513589912Q306.7362470102196 206.0 304.1899978256143 206.0ZM302.18374429223746 202.31375733855185H304.2518721461187Q305.7368732333116 202.31375733855185 307.0024994564036 202.05313220265276Q308.26812567949554 201.79250706675364 309.19531419873886 201.11656881930855Q310.1225027179822 200.44063057186344 310.64281582952816 199.19375407697325Q311.16312894107415 197.94687758208306 311.16312894107415 195.9743748641009Q311.16312894107415 194.00749728201782 310.64281582952816 192.75124592302674Q310.1225027179822 191.49499456403566 309.1831267666884 190.8068688845401Q308.24375081539466 190.11874320504458 306.9903120243531 189.85811806914546Q305.7368732333116 189.59749293324637 304.2518721461187 189.59749293324637H302.18374429223746ZM323.94375298978036 206.0V185.96H338.90061969993474V189.8037421178517H328.32374429223745V193.77312894107413H335.1037508153946V197.61687105892585H328.32374429223745V202.15625788214828H339.02061969993474V206.0ZM354.6343726897151 206.36Q352.54562513589906 206.36 350.85156338334417 205.77687540769733Q349.1575016307893 205.19375081539465 347.96031419873884 204.07062622309198Q346.7631267666884 202.9475016307893 346.1500021743857 201.3518764948902L350.14374429223744 199.91000434877148Q350.40061969993474 200.82500543596433 351.0549956512285 201.4746934116112Q351.70937160252225 202.1243813872581 352.6674972820178 202.47219395520767Q353.62562296151333 202.82000652315722 354.7543726897151 202.82000652315722Q355.75749945640354 202.82000652315722 356.6087508153946 202.57625570776256Q357.4600021743857 202.3325048923679 358.0009404218308 201.7812535333768Q358.5418786692759 201.23000217438573 358.5418786692759 200.32250054359645Q358.5418786692759 199.28749945640357 357.71125353337675 198.7324983692107Q356.88062839747766 198.17749728201784 354.9925005435964 197.77812133072408L352.51187432050443 197.26999565122853Q350.64812567949554 196.87999565122854 349.33843879104154 196.1590584909763Q348.0287519025875 195.43812133072407 347.3293770384866 194.32718417047184Q346.6300021743857 193.2162470102196 346.6300021743857 191.69187214611873Q346.6300021743857 190.2668732333116 347.27031419873884 189.13718634485758Q347.910626223092 188.00749945640356 349.0375005435964 187.22093716025222Q350.16437486410086 186.4343748641009 351.6456240487062 186.01718743205043Q353.1268732333116 185.6 354.8331224179169 185.6Q356.4193716025223 185.6 357.90343335507714 186.04156229615134Q359.38749510763205 186.4831245923027 360.5678071319852 187.40562404870624Q361.7481191563383 188.3281235051098 362.3724940204392 189.83749728201784L358.4031267666884 191.27936942813656Q358.11062622309197 190.57249402043922 357.53968797564687 190.09905631659058Q356.9687497282018 189.6256186127419 356.19624918460534 189.38280604479235Q355.4237486410089 189.1399934768428 354.469373776908 189.1399934768428Q353.48124809741245 189.1399934768428 352.6928093063709 189.38749402043922Q351.9043705153294 189.63499456403565 351.4571819960861 190.1299956512285Q351.0099934768428 190.6249967384214 351.0099934768428 191.33374864100892Q351.0099934768428 192.16812567949555 351.64843226788435 192.69406392694066Q352.28687105892584 193.22000217438574 353.4718721461187 193.47687758208306L356.1943726897151 194.0393781256795Q358.11437268971514 194.44062839747772 359.63124701021957 195.06687866927592Q361.14812133072405 195.69312894107415 362.03499565122854 196.82750380517504Q362.921869971733 197.96187866927593 362.921869971733 199.8537529897804Q362.921869971733 201.94437703848664 361.75655794737986 203.39843879104154Q360.59124592302675 204.85250054359642 358.7115590345727 205.60625027179822Q356.8318721461187 206.36 354.6343726897151 206.36ZM370.5818764948902 206.0V202.778756251359H373.3775016307893V189.181243748641H370.5818764948902V185.96H380.55311806914546V189.181243748641H377.75749293324634V202.778756251359H380.55311806914546V206.0ZM397.2543748641009 206.36Q394.32562513589914 206.36 392.21531311154604 205.0737497282018Q390.1050010871929 203.78749945640357 388.96687649489024 201.43531202435312Q387.82875190258756 199.08312459230268 387.82875190258756 195.9256251358991Q387.82875190258756 192.75687540769732 389.09625135899114 190.44406283974777Q390.36375081539467 188.13125027179822 392.6493748641009 186.8656251358991Q394.93499891280715 185.6 397.9256229615134 185.6Q400.5674972820178 185.6 402.76874646662316 186.69406283974777Q404.96999565122854 187.78812567949555 406.03874537943034 189.95937595129377L402.0806283974777 191.4012480974125Q401.591252446184 190.48437051532943 400.53656338334423 189.84874429223746Q399.48187432050446 189.21311806914548 397.84874755381605 189.21311806914548Q396.3468710589259 189.21311806914548 395.1140574037835 189.96686888454013Q393.88124374864105 190.72061969993476 393.1603055011959 192.21312133072405Q392.43936725375085 193.70562296151337 392.43936725375085 195.9256251358991Q392.43936725375085 198.10437703848663 393.12468036529685 199.62406610132638Q393.8099934768428 201.14375516416612 395.02780713198524 201.94531854751034Q396.2456207871277 202.74688193085453 397.86187214611874 202.74688193085453Q398.70562296151337 202.74688193085453 399.5484366166558 202.5556316590563Q400.39125027179824 202.3643813872581 401.07843879104155 201.9378180039139Q401.76562731028486 201.5112546205697 402.1837529897804 200.79594042183084Q402.60187866927595 200.08062622309197 402.60187866927595 199.0081235051098V198.42124809741247H397.84874755381605V194.84562948467058H406.95374429223745V206.0H404.11500108719287L403.43812567949556 203.7237486410089Q402.4781256794956 205.05874972820178 400.93500000000006 205.70937486410088Q399.3918743205045 206.36 397.2543748641009 206.36ZM415.69375298978036 206.0V185.96H421.37499456403566L429.37375081539466 200.757512502718V185.96H433.60749293324636V206.0H427.93187649489016L419.92749510763207 191.18561208958468V206.0ZM464.99437268971514 206.36Q462.9056251358991 206.36 461.2115633833442 205.77687540769733Q459.5175016307893 205.19375081539465 458.32031419873886 204.07062622309198Q457.1231267666884 202.9475016307893 456.5100021743857 201.3518764948902L460.50374429223746 199.91000434877148Q460.76061969993475 200.82500543596433 461.41499565122854 201.4746934116112Q462.06937160252227 202.1243813872581 463.0274972820178 202.47219395520767Q463.98562296151334 202.82000652315722 465.11437268971514 202.82000652315722Q466.11749945640355 202.82000652315722 466.9687508153946 202.57625570776256Q467.8200021743857 202.3325048923679 468.36094042183083 201.7812535333768Q468.9018786692759 201.23000217438573 468.9018786692759 200.32250054359645Q468.9018786692759 199.28749945640357 468.07125353337676 198.7324983692107Q467.2406283974777 198.17749728201784 465.3525005435964 197.77812133072408L462.87187432050445 197.26999565122853Q461.00812567949555 196.87999565122854 459.69843879104155 196.1590584909763Q458.3887519025875 195.43812133072407 457.6893770384866 194.32718417047184Q456.9900021743857 193.2162470102196 456.9900021743857 191.69187214611873Q456.9900021743857 190.2668732333116 457.63031419873886 189.13718634485758Q458.270626223092 188.00749945640356 459.39750054359644 187.22093716025222Q460.5243748641009 186.4343748641009 462.00562404870624 186.01718743205043Q463.4868732333116 185.6 465.1931224179169 185.6Q466.7793716025223 185.6 468.26343335507715 186.04156229615134Q469.74749510763206 186.4831245923027 470.9278071319852 187.40562404870624Q472.1081191563383 188.3281235051098 472.7324940204392 189.83749728201784L468.7631267666884 191.27936942813656Q468.470626223092 190.57249402043922 467.8996879756469 190.09905631659058Q467.3287497282018 189.6256186127419 466.55624918460535 189.38280604479235Q465.7837486410089 189.1399934768428 464.829373776908 189.1399934768428Q463.84124809741246 189.1399934768428 463.05280930637093 189.38749402043922Q462.2643705153294 189.63499456403565 461.8171819960861 190.1299956512285Q461.3699934768428 190.6249967384214 461.3699934768428 191.33374864100892Q461.3699934768428 192.16812567949555 462.00843226788436 192.69406392694066Q462.64687105892585 193.22000217438574 463.8318721461187 193.47687758208306L466.55437268971514 194.0393781256795Q468.47437268971515 194.44062839747772 469.9912470102196 195.06687866927592Q471.50812133072407 195.69312894107415 472.39499565122856 196.82750380517504Q473.281869971733 197.96187866927593 473.281869971733 199.8537529897804Q473.281869971733 201.94437703848664 472.1165579473799 203.39843879104154Q470.95124592302676 204.85250054359642 469.0715590345727 205.60625027179822Q467.1918721461187 206.36 464.99437268971514 206.36ZM486.50124809741243 206.0V198.2056251358991L478.92999999999995 185.96H483.99436399217217L488.66686888454007 194.04125896934116L493.33374864100887 185.96H498.42248749728196L490.8812393998695 198.1812502717982V206.0ZM512.3543726897152 206.36Q510.2656251358991 206.36 508.5715633833442 205.77687540769733Q506.8775016307893 205.19375081539465 505.68031419873887 204.07062622309198Q504.48312676668843 202.9475016307893 503.8700021743857 201.3518764948902L507.86374429223747 199.91000434877148Q508.12061969993476 200.82500543596433 508.77499565122855 201.4746934116112Q509.4293716025223 202.1243813872581 510.3874972820178 202.47219395520767Q511.34562296151336 202.82000652315722 512.4743726897152 202.82000652315722Q513.4774994564036 202.82000652315722 514.3287508153946 202.57625570776256Q515.1800021743858 202.3325048923679 515.7209404218308 201.7812535333768Q516.2618786692759 201.23000217438573 516.2618786692759 200.32250054359645Q516.2618786692759 199.28749945640357 515.4312535333768 198.7324983692107Q514.6006283974777 198.17749728201784 512.7125005435964 197.77812133072408L510.23187432050446 197.26999565122853Q508.36812567949556 196.87999565122854 507.05843879104157 196.1590584909763Q505.7487519025875 195.43812133072407 505.0493770384866 194.32718417047184Q504.35000217438574 193.2162470102196 504.35000217438574 191.69187214611873Q504.35000217438574 190.2668732333116 504.9903141987389 189.13718634485758Q505.630626223092 188.00749945640356 506.75750054359645 187.22093716025222Q507.8843748641009 186.4343748641009 509.36562404870625 186.01718743205043Q510.8468732333116 185.6 512.5531224179169 185.6Q514.1393716025223 185.6 515.6234333550772 186.04156229615134Q517.1074951076321 186.4831245923027 518.2878071319852 187.40562404870624Q519.4681191563384 188.3281235051098 520.0924940204392 189.83749728201784L516.1231267666884 191.27936942813656Q515.8306262230919 190.57249402043922 515.2596879756468 190.09905631659058Q514.6887497282017 189.6256186127419 513.9162491846052 189.38280604479235Q513.1437486410089 189.1399934768428 512.189373776908 189.1399934768428Q511.2012480974125 189.1399934768428 510.41280930637095 189.38749402043922Q509.6243705153294 189.63499456403565 509.1771819960861 190.1299956512285Q508.7299934768428 190.6249967384214 508.7299934768428 191.33374864100892Q508.7299934768428 192.16812567949555 509.3684322678844 192.69406392694066Q510.00687105892587 193.22000217438574 511.1918721461187 193.47687758208306L513.9143726897152 194.0393781256795Q515.8343726897151 194.44062839747772 517.3512470102196 195.06687866927592Q518.8681213307241 195.69312894107415 519.7549956512285 196.82750380517504Q520.641869971733 197.96187866927593 520.641869971733 199.8537529897804Q520.641869971733 201.94437703848664 519.4765579473799 203.39843879104154Q518.3112459230267 204.85250054359642 516.4315590345727 205.60625027179822Q514.5518721461187 206.36 512.3543726897152 206.36ZM533.6212502717981 206.0V189.8037421178517H527.1318743205044V185.96H544.4906175255489V189.8037421178517H538.0012415742552V206.0ZM552.2237529897803 206.0V185.96H567.1806196999347V189.8037421178517H556.6037442922374V193.77312894107413H563.3837508153946V197.61687105892585H556.6037442922374V202.15625788214828H567.3006196999347V206.0ZM575.6337529897803 206.0V185.96H582.3124918460534L586.7018721461186 200.70688410524028L591.1400021743857 185.96H597.769991302457V206.0H593.4874994564035V189.9968688845401L588.5262448358338 206.0H584.8343748641008L579.891869971733 189.9968688845401V206.0Z"/></g></svg>', "module-aa-nad-stacked": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 343 456"><g transform="translate(43.5 0)"><path fill="#111111" fill-rule="evenodd" d="M56,0 H200 A56,56 0 0 1 256,56 V200 A56,56 0 0 1 200,256 H56 A56,56 0 0 1 0,200 V56 A56,56 0 0 1 56,0 Z M46.5,80.0 A19,19 0 0 1 65.5,61.0 V80.0 Z M73.5,61.0 H84.5 A4,4 0 0 1 88.5,65.0 V76.0 A4,4 0 0 1 84.5,80.0 H73.5 A4,4 0 0 1 69.5,76.0 V65.0 A4,4 0 0 1 73.5,61.0 Z M96.5,61.0 H107.5 A4,4 0 0 1 111.5,65.0 V76.0 A4,4 0 0 1 107.5,80.0 H96.5 A4,4 0 0 1 92.5,76.0 V65.0 A4,4 0 0 1 96.5,61.0 Z M115.5,61.0 A19,19 0 0 1 134.5,80.0 H115.5 Z M50.5,84.0 H61.5 A4,4 0 0 1 65.5,88.0 V99.0 A4,4 0 0 1 61.5,103.0 H50.5 A4,4 0 0 1 46.5,99.0 V88.0 A4,4 0 0 1 50.5,84.0 Z M119.5,84.0 H130.5 A4,4 0 0 1 134.5,88.0 V99.0 A4,4 0 0 1 130.5,103.0 H119.5 A4,4 0 0 1 115.5,99.0 V88.0 A4,4 0 0 1 119.5,84.0 Z M50.5,107.0 H61.5 A4,4 0 0 1 65.5,111.0 V122.0 A4,4 0 0 1 61.5,126.0 H50.5 A4,4 0 0 1 46.5,122.0 V111.0 A4,4 0 0 1 50.5,107.0 Z M119.5,107.0 H130.5 A4,4 0 0 1 134.5,111.0 V122.0 A4,4 0 0 1 130.5,126.0 H119.5 A4,4 0 0 1 115.5,122.0 V111.0 A4,4 0 0 1 119.5,107.0 Z M50.5,130.0 H61.5 A4,4 0 0 1 65.5,134.0 V145.0 A4,4 0 0 1 61.5,149.0 H50.5 A4,4 0 0 1 46.5,145.0 V134.0 A4,4 0 0 1 50.5,130.0 Z M73.5,130.0 H84.5 A4,4 0 0 1 88.5,134.0 V145.0 A4,4 0 0 1 84.5,149.0 H73.5 A4,4 0 0 1 69.5,145.0 V134.0 A4,4 0 0 1 73.5,130.0 Z M96.5,130.0 H107.5 A4,4 0 0 1 111.5,134.0 V145.0 A4,4 0 0 1 107.5,149.0 H96.5 A4,4 0 0 1 92.5,145.0 V134.0 A4,4 0 0 1 96.5,130.0 Z M119.5,130.0 H130.5 A4,4 0 0 1 134.5,134.0 V145.0 A4,4 0 0 1 130.5,149.0 H119.5 A4,4 0 0 1 115.5,145.0 V134.0 A4,4 0 0 1 119.5,130.0 Z M50.5,153.0 H61.5 A4,4 0 0 1 65.5,157.0 V168.0 A4,4 0 0 1 61.5,172.0 H50.5 A4,4 0 0 1 46.5,168.0 V157.0 A4,4 0 0 1 50.5,153.0 Z M119.5,153.0 H130.5 A4,4 0 0 1 134.5,157.0 V168.0 A4,4 0 0 1 130.5,172.0 H119.5 A4,4 0 0 1 115.5,168.0 V157.0 A4,4 0 0 1 119.5,153.0 Z M50.5,176.0 H61.5 A4,4 0 0 1 65.5,180.0 V191.0 A4,4 0 0 1 61.5,195.0 H50.5 A4,4 0 0 1 46.5,191.0 V180.0 A4,4 0 0 1 50.5,176.0 Z M119.5,176.0 H130.5 A4,4 0 0 1 134.5,180.0 V191.0 A4,4 0 0 1 130.5,195.0 H119.5 A4,4 0 0 1 115.5,191.0 V180.0 A4,4 0 0 1 119.5,176.0 Z M148.5,107.0 H159.5 A4,4 0 0 1 163.5,111.0 V122.0 A4,4 0 0 1 159.5,126.0 H148.5 A4,4 0 0 1 144.5,122.0 V111.0 A4,4 0 0 1 148.5,107.0 Z M171.5,107.0 H182.5 A4,4 0 0 1 186.5,111.0 V122.0 A4,4 0 0 1 182.5,126.0 H171.5 A4,4 0 0 1 167.5,122.0 V111.0 A4,4 0 0 1 171.5,107.0 Z M190.5,107.0 A19,19 0 0 1 209.5,126.0 H190.5 Z M194.5,130.0 H205.5 A4,4 0 0 1 209.5,134.0 V145.0 A4,4 0 0 1 205.5,149.0 H194.5 A4,4 0 0 1 190.5,145.0 V134.0 A4,4 0 0 1 194.5,130.0 Z M144.5,172.0 A19,19 0 0 1 163.5,153.0 V172.0 Z M171.5,153.0 H182.5 A4,4 0 0 1 186.5,157.0 V168.0 A4,4 0 0 1 182.5,172.0 H171.5 A4,4 0 0 1 167.5,168.0 V157.0 A4,4 0 0 1 171.5,153.0 Z M194.5,153.0 H205.5 A4,4 0 0 1 209.5,157.0 V168.0 A4,4 0 0 1 205.5,172.0 H194.5 A4,4 0 0 1 190.5,168.0 V157.0 A4,4 0 0 1 194.5,153.0 Z M144.5,176.0 H163.5 V195.0 A19,19 0 0 1 144.5,176.0 Z M171.5,176.0 H182.5 A4,4 0 0 1 186.5,180.0 V191.0 A4,4 0 0 1 182.5,195.0 H171.5 A4,4 0 0 1 167.5,191.0 V180.0 A4,4 0 0 1 171.5,176.0 Z M194.5,176.0 H205.5 A4,4 0 0 1 209.5,180.0 V191.0 A4,4 0 0 1 205.5,195.0 H194.5 A4,4 0 0 1 190.5,191.0 V180.0 A4,4 0 0 1 194.5,176.0 Z"/></g><g fill="#111111"><path d="M46.82600000000002 380.0V297.168H73.11400000000003L104.11400000000003 354.084V297.168H124.32600000000002V380.0H97.91400000000002L67.03800000000003 323.20799999999997V380.0ZM130.51800000000003 380.0 161.89000000000001 297.168H185.07800000000003L216.574 380.0H193.51000000000002L188.798 365.864H158.17000000000002L153.58200000000002 380.0ZM163.75000000000003 348.876H183.21800000000002L173.42200000000003 319.612ZM222.76600000000002 380.0V297.168H250.91400000000002Q261.702 297.168 270.568 299.4Q279.434 301.632 285.88200000000006 306.53Q292.33000000000004 311.428 295.86400000000003 319.302Q299.398 327.176 299.398 338.584Q299.398 350.116 295.86400000000003 358.052Q292.33000000000004 365.988 285.88200000000006 370.824Q279.434 375.66 270.50600000000003 377.83000000000004Q261.57800000000003 380.0 250.91400000000002 380.0ZM243.84600000000003 362.26800000000003H251.41000000000003Q256.99 362.26800000000003 261.826 361.276Q266.66200000000003 360.284 270.196 357.74199999999996Q273.73 355.2 275.71400000000006 350.54999999999995Q277.69800000000004 345.9 277.69800000000004 338.584Q277.69800000000004 331.26800000000003 275.71400000000006 326.61800000000005Q273.73 321.968 270.196 319.36400000000003Q266.66200000000003 316.76 261.826 315.706Q256.99 314.652 251.41000000000003 314.652H243.84600000000003Z"/><path d="M21.518752989780392 430.0V409.96H27.904997825614267Q30.46812241791694 409.96 32.57843444227006 410.4971874320504Q34.68874646662318 411.03437486410087 36.2140584909763 412.2165622961513Q37.739370515329426 413.3987497282018 38.56530767558165 415.30656229615136Q39.39124483583388 417.2143748641009 39.39124483583388 419.97437486410087Q39.39124483583388 422.7812502717982 38.55686997173299 424.70406283974773Q37.7224951076321 426.6268754076973 36.179370515329424 427.79406283974777Q34.63624592302675 428.96125027179824 32.54374646662318 429.4806251358991Q30.451247010219618 430.0 27.904997825614267 430.0ZM25.898744292237446 426.31375733855185H27.966872146118725Q29.451873233311595 426.31375733855185 30.71749945640357 426.0531322026527Q31.983125679495544 425.7925070667536 32.91031419873886 425.11656881930855Q33.837502717982176 424.44063057186344 34.357815829528164 423.1937540769733Q34.87812894107415 421.94687758208306 34.87812894107415 419.97437486410087Q34.87812894107415 418.0074972820178 34.357815829528164 416.7512459230268Q33.837502717982176 415.49499456403566 32.898126766688414 414.8068688845401Q31.95875081539465 414.11874320504455 30.705312024353123 413.85811806914546Q29.451873233311595 413.5974929332464 27.966872146118725 413.5974929332464H25.898744292237446ZM47.65875298978039 430.0V409.96H62.61561969993477V413.8037421178517H52.038744292237446V417.77312894107416H58.81875081539465V421.6168710589259H52.038744292237446V426.1562578821483H62.73561969993477V430.0ZM78.34937268971517 430.36Q76.26062513589912 430.36 74.56656338334422 429.77687540769733Q72.87250163078932 429.19375081539465 71.67531419873887 428.07062622309195Q70.47812676668842 426.9475016307893 69.86500217438575 425.3518764948902L73.85874429223745 423.91000434877145Q74.11561969993478 424.82500543596433 74.76999565122854 425.4746934116112Q75.4243716025223 426.1243813872581 76.38249728201784 426.4721939552077Q77.34062296151338 426.8200065231572 78.46937268971516 426.8200065231572Q79.47249945640357 426.8200065231572 80.32375081539465 426.5762557077626Q81.17500217438574 426.3325048923679 81.71594042183084 425.7812535333768Q82.25687866927593 425.23000217438573 82.25687866927593 424.32250054359645Q82.25687866927593 423.28749945640357 81.42625353337684 422.7324983692107Q80.59562839747773 422.17749728201784 78.70750054359644 421.77812133072405L76.22687432050446 421.26999565122856Q74.36312567949555 420.8799956512285 73.05343879104154 420.1590584909763Q71.74375190258753 419.4381213307241 71.04437703848663 418.3271841704718Q70.34500217438574 417.2162470102196 70.34500217438574 415.6918721461187Q70.34500217438574 414.26687323331157 70.98531419873886 413.1371863448576Q71.62562622309198 412.0074994564036 72.75250054359644 411.2209371602522Q73.8793748641009 410.4343748641009 75.36062404870626 410.0171874320505Q76.8418732333116 409.6 78.54812241791694 409.6Q80.1343716025223 409.6 81.6184333550772 410.04156229615137Q83.10249510763211 410.48312459230266 84.28280713198522 411.4056240487063Q85.46311915633834 412.32812350510983 86.08749402043924 413.8374972820178L82.11812676668842 415.27936942813653Q81.82562622309199 414.57249402043925 81.25468797564689 414.0990563165906Q80.68374972820179 413.6256186127419 79.91124918460537 413.38280604479235Q79.13874864100893 413.1399934768428 78.18437377690803 413.1399934768428Q77.1962480974125 413.1399934768428 76.40780930637095 413.38749402043925Q75.61937051532942 413.63499456403565 75.17218199608611 414.1299956512285Q74.7249934768428 414.6249967384214 74.7249934768428 415.3337486410089Q74.7249934768428 416.1681256794955 75.36343226788432 416.69406392694066Q76.00187105892586 417.22000217438574 77.18687214611873 417.47687758208303L79.90937268971517 418.0393781256795Q81.82937268971517 418.4406283974777 83.34624701021963 419.0668786692759Q84.86312133072408 419.6931289410741 85.74999565122855 420.827503805175Q86.63686997173299 421.9618786692759 86.63686997173299 423.8537529897804Q86.63686997173299 425.9443770384866 85.47155794737986 427.3984387910415Q84.30624592302675 428.8525005435964 82.42655903457273 429.6062502717982Q80.54687214611873 430.36 78.34937268971517 430.36ZM94.2968764948902 430.0V426.77875625135897H97.09250163078931V413.181243748641H94.2968764948902V409.96H104.26811806914547V413.181243748641H101.47249293324637V426.77875625135897H104.26811806914547V430.0ZM120.96937486410089 430.36Q118.0406251358991 430.36 115.93031311154598 429.0737497282018Q113.82000108719286 427.78749945640357 112.68187649489019 425.43531202435315Q111.54375190258752 423.0831245923027 111.54375190258752 419.9256251358991Q111.54375190258752 416.75687540769735 112.81125135899109 414.44406283974774Q114.07875081539464 412.1312502717982 116.36437486410088 410.8656251358991Q118.64999891280713 409.6 121.64062296151337 409.6Q124.28249728201783 409.6 126.48374646662317 410.69406283974774Q128.68499565122852 411.7881256794955 129.7537453794303 413.95937595129374L125.79562839747771 415.40124809741246Q125.30625244618395 414.48437051532943 124.2515633833442 413.8487442922375Q123.19687432050445 413.2131180691455 121.56374755381604 413.2131180691455Q120.06187105892585 413.2131180691455 118.82905740378342 413.96686888454013Q117.596243748641 414.7206196999348 116.87530550119591 416.2131213307241Q116.15436725375082 417.70562296151337 116.15436725375082 419.9256251358991Q116.15436725375082 422.10437703848663 116.8396803652968 423.6240661013264Q117.5249934768428 425.1437551641661 118.74280713198522 425.94531854751034Q119.96062078712764 426.74688193085456 121.57687214611872 426.74688193085456Q122.42062296151337 426.74688193085456 123.2634366166558 426.5556316590563Q124.10625027179822 426.3643813872581 124.79343879104152 425.9378180039139Q125.48062731028485 425.5112546205697 125.89875298978038 424.79594042183084Q126.31687866927592 424.080626223092 126.31687866927592 423.0081235051098V422.4212480974125H121.56374755381604V418.84562948467055H130.66874429223745V430.0H127.83000108719287L127.15312567949553 427.7237486410089Q126.19312567949554 429.0587497282018 124.65 429.70937486410094Q123.10687432050446 430.36 120.96937486410089 430.36ZM139.4087529897804 430.0V409.96H145.0899945640357L153.08875081539466 424.757512502718V409.96H157.32249293324637V430.0H151.64687649489022L143.6424951076321 415.1856120895847V430.0ZM188.70937268971514 430.36Q186.6206251358991 430.36 184.92656338334422 429.77687540769733Q183.2325016307893 429.19375081539465 182.03531419873886 428.07062622309195Q180.83812676668842 426.9475016307893 180.22500217438574 425.3518764948902L184.21874429223743 423.91000434877145Q184.47561969993475 424.82500543596433 185.1299956512285 425.4746934116112Q185.78437160252227 426.1243813872581 186.74249728201784 426.4721939552077Q187.70062296151337 426.8200065231572 188.82937268971514 426.8200065231572Q189.83249945640355 426.8200065231572 190.68375081539466 426.5762557077626Q191.53500217438574 426.3325048923679 192.07594042183084 425.7812535333768Q192.61687866927593 425.23000217438573 192.61687866927593 424.32250054359645Q192.61687866927593 423.28749945640357 191.78625353337682 422.7324983692107Q190.9556283974777 422.17749728201784 189.06750054359642 421.77812133072405L186.58687432050445 421.26999565122856Q184.72312567949552 420.8799956512285 183.41343879104153 420.1590584909763Q182.1037519025875 419.4381213307241 181.40437703848661 418.3271841704718Q180.70500217438573 417.2162470102196 180.70500217438573 415.6918721461187Q180.70500217438573 414.26687323331157 181.34531419873883 413.1371863448576Q181.98562622309197 412.0074994564036 183.1125005435964 411.2209371602522Q184.23937486410088 410.4343748641009 185.7206240487062 410.0171874320505Q187.20187323331157 409.6 188.90812241791693 409.6Q190.49437160252228 409.6 191.9784333550772 410.04156229615137Q193.4624951076321 410.48312459230266 194.6428071319852 411.4056240487063Q195.82311915633832 412.32812350510983 196.44749402043922 413.8374972820178L192.4781267666884 415.27936942813653Q192.18562622309196 414.57249402043925 191.61468797564686 414.0990563165906Q191.0437497282018 413.6256186127419 190.27124918460535 413.38280604479235Q189.49874864100892 413.1399934768428 188.544373776908 413.1399934768428Q187.55624809741246 413.1399934768428 186.76780930637094 413.38749402043925Q185.9793705153294 413.63499456403565 185.53218199608608 414.1299956512285Q185.08499347684278 414.6249967384214 185.08499347684278 415.3337486410089Q185.08499347684278 416.1681256794955 185.72343226788433 416.69406392694066Q186.36187105892586 417.22000217438574 187.54687214611872 417.47687758208303L190.26937268971514 418.0393781256795Q192.18937268971516 418.4406283974777 193.7062470102196 419.0668786692759Q195.22312133072407 419.6931289410741 196.10999565122853 420.827503805175Q196.996869971733 421.9618786692759 196.996869971733 423.8537529897804Q196.996869971733 425.9443770384866 195.83155794737985 427.3984387910415Q194.66624592302674 428.8525005435964 192.78655903457272 429.6062502717982Q190.9068721461187 430.36 188.70937268971514 430.36ZM210.21624809741246 430.0V422.2056251358991L202.64499999999998 409.96H207.7093639921722L212.3818688845401 418.0412589693412L217.0487486410089 409.96H222.137487497282L214.59623939986952 422.1812502717982V430.0ZM236.06937268971512 430.36Q233.9806251358991 430.36 232.28656338334417 429.77687540769733Q230.5925016307893 429.19375081539465 229.39531419873884 428.07062622309195Q228.1981267666884 426.9475016307893 227.58500217438572 425.3518764948902L231.57874429223742 423.91000434877145Q231.83561969993474 424.82500543596433 232.4899956512285 425.4746934116112Q233.14437160252226 426.1243813872581 234.1024972820178 426.4721939552077Q235.06062296151336 426.8200065231572 236.18937268971513 426.8200065231572Q237.19249945640354 426.8200065231572 238.04375081539462 426.5762557077626Q238.89500217438572 426.3325048923679 239.43594042183082 425.7812535333768Q239.97687866927592 425.23000217438573 239.97687866927592 424.32250054359645Q239.97687866927592 423.28749945640357 239.1462535333768 422.7324983692107Q238.3156283974777 422.17749728201784 236.4275005435964 421.77812133072405L233.94687432050443 421.26999565122856Q232.0831256794955 420.8799956512285 230.77343879104149 420.1590584909763Q229.4637519025875 419.4381213307241 228.7643770384866 418.3271841704718Q228.0650021743857 417.2162470102196 228.0650021743857 415.6918721461187Q228.0650021743857 414.26687323331157 228.70531419873885 413.1371863448576Q229.34562622309195 412.0074994564036 230.47250054359642 411.2209371602522Q231.59937486410087 410.4343748641009 233.08062404870623 410.0171874320505Q234.56187323331156 409.6 236.2681224179169 409.6Q237.85437160252226 409.6 239.33843335507717 410.04156229615137Q240.82249510763208 410.48312459230266 242.0028071319852 411.4056240487063Q243.1831191563383 412.32812350510983 243.8074940204392 413.8374972820178L239.8381267666884 415.27936942813653Q239.54562622309194 414.57249402043925 238.97468797564687 414.0990563165906Q238.40374972820177 413.6256186127419 237.63124918460534 413.38280604479235Q236.8587486410089 413.1399934768428 235.90437377690802 413.1399934768428Q234.91624809741245 413.1399934768428 234.12780930637092 413.38749402043925Q233.3393705153294 413.63499456403565 232.8921819960861 414.1299956512285Q232.44499347684277 414.6249967384214 232.44499347684277 415.3337486410089Q232.44499347684277 416.1681256794955 233.0834322678843 416.69406392694066Q233.72187105892584 417.22000217438574 234.9068721461187 417.47687758208303L237.62937268971513 418.0393781256795Q239.54937268971514 418.4406283974777 241.0662470102196 419.0668786692759Q242.58312133072405 419.6931289410741 243.46999565122852 420.827503805175Q244.35686997173298 421.9618786692759 244.35686997173298 423.8537529897804Q244.35686997173298 425.9443770384866 243.19155794737986 427.3984387910415Q242.02624592302672 428.8525005435964 240.1465590345727 429.6062502717982Q238.26687214611871 430.36 236.06937268971512 430.36ZM257.3362502717982 430.0V413.8037421178517H250.8468743205044V409.96H268.205617525549V413.8037421178517H261.7162415742552V430.0ZM275.93875298978037 430.0V409.96H290.89561969993474V413.8037421178517H280.31874429223745V417.77312894107416H287.0987508153946V421.6168710589259H280.31874429223745V426.1562578821483H291.01561969993475V430.0ZM299.34875298978034 430.0V409.96H306.02749184605346L310.4168721461187 424.70688410524025L314.8550021743857 409.96H321.484991302457V430.0H317.20249945640353V413.9968688845401L312.2412448358338 430.0H308.54937486410086L303.6068699717329 413.9968688845401V430.0Z"/></g></svg>', "module-aa-nad-symbol-reversed": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#FFFFFF" fill-rule="evenodd" d="M56,0 H200 A56,56 0 0 1 256,56 V200 A56,56 0 0 1 200,256 H56 A56,56 0 0 1 0,200 V56 A56,56 0 0 1 56,0 Z M46.5,80.0 A19,19 0 0 1 65.5,61.0 V80.0 Z M73.5,61.0 H84.5 A4,4 0 0 1 88.5,65.0 V76.0 A4,4 0 0 1 84.5,80.0 H73.5 A4,4 0 0 1 69.5,76.0 V65.0 A4,4 0 0 1 73.5,61.0 Z M96.5,61.0 H107.5 A4,4 0 0 1 111.5,65.0 V76.0 A4,4 0 0 1 107.5,80.0 H96.5 A4,4 0 0 1 92.5,76.0 V65.0 A4,4 0 0 1 96.5,61.0 Z M115.5,61.0 A19,19 0 0 1 134.5,80.0 H115.5 Z M50.5,84.0 H61.5 A4,4 0 0 1 65.5,88.0 V99.0 A4,4 0 0 1 61.5,103.0 H50.5 A4,4 0 0 1 46.5,99.0 V88.0 A4,4 0 0 1 50.5,84.0 Z M119.5,84.0 H130.5 A4,4 0 0 1 134.5,88.0 V99.0 A4,4 0 0 1 130.5,103.0 H119.5 A4,4 0 0 1 115.5,99.0 V88.0 A4,4 0 0 1 119.5,84.0 Z M50.5,107.0 H61.5 A4,4 0 0 1 65.5,111.0 V122.0 A4,4 0 0 1 61.5,126.0 H50.5 A4,4 0 0 1 46.5,122.0 V111.0 A4,4 0 0 1 50.5,107.0 Z M119.5,107.0 H130.5 A4,4 0 0 1 134.5,111.0 V122.0 A4,4 0 0 1 130.5,126.0 H119.5 A4,4 0 0 1 115.5,122.0 V111.0 A4,4 0 0 1 119.5,107.0 Z M50.5,130.0 H61.5 A4,4 0 0 1 65.5,134.0 V145.0 A4,4 0 0 1 61.5,149.0 H50.5 A4,4 0 0 1 46.5,145.0 V134.0 A4,4 0 0 1 50.5,130.0 Z M73.5,130.0 H84.5 A4,4 0 0 1 88.5,134.0 V145.0 A4,4 0 0 1 84.5,149.0 H73.5 A4,4 0 0 1 69.5,145.0 V134.0 A4,4 0 0 1 73.5,130.0 Z M96.5,130.0 H107.5 A4,4 0 0 1 111.5,134.0 V145.0 A4,4 0 0 1 107.5,149.0 H96.5 A4,4 0 0 1 92.5,145.0 V134.0 A4,4 0 0 1 96.5,130.0 Z M119.5,130.0 H130.5 A4,4 0 0 1 134.5,134.0 V145.0 A4,4 0 0 1 130.5,149.0 H119.5 A4,4 0 0 1 115.5,145.0 V134.0 A4,4 0 0 1 119.5,130.0 Z M50.5,153.0 H61.5 A4,4 0 0 1 65.5,157.0 V168.0 A4,4 0 0 1 61.5,172.0 H50.5 A4,4 0 0 1 46.5,168.0 V157.0 A4,4 0 0 1 50.5,153.0 Z M119.5,153.0 H130.5 A4,4 0 0 1 134.5,157.0 V168.0 A4,4 0 0 1 130.5,172.0 H119.5 A4,4 0 0 1 115.5,168.0 V157.0 A4,4 0 0 1 119.5,153.0 Z M50.5,176.0 H61.5 A4,4 0 0 1 65.5,180.0 V191.0 A4,4 0 0 1 61.5,195.0 H50.5 A4,4 0 0 1 46.5,191.0 V180.0 A4,4 0 0 1 50.5,176.0 Z M119.5,176.0 H130.5 A4,4 0 0 1 134.5,180.0 V191.0 A4,4 0 0 1 130.5,195.0 H119.5 A4,4 0 0 1 115.5,191.0 V180.0 A4,4 0 0 1 119.5,176.0 Z M148.5,107.0 H159.5 A4,4 0 0 1 163.5,111.0 V122.0 A4,4 0 0 1 159.5,126.0 H148.5 A4,4 0 0 1 144.5,122.0 V111.0 A4,4 0 0 1 148.5,107.0 Z M171.5,107.0 H182.5 A4,4 0 0 1 186.5,111.0 V122.0 A4,4 0 0 1 182.5,126.0 H171.5 A4,4 0 0 1 167.5,122.0 V111.0 A4,4 0 0 1 171.5,107.0 Z M190.5,107.0 A19,19 0 0 1 209.5,126.0 H190.5 Z M194.5,130.0 H205.5 A4,4 0 0 1 209.5,134.0 V145.0 A4,4 0 0 1 205.5,149.0 H194.5 A4,4 0 0 1 190.5,145.0 V134.0 A4,4 0 0 1 194.5,130.0 Z M144.5,172.0 A19,19 0 0 1 163.5,153.0 V172.0 Z M171.5,153.0 H182.5 A4,4 0 0 1 186.5,157.0 V168.0 A4,4 0 0 1 182.5,172.0 H171.5 A4,4 0 0 1 167.5,168.0 V157.0 A4,4 0 0 1 171.5,153.0 Z M194.5,153.0 H205.5 A4,4 0 0 1 209.5,157.0 V168.0 A4,4 0 0 1 205.5,172.0 H194.5 A4,4 0 0 1 190.5,168.0 V157.0 A4,4 0 0 1 194.5,153.0 Z M144.5,176.0 H163.5 V195.0 A19,19 0 0 1 144.5,176.0 Z M171.5,176.0 H182.5 A4,4 0 0 1 186.5,180.0 V191.0 A4,4 0 0 1 182.5,195.0 H171.5 A4,4 0 0 1 167.5,191.0 V180.0 A4,4 0 0 1 171.5,176.0 Z M194.5,176.0 H205.5 A4,4 0 0 1 209.5,180.0 V191.0 A4,4 0 0 1 205.5,195.0 H194.5 A4,4 0 0 1 190.5,191.0 V180.0 A4,4 0 0 1 194.5,176.0 Z"/></svg>', "module-aa-nad-symbol-small": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#111111" fill-rule="evenodd" d="M56,0 H200 A56,56 0 0 1 256,56 V200 A56,56 0 0 1 200,256 H56 A56,56 0 0 1 0,200 V56 A56,56 0 0 1 56,0 Z M40.5,82.0 A23,23 0 0 1 63.5,59.0 V82.0 Z M63.5,59.0 h23 v23 h-23 Z M86.5,59.0 h23 v23 h-23 Z M109.5,59.0 A23,23 0 0 1 132.5,82.0 H109.5 Z M40.5,82.0 h23 v23 h-23 Z M109.5,82.0 h23 v23 h-23 Z M40.5,105.0 h23 v23 h-23 Z M109.5,105.0 h23 v23 h-23 Z M40.5,128.0 h23 v23 h-23 Z M63.5,128.0 h23 v23 h-23 Z M86.5,128.0 h23 v23 h-23 Z M109.5,128.0 h23 v23 h-23 Z M40.5,151.0 h23 v23 h-23 Z M109.5,151.0 h23 v23 h-23 Z M40.5,174.0 h23 v23 h-23 Z M109.5,174.0 h23 v23 h-23 Z M146.5,105.0 h23 v23 h-23 Z M169.5,105.0 h23 v23 h-23 Z M192.5,105.0 A23,23 0 0 1 215.5,128.0 H192.5 Z M192.5,128.0 h23 v23 h-23 Z M146.5,174.0 A23,23 0 0 1 169.5,151.0 V174.0 Z M169.5,151.0 h23 v23 h-23 Z M192.5,151.0 h23 v23 h-23 Z M146.5,174.0 H169.5 V197.0 A23,23 0 0 1 146.5,174.0 Z M169.5,174.0 h23 v23 h-23 Z M192.5,174.0 h23 v23 h-23 Z"/></svg>', "module-aa-nad-symbol": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#111111" fill-rule="evenodd" d="M56,0 H200 A56,56 0 0 1 256,56 V200 A56,56 0 0 1 200,256 H56 A56,56 0 0 1 0,200 V56 A56,56 0 0 1 56,0 Z M46.5,80.0 A19,19 0 0 1 65.5,61.0 V80.0 Z M73.5,61.0 H84.5 A4,4 0 0 1 88.5,65.0 V76.0 A4,4 0 0 1 84.5,80.0 H73.5 A4,4 0 0 1 69.5,76.0 V65.0 A4,4 0 0 1 73.5,61.0 Z M96.5,61.0 H107.5 A4,4 0 0 1 111.5,65.0 V76.0 A4,4 0 0 1 107.5,80.0 H96.5 A4,4 0 0 1 92.5,76.0 V65.0 A4,4 0 0 1 96.5,61.0 Z M115.5,61.0 A19,19 0 0 1 134.5,80.0 H115.5 Z M50.5,84.0 H61.5 A4,4 0 0 1 65.5,88.0 V99.0 A4,4 0 0 1 61.5,103.0 H50.5 A4,4 0 0 1 46.5,99.0 V88.0 A4,4 0 0 1 50.5,84.0 Z M119.5,84.0 H130.5 A4,4 0 0 1 134.5,88.0 V99.0 A4,4 0 0 1 130.5,103.0 H119.5 A4,4 0 0 1 115.5,99.0 V88.0 A4,4 0 0 1 119.5,84.0 Z M50.5,107.0 H61.5 A4,4 0 0 1 65.5,111.0 V122.0 A4,4 0 0 1 61.5,126.0 H50.5 A4,4 0 0 1 46.5,122.0 V111.0 A4,4 0 0 1 50.5,107.0 Z M119.5,107.0 H130.5 A4,4 0 0 1 134.5,111.0 V122.0 A4,4 0 0 1 130.5,126.0 H119.5 A4,4 0 0 1 115.5,122.0 V111.0 A4,4 0 0 1 119.5,107.0 Z M50.5,130.0 H61.5 A4,4 0 0 1 65.5,134.0 V145.0 A4,4 0 0 1 61.5,149.0 H50.5 A4,4 0 0 1 46.5,145.0 V134.0 A4,4 0 0 1 50.5,130.0 Z M73.5,130.0 H84.5 A4,4 0 0 1 88.5,134.0 V145.0 A4,4 0 0 1 84.5,149.0 H73.5 A4,4 0 0 1 69.5,145.0 V134.0 A4,4 0 0 1 73.5,130.0 Z M96.5,130.0 H107.5 A4,4 0 0 1 111.5,134.0 V145.0 A4,4 0 0 1 107.5,149.0 H96.5 A4,4 0 0 1 92.5,145.0 V134.0 A4,4 0 0 1 96.5,130.0 Z M119.5,130.0 H130.5 A4,4 0 0 1 134.5,134.0 V145.0 A4,4 0 0 1 130.5,149.0 H119.5 A4,4 0 0 1 115.5,145.0 V134.0 A4,4 0 0 1 119.5,130.0 Z M50.5,153.0 H61.5 A4,4 0 0 1 65.5,157.0 V168.0 A4,4 0 0 1 61.5,172.0 H50.5 A4,4 0 0 1 46.5,168.0 V157.0 A4,4 0 0 1 50.5,153.0 Z M119.5,153.0 H130.5 A4,4 0 0 1 134.5,157.0 V168.0 A4,4 0 0 1 130.5,172.0 H119.5 A4,4 0 0 1 115.5,168.0 V157.0 A4,4 0 0 1 119.5,153.0 Z M50.5,176.0 H61.5 A4,4 0 0 1 65.5,180.0 V191.0 A4,4 0 0 1 61.5,195.0 H50.5 A4,4 0 0 1 46.5,191.0 V180.0 A4,4 0 0 1 50.5,176.0 Z M119.5,176.0 H130.5 A4,4 0 0 1 134.5,180.0 V191.0 A4,4 0 0 1 130.5,195.0 H119.5 A4,4 0 0 1 115.5,191.0 V180.0 A4,4 0 0 1 119.5,176.0 Z M148.5,107.0 H159.5 A4,4 0 0 1 163.5,111.0 V122.0 A4,4 0 0 1 159.5,126.0 H148.5 A4,4 0 0 1 144.5,122.0 V111.0 A4,4 0 0 1 148.5,107.0 Z M171.5,107.0 H182.5 A4,4 0 0 1 186.5,111.0 V122.0 A4,4 0 0 1 182.5,126.0 H171.5 A4,4 0 0 1 167.5,122.0 V111.0 A4,4 0 0 1 171.5,107.0 Z M190.5,107.0 A19,19 0 0 1 209.5,126.0 H190.5 Z M194.5,130.0 H205.5 A4,4 0 0 1 209.5,134.0 V145.0 A4,4 0 0 1 205.5,149.0 H194.5 A4,4 0 0 1 190.5,145.0 V134.0 A4,4 0 0 1 194.5,130.0 Z M144.5,172.0 A19,19 0 0 1 163.5,153.0 V172.0 Z M171.5,153.0 H182.5 A4,4 0 0 1 186.5,157.0 V168.0 A4,4 0 0 1 182.5,172.0 H171.5 A4,4 0 0 1 167.5,168.0 V157.0 A4,4 0 0 1 171.5,153.0 Z M194.5,153.0 H205.5 A4,4 0 0 1 209.5,157.0 V168.0 A4,4 0 0 1 205.5,172.0 H194.5 A4,4 0 0 1 190.5,168.0 V157.0 A4,4 0 0 1 194.5,153.0 Z M144.5,176.0 H163.5 V195.0 A19,19 0 0 1 144.5,176.0 Z M171.5,176.0 H182.5 A4,4 0 0 1 186.5,180.0 V191.0 A4,4 0 0 1 182.5,195.0 H171.5 A4,4 0 0 1 167.5,191.0 V180.0 A4,4 0 0 1 171.5,176.0 Z M194.5,176.0 H205.5 A4,4 0 0 1 209.5,180.0 V191.0 A4,4 0 0 1 205.5,195.0 H194.5 A4,4 0 0 1 190.5,191.0 V180.0 A4,4 0 0 1 194.5,176.0 Z"/></svg>', "module-aa-nad-wordmark": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 635 256"><g><path fill="#111111" d="M17.5,63.5 A26,26 0 0 1 43.5,37.5 V63.5 Z M52.5,37.5 H70.5 A4,4 0 0 1 74.5,41.5 V59.5 A4,4 0 0 1 70.5,63.5 H52.5 A4,4 0 0 1 48.5,59.5 V41.5 A4,4 0 0 1 52.5,37.5 Z M83.5,37.5 H101.5 A4,4 0 0 1 105.5,41.5 V59.5 A4,4 0 0 1 101.5,63.5 H83.5 A4,4 0 0 1 79.5,59.5 V41.5 A4,4 0 0 1 83.5,37.5 Z M110.5,37.5 A26,26 0 0 1 136.5,63.5 H110.5 Z M21.5,68.5 H39.5 A4,4 0 0 1 43.5,72.5 V90.5 A4,4 0 0 1 39.5,94.5 H21.5 A4,4 0 0 1 17.5,90.5 V72.5 A4,4 0 0 1 21.5,68.5 Z M114.5,68.5 H132.5 A4,4 0 0 1 136.5,72.5 V90.5 A4,4 0 0 1 132.5,94.5 H114.5 A4,4 0 0 1 110.5,90.5 V72.5 A4,4 0 0 1 114.5,68.5 Z M21.5,99.5 H39.5 A4,4 0 0 1 43.5,103.5 V121.5 A4,4 0 0 1 39.5,125.5 H21.5 A4,4 0 0 1 17.5,121.5 V103.5 A4,4 0 0 1 21.5,99.5 Z M114.5,99.5 H132.5 A4,4 0 0 1 136.5,103.5 V121.5 A4,4 0 0 1 132.5,125.5 H114.5 A4,4 0 0 1 110.5,121.5 V103.5 A4,4 0 0 1 114.5,99.5 Z M21.5,130.5 H39.5 A4,4 0 0 1 43.5,134.5 V152.5 A4,4 0 0 1 39.5,156.5 H21.5 A4,4 0 0 1 17.5,152.5 V134.5 A4,4 0 0 1 21.5,130.5 Z M52.5,130.5 H70.5 A4,4 0 0 1 74.5,134.5 V152.5 A4,4 0 0 1 70.5,156.5 H52.5 A4,4 0 0 1 48.5,152.5 V134.5 A4,4 0 0 1 52.5,130.5 Z M83.5,130.5 H101.5 A4,4 0 0 1 105.5,134.5 V152.5 A4,4 0 0 1 101.5,156.5 H83.5 A4,4 0 0 1 79.5,152.5 V134.5 A4,4 0 0 1 83.5,130.5 Z M114.5,130.5 H132.5 A4,4 0 0 1 136.5,134.5 V152.5 A4,4 0 0 1 132.5,156.5 H114.5 A4,4 0 0 1 110.5,152.5 V134.5 A4,4 0 0 1 114.5,130.5 Z M21.5,161.5 H39.5 A4,4 0 0 1 43.5,165.5 V183.5 A4,4 0 0 1 39.5,187.5 H21.5 A4,4 0 0 1 17.5,183.5 V165.5 A4,4 0 0 1 21.5,161.5 Z M114.5,161.5 H132.5 A4,4 0 0 1 136.5,165.5 V183.5 A4,4 0 0 1 132.5,187.5 H114.5 A4,4 0 0 1 110.5,183.5 V165.5 A4,4 0 0 1 114.5,161.5 Z M21.5,192.5 H39.5 A4,4 0 0 1 43.5,196.5 V214.5 A4,4 0 0 1 39.5,218.5 H21.5 A4,4 0 0 1 17.5,214.5 V196.5 A4,4 0 0 1 21.5,192.5 Z M114.5,192.5 H132.5 A4,4 0 0 1 136.5,196.5 V214.5 A4,4 0 0 1 132.5,218.5 H114.5 A4,4 0 0 1 110.5,214.5 V196.5 A4,4 0 0 1 114.5,192.5 Z M154.5,99.5 H172.5 A4,4 0 0 1 176.5,103.5 V121.5 A4,4 0 0 1 172.5,125.5 H154.5 A4,4 0 0 1 150.5,121.5 V103.5 A4,4 0 0 1 154.5,99.5 Z M185.5,99.5 H203.5 A4,4 0 0 1 207.5,103.5 V121.5 A4,4 0 0 1 203.5,125.5 H185.5 A4,4 0 0 1 181.5,121.5 V103.5 A4,4 0 0 1 185.5,99.5 Z M212.5,99.5 A26,26 0 0 1 238.5,125.5 H212.5 Z M216.5,130.5 H234.5 A4,4 0 0 1 238.5,134.5 V152.5 A4,4 0 0 1 234.5,156.5 H216.5 A4,4 0 0 1 212.5,152.5 V134.5 A4,4 0 0 1 216.5,130.5 Z M150.5,187.5 A26,26 0 0 1 176.5,161.5 V187.5 Z M185.5,161.5 H203.5 A4,4 0 0 1 207.5,165.5 V183.5 A4,4 0 0 1 203.5,187.5 H185.5 A4,4 0 0 1 181.5,183.5 V165.5 A4,4 0 0 1 185.5,161.5 Z M216.5,161.5 H234.5 A4,4 0 0 1 238.5,165.5 V183.5 A4,4 0 0 1 234.5,187.5 H216.5 A4,4 0 0 1 212.5,183.5 V165.5 A4,4 0 0 1 216.5,161.5 Z M150.5,192.5 H176.5 V218.5 A26,26 0 0 1 150.5,192.5 Z M185.5,192.5 H203.5 A4,4 0 0 1 207.5,196.5 V214.5 A4,4 0 0 1 203.5,218.5 H185.5 A4,4 0 0 1 181.5,214.5 V196.5 A4,4 0 0 1 185.5,192.5 Z M216.5,192.5 H234.5 A4,4 0 0 1 238.5,196.5 V214.5 A4,4 0 0 1 234.5,218.5 H216.5 A4,4 0 0 1 212.5,214.5 V196.5 A4,4 0 0 1 216.5,192.5 Z"/></g><g fill="#111111" transform="translate(4 0)"><path d="M298.696 158.0V75.168H324.984L355.984 132.084V75.168H376.196V158.0H349.784L318.908 101.208V158.0ZM382.388 158.0 413.76 75.168H436.948L468.44399999999996 158.0H445.38L440.668 143.864H410.04L405.452 158.0ZM415.62 126.876H435.08799999999997L425.292 97.612ZM474.636 158.0V75.168H502.784Q513.572 75.168 522.438 77.4Q531.304 79.632 537.752 84.53Q544.2 89.428 547.734 97.30199999999999Q551.268 105.176 551.268 116.584Q551.268 128.11599999999999 547.734 136.052Q544.2 143.988 537.752 148.824Q531.304 153.66 522.376 155.82999999999998Q513.448 158.0 502.784 158.0ZM495.716 140.268H503.28Q508.86 140.268 513.696 139.276Q518.532 138.284 522.066 135.742Q525.6 133.2 527.5840000000001 128.55Q529.568 123.9 529.568 116.584Q529.568 109.268 527.5840000000001 104.618Q525.6 99.968 522.066 97.364Q518.532 94.75999999999999 513.696 93.70599999999999Q508.86 92.652 503.28 92.652H495.716Z"/><path d="M297.8037529897804 206.0V185.96H304.1899978256143Q306.7531224179169 185.96 308.8634344422701 186.49718743205045Q310.9737464666232 187.0343748641009 312.49905849097627 188.21656229615132Q314.0243705153294 189.39874972820178 314.85030767558163 191.30656229615136Q315.67624483583387 193.2143748641009 315.67624483583387 195.9743748641009Q315.67624483583387 198.78125027179823 314.841869971733 200.7040628397478Q314.0074951076321 202.62687540769733 312.4643705153294 203.79406283974777Q310.92124592302673 204.9612502717982 308.82874646662316 205.48062513589912Q306.7362470102196 206.0 304.1899978256143 206.0ZM302.18374429223746 202.31375733855185H304.2518721461187Q305.7368732333116 202.31375733855185 307.0024994564036 202.05313220265276Q308.26812567949554 201.79250706675364 309.19531419873886 201.11656881930855Q310.1225027179822 200.44063057186344 310.64281582952816 199.19375407697325Q311.16312894107415 197.94687758208306 311.16312894107415 195.9743748641009Q311.16312894107415 194.00749728201782 310.64281582952816 192.75124592302674Q310.1225027179822 191.49499456403566 309.1831267666884 190.8068688845401Q308.24375081539466 190.11874320504458 306.9903120243531 189.85811806914546Q305.7368732333116 189.59749293324637 304.2518721461187 189.59749293324637H302.18374429223746ZM323.94375298978036 206.0V185.96H338.90061969993474V189.8037421178517H328.32374429223745V193.77312894107413H335.1037508153946V197.61687105892585H328.32374429223745V202.15625788214828H339.02061969993474V206.0ZM354.6343726897151 206.36Q352.54562513589906 206.36 350.85156338334417 205.77687540769733Q349.1575016307893 205.19375081539465 347.96031419873884 204.07062622309198Q346.7631267666884 202.9475016307893 346.1500021743857 201.3518764948902L350.14374429223744 199.91000434877148Q350.40061969993474 200.82500543596433 351.0549956512285 201.4746934116112Q351.70937160252225 202.1243813872581 352.6674972820178 202.47219395520767Q353.62562296151333 202.82000652315722 354.7543726897151 202.82000652315722Q355.75749945640354 202.82000652315722 356.6087508153946 202.57625570776256Q357.4600021743857 202.3325048923679 358.0009404218308 201.7812535333768Q358.5418786692759 201.23000217438573 358.5418786692759 200.32250054359645Q358.5418786692759 199.28749945640357 357.71125353337675 198.7324983692107Q356.88062839747766 198.17749728201784 354.9925005435964 197.77812133072408L352.51187432050443 197.26999565122853Q350.64812567949554 196.87999565122854 349.33843879104154 196.1590584909763Q348.0287519025875 195.43812133072407 347.3293770384866 194.32718417047184Q346.6300021743857 193.2162470102196 346.6300021743857 191.69187214611873Q346.6300021743857 190.2668732333116 347.27031419873884 189.13718634485758Q347.910626223092 188.00749945640356 349.0375005435964 187.22093716025222Q350.16437486410086 186.4343748641009 351.6456240487062 186.01718743205043Q353.1268732333116 185.6 354.8331224179169 185.6Q356.4193716025223 185.6 357.90343335507714 186.04156229615134Q359.38749510763205 186.4831245923027 360.5678071319852 187.40562404870624Q361.7481191563383 188.3281235051098 362.3724940204392 189.83749728201784L358.4031267666884 191.27936942813656Q358.11062622309197 190.57249402043922 357.53968797564687 190.09905631659058Q356.9687497282018 189.6256186127419 356.19624918460534 189.38280604479235Q355.4237486410089 189.1399934768428 354.469373776908 189.1399934768428Q353.48124809741245 189.1399934768428 352.6928093063709 189.38749402043922Q351.9043705153294 189.63499456403565 351.4571819960861 190.1299956512285Q351.0099934768428 190.6249967384214 351.0099934768428 191.33374864100892Q351.0099934768428 192.16812567949555 351.64843226788435 192.69406392694066Q352.28687105892584 193.22000217438574 353.4718721461187 193.47687758208306L356.1943726897151 194.0393781256795Q358.11437268971514 194.44062839747772 359.63124701021957 195.06687866927592Q361.14812133072405 195.69312894107415 362.03499565122854 196.82750380517504Q362.921869971733 197.96187866927593 362.921869971733 199.8537529897804Q362.921869971733 201.94437703848664 361.75655794737986 203.39843879104154Q360.59124592302675 204.85250054359642 358.7115590345727 205.60625027179822Q356.8318721461187 206.36 354.6343726897151 206.36ZM370.5818764948902 206.0V202.778756251359H373.3775016307893V189.181243748641H370.5818764948902V185.96H380.55311806914546V189.181243748641H377.75749293324634V202.778756251359H380.55311806914546V206.0ZM397.2543748641009 206.36Q394.32562513589914 206.36 392.21531311154604 205.0737497282018Q390.1050010871929 203.78749945640357 388.96687649489024 201.43531202435312Q387.82875190258756 199.08312459230268 387.82875190258756 195.9256251358991Q387.82875190258756 192.75687540769732 389.09625135899114 190.44406283974777Q390.36375081539467 188.13125027179822 392.6493748641009 186.8656251358991Q394.93499891280715 185.6 397.9256229615134 185.6Q400.5674972820178 185.6 402.76874646662316 186.69406283974777Q404.96999565122854 187.78812567949555 406.03874537943034 189.95937595129377L402.0806283974777 191.4012480974125Q401.591252446184 190.48437051532943 400.53656338334423 189.84874429223746Q399.48187432050446 189.21311806914548 397.84874755381605 189.21311806914548Q396.3468710589259 189.21311806914548 395.1140574037835 189.96686888454013Q393.88124374864105 190.72061969993476 393.1603055011959 192.21312133072405Q392.43936725375085 193.70562296151337 392.43936725375085 195.9256251358991Q392.43936725375085 198.10437703848663 393.12468036529685 199.62406610132638Q393.8099934768428 201.14375516416612 395.02780713198524 201.94531854751034Q396.2456207871277 202.74688193085453 397.86187214611874 202.74688193085453Q398.70562296151337 202.74688193085453 399.5484366166558 202.5556316590563Q400.39125027179824 202.3643813872581 401.07843879104155 201.9378180039139Q401.76562731028486 201.5112546205697 402.1837529897804 200.79594042183084Q402.60187866927595 200.08062622309197 402.60187866927595 199.0081235051098V198.42124809741247H397.84874755381605V194.84562948467058H406.95374429223745V206.0H404.11500108719287L403.43812567949556 203.7237486410089Q402.4781256794956 205.05874972820178 400.93500000000006 205.70937486410088Q399.3918743205045 206.36 397.2543748641009 206.36ZM415.69375298978036 206.0V185.96H421.37499456403566L429.37375081539466 200.757512502718V185.96H433.60749293324636V206.0H427.93187649489016L419.92749510763207 191.18561208958468V206.0ZM464.99437268971514 206.36Q462.9056251358991 206.36 461.2115633833442 205.77687540769733Q459.5175016307893 205.19375081539465 458.32031419873886 204.07062622309198Q457.1231267666884 202.9475016307893 456.5100021743857 201.3518764948902L460.50374429223746 199.91000434877148Q460.76061969993475 200.82500543596433 461.41499565122854 201.4746934116112Q462.06937160252227 202.1243813872581 463.0274972820178 202.47219395520767Q463.98562296151334 202.82000652315722 465.11437268971514 202.82000652315722Q466.11749945640355 202.82000652315722 466.9687508153946 202.57625570776256Q467.8200021743857 202.3325048923679 468.36094042183083 201.7812535333768Q468.9018786692759 201.23000217438573 468.9018786692759 200.32250054359645Q468.9018786692759 199.28749945640357 468.07125353337676 198.7324983692107Q467.2406283974777 198.17749728201784 465.3525005435964 197.77812133072408L462.87187432050445 197.26999565122853Q461.00812567949555 196.87999565122854 459.69843879104155 196.1590584909763Q458.3887519025875 195.43812133072407 457.6893770384866 194.32718417047184Q456.9900021743857 193.2162470102196 456.9900021743857 191.69187214611873Q456.9900021743857 190.2668732333116 457.63031419873886 189.13718634485758Q458.270626223092 188.00749945640356 459.39750054359644 187.22093716025222Q460.5243748641009 186.4343748641009 462.00562404870624 186.01718743205043Q463.4868732333116 185.6 465.1931224179169 185.6Q466.7793716025223 185.6 468.26343335507715 186.04156229615134Q469.74749510763206 186.4831245923027 470.9278071319852 187.40562404870624Q472.1081191563383 188.3281235051098 472.7324940204392 189.83749728201784L468.7631267666884 191.27936942813656Q468.470626223092 190.57249402043922 467.8996879756469 190.09905631659058Q467.3287497282018 189.6256186127419 466.55624918460535 189.38280604479235Q465.7837486410089 189.1399934768428 464.829373776908 189.1399934768428Q463.84124809741246 189.1399934768428 463.05280930637093 189.38749402043922Q462.2643705153294 189.63499456403565 461.8171819960861 190.1299956512285Q461.3699934768428 190.6249967384214 461.3699934768428 191.33374864100892Q461.3699934768428 192.16812567949555 462.00843226788436 192.69406392694066Q462.64687105892585 193.22000217438574 463.8318721461187 193.47687758208306L466.55437268971514 194.0393781256795Q468.47437268971515 194.44062839747772 469.9912470102196 195.06687866927592Q471.50812133072407 195.69312894107415 472.39499565122856 196.82750380517504Q473.281869971733 197.96187866927593 473.281869971733 199.8537529897804Q473.281869971733 201.94437703848664 472.1165579473799 203.39843879104154Q470.95124592302676 204.85250054359642 469.0715590345727 205.60625027179822Q467.1918721461187 206.36 464.99437268971514 206.36ZM486.50124809741243 206.0V198.2056251358991L478.92999999999995 185.96H483.99436399217217L488.66686888454007 194.04125896934116L493.33374864100887 185.96H498.42248749728196L490.8812393998695 198.1812502717982V206.0ZM512.3543726897152 206.36Q510.2656251358991 206.36 508.5715633833442 205.77687540769733Q506.8775016307893 205.19375081539465 505.68031419873887 204.07062622309198Q504.48312676668843 202.9475016307893 503.8700021743857 201.3518764948902L507.86374429223747 199.91000434877148Q508.12061969993476 200.82500543596433 508.77499565122855 201.4746934116112Q509.4293716025223 202.1243813872581 510.3874972820178 202.47219395520767Q511.34562296151336 202.82000652315722 512.4743726897152 202.82000652315722Q513.4774994564036 202.82000652315722 514.3287508153946 202.57625570776256Q515.1800021743858 202.3325048923679 515.7209404218308 201.7812535333768Q516.2618786692759 201.23000217438573 516.2618786692759 200.32250054359645Q516.2618786692759 199.28749945640357 515.4312535333768 198.7324983692107Q514.6006283974777 198.17749728201784 512.7125005435964 197.77812133072408L510.23187432050446 197.26999565122853Q508.36812567949556 196.87999565122854 507.05843879104157 196.1590584909763Q505.7487519025875 195.43812133072407 505.0493770384866 194.32718417047184Q504.35000217438574 193.2162470102196 504.35000217438574 191.69187214611873Q504.35000217438574 190.2668732333116 504.9903141987389 189.13718634485758Q505.630626223092 188.00749945640356 506.75750054359645 187.22093716025222Q507.8843748641009 186.4343748641009 509.36562404870625 186.01718743205043Q510.8468732333116 185.6 512.5531224179169 185.6Q514.1393716025223 185.6 515.6234333550772 186.04156229615134Q517.1074951076321 186.4831245923027 518.2878071319852 187.40562404870624Q519.4681191563384 188.3281235051098 520.0924940204392 189.83749728201784L516.1231267666884 191.27936942813656Q515.8306262230919 190.57249402043922 515.2596879756468 190.09905631659058Q514.6887497282017 189.6256186127419 513.9162491846052 189.38280604479235Q513.1437486410089 189.1399934768428 512.189373776908 189.1399934768428Q511.2012480974125 189.1399934768428 510.41280930637095 189.38749402043922Q509.6243705153294 189.63499456403565 509.1771819960861 190.1299956512285Q508.7299934768428 190.6249967384214 508.7299934768428 191.33374864100892Q508.7299934768428 192.16812567949555 509.3684322678844 192.69406392694066Q510.00687105892587 193.22000217438574 511.1918721461187 193.47687758208306L513.9143726897152 194.0393781256795Q515.8343726897151 194.44062839747772 517.3512470102196 195.06687866927592Q518.8681213307241 195.69312894107415 519.7549956512285 196.82750380517504Q520.641869971733 197.96187866927593 520.641869971733 199.8537529897804Q520.641869971733 201.94437703848664 519.4765579473799 203.39843879104154Q518.3112459230267 204.85250054359642 516.4315590345727 205.60625027179822Q514.5518721461187 206.36 512.3543726897152 206.36ZM533.6212502717981 206.0V189.8037421178517H527.1318743205044V185.96H544.4906175255489V189.8037421178517H538.0012415742552V206.0ZM552.2237529897803 206.0V185.96H567.1806196999347V189.8037421178517H556.6037442922374V193.77312894107413H563.3837508153946V197.61687105892585H556.6037442922374V202.15625788214828H567.3006196999347V206.0ZM575.6337529897803 206.0V185.96H582.3124918460534L586.7018721461186 200.70688410524028L591.1400021743857 185.96H597.769991302457V206.0H593.4874994564035V189.9968688845401L588.5262448358338 206.0H584.8343748641008L579.891869971733 189.9968688845401V206.0Z"/></g></svg>' }, "illus": { "empty-cart": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="An empty shopping cart \u2014 your cart is empty"><title>An empty shopping cart \u2014 your cart is empty</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M56,268 Q47.519999999999996,251.68 41.6,240.8 Q50.08,257.12 56,268Z" fill="#a3a3a3"/><path d="M56,268 Q50.4,244.96 56.0,229.6 Q61.6,252.64 56,268Z" fill="#a3a3a3"/><path d="M56,268 Q53.28,253.6 70.4,244.0 Q73.11999999999999,258.4 56,268Z" fill="#a3a3a3"/><path d="M56,268 Q45.6,258.4 32.0,252.0 Q42.4,261.6 56,268Z" fill="#a3a3a3"/><path d="M56,268 Q55.199999999999996,259.36 80.0,253.6 Q80.8,262.24 56,268Z" fill="#a3a3a3"/><path d="M350,268 Q347.62,253.72 362.6,244.2 Q364.97999999999996,258.48 350,268Z" fill="#a3a3a3"/><path d="M350,268 Q345.1,247.84 350.0,234.4 Q354.9,254.56 350,268Z" fill="#a3a3a3"/><path d="M350,268 Q342.58000000000004,255.4 337.4,247.0 Q344.82,259.6 350,268Z" fill="#a3a3a3"/><path d="M350,268 Q349.3,259.6 371.0,254.0 Q371.7,262.4 350,268Z" fill="#a3a3a3"/><path d="M350,268 Q340.90000000000003,260.44 329.0,255.4 Q338.09999999999997,262.96 350,268Z" fill="#a3a3a3"/><path d="M96 96 H126 L156 210 H276" fill="none" stroke="#111111" stroke-width="6"/><path d="M132 118 H300 L282 188 H150Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M180 118 L174 188" stroke="#a3a3a3" stroke-width="3"/><path d="M214 118 L208 188" stroke="#a3a3a3" stroke-width="3"/><path d="M248 118 L242 188" stroke="#a3a3a3" stroke-width="3"/><path d="M140 150 H292" stroke="#a3a3a3" stroke-width="3"/><circle cx="172" cy="236" r="14" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="172" cy="236" r="4" fill="#111111"/><circle cx="256" cy="236" r="14" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="256" cy="236" r="4" fill="#111111"/><path d="M300 90 C330 70 340 110 318 120" fill="none" stroke="#111111" stroke-width="2.5" stroke-dasharray="7 7"/></g></svg>', "empty-data": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="An open, empty box \u2014 nothing here yet"><title>An open, empty box \u2014 nothing here yet</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M64,268 Q55.519999999999996,251.68 49.6,240.8 Q58.08,257.12 64,268Z" fill="#a3a3a3"/><path d="M64,268 Q58.4,244.96 64.0,229.6 Q69.6,252.64 64,268Z" fill="#a3a3a3"/><path d="M64,268 Q61.279999999999994,253.6 78.4,244.0 Q81.11999999999999,258.4 64,268Z" fill="#a3a3a3"/><path d="M64,268 Q53.6,258.4 40.0,252.0 Q50.4,261.6 64,268Z" fill="#a3a3a3"/><path d="M64,268 Q63.199999999999996,259.36 88.0,253.6 Q88.8,262.24 64,268Z" fill="#a3a3a3"/><path d="M340,268 Q337.28,251.68 354.4,240.8 Q357.12,257.12 340,268Z" fill="#a3a3a3"/><path d="M340,268 Q334.4,244.96 340.0,229.6 Q345.6,252.64 340,268Z" fill="#a3a3a3"/><path d="M340,268 Q331.52,253.6 325.6,244.0 Q334.08000000000004,258.4 340,268Z" fill="#a3a3a3"/><path d="M340,268 Q339.2,258.4 364.0,252.0 Q364.8,261.6 340,268Z" fill="#a3a3a3"/><path d="M340,268 Q329.59999999999997,259.36 316.0,253.6 Q326.40000000000003,262.24 340,268Z" fill="#a3a3a3"/><path d="M120 150 L200 126 L280 150 L280 240 L200 266 L120 240Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M120 150 L200 176 L280 150M200 176 V266" fill="none" stroke="#111111" stroke-width="3"/><path d="M120 150 L92 118 L172 94 L200 126Z" fill="#efefef" stroke="#111111" stroke-width="3"/><path d="M280 150 L308 118 L228 94 L200 126Z" fill="#efefef" stroke="#111111" stroke-width="3"/><path d="M150 200 L170 206 M226 206 L246 200" stroke="#a3a3a3" stroke-width="3"/><path d="M200 50V56M200 64V70M190 60H196M204 60H210" stroke="#111111" stroke-width="2.5"/><path d="M150 66.0V69.6M150 74.4V78.0M144.0 72H147.6M152.4 72H156.0" stroke="#111111" stroke-width="2.5"/><path d="M256 63.0V67.2M256 72.8V77.0M249.0 70H253.2M258.8 70H263.0" stroke="#111111" stroke-width="2.5"/></g></svg>', "empty-inbox": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="An empty inbox tray with a check \u2014 all caught up"><title>An empty inbox tray with a check \u2014 all caught up</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M60,268 Q51.519999999999996,251.68 45.6,240.8 Q54.08,257.12 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q54.4,244.96 60.0,229.6 Q65.6,252.64 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q57.28,253.6 74.4,244.0 Q77.11999999999999,258.4 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q49.6,258.4 36.0,252.0 Q46.4,261.6 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q59.199999999999996,259.36 84.0,253.6 Q84.8,262.24 60,268Z" fill="#a3a3a3"/><path d="M344,268 Q341.28,251.68 358.4,240.8 Q361.12,257.12 344,268Z" fill="#a3a3a3"/><path d="M344,268 Q338.4,244.96 344.0,229.6 Q349.6,252.64 344,268Z" fill="#a3a3a3"/><path d="M344,268 Q335.52,253.6 329.6,244.0 Q338.08000000000004,258.4 344,268Z" fill="#a3a3a3"/><path d="M344,268 Q343.2,258.4 368.0,252.0 Q368.8,261.6 344,268Z" fill="#a3a3a3"/><path d="M344,268 Q333.59999999999997,259.36 320.0,253.6 Q330.40000000000003,262.24 344,268Z" fill="#a3a3a3"/><path d="M100 170 L130 120 H270 L300 170 V250 Q300 258 292 258 H108 Q100 258 100 250Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M100 170 H160 Q166 196 200 196 Q234 196 240 170 H300" fill="none" stroke="#111111" stroke-width="3"/><path d="M100 170 V250 Q100 258 108 258 H292 Q300 258 300 250 V170 H240 Q234 196 200 196 Q166 196 160 170Z" fill="#efefef" stroke="#111111" stroke-width="3"/><circle cx="200" cy="96" r="26" fill="#111111"/><path d="M189.08 96.52 L197.4 104.32 L211.7 88.2" fill="none" stroke="#ffffff" stroke-width="5.2"/><path d="M150 63.0V67.2M150 72.8V77.0M143.0 70H147.2M152.8 70H157.0" stroke="#111111" stroke-width="2.5"/><path d="M256 58.0V62.8M256 69.2V74.0M248.0 66H252.8M259.2 66H264.0" stroke="#111111" stroke-width="2.5"/></g></svg>', "empty-notifications": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="A sleeping bell \u2014 no new notifications"><title>A sleeping bell \u2014 no new notifications</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M64,268 Q55.519999999999996,251.68 49.6,240.8 Q58.08,257.12 64,268Z" fill="#a3a3a3"/><path d="M64,268 Q58.4,244.96 64.0,229.6 Q69.6,252.64 64,268Z" fill="#a3a3a3"/><path d="M64,268 Q61.279999999999994,253.6 78.4,244.0 Q81.11999999999999,258.4 64,268Z" fill="#a3a3a3"/><path d="M64,268 Q53.6,258.4 40.0,252.0 Q50.4,261.6 64,268Z" fill="#a3a3a3"/><path d="M64,268 Q63.199999999999996,259.36 88.0,253.6 Q88.8,262.24 64,268Z" fill="#a3a3a3"/><path d="M336,268 Q332.94,249.64 352.2,237.4 Q355.26,255.76 336,268Z" fill="#a3a3a3"/><path d="M336,268 Q329.7,242.07999999999998 336.0,224.8 Q342.3,250.72 336,268Z" fill="#a3a3a3"/><path d="M336,268 Q326.46,251.8 319.8,241.0 Q329.34000000000003,257.2 336,268Z" fill="#a3a3a3"/><path d="M336,268 Q335.09999999999997,257.2 363.0,250.0 Q363.90000000000003,260.8 336,268Z" fill="#a3a3a3"/><path d="M336,268 Q324.3,258.28 309.0,251.8 Q320.7,261.52 336,268Z" fill="#a3a3a3"/><path d="M200 66 Q252 66 256 130 L262 196 L278 214 H122 L138 196 L144 130 Q148 66 200 66Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M180 214 A20 20 0 0 0 220 214" fill="#111111" stroke="#111111" stroke-width="3"/><circle cx="200" cy="62" r="7" fill="#111111" stroke="#111111" stroke-width="3"/><path d="M172 150 Q180 158 188 150 M212 150 Q220 158 228 150" fill="none" stroke="#111111" stroke-width="3"/><path transform="translate(270.0 96.0)" d="M0.6599999999999999 0.0V-2.816L7.832 -11.395999999999999H0.99V-14.696H12.738V-11.879999999999999L5.632 -3.3H13.068V0.0Z" fill="#111111"/><path transform="translate(292.0 72.0)" d="M0.448 0.0V-2.08L4.48 -5.856H0.6880000000000001V-7.936H7.904V-5.856L3.888 -2.08H8.128V0.0Z" fill="#111111"/><path transform="translate(306.0 54.0)" d="M0.336 0.0V-1.56L3.36 -4.392H0.516V-5.952H5.928V-4.392L2.916 -1.56H6.096V0.0Z" fill="#111111"/></g></svg>', "empty-search": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="A magnifying glass over a blank page \u2014 no results found"><title>A magnifying glass over a blank page \u2014 no results found</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M52,268 Q43.519999999999996,251.68 37.6,240.8 Q46.08,257.12 52,268Z" fill="#a3a3a3"/><path d="M52,268 Q46.4,244.96 52.0,229.6 Q57.6,252.64 52,268Z" fill="#a3a3a3"/><path d="M52,268 Q49.28,253.6 66.4,244.0 Q69.12,258.4 52,268Z" fill="#a3a3a3"/><path d="M52,268 Q41.6,258.4 28.0,252.0 Q38.4,261.6 52,268Z" fill="#a3a3a3"/><path d="M52,268 Q51.199999999999996,259.36 76.0,253.6 Q76.8,262.24 52,268Z" fill="#a3a3a3"/><path d="M348,268 Q344.94,249.64 364.2,237.4 Q367.26,255.76 348,268Z" fill="#a3a3a3"/><path d="M348,268 Q341.7,242.07999999999998 348.0,224.8 Q354.3,250.72 348,268Z" fill="#a3a3a3"/><path d="M348,268 Q338.46,251.8 331.8,241.0 Q341.34000000000003,257.2 348,268Z" fill="#a3a3a3"/><path d="M348,268 Q347.09999999999997,257.2 375.0,250.0 Q375.90000000000003,260.8 348,268Z" fill="#a3a3a3"/><path d="M348,268 Q336.3,258.28 321.0,251.8 Q332.7,261.52 348,268Z" fill="#a3a3a3"/><g transform="rotate(-6 180.0 151.0)"><rect x="110" y="56" width="140" height="190" rx="10" fill="#ffffff" stroke="#111111" stroke-width="3"/><rect x="130" y="86" width="100" height="8" rx="4" fill="#efefef"/><rect x="130" y="110" width="70" height="8" rx="4" fill="#efefef"/><rect x="130" y="134" width="100" height="8" rx="4" fill="#efefef"/><rect x="130" y="158" width="70" height="8" rx="4" fill="#efefef"/><rect x="130" y="182" width="100" height="8" rx="4" fill="#efefef"/><rect x="130" y="206" width="70" height="8" rx="4" fill="#efefef"/></g><circle cx="236" cy="150" r="46" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="236" cy="150" r="34" fill="#efefef" stroke="#111111" stroke-width="3"/><path d="M270 184 L314 228" stroke="#111111" stroke-width="16"/><path transform="translate(224.0 164.0)" d="M6.5200000000000005 -9.64V-10.200000000000001Q6.5200000000000005 -11.96 6.98 -13.3Q7.44 -14.64 8.540000000000001 -15.620000000000001Q9.64 -16.6 11.56 -17.240000000000002Q13.68 -17.96 14.52 -18.6Q15.36 -19.240000000000002 15.36 -20.0Q15.36 -20.8 14.36 -21.4Q13.36 -22.0 11.64 -22.0Q10.56 -22.0 9.54 -21.700000000000003Q8.52 -21.400000000000002 7.72 -20.78Q6.92 -20.16 6.48 -19.2L0.6 -21.400000000000002Q1.4000000000000001 -23.28 2.9800000000000004 -24.560000000000002Q4.5600000000000005 -25.84 6.78 -26.52Q9.0 -27.2 11.72 -27.2Q14.44 -27.2 16.84 -26.4Q19.240000000000002 -25.6 20.72 -24.04Q22.2 -22.48 22.2 -20.12Q22.2 -18.8 21.740000000000002 -17.72Q21.28 -16.64 20.14 -15.7Q19.0 -14.76 16.88 -13.76Q15.32 -13.040000000000001 14.52 -12.48Q13.72 -11.92 13.440000000000001 -11.4Q13.16 -10.88 13.16 -10.24V-9.64ZM9.88 0.48Q8.16 0.48 6.9399999999999995 -0.74Q5.72 -1.96 5.72 -3.68Q5.72 -5.44 6.9399999999999995 -6.62Q8.16 -7.8 9.88 -7.8Q11.56 -7.8 12.780000000000001 -6.62Q14.0 -5.44 14.0 -3.68Q14.0 -1.96 12.780000000000001 -0.74Q11.56 0.48 9.88 0.48Z" fill="#111111"/><path d="M80 120 C60 90 90 60 120 70" fill="none" stroke="#111111" stroke-width="2.5" stroke-dasharray="7 7"/></g></svg>', "error-404": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="Lost traveller checking a phone that says 404, destination not found"><title>Lost traveller checking a phone that says 404, destination not found</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M60,268 Q50.46,249.64 43.8,237.4 Q53.339999999999996,255.76 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q53.7,242.07999999999998 60.0,224.8 Q66.3,250.72 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q56.940000000000005,251.8 76.2,241.0 Q79.26,257.2 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q48.300000000000004,257.2 33.0,250.0 Q44.699999999999996,260.8 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q59.10000000000001,258.28 87.0,251.8 Q87.89999999999999,261.52 60,268Z" fill="#a3a3a3"/><path d="M250,268 Q247.62,253.72 262.6,244.2 Q264.97999999999996,258.48 250,268Z" fill="#a3a3a3"/><path d="M250,268 Q245.1,247.84 250.0,234.4 Q254.9,254.56 250,268Z" fill="#a3a3a3"/><path d="M250,268 Q242.57999999999998,255.4 237.4,247.0 Q244.82,259.6 250,268Z" fill="#a3a3a3"/><path d="M250,268 Q249.29999999999998,259.6 271.0,254.0 Q271.7,262.4 250,268Z" fill="#a3a3a3"/><path d="M250,268 Q240.9,260.44 229.0,255.4 Q238.1,262.96 250,268Z" fill="#a3a3a3"/><path d="M352,268 Q343.52,251.68 337.6,240.8 Q346.08000000000004,257.12 352,268Z" fill="#a3a3a3"/><path d="M352,268 Q346.4,244.96 352.0,229.6 Q357.6,252.64 352,268Z" fill="#a3a3a3"/><path d="M352,268 Q349.28,253.6 366.4,244.0 Q369.12,258.4 352,268Z" fill="#a3a3a3"/><path d="M352,268 Q341.59999999999997,258.4 328.0,252.0 Q338.40000000000003,261.6 352,268Z" fill="#a3a3a3"/><path d="M352,268 Q351.2,259.36 376.0,253.6 Q376.8,262.24 352,268Z" fill="#a3a3a3"/><path d="M64 92 C40 120 60 150 40 170" fill="none" stroke="#111111" stroke-width="2.5" stroke-dasharray="7 7"/><path d="M64,94 C60.4,85.0 55.0,81.4 55.0,72.4 A9.0,9.0 0 1 1 73.0,72.4 C73.0,81.4 67.6,85.0 64,94Z" fill="#111111"/><circle cx="64" cy="72.4" r="3.6" fill="#ffffff"/><path d="M330 70 C360 100 340 130 300 140" fill="none" stroke="#111111" stroke-width="2.5" stroke-dasharray="7 7"/><path d="M330,72 C326.8,64.0 322.0,60.8 322.0,52.8 A8.0,8.0 0 1 1 338.0,52.8 C338.0,60.8 333.2,64.0 330,72Z" fill="#a3a3a3"/><circle cx="330" cy="52.8" r="3.2" fill="#ffffff"/><g transform="rotate(-14 230 150)"><rect x="176.0" y="51.0" width="120" height="210" rx="20" fill="#ffffff" stroke="#111111" stroke-width="3"/><rect x="170.0" y="45.0" width="120" height="210" rx="20" fill="#111111"/><rect x="178.0" y="53.0" width="104" height="194" rx="13" fill="#efefef"/><g transform="rotate(0 230.0 83.0)"><rect x="178" y="58" width="104" height="50" rx="8" fill="#ffffff" stroke="#111111" stroke-width="2.5"/><path transform="translate(188.0 84.0)" d="M7.568 0.0V-2.992H0.43999999999999995V-5.566L7.568 -14.696H11.197999999999999V-6.1819999999999995H13.09V-2.992H11.197999999999999V0.0ZM4.378 -6.1819999999999995H7.568V-9.966ZM21.119999999999997 0.264Q19.052 0.264 17.622 -0.6819999999999999Q16.192 -1.628 15.466 -3.344Q14.739999999999998 -5.06 14.739999999999998 -7.369999999999999Q14.739999999999998 -9.702 15.466 -11.407Q16.192 -13.112 17.622 -14.036Q19.052 -14.959999999999999 21.119999999999997 -14.959999999999999Q23.21 -14.959999999999999 24.628999999999998 -14.036Q26.048 -13.112 26.774 -11.407Q27.5 -9.702 27.5 -7.369999999999999Q27.5 -5.06 26.774 -3.344Q26.048 -1.628 24.628999999999998 -0.6819999999999999Q23.21 0.264 21.119999999999997 0.264ZM21.119999999999997 -2.376Q21.648 -2.376 22.076999999999998 -2.5629999999999997Q22.506 -2.75 22.836 -3.146L18.546 -9.306Q18.458 -8.822 18.413999999999998 -8.327Q18.369999999999997 -7.832 18.369999999999997 -7.3919999999999995Q18.369999999999997 -5.654 18.711 -4.543Q19.052 -3.432 19.679 -2.904Q20.305999999999997 -2.376 21.119999999999997 -2.376ZM19.491999999999997 -11.594 23.738 -5.478Q23.804 -5.896 23.836999999999996 -6.369Q23.869999999999997 -6.842 23.869999999999997 -7.3919999999999995Q23.869999999999997 -8.118 23.759999999999998 -8.965Q23.65 -9.812 23.352999999999998 -10.581999999999999Q23.055999999999997 -11.351999999999999 22.516999999999996 -11.846999999999998Q21.977999999999998 -12.341999999999999 21.119999999999997 -12.341999999999999Q20.592 -12.341999999999999 20.195999999999998 -12.143999999999998Q19.799999999999997 -11.946 19.491999999999997 -11.594ZM35.992 0.0V-2.992H28.864V-5.566L35.992 -14.696H39.622V-6.1819999999999995H41.513999999999996V-2.992H39.622V0.0ZM32.802 -6.1819999999999995H35.992V-9.966Z" fill="#111111"/><path transform="translate(188.0 100.0)" d="M0.5249976081756904 0.0V-5.344H2.152001739508589Q2.8295020656664494 -5.344 3.3852524461839533 -5.201749945640357Q3.9410028267014567 -5.059499891280713 4.3407532072189605 -4.74524983692107Q4.740503587736464 -4.430999782561426 4.955753859534681 -3.9212498369210698Q5.171004131332898 -3.4114998912807133 5.171004131332898 -2.675499891280713Q5.171004131332898 -1.9210002174385736 4.950504022613611 -1.4072502717982172Q4.730003913894325 -0.8935003261578605 4.324503587736464 -0.5832502717982171Q3.919003261578604 -0.2730002174385736 3.3690028267014567 -0.1365001087192868Q2.8190023918243097 0.0 2.152001739508589 0.0ZM1.5650045662100456 -0.8750058708414873H2.158502283105023Q2.5705014133507285 -0.8750058708414873 2.9260004348771473 -0.9465057621222006Q3.281499456403566 -1.0180056534029138 3.543748641008915 -1.2092550554468362Q3.805997825614264 -1.4005044574907588 3.9537473363774733 -1.755003261578604Q4.101496847140683 -2.109502065666449 4.101496847140683 -2.675499891280713Q4.101496847140683 -3.237997825614264 3.9537473363774733 -3.5929967384213963Q3.805997825614264 -3.947995651228528 3.5414985866492716 -4.141495107632094Q3.276999347684279 -4.33499456403566 2.923750380517504 -4.406494455316373Q2.5705014133507285 -4.477994346597087 2.158502283105023 -4.477994346597087H1.5650045662100456ZM7.790502283105024 0.096Q7.157502065666449 0.096 6.691751250271798 -0.1664996738421396Q6.226000434877148 -0.4289993476842792 5.970999782561426 -0.8992494020439227Q5.715999130245706 -1.369499456403566 5.715999130245706 -1.9940004348771472Q5.715999130245706 -2.626000434877147 5.992249619482497 -3.0882504892367906Q6.268500108719287 -3.550500543596434 6.731500761035008 -3.8047505979560774Q7.194501413350729 -4.059000652315721 7.756501848227876 -4.059000652315721Q8.23750206566645 -4.059000652315721 8.615502500543597 -3.877750815394651Q8.993502935420745 -3.696500978473581 9.249753424657534 -3.3760008697542947Q9.506003913894325 -3.055500761035008 9.625254185692542 -2.6307501630789303Q9.744504457490759 -2.205999565122853 9.708004348771473 -1.7234981517721244H6.694505762122201Q6.735505979560775 -1.430500543596434 6.845005435964341 -1.2330019569471624Q6.954504892367907 -1.0355033702978909 7.107004131332899 -0.9162539682539683Q7.2595033702978915 -0.7970045662100457 7.434252663622527 -0.7455046749293325Q7.6090019569471625 -0.6940047836486193 7.772501848227876 -0.6940047836486193Q8.077001087192869 -0.6940047836486193 8.291500761035008 -0.7885044574907589Q8.506000434877148 -0.8830041313328985 8.628500108719287 -1.0320034790171777L9.456504457490759 -0.7500013046314417Q9.186503152859318 -0.3429997825614264 8.748252228745379 -0.12349989128071319Q8.310001304631442 0.096 7.790502283105024 0.096ZM6.693505544683627 -2.3720008697542942H8.76199869536856Q8.752998477929985 -2.638500543596434 8.624248749728203 -2.8472494020439227Q8.49549902152642 -3.0559982604914113 8.279499891280715 -3.177247227658187Q8.063500761035009 -3.298496194824962 7.774502283105024 -3.298496194824962Q7.533002826701457 -3.298496194824962 7.304503587736464 -3.210246575342466Q7.076004348771472 -3.1219969558599696 6.915005001087193 -2.9207479886931944Q6.754005653402914 -2.7194990215264188 6.693505544683627 -2.3720008697542942ZM11.924002609262883 0.1005001087192868Q11.508000869754294 0.1005001087192868 11.14 -0.014250054359643397Q10.771999130245705 -0.1290002174385736 10.498498804087845 -0.3535003261578604Q10.224998477929985 -0.5780004348771473 10.084498369210698 -0.9050002174385736L10.948503587736464 -1.2215020656664493Q11.027503370297891 -0.9385031528593172 11.313502935420743 -0.7907536420961078Q11.599502500543597 -0.6430041313328984 11.93650271798217 -0.6430041313328984Q12.265501195912154 -0.6430041313328984 12.510500543596434 -0.7705031528593171Q12.755499891280714 -0.898002174385736 12.755499891280714 -1.1285009784735813Q12.755499891280714 -1.3124992389649923 12.59250097847358 -1.4214985866492715Q12.42950206566645 -1.5304979343335507 12.043503370297891 -1.6039973907371168L11.458000434877148 -1.7169976081756904Q11.094999782561427 -1.7924974994564036 10.813499456403566 -1.9317477712546207Q10.531999130245705 -2.0709980430528376 10.371499021526418 -2.2982483148510546Q10.210998912807131 -2.5254985866492716 10.210998912807131 -2.855998260491411Q10.210998912807131 -3.244999347684279 10.448249619482496 -3.5149997825614263Q10.685500326157861 -3.7850002174385735 11.071751250271799 -3.9255003261578603Q11.458002174385737 -4.0660004348771475 11.905502935420744 -4.0660004348771475Q12.446504022613611 -4.0660004348771475 12.911005001087194 -3.8597503805175037Q13.375505979560774 -3.6535003261578605 13.586506631876494 -3.1844992389649924L12.729501195912155 -2.87149728201783Q12.634501413350728 -3.101496847140683 12.404752337464666 -3.214246575342466Q12.175003261578604 -3.3269963035442487 11.871003261578604 -3.3269963035442487Q11.544003479017178 -3.3269963035442487 11.350754511850402 -3.211746901500326Q11.157505544683627 -3.0964974994564036 11.157505544683627 -2.898998912807132Q11.157505544683627 -2.732500108719287 11.291754729288975 -2.6412507066753643Q11.426003913894325 -2.550001304631442 11.725002826701457 -2.4880017395085887L12.328506196999347 -2.3705014133507283Q12.780507066753643 -2.2825014133507286 13.086757121113287 -2.1442513589910854Q13.39300717547293 -2.0060013046314418 13.549756903674712 -1.7780013046314416Q13.706506631876495 -1.5500013046314416 13.706506631876495 -1.187501630789302Q13.706506631876495 -0.7780004348771472 13.465756033920417 -0.4885001087192868Q13.22500543596434 -0.1989997825614264 12.822754511850402 -0.049249836921069795Q12.420503587736464 0.1005001087192868 11.924002609262883 0.1005001087192868ZM15.797503805175038 0.0Q15.358502283105022 0.0 15.10725114155251 -0.0805001087192868Q14.856 -0.1610002174385736 14.752999347684279 -0.3927505979560774Q14.649998695368557 -0.6245009784735812 14.649998695368557 -1.0640017395085888V-3.211494672754947H13.986998912807131V-3.968H14.649998695368557V-4.96H15.62800608828006V-3.968H16.474506631876494V-3.211494672754947H15.62800608828006V-1.2930045662100456Q15.62800608828006 -0.9885053272450534 15.722006523157209 -0.9027553816046967Q15.816006958034356 -0.8170054359643402 16.09450750163079 -0.8170054359643402H16.474506631876494V0.0ZM17.56850097847358 0.0V-3.2159947814742336H16.953499456403566V-3.968H18.55100848010437V0.0ZM17.998004783648618 -4.665998695368558Q17.744003479017177 -4.665998695368558 17.56000260926288 -4.849999565122853Q17.376001739508588 -5.034000434877147 17.376001739508588 -5.286942890398168Q17.376001739508588 -5.5500030441400305 17.56000260926288 -5.7300039138943255Q17.744003479017177 -5.91000478364862 17.9969459345382 -5.91000478364862Q18.26000608828006 -5.91000478364862 18.440006958034356 -5.72942325470474Q18.62000782778865 -5.54884172576086 18.62000782778865 -5.288001739508589Q18.62000782778865 -5.034000434877147 18.439426298844772 -4.849999565122853Q18.25884476990089 -4.665998695368558 17.998004783648618 -4.665998695368558ZM19.54649793433355 0.0V-3.968H20.362005653402914L20.524505327245055 -3.4085009784735814Q20.623005001087193 -3.5780004348771475 20.795005001087194 -3.723750380517504Q20.967005001087195 -3.8695003261578607 21.211005001087194 -3.9642504892367905Q21.455005001087194 -4.059000652315721 21.773004566210048 -4.059000652315721Q22.271005001087193 -4.059000652315721 22.561255055446836 -3.8670006523157205Q22.85150510980648 -3.675000652315721 22.975005001087194 -3.3170002174385735Q23.098504892367906 -2.9589997825614263 23.098504892367906 -2.4579986953685586V0.0H22.120497499456405V-2.19949728201783Q22.120497499456405 -2.4899969558599695 22.077997825614265 -2.734246575342466Q22.035498151772124 -2.978496194824962 21.88349902152642 -3.127245923026745Q21.731499891280713 -3.275995651228528 21.39700108719287 -3.275995651228528Q20.967502500543596 -3.275995651228528 20.746003913894327 -2.975496412263536Q20.524505327245055 -2.6749971732985434 20.524505327245055 -2.088998477929985V0.0ZM25.162998912807133 0.096Q24.78699891280713 0.096 24.473248967166775 -0.0427501630789302Q24.15949902152642 -0.1815003261578604 23.97374907588606 -0.4380004348771472Q23.787999130245705 -0.694500543596434 23.787999130245705 -1.054500543596434Q23.787999130245705 -1.526500543596434 24.118249184605347 -1.814500543596434Q24.44849923896499 -2.102500543596434 25.055999130245706 -2.2602504892367907Q25.66349902152642 -2.4180004348771473 26.484498369210698 -2.484500108719287V-2.5880008697542944Q26.484498369210698 -2.9624996738421396 26.28474885844749 -3.161748206131768Q26.08499934768428 -3.360996738421396 25.689501195912154 -3.360996738421396Q25.389002826701457 -3.360996738421396 25.181753424657536 -3.223997390737117Q24.974504022613612 -3.0869980430528376 24.910504022613612 -2.8259986953685585L24.05099891280713 -3.117001087192868Q24.22899934768428 -3.5415003261578604 24.668 -3.8002504892367908Q25.107000652315723 -4.059000652315721 25.71500239182431 -4.059000652315721Q26.561502935420744 -4.059000652315721 26.989254185692545 -3.674250924113938Q27.41700543596434 -3.289501195912155 27.41700543596434 -2.424V-1.5275007610350075Q27.41700543596434 -1.2400017395085887 27.434755381604695 -0.956251358991085Q27.452505327245053 -0.6725009784735813 27.48625527288541 -0.4277503805175038Q27.520005218525768 -0.1829997825614264 27.556505327245056 0.0H26.652498369210697L26.501498586649273 -0.5079991302457056Q26.301997825614265 -0.202998912807132 25.96549771689498 -0.053499456403566Q25.62899760817569 0.096 25.162998912807133 0.096ZM25.48600304414003 -0.6065040226136116Q25.76550206566645 -0.6065040226136116 25.99250097847358 -0.7005035877364644Q26.219499891280712 -0.7945031528593172 26.351999130245705 -1.0185022831050228Q26.484498369210698 -1.2425014133507284 26.484498369210698 -1.6320000000000001V-1.8449976081756905Q25.69350206566645 -1.7829980430528376 25.256754076973255 -1.6212489671667756Q24.82000608828006 -1.4594998912807133 24.82000608828006 -1.1110015220700151Q24.82000608828006 -0.8840026092628832 25.002755381604697 -0.7452533159382474Q25.185504674929334 -0.6065040226136116 25.48600304414003 -0.6065040226136116ZM29.773503805175036 0.0Q29.33450228310502 0.0 29.08325114155251 -0.0805001087192868Q28.832 -0.1610002174385736 28.72899934768428 -0.3927505979560774Q28.62599869536856 -0.6245009784735812 28.62599869536856 -1.0640017395085888V-3.211494672754947H27.96299891280713V-3.968H28.62599869536856V-4.96H29.60400608828006V-3.968H30.450506631876493V-3.211494672754947H29.60400608828006V-1.2930045662100456Q29.60400608828006 -0.9885053272450534 29.698006523157204 -0.9027553816046967Q29.792006958034353 -0.8170054359643402 30.07050750163079 -0.8170054359643402H30.450506631876493V0.0ZM31.54450097847358 0.0V-3.2159947814742336H30.929499456403565V-3.968H32.52700848010437V0.0ZM31.974004783648617 -4.665998695368558Q31.720003479017176 -4.665998695368558 31.53600260926288 -4.849999565122853Q31.352001739508587 -5.034000434877147 31.352001739508587 -5.286942890398168Q31.352001739508587 -5.5500030441400305 31.53600260926288 -5.7300039138943255Q31.720003479017176 -5.91000478364862 31.9729459345382 -5.91000478364862Q32.236006088280064 -5.91000478364862 32.41600695803436 -5.72942325470474Q32.59600782778865 -5.54884172576086 32.59600782778865 -5.288001739508589Q32.59600782778865 -5.034000434877147 32.415426298844764 -4.849999565122853Q32.23484476990089 -4.665998695368558 31.974004783648617 -4.665998695368558ZM35.30050184822788 0.096Q34.9160008697543 0.096 34.557500326157864 -0.026250054359643407Q34.19899978256143 -0.14850010871928682 33.911749510763215 -0.4027501630789302Q33.624499238964994 -0.6570002174385736 33.45424918460535 -1.051250271798217Q33.28399913024571 -1.4455003261578605 33.28399913024571 -1.9815003261578605Q33.28399913024571 -2.5220004348771474 33.45424918460535 -2.9140004348771473Q33.624499238964994 -3.3060004348771472 33.911749510763215 -3.5602504892367905Q34.19899978256143 -3.814500543596434 34.557500326157864 -3.9367505979560775Q34.9160008697543 -4.059000652315721 35.30050184822788 -4.059000652315721Q35.685002826701464 -4.059000652315721 36.0435033702979 -3.9367505979560775Q36.402003913894326 -3.814500543596434 36.68925418569255 -3.5602504892367905Q36.97650445749076 -3.3060004348771472 37.1467545118504 -2.9140004348771473Q37.31700456621005 -2.5220004348771474 37.31700456621005 -1.9815003261578605Q37.31700456621005 -1.4455003261578605 37.1467545118504 -1.051250271798217Q36.97650445749076 -0.6570002174385736 36.68925418569255 -0.4027501630789302Q36.402003913894326 -0.14850010871928682 36.0435033702979 -0.026250054359643407Q35.685002826701464 0.096 35.30050184822788 0.096ZM35.30050184822788 -0.6940047836486193Q35.56850097847359 -0.6940047836486193 35.79600000000001 -0.8230041313328984Q36.02349902152642 -0.9520034790171776 36.16399826049141 -1.2355025005435964Q36.30449749945641 -1.5190015220700153 36.30449749945641 -1.9815003261578605Q36.30449749945641 -2.4439991302457056 36.16399826049141 -2.7274981517721244Q36.02349902152642 -3.010997173298543 35.79600000000001 -3.1399965209828222Q35.56850097847359 -3.2689958686671017 35.30050184822788 -3.2689958686671017Q35.03600260926289 -3.2689958686671017 34.80675364209611 -3.1399965209828222Q34.57750467492934 -3.010997173298543 34.437005435964345 -2.7274981517721244Q34.29650619699935 -2.4439991302457056 34.29650619699935 -1.9815003261578605Q34.29650619699935 -1.5190015220700153 34.437005435964345 -1.2355025005435964Q34.57750467492934 -0.9520034790171776 34.80675364209611 -0.8230041313328984Q35.03600260926289 -0.6940047836486193 35.30050184822788 -0.6940047836486193ZM38.05849793433355 0.0V-3.968H38.87400565340291L39.03650532724505 -3.4085009784735814Q39.135005001087194 -3.5780004348771475 39.30700500108719 -3.723750380517504Q39.47900500108719 -3.8695003261578607 39.72300500108719 -3.9642504892367905Q39.96700500108719 -4.059000652315721 40.28500456621004 -4.059000652315721Q40.78300500108719 -4.059000652315721 41.073255055446836 -3.8670006523157205Q41.363505109806475 -3.675000652315721 41.48700500108719 -3.3170002174385735Q41.610504892367906 -2.9589997825614263 41.610504892367906 -2.4579986953685586V0.0H40.6324974994564V-2.19949728201783Q40.6324974994564 -2.4899969558599695 40.58999782561426 -2.734246575342466Q40.547498151772125 -2.978496194824962 40.39549902152642 -3.127245923026745Q40.24349989128071 -3.275995651228528 39.90900108719286 -3.275995651228528Q39.479502500543596 -3.275995651228528 39.25800391389433 -2.975496412263536Q39.03650532724505 -2.6749971732985434 39.03650532724505 -2.088998477929985V0.0ZM45.002497934333554 0.0V-3.968H45.81800565340291L45.980505327245055 -3.4085009784735814Q46.0790050010872 -3.5780004348771475 46.251005001087194 -3.723750380517504Q46.42300500108719 -3.8695003261578607 46.66700500108719 -3.9642504892367905Q46.91100500108719 -4.059000652315721 47.229004566210044 -4.059000652315721Q47.72700500108719 -4.059000652315721 48.01725505544684 -3.8670006523157205Q48.30750510980648 -3.675000652315721 48.43100500108719 -3.3170002174385735Q48.55450489236791 -2.9589997825614263 48.55450489236791 -2.4579986953685586V0.0H47.5764974994564V-2.19949728201783Q47.5764974994564 -2.4899969558599695 47.533997825614264 -2.734246575342466Q47.49149815177213 -2.978496194824962 47.33949902152642 -3.127245923026745Q47.187499891280716 -3.275995651228528 46.853001087192865 -3.275995651228528Q46.4235025005436 -3.275995651228528 46.20200391389433 -2.975496412263536Q45.980505327245055 -2.6749971732985434 45.980505327245055 -2.088998477929985V0.0ZM51.30050184822788 0.096Q50.9160008697543 0.096 50.557500326157864 -0.026250054359643407Q50.19899978256143 -0.14850010871928682 49.911749510763215 -0.4027501630789302Q49.624499238964994 -0.6570002174385736 49.45424918460535 -1.051250271798217Q49.28399913024571 -1.4455003261578605 49.28399913024571 -1.9815003261578605Q49.28399913024571 -2.5220004348771474 49.45424918460535 -2.9140004348771473Q49.624499238964994 -3.3060004348771472 49.911749510763215 -3.5602504892367905Q50.19899978256143 -3.814500543596434 50.557500326157864 -3.9367505979560775Q50.9160008697543 -4.059000652315721 51.30050184822788 -4.059000652315721Q51.685002826701464 -4.059000652315721 52.0435033702979 -3.9367505979560775Q52.402003913894326 -3.814500543596434 52.68925418569255 -3.5602504892367905Q52.97650445749076 -3.3060004348771472 53.1467545118504 -2.9140004348771473Q53.31700456621005 -2.5220004348771474 53.31700456621005 -1.9815003261578605Q53.31700456621005 -1.4455003261578605 53.1467545118504 -1.051250271798217Q52.97650445749076 -0.6570002174385736 52.68925418569255 -0.4027501630789302Q52.402003913894326 -0.14850010871928682 52.0435033702979 -0.026250054359643407Q51.685002826701464 0.096 51.30050184822788 0.096ZM51.30050184822788 -0.6940047836486193Q51.56850097847359 -0.6940047836486193 51.79600000000001 -0.8230041313328984Q52.02349902152642 -0.9520034790171776 52.16399826049141 -1.2355025005435964Q52.30449749945641 -1.5190015220700153 52.30449749945641 -1.9815003261578605Q52.30449749945641 -2.4439991302457056 52.16399826049141 -2.7274981517721244Q52.02349902152642 -3.010997173298543 51.79600000000001 -3.1399965209828222Q51.56850097847359 -3.2689958686671017 51.30050184822788 -3.2689958686671017Q51.03600260926289 -3.2689958686671017 50.80675364209611 -3.1399965209828222Q50.57750467492934 -3.010997173298543 50.437005435964345 -2.7274981517721244Q50.29650619699935 -2.4439991302457056 50.29650619699935 -1.9815003261578605Q50.29650619699935 -1.5190015220700153 50.437005435964345 -1.2355025005435964Q50.57750467492934 -0.9520034790171776 50.80675364209611 -0.8230041313328984Q51.03600260926289 -0.6940047836486193 51.30050184822788 -0.6940047836486193ZM55.44550380517504 0.0Q55.00650228310503 0.0 54.75525114155252 -0.0805001087192868Q54.504000000000005 -0.1610002174385736 54.400999347684284 -0.3927505979560774Q54.29799869536856 -0.6245009784735812 54.29799869536856 -1.0640017395085888V-3.211494672754947H53.634998912807134V-3.968H54.29799869536856V-4.96H55.27600608828006V-3.968H56.1225066318765V-3.211494672754947H55.27600608828006V-1.2930045662100456Q55.27600608828006 -0.9885053272450534 55.370006523157215 -0.9027553816046967Q55.46400695803436 -0.8170054359643402 55.74250750163079 -0.8170054359643402H56.1225066318765V0.0ZM59.58449923896499 0.0V-3.211494672754947H58.921499456403566V-3.968H59.58449923896499V-4.588498369210698Q59.58449923896499 -5.032499238964992 59.70950032615786 -5.285999565122853Q59.83450141335073 -5.539499891280713 60.12500282670146 -5.641749945640356Q60.415504240052186 -5.744 60.909505544683626 -5.744H61.40900717547293V-4.955494672754947H61.0380082626658Q60.7460073929115 -4.955494672754947 60.654257012394 -4.87399521635138Q60.562506631876495 -4.792495759947815 60.562506631876495 -4.528996738421396V-3.968H61.40900717547293V-3.211494672754947H60.562506631876495V0.0ZM63.67650184822788 0.096Q63.2920008697543 0.096 62.93350032615786 -0.026250054359643407Q62.57499978256143 -0.14850010871928682 62.287749510763206 -0.4027501630789302Q62.00049923896499 -0.6570002174385736 61.83024918460535 -1.051250271798217Q61.65999913024571 -1.4455003261578605 61.65999913024571 -1.9815003261578605Q61.65999913024571 -2.5220004348771474 61.83024918460535 -2.9140004348771473Q62.00049923896499 -3.3060004348771472 62.287749510763206 -3.5602504892367905Q62.57499978256143 -3.814500543596434 62.93350032615786 -3.9367505979560775Q63.2920008697543 -4.059000652315721 63.67650184822788 -4.059000652315721Q64.06100282670145 -4.059000652315721 64.41950337029789 -3.9367505979560775Q64.77800391389432 -3.814500543596434 65.06525418569254 -3.5602504892367905Q65.35250445749077 -3.3060004348771472 65.52275451185041 -2.9140004348771473Q65.69300456621005 -2.5220004348771474 65.69300456621005 -1.9815003261578605Q65.69300456621005 -1.4455003261578605 65.52275451185041 -1.051250271798217Q65.35250445749077 -0.6570002174385736 65.06525418569254 -0.4027501630789302Q64.77800391389432 -0.14850010871928682 64.41950337029789 -0.026250054359643407Q64.06100282670145 0.096 63.67650184822788 0.096ZM63.67650184822788 -0.6940047836486193Q63.944500978473584 -0.6940047836486193 64.172 -0.8230041313328984Q64.39949902152642 -0.9520034790171776 64.53999826049142 -1.2355025005435964Q64.68049749945641 -1.5190015220700153 64.68049749945641 -1.9815003261578605Q64.68049749945641 -2.4439991302457056 64.53999826049142 -2.7274981517721244Q64.39949902152642 -3.010997173298543 64.172 -3.1399965209828222Q63.944500978473584 -3.2689958686671017 63.67650184822788 -3.2689958686671017Q63.412002609262885 -3.2689958686671017 63.18275364209611 -3.1399965209828222Q62.953504674929334 -3.010997173298543 62.81300543596434 -2.7274981517721244Q62.67250619699935 -2.4439991302457056 62.67250619699935 -1.9815003261578605Q62.67250619699935 -1.5190015220700153 62.81300543596434 -1.2355025005435964Q62.953504674929334 -0.9520034790171776 63.18275364209611 -0.8230041313328984Q63.412002609262885 -0.6940047836486193 63.67650184822788 -0.6940047836486193ZM67.74899934768428 0.096Q67.24899847792999 0.096 66.95774820613177 -0.09999999999999999Q66.66649793433355 -0.296 66.54249793433355 -0.6597503805175038Q66.41849793433356 -1.0235007610350075 66.41849793433356 -1.5210019569471624V-3.968H67.39650532724505V-1.7795033702978909Q67.39650532724505 -1.4890036964557511 67.43675494672755 -1.2385040226136117Q67.47700456621004 -0.988004348771472 67.62775385953468 -0.8410045662100456Q67.77850315285932 -0.6940047836486193 68.10250228310503 -0.6940047836486193Q68.52500108719288 -0.6940047836486193 68.7322496194825 -0.974253533376821Q68.93949815177213 -1.2545022831050228 68.93949815177213 -1.8415011959121548V-3.968H69.92200565340292V0.0H69.10749815177212L68.93949815177213 -0.5669997825614264Q68.76699804305284 -0.2744996738421396 68.49474842357034 -0.08924983692106979Q68.22249880408785 0.096 67.74899934768428 0.096ZM70.90649793433354 0.0V-3.968H71.72200565340292L71.88450532724505 -3.4085009784735814Q71.9830050010872 -3.5780004348771475 72.15500500108719 -3.723750380517504Q72.32700500108719 -3.8695003261578607 72.57100500108719 -3.9642504892367905Q72.81500500108719 -4.059000652315721 73.13300456621005 -4.059000652315721Q73.63100500108719 -4.059000652315721 73.92125505544684 -3.8670006523157205Q74.21150510980648 -3.675000652315721 74.33500500108718 -3.3170002174385735Q74.4585048923679 -2.9589997825614263 74.4585048923679 -2.4579986953685586V0.0H73.4804974994564V-2.19949728201783Q73.4804974994564 -2.4899969558599695 73.43799782561426 -2.734246575342466Q73.39549815177212 -2.978496194824962 73.24349902152642 -3.127245923026745Q73.0914998912807 -3.275995651228528 72.75700108719286 -3.275995651228528Q72.32750250054359 -3.275995651228528 72.10600391389431 -2.975496412263536Q71.88450532724505 -2.6749971732985434 71.88450532724505 -2.088998477929985V0.0ZM76.91899978256143 0.096Q76.43499891280715 0.096 76.0407488584475 -0.1547501630789302Q75.64649880408786 -0.4055003261578604 75.41724896716678 -0.874500543596434Q75.18799913024571 -1.3435007610350076 75.18799913024571 -1.9950006523157209Q75.18799913024571 -2.646500543596434 75.41724896716678 -3.106500543596434Q75.64649880408786 -3.566500543596434 76.0407488584475 -3.8127505979560774Q76.43499891280715 -4.059000652315721 76.91899978256143 -4.059000652315721Q77.30999782561427 -4.059000652315721 77.64349815177214 -3.8845009784735813Q77.97699847793 -3.7100013046314415 78.16199869536857 -3.389001087192868V-5.664H79.14000608828007V-1.5275007610350075Q79.14000608828007 -1.273499456403566 79.16450619699935 -0.8742491846053491Q79.18900630571864 -0.474998912807132 79.27600608828007 0.0H78.34699891280714L78.184499238965 -0.5459986953685584Q77.96149771689498 -0.22599869536855838 77.633497716895 -0.06499934768427919Q77.30549771689499 0.096 76.91899978256143 0.096ZM77.21650271798218 -0.6870050010871929Q77.50200130463145 -0.6870050010871929 77.72250054359644 -0.8292541856925418Q77.94299978256143 -0.9715033702978908 78.07174951076321 -1.2585022831050228Q78.200499238965 -1.5455011959121547 78.200499238965 -1.9815003261578605Q78.200499238965 -2.634998912807132 77.91949989128071 -2.95549728201783Q77.63850054359644 -3.275995651228528 77.21650271798218 -3.275995651228528Q76.79000478364863 -3.275995651228528 76.50900543596435 -2.944247010219613Q76.22800608828007 -2.612498369210698 76.22800608828007 -1.9950006523157209Q76.22800608828007 -1.37650271798217 76.50900543596435 -1.0317538595346814Q76.79000478364863 -0.6870050010871929 77.21650271798218 -0.6870050010871929Z" fill="#111111"/></g><path d="M190 130 Q205 120 215 140 T240 160 T255 190" fill="none" stroke="#111111" stroke-width="2.5" stroke-dasharray="5 5"/><path d="M248 182 l14 14 m0 -14 l-14 14" stroke="#111111" stroke-width="4"/><path d="M192,132 C189.6,126.0 186.0,123.6 186.0,117.6 A6.0,6.0 0 1 1 198.0,117.6 C198.0,123.6 194.4,126.0 192,132Z" fill="#111111"/><circle cx="192" cy="117.6" r="2.4" fill="#ffffff"/><path d="M184 210 l16 -10 l14 10 l20 -14" fill="none" stroke="#ffffff" stroke-width="6"/></g><path d="M92.0,198.0 L90.0,262.0 L106.0,262.0 L108.0,218.0 L112.0,218.0 L116.0,262.0 L132.0,262.0 L128.0,198.0Z" fill="#111111" stroke="#111111" stroke-width="3"/><path d="M86.0,268.0 Q86.0,258.0 98.0,258.0 L108.0,260.0 Q114.0,264.0 112.0,268.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M114.0,268.0 Q112.0,260.0 122.0,258.0 L132.0,258.0 Q142.0,260.0 140.0,268.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M132.0,150.0 Q144.0,178.0 138.0,198.0" fill="none" stroke="#111111" stroke-width="18.0"/><path d="M132.0,150.0 Q144.0,178.0 138.0,198.0" fill="none" stroke="#ffffff" stroke-width="12.0"/><path d="M84.0,196.0 L82.0,156.0 Q84.0,140.0 100.0,138.0 L120.0,138.0 Q136.0,140.0 138.0,156.0 L136.0,196.0 Q110.0,202.0 84.0,196.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M88.0,150.0 Q80.0,172.0 96.0,172.0 Q114.0,168.0 114.0,140.0" fill="none" stroke="#111111" stroke-width="18.0"/><path d="M88.0,150.0 Q80.0,172.0 96.0,172.0 Q114.0,168.0 114.0,140.0" fill="none" stroke="#ffffff" stroke-width="12.0"/><circle cx="114.0" cy="138.0" r="7.0" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="138.0" cy="198.0" r="7.0" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M104.0,134.0 L104.0,140.0 M116.0,134.0 L116.0,140.0" stroke="#111111" stroke-width="3"/><circle cx="110.0" cy="118.0" r="20.0" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="96.0" cy="104.0" r="9.0" fill="#111111"/><circle cx="106.0" cy="98.0" r="10.0" fill="#111111"/><circle cx="118.0" cy="99.0" r="10.0" fill="#111111"/><circle cx="127.0" cy="108.0" r="8.0" fill="#111111"/><circle cx="90.0" cy="116.0" r="7.0" fill="#111111"/><circle cx="112.0" cy="108.0" r="8.0" fill="#111111"/><circle cx="103.0" cy="118.0" r="2.2" fill="#111111"/><circle cx="117.0" cy="118.0" r="2.2" fill="#111111"/><path d="M107.0,128.0 Q110.0,126.0 113.0,128.0" fill="none" stroke="#111111" stroke-width="2.5"/><path d="M136.0,50.0 H164.0 Q174.0,50.0 174.0,60.0 V80.0 Q174.0,90.0 164.0,90.0 H148 L136,102.0 L140,90.0 H136.0 Q126.0,90.0 126.0,80.0 V60.0 Q126.0,50.0 136.0,50.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path transform="translate(141.0 82.0)" d="M4.89 -7.2299999999999995V-7.6499999999999995Q4.89 -8.969999999999999 5.234999999999999 -9.975Q5.58 -10.98 6.404999999999999 -11.715Q7.2299999999999995 -12.45 8.67 -12.93Q10.26 -13.469999999999999 10.89 -13.95Q11.52 -14.43 11.52 -15.0Q11.52 -15.6 10.77 -16.05Q10.02 -16.5 8.73 -16.5Q7.92 -16.5 7.154999999999999 -16.275Q6.39 -16.05 5.789999999999999 -15.585Q5.1899999999999995 -15.12 4.859999999999999 -14.399999999999999L0.44999999999999996 -16.05Q1.05 -17.46 2.235 -18.42Q3.42 -19.38 5.085 -19.89Q6.75 -20.4 8.79 -20.4Q10.83 -20.4 12.629999999999999 -19.799999999999997Q14.43 -19.2 15.54 -18.03Q16.65 -16.86 16.65 -15.09Q16.65 -14.1 16.305 -13.29Q15.959999999999999 -12.48 15.105 -11.775Q14.25 -11.07 12.66 -10.32Q11.49 -9.78 10.89 -9.36Q10.29 -8.94 10.079999999999998 -8.55Q9.87 -8.16 9.87 -7.68V-7.2299999999999995ZM7.41 0.36Q6.12 0.36 5.205 -0.5549999999999999Q4.29 -1.47 4.29 -2.76Q4.29 -4.08 5.205 -4.965Q6.12 -5.85 7.41 -5.85Q8.67 -5.85 9.585 -4.965Q10.5 -4.08 10.5 -2.76Q10.5 -1.47 9.585 -0.5549999999999999Q8.67 0.36 7.41 0.36Z" fill="#111111"/><path d="M352 268V170" stroke="#111111" stroke-width="6"/><path d="M318 176H372L382 186L372 196H318Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path transform="translate(330.0 191.0)" d="M4.4719999999999995 0.0V-1.768H0.26V-3.2889999999999997L4.4719999999999995 -8.684H6.617V-3.653H7.734999999999999V-1.768H6.617V0.0ZM2.5869999999999997 -3.653H4.4719999999999995V-5.888999999999999ZM12.48 0.156Q11.258 0.156 10.413 -0.40299999999999997Q9.568 -0.962 9.139 -1.976Q8.709999999999999 -2.9899999999999998 8.709999999999999 -4.3549999999999995Q8.709999999999999 -5.733 9.139 -6.740499999999999Q9.568 -7.747999999999999 10.413 -8.294Q11.258 -8.84 12.48 -8.84Q13.715 -8.84 14.5535 -8.294Q15.392 -7.747999999999999 15.821 -6.740499999999999Q16.25 -5.733 16.25 -4.3549999999999995Q16.25 -2.9899999999999998 15.821 -1.976Q15.392 -0.962 14.5535 -0.40299999999999997Q13.715 0.156 12.48 0.156ZM12.48 -1.404Q12.792 -1.404 13.0455 -1.5145Q13.299 -1.625 13.494 -1.859L10.959 -5.499Q10.907 -5.213 10.881 -4.9205000000000005Q10.855 -4.628 10.855 -4.367999999999999Q10.855 -3.3409999999999997 11.0565 -2.6845Q11.258 -2.028 11.628499999999999 -1.716Q11.998999999999999 -1.404 12.48 -1.404ZM11.517999999999999 -6.851 14.027 -3.2369999999999997Q14.065999999999999 -3.484 14.0855 -3.7635Q14.105 -4.043 14.105 -4.367999999999999Q14.105 -4.797 14.04 -5.297499999999999Q13.975 -5.798 13.799499999999998 -6.253Q13.623999999999999 -6.707999999999999 13.305499999999999 -7.000499999999999Q12.986999999999998 -7.292999999999999 12.48 -7.292999999999999Q12.168 -7.292999999999999 11.934 -7.175999999999999Q11.7 -7.058999999999999 11.517999999999999 -6.851ZM21.268 0.0V-1.768H17.056V-3.2889999999999997L21.268 -8.684H23.413V-3.653H24.531V-1.768H23.413V0.0ZM19.383 -3.653H21.268V-5.888999999999999Z" fill="#111111"/></g></svg>', "error-500": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="Browser window with an unplugged cable \u2014 something went wrong on our side"><title>Browser window with an unplugged cable \u2014 something went wrong on our side</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M54,268 Q45.519999999999996,251.68 39.6,240.8 Q48.08,257.12 54,268Z" fill="#a3a3a3"/><path d="M54,268 Q48.4,244.96 54.0,229.6 Q59.6,252.64 54,268Z" fill="#a3a3a3"/><path d="M54,268 Q51.28,253.6 68.4,244.0 Q71.11999999999999,258.4 54,268Z" fill="#a3a3a3"/><path d="M54,268 Q43.6,258.4 30.0,252.0 Q40.4,261.6 54,268Z" fill="#a3a3a3"/><path d="M54,268 Q53.199999999999996,259.36 78.0,253.6 Q78.8,262.24 54,268Z" fill="#a3a3a3"/><path d="M356,268 Q352.94,249.64 372.2,237.4 Q375.26,255.76 356,268Z" fill="#a3a3a3"/><path d="M356,268 Q349.7,242.07999999999998 356.0,224.8 Q362.3,250.72 356,268Z" fill="#a3a3a3"/><path d="M356,268 Q346.46,251.8 339.8,241.0 Q349.34000000000003,257.2 356,268Z" fill="#a3a3a3"/><path d="M356,268 Q355.09999999999997,257.2 383.0,250.0 Q383.90000000000003,260.8 356,268Z" fill="#a3a3a3"/><path d="M356,268 Q344.3,258.28 329.0,251.8 Q340.7,261.52 356,268Z" fill="#a3a3a3"/><g transform="rotate(-4 192.0 123.0)"><rect x="98" y="54" width="200" height="150" rx="10" fill="#ffffff" stroke="#111111" stroke-width="3"/><rect x="92" y="48" width="200" height="150" rx="10" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M92 74H292" stroke="#111111" stroke-width="3"/><circle cx="108" cy="61" r="4" fill="#111111"/><circle cx="121" cy="61" r="4" fill="#a3a3a3"/><circle cx="134" cy="61" r="4" fill="#a3a3a3"/><path transform="translate(108.0 128.0)" d="M16.632 0.672Q13.496 0.672 10.668 -0.22400000000000003Q7.84 -1.12 5.656 -2.996Q3.472 -4.872 2.184 -7.672000000000001L10.08 -10.584Q10.864 -7.952 12.628 -7.0280000000000005Q14.392 -6.104 16.128 -6.104Q18.032 -6.104 19.488 -6.832000000000001Q20.944 -7.5600000000000005 21.756 -8.96Q22.568 -10.36 22.568 -12.376Q22.568 -14.56 21.700000000000003 -15.96Q20.832 -17.36 19.404 -18.032Q17.976 -18.704 16.296 -18.704Q15.064 -18.704 13.943999999999999 -18.312Q12.824 -17.92 11.928 -17.164Q11.032 -16.408 10.36 -15.176L2.24 -18.256L4.5920000000000005 -37.408H30.296V-30.016000000000002H12.264000000000001L11.48 -23.688Q12.768 -24.472 14.84 -24.976Q16.912 -25.48 18.816 -25.48Q22.176000000000002 -25.48 25.200000000000003 -24.024Q28.224 -22.568 30.156 -19.684Q32.088 -16.8 32.088 -12.376Q32.088 -8.120000000000001 29.96 -5.208Q27.832 -2.2960000000000003 24.304000000000002 -0.812Q20.776 0.672 16.632 0.672ZM53.144 0.672Q47.879999999999995 0.672 44.239999999999995 -1.736Q40.6 -4.144 38.751999999999995 -8.512Q36.903999999999996 -12.88 36.903999999999996 -18.76Q36.903999999999996 -24.696 38.751999999999995 -29.036Q40.6 -33.376 44.239999999999995 -35.727999999999994Q47.879999999999995 -38.08 53.144 -38.08Q58.464 -38.08 62.076 -35.727999999999994Q65.688 -33.376 67.536 -29.036Q69.384 -24.696 69.384 -18.76Q69.384 -12.88 67.536 -8.512Q65.688 -4.144 62.076 -1.736Q58.464 0.672 53.144 0.672ZM53.144 -6.048Q54.488 -6.048 55.58 -6.524Q56.672 -7.0 57.512 -8.008000000000001L46.592 -23.688Q46.368 -22.456 46.256 -21.195999999999998Q46.144 -19.936 46.144 -18.816Q46.144 -14.392 47.012 -11.564Q47.879999999999995 -8.736 49.476 -7.392Q51.072 -6.048 53.144 -6.048ZM49.0 -29.512 59.808 -13.944Q59.976 -15.008000000000001 60.06 -16.212Q60.144000000000005 -17.416 60.144000000000005 -18.816Q60.144000000000005 -20.664 59.864000000000004 -22.82Q59.584 -24.976 58.828 -26.936Q58.072 -28.896 56.7 -30.156Q55.328 -31.416 53.144 -31.416Q51.8 -31.416 50.792 -30.912Q49.784 -30.408 49.0 -29.512ZM90.328 0.672Q85.06400000000001 0.672 81.424 -1.736Q77.784 -4.144 75.936 -8.512Q74.08800000000001 -12.88 74.08800000000001 -18.76Q74.08800000000001 -24.696 75.936 -29.036Q77.784 -33.376 81.424 -35.727999999999994Q85.06400000000001 -38.08 90.328 -38.08Q95.648 -38.08 99.25999999999999 -35.727999999999994Q102.872 -33.376 104.72 -29.036Q106.56800000000001 -24.696 106.56800000000001 -18.76Q106.56800000000001 -12.88 104.72 -8.512Q102.872 -4.144 99.25999999999999 -1.736Q95.648 0.672 90.328 0.672ZM90.328 -6.048Q91.672 -6.048 92.76400000000001 -6.524Q93.85600000000001 -7.0 94.696 -8.008000000000001L83.77600000000001 -23.688Q83.552 -22.456 83.44 -21.195999999999998Q83.328 -19.936 83.328 -18.816Q83.328 -14.392 84.196 -11.564Q85.06400000000001 -8.736 86.66 -7.392Q88.256 -6.048 90.328 -6.048ZM86.184 -29.512 96.992 -13.944Q97.16 -15.008000000000001 97.244 -16.212Q97.328 -17.416 97.328 -18.816Q97.328 -20.664 97.048 -22.82Q96.768 -24.976 96.012 -26.936Q95.256 -28.896 93.884 -30.156Q92.512 -31.416 90.328 -31.416Q88.98400000000001 -31.416 87.976 -30.912Q86.968 -30.408 86.184 -29.512Z" fill="#111111"/><path transform="translate(112.0 152.0)" d="M4.249878234398782 0.168Q3.3381248097412484 0.168 2.5668112633181126 -0.0936255707762557Q1.7954977168949773 -0.3552511415525114 1.2385601217656013 -0.8688767123287672Q0.6816225266362254 -1.3825022831050229 0.4059969558599696 -2.1306270928462707L2.06675799086758 -2.730006088280061Q2.1971324200913243 -2.2750076103500763 2.5270060882800607 -1.959570776255708Q2.8568797564687975 -1.6441339421613395 3.321503805175038 -1.4800715372907154Q3.7861278538812786 -1.3160091324200913 4.305878234398782 -1.3160091324200913Q4.819500761035008 -1.3160091324200913 5.251748858447488 -1.4507579908675798Q5.6839969558599694 -1.5855068493150684 5.955683409436834 -1.8777549467275496Q6.227369863013699 -2.1700030441400306 6.227369863013699 -2.635500761035008Q6.227369863013699 -3.1464992389649926 5.836245053272451 -3.433497716894977Q5.4451202435312025 -3.720496194824962 4.4904992389649925 -3.931369863013699L3.3013759512937595 -4.185993911719939Q2.4666240487062407 -4.367993911719939 1.871185692541857 -4.695681887366819Q1.2757473363774734 -5.0233698630136985 0.9528721461187215 -5.533057838660579Q0.6299969558599696 -6.042745814307458 0.6299969558599696 -6.75062100456621Q0.6299969558599696 -7.387622526636226 0.9165601217656013 -7.89906088280061Q1.203123287671233 -8.410499238964993 1.7114992389649926 -8.77231202435312Q2.219875190258752 -9.134124809741248 2.8901263318112633 -9.327062404870624Q3.5603774733637747 -9.52 4.335628614916287 -9.52Q5.0548797564687975 -9.52 5.728193302891933 -9.319187214611873Q6.401506849315068 -9.118374429223744 6.9400700152207 -8.701873668188735Q7.478633181126332 -8.285372907153729 7.7665083713850835 -7.6124961948249625L6.113622526636226 -7.013117199391172Q5.963123287671233 -7.353491628614917 5.677436834094369 -7.579678843226789Q5.391750380517504 -7.805866057838661 5.017251141552512 -7.920928462709284Q4.642751902587519 -8.035990867579908 4.200876712328768 -8.035990867579908Q3.722252663622527 -8.035990867579908 3.3210669710806697 -7.906491628614916Q2.9198812785388126 -7.776992389649924 2.684945205479452 -7.517993911719939Q2.4500091324200914 -7.258995433789955 2.4500091324200914 -6.879248097412481Q2.4500091324200914 -6.43737595129376 2.7811948249619483 -6.172689497716895Q3.112380517503805 -5.90800304414003 3.69337899543379 -5.777628614916286L4.977878234398783 -5.501129375951294Q5.8738782343987825 -5.306879756468797 6.564254185692542 -5.007630136986301Q7.254630136986301 -4.708380517503805 7.651006088280061 -4.182505327245053Q8.04738203957382 -3.6566301369863012 8.04738203957382 -2.7912541856925417Q8.04738203957382 -1.8401278538812786 7.515818873668189 -1.1808143074581432Q6.984255707762557 -0.5215007610350076 6.122817351598174 -0.1767503805175038Q5.26137899543379 0.168 4.249878234398782 0.168ZM12.52737899543379 0.168Q11.419628614916286 0.168 10.604564687975646 -0.2913744292237443Q9.789500761035008 -0.7507488584474886 9.343249619482496 -1.5736864535768644Q8.896998477929984 -2.3966240487062405 8.896998477929984 -3.4895007610350075Q8.896998477929984 -4.595500761035008 9.380436834094368 -5.404438356164384Q9.863875190258751 -6.213375951293759 10.674126331811262 -6.658313546423136Q11.484377473363775 -7.103251141552511 12.467878234398782 -7.103251141552511Q13.309628614916285 -7.103251141552511 13.971129375951293 -6.786063926940639Q14.6326301369863 -6.468876712328767 15.081068493150685 -5.908001522070015Q15.529506849315068 -5.347126331811263 15.738194824961948 -4.603812785388127Q15.946882800608828 -3.8604992389649926 15.883007610350075 -3.0161217656012176H10.60938508371385Q10.681135464231353 -2.5033759512937594 10.872759512937595 -2.157753424657534Q11.064383561643835 -1.812130898021309 11.331257229832572 -1.6034444444444444Q11.598130898021308 -1.39475799086758 11.90394216133942 -1.3046331811263319Q12.209753424657533 -1.2145083713850837 12.49587823439878 -1.2145083713850837Q13.02875190258752 -1.2145083713850837 13.404126331811263 -1.379882800608828Q13.779500761035006 -1.5452572298325722 13.993875190258752 -1.8060060882800608L15.442882800608828 -1.3125022831050228Q14.970380517503806 -0.6002496194824962 14.203441400304413 -0.2161248097412481Q13.436502283105021 0.168 12.52737899543379 0.168ZM10.607634703196346 -4.151001522070016H14.227497716894977Q14.211747336377474 -4.617375951293759 13.986435312024353 -4.982686453576864Q13.761123287671232 -5.34799695585997 13.383124809741247 -5.560182648401827Q13.005126331811262 -5.772368340943683 12.49937899543379 -5.772368340943683Q12.076754946727549 -5.772368340943683 11.676881278538811 -5.617931506849315Q11.277007610350076 -5.463494672754947 10.995258751902586 -5.11130898021309Q10.713509893455099 -4.759123287671233 10.607634703196346 -4.151001522070016ZM17.084371385083713 0.0V-6.944H18.403007610350073L18.781007610350073 -5.663875190258752Q19.017257229832573 -6.162627092846271 19.35063165905632 -6.485502283105022Q19.68400608828006 -6.808377473363775 20.129380517503805 -6.963689497716896Q20.57475494672755 -7.119001522070016 21.125129375951293 -7.103251141552511V-5.3733637747336385Q20.307007610350077 -5.428490106544901 19.793383561643836 -5.213680365296804Q19.279759512937595 -4.998870624048706 19.037821917808216 -4.515436834094368Q18.79588432267884 -4.032003044140031 18.79588432267884 -3.2733820395738205V0.0ZM24.15 0.0 21.672 -6.944H23.465762557077625L25.09675799086758 -1.9180091324200912L26.721628614916284 -6.944H28.51539117199391L26.02951598173516 0.0ZM32.51937899543379 0.168Q31.411628614916285 0.168 30.596564687975647 -0.2913744292237443Q29.78150076103501 -0.7507488584474886 29.335249619482497 -1.5736864535768644Q28.888998477929984 -2.3966240487062405 28.888998477929984 -3.4895007610350075Q28.888998477929984 -4.595500761035008 29.37243683409437 -5.404438356164384Q29.855875190258754 -6.213375951293759 30.666126331811263 -6.658313546423136Q31.476377473363776 -7.103251141552511 32.459878234398786 -7.103251141552511Q33.30162861491629 -7.103251141552511 33.9631293759513 -6.786063926940639Q34.624630136986305 -6.468876712328767 35.073068493150686 -5.908001522070015Q35.52150684931507 -5.347126331811263 35.73019482496195 -4.603812785388127Q35.93888280060883 -3.8604992389649926 35.875007610350075 -3.0161217656012176H30.60138508371385Q30.673135464231354 -2.5033759512937594 30.864759512937596 -2.157753424657534Q31.056383561643834 -1.812130898021309 31.32325722983257 -1.6034444444444444Q31.590130898021307 -1.39475799086758 31.89594216133942 -1.3046331811263319Q32.20175342465753 -1.2145083713850837 32.487878234398785 -1.2145083713850837Q33.02075190258752 -1.2145083713850837 33.39612633181126 -1.379882800608828Q33.77150076103501 -1.5452572298325722 33.98587519025875 -1.8060060882800608L35.434882800608825 -1.3125022831050228Q34.9623805175038 -0.6002496194824962 34.19544140030442 -0.2161248097412481Q33.428502283105026 0.168 32.51937899543379 0.168ZM30.599634703196347 -4.151001522070016H34.21949771689498Q34.203747336377475 -4.617375951293759 33.97843531202435 -4.982686453576864Q33.75312328767123 -5.34799695585997 33.37512480974125 -5.560182648401827Q32.997126331811266 -5.772368340943683 32.49137899543379 -5.772368340943683Q32.06875494672755 -5.772368340943683 31.668881278538812 -5.617931506849315Q31.269007610350076 -5.463494672754947 30.987258751902587 -5.11130898021309Q30.7055098934551 -4.759123287671233 30.599634703196347 -4.151001522070016ZM37.07637138508372 0.0V-6.944H38.39500761035008L38.77300761035008 -5.663875190258752Q39.00925722983258 -6.162627092846271 39.34263165905632 -6.485502283105022Q39.67600608828006 -6.808377473363775 40.12138051750381 -6.963689497716896Q40.566754946727556 -7.119001522070016 41.11712937595129 -7.103251141552511V-5.3733637747336385Q40.29900761035008 -5.428490106544901 39.78538356164384 -5.213680365296804Q39.2717595129376 -4.998870624048706 39.02982191780822 -4.515436834094368Q38.78788432267885 -4.032003044140031 38.78788432267885 -3.2733820395738205V0.0ZM49.40337899543379 0.168Q48.29562861491629 0.168 47.480564687975644 -0.2913744292237443Q46.665500761035005 -0.7507488584474886 46.2192496194825 -1.5736864535768644Q45.77299847792999 -2.3966240487062405 45.77299847792999 -3.4895007610350075Q45.77299847792999 -4.595500761035008 46.25643683409437 -5.404438356164384Q46.73987519025875 -6.213375951293759 47.55012633181126 -6.658313546423136Q48.360377473363776 -7.103251141552511 49.34387823439879 -7.103251141552511Q50.18562861491629 -7.103251141552511 50.8471293759513 -6.786063926940639Q51.508630136986305 -6.468876712328767 51.957068493150686 -5.908001522070015Q52.40550684931507 -5.347126331811263 52.61419482496195 -4.603812785388127Q52.82288280060883 -3.8604992389649926 52.759007610350075 -3.0161217656012176H47.48538508371385Q47.55713546423136 -2.5033759512937594 47.748759512937596 -2.157753424657534Q47.940383561643834 -1.812130898021309 48.20725722983257 -1.6034444444444444Q48.47413089802131 -1.39475799086758 48.77994216133942 -1.3046331811263319Q49.08575342465753 -1.2145083713850837 49.371878234398785 -1.2145083713850837Q49.90475190258752 -1.2145083713850837 50.28012633181126 -1.379882800608828Q50.65550076103501 -1.5452572298325722 50.86987519025875 -1.8060060882800608L52.318882800608826 -1.3125022831050228Q51.8463805175038 -0.6002496194824962 51.07944140030442 -0.2161248097412481Q50.312502283105026 0.168 49.40337899543379 0.168ZM47.483634703196344 -4.151001522070016H51.10349771689498Q51.087747336377475 -4.617375951293759 50.86243531202435 -4.982686453576864Q50.63712328767123 -5.34799695585997 50.25912480974125 -5.560182648401827Q49.88112633181127 -5.772368340943683 49.37537899543379 -5.772368340943683Q48.95275494672755 -5.772368340943683 48.55288127853881 -5.617931506849315Q48.15300761035007 -5.463494672754947 47.87125875190259 -5.11130898021309Q47.5895098934551 -4.759123287671233 47.483634703196344 -4.151001522070016ZM53.96037138508372 0.0V-6.944H55.27900761035008L55.65700761035008 -5.663875190258752Q55.89325722983258 -6.162627092846271 56.22663165905632 -6.485502283105022Q56.56000608828006 -6.808377473363775 57.00538051750381 -6.963689497716896Q57.45075494672756 -7.119001522070016 58.001129375951294 -7.103251141552511V-5.3733637747336385Q57.18300761035008 -5.428490106544901 56.66938356164384 -5.213680365296804Q56.1557595129376 -4.998870624048706 55.91382191780822 -4.515436834094368Q55.67188432267885 -4.032003044140031 55.67188432267885 -3.2733820395738205V0.0ZM59.25237138508371 0.0V-6.944H60.57100761035007L60.94900761035007 -5.663875190258752Q61.18525722983257 -6.162627092846271 61.51863165905631 -6.485502283105022Q61.852006088280056 -6.808377473363775 62.2973805175038 -6.963689497716896Q62.742754946727544 -7.119001522070016 63.293129375951295 -7.103251141552511V-5.3733637747336385Q62.475007610350076 -5.428490106544901 61.961383561643835 -5.213680365296804Q61.447759512937594 -4.998870624048706 61.20582191780822 -4.515436834094368Q60.963884322678844 -4.032003044140031 60.963884322678844 -3.2733820395738205V0.0ZM67.30587823439878 0.168Q66.63300152207002 0.168 66.00562557077626 -0.04593759512937594Q65.37824961948249 -0.2598751902587519 64.87556164383561 -0.7048127853881279Q64.37287366818873 -1.1497503805175038 64.07493607305936 -1.8396879756468798Q63.776998477929986 -2.529625570776256 63.776998477929986 -3.4676255707762556Q63.776998477929986 -4.413500761035007 64.07493607305936 -5.099500761035007Q64.37287366818873 -5.785500761035007 64.87556164383561 -6.230438356164384Q65.37824961948249 -6.67537595129376 66.00562557077626 -6.889313546423136Q66.63300152207002 -7.103251141552511 67.30587823439878 -7.103251141552511Q67.97875494672755 -7.103251141552511 68.6061308980213 -6.889313546423136Q69.23350684931506 -6.67537595129376 69.73619482496194 -6.230438356164384Q70.23888280060882 -5.785500761035007 70.5368203957382 -5.099500761035007Q70.83475799086757 -4.413500761035007 70.83475799086757 -3.4676255707762556Q70.83475799086757 -2.529625570776256 70.5368203957382 -1.8396879756468798Q70.23888280060882 -1.1497503805175038 69.73619482496194 -0.7048127853881279Q69.23350684931506 -0.2598751902587519 68.6061308980213 -0.04593759512937594Q67.97875494672755 0.168 67.30587823439878 0.168ZM67.30587823439878 -1.2145083713850837Q67.77487671232876 -1.2145083713850837 68.173 -1.4402572298325724Q68.57112328767123 -1.666006088280061 68.81699695585996 -2.162129375951294Q69.0628706240487 -2.6582526636225268 69.0628706240487 -3.4676255707762556Q69.0628706240487 -4.276998477929985 68.81699695585996 -4.773121765601218Q68.57112328767123 -5.269245053272451 68.173 -5.49499391171994Q67.77487671232876 -5.720742770167428 67.30587823439878 -5.720742770167428Q66.84300456621004 -5.720742770167428 66.44181887366818 -5.49499391171994Q66.04063318112632 -5.269245053272451 65.79475951293759 -4.773121765601218Q65.54888584474885 -4.276998477929985 65.54888584474885 -3.4676255707762556Q65.54888584474885 -2.6582526636225268 65.79475951293759 -2.162129375951294Q66.04063318112632 -1.666006088280061 66.44181887366818 -1.4402572298325724Q66.84300456621004 -1.2145083713850837 67.30587823439878 -1.2145083713850837ZM72.13237138508372 0.0V-6.944H73.45100761035008L73.82900761035008 -5.663875190258752Q74.06525722983257 -6.162627092846271 74.39863165905632 -6.485502283105022Q74.73200608828006 -6.808377473363775 75.1773805175038 -6.963689497716896Q75.62275494672755 -7.119001522070016 76.17312937595129 -7.103251141552511V-5.3733637747336385Q75.35500761035007 -5.428490106544901 74.84138356164382 -5.213680365296804Q74.32775951293759 -4.998870624048706 74.08582191780822 -4.515436834094368Q73.84388432267885 -4.032003044140031 73.84388432267885 -3.2733820395738205V0.0Z" fill="#737373"/><rect x="112" y="168" width="140" height="6" rx="3" fill="#efefef"/><rect x="112" y="182" width="100" height="6" rx="3" fill="#efefef"/><rect x="112" y="196" width="60" height="6" rx="3" fill="#efefef"/></g><path d="M210 196 C220 250 120 250 150 268" fill="none" stroke="#111111" stroke-width="5"/><path d="M256 238 C280 236 290 230 296 222" fill="none" stroke="#111111" stroke-width="5"/><rect x="234" y="226" width="26" height="22" rx="4" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M234 232h-10M234 242h-10" stroke="#111111" stroke-width="4"/><rect x="300" y="200" width="44" height="60" rx="8" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M314 222v12M330 222v12" stroke="#111111" stroke-width="4"/><path d="M212 214.0V218.8M212 225.2V230.0M204.0 222H208.8M215.2 222H220.0" stroke="#111111" stroke-width="2.5"/><path d="M200 214l-6-6M224 212l6-6" stroke="#111111" stroke-width="2.5"/></g></svg>', "error-access-denied": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="A closed door with a large padlock \u2014 you do not have access"><title>A closed door with a large padlock \u2014 you do not have access</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M52,268 Q42.46,249.64 35.8,237.4 Q45.339999999999996,255.76 52,268Z" fill="#a3a3a3"/><path d="M52,268 Q45.7,242.07999999999998 52.0,224.8 Q58.3,250.72 52,268Z" fill="#a3a3a3"/><path d="M52,268 Q48.940000000000005,251.8 68.2,241.0 Q71.26,257.2 52,268Z" fill="#a3a3a3"/><path d="M52,268 Q40.300000000000004,257.2 25.0,250.0 Q36.699999999999996,260.8 52,268Z" fill="#a3a3a3"/><path d="M52,268 Q51.1,258.28 79.0,251.8 Q79.89999999999999,261.52 52,268Z" fill="#a3a3a3"/><path d="M330,268 Q327.62,253.72 342.6,244.2 Q344.97999999999996,258.48 330,268Z" fill="#a3a3a3"/><path d="M330,268 Q325.1,247.84 330.0,234.4 Q334.9,254.56 330,268Z" fill="#a3a3a3"/><path d="M330,268 Q322.58000000000004,255.4 317.4,247.0 Q324.82,259.6 330,268Z" fill="#a3a3a3"/><path d="M330,268 Q329.3,259.6 351.0,254.0 Q351.7,262.4 330,268Z" fill="#a3a3a3"/><path d="M330,268 Q320.90000000000003,260.44 309.0,255.4 Q318.09999999999997,262.96 330,268Z" fill="#a3a3a3"/><rect x="140" y="58" width="120" height="210" rx="6" fill="#efefef" stroke="#111111" stroke-width="3"/><rect x="152" y="70" width="96" height="198" rx="4" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="232" cy="172" r="5" fill="#111111"/><path d="M176 150 V128 A24 24 0 0 1 224 128 V150" fill="none" stroke="#111111" stroke-width="10"/><rect x="164" y="148" width="72" height="62" rx="10" fill="#111111"/><circle cx="200" cy="172" r="7" fill="#ffffff"/><path d="M200 178v14" stroke="#ffffff" stroke-width="6"/><g transform="rotate(-12 314.0 200.0)"><rect x="282" y="180" width="64" height="40" rx="6" fill="#ffffff" stroke="#111111" stroke-width="3"/><rect x="292" y="190" width="16" height="16" rx="3" fill="#a3a3a3"/><path d="M314 194h22M314 204h14" stroke="#111111" stroke-width="3"/></g><path transform="translate(286.0 160.0)" d="M8.256 0.0V-3.2640000000000002H0.48V-6.072L8.256 -16.032H12.216000000000001V-6.744H14.280000000000001V-3.2640000000000002H12.216000000000001V0.0ZM4.776 -6.744H8.256V-10.872ZM23.04 0.28800000000000003Q20.784 0.28800000000000003 19.224 -0.744Q17.664 -1.776 16.872 -3.648Q16.080000000000002 -5.5200000000000005 16.080000000000002 -8.040000000000001Q16.080000000000002 -10.584 16.872 -12.443999999999999Q17.664 -14.304 19.224 -15.312000000000001Q20.784 -16.32 23.04 -16.32Q25.32 -16.32 26.868000000000002 -15.312000000000001Q28.416 -14.304 29.208 -12.443999999999999Q30.0 -10.584 30.0 -8.040000000000001Q30.0 -5.5200000000000005 29.208 -3.648Q28.416 -1.776 26.868000000000002 -0.744Q25.32 0.28800000000000003 23.04 0.28800000000000003ZM23.04 -2.592Q23.616 -2.592 24.084 -2.7960000000000003Q24.552 -3.0 24.912 -3.432L20.232 -10.152000000000001Q20.136000000000003 -9.624 20.088 -9.084Q20.04 -8.544 20.04 -8.064Q20.04 -6.168 20.412 -4.956Q20.784 -3.744 21.468 -3.168Q22.152 -2.592 23.04 -2.592ZM21.264000000000003 -12.648 25.896 -5.976Q25.968000000000004 -6.432 26.004 -6.948Q26.04 -7.464 26.04 -8.064Q26.04 -8.856 25.92 -9.780000000000001Q25.8 -10.704 25.476 -11.544Q25.152 -12.384 24.564 -12.924Q23.976 -13.464 23.04 -13.464Q22.464000000000002 -13.464 22.032000000000004 -13.248000000000001Q21.6 -13.032 21.264000000000003 -12.648ZM38.064 0.28800000000000003Q36.768 0.28800000000000003 35.519999999999996 -0.07199999999999998Q34.272 -0.432 33.288 -1.224Q32.304 -2.016 31.752 -3.3120000000000003L35.328 -4.632Q35.64 -3.48 36.468 -3.048Q37.296 -2.616 38.184 -2.616Q38.879999999999995 -2.616 39.384 -2.856Q39.888 -3.096 40.164 -3.564Q40.44 -4.032 40.44 -4.656Q40.44 -5.232 40.188 -5.652Q39.936 -6.072 39.456 -6.348000000000001Q38.976 -6.6240000000000006 38.268 -6.756Q37.56 -6.888 36.647999999999996 -6.888H36.048V-9.552H36.647999999999996Q37.896 -9.552 38.7 -9.84Q39.504 -10.128 39.9 -10.608Q40.296 -11.088000000000001 40.296 -11.664Q40.296 -12.264000000000001 39.959999999999994 -12.648Q39.623999999999995 -13.032 39.083999999999996 -13.224Q38.544 -13.416 37.92 -13.416Q37.152 -13.416 36.42 -13.044Q35.688 -12.672 35.448 -11.592L31.919999999999998 -12.888Q32.424 -14.136000000000001 33.408 -14.892Q34.391999999999996 -15.648 35.628 -15.984Q36.864 -16.32 38.16 -16.32Q39.288 -16.32 40.367999999999995 -16.068Q41.448 -15.816 42.324 -15.3Q43.2 -14.784 43.728 -13.98Q44.256 -13.176 44.256 -12.048Q44.256 -10.608 43.5 -9.72Q42.744 -8.832 41.664 -8.352Q43.056 -7.872 43.763999999999996 -6.8759999999999994Q44.472 -5.88 44.472 -4.704Q44.472 -3.024 43.56 -1.92Q42.647999999999996 -0.8160000000000001 41.196 -0.264Q39.744 0.28800000000000003 38.064 0.28800000000000003Z" fill="#a3a3a3"/></g></svg>', "error-offline": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="A cloud with a slash through it and a disconnected router \u2014 you are offline"><title>A cloud with a slash through it and a disconnected router \u2014 you are offline</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M48,268 Q40.58,253.72 35.4,244.2 Q42.82,258.48 48,268Z" fill="#a3a3a3"/><path d="M48,268 Q43.1,247.84 48.0,234.4 Q52.9,254.56 48,268Z" fill="#a3a3a3"/><path d="M48,268 Q45.620000000000005,255.4 60.6,247.0 Q62.98,259.6 48,268Z" fill="#a3a3a3"/><path d="M48,268 Q38.9,259.6 27.0,254.0 Q36.1,262.4 48,268Z" fill="#a3a3a3"/><path d="M48,268 Q47.300000000000004,260.44 69.0,255.4 Q69.7,262.96 48,268Z" fill="#a3a3a3"/><path d="M350,268 Q347.28,251.68 364.4,240.8 Q367.12,257.12 350,268Z" fill="#a3a3a3"/><path d="M350,268 Q344.4,244.96 350.0,229.6 Q355.6,252.64 350,268Z" fill="#a3a3a3"/><path d="M350,268 Q341.52,253.6 335.6,244.0 Q344.08000000000004,258.4 350,268Z" fill="#a3a3a3"/><path d="M350,268 Q349.2,258.4 374.0,252.0 Q374.8,261.6 350,268Z" fill="#a3a3a3"/><path d="M350,268 Q339.59999999999997,259.36 326.0,253.6 Q336.40000000000003,262.24 350,268Z" fill="#a3a3a3"/><path d="M126 150 Q100 150 100 126 Q100 100 128 100 Q136 66 176 66 Q210 66 222 96 Q262 92 268 126 Q270 150 244 150Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M150 82 L232 158" stroke="#111111" stroke-width="8"/><path d="M150 82 L232 158" stroke="#ffffff" stroke-width="3"/><path d="M172 127.2 A14 14 0 0 1 200 127.2" fill="none" stroke="#111111" stroke-width="5"/><path d="M160 124.8 A26 26 0 0 1 212 124.8" fill="none" stroke="#a3a3a3" stroke-width="5"/><path d="M148 122.4 A38 38 0 0 1 224 122.4" fill="none" stroke="#a3a3a3" stroke-width="5"/><rect x="230" y="222" width="110" height="46" rx="8" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="252" cy="245" r="4" fill="#111111"/><circle cx="268" cy="245" r="4" fill="#a3a3a3"/><circle cx="284" cy="245" r="4" fill="#a3a3a3"/><circle cx="300" cy="245" r="4" fill="#a3a3a3"/><path d="M248 222 L238 182M322 222 L332 182" stroke="#111111" stroke-width="5"/><path d="M230 250 C190 250 170 210 196 178" fill="none" stroke="#111111" stroke-width="2.5" stroke-dasharray="7 7"/><path d="M180 196 l10 10 m0 -10 l-10 10" stroke="#111111" stroke-width="3"/><path d="M65.6,212.0 L64.0,263.2 L76.8,263.2 L78.4,228.0 L81.6,228.0 L84.8,263.2 L97.6,263.2 L94.4,212.0Z" fill="#111111" stroke="#111111" stroke-width="3"/><path d="M60.8,268.0 Q60.8,260.0 70.4,260.0 L78.4,261.6 Q83.2,264.8 81.6,268.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M83.2,268.0 Q81.6,261.6 89.6,260.0 L97.6,260.0 Q105.6,261.6 104.0,268.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M97.6,173.6 Q107.2,196.0 102.4,212.0" fill="none" stroke="#111111" stroke-width="15.600000000000001"/><path d="M97.6,173.6 Q107.2,196.0 102.4,212.0" fill="none" stroke="#ffffff" stroke-width="9.600000000000001"/><path d="M59.2,210.4 L57.6,178.4 Q59.2,165.6 72.0,164.0 L88.0,164.0 Q100.8,165.6 102.4,178.4 L100.8,210.4 Q80.0,215.2 59.2,210.4Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M62.4,173.6 Q56.0,191.2 68.8,191.2 Q83.2,188.0 83.2,165.6" fill="none" stroke="#111111" stroke-width="15.600000000000001"/><path d="M62.4,173.6 Q56.0,191.2 68.8,191.2 Q83.2,188.0 83.2,165.6" fill="none" stroke="#ffffff" stroke-width="9.600000000000001"/><circle cx="83.2" cy="164.0" r="5.6" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="102.4" cy="212.0" r="5.6" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M75.2,160.8 L75.2,165.6 M84.8,160.8 L84.8,165.6" stroke="#111111" stroke-width="3"/><circle cx="80.0" cy="148.0" r="16.0" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="68.8" cy="136.8" r="7.2" fill="#111111"/><circle cx="76.8" cy="132.0" r="8.0" fill="#111111"/><circle cx="86.4" cy="132.8" r="8.0" fill="#111111"/><circle cx="93.6" cy="140.0" r="6.4" fill="#111111"/><circle cx="64.0" cy="146.4" r="5.6" fill="#111111"/><circle cx="81.6" cy="140.0" r="6.4" fill="#111111"/><circle cx="74.4" cy="148.0" r="1.8" fill="#111111"/><circle cx="85.6" cy="148.0" r="1.8" fill="#111111"/><path d="M77.6,156.0 Q80.0,154.4 82.4,156.0" fill="none" stroke="#111111" stroke-width="2.5"/></g></svg>', "onboarding-maintenance": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="A browser window with a wrench, gear and traffic cone \u2014 under maintenance"><title>A browser window with a wrench, gear and traffic cone \u2014 under maintenance</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M48,268 Q39.519999999999996,251.68 33.6,240.8 Q42.08,257.12 48,268Z" fill="#a3a3a3"/><path d="M48,268 Q42.4,244.96 48.0,229.6 Q53.6,252.64 48,268Z" fill="#a3a3a3"/><path d="M48,268 Q45.28,253.6 62.4,244.0 Q65.12,258.4 48,268Z" fill="#a3a3a3"/><path d="M48,268 Q37.6,258.4 24.0,252.0 Q34.4,261.6 48,268Z" fill="#a3a3a3"/><path d="M48,268 Q47.199999999999996,259.36 72.0,253.6 Q72.8,262.24 48,268Z" fill="#a3a3a3"/><g transform="rotate(3 180.0 127.0)"><rect x="76" y="58" width="220" height="150" rx="10" fill="#ffffff" stroke="#111111" stroke-width="3"/><rect x="70" y="52" width="220" height="150" rx="10" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M70 78H290" stroke="#111111" stroke-width="3"/><circle cx="86" cy="65" r="4" fill="#111111"/><circle cx="99" cy="65" r="4" fill="#a3a3a3"/><circle cx="112" cy="65" r="4" fill="#a3a3a3"/><rect x="92" y="96" width="120" height="8" rx="4" fill="#efefef"/><rect x="92" y="116" width="90" height="8" rx="4" fill="#efefef"/><rect x="92" y="136" width="60" height="8" rx="4" fill="#efefef"/></g><g transform="rotate(3 180 127)"><rect x="229" y="94" width="14" height="16" rx="3" transform="rotate(0 236 134)" fill="#111111"/><rect x="229" y="94" width="14" height="16" rx="3" transform="rotate(45 236 134)" fill="#111111"/><rect x="229" y="94" width="14" height="16" rx="3" transform="rotate(90 236 134)" fill="#111111"/><rect x="229" y="94" width="14" height="16" rx="3" transform="rotate(135 236 134)" fill="#111111"/><rect x="229" y="94" width="14" height="16" rx="3" transform="rotate(180 236 134)" fill="#111111"/><rect x="229" y="94" width="14" height="16" rx="3" transform="rotate(225 236 134)" fill="#111111"/><rect x="229" y="94" width="14" height="16" rx="3" transform="rotate(270 236 134)" fill="#111111"/><rect x="229" y="94" width="14" height="16" rx="3" transform="rotate(315 236 134)" fill="#111111"/><circle cx="236" cy="134" r="30" fill="#111111"/><circle cx="236" cy="134" r="11" fill="#ffffff"/></g><g transform="rotate(-35 150 150)"><rect x="140" y="120" width="20" height="96" rx="10" fill="#a3a3a3" stroke="#111111" stroke-width="3"/><path d="M132 120 A22 22 0 1 1 168 120 L160 110 V96 H140 V110Z" fill="#a3a3a3" stroke="#111111" stroke-width="3"/></g><path d="M318 268 L338 168 H352 L372 268Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M330 206 H360 M325 236 H365" stroke="#111111" stroke-width="10"/><rect x="304" y="262" width="82" height="8" rx="3" fill="#111111"/></g></svg>', "onboarding-permission": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="A phone showing a notification permission prompt"><title>A phone showing a notification permission prompt</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M60,268 Q50.46,249.64 43.8,237.4 Q53.339999999999996,255.76 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q53.7,242.07999999999998 60.0,224.8 Q66.3,250.72 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q56.940000000000005,251.8 76.2,241.0 Q79.26,257.2 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q48.300000000000004,257.2 33.0,250.0 Q44.699999999999996,260.8 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q59.10000000000001,258.28 87.0,251.8 Q87.89999999999999,261.52 60,268Z" fill="#a3a3a3"/><path d="M340,268 Q337.28,251.68 354.4,240.8 Q357.12,257.12 340,268Z" fill="#a3a3a3"/><path d="M340,268 Q334.4,244.96 340.0,229.6 Q345.6,252.64 340,268Z" fill="#a3a3a3"/><path d="M340,268 Q331.52,253.6 325.6,244.0 Q334.08000000000004,258.4 340,268Z" fill="#a3a3a3"/><path d="M340,268 Q339.2,258.4 364.0,252.0 Q364.8,261.6 340,268Z" fill="#a3a3a3"/><path d="M340,268 Q329.59999999999997,259.36 316.0,253.6 Q326.40000000000003,262.24 340,268Z" fill="#a3a3a3"/><g transform="rotate(8 215 150)"><rect x="161.0" y="51.0" width="120" height="210" rx="20" fill="#ffffff" stroke="#111111" stroke-width="3"/><rect x="155.0" y="45.0" width="120" height="210" rx="20" fill="#111111"/><rect x="163.0" y="53.0" width="104" height="194" rx="13" fill="#efefef"/><rect x="166" y="108" width="98" height="84" rx="10" fill="#ffffff" stroke="#111111" stroke-width="2.5"/><path d="M215 120 Q230 120 231 138 L232 152 L237 158 H193 L198 152 L199 138 Q200 120 215 120Z" fill="#111111"/><circle cx="215" cy="162" r="4" fill="#111111"/><rect x="174" y="172" width="38" height="12" rx="4" fill="#efefef"/><rect x="218" y="172" width="38" height="12" rx="4" fill="#111111"/></g><path d="M83.8,205.0 L82.0,262.6 L96.4,262.6 L98.2,223.0 L101.8,223.0 L105.4,262.6 L119.8,262.6 L116.2,205.0Z" fill="#111111" stroke="#111111" stroke-width="3"/><path d="M78.4,268.0 Q78.4,259.0 89.2,259.0 L98.2,260.8 Q103.6,264.4 101.8,268.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M103.6,268.0 Q101.8,260.8 110.8,259.0 L119.8,259.0 Q128.8,260.8 127.0,268.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M119.8,161.8 Q145.0,167.2 163.0,160.0" fill="none" stroke="#111111" stroke-width="16.8"/><path d="M119.8,161.8 Q145.0,167.2 163.0,160.0" fill="none" stroke="#ffffff" stroke-width="10.8"/><path d="M76.6,203.2 L74.8,167.2 Q76.6,152.8 91.0,151.0 L109.0,151.0 Q123.4,152.8 125.2,167.2 L123.4,203.2 Q100.0,208.6 76.6,203.2Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M80.2,161.8 Q69.4,187.0 74.8,205.0" fill="none" stroke="#111111" stroke-width="16.8"/><path d="M80.2,161.8 Q69.4,187.0 74.8,205.0" fill="none" stroke="#ffffff" stroke-width="10.8"/><circle cx="74.8" cy="205.0" r="6.3" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="164.8" cy="160.0" r="6.3" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M94.6,147.4 L94.6,152.8 M105.4,147.4 L105.4,152.8" stroke="#111111" stroke-width="3"/><circle cx="100.0" cy="133.0" r="18.0" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="87.4" cy="120.4" r="8.1" fill="#111111"/><circle cx="96.4" cy="115.0" r="9.0" fill="#111111"/><circle cx="107.2" cy="115.9" r="9.0" fill="#111111"/><circle cx="115.3" cy="124.0" r="7.2" fill="#111111"/><circle cx="82.0" cy="131.2" r="6.3" fill="#111111"/><circle cx="101.8" cy="124.0" r="7.2" fill="#111111"/><circle cx="93.7" cy="133.0" r="2.0" fill="#111111"/><circle cx="106.3" cy="133.0" r="2.0" fill="#111111"/><path d="M95.5,141.1 Q100.0,144.7 104.5,141.1" fill="none" stroke="#111111" stroke-width="2.5"/><path d="M300 60V66M300 74V80M290 70H296M304 70H310" stroke="#111111" stroke-width="2.5"/><path d="M300 120 C330 140 330 180 300 200" fill="none" stroke="#111111" stroke-width="2.5" stroke-dasharray="7 7"/></g></svg>', "onboarding-welcome": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="A person waving next to the Aa tile \u2014 welcome"><title>A person waving next to the Aa tile \u2014 welcome</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M54,268 Q45.519999999999996,251.68 39.6,240.8 Q48.08,257.12 54,268Z" fill="#a3a3a3"/><path d="M54,268 Q48.4,244.96 54.0,229.6 Q59.6,252.64 54,268Z" fill="#a3a3a3"/><path d="M54,268 Q51.28,253.6 68.4,244.0 Q71.11999999999999,258.4 54,268Z" fill="#a3a3a3"/><path d="M54,268 Q43.6,258.4 30.0,252.0 Q40.4,261.6 54,268Z" fill="#a3a3a3"/><path d="M54,268 Q53.199999999999996,259.36 78.0,253.6 Q78.8,262.24 54,268Z" fill="#a3a3a3"/><path d="M356,268 Q353.62,253.72 368.6,244.2 Q370.97999999999996,258.48 356,268Z" fill="#a3a3a3"/><path d="M356,268 Q351.1,247.84 356.0,234.4 Q360.9,254.56 356,268Z" fill="#a3a3a3"/><path d="M356,268 Q348.58000000000004,255.4 343.4,247.0 Q350.82,259.6 356,268Z" fill="#a3a3a3"/><path d="M356,268 Q355.3,259.6 377.0,254.0 Q377.7,262.4 356,268Z" fill="#a3a3a3"/><path d="M356,268 Q346.90000000000003,260.44 335.0,255.4 Q344.09999999999997,262.96 356,268Z" fill="#a3a3a3"/><rect x="176" y="76" width="140" height="140" rx="30" fill="#ffffff" stroke="#111111" stroke-width="3"/><rect x="170" y="70" width="140" height="140" rx="30" fill="#111111"/><path d="M190,105 A13,13 0 0 1 203,92 V105Z" fill="#ffffff"/><rect x="206" y="92" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="222" y="92" width="13" height="13" rx="2.5" fill="#ffffff"/><path d="M238,92 A13,13 0 0 1 251,105 H238Z" fill="#ffffff"/><rect x="190" y="108" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="238" y="108" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="190" y="124" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="238" y="124" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="190" y="140" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="206" y="140" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="222" y="140" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="238" y="140" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="190" y="156" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="238" y="156" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="190" y="172" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="238" y="172" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="260" y="124" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="276" y="124" width="13" height="13" rx="2.5" fill="#ffffff"/><path d="M292,124 A13,13 0 0 1 305,137 H292Z" fill="#ffffff"/><rect x="292" y="140" width="13" height="13" rx="2.5" fill="#ffffff"/><path d="M260,169 A13,13 0 0 1 273,156 V169Z" fill="#ffffff"/><rect x="276" y="156" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="292" y="156" width="13" height="13" rx="2.5" fill="#ffffff"/><path d="M260,172 H273 V185 A13,13 0 0 1 260,172Z" fill="#ffffff"/><rect x="276" y="172" width="13" height="13" rx="2.5" fill="#ffffff"/><rect x="292" y="172" width="13" height="13" rx="2.5" fill="#ffffff"/><path d="M92.0,198.0 L90.0,262.0 L106.0,262.0 L108.0,218.0 L112.0,218.0 L116.0,262.0 L132.0,262.0 L128.0,198.0Z" fill="#111111" stroke="#111111" stroke-width="3"/><path d="M86.0,268.0 Q86.0,258.0 98.0,258.0 L108.0,260.0 Q114.0,264.0 112.0,268.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M114.0,268.0 Q112.0,260.0 122.0,258.0 L132.0,258.0 Q142.0,260.0 140.0,268.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M132.0,150.0 Q154.0,138.0 156.0,108.0" fill="none" stroke="#111111" stroke-width="18.0"/><path d="M132.0,150.0 Q154.0,138.0 156.0,108.0" fill="none" stroke="#ffffff" stroke-width="12.0"/><path d="M84.0,196.0 L82.0,156.0 Q84.0,140.0 100.0,138.0 L120.0,138.0 Q136.0,140.0 138.0,156.0 L136.0,196.0 Q110.0,202.0 84.0,196.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M88.0,150.0 Q76.0,178.0 82.0,198.0" fill="none" stroke="#111111" stroke-width="18.0"/><path d="M88.0,150.0 Q76.0,178.0 82.0,198.0" fill="none" stroke="#ffffff" stroke-width="12.0"/><circle cx="82.0" cy="198.0" r="7.0" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="156.0" cy="106.0" r="7.0" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M104.0,134.0 L104.0,140.0 M116.0,134.0 L116.0,140.0" stroke="#111111" stroke-width="3"/><circle cx="110.0" cy="118.0" r="20.0" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="96.0" cy="104.0" r="9.0" fill="#111111"/><circle cx="106.0" cy="98.0" r="10.0" fill="#111111"/><circle cx="118.0" cy="99.0" r="10.0" fill="#111111"/><circle cx="127.0" cy="108.0" r="8.0" fill="#111111"/><circle cx="90.0" cy="116.0" r="7.0" fill="#111111"/><circle cx="112.0" cy="108.0" r="8.0" fill="#111111"/><circle cx="103.0" cy="118.0" r="2.2" fill="#111111"/><circle cx="117.0" cy="118.0" r="2.2" fill="#111111"/><path d="M105.0,127.0 Q110.0,131.0 115.0,127.0" fill="none" stroke="#111111" stroke-width="2.5"/><path d="M142.0,47.0 H178.0 Q188.0,47.0 188.0,57.0 V71.0 Q188.0,81.0 178.0,81.0 H158 L146,93.0 L150,81.0 H142.0 Q132.0,81.0 132.0,71.0 V57.0 Q132.0,47.0 142.0,47.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path transform="translate(146.0 70.0)" d="M0.864 0.0V-10.688H3.584V-6.688H7.76V-10.688H10.48V0.0H7.76V-4.288H3.584V0.0ZM13.056 0.0V-5.952H11.68V-7.936H15.712V0.0ZM14.24 -9.216000000000001Q13.6 -9.216000000000001 13.16 -9.656Q12.72 -10.096 12.72 -10.736Q12.72 -11.37341935483871 13.16 -11.814709677419355Q13.6 -12.256 14.24 -12.256Q14.87741935483871 -12.256 15.318709677419355 -11.814709677419355Q15.76 -11.37341935483871 15.76 -10.736Q15.76 -10.096 15.318709677419355 -9.656Q14.87741935483871 -9.216000000000001 14.24 -9.216000000000001ZM18.176 -4.032 17.648 -7.92V-10.688H20.496V-7.92L19.968 -4.032ZM19.087999999999997 0.192Q18.4 0.192 17.912 -0.29600000000000004Q17.424 -0.784 17.424 -1.472Q17.424 -2.176 17.912 -2.648Q18.4 -3.12 19.087999999999997 -3.12Q19.759999999999998 -3.12 20.247999999999998 -2.648Q20.735999999999997 -2.176 20.735999999999997 -1.472Q20.735999999999997 -0.784 20.247999999999998 -0.29600000000000004Q19.759999999999998 0.192 19.087999999999997 0.192Z" fill="#111111"/><path d="M330 52.0V56.8M330 63.2V68.0M322.0 60H326.8M333.2 60H338.0" stroke="#111111" stroke-width="2.5"/><path d="M160 227.0V230.0M160 234.0V237.0M155.0 232H158.0M162.0 232H165.0" stroke="#111111" stroke-width="2.5"/></g></svg>', "success-account": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="An ID card with a profile and a check \u2014 account created"><title>An ID card with a profile and a check \u2014 account created</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M64,268 Q54.46,249.64 47.8,237.4 Q57.339999999999996,255.76 64,268Z" fill="#a3a3a3"/><path d="M64,268 Q57.7,242.07999999999998 64.0,224.8 Q70.3,250.72 64,268Z" fill="#a3a3a3"/><path d="M64,268 Q60.94,251.8 80.2,241.0 Q83.26,257.2 64,268Z" fill="#a3a3a3"/><path d="M64,268 Q52.300000000000004,257.2 37.0,250.0 Q48.699999999999996,260.8 64,268Z" fill="#a3a3a3"/><path d="M64,268 Q63.10000000000001,258.28 91.0,251.8 Q91.89999999999999,261.52 64,268Z" fill="#a3a3a3"/><path d="M330,268 Q327.62,253.72 342.6,244.2 Q344.97999999999996,258.48 330,268Z" fill="#a3a3a3"/><path d="M330,268 Q325.1,247.84 330.0,234.4 Q334.9,254.56 330,268Z" fill="#a3a3a3"/><path d="M330,268 Q322.58000000000004,255.4 317.4,247.0 Q324.82,259.6 330,268Z" fill="#a3a3a3"/><path d="M330,268 Q329.3,259.6 351.0,254.0 Q351.7,262.4 330,268Z" fill="#a3a3a3"/><path d="M330,268 Q320.90000000000003,260.44 309.0,255.4 Q318.09999999999997,262.96 330,268Z" fill="#a3a3a3"/><g transform="rotate(-4 200.0 140.0)"><rect x="100" y="70" width="200" height="140" rx="14" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="148" cy="130" r="26" fill="#efefef" stroke="#111111" stroke-width="3"/><circle cx="148" cy="124" r="9" fill="#111111"/><path d="M132 148 Q148 132 164 148" fill="#111111"/><rect x="188" y="110" width="88" height="10" rx="5" fill="#111111"/><rect x="188" y="132" width="64" height="8" rx="4" fill="#a3a3a3"/><rect x="188" y="150" width="76" height="8" rx="4" fill="#efefef"/><path d="M120 184 H280" stroke="#efefef" stroke-width="6"/></g><circle cx="296" cy="82" r="26" fill="#111111"/><path d="M285.08 82.52 L293.4 90.32 L307.7 74.2" fill="none" stroke="#ffffff" stroke-width="5.2"/><path d="M328.8,224.6 L327.6,264.3 L337.5,264.3 L338.8,237.0 L341.2,237.0 L343.7,264.3 L353.6,264.3 L351.2,224.6Z" fill="#111111" stroke="#111111" stroke-width="3"/><path d="M325.1,268.0 Q325.1,261.8 332.6,261.8 L338.8,263.0 Q342.5,265.5 341.2,268.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M342.5,268.0 Q341.2,263.0 347.4,261.8 L353.6,261.8 Q359.8,263.0 358.6,268.0Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M353.6,194.8 Q367.3,187.4 368.5,168.8" fill="none" stroke="#111111" stroke-width="13.44"/><path d="M353.6,194.8 Q367.3,187.4 368.5,168.8" fill="none" stroke="#ffffff" stroke-width="7.4399999999999995"/><path d="M323.9,223.4 L322.6,198.6 Q323.9,188.6 333.8,187.4 L346.2,187.4 Q356.1,188.6 357.4,198.6 L356.1,223.4 Q340.0,227.1 323.9,223.4Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M326.4,194.8 Q312.7,187.4 311.5,168.8" fill="none" stroke="#111111" stroke-width="13.44"/><path d="M326.4,194.8 Q312.7,187.4 311.5,168.8" fill="none" stroke="#ffffff" stroke-width="7.4399999999999995"/><circle cx="311.5" cy="167.6" r="4.3" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="368.5" cy="167.6" r="4.3" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M336.3,184.9 L336.3,188.6 M343.7,184.9 L343.7,188.6" stroke="#111111" stroke-width="3"/><circle cx="340.0" cy="175.0" r="12.4" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="331.3" cy="166.3" r="5.6" fill="#111111"/><circle cx="337.5" cy="162.6" r="6.2" fill="#111111"/><circle cx="345.0" cy="163.2" r="6.2" fill="#111111"/><circle cx="350.5" cy="168.8" r="5.0" fill="#111111"/><circle cx="327.6" cy="173.8" r="4.3" fill="#111111"/><circle cx="341.2" cy="168.8" r="5.0" fill="#111111"/><circle cx="335.7" cy="175.0" r="1.4" fill="#111111"/><circle cx="344.3" cy="175.0" r="1.4" fill="#111111"/><path d="M336.9,180.6 Q340.0,183.1 343.1,180.6" fill="none" stroke="#111111" stroke-width="2.5"/></g></svg>', "success-done": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="A big check mark with celebration marks \u2014 all done"><title>A big check mark with celebration marks \u2014 all done</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M60,268 Q50.46,249.64 43.8,237.4 Q53.339999999999996,255.76 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q53.7,242.07999999999998 60.0,224.8 Q66.3,250.72 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q56.940000000000005,251.8 76.2,241.0 Q79.26,257.2 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q48.300000000000004,257.2 33.0,250.0 Q44.699999999999996,260.8 60,268Z" fill="#a3a3a3"/><path d="M60,268 Q59.10000000000001,258.28 87.0,251.8 Q87.89999999999999,261.52 60,268Z" fill="#a3a3a3"/><path d="M340,268 Q336.94,249.64 356.2,237.4 Q359.26,255.76 340,268Z" fill="#a3a3a3"/><path d="M340,268 Q333.7,242.07999999999998 340.0,224.8 Q346.3,250.72 340,268Z" fill="#a3a3a3"/><path d="M340,268 Q330.46,251.8 323.8,241.0 Q333.34000000000003,257.2 340,268Z" fill="#a3a3a3"/><path d="M340,268 Q339.09999999999997,257.2 367.0,250.0 Q367.90000000000003,260.8 340,268Z" fill="#a3a3a3"/><path d="M340,268 Q328.3,258.28 313.0,251.8 Q324.7,261.52 340,268Z" fill="#a3a3a3"/><circle cx="200" cy="140" r="62" fill="#111111"/><path d="M173.96 141.24 L193.8 159.84 L227.9 121.4" fill="none" stroke="#ffffff" stroke-width="12.4"/><circle cx="200" cy="140" r="78" fill="none" stroke="#a3a3a3" stroke-width="3" stroke-dasharray="4 10"/><path d="M296.0 140.0 L312.0 140.0" stroke="#111111" stroke-width="4"/><path d="M267.9 207.9 L279.2 219.2" stroke="#a3a3a3" stroke-width="4"/><path d="M200.0 236.0 L200.0 252.0" stroke="#111111" stroke-width="4"/><path d="M132.1 207.9 L120.8 219.2" stroke="#a3a3a3" stroke-width="4"/><path d="M104.0 140.0 L88.0 140.0" stroke="#111111" stroke-width="4"/><path d="M132.1 72.1 L120.8 60.8" stroke="#a3a3a3" stroke-width="4"/><path d="M200.0 44.0 L200.0 28.0" stroke="#111111" stroke-width="4"/><path d="M267.9 72.1 L279.2 60.8" stroke="#a3a3a3" stroke-width="4"/><path d="M96 60V66M96 74V80M86 70H92M100 70H106" stroke="#111111" stroke-width="2.5"/><path d="M310 192.0V196.8M310 203.2V208.0M302.0 200H306.8M313.2 200H318.0" stroke="#111111" stroke-width="2.5"/><rect x="300" y="70" width="12" height="12" rx="2" transform="rotate(20 306 76)" fill="#a3a3a3"/><circle cx="92" cy="200" r="6" fill="#111111"/></g></svg>', "success-payment": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="A card and a receipt with a check \u2014 payment successful"><title>A card and a receipt with a check \u2014 payment successful</title><g stroke-linecap="round" stroke-linejoin="round"><path d="M24 268H376" stroke="#111111" stroke-width="3"/><path d="M52,268 Q43.519999999999996,251.68 37.6,240.8 Q46.08,257.12 52,268Z" fill="#a3a3a3"/><path d="M52,268 Q46.4,244.96 52.0,229.6 Q57.6,252.64 52,268Z" fill="#a3a3a3"/><path d="M52,268 Q49.28,253.6 66.4,244.0 Q69.12,258.4 52,268Z" fill="#a3a3a3"/><path d="M52,268 Q41.6,258.4 28.0,252.0 Q38.4,261.6 52,268Z" fill="#a3a3a3"/><path d="M52,268 Q51.199999999999996,259.36 76.0,253.6 Q76.8,262.24 52,268Z" fill="#a3a3a3"/><path d="M352,268 Q349.28,251.68 366.4,240.8 Q369.12,257.12 352,268Z" fill="#a3a3a3"/><path d="M352,268 Q346.4,244.96 352.0,229.6 Q357.6,252.64 352,268Z" fill="#a3a3a3"/><path d="M352,268 Q343.52,253.6 337.6,244.0 Q346.08000000000004,258.4 352,268Z" fill="#a3a3a3"/><path d="M352,268 Q351.2,258.4 376.0,252.0 Q376.8,261.6 352,268Z" fill="#a3a3a3"/><path d="M352,268 Q341.59999999999997,259.36 328.0,253.6 Q338.40000000000003,262.24 352,268Z" fill="#a3a3a3"/><path d="M190 52 H300 V250 L288 242 L276 250 L264 242 L252 250 L240 242 L228 250 L216 242 L204 250 L190 242Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><rect x="206" y="120" width="78" height="7" rx="3.5" fill="#efefef"/><rect x="206" y="142" width="54" height="7" rx="3.5" fill="#efefef"/><rect x="206" y="164" width="78" height="7" rx="3.5" fill="#efefef"/><rect x="206" y="186" width="54" height="7" rx="3.5" fill="#efefef"/><circle cx="245" cy="88" r="22" fill="#111111"/><path d="M235.76 88.44 L242.8 95.04 L254.9 81.4" fill="none" stroke="#ffffff" stroke-width="4.4"/><g transform="rotate(-10 152.0 184.0)"><rect x="82" y="140" width="140" height="88" rx="12" fill="#111111" stroke="#111111" stroke-width="3"/><rect x="100" y="164" width="26" height="20" rx="4" fill="#a3a3a3"/><path d="M100 206 H150 M162 206 H196" stroke="#ffffff" stroke-width="5"/></g><path d="M120 86V92M120 100V106M110 96H116M124 96H130" stroke="#111111" stroke-width="2.5"/><path d="M330 113.0V117.2M330 122.8V127.0M323.0 120H327.2M332.8 120H337.0" stroke="#111111" stroke-width="2.5"/></g></svg>' }, "avatars": { "avatar-01": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g stroke-linecap="round" stroke-linejoin="round"><circle cx="64" cy="64" r="64" fill="#e2ebff"/><clipPath id="c"><circle cx="64" cy="64" r="64"/></clipPath><g clip-path="url(#c)"><path d="M24 128 Q24 96 64 94 Q104 96 104 128Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M56 84 V98 Q64 104 72 98 V84" fill="#ffffff" stroke="#111111" stroke-width="3"/><ellipse cx="64" cy="62" rx="24" ry="27" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="46" cy="44" r="10" fill="#111111"/><circle cx="56" cy="36" r="11" fill="#111111"/><circle cx="70" cy="35" r="11" fill="#111111"/><circle cx="82" cy="42" r="10" fill="#111111"/><circle cx="88" cy="54" r="7" fill="#111111"/><circle cx="41" cy="55" r="7" fill="#111111"/><circle cx="64" cy="42" r="9" fill="#111111"/><circle cx="55" cy="64" r="2.6" fill="#111111"/><circle cx="73" cy="64" r="2.6" fill="#111111"/><path d="M57 76 Q64 81 71 76" fill="none" stroke="#111111" stroke-width="2.5"/></g></g></svg>', "avatar-02": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g stroke-linecap="round" stroke-linejoin="round"><circle cx="64" cy="64" r="64" fill="#ffe3f0"/><clipPath id="c"><circle cx="64" cy="64" r="64"/></clipPath><g clip-path="url(#c)"><path d="M24 128 Q24 96 64 94 Q104 96 104 128Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M56 84 V98 Q64 104 72 98 V84" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M34 64 Q30 30 64 30 Q98 30 94 64 L98 104 Q86 100 84 86 L44 86 Q42 100 30 104Z" fill="#111111"/><ellipse cx="64" cy="62" rx="24" ry="27" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M40 58 Q44 34 64 34 Q86 34 88 58 Q74 46 54 50 Q46 52 40 58Z" fill="#111111"/><circle cx="55" cy="64" r="2.6" fill="#111111"/><circle cx="73" cy="64" r="2.6" fill="#111111"/><path d="M57 75 Q64 84 71 75Z" fill="#111111"/></g></g></svg>', "avatar-03": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g stroke-linecap="round" stroke-linejoin="round"><circle cx="64" cy="64" r="64" fill="#dcf5e0"/><clipPath id="c"><circle cx="64" cy="64" r="64"/></clipPath><g clip-path="url(#c)"><path d="M24 128 Q24 96 64 94 Q104 96 104 128Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M56 84 V98 Q64 104 72 98 V84" fill="#ffffff" stroke="#111111" stroke-width="3"/><ellipse cx="64" cy="62" rx="24" ry="27" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M40 56 Q40 32 64 32 Q88 32 88 56 Q80 44 64 44 Q48 44 40 56Z" fill="#111111"/><circle cx="55" cy="64" r="2.6" fill="#111111"/><circle cx="73" cy="64" r="2.6" fill="#111111"/><path d="M58 77 H70" stroke="#111111" stroke-width="2.5"/><path d="M42 72 Q44 96 64 98 Q84 96 86 72 Q80 84 64 84 Q48 84 42 72Z" fill="#111111"/><path d="M57 79 Q64 83 71 79" fill="none" stroke="#ffffff" stroke-width="2.5"/></g></g></svg>', "avatar-04": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g stroke-linecap="round" stroke-linejoin="round"><circle cx="64" cy="64" r="64" fill="#fdebd2"/><clipPath id="c"><circle cx="64" cy="64" r="64"/></clipPath><g clip-path="url(#c)"><path d="M24 128 Q24 96 64 94 Q104 96 104 128Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M56 84 V98 Q64 104 72 98 V84" fill="#ffffff" stroke="#111111" stroke-width="3"/><ellipse cx="64" cy="62" rx="24" ry="27" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="64" cy="26" r="11" fill="#111111"/><path d="M40 58 Q40 34 64 34 Q88 34 88 58 Q78 44 64 46 Q50 44 40 58Z" fill="#111111"/><circle cx="55" cy="64" r="2.6" fill="#111111"/><circle cx="73" cy="64" r="2.6" fill="#111111"/><path d="M57 76 Q64 81 71 76" fill="none" stroke="#111111" stroke-width="2.5"/><circle cx="55" cy="64" r="8" fill="none" stroke="#111111" stroke-width="3"/><circle cx="73" cy="64" r="8" fill="none" stroke="#111111" stroke-width="3"/><path d="M63 64 H65" stroke="#111111" stroke-width="3"/></g></g></svg>', "avatar-05": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g stroke-linecap="round" stroke-linejoin="round"><circle cx="64" cy="64" r="64" fill="#efe6ff"/><clipPath id="c"><circle cx="64" cy="64" r="64"/></clipPath><g clip-path="url(#c)"><path d="M24 128 Q24 96 64 94 Q104 96 104 128Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M56 84 V98 Q64 104 72 98 V84" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M30 70 Q28 26 64 26 Q100 26 98 70 L100 128 H28Z" fill="#a3a3a3" stroke="#111111" stroke-width="3"/><ellipse cx="64" cy="62" rx="24" ry="27" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="55" cy="64" r="2.6" fill="#111111"/><circle cx="73" cy="64" r="2.6" fill="#111111"/><path d="M57 76 Q64 81 71 76" fill="none" stroke="#111111" stroke-width="2.5"/><path d="M40 58 Q42 38 64 38 Q86 38 88 58" fill="none" stroke="#111111" stroke-width="3"/></g></g></svg>', "avatar-06": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g stroke-linecap="round" stroke-linejoin="round"><circle cx="64" cy="64" r="64" fill="#d7f4ee"/><clipPath id="c"><circle cx="64" cy="64" r="64"/></clipPath><g clip-path="url(#c)"><path d="M24 128 Q24 96 64 94 Q104 96 104 128Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M56 84 V98 Q64 104 72 98 V84" fill="#ffffff" stroke="#111111" stroke-width="3"/><ellipse cx="64" cy="62" rx="24" ry="27" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M38 52 Q40 30 64 30 Q88 30 90 52 H38Z" fill="#111111"/><path d="M34 52 H104 Q104 58 96 58 H38 Q34 58 34 52Z" fill="#111111"/><circle cx="55" cy="64" r="2.6" fill="#111111"/><circle cx="73" cy="64" r="2.6" fill="#111111"/><path d="M57 75 Q64 84 71 75Z" fill="#111111"/></g></g></svg>', "avatar-07": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g stroke-linecap="round" stroke-linejoin="round"><circle cx="64" cy="64" r="64" fill="#ffe8d9"/><clipPath id="c"><circle cx="64" cy="64" r="64"/></clipPath><g clip-path="url(#c)"><path d="M24 128 Q24 96 64 94 Q104 96 104 128Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M56 84 V98 Q64 104 72 98 V84" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M36 60 Q34 30 64 30 Q94 30 92 60 Q96 76 90 84 Q86 66 84 54 Q64 52 46 46 Q42 60 38 84 Q32 76 36 60Z" fill="#111111"/><ellipse cx="64" cy="62" rx="24" ry="27" fill="#ffffff" stroke="#111111" stroke-width="3"/><circle cx="55" cy="64" r="2.6" fill="#111111"/><circle cx="73" cy="64" r="2.6" fill="#111111"/><path d="M57 76 Q64 81 71 76" fill="none" stroke="#111111" stroke-width="2.5"/></g></g></svg>', "avatar-08": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g stroke-linecap="round" stroke-linejoin="round"><circle cx="64" cy="64" r="64" fill="#e6e8ff"/><clipPath id="c"><circle cx="64" cy="64" r="64"/></clipPath><g clip-path="url(#c)"><path d="M24 128 Q24 96 64 94 Q104 96 104 128Z" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M56 84 V98 Q64 104 72 98 V84" fill="#ffffff" stroke="#111111" stroke-width="3"/><ellipse cx="64" cy="62" rx="24" ry="27" fill="#ffffff" stroke="#111111" stroke-width="3"/><path d="M42 50 Q44 34 64 34 Q84 34 86 50 Q72 40 56 44 Q48 46 42 50Z" fill="#111111"/><circle cx="55" cy="64" r="2.6" fill="#111111"/><circle cx="73" cy="64" r="2.6" fill="#111111"/><path d="M57 76 Q64 81 71 76" fill="none" stroke="#111111" stroke-width="2.5"/><path d="M48 62 H60 M68 62 H80" stroke="#111111" stroke-width="3"/><rect x="46" y="58" width="15" height="11" rx="3" fill="none" stroke="#111111" stroke-width="3"/><rect x="67" y="58" width="15" height="11" rx="3" fill="none" stroke="#111111" stroke-width="3"/></g></g></svg>' } };

  // code.ts
  var issues = [];
  var log = (m) => {
    console.log("[Aa NAD] " + m);
  };
  var warn = (m) => {
    issues.push(m);
    console.warn("[Aa NAD] " + m);
  };
  function hex(h) {
    h = h.replace("#", "");
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    const n = parseInt(h.slice(0, 6), 16);
    return { r: (n >> 16 & 255) / 255, g: (n >> 8 & 255) / 255, b: (n & 255) / 255, a: h.length === 8 ? parseInt(h.slice(6), 16) / 255 : 1 };
  }
  function rgba(s) {
    const m = s.match(/rgba?\(([^)]+)\)/);
    if (!m) return hex(s);
    const p = m[1].split(",").map((x) => parseFloat(x));
    return { r: p[0] / 255, g: p[1] / 255, b: p[2] / 255, a: p.length > 3 ? p[3] : 1 };
  }
  var col = (s) => s.startsWith("#") ? hex(s) : rgba(s);
  var VARS = {};
  var FLOATS = {};
  var colorCollection = null;
  var modeIds = { light: "" };
  var TEXT = {};
  var EFFECT = {};
  var ICON = {};
  var FAMILY = "Inter";
  var MONO = "Roboto Mono";
  var STYLE_FOR = {};
  var MONO_STYLE_FOR = {};
  async function setupFonts() {
    const all = await figma.listAvailableFontsAsync();
    const fam = (name) => all.filter((f) => f.fontName.family === name).map((f) => f.fontName.style);
    const pick = (styles, w) => {
      const want = { 400: ["Regular"], 500: ["Medium", "Regular"], 600: ["SemiBold", "Semi Bold", "Bold"], 700: ["Bold"], 800: ["ExtraBold", "Extra Bold", "Black", "Bold"] };
      return (want[w] || ["Regular"]).find((s2) => styles.includes(s2)) || styles.find((s2) => /regular/i.test(s2)) || styles[0];
    };
    let s = fam("Atkinson Hyperlegible Next");
    if (s.length) FAMILY = "Atkinson Hyperlegible Next";
    else {
      s = fam("Atkinson Hyperlegible");
      if (s.length) FAMILY = "Atkinson Hyperlegible";
      else {
        s = fam("Inter");
        warn("Atkinson Hyperlegible Next is not available in this Figma account \u2014 used Inter. Install the font from assets/fonts and run again.");
      }
    }
    let m = fam("Atkinson Hyperlegible Mono");
    if (m.length) MONO = "Atkinson Hyperlegible Mono";
    else {
      m = fam("Roboto Mono");
      if (!m.length) {
        MONO = FAMILY;
        m = s;
      }
    }
    for (const w of [400, 500, 600, 700, 800]) {
      STYLE_FOR[w] = pick(s, w);
      MONO_STYLE_FOR[w] = pick(m, w);
    }
    const loads = [];
    for (const w of [400, 500, 600, 700, 800]) {
      loads.push(figma.loadFontAsync({ family: FAMILY, style: STYLE_FOR[w] }));
      loads.push(figma.loadFontAsync({ family: MONO, style: MONO_STYLE_FOR[w] }));
    }
    await Promise.all(loads);
    log(`Fonts: ${FAMILY} / ${MONO}`);
  }
  var cssName = (n) => `var(--${n})`;
  function scopesFor(n) {
    if (/^(border|focus)/.test(n)) return ["STROKE_COLOR"];
    if (/^(bg|surface|overlay)/.test(n) || /-(bg|solid)$/.test(n)) return ["FRAME_FILL", "SHAPE_FILL"];
    if (/^action/.test(n)) return ["FRAME_FILL", "SHAPE_FILL", "STROKE_COLOR"];
    return ["TEXT_FILL", "SHAPE_FILL", "STROKE_COLOR"];
  }
  var semName = (n) => {
    const special = { bg: "bg/default", text: "text/default", icon: "icon/default", border: "border/default", action: "action/default", link: "link/default", overlay: "overlay/default", danger: "danger/default", warning: "warning/default", success: "success/default", info: "info/default" };
    if (special[n]) return special[n];
    const i = n.indexOf("-");
    return i < 0 ? n : n.slice(0, i) + "/" + n.slice(i + 1);
  };
  var primName = (n) => {
    const i = n.lastIndexOf("-");
    return n.slice(0, i) + "/" + n.slice(i + 1);
  };
  async function buildVariables() {
    const prim = figma.variables.createVariableCollection("Primitives");
    prim.renameMode(prim.modes[0].modeId, "Value");
    const pm = prim.modes[0].modeId;
    for (const [name, value, usage] of DATA.prim) {
      const v = figma.variables.createVariable("color/" + primName(name), prim, "COLOR");
      v.setValueForMode(pm, col(value));
      v.scopes = [];
      v.description = usage;
      v.setVariableCodeSyntax("WEB", cssName(name));
      VARS[name] = v;
    }
    for (const [name, target, usage] of DATA.alias) {
      const v = figma.variables.createVariable("brand/" + primName(name), prim, "COLOR");
      v.setValueForMode(pm, figma.variables.createVariableAlias(VARS[target]));
      v.scopes = [];
      v.description = usage;
      v.setVariableCodeSyntax("WEB", cssName(name));
      VARS[name] = v;
    }
    const c = figma.variables.createVariableCollection("Color");
    colorCollection = c;
    c.renameMode(c.modes[0].modeId, "Light");
    modeIds.light = c.modes[0].modeId;
    let extra = [];
    try {
      modeIds.dark = c.addMode("Dark");
      modeIds.hc = c.addMode("High contrast");
    } catch (e) {
      warn('This Figma plan allows one mode per collection, so Dark and High contrast were created as separate collections ("Color \xB7 Dark", "Color \xB7 High contrast"). Upgrade to a paid plan and run again for switchable modes.');
      extra = [figma.variables.createVariableCollection("Color \xB7 Dark"), figma.variables.createVariableCollection("Color \xB7 High contrast")];
      extra.forEach((x, i) => x.renameMode(x.modes[0].modeId, i ? "High contrast" : "Dark"));
    }
    const valueOf = (raw) => raw.startsWith("{") ? figma.variables.createVariableAlias(VARS[raw.slice(1, -1)]) : col(raw);
    const pending = DATA.sem;
    for (const [name, light, dark, hc, usage] of pending) {
      const v = figma.variables.createVariable(semName(name), c, "COLOR");
      v.setValueForMode(modeIds.light, valueOf(light));
      if (modeIds.dark) v.setValueForMode(modeIds.dark, valueOf(dark));
      if (modeIds.hc) v.setValueForMode(modeIds.hc, valueOf(hc));
      v.scopes = scopesFor(name);
      v.description = usage;
      v.setVariableCodeSyntax("WEB", cssName(name));
      VARS[name] = v;
      if (extra.length) {
        [dark, hc].forEach((raw, i) => {
          const x = figma.variables.createVariable(semName(name), extra[i], "COLOR");
          x.setValueForMode(extra[i].modes[0].modeId, valueOf(raw));
          x.scopes = scopesFor(name);
          x.setVariableCodeSyntax("WEB", cssName(name));
        });
      }
    }
    const sp = figma.variables.createVariableCollection("Spacing");
    sp.renameMode(sp.modes[0].modeId, "Value");
    for (const [name, value, usage] of DATA.space) {
      const v = figma.variables.createVariable("space/" + name.replace("space-", ""), sp, "FLOAT");
      v.setValueForMode(sp.modes[0].modeId, value);
      v.scopes = ["GAP"];
      v.description = usage;
      v.setVariableCodeSyntax("WEB", cssName(name));
      FLOATS[name] = v;
    }
    const rd = figma.variables.createVariableCollection("Radius");
    rd.renameMode(rd.modes[0].modeId, "Value");
    for (const [name, value, usage] of DATA.radius) {
      const v = figma.variables.createVariable("radius/" + name.replace("radius-", ""), rd, "FLOAT");
      v.setValueForMode(rd.modes[0].modeId, value);
      v.scopes = ["CORNER_RADIUS"];
      v.description = usage;
      v.setVariableCodeSyntax("WEB", cssName(name));
      FLOATS[name] = v;
    }
    log(`Variables: ${Object.keys(VARS).length} colours, ${Object.keys(FLOATS).length} numbers`);
  }
  function parseShadow(s) {
    if (!s || s === "none") return [];
    return s.split(/,(?![^(]*\))/).map((part) => {
      const c = part.match(/rgba?\([^)]+\)|#[0-9a-f]+/i);
      const nums = part.replace(c ? c[0] : "", "").trim().split(/\s+/).map((x) => parseFloat(x));
      return { type: "DROP_SHADOW", color: c ? col(c[0]) : { r: 0, g: 0, b: 0, a: 0.1 }, offset: { x: nums[0] || 0, y: nums[1] || 0 }, radius: nums[2] || 0, spread: nums[3] || 0, visible: true, blendMode: "NORMAL" };
    });
  }
  async function buildStyles() {
    for (const [group, name, family, size, lh, weight, ls, , usage] of DATA.type) {
      const st = figma.createTextStyle();
      st.name = `${group}/${name}`;
      st.fontName = { family: family === "mono" ? MONO : FAMILY, style: (family === "mono" ? MONO_STYLE_FOR : STYLE_FOR)[weight] || "Regular" };
      st.fontSize = size;
      st.lineHeight = { unit: "PIXELS", value: lh };
      st.letterSpacing = { unit: "PERCENT", value: parseFloat(ls) * 100 || 0 };
      if (name === "overline") st.textCase = "UPPER";
      st.description = usage;
      TEXT[name] = st;
    }
    for (const [name, value, usage] of DATA.shadow) {
      if (value === "none") continue;
      const e = figma.createEffectStyle();
      e.name = `Shadow/${name}`;
      e.effects = parseShadow(value);
      e.description = usage;
      EFFECT[name] = e;
    }
    log(`Styles: ${Object.keys(TEXT).length} text, ${Object.keys(EFFECT).length} effect`);
  }
  function paint(token) {
    const base = { type: "SOLID", color: { r: 0, g: 0, b: 0 } };
    const v = VARS[token];
    if (!v) {
      warn(`missing colour token ${token}`);
      return base;
    }
    return figma.variables.setBoundVariableForPaint(base, "color", v);
  }
  function bindFloat(n, field2, token) {
    const v = FLOATS[token];
    if (v) n.setBoundVariable(field2, v);
    else warn(`missing number token ${token}`);
  }
  function setup(f, name, o = {}) {
    f.name = name;
    f.layoutMode = o.dir || "HORIZONTAL";
    if (f.layoutMode !== "NONE") {
      f.primaryAxisSizingMode = "AUTO";
      f.counterAxisSizingMode = "AUTO";
      f.primaryAxisAlignItems = o.align || "MIN";
      f.counterAxisAlignItems = o.cross || "CENTER";
      if (o.pad) {
        const [y, x] = typeof o.pad === "string" ? [o.pad, o.pad] : o.pad;
        bindFloat(f, "paddingTop", y);
        bindFloat(f, "paddingBottom", y);
        bindFloat(f, "paddingLeft", x);
        bindFloat(f, "paddingRight", x);
      }
      if (o.gap) bindFloat(f, "itemSpacing", o.gap);
    }
    f.fills = o.fill ? [paint(o.fill)] : [];
    if (o.stroke) {
      f.strokes = [paint(o.stroke)];
      f.strokeWeight = o.strokeW || 1;
      f.strokeAlign = "INSIDE";
      if (o.dashed) f.dashPattern = [4, 4];
    }
    if (o.radius) for (const k of ["topLeftRadius", "topRightRadius", "bottomLeftRadius", "bottomRightRadius"]) bindFloat(f, k, o.radius);
    if (o.w || o.h) {
      f.resize(o.w || 100, o.h || 100);
      if (o.w) {
        if (f.layoutMode === "HORIZONTAL") f.primaryAxisSizingMode = "FIXED";
        else if (f.layoutMode === "VERTICAL") f.counterAxisSizingMode = "FIXED";
      }
      if (o.h) {
        if (f.layoutMode === "HORIZONTAL") f.counterAxisSizingMode = "FIXED";
        else if (f.layoutMode === "VERTICAL") f.primaryAxisSizingMode = "FIXED";
      }
    }
    return f;
  }
  var frame = (name, o = {}) => setup(figma.createFrame(), name, o);
  var comp = (name, o = {}) => setup(figma.createComponent(), name, o);
  async function text(chars, style, color = "text", name, width) {
    const t = figma.createText();
    const st = TEXT[style];
    t.fontName = st ? st.fontName : { family: FAMILY, style: STYLE_FOR[400] };
    if (width) {
      t.resize(width, 20);
      t.textAutoResize = "HEIGHT";
    }
    t.characters = chars;
    if (st) await t.setTextStyleIdAsync(st.id);
    t.fills = [paint(color)];
    t.name = name || chars.slice(0, 24);
    return t;
  }
  function add(parent, child) {
    parent.appendChild(child);
    return child;
  }
  function icon(name, variant, size, color) {
    const c = ICON[`${name}/${variant}`] || ICON[`${name}/outline`] || ICON["help-circle/outline"];
    const i = c.createInstance();
    i.name = "Icon";
    i.resize(size, size);
    recolor(i, color);
    return i;
  }
  function recolor(n, color) {
    const vectors = "findAll" in n ? n.findAll((x) => x.type === "VECTOR" || x.type === "BOOLEAN_OPERATION" || x.type === "ELLIPSE" || x.type === "RECTANGLE" || x.type === "POLYGON" || x.type === "LINE") : [];
    for (const v of vectors) {
      if (Array.isArray(v.fills) && v.fills.length) v.fills = [paint(color)];
      if (Array.isArray(v.strokes) && v.strokes.length) v.strokes = [paint(color)];
    }
  }
  function variantOf(set, props) {
    const want = Object.entries(props).map(([k, v]) => `${k}=${v}`);
    const c = set.children.find((ch) => want.every((w) => ch.name.split(", ").includes(w)));
    if (!c) throw new Error(`variant not found: ${want.join(", ")}`);
    return c;
  }
  function combine(page, comps, name, cols, description, x = 0, y = 0) {
    for (const c of comps) page.appendChild(c);
    const set = figma.combineAsVariants(comps, page);
    set.name = name;
    set.description = description;
    const gap = 24;
    const colW = [];
    const rowH = [];
    set.children.forEach((ch, i) => {
      const c = i % cols, r = Math.floor(i / cols);
      colW[c] = Math.max(colW[c] || 0, ch.width);
      rowH[r] = Math.max(rowH[r] || 0, ch.height);
    });
    set.children.forEach((ch, i) => {
      const c = i % cols, r = Math.floor(i / cols);
      ch.x = gap + colW.slice(0, c).reduce((a, b) => a + b + gap, 0);
      ch.y = gap + rowH.slice(0, r).reduce((a, b) => a + b + gap, 0);
    });
    let mx = 0, my = 0;
    for (const ch of set.children) {
      mx = Math.max(mx, ch.x + ch.width);
      my = Math.max(my, ch.y + ch.height);
    }
    set.resizeWithoutConstraints(mx + gap, my + gap);
    set.x = x;
    set.y = y;
    set.strokes = [{ type: "SOLID", color: { r: 0.592, g: 0.278, b: 1 } }];
    set.dashPattern = [6, 4];
    set.strokeWeight = 1;
    set.cornerRadius = 8;
    return set;
  }
  function own(root, pred) {
    const out = [];
    const walk = (n) => {
      if (pred(n)) out.push(n);
      if (n.type !== "INSTANCE" && "children" in n) for (const c of n.children) walk(c);
    };
    for (const c of root.children) walk(c);
    return out;
  }
  function linkText(set, prop, def, nodeName) {
    const key = set.addComponentProperty(prop, "TEXT", def);
    for (const v of set.children) for (const t of own(v, (n) => n.type === "TEXT" && n.name === nodeName)) t.componentPropertyReferences = { characters: key };
  }
  function linkBool(set, prop, def, nodeName) {
    const key = set.addComponentProperty(prop, "BOOLEAN", def);
    for (const v of set.children) for (const t of own(v, (n) => n.name === nodeName)) t.componentPropertyReferences = Object.assign({}, t.componentPropertyReferences, { visible: key });
  }
  function linkSwap(set, prop, defIcon, nodeName) {
    const def = ICON[defIcon];
    if (!def) return;
    const key = set.addComponentProperty(prop, "INSTANCE_SWAP", def.id, { preferredValues: Object.keys(ICON).filter((k) => k.endsWith("/outline")).slice(0, 24).map((k) => ({ type: "COMPONENT", key: ICON[k].key })) });
    for (const v of set.children) for (const t of own(v, (n) => n.type === "INSTANCE" && n.name === nodeName)) t.componentPropertyReferences = Object.assign({}, t.componentPropertyReferences, { mainComponent: key });
  }
  function focusRing(n) {
    const ring = (spread, token) => {
      const e = { type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 1 }, offset: { x: 0, y: 0 }, radius: 0, spread, visible: true, blendMode: "NORMAL", showShadowBehindNode: true };
      try {
        return figma.variables.setBoundVariableForEffect(e, "color", VARS[token]);
      } catch (err) {
        return e;
      }
    };
    n.effects = [ring(2, "bg"), ring(4, "focus-ring")];
  }
  var LIMITED = false;
  var GROUP_PAGES = {};
  var CURSOR = /* @__PURE__ */ new Map();
  var SECTIONS = [];
  function probePageLimit() {
    const made = [];
    try {
      for (let i = 0; i < 3; i++) made.push(figma.createPage());
    } catch (e) {
      LIMITED = true;
    }
    for (const p of made) p.remove();
    if (LIMITED) warn("This Figma plan allows 3 pages per file, so the library is laid out on 3 pages (Cover & Foundations, Assets, Components) with one section per part.");
  }
  function groupPage(group) {
    if (group === "Cover & Foundations") return figma.root.children[0];
    if (!GROUP_PAGES[group]) {
      const p = figma.createPage();
      p.name = group;
      GROUP_PAGES[group] = p;
    }
    return GROUP_PAGES[group];
  }
  async function docPage(name, title, desc, group = "Components") {
    let host;
    if (LIMITED) {
      const s = figma.createSection();
      s.name = name;
      groupPage(group).appendChild(s);
      host = s;
      SECTIONS.push(s);
    } else {
      const page = figma.createPage();
      page.name = name;
      host = page;
    }
    const head = frame("Header", { dir: "VERTICAL", gap: "space-8", fill: null });
    head.counterAxisAlignItems = "MIN";
    add(head, await text(title, "heading-1", "text", "Title"));
    add(head, await text(desc, "body-lg", "text-muted", "Description", 880));
    host.appendChild(head);
    head.x = 0;
    head.y = -40 - head.height;
    return host;
  }
  function finishHost(host) {
    if (host.type !== "SECTION") return;
    const kids = host.children;
    if (!kids.length) return;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const k of kids) {
      x0 = Math.min(x0, k.x);
      y0 = Math.min(y0, k.y);
      x1 = Math.max(x1, k.x + k.width);
      y1 = Math.max(y1, k.y + k.height);
    }
    const pad = 80;
    for (const k of kids) {
      k.x += pad - x0;
      k.y += pad - y0;
    }
    host.resizeWithoutConstraints(x1 - x0 + pad * 2, y1 - y0 + pad * 2);
    const page = host.parent;
    const y = CURSOR.get(page) || 0;
    host.x = 0;
    host.y = y;
    CURSOR.set(page, y + host.height + 200);
  }
  async function buildIcons(page) {
    let x = 0, y = 0, i = 0;
    for (const [name, v] of Object.entries(DATA.icons)) {
      for (const variant of ["outline", "filled"]) {
        const svg = figma.createNodeFromSvg(v[variant]);
        svg.rescale(24 / svg.width);
        const c = figma.createComponent();
        c.name = `Icon/${name}/${variant}`;
        c.resize(24, 24);
        c.fills = [];
        c.appendChild(svg);
        svg.x = 0;
        svg.y = 0;
        svg.name = "glyph";
        svg.fills = [];
        svg.constraints = { horizontal: "SCALE", vertical: "SCALE" };
        for (const d of svg.findAll(() => true)) if ("constraints" in d) d.constraints = { horizontal: "SCALE", vertical: "SCALE" };
        recolor(c, "icon");
        c.description = `Ionicons ${name} (${variant}). MIT.`;
        page.appendChild(c);
        c.x = x + (variant === "filled" ? 32 : 0);
        c.y = y;
        ICON[`${name}/${variant}`] = c;
      }
      i++;
      x += 96;
      if (i % 10 === 0) {
        x = 0;
        y += 48;
      }
    }
    log(`Icons: ${Object.keys(ICON).length}`);
  }
  async function placeSvgs(page, title, svgs, y, w, perRow, bg) {
    add(page, await text(title, "heading-3", "text", title)).y = y;
    let i = 0;
    for (const [name, svg] of Object.entries(svgs)) {
      const n = figma.createNodeFromSvg(svg);
      n.name = name;
      n.rescale(w / n.width);
      if (bg) {
        const f = frame(name, { dir: "NONE", fill: bg, radius: "radius-md" });
        f.resize(w + 32, n.height + 32);
        f.appendChild(n);
        n.x = 16;
        n.y = 16;
        page.appendChild(f);
        f.x = i % perRow * (w + 56);
        f.y = y + 48 + Math.floor(i / perRow) * (n.height + 64);
      } else {
        page.appendChild(n);
        n.x = i % perRow * (w + 40);
        n.y = y + 48 + Math.floor(i / perRow) * (n.height + 40);
      }
      i++;
    }
  }
  async function buildFoundations(page) {
    const root = frame("Foundations", { dir: "VERTICAL", gap: "space-48", fill: "bg", pad: "space-48" });
    root.counterAxisAlignItems = "MIN";
    page.appendChild(root);
    add(root, await text("Semantic colours", "heading-2"));
    const cols = frame("Modes", { gap: "space-24", fill: null });
    cols.counterAxisAlignItems = "MIN";
    add(root, cols);
    const modes = [["Light", modeIds.light], ["Dark", modeIds.dark], ["High contrast", modeIds.hc]];
    for (const [label, id] of modes) {
      if (!id) continue;
      const c = frame(label, { dir: "VERTICAL", gap: "space-8", fill: "bg", pad: "space-24", radius: "radius-md", stroke: "border" });
      c.counterAxisAlignItems = "MIN";
      if (colorCollection) c.setExplicitVariableModeForCollection(colorCollection, id);
      add(c, await text(label, "heading-4"));
      for (const [name] of DATA.sem) {
        const row = frame(name, { gap: "space-12", fill: null });
        const sw = add(row, figma.createRectangle());
        sw.resize(40, 24);
        sw.fills = [paint(name)];
        sw.strokes = [paint("border")];
        sw.cornerRadius = 4;
        add(row, await text(name, "code-sm", "text"));
        add(c, row);
      }
      add(cols, c);
    }
    add(root, await text("Palette", "heading-2"));
    const hues = ["gray", "red", "orange", "amber", "yellow", "lime", "green", "teal", "cyan", "blue", "indigo", "violet", "pink"];
    for (const h of hues) {
      const row = frame(h, { gap: "space-4", fill: null });
      add(row, await text(h, "label", "text", h, 72));
      for (const s of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]) {
        const r = add(row, figma.createRectangle());
        r.name = `${h}-${s}`;
        r.resize(56, 40);
        r.cornerRadius = 4;
        r.fills = [paint(`${h}-${s}`)];
      }
      add(root, row);
    }
    add(root, await text("Typography", "heading-2"));
    for (const [, name, , size, lh, weight, , sample] of DATA.type) {
      const row = frame(name, { gap: "space-24", fill: null });
      row.counterAxisAlignItems = "CENTER";
      add(row, await text(`${name}
${size}/${lh} \xB7 ${weight}`, "code-sm", "text-muted", "spec", 160));
      add(row, await text(sample, name, "text", "sample"));
      add(root, row);
    }
    add(root, await text("Spacing", "heading-2"));
    for (const [name, value] of DATA.space) {
      const row = frame(name, { gap: "space-16", fill: null });
      add(row, await text(name, "code-sm", "text-muted", name, 96));
      const bar = add(row, figma.createRectangle());
      bar.resize(Math.max(value, 1), 16);
      bar.fills = [paint("action")];
      if (value > 0 && FLOATS[name]) {
        try {
          bar.setBoundVariable("width", FLOATS[name]);
        } catch (e) {
        }
      }
      add(root, row);
    }
    add(root, await text("Radius", "heading-2"));
    const rr = frame("Radii", { gap: "space-16", fill: null });
    add(root, rr);
    for (const [name] of DATA.radius) {
      const b = frame(name, { dir: "VERTICAL", fill: "surface", stroke: "border-strong", strokeW: 2, radius: name, pad: "space-8", w: 96, h: 96, align: "MAX" });
      add(b, await text(name, "code-sm", "text-muted"));
      add(rr, b);
    }
    add(root, await text("Elevation", "heading-2"));
    const er = frame("Shadows", { gap: "space-24", fill: null, pad: "space-16" });
    add(root, er);
    for (const [name, st] of Object.entries(EFFECT)) {
      const b = frame(name, { dir: "VERTICAL", fill: "surface-raised", radius: "radius-md", w: 160, h: 96, align: "CENTER", cross: "CENTER" });
      await b.setEffectStyleIdAsync(st.id);
      add(b, await text(name, "code-sm", "text-muted"));
      add(er, b);
    }
  }
  var BTN_FILL = { Primary: ["action", "on-action", void 0], Secondary: ["surface", "text", "border-strong"], Tertiary: ["surface-sunken", "text", void 0], Ghost: [null, "text", void 0], Danger: ["danger-solid", "on-danger-solid", void 0] };
  var BTN_HOVER = { Primary: "action-hover", Secondary: "surface-hover", Tertiary: "surface-pressed", Ghost: "surface-hover", Danger: "danger-solid" };
  var BTN_PRESS = { Primary: "action-pressed", Secondary: "surface-pressed", Tertiary: "surface-pressed", Ghost: "surface-pressed", Danger: "danger-solid" };
  var SIZE = { sm: { h: 32, pad: "space-12", font: "label-sm", icon: 16, gap: "space-4" }, md: { h: 40, pad: "space-16", font: "label", icon: 16, gap: "space-8" }, lg: { h: 48, pad: "space-24", font: "label-lg", icon: 20, gap: "space-8" } };
  async function buildButton(page) {
    const comps = [];
    for (const variant of Object.keys(BTN_FILL)) for (const size of ["sm", "md", "lg"]) for (const state of ["Default", "Hover", "Pressed", "Focus", "Disabled"]) {
      const [fill, fg, stroke] = BTN_FILL[variant];
      const z = SIZE[size];
      const f = state === "Hover" ? BTN_HOVER[variant] : state === "Pressed" ? BTN_PRESS[variant] : fill;
      const c = comp(`Variant=${variant}, Size=${size}, State=${state}`, { pad: ["space-0", z.pad], gap: z.gap, fill: f, stroke, radius: "radius-sm", h: z.h, align: "CENTER" });
      c.primaryAxisSizingMode = "AUTO";
      const i1 = add(c, icon("add", "outline", z.icon, fg));
      i1.name = "Icon start";
      i1.visible = false;
      add(c, await text("Button", z.font, fg, "Label"));
      const i2 = add(c, icon("arrow-forward", "outline", z.icon, fg));
      i2.name = "Icon end";
      i2.visible = false;
      if (state === "Focus") focusRing(c);
      if (state === "Disabled") c.opacity = 0.4;
      comps.push(c);
    }
    const set = combine(page, comps, "Button", 5, "The one way to trigger an action. Primary (ink) at most once per view. Verb-first, sentence case. Sizes: sm 32 (dense desktop), md 40 (web default), lg 48 (mobile default).");
    linkText(set, "Label", "Button", "Label");
    linkBool(set, "Show start icon", false, "Icon start");
    linkBool(set, "Show end icon", false, "Icon end");
    linkSwap(set, "Start icon", "add/outline", "Icon start");
    linkSwap(set, "End icon", "arrow-forward/outline", "Icon end");
    return set;
  }
  async function buildIconButton(page) {
    const comps = [];
    for (const variant of ["Ghost", "Secondary", "Primary"]) for (const size of ["sm", "md", "lg"]) for (const state of ["Default", "Hover", "Focus", "Disabled"]) {
      const [fill, fg, stroke] = BTN_FILL[variant];
      const z = SIZE[size];
      const c = comp(`Variant=${variant}, Size=${size}, State=${state}`, { fill: state === "Hover" ? BTN_HOVER[variant] : fill, stroke, radius: "radius-sm", w: z.h, h: z.h, align: "CENTER", cross: "CENTER" });
      add(c, icon("heart", "outline", size === "lg" ? 24 : 20, fg)).name = "Icon";
      if (state === "Focus") focusRing(c);
      if (state === "Disabled") c.opacity = 0.4;
      comps.push(c);
    }
    const set = combine(page, comps, "IconButton", 4, "Icon-only button. Always give it an accessible label in code (label prop). lg = 48px touch target.");
    linkSwap(set, "Icon", "heart/outline", "Icon");
    return set;
  }
  async function field(c, label, inner, helper2, helperColor, error) {
    add(c, await text(label, "label", "text", "Label"));
    add(c, inner);
    inner.layoutSizingHorizontal = "FILL";
    const foot = frame("Helper", { gap: "space-4", fill: null });
    if (error) add(foot, icon("alert-circle", "filled", 16, "danger")).name = "Error icon";
    add(foot, await text(helper2, "body-sm", helperColor, "Helper text"));
    add(c, foot);
  }
  async function buildTextField(page) {
    const comps = [];
    for (const size of ["md", "lg"]) for (const state of ["Default", "Hover", "Focus", "Filled", "Error", "Disabled"]) {
      const c = comp(`Size=${size}, State=${state}`, { dir: "VERTICAL", gap: "space-4", fill: null, w: 320 });
      c.counterAxisAlignItems = "MIN";
      const stroke = state === "Error" ? "danger" : state === "Hover" || state === "Focus" ? "text" : state === "Disabled" ? "border" : "border-strong";
      const box = frame("Input", { pad: ["space-0", "space-12"], gap: "space-8", fill: state === "Disabled" ? "surface-sunken" : "surface", stroke, strokeW: state === "Focus" || state === "Error" ? 2 : 1, radius: "radius-sm", h: size === "lg" ? 48 : 40 });
      add(box, icon("search", "outline", 20, "icon-muted")).name = "Icon";
      const value = state === "Filled" || state === "Error" ? "jane@example" : "Placeholder";
      const t = add(box, await text(value, "body", state === "Disabled" ? "text-disabled" : value === "Placeholder" ? "text-subtle" : "text", "Value"));
      t.layoutGrow = 1;
      if (state === "Focus") focusRing(box);
      await field(c, "Label", box, state === "Error" ? "Enter a valid email, like name@example.com" : "Helper text", state === "Error" ? "danger" : "text-muted", state === "Error");
      comps.push(c);
    }
    const set = combine(page, comps, "TextField", 6, "Single-line input. The label is always visible (never placeholder-only); errors say how to fix it and use an icon, not colour alone. md 40px (web), lg 48px (mobile, 16px text prevents iOS zoom).");
    linkText(set, "Label", "Label", "Label");
    linkText(set, "Value", "Placeholder", "Value");
    linkText(set, "Helper", "Helper text", "Helper text");
    linkBool(set, "Show icon", true, "Icon");
    linkBool(set, "Show helper", true, "Helper");
    linkSwap(set, "Leading icon", "search/outline", "Icon");
    return set;
  }
  async function buildSelect(page) {
    const comps = [];
    for (const state of ["Default", "Focus", "Error", "Disabled"]) {
      const c = comp(`State=${state}`, { dir: "VERTICAL", gap: "space-4", fill: null, w: 280 });
      c.counterAxisAlignItems = "MIN";
      const box = frame("Input", { pad: ["space-0", "space-12"], gap: "space-8", fill: state === "Disabled" ? "surface-sunken" : "surface", stroke: state === "Error" ? "danger" : state === "Focus" ? "text" : state === "Disabled" ? "border" : "border-strong", strokeW: state === "Focus" || state === "Error" ? 2 : 1, radius: "radius-sm", h: 40 });
      add(box, await text("Choose\u2026", "body", state === "Disabled" ? "text-disabled" : "text", "Value")).layoutGrow = 1;
      add(box, icon("chevron-down", "outline", 20, "icon-muted")).name = "Chevron";
      if (state === "Focus") focusRing(box);
      await field(c, "Country", box, state === "Error" ? "Choose a country." : "Helper text", state === "Error" ? "danger" : "text-muted", state === "Error");
      comps.push(c);
    }
    const set = combine(page, comps, "Select", 4, "Native select. Use for 5\u201315 known options; use Combobox for long or searchable lists.");
    linkText(set, "Label", "Country", "Label");
    linkText(set, "Value", "Choose\u2026", "Value");
    linkText(set, "Helper", "Helper text", "Helper text");
    linkBool(set, "Show helper", true, "Helper");
    return set;
  }
  async function control(c, label, state) {
    const t = add(c, await text(label, "body", state === "Disabled" ? "text-disabled" : "text", "Label"));
    return t;
  }
  async function buildCheckbox(page) {
    const comps = [];
    for (const checked of ["False", "True", "Indeterminate"]) for (const state of ["Default", "Hover", "Focus", "Error", "Disabled"]) {
      const c = comp(`Checked=${checked}, State=${state}`, { gap: "space-12", fill: null });
      const on = checked !== "False";
      const box = frame("Box", { fill: on ? "action" : "surface", stroke: state === "Error" ? "danger" : on ? "action" : state === "Hover" ? "text" : "border-strong", strokeW: 2, radius: "radius-sm", w: 20, h: 20, align: "CENTER", cross: "CENTER" });
      if (on) add(box, icon(checked === "True" ? "checkmark" : "remove", "outline", 16, "on-action")).name = "Mark";
      if (state === "Focus") focusRing(box);
      add(c, box);
      await control(c, "Checkbox label", state);
      if (state === "Disabled") box.opacity = 0.4;
      comps.push(c);
    }
    const set = combine(page, comps, "Checkbox", 5, "Independent yes/no choices. 20px box, 2px border-strong (\u22653:1); checked = action fill. Indeterminate for \u201Cselect all\u201D.");
    linkText(set, "Label", "Checkbox label", "Label");
    return set;
  }
  async function buildRadio(page) {
    const comps = [];
    for (const sel of ["False", "True"]) for (const state of ["Default", "Focus", "Error", "Disabled"]) {
      const c = comp(`Selected=${sel}, State=${state}`, { gap: "space-12", fill: null });
      const ring = frame("Ring", { fill: "surface", stroke: state === "Error" ? "danger" : sel === "True" ? "action" : "border-strong", strokeW: 2, radius: "radius-full", w: 20, h: 20, align: "CENTER", cross: "CENTER" });
      if (sel === "True") {
        const d = add(ring, figma.createEllipse());
        d.name = "Dot";
        d.resize(10, 10);
        d.fills = [paint("action")];
      }
      if (state === "Focus") focusRing(ring);
      if (state === "Disabled") ring.opacity = 0.4;
      add(c, ring);
      await control(c, "Radio label", state);
      comps.push(c);
    }
    const set = combine(page, comps, "Radio", 4, "One choice from 2\u20136 visible options; group in a RadioGroup with a legend. Arrow keys move the selection.");
    linkText(set, "Label", "Radio label", "Label");
    return set;
  }
  async function buildSwitch(page) {
    const comps = [];
    for (const on of ["False", "True"]) for (const state of ["Default", "Focus", "Disabled"]) {
      const c = comp(`On=${on}, State=${state}`, { gap: "space-12", fill: null });
      const isOn = on === "True";
      const track = frame("Track", { dir: "NONE", fill: isOn ? "action" : "surface", stroke: isOn ? "action" : "border-strong", strokeW: 2, radius: "radius-full", w: 44, h: 24 });
      if (state === "Disabled") {
        track.dashPattern = [3, 3];
        track.opacity = 0.4;
      }
      const thumb = add(track, figma.createEllipse());
      thumb.name = "Thumb";
      thumb.resize(16, 16);
      thumb.x = isOn ? 24 : 4;
      thumb.y = 4;
      if (state === "Disabled") {
        thumb.fills = [];
        thumb.strokes = [paint("border-strong")];
        thumb.strokeWeight = 2;
      } else thumb.fills = [paint(isOn ? "on-action" : "border-strong")];
      if (state === "Focus") focusRing(track);
      add(c, track);
      await control(c, "Switch label", state);
      comps.push(c);
    }
    const set = combine(page, comps, "Switch", 3, "Instant on/off setting (no Save). Disabled = dashed, dimmed track with a hollow knob so it is never confused with \u201Coff\u201D.");
    linkText(set, "Label", "Switch label", "Label");
    return set;
  }
  var TONES = { Neutral: ["surface-sunken", "text", "action", "on-action", "border-strong"], Info: ["info-bg", "info", "info-solid", "on-info-solid", "info-border"], Success: ["success-bg", "success", "success-solid", "on-success-solid", "success-border"], Warning: ["warning-bg", "warning", "warning-solid", "on-warning-solid", "warning-border"], Danger: ["danger-bg", "danger", "danger-solid", "on-danger-solid", "danger-border"] };
  var TONE_ICON = { Neutral: "information-circle", Info: "information-circle", Success: "checkmark-circle", Warning: "warning", Danger: "alert-circle" };
  async function buildBadge(page) {
    const comps = [];
    for (const tone of Object.keys(TONES)) for (const style of ["Subtle", "Solid", "Outline"]) {
      const [bg, fg, solid, on, bd] = TONES[tone];
      const fill = style === "Subtle" ? bg : style === "Solid" ? solid : null;
      const color = style === "Solid" ? on : fg;
      const c = comp(`Tone=${tone}, Style=${style}`, { pad: ["space-0", "space-8"], gap: "space-4", fill, stroke: style === "Outline" ? bd : void 0, radius: "radius-sm", h: 24 });
      add(c, icon(TONE_ICON[tone], "outline", 14, color)).name = "Icon";
      add(c, await text(tone === "Neutral" ? "Draft" : tone, "label-sm", color, "Label"));
      comps.push(c);
    }
    const set = combine(page, comps, "Badge", 3, "Short, non-interactive status. Always pair colour with a word or icon.");
    linkText(set, "Label", "Badge", "Label");
    linkBool(set, "Show icon", true, "Icon");
    linkSwap(set, "Icon", "information-circle/outline", "Icon");
    return set;
  }
  async function buildTag(page) {
    const comps = [];
    for (const type of ["Static", "Removable", "Selectable", "Selected", "Disabled"]) {
      const sel = type === "Selected";
      const c = comp(`Type=${type}`, { pad: ["space-0", "space-12"], gap: "space-4", fill: sel ? "action" : "surface-sunken", stroke: sel ? "action" : "border-strong", radius: "radius-sm", h: 32 });
      if (sel) add(c, icon("checkmark", "outline", 14, "on-action")).name = "Check";
      add(c, await text("Tag", "label", sel ? "on-action" : "text", "Label"));
      if (type === "Removable" || type === "Disabled") add(c, icon("close", "outline", 14, "text")).name = "Remove";
      if (type === "Disabled") c.opacity = 0.4;
      comps.push(c);
    }
    const set = combine(page, comps, "Tag", 5, "Keyword, filter chip or chosen value. Remove button is its own 32px target named \u201CRemove <tag>\u201D.");
    linkText(set, "Label", "Tag", "Label");
    return set;
  }
  async function buildAvatar(page) {
    const comps = [];
    for (const type of ["Initials", "Illustration", "Icon"]) for (const size of [24, 32, 40, 48, 64]) {
      const c = comp(`Type=${type}, Size=${size}`, { fill: type === "Initials" ? "blue-100" : type === "Icon" ? "gray-100" : null, radius: "radius-full", w: size, h: size, align: "CENTER", cross: "CENTER" });
      c.clipsContent = true;
      if (type === "Initials") {
        const t = add(c, await text("AR", "label", "blue-800", "Initials"));
        t.fontSize = Math.round(size * 0.4);
      } else if (type === "Icon") add(c, icon("person", "filled", Math.round(size * 0.55), "gray-700"));
      else {
        c.layoutMode = "NONE";
        const a = figma.createNodeFromSvg(DATA.avatars["avatar-01"]);
        a.rescale(size / a.width);
        a.name = "Illustration";
        c.appendChild(a);
        a.x = 0;
        a.y = 0;
      }
      comps.push(c);
    }
    const set = combine(page, comps, "Avatar", 5, "A person: illustration or photo \u2192 initials \u2192 icon. Always has a name (accessible label). Colour comes from a palette hue (-100 fill, -800 text).");
    return set;
  }
  async function buildCard(page, button) {
    const comps = [];
    for (const variant of ["Outline", "Elevated", "Filled"]) {
      const c = comp(`Variant=${variant}`, { dir: "VERTICAL", fill: variant === "Filled" ? "surface-sunken" : "surface", stroke: variant === "Outline" ? "border" : void 0, radius: "radius-md", w: 320 });
      c.counterAxisAlignItems = "MIN";
      c.clipsContent = true;
      if (variant === "Elevated" && EFFECT["shadow-2"]) await c.setEffectStyleIdAsync(EFFECT["shadow-2"].id);
      const body = frame("Body", { dir: "VERTICAL", gap: "space-8", pad: "space-16", fill: null });
      body.counterAxisAlignItems = "MIN";
      add(body, await text("Card title", "heading-5", "text", "Title"));
      add(body, await text("Supporting text that explains what this card is about.", "body-sm", "text-muted", "Body", 288));
      add(c, body);
      body.layoutSizingHorizontal = "FILL";
      const foot = frame("Footer", { gap: "space-8", pad: ["space-12", "space-16"], fill: null, stroke: "border" });
      foot.strokeTopWeight = 1;
      foot.strokeBottomWeight = 0;
      foot.strokeLeftWeight = 0;
      foot.strokeRightWeight = 0;
      const b = variantOf(button, { Variant: "Primary", Size: "sm", State: "Default" }).createInstance();
      add(foot, b);
      add(c, foot);
      foot.layoutSizingHorizontal = "FILL";
      comps.push(c);
    }
    const set = combine(page, comps, "Card", 3, "Groups content about one subject. Outline by default; elevated for floating content. Whole-card links use one stretched title link.");
    linkText(set, "Title", "Card title", "Title");
    linkText(set, "Body", "Supporting text that explains what this card is about.", "Body");
    linkBool(set, "Show footer", true, "Footer");
    return set;
  }
  async function buildAlert(page) {
    const comps = [];
    for (const tone of ["Info", "Success", "Warning", "Danger", "Neutral"]) {
      const [bg, fg, , , bd] = TONES[tone];
      const c = comp(`Tone=${tone}`, { gap: "space-12", pad: ["space-12", "space-16"], fill: tone === "Neutral" ? "surface-sunken" : bg, stroke: tone === "Neutral" ? "border" : bd, radius: "radius-md", w: 480 });
      c.counterAxisAlignItems = "MIN";
      add(c, icon(TONE_ICON[tone], "filled", 20, tone === "Neutral" ? "icon" : fg)).name = "Icon";
      const body = frame("Content", { dir: "VERTICAL", gap: "space-4", fill: null });
      body.counterAxisAlignItems = "MIN";
      add(body, await text(`${tone} title`, "label-lg", "text", "Title"));
      add(body, await text("Explain what happened and what to do next.", "body-sm", "text", "Body", 380));
      add(c, body);
      body.layoutGrow = 1;
      add(c, icon("close", "outline", 20, "icon")).name = "Dismiss";
      comps.push(c);
    }
    const set = combine(page, comps, "Alert", 1, "Inline, persistent message. Each tone has its own icon so meaning never relies on colour.");
    linkText(set, "Title", "Title", "Title");
    linkText(set, "Body", "Explain what happened and what to do next.", "Body");
    linkBool(set, "Dismissible", true, "Dismiss");
    return set;
  }
  async function buildToast(page) {
    const comps = [];
    for (const tone of ["Neutral", "Success", "Danger"]) {
      const c = comp(`Tone=${tone}`, { gap: "space-12", pad: ["space-12", "space-16"], fill: "surface-inverse", radius: "radius-md", w: 360 });
      c.counterAxisAlignItems = "MIN";
      if (EFFECT["shadow-3"]) await c.setEffectStyleIdAsync(EFFECT["shadow-3"].id);
      const ic = add(c, icon(TONE_ICON[tone], "filled", 20, tone === "Success" ? "green-300" : tone === "Danger" ? "red-300" : "text-inverse"));
      ic.name = "Icon";
      ic.visible = tone !== "Neutral";
      const body = frame("Content", { dir: "VERTICAL", gap: "space-4", fill: null });
      body.counterAxisAlignItems = "MIN";
      add(body, await text(tone === "Danger" ? "Message not sent" : tone === "Success" ? "Project created" : "Link copied", "label", "text-inverse", "Title"));
      add(body, await text("Optional description.", "body-sm", "text-inverse", "Description", 220));
      add(c, body);
      body.layoutGrow = 1;
      add(c, await text("Undo", "label", "text-inverse", "Action")).textDecoration = "UNDERLINE";
      add(c, icon("close", "outline", 20, "text-inverse")).name = "Dismiss";
      comps.push(c);
    }
    const set = combine(page, comps, "Toast", 3, "Brief, non-blocking confirmation. Auto-hides after 5s unless it has an action; pauses on hover/focus; swipe to dismiss.");
    linkText(set, "Title", "Title", "Title");
    linkText(set, "Description", "Optional description.", "Description");
    linkText(set, "Action", "Undo", "Action");
    linkBool(set, "Show description", true, "Description");
    linkBool(set, "Show action", true, "Action");
    return set;
  }
  async function buildTabs(page) {
    const comps = [];
    for (const state of ["Selected", "Default", "Hover", "Disabled"]) {
      const c = comp(`State=${state}`, { dir: "VERTICAL", fill: state === "Hover" ? "surface-hover" : null, h: 48, align: "SPACE_BETWEEN" });
      c.counterAxisAlignItems = "CENTER";
      const row = frame("Content", { gap: "space-8", pad: ["space-12", "space-12"], fill: null });
      add(row, icon("home", state === "Selected" ? "filled" : "outline", 20, state === "Disabled" ? "text-disabled" : state === "Selected" ? "text" : "text-muted")).name = "Icon";
      add(row, await text("Tab", "label", state === "Disabled" ? "text-disabled" : state === "Selected" ? "text" : "text-muted", "Label"));
      add(c, row);
      const ink = add(c, figma.createRectangle());
      ink.name = "Ink";
      ink.resize(40, 3);
      ink.fills = state === "Selected" ? [paint("action")] : [];
      ink.layoutAlign = "STRETCH";
      comps.push(c);
    }
    const set = combine(page, comps, "Tab", 4, "One tab. Compose in a row over a 1px border; the selected tab has the ink bar and a filled icon. Arrow keys move and select.");
    linkText(set, "Label", "Tab", "Label");
    linkBool(set, "Show icon", false, "Icon");
    linkSwap(set, "Icon", "home/outline", "Icon");
    const bar = comp("Tabs", { gap: "space-8", fill: null, stroke: "border" });
    bar.strokeTopWeight = 0;
    bar.strokeLeftWeight = 0;
    bar.strokeRightWeight = 0;
    bar.strokeBottomWeight = 1;
    bar.counterAxisAlignItems = "MAX";
    const labels = ["Overview", "Files", "Settings", "Archive"];
    labels.forEach((l, i) => {
      const t = variantOf(set, { State: i === 0 ? "Selected" : i === 3 ? "Disabled" : "Default" }).createInstance();
      add(bar, t);
    });
    bar.description = "Example tab bar built from Tab instances.";
    page.appendChild(bar);
    bar.x = 0;
    bar.y = set.y + set.height + 64;
    return set;
  }
  async function buildModal(page, button) {
    const comps = [];
    for (const size of ["sm", "md"]) for (const kind of ["Dialog", "Destructive"]) {
      const c = comp(`Size=${size}, Kind=${kind}`, { dir: "VERTICAL", fill: "surface-raised", radius: "radius-md", w: size === "sm" ? 400 : 560 });
      c.counterAxisAlignItems = "MIN";
      if (EFFECT["shadow-4"]) await c.setEffectStyleIdAsync(EFFECT["shadow-4"].id);
      const head = frame("Header", { gap: "space-16", pad: ["space-24", "space-24"], fill: null });
      head.counterAxisAlignItems = "MIN";
      const tt = frame("Titles", { dir: "VERTICAL", gap: "space-4", fill: null });
      tt.counterAxisAlignItems = "MIN";
      add(tt, await text(kind === "Destructive" ? "Delete project?" : "Dialog title", "heading-3", "text", "Title"));
      add(tt, await text(kind === "Destructive" ? "This project and its 24 files will be permanently deleted." : "A short description of what this dialog is for.", "body", "text-muted", "Description", size === "sm" ? 304 : 464));
      add(head, tt);
      tt.layoutGrow = 1;
      add(head, icon("close", "outline", 20, "icon")).name = "Close";
      add(c, head);
      head.layoutSizingHorizontal = "FILL";
      const foot = frame("Footer", { gap: "space-8", pad: ["space-16", "space-24"], fill: null, align: "MAX" });
      add(foot, variantOf(button, { Variant: "Secondary", Size: "md", State: "Default" }).createInstance());
      add(foot, variantOf(button, { Variant: kind === "Destructive" ? "Danger" : "Primary", Size: "md", State: "Default" }).createInstance());
      add(c, foot);
      foot.layoutSizingHorizontal = "FILL";
      comps.push(c);
    }
    const set = combine(page, comps, "Modal", 2, "Blocking dialog. Focus is trapped, Esc closes, focus returns to the trigger. Use Destructive (alertdialog) for irreversible actions; secondary first, primary last.");
    linkText(set, "Title", "Dialog title", "Title");
    linkText(set, "Description", "A short description of what this dialog is for.", "Description");
    return set;
  }
  function collectSets() {
    const out = {};
    for (const n of figma.root.findAllWithCriteria({ types: ["COMPONENT_SET"] })) out[n.name] = n;
    for (const n of figma.root.findAllWithCriteria({ types: ["COMPONENT"] })) if (!n.name.startsWith("Icon/") && n.parent && n.parent.type !== "COMPONENT_SET" && !out[n.name]) out[n.name] = n;
    return out;
  }
  function propKey(i, name) {
    return Object.keys(i.componentProperties).find((k) => k.split("#")[0] === name);
  }
  function inst(sets, name, variant, props) {
    const s = sets[name];
    if (!s) {
      warn(`cover: missing component ${name}`);
      return null;
    }
    let c;
    try {
      c = s.type === "COMPONENT_SET" ? variantOf(s, variant || {}) : s;
    } catch (e) {
      warn("cover: " + e.message);
      return null;
    }
    const i = c.createInstance();
    if (props) {
      const p = {};
      for (const [k, v] of Object.entries(props)) {
        const key = propKey(i, k);
        if (key) p[key] = v;
      }
      try {
        if (Object.keys(p).length) i.setProperties(p);
      } catch (e) {
        warn("cover props: " + e.message);
      }
    }
    return i;
  }
  function put(parent, n) {
    if (n) parent.appendChild(n);
    return n;
  }
  async function buildCover(page, sets) {
    page.children.filter((n) => n.name === "Cover").forEach((n) => n.remove());
    const f = frame("Cover", { dir: "HORIZONTAL", gap: "space-64", pad: "space-80", fill: "bg", w: 1440, h: 960, cross: "CENTER" });
    page.appendChild(f);
    f.x = 0;
    f.y = 0;
    const L = frame("Intro", { dir: "VERTICAL", gap: "space-24", fill: null, w: 600 });
    L.counterAxisAlignItems = "MIN";
    f.appendChild(L);
    const logo = figma.createNodeFromSvg(DATA.logos["module-aa-nad-horizontal"]);
    logo.name = "Logo";
    logo.rescale(64 / logo.height);
    L.appendChild(logo);
    add(L, await text("OPEN-SOURCE DESIGN SYSTEM \xB7 V1.2", "overline", "text-muted", "Eyebrow"));
    const t = add(L, await text("Design\nSystem.", "display-xl", "text", "Title"));
    t.fontSize = 120;
    t.lineHeight = { unit: "PIXELS", value: 112 };
    t.letterSpacing = { unit: "PERCENT", value: -4 };
    add(L, await text("A universal, monochrome, accessibility-first design system for web and mobile \u2014 written so designers, developers and AI agents can all follow it.", "body-lg", "text-muted", "Tagline", 560));
    const chips = frame("Highlights", { gap: "space-8", fill: null, w: 600 });
    chips.layoutWrap = "WRAP";
    chips.counterAxisSpacing = 8;
    L.appendChild(chips);
    for (const c of ["Variables \xB7 3 modes", "15 components", "98 icons", "WCAG AA / AAA", "Open source"]) {
      const ch = frame(c, { pad: ["space-4", "space-12"], fill: "surface", stroke: "text", strokeW: 1.5, radius: "radius-sm" });
      ch.appendChild(await text(c, "code-sm", "text"));
      chips.appendChild(ch);
    }
    const brand = frame("Brand ramp", { dir: "VERTICAL", gap: "space-8", fill: null });
    brand.counterAxisAlignItems = "MIN";
    L.appendChild(brand);
    const ramp = frame("Swatches", { gap: "space-4", fill: null });
    brand.appendChild(ramp);
    for (const [n] of DATA.alias) {
      const r = figma.createRectangle();
      r.name = n;
      r.resize(40, 40);
      r.cornerRadius = 4;
      r.fills = [paint(n)];
      r.strokes = [paint("border")];
      ramp.appendChild(r);
    }
    add(brand, await text("brand/primary \u2014 swap these 11 variables to recolour every component.", "code-sm", "text-muted", "Ramp note", 560));
    add(L, await text("github.com/Yogesh2806/Aa-NAD-Design-System \xB7 MIT + CC BY 4.0", "code-sm", "text-subtle", "Meta"));
    const S = frame("Showcase", { dir: "VERTICAL", gap: "space-24", pad: "space-40", fill: "surface-sunken", radius: "radius-lg", align: "CENTER" });
    S.counterAxisAlignItems = "MIN";
    f.appendChild(S);
    S.layoutGrow = 1;
    S.layoutAlign = "STRETCH";
    const row = (name, cross = "CENTER") => {
      const r = frame(name, { gap: "space-16", fill: null, cross });
      S.appendChild(r);
      return r;
    };
    const r1 = row("Card & controls", "MIN");
    const card = put(r1, inst(sets, "Card", { Variant: "Elevated" }, { Title: "Release 1.2", Body: "Tokens, components and docs \u2014 shipped together." }));
    const ctr = frame("Controls", { dir: "VERTICAL", gap: "space-16", fill: null });
    ctr.counterAxisAlignItems = "MIN";
    r1.appendChild(ctr);
    put(ctr, inst(sets, "Switch", { On: "True", State: "Default" }, { Label: "Dark mode" }));
    put(ctr, inst(sets, "Switch", { On: "False", State: "Default" }, { Label: "High contrast" }));
    put(ctr, inst(sets, "Checkbox", { Checked: "True", State: "Default" }, { Label: "Use my brand colour" }));
    put(ctr, inst(sets, "Radio", { Selected: "True", State: "Default" }, { Label: "Monthly billing" }));
    const r2 = row("Buttons");
    put(r2, inst(sets, "Button", { Variant: "Primary", Size: "md", State: "Default" }, { Label: "Get started", "Show end icon": true }));
    put(r2, inst(sets, "Button", { Variant: "Secondary", Size: "md", State: "Default" }, { Label: "Read the docs" }));
    put(r2, inst(sets, "Button", { Variant: "Ghost", Size: "md", State: "Default" }, { Label: "Figma" }));
    put(r2, inst(sets, "IconButton", { Variant: "Secondary", Size: "md", State: "Default" }));
    const r3 = row("Badges & tags");
    put(r3, inst(sets, "Badge", { Tone: "Success", Style: "Solid" }, { Label: "Live" }));
    put(r3, inst(sets, "Badge", { Tone: "Info", Style: "Subtle" }, { Label: "In review" }));
    put(r3, inst(sets, "Badge", { Tone: "Warning", Style: "Outline" }, { Label: "Beta" }));
    put(r3, inst(sets, "Tag", { Type: "Selected" }, { Label: "Design" }));
    put(r3, inst(sets, "Tag", { Type: "Removable" }, { Label: "Tokens" }));
    const r4 = row("Field & people", "MAX");
    put(r4, inst(sets, "TextField", { Size: "md", State: "Focus" }, { Label: "Email", Value: "you@company.com", Helper: "We never share it." }));
    for (const ty of ["Initials", "Illustration", "Icon"]) put(r4, inst(sets, "Avatar", { Type: ty, Size: "48" }));
    const r5 = row("Tabs");
    put(r5, inst(sets, "Tabs"));
    const r6 = row("Alert");
    put(r6, inst(sets, "Alert", { Tone: "Success" }, { Title: "Library ready", Body: "207 variables, 22 styles and 15 component sets, all bound to tokens.", Dismissible: false }));
    return f;
  }
  async function loadExisting() {
    await figma.loadAllPagesAsync();
    const vars = await figma.variables.getLocalVariablesAsync();
    const cols = await figma.variables.getLocalVariableCollectionsAsync();
    const colName = (v) => {
      const c = cols.find((c2) => c2.id === v.variableCollectionId);
      return c ? c.name : "";
    };
    const find = (coll, name) => vars.find((v) => v.name === name && colName(v) === coll);
    for (const [n] of DATA.prim) {
      const v = find("Primitives", "color/" + primName(n));
      if (v) VARS[n] = v;
    }
    for (const [n] of DATA.alias) {
      const v = find("Primitives", "brand/" + primName(n));
      if (v) VARS[n] = v;
    }
    for (const [n] of DATA.sem) {
      const v = find("Color", semName(n));
      if (v) VARS[n] = v;
    }
    colorCollection = cols.find((c) => c.name === "Color") || null;
    for (const [n] of DATA.space) {
      const v = find("Spacing", "space/" + n.replace("space-", ""));
      if (v) FLOATS[n] = v;
    }
    for (const [n] of DATA.radius) {
      const v = find("Radius", "radius/" + n.replace("radius-", ""));
      if (v) FLOATS[n] = v;
    }
    for (const st of await figma.getLocalTextStylesAsync()) TEXT[st.name.split("/").pop()] = st;
    for (const st of await figma.getLocalEffectStylesAsync()) EFFECT[st.name.split("/").pop()] = st;
    for (const c of figma.root.findAllWithCriteria({ types: ["COMPONENT"] })) if (c.name.startsWith("Icon/")) ICON[c.name.slice(5)] = c;
  }
  function repairSvg(node, svg) {
    const kids = node.children;
    if (!kids.length) return false;
    let ext = 0;
    for (const k of kids) ext = Math.max(ext, k.x + k.width, k.y + k.height);
    if (ext <= Math.max(node.width, node.height) * 1.2) return false;
    const tmp = figma.createNodeFromSvg(svg);
    const w0 = tmp.width;
    tmp.remove();
    const s = node.width / w0;
    for (const k of kids) {
      k.x *= s;
      k.y *= s;
      if ("rescale" in k) k.rescale(s);
    }
    return true;
  }
  function insideInstance(n) {
    let p = n.parent;
    while (p) {
      if (p.type === "INSTANCE") return true;
      p = p.parent;
    }
    return false;
  }
  async function repairFile() {
    let svgs = 0, texts = 0;
    for (const [key, c] of Object.entries(ICON)) {
      const [name, variant] = key.split("/");
      const g = c.children.find((n) => n.name === "glyph");
      const src = DATA.icons[name] && DATA.icons[name][variant];
      if (g && g.width > c.width * 1.2) {
        g.rescale(c.width / g.width);
        g.x = 0;
        g.y = 0;
        svgs++;
      } else if (g && src && repairSvg(g, src)) svgs++;
      if (g) for (const v of g.findAll((n) => "strokeWeight" in n)) {
        const w = v.strokeWeight;
        if (typeof w === "number" && w > c.width / 8) {
          v.strokeWeight = w * c.width / 512;
          svgs++;
        }
      }
    }
    const pools = [DATA.logos, DATA.illus, DATA.avatars];
    for (const n of figma.root.findAllWithCriteria({ types: ["FRAME"] })) {
      if (insideInstance(n)) continue;
      let src;
      for (const pool of pools) if (pool[n.name]) src = pool[n.name];
      if (n.name === "Illustration" && n.parent && n.parent.type === "COMPONENT") src = DATA.avatars["avatar-01"];
      const par = n.parent;
      if (src && n.name === "Illustration" && par && par.type === "COMPONENT" && n.width > par.width * 1.2) {
        n.rescale(par.width / n.width);
        n.x = 0;
        n.y = 0;
        svgs++;
      } else if (src && repairSvg(n, src)) svgs++;
    }
    for (const t of figma.root.findAllWithCriteria({ types: ["TEXT"] })) {
      if (t.textAutoResize !== "NONE" || insideInstance(t)) continue;
      if (t.fontName !== figma.mixed) await figma.loadFontAsync(t.fontName);
      t.textAutoResize = "HEIGHT";
      texts++;
    }
    log(`Repaired ${svgs} vector frames and ${texts} text boxes`);
    return svgs + texts;
  }
  async function rebuildCover() {
    await setupFonts();
    await loadExisting();
    if (!VARS["bg"]) {
      figma.closePlugin('No Aa NAD library in this file \u2014 run "Build library" first.');
      return;
    }
    const fixed = await repairFile();
    const cover = figma.root.children[0];
    await figma.setCurrentPageAsync(cover);
    const f = await buildCover(cover, collectSets());
    figma.viewport.scrollAndZoomIntoView([f]);
    figma.closePlugin("Cover rebuilt from live component instances" + (fixed ? `; repaired ${fixed} icons, vectors and text boxes` : "") + "." + (issues.length ? ` ${issues.length} note(s) in the console.` : ""));
  }
  var vcol = (name, gap = "space-8", o = {}) => {
    const f = frame(name, Object.assign({ dir: "VERTICAL", gap, fill: null }, o));
    f.counterAxisAlignItems = "MIN";
    return f;
  };
  var hrow = (name, gap = "space-8", o = {}) => frame(name, Object.assign({ gap, fill: null }, o));
  function rect(name, w, h, fill, r = 4) {
    const x = figma.createRectangle();
    x.name = name;
    x.resize(w, h);
    x.cornerRadius = r;
    x.fills = [paint(fill)];
    return x;
  }
  function fillW(n) {
    n.layoutSizingHorizontal = "FILL";
  }
  function swapIcon(name) {
    const c = ICON[`${name}/outline`];
    return c ? c.id : void 0;
  }
  function iconBtn(sets, name, variant = "Ghost", size = "md") {
    const id = swapIcon(name);
    return inst(sets, "IconButton", { Variant: variant, Size: size, State: "Default" }, id ? { Icon: id } : void 0);
  }
  async function setInstText(i, nodeName, value) {
    const t = i.findOne((n) => n.type === "TEXT" && n.name === nodeName);
    if (!t) return;
    if (t.fontName !== figma.mixed) await figma.loadFontAsync(t.fontName);
    t.characters = value;
  }
  function put2(p, n) {
    if (n) p.appendChild(n);
    return n;
  }
  async function fieldLabel(c, label) {
    add(c, await text(label, "label", "text", "Label"));
  }
  async function helper(c, msg, error = false) {
    const f = hrow("Helper", "space-4");
    if (error) add(f, icon("alert-circle", "filled", 16, "danger")).name = "Error icon";
    add(f, await text(msg, "body-sm", error ? "danger" : "text-muted", "Helper text"));
    add(c, f);
    return f;
  }
  function inputBox(state, h = 40) {
    const stroke = state === "Error" ? "danger" : state === "Focus" || state === "Open" ? "text" : state === "Disabled" ? "border" : "border-strong";
    const b = frame("Input", { pad: ["space-0", "space-12"], gap: "space-8", fill: state === "Disabled" ? "surface-sunken" : "surface", stroke, strokeW: state === "Focus" || state === "Error" || state === "Open" ? 2 : 1, radius: "radius-sm", h });
    if (state === "Focus" || state === "Open") focusRing(b);
    return b;
  }
  async function listPanel(items, selected, highlight, check = true) {
    const p = vcol("Listbox", "space-0", { fill: "surface-raised", stroke: "border", radius: "radius-sm", pad: ["space-4", "space-0"] });
    if (EFFECT["shadow-3"]) await p.setEffectStyleIdAsync(EFFECT["shadow-3"].id);
    for (let i = 0; i < items.length; i++) {
      const r = hrow("Option", "space-8", { pad: ["space-8", "space-12"], fill: i === highlight ? "surface-hover" : null, cross: "CENTER" });
      const t = add(r, await text(items[i], "body", "text", "Option label"));
      t.layoutGrow = 1;
      if (check && i === selected) add(r, icon("checkmark", "outline", 16, "text")).name = "Check";
      add(p, r);
      fillW(r);
    }
    return p;
  }
  async function buildLink(page) {
    const comps = [];
    for (const v of ["Inline", "Standalone", "External"]) for (const s of ["Default", "Hover", "Focus", "Disabled"]) {
      const c = comp(`Variant=${v}, State=${s}`, { gap: "space-4", fill: null, cross: "CENTER" });
      const color = s === "Disabled" ? "text-disabled" : "link";
      const t = add(c, await text(v === "Inline" ? "Read the guide" : v === "External" ? "Open on GitHub" : "View all components", v === "Inline" ? "body" : "label", color, "Label"));
      if (s !== "Disabled") t.textDecoration = "UNDERLINE";
      if (v !== "Inline") add(c, icon(v === "External" ? "share-social" : "arrow-forward", "outline", 16, color)).name = "Icon";
      if (s === "Focus") focusRing(c);
      comps.push(c);
    }
    const set = combine(page, comps, "Link", 4, "Navigates somewhere. Inline links sit in text and are always underlined; standalone links get an arrow; external links say where they go.");
    return set;
  }
  async function buildTextArea(page) {
    const comps = [];
    for (const s of ["Default", "Focus", "Filled", "Error", "Disabled"]) {
      const c = comp(`State=${s}`, { dir: "VERTICAL", gap: "space-4", fill: null, w: 320 });
      c.counterAxisAlignItems = "MIN";
      await fieldLabel(c, "Message");
      const b = inputBox(s, 120);
      b.layoutMode = "VERTICAL";
      b.primaryAxisSizingMode = "FIXED";
      b.resize(320, 120);
      b.paddingTop = 10;
      b.paddingBottom = 10;
      b.counterAxisAlignItems = "MIN";
      b.primaryAxisAlignItems = "MIN";
      const filled = s === "Filled" || s === "Error";
      add(b, await text(filled ? "Loved the new tokens \u2014 could we add a warning-subtle background?" : "Tell us what you think\u2026", "body", s === "Disabled" ? "text-disabled" : filled ? "text" : "text-subtle", "Value", 296));
      add(c, b);
      fillW(b);
      const foot = hrow("Footer", "space-8", { w: 320 });
      foot.primaryAxisAlignItems = "SPACE_BETWEEN";
      await helper(foot, s === "Error" ? "Keep it under 200 characters." : "Optional", s === "Error");
      add(foot, await text(s === "Error" ? "212/200" : filled ? "64/200" : "0/200", "code-sm", s === "Error" ? "danger" : "text-muted", "Count"));
      add(c, foot);
      fillW(foot);
      comps.push(c);
    }
    const set = combine(page, comps, "TextArea", 5, "Multi-line input with a live character count. Grows with content; the label is always visible.");
    linkText(set, "Label", "Message", "Label");
    return set;
  }
  async function buildCombobox(page) {
    const comps = [];
    for (const s of ["Default", "Focus", "Open", "Error", "Disabled"]) {
      const c = comp(`State=${s}`, { dir: "VERTICAL", gap: "space-4", fill: null, w: 320 });
      c.counterAxisAlignItems = "MIN";
      await fieldLabel(c, "Country");
      const b = inputBox(s);
      add(b, icon("search", "outline", 20, "icon-muted")).name = "Icon";
      add(b, await text(s === "Open" ? "In" : "Search countries", "body", s === "Open" ? "text" : s === "Disabled" ? "text-disabled" : "text-subtle", "Value")).layoutGrow = 1;
      const ch = add(b, icon("chevron-down", "outline", 20, "icon-muted"));
      ch.name = "Chevron";
      if (s === "Open") ch.rotation = 180;
      add(c, b);
      fillW(b);
      if (s === "Open") {
        const l = await listPanel(["India", "Indonesia", "Ireland", "Iceland"], 0, 1);
        add(c, l);
        fillW(l);
      } else await helper(c, s === "Error" ? "Choose a country from the list." : "Type to filter 195 countries", s === "Error");
      comps.push(c);
    }
    const set = combine(page, comps, "Combobox", 5, "Searchable select for long lists. \u2193\u2191 to move, Enter to choose, Esc to close; the result count is announced.");
    linkText(set, "Label", "Country", "Label");
    return set;
  }
  async function buildMultiSelect(page, sets) {
    const comps = [];
    for (const s of ["Default", "Filled", "Open", "Disabled"]) {
      const c = comp(`State=${s}`, { dir: "VERTICAL", gap: "space-4", fill: null, w: 360 });
      c.counterAxisAlignItems = "MIN";
      await fieldLabel(c, "Skills");
      const b = inputBox(s === "Filled" ? "Default" : s, 48);
      b.layoutWrap = "WRAP";
      b.counterAxisSpacing = 4;
      b.paddingLeft = 8;
      b.counterAxisSizingMode = "AUTO";
      b.paddingTop = 8;
      b.paddingBottom = 8;
      if (s !== "Default") for (const t of ["Figma", "Research"]) put2(b, inst(sets, "Tag", { Type: s === "Disabled" ? "Disabled" : "Removable" }, { Label: t }));
      add(b, await text(s === "Default" ? "Add skills\u2026" : "", "body", "text-subtle", "Value"));
      add(c, b);
      fillW(b);
      if (s === "Open") {
        const p = vcol("Listbox", "space-8", { fill: "surface-raised", stroke: "border", radius: "radius-sm", pad: "space-12" });
        if (EFFECT["shadow-3"]) await p.setEffectStyleIdAsync(EFFECT["shadow-3"].id);
        for (const [l, on] of [["Figma", "True"], ["Research", "True"], ["Prototyping", "False"], ["Accessibility", "False"]]) put2(p, inst(sets, "Checkbox", { Checked: on, State: "Default" }, { Label: l }));
        add(c, p);
        fillW(p);
      } else await helper(c, "Pick up to 5. Backspace removes the last tag.");
      comps.push(c);
    }
    const set = combine(page, comps, "MultiSelect", 4, "Choose several values; chosen values show as removable tags inside the field.");
    linkText(set, "Label", "Skills", "Label");
    return set;
  }
  async function buildFileUpload(page, sets) {
    const comps = [];
    for (const s of ["Default", "Drag over", "Error"]) {
      const c = comp(`Type=Dropzone, State=${s}`, { dir: "VERTICAL", gap: "space-8", fill: s === "Drag over" ? "surface-hover" : "surface", stroke: s === "Error" ? "danger" : s === "Drag over" ? "text" : "border-strong", strokeW: s === "Drag over" ? 2 : 1.5, dashed: s !== "Drag over", radius: "radius-md", pad: "space-32", w: 400, align: "CENTER", cross: "CENTER" });
      add(c, icon("cloud-upload", "outline", 32, s === "Error" ? "danger" : "icon"));
      add(c, await text(s === "Drag over" ? "Drop to upload" : "Drag files here or browse", "label-lg", "text", "Title"));
      add(c, await text(s === "Error" ? "That file type isn\u2019t supported. Use PNG, JPG or PDF." : "PNG, JPG or PDF \xB7 up to 10 MB", "body-sm", s === "Error" ? "danger" : "text-muted", "Hint"));
      comps.push(c);
    }
    for (const s of ["Uploading", "Complete", "Failed"]) {
      const c = comp(`Type=File, State=${s}`, { gap: "space-12", fill: "surface", stroke: s === "Failed" ? "danger-border" : "border", radius: "radius-sm", pad: ["space-12", "space-12"], w: 400, cross: "CENTER" });
      add(c, icon(s === "Failed" ? "alert-circle" : s === "Complete" ? "checkmark-circle" : "document-text", s === "Uploading" ? "outline" : "filled", 24, s === "Failed" ? "danger" : s === "Complete" ? "success" : "icon"));
      const m = vcol("Meta", "space-4");
      add(m, await text("brand-guidelines.pdf", "label", "text", "File name"));
      if (s === "Uploading") {
        const tr = rect("Track", 300, 4, "surface-sunken", 2);
        const bar = frame("Progress", { dir: "NONE", fill: "surface-sunken", radius: "radius-full", w: 300, h: 4 });
        const fl = rect("Fill", 180, 4, "action", 2);
        bar.appendChild(fl);
        add(m, bar);
        tr.remove();
      }
      add(m, await text(s === "Uploading" ? "2.4 of 4.0 MB \xB7 60%" : s === "Complete" ? "4.0 MB" : "Upload failed. Check your connection.", "body-sm", s === "Failed" ? "danger" : "text-muted", "Status"));
      add(c, m);
      m.layoutGrow = 1;
      put2(c, iconBtn(sets, s === "Failed" ? "refresh" : "close", "Ghost", "sm"));
      comps.push(c);
    }
    return combine(page, comps, "FileUpload", 3, "Dropzone or button, with per-file progress, retry and remove. Every change is announced to screen readers.");
  }
  async function buildSlider(page) {
    const comps = [];
    for (const s of ["Default", "Focus", "Disabled"]) {
      const c = comp(`State=${s}`, { dir: "VERTICAL", gap: "space-8", fill: null, w: 320 });
      c.counterAxisAlignItems = "MIN";
      const top = hrow("Header", "space-8", { w: 320 });
      top.primaryAxisAlignItems = "SPACE_BETWEEN";
      add(top, await text("Volume", "label", s === "Disabled" ? "text-disabled" : "text", "Label"));
      add(top, await text("40", "code-sm", "text-muted", "Value"));
      add(c, top);
      fillW(top);
      const tr = frame("Track", { dir: "NONE", fill: null, w: 320, h: 20 });
      const base = rect("Rail", 320, 4, "surface-sunken", 2);
      tr.appendChild(base);
      base.y = 8;
      const fl = rect("Fill", 128, 4, s === "Disabled" ? "border-strong" : "action", 2);
      tr.appendChild(fl);
      fl.y = 8;
      const th = figma.createEllipse();
      th.name = "Thumb";
      th.resize(20, 20);
      th.fills = [paint("surface")];
      th.strokes = [paint(s === "Disabled" ? "border-strong" : "action")];
      th.strokeWeight = 2;
      tr.appendChild(th);
      th.x = 118;
      th.y = 0;
      if (s === "Focus") th.effects = [{ type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 1 }, offset: { x: 0, y: 0 }, radius: 0, spread: 3, visible: true, blendMode: "NORMAL", showShadowBehindNode: true }];
      add(c, tr);
      if (s === "Disabled") c.opacity = 0.6;
      comps.push(c);
    }
    const set = combine(page, comps, "Slider", 3, "Pick a value in a range. Arrow keys step, Page Up/Down jump; the value is always shown.");
    linkText(set, "Label", "Volume", "Label");
    linkText(set, "Value", "40", "Value");
    return set;
  }
  async function buildSegmented(page) {
    const comps = [];
    for (const size of ["sm", "md"]) for (const n of [2, 3, 4]) {
      const c = comp(`Size=${size}, Options=${n}`, { gap: "space-2", fill: "surface-sunken", radius: "radius-sm", pad: "space-2" });
      const labels = ["Light", "Dark", "HC", "Auto"].slice(0, n);
      for (let i = 0; i < n; i++) {
        const s = frame(`Segment ${i + 1}`, { pad: ["space-0", size === "sm" ? "space-12" : "space-16"], fill: i === 0 ? "surface" : null, stroke: i === 0 ? "border-strong" : void 0, radius: "radius-sm", h: size === "sm" ? 28 : 36, align: "CENTER", cross: "CENTER" });
        add(s, await text(labels[i], size === "sm" ? "label-sm" : "label", i === 0 ? "text" : "text-muted", "Label"));
        add(c, s);
      }
      comps.push(c);
    }
    return combine(page, comps, "SegmentedControl", 3, "2\u20135 mutually exclusive views or modes, switched instantly. The selected segment is raised.");
  }
  async function makeCalendar(name = "Calendar") {
    const c = comp(name, { dir: "VERTICAL", gap: "space-8", fill: "surface-raised", stroke: "border", radius: "radius-md", pad: "space-16" });
    c.counterAxisAlignItems = "MIN";
    const head = hrow("Header", "space-8", { w: 280, cross: "CENTER" });
    head.primaryAxisAlignItems = "SPACE_BETWEEN";
    add(head, icon("chevron-back", "outline", 20, "icon")).name = "Previous";
    add(head, await text("October 2026", "label-lg", "text", "Month"));
    add(head, icon("chevron-forward", "outline", 20, "icon")).name = "Next";
    add(c, head);
    const grid = vcol("Grid", "space-2");
    const wk = hrow("Weekdays", "space-2");
    for (const d of ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]) {
      const cell = frame(d, { w: 38, h: 28, align: "CENTER", cross: "CENTER", fill: null });
      add(cell, await text(d, "caption", "text-muted"));
      add(wk, cell);
    }
    add(grid, wk);
    let day = 1 - 3;
    for (let w = 0; w < 5; w++) {
      const r = hrow(`Week ${w + 1}`, "space-2");
      for (let i = 0; i < 7; i++, day++) {
        const inMonth = day >= 1 && day <= 31;
        const sel = day === 14, today = day === 8;
        const cell = frame(inMonth ? `Day ${day}` : "Empty", { w: 38, h: 38, align: "CENTER", cross: "CENTER", fill: sel ? "action" : null, stroke: today ? "text" : void 0, strokeW: 1.5, radius: "radius-full" });
        if (inMonth) add(cell, await text(String(day), sel ? "label" : "body", sel ? "on-action" : "text", "Day"));
        add(r, cell);
      }
      add(grid, r);
    }
    add(c, grid);
    return c;
  }
  async function buildCalendar(page) {
    const c = await makeCalendar();
    c.description = "Keyboard grid (arrows, Page Up/Down, Home/End). Today has a ring, the selected day is filled; disabled dates are dimmed.";
    page.appendChild(c);
    return c;
  }
  async function buildDatePicker(page, sets) {
    const comps = [];
    for (const s of ["Default", "Filled", "Open", "Error"]) {
      const c = comp(`State=${s}`, { dir: "VERTICAL", gap: "space-4", fill: null, w: 320 });
      c.counterAxisAlignItems = "MIN";
      await fieldLabel(c, "Start date");
      const b = inputBox(s);
      add(b, await text(s === "Default" ? "DD / MM / YYYY" : s === "Error" ? "31 / 02 / 2026" : "14 / 10 / 2026", "body", s === "Default" ? "text-subtle" : "text", "Value")).layoutGrow = 1;
      add(b, icon("calendar", "outline", 20, "icon-muted")).name = "Icon";
      add(c, b);
      fillW(b);
      if (s === "Open") put2(c, inst(sets, "Calendar"));
      else await helper(c, s === "Error" ? "That date doesn\u2019t exist. Pick a day in February." : "Type a date or use the calendar", s === "Error");
      comps.push(c);
    }
    const set = combine(page, comps, "DatePicker", 4, "A date field with a popover calendar. Typing always works; the calendar is a helper, not a requirement.");
    linkText(set, "Label", "Start date", "Label");
    return set;
  }
  async function buildDivider(page) {
    const comps = [];
    let c = comp("Orientation=Horizontal, Label=False", { dir: "VERTICAL", fill: null, w: 320 });
    const l = rect("Line", 320, 1, "border", 0);
    add(c, l);
    fillW(l);
    comps.push(c);
    c = comp("Orientation=Horizontal, Label=True", { gap: "space-12", fill: null, w: 320, cross: "CENTER" });
    const a = rect("Line", 100, 1, "border", 0);
    add(c, a);
    a.layoutGrow = 1;
    add(c, await text("or", "caption", "text-muted", "Label"));
    const b = rect("Line", 100, 1, "border", 0);
    add(c, b);
    b.layoutGrow = 1;
    comps.push(c);
    c = comp("Orientation=Vertical, Label=False", { fill: null, h: 48 });
    const v = rect("Line", 1, 48, "border", 0);
    add(c, v);
    comps.push(c);
    return combine(page, comps, "Divider", 3, "Separates groups. Prefer spacing first; use a divider only when spacing alone is ambiguous.");
  }
  async function buildList(page, sets) {
    const comps = [];
    for (const t of ["Text", "Icon", "Avatar"]) for (const s of ["Default", "Hover", "Selected"]) {
      const c = comp(`Leading=${t}, State=${s}`, { gap: "space-12", pad: ["space-12", "space-16"], fill: s === "Hover" ? "surface-hover" : s === "Selected" ? "surface-sunken" : "surface", w: 360, cross: "CENTER" });
      if (t === "Icon") add(c, icon("folder", "outline", 24, "icon")).name = "Leading";
      if (t === "Avatar") {
        const av = inst(sets, "Avatar", { Type: "Initials", Size: "40" });
        if (av) {
          av.name = "Leading";
          add(c, av);
        }
      }
      const m = vcol("Text", "space-2");
      add(m, await text(t === "Avatar" ? "Ana Ruiz" : "Design tokens", "label", "text", "Title"));
      add(m, await text(t === "Avatar" ? "Product designer" : "Updated 2 hours ago", "body-sm", "text-muted", "Description"));
      add(c, m);
      m.layoutGrow = 1;
      add(c, await text("24", "code-sm", "text-muted", "Meta"));
      add(c, icon("chevron-forward", "outline", 20, "icon-muted")).name = "Chevron";
      comps.push(c);
    }
    const set = combine(page, comps, "List item", 3, "One row of a list: leading text, icon or avatar, a title and description, meta and a chevron for navigation.");
    linkBool(set, "Show meta", true, "Meta");
    linkBool(set, "Show chevron", true, "Chevron");
    return set;
  }
  async function buildTable(page, sets) {
    const comps = [];
    for (const t of ["Header", "Text", "Number", "Status"]) {
      const c = comp(`Type=${t}`, { pad: ["space-12", "space-16"], gap: "space-4", fill: t === "Header" ? "surface-sunken" : "surface", stroke: "border", w: 180, align: t === "Number" ? "MAX" : "MIN", cross: "CENTER" });
      c.strokeTopWeight = 0;
      c.strokeLeftWeight = 0;
      c.strokeRightWeight = 0;
      c.strokeBottomWeight = 1;
      if (t === "Status") put2(c, inst(sets, "Badge", { Tone: "Success", Style: "Subtle" }, { Label: "Paid" }));
      else {
        add(c, await text(t === "Header" ? "Invoice" : t === "Number" ? "\u20B912,400" : "INV-1042", t === "Header" ? "label-sm" : "body", t === "Header" ? "text-muted" : "text", "Value"));
        if (t === "Header") add(c, icon("chevron-down", "outline", 14, "icon-muted")).name = "Sort";
      }
      comps.push(c);
    }
    const set = combine(page, comps, "Table cell", 4, "Cells for data tables. Numbers align right; headers can sort. Always give the table a caption.");
    const tbl = comp("Table", { dir: "VERTICAL", fill: "surface", stroke: "border", radius: "radius-md" });
    tbl.clipsContent = true;
    tbl.counterAxisAlignItems = "MIN";
    const data = [["Invoice", "Customer", "Amount", "Status"], ["INV-1042", "Acme Ltd", "\u20B912,400", "Paid"], ["INV-1043", "Northwind", "\u20B98,250", "Due"], ["INV-1044", "Globex", "\u20B921,900", "Overdue"]];
    for (let r = 0; r < data.length; r++) {
      const rw = hrow(`Row ${r + 1}`, "space-0");
      for (let k = 0; k < 4; k++) {
        const type = r === 0 ? "Header" : k === 2 ? "Number" : k === 3 ? "Status" : "Text";
        const i = variantOf(set, { Type: type }).createInstance();
        if (type === "Status") {
          const b = i.findOne((n) => n.type === "INSTANCE");
          if (b) {
            const tone = data[r][k] === "Paid" ? "Success" : data[r][k] === "Due" ? "Warning" : "Danger";
            try {
              b.setProperties({ Tone: tone });
              const key = propKey(b, "Label");
              if (key) b.setProperties({ [key]: data[r][k] });
            } catch (e) {
            }
          }
        } else await setInstText(i, "Value", data[r][k]);
        add(rw, i);
      }
      add(tbl, rw);
    }
    tbl.description = "Example invoice table composed from Table cell instances.";
    page.appendChild(tbl);
    tbl.x = 0;
    tbl.y = set.y + set.height + 64;
    return set;
  }
  async function buildImage(page) {
    const comps = [];
    for (const [ratio, w, h] of [["1:1", 200, 200], ["4:3", 240, 180], ["16:9", 320, 180]]) for (const s of ["Loaded", "Fallback"]) {
      const c = comp(`Ratio=${ratio}, State=${s}`, { dir: "VERTICAL", fill: s === "Loaded" ? "gray-300" : "surface-sunken", radius: "radius-md", w, h, align: "CENTER", cross: "CENTER" });
      c.clipsContent = true;
      if (s === "Loaded") {
        const ill = figma.createNodeFromSvg(DATA.illus["onboarding-welcome"]);
        ill.rescale(h * 0.8 / ill.height);
        ill.name = "Placeholder";
        add(c, ill);
      } else {
        add(c, icon("image", "outline", 32, "icon-muted"));
        add(c, await text("Image unavailable", "caption", "text-muted", "Fallback"));
      }
      comps.push(c);
    }
    return combine(page, comps, "Image", 2, "Fixed aspect ratios with rounded corners. Swap the fill for your photo (Fill \u2192 Image). Fallback shows when an image fails; always write alt text.");
  }
  async function buildCarousel(page, sets) {
    const c = comp("Carousel", { dir: "VERTICAL", gap: "space-12", fill: null, w: 560 });
    c.counterAxisAlignItems = "CENTER";
    const track = hrow("Slides", "space-12");
    track.clipsContent = true;
    for (let i = 0; i < 3; i++) {
      const sl = frame(`Slide ${i + 1}`, { dir: "VERTICAL", fill: i === 0 ? "gray-300" : "surface-sunken", radius: "radius-md", w: i === 0 ? 400 : 120, h: 240, align: "CENTER", cross: "CENTER" });
      add(sl, icon("image", "outline", 32, "icon-muted"));
      add(track, sl);
    }
    add(c, track);
    const nav = hrow("Controls", "space-12", { cross: "CENTER" });
    put2(nav, iconBtn(sets, "chevron-back", "Secondary", "sm"));
    const dots = hrow("Dots", "space-8", { cross: "CENTER" });
    for (let i = 0; i < 4; i++) {
      const d = figma.createEllipse();
      d.name = `Dot ${i + 1}`;
      d.resize(8, 8);
      d.fills = [paint(i === 0 ? "action" : "border-strong")];
      add(dots, d);
    }
    add(nav, dots);
    put2(nav, iconBtn(sets, "chevron-forward", "Secondary", "sm"));
    add(c, nav);
    c.description = "Snap-scrolling slides with buttons and dots. Never autoplays; every slide is reachable by keyboard.";
    page.appendChild(c);
    return c;
  }
  async function buildTooltip(page) {
    const comps = [];
    for (const p of ["Top", "Bottom", "Left", "Right"]) {
      const c = comp(`Placement=${p}`, { dir: p === "Top" || p === "Bottom" ? "VERTICAL" : "HORIZONTAL", gap: "space-0", fill: null, cross: "CENTER" });
      const bub = frame("Bubble", { pad: ["space-8", "space-12"], fill: "surface-inverse", radius: "radius-sm" });
      add(bub, await text("Copy link", "label-sm", "text-inverse", "Label"));
      const ar = figma.createPolygon();
      ar.name = "Arrow";
      ar.pointCount = 3;
      ar.resize(12, 6);
      ar.fills = [paint("surface-inverse")];
      ar.rotation = p === "Top" ? 180 : p === "Bottom" ? 0 : p === "Left" ? 90 : -90;
      if (p === "Top" || p === "Left") {
        add(c, bub);
        add(c, ar);
      } else {
        add(c, ar);
        add(c, bub);
      }
      comps.push(c);
    }
    const set = combine(page, comps, "Tooltip", 4, "Short label on hover and focus; Esc hides it. Never put essential or interactive content in a tooltip.");
    linkText(set, "Label", "Copy link", "Label");
    return set;
  }
  async function buildSpinner(page) {
    const comps = [];
    for (const [sz, px] of [["sm", 16], ["md", 24], ["lg", 40]]) for (const tone of ["Default", "Inverse"]) {
      const c = comp(`Size=${sz}, Tone=${tone}`, { dir: "NONE", fill: tone === "Inverse" ? "surface-inverse" : null, w: px + 16, h: px + 16, radius: "radius-sm" });
      const tr = figma.createEllipse();
      tr.name = "Track";
      tr.resize(px, px);
      tr.arcData = { startingAngle: 0, endingAngle: 2 * Math.PI, innerRadius: 0.8 };
      tr.fills = [paint(tone === "Inverse" ? "gray-700" : "border")];
      c.appendChild(tr);
      tr.x = 8;
      tr.y = 8;
      const arc = figma.createEllipse();
      arc.name = "Arc";
      arc.resize(px, px);
      arc.arcData = { startingAngle: -Math.PI / 2, endingAngle: Math.PI / 2, innerRadius: 0.8 };
      arc.fills = [paint(tone === "Inverse" ? "text-inverse" : "action")];
      c.appendChild(arc);
      arc.x = 8;
      arc.y = 8;
      comps.push(c);
    }
    return combine(page, comps, "Spinner", 2, "0.8s rotation in code; pulses under reduced motion. Always pair with a label for screen readers.");
  }
  async function buildProgress(page) {
    const comps = [];
    for (const [tone, val, fill] of [["Default", 64, "action"], ["Success", 100, "success-solid"], ["Danger", 40, "danger-solid"]]) for (const size of ["sm", "md"]) {
      const c = comp(`Tone=${tone}, Size=${size}`, { dir: "VERTICAL", gap: "space-8", fill: null, w: 320 });
      c.counterAxisAlignItems = "MIN";
      const top = hrow("Header", "space-8", { w: 320 });
      top.primaryAxisAlignItems = "SPACE_BETWEEN";
      add(top, await text(tone === "Danger" ? "Upload failed" : tone === "Success" ? "Upload complete" : "Uploading", "label", "text", "Label"));
      add(top, await text(`${val}%`, "code-sm", "text-muted", "Value"));
      add(c, top);
      fillW(top);
      const h = size === "sm" ? 4 : 8;
      const tr = frame("Track", { dir: "NONE", fill: "surface-sunken", radius: "radius-full", w: 320, h });
      tr.clipsContent = true;
      const f = rect("Fill", 320 * val / 100, h, fill, h / 2);
      tr.appendChild(f);
      add(c, tr);
      comps.push(c);
    }
    const set = combine(page, comps, "ProgressBar", 2, "Determinate progress with a visible label and value. Colour changes are always paired with words.");
    return set;
  }
  async function buildSkeleton(page) {
    const comps = [];
    let c = comp("Shape=Text", { dir: "VERTICAL", gap: "space-8", fill: null, w: 280 });
    c.counterAxisAlignItems = "MIN";
    for (const w of [280, 240, 160]) add(c, rect("Line", w, 12, "surface-sunken", 4));
    comps.push(c);
    c = comp("Shape=Rect", { fill: null });
    add(c, rect("Block", 280, 160, "surface-sunken", 8));
    comps.push(c);
    c = comp("Shape=Circle", { fill: null });
    const e = figma.createEllipse();
    e.name = "Circle";
    e.resize(48, 48);
    e.fills = [paint("surface-sunken")];
    add(c, e);
    comps.push(c);
    c = comp("Shape=Card", { dir: "VERTICAL", gap: "space-12", fill: "surface", stroke: "border", radius: "radius-md", pad: "space-16", w: 300 });
    c.counterAxisAlignItems = "MIN";
    const hd = hrow("Head", "space-12", { cross: "CENTER" });
    const av = figma.createEllipse();
    av.resize(40, 40);
    av.fills = [paint("surface-sunken")];
    add(hd, av);
    const tl = vcol("Lines", "space-8");
    add(tl, rect("Line", 140, 12, "surface-sunken"));
    add(tl, rect("Line", 90, 10, "surface-sunken"));
    add(hd, tl);
    add(c, hd);
    add(c, rect("Media", 268, 120, "surface-sunken", 6));
    add(c, rect("Line", 220, 12, "surface-sunken"));
    comps.push(c);
    return combine(page, comps, "Skeleton", 4, "Shows the shape of loading content. A soft shimmer in code; static under reduced motion. Match the real layout.");
  }
  async function buildEmptyState(page, sets) {
    const comps = [];
    for (const [kind, ill, title, body, cta] of [["Empty", "empty-inbox", "No messages yet", "When someone writes to you, it will show up here.", "Start a conversation"], ["Search", "empty-search", "No results for \u201Ctokns\u201D", "Check the spelling or try a broader term.", "Clear search"], ["Error", "error-offline", "You\u2019re offline", "Check your connection and try again.", "Retry"], ["Success", "success-done", "All done!", "Every task on your list is complete.", "Back to home"]]) {
      const c = comp(`Kind=${kind}`, { dir: "VERTICAL", gap: "space-16", fill: "surface", pad: "space-32", w: 400, align: "CENTER", cross: "CENTER", radius: "radius-md", stroke: "border" });
      const n = figma.createNodeFromSvg(DATA.illus[ill]);
      n.rescale(160 / n.height);
      n.name = "Illustration";
      add(c, n);
      const t = add(c, await text(title, "heading-4", "text", "Title"));
      t.textAlignHorizontal = "CENTER";
      const d = add(c, await text(body, "body", "text-muted", "Description", 320));
      d.textAlignHorizontal = "CENTER";
      put2(c, inst(sets, "Button", { Variant: kind === "Error" ? "Secondary" : "Primary", Size: "md", State: "Default" }, { Label: cta }));
      comps.push(c);
    }
    const set = combine(page, comps, "EmptyState", 4, "Explains why a view is empty and what to do next. Uses the line illustrations; one clear action.");
    return set;
  }
  async function buildBlockLoader(page) {
    const comps = [];
    for (const [sz, px] of [["sm", 24], ["md", 40], ["lg", 64]]) for (const tone of ["Default", "Inverse"]) {
      const c = comp(`Size=${sz}, Tone=${tone}`, { fill: tone === "Inverse" ? "surface-inverse" : null, pad: "space-8", radius: "radius-sm" });
      const n = figma.createNodeFromSvg(DATA.logos[tone === "Inverse" ? "module-aa-nad-blocks-white" : "module-aa-nad-blocks"]);
      n.rescale(px / n.height);
      n.name = "Blocks";
      add(c, n);
      comps.push(c);
    }
    return combine(page, comps, "BlockLoader", 2, "Brand loader: the Module Aa blocks light up in sequence (45ms apart, 1.8s loop) in code. Use for full-page loads.");
  }
  async function overlayPanel(name, w, h, sets, title) {
    const c = comp(name, { dir: "VERTICAL", fill: "surface-raised", w, h, radius: "radius-none" });
    c.counterAxisAlignItems = "MIN";
    if (EFFECT["shadow-4"]) await c.setEffectStyleIdAsync(EFFECT["shadow-4"].id);
    const hd = hrow("Header", "space-12", { pad: ["space-16", "space-24"], cross: "CENTER" });
    const t = add(hd, await text(title, "heading-4", "text", "Title"));
    t.layoutGrow = 1;
    put2(hd, iconBtn(sets, "close"));
    add(c, hd);
    fillW(hd);
    const body = vcol("Body", "space-16", { pad: ["space-8", "space-24"] });
    add(c, body);
    fillW(body);
    body.layoutGrow = 1;
    return { c, body };
  }
  async function buildDrawer(page, sets) {
    const comps = [];
    for (const side of ["Right", "Left"]) {
      const { c, body } = await overlayPanel(`Side=${side}`, 360, 560, sets, "Filters");
      for (const l of ["In stock", "On sale", "Free delivery"]) put2(body, inst(sets, "Checkbox", { Checked: l === "In stock" ? "True" : "False", State: "Default" }, { Label: l }));
      put2(body, inst(sets, "Divider", { Orientation: "Horizontal", Label: "False" }));
      for (const l of ["Newest", "Price: low to high"]) put2(body, inst(sets, "Radio", { Selected: l === "Newest" ? "True" : "False", State: "Default" }, { Label: l }));
      const ft = hrow("Footer", "space-8", { pad: ["space-16", "space-24"], align: "MAX", stroke: "border" });
      ft.strokeTopWeight = 1;
      ft.strokeBottomWeight = 0;
      ft.strokeLeftWeight = 0;
      ft.strokeRightWeight = 0;
      put2(ft, inst(sets, "Button", { Variant: "Secondary", Size: "md", State: "Default" }, { Label: "Reset" }));
      put2(ft, inst(sets, "Button", { Variant: "Primary", Size: "md", State: "Default" }, { Label: "Show 24 results" }));
      add(c, ft);
      fillW(ft);
      comps.push(c);
    }
    const set = combine(page, comps, "Drawer", 2, "Side panel for filters and secondary tasks. Slides from its edge; focus is trapped and returns to the trigger.");
    linkText(set, "Title", "Filters", "Title");
    return set;
  }
  async function buildBottomSheet(page, sets) {
    const comps = [];
    for (const kind of ["Actions", "Content"]) {
      const c = comp(`Kind=${kind}`, { dir: "VERTICAL", gap: "space-8", fill: "surface-raised", w: 390, pad: ["space-8", "space-0"] });
      c.counterAxisAlignItems = "CENTER";
      c.topLeftRadius = 16;
      c.topRightRadius = 16;
      c.bottomLeftRadius = 0;
      c.bottomRightRadius = 0;
      if (EFFECT["shadow-4"]) await c.setEffectStyleIdAsync(EFFECT["shadow-4"].id);
      add(c, rect("Handle", 36, 4, "border-strong", 2));
      const t = add(c, await text(kind === "Actions" ? "Share design" : "Order summary", "heading-5", "text", "Title"));
      const body = vcol("Body", "space-0", { pad: ["space-8", "space-0"] });
      add(c, body);
      fillW(body);
      if (kind === "Actions") for (const [ic, l] of [["link", "Copy link"], ["mail", "Email"], ["download", "Download PNG"]]) {
        const r = hrow(l, "space-16", { pad: ["space-12", "space-24"], cross: "CENTER" });
        add(r, icon(ic, "outline", 24, "icon"));
        add(r, await text(l, "body", "text"));
        add(body, r);
        fillW(r);
      }
      else {
        for (const [a, b] of [["Subtotal", "\u20B92,400"], ["Delivery", "Free"], ["Total", "\u20B92,400"]]) {
          const r = hrow(a, "space-8", { pad: ["space-8", "space-24"] });
          r.primaryAxisAlignItems = "SPACE_BETWEEN";
          add(r, await text(a, "body", a === "Total" ? "text" : "text-muted"));
          add(r, await text(b, a === "Total" ? "label" : "body", "text"));
          add(body, r);
          fillW(r);
        }
      }
      const ft = vcol("Footer", "space-8", { pad: ["space-8", "space-24"] });
      const btn = put2(ft, inst(sets, "Button", { Variant: kind === "Actions" ? "Secondary" : "Primary", Size: "lg", State: "Default" }, { Label: kind === "Actions" ? "Cancel" : "Pay \u20B92,400" }));
      add(c, ft);
      fillW(ft);
      if (btn) fillW(btn);
      comps.push(c);
    }
    const set = combine(page, comps, "BottomSheet", 2, "Mobile sheet with a drag handle. Rises from the bottom; swipe or Esc to dismiss. Keep actions within thumb reach.");
    return set;
  }
  async function buildMenu(page) {
    const comps = [];
    for (const s of ["Default", "Hover", "Danger", "Disabled"]) {
      const c = comp(`State=${s}`, { gap: "space-12", pad: ["space-8", "space-12"], fill: s === "Hover" ? "surface-hover" : "surface-raised", w: 240, cross: "CENTER" });
      const color = s === "Danger" ? "danger" : s === "Disabled" ? "text-disabled" : "text";
      add(c, icon(s === "Danger" ? "trash" : "copy", "outline", 20, color)).name = "Icon";
      add(c, await text(s === "Danger" ? "Delete" : "Duplicate", "body", color, "Label")).layoutGrow = 1;
      add(c, await text(s === "Danger" ? "Del" : "Ctrl+D", "code-sm", "text-muted", "Shortcut"));
      comps.push(c);
    }
    const set = combine(page, comps, "Menu item", 4, "One action in a menu. Arrow keys move, type-ahead jumps, Esc closes. Destructive items go last, in red with a trash icon.");
    linkBool(set, "Show icon", true, "Icon");
    linkBool(set, "Show shortcut", true, "Shortcut");
    linkSwap(set, "Icon", "copy/outline", "Icon");
    const m = comp("Menu", { dir: "VERTICAL", fill: "surface-raised", stroke: "border", radius: "radius-sm", pad: ["space-4", "space-0"] });
    m.counterAxisAlignItems = "MIN";
    if (EFFECT["shadow-3"]) await m.setEffectStyleIdAsync(EFFECT["shadow-3"].id);
    for (const [s, l, ic] of [["Default", "Rename", "create"], ["Hover", "Duplicate", "copy"], ["Default", "Share", "share-social"], ["Disabled", "Move to\u2026", "folder"]]) {
      const i = variantOf(set, { State: s }).createInstance();
      const ik = propKey(i, "Icon");
      if (ik && ICON[`${ic}/outline`]) i.setProperties({ [ik]: ICON[`${ic}/outline`].id });
      await setInstText(i, "Label", l);
      await setInstText(i, "Shortcut", { Rename: "F2", Duplicate: "Ctrl+D", Share: "Ctrl+S", "Move to\u2026": "Ctrl+M" }[l] || "");
      add(m, i);
    }
    const dv = rect("Divider", 240, 1, "border", 0);
    add(m, dv);
    add(m, variantOf(set, { State: "Danger" }).createInstance());
    m.description = "Example actions menu built from Menu item instances.";
    page.appendChild(m);
    m.x = 0;
    m.y = set.y + set.height + 64;
    return set;
  }
  async function buildAccordion(page) {
    const comps = [];
    for (const s of ["Collapsed", "Expanded"]) for (const st of ["Default", "Hover", "Focus"]) {
      const c = comp(`State=${s}, Interaction=${st}`, { dir: "VERTICAL", fill: st === "Hover" ? "surface-hover" : "surface", stroke: "border", w: 400 });
      c.counterAxisAlignItems = "MIN";
      c.strokeTopWeight = 0;
      c.strokeLeftWeight = 0;
      c.strokeRightWeight = 0;
      c.strokeBottomWeight = 1;
      const hd = hrow("Header", "space-12", { pad: ["space-16", "space-16"], cross: "CENTER" });
      add(hd, await text("How do I change the brand colour?", "label-lg", "text", "Title")).layoutGrow = 1;
      const ch = add(hd, icon("chevron-down", "outline", 20, "icon"));
      ch.name = "Chevron";
      if (s === "Expanded") ch.rotation = 180;
      add(c, hd);
      fillW(hd);
      if (st === "Focus") focusRing(hd);
      if (s === "Expanded") {
        const b = vcol("Content", "space-8", { pad: ["space-0", "space-16"] });
        b.paddingBottom = 16;
        add(b, await text("Swap the 11 brand/primary variables. Every component that uses an action colour updates automatically.", "body", "text-muted", "Body", 368));
        add(c, b);
        fillW(b);
      }
      comps.push(c);
    }
    const set = combine(page, comps, "Accordion item", 3, "Expandable section. The header is a button with aria-expanded; the chevron rotates 180\xB0. Use single or multiple open.");
    linkText(set, "Title", "How do I change the brand colour?", "Title");
    return set;
  }
  async function buildBreadcrumbs(page) {
    const comps = [];
    for (const sep of ["Chevron", "Slash"]) for (const coll of ["False", "True"]) {
      const c = comp(`Separator=${sep}, Collapsed=${coll}`, { gap: "space-8", fill: null, cross: "CENTER" });
      const items = coll === "True" ? ["Home", "\u2026", "Components", "Button"] : ["Home", "Design system", "Components", "Button"];
      for (let i = 0; i < items.length; i++) {
        const last = i === items.length - 1;
        if (i === 0) add(c, icon("home", "outline", 16, "link")).name = "Home icon";
        const t = add(c, await text(items[i], last ? "label" : "body-sm", last ? "text" : "link", last ? "Current" : `Item ${i + 1}`));
        if (!last && items[i] !== "\u2026") t.textDecoration = "UNDERLINE";
        if (!last) {
          if (sep === "Chevron") add(c, icon("chevron-forward", "outline", 14, "icon-muted")).name = "Separator";
          else add(c, await text("/", "body-sm", "text-muted", "Separator"));
        }
      }
      comps.push(c);
    }
    return combine(page, comps, "Breadcrumbs", 2, "Shows where you are. The current page is plain text (aria-current); long trails collapse the middle.");
  }
  async function buildPagination(page, sets) {
    const comps = [];
    for (const kind of ["Numbered", "Compact"]) {
      const c = comp(`Type=${kind}`, { gap: "space-4", fill: null, cross: "CENTER" });
      put2(c, iconBtn(sets, "chevron-back", "Ghost", "sm"));
      if (kind === "Numbered") for (const p of ["1", "2", "3", "\u2026", "12"]) {
        const b = frame(`Page ${p}`, { w: 32, h: 32, align: "CENTER", cross: "CENTER", fill: p === "2" ? "action" : null, radius: "radius-sm" });
        add(b, await text(p, "label", p === "2" ? "on-action" : "text"));
        add(c, b);
      }
      else add(c, await text("Page 2 of 12", "label", "text", "Status"));
      put2(c, iconBtn(sets, "chevron-forward", "Ghost", "sm"));
      comps.push(c);
    }
    return combine(page, comps, "Pagination", 2, "Move between pages of results. The current page is filled and announced; use Compact on small screens.");
  }
  async function buildStepper(page) {
    const comps = [];
    const steps = [["Cart", "complete"], ["Address", "current"], ["Payment", "upcoming"]];
    for (const o of ["Horizontal", "Vertical"]) {
      const c = comp(`Orientation=${o}`, { dir: o === "Horizontal" ? "HORIZONTAL" : "VERTICAL", gap: "space-12", fill: null, cross: o === "Horizontal" ? "CENTER" : "MIN" });
      if (o === "Vertical") c.counterAxisAlignItems = "MIN";
      for (let i = 0; i < steps.length; i++) {
        const [l, st] = steps[i];
        const s = frame(l, { dir: o === "Horizontal" ? "VERTICAL" : "HORIZONTAL", gap: "space-8", fill: null, cross: "CENTER" });
        const dot = frame("Marker", { w: 32, h: 32, align: "CENTER", cross: "CENTER", radius: "radius-full", fill: st === "complete" ? "action" : "surface", stroke: st === "upcoming" ? "border-strong" : "action", strokeW: 2 });
        if (st === "complete") add(dot, icon("checkmark", "outline", 16, "on-action"));
        else add(dot, await text(String(i + 1), "label", st === "current" ? "text" : "text-muted"));
        add(s, dot);
        add(s, await text(l, st === "current" ? "label" : "body-sm", st === "upcoming" ? "text-muted" : "text", "Label"));
        add(c, s);
        if (i < steps.length - 1) add(c, rect("Connector", o === "Horizontal" ? 64 : 2, o === "Horizontal" ? 2 : 24, st === "complete" ? "action" : "border", 1));
      }
      comps.push(c);
    }
    return combine(page, comps, "Stepper", 2, "Progress through a multi-step flow: complete, current, upcoming or error. Steps are announced with their status.");
  }
  async function buildNavBar(page, sets) {
    const comps = [];
    let c = comp("Platform=Web", { gap: "space-32", pad: ["space-12", "space-24"], fill: "surface", stroke: "border", w: 960, cross: "CENTER" });
    c.strokeTopWeight = 0;
    c.strokeLeftWeight = 0;
    c.strokeRightWeight = 0;
    c.strokeBottomWeight = 1;
    const lg = figma.createNodeFromSvg(DATA.logos["module-aa-nad-horizontal"]);
    lg.rescale(32 / lg.height);
    lg.name = "Logo";
    add(c, lg);
    const links = hrow("Links", "space-24", { cross: "CENTER" });
    for (const [l, on] of [["Docs", true], ["Components", false], ["Tokens", false], ["Figma", false]]) add(links, await text(l, "label", on ? "text" : "text-muted", l));
    add(c, links);
    links.layoutGrow = 1;
    put2(c, iconBtn(sets, "search"));
    put2(c, inst(sets, "Button", { Variant: "Primary", Size: "sm", State: "Default" }, { Label: "Get started" }));
    comps.push(c);
    c = comp("Platform=Mobile", { gap: "space-8", pad: ["space-8", "space-8"], fill: "surface", stroke: "border", w: 390, cross: "CENTER" });
    c.strokeTopWeight = 0;
    c.strokeLeftWeight = 0;
    c.strokeRightWeight = 0;
    c.strokeBottomWeight = 1;
    put2(c, iconBtn(sets, "arrow-back"));
    const t = add(c, await text("Settings", "heading-5", "text", "Title"));
    t.layoutGrow = 1;
    t.textAlignHorizontal = "CENTER";
    put2(c, iconBtn(sets, "ellipsis-horizontal"));
    comps.push(c);
    return combine(page, comps, "NavBar", 1, "Web top bar and mobile app bar. Mobile: back on the left, title centred, one overflow action on the right; 48px targets.");
  }
  async function buildTabBar(page) {
    const comps = [];
    for (const on of ["True", "False"]) {
      const c = comp(`Active=${on}`, { dir: "VERTICAL", gap: "space-4", fill: null, w: 78, pad: ["space-8", "space-0"], cross: "CENTER" });
      const pill = frame("Indicator", { w: 56, h: 32, align: "CENTER", cross: "CENTER", radius: "radius-full", fill: on === "True" ? "surface-sunken" : null });
      add(pill, icon("home", on === "True" ? "filled" : "outline", 24, on === "True" ? "text" : "icon-muted")).name = "Icon";
      add(c, pill);
      add(c, await text("Home", "label-sm", on === "True" ? "text" : "text-muted", "Label"));
      comps.push(c);
    }
    const set = combine(page, comps, "TabBar item", 2, "One destination in the mobile bottom bar: filled icon and a pill when active.");
    linkText(set, "Label", "Home", "Label");
    const bar = comp("TabBar", { gap: "space-0", pad: ["space-4", "space-8"], fill: "surface", stroke: "border", w: 390, align: "SPACE_BETWEEN" });
    bar.strokeTopWeight = 1;
    bar.strokeBottomWeight = 0;
    bar.strokeLeftWeight = 0;
    bar.strokeRightWeight = 0;
    for (const [l, ic, on] of [["Home", "home", true], ["Search", "search", false], ["Saved", "bookmark", false], ["Profile", "person", false]]) {
      const i = variantOf(set, { Active: on ? "True" : "False" }).createInstance();
      const k = propKey(i, "Label");
      if (k) i.setProperties({ [k]: l });
      const ico = i.findOne((n) => n.type === "INSTANCE" && n.name === "Icon");
      const target = ICON[`${ic}/${on ? "filled" : "outline"}`];
      if (ico && target) ico.swapComponent(target);
      add(bar, i);
    }
    bar.description = "Mobile bottom navigation with 3\u20135 destinations.";
    page.appendChild(bar);
    bar.x = 0;
    bar.y = set.y + set.height + 64;
    return set;
  }
  var MORE = [
    ["Link", "Inline, standalone and external links.", buildLink],
    ["TextArea", "Multi-line input with a character count.", buildTextArea],
    ["Combobox", "Searchable single select.", buildCombobox],
    ["MultiSelect", "Several values as tags in the field.", buildMultiSelect],
    ["FileUpload", "Dropzone and file rows with progress.", buildFileUpload],
    ["Slider", "A value in a range.", buildSlider],
    ["SegmentedControl", "2\u20135 instant options.", buildSegmented],
    ["Calendar", "Month grid with today and selection.", buildCalendar],
    ["DatePicker", "Date field with popover calendar.", buildDatePicker],
    ["Divider", "Horizontal, labelled and vertical.", buildDivider],
    ["List item", "Rows with text, icon or avatar.", buildList],
    ["Table cell", "Data table cells and an example table.", buildTable],
    ["Image", "Aspect ratios and fallback.", buildImage],
    ["Carousel", "Slides, buttons and dots.", buildCarousel],
    ["Tooltip", "Four placements.", buildTooltip],
    ["Spinner", "Three sizes, default and inverse.", buildSpinner],
    ["ProgressBar", "Determinate progress in three tones.", buildProgress],
    ["Skeleton", "Loading placeholders.", buildSkeleton],
    ["EmptyState", "Empty, search, error and success.", buildEmptyState],
    ["BlockLoader", "The Module Aa brand loader.", buildBlockLoader],
    ["Drawer", "Side panel with filters.", buildDrawer],
    ["BottomSheet", "Mobile sheet with handle.", buildBottomSheet],
    ["Menu item", "Menu items and an example menu.", buildMenu],
    ["Accordion item", "Expandable sections.", buildAccordion],
    ["Breadcrumbs", "Where you are.", buildBreadcrumbs],
    ["Pagination", "Numbered and compact.", buildPagination],
    ["Stepper", "Horizontal and vertical.", buildStepper],
    ["NavBar", "Web and mobile bars.", buildNavBar],
    ["TabBar item", "Mobile bottom navigation.", buildTabBar]
  ];
  async function rebuildMoreComponents() {
    await figma.loadAllPagesAsync();
    await figma.setCurrentPageAsync(figma.root.children[0]);
    const names = new Set(MORE.map(([n]) => n.replace(/ (item|cell)$/, "")));
    let removed = 0;
    for (const p of [...figma.root.children]) if (names.has(p.name) && figma.root.children.length > 1) {
      p.remove();
      removed++;
    }
    const compPage = figma.root.children.find((p) => p.name === "Components");
    if (compPage) {
      for (const n of [...compPage.children]) if (n.type === "SECTION" && names.has(n.name)) {
        n.remove();
        removed++;
      }
    }
    log(`Removed ${removed} generated pages`);
    return addMoreComponents();
  }
  async function addMoreComponents() {
    await setupFonts();
    await loadExisting();
    if (!VARS["bg"]) {
      figma.closePlugin('No Aa NAD library in this file \u2014 run "Build library" first.');
      return;
    }
    const sets = collectSets();
    const compPage = figma.root.children.find((p) => p.name === "Components");
    if (compPage) {
      LIMITED = true;
      GROUP_PAGES["Components"] = compPage;
      let y = 0;
      for (const n of compPage.children) y = Math.max(y, n.y + n.height + 200);
      CURSOR.set(compPage, y);
    }
    let added = 0, skipped = 0;
    for (const [name, desc, fn] of MORE) {
      if (sets[name]) {
        skipped++;
        continue;
      }
      try {
        const page = await docPage(name.replace(/ (item|cell)$/, ""), name.replace(/ (item|cell)$/, ""), desc);
        const node = await fn(page, sets);
        if (node.type === "COMPONENT_SET" || node.type === "COMPONENT") sets[name] = node;
        finishHost(page);
        added++;
      } catch (e) {
        warn(`${name}: ${e.message}`);
      }
    }
    lightCanvas();
    figma.closePlugin(`Aa NAD: added ${added} components${skipped ? `, ${skipped} already present` : ""}.` + (issues.length ? ` ${issues.length} note(s) in the console.` : ""));
  }
  var CANVAS = [{ type: "SOLID", color: { r: 0.957, g: 0.957, b: 0.957 } }];
  function lightCanvas() {
    for (const p of figma.root.children) p.backgrounds = CANVAS;
  }
  async function main() {
    if (figma.command === "cover") return rebuildCover();
    if (figma.command === "more") return addMoreComponents();
    if (figma.command === "more-rebuild") return rebuildMoreComponents();
    if (figma.root.children.some((p) => p.name === "Foundations" || p.name === "Cover & Foundations")) {
      lightCanvas();
      figma.closePlugin("Aa NAD library is already in this file \u2014 refreshed page backgrounds. Run in an empty file to build a new copy.");
      return;
    }
    figma.notify("Aa NAD: building the library\u2026 this takes about a minute.", { timeout: 6e4 });
    await setupFonts();
    await buildVariables();
    await buildStyles();
    probePageLimit();
    const cover = figma.root.children[0];
    cover.name = LIMITED ? "Cover & Foundations" : "Cover";
    if (LIMITED) CURSOR.set(cover, 1160);
    const found = await docPage("Foundations", "Foundations", "Colour (three modes), palette, typography, spacing, radius and elevation, all bound to variables.", "Cover & Foundations");
    const iconsPage = await docPage("Icons", "Icons", "Ionicons 8 (MIT), outline for rest and filled for active states. Each icon is a component; swap them through the Icon properties on components.", "Assets");
    await buildIcons(iconsPage);
    finishHost(iconsPage);
    const assets = await docPage("Logo & illustrations", "Logo, illustrations, avatars", "Module Aa logo, 15 line illustrations and 8 illustrated avatars as editable vectors. CC BY 4.0.", "Assets");
    await placeSvgs(assets, "Logo", Object.fromEntries(Object.entries(DATA.logos).filter(([k]) => !/white|reversed/.test(k))), 0, 240, 4);
    await placeSvgs(assets, "Logo on dark", Object.fromEntries(Object.entries(DATA.logos).filter(([k]) => /white|reversed/.test(k))), 560, 240, 4, "gray-950");
    await placeSvgs(assets, "Illustrations", DATA.illus, 900, 320, 4);
    await placeSvgs(assets, "Avatars", DATA.avatars, 2400, 96, 8);
    finishHost(assets);
    try {
      await buildFoundations(found);
    } catch (e) {
      warn("Foundations page: " + e.message);
    }
    finishHost(found);
    if (!LIMITED) {
      const sep = figma.createPage();
      sep.name = "\u2014\u2014\u2014  COMPONENTS  \u2014\u2014\u2014";
    }
    const builders = [
      ["Button", "Primary, secondary, tertiary, ghost and danger \xD7 3 sizes \xD7 5 states.", buildButton],
      ["IconButton", "Icon-only buttons; always labelled in code.", buildIconButton],
      ["TextField", "Text input with label, helper, error and icon.", buildTextField],
      ["Select", "Native select field.", buildSelect],
      ["Checkbox", "Checked, unchecked and indeterminate.", buildCheckbox],
      ["Radio", "Single choice within a group.", buildRadio],
      ["Switch", "Instant on/off settings.", buildSwitch],
      ["Badge", "Status in five tones and three styles.", buildBadge],
      ["Tag", "Keywords, filter chips, chosen values.", buildTag],
      ["Avatar", "Initials, illustration or icon in five sizes.", buildAvatar],
      ["Card", "Outline, elevated, filled.", buildCard],
      ["Alert", "Inline messages in five tones.", buildAlert],
      ["Toast", "Brief confirmations on the inverse surface.", buildToast],
      ["Tabs", "Tab items and an example bar.", buildTabs],
      ["Modal", "Dialogs and destructive confirmations.", buildModal]
    ];
    let button;
    let done = 0;
    for (const [name, desc, fn] of builders) {
      try {
        const page = await docPage(name, name, desc);
        const set = await fn(page, button);
        if (name === "Button") button = set;
        finishHost(page);
        done++;
      } catch (e) {
        warn(`${name}: ${e.message}`);
      }
    }
    try {
      await buildCover(cover, collectSets());
    } catch (e) {
      warn("Cover: " + e.message);
    }
    lightCanvas();
    await figma.setCurrentPageAsync(cover);
    const msg = `Aa NAD library built: ${Object.keys(VARS).length + Object.keys(FLOATS).length} variables, ${Object.keys(TEXT).length} text styles, ${Object.keys(ICON).length} icons, ${done}/15 components.` + (issues.length ? ` ${issues.length} note(s) \u2014 see the console (Plugins \u2192 Development \u2192 Show/Hide console).` : "");
    figma.closePlugin(msg);
  }
  main().catch((e) => {
    console.error(e);
    figma.closePlugin("Aa NAD failed: " + (e && e.message ? e.message : e));
  });
})();
