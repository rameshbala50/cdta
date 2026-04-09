# User Guide

This guide is organized by **role**. Find your role and read its section.

---

## Logging in

1. Open http://akilanramesh.com/cdta/
2. Enter your username and password
3. Click **Login**

Your session is remembered until you click **Logout** or clear browser data.

### Default accounts

| Username | Password | Role | Division | Team |
|---|---|---|---|---|
| `rameshadmin` | `ramesh123` | admin | all | — |
| `ramesh` | `ramesh2026` | svgplayer | I | STARS |
| `monish` | `monish2026` | captain | I | STARS |
| `murugesan` | `murugesan2026` | captain | I | CHAMPS |
| `sethupathy` | `sethupathy2026` | captain | F | ACES |
| `nagendran` | `nagendran2026` | captain | C | SVG-C |

Additional users can be created by an admin in **Admin → User Management**.

---

## Common features (all roles except admin extras)

After login you see a top navigation bar with:

```
Overview │ SVG Players │ Div A │ Div B │ Div C │ ... │ Div K │ [Admin]
```

The **Admin** tab is only visible to the admin role.

### Top-level menus

- **Overview** — leaderboard across the whole league
  - **Leaders** — top scorers / most active players
  - **All Teams** — every team in every division
  - **League Stats** — totals row (teams, players, matches, courts)
- **SVG Players** — special view focused on SVG Tennis Club
  - **Club Performance** — default landing
  - **Players** / **Schedule** / **Results**
- **Div A through Div K** — same 5 sub-tabs each:
  - **Standings** — final ranks
  - **Schedule** — week-by-week fixtures with courts
  - **Results** — completed matches
  - **Players** — roster with stats
  - **Stats** — (C/F/H/I only) — Most Active Doubles Pairs

### How to find a player
1. Click any **Div X** in the nav
2. Click **Players** sub-tab
3. Use the search box, team filter, or gender filter
4. The row shows: photo, name, team, courts played, wins/losses, win %, partners

### How to read the standings
- **Played Pts** — max possible points (= courts played, since 1 pt per court)
- **Pts** — actual league points earned
- **Win %** — `Pts ÷ Played Pts × 100`
- 🏆 = champion, 🥈🥉 = runners-up, ⬇ = relegation zone

### Tennis terms
- **Match** = team-vs-team fixture (e.g., "PSG-C 2-1 CMTA-C")
- **Court** = one of 3 doubles games inside a match
- **1 court won = 1 point**

---

## Role: viewer

Read-only access to all 11 divisions plus Overview and SVG Players. No write actions, no admin tab.

You can:
- Browse standings, schedules, results, players for any division
- Sort and filter
- View player photos and partner pairings

You cannot:
- Edit any data
- See login history or admin tools

---

## Role: svgplayer

Same as viewer, plus you appear in the **SVG Players** Club Performance view as your own profile (if your name matches a player in the SVG club).

---

## Role: captain

Same as viewer. Captains have no special write permissions in the current build — captain accounts exist so future features (e.g., submitting scores, changing lineup) can be wired up without re-doing auth.

If your team's captain is listed in `data/auth.js`, you can log in with the password assigned by the admin.

---

## Role: admin

Sees everything plus the **Admin** tab. Use the admin tab for all operational tasks.

### Admin sub-tabs

| Sub-tab | Use it for |
|---|---|
| **User Management** | Create, edit, or delete user logins. Set role, division, team. |
| **Login History** | Audit who logged in, when, and from where (best-effort) |
| **Usage Log** | Page view counts per user |
| **Activity Log** | Mutations: data tool runs, refresh actions, etc. |
| **Test Plan** | A checklist of manual smoke tests |
| **Data Tools** | Auto Fix Stats, Integrity Check, refresh helpers (one button per division) |
| **Settings** | League name, total weeks, photo base path, etc. |

### Common admin tasks

- **Add a user**: Admin → User Management → + Add User → fill form → Save.
- **Run a data integrity check**: Admin → Data Tools → "Run Integrity Check" (scans for orphan players, mismatched teams, etc.)
- **Auto-fix stats after a refresh**: Admin → Data Tools → "Auto Fix Stats" (re-derives gamesPlayed/wins from schedule data — same logic that runs at page load)
- **Change league settings**: Admin → Settings → edit values → Save.

For full deployment and refresh procedures see [ADMIN_RUNBOOK.md](ADMIN_RUNBOOK.md).
