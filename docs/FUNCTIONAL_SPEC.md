# Functional Specification

## Purpose

The CDTA 2026 Dashboard is a single-page web application that displays the complete state of the **Coimbatore District Tennis Association 2026 League** — a doubles tennis league with 11 divisions (A–K).

It is the public-facing read view, the captains' planning tool, and the admin's operational console.

---

## Users and roles

| Role | Sees | Typical user |
|---|---|---|
| **admin** | All 11 divisions + Overview + SVG Players + Admin tab | League secretary |
| **captain** | All 11 divisions + Overview + SVG Players | Team captains |
| **svgplayer** | All 11 divisions + Overview + SVG Players | SVG club members |
| **viewer** | All 11 divisions + Overview + SVG Players | Anyone with the link |

Only `admin` sees the **Admin** tab. All other roles see the same content but with no admin features.

Authentication is local to `data/auth.js` (no server session). On successful login the role and user info are stored in `localStorage`.

---

## Page inventory

### Per division (A through K) — 5 sub-tabs each

| Sub-tab | Content |
|---|---|
| **Standings** | Final ranks, courts played, points, sets W/L, games W/L, win % |
| **Projection** | (Manual divisions C/F/H/I only) — projected final position |
| **Schedule** | Week-by-week fixtures with court-level player pairings & set scores |
| **Results** | Match-by-match results, filterable by week and team |
| **Players** | Roster with photo, role, played courts, wins/losses, win %, partners |
| **Stats** | (C/F/H/I) — Most Active Doubles Pairs, top performers |
| **Teams** | Team list with captain & player counts |

### Overview (top-level menu)

Consolidated dashboard:
- **Leaders** — top scorers across all divisions
- **All Teams** — every team across all 11 divisions
- **League Stats** — totals row (teams, players, matches, courts)

### SVG Players (top-level menu)

Special club view focused on the SVG Tennis Club's three teams (SVG-C in Div C, plus STARS and SAI in Div I). Sub-tabs:
- **Club Performance** (default)
- **Players**
- **Schedule**
- **Results**

### Admin (admin role only) — 7 sub-tabs

| Sub-tab | Purpose |
|---|---|
| **User Management** | Create / edit / delete users |
| **Login History** | Who logged in when |
| **Usage Log** | Page views per user |
| **Activity Log** | Mutations (data tool runs, etc.) |
| **Test Plan** | Embedded test checklist |
| **Data Tools** | Auto-fix stats, integrity check, refresh helpers |
| **Settings** | Total weeks, league name, photo paths, etc. |

---

## Key user flows

### 1. View standings (any user)
1. Login → land on Overview
2. Click **Div A** (or any letter A–K)
3. See **Standings** tab by default
4. Click any column header to sort

### 2. Inspect a player (any user)
1. Open a division → **Players** tab
2. Filter by team / search by name / filter by gender
3. Row shows: photo, name, team, gender, courts played, W/L, win %, partner pairings

### 3. Refresh data after a week (admin)
See [ADMIN_RUNBOOK.md](ADMIN_RUNBOOK.md). High-level:
1. Run `/load-division` skill (per division), or use **Data Tools → Auto Fix Stats**
2. Verify in app
3. Push to GitHub
4. Run `deploy.bat` to publish to GoDaddy

### 4. Add a new user (admin)
1. **Admin → User Management → + Add User**
2. Enter username, password, role, division (optional), team (optional)
3. Saved to `data/auth.js` via `api/admin-data.php`

---

## Display rules

### Final Standings
- Section title: `Division X — Final Standings` (season is over)
- Header stat box: `0 Weeks Remaining`
- Win % color: ≥80% green, ≥50% muted, <50% red

### Player Stats (auto-derived on init)
- `gamesPlayed` = court appearances (counted from `DIV_X_SCHEDULE`)
- `wins` = court wins (winning side of each court)
- `partners` = list of `[partner_name, count]` per player, sorted desc
- `KEY_PAIRS.wins` = re-derived per pair
- Recomputation runs at page load — no manual maintenance

### Manual vs scraped divisions
- **Scraped** (A, B, D, E, G, J, K) — data pulled from league.cdta.co.in via the `/load-division` skill
- **Manual** (C, F, H, I) — same base structures **plus**: `PROJECTIONS`, `PROJ_BREAKDOWN`, `KEY_PAIRS`, `PARTNERS`, `TEAM_INFO`

---

## Out of scope (intentional non-features)

- No write API for non-admin users
- No live score updates (data is refreshed weekly)
- No mobile app (responsive web only)
- No payment / registration / signup
- No multi-language support
