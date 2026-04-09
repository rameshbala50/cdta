# CDTA 2026 Dashboard

Single-page web dashboard for the **Coimbatore District Tennis Association (CDTA) 2026 League** — covering 11 divisions (A through K), 121 teams, ~1,170 players, and 510 matches.

**Live site:** http://akilanramesh.com/cdta/
**Repository:** https://github.com/rameshbala50/cdta
**Source data:** https://league.cdta.co.in/

---

## Quick start

Open `index.html` in any modern browser. Everything runs client-side.

Default login (see [docs/USER_GUIDE.md](docs/USER_GUIDE.md) for full role list):

| Username | Password | Role |
|---|---|---|
| `rameshadmin` | `ramesh123` | admin (sees everything) |
| `ramesh` | `ramesh2026` | svgplayer (Div I, STARS) |

---

## Features

- **11 divisions (A–K)** — standings, schedules, results, player rosters
- **Overview** — consolidated league dashboard with leaders & league totals
- **SVG Players** — special club view for the SVG Tennis Club
- **Player photos** — 1,165 photos stored locally in `photos/div-{a..k}/`
- **Admin panel** — user management, login history, usage logs, data tools, settings, test plan
- **Role-based access** — admin / captain / svgplayer / viewer
- **Auto-recompute** — player stats and partner pair stats are derived from match data on init

---

## Project structure

```
cdta/
├── index.html              # Single-page dashboard
├── js/app.js               # All client logic (~5,200 lines)
├── css/main.css            # Styles
├── data/
│   ├── auth.js             # User credentials
│   └── division-{a..k}.js  # Per-division data (11 files)
├── photos/div-{a..k}/{team-short}/{player-slug}.jpg
├── api/
│   ├── admin-data.php      # Server-side storage for admin panel
│   └── fetch-results.php   # Optional CORS proxy for league.cdta.co.in
├── deploy.bat / deploy.ps1 # GoDaddy FTP deployment
└── docs/                   # Documentation (see below)
```

---

## Documentation

| Doc | Purpose |
|---|---|
| [docs/FUNCTIONAL_SPEC.md](docs/FUNCTIONAL_SPEC.md) | What the app does — features, pages, user flows |
| [docs/TECHNICAL_SPEC.md](docs/TECHNICAL_SPEC.md) | Architecture, key algorithms, data flow |
| [docs/DATA_SCHEMA.md](docs/DATA_SCHEMA.md) | Structure of `data/division-X.js` files |
| [docs/USER_GUIDE.md](docs/USER_GUIDE.md) | What each role can do |
| [docs/ADMIN_RUNBOOK.md](docs/ADMIN_RUNBOOK.md) | Operational tasks: refresh, scrape, troubleshoot |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | GoDaddy FTP deployment |
| [CHANGELOG.md](CHANGELOG.md) | Release notes |

---

## Tennis terminology (important!)

- **Match** = a team-vs-team fixture (e.g., "PSG-A bt ANUSHAM-A 3-0")
- **Court** = one of 3 doubles games inside a match
- **1 court won = 1 point** earned by the team
- Each week, each team plays for **3 points** (3 courts × 1 pt)

In the data, `played` is in **courts** for divisions A–J and in **matches** for division K (the only exception). The render layer compensates.
