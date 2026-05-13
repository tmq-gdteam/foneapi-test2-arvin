---
name: ai-seeded-site-rebuild
description: Autonomously rebuild legacy websites using a ChatGPT-generated HTML/CSS reference as the design seed. Extracts design intent, establishes a Master React/Tailwind template, and dispatches subagents to scale the design across the site.
---

# AI-Seeded Site Rebuild

A structured, 5-phase workflow for autonomously rebuilding a legacy website into a modern, premium, fluid-responsive React and Tailwind v4 application. This process uses an AI-generated (ChatGPT) design as a seed, extracts the design intent, and scales it securely.

When a user triggers this skill, guide them sequentially through these 5 phases.

---

## Global Constraints

**Strict Responsive Rules:** 
1. Mobile-first Tailwind structural wrapping (e.g., `flex-col md:flex-row`).
2. Interactive Mobile Navigation (Navbar MUST collapse into a functional Hamburger menu on small screens).
3. Fluid typography (`clamp()`) combined with an 85% global container safeguard for ultra-wide desktop monitors.

---

## Phase 0: AI Design Ingestion & Tokenization

Extract the "design intent" from the provided AI-generated output to build a global design system.

**Required Inputs:** ChatGPT-generated `index.html`, `css`, and mockup image.
**Skills to utilize:** `theme-factory`
**Required Output:** `DESIGN_SYSTEM.md` and updated Tailwind config.

**Instructions:**
1. **Analyze:** Parse the provided CSS and HTML to reverse-engineer the "design intent" (extracting exact hex codes, font families, and layout patterns).
2. **Tokenize:** Generate a strict Tailwind v4 design system utilizing CSS `clamp()` for fluid typography and spacing. Save this to `DESIGN_SYSTEM.md`.

> [!IMPORTANT]
> Ensure the design system enforces accessibility and scaling constraints, as the raw AI output may not.

---

## Phase 1: Homepage Master Template Construction

Build the global Master Template before looking at the legacy site.

**Skills to utilize:** `frontend-design`, `ui-ux-pro-max`

**Instructions:**
1. **Foundation:** Use the `DESIGN_SYSTEM.md` and the structural intent of the ChatGPT HTML to build the React/Tailwind v4 homepage component from scratch.
2. **Clean Up:** Ensure the resulting React code is production-ready, removing any messy or non-standard practices from the original AI output.

> [!IMPORTANT]
> Present the compiled React homepage to the user and wait for visual approval before moving to Phase 2. This is the Master Template.

---

## Phase 2: Legacy Audit & Blueprint

Map the legacy site's content onto the new Master Template.

**Skills to utilize:** `seo`, `information-architecture`, `ux-writing`, `writing-plans`
**Required Outputs:** `SITE_INVENTORY.md` and `implementation_plan.md`

**Instructions:**
1. **Audit:** Inventory the legacy site content (`SITE_INVENTORY.md`).
2. **Map & Rewrite:** Map the legacy content to the new design patterns established in Phase 1. Enforce the 3-stage psychological funnel: Attract Attention, Build Interest, Guide to Action.
3. **Blueprint:** Generate the master `implementation_plan.md` detailing the execution order and SEO schemas for the subagents.

> [!IMPORTANT]
> Wait for the user to approve the `implementation_plan.md` before triggering the autonomous build.

---

## Phase 3: Autonomous Sub-page Rebuild (Execution)

Unleash parallel subagents to build the site without human intervention.

**Skills to utilize:** `subagent-driven-development` (or `dispatching-parallel-agents`), `executing-plans`

**Instructions:**
1. **Dispatch:** Trigger subagents to build the remaining pages simultaneously based on the approved plan.
2. **Clone Architecture:** Subagents MUST use the exact React/Tailwind components and patterns established in the Phase 1 Master Template.
3. **Tracking:** Maintain a live `task.md` checklist as components finish.

*Run this phase autonomously until all pages are built.*

---

## Phase 4: Automated QA, Validation & Handoff

Programmatically test the completed build to ensure constraints are met.

**Skills to utilize:** `verification-before-completion`, `webapp-testing`, `accessibility-audit`
**Required Output:** `walkthrough.md`

**Instructions:**
1. **UI Testing:** Use headless browser testing to ensure the CSS `clamp()` fluid architecture scales flawlessly up to 4K viewports on all sub-pages.
2. **SEO Check:** Validate that all semantic JSON-LD schemas and answer capsules were successfully injected.
3. **Accessibility:** Run a contrast and accessibility audit.
4. **Handoff:** Compile screenshots into a `walkthrough.md` artifact for final human review. After approval, offer options to create a PR or merge to main.
