# Big NC Tennis — Baseline Audit

_Audit date: 2026-04-14_
_Scope: (a) live site at https://bignctennis.com and (b) local prototype files in `C:/Users/bmedrado/Desktop/Big NC Tennis/`._

---

## 0. Status of this baseline

**Live-site clone is BLOCKED.** This session attempted to fetch `https://bignctennis.com` via both `curl` (Bash) and `WebFetch`, and both tools were denied by the harness permission layer. No HTML, CSS, JS, or images were downloaded. The `baseline/current-site/` directory was created, but its only artifact is this `AUDIT.md` and the prototype-based findings below.

To complete the live-site clone step, re-run this task with network access granted to either `Bash (curl)` or `WebFetch` for the `bignctennis.com` domain. Target files to capture once unblocked:

- `/index.html` (homepage)
- Any linked CSS/JS (save under `baseline/current-site/assets/css/`, `assets/js/`)
- Images referenced from the homepage (`assets/img/`)
- Up to ~30 internal pages linked from the homepage nav/footer

The sections below flagged **[BLOCKED — LIVE SITE]** are placeholders that should be filled in once the fetch succeeds. The **Prototype** section is complete and actionable right now.

---

## 1. Hosting platform / CMS detected  **[BLOCKED — LIVE SITE]**

Requires inspecting the live HTML for:
- `<meta name="generator">` tag
- Script domains (`static.parastorage.com` / `wixstatic.com` → Wix; `squarespace-cdn.com` → Squarespace; `wp-content/`, `wp-includes/` → WordPress; `webflow.com`/`website-files.com` → Webflow; `cdn.shopify.com` → Shopify)
- CSS class prefixes (`wix-`, `sqs-`, `w-` for Webflow, etc.)
- DNS / headers (`x-powered-by`, `server`)

One signal already observed indirectly: `data.js` in the prototype references `https://bignctennis.com` as a canonical URL in booking-confirmation emails and calendar event payloads, so the domain is live and owned — platform detection is purely a fetch-gated step.

## 2. Information architecture (nav + section list)  **[BLOCKED — LIVE SITE]**

Requires homepage HTML.

## 3. Content inventory (headings + ~1-line summary each)  **[BLOCKED — LIVE SITE]**

## 4. Visible CTAs and conversion points  **[BLOCKED — LIVE SITE]**

## 5. Brand tokens observed on live site (colors, fonts, logo style)  **[BLOCKED — LIVE SITE]**

_Note: the prototype uses a very distinctive palette (lime-green `#C9E70A` on near-black `#000`) and Bebas Neue + DM Sans. If the live marketing site does NOT match this, there is a brand-consistency gap to close._

## 6. Tech stack observations (analytics, pixels, forms, embeds)  **[BLOCKED — LIVE SITE]**

## 7. Missing / weak areas vs. a modern tennis-club site  **[BLOCKED — LIVE SITE — partial below]**

Reference checklist to apply once live content is captured. A strong modern tennis club/academy landing page typically has:

- Hero with a clear value prop + primary CTA (book a trial, request info)
- Coach/pro roster with photos, specialties, credentials
- Program/package tiers (juniors, adults, private, group, clinics) with price transparency or "request pricing"
- Online booking or at minimum a structured contact/inquiry form
- Schedule / seasons view (what's running now, what's coming)
- Social proof (testimonials, results, tournament photos, player outcomes)
- Location + map + court info (indoor/outdoor, surface, amenities)
- Mobile-first layout, fast LCP, basic SEO (title, meta description, OG tags, LocalBusiness schema)
- Analytics (GA4 minimum) and at least one conversion pixel
- Newsletter / waitlist capture
- Clear contact: phone (tap-to-call), email, hours, social

## 8. Content we should preserve vs. replace  **[BLOCKED — LIVE SITE]**

---

# Prototype Audit (local files) — what we can build on

Four files in `C:/Users/bmedrado/Desktop/Big NC Tennis/`:

| File | Size-class | Purpose |
|---|---|---|
| `index.html` | Large SPA (~28K tokens) | Member-facing app shell: splash, login, register, profile setup, student dashboard, coach dashboard, thread (chat), session detail |
| `roster.html` | Large admin tool (~20K tokens) | Coach/admin panel: roster, attendance, assignments, auto-schedule, seasons, analytics |
| `data.js` | ~20K tokens | Shared data + pure booking/validation logic + email generators + ICS/Google/Outlook calendar exporters + demo seed data (coaches, students, 50 sessions, drill library) |
| `test-suite.html` | ~14K tokens | Automated test runner for the core logic in `data.js` — ~99 test assertions |

## Prototype: tech stack

- **Pure static HTML + vanilla JS**, no framework. Runs by opening the file.
- **Supabase JS SDK** loaded from CDN (`@supabase/supabase-js@2`) but not yet wired — `SUPABASE_URL='https://YOUR_PROJECT.supabase.co'` is a placeholder. Currently runs off in-memory demo data in `data.js`.
- **Google Fonts**: Bebas Neue (display) + DM Sans (body).
- **Mobile-first SPA**, hard-capped at `max-width:480px`. Designed as a phone-shaped member app, not a desktop marketing site.

