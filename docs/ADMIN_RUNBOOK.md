# Admin Runbook

Operational procedures for the CDTA 2026 Dashboard. Read top-to-bottom or jump to a specific task.

---

## Weekly refresh (after match week ends)

### For scraped divisions (A, B, D, E, G, J, K)

1. Open Claude Code in the project directory: `cdta\`
2. Run the custom skill: `/load-division X` (replace X with the letter)
3. The skill will:
   - Fetch the division page from `https://league.cdta.co.in/`
   - Parse standings, players, schedules, results
   - Download any new photos to `photos/div-X/`
   - Update `data/division-X.js`
4. Reload the dashboard locally and spot-check the new week
5. Commit + push (see Git workflow below)
6. Deploy (see Deployment below)

### For manual divisions (C, F, H, I)

These have hand-curated extras. After scraping the base data, you also need to:
- Refresh `DIV_X_PROJECTIONS` (if season ongoing)
- Verify `DIV_X_KEY_PAIRS` still match top pairs
- Photos for new players

The recompute happens automatically — `gamesPlayed`, `wins`, and `PARTNERS` are derived from `DIV_X_SCHEDULE` on every page load. You don't need to update those by hand.

---

## Adding a brand-new division

Use the `/load-division` skill — it has a 10-step automated workflow. Located at `~/.claude/skills/load-division.md`.

After running:
1. Add a new nav button entry in `index.html`
2. Add a new init block in `js/app.js` (copy from another scraped division)
3. Add a `<script src="data/division-X.js">` line in `index.html`

---

## Git workflow

The repo lives on Google Drive, so be aware that Drive sync can briefly lock `.git/objects` during heavy commits. If `git add` fails with "Permission denied", retry — it usually clears in seconds.

```bash
cd "c:/My Cloud/Google Drive/Claude/cdta"
git status
git add <files>
git commit -m "Week N: <division> updates"
git push origin main
```

Only `main` branch is in use. Earlier `workver` branch was deleted on 2026-04-09.

---

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for the full FTP / GoDaddy procedure. Short version:

```bat
cd "c:\My Cloud\Google Drive\Claude\cdta"
deploy.bat
```

The script uses credentials from `deploy.env` (not committed). It will FTP all changed files to GoDaddy and report `Deploy complete! N files uploaded.`

**Always deploy explicitly** when the user says "deploy into godaddy". Never auto-deploy.

---

## Troubleshooting

### Player stats showing blank in Players page
Cause: `recomputeDivStats()` did not run, or the player name in `DIV_X_PLAYERS` doesn't match any name in `DIV_X_SCHEDULE` after normalization.

Fix:
1. Open browser console — look for errors at page load
2. Verify the division's init block in `js/app.js` includes `recomputeDivStats(DIV_X_SCHEDULE, DIV_X_PLAYERS, DIV_X_PARTNERS, DIV_X_KEY_PAIRS)`
3. If a specific player is missing, check spelling — normalization strips dots/commas/apostrophes and uppercases. Compare:
   - Schedule: `J.SURESH KUMAR` → normalized `J SURESH KUMAR`
   - Roster: `J. Suresh Kumar` → normalized `J SURESH KUMAR` ✓

### Standings "Played Pts" off by factor of 3
Cause: Render function uses wrong formula. After the courts/matches refactor:
- A–J: `playedPts = s.played` (already in courts)
- K only: `playedPts = s.played * 3` (data is in matches)

### Photos not loading
- Check the path matches `photos/div-{x}/{team-short-lower}/{player-slug}.{ext}`
- Verify the file exists in the deployed directory (FTP into GoDaddy and ls)
- The `<img onerror>` hides the element silently — missing photos won't crash the page

### Most Active Doubles Pairs shows 0 wins
Cause: `KEY_PAIRS` was not passed to `recomputeDivStats()`, or the pair string doesn't normalize to match the schedule.

Fix:
1. Verify the call includes the 4th argument: `recomputeDivStats(..., DIV_X_KEY_PAIRS)`
2. Check the `pair` string in `DIV_X_KEY_PAIRS` matches the schedule names after normalization

### Admin panel data tools fail
Cause: `api/admin-data.php` is unreachable or returned an error.
- Verify the file is deployed to `/cdta/api/admin-data.php` on GoDaddy
- Check browser network tab for the actual error
- Ensure GoDaddy hosting plan supports PHP

### Login fails for a known user
- Open `data/auth.js` and verify the username and password
- Auth is checked client-side; case-sensitive

---

## Backups

`data/division-{c,f,h,i}.js.bak` files were saved before the season-end refresh. Keep them in case stats need to be restored.

For everything else, GitHub is the backup. The repo at https://github.com/rameshbala50/cdta is the source of truth.

---

## Credentials and secrets

| Item | Where stored | Notes |
|---|---|---|
| User logins | `data/auth.js` | Plaintext passwords, client-side. Acceptable for an internal league tool. |
| FTP credentials | `deploy.env` (gitignored) | Server: `107.180.115.79`, user: `godaddyftp@akilanramesh.com` |
| GoDaddy hosting | (out of scope) | Manage via GoDaddy account |

Never commit `deploy.env`. It is in `.gitignore`.

---

## Useful file locations

| File | Purpose |
|---|---|
| `index.html` | Single-page DOM |
| `js/app.js` | All client logic |
| `css/main.css` | Styles |
| `data/auth.js` | User credentials |
| `data/division-{a..k}.js` | Per-division data |
| `data/division-{c,f,h,i}.js.bak` | Pre-refresh backups |
| `api/admin-data.php` | Server-side admin storage |
| `api/fetch-results.php` | Optional CORS proxy for league.cdta.co.in |
| `deploy.bat` / `deploy.ps1` | GoDaddy FTP deploy |
| `download-photos.ps1` | Bulk photo downloader from cdta.co.in |
| `photos/div-{a..k}/` | Local player photos |
