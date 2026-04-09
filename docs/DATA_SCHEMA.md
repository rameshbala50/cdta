# Data Schema Reference

Each division's data lives in `data/division-{a..k}.js`. The file declares a set of `const` global variables prefixed with `DIV_X_` (e.g. `DIV_C_PLAYERS`). All globals are loaded into the page via `<script>` tags in `index.html`.

---

## Common structures (all 11 divisions)

### `DIV_X_TEAMS`
Array of team objects.

```javascript
const DIV_C_TEAMS = [
  { short:'SVG-C', full:'SVG TENNIS CLUB - C', captain:'Nagendran K', club:'SVG', players:9 },
  ...
];
```

| Field | Type | Notes |
|---|---|---|
| `short` | string | Custom short code (see below) |
| `full` | string | Full team name as on league.cdta.co.in |
| `captain` | string | Captain's display name |
| `club` | string | Parent club name |
| `players` | number | Roster size |

### `DIV_X_PLAYERS`
Array of player objects.

```javascript
{ name:'Nagendran K', team:'SVG-C', gender:'M', age:45, role:'Captain',
  gamesPlayed:null, wins:null, photo:'photos/div-c/svg-c/nagendran-k.jpg' }
```

| Field | Type | Notes |
|---|---|---|
| `name` | string | Display name (Title Case) |
| `team` | string | Must match a `DIV_X_TEAMS[].short` |
| `gender` | `'M'` \| `'F'` \| `null` | |
| `age` | number \| null | |
| `role` | `'Captain'` \| `'Player'` | |
| `gamesPlayed` | number \| null | **Recomputed at runtime** for C/F/H/I |
| `wins` | number \| null | **Recomputed at runtime** for C/F/H/I |
| `photo` | string | Relative path to JPG/PNG |

> **Important:** `gamesPlayed` and `wins` may be `null` in the file. The render layer for divisions C/F/H/I calls `recomputeDivStats()` which derives them from `DIV_X_SCHEDULE`. Do **not** rely on the file values.

### `DIV_X_STANDINGS`
Pre-computed standings table (one row per team).

```javascript
{ rank:1, short:'PSG-C', full:'PSG SPORTS CLUB - C', pts:24, played:30,
  setsW:48, setsL:18, gamesW:312, gamesL:215 }
```

| Field | Type | Notes |
|---|---|---|
| `rank` | number | 1-based |
| `short` / `full` | string | |
| `pts` | number | League points earned |
| `played` | number | **Courts played** (= max possible pts). Exception: **Div K stores matches**, not courts |
| `setsW` / `setsL` | number | Set wins / losses |
| `gamesW` / `gamesL` | number | Game wins / losses |

### `DIV_X_SCHEDULE`
Week-by-week match data including court-level player pairings — the **authoritative source of truth** for player stats.

```javascript
const DIV_C_SCHEDULE = [
  { week:1, date:'24-25 Jan 2026', done:true, matches:[
    { home:'PROSCHOOL - B', score:'2-1', away:'CMTA - C', venue:'',
      courts:[
        { ct:1, home:'Riyas / Arun Karthik', away:'Manikandan K / NITHISH',
          sets:'6-2, 6-0', win:'home' },
        ...
      ]},
    ...
  ]},
  ...
];
```

| Field | Type | Notes |
|---|---|---|
| `week` | number | 1-indexed |
| `date` | string | Free-text date label |
| `done` | boolean | true if results are in |
| `matches[]` | array | One per fixture |
| `matches[].home` / `away` | string | Full team name |
| `matches[].score` | string | e.g. `'2-1'` (in courts won) |
| `matches[].courts[]` | array | Always 3 entries (3 doubles per match) |
| `courts[].ct` | number | Court number (1, 2, or 3) |
| `courts[].home` / `away` | string | Two player names separated by `/` |
| `courts[].sets` | string | e.g. `'6-2, 6-0'` |
| `courts[].win` | `'home'` \| `'away'` | Which side won the court |

---

## Manual-division-only structures (C, F, H, I)

These four divisions started life as hand-curated data and retain extra fields for projections and key analytics.

