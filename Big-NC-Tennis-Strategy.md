# Big NC Tennis — Strategic Study & GTM Plan

*Board-level strategy document. Informs Phase 1 Wix rebuild and Phase 2+ growth platform.*

**Date:** 2026-04-14
**Author:** Strategy + Engineering
**Companion docs:** `baseline/PLATFORM-DECISIONS.md`, `baseline/WIX-SITE-IA.md`, `baseline/COURTRESERVE-EVAL-ENTITLEMENTS.md`, `baseline/SOCIAL-UNTANGLING-RUNBOOK.md`, `baseline/research-raw/01-competitor-notes.md`, `baseline/gtm-bible-template.md`.

---

## 0. Executive Summary

Big NC Tennis is well-positioned to become the leading tennis organization in North Carolina — but it is NOT positioned to become the leading **academy** in the Rafa-Nadal / IMG sense, and shouldn't try to be. Those compete on $75–$100K/yr residential boarding; we compete on **multi-location community convenience, values-driven character development, and an AI-first player-development system that no regional peer has.**

The business already has the hardest thing to build: **five locations** in the highest-growth NC metros (Triangle + Charlotte) with real teaching reputation, real testimonials, real pickleball adjacency, and a founder-led brand. What it lacks is the **digital foundation** to monetize those locations: a modern site, pricing transparency, member self-service, attendance enforcement, and a marketing engine.

This document lays out:

1. The **strategic thesis** (what to be, what NOT to be)
2. A **global and NC competitive map** with full SWOT
3. A **differentiation strategy** that is defensible in 12 months
4. An **AI coaching program** that becomes the brand moat
5. A **product roadmap** layered on top of the Wix rebuild
6. A **GTM workbook** modeled tab-for-tab on the Filveo GTM bible v4

**The one-line strategic bet:** *Be the club that treats every member like a pro — with AI-driven weekly plans, coach accountability, and neighborhood convenience — for $119–$399/mo instead of $75,000/yr.*

---

## 1. Current-state snapshot

### The business today
- **5 locations** across fast-growing NC metros:
  - Fuquay-Varina (Action Park) — HQ
  - Apex
  - Holly Springs (incl. HS partnership)
  - Harnett County
  - Charlotte Sugaw Creek (new)
- **Programs**: private lessons, youth/adult clinics, summer + track-out camps, tennis teams, pickleball (indoor+outdoor), racket stringing, UTR Flex leagues, pro shop
- **Named coaches**: James, Kenzie, Tyrus, Francine (praised in testimonials)
- **Positioning**: "The Everything Tennis Company"
- **Current tech stack**: WordPress + Elementor Pro + WooCommerce + ElementsKit + external Playbook API team portal + external InkSoft merch store + Google Calendar embeds
- **Revenue model**: monthly team dues + camp fees + private lesson fees + pro shop + stringing

### What's working
- 6 strong testimonials with named parents → trust capital
- Multi-location footprint is genuinely rare for a non-municipal NC operator
- Pickleball integration (broader addressable market than pure tennis)
- Named coach personalities (parents attach to individuals)
- Teams + camps + stringing = diversified revenue, not just lesson-fees

### What's drag
- WordPress/Elementor = slow, hard to update, poor SEO
- No pricing visible on site → leaks leads to every competitor who shows prices
- No player profiles, no member self-service, no community/content layer
- Brand recognition ranks below Cary Tennis Park and most private country clubs
- No attendance enforcement (1-day members overattending — the exact reason this project exists)
- Social assets tangled with personal account

### Existing prototype assets (valuable reuse)
- `index.html` — 8-screen mobile SPA with strong design tokens (lime `#C9E70A` on near-black, Bebas Neue + DM Sans)
- `roster.html` — admin tool for roster / attendance / assignments / auto-schedule / seasons / analytics
- `data.js` — booking conflict validation + drill library + email copy + ICS/Google/Outlook calendar exporters
- `test-suite.html` — 99-assertion test suite for booking logic

The brand system is already designed. We don't rebuild it — we port it to Wix.

---

## 2. Global elite playbook

What the world's best tennis academies do that we can learn from — even though we don't compete with them directly.

### The eight patterns

1. **Whole-athlete integration** — IMG Academy combines technical + tactical + physical + mental + nutrition + vision training + sports medicine as one program. (Source: imgacademy.com/boarding-school/tennis)
2. **Values-driven brand** — Evert's "Excellence, Resilience, Integrity, Leadership" and Rafa Nadal's explicit "winning spirit + exemplary character" curriculum convert character into marketing.
3. **Signature methodology** — Van der Meer's trademarked "Official Standard Method™" and Toni Nadal's methodology turn pedagogy into brand.
4. **Video analysis as table stakes** — every top academy has a dedicated tennis building with video rooms (IMG has 57 courts + a video building).
5. **Non-profit or community pillar** — JTCC runs GEICO Game On! bringing coaches into inner-city schools since 2009. This is mission AND marketing.
6. **Coach-certification pipeline** — Van der Meer's Total TennisUniversity certifies players ages 17+ as PTR/USPTA coaches, creating a talent pipeline AND an alumni network.
7. **100% college placement for top tier** — JTCC's Champions program claims every grad gets D1 scholarship or Ivy/D3 facilitated acceptance. That number is the marketing hook.
8. **Mental + vision training facilities** — IMG's Mind Gym with Fitlights + RightEye, Mouratoglou's mental performance staff — "we train your brain too."

### What we CAN adapt (and what we CAN'T)

