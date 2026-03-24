# CDTA 2026 — Official League Dashboard

## Overview

The **Coimbatore District Tennis Association (CDTA) 2026 League Dashboard** is a web application providing real-time standings, projections, match results, player statistics, and team information for the CDTA 2026 tennis season (January – April 2026).

**Live URL:** http://akilanramesh.com/cdta/
**Source:** `c:\My Cloud\Claude\cdta\`

### Key Facts
- **4 Divisions:** I, C, F, H (11 teams each, 44 teams total)
- **Season:** 11 weeks (Jan 24 – Apr 5, 2026)
- **Format:** Doubles — each match has 3 courts, each court is a doubles pair
- **Points:** Each court won = 1 point (max 3 per match)
- **Tiebreakers:** Points → Set Difference → Game Difference

---

## Architecture

### Stack
- **Frontend:** HTML5 / CSS3 / Vanilla JavaScript (no frameworks)
- **Backend:** PHP 8.x (admin data API only)
- **Hosting:** GoDaddy shared hosting
- **Data:** Hardcoded JavaScript constants in per-division data files
- **Admin Storage:** Server-side JSON files via PHP API + localStorage fallback

### File Structure
```
cdta/
├── index.html              Single-page dashboard (all divisions + admin)
├── css/main.css            All styles (~340 lines)
├── js/app.js               All application logic (~2300 lines)
├── data/
│   ├── auth.js             User credentials, roles, DIV_H_USERS
│   ├── division-i.js       Division I data (teams, standings, projections, schedule, players, partners, key pairs, walkovers, proj breakdown)
│   ├── division-c.js       Division C data
│   ├── division-f.js       Division F data
│   └── division-h.js       Division H data
├── api/
│   └── admin-data.php      Server-side storage for users, login history, usage log, settings
├── deploy.bat              GoDaddy FTP deployment (Windows)
├── deploy.ps1              PowerShell deployment script
├── deploy.env              FTP credentials (gitignored)
├── audit-partners.js       Node.js audit script for data consistency
└── DOCS.md                 This file
```

---

## Divisions

### Division I (11 teams)
SATCHIDANANDA, TenniMaSh Tots, SREEVATSA STARS, TENNIGLO-D, S RAILWAY-B, GREEN NEST-B, CBE CLUB-C, SVG Champs, SNS-C(AS TENNIS), SAI TENNIS-B, Kingsberry Tennis

### Division C (11 teams)
SVG-C (SREEVATSA BLUES), PSG-A, TIRUPUR-A, SNS TENNIS ACADEMY A, FMPTA-A, ANUSHAM-A, PROSCHOOL-B, CMTA-C, G.P.T.C-B, COSMO-B, LIFESPRING-A

### Division F (11 teams)
GREEN NEST-A, SNS TENNIS ACADEMY B, SREEVATSA ACES, CCTA-C, ALPHA-B, CS ACADEMY-B, MAPLES-B, TIRUPUR CITY CLUB, CASA GRAND ETERNIA 2, ALV ACERS, CMTA-B

### Division H (11 teams)
SNS-D, PSG Tech, ANUSHAM-B, RS PURAM-A, G.P.T.C-C, ANNUR-C(V2 SPORTS), ACTC-B, TIRUPUR-B, KGR-D, FALCON, CS ACADEMY-C

---

## Pages (per division)

Each division has 7 pages accessible via the navigation bar:

| # | Page | Description |
|---|------|-------------|
| 1 | **Standings** | Stat grid (teams, players, gender split, weeks remaining, walkovers), sortable standings table, title race narrative |
| 2 | **Projection** | H2H projection table with bar chart, min/max ranges, per-fixture breakdown (Weeks 10-11 only) |
| 3 | **Teams** | A-Z team directory (short code, full name, captain, surface, player count, club) |
| 4 | **Schedule** | All 11 weeks with dates, home/away, scores. "UPCOMING" badge on next week. Bye/rest matches shown |
| 5 | **Results** | Court-level match details. Filterable by team and week. Shows player pairs, set scores, winner |
| 6 | **Players** | Full player roster. Searchable, filterable by team, sortable. Shows gender, age, role, played, wins, win%, partner history |
| 7 | **Stats** | Overview stats, demographics, walkover summary, key pairs table (apps, wins, win rate) |

### Special Pages

**SVG Club** — Dedicated section for the Sreevatsa Club's 4 teams across 3 divisions:
- **Club Performance:** Overview cards, team narrative cards, performance breakdown table, projected scores + positions
- **Players:** Merged player table across all 4 SVG teams (37 players), team filter, partner data
- **Rank** (admin only): 4-tier player ranking system (Elite/Strong/Developing/Rising)

**Admin** (admin only) — Application administration:
- **User Management:** Add/edit/delete users, password reset, role change, division/team dropdowns
- **Login History:** Timestamped login/logout events with IP address, user filter
- **Usage Log:** Page views and action tracking with stats summary
- **Data Tools:** Integrity check, season summary, CSV export (standings, players, results), localStorage info
- **Settings:** Update week badge, last updated date (persists to server)

---

## Authentication & Roles

### User Format
```javascript
{
  password: 'plaintext',      // Stored in auth.js and server-side users.json
  role: 'admin|captain|svgplayer|viewer',
  name: 'Display Name',
  division: 'I|C|F|H|null',  // Which division they belong to
  team: 'STARS|null'          // Which team (short code)
}
```

### Roles & Access

| Role | Divisions | SVG Club | Admin | Div H | Rank Tab |
|------|-----------|----------|-------|-------|----------|
| admin | All | Yes | Yes | Yes | Yes |
| captain | Own division | Yes | No | No | No |
| svgplayer | Own division | Yes | No | No | No |
| viewer | Own division | No | No | No | No |

### Default Users
| Username | Role | Division | Team |
|----------|------|----------|------|
| rameshadmin | admin | all | — |
| ramesh | svgplayer | I | STARS |
| monish | captain | I | STARS |
| murugesan | captain | I | CHAMPS |
| sethupathy | captain | F | ACES |
| nagendran | captain | C | SVG-C |

### Session Management
- Session stored in `localStorage` under key `cdta2026_auth`
- Users added via admin UI are persisted to server (`admin-data/users.json`) and localStorage
- Captain users auto-switch to their division on login

---

## Data Model

### Division Data Files

Each `data/division-{x}.js` file exports these constants:

| Constant | Type | Description |
|----------|------|-------------|
| `DIV_{X}_TEAMS` | Array | Team objects: short, full, captain, mobile, players, club, surface |
| `DIV_{X}_STANDINGS` | Array | Ranked: rank, short, full, pts, played, w, l, setsW, setsL, gamesW, gamesL |
| `DIV_{X}_PROJECTIONS` | Array | Projected: rank, short, full, current, expected, projected, min, max |
| `DIV_{X}_SCHEDULE` | Array | Per-week: week, date, done, matches[] with courts[] |
| `DIV_{X}_PLAYERS` | Array | Player objects: name, team, gender, age, role, gamesPlayed, wins |
| `DIV_{X}_PARTNERS` | Object | `{ 'Player Name': [['Partner', count], ...] }` |
| `DIV_{X}_KEY_PAIRS` | Array | Key pairs: pair, team, apps, wins |
| `DIV_{X}_WALKOVERS` | Object | `{ TEAM: { wosGiven: n, weeksPlayed: n } }` |
| `DIV_{X}_PROJ_BREAKDOWN` | Array | Per-team fixture projections for remaining weeks |

### Court Data Structure
```javascript
{
  ct: 1,                    // Court number (1-3)
  home: 'Player A / Player B',
  away: 'Player C / Player D',
  sets: '6-3, 4-6, 10-8',  // Set scores
  win: 'home'|'away',       // Winner
  wo: true                  // Optional: walkover flag
}
```

### Points System
- Each match = 3 courts (doubles pairs)
- Each court won = 1 point for the winning team
- Match result: 3-0, 2-1, 1-2, 0-3
- Total points per match = 3 (split between teams)
- Walkovers: winning pair gets 6-0, 6-0

---

## Server-Side API

### `api/admin-data.php`

Stores admin data as JSON files in `admin-data/` directory.

| Action | Type | Auth Required | Description |
|--------|------|---------------|-------------|
| `load` | `settings` | No | Load dashboard settings |
| `load` | `login` | No | Load login history |
| `load` | `usage` | No | Load usage log |
| `load` | `users` | Yes | Load user data (contains passwords) |
| `save` | any | Yes | Save/append data |
| `clear` | any | Yes | Delete data file |

**Authentication:** Include `auth` field in JSON body with admin password.

**Server Data Files:**
```
admin-data/
├── users.json       User additions/edits/deletions
├── login.json       Login/logout events with timestamps + IP
├── usage.json       Page views and action log
└── settings.json    Week badge, last updated date
```

---

## SVG Rank System

### Rating Formula
```
Rating = Win% × min(gamesPlayed / 3, 1.0)
```
- Players with 3+ games: rating equals their win percentage
- Players with fewer games: win% is proportionally discounted
- Players with no court data: rating = -1 (unranked)

### Tiers
| Tier | Rating | Color | Description |
|------|--------|-------|-------------|
| Elite | 75+ | Gold | Dominant performers — high win rate with significant court time |
| Strong | 50-74 | Green | Solid contributors — reliable and consistent |
| Developing | 25-49 | Blue | Building experience — improving with each match |
| Rising | <25 | Grey | New or limited court time — potential yet to be realized |

---

## Deployment

### GoDaddy FTP
```bash
# From Command Prompt in the cdta directory:
deploy.bat
```

**Configuration:** `deploy.env`
```
FTP_HOST=107.180.115.79
FTP_USER=godaddyftp@akilanramesh.com
FTP_PASS=<password>
FTP_REMOTE_DIR=/cdta
```

### Files Excluded from Deploy
- `deploy.bat`, `deploy.ps1`, `deploy.env`
- `audit-partners.js`
- `*-partners-corrected.js`
- `.gitignore`, `DOCS.md`

---

## Data Audit Tool

### `audit-partners.js`

Node.js script that verifies data consistency across all divisions:

```bash
node audit-partners.js
```

**Checks:**
- Player `gamesPlayed` matches actual court appearances in schedule data
- Player `wins` matches actual court wins
- Partner data sums match `gamesPlayed` for each player
- Generates corrected partner files if mismatches found

**Expected output (clean):**
```
DIVISION I AUDIT: 0 gamesPlayed, 0 wins, 0 partner mismatches
DIVISION C AUDIT: 0 gamesPlayed, 0 wins, 0 partner mismatches
DIVISION F AUDIT: 0 gamesPlayed, 0 wins, 0 partner mismatches
```

---

## Weekly Update Workflow

When new week results come in:

1. **Update schedule:** Set `done:true`, add `score` and `courts[]` to each match
2. **Update standings:** Recalculate pts, played, W/L, sets, games for affected teams
3. **Update players:** Increment `gamesPlayed` and `wins` for all players who appeared
4. **Update partners:** Add/increment partner entries for all pairs
5. **Update projections:** Adjust `current`, recalculate `projected`
6. **Update projection breakdown:** Remove completed week fixtures
7. **Run audit:** `node audit-partners.js` to verify consistency
8. **Update header:** Week badge and "Last updated" via Admin → Settings
9. **Deploy:** `deploy.bat`

---

## Design

### Theme
- Background: #f4f6f9
- Surface: #ffffff
- Primary accent: #0d9488 (teal)
- Secondary accent: #2563eb (blue)
- Green: #16a34a, Red: #dc2626, Gold: #b8860b
- Fonts: Bebas Neue (headings), DM Sans (body), DM Mono (numbers)

### Responsive Breakpoints
- **900px:** Tablet — reduced header text, single-column stat grid
- **640px:** Mobile — smaller nav buttons, 2-column stat grid, horizontal scroll for tables
- **400px:** Small phone — further text reduction

### UI Effects
- Login card slide-up animation
- UPCOMING badge pulse
- Stat box hover lift
- Match row hover slide-right
- Win bar gradient animation
- Table row alternating shading
- Focus rings on inputs

---

## Known Limitations

1. **Client-side auth:** Passwords are in JavaScript source code. Anyone can view page source to see credentials. Session can be forged via browser console. This is acceptable for a low-stakes league dashboard.
2. **No real-time updates:** Data is hardcoded in JS files. Requires manual code update + deploy for new results.
3. **Single-page load:** All 4 divisions rendered on page load. No lazy loading.
4. **Div H limited data:** No captain names, phone numbers, surface types, or player gender/age information.
5. **Div C Week 9 partial:** 2 of 5 matches pending (GPTC-B vs CMTA-C, TIRUPUR-A vs PSG-A). Standings not yet updated.
6. **Admin user persistence:** Server-side storage requires PHP. Falls back to localStorage on file:// protocol.

---

## Current Season Status (as of 2026-03-23)

| Division | Weeks Complete | Leader | Points |
|----------|---------------|--------|--------|
| I | 9 of 11 | SATCHIDANANDA | 24 |
| C | 8 of 11 (Wk9 partial) | SNS TENNIS ACADEMY A | 17 |
| F | 9 of 11 | GREEN NEST-A | 18 |
| H | 8 of 11 | SNS-D | 20 |
