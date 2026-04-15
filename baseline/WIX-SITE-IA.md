# Wix Site Information Architecture — Big NC Tennis

**Purpose:** complete sitemap, navigation, page-level content spec, and design system for the Wix rebuild.
**Audience:** owner, site builder, content contributor (Lindsay).
**Companion docs:** `PLATFORM-DECISIONS.md`, `COURTRESERVE-EVAL-ENTITLEMENTS.md`.

---

## 1. Primary navigation

```
┌────────────────────────────────────────────────────────────────────────┐
│  [BIG NC logo]   Programs ▾   Locations ▾   Academies   Shop   Camps   │
│                  Community ▾                           [Member Login]  │
└────────────────────────────────────────────────────────────────────────┘
```

**Dropdown contents:**
- **Programs ▾**: Youth Tennis · Adult Tennis · Team Programs · Pickleball · Private Lessons · Stringing
- **Locations ▾**: Fuquay-Varina · Apex · Holly Springs · Harnett County · Charlotte Sugaw Creek
- **Community ▾**: Leagues · Blog · Events · Partners · Coach Spotlight

**Utility nav (top bar, right):** phone number · email · social icons · Member Login CTA

**Mobile:** hamburger → collapsed same hierarchy; sticky Book-a-Trial CTA bottom bar.

---

## 2. Complete sitemap

### Public pages

| URL | Page | Purpose |
|---|---|---|
| `/` | Home | Brand, conversion, program cards, testimonials, social feed |
| `/programs/youth` | Youth Tennis | ROGY progression, age groups, pricing, book a trial |
| `/programs/adult` | Adult Tennis | NTRP clinics, cardio, drills |
| `/programs/teams` | Team Programs | USTA team management, Intermediate + Advanced pathway |
| `/programs/pickleball` | Pickleball | Indoor + outdoor, ASPEN, calendar |
| `/programs/private-lessons` | Private Lessons | Booking page, coach selector, pricing |
| `/programs/stringing` | Racket Stringing | Service tiers, turnaround, member discount callout |
| `/academies` | Academies | The 6-SKU pricing matrix, program description, enrollment CTA |
| `/academies/intermediate` | Intermediate Academy | Curriculum, coaches, schedule, book a trial |
| `/academies/advanced` | Advanced Academy | Higher UTR track, college-recruit pathway |
| `/locations/fuquay-varina-action-park` | Action Park | Courts, coach bios, schedule, directions, photos |
| `/locations/apex` | Apex | ditto |
| `/locations/holly-springs` | Holly Springs | ditto + HS-specific info |
| `/locations/harnett` | Harnett County | ditto |
| `/locations/charlotte-sugaw-creek` | Charlotte Sugaw Creek | Coming-soon / launch messaging |
| `/coaches` | Coaches | Staff directory — James, Kenzie, Tyrus, Francine + bios, certs, video intro |
| `/coaches/[slug]` | Coach detail | Individual coach bio page, book-with-me CTA |
| `/camps` | Camps | Summer + track-out + spring break lineup, Wix Bookings |
| `/camps/summer` | Summer Camps | Dated schedule, age groups, pricing, register |
| `/camps/track-out` | Track-Out Camps | Wake County track-out calendar |
| `/shop` | Shop | Wix Stores — apparel, paddles (Diadem), grips, overgrips, strings, bags |
| `/shop/stringing-service` | Stringing | Service SKU with string-type selector |
| `/leagues` | Leagues | UTR Flex · USTA Leagues · internal ladders |
| `/blog` | Blog | SEO content hub — tennis tips, NC tournament roundups, coach features, member stories |
| `/blog/[slug]` | Blog post | Article template |
| `/events` | Events | Tournaments, socials, clinics calendar |
| `/about` | About | Story, mission, values, team photo, press |
| `/partners` | Partners | Diadem, USTA-NC, Town partnerships, schools |
| `/weather-policy` | Weather Policy | Rain protocol |
| `/contact` | Contact | Form, map, phone, email, hours per location |
| `/policies/terms` | Terms of Service | Required legal |
| `/policies/privacy` | Privacy Policy | Required legal |
| `/policies/refund` | Refund Policy | Membership + shop refund terms |
| `/policies/accessibility` | Accessibility Statement | WCAG compliance promise |