## Prototype: design tokens (already well-defined)

From `index.html:12`:

```
--bg: #000                    (near-black background)
--s1: #0d0d0d  --s2: #161616  --s3: #222  --s4: #2a2a2a  (surface stack)
--b:  rgba(255,255,255,.07)   --bm: rgba(255,255,255,.13)  (borders)
--a:  #C9E70A  (primary lime accent)   --ah: #D8F520 (hover)   --at: #000 (on-accent text)
--t1: #fff    --t2: #999    --t3: #444   (text stack)
--green: #34C759  --orange: #FF9F0A  --red: #FF3B30  --blue: #0A84FF  (semantic)
```

Typography scale: `.hero` (Bebas Neue, 52–84px clamp), `.t-xl`, `.t-lg`, `.t-md`, `.t-sm`, `.t-xs` (uppercase tracker). Button variants: `.bp` (primary), `.bg` (gray), `.bo` (outline), `.bd` (destructive). Cards: `.card` (22px radius), `.card-sm` (16px radius).

**This is a complete, coherent design system we should port to the marketing site** so the public-facing and member-facing experiences feel like one brand.

## Prototype: information architecture

### `index.html` (member app) — 8 screens
1. `screen-splash` — brand landing
2. `screen-login`
3. `screen-register`
4. `screen-profile-setup`
5. `screen-student` — student dashboard (bookings, drills, progress)
6. `screen-coach` — coach dashboard
7. `screen-thread` — messaging / chat
8. `screen-session-detail` — per-session view

### `roster.html` (admin) — 6 panels
1. `panel-roster` — player roster with search/filter + stats
2. `panel-attendance`
3. `panel-assignments`
4. `panel-autoschedule` — automated session scheduling against season calendar
5. `panel-seasons` — season CRUD (name, start, end)
6. `panel-analytics`

## Prototype: domain logic already written (reusable as-is)

From `data.js`:
- Seed data: `DEMO_COACHES`, `DEMO_STUDENTS`, `DEMO_SESSIONS` (50 conflict-free sessions), `DRILL_LIBRARY`, `DEMO_SKILLS`, `DEMO_FEEDBACK`
- Scheduling constants: `AVAIL_TIMES` (07:00–late), `MONTHS`, `DAY_NAMES`, default weekly availability (Mon–Sat, Sundays off)
- **Pure, testable booking logic**: `isDatePast`, `hasCoachConflict`, `hasStudentConflict`, `getAvailableTimesForCoach`, `getAvailableCoachesForDate`, `validateBooking`
- **Email generation**: `generateBookingEmail(session, student, coach, recipient)` with age-group-aware and level-aware copy variants (junior / young_adult / adult / senior × beginner / intermediate / advanced / elite) — genuinely well-written, warm, on-brand copy
- **Calendar export**: `generateICS`, `buildGoogleCalendarURL`, `buildOutlookURL`, `downloadICS`
- **Roster / seasons / enrollments / attendance / assignments** data models begin at `data.js:395`
- **Test coverage**: `test-suite.html` contains ~99 `t(...)` assertions validating date formats, time formats, conflict detection, etc.

## Prototype: what we can build on for the marketing site

1. **Brand system is done.** Colors, type, button styles, card styles, spacing — all tokenized in CSS custom properties. Lift these straight into the marketing site.
2. **Voice/tone samples exist.** The age/level-specific email copy in `data.js:224–249` shows the brand's warmth, energy, and emoji usage. Use it as the tone reference for landing-page copy.
3. **Real data to seed real sections.** The demo coaches/students/sessions/drills can populate "Meet the Coaches", "Programs", "Sample Week" sections on the marketing site with realistic content.
4. **Feature story is already clear.** The prototype tells us the product does: coach + student booking, messaging, session detail, roster management, attendance, auto-scheduling, seasons, analytics, drill library. The marketing site should sell this.
5. **"Big NC" logo wordmark** is Bebas Neue, `letter-spacing:2px`, in accent lime on dark. That's the logo style — no image asset required.

## Prototype: gaps to watch

- Supabase is loaded but unconfigured — whole app is demo-mode. Marketing site should not link to the prototype until wired up, OR should link with an explicit "demo" label.
- The app is 480px-capped; a marketing site must be responsive desktop + mobile.
- No SEO, no OG tags, no favicon, no analytics in any of the four files.
- `roster.html` and `index.html` duplicate styles inline; if we promote shared styles into an `assets/tokens.css`, both the app and the new marketing site can consume them.

---

## Next actions (once live-site fetch is unblocked)

1. Re-run fetch of `https://bignctennis.com` + ~30 internal pages and save under `baseline/current-site/`.
2. Fill in sections 1–8 above with concrete findings.
3. Diff the live-site brand vs. the prototype tokens — decide which is canonical.
4. Produce a content-migration table: "existing live copy → keep / rewrite / drop" alongside "prototype feature → add to marketing site".
