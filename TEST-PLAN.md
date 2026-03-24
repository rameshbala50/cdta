# CDTA 2026 Dashboard -- Comprehensive Test Plan

**Application:** CDTA 2026 League Dashboard
**URL:** http://akilanramesh.com/cdta/
**Version:** 2.0 (Week 9)
**Date:** 24 Mar 2026
**Author:** Test Engineering

---

## 1. Test Summary

### Scope
This test plan covers the full feature set of the CDTA 2026 League Dashboard -- a single-page web application providing standings, projections, match results, player statistics, and administration for the Coimbatore District Tennis Association 2026 season across 4 divisions (I, C, F, H) with 44 teams total.

### Test Environment
- **Browser Targets:** Chrome (latest), Edge, Safari, Firefox, Mobile Chrome, Mobile Safari
- **Platforms:** Windows 11 Desktop, macOS, Android Mobile, iOS Mobile
- **Backend:** PHP 8.x on GoDaddy shared hosting (admin API)
- **Protocol:** HTTPS (http://akilanramesh.com/cdta/) and file:// (local development)
- **Data State:** Season Week 9 of 11 (Div I/F: 9 weeks complete, Div C: 8+partial, Div H: 8 weeks complete)

### Test Users

| Username | Password | Role | Division | Team |
|----------|----------|------|----------|------|
| rameshadmin | ramesh123 | admin | all | -- |
| ramesh | ramesh2026 | svgplayer | I | STARS |
| monish | monish2026 | captain | I | STARS |
| murugesan | murugesan2026 | captain | I | CHAMPS |
| sethupathy | sethupathy2026 | captain | F | ACES |
| nagendran | nagendran2026 | captain | C | SVG-C |

### Priority Key
- **High** -- Critical path; blocks core functionality if broken
- **Medium** -- Important feature; degraded experience if broken
- **Low** -- Edge case or cosmetic; minor impact

---

## 2. Test Cases by Feature Area

---

### 2.1 Authentication (Login / Logout)

| ID | Test Case | Steps | Expected Result | Priority |
|----|-----------|-------|-----------------|----------|
| AUTH-001 | Admin login | Enter `rameshadmin` / `ramesh123`, click Sign In | Login overlay hides, "Ramesh Admin" shown in header, all division tabs visible including Div H and Admin | High |
| AUTH-002 | Captain login (Div I) | Enter `monish` / `monish2026`, click Sign In | Login overlay hides, "Monish" shown, auto-switches to Division I standings, only Div I + SVG Players tabs visible | High |
| AUTH-003 | Captain login (Div F) | Enter `sethupathy` / `sethupathy2026`, click Sign In | Login overlay hides, auto-switches to Division F, only Div F + SVG Players tabs visible | High |
| AUTH-004 | Captain login (Div C) | Enter `nagendran` / `nagendran2026`, click Sign In | Login overlay hides, auto-switches to Division C, only Div C + SVG Players tabs visible | High |
| AUTH-005 | SVG Player login | Enter `ramesh` / `ramesh2026`, click Sign In | Login overlay hides, "Ramesh" shown, Div I + SVG Players tabs visible, no Admin or Div H tab | High |
| AUTH-006 | Captain login (Div I - CHAMPS) | Enter `murugesan` / `murugesan2026`, click Sign In | Login overlay hides, auto-switches to Division I, only Div I + SVG Players visible | Medium |
| AUTH-007 | Wrong password | Enter `rameshadmin` / `wrongpass`, click Sign In | Error message "Incorrect username or password." displayed, password field cleared and focused | High |
| AUTH-008 | Wrong username | Enter `nonexistent` / `anypass`, click Sign In | Error message "Incorrect username or password." displayed | High |
| AUTH-009 | Empty credentials | Click Sign In with empty fields | Error message displayed | Medium |
| AUTH-010 | Case-insensitive username | Enter `RameshAdmin` / `ramesh123`, click Sign In | Login succeeds (username is lowercased) | Medium |
| AUTH-011 | Case-sensitive password | Enter `rameshadmin` / `Ramesh123`, click Sign In | Login fails -- password is case-sensitive | Medium |
| AUTH-012 | Session persistence on refresh | Login as admin, refresh page (F5) | User remains logged in, login overlay stays hidden, same page state preserved | High |
| AUTH-013 | Logout functionality | Login as any user, click "Sign Out" button | Login overlay shown, username/password fields cleared, localStorage session removed | High |
| AUTH-014 | Logout from admin page | Login as admin, navigate to Admin panel, click Sign Out | Returns to login overlay, Division I is active (not admin page) | Medium |
| AUTH-015 | Logout from Div H | Login as admin, navigate to Div H, click Sign Out | Returns to login overlay, switches to Division I (since Div H is hidden for non-admin) | Medium |
| AUTH-016 | Login event logged | Login as any user | Login entry appears in Login History with timestamp, username, "login" action, device info | Medium |
| AUTH-017 | Logout event logged | Logout from any session | Logout entry appears in Login History with timestamp and "logout" action | Medium |
| AUTH-018 | IP address captured | Login on live server | Login history entry includes IP address (fetched from ipify API) | Low |

---

### 2.2 Role-Based Access Control

| ID | Test Case | Steps | Expected Result | Priority |
|----|-----------|-------|-----------------|----------|
| RBAC-001 | Admin sees all divisions | Login as `rameshadmin` | Division bar shows: SVG Players, Division I, Division F, Division C, Division H, Admin | High |
| RBAC-002 | Admin sees Div H button | Login as `rameshadmin` | `btn-div-h` element is visible (display not "none") | High |
| RBAC-003 | Admin sees Admin button | Login as `rameshadmin` | `btn-admin` element is visible | High |
| RBAC-004 | Admin sees SVG Rank tab | Login as admin, switch to SVG Players | Three sub-tabs visible: Club Performance, Players, Rank | High |
| RBAC-005 | Captain sees own division only | Login as `monish` (Div I captain) | Only Division I tab and SVG Players tab shown; Div C, Div F, Div H, Admin hidden | High |
| RBAC-006 | Captain sees SVG Players | Login as `sethupathy` (Div F captain) | SVG Players tab is visible alongside Division F | High |
| RBAC-007 | Captain cannot see Rank tab | Login as `monish`, switch to SVG Players | Only Club Performance and Players sub-tabs visible; Rank button hidden | High |
| RBAC-008 | SVG Player sees own div + SVG | Login as `ramesh` (svgplayer, Div I) | Division I and SVG Players tabs visible; no Div C, F, H, Admin | Medium |
| RBAC-009 | SVG Player cannot see Rank tab | Login as `ramesh`, switch to SVG Players | Rank sub-tab button hidden | Medium |
| RBAC-010 | Viewer restrictions | Add a viewer user via admin, login as viewer | Only own division tab visible; no SVG Players, no Admin, no Div H | Medium |
| RBAC-011 | Div H restricted to admin | Login as `monish` (captain) | Division H button is not visible | High |
| RBAC-012 | Div H restricted - DIV_H_USERS | Verify `DIV_H_USERS` array contains only `rameshadmin` | Only admin username in the allow-list | Medium |
| RBAC-013 | Admin tab restricted | Login as `ramesh` (svgplayer) | Admin button (`btn-admin`) display is "none" | High |

---

### 2.3 Navigation

| ID | Test Case | Steps | Expected Result | Priority |
|----|-----------|-------|-----------------|----------|
| NAV-001 | Division I sub-pages | Login as admin, click Division I, then click each nav button: Standings, Projection, Teams, Schedule, Results, Players, Stats | Each page renders correctly, only one page active at a time, nav button highlighted | High |
| NAV-002 | Division C sub-pages | Switch to Division C, click each nav button | Each Div C page (page-divc-*) renders correctly with Division C data | High |
| NAV-003 | Division F sub-pages | Switch to Division F, click each nav button | Each Div F page (page-divf-*) renders correctly with Division F data | High |
| NAV-004 | Division H sub-pages | Login as admin, switch to Division H, click each nav button | Each Div H page (page-divh-*) renders correctly with Division H data | High |
| NAV-005 | SVG Players tabs | Switch to SVG Players, click Club Performance, Players | Sub-tab content toggles correctly; nav bar shows SVG-specific tabs | High |
| NAV-006 | SVG Players Rank tab (admin) | Login as admin, switch to SVG Players, click Rank | Rank tab content renders with 4-tier player rankings | Medium |
| NAV-007 | Division switcher hides SVG nav | Switch from SVG Players to any division | `nav-svg` hidden, `nav-divs` shown, Standings page active | Medium |
| NAV-008 | Admin panel hides all navs | Switch to Admin | Both `nav-divs` and `nav-svg` are hidden, admin page shown with sub-nav tabs | Medium |
| NAV-009 | Admin sub-tabs | Click each admin sub-tab: User Management, Login History, Usage Log, Data Tools, Settings | Correct panel shown, others hidden | Medium |
| NAV-010 | Hash-based page state | Navigate to Division F > Players, copy URL hash | URL contains `#f/players` | Medium |
| NAV-011 | Restore page from hash | Load page with `#c/schedule` in URL | App restores to Division C > Schedule page | Medium |
| NAV-012 | Scroll to top on page switch | Click any nav button while scrolled down | Window scrolls to top (0, 0) | Low |
| NAV-013 | Division switch resets to Standings | Switch from Div I (on Players page) to Div C | Div C opens on Standings page, not Players | Medium |

---

### 2.4 Division I

| ID | Test Case | Steps | Expected Result | Priority |
|----|-----------|-------|-----------------|----------|
| DIVI-001 | Standings table renders | Navigate to Div I > Standings | Table has 11 rows, columns: #, Team, Pts, Courts, Sets Won, Sets Lost, Games Won, Games Lost | High |
| DIVI-002 | Standings stat grid | View Div I standings page | Stat boxes show: 11 Teams, 104 Players, 85M/19F, 3 Weeks Remaining, 10 Walk-overs | High |
| DIVI-003 | Standings table sort | Click each column header in standings table | Rows re-sort by that column, ascending/descending toggle | Medium |
| DIVI-004 | Standings top-3 highlight | View standings table | Ranks 1-3 have `top3` CSS class on rank cell | Low |
| DIVI-005 | Projection table renders | Navigate to Div I > Projection | Table sorted by projected total descending, shows rank, team, played pts, current, +expected, projected, min, max, bar | High |
| DIVI-006 | Projection STARS highlight | View projection table | STARS row has yellow background and "YOUR TEAM" badge | Medium |
| DIVI-007 | Projection breakdown | Scroll below projection table | Min/Max breakdown cards render for each team with per-fixture rows (Wk, Opponent, Min, Proj, Max, Assumption) | Medium |
| DIVI-008 | Title race narrative | View projection page | Title race box shows SATCHIDANANDA lead 24-23 over TenniMaSh Tots, Week 11 showdown | Low |
| DIVI-009 | Schedule renders all weeks | Navigate to Div I > Schedule | 11 week blocks shown with dates, home/away teams, scores or TBD | High |
| DIVI-010 | Schedule UPCOMING badge | View schedule | Unplayed weeks show pulsing "UPCOMING" badge | Medium |
| DIVI-011 | Schedule title matches | View schedule | Title/key matches marked with star icon | Low |
| DIVI-012 | Results default view | Navigate to Div I > Results | All completed weeks shown with match cards, court-level detail (3 courts per match) | High |
| DIVI-013 | Results filter by week | Select "Week 5" in week filter dropdown | Only Week 5 matches displayed | High |
| DIVI-014 | Results filter by team | Select a team from team filter dropdown | Only matches involving that team shown, team name highlighted | High |
| DIVI-015 | Results combined filter | Select Week 3 and a specific team | Only that team's Week 3 match shown | Medium |
| DIVI-016 | Results court detail | View any match result | Court rows show: home pair, set scores (e.g., "6-3, 4-6, 10-8"), away pair, winner highlighted in bold | High |
| DIVI-017 | Results walkover badge | Find a walkover match | Court row shows "W/O" badge in red | Medium |
| DIVI-018 | Players table renders | Navigate to Div I > Players | Table shows all 104 players with columns: Name, Team, Gender, Played, Wins/Loss, Win%, Partners | High |
| DIVI-019 | Players search | Type "Ram" in search field | Table filters to players with "Ram" in name | High |
| DIVI-020 | Players team filter | Select a team from dropdown | Table shows only that team's players | High |
| DIVI-021 | Players gender filter | Select "Female" from gender dropdown | Table shows only female players | Medium |
| DIVI-022 | Players sort by name | Click "Player Name" column header | Players sorted alphabetically A-Z, click again for Z-A | Medium |
| DIVI-023 | Players sort by played | Click "Played" column header | Players sorted by games played descending, toggle on click | Medium |
| DIVI-024 | Players sort by win% | Click "Win %" column header | Players sorted by win percentage descending | Medium |
| DIVI-025 | Players totals summary | View players page with default filters | Totals row shows: team count, player count, courts played/expected, wins, losses, W/O slots, weeks played, win rate | Medium |
| DIVI-026 | Players partner data | Check any player with court appearances | Partners column shows partner names with appearance counts, e.g., "Name (3)" | Medium |
| DIVI-027 | Players captain badge | Find a team captain in player list | Captain has gold "C" pill badge next to name | Low |
| DIVI-028 | Players count display | Apply any filter | "Showing X of 104 players" text updates correctly | Low |
| DIVI-029 | Stats page renders | Navigate to Div I > Stats | Demographics table and walkover summary table displayed | High |
| DIVI-030 | Stats key pairs table | View Stats page | Key pairs table shows pair names, team, appearances, wins, win rate with bar chart | High |
| DIVI-031 | Teams directory | Navigate to Div I > Teams | 11 teams listed A-Z with: full name, short code, captain (with phone), club/venue, surface (Clay/Hard), player count | High |
| DIVI-032 | Teams shared club badge | View teams with same club | Club column shows count badge (e.g., "2 TEAMS") for shared clubs | Low |

---

### 2.5 Division C

| ID | Test Case | Steps | Expected Result | Priority |
|----|-----------|-------|-----------------|----------|
| DIVC-001 | Standings renders | Navigate to Div C > Standings | 11 teams displayed, stat grid: 11 Teams, 100 Players, 96M/4F, 3 Weeks Remaining, 8 Walk-overs | High |
| DIVC-002 | Standings sort | Click column headers in Div C standings | Rows re-sort correctly | Medium |
| DIVC-003 | Projection renders | Navigate to Div C > Projection | Projection table with H2H data, title race narrative (SNS A leads 17 pts) | High |
| DIVC-004 | Projection breakdown | Scroll below projection | Per-fixture breakdown cards for title contenders | Medium |
| DIVC-005 | Schedule renders | Navigate to Div C > Schedule | 11 weeks shown, completed weeks with scores, upcoming with TBD | High |
| DIVC-006 | Results with filters | Navigate to Div C > Results, use week and team filters | Results filter correctly, court detail shown for completed matches | High |
| DIVC-007 | Players with sort/filter | Navigate to Div C > Players, test search, team filter, gender filter, column sort | All filters and sorting work correctly for Div C player data | High |
| DIVC-008 | Players partner data | Check Div C players for partner information | Partners column displays correctly using DIV_C_PARTNERS data | Medium |
| DIVC-009 | Stats and key pairs | Navigate to Div C > Stats | Demographics, walkover summary (LIF x3, FMP x1, ANU x1), and key pairs table rendered | Medium |
| DIVC-010 | Teams directory | Navigate to Div C > Teams | 11 Div C teams listed with captain, club, surface, player count | Medium |
| DIVC-011 | Week 9 data present | Check schedule and results for Week 9 | Week 9 results available (partial: 2 of 5 matches may be pending) | Medium |

---

### 2.6 Division F

| ID | Test Case | Steps | Expected Result | Priority |
|----|-----------|-------|-----------------|----------|
| DIVF-001 | Standings renders | Navigate to Div F > Standings | 11 teams, stat grid: 11 Teams, 105 Players, 97M/8F, 3 Remaining, 3 Walk-overs | High |
| DIVF-002 | Standings ACES highlight | View Div F standings | ACES row highlighted with yellow background and "SVG CLUB" badge | Medium |
| DIVF-003 | Projection renders | Navigate to Div F > Projection | Projection table, title race narrative (GREEN NEST-A leads 18 pts, 4-way race) | High |
| DIVF-004 | Projection breakdown | Scroll below projection | Top 5 teams have per-fixture breakdown cards with Proj and Max columns | Medium |
| DIVF-005 | Schedule renders | Navigate to Div F > Schedule | All 11 weeks rendered, Week 9 complete | High |
| DIVF-006 | Results with filters | Navigate to Div F > Results, test filters | Week filter (1-9) and team filter work correctly | High |
| DIVF-007 | Players with sort/filter | Navigate to Div F > Players, test all controls | Search, team filter, gender filter, column sorting all functional | High |
| DIVF-008 | Stats and key pairs | Navigate to Div F > Stats | League overview, key pairs, fast facts section, walkover summary | Medium |
| DIVF-009 | Teams directory | Navigate to Div F > Teams | 11 Div F teams listed with full details | Medium |
| DIVF-010 | Week 9 complete data | Check Div F results for Week 9 | All 5 matches of Week 9 have scores and court detail | Medium |

---

### 2.7 Division H

| ID | Test Case | Steps | Expected Result | Priority |
|----|-----------|-------|-----------------|----------|
| DIVH-001 | Access restricted to admin | Login as captain, verify Div H button hidden | Div H button not visible for non-admin users | High |
| DIVH-002 | Standings renders | Login as admin, navigate to Div H > Standings | 11 teams, stat grid: 11 Teams, player count shown, 3 Remaining, 3 Walk-overs | High |
| DIVH-003 | Projection renders | Navigate to Div H > Projection | Projection table, title race (SNS-D 20 pts, PSG Tech 18 pts) | High |
| DIVH-004 | Schedule renders | Navigate to Div H > Schedule | All 11 weeks, 8 weeks complete | Medium |
| DIVH-005 | Results with filters | Navigate to Div H > Results | Week filter (1-8 complete) and team filter functional | Medium |
| DIVH-006 | Players roster | Navigate to Div H > Players | Player table renders (no gender column -- Div H lacks gender data) | Medium |
| DIVH-007 | Players sort | Click Played, Wins, Win% column headers in Div H players | Sorting works correctly | Medium |
| DIVH-008 | Stats page | Navigate to Div H > Stats | League overview, walkover summary (TIRUPUR x1, FALCON x1, PSG x1), key pairs table | Medium |
| DIVH-009 | Teams directory limited | Navigate to Div H > Teams | Teams listed with short code, full name, club -- no captain phone/surface data (known limitation) | Medium |
| DIVH-010 | Week 8 data complete | Check Div H results | 8 weeks of results with court-level detail | Low |

---

### 2.8 SVG Players

| ID | Test Case | Steps | Expected Result | Priority |
|----|-----------|-------|-----------------|----------|
| SVG-001 | Club Performance default | Switch to SVG Players | Club Performance tab active by default, performance content rendered | High |
| SVG-002 | Performance dashboard content | View Club Performance tab | Overview cards for 4 SVG teams (STARS, CHAMPS in Div I; SVG-C in Div C; ACES in Div F), team narratives, performance breakdown table, projected scores/positions | High |
| SVG-003 | Players tab - merged table | Click Players sub-tab | Table shows all SVG players merged from 4 teams across 3 divisions, columns: Name, Division, Team, Gender, Played, Wins/Loss, Win%, Partners | High |
| SVG-004 | Players tab - ALL filter | Click "ALL" button | All SVG players shown (37 players across 4 teams) | High |
| SVG-005 | Players tab - STARS filter | Click "SREEVATSA STARS" button | Only STARS players shown, button styled as active | High |
| SVG-006 | Players tab - CHAMPS filter | Click "SVG CHAMPS" button | Only CHAMPS players shown | Medium |
| SVG-007 | Players tab - SVG-C filter | Click "SREEVATSA BLUES" button | Only SVG-C (Div C) players shown | Medium |
| SVG-008 | Players tab - ACES filter | Click "SREEVATSA ACES" button | Only ACES (Div F) players shown | Medium |
| SVG-009 | Players tab - totals | View SVG Players tab | Totals summary row shows aggregate stats for filtered players | Medium |
| SVG-010 | Rank tab visible for admin | Login as admin, switch to SVG Players | Rank sub-tab button visible | High |
| SVG-011 | Rank tab hidden for non-admin | Login as captain, switch to SVG Players | Rank sub-tab button hidden (display:none) | High |
| SVG-012 | Rank tab content | Login as admin, click Rank tab | 4-tier ranking: Elite (75+, gold), Strong (50-74, green), Developing (25-49, blue), Rising (<25, grey) | Medium |
| SVG-013 | Rank rating formula | Verify player ratings | Rating = Win% x min(gamesPlayed/3, 1.0); players with <3 games get discounted; 0-game players rated -1 (unranked) | Medium |
| SVG-014 | Nav bar changes for SVG | Switch to SVG Players from any division | `nav-divs` hidden, `nav-svg` shown with Club Performance / Players / Rank buttons | Medium |

---

### 2.9 Admin Panel

| ID | Test Case | Steps | Expected Result | Priority |
|----|-----------|-------|-----------------|----------|
| ADM-001 | Admin panel access | Login as admin, click Admin button | Admin page shown with User Management active, both nav bars hidden | High |
| ADM-002 | Admin hidden for non-admin | Login as captain | Admin button not visible in division bar | High |
| ADM-003 | User Management - list users | View User Management tab | Table lists all 6 default users with Username, Display Name, Role, Division, Team, Actions columns | High |
| ADM-004 | Add new user | Fill in username/password/name/role/division/team, click "+ Add" | New user appears in table, can login with new credentials | High |
| ADM-005 | Add user - division dropdown | Select a division in Add User form | Team dropdown populates with teams from that division | Medium |
| ADM-006 | Add user - duplicate username | Try adding user with existing username | Error message shown, user not added | Medium |
| ADM-007 | Edit user | Click edit action on existing user | User details editable, changes saved | Medium |
| ADM-008 | Delete user | Click delete action on a non-default user | Confirmation prompt, user removed from table and USERS object | Medium |
| ADM-009 | Reset password | Click reset password action | Password updated, confirmation shown | Medium |
| ADM-010 | Change role | Change a user's role via admin action | Role updates, access permissions change on next login | Medium |
| ADM-011 | Login History tab | Click "Login History" sub-tab | Table shows login/logout events with: Time, User, Action, IP, Device, Browser/OS, Details | High |
| ADM-012 | Login History filter | Select a specific user in login history filter | Only that user's login events shown | Medium |
| ADM-013 | Login History device info | Check any login entry | Device column shows Desktop/Mobile/Tablet; Browser column shows Chrome/Edge/Safari/Firefox + OS | Medium |
| ADM-014 | Clear login history | Click "Clear History" button | All login entries removed (with confirmation) | Low |
| ADM-015 | Usage Log tab | Click "Usage Log" sub-tab | Table shows page views and actions with: Time, User, Type, Event, Page | High |
| ADM-016 | Usage Log stats summary | View Usage Log tab | Stats summary shows aggregate counts (total events, page views, actions) | Medium |
| ADM-017 | Usage Log filter | Select "Page Views" or "Actions" in filter | Log entries filtered by type | Medium |
| ADM-018 | Clear usage log | Click "Clear Log" button | All usage entries removed | Low |
| ADM-019 | Data Tools - Integrity Check | Click "Run Check" in Data Tools | Integrity check runs, compares player gamesPlayed/wins against court-level results, displays pass/fail results per division | High |
| ADM-020 | Data Tools - Season Summary | View Data Tools tab | Season summary displays current status for all divisions | Medium |
| ADM-021 | Data Tools - Export Standings CSV | Click "Download Standings (.csv)" | CSV file downloads with standings data for all divisions | Medium |
| ADM-022 | Data Tools - Export Players CSV | Click "Download Players (.csv)" | CSV file downloads with player roster data | Medium |
| ADM-023 | Data Tools - Export Results CSV | Click "Download Results (.csv)" | CSV file downloads with match results and court data | Medium |
| ADM-024 | Data Tools - Local Storage | View Data Tools tab | localStorage info section shows storage keys and sizes | Low |
| ADM-025 | Settings - Week Badge | Change "Week Badge" text and click Apply | Header badge text updates immediately | Medium |
| ADM-026 | Settings - Last Updated | Change "Last Updated" text and click Apply | Header "Last updated" text changes | Medium |
| ADM-027 | Settings - persistence | Change settings, refresh page | Settings persist (loaded from server on live, localStorage locally) | Medium |
| ADM-028 | Settings - App Info | View Settings tab | App info section shows version, divisions, architecture, hosting info | Low |

---

### 2.10 Server Persistence

| ID | Test Case | Steps | Expected Result | Priority |
|----|-----------|-------|-----------------|----------|
| SRV-001 | Login history saved to server | Login on live server, check `admin-data/login.json` | Login entry appended with timestamp, user, action, IP, device info | High |
| SRV-002 | Login history append mode | Login multiple times | New entries prepended to array, capped at 500 entries | Medium |
| SRV-003 | Usage log saved to server | Navigate between pages on live server | Usage entries appended to `admin-data/usage.json`, capped at 1000 entries | High |
| SRV-004 | User changes saved to server | Add a new user via Admin panel on live server | User data saved to `admin-data/users.json` | High |
| SRV-005 | Users loaded from server on startup | Add user on Device A, load site on Device B | New user available for login on Device B | High |
| SRV-006 | Settings saved to server | Change settings on live server | Settings saved to `admin-data/settings.json` | Medium |
| SRV-007 | localStorage fallback | Open app via file:// protocol | Data saved to localStorage when server API unavailable (`_IS_SERVER` = false) | Medium |
| SRV-008 | API auth required for users | Send `load` request for `type=users` without auth | API returns `{"ok":false,"error":"Authentication required"}` | Medium |
| SRV-009 | API auth not required for login append | Send `save` request for `type=login` with `append:true` | API accepts without auth, appends entry | Medium |
| SRV-010 | API clear requires auth | Send `clear` request without auth | API returns error, data not deleted | Medium |
| SRV-011 | API invalid type rejected | Send `load` request with `type=invalid` | API returns `{"ok":false,"error":"Invalid type"}` | Low |

---

### 2.11 Cache Busting

| ID | Test Case | Steps | Expected Result | Priority |
|----|-----------|-------|-----------------|----------|
| CACHE-001 | CSS version param | Inspect `<link>` tag for `main.css` | URL includes `?v=` parameter (e.g., `?v=202603240912`) | High |
| CACHE-002 | JS app.js version param | Inspect `<script>` tag for `app.js` | URL includes `?v=` parameter matching CSS version | High |
| CACHE-003 | Data file version params | Inspect `<script>` tags for all data files (auth.js, division-i.js, division-c.js, division-f.js, division-h.js) | All include `?v=` parameter | High |
| CACHE-004 | No-cache meta headers | Inspect `<meta>` tags in `<head>` | `Cache-Control: no-cache, no-store, must-revalidate`, `Pragma: no-cache`, `Expires: 0` all present | Medium |
| CACHE-005 | Version consistency | Compare `?v=` param across all 6 script/link tags | All version strings are identical | Medium |
| CACHE-006 | Version increments on deploy | After updating code, check version param | Version param changes (preventing stale cache) | Low |

---

### 2.12 Responsive / UI

| ID | Test Case | Steps | Expected Result | Priority |
|----|-----------|-------|-----------------|----------|
| UI-001 | Desktop layout (>900px) | View at 1200px width | Full header, two-row stat grid, full tables visible | High |
| UI-002 | Tablet layout (640-900px) | Resize to 800px | Reduced header text, single-column stat grid | Medium |
| UI-003 | Mobile layout (<640px) | Resize to 375px or view on mobile | Smaller nav buttons, 2-column stat grid, tables scroll horizontally | High |
| UI-004 | Small phone (<400px) | Resize to 360px | Further text reduction, all content accessible via scroll | Medium |
| UI-005 | Table horizontal scroll | View standings table on mobile | Table scrollable within container, no layout break | High |
| UI-006 | Standings table sort UI | Click a column header | Arrow indicator shows sort direction (asc/desc class toggled) | Medium |
| UI-007 | Login card animation | Load the page (logged out) | Login card slides up with CSS animation | Low |
| UI-008 | UPCOMING badge pulse | View schedule page | Upcoming week badge has CSS pulse animation | Low |
| UI-009 | Stat box hover lift | Hover over a stat box | Box lifts with CSS transition | Low |
| UI-010 | Match row hover effect | Hover over a match in schedule | Row slides slightly right | Low |
| UI-011 | Win bar gradient | View player win% bars | Gradient animation on win percentage bars | Low |
| UI-012 | Fonts loaded | Inspect rendered page | Bebas Neue (headings), DM Sans (body), DM Mono (numbers) all loaded from Google Fonts | Medium |
| UI-013 | Focus rings on inputs | Tab through login form fields | Visible focus ring on each input for accessibility | Low |
| UI-014 | Filter row layout | View Results page filter row on mobile | Dropdowns stack or wrap cleanly | Medium |

---

### 2.13 Data Integrity

| ID | Test Case | Steps | Expected Result | Priority |
|----|-----------|-------|-----------------|----------|
| DATA-001 | Player gamesPlayed matches courts | Run `node audit-partners.js` | 0 gamesPlayed mismatches for all divisions | High |
| DATA-002 | Player wins match court wins | Run `node audit-partners.js` | 0 wins mismatches for all divisions | High |
| DATA-003 | Partner data matches gamesPlayed | Run `node audit-partners.js` | 0 partner mismatches for all divisions | High |
| DATA-004 | Standings points match results | Sum court wins from schedule for each Div I team | Total matches standings points for each team | High |
| DATA-005 | Standings sets match court data | Sum set wins/losses from court records for each team | Matches setsW/setsL in standings | Medium |
| DATA-006 | Div I: 11 teams in standings | Count rows in DIV_I_STANDINGS | Exactly 11 entries | High |
| DATA-007 | Div C: 11 teams in standings | Count rows in DIV_C_STANDINGS | Exactly 11 entries | High |
| DATA-008 | Div F: 11 teams in standings | Count rows in DIV_F_STANDINGS | Exactly 11 entries | High |
| DATA-009 | Div H: 11 teams in standings | Count rows in DIV_H_STANDINGS | Exactly 11 entries | High |
| DATA-010 | Projection current matches standings | For each team, compare projection `current` field with standings `pts` | Values match | Medium |
| DATA-011 | Projection projected = current + expected | Verify `projected` approximately equals `current + expected` for each team | Values consistent within rounding | Medium |
| DATA-012 | Projection min <= projected <= max | For each team in projections | Min value <= projected <= max value | Medium |
| DATA-013 | Schedule week count | Count weeks in each division's schedule | Exactly 11 weeks per division | Medium |
| DATA-014 | Schedule matches per week | Count matches per week | 5 matches per week (11 teams, 1 bye) plus bye/rest entries | Medium |
| DATA-015 | Total points per match = 3 | For each completed match, sum court wins | Each match has exactly 3 courts, total wins = 3 | Medium |
| DATA-016 | Walkover scores are 6-0 6-0 | Check any walkover court | Sets show "6-0, 6-0" with `wo:true` flag | Low |
| DATA-017 | SVG club has 4 teams | Count SVG teams in SVG Players | STARS (Div I), CHAMPS (Div I), SVG-C (Div C), ACES (Div F) = 4 teams | Medium |
| DATA-018 | Admin integrity check passes | Run integrity check from Admin > Data Tools | All divisions report 0 mismatches | High |
| DATA-019 | XSS escape function | Enter `<script>alert(1)</script>` in player search | HTML entities escaped, no script execution | Medium |

---

## 3. Test Execution Notes

### Pre-Test Setup
1. Clear browser cache and localStorage before full regression
2. Ensure all 4 data files are loaded (division-i.js, division-c.js, division-f.js, division-h.js)
3. For server persistence tests, use live URL (not file:// protocol)
4. For cache busting tests, verify version strings match latest deploy

### Known Limitations (Do Not File as Bugs)
1. Client-side authentication -- passwords visible in page source (by design for low-stakes app)
2. Data is hardcoded in JS files -- requires manual update + deploy for new results
3. All 4 divisions loaded on page load (no lazy loading)
4. Division H has no captain phone, surface type, or player gender/age data
5. Division C Week 9 may have 2 of 5 matches pending
6. Server-side storage requires PHP; falls back to localStorage on file:// protocol

### Test Completion Criteria
- All **High** priority tests pass
- No more than 2 **Medium** priority tests failing
- All data integrity tests pass (DATA-001 through DATA-003 via audit script)
- Login/logout works for all 6 default users
- All 4 divisions render complete data
