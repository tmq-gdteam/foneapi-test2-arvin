# FoneAPI Site Inventory
> **Phase 2 Output** — Derived from the ChatGPT seed `index.html` navigation, footer link structure, and legacy site page mapping.  
> Legacy source: 26+ HTML files and subdirectory structure inventoried before Vite scaffold.

---

## Navigation Architecture

```
Primary Nav:   Product | Solutions | Developers | Pricing | Resources
Nav Actions:   Docs | Log in | [Get started] CTA
```

---

## Page Inventory

### Group 1: Core / Marketing Pages (High Priority)

| # | Slug | Page Title | Content Type | Priority |
|---|---|---|---|---|
| 1 | `/` | Home | Hero + Stats + Capabilities + Solutions + CTA | ✅ Done (Master Template) |
| 2 | `/product` | Product Overview | Features tabbed layout, API overview | P1 |
| 3 | `/solutions` | Solutions / Cloud | Industry/use-case selector, feature grid | P1 |
| 4 | `/pricing` | Pricing | SMS pricing table, pay-as-you-go tiers | P1 |
| 5 | `/why-us` | About Us / Why foneAPI | Company story, differentiators, trust | P1 |
| 6 | `/contact-us` | Contact Us | Contact form, office info | P1 |
| 7 | `/talk-to-sales` | Talk to Sales | Sales form, benefits | P1 |
| 8 | `/sign-up` | Sign Up | Registration form | P1 |
| 9 | `/log-in` | Log In | Login form | P1 |
| 10 | `/testimonials` | Testimonials | Customer quotes, case study cards | P1 |

---

### Group 2: Product Pages — Core APIs

| # | Slug | Page Title | Content Focus |
|---|---|---|---|
| 11 | `/products/voice` | Voice API | Features, use cases, code snippet, pricing CTA |
| 12 | `/products/video` | Video API | HD video, screensharing, recording |
| 13 | `/products/messaging` | Messaging API | SMS, MMS, chat apps |
| 14 | `/products/email` | Email API | Transactional + marketing email |
| 15 | `/products/fax` | Fax API | Cloud fax, secure delivery |
| 16 | `/products/security` | Security | Fraud prevention, compliance |
| 17 | `/products/social-network` | Social Network API | FB, WhatsApp, Twitter connectors |
| 18 | `/products/cognitive-automation` | Cognitive Automation | AI workflows, bot builder |

---

### Group 3: Product Pages — Voice Sub-pages

| # | Slug | Page Title |
|---|---|---|
| 19 | `/products/voice/voice-api` | Voice API Docs / Reference |
| 20 | `/products/voice/voice-programs` | Voice Programs / Webinars |
| 21 | `/products/messaging/sms-api` | SMS API Reference |
| 22 | `/products/messaging/sms-pricing` | SMS Pricing Table |

---

### Group 4: Solutions / Use Cases

| # | Slug | Page Title |
|---|---|---|
| 23 | `/solutions/click-to-call` | Click-to-Call |
| 24 | `/solutions/call-monitoring` | Call Monitoring |
| 25 | `/solutions/lead-alerts` | Lead Alerts / Receive Alerts |
| 26 | `/solutions/appointment-reminders` | Appointment Reminders |
| 27 | `/solutions/protect-numbers` | Protect Phone Numbers |
| 28 | `/solutions/verification` | 1-2 Verification (OTP / 2FA) |

---

### Group 5: Solutions / Industry & Cloud

| # | Slug | Page Title | Notes |
|---|---|---|---|
| 29 | `/solutions/industry` | Cloud / By Industry | cloud.html — industry vertical selector |
| 30 | `/solutions/integrations` | Cloud Communications | cloud-communicate.html — integrations hub |
| 31 | `/solutions/cpaas` | CPaaS Powered API | cloud/cpaas-powered-api |
| 32 | `/solutions/voice-insight` | Voice Insight | voice-insight.html |
| 33 | `/solutions/web-rtc` | WebRTC Gateway | web-rtc-gateway.html |
| 34 | `/solutions/sip-trunking` | SIP Trunking | sip-trunking-sip-registration.html |
| 35 | `/solutions/fone-interconnect` | FoneAPI Interconnect | fone-api-interconnect.html |

---

### Group 6: Resources & Blog

| # | Slug | Page Title |
|---|---|---|
| 36 | `/blog` | Blog / Resources listing |
| 37 | `/blog/:slug` | Blog Post Detail |
| 38 | `/support` | Support Center |
| 39 | `/faqs` | FAQs |

---

### Group 7: Legal & Account

| # | Slug | Page Title |
|---|---|---|
| 40 | `/privacy-policy` | Privacy Policy |
| 41 | `/terms-of-service` | Terms of Service |
| 42 | `/cookies` | Cookie Policy |
| 43 | `/forgot-password` | Forgot Password |

---

## Section-Level Content Map (3-Stage Psychological Funnel)

| Stage | Section | Copy Direction |
|---|---|---|
| **Attract** | Hero headline | "Power every conversation. Build what's next." — boldness hook |
| **Attract** | Stats panel | 94% stat — credibility & social proof immediately below fold |
| **Build Interest** | Capabilities (8 cards) | Platform breadth — show the full API family |
| **Build Interest** | Solutions (6 cards) | Use-case fit — show "what can I build with this?" |
| **Build Interest** | Product sub-pages | Deep-dive for technical buyers |
| **Build Interest** | Testimonials | Social proof, customer stories |
| **Guide to Action** | CTA Band | "Start building free" — urgency + zero-friction entry |
| **Guide to Action** | Pricing page | Pay-as-you-go — removes hesitation |
| **Guide to Action** | Talk to Sales | Enterprise path |

---

## Asset Inventory

| Asset Type | Source | Notes |
|---|---|---|
| Brand Mark | CSS-only (3-cell grid, gradient) | No image needed |
| Product Icons | Unicode characters in CSS | Upgrade to Heroicons/Lucide in React |
| Social Icons | Unicode characters | Use Lucide-react icons |
| Hero Visual | CSS-only 3D cube + floating cards | Pure CSS/React, no image needed |
| Blog images | Dynamic / placeholder needed | Generate per-post via CMS pattern |
| OG/Social images | Not present in legacy | To be added |

---

## SEO Schema Requirements

| Page | Schema Type |
|---|---|
| `/` | `Organization`, `WebSite`, `FAQPage` |
| `/products/*` | `Product`, `SoftwareApplication` |
| `/solutions/*` | `Service` |
| `/blog/:slug` | `Article`, `BlogPosting` |
| `/pricing` | `PriceSpecification`, `Offer` |
| `/testimonials` | `Review`, `AggregateRating` |
| `/faqs` | `FAQPage` |

---

*Generated: 2026-05-13 | Based on seed index.html nav/footer + legacy HTML file list*