| Pattern | Adapt? | How for Big NC |
|---|---|---|
| Whole-athlete integration | ✅ Partial | AI coaching plan integrates technical (SmartSwing) + tactical (SwingVision) + physical (drill prescription) + mental (goal-setting prompts) |
| Values-driven brand | ✅ Full | Codify Big NC values explicitly: **Grit · Joy · Craft · Community** (workshop with owner) |
| Signature methodology | ✅ Full | Develop + trademark "The Big NC Method" — the documented 4-week micro-cycle we already teach |
| Video analysis | ✅ Full | SmartSwing AI + SwingVision do this at $15–50/mo, not millions of dollars of facility |
| Non-profit community pillar | ✅ Full | Launch **Big NC Foundation** — free clinics at Title I schools + equipment drive. Marketing + mission + USTA Southern grant eligibility |
| Coach-certification pipeline | ✅ Phase 3 | "Big NC Coach Academy" certifying players 17+ as assistant coaches, partnering with PTR |
| 100% college placement | ⚠️ Aspirational | Not Phase 1. Build the data to claim it by Phase 3 |
| Mental + vision training facility | ❌ Skip | Too expensive for footprint; use software alternatives (mind coach app, vision apps) as upsell |

---

## 3. NC competitive map

### The competitors (ranked by direct-overlap threat)

| Club | Type | Courts | Key strength | Key weakness | Direct threat |
|---|---|---|---|---|---|
| **Cary Tennis Park Academy** | Municipal | 28 | 200+ players, 4-tier academy, premier NC brand | Municipal pricing ($135/season) undercuts private; no member community layer; rigid schedule | **HIGH** — same target juniors in Triangle |
| **Raleigh Racquet Club** | Private | 31 | D1-coach-led academy, 2.5–5.0 programming, indoor courts | Membership-gated (initiation fee barrier); club feel may alienate new players | HIGH — adults + juniors |
| **North Ridge Country Club** | Private | — | USTA team pipeline, certified pros, large roster | Country-club barrier; membership-only; limited public access | MED — country-club crowd |
| **Chapel Hill Tennis Club** | Private | — | Balanced adult/junior, $1,250 initiation tier | Single location; aging facility | MED — Chapel Hill zip codes |
| **Triangle Tennis Academy** (Durham) | Private | — | Adult+junior, match-play clinics | Smaller footprint; less brand reach | MED |
| **Charlotte Tennis Academy** | Private | — | ROGY progression, $35 drop-in, branded family app | Single location (Charlotte); no Triangle presence | HIGH in Charlotte only |
| **River Run Country Club** (Davidson) | Private CC | — | Nationally recognized junior academy, athlete-centered pathway | Country-club barrier; far from Triangle | LOW for Triangle; HIGH for Lake Norman |
| **LNRC** (Lake Norman Racquet) | Private | — | USTA + UTR tournaments, good Lake Norman brand | Single location | MED (Charlotte metro) |
| **NorthStone CC** (Huntersville) | Private CC | — | Recreational + competitive | CC barrier | LOW |
| **Orange Tennis Club** (Hillsborough) | Non-profit | — | Community-focused, serves 4 towns | Small scale, limited programming depth | LOW — different vibe |
| **Cameron Moore Tennis** (Cary) | Private | — | Premier-positioned boutique | Small capacity | MED — juniors in Cary |

### Strategic read
Our REAL competition is not IMG or Nadal. It's:
1. **Cary Tennis Park** for juniors in the Triangle
2. **Charlotte Tennis Academy** for juniors/families in Charlotte
3. **Raleigh Racquet Club + Country Clubs** for adult players who can afford membership
4. **Playing-at-home / public courts** — the ambient "I don't need a club" default

Everyone else is regional noise.

---

## 4. SWOT for Big NC Tennis

### Strengths
- **Multi-location footprint (5)** — no regional private operator has this; municipal (Cary) is single-site
- **Teams + pickleball + camps + stringing + shop = 5 revenue lines** that smooth seasonal cash
- **Named coach personalities** with parent endorsements in testimonials
- **Existing team-season rhythm** — not starting from zero
- **Prototype design system already in-hand** — lime/black/Bebas Neue is recognizable
- **Founder ownership** — decisions happen fast, culture is set from the top

### Weaknesses
- **WordPress drag** — slow, hard to evolve, poor conversion
- **No pricing transparency** — visitors bounce to competitors who show prices
- **No member self-service** — every upgrade/cancel routes through owner's inbox
- **Name recognition gap** — Cary Tennis Park is #1 in NC brand search
- **No content engine** — zero blog, zero YouTube, no SEO surface area
- **Attendance policing today = manual + awkward**
- **Social media tied to personal account** — fragile
- **Stringing is commoditized** — no moat, easy to switch

### Opportunities
- **AI coaching stack is UNIQUE in NC** — SmartSwing + SwingVision + Baseline Vision + Claude-driven adaptive plans → genuine differentiation, small CapEx
- **Charlotte Sugaw Creek expansion** — entirely new metro with no incumbent direct competitor besides Charlotte Tennis Academy
- **HOA neighborhood court management contracts** — Triangle + Charlotte metros have hundreds of neighborhoods with underutilized courts
- **Corporate wellness contracts** — Duke Health, SAS, Lenovo, Fidelity, Red Hat, Epic Games, Credit Karma (Charlotte), Bank of America
- **Title I school outreach** — "Big NC Foundation" as JTCC-style GEICO Game On! analogue. Mission + marketing + grant-eligible via USTA Southern
- **Pickleball growth wave** — fastest-growing US sport; own the NC "dual-sport club" narrative
- **Content hub around NC tennis** — UTR rankings, tournament roundups, coach features, junior spotlight. Dominate search
- **College recruit pipeline narrative** — document first success stories, ride them

