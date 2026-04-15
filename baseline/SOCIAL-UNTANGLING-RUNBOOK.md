# Social Media Untangling Runbook — Big NC Tennis

**Goal:** move Instagram (`@bignctennis`) and Facebook (`facebook.com/Bigtennisnorthcarolina`) from their current entanglement with an old personal Facebook account into a properly-owned Big NC Tennis LLC Meta Business Portfolio, then embed them cleanly in the new Wix site.

**Owner:** Lindsay (executor). Owner (sign-off). Bernardo (reviewer).
**Estimated time:** 60–90 minutes of active work + ≤24 hours for any Meta verification checks.
**Risk:** low if run in order. High if you skip Step 0 or delete anything before Step 7.

---

## Step 0 — Before you touch anything

1. **Decide who the "root" personal Facebook profile will be.** Meta requires a real personal FB profile to anchor Business Manager access. It can be the owner's personal account, or a dedicated "admin" profile controlled by the business. Do NOT use the old sketchy personal profile as the root — but you DO need it live until Step 5.
2. **List every current asset:**
   - [ ] Facebook Business Page (`Bigtennisnorthcarolina`)
   - [ ] Instagram Business Account (`bignctennis`)
   - [ ] Instagram personal account (if separate)
   - [ ] Any Ad Account
   - [ ] Any Pixel
   - [ ] Any Catalog (product feed)
   - [ ] Any existing Meta Business Portfolio (there may already be one you forgot about)
3. **Screenshot each asset's current admin list** (Page → Settings → Page Access; IG → Settings → Account Center). This is your undo record.
4. **Enable 2-factor authentication** on the root personal FB profile AND the IG account BEFORE proceeding. If you ever lose access mid-migration, 2FA is your lifeline.

---

## Step 1 — Create or confirm the Meta Business Portfolio

Meta renamed "Business Manager" to **Meta Business Portfolio** (part of Meta Business Suite). Use it.

