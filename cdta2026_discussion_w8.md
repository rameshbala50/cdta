# CDTA 2026 – Discussion & Session Log
**Coimbatore District Tennis Association**
*Season: January – April 2026 | Last Updated: 17 Mar 2026 | Week 8 of 11*

---

## 🔖 Quick Reference

| Item | Value |
|------|-------|
| Divisions active | Division I · Division F · Division C |
| Entry point | `index.html` (replaces single-file `cdta2026_dashboard_w8.html`) |
| Login | ramesh / ramesh2026 · monish / monish2026 |

---

## 📊 Division I – Standings (Week 8 of 11)

| # | Team | Short | Pts | P | W | L |
|---|------|-------|-----|---|---|---|
| 1 | SATCHIDANANDA | SATCH | 21 | 7 | 7 | 0 |
| 2 | TenniMaSh Tots | TTOTS | 20 | 7 | 7 | 0 |
| 3 | SREEVATSA STARS | STARS | 14 | 7 | 5 | 2 |
| 4 | S RAILWAY - B | RAIL | 14 | 8 | 6 | 2 |
| 5 | TENNIGLO - D | TGLO | 11 | 7 | 4 | 3 |
| 6 | CBE CLUB - C | CBE | 10 | 7 | 4 | 3 |
| 7 | GREEN NEST - B | GNEST | 8 | 8 | 2 | 6 |
| 8 | SVG Champs | CHAMPS | 8 | 8 | 2 | 6 |
| 9 | SNS-C(AS TENNIS) | SNS | 7 | 7 | 2 | 5 |
| 10 | SAI TENNIS - B | SAI | 4 | 8 | 1 | 7 |
| 11 | Kingsberry Tennis | KING | 3 | 7 | 0 | 7 |

> STARS had a rest week in Week 8.

---

## 📋 Division I – Week 8 Results (14–15 Mar 2026)

| Match | Score | Venue |
|-------|-------|-------|
| GREEN NEST-B vs SATCHIDANANDA | 0–3 SATCH | Green Nest Sports Academy |
| SAI TENNIS-B vs TenniMaSh Tots | 0–3 TTOTS | Sai Tennis Academy |
| S RAILWAY-B vs SNS-C(AS TENNIS) | 3–0 RAIL | S Railway |
| TENNIGLO-D vs Kingsberry Tennis | 2–1 TGLO | The Tenniglo Academy |
| SVG Champs vs CBE CLUB-C | 1–2 CBE | Sreevatsa Club |

---

## 📈 Division I – Projection (Week 8)

*Method: H2H Common-Opponent proportional split*

| # | Team | Now | +Exp | Proj | Min | Max |
|---|------|-----|------|------|-----|-----|
| 1 | SATCHIDANANDA | 21 | +4.4 | ~25.4 | – | 30 |
| 2 | TenniMaSh Tots | 20 | +5.5 | ~25.5 | – | 29 |
| 3 | SREEVATSA STARS | 14 | +7.5 | ~21.5 | 20 | 23 |
| 4 | S RAILWAY - B | 14 | +4.5 | ~18.5 | 17 | 23 |
| 5 | TENNIGLO - D | 11 | +7.0 | ~18.0 | 14 | 20 |
| 6 | CBE CLUB - C | 10 | +6.0 | ~16.0 | 13 | 19 |
| 7 | SNS-C(AS TENNIS) | 7 | +4.0 | ~11.0 | – | 16 |
| 8 | GREEN NEST - B | 8 | +3.0 | ~11.0 | – | 11 |
| 9 | SVG Champs | 8 | +2.6 | ~10.6 | 8 | 11 |
| 10 | SAI TENNIS - B | 4 | +2.6 | ~6.6 | – | 10 |
| 11 | Kingsberry Tennis | 3 | +2.0 | ~5.0 | – | 12 |

> **Title Race:** SATCH lead TTOTS 21–20. Both unbeaten after 7 matches each. 3 matches remaining. Week 11 (04 Apr): TTOTS vs SATCH – winner likely takes Division I 2026.

---

## 📊 Division F – Standings (Week 7 of 11)