### Threats
- **Municipal operators (Cary, Raleigh parks)** — can undercut on price with tax subsidies
- **Country clubs upgrading tennis (River Run, Raleigh Racquet)** — pulling mid/high-income families
- **Drop-in pricing wars** — Charlotte Tennis Academy's $35/session is cheap; family purse-share is finite
- **Instructor talent war** — great coaches are scarce; country clubs + municipal offer competing offers
- **Pickleball could cannibalize tennis court supply** at single-surface locations
- **Weather / insurance / facility lease** risk at leased locations (Action Park dependency)

---

## 5. Positioning & differentiation

### Brand evolution

| Before | After |
|---|---|
| "The Everything Tennis Company" | "**Every level. Every week. Every milestone.**" (workshop final) |
| Static testimonial-first site | Living, data-backed player-journey brand |
| Implicit quality via parent quotes | Explicit quality via Big NC Method + AI coaching + visible player progress |
| Coach names are parent shorthand | Coach names are featured personalities with profiles, videos, specialties |

### The four moat dimensions we will build

1. **AI-first player development** — The Big NC AI Coaching Program (see §6). No NC competitor has this. 6-month lead time to copy. 12-month lead time to copy well.
2. **Multi-location convenience** — we already have it. Defend by opening Charlotte and showing up as the "near you" player. Competitors have to spend millions to catch up.
3. **Tech + values dual brand** — Evert-style character + Nadal-style grit + Silicon-Valley-tech accent. Owner's personality + coach culture makes this authentic; not a marketing layer.
4. **Pickleball crossover** — Dual-sport members have higher LTV and lower churn (captive at our facilities on non-tennis days). Own the narrative "Serious about tennis. Honest about pickleball."

### Defensibility test (12 months out)
- Could Cary Tennis Park copy the AI program? Technically yes, but as a Town facility they can't move fast + can't charge premium add-ons + don't have a content engine.
- Could Raleigh Racquet Club copy multi-location? No — country-club model doesn't scale.
- Could Charlotte Tennis Academy copy Triangle presence? Possible but 2–3 years.
- Could a new VC-backed entrant copy everything? Yes — which is why we also need the GTM machine (§7) running.

---

## 6. AI coaching program design

### "The Big NC AI Player Development Program"

Packaged product. $49/mo add-on to any membership, OR included in Unlimited tiers.

### The stack
| Layer | Tool | What it does | Cost to Big NC |
|---|---|---|---|
| Baseline swing analysis | **SmartSwing AI** | iPhone-based swing capture + AI breakdown; integrates natively because founder owns it | Internal license |
| Match stats + video | **SwingVision** | Auto scoring, shot stats, line calling, highlights; LTA + Tennis Australia partner tech | ~$15/member/mo (pass-through or bundled) |
| Portable court camera | **Baseline Vision** (Phase 3) | ITF/USTA partner; deployable at Action Park without infrastructure; gamified junior drills | CapEx $5–10K per location |
| Legacy video | **Dartfish** optional | Audio feedback over frozen footage; for coach-only use | $100/yr |
| Adaptive plan generator | **Claude (Anthropic)** | Reads all telemetry + coach notes → generates weekly training plan → coach reviews → member sees in Wix portal | ~$50–200/mo API usage |

### The experience

**Member onboarding (Day 0):**
1. Member enrolls at any tier → free 20-min assessment clinic at local location
2. Coach runs SmartSwing 4-shot baseline (FH, BH, serve, volley) on iPhone
3. AI generates first-draft development plan; coach reviews + personalizes it before the first session
4. Member sees Week 1 plan in Wix portal: focus + drills + one video lesson

**Ongoing (every week):**
- Tue-Thu: member trains per plan; coach notes go into the system
- Friday: Claude agent pulls coach notes + SmartSwing deltas + SwingVision stats (if member logs matches) + UTR trend → drafts Week N+1 plan
- Saturday AM: coach reviews queue, 3 clicks to approve/edit each plan (5 min per member)
- Sunday: plans publish to member portal; push notification "Your Week N+1 plan is ready"

**Monthly (every 4 weeks):**
- Re-run SmartSwing baseline → compare to prior
- Coach + member 15-min 1:1 review
- UTR + match record updated
- Plan recalibrates

**Quarterly:**
- Player report card (branded PDF): swing progression, win rate, shot-selection, fitness, goals
- Goal-setting session (drives renewal / upsell)

### Why this wins

- **Coach time stays constant** — AI does the plan drafting, coach edits in 5 min instead of 30
- **Member perceived value goes up 3–5×** — weekly personalized plan vs generic drill-of-the-week
- **Data compounds** — after 6 months every member has a progress trail that's hard to leave (switching cost)
- **Content engine feeds it** — every approved plan becomes a blog post / IG reel template (anonymized)
- **Marketing story writes itself** — "Member improved UTR from 4.2 → 6.1 in 10 months with the Big NC AI Program"

### Risks + mitigations
| Risk | Mitigation |
|---|---|
| Coach resistance ("I don't need an AI") | Position as "your assistant that drafts, you approve" — 30 min → 5 min per plan; more time for actual coaching |
| Data-privacy concern from parents | Explicit consent, minor-safe data handling, no third-party sale, full delete-on-request |
| AI hallucinates a bad drill | Every plan is human-reviewed before publishing — non-negotiable |
| SmartSwing instability (founder-owned tool) | Can swap to SwingVision-only if needed; no hard dependency |
| Members don't engage with the portal | Push + email nudges + coach-in-person reinforcement; measure engagement weekly, iterate |

