# Publishing Aa NAD

You do three things, once. They take about 20 minutes in total.

1. Push the repository to GitHub as a public repo.
2. Turn on GitHub Pages so the docs site goes live.
3. Build the Figma library and publish it to Figma Community.

Nothing here needs the command line.

---

## 0. Before you start

- **A GitHub account** and **[GitHub Desktop](https://desktop.github.com)**, signed in under **Settings → Accounts**.
- **Your GitHub username in the links.** The files use the placeholder `Yogesh2806`. Send Claude your username and it will fill them in. To do it yourself, open the folder in VS Code and use **Edit → Replace in Files**: replace `Yogesh2806` with your username. It appears in `README.md`, `docs/index.html` and `scripts/index.template.html`.
- **Privacy:** GitHub Desktop signs commits with the email in **Settings → Git**. To keep your personal email private, choose your `…@users.noreply.github.com` address there. In the browser, also turn on **GitHub → Settings → Emails → Keep my email addresses private**.

## 1. Push to GitHub (public)

1. In GitHub Desktop, choose **File → Add Local Repository…** and select the `aa-nad-design-system` folder.
2. It says the folder isn't a Git repository yet. Click **create a repository**.
   - Name: `aa-nad-design-system`
   - Git ignore: None (the folder already has one)
   - License: None (`LICENSE` is already there)
   - Click **Create Repository**.
3. Your files now appear under **Changes**. In the summary box at the bottom left, type `Aa NAD Design System 1.2.0` and click **Commit to main**.
4. Click **Publish repository**. **Untick “Keep this code private”** and click **Publish**.
5. On github.com, open the repo and click the ⚙ next to **About**. Add:
   - Description: `Universal, monochrome, accessibility-first design system for web and mobile — tokens, React components, Figma library.`
   - Website: tick **Use your GitHub Pages website**.
   - Topics: `design-system`, `react`, `figma`, `design-tokens`, `accessibility`, `wcag`, `dark-mode`.

## 2. Turn on the docs site (GitHub Pages)

1. On the repo page, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Then set **Branch** to `main` and the folder to `/docs`, and click **Save**.
3. After a minute or two the site is live at `https://Yogesh2806.github.io/aa-nad-design-system/`.

**Make the CDN links work (optional, recommended).** On the repo page, go to **Releases → Draft a new release**. Set the tag to `v1.2.0` and the title to `1.2.0`, paste the 1.2.0 notes from `CHANGELOG.md`, and click **Publish release**. jsDelivr then serves `https://cdn.jsdelivr.net/gh/Yogesh2806/Aa-NAD-Design-System@v1.2.0/dist/aa-nad.js`.

## 3. Publish the Figma file to Figma Community

**Build the editable file**

1. Install the two fonts from `assets/fonts/desktop` (double-click each `.ttf`), then restart Figma.
2. In the **Figma desktop app**, create a new design file named **Aa NAD Design System**.
3. Go to **Menu → Plugins → Development → Import plugin from manifest…** and choose `figma-plugin/manifest.json`.
4. Run **Plugins → Development → Aa NAD Library Builder** and wait about a minute.
5. Check the result:
   - Open the **Cover**, **Foundations** and a few component pages.
   - Select any frame. In the right panel, under **Appearance**, switch the **Color** mode between Light, Dark and High contrast.
   - The plugin is a **development plugin**, so only you can run it. That's fine: what you publish is the *file* it made.

**Publish it**

1. Click **Share** (top right), then the **Publish to Community** button. On some versions it's under **Menu → File → Publish to Community…**.
2. Fill in the form:
   - **Name:** Aa NAD Design System
   - **Description:**
     > Universal, monochrome, accessibility-first design system for web and mobile. Variables with Light, Dark and High-contrast (WCAG AAA) modes, text and effect styles, Ionicons as components, and 15 component sets with variants and properties, all bound to tokens. Code (React, tokens) on GitHub: https://github.com/Yogesh2806/Aa-NAD-Design-System
   - **Thumbnail:** use `docs/img/figma-thumbnail.png` (1920×1080).
   - **Category:** Design systems, or UI kits.
   - **Tags:** design system, accessibility, dark mode, variables, components.
   - **Licence:** Figma Community files use Figma's community licence (CC BY 4.0), which matches our asset licence.
   - **Allow duplicates:** on. This lets people copy the file and edit everything.
3. Click **Publish**. Figma's reviewers check new creators, which usually takes a few days.
4. When it's live, add the Community link to `README.md` next to “Figma plugin”, commit in GitHub Desktop, and click **Push origin**.

## 4. Updating later

- **Code:** change files, commit in GitHub Desktop, and click **Push origin**. Pages updates by itself. For a new version, add a `CHANGELOG.md` entry and a new release tag.
- **Figma:** edit the published file directly, then use **Share → Publish update**. For big token changes, rebuild with the plugin in a fresh file and publish that as the update.