| # | Team | Short | Pts | P | W | L |
|---|------|-------|-----|---|---|---|
| 1 | GREEN NEST - A | GNEST | 17 | 7 | 5 | 2 |
| 2 | SREEVATSA ACES | ACES | 14 | 6 | 5 | 1 |
| 3 | SNS TENNIS ACADEMY B | SNS | 14 | 7 | 5 | 2 |
| 4 | ALPHA - B | ALPHA | 13 | 6 | 4 | 2 |
| 5 | CCTA - C | CCTA | 13 | 6 | 4 | 2 |
| 6 | MAPLES - B | MAP | 8 | 6 | 3 | 3 |
| 7 | CASA GRAND ETERNIA 2 | CASA | 8 | 6 | 2 | 4 |
| 8 | CS ACADEMY - B | CSA | 7 | 7 | 2 | 5 |
| 9 | TIRUPUR CITY CLUB | TIR | 7 | 7 | 2 | 5 |
| 10 | ALV ACERS | ALV | 2 | 6 | 0 | 6 |
| 11 | CMTA - B | CMTA | 2 | 6 | 0 | 6 |

---

## 🏆 ACES – Complete Match Record (Wks 1–8)

| Wk | H/A | Opponent | Score |
|----|-----|----------|-------|
| 1 | – | REST | – |
| 2 | H | ALPHA - B | 1-2 L |
| 3 | H | CMTA - B | 3-0 W |
| 4 | A | TIRUPUR CITY CLUB | 2-1 W |
| 5 | A | GREEN NEST - A | 2-1 W |
| 6 | H | ALV ACERS | 3-0 W |
| 7 | A | CASA GRAND ETERNIA 2 | 3-0 W |
| 8 | A | MAPLES - B | 2-1 W |

**Record: 6W–1L, 16 pts** ✅

---

## 🏗️ Dashboard Architecture

### File Structure (as of 17 Mar 2026)

```
cdta/
├── index.html              ← entry point (open this)
├── css/main.css            ← all styles
├── js/app.js               ← all render/logic functions
├── data/
│   ├── division-i.js       ← Div I only (11 teams, 104 players)
│   ├── division-c.js       ← Div C only (11 teams, 97 players)
│   ├── division-f.js       ← Div F only (11 teams, 127 players)
│   └── auth.js             ← USERS, SESSION_KEY
└── cdta2026_dashboard_w8.html  ← original reference (delete when ready)
```

### Data Status

| Division | Weeks done | Court detail | Players |
|----------|-----------|--------------|---------|
| Division I | 8 (all 40 matches) | ✅ Complete | 104 |
| Division F | 8 (all 40 matches) | ✅ Complete | 128 |
| Division C | 8 (all 40 matches + Wk7 LIF vs SNS confirmed) | ✅ Complete | 98 |

### Key JS Constants (standardised naming: `DIV_{X}_{TYPE}`)

| Constant | File | Purpose |
|----------|------|---------|
| `DIV_I_TEAMS` | division-i.js | Div I team directory (11 teams) |
| `DIV_I_STANDINGS` | division-i.js | Div I standings |
| `DIV_I_PROJECTIONS` | division-i.js | Div I projections |
| `DIV_I_PROJ_BREAKDOWN` | division-i.js | Div I per-fixture min/max (was `MINMAX_DATA`) |
| `DIV_I_KEY_PAIRS` | division-i.js | Div I key doubles pairs |
| `DIV_I_PLAYERS` | division-i.js | 104 Div I players only |
| `DIV_I_PARTNERS` | division-i.js | Div I court pair data |
| `DIV_I_TEAM_INFO` | division-i.js | Div I weeks played / WOs given |
| `DIV_I_SCHEDULE` | division-i.js | Div I full schedule |
| `DIV_C_TEAMS` | division-c.js | Div C team directory (11 teams) |
| `DIV_C_PLAYERS` | division-c.js | 97 Div C players |
| `DIV_C_STANDINGS` | division-c.js | Div C standings |
| `DIV_C_PROJECTIONS` | division-c.js | Div C projections |
| `DIV_C_PROJ_BREAKDOWN` | division-c.js | Div C per-fixture breakdown |
| `DIV_C_KEY_PAIRS` | division-c.js | Div C key doubles pairs |
| `DIV_C_SCHEDULE` | division-c.js | Div C full schedule |
| `DIV_C_PARTNERS` | division-c.js | Div C court pair data |
| `DIV_F_TEAMS` | division-f.js | Div F team directory (11 teams) |
| `DIV_F_PLAYERS` | division-f.js | 127 Div F players |
| `DIV_F_STANDINGS` | division-f.js | Div F standings |
| `DIV_F_PROJECTIONS` | division-f.js | Div F projections |
| `DIV_F_PROJ_BREAKDOWN` | division-f.js | Div F per-fixture breakdown |
| `DIV_F_KEY_PAIRS` | division-f.js | Div F key doubles pairs |
| `DIV_F_SCHEDULE` | division-f.js | Div F full schedule |
| `DIV_F_PARTNERS` | division-f.js | Div F court pair data |