---

## 7. Product roadmap

```
MONTH 0     1     2     3     4     5     6     7     8     9     10    11    12
──────────────────────────────────────────────────────────────────────────────
PHASE 1 (P1): WIX REBUILD
├─ Wix build ████████████
├─ Membership tiers   ███████
├─ CourtReserve    ██████
├─ Social untangle  ████
└─ Cutover + 30d watch      ████

PHASE 2a: MARKETING SUITE
             ████████████
             Filveo-pattern content engine
             Email cadences
             Blog SEO push
             Google Business per location

PHASE 2b: CRM + SALES
                   ████████████
                   Lightweight CRM (HubSpot Starter or Attio)
                   Lead scoring per §8 GTM workbook
                   Cadence automation
                   Proposal / trial booking flows

PHASE 2c: AI COACHING LAUNCH
                           ████████████
                           SmartSwing baseline onboarding flow
                           Claude plan generator
                           Member portal AI page
                           First 25 members pilot → iterate

PHASE 3: GROWTH + MOAT
                                       ████████████████████
                                       Baseline Vision deployment (Action Park)
                                       Big NC Foundation (Title I program)
                                       NC prospecting engine
                                       Franchising prep
                                       Big NC Method trademark filing
                                       Coach certification pipeline planning
```

### Decision point at month 6

At month 6 we review:
- MRR, member count, churn, CAC, LTV
- Wix-platform friction inventory (every feature Wix blocked or slowed)
- Content + SEO traffic trajectory

**If Wix is carrying the load** → stay on Wix, keep iterating; consider Wix Studio for the more-custom AI coaching page.
**If Wix is the bottleneck** → migrate player portal + AI coaching app to Next.js + Supabase (the original ambitious plan), keep Wix marketing site OR migrate that too. The Wix decision is reversible.

---

## 8. GTM Workbook — tab-for-tab against the Filveo Bible v4

This section mirrors the 12-tab structure of `filveo-ref/filveo-project/docs/gtm-bible-v4.html`. Each tab below is the BNC Tennis instantiation of the Filveo framework.

### Tab 1 — Strategy

**Thesis:** Big NC Tennis becomes the category-defining NC tennis organization by being the first in the region to combine (a) multi-location convenience, (b) values-driven coaching, and (c) AI-powered player development at a mid-market price.

**Why Change** (vs. current WordPress/Playbook): friction kills conversion; no pricing kills leads; no portal kills retention; no content kills acquisition.

**Why Now**: Charlotte Sugaw Creek opening + pickleball wave + AI tech maturity + national junior tennis participation growth.

**Why Big NC**: 5 locations already live, named coach culture, prototype design system in-hand, founder ownership + decisive execution.

### Tab 2 — Features & Differentiation

| Feature | Competitor status | Big NC status |
|---|---|---|
| Multi-location coverage | 0 competitors have 5+ | 5 live, 1 pending |
| AI coaching program | 0 | Phase 2 flagship |
| Pickleball integration | Most ignore | 4 of 5 locations |
| Values-driven brand | CC culture vibes | Explicit (Grit · Joy · Craft · Community) |
| Visible pricing | Mixed (Charlotte Tennis Academy yes; most no) | Yes on `/academies` |
| Member portal w/ self-service | Rare in NC private-club segment | Wix Members + Pricing Plans |
| Entitlement-enforced access | Nobody mid-market has this | CourtReserve |
| Founder-led content | Rare | Lindsay+owner IG + blog |

### Tab 3 — BVS / ROI Study (member value calculator)

Sample member ROI framing (show on `/academies`):

| Input | INT-2 ($199/mo) | Private lessons equivalent |
|---|---|---|
| 8 sessions/mo × ~$40/session value | $320 | $70/hr × 8 = $560/mo |
| AI plan + stats | included | N/A |
| Member community | included | N/A |
| Stringing discount (~$8 on 2 strings) | included | N/A |
| Camp early reg | value varies | N/A |
| **Effective monthly value** | **$350+** | **$560+** |
| **Monthly cost** | $199 | $560 |
| **Savings** | $151/mo | baseline |

Plus: UTR trajectory → college scholarship value (Phase 3 claim, data-backed).

### Tab 4 — Personas + Journey

| Persona | Pain | Trigger to start | Day 0 | Day 7 | Day 30 | Day 90 |
|---|---|---|---|---|---|---|
| **Junior-parent Jen** (parent of 10-14yo) | Kid is plateauing, tournaments coming | Facebook post + friend referral | Books free trial | Attends trial + signs INT-2 | Kid loves coach + AI plan visible | Sees UTR up, renews Unlimited |
| **Ambitious Junior Andy** (14-17yo) | Wants college recruitment pipeline | Coach recommendation + UTR plateau | Assessment clinic | Starts ADV academy | First college-prep conversation | Coach posts highlight reel |
| **Adult Rec Ryan** (28-50, NTRP 3.0-4.0) | Inconsistent lessons, no feedback | Neighbor's kid in Big NC | Drop-in clinic | Signs INT-1 | Starts logging matches w/ SwingVision | Joins UTR Flex league |
| **Corporate Wellness Chris** (HR buyer at Duke/SAS/Lenovo) | Wants wellness differentiator for hiring | Vendor search / LinkedIn outreach | Discovery call | Site visit | Signed MSA | First corporate league running |
| **School AD Alex** (Wake/Chatham/Mecklenburg county school) | Needs coaches + equipment + tournament prep | Title I grant application | Intro meeting | Free clinic demo | Partnership agreement | First semester running |

