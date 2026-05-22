# Changelog

All notable changes to the CDTA 2026 Dashboard.

Format follows [Keep a Changelog](https://keepachangelog.com/) loosely.
Latest entries first.

---

## 2026-04-09

### Added
- **Documentation suite** — README, Functional Spec, Technical Spec, Data Schema, User Guide, Admin Runbook, Deployment Guide, Changelog (this file)
- **PDF versions** of all 8 docs in `docs/pdf/` (built via Chrome headless from markdown sources). Build script: `docs/pdf/_build_pdfs.py`
- `recomputeDivStats()` helper in `js/app.js` — derives `gamesPlayed`, `wins`, partner counts, and `KEY_PAIRS` wins from `DIV_X_SCHEDULE` at page load. Applied to divisions C, F, H, I.
- Player name normalization — strips dots/commas/apostrophes so `J.SURESH KUMAR` (schedule) matches `J. Suresh Kumar` (roster)

### Changed
- All 11 divisions now display **"Final Standings"** in the section title (season complete)
- **Weeks Remaining** stat box set to **0** for all divisions
- Division K standings render — `playedPts = matches × 3` (K data is in matches, all others in courts)
- `data/division-{c,f,h,i}.js` `KEY_PAIRS.wins` now recomputed at runtime (was `null` after stale-data nullify)

### Fixed
- Standings "Played Pts" showing 90 instead of 30 — render functions for all 11 divisions corrected
- Most Active Doubles Pairs showing `null` wins for Div C, F, I
- Edge headless `--print-to-pdf` was failing silently → switched PDF builder to Chrome headless

### Removed
- `data/division-{c,f,h,i}.js.bak` — pre-refresh backups (Git history is the real backup)
- `data/division-{c,f,i}-partners-corrected.js` — stale one-off fixes, replaced by runtime `recomputeDivStats()`
- `audit-partners.js` — old standalone Node script, replaced by admin Data Tools → Integrity Check
- `DOCS.md` — superseded by new `README.md` + `docs/` folder
- `cdta2026_dashboard_w8.html` and `cdta2026_discussion_w8.md` — obsolete week-8 snapshots

### Repository
- Branch `workver` merged into `main` (fast-forward, 8 commits) and deleted
- All 1,165 player photos pushed to GitHub (photos folder, ~64 MB)
- Single deploy of 1,196 files to GoDaddy

---

## 2026-04-08

### Added
- All 11 divisions (A–K) loaded — 121 teams, ~1,170 players, 510 matches
- 756 player photos downloaded from cdta.co.in to local folders
- Division K (7-team, 7-week shorter season)
- Division J (10-team, 9-week shorter season)
- Photos for divisions A–K downloaded and stored locally

### Changed
- Manual divisions C/F/H/I refreshed from league.cdta.co.in
- Pre-refresh data backups saved as `data/division-{c,f,h,i}.js.bak`

---

## Earlier (pre-changelog)

The project began as a Division I (SVG club) tracker and grew to cover all 11 CDTA divisions over the 2026 season. Highlights from git history:

- **Auto Fix Stats button** added to admin Data Tools
- **Week 10 match data** loaded for all divisions
- **138 data integrity issues** fixed (orphan players, mismatched teams)
- **409 player photos** added in earlier batch
- **Standings promotion/demotion** indicators
- **Data loader** from CDTA league source pages
- **Division H** added
- **Week 9 update** + admin panel + server persistence
- **Test deployment setup** (cdta-test environment)

For commit-level detail see `git log` or https://github.com/rameshbala50/cdta/commits/main