---

## 📝 Change Log

### 17 Mar 2026 – Memory & session wrap-up
- **Memory files** trimmed to lean pointers: `.claude/memory/project_cdta.md` and `reference_cdta.md` now just point to this file — full detail stays here, not duplicated
- **Decision:** project MD files belong in the project folder (`cdta/`), not in `.claude` — portable, version-controlled, human-readable
- Session state saved; ready to resume next session from "Open Questions & Pending Data" below

### 17 Mar 2026 – Restructure & fixes
- **Refactored** single HTML → multi-file structure (index.html + css/ + js/ + data/)
- **Renamed** all JS constants to `DIV_{X}_{TYPE}` pattern for consistency
- **Split** player/team data: Div I players (104) and Div C players (97) now in separate files — no more cross-contamination
- **Fixed** double-encoded UTF-8 mojibake across all files (en-dashes, middle dots, emojis)
- **Fixed** JS syntax error that broke login (font-family quotes in single-quoted strings)
- **Fixed** `font-family:monospace` → `font-family:'DM Mono',monospace` consistently
- **Added** Bebas Neue font to sub-section labels

### 16 Mar 2026 – v8
- Division I Week 8 – all 5 matches with full court detail
- STANDINGS, PROJECTIONS, PLAYERS, PARTNERS_DIVI all updated post-Wk8
- Walkover table: KING updated 2→4 WOs (Ct2+Ct3 vs TGLO Wk8)
- Title race blurb: SATCH 21, TTOTS 20, both unbeaten, 3 matches remaining

---

## ⏳ Open Questions & Pending Data

### All Divisions
- [ ] Week 9 results (21–22 Mar 2026)
- [ ] Week 10 results (28–29 Mar 2026)
- [ ] Week 11 / final standings (04–05 Apr 2026)

### Division I
- [ ] Tiebreaker rule confirmation: SATCH vs TTOTS if equal on pts after Wk11
- [ ] DIV_I_PROJ_BREAKDOWN: remove completed Wk8 fixture rows for TGLO/RAIL/CBE/CHAMPS

### Division C & F
- ✅ All Week 8 results entered (17 Mar 2026)

---

## ✏️ When Adding New Results

Edit the relevant `data/division-{i|c|f}.js` file only — no need to touch app.js or index.html.

**Division I (data/division-i.js):**
1. `DIV_I_SCHEDULE` — set `done:true`; fill `courts:[]`
2. `DIV_I_STANDINGS` — update pts/W/L/setsW/setsL/gamesW/gamesL
3. `DIV_I_PROJECTIONS` — update current pts + expected/projected
4. `DIV_I_PROJ_BREAKDOWN` — remove completed fixture rows, adjust remaining
5. `DIV_I_PLAYERS` — update gamesPlayed/wins
6. `DIV_I_TEAM_INFO` — update weeksPlayed
7. `DIV_I_PARTNERS` — add new court pair combos
8. `DIV_I_KEY_PAIRS` — update apps/wins if pair changed

**index.html (static stat boxes + blurbs):**
9. Standings header: matches played, weeks remaining, WOs
10. Results filter `<select>` — add new week option
11. Title race narrative blurb

**Division C (data/division-c.js):** same pattern with `DIV_C_*` constants
**Division F (data/division-f.js):** same pattern with `DIV_F_*` constants

---

## 🎾 Key Facts – Division I (Wk8)

| Fact | Detail |
|------|--------|
| Oldest player | Natarajan, 80 – SVG Champs |
| Youngest | Virat (GNEST) & Damien Stany (KING) – both 10 |
| Female players | 19 of 104 (18%) |
| Female captains | Shyama Kelath (TGLO) · Giulia Bosco (CBE) |
| All-male teams | GREEN NEST-B · S RAILWAY-B |
| Unbeaten | SATCH 7/7 · TTOTS 7/7 |
| STARS home/away | 5W–0L home · 0W–2L away · Rest Wk8 |
| Title race | SATCH 21 · TTOTS 20 – Wk11 decider |
| Total walkovers | 9 courts (GNEST 4 · KING 4 · CHAMPS 1) |

---

*Last updated: 17 Mar 2026 – Week 8 results entered for Div C & Div F · New players added · Standings, projections, players all updated*