1. Go to **https://business.facebook.com**
2. Sign in with the root personal FB profile chosen in Step 0.
3. If a "Big NC Tennis" Business Portfolio already exists and you have access → use it. Skip to Step 2.
4. Otherwise click **Create Account** → enter:
   - Business name: `Big NC Tennis LLC` (use legal name)
   - Your name + business email: `admin@bignctennis.com` (set this up first if it doesn't exist)
5. Verify the email Meta sends.

**Checkpoint:** you should see an empty (or existing) Business Portfolio dashboard.

---

## Step 2 — Convert Instagram to a Professional account

Personal Instagram accounts CANNOT be linked to a Facebook Page through Business Suite. ([source](https://www.facebook.com/business/help/connect-instagram-to-page))

1. Open Instagram app → `@bignctennis` profile → **Menu** → **Settings** → **Account** → **Switch to Professional Account**.
2. Choose **Business** (not Creator — Business gets better Wix + ad integration).
3. Select the category **Sports Team / League / Sports Club**.
4. Confirm contact info (email + phone).

**If it's already a Professional account, skip this step.**

**Checkpoint:** IG profile now shows the "Contact" button and Insights tab.

---

## Step 3 — Claim the Facebook Page in the Business Portfolio

1. In Business Portfolio → **Settings (gear icon)** → **Business Assets** → **Accounts** → **Pages** → **Add** → **Claim a Page**.
2. Search for `Bigtennisnorthcarolina` — if it's owned by a personal profile, this prompts a transfer flow.
3. **If the Page is already claimed by an OLD Business Portfolio you don't control:** you need Meta support to release it. Open a support ticket via Business Help → "Page ownership." This can take days. Plan for it.
4. Once claimed, the Page now lives inside the Big NC Tennis Business Portfolio.

**Checkpoint:** Page appears in Portfolio → Pages list with "Owner: Big NC Tennis LLC."

---

## Step 4 — Claim the Instagram account in the Portfolio

1. Business Portfolio → **Business Assets** → **Accounts** → **Instagram accounts** → **Add** → **Claim an Instagram account**.
2. Enter `bignctennis` IG username + password (you'll need it).
3. Meta verifies ownership via IG password.

**Checkpoint:** IG account appears in Portfolio → Instagram Accounts list.

---

## Step 5 — Link Instagram ↔ Facebook Page

1. In Business Portfolio → **Business Assets** → **Pages** → click `Bigtennisnorthcarolina` → **Linked Accounts / Instagram** → **Connect**.
2. Select `bignctennis` from the dropdown → **Confirm**.
3. Alternative path: Facebook Page → **Settings** → **Linked Accounts** → **Instagram** → **Connect account**.

**Checkpoint:** Page → Settings → Linked Accounts shows IG `@bignctennis` as linked.

---

## Step 6 — Grant admin roles (principle of least privilege)

Business Portfolio → **People** → **Add**.

| Person | Portfolio role | Page role | IG role |
|---|---|---|---|
| Owner | Admin | Full control | Full control |
| Lindsay | Admin | Full control | Full control |
| Bernardo | Employee | Content creator + Analyst | Limited |
| (any contractor) | Employee | Content creator | None by default |

For each: set 2FA requirement in Portfolio Security Center → Require two-factor authentication.

**Checkpoint:** every admin can log in, post a test caption draft (don't publish yet), and see Insights.

---

## Step 7 — Remove stale access

ONLY after Step 6 is verified working for all needed admins:

1. Page → **Settings** → **Page Access** → remove any profile/account that's not Owner/Lindsay/Bernardo.
2. IG → **Settings** → **Account Center** → **Connected Accounts** → disconnect anything sketchy.
3. Business Portfolio → **People** → remove any stale accounts.
4. Change IG password to a new 24-char password → store in owner's password manager.
5. Change Page admin root FB profile password → store in owner's password manager.

**Checkpoint:** a fresh login test from a new browser as Owner works; no unexpected admins visible.

---

## Step 8 — Create an Ad Account (even if not running ads yet)

1. Business Portfolio → **Business Assets** → **Ad Accounts** → **Create New Ad Account**.
2. Name: `Big NC Tennis - Primary`.
3. Timezone: `America/New_York`.
4. Currency: `USD`.
5. Payment method: attach the business card (don't attach a personal card — tax headache).

**Checkpoint:** Ad Account exists and payment method validated. This pre-positions Phase 2 marketing — we don't run ads yet.

---

## Step 9 — Install a Meta Pixel (pre-positions conversion tracking)

1. Business Portfolio → **Events Manager** → **Connect Data** → **Web** → **Meta Pixel**.
2. Create Pixel: `Big NC Tennis - Main`.
3. Grab the Pixel ID — we install it on the Wix site in Step 11.

---

## Step 10 — Request Instagram + Facebook verified badges (optional, but do it now)

Takes weeks. Submit during migration so it's processing while you build.
- IG: Settings → Account → Request Verification.
- FB: Page → Settings → Verification → Get Verified.
Provide: business registration, local news coverage, professional photos.

---

## Step 11 — Embed in the Wix site

Once the Wix site is being built (separate workstream):

1. In Wix editor → **Add Apps** → install:
   - **Instagram Feed** (official Wix app or Elfsight) → authenticate → point at `bignctennis` → display on homepage and footer
   - **Facebook Like Box / Page Plugin** → authenticate → point at the Page → display in footer
   - **Messenger Chat Widget** → point at the Page → enable on all pages with auto-greeting
2. In Wix → **Settings** → **Tracking & Analytics** → **New Tool** → **Facebook Pixel** → paste the Pixel ID from Step 9.
3. Verify pixel fires via the Meta Pixel Helper Chrome extension on each critical page (home, academies, contact, checkout).

---

## Step 12 — Verification checklist

Run this end-to-end after Step 11:
- [ ] Post a test IG story from Meta Business Suite → visible in `/members` page's IG embed within 15 min
- [ ] Publish a test FB post from Business Suite → visible in footer Like Box within 15 min
- [ ] Open the Wix site in a private browser → Meta Pixel Helper shows pixel firing
- [ ] Submit a Wix contact form → Meta Events Manager shows a `Lead` event
- [ ] Log in to Business Portfolio as Owner, Lindsay, Bernardo separately → each can post + reply to messages
- [ ] Revoke Bernardo's Business Portfolio access temporarily → confirm he can't post → restore access

---

## Step 13 — Phase 2 AI hook (do NOT do during untangle)

After untangling is stable for 2+ weeks, layer in AI-driven posting:

1. Authenticate **Meta Graph API** access for the Business Portfolio (generates a long-lived Page access token).
2. Wire the Big NC Tennis content engine (per the Filveo GTM bible pattern — see `Big-NC-Tennis-Strategy.md` §Sequence Builder) to draft posts via Claude, queue them for Lindsay's approval, then publish via Graph API on schedule.
3. Alternative: use **Buffer** or **Meta Business Suite Scheduler** if preferring a GUI approach without the Graph API wiring.

This is the "Lindsay and I will work on untangling social media - but building that back in AI power would be great" the owner asked for — it lives in Phase 2.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| "Page is already claimed by another Business" | File Meta support ticket; can take days. Don't try to create a duplicate Page. |
| Instagram won't link to Page | Confirm IG is Professional (Business or Creator), not Personal. |
| Pixel not firing on Wix | Check Wix Marketing Tools → Pixel → Enabled. Private/incognito mode + Pixel Helper to debug. |
| Business Portfolio creation fails | You may already have one. Check at business.facebook.com/settings — you might have been added to one as an employee years ago. |
| Can't get 2FA codes | Use authenticator app (Google Authenticator / 1Password / Authy) — NOT SMS. |

---

## Security posture after completion

- Root FB profile: 2FA on, unique 24-char password in manager
- IG password: unique 24-char in manager, 2FA on
- Business Portfolio: 2FA required for ALL admins
- Admin list reviewed quarterly (calendar reminder)
- Ad account payment method: business card only
- Access revoked within 24h of anyone leaving the team