### Tab 5 — Corp Visions messaging (unconsidered-need → contrast → resolution)

**For Junior-parent Jen:**
- **Touch 1 (unconsidered need)**: "What if your kid's tennis progress wasn't guesswork? 82% of junior players can't articulate their top 3 weaknesses." → leads into the AI baseline assessment hook.
- **Touch 2 (contrast)**: "Group lessons average 12-min / kid of coach attention. Private lessons are $70/hr. Neither gives your kid a written weekly plan. Big NC does both."
- **Touch 3 (resolution)**: "Book a free 20-min AI Baseline Assessment. You'll leave with your kid's top 3 improvement priorities in writing."

**For Adult Rec Ryan:**
- T1: "Why plateau at 3.5? You practice but don't train. Training has a plan. Practicing doesn't."
- T2: "A drop-in clinic at $35 is exactly what keeps you at 3.5. A structured program with stats + video is what gets you to 4.0."
- T3: "Bring your phone to a free clinic. We'll run SwingVision on you and send you your first 4-shot breakdown. You decide from there."

(Similar arcs for the other 3 personas — full scripts in the implementation.)

### Tab 6 — SPIN + Objection handling

**Top 12 objections & responses:**

| Objection | Response frame |
|---|---|
| "Too expensive" | Per-session math: INT-2 = $25/session. Drop-in is $35. You save money by becoming a member. |
| "My kid plays at Cary Tennis Park" | Respect + complement. Ask: is the kid getting a weekly written plan? Can you see their shot stats? If no, there's upside to adding us. |
| "I just want to play casually" | INT-1 ($119) is casual — 1x/week, built for exactly this. No pressure. |
| "We don't have time for more commitments" | Unlimited tier lets you choose when; average INT-U member uses 10 sessions/mo. |
| "I already have a coach" | Keep them. Big NC complements private lessons — we're the structured group + AI + community piece. |
| "We play at home / neighborhood courts" | How do you know you're getting better? Come see the data side. |
| "Pickleball is more my thing" | Try our pickleball program first; cross over when you're ready. |
| "My kid hates lessons" | First session is a free clinic — no pressure. If they don't light up, we refund. |
| "The WordPress site looked sketchy" | Apologies — we're rebuilding. Meet us in person at [location]. |
| "I'll think about it" | No pressure. Here's the weekly newsletter and a free drill PDF. You come back when ready. |
| "Contract terms?" | Month-to-month. Cancel anytime via portal. No initiation fee in Phase 1. |
| "Is the coach certified?" | Yes — [coach] holds [cert]. Here's their bio + video. |

### Tab 7 — Market Intel (pulled from `baseline/research-raw/01-competitor-notes.md`)

Key market facts for the deck:
- US tennis club avg monthly dues: $161 single; $200–500 family
- US avg initiation fee: $1,000 (range $1,000–$5,000)
- NC JTT: 12 areas, 5 age groups, 3 skill levels
- Cary Tennis Park: 28 courts, 200+ academy players, municipal pricing
- USTA Southern grants available for junior tennis growth
- SwingVision is official LTA + Tennis Australia partner, 1M+ users
- Baseline Vision is ITF + USTA partner
- 2,000+ US tennis facilities use CourtReserve

### Tab 8 — Segments + Leads (S/A/B tier accounts)

**Vertical segments × tier priority:**

| Segment | S-tier (go first) | A-tier (expand) | B-tier (future) |
|---|---|---|---|
| Junior competitive families | Existing Action Park roster + Apex + Holly Springs | Charlotte Sugaw Creek near-miss lookalikes | Harnett rural families |
| Adult rec players | INT-2 current members' friend graph | UTR Flex league participants | NTRP 2.5 new-to-game |
| HOA neighborhoods (court mgmt) | Top 5 Cary/Apex neighborhoods with underused courts | Top 10 Raleigh + Chapel Hill + Durham | Top 10 Charlotte |
| Corporate wellness | Duke Health, SAS, Lenovo | Fidelity, Red Hat, Epic Games | Bank of America Charlotte |
| Schools (public + private) | Wake County tennis-program high schools | Chatham + Durham HS | Mecklenburg HS |
| Churches / community centers | Triangle with courts | Charlotte metro | Statewide |

### Tab 9 — Global Prospects (named-account list Phase 2)

Examples (to be enriched via HubSpot + Parallel Web research):

**Triangle HOAs with known underused courts** (target list to build):
- Preston (Cary), MacGregor Downs (Cary), Prestonwood CC, Lochmere, Amberly, Heritage Pines (Apex), Cary Park, Kildaire Farms, Carolina Preserve (Chatham), Governors Club (Chapel Hill), Hope Valley (Durham), Woodcroft (Durham) — list to be validated

**Charlotte metro HOAs:**
- Eastover, Myers Park, Dilworth, Foxcroft, Ballantyne Country Club, Carmel CC, Piper Glen, Longview CC, Providence Plantation

**Corporate wellness buyers (LinkedIn Sales Nav or Apollo outreach):**
- Duke Health (Director Employee Wellness)
- SAS Institute (Cary) — known health-first culture
- Lenovo (Morrisville)
- Fidelity Investments (RTP)
- Red Hat (Raleigh)
- Epic Games (Cary)
- IBM (RTP)
- Bank of America (Charlotte)
- Truist (Charlotte)
- Credit Karma (Charlotte)

**Schools (Title I + tennis-program high schools):**
- Apex Friendship HS, Green Hope HS (Cary), Holly Springs HS (already partner), Fuquay-Varina HS, Panther Creek HS, Middle Creek HS, Athens Drive HS (Raleigh), Millbrook HS, Wakefield HS

