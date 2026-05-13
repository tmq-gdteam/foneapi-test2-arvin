# FoneAPI Full Site Rebuild — Implementation Plan

**Project:** foneAPI React/Tailwind v4 Rebuild  
**Stack:** Vite + React 18 + TypeScript + Tailwind v4  
**Dev Server:** `http://localhost:5173`  
**Completed:** Phase 0 (Design System), Phase 1 (Homepage Master Template)

---

## Architecture Decisions

### Routing
- Use `react-router-dom v6` (`BrowserRouter` + `Routes`/`Route`)
- Route file: `src/router.tsx`
- Dynamic blog routes: `/blog/:slug`

### Shared Layout
- `src/layouts/MainLayout.tsx` — wraps every page with `<Navbar>` + `<Footer>`
- `src/layouts/DocsLayout.tsx` — for developer doc pages (sidebar nav)

### Reusable Components (from Master Template)
All sub-pages MUST import and reuse from `src/components/`:
- `Navbar.tsx` ✅
- `Footer.tsx` ✅  
- `CTABand.tsx` ✅ — reuse on every product/solution page
- `SectionHeading.tsx` — NEW: shared eyebrow + H2 component
- `CapabilityCard.tsx` — extract from Capabilities for reuse
- `SolutionCard.tsx` — extract from Solutions for reuse

### Design System Usage
- All CSS tokens from `src/index.css` (`--color-bg`, `--color-ink`, etc.)
- All fluid typography classes (`text-display`, `text-heading-xl`, etc.)
- All button classes (`btn`, `btn-gradient`, `btn-ghost`, etc.)
- All animation keyframes (`float`, `fade-up`, `halo-spin`, etc.)

---

## Execution Order

Pages are grouped into parallel batches. Sub-agents execute each batch simultaneously.

---

## Batch 0 — Shared Infrastructure (Sequential, Do First)

### 0.1 — Router Setup
**File:** `src/router.tsx`  
Wire all 43 routes using `react-router-dom`. Use lazy imports for code splitting.

### 0.2 — Shared Layout
**File:** `src/layouts/MainLayout.tsx`  
Wraps: `<Navbar />` + `<Outlet />` + `<CTABand />` + `<Footer />`

### 0.3 — Shared Components
Extract reusable components from existing homepage sections:
- `src/components/SectionHeading.tsx`
- `src/components/PageHero.tsx` (inner-page hero — smaller, no floating cards)
- `src/components/FeatureGrid.tsx` (2-col feature list with icon + text)
- `src/components/CodeSnippet.tsx` (dark code block with copy button)
- `src/components/TestimonialCard.tsx`
- `src/components/PricingCard.tsx`

---

## Batch 1 — Core Marketing Pages (Parallel)

All pages share: `MainLayout`, page-level `<PageHero>`, `<CTABand>`, SEO JSON-LD.

### Page: `/product` — Product Overview
**File:** `src/pages/Product.tsx`

**Sections:**
1. `PageHero` — "One platform. Every channel." + subtitle + 2 CTAs
2. Tabbed capability selector (Voice / Video / Messaging / Email / Security / Social / Fax / Cognitive)
3. How it works — 3-step horizontal flow diagram
4. Integration logos strip (placeholder grid of partner logos)
5. `CTABand`

**SEO:** `<title>Product Overview | foneAPI</title>`, `SoftwareApplication` JSON-LD

---

### Page: `/solutions` — Solutions Hub
**File:** `src/pages/Solutions.tsx`

**Sections:**
1. `PageHero` — "Built for real-world business outcomes"
2. By Use Case — grid of 6 solution cards (reuse `SolutionCard`)
3. By Industry — 4-column industry cards (Healthcare, Finance, E-commerce, Logistics)
4. Featured customer story card (pull-quote style)
5. `CTABand`

**SEO:** `Service` JSON-LD schema

---

### Page: `/pricing` — Pricing
**File:** `src/pages/Pricing.tsx`

**Sections:**
1. `PageHero` — "Simple, transparent pricing. Pay as you go."
2. Product selector tabs (Voice / Messaging / Email / Fax / Video / Security)
3. Pricing table — per-unit rates with volume tiers, rendered per tab
4. Free tier callout — "Start with free credits, no credit card needed"
5. FAQ accordion (5–7 common pricing questions)
6. `CTABand`

