# Platform Decisions — Big NC Tennis Rebuild

**Status:** draft for owner review
**Date:** 2026-04-14
**Author:** Engineering / Strategy
**Supersedes:** n/a

This is the decision memo for the Phase 1 Wix rebuild. Every gating choice lives here. If a disagreement comes up later, read this doc first.

---

## 1. Website builder — **Wix (confirmed by owner)**

Owner has committed to Wix. We accept that decision and build the best Wix site we can. We do not re-litigate.

**Plan to purchase:** **Wix Business plan ($39/mo)**.
- Required because the Light ($17) and Core ($29) plans do NOT support all of what we need.
- Business plan unlocks: full eCommerce, recurring subscriptions via Wix Pricing Plans, 100 GB storage, and the apps we'll need.
- 2% Wix subscription transaction fee applies on pricing-plan recurring charges — budget for it.
- Source: [Wix Pricing 2026 — tooltester.com](https://www.tooltester.com/en/reviews/wix-review/prices/), [Wix Pricing Plans: About Recurring Plans](https://support.wix.com/en/article/pricing-plans-about-recurring-plans)

---

## 2. Payment processor — **HYBRID: Wix Payments (Stripe) + Square**

### The honest problem
Wix Pricing Plans (the app that runs recurring memberships) requires a **payment provider that supports recurring payments**. The reliably-supported ones are **Wix Payments** (powered by Stripe under the hood in the US) and **Stripe directly**. **Square's support for recurring-subscription billing through Wix Pricing Plans is NOT guaranteed and is region- and plan-dependent.** ([Wix Pricing Plans: Setting Up Payments](https://support.wix.com/en/article/pricing-plans-setting-up-payments))

If we force Square to run recurring memberships through Wix, we take on risk of:
- Members being unable to self-upgrade/downgrade mid-cycle
- Failed-payment dunning not flowing back to member
- Coupon/discount logic breaking on renewals

### Recommended split
| Money flow | Processor | Why |
|---|---|---|
| **Recurring memberships (6 SKUs)** | **Wix Payments (Stripe)** | Rock-solid Wix integration, proper self-service upgrade/cancel, proration, dunning |
| **Online shop: stringing, apparel, paddles** | **Square** | Owner's preference. Wix Stores supports Square as a processor for one-time card charges — works fine here |
| **In-person at Action Park / Holly Springs** | **Square Terminal / Reader** | Pro shop / walk-in stringing / racket sales. Same Square account ties online + offline inventory |
| **Camps (one-time or deposit)** | **Square** | One-time charges work well in Square |

### What this means for the owner
- **She still opens a Square account** — it powers the shop + in-person payments
- **We also enable Wix Payments** for memberships — takes 10 minutes, no extra hardware
- **All Square revenue lands in her Square bank** as she expected
- **Wix Payments revenue lands in a linked bank account** — can be the same bank

### If owner pushes back and wants Square-only
We can fall back to **Square-only** by:
1. Selling memberships as "Square Online" subscriptions and embedding the Square checkout into Wix (loses in-site member self-service)
2. OR writing custom Wix Velo code against Square's Subscriptions API (engineering work, ~40-60 hours, ongoing maintenance)

Both are inferior. We should only do this if she insists after reading this memo.

---

## 3. Membership tier structure — **6 SKUs (2 teams × 3 frequencies)**

### SKU matrix (pricing TBD — see §4 below)

| SKU | Team | Frequency | Proposed price/mo | Notes |
|---|---|---|---|---|
| INT-1 | Intermediate | 1 day/wk | $TBD | ~4 sessions/mo entitlement |
| INT-2 | Intermediate | 2 days/wk | $TBD | ~8 sessions/mo |
| INT-U | Intermediate | Unlimited | $TBD | Fair-use cap optional |
| ADV-1 | Advanced | 1 day/wk | $TBD | |
| ADV-2 | Advanced | 2 days/wk | $TBD | |
| ADV-U | Advanced | Unlimited | $TBD | Ceiling tier |

### Billing rules (to confirm with owner)
- Monthly recurring, auto-renew on signup anniversary
- No annual prepay discount in Phase 1 (add in Phase 2 once revenue is stable)
- Proration on upgrade (Wix Pricing Plans handles automatically)
- Self-service cancel with end-of-period termination (not instant refund)
- 7-day free trial? Off by default. Owner to decide.
- Pause/hold option? Off by default. Many clubs offer 30-day hold/yr — consider Phase 2.

### Member-only perks layered on top (no extra billing — gated by Wix Members role)
- 10% discount on stringing
- 10% discount on pro-shop apparel
- Early registration for camps
- Member-only video library (drills, match footage)
- Member-only Discord/WhatsApp community access

---

## 4. Pricing — **benchmark-first, owner decides**

Numbers observed in comp research:
- **Cary Tennis Park** JTT: $135 res / $155 non-res per season ([source](https://www.carync.gov/recreation-enjoyment/facilities/cary-tennis-park/rates-and-fees))
- **Charlotte Tennis Academy**: $35/session drop-in ([source](https://www.charlottetennisacademy.com/))
- **US tennis club monthly dues**: avg $161 individual; $200–$500 family ([source](https://www.tennispassionate.com/tennis-clubs-cost/))
- **Initiation fees**: $1,000 avg; $1,000–$5,000 common
- **Chapel Hill Tennis Club**: $1,250 initiation tier

### Proposed starting bands (for owner review)
| Tier | Monthly (Intermediate) | Monthly (Advanced) |
|---|---|---|
| 1 day/wk | $119 | $159 |
| 2 days/wk | $199 | $249 |
| Unlimited | $299 | $399 |

Rationale: prices priced **per-session-equivalent** near $30 (competitive w/ Charlotte drop-in $35), rewarding higher-frequency tiers, Advanced carries a premium for better coach ratio. Owner decides final numbers.

---

## 5. Roster + attendance — **CourtReserve (Action Park) + Spond (Holly Springs HS)**

Full technical rationale in `COURTRESERVE-EVAL-ENTITLEMENTS.md`. Summary:

| Location / Use case | Tool | Why |
|---|---|---|
| **Action Park, Apex, Fuquay weekday clinics & academies** | **CourtReserve** | Session packages enforce entitlements natively. [Punch Cards & Session Packs](https://courtreserve.com/booking-packages-racquet-clubs/) |
| **Holly Springs HS team** | **Spond** | Free, great for fixed-roster teams, 500-member cap not a concern. [Spond attendance](https://www.spond.com/en-us/news-and-blog/attendance-tracking-on-spond/) |
| **Harnett, Sugaw Creek** | Start on Spond, migrate to CourtReserve once volume justifies it |
| **Front door (website)** | **Wix Members Area** | SSO-style deep-link into CourtReserve booking; Spond links for HS team portal |

**Critical:** The 1-day-per-week entitlement problem is solved by **CourtReserve session packages**, not by Wix or Spond. This is non-negotiable architecture.

---

## 6. CMS / content migration scope

### From WordPress + Elementor → Wix
**Keep:**
- All testimonial copy (6 testimonials)
- Program descriptions (Youth, Teams, Camps, Stringing)
- Location content for Fuquay-Varina, Apex, Holly Springs, Harnett, Sugaw Creek
- About Us narrative ("Perseverance, integrity, hard work, determination")
- Logo (`BigNCTennis2025_03_11.png`)

**Upgrade:**
- Replace text-only testimonials with 2–3 **video testimonials** (Phase 2)
- Add pricing to membership pages (currently no pricing visible)
- Add phone + email visible in header (not just form)
- Add schema.org SportsActivityLocation markup for SEO
- Add OpenGraph tags (missing on current site)

**Kill:**
- InkSoft external store (`stores.inksoft.com`) — migrate merch into Wix + Square
- WooCommerce (replaced by Wix Stores)
- Playbook API team portal (`bignctennis.playbookapi.com`) — migrate to CourtReserve + Spond
- Elementor, ElementsKit, Essential Addons — all die with WordPress

### Domain cutover
- Owner retains `bignctennis.com`
- Build Wix site on `wixstudio.com` preview URL
- QA → redirect `bignctennis.com` DNS to Wix when live
- Set up 301 redirects for old WordPress URLs (`/youth-tennis/`, `/tennis-teams/`, `/big-nc-summer-camps/`, `/racket-stringing-2/`, `/big-nc-sugaw-creek/`) to preserve SEO
- Keep WordPress live for 30 days as fallback
- Cancel WordPress hosting + Playbook API + InkSoft after cutover verified

---

## 7. Apps we'll install in Wix

| Wix App | Purpose | Cost |
|---|---|---|
| Wix Stores | Shop (stringing, apparel, paddles) | Included Business plan |
| Wix Pricing Plans | 6-tier memberships | Included |
| Wix Members Area | Login / profile / portal | Free |
| Wix Bookings | Private lessons + camp signups | Included |
| Wix Forms | Lead capture + contact | Free |
| Wix Blog | SEO content engine | Free |
| Wix Chat | Live chat during business hours | Free |
| Wix Forum or Groups | Member community | Free |
| Wix Multilingual | (optional) Spanish support if demand | $ |
| Wix SEO Wiz | Meta tags, sitemap, search console | Free |
| Instagram Feed app | IG embed on home | Free |
| Facebook Like Box | FB embed | Free |
| Google Calendar embed | Schedule visibility (short-term bridge) | Free |
| CourtReserve embed/link | Booking + entitlement enforcement | $99–$299/mo (separate) |

---

## 8. Open questions — **need owner answer before build starts**

1. **Confirm hybrid Wix Payments + Square plan** vs Square-only (see §2)
2. **Pricing** — confirm or adjust the bands in §4
3. **Initiation fee or first-month-free?** Industry averages suggest a $99–$249 one-time enrollment fee is normalizing
4. **Member-only perks list** — confirm the 5 in §3
5. **Any existing member list / current subscribers?** If yes, we plan a graceful migration (probably manual coupon codes honoring existing rates)
6. **Website copy owner** — Lindsay or a contractor?
7. **Launch target date** — for cutover planning
8. **Charlotte Sugaw Creek opening date** — if imminent, prioritize that location page and launch together