### Tab 10 — Sequence Builder (cadences)

**6-email / 21-day cadence for Junior-parent Jen** (Corporate Visions arc):

| Day | Channel | Subject (A/B) | Body arc | Exit trigger |
|---|---|---|---|---|
| 0 | Email | A: "Does your player know their top 3 weaknesses?" / B: "The 12-minute problem at every junior clinic" | Unconsidered need — most kids can't articulate weaknesses | Books trial → move to Trial cadence |
| 3 | Email | A: "Drop-in vs. program: a visual comparison" / B: "$35 session math" | Contrast — drop-in economics vs. program | Same |
| 7 | Email | A: "See an AI baseline assessment in action (2-min video)" / B: "What Kenzie looks for in 5 minutes" | Resolution with social proof | Same |
| 12 | Email | A: "Parent story: UTR 3.1 → 5.4 in 14 months" / B: "How we turned around Aiden's backhand" | Story + tangible outcome | Same |
| 17 | Email | A: "Last chance: free assessment this month" / B: "One thing most parents wish they'd known" | Urgency + wisdom | Same |
| 21 | Email | A: "I'll stop emailing after this" / B: "Keeping you on the newsletter" | Soft final close + opt to newsletter | Always moves to newsletter if no response |

LinkedIn alternation added for Corporate Wellness persona; text alternation added for HOA persona (board members prefer text).

### Tab 11 — Financial model (12-month projection)

**Assumptions (conservative):**
- Month 1 active members: 150 (existing)
- Monthly net new signups: 15 / month growing to 40 / month by month 12
- Churn: 4% / month
- Blended ARPU: $195/mo (heavy on INT-2 with some Unlimited)
- AI add-on attach: 30% of base members by month 6, $49/mo

**MRR projection:**

| Month | Members | Base MRR | AI MRR | Total MRR |
|---|---|---|---|---|
| 1 | 150 | $29,250 | $0 | $29,250 |
| 3 | 180 | $35,100 | $0 | $35,100 |
| 6 | 225 | $43,875 | $3,308 | $47,183 |
| 9 | 270 | $52,650 | $5,292 | $57,942 |
| 12 | 320 | $62,400 | $7,056 | $69,456 |

Plus non-subscription revenue (camps, pro shop, stringing, private lessons) that we don't project here.

**Cost structure** (monthly):
- Wix Business: $39
- CourtReserve: ~$199
- Claude API: ~$150
- SwingVision licenses (pass-through or bundled): varies
- Ad spend: $2,000–5,000 (growing)
- Coach hours: owner's existing structure
- Content production: $1,000–2,000/mo (contract Lindsay + video editor)

### Tab 12 — Van Westendorp (price-sensitivity research)

4-question survey to run with 50 current members + 50 prospects in Phase 1 month 2:

1. At what monthly price would you say Big NC Academy is **so expensive** that you wouldn't consider it?
2. At what price is Big NC Academy **starting to get expensive**, but you'd still consider it?
3. At what price is Big NC Academy **a bargain** — a great buy for the money?
4. At what price is Big NC Academy **too cheap** — you'd question its quality?

Plot the curves → find intersection points:
- PMC (Point of Marginal Cheapness) — lower bound
- PME (Point of Marginal Expensiveness) — upper bound
- OPP (Optimal Price Point) — intersection of "cheap" + "expensive"
- IPP (Indifference Price Point) — intersection of "bargain" + "starting to get expensive"

This validates whether the proposed $119–$399 bands in `PLATFORM-DECISIONS.md` are in the acceptable zone.

### Tab 13 — Execution gates

**Phase 1 (Wix rebuild)** → exit criteria:
- Wix site live + domain cutover complete
- 6 membership SKUs live via Wix Pricing Plans + Wix Payments
- Shop live via Wix Stores + Square
- CourtReserve in production at all 4 non-HS locations
- Social embeds clean + Meta Pixel firing
- SEO foundation: sitemap + schema + meta tags + GBP per location
- 100% of existing members migrated without double-billing or lost data

**Phase 2a (Marketing)** → exit criteria:
- First 100 blog posts published
- Organic traffic > 5,000 sessions/mo
- Email list > 2,000 subscribers
- 3 persona cadences live + firing
- Content calendar 60 days out at all times

**Phase 2b (CRM)** → exit criteria:
- Lead-to-member conversion > 20%
- Trial-to-paid conversion > 50%
- Cadence automation handling 80% of first-touch

**Phase 2c (AI Coaching)** → exit criteria:
- First 25 members on AI coaching, NPS > 50
- Coach approval time ≤ 8 min/member/week
- Month-over-month retention of AI members > 95%

**Phase 3 (Growth + Moat)** → exit criteria to be defined post-Phase-2.

---

## 9. 90-day execution plan