**SEO:** `PriceSpecification` + `Offer` + `FAQPage` JSON-LD

---

### Page: `/why-us` — About Us
**File:** `src/pages/WhyUs.tsx`

**Sections:**
1. `PageHero` — "Why teams choose foneAPI"
2. Company mission statement — large pull-quote
3. Key differentiator pillars — 3-column icon grid (Reliability, Global, Developer-first)
4. Numbers that matter — stat strip (uptime, countries, developers)
5. Team / Leadership section (placeholder avatar grid)
6. `CTABand`

**SEO:** `Organization` JSON-LD

---

### Page: `/testimonials` — Testimonials
**File:** `src/pages/Testimonials.tsx`

**Sections:**
1. `PageHero` — "Loved by developers and enterprises alike"
2. Featured testimonial — large quote, photo, company logo
3. Testimonial grid — 3-column card layout, 9 testimonials
4. Aggregate rating bar — "4.9/5 from 1,200+ developers"
5. `CTABand`

**SEO:** `Review` + `AggregateRating` JSON-LD

---

### Page: `/contact-us` — Contact
**File:** `src/pages/ContactUs.tsx`

**Sections:**
1. `PageHero` — "Let's talk"
2. 2-col layout: contact form (left) + contact details / map placeholder (right)
3. Contact categories — Sales / Support / Partnerships / Press

---

### Page: `/talk-to-sales` — Talk to Sales
**File:** `src/pages/TalkToSales.tsx`

**Sections:**
1. `PageHero` — "Talk to our team"
2. 2-col: Benefits list (left) + embedded sales form (right)
3. Trust badges — "No commitment. Free to start."

---

## Batch 2 — Core Product Pages (Parallel)

Each product page shares the same layout pattern:
1. `PageHero` — product-specific gradient accent color
2. Features grid — 3-col icon+text cards
3. Code snippet — language tabs (Node.js / Python / PHP / curl)
4. Use cases — horizontal card strip
5. Pricing callout — pay-as-you-go rate + link to full pricing
6. `CTABand`

### Pages:
| File | Route | Accent Color |
|---|---|---|
| `src/pages/products/Voice.tsx` | `/products/voice` | Red `#ff4f61` |
| `src/pages/products/Video.tsx` | `/products/video` | Purple `#7f5cff` |
| `src/pages/products/Messaging.tsx` | `/products/messaging` | Green `#48b956` |
| `src/pages/products/Email.tsx` | `/products/email` | Teal `#28bdaa` |
| `src/pages/products/Fax.tsx` | `/products/fax` | Orange `#ff7d3e` |
| `src/pages/products/Security.tsx` | `/products/security` | Blue `#1b9dff` |
| `src/pages/products/SocialNetwork.tsx` | `/products/social-network` | Blue `#2474ff` |
| `src/pages/products/CognitiveAutomation.tsx` | `/products/cognitive-automation` | Pink `#ff5fc6` |

---

## Batch 3 — Use Case Solution Pages (Parallel)

Each solution page pattern:
1. `PageHero` — solution-specific title + how it works in 1 sentence
2. How it works — 3-step numbered flow (icon + title + description)
3. Benefits — 3-col icon+text grid
4. Code example — simple API call for this use case
5. Related solutions links
6. `CTABand`

### Pages:
| File | Route |
|---|---|
| `src/pages/solutions/ClickToCall.tsx` | `/solutions/click-to-call` |
| `src/pages/solutions/CallMonitoring.tsx` | `/solutions/call-monitoring` |
| `src/pages/solutions/LeadAlerts.tsx` | `/solutions/lead-alerts` |
| `src/pages/solutions/AppointmentReminders.tsx` | `/solutions/appointment-reminders` |
| `src/pages/solutions/ProtectNumbers.tsx` | `/solutions/protect-numbers` |
| `src/pages/solutions/Verification.tsx` | `/solutions/verification` |

---

## Batch 4 — Advanced Solutions / Technical Pages (Parallel)

Pattern: Technical landing page with architecture diagram (CSS-drawn), feature list, integration details.

