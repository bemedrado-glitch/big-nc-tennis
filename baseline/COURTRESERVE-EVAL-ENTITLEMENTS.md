# CourtReserve Evaluation + Entitlement Specification

**Problem statement:** prevent a 1-day-per-week member from attending 3–4 times per week.

**Scope:** governs all paid programming at Action Park, Apex, Fuquay, Harnett, and Charlotte Sugaw Creek. Does NOT govern Holly Springs HS team — that stays on Spond.

**Outcome:** 14-day CourtReserve pilot with pass/fail criteria; if passes, becomes the system of record for programming entitlements and replaces the current Playbook API portal.

---

## 1. Tool selection rationale

### Option A — CourtReserve (RECOMMENDED)

| Capability | Verdict |
|---|---|
| Session packages with auto-deducting punches | ✅ Native ([source](https://courtreserve.com/booking-packages-racquet-clubs/)) |
| Package tied to specific member or family | ✅ Both modes supported |
| Limit availability by membership type | ✅ Native |
| Enforcement at booking time (blocks overbooking) | ✅ Core design |
| Multi-location | ✅ Native |
| USTA league + tournament support | ✅ |
| Branded mobile app for members | ✅ |
| Self-service booking via web + app | ✅ |
| Used by major tennis facilities | ✅ 2,000+ facilities |
| Integration story for Wix | ⚠️ Deep-link, not embed — acceptable |
| Cost | $99–$299/mo depending on member count + locations |

### Option B — Spond

| Capability | Verdict |
|---|---|
| Team/group RSVP | ✅ Free |
| Attendance tracking | ✅ Manual override |
| Entitlement enforcement | ❌ Not native — any invited member can RSVP |
| Session packages / punch cards | ❌ |
| Multi-location separation | ⚠️ Multi-group supported but not entitlement-aware |
| Best-fit use case | Fixed-roster teams with season-based schedule |

### Option C — Wix Bookings alone

| Capability | Verdict |
|---|---|
| Book a class / session | ✅ |
| Capacity limits per session | ✅ |
| Enforce "4 sessions/month per member SKU" | ❌ Not without Velo custom code |
| Enforce "only Intermediate members can book INT clinics" | ⚠️ Possible via Pricing Plan membership but no session count cap |
| Engineering time to close the gap | ~60–100 hours of custom Velo + ongoing maintenance |

### Option D — Custom on Wix Velo + Square API

Builds what we want from scratch. ~160–240 hours first build + 5–10 hours/month maintenance. NOT recommended in Phase 1. May be a Phase 3 consideration if we outgrow CourtReserve.

### Decision

**CourtReserve for programmed sessions. Spond for Holly Springs HS. Wix Members Area is the front door.** This is the only architecture that meets the hard requirement without custom engineering.

---

## 2. Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                      WIX (bignctennis.com)                        │
│                                                                   │
│  Marketing pages    Member portal (/members)                     │
│  Pricing Plans      ─────────────────────                        │
│  Wix Payments       Dashboard                                    │
│  Wix Stores + Square  "Book a Session" button                    │
│                         │                                         │
└─────────────────────────┼─────────────────────────────────────────┘
                          │ deep-link w/ member identity
                          ▼
┌──────────────────────────────────────────────────────────────────┐
│                      COURTRESERVE                                 │
│                                                                   │
│  Member profile synced from Wix (email match)                    │
│  Session package attached to SKU                                 │
│  Booking flow:                                                   │
│    1. Filter sessions to member's eligible clinics              │
│    2. Check remaining punches                                    │
│    3. Check schedule conflict                                    │
│    4. Deduct punch on confirm                                    │
│    5. Send confirmation + ICS                                    │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

Holly Springs HS team runs in parallel on Spond (free).
```

**Identity model:** member email is the shared key between Wix and CourtReserve. Owner/Lindsay confirm member's CourtReserve profile matches SKU in Wix at enrollment.

**No hard SSO in Phase 1.** Deep-link to CourtReserve login with email pre-filled is acceptable. Full SSO via SAML is a Phase 3 nice-to-have.

---

## 3. Entitlement rules — the spec

### SKU → session-package mapping

| Wix SKU | CourtReserve session package | Sessions | Reset | Eligible clinic types | Rollover | Guest passes |
|---|---|---|---|---|---|---|
| `INT-1` | `INT 1/wk Monthly` | 4 | 1st of month | `intermediate_clinic`, `intermediate_academy` | No | 0 |
| `INT-2` | `INT 2/wk Monthly` | 8 | 1st of month | `intermediate_clinic`, `intermediate_academy` | No | 1 |
| `INT-U` | `INT Unlimited` | 15 (fair-use) | 1st of month | `intermediate_clinic`, `intermediate_academy` | No | 2 |
| `ADV-1` | `ADV 1/wk Monthly` | 4 | 1st of month | `advanced_clinic`, `advanced_academy` | No | 0 |
| `ADV-2` | `ADV 2/wk Monthly` | 8 | 1st of month | `advanced_clinic`, `advanced_academy` | No | 1 |
| `ADV-U` | `ADV Unlimited` | 15 (fair-use) | 1st of month | `advanced_clinic`, `advanced_academy`, `intermediate_clinic` (cross-eligible) | No | 2 |

**Rationale:**
- **Fair-use 15/month on Unlimited** prevents abuse while giving a truthful "unlimited" feel (average active member attends 8–12/mo — 15 covers P95 without giving away the farm).
- **ADV-U cross-eligibility** (can drop into INT clinics) gives premium feel without extra coach cost.
- **No rollover** keeps accounting clean, matches industry norm.
- **Guest passes** incentivize upgrade and fuel referral acquisition.

### Edge-case rules

| Scenario | Rule |
|---|---|
| Member cancels session ≥ 12 hrs before start | Punch refunded |
| Member cancels < 12 hrs before start | Punch consumed |
| No-show | Punch consumed + email warning; 3 no-shows/season = cooling period |
| Late cancel 3+ times in 30 days | Auto-trigger coach outreach |
| Member upgrades mid-cycle | CourtReserve prorates remaining days at new package level |
| Member downgrades mid-cycle | Change takes effect next billing cycle; no mid-cycle punch reduction |
| Member pauses subscription | All sessions frozen; package resumes from where it left off on resume |
| Member cancels subscription | Access revoked at end of paid period; any future-dated bookings auto-cancel |
| Family plan punches | Not supported in Phase 1 (CourtReserve supports it, but we keep Phase 1 simple) |

### Clinic-type taxonomy (configure in CourtReserve)

- `intermediate_clinic` — drop-in or scheduled clinic, INT level
- `intermediate_academy` — scheduled academy session, INT level, Tue/Thu 6pm at Action Park
- `advanced_clinic` — drop-in or scheduled, ADV level
- `advanced_academy` — scheduled academy session, ADV level, Mon/Wed 6pm at Action Park
- `pickleball_clinic` — separate entitlement system (Phase 2)
- `private_lesson` — Wix Bookings handles this, NOT CourtReserve
- `camp_day` — one-time purchase via Wix Stores, NOT entitled via membership
- `tournament` — USTA / UTR events, separate registration

---

## 4. 14-day pilot plan

### Location: Action Park only (one location minimizes blast radius).

### Day -3 to 0 — setup
- [ ] Open CourtReserve trial account
- [ ] Configure the 6 session packages per spec above
- [ ] Configure clinic-type taxonomy
- [ ] Load Action Park schedule (current Google Calendar → CourtReserve sessions)
- [ ] Enroll 10 volunteer members across mix of SKUs

### Day 1–7 — real-use observation
- [ ] Members book sessions via CourtReserve
- [ ] Owner monitors daily: any unexpected enforcement behavior? Any members complaining?
- [ ] Log all edge cases hit

### Day 8–10 — abuse testing
- [ ] Test account with `INT-1` tries to book 5 sessions in a week → expect block after #4
- [ ] Test account with `INT-1` tries to book an `advanced_clinic` → expect block (wrong clinic type)
- [ ] Test account with `ADV-U` books 16 sessions in a month → expect warning at 15
- [ ] Test late-cancel flow (cancel 6hrs before) → confirm punch consumed
- [ ] Test no-show flow → confirm punch consumed + warning email

### Day 11–14 — review + decision
- [ ] Pass criteria:
  - [ ] Zero over-attendance past entitlement
  - [ ] Zero false-blocks (member blocked when they shouldn't have been)
  - [ ] Zero member complaints escalated to owner
  - [ ] Owner finds the admin UI tolerable (not delightful, just tolerable)
- [ ] Go/no-go decision logged in this doc
- [ ] If GO: roll out to all 4 other locations; cancel Playbook API
- [ ] If NO-GO: fallback to Playtomic or Playbypoint (alternative session-package tools) — re-pilot

### Day 15+ — full rollout
- Migrate all active members
- Retire Playbook API (`bignctennis.playbookapi.com`)
- Link CourtReserve from the Wix member portal
- Train coaches on day-of check-in flow (CourtReserve mobile app)

---

## 5. Spond deployment — Holly Springs HS only

- Coach creates Spond group for Holly Springs HS team (free tier, up to 500 members).
- Import roster from current team roster.
- Schedule practice events with RSVP.
- Post match/tournament reminders.
- Use Spond's attendance-tracking view to record who actually came.
- Link from `/members/team/holly-springs-hs` page in Wix (external link, not embed).
- No entitlement enforcement needed — HS team is fixed-roster.

---

## 6. Data flows + privacy

- CourtReserve stores: name, email, phone, emergency contact, SKU, attendance history, cancel/no-show history.
- Wix stores: same identity fields + subscription + billing + perks.
- Overlap is acceptable; email is the single-source-of-truth key.
- **No payment info crosses systems.** Wix holds Wix-Payments-originated billing; Square holds Square billing; CourtReserve does NOT run recurring billing for us.
- Members can request data export or deletion per privacy policy; owner runs a quarterly audit.

---

## 7. Coach workflow (day-of)

1. Coach opens CourtReserve mobile app on arrival at court.
2. Sees enrolled roster for the session with check-in status.
3. Taps check-in as each student arrives.
4. If a student arrives who shouldn't be in the session (somehow made it past entitlement) — coach marks "not eligible" and redirects.
5. End of session: coach saves roster; any no-shows auto-flag the student for follow-up.

Simple. Works on phone. No tablets needed at court.

---

## 8. Budget + contract terms

| Line item | Monthly |
|---|---|
| CourtReserve (all 4 non-HS locations, ≤500 members) | ~$199 (confirm at onboarding) |
| Spond (Holly Springs HS) | $0 (free tier) |
| Wix Business plan | $39 |
| Wix Payments transaction fee | 2.9% + 30¢ per txn |
| Wix Pricing Plans subscription fee | 2% per recurring charge |
| Square processing fee | 2.6% + 10¢ in-person; 2.9% + 30¢ online |

**Contract terms to negotiate with CourtReserve:**
- 30-day out clause during first 90 days (de-risk the rollout)
- No annual prepay until post-pilot
- Data export guarantee (own your member data)

---

## 9. Rollback plan

If CourtReserve fails the pilot:
- Keep Playbook API live (don't cancel until CourtReserve is proven)
- Fall back to Playtomic or Playbypoint for a second pilot
- Worst case: re-pilot on a custom Velo build in Phase 3

The Wix site ships regardless — CourtReserve failure delays entitlement enforcement, not the whole rebuild.
