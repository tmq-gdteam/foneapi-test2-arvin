---
name: automated-site-creation
description: Automated workflow for generating a fully optimized, fluid-responsive website from source material (transcripts, docs) without human intervention during the build phase.
---

# Automated Site Creation Workflow

Use this skill whenever the user wants to automatically architect and build a comprehensive, fully optimized, and fully responsive website based on provided source material (like a podcast transcript, research doc, or description).

## Prerequisites
You MUST silently invoke and utilize the principles from the following skills throughout this workflow:
- `brainstorming`
- `content-strategy`
- `information-architecture`
- `responsive-design`
- `ckm:ui-styling`
- `seo`

## The Workflow

### PHASE 1: Extraction & Architecture Definition
**STOP: Do NOT write any code yet.**
Analyze the source material provided by the user and generate a detailed `Site_Architecture_Spec.md` artifact. This document must explicitly define the following three areas:

**A. Content & Market Extraction:**
- Core idea, Offer, Target audience, Positioning
- Features & benefits, Proof & credibility, Objections
- CTA opportunities, Content inventory, Content gaps
- Likely sitemap opportunities, Source-grounded claims, Claims needing verification

**B. SEO, AEO & GEO Strategy:**
- SEO metadata strategy & Page-by-page search intent
- Answer capsule strategy & GEO citation-readiness
- Schema strategy & Semantic HTML / section ID strategy
- FAQ strategy & Internal linking strategy
- Proof/data needs & Claims needing verification

**C. Site Architecture & Responsive Rules:**
- Sitemap & Page types (Must include a persistent Navbar and Footer)
- Templates, Component system, & Content system
- Conversion flows (Attract > Interest > Action psychological funnel)
- SEO/AEO/GEO hooks
- Quality-gate requirements & Complete page build queue
- **Strict Responsive Rules:** 
  1. Mobile-first Tailwind structural wrapping (e.g., `flex-col md:flex-row`).
  2. Interactive Mobile Navigation (Navbar MUST collapse into a functional Hamburger menu using state or shadcn/ui Sheet on small screens).
  3. Fluid typography (`clamp()`) combined with an 85% global container safeguard for ultra-wide desktop monitors.

### PHASE 2: Review Checkpoint
Present the `Site_Architecture_Spec.md` to the user. **You must stop and wait for the user to explicitly approve the architecture before proceeding to Phase 3.**

### PHASE 3: Autonomous Build
Once the user approves the spec, invoke the `writing-plans` and `executing-plans` skills to orchestrate the build. Follow the "Complete page build queue" defined in the spec. 
- You MUST build a rich, multi-section site.
- **CRITICAL:** Ensure the Navbar includes active state logic for a mobile hamburger menu. Ensure all content sections stack properly on mobile viewports using mobile-first Tailwind utility classes.
- Do not pause for the user's input during the build process unless you are critically blocked.

### PHASE 4: Final Validation
Once the build is complete, use the `seo` skill to validate that the Semantic HTML, Schema, and GEO strategies were perfectly implemented. Present the final project back to the user for review.
