---
name: automated-site-rebuild
description: Automatically rebuild a legacy website from exported source code or Figma into a modern, fluid-responsive React/Tailwind v4 architecture. Use this skill when the user asks to "rebuild this site", "migrate this webflow export", "update our website architecture", or whenever a multi-page site needs to be recreated autonomously while maintaining the original brand colors and executing a 3-stage psychological funnel.
---

# Automated Site Rebuild

A structured, 5-phase workflow for autonomously rebuilding a legacy website into a modern, premium, fluid-responsive React and Tailwind v4 application. This process ensures the original color scheme is retained, the content is optimized for a 3-stage psychological funnel (Attract, Interest, Action), and rigorous SEO/AEO/GEO strategies are baked in at the code level.

When a user triggers this skill, guide them sequentially through these 5 phases.

---

## Global Constraints

**Strict Responsive Rules:** 
1. Mobile-first Tailwind structural wrapping (e.g., `flex-col md:flex-row`).
2. Interactive Mobile Navigation (Navbar MUST collapse into a functional Hamburger menu using state or shadcn/ui Sheet on small screens).
3. Fluid typography (`clamp()`) combined with an 85% global container safeguard for ultra-wide desktop monitors.

---

## Phase 0: Deep Audit & Discovery

Before writing any code, analyze the legacy source files to map out technical debt and opportunities.

**Skills to utilize:** `design-debt-audit`, `seo`, `information-architecture`, `content-strategy`
**Required Outputs:** `SITE_INVENTORY.md` and `IMPROVEMENTS.md`

**Instructions:**
1. **Inspect:** Analyze the project structure (HTML, CSS, forms, Webflow bloat, template patterns).
2. **Inventory:** Build `SITE_INVENTORY.md` listing every page, its purpose, images used, and rebuild status.
3. **Analyze:** Identify risks such as fixed-width layouts, image preservation needs, and pages failing the psychological flow.
4. **Strategize:** Generate `IMPROVEMENTS.md` containing critical fixes, design upgrades, and a comprehensive SEO/AEO/GEO strategy (schema, answer capsules, localized data).

> [!IMPORTANT]
> Do NOT write any application code during Phase 0. Wait for the user to approve the audit artifacts before proceeding to Phase 1.

---

## Phase 1: Architecture, Tokens & Content Blueprint

Translate the audit findings into concrete technical and content solutions.

**Skills to utilize:** `theme-factory`, `ux-writing`, `writing-plans`
**Required Output:** `implementation_plan.md`

**Instructions:**
1. **Tokenize:** Extract brand colors using `theme-factory` and define a semantic Tailwind v4 design system utilizing CSS `clamp()` for fluid typography and spacing.
2. **Rewrite:** Use `ux-writing` to transform legacy content into the strict 3-stage funnel: Attract Attention, Build Interest, Guide to Action.
3. **Blueprint:** Generate the master `implementation_plan.md` detailing the component structures, SEO schemas, and execution order for the subagents.

> [!IMPORTANT]
> Wait for the user to approve the `implementation_plan.md` before triggering the autonomous build.

---

## Phase 2: Autonomous Rebuilding (Execution)

Unleash parallel subagents to build the site without human intervention.

**Skills to utilize:** `subagent-driven-development` (or `dispatching-parallel-agents`), `frontend-design`, `ui-ux-pro-max`, `executing-plans`

**Instructions:**
1. **Foundation:** Setup the global `fluid-container` and Tailwind configuration.
2. **Dispatch:** Trigger subagents to build the pages simultaneously based entirely on the approved plan.
3. **Quality Control:** Subagents must output production-grade React components, injecting the approved JSON-LD schemas and psychological content.
4. **Tracking:** Maintain a live `task.md` checklist as components finish.

*Run this phase autonomously until all pages are built.*

---

## Phase 3: Automated QA & Validation

Programmatically test the completed build to ensure constraints are met.

**Skills to utilize:** `verification-before-completion`, `webapp-testing`, `seo`, `accessibility-audit`
**Required Output:** `walkthrough.md`

**Instructions:**
1. **UI Testing:** Use headless browser testing to ensure the CSS `clamp()` fluid architecture scales flawlessly up to 4K viewports.
2. **SEO Check:** Validate that all semantic HTML, answer capsules, and schema data were successfully injected.
3. **Accessibility:** Run an audit to ensure color contrast compliance with the new tokens.
4. **Handoff:** Compile screenshots and evidence into a `walkthrough.md` artifact and present it to the user for final visual review.

---

## Phase 4: Integration & Deployment

Handle final human feedback and integrate the completed code.

**Skills to utilize:** `receiving-code-review`, `finishing-a-development-branch`

**Instructions:**
1. **Polish:** Execute any final precision tweaks requested by the user during their visual review.
2. **Conclude:** Clean up the workspace and offer structured options to either create a Pull Request, merge to `main`, or prep the branch for production deployment (e.g., Vercel, Netlify).