### Members-only (gated)

| URL | Page | Role(s) |
|---|---|---|
| `/members` | Member Dashboard | Base Member |
| `/members/subscription` | Manage Subscription | Base Member — upgrade/cancel/payment method |
| `/members/book` | Book a Session | Base Member — deep-link to CourtReserve with entitlement context |
| `/members/profile` | Profile & Preferences | Base Member |
| `/members/perks` | Member Perks | Base Member — discount codes, member rates |
| `/members/library/intermediate` | Intermediate Library | INT role — drills, footage, coach notes |
| `/members/library/advanced` | Advanced Library | ADV role |
| `/members/ai-coaching` | AI Coaching Plan | Base Member + AI add-on — SmartSwing + SwingVision integration view |
| `/members/community` | Member Community | Base Member — Wix Groups / Forum access |
| `/members/team/holly-springs-hs` | HS Team Portal | HS team role — Spond embed / link |

### Admin-only

| URL | Page | Role |
|---|---|---|
| `/admin/leads` | Lead pipeline view (Phase 2) | Admin |
| `/admin/content-calendar` | Content calendar (Phase 2) | Admin |
| `/admin/kpis` | KPI dashboard (Phase 2) | Admin |

---

## 3. Homepage spec (above the fold → below)

```
┌────────────────────────────────────────────────────────────────────────┐
│ HERO                                                                   │
│  Headline:   "Where North Carolina Plays Tennis."                       │
│  Subhead:    5 locations. Every level. Every week. Every milestone.    │
│  Primary CTA:   [Book a Free Trial]                                    │
│  Secondary CTA: [See Programs]                                         │
│  Background: video loop of coaching moments at Action Park             │
├────────────────────────────────────────────────────────────────────────┤
│ TRUST BAR                                                              │
│  USTA-NC partner · 5 locations · 200+ active members · Est. 20XX        │
├────────────────────────────────────────────────────────────────────────┤
│ PROGRAMS GRID — 6 cards                                                │
│  Youth · Adult · Teams · Pickleball · Academies · Private Lessons      │
├────────────────────────────────────────────────────────────────────────┤
│ "WHY BIG NC" — 3-column value prop                                     │
│  1. AI-powered player development                                      │
│  2. Multi-location convenience                                         │
│  3. Character + competition (values brand)                             │
├────────────────────────────────────────────────────────────────────────┤
│ LOCATIONS — map + 5 cards linking to location pages                    │
├────────────────────────────────────────────────────────────────────────┤
│ MEMBER TEASER — "Inside the Big NC Member Portal"                      │
│  Screenshots of AI coaching plan, library, booking flow                │
│  CTA: [See Membership Tiers] → /academies                              │
├────────────────────────────────────────────────────────────────────────┤
│ TESTIMONIALS — 6 carousel, prefer video for 2-3 once produced         │
├────────────────────────────────────────────────────────────────────────┤
│ SOCIAL FEED — Instagram embed (post-untangling)                        │
├────────────────────────────────────────────────────────────────────────┤
│ BLOG — 3 latest posts                                                  │
├────────────────────────────────────────────────────────────────────────┤
│ LEAD CAPTURE — Contact form (name / email / phone / location / intent)│
├────────────────────────────────────────────────────────────────────────┤
│ FOOTER — nav, social, phone, email, locations, policies               │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. `/academies` page spec (the money page)

Critical page — where the 6 SKUs convert.

**Above fold:** headline "Train Like You Mean It. Play Like You Love It." + "Two teams. Three commitment levels. Pick your pace." + CTA Book a Free Trial.

**Section A — Team selector tabs:** [ Intermediate Team ] [ Advanced Team ]

**Section B — Pricing table (per team):**

| | 1 Day / Week | 2 Days / Week | Unlimited |
|---|---|---|---|
| **Sessions / month** | 4 | 8 | Fair-use 15 |
| **Monthly price** | $119 (INT) / $159 (ADV) | $199 / $249 | $299 / $399 |
| **Member-only perks** | ✓ | ✓ | ✓ + early camp reg |
| **AI coaching add-on** | +$49/mo | +$49/mo | Included |
| **Stringing discount** | 10% | 15% | 20% |
| **Guest passes / mo** | 0 | 1 | 2 |

**Section C — What you get** (icon grid): coach ratios, AI analysis, session packages, member community, perks

**Section D — FAQ** (Accordion): cancellation, proration, pause, family discounts, trial policy

**Section E — Bottom CTA:** Book a Free Trial (form → routes to coach)

---

## 5. Location page template

Every location page follows the same template:

```
[Hero: photo of courts + location name + primary CTA]
[Courts overview: # of courts, surface, indoor/outdoor, lighting]
[Coaching staff at this location: photo grid of coaches]
[Programs offered here: filtered grid]
[Weekly schedule: Google Calendar embed OR CourtReserve schedule view]
[Directions + map + parking + amenities]
[SEO schema: SportsActivityLocation + LocalBusiness + GeoCoordinates]
[Location-specific contact: phone, email, address, hours]
```

**Critical SEO**: each location page needs its own Google Business Profile, linked via Wix SEO Wiz.

---

## 6. Member portal design

### Landing dashboard (`/members`)

```
Welcome back, [First Name]
╔═══════════════════════════════════════════════════════════╗
║ YOUR PLAN                                                 ║
║  INT — 2 Days/Week                                        ║
║  3 of 8 sessions used this month    [Book a session →]    ║
║  Renews Apr 28 • $199/mo            [Manage subscription] ║
╠═══════════════════════════════════════════════════════════╣
║ THIS WEEK                                                 ║
║  Tue 6pm — Intermediate Clinic @ Action Park (booked)    ║
║  Thu 6pm — Intermediate Clinic @ Action Park (booked)    ║
║  [Add to calendar] [Cancel]                               ║
╠═══════════════════════════════════════════════════════════╣
║ YOUR AI COACH                                             ║
║  Week 12 plan ready · Focus: kick serve + approach shots  ║
║  [Open plan →]                                            ║
╠═══════════════════════════════════════════════════════════╣
║ MEMBER PERKS                                              ║
║  [10% off stringing] [Camp early reg] [Community]         ║
╚═══════════════════════════════════════════════════════════╝
```

### Subscription mgmt page (`/members/subscription`)

Standard Wix Pricing Plans self-service UI with:
- Current plan + price
- Upgrade / downgrade buttons (Wix handles proration)
- Pause (Phase 2)
- Cancel at end of period
- Payment method update
- Invoice history

### AI Coaching page (`/members/ai-coaching`) — Phase 2

Custom Wix Velo page reading from a Wix Data collection `aiCoachingPlans` (populated by Claude agent on schedule):
- This week's focus
- Drill card stack (3–5)
- Last SmartSwing baseline analysis
- Last SwingVision match stats
- Coach notes appended by James/Kenzie/Tyrus/Francine
- Request a plan update button

---

## 7. Design system

### Colors
| Token | Hex | Usage |
|---|---|---|
| `--accent` | `#C9E70A` | Primary CTAs, active state, "BIG NC" wordmark |
| `--fg` | `#000000` | Headlines, primary text on light |
| `--bg-dark` | `#0A0A0A` | Hero backgrounds, dark sections |
| `--bg-light` | `#FFFFFF` | Default page bg |
| `--muted` | `#6B6B6B` | Secondary text |
| `--border` | `#E5E5E5` | Dividers, input borders |
| `--success` | `#1DB954` | Confirmation states |
| `--warning` | `#FF9500` | Pause / caution |
| `--danger` | `#FF3B30` | Cancel / error |

### Typography
| Role | Font | Settings |
|---|---|---|
| Display / wordmark | **Bebas Neue** | weight 400, tracking 0.04em (2px at 50px), uppercase |
| Headings | **Bebas Neue** | sizes 48 / 36 / 28 / 22 |
| Body | **DM Sans** | 400/500/700, 16/18px, line-height 1.55 |
| UI labels | **DM Sans** | 14px, 500 weight, tracking 0.02em |
| Data / scoreboards | **DM Sans** tabular-nums | 16px, 700 |

### Components (port from prototype `index.html:12`)
- Buttons: primary (lime on black), secondary (outline), danger (red)
- Cards: 16px radius, subtle shadow, 24px padding
- Form fields: 48px height, 12px radius, clear focus state with lime outline
- Pricing cards: single emphasized tier (Unlimited) with ribbon

### Iconography
Phosphor Icons (available as Wix integration via custom element) — matches modern "bold but friendly" feel.

### Imagery guidelines
- Action photography > posed stock
- Diverse player mix (age, gender, skill level)
- Coach portraits shot in-brand (black background, lime accent)
- No clip art, no generic "tennis ball on strings" stock

---

## 8. SEO foundation

**Every page must have:**
- Unique `<title>` ≤ 60 chars
- Unique meta description ≤ 160 chars
- Open Graph `og:title`, `og:description`, `og:image`, `og:url`
- Twitter Card `summary_large_image`
- Canonical URL
- Schema.org JSON-LD per page type:
  - Home: `Organization` + `LocalBusiness` + `SportsActivityLocation[]`
  - Location pages: `SportsActivityLocation` + `GeoCoordinates` + `OpeningHours`
  - Coach pages: `Person` + `Organization` affiliation
  - Academy pages: `Course` / `EducationalOccupationalProgram`
  - Blog posts: `Article` + `BreadcrumbList`
  - Events: `SportsEvent` (for tournaments)

**Site-wide:**
- `sitemap.xml` + `robots.txt` via Wix SEO Wiz
- Google Search Console verified
- Google Analytics 4 tag (via Wix Analytics or GTM)
- Meta pixel for future ad campaigns
- Core Web Vitals target: LCP < 2.5s, CLS < 0.1, INP < 200ms

**Content SEO targets (first 90 days):**
- Location long-tail: "tennis lessons fuquay-varina", "tennis academy holly springs", "charlotte tennis lessons sugaw creek", "tennis camp wake county track out"
- Program long-tail: "junior tennis academy north carolina", "advanced tennis training raleigh", "UTR flex league NC"
- Brand: "big nc tennis reviews", "big nc tennis cost"

---

## 9. Accessibility

Target **WCAG 2.2 AA** at launch:
- All imagery has alt text
- Color contrast ≥ 4.5:1 body / 3:1 large text
- Keyboard-navigable (Wix generally handles this, spot-check custom components)
- Form labels associated with inputs
- No color-only meaning
- Motion-reduced alternative for video backgrounds
- Accessibility statement published at `/policies/accessibility`

Wix has an Accessibility Wizard — run it, fix everything it flags.

---

## 10. Build sequencing

Suggested order once approved:
1. **Set up Wix Business plan** + domain pointed at preview env
2. **Install apps**: Wix Stores, Pricing Plans, Members Area, Bookings, Blog, Forms, Chat, Forum/Groups, Instagram Feed, Facebook Like Box, SEO Wiz
3. **Build design system** in Wix theme (colors + fonts + components)
4. **Build Home, Academies, one location page** — get owner sign-off on design direction
5. **Replicate remaining 4 location pages** from template
6. **Build Programs pages** (6 pages)
7. **Build Coaches + About + Contact + Policy pages**
8. **Set up Wix Stores** with all shop SKUs (stringing, paddles, apparel)
9. **Set up Wix Pricing Plans** with the 6 membership SKUs + Wix Payments enabled
10. **Enable Square** for Wix Stores checkout
11. **Build Members Area** with role gating
12. **Wire up CourtReserve** deep-link + entitlement config
13. **Wire up Spond** for HS team portal
14. **Run accessibility + SEO audits**
15. **Soft-launch on Wix preview URL** → 7-day internal QA
16. **DNS cutover + 301 redirects** from WordPress
17. **Keep WordPress live 30 days** as rollback
18. **Cancel WordPress / Playbook API / InkSoft** after cutover is proven stable