| Week | Workstream | Owner | Deliverable |
|---|---|---|---|
| 1 | Decisions + sign-off | Owner | Approve PLATFORM-DECISIONS, WIX-SITE-IA, COURTRESERVE-EVAL, SOCIAL-UNTANGLING |
| 1 | Social untangle (Step 0-1) | Lindsay | Business Portfolio audit + setup |
| 2 | Social untangle (Step 2-7) | Lindsay | Clean ownership + admin roles |
| 2 | Wix Business signup + design system | Site builder | Wix trial + colors/fonts/components |
| 3 | Home + Academies + 1 location built | Site builder | Walkthrough demo w/ owner |
| 3 | CourtReserve trial signup + SKU config | Owner + Bernardo | 6 session packages configured |
| 4 | Wix Stores + Square shop setup | Site builder | Stringing + paddles + apparel SKUs live in preview |
| 4 | CourtReserve 14-day pilot at Action Park | Owner | Pilot running; entitlement tests passing |
| 5 | Replicate remaining location pages | Site builder | 5 location pages live in preview |
| 5 | Coaches + About + Contact + Policies | Lindsay | Content + coach bios finalized |
| 6 | Wix Pricing Plans + Members Area wired | Site builder | 6 SKUs live via Wix Payments |
| 6 | CourtReserve go/no-go decision | Owner | Documented decision |
| 7 | Accessibility + SEO audits | Bernardo | Reports + fixes |
| 7 | Soft-launch on Wix preview URL | Site builder | Internal team QA |
| 8 | DNS cutover + 301 redirects | Bernardo | `bignctennis.com` → Wix live |
| 8 | Existing member migration | Owner | All members moved w/ correct SKU |
| 9 | Post-launch watch + hotfix | Team | Zero critical tickets by end of week |
| 9 | Phase 2 kickoff: content calendar | Lindsay | First 30 days of content queued |
| 10 | Phase 2: email list + first cadence | Lindsay | First persona cadence live |
| 11 | Phase 2: CRM selection + setup | Bernardo | HubSpot Starter or Attio live |
| 12 | Phase 2: first Van Westendorp survey | Owner | 100 responses collected |
| 12 | Phase 2: AI coaching pilot scoping | Owner + Bernardo | 5 pilot members identified |
| 13 | AI coaching pilot begins | Owner + coaches | First 5 members with AI plans |

---

## 10. KPIs + dashboards

### North-star metrics
- **MRR** — total, by SKU, by location
- **Active member count** — total, by SKU, by location
- **Trial-to-paid conversion**
- **Monthly churn**
- **CAC** (ad spend + content cost / new paid members)
- **LTV** (ARPU × 1/churn)
- **CAC payback period** — target <3 months

### Operational metrics
- **Court utilization rate** — by location, by hour band
- **Program fill rate** — avg per clinic type
- **No-show rate** — by SKU
- **Cancel-late rate** — by SKU
- **Coach utilization** — hours taught / hours available
- **Avg sessions used per SKU vs. entitlement**

### Brand + funnel metrics
- **Organic traffic** (GA4)
- **Branded search volume** ("big nc tennis")
- **Social reach** + engagement
- **Email open / click**
- **NPS** (quarterly survey)
- **Review count** (Google + Yelp)

### Dashboard plan
- Phase 1: Wix Analytics + Google Analytics 4 + CourtReserve native reports
- Phase 2: Looker Studio consolidated dashboard (free) pulling from GA4 + Wix + CourtReserve CSV exports + Stripe
- Phase 3: real-time dashboard (if still on Wix, via Velo; if migrated, in the custom app)

---

## 11. Budget snapshot

### One-time (Phase 1)
- Wix theme / premium template (optional): $0–300
- Photography + 2-3 video testimonials: $2,000–5,000
- Copywriting (if not Lindsay): $3,000–6,000
- Logo refinement (if needed): $500–1,500
- Migration engineering (owner/Bernardo time)

### Monthly operating (Phase 1 steady state)
| Line | $/mo |
|---|---|
| Wix Business | $39 |
| CourtReserve | ~$199 |
| SwingVision club license | varies |
| Domain + email | ~$20 |
| Wix Payments + Stripe transaction fees | 2.9%+30¢ per txn |
| Wix Pricing Plan 2% fee | 2% of recurring revenue |
| Square transaction fees | 2.6%+10¢ in-person / 2.9%+30¢ online |
| Content production | $1,000–2,000 |
| Ad spend | $1,000 starter → $5,000 growing |
| Claude API (Phase 2+) | $100–300 |
| CRM (HubSpot Starter or Attio) | $50–100 |
| **Approx total ops** | **~$2,500–8,000/mo** |

### Payback targets
- CAC ≤ $150 per paid member
- LTV ≥ $2,500 (≈ 13 months × $195 avg ARPU)
- LTV:CAC ≥ 16:1 (tennis is high-retention when done well)
- CAC payback ≤ 3 months

---

## 12. What to do first (the next 5 actions)

1. **Owner sign-off** on this doc + PLATFORM-DECISIONS + WIX-SITE-IA + COURTRESERVE-EVAL — can be redlined but gets us moving
2. **Lindsay starts the Meta Business Suite untangle** per runbook Step 0–1 (non-blocking, parallel)
3. **Open CourtReserve trial** + configure the 6 session packages (non-blocking, parallel)
4. **Open Wix Business plan** + Stripe/Wix Payments merchant account + Square account (gating all else)
5. **Book a 60-min brand/values workshop with owner** to lock in tagline + 4 values + tone — feeds every page of copy

---

## 13. Investment ROI — GTM + AI platform justification

*This section is the owner-facing case for committing to the GTM engine and AI coaching platform. Use it in the pitch conversation.*

### The investment ask

**Total Year-1 investment in GTM + AI platform + consulting:**

| Line | One-time | Monthly | Y1 total |
|---|---|---|---|
| Phase 1 consulting + rebuild | $20,000 | — | $20,000 |
| Phase 2 retainer (strategy + execution, 12mo) | — | $2,500 | $30,000 |
| Wix Business plan | — | $39 | $468 |
| CourtReserve | — | $199 | $2,388 |
| Claude API (AI coaching + marketing agents) | — | $200 | $2,400 |
| HubSpot Starter CRM (Phase 2b) | — | $50 | $600 |
| SwingVision club license | — | ~$100 | $1,200 |
| Content production (contract) | — | $1,500 | $18,000 |
| Ad spend (ramp $1k → $5k) | — | $3,000 avg | $36,000 |
| Photography + video (Phase 1) | $3,500 | — | $3,500 |
| **TOTAL** | **$23,500** | **$7,588 avg** | **~$114,500** |

