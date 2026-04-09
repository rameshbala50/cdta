# Deployment Guide

The CDTA Dashboard is deployed as static files to **GoDaddy shared hosting** via FTP. There is no build step.

---

## Prerequisites

- Windows machine (deploy scripts are `.bat` and `.ps1`)
- The `deploy.env` file in the project root with FTP credentials (see below)
- Network access to the GoDaddy FTP server

---

## Environment file (`deploy.env`)

This file is **gitignored** and must be created locally. Format:

```
FTP_HOST=107.180.115.79
FTP_USER=godaddyftp@akilanramesh.com
FTP_PASS=<your_password>
FTP_REMOTE_DIR=/cdta
```

A separate `deploy-test.env` exists for the test environment (`/cdta-test` or `/cdta-workver` path).

---

## Deploy to production

### Option 1 — Command Prompt
```bat
cd "c:\My Cloud\Google Drive\Claude\cdta"
deploy.bat
```

### Option 2 — PowerShell
```powershell
cd "c:\My Cloud\Google Drive\Claude\cdta"
.\deploy.ps1
```

### Dry run (PowerShell only)
```powershell
.\deploy.ps1 -DryRun
```

---

## What the deploy script does

1. **Cache-bust** — Updates `?v=<timestamp>` query strings in `index.html` so browsers re-fetch JS/CSS
2. **Read credentials** from `deploy.env`
3. **Walk the project tree** — collect every file except the exclusion list
4. **Create directories** on the FTP server (one level at a time, ignoring "already exists" errors)
5. **Upload files** one by one over FTP (passive mode, binary)
6. **Report** OK / FAILED counts

### Excluded files
- `deploy.bat`, `deploy.ps1`, `deploy.env`
- `cdta2026_dashboard_w8.html`, `cdta2026_discussion_w8.md` (legacy)
- `.gitignore`
- Anything starting with `.` (e.g., `.git/`)

> **Note:** `.bak` files and `docs/` are **not** in the exclusion list, so they will be uploaded too. Add them to the exclusion list in `deploy.ps1` if you want to keep the production server clean.

---

## Deploy to test environment

```bat
deploy-test.bat
```

This uses `deploy-test.env` and points to a separate folder on the same GoDaddy account so you can preview changes without touching production.

---

## Verifying the deploy

1. Open http://akilanramesh.com/cdta/ in an incognito window (avoids cache)
2. Hard refresh (Ctrl+Shift+R)
3. Login as `rameshadmin / ramesh123`
4. Spot-check:
   - Overview totals
   - Each division's standings
   - Players page for one division (photos load, stats populated)
   - Admin panel opens

---

## Rollback

If a deploy breaks the site:

1. **Quick rollback** — `git checkout <last_good_commit>` then `deploy.bat`
2. **Or** manually FTP an older snapshot from your local Git history

There is no automated rollback. The `.bak` files in `data/` only cover division data, not full site state.

---

## Photos deployment

Photos live in `photos/div-{a..k}/` and are deployed as part of the normal `deploy.bat` run (1,165 files, ~64 MB). The first deploy after a season refresh takes ~10–20 minutes depending on FTP throughput.

To skip photo upload (much faster), temporarily move the `photos/` folder out of the project before running deploy, then move it back.

---

## Cache busting

`deploy.ps1` rewrites `?v=<timestamp>` in `index.html` on every run. The pattern is:

```html
<script src="js/app.js?v=202604091530"></script>
```

Each deploy bumps the timestamp so browsers fetch the new file. If you ever see stale JS, hard-refresh once — subsequent loads will pick up the new version.

---

## Server-side requirements

GoDaddy shared hosting plan must support:
- **PHP** (for `api/admin-data.php` and `api/fetch-results.php`)
- **FTP write access**
- **Static file serving** (default)

No database, no Node, no Python.

---

## Troubleshooting

### "deploy.env not found"
Create the file with your FTP credentials (see format above).

### Random "Permission denied" during deploy
GoDaddy occasionally throttles FTP. Re-run the script — it will pick up where it left off (failed files retry).

### "FAILED: Connection refused"
Check VPN / firewall. The script uses passive FTP on port 21.

### Files uploaded but site shows old content
Hard refresh (Ctrl+Shift+R). The cache-bust query string handles JS/CSS but **not** `index.html` itself, which the browser may still cache aggressively.

### Photos missing after deploy
Check the deploy log for "FAILED" entries on `photos/...`. Re-run `deploy.bat` to retry just the failed files (it overwrites existing OK files too — slower but reliable).
