---
name: github-pages-deploy
description: Automates the deployment of a website to GitHub Pages via GitHub Actions. Use this skill when the user asks to "deploy this to GitHub Pages", "push to GitHub", or after generating/rebuilding a site with ai-seeded-site-rebuild, automated-site-rebuild, or automated-site-creation to get it live.
---

# GitHub Pages Deployment

A structured workflow for deploying a local codebase to GitHub Pages. This skill automatically configures Vite/React builds for GitHub Pages and creates the necessary GitHub Actions workflows.

When a user triggers this skill, guide them sequentially through these 4 phases.

---

## Phase 1: Pre-flight Checks & Git Setup

Ensure the project is a Git repository and is linked to a GitHub remote.

**Instructions:**
1. **Check Git Status:** Use terminal commands (like `git status`) to verify if the current directory is a git repository.
2. **Initialize if needed:** If it is not a Git repository, initialize it (`git init`), create a `.gitignore` if missing (ignoring `node_modules` and `dist`), and make an initial commit.
3. **Check Remote:** Run `git remote -v` to see if a remote named `origin` exists.
4. **Add Remote:** If no remote exists, ask the user to provide the GitHub repository URL and add it (`git remote add origin <URL>`). 
   *Note: If the repo doesn't exist on GitHub yet, instruct the user to create an empty repository on GitHub first and provide the URL.*

> [!IMPORTANT]
> Do not proceed to Phase 2 until the local repository is initialized and the GitHub remote is configured.

---

## Phase 2: Build Configuration (Vite/React)

GitHub Pages serves sites from a subdirectory by default when using a project repository (e.g., `https://<username>.github.io/<repo-name>/`). We must configure the build tools to use the correct base path.

**Instructions:**
1. **Determine Base Path:** Extract the `<repo-name>` from the Git remote origin URL. If the repository is a user/organization page (named `<username>.github.io`), the base path is `/`. Otherwise, the base path is `/<repo-name>/`.
2. **Audit `vite.config.ts` or `vite.config.js`:** Check the Vite configuration file. If it exists, ensure the `base` property is set correctly based on the step above.
3. **Modify Configuration:** If the `base` property is missing or incorrect, modify the file to include `base: '/<repo-name>/',`.
4. **Audit `package.json`:** Ensure there is a `build` script (typically `vite build`).

---

## Phase 3: GitHub Actions Setup

Generate the workflow file that will automatically build and deploy the site whenever code is pushed to the main branch.

**Instructions:**
1. **Create Workflow File:** Write the following content to `.github/workflows/deploy.yml` (create the directories if they don't exist):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main, master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> [!NOTE]
> If the user's project is a plain HTML/CSS site without a build step, adjust the `run: npm run build` step to simply upload the root directory or the specific public directory, and remove the Node setup steps.

---

## Phase 4: Commit, Push & Handoff

Push the changes to GitHub and instruct the user on how to enable GitHub Pages.

**Instructions:**
1. **Commit Changes:** Stage the changes (`git add .`) and commit them (`git commit -m "chore: configure GitHub Pages deployment"`).
2. **Determine Default Branch:** Check if the default branch is `main` or `master`.
3. **Push to GitHub:** Push the commit to the remote origin (`git push -u origin HEAD`).
4. **Handoff & Instructions:** Provide the user with the expected live URL of their site (e.g., `https://<username>.github.io/<repo-name>/`).
5. **Final Step for User:** Remind the user to go to their repository settings on GitHub: **Settings -> Pages -> Source**, and ensure it is set to **GitHub Actions**.

> [!SUCCESS]
> Inform the user that the deployment is underway and will be live shortly after the GitHub Action finishes running.