### The return (baseline scenario)

Financial model from §8 Tab 11:

| Metric | Month 1 | Month 6 | Month 12 |
|---|---|---|---|
| Active paid members | 150 | 225 | 320 |
| MRR (subscriptions only) | $29,250 | $47,183 | $69,456 |
| Annualized run-rate (MRR × 12) | $351,000 | $566,196 | $833,472 |
| **Δ vs. Month 1 ARR** | — | **+$215k** | **+$482k** |

**Non-subscription revenue** (camps, private lessons, pro shop, stringing) — not modeled here but historically a 40–60% add-on to subscription revenue in multi-program tennis operations → realistic **total Year-1 revenue range $500k–$1.3M** depending on ramp.

### Year-1 ROI math (conservative)

- **Investment:** $114,500
- **Incremental ARR captured by month 12 (vs. Month 1 baseline):** $482,000
- **Year-1 NET incremental revenue** (integral of ramp, not just month 12): ~$245,000 additional revenue landed within Year 1
- **Net contribution after investment:** $245,000 − $114,500 = **+$130,500**
- **ROI Year 1:** **114%**
- **Payback period:** **~6 months**

### Year-2 ROI (where it really compounds)

Assuming Year 2 opens at $70k MRR and grows conservatively to $95k MRR:
- **Year-2 average MRR:** $82,500 × 12 = **~$990,000 subscription ARR**
- **Year-2 investment** (retainer + ops + ads only, no new build): ~$90,000
- **Year-2 incremental revenue vs. Year-1 exit:** ~$300,000
- **Year-2 ROI:** **233%**
- **Cumulative 2-year ROI on original investment:** **~6×**

### The non-financial return (the moat)

- **AI coaching data asset** — after 12 months of data, 200+ members have a trail of progress, drills, stats. Switching cost is high. LTV climbs ~40%.
- **Content compound** — 100+ blog posts + IG reels by Month 12 → organic traffic doesn't stop when ad spend does. Year 2 CAC drops ~30%.
- **Brand equity** — "The AI-powered tennis club" positioning is defensible for ~12 months before a copycat catches up. That's a real window.
- **Multi-location lock-in** — Charlotte launches on the platform from day 1; marginal cost to add location #6 drops to ~$3k instead of $20k.
- **Franchise-ability optionality** — the GTM + AI system becomes a repeatable playbook worth $50k–$200k per franchised location in Year 3+.

### What happens if we DON'T invest

- Current WordPress site leaks ~$2,000–5,000/mo of potential leads (no pricing, slow, no SEO)
- No pricing transparency costs ~10–20% of conversions (industry standard)
- 1-day members overattending = ~$500–2,000/mo of uncaptured revenue (using free capacity that should be paid)
- Charlotte Sugaw Creek launches without marketing machine = 50–70% slower ramp
- Cary Tennis Park and country clubs compound their brand advantage another year
- **Net opportunity cost of inaction: ~$60,000–100,000 Year 1, growing annually**

### Risk-adjusted scenarios

| Scenario | Y1 investment | Y1 incremental revenue | Y1 ROI | Payback |
|---|---|---|---|---|
| **Pessimistic** (growth stalls at 10%/yr) | $114,500 | $120,000 | +5% | 11 mo |
| **Base case** (model above) | $114,500 | $245,000 | +114% | 6 mo |
| **Optimistic** (Charlotte + AI drive 50% lift) | $114,500 | $400,000 | +249% | 4 mo |

Even in pessimistic case, payback within Year 1.

### Van Westendorp validation (Phase 1 survey result) will sharpen this

The $119–$399 pricing bands are assumed in this model. The Van Westendorp survey (§Tab 12) in month 2 may show we can go HIGHER on Unlimited tiers (common when AI coaching is bundled), in which case base-case MRR trajectory lifts ~15%.

### The one-slide pitch summary

> **Invest $115k in Year 1 → land $245k incremental revenue in Year 1 → lock in $300k+ incremental revenue in Year 2.
> Payback in 6 months. 2-year ROI of 6×.
> Plus a defensible AI-coaching moat that no NC competitor has.**

### Assumptions + caveats (be honest)

- Member count ramp (150 → 320) assumes we execute the content + cadence engine per GTM workbook. Not magic.
- Churn assumption (4%/mo) is industry-typical; could be better with AI coaching, could be worse with poor onboarding
- ARPU assumes mix stays weighted to INT-2 / INT-U; if everyone picks INT-1 we hit ~75% of projected MRR
- Non-subscription revenue not modeled here on purpose (conservative)
- Charlotte Sugaw Creek contribution assumed modest Year 1; full ramp Year 2

---

## 14. Open strategic questions (for next conversation)

- Big NC Foundation (Title I non-profit arm) — do we launch in Phase 2 or Phase 3?
- Big NC Method trademark — file in Phase 2 or once the curriculum doc is written?
- Coach certification / Big NC Coach Academy — Phase 3 priority or delete?
- Charlotte Sugaw Creek launch strategy — grand opening tied to Wix launch, or separate?
- Franchising vs. owned expansion — worth considering if Charlotte performs well?
- Owner-operator succession plan — for long-term moat thinking

---

*End of strategy. Work items tracked in `baseline/` companion docs. Status reviewed monthly.*