### `DIV_X_PROJECTIONS`
Projected final standings (synced with actuals once season ends).

```javascript
{ rank:1, short:'PSG-C', full:'PSG SPORTS CLUB - C', currentPts:24, projectedPts:24, change:0 }
```

### `DIV_X_PROJ_BREAKDOWN`
Per-team projection breakdown for upcoming weeks. **Empty** when the season is complete.

```javascript
{ team:'PSG-C', remainingMatches:[ { week:11, opponent:'TIR-C', expected:2 }, ... ] }
```

### `DIV_X_KEY_PAIRS`
"Most active doubles pairs" — top doubles partnerships by court appearances.

```javascript
{ pair:'Gowtham V / V. Yaswanth', team:'FMP-C', apps:7, wins:null }
```

| Field | Type | Notes |
|---|---|---|
| `pair` | string | `"Player A / Player B"` |
| `team` | string | Their team's short code |
| `apps` | number | Court appearances together |
| `wins` | number \| null | **Recomputed at runtime** |

### `DIV_X_PARTNERS`
Per-player list of partners and counts. Object keyed by player display name.

```javascript
const DIV_C_PARTNERS = {
  'Ganesan S': [['Madhan Kumar P',4],['Shravan Krishnan G',1]],
  'Madhan Kumar P': [['Ganesan S',4],['Keerthan Kumar B',2]],
  ...
};
```

> **Note:** This entire object is **rebuilt at runtime** by `recomputeDivStats()`. The static values in the file are placeholders; only the keys (player names) need to be present so the runtime can match them.

### `DIV_X_TEAM_INFO` (some divisions only)
Extra metadata per team — court venues, contact, etc. Free-form.

---

## Custom team short codes (manual divisions)

Manual divisions use opinionated short codes to fit in the standings table. The codes are **NOT** scraped — they are hand-assigned and used everywhere as the join key (`DIV_X_PLAYERS.team` → `DIV_X_TEAMS.short`).

| Div C | Div F | Div H | Div I |
|---|---|---|---|
| PSG-C, FMP-C, SNS-A, TIR-C, PRO-C, ANU-C, SVG-C, CMT-C, COS-C, GPT-C, LIF-C | GNEST, ACES, CCTA, ALPHA, SNS, MAP, CSA, CASA, TIR, ALV, CMTA | SNS-D, PSG, ANU-B, RSP, GPTC-C, ANNUR, ACTC-B, TIR-B, KGR-D, FALCON, CSA | SATCH, TTOTS, STARS, RAIL, CBE, TGLO, SNS, GNEST, CHAMPS, SAI, KING |

---

## Photo paths

```
photos/div-{a..k}/{team-short-lower}/{player-name-slug}.{jpg|jpeg|png}
```

- `team-short-lower` is the `short` field lowercased (e.g. `svg-c`)
- `player-name-slug` is the player name lowercased with non-alphanumerics replaced by `-`
- Examples:
  - `photos/div-c/svg-c/nagendran-k.jpg`
  - `photos/div-i/stars/akilan-ramesh.jpeg`

If a photo is missing the row's `<img onerror>` hides it gracefully.

---

## "Courts vs matches" gotcha

| Division | What `played` means in `STANDINGS` |
|---|---|
| A, B, C, D, E, F, G, H, I, J | **Courts played** (matches × 3) |
| **K** | **Matches played** (not courts) |

The render functions compensate, so the UI always shows `Played Pts (matches)` correctly. If you ever change a render function, copy the pattern from an existing one.

---

## Adding a new player manually

1. Find the team's short code
2. Append to `DIV_X_PLAYERS` with `gamesPlayed:null, wins:null` (the recomputer will fill them)
3. Add the photo file at the correct path
4. Reload — that's it. No other field needs editing.

## Adding a new match result manually

1. Find the right `DIV_X_SCHEDULE[wk]` entry
2. Add the match object with all 3 courts and `win` set on each
3. Update `DIV_X_STANDINGS` rows for both teams (rank, pts, played, setsW/L, gamesW/L)
4. Reload — player stats and partners auto-recompute