| File | Route | Key Content |
|---|---|---|
| `src/pages/solutions/Industry.tsx` | `/solutions/industry` | Industry vertical cards: Healthcare, Finance, E-commerce, Logistics, Education, Retail |
| `src/pages/solutions/Integrations.tsx` | `/solutions/integrations` | Integration hub — partner logos grid + categories |
| `src/pages/solutions/CPaaS.tsx` | `/solutions/cpaas` | CPaaS explainer, architecture, enterprise benefits |
| `src/pages/solutions/VoiceInsight.tsx` | `/solutions/voice-insight` | Analytics dashboard preview, transcription, sentiment |
| `src/pages/solutions/WebRTC.tsx` | `/solutions/web-rtc` | WebRTC gateway, browser calling, SDKs |
| `src/pages/solutions/SIPTrunking.tsx` | `/solutions/sip-trunking` | SIP registration, PSTN connectivity |
| `src/pages/solutions/FoneInterconnect.tsx` | `/solutions/fone-interconnect` | Interconnect explainer, peering |

---

## Batch 5 — Developer / Docs Stubs (Parallel)

Use `DocsLayout` (sidebar nav). These are stub pages — placeholder content with proper structure.

| File | Route |
|---|---|
| `src/pages/docs/VoiceApiDocs.tsx` | `/products/voice/voice-api` |
| `src/pages/docs/SMSApiDocs.tsx` | `/products/messaging/sms-api` |
| `src/pages/docs/SMSPricing.tsx` | `/products/messaging/sms-pricing` |
| `src/pages/docs/VoicePrograms.tsx` | `/products/voice/voice-programs` |

---

## Batch 6 — Content Pages (Parallel)

| File | Route | Content |
|---|---|---|
| `src/pages/Blog.tsx` | `/blog` | Blog listing grid — 9-card layout with category filter |
| `src/pages/BlogPost.tsx` | `/blog/:slug` | Blog post template — hero image, body, sidebar |
| `src/pages/Support.tsx` | `/support` | Help center — search bar + category cards |
| `src/pages/FAQs.tsx` | `/faqs` | Accordion FAQ — 15+ Q&As, FAQPage JSON-LD |

---

## Batch 7 — Legal & Auth Pages (Parallel)

Minimal design — centered text layout with sidebar TOC.

| File | Route |
|---|---|
| `src/pages/PrivacyPolicy.tsx` | `/privacy-policy` |
| `src/pages/TermsOfService.tsx` | `/terms-of-service` |
| `src/pages/CookiePolicy.tsx` | `/cookies` |
| `src/pages/SignUp.tsx` | `/sign-up` |
| `src/pages/LogIn.tsx` | `/log-in` |
| `src/pages/ForgotPassword.tsx` | `/forgot-password` |
| `src/pages/NotFound.tsx` | `*` (404) |

---

## Global SEO Requirements (All Pages)

Every page MUST include:
```tsx
// In <head> via react-helmet or direct title tag
<title>[Page Title] | foneAPI</title>
<meta name="description" content="..." />
<link rel="canonical" href="https://foneapi.com/[route]" />

// JSON-LD schema block
<script type="application/ld+json">{JSON.stringify(schema)}</script>
```

---

## Design Constraints (All Sub-pages)

1. **No style deviations** — use only tokens from `src/index.css`
2. **Fluid typography** — use `.text-display`, `.text-heading-xl`, `.text-heading-lg` classes
3. **Mobile-first** — all grids use `flex-col` → `md:flex-row` equivalents via inline style media queries
4. **Hamburger nav** — already built in `Navbar.tsx`, do not modify
5. **Container max-width** — always use `className="container"` or `style={{ width: 'min(1220px, calc(100% - 48px))', marginInline: 'auto' }}`
6. **CTA Band** — every product/solution/marketing page ends with `<CTABand />`
7. **Accessibility** — all sections have `aria-label`, all decorative elements have `aria-hidden="true"`

---

## Verification Plan

After Phase 3 (build), Phase 4 will:
1. **Browser snapshot** every page at 1440px, 768px, 375px viewports
2. **Build check** — `npm run build` must complete with zero TypeScript errors
3. **Lighthouse audit** — Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
4. **SEO JSON-LD validation** — validate all structured data schemas
5. **Fluid typography check** — verify `clamp()` scales at 375px, 768px, 1440px, 2560px

---

*Generated: 2026-05-13 | Ready for Phase 3 autonomous execution*
