// CDTA 2026 -- App Logic
// Auto-extracted from cdta2026_dashboard_w8.html

// ─── XSS ESCAPE HELPER ──────────────────────────────────────────────────────
function _esc(s) { if (s == null) return ''; const d = document.createElement('div'); d.textContent = String(s); return d.innerHTML; }

// ─── DATA ───────────────────────────────────────────────────────────────────

// gamesPlayed/wins: verified from source court records + Key Pairs table.
// null = no court-level data available in source for this player.
// Sources used: SATCH 6-match court detail, RAIL Wk7 detail, GNEST Wk7 detail,
//   opponent names in SATCH match records, Key Pairs table.

// ─── PARTNERS (Div I — derived from court records) ───────────────────────────

// ─── TEAM INFO (WOs given, weeks played) ─────────────────────────────────────

// ─── TEAM NAME MAP ───────────────────────────────────────────────────────────
const shortToFull = {};
DIV_I_TEAMS.forEach(t => shortToFull[t.short] = t.full);

// ─── STATE ───────────────────────────────────────────────────────────────────
let playerSortKey = 'gamesPlayed', playerSortDir = -1;
let divCSortKey = 'gamesPlayed', divCSortDir = -1;
let divFSortKey = 'gamesPlayed', divFSortDir = -1;
let divHSortKey = 'gamesPlayed', divHSortDir = -1;

// ─── NAV ─────────────────────────────────────────────────────────────────────
function _savePageState(div, page) {
  try { location.hash = div + '/' + page; } catch(e) {}
}
// Current active division letter (default 'I')
let _activeDiv = 'I';

function showPage(name, btn) {
  const activeDivBtn = document.querySelector('.div-btn.active');
  const activeDivText = activeDivBtn ? activeDivBtn.textContent.trim() : '';
  if (activeDivText === 'SVG Players') return;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  let div = _activeDiv.toLowerCase();
  let pageId = div === 'i' ? 'page-' + name : 'page-div' + div + '-' + name;
  const pg = document.getElementById(pageId);
  if (pg) pg.classList.add('active');
  if (btn) btn.classList.add('active');
  _savePageState(div, name);
  if (typeof _logUsage === 'function') _logUsage('page', name);
  window.scrollTo(0,0);
}

// Generic division switcher for all divisions A-K
function switchToDiv(div, btn) {
  _activeDiv = div;
  document.querySelectorAll('.div-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('nav-divs').style.display = 'flex';
  document.getElementById('nav-svg').style.display = 'none';
  const ovNav = document.getElementById('nav-overview');
  if (ovNav) ovNav.style.display = 'none';
  const adNav = document.getElementById('nav-admin');
  if (adNav) adNav.style.display = 'none';
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const navStandingsBtn = document.querySelector('#nav-divs .nav-btn[onclick*="standings"]');
  if (navStandingsBtn) navStandingsBtn.classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const d = div.toLowerCase();
  const pageId = d === 'i' ? 'page-standings' : 'page-div' + d + '-standings';
  const pg = document.getElementById(pageId);
  if (pg) pg.classList.add('active');
  _savePageState(d, 'standings');
  if (typeof _logUsage === 'function') _logUsage('page', 'standings');
  window.scrollTo(0,0);
}

// ─── DIV_I_STANDINGS ───────────────────────────────────────────────────────────────
function _standingIcon(rank, total) {
  if (rank <= 2) return '<span class="rank-promote" title="Promoted">🏆</span>';
  if (rank === 3) return '<span class="rank-medal" title="Medal">🏅</span>';
  if (rank >= total - 1) return '<span class="rank-demote" title="Demoted">↓</span>';
  return '';
}
function _standingRowClass(rank, total) {
  if (rank <= 2) return ' class="standing-promote"';
  if (rank === 3) return ' class="standing-medal"';
  if (rank >= total - 1) return ' class="standing-demote"';
  return '';
}

function renderStandings() {
  const tb = document.getElementById('tbody-standings');
  const total = DIV_I_STANDINGS.length;
  tb.innerHTML = DIV_I_STANDINGS.map(s => {
    const playedPts = s.played;
    const matches = Math.floor(s.played / 3);
    const ptsPct = playedPts > 0 ? Math.round((s.pts / playedPts) * 100) : 0;
    return `
    <tr${_standingRowClass(s.rank, total)}>
      <td class="rank-cell ${s.rank<=3?'top3':''}">${s.rank} ${_standingIcon(s.rank, total)}</td>
      <td><span class="team-badge">${s.short}</span> ${s.full}</td>
      <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${matches}m)</span></td>
      <td class="pts-cell">${s.pts} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
      <td style="font-family:'DM Mono',monospace">${s.setsW}</td>
      <td style="font-family:'DM Mono',monospace">${s.setsL}</td>
      <td style="font-family:'DM Mono',monospace">${s.gamesW}</td>
      <td style="font-family:'DM Mono',monospace">${s.gamesL}</td>
    </tr>`;
  }).join('');
}

// ─── PROJECTION ──────────────────────────────────────────────────────────────
function renderProjection() {
  const max = 30;
  const tb = document.getElementById('tbody-proj');
  // Build a quick lookup: short → matches played from DIV_I_STANDINGS
  const playedMap = {};
  DIV_I_STANDINGS.forEach(s => playedMap[s.short] = s.played);
  tb.innerHTML = [...DIV_I_PROJECTIONS].sort((a,b) => b.projected - a.projected).map(p => {
    const matchesPlayed = playedMap[p.short] || 0;
    const playedPts = matchesPlayed * 3; // max pts from played matches (3 courts × 1 pt each, but 3 pts per match max)
    const ptsPct = playedPts > 0 ? Math.round((p.current / playedPts) * 100) : 0;
    const isMyTeam = p.short === 'STARS';
    return `
    <tr ${isMyTeam?'style="background:#fffbeb;border-left:3px solid var(--accent)"':''}>
      <td class="rank-cell ${p.rank<=2?'top3':''}">${p.rank}</td>
      <td><span class="team-badge">${p.short}</span> ${p.full}${isMyTeam?' <span style="font-size:.62rem;color:var(--accent);background:rgba(184,122,16,.15);padding:2px 7px;border-radius:3px;margin-left:4px">YOUR TEAM</span>':''}</td>
      <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${matchesPlayed}m)</span></td>
      <td class="pts-cell">${p.current} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
      <td style="color:var(--green);font-family:'DM Mono',monospace;font-weight:600">+${p.expected}</td>
      <td style="font-family:'DM Mono',monospace;font-weight:700;color:#1e3a5f">~${p.projected}</td>
      <td style="color:var(--muted);font-size:.75rem">${p.min??'—'}</td>
      <td style="color:var(--muted);font-size:.75rem">${p.max}</td>
      <td>
        <div class="proj-bar-wrap">
          <div class="proj-bar"><div class="proj-fill" style="width:${(p.projected/max)*100}%"></div></div>
          <span style="font-size:.7rem;color:var(--muted)">${p.projected}</span>
        </div>
      </td>
    </tr>`;
  }).join('');
  renderMinMaxBreakdown();
}

// ─── MIN/MAX BREAKDOWN ────────────────────────────────────────────────────────

function renderMinMaxBreakdown() {
  const container = document.getElementById('minmax-breakdown-container');
  if (!container) return;
  container.innerHTML = [...DIV_I_PROJ_BREAKDOWN].sort((a,b) => {
    const pa = a.current + a.fixtures.reduce((s,f) => s+f.projPts, 0);
    const pb = b.current + b.fixtures.reduce((s,f) => s+f.projPts, 0);
    return pb - pa;
  }).map(team => {
    const pending = team.fixtures.filter(f => f.actual === undefined);
    const totalMin = team.current + pending.reduce((s,f) => s+f.min, 0);
    const totalMax = team.current + pending.reduce((s,f) => s+f.max, 0);
    const totalProj = team.current + pending.reduce((s,f) => s+f.projPts, 0);
    const isMyTeam = team.short === 'STARS';
    const rows = pending.map(f => {
      const pctProj = Math.round((f.projPts/3)*100);
      return `<tr>
        <td style="font-size:.72rem;color:var(--muted);font-family:'DM Mono',monospace">Wk${f.wk}</td>
        <td style="font-size:.78rem">
          <span style="font-size:.62rem;color:${f.venue==='H'?'var(--green)':'var(--muted)'};background:${f.venue==='H'?'rgba(34,197,94,.1)':'rgba(100,116,139,.1)'};padding:1px 5px;border-radius:3px;margin-right:4px">${f.venue==='H'?'HOME':'AWAY'}</span>
          <span class="team-badge">${f.oppShort}</span> ${f.opp}
        </td>
        <td style="font-family:'DM Mono',monospace;color:var(--red);font-size:.8rem;text-align:center">${f.min}</td>
        <td style="text-align:center">
          <div style="display:flex;align-items:center;gap:6px">
            <div style="height:5px;border-radius:3px;background:var(--border);width:50px;overflow:hidden">
              <div style="height:100%;background:linear-gradient(90deg,var(--accent2),var(--accent));width:${pctProj}%;border-radius:3px"></div>
            </div>
            <span style="font-family:'DM Mono',monospace;font-weight:700;color:var(--accent);font-size:.82rem">${f.projPts}</span>
          </div>
        </td>
        <td style="font-family:'DM Mono',monospace;color:var(--green);font-size:.8rem;text-align:center">${f.max}</td>
        <td style="font-size:.7rem;color:var(--muted);max-width:220px">${f.note}</td>
      </tr>`;
    }).join('');
    return `<div style="background:var(--surface);border:1px solid ${isMyTeam?'var(--accent)':'var(--border)'};border-radius:8px;overflow:hidden;">
      <div style="padding:12px 16px;background:${isMyTeam?'rgba(184,122,16,.08)':'var(--surface2)'};border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;">
        <span class="team-badge">${team.short}</span>
        <strong style="font-size:.9rem">${team.full}</strong>
        ${isMyTeam?'<span style="font-size:.62rem;color:var(--accent);background:rgba(184,122,16,.15);padding:2px 7px;border-radius:3px;margin-left:auto">YOUR TEAM</span>':''}
        <span style="margin-left:${isMyTeam?'0':'auto'};font-size:.75rem;color:var(--muted)">Current: <strong style="color:var(--accent)">${team.current} pts</strong></span>
      </div>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:.8rem;">
          <thead>
            <tr style="background:var(--surface2)">
              <th style="padding:7px 10px;text-align:left;font-size:.67rem;color:var(--muted);letter-spacing:.8px;text-transform:uppercase;white-space:nowrap">Wk</th>
              <th style="padding:7px 10px;text-align:left;font-size:.67rem;color:var(--muted);letter-spacing:.8px;text-transform:uppercase">Opponent</th>
              <th style="padding:7px 10px;text-align:center;font-size:.67rem;color:var(--red);letter-spacing:.8px;text-transform:uppercase">Min</th>
              <th style="padding:7px 10px;text-align:center;font-size:.67rem;color:var(--accent);letter-spacing:.8px;text-transform:uppercase">Proj</th>
              <th style="padding:7px 10px;text-align:center;font-size:.67rem;color:var(--green);letter-spacing:.8px;text-transform:uppercase">Max</th>
              <th style="padding:7px 10px;text-align:left;font-size:.67rem;color:var(--muted);letter-spacing:.8px;text-transform:uppercase">Assumption</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
          <tfoot>
            <tr style="border-top:2px solid var(--border);background:var(--surface2)">
              <td colspan="2" style="padding:9px 10px;font-size:.78rem;font-weight:600;color:var(--muted)">SEASON TOTAL (incl. current ${team.current} pts)</td>
              <td style="padding:9px 10px;text-align:center;font-family:'DM Mono',monospace;font-weight:700;color:var(--red)">${totalMin}</td>
              <td style="padding:9px 10px;text-align:center;font-family:'DM Mono',monospace;font-weight:700;color:var(--accent)">~${totalProj}</td>
              <td style="padding:9px 10px;text-align:center;font-family:'DM Mono',monospace;font-weight:700;color:var(--green)">${totalMax}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>`;
  }).join('');
}

// ─── TEAMS ────────────────────────────────────────────────────────────────────
function renderTeams() {
  const tb = document.getElementById('tbody-teams');
  const divI = [...DIV_I_TEAMS.filter(t => t.division === 'I')].sort((a,b) => a.full.localeCompare(b.full));
  // Find clubs that are shared by >1 team (across all divisions)
  const clubCount = {};
  DIV_I_TEAMS.forEach(t => clubCount[t.club] = (clubCount[t.club]||0)+1);
  tb.innerHTML = divI.map((t,i) => {
    const count = clubCount[t.club];
    const shared = count > 1;
    const clubCell = shared
      ? `<td><span style="color:var(--accent);font-weight:600">${t.club}</span> <span style="font-size:.62rem;background:rgba(184,122,16,.15);color:var(--accent);padding:1px 6px;border-radius:3px;letter-spacing:.5px">${count} TEAMS</span></td>`
      : `<td style="color:var(--muted);font-size:.82rem">${t.club}</td>`;
    const capPlayer = DIV_I_PLAYERS.find(p => p.team === t.short && p.role === 'Captain');
    const capPhoto = capPlayer && capPlayer.photo ? `<img src="${_esc(capPlayer.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    return `<tr>
      <td class="rank-cell">${i+1}</td>
      <td><strong>${t.full}</strong></td>
      <td><span class="team-badge">${t.short}</span></td>
      <td>${capPhoto}${t.captain} <span class="pill pill-gold" style="margin-left:4px">C</span>${t.mobile ? '<br><a href="tel:'+_esc(t.mobile)+'" style="font-size:.7rem;color:var(--muted);font-family:\'DM Mono\',monospace">📞 '+_esc(t.mobile)+'</a>' : ''}</td>
      ${clubCell}
      <td><span style="font-size:.72rem;padding:2px 7px;border-radius:3px;font-weight:600;letter-spacing:.5px;background:${t.surface==='Clay'?'rgba(180,100,30,.12)':'rgba(37,99,235,.1)'};color:${t.surface==='Clay'?'#a05a1a':'var(--accent2)'}">${t.surface||'—'}</span></td>
      <td>${t.players}</td>
    </tr>`;
  }).join('');
}

// ─── DIV_I_SCHEDULE ─────────────────────────────────────────────────────────────────
const SCHEDULE_COL_HEADER = '<div style="display:grid;grid-template-columns:1fr 80px 1fr 1fr;gap:10px;padding:5px 16px;margin-bottom:8px;font-size:.68rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;font-weight:600;border-bottom:1px solid var(--border)"><div style="text-align:right">Home</div><div style="text-align:center">Score</div><div>Away</div><div>Venue</div></div>';
const RESULTS_COL_HEADER  = '<div style="display:grid;grid-template-columns:1fr 70px 1fr 1fr;gap:10px;padding:5px 16px;margin-bottom:8px;font-size:.68rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;font-weight:600;border-bottom:1px solid var(--border)"><div style="text-align:right">Home</div><div style="text-align:center">Score</div><div>Away</div><div>Venue</div></div>';

function populateScheduleFilter() {
  const weekSel = document.getElementById('schedule-week-filter');
  const teamSel = document.getElementById('schedule-team-filter');
  if (!weekSel || !teamSel) return;
  DIV_I_SCHEDULE.forEach(wk => {
    const opt = document.createElement('option');
    opt.value = wk.week; opt.textContent = 'Week ' + wk.week;
    weekSel.appendChild(opt);
  });
  [...DIV_I_TEAMS.filter(t => t.division === 'I')].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.full; opt.textContent = t.full;
    teamSel.appendChild(opt);
  });
}

function renderSchedule() {
  const filterWeek = parseInt(document.getElementById('schedule-week-filter')?.value) || null;
  const filterTeam = document.getElementById('schedule-team-filter')?.value || '';
  const c = document.getElementById('schedule-container');
  const filtered = DIV_I_SCHEDULE.filter(wk => !filterWeek || wk.week === filterWeek);
  c.innerHTML = SCHEDULE_COL_HEADER + filtered.map(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return '';
    const rows = matches.map(m => {
      const titleMatch = m.title ? 'style="border-color:var(--accent);background:rgba(184,122,16,.05)"' : '';
      const scoreCell = m.score
        ? `<div class="match-score">${m.score}</div>`
        : `<div class="match-score" style="color:var(--muted);font-size:.72rem">TBD</div>`;
      return `<div class="match-row" ${titleMatch}>
        <div class="match-home">${m.home}${m.title?' ⭐':''}</div>
        ${scoreCell}
        <div class="match-away">${m.away}</div>
        <div class="match-venue">${m.venue}</div>
      </div>`;
    }).join('');
    const upcomingBadge = !wk.done ? `<span class="wk-badge">UPCOMING</span>` : '';
    const titleBadge = wk.title ? `<span class="wk-title">${wk.title}</span>` : '';
    return `<div class="week-block">
      <div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span>${upcomingBadge}${titleBadge}</div>
      ${rows}
    </div>`;
  }).join('');
}

// ─── RESULTS ──────────────────────────────────────────────────────────────────
function populateResultsFilter() {
  const sel = document.getElementById('results-team-filter');
  [...DIV_I_TEAMS.filter(t => t.division !== 'C')].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.full; opt.textContent = t.full;
    sel.appendChild(opt);
  });
}

function buildCourtRows(courts) {
  if (!courts || courts.length === 0) return '';
  return courts.map(ct => {
    const hw = ct.win === 'home';
    const aw = ct.win === 'away';
    const noData = ct.sets === '—';
    const woBadge = ct.wo ? ' <span style="font-size:.62rem;background:rgba(220,38,38,.12);color:#dc2626;padding:1px 5px;border-radius:3px;vertical-align:middle">W/O</span>' : '';
    return '<div style="display:grid;grid-template-columns:1fr 100px 1fr;align-items:center;padding:6px 16px 6px 28px;border-bottom:1px solid #d1d9e6;font-size:.78rem;">'
      + '<div style="' + (hw ? 'font-weight:600;color:#1e293b' : 'color:#64748b') + '">' + ct.home + '</div>'
      + '<div style="text-align:center;">'
      + '<span style="font-size:.62rem;color:#64748b;margin-right:3px;text-transform:uppercase;letter-spacing:.5px">Ct' + ct.ct + '</span>'
      + (noData
          ? '<span style="font-family:\'DM Mono\',monospace;color:#64748b">—</span>'
          : '<span style="font-family:\'DM Mono\',monospace;color:' + (hw ? '#22c55e' : aw ? '#ef4444' : '#64748b') + '">' + ct.sets + '</span>')
      + woBadge
      + '</div>'
      + '<div style="' + (aw ? 'font-weight:600;color:#1e293b' : 'color:#64748b') + '">' + ct.away + '</div>'
      + '</div>';
  }).join('');
}

function renderResults() {
  const filterTeam = document.getElementById('results-team-filter').value;
  const filterWeek = parseInt(document.getElementById('results-week-filter').value) || null;
  const c = document.getElementById('results-container');
  const played = DIV_I_SCHEDULE.filter(w => w.done && (!filterWeek || w.week === filterWeek));
  let html = '';
  played.forEach(wk => {
    const blocks = wk.matches
      .filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam)
      .map(m => {
        const parts = m.score.split('-').map(Number);
        const hw = parts[0] > parts[1];
        const hasCourts = m.courts && m.courts.length > 0;
        const courtDetail = hasCourts ? (
          '<div style="border-top:1px solid #1e2d45;">'
          + '<div style="display:grid;grid-template-columns:1fr 100px 1fr;padding:4px 16px 4px 28px;background:#eef1f6;">'
          + '<div style="font-size:.62rem;color:#64748b;text-transform:uppercase;letter-spacing:.8px">' + m.home + '</div>'
          + '<div style="text-align:center;font-size:.62rem;color:#64748b;text-transform:uppercase;letter-spacing:.8px">SET SCORES</div>'
          + '<div style="font-size:.62rem;color:#64748b;text-transform:uppercase;letter-spacing:.8px">' + m.away + '</div>'
          + '</div>'
          + buildCourtRows(m.courts)
          + '</div>'
        ) : '';
        return '<div style="background:#ffffff;border:1px solid #d1d9e6;border-radius:6px;margin-bottom:8px;overflow:hidden;">'
          + '<div style="display:grid;grid-template-columns:1fr 70px 1fr 1fr;gap:10px;align-items:center;padding:10px 16px;">'
          + '<div style="text-align:right;font-size:.85rem;font-weight:' + (hw?700:400) + ';' + (filterTeam===m.home?'color:#b87a10;':'') + '">' + m.home + (hw?' <span style="color:#16a34a;font-size:.7rem">&#9679;</span>':'') + '</div>'
          + '<div style="text-align:center;font-family:\'DM Mono\',monospace;font-weight:700;font-size:.9rem;color:#b87a10">' + m.score + '</div>'
          + '<div style="font-size:.85rem;font-weight:' + (!hw?700:400) + ';' + (filterTeam===m.away?'color:#b87a10;':'') + '">' + (!hw?'<span style="color:#16a34a;font-size:.7rem">&#9679;</span> ':'') + m.away + '</div>'
          + '<div style="font-size:.72rem;color:#64748b">' + m.venue + '</div>'
          + '</div>'
          + courtDetail
          + '</div>';
      }).join('');
    if (blocks) {
      html += '<div class="week-block"><div class="week-label">WEEK ' + wk.week + ' — <span class="wk-date">' + wk.date + '</span></div>' + blocks + '</div>';
    }
  });
  c.innerHTML = (html ? RESULTS_COL_HEADER + html : '<div style="color:#64748b;padding:20px">No results found.</div>');
}

// ─── DIV_I_PLAYERS ──────────────────────────────────────────────────────────────────
function populatePlayerFilters() {
  const teamSel = document.getElementById('player-team-filter');
  [...DIV_I_TEAMS.filter(t => t.division !== 'C')].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.short; opt.textContent = t.full;
    teamSel.appendChild(opt);
  });
}

// Division I players only (excludes SVG-C and any Div C teams)

function sortPlayers(key) {
  if (playerSortKey === key) playerSortDir *= -1;
  else { playerSortKey = key; playerSortDir = key==='name'||key==='team'||key==='gender'||key==='role' ? 1 : -1; }
  renderPlayers();
  // update header indicators
  document.querySelectorAll('#tbl-players thead th').forEach(th => {
    th.classList.remove('sort-asc','sort-desc');
  });
}
function sortDivCPlayers(key) {
  if (divCSortKey === key) divCSortDir *= -1;
  else { divCSortKey = key; divCSortDir = key==='name'||key==='team'||key==='gender' ? 1 : -1; }
  renderDivCPlayers();
}
function sortDivFPlayers(key) {
  if (divFSortKey === key) divFSortDir *= -1;
  else { divFSortKey = key; divFSortDir = key==='name'||key==='team'||key==='gender' ? 1 : -1; }
  renderDivFPlayers();
}

function renderPlayers() {
  const search = document.getElementById('player-search').value.toLowerCase();
  const teamF  = document.getElementById('player-team-filter').value;
  const genderF= document.getElementById('player-gender-filter').value;

  let filtered = DIV_I_PLAYERS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search)) return false;
    if (teamF && p.team !== teamF) return false;
    if (genderF && p.gender !== genderF) return false;
    return true;
  });

  filtered.sort((a,b) => {
    let av = a[playerSortKey], bv = b[playerSortKey];
    if (playerSortKey === 'winpct') {
      av = (a.gamesPlayed !== null && a.gamesPlayed > 0) ? a.wins/a.gamesPlayed : -1;
      bv = (b.gamesPlayed !== null && b.gamesPlayed > 0) ? b.wins/b.gamesPlayed : -1;
    }
    if (av === null) av = -999;
    if (bv === null) bv = -999;
    if (typeof av === 'string') return playerSortDir * av.localeCompare(bv);
    return playerSortDir * (av - bv);
  });

  const tb = document.getElementById('tbody-players');
  tb.innerHTML = filtered.map(p => {
    const hasData = p.gamesPlayed !== null;
    const pct = hasData && p.gamesPlayed > 0 ? Math.round((p.wins/p.gamesPlayed)*100) : null;
    const barW = pct !== null ? pct : 0;
    const losses = hasData ? p.gamesPlayed - p.wins : null;
    const capTag = p.role==='Captain' ? ' <span class="pill pill-gold" style="font-size:.6rem;padding:1px 5px;vertical-align:middle">C</span>' : '';
    const photoHtml = p.photo ? `<img src="${_esc(p.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    const nameDisp = photoHtml + p.name + (p.age===80?' 🏅':p.age===10?' ⭐':'') + capTag;
    const winsDisplay = hasData
      ? `<span style="color:var(--green)">${p.wins}W</span>${losses > 0 ? ` <span style="color:var(--red)">${losses}L</span>` : ''}`
      : '<span style="color:var(--muted)">—</span>';
    const pList = DIV_I_PARTNERS[p.name];
    const partnerCell = pList
      ? pList.map(([n,c]) => `${n}<span style="font-family:'DM Mono',monospace;font-size:.68rem;color:var(--muted);margin-left:2px">(${c})</span>`).join(' · ')
      : '<span style="color:var(--muted)">—</span>';
    return `<tr>
      <td>${nameDisp}</td>
      <td><span class="team-badge">${p.team}</span></td>
      <td class="${p.gender==='M'?'gender-m':'gender-f'}">${p.gender==='M'?'♂':'♀'}</td>
      <td style="font-family:'DM Mono',monospace;font-weight:600;color:${hasData?'var(--text)':'var(--muted)'}">${hasData ? p.gamesPlayed : '—'}</td>
      <td><span style="font-family:'DM Mono',monospace">${winsDisplay}</span></td>
      <td>
        ${hasData && p.gamesPlayed > 0 ? `<div class="win-bar-wrap">
          <div class="win-bar"><div class="win-bar-fill" style="width:${barW}%"></div></div>
          <span style="font-family:'DM Mono',monospace;font-size:.78rem;color:${pct>=70?'var(--green)':pct>=40?'var(--text)':'var(--muted)'}">${pct}%</span>
        </div>` : `<span style="color:var(--muted)">—</span>`}
      </td>
      <td style="font-size:.76rem;line-height:1.6">${partnerCell}</td>
    </tr>`;
  }).join('');

  document.getElementById('player-count').innerHTML = 
    `Showing ${filtered.length} of ${DIV_I_PLAYERS.length} players`;

  // ── Totals summary ──
  const withData = filtered.filter(p => p.gamesPlayed !== null);
  const totalPlayed = withData.reduce((s,p) => s + p.gamesPlayed, 0);
  const totalWins   = withData.reduce((s,p) => s + p.wins, 0);
  const totalLosses = totalPlayed - totalWins;
  const totalPct    = totalPlayed > 0 ? Math.round((totalWins / totalPlayed) * 100) : 0;

  // WOs given: sum per unique team in filtered set (each WO court = 2 player slots missed)
  const teamsInFilter = [...new Set(filtered.map(p => p.team))];
  const totalWOs = teamsInFilter.reduce((s,t) => s + (DIV_I_TEAM_INFO[t]?.wosGiven || 0), 0);
  const totalWOSlots = totalWOs * 2; // 2 players per WO court

  // Weeks played: sum weeksPlayed per unique team
  const totalWeeks = teamsInFilter.reduce((s,t) => s + (DIV_I_TEAM_INFO[t]?.weeksPlayed || 0), 0);
  // Expected courts = sum per team: weeksPlayed × 3 courts × 2 players
  const expectedCourts = teamsInFilter.reduce((s,t) => s + (DIV_I_TEAM_INFO[t]?.weeksPlayed || 0) * 3 * 2, 0);

  const totalsEl = document.getElementById('player-totals');
  totalsEl.innerHTML = withData.length === 0
    ? '<span style="color:var(--muted);font-size:.8rem">No court data for selected players</span>'
    : `<span style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;white-space:nowrap">${teamsInFilter.length} team${teamsInFilter.length>1?'s':''} · ${withData.length} players</span>`
    + `<span style="font-family:'DM Mono',monospace;font-weight:700;font-size:.92rem;color:var(--text)">${totalPlayed} <span style="font-size:.7rem;font-weight:400;color:var(--muted)">/ ${expectedCourts} courts played</span></span>`
    + `<span style="font-family:'DM Mono',monospace;font-weight:700;font-size:.92rem;color:var(--green)">${totalWins}W</span>`
    + `<span style="font-family:'DM Mono',monospace;font-weight:700;font-size:.92rem;color:var(--red)">${totalLosses}L</span>`
    + (totalWOSlots > 0 ? `<span style="font-family:'DM Mono',monospace;font-size:.85rem;color:#f59e0b" title="${totalWOs} walkover court${totalWOs>1?'s':''} given">${totalWOSlots} W/O slots (${totalWOs} courts)</span>` : '')
    + `<span style="font-family:'DM Mono',monospace;font-size:.82rem;color:var(--muted)">${totalWeeks} wk${totalWeeks>1?'s':''} played</span>`
    + `<span style="font-family:'DM Mono',monospace;font-size:.85rem;color:${totalPct>=60?'var(--green)':totalPct>=40?'var(--text)':'var(--muted)'}">${totalPct}% win rate</span>`;
}

// ─── STATS ────────────────────────────────────────────────────────────────────
function renderStats() {
  const tb = document.getElementById('tbody-pairs');
  tb.innerHTML = DIV_I_KEY_PAIRS.map((p,i) => {
    const pct = Math.round((p.wins/p.apps)*100);
    return `<tr>
      <td class="rank-cell">${i+1}</td>
      <td style="font-weight:500">${p.pair}</td>
      <td><span class="team-badge">${p.team}</span></td>
      <td style="font-family:'DM Mono',monospace;font-weight:600">${p.apps}</td>
      <td style="color:var(--green);font-family:'DM Mono',monospace;font-weight:700">${p.wins}</td>
      <td>
        <div class="win-bar-wrap">
          <div class="win-bar"><div class="win-bar-fill" style="width:${pct}%"></div></div>
          <span style="font-size:.78rem;color:var(--muted)">${pct}%</span>
        </div>
      </td>
    </tr>`;
  }).join('');
}

// ─── TABLE SORT ───────────────────────────────────────────────────────────────
let sortState = {};
function sortTable(tblId, colIdx) {
  const tbl = document.getElementById(tblId);
  const key = tblId+'-'+colIdx;
  sortState[key] = -(sortState[key]||1);
  const dir = sortState[key];
  const rows = Array.from(tbl.querySelectorAll('tbody tr'));
  rows.sort((a,b) => {
    const av = a.cells[colIdx].textContent.trim();
    const bv = b.cells[colIdx].textContent.trim();
    const an = parseFloat(av), bn = parseFloat(bv);
    if (!isNaN(an) && !isNaN(bn)) return dir*(an-bn);
    return dir*av.localeCompare(bv);
  });
  const tb = tbl.querySelector('tbody');
  rows.forEach(r => tb.appendChild(r));
  tbl.querySelectorAll('thead th').forEach((th,i) => {
    th.classList.remove('sort-asc','sort-desc');
    if (i===colIdx) th.classList.add(dir===1?'sort-asc':'sort-desc');
  });
}

// ─── DIVISION SWITCHER ────────────────────────────────────────────────────────
// Legacy functions — redirect to generic switchToDiv
function switchDivision(div, btn) { switchToDiv(div, btn); }
function switchToDivC(btn) { switchToDiv('C', btn); }

// ─── DIVISION C ───────────────────────────────────────────────────────────────

// Division C — Projections (H2H Common-Opponent Method, Week 7)
// Remaining: Wk8–11 (4 matches each except ANU/SVG/GPT=3, LIF=5 incl. pending Wk7 vs SNS)

function renderDivCProjection() {
  const tb = document.getElementById('tbody-divc-proj');
  if (!tb) return;
  const maxPts = 24;
  tb.innerHTML = [...DIV_C_PROJECTIONS].sort((a,b) => b.projected - a.projected).map(p => {
    const playedPts = p.played * 3;
    const ptsPct = playedPts > 0 ? Math.round((p.current / playedPts) * 100) : 0;
    const isBlues = p.short === 'SVG-C';
    return `<tr${isBlues?' style="background:#fffbeb;border-left:3px solid var(--accent)"':''}>
      <td class="rank-cell ${p.rank<=3?'top3':''}">${p.rank}</td>
      <td><span class="team-badge">${p.short}</span> ${p.full}${isBlues?' <span style="font-size:.62rem;color:var(--accent);background:rgba(184,122,16,.15);padding:2px 7px;border-radius:3px;margin-left:4px">SVG CLUB</span>':''}</td>
      <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${p.played}m)</span></td>
      <td class="pts-cell">${p.current} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
      <td style="color:var(--green);font-family:'DM Mono',monospace;font-weight:600">+${p.expected}</td>
      <td style="font-family:'DM Mono',monospace;font-weight:700;color:#1e3a5f">~${p.projected}</td>
      <td style="color:var(--muted);font-size:.75rem">${p.max}</td>
      <td>
        <div class="proj-bar-wrap">
          <div class="proj-bar"><div class="proj-fill" style="width:${(p.projected/maxPts)*100}%"></div></div>
          <span style="font-size:.7rem;color:var(--muted)">${p.projected}</span>
        </div>
      </td>
    </tr>`;
  }).join('');
  renderDivCProjBreakdown();
}

// Division C — Projection Breakdown fixtures for top contenders

function renderDivCProjBreakdown() {
  const container = document.getElementById('divc-projbreakdown-container');
  if (!container) return;
  container.innerHTML = [...DIV_C_PROJ_BREAKDOWN].sort((a,b) => {
    const pa = a.current + a.fixtures.reduce((s,f) => s+f.projPts, 0);
    const pb = b.current + b.fixtures.reduce((s,f) => s+f.projPts, 0);
    return pb - pa;
  }).map(team => {
    const pending = team.fixtures.filter(f => f.actual === undefined);
    const totalProj = team.current + pending.reduce((s,f) => s + f.projPts, 0);
    const totalMax  = team.current + pending.reduce((s,f) => s + f.max, 0);
    const isBlues = team.short === 'SVG-C';
    const rows = pending.map(f => {
      const isRest = f.venue === '—';
      const pctProj = Math.round((f.projPts / 3) * 100);
      const venueBadge = isRest
        ? `<span style="font-size:.62rem;color:var(--muted);background:rgba(100,116,139,.1);padding:1px 5px;border-radius:3px;margin-right:4px">REST</span>`
        : `<span style="font-size:.62rem;color:${f.venue==='H'?'var(--green)':'var(--muted)'};background:${f.venue==='H'?'rgba(34,197,94,.1)':'rgba(100,116,139,.1)'};padding:1px 5px;border-radius:3px;margin-right:4px">${f.venue==='H'?'HOME':'AWAY'}</span>`;
      const oppCell = isRest
        ? `<span style="color:var(--muted);font-style:italic">${f.opp}</span>`
        : `<span class="team-badge">${f.oppShort}</span> ${f.opp}`;
      const projCell = isRest
        ? `<span style="color:var(--muted);font-size:.75rem">—</span>`
        : `<div style="display:flex;align-items:center;gap:6px">
            <div style="height:5px;border-radius:3px;background:var(--border);width:50px;overflow:hidden">
              <div style="height:100%;background:linear-gradient(90deg,var(--accent2),var(--accent));width:${pctProj}%;border-radius:3px"></div>
            </div>
            <span style="font-family:'DM Mono',monospace;font-weight:700;color:var(--accent);font-size:.82rem">${f.projPts}</span>
          </div>`;
      return `<tr${isRest?' style="opacity:.55"':''}>
        <td style="font-size:.72rem;color:var(--muted);font-family:'DM Mono',monospace">Wk${f.wk}</td>
        <td style="font-size:.78rem">${venueBadge}${oppCell}</td>
        <td style="text-align:center">${projCell}</td>
        <td style="font-family:'DM Mono',monospace;color:var(--green);font-size:.8rem;text-align:center">${isRest?'—':f.max}</td>
        <td style="font-size:.7rem;color:var(--muted);max-width:220px">${f.note}</td>
      </tr>`;
    }).join('');
    return `<div style="background:var(--surface);border:1px solid ${isBlues?'var(--accent)':'var(--border)'};border-radius:8px;overflow:hidden;">
      <div style="padding:12px 16px;background:${isBlues?'rgba(184,122,16,.08)':'var(--surface2)'};border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;">
        <span class="team-badge">${team.short}</span>
        <strong style="font-size:.9rem">${team.full}</strong>
        ${isBlues?'<span style="font-size:.62rem;color:var(--accent);background:rgba(184,122,16,.15);padding:2px 7px;border-radius:3px;margin-left:4px">SVG CLUB</span>':''}
        <span style="margin-left:auto;font-size:.75rem;color:var(--muted)">Current: <strong style="color:var(--accent)">${team.current} pts</strong></span>
      </div>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:.8rem;">
          <thead>
            <tr style="background:var(--surface2)">
              <th style="padding:7px 10px;text-align:left;font-size:.67rem;color:var(--muted);letter-spacing:.8px;text-transform:uppercase;white-space:nowrap">Wk</th>
              <th style="padding:7px 10px;text-align:left;font-size:.67rem;color:var(--muted);letter-spacing:.8px;text-transform:uppercase">Opponent</th>
              <th style="padding:7px 10px;text-align:center;font-size:.67rem;color:var(--accent);letter-spacing:.8px;text-transform:uppercase">Proj</th>
              <th style="padding:7px 10px;text-align:center;font-size:.67rem;color:var(--green);letter-spacing:.8px;text-transform:uppercase">Max</th>
              <th style="padding:7px 10px;text-align:left;font-size:.67rem;color:var(--muted);letter-spacing:.8px;text-transform:uppercase">Note</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
          <tfoot>
            <tr style="border-top:2px solid var(--border);background:var(--surface2)">
              <td colspan="2" style="padding:9px 10px;font-size:.78rem;font-weight:600;color:var(--muted)">SEASON TOTAL (incl. current ${team.current} pts)</td>
              <td style="padding:9px 10px;text-align:center;font-family:'DM Mono',monospace;font-weight:700;color:var(--accent)">~${totalProj.toFixed(1)}</td>
              <td style="padding:9px 10px;text-align:center;font-family:'DM Mono',monospace;font-weight:700;color:var(--green)">${totalMax}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>`;
  }).join('');
}

function renderDivCStats() {
  const tb = document.getElementById('tbody-divc-pairs');
  if (!tb) return;
  tb.innerHTML = DIV_C_KEY_PAIRS.map((p,i) => {
    const pct = Math.round((p.wins/p.apps)*100);
    return `<tr>
      <td class="rank-cell">${i+1}</td>
      <td style="font-weight:500">${p.pair}</td>
      <td><span class="team-badge">${p.team}</span></td>
      <td style="font-family:'DM Mono',monospace;font-weight:600">${p.apps}</td>
      <td style="color:var(--green);font-family:'DM Mono',monospace;font-weight:700">${p.wins}</td>
      <td>
        <div class="win-bar-wrap">
          <div class="win-bar"><div class="win-bar-fill" style="width:${pct}%"></div></div>
          <span style="font-size:.78rem;color:var(--muted)">${pct}%</span>
        </div>
      </td>
    </tr>`;
  }).join('');
}

function renderDivCStandings() {
  const tb = document.getElementById('tbody-divc-standings');
  if (!tb) return;
  const total = DIV_C_STANDINGS.length;
  tb.innerHTML = DIV_C_STANDINGS.map(s => {
    const isBlues = s.short === 'SVG-C';
    const playedPts = s.played;
    const matches = Math.floor(s.played / 3);
    const ptsPct = playedPts > 0 ? Math.round((s.pts / playedPts) * 100) : 0;
    return `<tr${_standingRowClass(s.rank, total)}>
      <td class="rank-cell ${s.rank<=3?'top3':''}">${s.rank} ${_standingIcon(s.rank, total)}</td>
      <td>
        <span class="team-badge">${s.short}</span> ${s.full}
        ${isBlues ? '<span style="font-size:.62rem;color:var(--accent);background:rgba(184,122,16,.15);padding:2px 7px;border-radius:3px;margin-left:4px">SVG CLUB</span>' : ''}
      </td>
      <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${matches}m)</span></td>
      <td class="pts-cell">${s.pts} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
      <td style="font-family:'DM Mono',monospace">${s.setsW}</td>
      <td style="font-family:'DM Mono',monospace">${s.setsL}</td>
      <td style="font-family:'DM Mono',monospace">${s.gamesW}</td>
      <td style="font-family:'DM Mono',monospace">${s.gamesL}</td>
    </tr>`;
  }).join('');
}


function populateDivCScheduleFilter() {
  const weekSel = document.getElementById('divc-schedule-week-filter');
  const teamSel = document.getElementById('divc-schedule-team-filter');
  if (!weekSel || !teamSel) return;
  DIV_C_SCHEDULE.forEach(wk => {
    const opt = document.createElement('option');
    opt.value = wk.week; opt.textContent = 'Week ' + wk.week;
    weekSel.appendChild(opt);
  });
  [...DIV_C_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.full; opt.textContent = t.full;
    teamSel.appendChild(opt);
  });
}

function renderDivCSchedule() {
  const filterWeek = parseInt(document.getElementById('divc-schedule-week-filter')?.value) || null;
  const filterTeam = document.getElementById('divc-schedule-team-filter')?.value || '';
  const c = document.getElementById('divc-schedule-container');
  if (!c) return;
  const filtered = DIV_C_SCHEDULE.filter(wk => !filterWeek || wk.week === filterWeek);
  c.innerHTML = SCHEDULE_COL_HEADER + filtered.map(wk => {
    const matches = wk.matches.filter(m => {
      if (!filterTeam) return true;
      if (m.rest) return m.away === filterTeam;
      return m.home === filterTeam || m.away === filterTeam;
    });
    if (matches.length === 0) return '';
    const rows = matches.map(m => {
      if (m.rest) return `<div class="match-row" style="opacity:.45;background:var(--surface2)">
        <div class="match-home" style="color:var(--muted);font-style:italic">REST</div>
        <div class="match-score" style="color:var(--muted);font-size:.72rem">BYE</div>
        <div class="match-away" style="color:var(--muted)">${m.away}</div>
        <div class="match-venue">—</div>
      </div>`;
      const isBlues = m.home === 'SREEVATSA BLUES' || m.away === 'SREEVATSA BLUES';
      const pendingBadge = m.pending ? ' <span style="font-size:.62rem;background:rgba(245,158,11,.15);color:#d97706;padding:1px 6px;border-radius:3px">PENDING</span>' : '';
      const scoreCell = m.score
        ? `<div class="match-score">${m.score}</div>`
        : `<div class="match-score" style="color:var(--muted);font-size:.72rem">TBD</div>`;
      return `<div class="match-row" style="${isBlues?'border-color:var(--accent);background:rgba(184,122,16,.04)':''}">
        <div class="match-home" style="${isBlues&&m.home==='SREEVATSA BLUES'?'color:var(--accent);font-weight:700':''}">${m.home}${pendingBadge}</div>
        ${scoreCell}
        <div class="match-away" style="${isBlues&&m.away==='SREEVATSA BLUES'?'color:var(--accent);font-weight:700':''}">${m.away}</div>
        <div class="match-venue">${m.venue}</div>
      </div>`;
    }).join('');
    const upcomingBadge = !wk.done ? `<span class="wk-badge">UPCOMING</span>` : '';
    return `<div class="week-block">
      <div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span>${upcomingBadge}</div>
      ${rows}
    </div>`;
  }).join('');
}

function populateDivCResultsFilter() {
  const sel = document.getElementById('divc-results-team-filter');
  if (!sel) return;
  [...DIV_C_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.full; opt.textContent = t.full;
    sel.appendChild(opt);
  });
}

function buildDivCCourtRows(courts) {
  if (!courts || courts.length === 0) return '';
  return courts.map(ct => {
    const hw = ct.win === 'home';
    const aw = ct.win === 'away';
    return '<div style="display:grid;grid-template-columns:1fr 100px 1fr;align-items:center;padding:6px 16px 6px 28px;border-bottom:1px solid #d1d9e6;font-size:.78rem;">'
      + '<div style="' + (hw ? 'font-weight:600;color:#1e293b' : 'color:#64748b') + '">' + ct.home + '</div>'
      + '<div style="text-align:center;"><span style="font-size:.62rem;color:#64748b;margin-right:3px;text-transform:uppercase;letter-spacing:.5px">Ct' + ct.ct + '</span>'
      + '<span style="font-family:\'DM Mono\',monospace;color:' + (hw ? '#22c55e' : aw ? '#ef4444' : '#64748b') + '">' + ct.sets + '</span></div>'
      + '<div style="' + (aw ? 'font-weight:600;color:#1e293b' : 'color:#64748b') + '">' + ct.away + '</div></div>';
  }).join('');
}


function renderDivCResults() {
  const filterWeek = parseInt(document.getElementById('divc-results-week-filter')?.value) || null;
  const filterTeam = document.getElementById('divc-results-team-filter')?.value || '';
  const c = document.getElementById('divc-results-container');
  if (!c) return;
  const played = DIV_C_SCHEDULE.filter(w => (w.done || w.matches.some(m => m.score && !m.rest)) && (!filterWeek || w.week === filterWeek));
  let html = '';
  played.forEach(wk => {
    const blocks = wk.matches
      .filter(m => !m.rest && m.score && (!filterTeam || m.home === filterTeam || m.away === filterTeam))
      .map(m => {
        const parts = m.score.split('-').map(Number);
        const hw = parts[0] > parts[1];
        const isBlues = m.home === 'SREEVATSA BLUES' || m.away === 'SREEVATSA BLUES';
        const hasCourts = m.courts && m.courts.length > 0;
        const courtDetail = hasCourts ? (
          '<div style="border-top:1px solid #d1d9e6;">'
          + '<div style="display:grid;grid-template-columns:1fr 100px 1fr;padding:4px 16px 4px 28px;background:#eef1f6;">'
          + '<div style="font-size:.62rem;color:#64748b;text-transform:uppercase;letter-spacing:.8px">' + m.home + '</div>'
          + '<div style="text-align:center;font-size:.62rem;color:#64748b;text-transform:uppercase;letter-spacing:.8px">SET SCORES</div>'
          + '<div style="font-size:.62rem;color:#64748b;text-transform:uppercase;letter-spacing:.8px">' + m.away + '</div>'
          + '</div>'
          + buildDivCCourtRows(m.courts)
          + '</div>'
        ) : '';
        return '<div style="background:#ffffff;border:1px solid ' + (isBlues?'var(--accent)':'#d1d9e6') + ';border-radius:6px;margin-bottom:8px;overflow:hidden;">'
          + '<div style="display:grid;grid-template-columns:1fr 70px 1fr 1fr;gap:10px;align-items:center;padding:10px 16px;">'
          + '<div style="text-align:right;font-size:.85rem;font-weight:' + (hw?700:400) + ';' + (isBlues&&m.home==='SREEVATSA BLUES'?'color:var(--accent);':'') + '">' + m.home + (hw?' <span style="color:#16a34a;font-size:.7rem">&#9679;</span>':'') + '</div>'
          + '<div style="text-align:center;font-family:\'DM Mono\',monospace;font-weight:700;font-size:.9rem;color:var(--accent)">' + m.score + '</div>'
          + '<div style="font-size:.85rem;font-weight:' + (!hw?700:400) + ';' + (isBlues&&m.away==='SREEVATSA BLUES'?'color:var(--accent);':'') + '">' + (!hw?'<span style="color:#16a34a;font-size:.7rem">&#9679;</span> ':'') + m.away + '</div>'
          + '<div style="font-size:.72rem;color:#64748b">' + m.venue + '</div>'
          + '</div>'
          + courtDetail
          + '</div>';
      }).join('');
    if (blocks) html += '<div class="week-block"><div class="week-label">WEEK ' + wk.week + ' \u2014 <span class="wk-date">' + wk.date + '</span></div>' + blocks + '</div>';
  });
  c.innerHTML = (html ? RESULTS_COL_HEADER + html : '<div style="color:#64748b;padding:20px">No results found.</div>');
}
function renderDivCTeams() {
  const tb = document.getElementById('tbody-divc-teams');
  if (!tb) return;
  const allTeams = [...DIV_I_TEAMS, ...DIV_C_TEAMS, ...DIV_F_TEAMS];
  const clubCount = {};
  allTeams.forEach(t => clubCount[t.club] = (clubCount[t.club]||0)+1);
  tb.innerHTML = [...DIV_C_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).map((t,i) => {
    const count = clubCount[t.club];
    const shared = count > 1;
    const clubCell = shared
      ? `<td><span style="color:var(--accent);font-weight:600">${t.club}</span> <span style="font-size:.62rem;background:rgba(184,122,16,.15);color:var(--accent);padding:1px 6px;border-radius:3px;letter-spacing:.5px">${count} TEAMS</span></td>`
      : `<td style="color:var(--muted);font-size:.82rem">${t.club}</td>`;
    const capPlayer = DIV_C_PLAYERS.find(p => p.team === t.short && p.role === 'Captain');
    const capPhoto = capPlayer && capPlayer.photo ? `<img src="${_esc(capPlayer.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    return `<tr>
      <td class="rank-cell">${i+1}</td>
      <td><strong>${t.full}</strong></td>
      <td><span class="team-badge">${t.short}</span></td>
      <td>${capPhoto}${t.captain} <span class="pill pill-gold" style="margin-left:4px">C</span>${t.mobile ? '<br><a href="tel:'+_esc(t.mobile)+'" style="font-size:.7rem;color:var(--muted);font-family:\'DM Mono\',monospace">📞 '+_esc(t.mobile)+'</a>' : ''}</td>
      ${clubCell}
      <td><span style="font-size:.72rem;padding:2px 7px;border-radius:3px;font-weight:600;letter-spacing:.5px;background:${t.surface==='Clay'?'rgba(180,100,30,.12)':t.surface==='Hard'?'rgba(37,99,235,.1)':'transparent'};color:${t.surface==='Clay'?'#a05a1a':t.surface==='Hard'?'var(--accent2)':'var(--muted)'}">${t.surface||'—'}</span></td>
      <td>${t.players}</td>
    </tr>`;
  }).join('');
}

// ─── PARTNERS (Div C — SREEVATSA BLUES, derived from court records) ───────────

// ─── PARTNERS (Div F — SREEVATSA ACES, derived from court records Wks 2–7) ─

function renderDivCPlayers() {
  const search  = (document.getElementById('divc-player-search')?.value || '').toLowerCase();
  const teamF   = document.getElementById('divc-player-team-filter')?.value || '';
  const genderF = document.getElementById('divc-player-gender-filter')?.value || '';
  const ages = DIV_C_PLAYERS.filter(p => p.age !== null).map(p => p.age);
  const maxAge = ages.length ? Math.max(...ages) : null;
  const minAge = ages.length ? Math.min(...ages) : null;

  let filtered = DIV_C_PLAYERS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search)) return false;
    if (teamF && p.team !== teamF) return false;
    if (genderF && p.gender !== genderF) return false;
    return true;
  });

  filtered.sort((a,b) => {
    let av = a[divCSortKey], bv = b[divCSortKey];
    if (divCSortKey === 'winpct') {
      av = (a.gamesPlayed !== null && a.gamesPlayed > 0) ? a.wins/a.gamesPlayed : -1;
      bv = (b.gamesPlayed !== null && b.gamesPlayed > 0) ? b.wins/b.gamesPlayed : -1;
    }
    if (av === null) av = -999; if (bv === null) bv = -999;
    if (typeof av === 'string') return divCSortDir * av.localeCompare(bv);
    return divCSortDir * (av - bv);
  });

  const tb = document.getElementById('tbody-divc-players');
  if (!tb) return;
  tb.innerHTML = filtered.map(p => {
    const hasData = p.gamesPlayed !== null;
    const pct = hasData && p.gamesPlayed > 0 ? Math.round((p.wins/p.gamesPlayed)*100) : null;
    const losses = hasData ? p.gamesPlayed - p.wins : null;
    const capTag = p.role==='Captain' ? ' <span class="pill pill-gold" style="font-size:.6rem;padding:1px 5px;vertical-align:middle">C</span>' : '';
    const ageTag = p.age === maxAge && maxAge !== null ? ' 🏅' : p.age === minAge && minAge !== null ? ' ⭐' : '';
    const winsDisplay = hasData
      ? `<span style="color:var(--green)">${p.wins}W</span>${losses > 0 ? ` <span style="color:var(--red)">${losses}L</span>` : ''}`
      : '<span style="color:var(--muted)">—</span>';
    const pList = DIV_C_PARTNERS[p.name];
    const partnerCell = pList
      ? pList.map(([n,c]) => `${n}<span style="font-family:'DM Mono',monospace;font-size:.68rem;color:var(--muted);margin-left:2px">(${c})</span>`).join(' · ')
      : '<span style="color:var(--muted)">—</span>';
    const photoHtml = p.photo ? `<img src="${_esc(p.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    return `<tr>
      <td>${photoHtml}${p.name}${ageTag}${capTag}</td>
      <td><span class="team-badge">${p.team}</span></td>
      <td class="${p.gender==='M'?'gender-m':'gender-f'}">${p.gender==='M'?'♂':'♀'}</td>
      <td style="font-family:'DM Mono',monospace;font-weight:600;color:${hasData?'var(--text)':'var(--muted)'}">${hasData ? p.gamesPlayed : '—'}</td>
      <td><span style="font-family:'DM Mono',monospace">${winsDisplay}</span></td>
      <td>${pct !== null ? `<div class="win-bar-wrap"><div class="win-bar"><div class="win-bar-fill" style="width:${pct}%"></div></div><span style="font-family:'DM Mono',monospace;font-size:.78rem;color:${pct>=70?'var(--green)':pct>=40?'var(--text)':'var(--muted)'}">${pct}%</span></div>` : '<span style="color:var(--muted)">—</span>'}</td>
      <td style="font-size:.76rem;line-height:1.6">${partnerCell}</td>
    </tr>`;
  }).join('');

  const countEl = document.getElementById('divc-player-count');
  if (countEl) countEl.innerHTML = `Showing ${filtered.length} of ${DIV_C_PLAYERS.length} players`;

  // Totals summary
  const withData = filtered.filter(p => p.gamesPlayed !== null);
  const totalPlayed = withData.reduce((s,p) => s+p.gamesPlayed, 0);
  const totalWins   = withData.reduce((s,p) => s+p.wins, 0);
  const totalLosses = totalPlayed - totalWins;
  const totalPct    = totalPlayed > 0 ? Math.round((totalWins/totalPlayed)*100) : 0;
  const teamsInFilter = [...new Set(filtered.map(p => p.team))];
  const totalsEl = document.getElementById('divc-player-totals');
  if (totalsEl) totalsEl.innerHTML = withData.length === 0
    ? '<span style="color:var(--muted);font-size:.8rem">No court data for selected players</span>'
    : `<span style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;white-space:nowrap">${teamsInFilter.length} team${teamsInFilter.length>1?'s':''} · ${withData.length} players</span>`
    + `<span style="font-family:'DM Mono',monospace;font-weight:700;font-size:.92rem;color:var(--text)">${totalPlayed} <span style="font-size:.7rem;font-weight:400;color:var(--muted)">courts played</span></span>`
    + `<span style="font-family:'DM Mono',monospace;font-weight:700;font-size:.92rem;color:var(--green)">${totalWins}W</span>`
    + `<span style="font-family:'DM Mono',monospace;font-weight:700;font-size:.92rem;color:var(--red)">${totalLosses}L</span>`
    + `<span style="font-family:'DM Mono',monospace;font-size:.85rem;color:${totalPct>=60?'var(--green)':totalPct>=40?'var(--text)':'var(--muted)'}">${totalPct}% win rate</span>`;
}

function populateDivCPlayerFilter() {
  const sel = document.getElementById('divc-player-team-filter');
  if (!sel) return;
  [...DIV_C_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.short; opt.textContent = t.full;
    sel.appendChild(opt);
  });
}


function divisionComingSoon(div) {
  const el = document.createElement('div');
  el.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:#1e3a5f;color:#fff;padding:10px 22px;border-radius:8px;font-size:.82rem;font-weight:600;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.2);pointer-events:none;';
  el.textContent = `Division ${div} data coming soon`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}

// ─── SVG CLUB DIV_I_PLAYERS ────────────────────────────────────────────────────────
let svgClubFilter = 'all';

function filterSvgClub(team) {
  svgClubFilter = team;
  // Update button styles
  ['all','STARS','CHAMPS','SVG-C','ACES'].forEach(t => {
    const btn = document.getElementById('svgbtn-' + t);
    if (!btn) return;
    const active = t === team;
    btn.style.background = active ? 'var(--accent)' : 'var(--surface)';
    btn.style.color = active ? '#fff' : 'var(--text)';
    btn.style.borderColor = active ? 'var(--accent)' : 'var(--border)';
  });
  renderSvgClub();
}

function renderSvgClub() {
  // Merge players from all Sreevatsa Club teams across divisions
  const divIPlayers  = DIV_I_PLAYERS.filter(p => p.team === 'STARS' || p.team === 'CHAMPS');
  const divCPlayers  = DIV_C_PLAYERS.filter(p => p.team === 'SVG-C');
  const divFPlayers  = DIV_F_PLAYERS.filter(p => p.team === 'ACES');
  const allPlayers   = [...divIPlayers, ...divCPlayers, ...divFPlayers];

  const players = svgClubFilter === 'all'
    ? allPlayers
    : allPlayers.filter(p => p.team === svgClubFilter);

  const sorted = [...players].sort((a,b) => {
    const aw = a.wins ?? -1, bw = b.wins ?? -1;
    if (bw !== aw) return bw - aw;
    return a.name.localeCompare(b.name);
  });

  let totalCts = 0, totalWins = 0, withData = 0;

  const rows = sorted.map(p => {
    const hasData = p.gamesPlayed !== null;
    const pct = hasData && p.gamesPlayed > 0 ? Math.round((p.wins/p.gamesPlayed)*100) : null;
    const losses = hasData ? p.gamesPlayed - p.wins : null;
    if (hasData) { totalCts += p.gamesPlayed; totalWins += p.wins; withData++; }

    const isMe = p.team === 'STARS' && p.name === 'Ramesh';
    const capTag = p.role === 'Captain'
      ? ' <span class="pill pill-gold" style="font-size:.6rem;padding:1px 5px;vertical-align:middle">C</span>'
      : '';
    const divLabel = p.team === 'SVG-C' ? 'Div C' : p.team === 'ACES' ? 'Div F' : 'Div I';
    const genderCell = p.gender === 'F'
      ? `<td class="gender-f">♀</td>`
      : `<td class="gender-m" style="color:var(--muted)">♂</td>`;
    const winsDisplay = hasData
      ? `<span style="color:var(--green)">${p.wins}W</span>${losses > 0 ? ` <span style="color:var(--red)">${losses}L</span>` : ''}`
      : '<span style="color:var(--muted)">—</span>';

    const pMap = p.team === 'SVG-C' ? DIV_C_PARTNERS : p.team === 'ACES' ? DIV_F_PARTNERS : DIV_I_PARTNERS;
    const pList = pMap[p.name];
    const partnerCell = pList
      ? pList.map(([n,c]) => `${n}<span style="font-family:'DM Mono',monospace;font-size:.68rem;color:var(--muted);margin-left:2px">(${c})</span>`).join(' · ')
      : '<span style="color:var(--muted)">—</span>';

    const photoHtml = p.photo ? `<img src="${_esc(p.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    return `<tr${isMe ? ' style="background:#fffbeb"' : ''}>
      <td>${photoHtml}${p.name}${p.age===80?' 🏅':''}${capTag}</td>
      <td style="font-size:.75rem;color:var(--muted);font-family:'DM Mono',monospace">${divLabel}</td>
      <td><span class="team-badge">${p.team}</span></td>
      ${genderCell}
      <td style="font-family:'DM Mono',monospace;font-weight:600">${hasData ? p.gamesPlayed : '<span style="color:var(--muted)">—</span>'}</td>
      <td><span style="font-family:'DM Mono',monospace">${winsDisplay}</span></td>
      <td>${pct !== null
        ? `<div class="win-bar-wrap">
            <div class="win-bar"><div class="win-bar-fill" style="width:${pct}%;background:${pct>=70?'var(--green)':pct>=40?'var(--accent2)':'var(--red)'}"></div></div>
            <span style="font-size:.72rem;color:var(--muted)">${pct}%</span>
           </div>`
        : `<span style="color:var(--muted)">—</span>`}
      </td>
      <td style="font-size:.76rem;line-height:1.6">${partnerCell}</td>
    </tr>`;
  }).join('');

  document.getElementById('tbody-svgclub-merged').innerHTML = rows;

  const totalPct = totalCts > 0 ? Math.round((totalWins/totalCts)*100) : 0;
  const totalLosses = totalCts - totalWins;
  const teamLabel = svgClubFilter === 'all' ? '4 teams · ' + allPlayers.length + ' players' : players.length + ' players';
  document.getElementById('svgclub-totals').innerHTML =
    `<span style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px">${teamLabel}</span>` +
    `<span style="font-family:'DM Mono',monospace;font-weight:700">${totalCts} <span style="font-size:.7rem;font-weight:400;color:var(--muted)">courts played</span></span>` +
    `<span style="font-family:'DM Mono',monospace;font-weight:700;color:var(--green)">${totalWins}W</span>` +
    `<span style="font-family:'DM Mono',monospace;font-weight:700;color:var(--red)">${totalLosses}L</span>` +
    `<span style="font-family:'DM Mono',monospace;font-size:.85rem;color:${totalPct>=60?'var(--green)':'var(--muted)'};font-weight:700">${totalPct}% win rate</span>` +
    `<span style="font-size:.75rem;color:var(--muted)">${withData} of ${players.length} players with court data</span>`;
}

// ─── SVG RANK ────────────────────────────────────────────────────────────────
function renderSvgRank() {
  const divIPlayers = DIV_I_PLAYERS.filter(p => p.team === 'STARS' || p.team === 'CHAMPS');
  const divCPlayers = DIV_C_PLAYERS.filter(p => p.team === 'SVG-C');
  const divFPlayers = DIV_F_PLAYERS.filter(p => p.team === 'ACES');
  const all = [...divIPlayers, ...divCPlayers, ...divFPlayers];

  // Calculate rating for each player
  const rated = all.map(p => {
    const gp = p.gamesPlayed ?? 0;
    const w  = p.wins ?? 0;
    const pct = gp > 0 ? (w / gp) * 100 : 0;
    const volFactor = Math.min(gp / 3, 1.0);
    const rating = gp > 0 ? Math.round(pct * volFactor) : -1;
    return { ...p, gp, w, pct: gp > 0 ? Math.round(pct) : null, rating };
  });

  // Define tiers
  const tiers = [
    { name: 'Elite',      min: 75, color: '#b8860b', bg: '#fffbeb', border: '#f59e0b', icon: '🏆', desc: 'Dominant performers — high win rate with significant court time' },
    { name: 'Strong',     min: 50, color: '#16a34a', bg: '#f0fdf4', border: '#22c55e', icon: '💪', desc: 'Solid contributors — reliable and consistent' },
    { name: 'Developing', min: 25, color: '#2563eb', bg: '#eff6ff', border: '#3b82f6', icon: '📈', desc: 'Building experience — improving with each match' },
    { name: 'Rising',     min: -2, color: '#6b7280', bg: '#f9fafb', border: '#d1d5db', icon: '🌱', desc: 'New or limited court time — potential yet to be realized' }
  ];

  let html = '';
  let overallRank = 1;

  tiers.forEach(tier => {
    const inTier = rated.filter(p => {
      if (tier.name === 'Elite')      return p.rating >= 75;
      if (tier.name === 'Strong')     return p.rating >= 50 && p.rating < 75;
      if (tier.name === 'Developing') return p.rating >= 25 && p.rating < 50;
      return p.rating < 25;
    }).sort((a, b) => b.rating - a.rating || b.w - a.w || a.name.localeCompare(b.name));

    if (inTier.length === 0) return;

    html += `<div style="margin-bottom:24px;border:2px solid ${tier.border};border-radius:12px;overflow:hidden">`;
    html += `<div style="background:${tier.bg};padding:14px 18px;border-bottom:1px solid ${tier.border};display:flex;align-items:center;gap:10px">`;
    html += `<span style="font-size:1.4rem">${tier.icon}</span>`;
    html += `<div>`;
    html += `<div style="font-family:'Bebas Neue',sans-serif;font-size:1.1rem;color:${tier.color};letter-spacing:1.5px">${tier.name.toUpperCase()} <span style="font-family:'DM Mono',monospace;font-size:.75rem;background:${tier.color};color:#fff;padding:2px 8px;border-radius:4px;margin-left:6px">${inTier.length}</span></div>`;
    html += `<div style="font-size:.72rem;color:var(--muted)">${tier.desc}</div>`;
    html += `</div></div>`;

    html += `<div class="table-wrap"><table style="width:100%"><thead><tr>`;
    html += `<th style="width:36px">#</th>`;
    html += `<th>Player</th>`;
    html += `<th>Team</th>`;
    html += `<th>Div</th>`;
    html += `<th title="Rating = Win% × Volume Factor">Rating</th>`;
    html += `<th>Played</th>`;
    html += `<th>W / L</th>`;
    html += `<th>Win %</th>`;
    html += `</tr></thead><tbody>`;

    inTier.forEach(p => {
      const divLabel = p.team === 'SVG-C' ? 'C' : p.team === 'ACES' ? 'F' : 'I';
      const teamName = p.team === 'STARS' ? 'Stars' : p.team === 'CHAMPS' ? 'Champs' : p.team === 'SVG-C' ? 'Blues' : 'Aces';
      const losses = p.gp - p.w;
      const isMe = p.team === 'STARS' && p.name === 'Ramesh';
      const capTag = p.role === 'Captain' ? ' <span class="pill pill-gold" style="font-size:.55rem;padding:1px 4px;vertical-align:middle">C</span>' : '';
      const genderIcon = p.gender === 'F' ? '<span class="gender-f" style="margin-left:4px">♀</span>' : '';
      const ratingBar = p.rating >= 0
        ? `<div style="display:flex;align-items:center;gap:6px">
            <div style="width:50px;height:6px;background:#e5e7eb;border-radius:3px;overflow:hidden">
              <div style="width:${p.rating}%;height:100%;background:${tier.color};border-radius:3px"></div>
            </div>
            <span style="font-family:'DM Mono',monospace;font-weight:700;font-size:.8rem;color:${tier.color}">${p.rating}</span>
          </div>`
        : '<span style="color:var(--muted);font-size:.75rem">—</span>';
      const winPct = p.pct !== null
        ? `<span style="font-family:'DM Mono',monospace;font-size:.8rem;font-weight:600;color:${p.pct>=70?'var(--green)':p.pct>=40?'var(--accent2)':'var(--red)'}">${p.pct}%</span>`
        : '<span style="color:var(--muted)">—</span>';

      html += `<tr${isMe ? ' style="background:#fffbeb"' : ''}>`;
      html += `<td style="font-family:'DM Mono',monospace;font-weight:700;color:${tier.color};text-align:center">${overallRank}</td>`;
      html += `<td>${p.name}${genderIcon}${capTag}</td>`;
      html += `<td><span class="team-badge">${teamName}</span></td>`;
      html += `<td style="font-family:'DM Mono',monospace;font-size:.72rem;color:var(--muted)">Div ${divLabel}</td>`;
      html += `<td>${ratingBar}</td>`;
      html += `<td style="font-family:'DM Mono',monospace;font-weight:600">${p.gp > 0 ? p.gp : '<span style="color:var(--muted)">—</span>'}</td>`;
      html += `<td style="font-family:'DM Mono',monospace">${p.gp > 0 ? `<span style="color:var(--green)">${p.w}W</span> <span style="color:var(--red)">${losses}L</span>` : '<span style="color:var(--muted)">—</span>'}</td>`;
      html += `<td>${winPct}</td>`;
      html += `</tr>`;
      overallRank++;
    });

    html += `</tbody></table></div></div>`;
  });

  // Summary stats
  const withData = rated.filter(p => p.gp > 0);
  const totalPlayed = withData.reduce((s, p) => s + p.gp, 0);
  const totalWins = withData.reduce((s, p) => s + p.w, 0);
  const avgRating = withData.length > 0 ? Math.round(withData.reduce((s, p) => s + p.rating, 0) / withData.length) : 0;

  let summary = `<div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:20px">`;
  summary += `<div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 20px;text-align:center"><div style="font-family:'DM Mono',monospace;font-weight:700;font-size:1.3rem">${rated.length}</div><div style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px">Total Players</div></div>`;
  summary += `<div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 20px;text-align:center"><div style="font-family:'DM Mono',monospace;font-weight:700;font-size:1.3rem">${withData.length}</div><div style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px">With Court Data</div></div>`;
  summary += `<div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 20px;text-align:center"><div style="font-family:'DM Mono',monospace;font-weight:700;font-size:1.3rem;color:var(--green)">${totalWins}</div><div style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px">Total Wins</div></div>`;
  summary += `<div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px 20px;text-align:center"><div style="font-family:'DM Mono',monospace;font-weight:700;font-size:1.3rem">${avgRating}</div><div style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px">Avg Rating</div></div>`;
  summary += `</div>`;

  document.getElementById('svg-rank-content').innerHTML = summary + html;
}

// ─── DIVISION / SVG CLUB SWITCHER ─────────────────────────────────────────────
function showSvgTab(name, btn) {
  ['performance','players','rank'].forEach(t => {
    const el = document.getElementById('svgtab-'+t);
    if (el) el.style.display = t === name ? 'block' : 'none';
  });
  document.querySelectorAll('[id^="svgsubbtn-"]').forEach(b => {
    b.style.borderBottomColor = 'transparent';
    b.style.color = 'var(--muted)';
    b.style.fontWeight = '500';
  });
  if (btn) {
    btn.style.borderBottomColor = 'var(--accent2)';
    btn.style.color = 'var(--accent2)';
    btn.style.fontWeight = '600';
  }
  if (name === 'rank') renderSvgRank();
  if (name === 'players') renderSvgClub();
  if (name === 'performance') renderSvgPerformance();
}

// ─── SVG CLUB PERFORMANCE: Dashboard Grid ────────────────────────────────────
function renderSvgPerformance() {
  const el = document.getElementById('svg-performance-content');
  if (!el) return;

  function teamInfo(short, standings, projections, players, teamsArr, schedule, divLabel) {
    const st = standings.find(t => t.short === short);
    const pr = projections.find(t => t.short === short);
    const tm = teamsArr.find(t => t.short === short);
    const pl = players.filter(p => p.team === short);
    const withData = pl.filter(p => p.gamesPlayed > 0);
    const totalWins = withData.reduce((s,p) => s + p.wins, 0);
    const totalPlayed = withData.reduce((s,p) => s + p.gamesPlayed, 0);
    // Projected position
    const sorted = [...projections].sort((a,b) => b.projected - a.projected);
    const projPos = pr ? sorted.findIndex(x => x.short === short) + 1 : null;
    // Home/Away match W-L
    let homeW=0, homeL=0, awayW=0, awayL=0;
    schedule.forEach(wk => {
      if (!wk.matches) return;
      wk.matches.forEach(m => {
        if (m.rest || !m.score) return;
        const [hS, aS] = m.score.split('-').map(Number);
        const isHome = m.home.includes(st.full);
        const isAway = m.away.includes(st.full);
        if (isHome) { if (hS > aS) homeW++; else homeL++; }
        if (isAway) { if (aS > hS) awayW++; else awayL++; }
      });
    });
    // Walkovers
    const woKey = typeof DIV_I_WALKOVERS !== 'undefined' && DIV_I_WALKOVERS[short] ? 'I' : typeof DIV_C_WALKOVERS !== 'undefined' && DIV_C_WALKOVERS[short] ? 'C' : typeof DIV_F_WALKOVERS !== 'undefined' && DIV_F_WALKOVERS[short] ? 'F' : null;
    const woMap = woKey === 'I' ? DIV_I_WALKOVERS : woKey === 'C' ? DIV_C_WALKOVERS : woKey === 'F' ? DIV_F_WALKOVERS : {};
    const wos = woMap[short] ? woMap[short].wosGiven : 0;
    // Remaining fixtures
    const remaining = [];
    schedule.forEach(wk => {
      if (!wk.matches) return;
      wk.matches.forEach(m => {
        if (m.rest || m.score) return;
        if (m.home.includes(st.full) || m.away.includes(st.full)) {
          const isHome = m.home.includes(st.full);
          remaining.push({ wk:wk.week, opp:isHome?m.away:m.home, venue:isHome?'Home':'Away' });
        }
      });
    });
    return { st, pr, tm, pl, withData, totalWins, totalPlayed, divLabel, projPos, totalTeams:projections.length, homeW, homeL, awayW, awayL, wos, remaining };
  }

  const teams = [
    teamInfo('STARS', DIV_I_STANDINGS, DIV_I_PROJECTIONS, DIV_I_PLAYERS, DIV_I_TEAMS, DIV_I_SCHEDULE, 'I'),
    teamInfo('CHAMPS', DIV_I_STANDINGS, DIV_I_PROJECTIONS, DIV_I_PLAYERS, DIV_I_TEAMS, DIV_I_SCHEDULE, 'I'),
    teamInfo('SVG-C', DIV_C_STANDINGS, DIV_C_PROJECTIONS, DIV_C_PLAYERS, DIV_C_TEAMS, DIV_C_SCHEDULE, 'C'),
    teamInfo('ACES', DIV_F_STANDINGS, DIV_F_PROJECTIONS, DIV_F_PLAYERS, DIV_F_TEAMS, DIV_F_SCHEDULE, 'F'),
  ];

  const names = { STARS:'Stars', CHAMPS:'Champs', 'SVG-C':'Blues', ACES:'Aces' };
  const colors = { STARS:'#0d9488', CHAMPS:'#64748b', 'SVG-C':'#2563eb', ACES:'#16a34a' };

  // Club totals
  const totalPts = teams.reduce((s,t) => s + t.st.pts, 0);
  const totalCourtsWon = teams.reduce((s,t) => s + t.totalWins, 0);
  const totalCourtsPlayed = teams.reduce((s,t) => s + t.totalPlayed, 0);
  const totalPlayers = teams.reduce((s,t) => s + t.pl.length, 0);
  const clubWinRate = totalCourtsPlayed > 0 ? Math.round(totalCourtsWon/totalCourtsPlayed*100) : 0;

  let html = '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:1.1rem;color:var(--accent);text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;">🏟️ Sreevatsa Club — Season Dashboard</div>';

  // Club-wide summary tiles
  html += `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px;margin-bottom:24px">`;
  [{v:4,l:'Teams',c:''},{v:totalPlayers,l:'Players',c:''},{v:totalPts,l:'Total Points',c:'var(--accent)'},{v:totalCourtsWon,l:'Courts Won',c:'var(--green)'},{v:clubWinRate+'%',l:'Club Win Rate',c:clubWinRate>=50?'var(--green)':'var(--red)'}].forEach(s => {
    html += `<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;text-align:center">`;
    html += `<div style="font-family:'DM Mono',monospace;font-weight:700;font-size:1.5rem;${s.c?'color:'+s.c:''}">${s.v}</div>`;
    html += `<div style="font-size:.65rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin-top:2px">${s.l}</div>`;
    html += `</div>`;
  });
  html += `</div>`;

  // Team comparison grid — 2x2
  html += `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;margin-bottom:24px">`;
  teams.forEach(t => {
    const c = colors[t.st.short];
    const courtsLost = t.st.played * 3 - t.st.pts;
    const matchPct = Math.round(t.st.pts / (t.st.played * 3) * 100);
    const projPts = t.pr ? t.pr.projected.toFixed(1) : '—';
    const winRate = t.totalPlayed > 0 ? Math.round(t.totalWins/t.totalPlayed*100) : 0;
    const femaleCount = t.pl.filter(p => p.gender === 'F').length;
    const ages = t.pl.filter(p => p.age).map(p => p.age);
    const ageRange = ages.length > 0 ? Math.min(...ages) + ' – ' + Math.max(...ages) : '—';
    // Top player
    const topP = [...t.withData].sort((a,b) => b.wins - a.wins)[0];
    // Key pair from partners
    const pMap = t.st.short === 'SVG-C' ? (typeof DIV_C_PARTNERS!=='undefined'?DIV_C_PARTNERS:{}) : t.st.short === 'ACES' ? (typeof DIV_F_PARTNERS!=='undefined'?DIV_F_PARTNERS:{}) : (typeof DIV_I_PARTNERS!=='undefined'?DIV_I_PARTNERS:{});
    let bestPair = null, bestPairCount = 0;
    t.withData.forEach(p => {
      const pList = pMap[p.name];
      if (!pList) return;
      pList.forEach(([partner, count]) => {
        if (count > bestPairCount && t.pl.some(x => x.name === partner)) {
          bestPair = p.name + ' & ' + partner;
          bestPairCount = count;
        }
      });
    });

    html += `<div style="background:var(--surface);border:2px solid ${c};border-radius:12px;overflow:hidden">`;
    // Header
    html += `<div style="background:${c};color:#fff;padding:12px 16px;display:flex;justify-content:space-between;align-items:center">`;
    html += `<div><div style="font-weight:700;font-size:.9rem">${names[t.st.short]}</div><div style="font-size:.68rem;opacity:.8">Div ${t.divLabel}</div></div>`;
    const projPosColor = t.projPos && t.projPos <= 3 ? '#86efac' : t.projPos >= 8 ? '#fca5a5' : 'rgba(255,255,255,.7)';
    html += `<div style="text-align:right"><div style="font-family:'DM Mono',monospace;font-size:1.8rem;font-weight:700">${t.st.pts}</div><div style="font-size:.65rem;opacity:.7">#${t.st.rank} now · ${projPts} proj</div>${t.projPos ? `<div style="font-size:.65rem;color:${projPosColor};font-weight:600">Proj #${t.projPos} of ${t.totalTeams}</div>` : ''}</div>`;
    html += `</div>`;

    // Body
    html += `<div style="padding:14px 16px">`;

    // Progress bar
    html += `<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;font-size:.68rem;color:var(--muted);margin-bottom:3px"><span>Court Win Rate</span><span style="font-weight:600">${matchPct}%</span></div>`;
    html += `<div style="height:8px;background:#e5e7eb;border-radius:4px;overflow:hidden"><div style="width:${matchPct}%;height:100%;background:${c};border-radius:4px"></div></div></div>`;

    // Full stat grid
    const statTile = (val, lbl, valColor) => `<div style="background:var(--bg);border-radius:6px;padding:7px 4px;text-align:center"><div style="font-family:'DM Mono',monospace;font-weight:700;font-size:.85rem;${valColor?'color:'+valColor:''}">${val}</div><div style="color:var(--muted);font-size:.58rem;text-transform:uppercase;letter-spacing:.5px">${lbl}</div></div>`;

    html += `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:12px">`;
    html += statTile(t.st.played, 'Weeks', '');
    html += statTile(t.pl.length, 'Players', '');
    html += statTile(t.st.pts, 'Courts W', 'var(--green)');
    html += statTile(courtsLost, 'Courts L', 'var(--red)');
    html += statTile(t.st.setsW, 'Sets W', 'var(--green)');
    html += statTile(t.st.setsL, 'Sets L', 'var(--red)');
    html += statTile(t.st.gamesW, 'Games W', '');
    html += statTile(t.st.gamesL, 'Games L', '');
    html += `</div>`;

    // Detail rows
    const row = (lbl, val) => `<div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">${lbl}</span><span style="font-family:'DM Mono',monospace;font-weight:600">${val}</span></div>`;

    html += `<div style="font-size:.76rem;line-height:2;border-top:1px solid var(--border);padding-top:8px">`;
    // Captain
    if (t.tm) html += row('Captain', _esc(t.tm.captain));
    // Projected position
    if (t.projPos) {
      const ppColor = t.projPos <= 3 ? 'var(--green)' : t.projPos >= 8 ? 'var(--red)' : 'var(--accent2)';
      html += `<div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Projected Position</span><span style="font-family:'DM Mono',monospace;font-weight:700;color:${ppColor}">#${t.projPos} <span style="font-size:.68rem;color:var(--muted);font-weight:400">of ${t.totalTeams}</span></span></div>`;
    }
    // Home/Away
    html += `<div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Home Record</span><span><span style="color:var(--green);font-family:'DM Mono',monospace;font-weight:600">${t.homeW}W</span> – <span style="color:var(--red);font-family:'DM Mono',monospace;font-weight:600">${t.homeL}L</span></span></div>`;
    html += `<div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Away Record</span><span><span style="color:var(--green);font-family:'DM Mono',monospace;font-weight:600">${t.awayW}W</span> – <span style="color:var(--red);font-family:'DM Mono',monospace;font-weight:600">${t.awayL}L</span></span></div>`;
    // Win rate
    html += `<div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Player Win Rate</span><span style="font-family:'DM Mono',monospace;font-weight:600;color:${winRate>=60?'var(--green)':'var(--muted)'}">${winRate}%</span></div>`;
    // Walkovers
    html += `<div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Walkovers Given</span><span style="font-family:'DM Mono',monospace;font-weight:600;${t.wos>0?'color:var(--red)':''}">${t.wos}</span></div>`;
    // Female / Age
    html += row('Female Players', femaleCount);
    html += row('Age Range', ageRange);
    // Top player
    if (topP) html += `<div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Top Player</span><span style="font-weight:600">${_esc(topP.name)} <span style="font-family:'DM Mono',monospace;font-size:.72rem"><span style="color:var(--green)">${topP.wins}W</span>/<span style="color:var(--red)">${topP.gamesPlayed-topP.wins}L</span></span></span></div>`;
    // Key pair
    if (bestPair) html += `<div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">Key Pair</span><span style="font-weight:600;font-size:.72rem">${_esc(bestPair)} <span style="font-family:'DM Mono',monospace;color:var(--accent2)">(${bestPairCount}m)</span></span></div>`;
    html += `</div>`;

    // Remaining fixtures
    if (t.remaining.length > 0) {
      html += `<div style="border-top:1px solid var(--border);padding-top:8px;margin-top:4px">`;
      html += `<div style="font-size:.68rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px;font-weight:600">Remaining Fixtures</div>`;
      html += `<div style="display:flex;gap:6px;flex-wrap:wrap">`;
      t.remaining.forEach(f => {
        const vBg = f.venue === 'Home' ? '#f0fdf4' : '#eff6ff';
        const vColor = f.venue === 'Home' ? 'var(--green)' : 'var(--accent2)';
        html += `<div style="background:${vBg};border:1px solid var(--border);border-radius:5px;padding:4px 10px;font-size:.72rem">`;
        html += `<span style="font-weight:600">Wk${f.wk}</span> <span style="color:${vColor};font-weight:600;font-size:.65rem">${f.venue}</span> vs <span style="font-size:.68rem">${_esc(f.opp)}</span>`;
        html += `</div>`;
      });
      html += `</div></div>`;
    }

    html += `</div></div>`;
  });
  html += `</div>`;

  el.innerHTML = html;
}

function switchToSvgClub(btn) {
  document.querySelectorAll('.div-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('nav-divs').style.display = 'none';
  document.getElementById('nav-svg').style.display = 'flex';
  const ovNav = document.getElementById('nav-overview');
  if (ovNav) ovNav.style.display = 'none';
  const adNav = document.getElementById('nav-admin');
  if (adNav) adNav.style.display = 'none';
  _savePageState('svg', 'svgclub');
  showPageDirect('svgclub');
  // Default to Club Performance sub-tab
  const perfBtn = document.getElementById('svgsubbtn-performance');
  if (perfBtn) showSvgTab('performance', perfBtn);
}

// ═══════════════ OVERVIEW (Consolidated Dashboard) ═══════════════
function switchToOverview(btn) {
  document.querySelectorAll('.div-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('nav-divs').style.display = 'none';
  document.getElementById('nav-svg').style.display = 'none';
  const ovNav = document.getElementById('nav-overview');
  if (ovNav) ovNav.style.display = 'flex';
  const adNav = document.getElementById('nav-admin');
  if (adNav) adNav.style.display = 'none';
  _savePageState('overview', 'leaders');
  renderOverviewLeaders();
  renderOverviewTeams();
  renderOverviewStats();
  showOverviewTab('leaders', document.getElementById('ovsubbtn-leaders'));
}

function showOverviewTab(name, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-overview-' + name).classList.add('active');
  document.querySelectorAll('#nav-overview .nav-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  _savePageState('overview', name);
  if (typeof _logUsage === 'function') _logUsage('page', 'overview-' + name);
  window.scrollTo(0,0);
}

// Helper: get all divisions as array of {letter, standings, teams, schedule, players}
function _getAllDivisions() {
  const divs = [];
  const all = [
    ['A', typeof DIV_A_STANDINGS!=='undefined'?DIV_A_STANDINGS:null, typeof DIV_A_TEAMS!=='undefined'?DIV_A_TEAMS:null, typeof DIV_A_SCHEDULE!=='undefined'?DIV_A_SCHEDULE:null, typeof DIV_A_PLAYERS!=='undefined'?DIV_A_PLAYERS:null],
    ['B', typeof DIV_B_STANDINGS!=='undefined'?DIV_B_STANDINGS:null, typeof DIV_B_TEAMS!=='undefined'?DIV_B_TEAMS:null, typeof DIV_B_SCHEDULE!=='undefined'?DIV_B_SCHEDULE:null, typeof DIV_B_PLAYERS!=='undefined'?DIV_B_PLAYERS:null],
    ['C', typeof DIV_C_STANDINGS!=='undefined'?DIV_C_STANDINGS:null, typeof DIV_C_TEAMS!=='undefined'?DIV_C_TEAMS:null, typeof DIV_C_SCHEDULE!=='undefined'?DIV_C_SCHEDULE:null, typeof DIV_C_PLAYERS!=='undefined'?DIV_C_PLAYERS:null],
    ['D', typeof DIV_D_STANDINGS!=='undefined'?DIV_D_STANDINGS:null, typeof DIV_D_TEAMS!=='undefined'?DIV_D_TEAMS:null, typeof DIV_D_SCHEDULE!=='undefined'?DIV_D_SCHEDULE:null, typeof DIV_D_PLAYERS!=='undefined'?DIV_D_PLAYERS:null],
    ['E', typeof DIV_E_STANDINGS!=='undefined'?DIV_E_STANDINGS:null, typeof DIV_E_TEAMS!=='undefined'?DIV_E_TEAMS:null, typeof DIV_E_SCHEDULE!=='undefined'?DIV_E_SCHEDULE:null, typeof DIV_E_PLAYERS!=='undefined'?DIV_E_PLAYERS:null],
    ['F', typeof DIV_F_STANDINGS!=='undefined'?DIV_F_STANDINGS:null, typeof DIV_F_TEAMS!=='undefined'?DIV_F_TEAMS:null, typeof DIV_F_SCHEDULE!=='undefined'?DIV_F_SCHEDULE:null, typeof DIV_F_PLAYERS!=='undefined'?DIV_F_PLAYERS:null],
    ['G', typeof DIV_G_STANDINGS!=='undefined'?DIV_G_STANDINGS:null, typeof DIV_G_TEAMS!=='undefined'?DIV_G_TEAMS:null, typeof DIV_G_SCHEDULE!=='undefined'?DIV_G_SCHEDULE:null, typeof DIV_G_PLAYERS!=='undefined'?DIV_G_PLAYERS:null],
    ['H', typeof DIV_H_STANDINGS!=='undefined'?DIV_H_STANDINGS:null, typeof DIV_H_TEAMS!=='undefined'?DIV_H_TEAMS:null, typeof DIV_H_SCHEDULE!=='undefined'?DIV_H_SCHEDULE:null, typeof DIV_H_PLAYERS!=='undefined'?DIV_H_PLAYERS:null],
    ['I', typeof DIV_I_STANDINGS!=='undefined'?DIV_I_STANDINGS:null, typeof DIV_I_TEAMS!=='undefined'?DIV_I_TEAMS:null, typeof DIV_I_SCHEDULE!=='undefined'?DIV_I_SCHEDULE:null, typeof DIV_I_PLAYERS!=='undefined'?DIV_I_PLAYERS:null],
    ['J', typeof DIV_J_STANDINGS!=='undefined'?DIV_J_STANDINGS:null, typeof DIV_J_TEAMS!=='undefined'?DIV_J_TEAMS:null, typeof DIV_J_SCHEDULE!=='undefined'?DIV_J_SCHEDULE:null, typeof DIV_J_PLAYERS!=='undefined'?DIV_J_PLAYERS:null],
    ['K', typeof DIV_K_STANDINGS!=='undefined'?DIV_K_STANDINGS:null, typeof DIV_K_TEAMS!=='undefined'?DIV_K_TEAMS:null, typeof DIV_K_SCHEDULE!=='undefined'?DIV_K_SCHEDULE:null, typeof DIV_K_PLAYERS!=='undefined'?DIV_K_PLAYERS:null],
  ];
  for (const [letter, st, tm, sc, pl] of all) {
    if (st && tm && sc && pl) divs.push({ letter, standings: st, teams: tm, schedule: sc, players: pl });
  }
  return divs;
}

function renderOverviewLeaders() {
  const divs = _getAllDivisions();
  let totalTeams = 0, totalPlayers = 0, totalMatches = 0, totalCourts = 0;
  divs.forEach(d => {
    totalTeams += d.teams.length;
    totalPlayers += d.players.length;
    d.schedule.forEach(wk => {
      if (!wk.matches) return;
      wk.matches.forEach(m => {
        if (m.rest || !m.score) return;
        totalMatches++;
        if (m.courts) totalCourts += m.courts.length;
      });
    });
  });
  const setEl = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  setEl('ov-total-divs', divs.length);
  setEl('ov-total-teams', totalTeams);
  setEl('ov-total-players', totalPlayers);
  setEl('ov-total-matches', totalMatches);
  setEl('ov-total-courts', totalCourts);

  // Leader cards
  const grid = document.getElementById('ov-leaders-grid');
  if (!grid) return;
  grid.innerHTML = divs.map(d => {
    const top3 = d.standings.slice(0, 3);
    const rows = top3.map((s,i) => {
      const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉';
      return `<div style="display:flex;gap:8px;align-items:center;padding:4px 0;font-size:.8rem">
        <span>${medal}</span>
        <span class="team-badge" style="font-size:.68rem">${_esc(s.short)}</span>
        <span style="flex:1;color:var(--text)">${_esc(s.full)}</span>
        <span style="font-family:'DM Mono',monospace;font-weight:700;color:var(--accent)">${s.pts}</span>
      </div>`;
    }).join('');
    return `<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px">
      <div style="font-weight:700;font-size:.95rem;margin-bottom:10px;color:var(--accent2)">Division ${d.letter}</div>
      ${rows}
      <div style="font-size:.68rem;color:var(--muted);margin-top:8px;padding-top:6px;border-top:1px dashed var(--border)">${d.teams.length} teams · ${d.players.length} players</div>
    </div>`;
  }).join('');
}

function renderOverviewTeams() {
  const filterDiv = (document.getElementById('ov-team-div-filter') || {}).value || '';
  const search = ((document.getElementById('ov-team-search') || {}).value || '').toLowerCase();
  const divs = _getAllDivisions();
  const rows = [];
  divs.forEach(d => {
    if (filterDiv && d.letter !== filterDiv) return;
    d.standings.forEach(s => {
      if (search && !s.full.toLowerCase().includes(search) && !s.short.toLowerCase().includes(search)) return;
      rows.push({ div: d.letter, rank: s.rank, short: s.short, full: s.full, pts: s.pts, setsW: s.setsW, setsL: s.setsL, gamesW: s.gamesW, gamesL: s.gamesL });
    });
  });
  const tb = document.getElementById('tbody-ov-teams');
  if (!tb) return;
  tb.innerHTML = rows.map((r, i) => `<tr>
    <td class="rank-cell">${i+1}</td>
    <td><span class="team-badge">Div ${r.div}</span></td>
    <td>${r.rank}</td>
    <td><strong>${_esc(r.full)}</strong> <span style="font-size:.72rem;color:var(--muted)">(${_esc(r.short)})</span></td>
    <td class="pts-cell">${r.pts}</td>
    <td class="text-mono">${r.setsW}-${r.setsL}</td>
    <td class="text-mono">${r.gamesW}-${r.gamesL}</td>
  </tr>`).join('');
  const cnt = document.getElementById('ov-team-count');
  if (cnt) cnt.textContent = `Showing ${rows.length} teams`;
}

function renderOverviewStats() {
  const divs = _getAllDivisions();
  const tb = document.getElementById('tbody-ov-stats');
  if (!tb) return;
  let totT=0, totP=0, totM=0, totC=0;
  const rows = divs.map(d => {
    let matches = 0, courts = 0;
    d.schedule.forEach(wk => {
      if (!wk.matches) return;
      wk.matches.forEach(m => {
        if (m.rest || !m.score) return;
        matches++;
        if (m.courts) courts += m.courts.length;
      });
    });
    totT += d.teams.length;
    totP += d.players.length;
    totM += matches;
    totC += courts;
    const top = d.standings[0] || {};
    return `<tr>
      <td><strong>Division ${d.letter}</strong></td>
      <td class="text-mono">${d.teams.length}</td>
      <td class="text-mono">${d.players.length}</td>
      <td class="text-mono">${d.schedule.length}</td>
      <td class="text-mono">${matches}</td>
      <td class="text-mono">${courts}</td>
      <td>${_esc(top.full || '-')}</td>
      <td class="pts-cell">${top.pts || '-'}</td>
    </tr>`;
  });
  // Add totals row
  rows.push(`<tr style="background:var(--surface2);font-weight:700;border-top:2px solid var(--accent)">
    <td><strong style="color:var(--accent)">TOTAL</strong></td>
    <td class="text-mono"><strong>${totT}</strong></td>
    <td class="text-mono"><strong>${totP}</strong></td>
    <td class="text-mono">—</td>
    <td class="text-mono"><strong>${totM}</strong></td>
    <td class="text-mono"><strong>${totC}</strong></td>
    <td>—</td>
    <td>—</td>
  </tr>`);
  tb.innerHTML = rows.join('');
}

function showPageDirect(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  window.scrollTo(0,0);
  if (typeof _logUsage === 'function') _logUsage('page', name);
  _savePageState('svg', name);
}


// ─── AUTH ─────────────────────────────────────────────────────────────────────

function updateDivHVisibility(user) {
  const u = user ? USERS[user] : null;
  const isAdmin = u && u.role === 'admin';

  // Admin tab: admin only
  const btnAdmin = document.getElementById('btn-admin');
  if (btnAdmin) btnAdmin.style.display = isAdmin ? '' : 'none';

  // Rank tab in SVG: admin only
  const rankBtn = document.getElementById('svgsubbtn-rank');
  if (rankBtn) rankBtn.style.display = isAdmin ? '' : 'none';

  // ALL division tabs (A-K) visible to ALL users (admin, captain, viewer, svgplayer)
  const allDivLetters = ['A','B','C','D','E','F','G','H','I','J','K'];
  allDivLetters.forEach(d => {
    const b = document.getElementById('btn-div-' + d.toLowerCase());
    if (b) b.style.display = '';
  });

  // Overview and SVG Players tabs: visible to everyone
  const svgBtn = document.querySelector('.div-btn[onclick*="switchToSvgClub"]');
  if (svgBtn) svgBtn.style.display = '';
  const ovBtn = document.querySelector('.div-btn[onclick*="switchToOverview"]');
  if (ovBtn) ovBtn.style.display = '';

  // Display name
  const userEl = document.getElementById('logged-in-user');
  if (userEl) userEl.textContent = u ? u.name : (user || '');

  // Render admin users table if on admin page
  if (isAdmin) renderAdminUsers();
}

// ─── ADMIN ───────────────────────────────────────────────────────────────────
// Populate teams dropdown based on division
function adminPopulateTeams(div) {
  const sel = document.getElementById('au-team');
  if (!sel) return;
  const teamMap = {
    'I': typeof DIV_I_TEAMS !== 'undefined' ? DIV_I_TEAMS : [],
    'C': typeof DIV_C_TEAMS !== 'undefined' ? DIV_C_TEAMS : [],
    'F': typeof DIV_F_TEAMS !== 'undefined' ? DIV_F_TEAMS : [],
    'H': typeof DIV_H_TEAMS !== 'undefined' ? DIV_H_TEAMS : [],
  };
  const teams = teamMap[div] || [];
  sel.innerHTML = '<option value="">—</option>' +
    teams.map(t => `<option value="${t.short}">${t.short} — ${t.full}</option>`).join('');
}

// ─── SERVER SYNC HELPERS ─────────────────────────────────────────────────────
const _IS_SERVER = location.protocol !== 'file:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1';
const _API_URL = 'api/admin-data.php';

function _getAuthToken() {
  const uid = localStorage.getItem(SESSION_KEY);
  if (uid && USERS[uid]) return USERS[uid].password;
  return '';
}

async function _apiCall(body) {
  if (!_IS_SERVER) return null;
  try {
    // Attach auth for operations that require it
    const isAppend = body.append === true;
    const needsAuth = (body.action === 'save' && !isAppend) || body.action === 'clear' || (body.action === 'load' && body.type === 'users');
    if (needsAuth && !body.auth) body.auth = _getAuthToken();
    const res = await fetch(_API_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body) });
    return await res.json();
  } catch(e) { return null; }
}

// Persist user changes — server + localStorage fallback
function _saveUsers() {
  const data = {};
  Object.entries(USERS).forEach(([uid, u]) => { data[uid] = u; });
  localStorage.setItem('cdta2026_users', JSON.stringify(data));
  _apiCall({ action:'save', type:'users', data });
}

// Load persisted users on startup — server first, then localStorage
async function _loadUsers() {
  if (_IS_SERVER) {
    const res = await _apiCall({ action:'load', type:'users' });
    if (res && res.ok && res.data) {
      Object.entries(res.data).forEach(([uid, u]) => { USERS[uid] = u; });
      localStorage.setItem('cdta2026_users', JSON.stringify(res.data));
      return;
    }
  }
  // Fallback to localStorage
  const stored = localStorage.getItem('cdta2026_users');
  if (!stored) return;
  try {
    const data = JSON.parse(stored);
    Object.entries(data).forEach(([uid, u]) => { USERS[uid] = u; });
  } catch(e) {}
}

// Save settings to server
function _saveSettings(settings) {
  localStorage.setItem('cdta2026_settings', JSON.stringify(settings));
  _apiCall({ action:'save', type:'settings', data:settings });
}

// Load settings from server
async function _loadSettings() {
  if (_IS_SERVER) {
    const res = await _apiCall({ action:'load', type:'settings' });
    if (res && res.ok && res.data) {
      localStorage.setItem('cdta2026_settings', JSON.stringify(res.data));
      return res.data;
    }
  }
  try { return JSON.parse(localStorage.getItem('cdta2026_settings') || '{}'); } catch(e) { return {}; }
}

function switchToAdmin(btn) {
  document.querySelectorAll('.div-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('nav-divs').style.display = 'none';
  document.getElementById('nav-svg').style.display = 'none';
  const ovNav = document.getElementById('nav-overview');
  if (ovNav) ovNav.style.display = 'none';
  const adNav = document.getElementById('nav-admin');
  if (adNav) adNav.style.display = 'flex';
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-admin').classList.add('active');
  // Default to Users sub-tab
  const usersBtn = document.getElementById('adsubbtn-users');
  if (usersBtn) showAdminTab('users', usersBtn);
  _savePageState('admin', 'users');
  if (typeof _logUsage === 'function') _logUsage('page', 'users');
  window.scrollTo(0,0);
}

function showAdminTab(tab, btn) {
  // Toggle sub-nav buttons (new nav-admin .nav-btn style)
  document.querySelectorAll('#nav-admin .nav-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  // Toggle panels
  ['users','login','usage','activity','testplan','data','settings'].forEach(t => {
    const el = document.getElementById('admin-' + t);
    if (el) el.style.display = t === tab ? 'block' : 'none';
  });
  // Render tab content
  if (tab === 'login') renderLoginHistory();
  if (tab === 'usage') renderUsageLog();
  if (tab === 'data') { renderSeasonSummary(); renderStorageInfo(); }
  if (tab === 'users') renderAdminUsers();
  if (tab === 'activity') renderActivityLog();
  if (tab === 'testplan') renderTestPlan();
  if (tab === 'settings') renderSettingsStats();
  _savePageState('admin', tab);
  if (typeof _logUsage === 'function') _logUsage('page', tab);
}

// ─── LOGIN HISTORY ───────────────────────────────────────────────────────────
const _LOGIN_KEY = 'cdta2026_login_history';

function _getDeviceInfo() {
  const ua = navigator.userAgent;
  let browser = 'Unknown', device = 'Desktop';
  if (/Edg\//i.test(ua)) browser = 'Edge';
  else if (/Chrome/i.test(ua)) browser = 'Chrome';
  else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = 'Safari';
  else if (/Firefox/i.test(ua)) browser = 'Firefox';
  else if (/Opera|OPR/i.test(ua)) browser = 'Opera';
  if (/Mobile|Android/i.test(ua)) device = 'Mobile';
  else if (/Tablet|iPad/i.test(ua)) device = 'Tablet';
  const os = /Windows/i.test(ua) ? 'Windows' : /Mac/i.test(ua) ? 'Mac' : /Linux/i.test(ua) ? 'Linux' : /Android/i.test(ua) ? 'Android' : /iPhone|iPad/i.test(ua) ? 'iOS' : '';
  return { browser, device, os };
}
function _logLogin(user, action, details) {
  const hist = JSON.parse(localStorage.getItem(_LOGIN_KEY) || '[]');
  const dev = _getDeviceInfo();
  const entry = { time: new Date().toISOString(), user, action, details: details || '', ip: '', browser: dev.browser, device: dev.device, os: dev.os };
  hist.unshift(entry);
  if (hist.length > 200) hist.length = 200;
  localStorage.setItem(_LOGIN_KEY, JSON.stringify(hist));
  // Try to get IP address, then send to server once
  let sent = false;
  try {
    const ipTimeout = setTimeout(() => {
      if (!sent) { sent = true; _apiCall({ action:'save', type:'login', append:true, data:entry }); }
    }, 3000);
    fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => {
      clearTimeout(ipTimeout);
      entry.ip = d.ip || '';
      // Update local storage with IP
      const h = JSON.parse(localStorage.getItem(_LOGIN_KEY) || '[]');
      if (h.length > 0 && h[0].time === entry.time) { h[0].ip = entry.ip; localStorage.setItem(_LOGIN_KEY, JSON.stringify(h)); }
      if (!sent) { sent = true; _apiCall({ action:'save', type:'login', append:true, data:entry }); }
    }).catch(() => {
      clearTimeout(ipTimeout);
      if (!sent) { sent = true; _apiCall({ action:'save', type:'login', append:true, data:entry }); }
    });
  } catch(e) {
    if (!sent) { sent = true; _apiCall({ action:'save', type:'login', append:true, data:entry }); }
  }
}

async function renderLoginHistory() {
  let hist = JSON.parse(localStorage.getItem(_LOGIN_KEY) || '[]');
  // Try server first
  if (_IS_SERVER) {
    const res = await _apiCall({ action:'load', type:'login' });
    if (res && res.ok && res.data && Array.isArray(res.data)) hist = res.data;
  }
  const filter = document.getElementById('login-hist-filter');
  // Populate filter
  if (filter) {
    const users = [...new Set(hist.map(h => h.user))];
    const cur = filter.value;
    filter.innerHTML = '<option value="all">All Users</option>' + users.map(u => `<option value="${_esc(u)}">${_esc(u)}</option>`).join('');
    filter.value = cur || 'all';
  }
  const filtered = filter && filter.value !== 'all' ? hist.filter(h => h.user === filter.value) : hist;
  const tbody = document.getElementById('tbody-login-history');
  if (!tbody) return;
  const actionColors = { login:'var(--green)', logout:'var(--red)', 'password-reset':'#b8860b', 'role-change':'var(--accent2)' };
  tbody.innerHTML = filtered.length === 0
    ? '<tr><td colspan="7" style="text-align:center;color:var(--muted);padding:20px">No login history yet</td></tr>'
    : filtered.slice(0, 100).map(h => {
      const d = new Date(h.time);
      const ts = d.toLocaleDateString('en-GB',{day:'2-digit',month:'short'}) + ' ' + d.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
      const ac = actionColors[h.action] || 'var(--muted)';
      const devIcon = h.device === 'Mobile' ? '📱' : h.device === 'Tablet' ? '📟' : '💻';
      return `<tr><td style="font-family:'DM Mono',monospace;font-size:.75rem;white-space:nowrap">${ts}</td><td style="font-weight:600">${_esc(h.user)}</td><td><span style="color:${ac};font-weight:600;text-transform:uppercase;font-size:.72rem">${_esc(h.action)}</span></td><td style="font-family:'DM Mono',monospace;font-size:.73rem;color:var(--muted)">${_esc(h.ip)||'—'}</td><td style="font-size:.75rem">${devIcon} ${_esc(h.device||'—')}</td><td style="font-size:.75rem;color:var(--muted)">${_esc(h.browser||'—')}${h.os ? ' / '+_esc(h.os) : ''}</td><td style="font-size:.78rem;color:var(--muted)">${_esc(h.details)}</td></tr>`;
    }).join('');
}

function adminClearLoginHistory() {
  if (!confirm('Clear all login history?')) return;
  localStorage.removeItem(_LOGIN_KEY);
  _apiCall({ action:'clear', type:'login' });
  renderLoginHistory();
}

// ─── USAGE LOG ───────────────────────────────────────────────────────────────
const _USAGE_KEY = 'cdta2026_usage_log';

function _friendlyPage(raw) {
  if (!raw) return '—';
  const divNames = { i:'Division I', f:'Division F', c:'Division C', h:'Division H', svg:'SVG Players', admin:'Admin' };
  const pageNames = { standings:'Standings', projection:'Projection', schedule:'Schedule', results:'Results', players:'Players', stats:'Stats', teams:'Teams', keypairs:'Key Pairs', svgclub:'Club Performance', users:'Users', login:'Login History', usage:'Usage Log', activity:'Activity Log', testplan:'Test Plan', data:'Data Tools', settings:'Settings' };
  // From hash: "c/projection" or "svg/svgclub"
  const parts = raw.split('/');
  if (parts.length === 2) {
    const div = divNames[parts[0]] || parts[0].toUpperCase();
    const pg = pageNames[parts[1]] || parts[1];
    return div + ' — ' + pg;
  }
  // From page id: "divf-standings" or "standings"
  const m = raw.match(/^div([fch])-(.+)$/);
  if (m) return (divNames[m[1]] || m[1].toUpperCase()) + ' — ' + (pageNames[m[2]] || m[2]);
  return pageNames[raw] || raw;
}
function _logUsage(type, event) {
  const user = localStorage.getItem(SESSION_KEY) || 'unknown';
  let page = '';
  try {
    const h = location.hash.replace('#','');
    if (h) page = h;
    else {
      const ap = document.querySelector('.page.active');
      if (ap) page = ap.id.replace('page-','');
    }
  } catch(e) {}
  const entry = { time: new Date().toISOString(), user, type, event, page };
  const log = JSON.parse(localStorage.getItem(_USAGE_KEY) || '[]');
  log.unshift(entry);
  if (log.length > 500) log.length = 500;
  localStorage.setItem(_USAGE_KEY, JSON.stringify(log));
  _apiCall({ action:'save', type:'usage', append:true, data:entry });
}

async function renderUsageLog() {
  let log = JSON.parse(localStorage.getItem(_USAGE_KEY) || '[]');
  if (_IS_SERVER) {
    const res = await _apiCall({ action:'load', type:'usage' });
    if (res && res.ok && res.data && Array.isArray(res.data)) log = res.data;
  }

  // Populate user filter
  const userFilter = document.getElementById('usage-user-filter');
  if (userFilter) {
    const users = [...new Set(log.map(l => l.user))].sort();
    const cur = userFilter.value;
    userFilter.innerHTML = '<option value="all">All Users</option>' + users.map(u => `<option value="${_esc(u)}">${_esc(u)}</option>`).join('');
    userFilter.value = cur || 'all';
  }

  // Populate page filter
  const pageFilter = document.getElementById('usage-page-filter');
  if (pageFilter) {
    const pages = [...new Set(log.map(l => _friendlyPage(l.page)).filter(p => p && p !== '—'))].sort();
    const cur = pageFilter.value;
    pageFilter.innerHTML = '<option value="all">All Pages</option>' + pages.map(p => `<option value="${_esc(p)}">${_esc(p)}</option>`).join('');
    pageFilter.value = cur || 'all';
  }

  // Apply filters
  const typeFilter = document.getElementById('usage-log-filter');
  const dateFilter = document.getElementById('usage-date-filter');
  const selType = typeFilter ? typeFilter.value : 'all';
  const selUser = userFilter ? userFilter.value : 'all';
  const selPage = pageFilter ? pageFilter.value : 'all';
  const selDate = dateFilter ? dateFilter.value : '';

  const filtered = log.filter(l => {
    if (selType !== 'all' && l.type !== selType) return false;
    if (selUser !== 'all' && l.user !== selUser) return false;
    if (selPage !== 'all' && _friendlyPage(l.page) !== selPage) return false;
    if (selDate) {
      const entryDate = new Date(l.time).toISOString().slice(0, 10);
      if (entryDate !== selDate) return false;
    }
    return true;
  });

  // Stats
  const statsEl = document.getElementById('usage-stats');
  if (statsEl) {
    const pageViews = log.filter(l => l.type === 'page').length;
    const actions = log.filter(l => l.type === 'action').length;
    const uniqueUsers = [...new Set(log.map(l => l.user))].length;
    const today = log.filter(l => new Date(l.time).toDateString() === new Date().toDateString()).length;
    statsEl.innerHTML = [
      { val: log.length, lbl: 'Total Events' },
      { val: pageViews, lbl: 'Page Views' },
      { val: actions, lbl: 'Actions' },
      { val: uniqueUsers, lbl: 'Unique Users' },
      { val: today, lbl: 'Today' },
    ].map(s => `<div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:10px 18px;text-align:center"><div style="font-family:'DM Mono',monospace;font-weight:700;font-size:1.1rem">${s.val}</div><div style="font-size:.65rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px">${s.lbl}</div></div>`).join('');
  }

  // Filter count
  const countEl = document.getElementById('usage-filter-count');
  if (countEl) countEl.textContent = `Showing ${filtered.length} of ${log.length}`;

  const tbody = document.getElementById('tbody-usage-log');
  if (!tbody) return;
  tbody.innerHTML = filtered.length === 0
    ? '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:20px">No usage data matching filters</td></tr>'
    : filtered.slice(0, 200).map(l => {
      const d = new Date(l.time);
      const ts = d.toLocaleDateString('en-GB',{day:'2-digit',month:'short'}) + ' ' + d.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
      const typeColor = l.type === 'page' ? 'var(--accent2)' : 'var(--green)';
      const pg = _friendlyPage(l.page);
      return `<tr><td style="font-family:'DM Mono',monospace;font-size:.73rem;white-space:nowrap">${ts}</td><td style="font-weight:500;font-size:.8rem">${_esc(l.user)}</td><td><span style="color:${typeColor};font-size:.7rem;font-weight:600;text-transform:uppercase">${_esc(l.type)}</span></td><td style="font-size:.78rem">${_esc(l.event)}</td><td style="font-size:.73rem;color:var(--muted)">${_esc(pg)}</td></tr>`;
    }).join('');
}

function adminClearUsageLog() {
  if (!confirm('Clear all usage data?')) return;
  localStorage.removeItem(_USAGE_KEY);
  _apiCall({ action:'clear', type:'usage' });
  renderUsageLog();
}

// ─── ACTIVITY LOG ────────────────────────────────────────────────────────────
const _ACTIVITY_KEY = 'cdta2026_activity_log';

function adminAddActivity() {
  const input = document.getElementById('activity-entry');
  const typeEl = document.getElementById('activity-type');
  const text = (input.value || '').trim();
  if (!text) { input.focus(); return; }
  const user = localStorage.getItem(SESSION_KEY) || 'admin';
  const entry = { time: new Date().toISOString(), user, type: typeEl.value, text };
  const log = JSON.parse(localStorage.getItem(_ACTIVITY_KEY) || '[]');
  log.unshift(entry);
  if (log.length > 200) log.length = 200;
  localStorage.setItem(_ACTIVITY_KEY, JSON.stringify(log));
  _apiCall({ action:'save', type:'activity', append:true, data:entry });
  input.value = '';
  renderActivityLog();
}

async function renderActivityLog() {
  let log = JSON.parse(localStorage.getItem(_ACTIVITY_KEY) || '[]');
  if (_IS_SERVER) {
    const res = await _apiCall({ action:'load', type:'activity' });
    if (res && res.ok && res.data && Array.isArray(res.data)) log = res.data;
  }
  const tbody = document.getElementById('tbody-activity-log');
  if (!tbody) return;
  const typeIcons = { deploy:'🚀', github:'📦', data:'📊', config:'⚙️', fix:'🔧', feature:'✨', other:'📝' };
  const typeLabels = { deploy:'Deploy', github:'GitHub', data:'Data Update', config:'Config', fix:'Bug Fix', feature:'Feature', other:'Other' };
  tbody.innerHTML = log.length === 0
    ? '<tr><td colspan="4" style="text-align:center;color:var(--muted);padding:20px">No activity logged yet</td></tr>'
    : log.slice(0, 100).map(a => {
      const d = new Date(a.time);
      const ts = d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}) + ' ' + d.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
      const icon = typeIcons[a.type] || '📝';
      const label = typeLabels[a.type] || a.type;
      return `<tr>
        <td style="font-family:'DM Mono',monospace;font-size:.75rem;white-space:nowrap">${ts}</td>
        <td style="font-weight:600">${_esc(a.user)}</td>
        <td><span style="font-size:.75rem">${icon} ${_esc(label)}</span></td>
        <td style="font-size:.82rem">${_esc(a.text)}</td>
      </tr>`;
    }).join('');
}

function adminClearActivityLog() {
  if (!confirm('Clear all activity log entries?')) return;
  localStorage.removeItem(_ACTIVITY_KEY);
  _apiCall({ action:'clear', type:'activity' });
  renderActivityLog();
}

// ─── TEST PLAN ──────────────────────────────────────────────────────────────
const TEST_PLAN_DATA = [
  { area:'Authentication', tests:[
    { id:'AUTH-001', name:'Admin login', steps:'Enter rameshadmin / ramesh123, click Sign In', expected:'Login overlay hides, all tabs visible including Div H and Admin', priority:'High' },
    { id:'AUTH-002', name:'Captain login (Div I)', steps:'Enter monish / monish2026, click Sign In', expected:'Auto-switches to Division I, only Div I + SVG visible', priority:'High' },
    { id:'AUTH-003', name:'Captain login (Div F)', steps:'Enter sethupathy / sethupathy2026', expected:'Auto-switches to Division F, only Div F + SVG visible', priority:'High' },
    { id:'AUTH-004', name:'Captain login (Div C)', steps:'Enter nagendran / nagendran2026', expected:'Auto-switches to Division C, only Div C + SVG visible', priority:'High' },
    { id:'AUTH-005', name:'SVG Player login', steps:'Enter ramesh / ramesh2026', expected:'Div I + SVG visible, no Admin or Div H', priority:'High' },
    { id:'AUTH-006', name:'Wrong password', steps:'Enter rameshadmin / wrongpass', expected:'Error message displayed, password cleared', priority:'High' },
    { id:'AUTH-007', name:'Empty credentials', steps:'Click Sign In with empty fields', expected:'Error message displayed', priority:'Medium' },
    { id:'AUTH-008', name:'Session persistence', steps:'Login, refresh page (F5)', expected:'User remains logged in, same page preserved', priority:'High' },
    { id:'AUTH-009', name:'Logout', steps:'Login, click Sign Out', expected:'Login overlay shown, session cleared', priority:'High' },
    { id:'AUTH-010', name:'Login event logged', steps:'Login as any user', expected:'Entry in Login History with timestamp, user, device', priority:'Medium' },
  ]},
  { area:'Role-Based Access', tests:[
    { id:'RBAC-001', name:'Admin sees all divisions', steps:'Login as rameshadmin', expected:'All division tabs visible: SVG, I, F, C, H, Admin', priority:'High' },
    { id:'RBAC-002', name:'Admin sees Rank tab', steps:'Login as admin, go to SVG Players', expected:'Three sub-tabs: Club Performance, Players, Rank', priority:'High' },
    { id:'RBAC-003', name:'Captain sees own div only', steps:'Login as monish (Div I)', expected:'Only Div I + SVG visible; Div C, F, H, Admin hidden', priority:'High' },
    { id:'RBAC-004', name:'Captain cannot see Rank', steps:'Login as captain, go to SVG', expected:'Rank button hidden', priority:'High' },
    { id:'RBAC-005', name:'Div H admin-only', steps:'Login as captain', expected:'Division H button not visible', priority:'High' },
    { id:'RBAC-006', name:'Admin tab restricted', steps:'Login as svgplayer', expected:'Admin button hidden', priority:'High' },
  ]},
  { area:'Navigation', tests:[
    { id:'NAV-001', name:'Div I sub-pages', steps:'Click each nav: Standings, Projection, Teams, Schedule, Results, Players, Stats', expected:'Each page renders correctly, only one active', priority:'High' },
    { id:'NAV-002', name:'Div C sub-pages', steps:'Switch to Div C, click each nav', expected:'Div C pages render with correct data', priority:'High' },
    { id:'NAV-003', name:'Div F sub-pages', steps:'Switch to Div F, click each nav', expected:'Div F pages render correctly', priority:'High' },
    { id:'NAV-004', name:'Div H sub-pages', steps:'Login as admin, switch to Div H', expected:'Div H pages render correctly', priority:'High' },
    { id:'NAV-005', name:'Hash-based state', steps:'Navigate to Div F > Players, refresh', expected:'App restores to Div F > Players', priority:'Medium' },
    { id:'NAV-006', name:'Admin sub-tabs', steps:'Click each admin tab', expected:'Correct panel shown, others hidden', priority:'Medium' },
  ]},
  { area:'Division I', tests:[
    { id:'DIVI-001', name:'Standings table', steps:'Navigate to Div I > Standings', expected:'11 rows with Pts, Courts, Sets, Games columns', priority:'High' },
    { id:'DIVI-002', name:'Standings sort', steps:'Click column headers', expected:'Rows re-sort correctly', priority:'Medium' },
    { id:'DIVI-003', name:'Projection table', steps:'Go to Projection', expected:'Sorted by projected total, shows breakdown', priority:'High' },
    { id:'DIVI-004', name:'Schedule all weeks', steps:'Go to Schedule', expected:'11 weeks, upcoming have UPCOMING badge', priority:'High' },
    { id:'DIVI-005', name:'Results filters', steps:'Go to Results, use week/team filters', expected:'Filters work, court detail shown', priority:'High' },
    { id:'DIVI-006', name:'Players search/filter', steps:'Search, team filter, gender filter, sort', expected:'All controls work correctly', priority:'High' },
    { id:'DIVI-007', name:'Players partner data', steps:'Check player with appearances', expected:'Partners column shows names with counts', priority:'Medium' },
    { id:'DIVI-008', name:'Stats and key pairs', steps:'Go to Stats', expected:'Demographics, walkover summary, key pairs table', priority:'Medium' },
    { id:'DIVI-009', name:'Teams directory', steps:'Go to Teams', expected:'11 teams with captain phone, club, surface', priority:'Medium' },
  ]},
  { area:'Division C', tests:[
    { id:'DIVC-001', name:'Standings (Week 9)', steps:'Go to Div C > Standings', expected:'11 teams, updated after Week 9 results', priority:'High' },
    { id:'DIVC-002', name:'Week 9 results present', steps:'Go to Div C > Results', expected:'Week 9: all 6 matches have scores and court detail', priority:'High' },
    { id:'DIVC-003', name:'Projection updated', steps:'Go to Projection', expected:'Current pts reflect Week 9 results', priority:'Medium' },
    { id:'DIVC-004', name:'Players updated', steps:'Go to Players, check SVG-C players', expected:'Player stats include Week 9 appearances', priority:'Medium' },
  ]},
  { area:'Division F', tests:[
    { id:'DIVF-001', name:'Standings (Week 9)', steps:'Go to Div F > Standings', expected:'11 teams, Week 9 complete', priority:'High' },
    { id:'DIVF-002', name:'Week 9 results', steps:'Go to Results', expected:'5 Week 9 matches with court detail', priority:'High' },
    { id:'DIVF-003', name:'ACES highlight', steps:'View standings', expected:'ACES row has SVG CLUB badge', priority:'Medium' },
  ]},
  { area:'Division H', tests:[
    { id:'DIVH-001', name:'Admin-only access', steps:'Login as captain', expected:'Div H button hidden', priority:'High' },
    { id:'DIVH-002', name:'Standings render', steps:'Login as admin, go to Div H', expected:'11 teams, Week 8 data', priority:'High' },
    { id:'DIVH-003', name:'Results with filters', steps:'Go to Results, use filters', expected:'8 weeks of completed results', priority:'Medium' },
    { id:'DIVH-004', name:'Teams (limited data)', steps:'Go to Teams', expected:'Teams listed, no captain phone (known limitation)', priority:'Low' },
  ]},
  { area:'SVG Players', tests:[
    { id:'SVG-001', name:'Club Performance default', steps:'Switch to SVG Players', expected:'Club Performance tab active with 4 team cards', priority:'High' },
    { id:'SVG-002', name:'Players merged table', steps:'Click Players tab', expected:'All SVG players from 4 teams across 3 divisions', priority:'High' },
    { id:'SVG-003', name:'Team filter buttons', steps:'Click each team filter button', expected:'Table filters to selected team only', priority:'High' },
    { id:'SVG-004', name:'Rank tab (admin)', steps:'Login as admin, click Rank', expected:'4-tier ranking: Elite/Strong/Developing/Rising', priority:'Medium' },
    { id:'SVG-005', name:'Rank hidden for non-admin', steps:'Login as captain, check SVG tabs', expected:'Rank button not visible', priority:'High' },
  ]},
  { area:'Admin Panel', tests:[
    { id:'ADM-001', name:'User Management list', steps:'Go to Admin > Users', expected:'All users listed with role, division, team', priority:'High' },
    { id:'ADM-002', name:'Add new user', steps:'Fill form, click Add', expected:'New user appears, can login', priority:'High' },
    { id:'ADM-003', name:'Delete user', steps:'Click delete on non-default user', expected:'User removed after confirmation', priority:'Medium' },
    { id:'ADM-004', name:'Login History', steps:'Go to Login History tab', expected:'Entries with time, user, action, IP, device, browser', priority:'High' },
    { id:'ADM-005', name:'Usage Log', steps:'Go to Usage Log tab', expected:'Page visits with friendly names (Division I — Standings)', priority:'High' },
    { id:'ADM-006', name:'Usage Log page tracking', steps:'Navigate various pages, check log', expected:'All page visits captured for all users', priority:'High' },
    { id:'ADM-007', name:'Activity Log', steps:'Log an activity, check table', expected:'Entry saved with timestamp, type, text', priority:'Medium' },
    { id:'ADM-008', name:'Test Plan', steps:'Go to Test Plan tab', expected:'All test cases rendered, filterable by area and priority', priority:'Medium' },
    { id:'ADM-009', name:'Data Tools integrity', steps:'Click Run Check', expected:'All divisions: 0 mismatches', priority:'High' },
    { id:'ADM-010', name:'Settings persist', steps:'Change week badge, refresh', expected:'Setting persists on reload', priority:'Medium' },
  ]},
  { area:'Server Persistence', tests:[
    { id:'SRV-001', name:'Login history on server', steps:'Login on GoDaddy, check admin-data/login.json', expected:'Entry saved with device info', priority:'High' },
    { id:'SRV-002', name:'Usage log on server', steps:'Navigate pages, check usage.json', expected:'Page visits saved to server', priority:'High' },
    { id:'SRV-003', name:'Activity log on server', steps:'Log activity, check activity.json', expected:'Activity saved to server', priority:'Medium' },
    { id:'SRV-004', name:'Cross-device visibility', steps:'Add user on Device A, check on Device B', expected:'User available on both devices', priority:'High' },
  ]},
  { area:'Cache & Performance', tests:[
    { id:'CACHE-001', name:'Version params on JS/CSS', steps:'Inspect script/link tags', expected:'All have ?v= parameter', priority:'High' },
    { id:'CACHE-002', name:'No-cache headers', steps:'Inspect meta tags', expected:'Cache-Control, Pragma, Expires headers present', priority:'Medium' },
    { id:'CACHE-003', name:'Fresh load after deploy', steps:'Deploy, reload without private browser', expected:'Latest code loaded, no stale cache', priority:'High' },
  ]},
  { area:'Data Integrity', tests:[
    { id:'DATA-001', name:'Audit script passes', steps:'Run node audit-partners.js', expected:'0 mismatches for all divisions', priority:'High' },
    { id:'DATA-002', name:'Standings match results', steps:'Sum court wins from schedule', expected:'Matches standings pts for each team', priority:'High' },
    { id:'DATA-003', name:'Projection math', steps:'Verify projected = current + expected', expected:'Values consistent', priority:'Medium' },
    { id:'DATA-004', name:'XSS prevention', steps:'Enter <script>alert(1)</script> in search', expected:'HTML escaped, no execution', priority:'Medium' },
    { id:'DATA-PTS-A', name:'Div A: projection pts match standings', steps:'Compare DIV_A_PROJECTIONS.current to DIV_A_STANDINGS.pts', expected:'All teams: current === pts', priority:'High' },
    { id:'DATA-PTS-B', name:'Div B: projection pts match standings', steps:'Compare DIV_B_PROJECTIONS.current to DIV_B_STANDINGS.pts', expected:'All teams: current === pts', priority:'High' },
    { id:'DATA-PTS-C', name:'Div C: projection pts match standings', steps:'Compare DIV_C_PROJECTIONS.current to DIV_C_STANDINGS.pts', expected:'All teams: current === pts', priority:'High' },
    { id:'DATA-PTS-D', name:'Div D: projection pts match standings', steps:'Compare DIV_D_PROJECTIONS.current to DIV_D_STANDINGS.pts', expected:'All teams: current === pts', priority:'High' },
    { id:'DATA-PTS-E', name:'Div E: projection pts match standings', steps:'Compare DIV_E_PROJECTIONS.current to DIV_E_STANDINGS.pts', expected:'All teams: current === pts', priority:'High' },
    { id:'DATA-PTS-F', name:'Div F: projection pts match standings', steps:'Compare DIV_F_PROJECTIONS.current to DIV_F_STANDINGS.pts', expected:'All teams: current === pts', priority:'High' },
    { id:'DATA-PTS-G', name:'Div G: projection pts match standings', steps:'Compare DIV_G_PROJECTIONS.current to DIV_G_STANDINGS.pts', expected:'All teams: current === pts', priority:'High' },
    { id:'DATA-PTS-H', name:'Div H: projection pts match standings', steps:'Compare DIV_H_PROJECTIONS.current to DIV_H_STANDINGS.pts', expected:'All teams: current === pts', priority:'High' },
    { id:'DATA-PTS-I', name:'Div I: projection pts match standings', steps:'Compare DIV_I_PROJECTIONS.current to DIV_I_STANDINGS.pts', expected:'All teams: current === pts', priority:'High' },
    { id:'DATA-PTS-J', name:'Div J: projection pts match standings', steps:'Compare DIV_J_PROJECTIONS.current to DIV_J_STANDINGS.pts', expected:'All teams: current === pts', priority:'High' },
    { id:'DATA-PTS-K', name:'Div K: projection pts match standings', steps:'Compare DIV_K_PROJECTIONS.current to DIV_K_STANDINGS.pts', expected:'All teams: current === pts', priority:'High' },
  ]},
  { area:'Per-Division Coverage', tests:[
    { id:'DIV-A-001', name:'Div A loads', steps:'Click Div A tab', expected:'Standings, teams, schedule, results, players all render with data', priority:'High' },
    { id:'DIV-A-002', name:'Div A 11 teams', steps:'Check standings table', expected:'Exactly 11 teams listed', priority:'High' },
    { id:'DIV-A-003', name:'Div A 11 weeks complete', steps:'Check schedule', expected:'All 11 weeks marked done, 55 matches total', priority:'High' },
    { id:'DIV-A-004', name:'Div A player photos', steps:'Click Players page', expected:'Player photos visible from cdta.co.in', priority:'Medium' },
    { id:'DIV-B-001', name:'Div B loads', steps:'Click Div B tab', expected:'All pages render with data', priority:'High' },
    { id:'DIV-B-002', name:'Div B 11 teams', steps:'Check standings', expected:'11 teams', priority:'High' },
    { id:'DIV-B-003', name:'Div B 11 weeks complete', steps:'Check schedule', expected:'55 matches across 11 weeks', priority:'High' },
    { id:'DIV-C-001', name:'Div C loads', steps:'Click Div C tab', expected:'Standings, projection, teams, schedule, results, players, stats', priority:'High' },
    { id:'DIV-C-002', name:'Div C 11 teams', steps:'Check standings', expected:'11 teams listed', priority:'High' },
    { id:'DIV-C-003', name:'Div C projection page works', steps:'Click Projection tab', expected:'All teams shown with current/expected/projected', priority:'High' },
    { id:'DIV-C-004', name:'Div C SVG-C team highlighted', steps:'Check standings', expected:'SREEVATSA BLUES row has SVG CLUB badge', priority:'Medium' },
    { id:'DIV-D-001', name:'Div D loads', steps:'Click Div D tab', expected:'All pages render with data', priority:'High' },
    { id:'DIV-D-002', name:'Div D 11 teams', steps:'Check standings', expected:'11 teams', priority:'High' },
    { id:'DIV-D-003', name:'Div D 11 weeks complete', steps:'Check schedule', expected:'55 matches', priority:'High' },
    { id:'DIV-E-001', name:'Div E loads', steps:'Click Div E tab', expected:'All pages render with data', priority:'High' },
    { id:'DIV-E-002', name:'Div E 11 teams', steps:'Check standings', expected:'11 teams', priority:'High' },
    { id:'DIV-E-003', name:'Div E 11 weeks complete', steps:'Check schedule', expected:'55 matches', priority:'High' },
    { id:'DIV-F-001', name:'Div F loads', steps:'Click Div F tab', expected:'Standings, projection, teams, schedule, results, players, stats', priority:'High' },
    { id:'DIV-F-002', name:'Div F 11 teams', steps:'Check standings', expected:'11 teams listed', priority:'High' },
    { id:'DIV-F-003', name:'Div F projection page works', steps:'Click Projection tab', expected:'All teams shown', priority:'High' },
    { id:'DIV-F-004', name:'Div F ACES highlighted', steps:'Check standings', expected:'SREEVATSA ACES has SVG CLUB badge', priority:'Medium' },
    { id:'DIV-G-001', name:'Div G loads', steps:'Click Div G tab', expected:'All pages render with data', priority:'High' },
    { id:'DIV-G-002', name:'Div G 11 teams', steps:'Check standings', expected:'11 teams', priority:'High' },
    { id:'DIV-G-003', name:'Div G 11 weeks complete', steps:'Check schedule', expected:'55 matches', priority:'High' },
    { id:'DIV-H-001', name:'Div H loads (admin only)', steps:'Login as admin, click Div H', expected:'Standings, projection, teams, schedule, results, players, stats', priority:'High' },
    { id:'DIV-H-002', name:'Div H hidden for non-admin', steps:'Login as captain, check tabs', expected:'Div H tab hidden', priority:'High' },
    { id:'DIV-H-003', name:'Div H 11 teams', steps:'Check standings', expected:'11 teams', priority:'High' },
    { id:'DIV-I-001', name:'Div I default tab', steps:'Login as admin, no other clicks', expected:'Div I active by default', priority:'High' },
    { id:'DIV-I-002', name:'Div I 11 teams', steps:'Check standings', expected:'11 teams', priority:'High' },
    { id:'DIV-I-003', name:'Div I projection page', steps:'Click Projection', expected:'All 11 teams with current/expected/projected', priority:'High' },
    { id:'DIV-I-004', name:'Div I STARS/CHAMPS highlighted', steps:'Check standings', expected:'SREEVATSA STARS and SVG Champs have YOUR TEAM/SVG CLUB badge', priority:'Medium' },
    { id:'DIV-J-001', name:'Div J loads', steps:'Click Div J tab', expected:'All pages render', priority:'High' },
    { id:'DIV-J-002', name:'Div J 10 teams', steps:'Check standings', expected:'10 teams (not 11)', priority:'High' },
    { id:'DIV-J-003', name:'Div J 9 weeks', steps:'Check schedule', expected:'9 weeks, 45 matches', priority:'High' },
    { id:'DIV-K-001', name:'Div K loads', steps:'Click Div K tab', expected:'All pages render', priority:'High' },
    { id:'DIV-K-002', name:'Div K 7 teams', steps:'Check standings', expected:'7 teams', priority:'High' },
    { id:'DIV-K-003', name:'Div K 7 weeks', steps:'Check schedule', expected:'7 weeks, 21 matches', priority:'High' },
  ]},
];

function renderTestPlan() {
  const container = document.getElementById('testplan-container');
  const areaFilter = document.getElementById('tp-area-filter');
  const prioFilter = document.getElementById('tp-priority-filter');
  const countEl = document.getElementById('tp-count');
  if (!container) return;

  // Populate area filter on first call
  if (areaFilter && areaFilter.options.length <= 1) {
    TEST_PLAN_DATA.forEach(a => {
      const opt = document.createElement('option');
      opt.value = a.area; opt.textContent = a.area;
      areaFilter.appendChild(opt);
    });
  }

  const selArea = areaFilter ? areaFilter.value : 'all';
  const selPrio = prioFilter ? prioFilter.value : 'all';
  const priColor = { High:'var(--red)', Medium:'var(--accent)', Low:'var(--muted)' };

  let total = 0, shown = 0;
  let html = '';
  TEST_PLAN_DATA.forEach(area => {
    const tests = area.tests.filter(t => {
      total++;
      if (selArea !== 'all' && selArea !== area.area) return false;
      if (selPrio !== 'all' && selPrio !== t.priority) return false;
      shown++;
      return true;
    });
    if (tests.length === 0) return;
    html += `<div style="margin-bottom:20px">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:.85rem;color:var(--accent);letter-spacing:1.5px;margin-bottom:8px;text-transform:uppercase">${_esc(area.area)} (${tests.length})</div>
      <div class="table-wrap"><table style="font-size:.8rem">
        <thead><tr><th style="width:70px">ID</th><th>Test Case</th><th>Steps</th><th>Expected Result</th><th style="width:60px">Priority</th></tr></thead>
        <tbody>${tests.map(t => `<tr>
          <td style="font-family:'DM Mono',monospace;font-size:.72rem;font-weight:600;white-space:nowrap">${_esc(t.id)}</td>
          <td style="font-weight:600">${_esc(t.name)}</td>
          <td style="color:var(--muted);font-size:.78rem">${_esc(t.steps)}</td>
          <td style="font-size:.78rem">${_esc(t.expected)}</td>
          <td><span style="color:${priColor[t.priority]||'var(--muted)'};font-weight:700;font-size:.7rem;text-transform:uppercase">${_esc(t.priority)}</span></td>
        </tr>`).join('')}</tbody>
      </table></div>
    </div>`;
  });

  container.innerHTML = html || '<div style="text-align:center;color:var(--muted);padding:30px">No test cases match the filters</div>';
  if (countEl) countEl.textContent = `Showing ${shown} of ${total} test cases`;
}

async function runAutoTest() {
  const el = document.getElementById('tp-auto-results');
  if (!el) return;
  el.style.display = 'block';
  el.innerHTML = '<div style="padding:12px;background:var(--surface);border:1px solid var(--border);border-radius:10px"><div style="font-weight:600;margin-bottom:8px">⏳ Running automated tests...</div><div id="tp-auto-progress"></div></div>';
  const prog = document.getElementById('tp-auto-progress');
  const results = [];
  let pass = 0, fail = 0, skip = 0;

  function log(id, name, status, detail) {
    const color = status === 'PASS' ? 'var(--green)' : status === 'FAIL' ? 'var(--red)' : 'var(--muted)';
    results.push({ id, name, status, detail });
    if (status === 'PASS') pass++; else if (status === 'FAIL') fail++; else skip++;
    prog.innerHTML += `<div style="font-size:.78rem;padding:2px 0"><span style="font-family:'DM Mono',monospace;font-size:.7rem;width:80px;display:inline-block">${id}</span> <span style="color:${color};font-weight:700;font-size:.7rem;width:36px;display:inline-block">${status}</span> ${_esc(name)} ${detail ? '<span style="color:var(--muted);font-size:.7rem">— '+_esc(detail)+'</span>' : ''}</div>`;
  }

  // AUTH tests
  log('AUTH-001', 'Admin user exists', USERS['rameshadmin'] ? 'PASS' : 'FAIL', USERS['rameshadmin'] ? 'rameshadmin found' : '');
  log('AUTH-002', 'Captain monish exists', USERS['monish'] ? 'PASS' : 'FAIL', '');
  log('AUTH-003', 'Captain sethupathy exists', USERS['sethupathy'] ? 'PASS' : 'FAIL', '');
  log('AUTH-004', 'Captain nagendran exists', USERS['nagendran'] ? 'PASS' : 'FAIL', '');
  log('AUTH-005', 'SVG Player ramesh exists', USERS['ramesh'] ? 'PASS' : 'FAIL', '');
  log('AUTH-006', '6 default users', Object.keys(USERS).length >= 6 ? 'PASS' : 'FAIL', Object.keys(USERS).length + ' users');

  // RBAC tests
  const adminUser = USERS['rameshadmin'];
  log('RBAC-001', 'Admin role = admin', adminUser && adminUser.role === 'admin' ? 'PASS' : 'FAIL', '');
  log('RBAC-002', 'Captain role = captain', USERS['monish'] && USERS['monish'].role === 'captain' ? 'PASS' : 'FAIL', '');
  log('RBAC-003', 'SVG role = svgplayer', USERS['ramesh'] && USERS['ramesh'].role === 'svgplayer' ? 'PASS' : 'FAIL', '');
  log('RBAC-004', 'Div H button exists', document.getElementById('btn-div-h') ? 'PASS' : 'FAIL', '');
  log('RBAC-005', 'Admin button exists', document.getElementById('btn-admin') ? 'PASS' : 'FAIL', '');

  // Data tests — all 11 divisions A-K
  // Expected counts: A-I = 11 teams, J = 10 teams, K = 7 teams
  const allDivs = [
    ['A', typeof DIV_A_STANDINGS !== 'undefined' ? DIV_A_STANDINGS : null, typeof DIV_A_TEAMS !== 'undefined' ? DIV_A_TEAMS : null, typeof DIV_A_SCHEDULE !== 'undefined' ? DIV_A_SCHEDULE : null, typeof DIV_A_PLAYERS !== 'undefined' ? DIV_A_PLAYERS : null, 11, 11],
    ['B', typeof DIV_B_STANDINGS !== 'undefined' ? DIV_B_STANDINGS : null, typeof DIV_B_TEAMS !== 'undefined' ? DIV_B_TEAMS : null, typeof DIV_B_SCHEDULE !== 'undefined' ? DIV_B_SCHEDULE : null, typeof DIV_B_PLAYERS !== 'undefined' ? DIV_B_PLAYERS : null, 11, 11],
    ['C', DIV_C_STANDINGS, DIV_C_TEAMS, DIV_C_SCHEDULE, DIV_C_PLAYERS, 11, 11],
    ['D', typeof DIV_D_STANDINGS !== 'undefined' ? DIV_D_STANDINGS : null, typeof DIV_D_TEAMS !== 'undefined' ? DIV_D_TEAMS : null, typeof DIV_D_SCHEDULE !== 'undefined' ? DIV_D_SCHEDULE : null, typeof DIV_D_PLAYERS !== 'undefined' ? DIV_D_PLAYERS : null, 11, 11],
    ['E', typeof DIV_E_STANDINGS !== 'undefined' ? DIV_E_STANDINGS : null, typeof DIV_E_TEAMS !== 'undefined' ? DIV_E_TEAMS : null, typeof DIV_E_SCHEDULE !== 'undefined' ? DIV_E_SCHEDULE : null, typeof DIV_E_PLAYERS !== 'undefined' ? DIV_E_PLAYERS : null, 11, 11],
    ['F', DIV_F_STANDINGS, DIV_F_TEAMS, DIV_F_SCHEDULE, DIV_F_PLAYERS, 11, 11],
    ['G', typeof DIV_G_STANDINGS !== 'undefined' ? DIV_G_STANDINGS : null, typeof DIV_G_TEAMS !== 'undefined' ? DIV_G_TEAMS : null, typeof DIV_G_SCHEDULE !== 'undefined' ? DIV_G_SCHEDULE : null, typeof DIV_G_PLAYERS !== 'undefined' ? DIV_G_PLAYERS : null, 11, 11],
    ['H', DIV_H_STANDINGS, DIV_H_TEAMS, DIV_H_SCHEDULE, DIV_H_PLAYERS, 11, 11],
    ['I', DIV_I_STANDINGS, DIV_I_TEAMS, DIV_I_SCHEDULE, DIV_I_PLAYERS, 11, 11],
    ['J', typeof DIV_J_STANDINGS !== 'undefined' ? DIV_J_STANDINGS : null, typeof DIV_J_TEAMS !== 'undefined' ? DIV_J_TEAMS : null, typeof DIV_J_SCHEDULE !== 'undefined' ? DIV_J_SCHEDULE : null, typeof DIV_J_PLAYERS !== 'undefined' ? DIV_J_PLAYERS : null, 10, 9],
    ['K', typeof DIV_K_STANDINGS !== 'undefined' ? DIV_K_STANDINGS : null, typeof DIV_K_TEAMS !== 'undefined' ? DIV_K_TEAMS : null, typeof DIV_K_SCHEDULE !== 'undefined' ? DIV_K_SCHEDULE : null, typeof DIV_K_PLAYERS !== 'undefined' ? DIV_K_PLAYERS : null, 7, 7],
  ];

  allDivs.forEach(([d, stand, teams, sched, players, expTeams, expWeeks]) => {
    if (!stand) { log('DATA-STD-'+d, 'Div '+d+': standings exists', 'SKIP', 'not loaded'); return; }
    log('DATA-STD-'+d, 'Div '+d+': '+expTeams+' teams in standings', stand.length === expTeams ? 'PASS' : 'FAIL', stand.length + ' teams');
    log('DATA-TMS-'+d, 'Div '+d+': '+expTeams+' teams array', teams && teams.length === expTeams ? 'PASS' : 'FAIL', (teams ? teams.length : 0) + ' teams');
    log('DATA-SCH-'+d, 'Div '+d+': '+expWeeks+' weeks in schedule', sched && sched.length === expWeeks ? 'PASS' : 'FAIL', (sched ? sched.length : 0) + ' weeks');
    log('DATA-PLR-'+d, 'Div '+d+': players array populated', players && players.length > 50 ? 'PASS' : 'FAIL', (players ? players.length : 0) + ' players');
  });

  // Projection tests — only divisions with PROJECTIONS arrays (manual divs C, F, H, I)
  [
    ['C', typeof DIV_C_PROJECTIONS !== 'undefined' ? DIV_C_PROJECTIONS : null, DIV_C_STANDINGS],
    ['F', typeof DIV_F_PROJECTIONS !== 'undefined' ? DIV_F_PROJECTIONS : null, DIV_F_STANDINGS],
    ['H', typeof DIV_H_PROJECTIONS !== 'undefined' ? DIV_H_PROJECTIONS : null, DIV_H_STANDINGS],
    ['I', typeof DIV_I_PROJECTIONS !== 'undefined' ? DIV_I_PROJECTIONS : null, DIV_I_STANDINGS],
  ].forEach(([d, proj, stand]) => {
    if (!proj) { log('DATA-PTS-'+d, 'Div '+d+': projections exist', 'SKIP', ''); return; }
    log('DATA-PRJ-'+d, 'Div '+d+': projections count', proj.length === 11 ? 'PASS' : 'FAIL', proj.length + ' entries');
    let mismatch = 0;
    proj.forEach(p => {
      const s = stand.find(x => x.short === p.short);
      if (s && s.pts !== p.current) mismatch++;
    });
    log('DATA-PTS-'+d, 'Div '+d+': projection pts match standings', mismatch === 0 ? 'PASS' : 'FAIL', mismatch > 0 ? mismatch + ' mismatches' : '');
  });

  // DOM element tests
  const domIds = ['tbody-standings','tbody-divc-standings','tbody-divf-standings','tbody-divh-standings','tbody-teams','page-admin','login-overlay'];
  domIds.forEach(id => {
    log('DOM-'+id.substring(0,12), 'Element #'+id+' exists', document.getElementById(id) ? 'PASS' : 'FAIL', '');
  });

  // Completed weeks count — all 11 divisions
  allDivs.forEach(([d, stand, teams, sched, players, expTeams, expWeeks]) => {
    if (!sched) return;
    const done = sched.filter(w => w.done).length;
    log('WK-DONE-'+d, 'Div '+d+': completed weeks', done === expWeeks ? 'PASS' : 'FAIL', done + ' of ' + expWeeks + ' done');
  });

  // Court data integrity (sample: check each completed match has 3 courts) — all divisions
  allDivs.forEach(([d, stand, teams, sched, players, expTeams, expWeeks]) => {
    if (!sched) return;
    let bad = 0, checked = 0;
    sched.forEach(wk => {
      if (!wk.done) return;
      wk.matches.forEach(m => {
        if (!m.score || m.rest) return;
        checked++;
        if (!m.courts || m.courts.length !== 3) bad++;
      });
    });
    log('COURT-'+d, 'Div '+d+': 3 courts per match', bad === 0 ? 'PASS' : 'FAIL', checked + ' matches checked' + (bad > 0 ? ', '+bad+' bad' : ''));
  });

  // XSS escape test
  const xss = _esc('<script>alert(1)</script>');
  log('XSS-001', 'XSS escape function', xss.indexOf('<script>') === -1 ? 'PASS' : 'FAIL', '');

  // Server API test
  if (_IS_SERVER) {
    try {
      const res = await fetch('api/admin-data.php', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({action:'load',type:'settings'}) });
      const data = await res.json();
      log('SRV-001', 'Server API reachable', data.ok !== undefined ? 'PASS' : 'FAIL', '');
    } catch(e) {
      log('SRV-001', 'Server API reachable', 'FAIL', e.message);
    }
  } else {
    log('SRV-001', 'Server API (local mode)', 'SKIP', 'Not on server');
  }

  // Summary
  const total = pass + fail + skip;
  const pct = Math.round((pass / (pass + fail)) * 100);
  const summaryColor = fail === 0 ? 'var(--green)' : fail <= 3 ? 'var(--accent)' : 'var(--red)';
  el.innerHTML = `<div style="padding:16px;background:var(--surface);border:1px solid var(--border);border-radius:10px">
    <div style="display:flex;gap:16px;align-items:center;margin-bottom:12px;flex-wrap:wrap">
      <div style="font-weight:700;font-size:1rem">Test Results</div>
      <div style="display:flex;gap:12px">
        <span style="color:var(--green);font-weight:700">✓ ${pass} Passed</span>
        <span style="color:var(--red);font-weight:700">✗ ${fail} Failed</span>
        ${skip > 0 ? `<span style="color:var(--muted);font-weight:600">⊘ ${skip} Skipped</span>` : ''}
      </div>
      <div style="font-family:'DM Mono',monospace;font-size:.85rem;color:${summaryColor};font-weight:700">${pct}% Pass Rate</div>
      <button onclick="runAutoTest()" style="margin-left:auto;padding:6px 14px;background:var(--accent2);color:#fff;border:none;border-radius:6px;font-size:.75rem;cursor:pointer">Re-run</button>
    </div>
    ${fail > 0 ? `<div style="margin-bottom:10px;padding:8px 12px;background:rgba(220,38,38,.08);border:1px solid rgba(220,38,38,.2);border-radius:6px;font-size:.78rem"><strong style="color:var(--red)">Failed Tests:</strong> ${results.filter(r=>r.status==='FAIL').map(r=>`<span style="font-family:'DM Mono',monospace;font-size:.72rem">${_esc(r.id)}</span> ${_esc(r.name)}${r.detail?' ('+_esc(r.detail)+')':''}`).join(' · ')}</div>` : ''}
    <details><summary style="cursor:pointer;font-size:.8rem;color:var(--muted);margin-bottom:8px">Full Results (${total} tests)</summary>${prog.innerHTML}</details>
  </div>`;

  // Log to activity
  if (typeof _logUsage === 'function') _logUsage('action', 'Auto Test: ' + pass + '/' + total + ' passed');
}

// ─── DATA TOOLS ──────────────────────────────────────────────────────────────
function adminRunIntegrityCheck() {
  const el = document.getElementById('integrity-result');
  if (!el) return;
  let issues = 0;
  let html = '';

  function checkDiv(label, players, schedule, partners) {
    let divIssues = 0;
    const details = [];
    // Build stats from court data
    const stats = {};
    schedule.forEach(wk => {
      if (!wk.matches) return;
      wk.matches.forEach(m => {
        if (!m.courts) return;
        m.courts.forEach(ct => {
          [[ct.home, ct.win === 'home'], [ct.away, ct.win === 'away']].forEach(([pair, won]) => {
            const names = pair.split(' / ').map(s => s.trim()).filter(s => s && !s.startsWith('W/O'));
            names.forEach(n => {
              if (!stats[n]) stats[n] = { gp: 0, w: 0 };
              stats[n].gp++;
              if (won) stats[n].w++;
            });
          });
        });
      });
    });
    // Check each player
    players.forEach(p => {
      if (p.gamesPlayed === null) return;
      const s = stats[p.name];
      if (!s) { divIssues++; details.push(p.name + ' (' + p.team + '): in roster (GP=' + p.gamesPlayed + ') but NOT in court data — name mismatch?'); return; }
      if (s.gp !== p.gamesPlayed) { divIssues++; details.push(p.name + ' (' + p.team + '): GP roster=' + p.gamesPlayed + ' court=' + s.gp); }
      if (s.w !== p.wins) { divIssues++; details.push(p.name + ' (' + p.team + '): Wins roster=' + p.wins + ' court=' + s.w); }
    });
    // Check partner sums
    if (partners) {
      players.forEach(p => {
        if (p.gamesPlayed === null) return;
        const pList = partners[p.name];
        if (!pList) { if (stats[p.name]) { divIssues++; details.push(p.name + ' (' + p.team + '): in court data but missing from partners list'); } return; }
        const sum = pList.reduce((s, e) => s + e[1], 0);
        const courtGp = stats[p.name]?.gp || 0;
        if (sum !== courtGp) { divIssues++; details.push(p.name + ' (' + p.team + '): partner sum=' + sum + ' court GP=' + courtGp); }
      });
    }
    // Find court names not in player roster (with fuzzy matching for case/punctuation/space)
    const norm = s => s.toLowerCase().replace(/[\s.\-_]/g, '');
    const rosterNorm = new Set(players.map(p => norm(p.name)));
    Object.keys(stats).forEach(n => {
      // Skip walkover artifacts and concatenated pair names
      if (n === 'W' || n === 'O' || n.indexOf('/') !== -1) return;
      if (!rosterNorm.has(norm(n))) { divIssues++; details.push('Court name "' + n + '" (GP=' + stats[n].gp + ') NOT in player roster — typo or missing player?'); }
    });
    const status = divIssues === 0
      ? '<span style="color:var(--green);font-weight:600">✓ All clear</span>'
      : `<span style="color:var(--red);font-weight:600">✗ ${divIssues} issue(s)</span>`;
    const detailHtml = details.length ? '<div style="font-size:.72rem;color:var(--muted);margin:4px 0 8px 16px;font-family:\'DM Mono\',monospace;line-height:1.8">' + details.map(d => d.includes('NOT in') ? '<span style="color:var(--red)">' + _esc(d) + '</span>' : _esc(d)).join('<br>') + '</div>' : '';
    html += `<div style="margin-bottom:6px"><strong>${label}:</strong> ${status}</div>${detailHtml}`;
    issues += divIssues;
  }

  // All 11 divisions A-K
  if (typeof DIV_A_PLAYERS !== 'undefined') checkDiv('Division A', DIV_A_PLAYERS, DIV_A_SCHEDULE, null);
  if (typeof DIV_B_PLAYERS !== 'undefined') checkDiv('Division B', DIV_B_PLAYERS, DIV_B_SCHEDULE, null);
  checkDiv('Division C', DIV_C_PLAYERS, DIV_C_SCHEDULE, DIV_C_PARTNERS);
  if (typeof DIV_D_PLAYERS !== 'undefined') checkDiv('Division D', DIV_D_PLAYERS, DIV_D_SCHEDULE, null);
  if (typeof DIV_E_PLAYERS !== 'undefined') checkDiv('Division E', DIV_E_PLAYERS, DIV_E_SCHEDULE, null);
  checkDiv('Division F', DIV_F_PLAYERS, DIV_F_SCHEDULE, DIV_F_PARTNERS);
  if (typeof DIV_G_PLAYERS !== 'undefined') checkDiv('Division G', DIV_G_PLAYERS, DIV_G_SCHEDULE, null);
  if (typeof DIV_H_PLAYERS !== 'undefined') checkDiv('Division H', DIV_H_PLAYERS, DIV_H_SCHEDULE, typeof DIV_H_PARTNERS !== 'undefined' ? DIV_H_PARTNERS : null);
  checkDiv('Division I', DIV_I_PLAYERS, DIV_I_SCHEDULE, DIV_I_PARTNERS);
  if (typeof DIV_J_PLAYERS !== 'undefined') checkDiv('Division J', DIV_J_PLAYERS, DIV_J_SCHEDULE, null);
  if (typeof DIV_K_PLAYERS !== 'undefined') checkDiv('Division K', DIV_K_PLAYERS, DIV_K_SCHEDULE, null);

  const overall = issues === 0
    ? '<div style="padding:10px;background:#f0fdf4;border:1px solid #86efac;border-radius:6px;color:var(--green);font-weight:600;margin-bottom:10px">✓ All data consistent — 0 issues found</div>'
    : `<div style="padding:10px;background:#fef2f2;border:1px solid #fca5a5;border-radius:6px;color:var(--red);font-weight:600;margin-bottom:10px">✗ ${issues} total issue(s) found — run audit-partners.js for details</div>`;
  el.innerHTML = overall + html;
}

// ─── AUTO FIX STATS (recalculate player GP/Wins from court data) ─────────────
function adminAutoFixStats() {
  const el = document.getElementById('integrity-result');
  let fixed = 0;
  let details = [];

  function fixDiv(label, players, schedule, partners) {
    // Build stats from court data (source of truth)
    const stats = {};
    schedule.forEach(wk => {
      if (!wk.matches) return;
      wk.matches.forEach(m => {
        if (!m.courts) return;
        m.courts.forEach(ct => {
          [[ct.home, ct.win === 'home'], [ct.away, ct.win === 'away']].forEach(([pair, won]) => {
            pair.split(' / ').map(s => s.trim()).filter(s => s && !s.startsWith('W/O')).forEach(n => {
              if (!stats[n]) stats[n] = { gp: 0, w: 0 };
              stats[n].gp++;
              if (won) stats[n].w++;
            });
          });
        });
      });
    });

    // Fix each player's GP and Wins
    players.forEach(p => {
      if (p.gamesPlayed === null) return;
      const s = stats[p.name];
      if (!s) return;
      if (s.gp !== p.gamesPlayed || s.w !== p.wins) {
        details.push(label + ': ' + p.name + ' GP ' + p.gamesPlayed + '→' + s.gp + ', W ' + p.wins + '→' + s.w);
        p.gamesPlayed = s.gp;
        p.wins = s.w;
        fixed++;
      }
    });

    // Fix partner sums — rebuild from court data
    if (partners) {
      const partnerStats = {};
      schedule.forEach(wk => {
        if (!wk.matches) return;
        wk.matches.forEach(m => {
          if (!m.courts) return;
          m.courts.forEach(ct => {
            [ct.home, ct.away].forEach(pair => {
              const names = pair.split(' / ').map(s => s.trim()).filter(s => s && !s.startsWith('W/O'));
              if (names.length === 2) {
                [0,1].forEach(i => {
                  const me = names[i], partner = names[1-i];
                  if (!partnerStats[me]) partnerStats[me] = {};
                  partnerStats[me][partner] = (partnerStats[me][partner] || 0) + 1;
                });
              }
            });
          });
        });
      });
      // Update partners object
      Object.keys(partnerStats).forEach(name => {
        const sorted = Object.entries(partnerStats[name]).sort((a,b) => b[1] - a[1]);
        const oldSum = partners[name] ? partners[name].reduce((s,e) => s + e[1], 0) : 0;
        const newSum = sorted.reduce((s,e) => s + e[1], 0);
        if (JSON.stringify(partners[name]) !== JSON.stringify(sorted)) {
          partners[name] = sorted;
          if (oldSum !== newSum) fixed++;
        }
      });
    }
  }

  fixDiv('Div I', DIV_I_PLAYERS, DIV_I_SCHEDULE, DIV_I_PARTNERS);
  fixDiv('Div C', DIV_C_PLAYERS, DIV_C_SCHEDULE, DIV_C_PARTNERS);
  fixDiv('Div F', DIV_F_PLAYERS, DIV_F_SCHEDULE, DIV_F_PARTNERS);
  if (typeof DIV_H_PLAYERS !== 'undefined') fixDiv('Div H', DIV_H_PLAYERS, DIV_H_SCHEDULE, typeof DIV_H_PARTNERS !== 'undefined' ? DIV_H_PARTNERS : null);

  if (fixed > 0) {
    el.innerHTML = '<div style="padding:10px;background:#f0fdf4;border:1px solid #86efac;border-radius:6px;color:var(--green);font-weight:600;margin-bottom:10px">✓ Fixed ' + fixed + ' issue(s) in memory. Re-run Check to verify.</div>' +
      '<div style="font-size:.72rem;font-family:\'DM Mono\',monospace;line-height:1.8;color:var(--muted);margin-bottom:10px">' + details.map(d => _esc(d)).join('<br>') + '</div>' +
      '<div style="font-size:.78rem;color:var(--accent);font-weight:600">⚠ Changes are in memory only. You need to update the JS data files to make them permanent.</div>';
    // Re-render all pages with corrected data
    renderStandings(); renderPlayers(); renderSvgClub();
    renderDivCStandings(); renderDivCPlayers();
    if (typeof renderDivFStandings === 'function') { renderDivFStandings(); renderDivFPlayers(); }
    if (typeof renderDivHStandings === 'function') { renderDivHStandings(); renderDivHPlayers(); }
  } else {
    el.innerHTML = '<div style="padding:10px;background:#f0fdf4;border:1px solid #86efac;border-radius:6px;color:var(--green);font-weight:600">✓ No stats to fix — all data matches court records.</div>';
  }
}

// ─── DATA LOADER (fetch match results from league.cdta.co.in) ────────────────

// CDTA League team IDs per division
const _CDTA_TEAM_IDS = {
  I: [
    { short:'SATCH', id:'b939c829abcdd8283aa223a6f1823b3c' },
    { short:'TTOTS', id:'9740149a6bcf97dc3c995080ce87f788' },
    { short:'STARS', id:'54b2d9d491211bfbf9c705ab67b907cc' },
    { short:'RAIL',  id:'a3a1204c127e5f5262fdbfd3d315c611' },
    { short:'CBE',   id:'89f21f256f5c812999e4ee30878eaf96' },
    { short:'TGLO',  id:'ed541d3da4e0e3fafcb3cad96cfe2f89' },
    { short:'SNS',   id:'5390d0469ab5f426e2c32779405cf122' },
    { short:'GNEST', id:'5114925055e3948a0470b1cb2fb1826f' },
    { short:'CHAMPS',id:'86eeb6da26a10196ca6e3fb691f3e29d' },
    { short:'SAI',   id:'3e696590779a6a39377ef5e65c122cc9' },
    { short:'KING',  id:'23a7149d66dc5bf9cec5f3b017613775' }
  ],
  C: [
    { short:'SVG-C', id:'33b8e58885fd67abf9451ac10d0005e1' },
    { short:'PSG-C', id:'97d1f0afce4c2f26d44c923ef67cfd6d' },
    { short:'TIR-C', id:'34c04ad1a85a4cf0b34c9b267729d8f4' },
    { short:'SNS-A', id:'9e392082f1f086fe6efa136892e97086' },
    { short:'FMP-C', id:'82f3104ca78df1082c94248851947549' },
    { short:'ANU-C', id:'a91c0fe2260ed362623b92290b1ce93e' },
    { short:'PRO-C', id:'db927fda74a8ac0f1434bc54ef8da4c5' },
    { short:'CMT-C', id:'68efafef859de99ea7becd75212c4250' },
    { short:'GPT-C', id:'401f7b5e2d8e30c3b1ce5c2b4d8f072d' },
    { short:'COS-C', id:'c4e513624bee7d012ab3187c7df66d40' },
    { short:'LIF-C', id:'5260d0dbfa620a665ed15da93a4e0529' }
  ],
  F: [
    { short:'ACES',  id:'98e23a2aa10ee36c4cd741d12cf97bd5' },
    { short:'SNS',   id:'da7f621519eb04976c86bfb553353e37' },
    { short:'CCTA',  id:'0af4b28bc7cb0ba153135a6b2d981bbd' },
    { short:'GNEST', id:'c0ce71ef32e553b2cf88dc6cd33cb390' },
    { short:'ALPHA', id:'3629d6678ba4c63f419c348ed481085a' },
    { short:'MAP',   id:'297506f76b7ea4cdf0975a33d9bc5926' },
    { short:'CASA',  id:'cd0552f46d807ccc6f1bc17004d6873d' },
    { short:'CSA',   id:'7f344ab9a210cc01f425b484b60a1b08' },
    { short:'TIR',   id:'a779d166d851494037c7e4db1ba6970d' },
    { short:'CMTA',  id:'550d9600bb2c2204eef74eedc79450ed' },
    { short:'ALV',   id:'83cce04cae48afad17925c58fa907384' }
  ],
  H: [
    { short:'SNS-D', id:'57768d98d2ec3fc4dad98c36f246b731' },
    { short:'PSGT',  id:'49cf69926a61cd4862a2d37396212578' },
    { short:'ANU-B', id:'03206164b7f2b091d2be10fb6d3964f0' },
    { short:'GPTC-C',id:'2a73a8c64654032c580fe8cb9acdfa02' },
    { short:'RSP',   id:'8c24fdebf4a9e1eaa2a2a930999a1a8a' },
    { short:'ACTC-B',id:'5a9c5a6824fda0317dc64ecb2a907aef' },
    { short:'ANNUR', id:'2663430e96d4fb8f92e0077b03e7290d' },
    { short:'TIR-B', id:'8f6e8bb04665621b822c380c9b364960' },
    { short:'FALCON',id:'b6ec3911d413cbddc560471016a46b0f' },
    { short:'KGR-D', id:'0a7606296d89fe8bcf32b270dc1489d5' },
    { short:'CSA',   id:'c4ee4fbda1c3085dd2a1d3cc023b7076' }
  ]
};

// Week date ranges (for matching)
const _WEEK_DATES = {
  8:  '14-Mar-2026',  9: '21-Mar-2026', 10: '28-Mar-2026', 11: '04-Apr-2026'
};

let _dlAbort = false;

function _dlLog(msg, type) {
  const log = document.getElementById('dl-log');
  if (!log) return;
  log.style.display = 'block';
  const line = document.createElement('div');
  line.style.color = type === 'ok' ? 'var(--green)' : type === 'error' ? 'var(--red)' : type === 'warn' ? 'var(--accent)' : 'var(--muted)';
  if (type === 'heading') { line.style.color = 'var(--accent2)'; line.style.fontWeight = '700'; }
  line.textContent = msg;
  log.appendChild(line);
  log.scrollTop = log.scrollHeight;
}

function _parseTeamPage(html, weekDate) {
  // weekDate like '28-Mar-2026'
  const results = [];

  // 1. Find match headers with date+teams+score from the HTML structure:
  //    <div class="date">28-Mar-2026 | 29-Mar-2026</div> ... <a>TEAM_A</a> ... <div class="left">2</div><div class="right">1</div> ... <a>TEAM_B</a>
  const matchRe = /<div class="date">\s*([\s\S]*?)<\/div>[\s\S]*?Team-Details\.php\?id=[a-f0-9]+">([\s\S]*?)<\/a>[\s\S]*?<div class="left">(\d+)<\/div>\s*<div class="right">(\d+)<\/div>[\s\S]*?Team-Details\.php\?id=[a-f0-9]+">([\s\S]*?)<\/a>/g;
  let mh;
  while ((mh = matchRe.exec(html)) !== null) {
    const dateStr = mh[1].replace(/\s+/g, ' ').trim();
    if (!dateStr.includes(weekDate)) continue;
    results.push({
      home: mh[2].trim(), homeScore: parseInt(mh[3]),
      awayScore: parseInt(mh[4]), away: mh[5].trim(),
      courts: []
    });
  }

  // 2. Find court results: <div class='print Result 28-Mar-2026'><h5>PLAYER/PLAYER bt/lost PLAYER/PLAYER 6-2, 6-4</h5></div>
  const courtRe = new RegExp("<div class=['\"]print Result " + weekDate.replace(/-/g, '\\-') + "['\"]>\\s*<h5>\\s*([\\s\\S]*?)\\s*<\\/h5>", 'g');
  let cc;
  const courts = [];
  while ((cc = courtRe.exec(html)) !== null) {
    const line = cc[1].replace(/\s+/g, ' ').trim();
    const pm = line.match(/^(.+?)\s+(bt|lost)\s+(.+?)\s+(\d.+)$/);
    if (pm) courts.push({ pair1: pm[1].trim(), won: pm[2] === 'bt', pair2: pm[3].trim(), sets: pm[4].trim() });
  }

  // 3. Assign courts to matches (3 per match in order)
  let ci = 0;
  results.forEach(m => { for (let i = 0; i < 3 && ci < courts.length; i++, ci++) m.courts.push(courts[ci]); });
  return results;
}

function _REMOVED_parseMatchesFromHtml(html, weekDate) { /* removed */ }
function _REMOVED2(html, weekDate) {
  const matches = [];
  // Find completed matches section — look for date patterns near match data
  // Match pattern: "TEAM_A bt TEAM_B 3 - 0" or similar with court details
  // The HTML has match blocks with dates, teams, scores, and court-level player/set data

  // Extract all match blocks: look for date headers followed by match details
  const datePattern = new RegExp('(' + weekDate.replace(/-/g, '[^<]*?') + '[^<]*?)<', 'i');

  // Simpler: find all doubles results with player names and set scores
  // Pattern: "PLAYER1/PLAYER2 defeated PLAYER3/PLAYER4 SET_SCORES"
  // or: player pairs with scores like "6-2, 6-3"

  // Extract match result blocks
  const blockPattern = /(?:(\w[^<]*?)\s+bt\s+(\w[^<]*?)\s+(\d)\s*-\s*(\d))/gi;
  let m;
  while ((m = blockPattern.exec(html)) !== null) {
    matches.push({
      winner: m[1].trim(),
      loser: m[2].trim(),
      winScore: parseInt(m[3]),
      loseScore: parseInt(m[4])
    });
  }

  // Extract court-level details: "PLAYER1/PLAYER2" defeated/lost to "PLAYER3/PLAYER4" "6-2, 6-3"
  const courtPattern = /([A-Z][^<]*?\/[A-Z][^<]*?)\s+(?:defeated|lost to)\s+([A-Z][^<]*?\/[A-Z][^<]*?)\s+.*?(\d-\d[^<]*?)(?:<|$)/gi;
  const courts = [];
  while ((m = courtPattern.exec(html)) !== null) {
    courts.push({
      pair1: m[1].trim(),
      pair2: m[2].trim(),
      sets: m[3].trim()
    });
  }

  return { matches, courts, raw: html.length };
}

async function adminLoadMatchData() {
  const week = parseInt(document.getElementById('dl-week').value);
  const div = document.getElementById('dl-division').value;
  const log = document.getElementById('dl-log');
  const prog = document.getElementById('dl-progress');
  log.innerHTML = '';
  log.style.display = 'block';
  _dlAbort = false;

  document.getElementById('dl-load-btn').style.display = 'none';
  document.getElementById('dl-stop-btn').style.display = '';

  const weekDate = _WEEK_DATES[week] || '';
  const divisions = div === 'all' ? ['I','C','F','H'] : [div];

  _dlLog('═══ Loading Week ' + week + ' data (' + weekDate + ') ═══', 'heading');

  const allResults = {};

  for (const d of divisions) {
    if (_dlAbort) break;
    const teams = _CDTA_TEAM_IDS[d];
    if (!teams) { _dlLog('Unknown division: ' + d, 'error'); continue; }

    _dlLog('');
    _dlLog('── Division ' + d + ' (' + teams.length + ' teams) ──', 'heading');

    const seenMatches = new Set();
    allResults[d] = [];

    for (const team of teams) {
      if (_dlAbort) break;
      prog.textContent = 'Fetching ' + team.short + ' (Div ' + d + ')...';

      try {
        const res = await fetch('api/fetch-results.php?teamId=' + team.id);
        const data = await res.json();
        if (!data.ok) { _dlLog('  ' + team.short + ': fetch failed - ' + data.error, 'error'); continue; }

        const matches = _parseTeamPage(data.html, weekDate);

        matches.forEach(m => {
          const key = [m.home, m.away].sort().join('|');
          if (seenMatches.has(key)) return;
          seenMatches.add(key);

          const score = m.homeScore + '-' + m.awayScore;
          _dlLog('  ' + m.home + ' ' + score + ' ' + m.away, 'ok');

          m.courts.forEach((c, i) => {
            const tag = c.won ? '✓' : '✗';
            _dlLog('    Ct' + (i+1) + ': ' + c.pair1 + ' ' + (c.won ? 'bt' : 'lost') + ' ' + c.pair2 + ' ' + c.sets + ' ' + tag, '');
          });

          allResults[d].push(m);
        });

        if (matches.length === 0) {
          _dlLog('  ' + team.short + ': no Week ' + week + ' match', 'warn');
        }
      } catch (e) {
        _dlLog('  ' + team.short + ': error - ' + e.message, 'error');
      }

      await new Promise(r => setTimeout(r, 400));
    }

    _dlLog('  Division ' + d + ': ' + allResults[d].length + ' matches found', 'heading');
  }

  _dlLog('');
  _dlLog('═══ Done! Review results above. ═══', 'heading');
  prog.textContent = 'Complete. Review log above.';
  document.getElementById('dl-load-btn').style.display = '';
  document.getElementById('dl-stop-btn').style.display = 'none';
}

function adminStopLoad() {
  _dlAbort = true;
  document.getElementById('dl-progress').textContent = 'Stopped.';
  document.getElementById('dl-load-btn').style.display = '';
  document.getElementById('dl-stop-btn').style.display = 'none';
}

function renderSeasonSummary() {
  const el = document.getElementById('season-summary');
  if (!el) return;
  const divs = _getAllDivisions();
  const lines = divs.map(d => {
    const totalPts = d.standings.reduce((s, t) => s + t.pts, 0);
    const completedWks = d.schedule.filter(w => w.done).length;
    const totalMatches = d.schedule.filter(w => w.done).reduce((s, w) => s + (w.matches ? w.matches.filter(m => !m.rest).length : 0), 0);
    const leader = d.standings[0];
    return `<strong>Div ${d.letter}:</strong> ${d.standings.length} teams · ${completedWks}/${d.schedule.length} weeks · ${totalMatches} matches · ${totalPts} total pts · Leader: ${leader.full} (${leader.pts} pts)`;
  });
  // Totals row
  let totT=0, totP=0, totM=0;
  divs.forEach(d => {
    totT += d.teams.length;
    totP += d.players.length;
    d.schedule.forEach(wk => { if (wk.matches) wk.matches.forEach(m => { if (!m.rest && m.score) totM++; }); });
  });
  lines.push(`<strong style="color:var(--accent2)">TOTAL:</strong> ${divs.length} divisions · ${totT} teams · ${totP} players · ${totM} matches`);
  el.innerHTML = lines.join('<br>');
}

function renderSettingsStats() {
  const el = document.getElementById('settings-stats');
  if (!el) return;
  const divs = _getAllDivisions();
  let totT=0, totP=0, totM=0, totC=0;
  let maxWk = 0;
  divs.forEach(d => {
    totT += d.teams.length;
    totP += d.players.length;
    if (d.schedule.length > maxWk) maxWk = d.schedule.length;
    d.schedule.forEach(wk => {
      if (!wk.matches) return;
      wk.matches.forEach(m => {
        if (m.rest || !m.score) return;
        totM++;
        if (m.courts) totC += m.courts.length;
      });
    });
  });
  // Build per-division weeks note (A-I = 11, J = 9, K = 7)
  const wkNote = divs.map(d => 'Div ' + d.letter + ':' + d.schedule.length).join(', ');
  el.innerHTML =
    '<strong>Divisions:</strong> ' + divs.length + ' (A through K)<br>' +
    '<strong>Teams:</strong> ' + totT + '<br>' +
    '<strong>Players:</strong> ' + totP + '<br>' +
    '<strong>Weeks per Division:</strong> ' + maxWk + ' max <span style="font-size:.7rem">(' + wkNote + ')</span><br>' +
    '<strong>Matches Played:</strong> ' + totM + '<br>' +
    '<strong>Courts Played:</strong> ' + totC + '<br>' +
    '<strong>Source:</strong> league.cdta.co.in';
}

function renderStorageInfo() {
  const el = document.getElementById('storage-info');
  if (!el) return;
  const keys = ['cdta2026_auth','cdta2026_users','cdta2026_login_history','cdta2026_usage_log','cdta2026_settings'];
  const rows = keys.map(k => {
    const v = localStorage.getItem(k);
    const size = v ? (v.length / 1024).toFixed(1) + ' KB' : '—';
    return `<strong>${k}:</strong> ${size}`;
  });
  el.innerHTML = rows.join('<br>');
}

function adminExportExcel(type) {
  let csv = '';
  const esc = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';

  const allDivs = _getAllDivisions();
  if (type === 'standings') {
    csv = 'Division,Rank,Team,Points,Played,Sets Won,Sets Lost,Games Won,Games Lost\n';
    allDivs.forEach(d => {
      d.standings.forEach(t => { csv += [d.letter,t.rank,esc(t.full),t.pts,t.played,t.setsW,t.setsL,t.gamesW,t.gamesL].join(',') + '\n'; });
    });
  } else if (type === 'players') {
    csv = 'Division,Team,Name,Gender,Age,Role,Played,Wins,Win%\n';
    allDivs.forEach(d => {
      d.players.forEach(p => {
        const pct = p.gamesPlayed > 0 ? Math.round((p.wins / p.gamesPlayed) * 100) : '';
        csv += [d.letter,esc(p.team),esc(p.name),p.gender||'',p.age||'',p.role,p.gamesPlayed??'',p.wins??'',pct].join(',') + '\n';
      });
    });
  } else if (type === 'results') {
    csv = 'Division,Week,Date,Home,Score,Away,Venue,Court,Home Pair,Away Pair,Sets,Winner\n';
    allDivs.forEach(d => {
      d.schedule.forEach(wk => {
        if (!wk.matches) return;
        wk.matches.forEach(m => {
          if (m.rest) return;
          if (!m.courts || m.courts.length === 0) {
            csv += [d.letter,wk.week,esc(wk.date),esc(m.home),m.score||'TBD',esc(m.away),esc(m.venue),'','','','',''].join(',') + '\n';
          } else {
            m.courts.forEach(ct => {
              csv += [d.letter,wk.week,esc(wk.date),esc(m.home),m.score,esc(m.away),esc(m.venue),ct.ct,esc(ct.home),esc(ct.away),esc(ct.sets),ct.win].join(',') + '\n';
            });
          }
        });
      });
    });
  }

  // Download as CSV file
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'cdta2026_' + type + '_' + new Date().toISOString().slice(0,10) + '.csv';
  a.click();
  URL.revokeObjectURL(url);
  document.getElementById('export-msg').innerHTML = '<span style="color:var(--green)">✓ Downloaded ' + type + '.csv</span>';
}

// ─── SETTINGS ────────────────────────────────────────────────────────────────
function adminApplySettings() {
  const week = document.getElementById('set-week').value.trim();
  const updated = document.getElementById('set-updated').value.trim();
  const badge = document.querySelector('.badge');
  if (badge && week) badge.textContent = week;
  const updEl = document.querySelector('.site-header-top div[style*="text-align:right"] div[style*="color:rgba(255,255,255,.45)"]');
  if (updEl && updated) updEl.textContent = 'Last updated: ' + updated;
  _saveSettings({ week, updated });
  document.getElementById('settings-msg').innerHTML = '<span style="color:var(--green)">✓ Settings applied & saved to server</span>';
}

function renderAdminUsers() {
  const tbody = document.getElementById('tbody-admin-users');
  if (!tbody) return;
  const roleColors = { admin:'#dc2626', captain:'#b8860b', svgplayer:'#2563eb', viewer:'#6b7280' };
  const roleOpts = ['admin','captain','svgplayer','viewer'];
  const rows = Object.entries(USERS).map(([uid, u]) => {
    const rc = roleColors[u.role] || '#6b7280';
    const roleSelect = `<select id="role-${uid}" onchange="adminChangeRole('${uid}',this.value)" style="padding:3px 8px;border:1px solid var(--border);border-radius:4px;font-size:.72rem;font-weight:600;cursor:pointer;background:${rc};color:#fff">` +
      roleOpts.map(r => `<option value="${r}"${r===u.role?' selected':''}>${r.toUpperCase()}</option>`).join('') +
      `</select>`;
    return `<tr>
      <td style="font-family:'DM Mono',monospace;font-weight:600">${_esc(uid)}</td>
      <td>${_esc(u.name)}</td>
      <td>${roleSelect}</td>
      <td>${_esc(u.division) || '—'}</td>
      <td>${u.team ? '<span class="team-badge">'+_esc(u.team)+'</span>' : '—'}</td>
      <td style="white-space:nowrap">
        <button onclick="adminResetPassword('${uid}')" style="padding:4px 10px;border:1px solid var(--border);border-radius:4px;background:var(--surface);font-size:.72rem;cursor:pointer;margin-right:4px" title="Reset Password">🔑</button>
        <button onclick="adminEditUser('${uid}')" style="padding:4px 10px;border:1px solid var(--border);border-radius:4px;background:var(--surface);font-size:.72rem;cursor:pointer;margin-right:4px" title="Edit">✏️</button>
        ${uid !== 'rameshadmin' ? `<button onclick="adminDeleteUser('${uid}')" style="padding:4px 10px;border:1px solid #fca5a5;border-radius:4px;background:#fef2f2;color:#dc2626;font-size:.72rem;cursor:pointer" title="Delete">🗑️</button>` : ''}
      </td>
    </tr>`;
  }).join('');
  tbody.innerHTML = rows;
}

function adminAddUser() {
  const uid  = document.getElementById('au-user').value.trim().toLowerCase();
  const pass = document.getElementById('au-pass').value;
  const name = document.getElementById('au-name').value.trim();
  const role = document.getElementById('au-role').value;
  const div  = document.getElementById('au-div').value || null;
  const team = document.getElementById('au-team').value.trim() || null;
  const msg  = document.getElementById('au-msg');

  if (!uid || !pass || !name) { msg.innerHTML = '<span style="color:var(--red)">Username, password, and name are required.</span>'; return; }
  if (USERS[uid]) { msg.innerHTML = '<span style="color:var(--red)">Username already exists.</span>'; return; }

  USERS[uid] = { password:pass, role, name, division:div, team };
  _saveUsers();
  msg.innerHTML = '<span style="color:var(--green)">✓ User "' + _esc(uid) + '" added successfully.</span>';
  document.getElementById('au-user').value = '';
  document.getElementById('au-pass').value = '';
  document.getElementById('au-name').value = '';
  document.getElementById('au-team').value = '';
  renderAdminUsers();
}

function adminEditUser(uid) {
  const u = USERS[uid];
  if (!u) return;
  const name = prompt('Display Name:', u.name);
  if (name === null) return;
  const role = prompt('Role (admin/captain/svgplayer/viewer):', u.role);
  if (role === null) return;
  const div = prompt('Division (I/C/F/H or blank):', u.division || '');
  const team = prompt('Team (e.g. STARS, or blank):', u.team || '');
  const pass = prompt('New password (leave blank to keep current):', '');

  u.name = name || u.name;
  if (['admin','captain','svgplayer','viewer'].includes(role)) u.role = role;
  u.division = div || null;
  u.team = team || null;
  if (pass) u.password = pass;
  _saveUsers();
  renderAdminUsers();
  // Re-apply visibility in case current user's role changed
  const current = localStorage.getItem(SESSION_KEY);
  if (current) updateDivHVisibility(current);
}

function adminResetPassword(uid) {
  const u = USERS[uid];
  if (!u) return;
  const pass = prompt('New password for "' + uid + '":');
  if (!pass) return;
  u.password = pass;
  _saveUsers();
  const msg = document.getElementById('au-msg');
  if (msg) msg.innerHTML = '<span style="color:var(--green)">✓ Password reset for "' + _esc(uid) + '".</span>';
}

function adminChangeRole(uid, newRole) {
  const u = USERS[uid];
  if (!u) return;
  if (uid === 'rameshadmin' && newRole !== 'admin') {
    alert('Cannot change rameshadmin role.');
    renderAdminUsers();
    return;
  }
  u.role = newRole;
  _saveUsers();
  renderAdminUsers();
  // Re-apply visibility
  const current = localStorage.getItem(SESSION_KEY);
  if (current) updateDivHVisibility(current);
  const msg = document.getElementById('au-msg');
  if (msg) msg.innerHTML = '<span style="color:var(--green)">✓ Role changed to "' + _esc(newRole) + '" for "' + _esc(uid) + '".</span>';
}

function adminDeleteUser(uid) {
  if (uid === 'rameshadmin') return;
  if (!confirm('Delete user "' + uid + '"?')) return;
  delete USERS[uid];
  _saveUsers();
  renderAdminUsers();
}

async function checkAuth() {
  await _loadUsers(); // Load persisted user changes from server/localStorage
  // Restore saved settings
  try {
    const sett = await _loadSettings();
    if (sett.week) { const b = document.querySelector('.badge'); if (b) b.textContent = sett.week; }
    if (sett.updated) { const u = document.querySelector('.site-header-top div[style*="text-align:right"] div[style*="color:rgba(255,255,255,.45)"]'); if (u) u.textContent = 'Last updated: ' + sett.updated; }
  } catch(e) {}
  const stored = sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY);
  if (stored && USERS[stored]) {
    document.getElementById('login-overlay').classList.add('hidden');
    updateDivHVisibility(stored);
  }
  // Enter key support
  document.getElementById('login-pass').addEventListener('keydown', e => {
    if (e.key === 'Enter') doLogin();
  });
  document.getElementById('login-user').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('login-pass').focus();
  });
}

function doLogin() {
  const user = document.getElementById('login-user').value.trim().toLowerCase();
  const pass = document.getElementById('login-pass').value;
  const err  = document.getElementById('login-error');
  const u = USERS[user];
  if (u && u.password === pass) {
    localStorage.setItem(SESSION_KEY, user);
    document.getElementById('login-overlay').classList.add('hidden');
    updateDivHVisibility(user);
    _logLogin(user, 'login', 'Role: ' + u.role);
    _logUsage('action', 'Login');
    err.textContent = '';
    // Auto-switch captain to their division
    if (u.role === 'captain' && u.division) {
      const divMap = {
        'I': () => { const b = document.querySelector('.div-btn[onclick*="switchDivision"]'); if (b) switchDivision('I', b); },
        'F': () => { const b = document.querySelector('.div-btn[onclick*="switchToDivF"]'); if (b) switchToDivF(b); },
        'C': () => { const b = document.querySelector('.div-btn[onclick*="switchToDivC"]'); if (b) switchToDivC(b); },
      };
      if (divMap[u.division]) divMap[u.division]();
    }
  } else {
    err.textContent = 'Incorrect username or password.';
    document.getElementById('login-pass').value = '';
    document.getElementById('login-pass').focus();
  }
}

function doLogout() {
  const logUser = localStorage.getItem(SESSION_KEY) || 'unknown';
  _logLogin(logUser, 'logout');
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
  document.getElementById('login-user').value = '';
  document.getElementById('login-pass').value = '';
  document.getElementById('login-error').textContent = '';
  document.getElementById('login-overlay').classList.remove('hidden');
  document.getElementById('login-user').focus();
  updateDivHVisibility('');
  // Switch to Division I if on a hidden tab
  const activeDivBtn = document.querySelector('.div-btn.active');
  if (activeDivBtn && (activeDivBtn.id === 'btn-div-h' || activeDivBtn.id === 'btn-admin')) {
    const divIBtn = document.querySelector('.div-btn[onclick*="switchDivision"]');
    if (divIBtn) switchDivision('I', divIBtn);
  }
}

// ─── DIVISION F DATA ─────────────────────────────────────────────────────────

function renderDivFProjBreakdown() {
  const container = document.getElementById('divf-projbreakdown-container');
  if (!container) return;
  container.innerHTML = [...DIV_F_PROJ_BREAKDOWN].sort((a,b) => {
    const pa = a.current + a.fixtures.reduce((s,f) => s+f.projPts, 0);
    const pb = b.current + b.fixtures.reduce((s,f) => s+f.projPts, 0);
    return pb - pa;
  }).map(team => {
    const pending = team.fixtures.filter(f => f.actual === undefined);
    const totalProj = team.current + pending.reduce((s,f) => s + f.projPts, 0);
    const totalMax  = team.current + pending.reduce((s,f) => s + f.max, 0);
    const isAces = team.short === 'ACES';
    const rows = pending.map(f => {
      const pctProj = Math.round((f.projPts / 3) * 100);
      const venueBadge = `<span style="font-size:.62rem;color:${f.venue==='H'?'var(--green)':'var(--muted)'};background:${f.venue==='H'?'rgba(34,197,94,.1)':'rgba(100,116,139,.1)'};padding:1px 5px;border-radius:3px;margin-right:4px">${f.venue==='H'?'HOME':'AWAY'}</span>`;
      return `<tr>
        <td style="font-size:.72rem;color:var(--muted);font-family:'DM Mono',monospace">Wk${f.wk}</td>
        <td style="font-size:.78rem">${venueBadge}<span class="team-badge">${f.oppShort}</span> ${f.opp}</td>
        <td style="text-align:center">
          <div style="display:flex;align-items:center;gap:6px">
            <div style="height:5px;border-radius:3px;background:var(--border);width:50px;overflow:hidden">
              <div style="height:100%;background:linear-gradient(90deg,var(--accent2),var(--accent));width:${pctProj}%;border-radius:3px"></div>
            </div>
            <span style="font-family:'DM Mono',monospace;font-weight:700;color:var(--accent);font-size:.82rem">${f.projPts}</span>
          </div>
        </td>
        <td style="font-family:'DM Mono',monospace;color:var(--green);font-size:.8rem;text-align:center">${f.max}</td>
        <td style="font-size:.7rem;color:var(--muted);max-width:220px">${f.note}</td>
      </tr>`;
    }).join('');
    return `<div style="background:var(--surface);border:1px solid ${isAces?'var(--accent)':'var(--border)'};border-radius:8px;overflow:hidden;">
      <div style="padding:12px 16px;background:${isAces?'rgba(184,122,16,.08)':'var(--surface2)'};border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;">
        <span class="team-badge">${team.short}</span>
        <strong style="font-size:.9rem">${team.full}</strong>
        ${isAces?'<span style="font-size:.62rem;color:var(--accent);background:rgba(184,122,16,.15);padding:2px 7px;border-radius:3px;margin-left:4px">SVG CLUB</span>':''}
        <span style="margin-left:auto;font-size:.75rem;color:var(--muted)">Current: <strong style="color:var(--accent)">${team.current} pts</strong></span>
      </div>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:.8rem;">
          <thead>
            <tr style="background:var(--surface2)">
              <th style="padding:7px 10px;text-align:left;font-size:.67rem;color:var(--muted);letter-spacing:.8px;text-transform:uppercase;white-space:nowrap">Wk</th>
              <th style="padding:7px 10px;text-align:left;font-size:.67rem;color:var(--muted);letter-spacing:.8px;text-transform:uppercase">Opponent</th>
              <th style="padding:7px 10px;text-align:center;font-size:.67rem;color:var(--accent);letter-spacing:.8px;text-transform:uppercase">Proj</th>
              <th style="padding:7px 10px;text-align:center;font-size:.67rem;color:var(--green);letter-spacing:.8px;text-transform:uppercase">Max</th>
              <th style="padding:7px 10px;text-align:left;font-size:.67rem;color:var(--muted);letter-spacing:.8px;text-transform:uppercase">Note</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
          <tfoot>
            <tr style="border-top:2px solid var(--border);background:var(--surface2)">
              <td colspan="2" style="padding:9px 10px;font-size:.78rem;font-weight:600;color:var(--muted)">SEASON TOTAL (incl. current ${team.current} pts)</td>
              <td style="padding:9px 10px;text-align:center;font-family:'DM Mono',monospace;font-weight:700;color:var(--accent)">~${totalProj.toFixed(1)}</td>
              <td style="padding:9px 10px;text-align:center;font-family:'DM Mono',monospace;font-weight:700;color:var(--green)">${totalMax}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>`;
  }).join('');
}


// ─── INIT ─────────────────────────────────────────────────────────────────────
renderStandings();
renderProjection();
renderTeams();
populateScheduleFilter();
renderSchedule();
populateResultsFilter();
renderResults();
populatePlayerFilters();
recomputeDivStats(DIV_I_SCHEDULE, DIV_I_PLAYERS, DIV_I_PARTNERS, typeof DIV_I_KEY_PAIRS !== 'undefined' ? DIV_I_KEY_PAIRS : null);
renderPlayers();
renderStats();
renderSvgClub();
// Initialise SVG Players sub-tabs: default to Club Performance
(function() {
  const perfEl = document.getElementById('svgtab-performance');
  const playEl = document.getElementById('svgtab-players');
  if (perfEl) perfEl.style.display = 'block';
  if (playEl) playEl.style.display = 'none';
  const perfBtn = document.getElementById('svgsubbtn-performance');
  if (perfBtn) {
    perfBtn.style.borderBottomColor = 'var(--accent2)';
    perfBtn.style.color = 'var(--accent2)';
    perfBtn.style.fontWeight = '600';
  }
})();

// Recompute player stats and partners from schedule courts
function recomputeDivStats(SCHEDULE, PLAYERS, PARTNERS, KEY_PAIRS) {
  const norm = s => (s||'').toUpperCase().replace(/[.,'’`]/g,' ').replace(/\s+/g,' ').trim();
  const titleCase = s => s.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  const nameMap = {};
  PLAYERS.forEach(p => { nameMap[norm(p.name)] = p.name; });
  const stats = {};
  const pairStats = {};
  const ensure = n => stats[n] || (stats[n] = { played:0, wins:0, partners:{} });
  const addPair = (a, b, won) => {
    if (a > b) { const t=a; a=b; b=t; }
    const k = a + '|' + b;
    const ps = pairStats[k] || (pairStats[k] = { apps:0, wins:0 });
    ps.apps++;
    if (won) ps.wins++;
  };
  SCHEDULE.forEach(wk => {
    (wk.matches||[]).forEach(m => {
      (m.courts||[]).forEach(c => {
        const home = (c.home||'').split('/').map(norm).filter(Boolean);
        const away = (c.away||'').split('/').map(norm).filter(Boolean);
        if (home.length === 0 || away.length === 0) return;
        const homeWin = c.win === 'home';
        const awayWin = c.win === 'away';
        home.forEach((p,i) => {
          const s = ensure(p); s.played++; if (homeWin) s.wins++;
          home.forEach((o,j) => { if (i!==j) s.partners[o] = (s.partners[o]||0)+1; });
        });
        away.forEach((p,i) => {
          const s = ensure(p); s.played++; if (awayWin) s.wins++;
          away.forEach((o,j) => { if (i!==j) s.partners[o] = (s.partners[o]||0)+1; });
        });
        if (home.length >= 2) addPair(home[0], home[1], homeWin);
        if (away.length >= 2) addPair(away[0], away[1], awayWin);
      });
    });
  });
  if (KEY_PAIRS) {
    KEY_PAIRS.forEach(kp => {
      const parts = (kp.pair||'').split('/').map(norm).filter(Boolean);
      if (parts.length === 2) {
        let [a,b] = parts;
        if (a > b) { const t=a; a=b; b=t; }
        const ps = pairStats[a + '|' + b];
        if (ps) { kp.apps = ps.apps; kp.wins = ps.wins; }
        else { kp.wins = 0; }
      }
    });
  }
  PLAYERS.forEach(p => {
    const s = stats[norm(p.name)];
    p.gamesPlayed = s ? s.played : 0;
    p.wins = s ? s.wins : 0;
  });
  if (PARTNERS) {
    Object.keys(PARTNERS).forEach(k => delete PARTNERS[k]);
    PLAYERS.forEach(p => {
      const s = stats[norm(p.name)];
      if (s && Object.keys(s.partners).length > 0) {
        PARTNERS[p.name] = Object.entries(s.partners)
          .sort((a,b) => b[1]-a[1])
          .map(([n,c]) => [nameMap[n] || titleCase(n), c]);
      }
    });
  }
}

recomputeDivStats(DIV_C_SCHEDULE, DIV_C_PLAYERS, DIV_C_PARTNERS, DIV_C_KEY_PAIRS);
renderDivCTeams();
renderDivCStandings();
renderDivCProjection();
populateDivCScheduleFilter();
renderDivCSchedule();
populateDivCResultsFilter();
renderDivCResults();
renderDivCPlayers();
renderDivCStats();
populateDivCPlayerFilter();


// ─── DIVISION F RENDER FUNCTIONS ─────────────────────────────────────────────
function renderDivFStandings() {
  const tb = document.getElementById('tbody-divf-standings');
  if (!tb) return;
  const total = DIV_F_STANDINGS.length;
  tb.innerHTML = DIV_F_STANDINGS.map(s => {
    const isAces = s.short === 'ACES';
    const playedPts = s.played;
    const matches = Math.floor(s.played / 3);
    const ptsPct = playedPts > 0 ? Math.round((s.pts / playedPts) * 100) : 0;
    return `<tr${_standingRowClass(s.rank, total)}>
      <td class="rank-cell ${s.rank<=3?'top3':''}">${s.rank} ${_standingIcon(s.rank, total)}</td>
      <td><span class="team-badge">${s.short}</span> ${s.full}${isAces?' <span style="font-size:.62rem;color:var(--accent);background:rgba(184,122,16,.15);padding:2px 7px;border-radius:3px;margin-left:4px">SVG CLUB</span>':''}</td>
      <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${matches}m)</span></td>
      <td class="pts-cell">${s.pts} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
      <td style="font-family:'DM Mono',monospace">${s.setsW}</td>
      <td style="font-family:'DM Mono',monospace">${s.setsL}</td>
      <td style="font-family:'DM Mono',monospace">${s.gamesW}</td>
      <td style="font-family:'DM Mono',monospace">${s.gamesL}</td>
    </tr>`;
  }).join('');
}

function renderDivFProjection() {
  const tb = document.getElementById('tbody-divf-proj');
  if (!tb) return;
  const maxPts = 29;
  tb.innerHTML = [...DIV_F_PROJECTIONS].sort((a,b) => b.projected - a.projected).map(p => {
    const playedPts = p.played * 3;
    const ptsPct = playedPts > 0 ? Math.round((p.current/playedPts)*100) : 0;
    const isAces = p.short === 'ACES';
    return `<tr${isAces?' style="background:#fffbeb;border-left:3px solid var(--accent)"':''}>
      <td class="rank-cell ${p.rank<=2?'top3':''}">${p.rank}</td>
      <td><span class="team-badge">${p.short}</span> ${p.full}${isAces?' <span style="font-size:.62rem;color:var(--accent);background:rgba(184,122,16,.15);padding:2px 7px;border-radius:3px;margin-left:4px">SVG CLUB</span>':''}</td>
      <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${p.played}m)</span></td>
      <td class="pts-cell">${p.current} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
      <td style="color:var(--green);font-family:'DM Mono',monospace;font-weight:600">+${p.expected}</td>
      <td style="font-family:'DM Mono',monospace;font-weight:700;color:#1e3a5f">~${p.projected}</td>
      <td style="color:var(--muted);font-size:.75rem">${p.max}</td>
      <td><div class="proj-bar-wrap"><div class="proj-bar"><div class="proj-fill" style="width:${(p.projected/maxPts)*100}%"></div></div><span style="font-size:.7rem;color:var(--muted)">${p.projected}</span></div></td>
    </tr>`;
  }).join('');
}

function renderDivFTeams() {
  const tb = document.getElementById('tbody-divf-teams');
  if (!tb) return;
  const allTeams = [...DIV_I_TEAMS, ...DIV_C_TEAMS, ...DIV_F_TEAMS];
  const clubCount = {};
  allTeams.forEach(t => clubCount[t.club] = (clubCount[t.club]||0)+1);
  tb.innerHTML = [...DIV_F_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).map((t,i) => {
    const count = clubCount[t.club];
    const shared = count > 1;
    const clubCell = shared
      ? `<td><span style="color:var(--accent);font-weight:600">${t.club}</span> <span style="font-size:.62rem;background:rgba(184,122,16,.15);color:var(--accent);padding:1px 6px;border-radius:3px;letter-spacing:.5px">${count} TEAMS</span></td>`
      : `<td style="color:var(--muted);font-size:.82rem">${t.club}</td>`;
    const capPlayer = DIV_F_PLAYERS.find(p => p.team === t.short && p.role === 'Captain');
    const capPhoto = capPlayer && capPlayer.photo ? `<img src="${_esc(capPlayer.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    return `<tr>
      <td class="rank-cell">${i+1}</td>
      <td><strong>${t.full}</strong></td>
      <td><span class="team-badge">${t.short}</span></td>
      <td>${capPhoto}${t.captain} <span class="pill pill-gold" style="margin-left:4px">C</span>${t.mobile ? '<br><a href="tel:'+_esc(t.mobile)+'" style="font-size:.7rem;color:var(--muted);font-family:\'DM Mono\',monospace">📞 '+_esc(t.mobile)+'</a>' : ''}</td>
      ${clubCell}
      <td><span style="font-size:.72rem;padding:2px 7px;border-radius:3px;font-weight:600;letter-spacing:.5px;background:${t.surface==='Clay'?'rgba(180,100,30,.12)':t.surface==='Hard'?'rgba(37,99,235,.1)':'transparent'};color:${t.surface==='Clay'?'#a05a1a':t.surface==='Hard'?'var(--accent2)':'var(--muted)'}">${t.surface||'—'}</span></td>
      <td>${t.players}</td>
    </tr>`;
  }).join('');
}

function populateDivFScheduleFilter() {
  const weekSel = document.getElementById('divf-schedule-week-filter');
  const teamSel = document.getElementById('divf-schedule-team-filter');
  if (!weekSel || !teamSel) return;
  DIV_F_SCHEDULE.forEach(wk => {
    const opt = document.createElement('option');
    opt.value = wk.week; opt.textContent = 'Week ' + wk.week;
    weekSel.appendChild(opt);
  });
  [...DIV_F_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.full; opt.textContent = t.full;
    teamSel.appendChild(opt);
  });
}

function renderDivFSchedule() {
  const filterWeek = parseInt(document.getElementById('divf-schedule-week-filter')?.value) || null;
  const filterTeam = document.getElementById('divf-schedule-team-filter')?.value || '';
  const c = document.getElementById('divf-schedule-container');
  if (!c) return;
  const filtered = DIV_F_SCHEDULE.filter(wk => !filterWeek || wk.week === filterWeek);
  c.innerHTML = SCHEDULE_COL_HEADER + filtered.map(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return '';
    const upcomingBadge = !wk.done ? `<span class="wk-badge">UPCOMING</span>` : '';
    const rows = matches.map(m => {
      const scoreCell = m.score
        ? `<div class="match-score">${m.score}</div>`
        : `<div class="match-score" style="color:var(--muted);font-size:.72rem">TBD</div>`;
      return `<div class="match-row">
        <div class="match-home">${m.home}</div>${scoreCell}
        <div class="match-away">${m.away}</div>
        <div class="match-venue">${m.venue}</div>
      </div>`;
    }).join('');
    return `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span>${upcomingBadge}</div>${rows}</div>`;
  }).join('');
}

function populateDivFResultsFilter() {
  const sel = document.getElementById('divf-results-team-filter');
  if (!sel) return;
  [...DIV_F_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.full; opt.textContent = t.full; sel.appendChild(opt);
  });
}

function renderDivFResults() {
  const filterTeam = document.getElementById('divf-results-team-filter').value;
  const filterWeek = parseInt(document.getElementById('divf-results-week-filter').value) || null;
  const c = document.getElementById('divf-results-container');
  if (!c) return;
  const played = DIV_F_SCHEDULE.filter(w => w.done && (!filterWeek || w.week === filterWeek));
  let html = '';
  played.forEach(wk => {
    const blocks = wk.matches
      .filter(m => m.score && (!filterTeam || m.home===filterTeam || m.away===filterTeam))
      .map(m => {
        const parts = m.score.split('-').map(Number);
        const hw = parts[0] > parts[1];
        const hasCourts = m.courts && m.courts.length > 0;
        const courtDetail = hasCourts
          ? '<div style="border-top:1px solid #d1d9e6;">'
            + `<div style="display:grid;grid-template-columns:1fr 100px 1fr;padding:4px 16px 4px 28px;background:#eef1f6;"><div style="font-size:.62rem;color:#64748b;text-transform:uppercase;letter-spacing:.8px">${m.home}</div><div style="text-align:center;font-size:.62rem;color:#64748b;text-transform:uppercase;letter-spacing:.8px">SET SCORES</div><div style="font-size:.62rem;color:#64748b;text-transform:uppercase;letter-spacing:.8px">${m.away}</div></div>`
            + m.courts.map(ct => {
                const hw2 = ct.win==='home';
                return `<div style="display:grid;grid-template-columns:1fr 100px 1fr;align-items:center;padding:6px 16px 6px 28px;border-bottom:1px solid #d1d9e6;font-size:.78rem;"><div style="${hw2?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.home}</div><div style="text-align:center;"><span style="font-size:.62rem;color:#64748b;margin-right:3px">Ct${ct.ct}</span><span style="font-family:'DM Mono',monospace;color:${hw2?'#22c55e':'#ef4444'}">${ct.sets}</span></div><div style="${!hw2?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.away}</div></div>`;
              }).join('')
            + '</div>'
          : '';
        return `<div style="background:#ffffff;border:1px solid #d1d9e6;border-radius:6px;margin-bottom:8px;overflow:hidden;">
          <div style="display:grid;grid-template-columns:1fr 70px 1fr 1fr;gap:10px;align-items:center;padding:10px 16px;">
            <div style="text-align:right;font-size:.85rem;font-weight:${hw?700:400}">${m.home}${hw?' <span style="color:#16a34a;font-size:.7rem">●</span>':''}</div>
            <div style="text-align:center;font-family:'DM Mono',monospace;font-weight:700;font-size:.9rem;color:var(--accent)">${m.score}</div>
            <div style="font-size:.85rem;font-weight:${!hw?700:400}">${!hw?'<span style="color:#16a34a;font-size:.7rem">● </span>':''}${m.away}</div>
            <div style="font-size:.72rem;color:#64748b">${m.venue}</div>
          </div>${courtDetail}</div>`;
      }).join('');
    if (blocks) html += `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span></div>${blocks}</div>`;
  });
  c.innerHTML = (html ? RESULTS_COL_HEADER + html : '<div style="color:#64748b;padding:20px">No results found.</div>');
}

function populateDivFPlayerFilter() {
  const sel = document.getElementById('divf-player-team-filter');
  if (!sel) return;
  [...DIV_F_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.short; opt.textContent = t.full; sel.appendChild(opt);
  });
}

function renderDivFPlayers() {
  const search  = (document.getElementById('divf-player-search').value||'').toLowerCase();
  const teamF   = document.getElementById('divf-player-team-filter').value;
  const genderF = document.getElementById('divf-player-gender-filter')?.value || '';
  const ages = DIV_F_PLAYERS.filter(p => p.age !== null).map(p => p.age);
  const maxAge = ages.length ? Math.max(...ages) : null;
  const minAge = ages.length ? Math.min(...ages) : null;

  let filtered = DIV_F_PLAYERS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search)) return false;
    if (teamF && p.team !== teamF) return false;
    if (genderF && p.gender !== genderF) return false;
    return true;
  });

  filtered.sort((a,b) => {
    let av = a[divFSortKey], bv = b[divFSortKey];
    if (divFSortKey === 'winpct') {
      av = (a.gamesPlayed !== null && a.gamesPlayed > 0) ? a.wins/a.gamesPlayed : -1;
      bv = (b.gamesPlayed !== null && b.gamesPlayed > 0) ? b.wins/b.gamesPlayed : -1;
    }
    if (av === null) av = -999; if (bv === null) bv = -999;
    if (typeof av === 'string') return divFSortDir * av.localeCompare(bv);
    return divFSortDir * (av - bv);
  });

  const tb = document.getElementById('tbody-divf-players');
  if (!tb) return;
  tb.innerHTML = filtered.map(p => {
    const hasData = p.gamesPlayed !== null;
    const pct = hasData && p.gamesPlayed > 0 ? Math.round((p.wins/p.gamesPlayed)*100) : null;
    const losses = hasData ? p.gamesPlayed - p.wins : null;
    const capTag = p.role==='Captain' ? ' <span class="pill pill-gold" style="font-size:.6rem;padding:1px 5px;vertical-align:middle">C</span>' : '';
    const ageTag = p.age === maxAge && maxAge !== null ? ' 🏅' : p.age === minAge && minAge !== null ? ' ⭐' : '';
    const winsDisplay = hasData
      ? `<span style="color:var(--green)">${p.wins}W</span>${losses > 0 ? ` <span style="color:var(--red)">${losses}L</span>` : ''}`
      : '<span style="color:var(--muted)">—</span>';
    const pList = DIV_F_PARTNERS[p.name];
    const partnerCell = pList
      ? pList.map(([n,c]) => `${n}<span style="font-family:'DM Mono',monospace;font-size:.68rem;color:var(--muted);margin-left:2px">(${c})</span>`).join(' · ')
      : '<span style="color:var(--muted)">—</span>';
    const photoHtml = p.photo ? `<img src="${_esc(p.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    return `<tr>
      <td>${photoHtml}${p.name}${ageTag}${capTag}</td>
      <td><span class="team-badge">${p.team}</span></td>
      <td class="${p.gender==='M'?'gender-m':'gender-f'}">${p.gender==='M'?'♂':'♀'}</td>
      <td style="font-family:'DM Mono',monospace;font-weight:600;color:${hasData?'var(--text)':'var(--muted)'}">${hasData ? p.gamesPlayed : '—'}</td>
      <td><span style="font-family:'DM Mono',monospace">${winsDisplay}</span></td>
      <td>${pct !== null ? `<div class="win-bar-wrap"><div class="win-bar"><div class="win-bar-fill" style="width:${pct}%"></div></div><span style="font-family:'DM Mono',monospace;font-size:.78rem;color:${pct>=70?'var(--green)':pct>=40?'var(--text)':'var(--muted)'}">${pct}%</span></div>` : '<span style="color:var(--muted)">—</span>'}</td>
      <td style="font-size:.76rem;line-height:1.6">${partnerCell}</td>
    </tr>`;
  }).join('');

  const cnt = document.getElementById('divf-player-count');
  if (cnt) cnt.textContent = `Showing ${filtered.length} of ${DIV_F_PLAYERS.length} players`;

  // Totals summary
  const withData = filtered.filter(p => p.gamesPlayed !== null);
  const totalPlayed = withData.reduce((s,p) => s+p.gamesPlayed, 0);
  const totalWins   = withData.reduce((s,p) => s+p.wins, 0);
  const totalLosses = totalPlayed - totalWins;
  const totalPct    = totalPlayed > 0 ? Math.round((totalWins/totalPlayed)*100) : 0;
  const teamsInFilter = [...new Set(filtered.map(p => p.team))];
  const totalsEl = document.getElementById('divf-player-totals');
  if (totalsEl) totalsEl.innerHTML = withData.length === 0
    ? '<span style="color:var(--muted);font-size:.8rem">No court data for selected players</span>'
    : `<span style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;white-space:nowrap">${teamsInFilter.length} team${teamsInFilter.length>1?'s':''} · ${withData.length} players</span>`
    + `<span style="font-family:'DM Mono',monospace;font-weight:700;font-size:.92rem;color:var(--text)">${totalPlayed} <span style="font-size:.7rem;font-weight:400;color:var(--muted)">courts played</span></span>`
    + `<span style="font-family:'DM Mono',monospace;font-weight:700;font-size:.92rem;color:var(--green)">${totalWins}W</span>`
    + `<span style="font-family:'DM Mono',monospace;font-weight:700;font-size:.92rem;color:var(--red)">${totalLosses}L</span>`
    + `<span style="font-family:'DM Mono',monospace;font-size:.85rem;color:${totalPct>=60?'var(--green)':totalPct>=40?'var(--text)':'var(--muted)'}">${totalPct}% win rate</span>`;
}

function renderDivFStats() {
  const tb = document.getElementById('tbody-divf-pairs');
  if (!tb) return;
  tb.innerHTML = DIV_F_KEY_PAIRS.map((p,i) => {
    const pct = Math.round((p.wins/p.apps)*100);
    return `<tr>
      <td class="rank-cell">${i+1}</td>
      <td style="font-weight:500">${p.pair}</td>
      <td><span class="team-badge">${p.team}</span></td>
      <td style="font-family:'DM Mono',monospace;font-weight:600">${p.apps}</td>
      <td style="color:var(--green);font-family:'DM Mono',monospace;font-weight:700">${p.wins}</td>
      <td><div class="win-bar-wrap"><div class="win-bar"><div class="win-bar-fill" style="width:${pct}%"></div></div><span style="font-size:.78rem;color:var(--muted)">${pct}%</span></div></td>
    </tr>`;
  }).join('');
}


function switchToDivF(btn) { switchToDiv('F', btn); }

// ─── DIVISION F INIT ──────────────────────────────────────────────────────────
recomputeDivStats(DIV_F_SCHEDULE, DIV_F_PLAYERS, DIV_F_PARTNERS, typeof DIV_F_KEY_PAIRS !== 'undefined' ? DIV_F_KEY_PAIRS : null);
renderDivFTeams();
renderDivFStandings();
renderDivFProjection();
renderDivFProjBreakdown();
populateDivFScheduleFilter();
renderDivFSchedule();
populateDivFResultsFilter();
renderDivFResults();
renderDivFPlayers();
renderDivFStats();
populateDivFPlayerFilter();

// ─── DIVISION H ─────────────────────────────────────────────────────────────

function switchToDivH(btn) { switchToDiv('H', btn); }

function renderDivHStandings() {
  const tb = document.getElementById('tbody-divh-standings');
  if (!tb) return;
  const total = DIV_H_STANDINGS.length;
  tb.innerHTML = DIV_H_STANDINGS.map(s => {
    const playedPts = s.played;
    const matches = Math.floor(s.played / 3);
    const ptsPct = playedPts > 0 ? Math.round((s.pts / playedPts) * 100) : 0;
    return `<tr${_standingRowClass(s.rank, total)}>
    <td class="rank-cell ${s.rank<=3?'top3':''}">${s.rank} ${_standingIcon(s.rank, total)}</td>
    <td><span class="team-badge">${s.short}</span> ${s.full}</td>
    <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${matches}m)</span></td>
    <td class="pts-cell">${s.pts} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
    <td style="font-family:'DM Mono',monospace">${s.setsW}</td>
    <td style="font-family:'DM Mono',monospace">${s.setsL}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesW}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesL}</td>
  </tr>`;
  }).join('');
  // Set player count
  const el = document.getElementById('divh-player-total');
  if (el) el.textContent = DIV_H_PLAYERS.length;
}

function renderDivHProjection() {
  const tb = document.getElementById('tbody-divh-proj');
  if (!tb) return;
  const maxPts = 27;
  tb.innerHTML = [...DIV_H_PROJECTIONS].sort((a,b) => b.projected - a.projected).map(p => {
    const playedPts = (DIV_H_STANDINGS.find(s => s.short===p.short)||{played:0}).played * 3;
    const ptsPct = playedPts > 0 ? Math.round((p.current / playedPts) * 100) : 0;
    return `<tr>
      <td class="rank-cell ${p.rank<=2?'top3':''}">${p.rank}</td>
      <td><span class="team-badge">${p.short}</span> ${p.full}</td>
      <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${(DIV_H_STANDINGS.find(s=>s.short===p.short)||{played:0}).played}m)</span></td>
      <td class="pts-cell">${p.current} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
      <td style="color:var(--green);font-family:'DM Mono',monospace;font-weight:600">+${p.expected}</td>
      <td style="font-family:'DM Mono',monospace;font-weight:700;color:#1e3a5f">~${p.projected}</td>
      <td style="color:var(--muted);font-size:.75rem">${p.max}</td>
      <td><div class="proj-bar-wrap"><div class="proj-bar"><div class="proj-fill" style="width:${(p.projected/maxPts)*100}%"></div></div><span style="font-size:.7rem;color:var(--muted)">${p.projected}</span></div></td>
    </tr>`;
  }).join('');
}

function renderDivHTeams() {
  const tb = document.getElementById('tbody-divh-teams');
  if (!tb) return;
  tb.innerHTML = [...DIV_H_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).map((t,i) => {
    const capPlayer = DIV_H_PLAYERS.find(p => p.team === t.short && p.role === 'Captain');
    const capPhoto = capPlayer && capPlayer.photo ? `<img src="${_esc(capPlayer.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    return `<tr>
    <td class="rank-cell">${i+1}</td>
    <td><strong>${t.full}</strong></td>
    <td><span class="team-badge">${t.short}</span></td>
    <td>${capPhoto}${t.captain || '—'} ${t.captain ? '<span class="pill pill-gold" style="margin-left:4px">C</span>' : ''}</td>
    <td style="color:var(--muted);font-size:.82rem">${t.club}</td>
  </tr>`;
  }).join('');
}

function populateDivHScheduleFilter() {
  const weekSel = document.getElementById('divh-schedule-week-filter');
  const teamSel = document.getElementById('divh-schedule-team-filter');
  if (!weekSel || !teamSel) return;
  DIV_H_SCHEDULE.forEach(wk => {
    const opt = document.createElement('option');
    opt.value = wk.week; opt.textContent = 'Week ' + wk.week;
    weekSel.appendChild(opt);
  });
  [...DIV_H_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.full; opt.textContent = t.full;
    teamSel.appendChild(opt);
  });
}

function renderDivHSchedule() {
  const filterWeek = parseInt(document.getElementById('divh-schedule-week-filter')?.value) || null;
  const filterTeam = document.getElementById('divh-schedule-team-filter')?.value || '';
  const c = document.getElementById('divh-schedule-container');
  if (!c) return;
  const filtered = DIV_H_SCHEDULE.filter(wk => !filterWeek || wk.week === filterWeek);
  c.innerHTML = SCHEDULE_COL_HEADER + filtered.map(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return '';
    const upcomingBadge = !wk.done ? `<span class="wk-badge">UPCOMING</span>` : '';
    const rows = matches.map(m => {
      const scoreCell = m.score && m.score !== 'TBD'
        ? `<div class="match-score">${m.score}</div>`
        : `<div class="match-score" style="color:var(--muted);font-size:.72rem">TBD</div>`;
      return `<div class="match-row">
        <div class="match-home">${m.home}</div>${scoreCell}
        <div class="match-away">${m.away}</div>
        <div class="match-venue">${m.venue||''}</div>
      </div>`;
    }).join('');
    return `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span>${upcomingBadge}</div>${rows}</div>`;
  }).join('');
}

function populateDivHResultsFilter() {
  const sel = document.getElementById('divh-results-team-filter');
  if (!sel) return;
  [...DIV_H_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.full; opt.textContent = t.full; sel.appendChild(opt);
  });
}

function renderDivHResults() {
  const filterTeam = document.getElementById('divh-results-team-filter').value;
  const filterWeek = parseInt(document.getElementById('divh-results-week-filter').value) || null;
  const c = document.getElementById('divh-results-container');
  if (!c) return;
  const played = DIV_H_SCHEDULE.filter(w => w.done && (!filterWeek || w.week === filterWeek));
  let html = '';
  played.forEach(wk => {
    const blocks = wk.matches
      .filter(m => m.score && (!filterTeam || m.home===filterTeam || m.away===filterTeam))
      .map(m => {
        const parts = m.score.split('-').map(Number);
        const hw = parts[0] > parts[1];
        const hasCourts = m.courts && m.courts.length > 0;
        const courtDetail = hasCourts
          ? '<div style="border-top:1px solid #d1d9e6;">'
            + `<div style="display:grid;grid-template-columns:1fr 100px 1fr;padding:4px 16px 4px 28px;background:#eef1f6;"><div style="font-size:.62rem;color:#64748b;text-transform:uppercase;letter-spacing:.8px">${m.home}</div><div style="text-align:center;font-size:.62rem;color:#64748b;text-transform:uppercase;letter-spacing:.8px">SET SCORES</div><div style="font-size:.62rem;color:#64748b;text-transform:uppercase;letter-spacing:.8px">${m.away}</div></div>`
            + m.courts.map(ct => {
                const hw2 = ct.win==='home';
                return `<div style="display:grid;grid-template-columns:1fr 100px 1fr;align-items:center;padding:6px 16px 6px 28px;border-bottom:1px solid #d1d9e6;font-size:.78rem;"><div style="${hw2?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.home}</div><div style="text-align:center;"><span style="font-size:.62rem;color:#64748b;margin-right:3px">Ct${ct.ct}</span><span style="font-family:'DM Mono',monospace;color:${hw2?'#22c55e':'#ef4444'}">${ct.sets}</span></div><div style="${!hw2?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.away}</div></div>`;
              }).join('')
            + '</div>'
          : '';
        return `<div style="background:#ffffff;border:1px solid #d1d9e6;border-radius:6px;margin-bottom:8px;overflow:hidden;">
          <div style="display:grid;grid-template-columns:1fr 70px 1fr 1fr;gap:10px;align-items:center;padding:10px 16px;">
            <div style="text-align:right;font-size:.85rem;font-weight:${hw?700:400}">${m.home}${hw?' <span style="color:#16a34a;font-size:.7rem">●</span>':''}</div>
            <div style="text-align:center;font-family:'DM Mono',monospace;font-weight:700;font-size:.9rem;color:var(--accent)">${m.score}</div>
            <div style="font-size:.85rem;font-weight:${!hw?700:400}">${!hw?'<span style="color:#16a34a;font-size:.7rem">● </span>':''}${m.away}</div>
            <div style="font-size:.72rem;color:#64748b">${m.venue}</div>
          </div>${courtDetail}</div>`;
      }).join('');
    if (blocks) html += `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span></div>${blocks}</div>`;
  });
  c.innerHTML = (html ? RESULTS_COL_HEADER + html : '<div style="color:#64748b;padding:20px">No results found.</div>');
}

function populateDivHPlayerFilter() {
  const sel = document.getElementById('divh-player-team-filter');
  if (!sel) return;
  [...DIV_H_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.short; opt.textContent = t.full; sel.appendChild(opt);
  });
}

function sortDivHPlayers(key) {
  if (divHSortKey === key) divHSortDir *= -1;
  else { divHSortKey = key; divHSortDir = (key==='name'||key==='team') ? 1 : -1; }
  renderDivHPlayers();
}

function renderDivHPlayers() {
  const search  = (document.getElementById('divh-player-search').value||'').toLowerCase();
  const teamF   = document.getElementById('divh-player-team-filter').value;

  let filtered = DIV_H_PLAYERS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search)) return false;
    if (teamF && p.team !== teamF) return false;
    return true;
  });

  filtered.sort((a,b) => {
    let av = a[divHSortKey], bv = b[divHSortKey];
    if (divHSortKey === 'winpct') {
      av = (a.gamesPlayed !== null && a.gamesPlayed > 0) ? a.wins/a.gamesPlayed : -1;
      bv = (b.gamesPlayed !== null && b.gamesPlayed > 0) ? b.wins/b.gamesPlayed : -1;
    }
    if (av === null) av = -999; if (bv === null) bv = -999;
    if (typeof av === 'string') return divHSortDir * av.localeCompare(bv);
    return divHSortDir * (av - bv);
  });

  const tb = document.getElementById('tbody-divh-players');
  if (!tb) return;
  tb.innerHTML = filtered.map(p => {
    const hasData = p.gamesPlayed !== null;
    const pct = hasData && p.gamesPlayed > 0 ? Math.round((p.wins/p.gamesPlayed)*100) : null;
    const losses = hasData ? p.gamesPlayed - p.wins : null;
    const winsDisplay = hasData
      ? `<span style="color:var(--green)">${p.wins}W</span>${losses > 0 ? ` <span style="color:var(--red)">${losses}L</span>` : ''}`
      : '<span style="color:var(--muted)">—</span>';
    const pList = DIV_H_PARTNERS[p.name];
    const partnerCell = pList
      ? pList.map(([n,c]) => `${n}<span style="font-family:'DM Mono',monospace;font-size:.68rem;color:var(--muted);margin-left:2px">(${c})</span>`).join(' · ')
      : '<span style="color:var(--muted)">—</span>';
    const photoHtml = p.photo ? `<img src="${_esc(p.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    return `<tr>
      <td>${photoHtml}${p.name}</td>
      <td><span class="team-badge">${p.team}</span></td>
      <td style="font-family:'DM Mono',monospace;font-weight:600;color:${hasData?'var(--text)':'var(--muted)'}">${hasData ? p.gamesPlayed : '—'}</td>
      <td><span style="font-family:'DM Mono',monospace">${winsDisplay}</span></td>
      <td>${pct !== null ? `<div class="win-bar-wrap"><div class="win-bar"><div class="win-bar-fill" style="width:${pct}%"></div></div><span style="font-family:'DM Mono',monospace;font-size:.78rem;color:${pct>=70?'var(--green)':pct>=40?'var(--text)':'var(--muted)'}">${pct}%</span></div>` : '<span style="color:var(--muted)">—</span>'}</td>
      <td style="font-size:.76rem;line-height:1.6">${partnerCell}</td>
    </tr>`;
  }).join('');

  const cnt = document.getElementById('divh-player-count');
  if (cnt) cnt.textContent = `Showing ${filtered.length} of ${DIV_H_PLAYERS.length} players`;

  const withData = filtered.filter(p => p.gamesPlayed !== null);
  const totalPlayed = withData.reduce((s,p) => s+p.gamesPlayed, 0);
  const totalWins   = withData.reduce((s,p) => s+p.wins, 0);
  const totalLosses = totalPlayed - totalWins;
  const totalPct    = totalPlayed > 0 ? Math.round((totalWins/totalPlayed)*100) : 0;
  const teamsInFilter = [...new Set(filtered.map(p => p.team))];
  const totalsEl = document.getElementById('divh-player-totals');
  if (totalsEl) totalsEl.innerHTML = withData.length === 0
    ? '<span style="color:var(--muted);font-size:.8rem">No court data for selected players</span>'
    : `<span style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;white-space:nowrap">${teamsInFilter.length} team${teamsInFilter.length>1?'s':''} · ${withData.length} players</span>`
    + `<span style="font-family:'DM Mono',monospace;font-weight:700;font-size:.92rem;color:var(--text)">${totalPlayed} <span style="font-size:.7rem;font-weight:400;color:var(--muted)">courts played</span></span>`
    + `<span style="font-family:'DM Mono',monospace;font-weight:700;font-size:.92rem;color:var(--green)">${totalWins}W</span>`
    + `<span style="font-family:'DM Mono',monospace;font-weight:700;font-size:.92rem;color:var(--red)">${totalLosses}L</span>`
    + `<span style="font-family:'DM Mono',monospace;font-size:.85rem;color:${totalPct>=60?'var(--green)':totalPct>=40?'var(--text)':'var(--muted)'}">${totalPct}% win rate</span>`;
}

function renderDivHStats() {
  const tb = document.getElementById('tbody-divh-pairs');
  if (!tb) return;
  tb.innerHTML = DIV_H_KEY_PAIRS.map((p,i) => {
    const pct = Math.round((p.wins/p.apps)*100);
    return `<tr>
      <td class="rank-cell">${i+1}</td>
      <td style="font-weight:500">${p.pair}</td>
      <td><span class="team-badge">${p.team}</span></td>
      <td style="font-family:'DM Mono',monospace;font-weight:600">${p.apps}</td>
      <td style="color:var(--green);font-family:'DM Mono',monospace;font-weight:700">${p.wins}</td>
      <td><div class="win-bar-wrap"><div class="win-bar"><div class="win-bar-fill" style="width:${pct}%"></div></div><span style="font-size:.78rem;color:var(--muted)">${pct}%</span></div></td>
    </tr>`;
  }).join('');
}

// ─── DIVISION H INIT ──────────────────────────────────────────────────────────
recomputeDivStats(DIV_H_SCHEDULE, DIV_H_PLAYERS, DIV_H_PARTNERS);
renderDivHTeams();
renderDivHStandings();
renderDivHProjection();
populateDivHScheduleFilter();
renderDivHSchedule();
populateDivHResultsFilter();
renderDivHResults();
renderDivHPlayers();
renderDivHStats();
populateDivHPlayerFilter();

checkAuth();

// ═══════════════════════════════════════════════════════════════════════════
// DIVISION A RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function renderDivAStandings() {
  const tb = document.getElementById('tbody-diva-standings');
  if (!tb) return;
  const total = DIV_A_STANDINGS.length;
  tb.innerHTML = DIV_A_STANDINGS.map(s => {
    const playedPts = s.played;
    const matches = Math.floor(s.played / 3);
    const ptsPct = playedPts > 0 ? Math.round((s.pts / playedPts) * 100) : 0;
    return `<tr${_standingRowClass(s.rank, total)}>
    <td class="rank-cell ${s.rank<=3?'top3':''}">${s.rank} ${_standingIcon(s.rank, total)}</td>
    <td><span class="team-badge">${s.short}</span> ${s.full}</td>
    <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${matches}m)</span></td>
    <td class="pts-cell">${s.pts} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
    <td style="font-family:'DM Mono',monospace">${s.setsW}</td>
    <td style="font-family:'DM Mono',monospace">${s.setsL}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesW}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesL}</td>
  </tr>`;
  }).join('');
  const el = document.getElementById('diva-player-total');
  if (el) el.textContent = DIV_A_PLAYERS.length;
}

function renderDivATeams() {
  const tb = document.getElementById('tbody-diva-teams');
  if (!tb) return;
  tb.innerHTML = [...DIV_A_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).map((t,i) => `<tr>
    <td class="rank-cell">${i+1}</td>
    <td><strong>${t.full}</strong></td>
    <td><span class="team-badge">${t.short}</span></td>
    <td>${t.captain} <span class="pill pill-gold" style="margin-left:4px">C</span></td>
    <td style="color:var(--muted);font-size:.82rem">${t.club}</td>
    <td>${t.players}</td>
  </tr>`).join('');
}

function populateDivAScheduleFilter() {
  const weekSel = document.getElementById('diva-schedule-week-filter');
  const teamSel = document.getElementById('diva-schedule-team-filter');
  if (!weekSel || !teamSel) return;
  DIV_A_SCHEDULE.forEach(wk => { const o = document.createElement('option'); o.value = wk.week; o.textContent = 'Week ' + wk.week; weekSel.appendChild(o); });
  [...DIV_A_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.full; o.textContent = t.full; teamSel.appendChild(o); });
}

function renderDivASchedule() {
  const filterWeek = parseInt(document.getElementById('diva-schedule-week-filter')?.value) || null;
  const filterTeam = document.getElementById('diva-schedule-team-filter')?.value || '';
  const c = document.getElementById('diva-schedule-container');
  if (!c) return;
  const filtered = DIV_A_SCHEDULE.filter(wk => !filterWeek || wk.week === filterWeek);
  c.innerHTML = SCHEDULE_COL_HEADER + filtered.map(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return '';
    const upcomingBadge = !wk.done ? '<span class="wk-badge">UPCOMING</span>' : '';
    return `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span>${upcomingBadge}</div>${matches.map(m => {
      const sc = m.score ? `<div class="match-score">${m.score}</div>` : '<div class="match-score" style="color:var(--muted);font-size:.72rem">TBD</div>';
      return `<div class="match-row"><div class="match-home">${m.home}</div>${sc}<div class="match-away">${m.away}</div><div class="match-venue">${m.venue||''}</div></div>`;
    }).join('')}</div>`;
  }).join('');
}

function populateDivAResultsFilter() {
  const wSel = document.getElementById('diva-results-week-filter');
  const tSel = document.getElementById('diva-results-team-filter');
  if (!wSel || !tSel) return;
  DIV_A_SCHEDULE.filter(w => w.done).forEach(wk => { const o = document.createElement('option'); o.value = wk.week; o.textContent = 'Week ' + wk.week; wSel.appendChild(o); });
  [...DIV_A_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.full; o.textContent = t.full; tSel.appendChild(o); });
}

function renderDivAResults() {
  const filterTeam = document.getElementById('diva-results-team-filter').value;
  const filterWeek = parseInt(document.getElementById('diva-results-week-filter').value) || null;
  const c = document.getElementById('diva-results-container');
  if (!c) return;
  const played = DIV_A_SCHEDULE.filter(w => w.done && (!filterWeek || w.week === filterWeek));
  let html = '';
  played.forEach(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return;
    html += `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span></div>`;
    matches.forEach(m => {
      html += `<div class="match-row"><div class="match-home">${m.home}</div><div class="match-score">${m.score}</div><div class="match-away">${m.away}</div><div class="match-venue">${m.venue||''}</div></div>`;
      if (m.courts) m.courts.forEach(ct => {
        const hw = ct.win==='home', aw = ct.win==='away';
        html += `<div style="display:grid;grid-template-columns:1fr 100px 1fr;align-items:center;padding:6px 16px 6px 28px;border-bottom:1px solid #d1d9e6;font-size:.78rem;">
          <div style="${hw?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.home}</div>
          <div style="text-align:center"><span style="font-size:.62rem;color:#64748b;margin-right:3px;text-transform:uppercase;letter-spacing:.5px">Ct${ct.ct}</span>
          <span style="font-family:'DM Mono',monospace;color:${hw?'#22c55e':aw?'#ef4444':'#64748b'}">${ct.sets}</span></div>
          <div style="${aw?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.away}</div></div>`;
      });
    });
    html += '</div>';
  });
  c.innerHTML = RESULTS_COL_HEADER + html;
}

function populateDivAPlayerFilter() {
  const sel = document.getElementById('diva-player-team-filter');
  if (!sel) return;
  [...DIV_A_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.short; o.textContent = t.full; sel.appendChild(o); });
}

function renderDivAPlayers() {
  const search = (document.getElementById('diva-player-search')?.value || '').toLowerCase();
  const teamF = document.getElementById('diva-player-team-filter')?.value || '';
  let filtered = DIV_A_PLAYERS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search)) return false;
    if (teamF && p.team !== teamF) return false;
    return true;
  }).sort((a,b) => a.name.localeCompare(b.name));
  const tb = document.getElementById('tbody-diva-players');
  tb.innerHTML = filtered.map(p => {
    const photoHtml = p.photo ? `<img src="${_esc(p.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    const capTag = p.role === 'Captain' ? ' <span class="pill pill-gold" style="font-size:.6rem;padding:1px 5px;vertical-align:middle">C</span>' : '';
    return `<tr><td>${photoHtml}${p.name}${capTag}</td><td><span class="team-badge">${p.team}</span></td><td style="font-size:.78rem;color:var(--muted)">${p.role}</td></tr>`;
  }).join('');
  document.getElementById('diva-player-count').textContent = `Showing ${filtered.length} of ${DIV_A_PLAYERS.length} players`;
}

// ── DIVISION A INIT ──
renderDivAStandings();
renderDivATeams();
populateDivAScheduleFilter();
renderDivASchedule();
populateDivAResultsFilter();
renderDivAResults();
populateDivAPlayerFilter();
renderDivAPlayers();

// ═══════════════════════════════════════════════════════════════════════════
// DIVISION B RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function renderDivBStandings() {
  const tb = document.getElementById('tbody-divb-standings');
  if (!tb) return;
  const total = DIV_B_STANDINGS.length;
  tb.innerHTML = DIV_B_STANDINGS.map(s => {
    const playedPts = s.played;
    const matches = Math.floor(s.played / 3);
    const ptsPct = playedPts > 0 ? Math.round((s.pts / playedPts) * 100) : 0;
    return `<tr${_standingRowClass(s.rank, total)}>
    <td class="rank-cell ${s.rank<=3?'top3':''}">${s.rank} ${_standingIcon(s.rank, total)}</td>
    <td><span class="team-badge">${s.short}</span> ${s.full}</td>
    <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${matches}m)</span></td>
    <td class="pts-cell">${s.pts} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
    <td style="font-family:'DM Mono',monospace">${s.setsW}</td>
    <td style="font-family:'DM Mono',monospace">${s.setsL}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesW}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesL}</td>
  </tr>`;
  }).join('');
  const el = document.getElementById('divb-player-total');
  if (el) el.textContent = DIV_B_PLAYERS.length;
}

function renderDivBTeams() {
  const tb = document.getElementById('tbody-divb-teams');
  if (!tb) return;
  tb.innerHTML = [...DIV_B_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).map((t,i) => `<tr>
    <td class="rank-cell">${i+1}</td>
    <td><strong>${t.full}</strong></td>
    <td><span class="team-badge">${t.short}</span></td>
    <td>${t.captain} <span class="pill pill-gold" style="margin-left:4px">C</span></td>
    <td style="color:var(--muted);font-size:.82rem">${t.club}</td>
    <td>${t.players}</td>
  </tr>`).join('');
}

function populateDivBScheduleFilter() {
  const weekSel = document.getElementById('divb-schedule-week-filter');
  const teamSel = document.getElementById('divb-schedule-team-filter');
  if (!weekSel || !teamSel) return;
  DIV_B_SCHEDULE.forEach(wk => { const o = document.createElement('option'); o.value = wk.week; o.textContent = 'Week ' + wk.week; weekSel.appendChild(o); });
  [...DIV_B_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.full; o.textContent = t.full; teamSel.appendChild(o); });
}

function renderDivBSchedule() {
  const filterWeek = parseInt(document.getElementById('divb-schedule-week-filter')?.value) || null;
  const filterTeam = document.getElementById('divb-schedule-team-filter')?.value || '';
  const c = document.getElementById('divb-schedule-container');
  if (!c) return;
  const filtered = DIV_B_SCHEDULE.filter(wk => !filterWeek || wk.week === filterWeek);
  c.innerHTML = SCHEDULE_COL_HEADER + filtered.map(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return '';
    const upcomingBadge = !wk.done ? '<span class="wk-badge">UPCOMING</span>' : '';
    return `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span>${upcomingBadge}</div>${matches.map(m => {
      const sc = m.score ? `<div class="match-score">${m.score}</div>` : '<div class="match-score" style="color:var(--muted);font-size:.72rem">TBD</div>';
      return `<div class="match-row"><div class="match-home">${m.home}</div>${sc}<div class="match-away">${m.away}</div><div class="match-venue">${m.venue||''}</div></div>`;
    }).join('')}</div>`;
  }).join('');
}

function populateDivBResultsFilter() {
  const wSel = document.getElementById('divb-results-week-filter');
  const tSel = document.getElementById('divb-results-team-filter');
  if (!wSel || !tSel) return;
  DIV_B_SCHEDULE.filter(w => w.done).forEach(wk => { const o = document.createElement('option'); o.value = wk.week; o.textContent = 'Week ' + wk.week; wSel.appendChild(o); });
  [...DIV_B_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.full; o.textContent = t.full; tSel.appendChild(o); });
}

function renderDivBResults() {
  const filterTeam = document.getElementById('divb-results-team-filter').value;
  const filterWeek = parseInt(document.getElementById('divb-results-week-filter').value) || null;
  const c = document.getElementById('divb-results-container');
  if (!c) return;
  const played = DIV_B_SCHEDULE.filter(w => w.done && (!filterWeek || w.week === filterWeek));
  let html = '';
  played.forEach(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return;
    html += `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span></div>`;
    matches.forEach(m => {
      html += `<div class="match-row"><div class="match-home">${m.home}</div><div class="match-score">${m.score}</div><div class="match-away">${m.away}</div><div class="match-venue">${m.venue||''}</div></div>`;
      if (m.courts) m.courts.forEach(ct => {
        const hw = ct.win==='home', aw = ct.win==='away';
        html += `<div style="display:grid;grid-template-columns:1fr 100px 1fr;align-items:center;padding:6px 16px 6px 28px;border-bottom:1px solid #d1d9e6;font-size:.78rem;">
          <div style="${hw?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.home}</div>
          <div style="text-align:center"><span style="font-size:.62rem;color:#64748b;margin-right:3px;text-transform:uppercase;letter-spacing:.5px">Ct${ct.ct}</span>
          <span style="font-family:'DM Mono',monospace;color:${hw?'#22c55e':aw?'#ef4444':'#64748b'}">${ct.sets}</span></div>
          <div style="${aw?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.away}</div></div>`;
      });
    });
    html += '</div>';
  });
  c.innerHTML = RESULTS_COL_HEADER + html;
}

function populateDivBPlayerFilter() {
  const sel = document.getElementById('divb-player-team-filter');
  if (!sel) return;
  [...DIV_B_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.short; o.textContent = t.full; sel.appendChild(o); });
}

function renderDivBPlayers() {
  const search = (document.getElementById('divb-player-search')?.value || '').toLowerCase();
  const teamF = document.getElementById('divb-player-team-filter')?.value || '';
  let filtered = DIV_B_PLAYERS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search)) return false;
    if (teamF && p.team !== teamF) return false;
    return true;
  }).sort((a,b) => a.name.localeCompare(b.name));
  const tb = document.getElementById('tbody-divb-players');
  tb.innerHTML = filtered.map(p => {
    const photoHtml = p.photo ? `<img src="${_esc(p.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    const capTag = p.role === 'Captain' ? ' <span class="pill pill-gold" style="font-size:.6rem;padding:1px 5px;vertical-align:middle">C</span>' : '';
    return `<tr><td>${photoHtml}${p.name}${capTag}</td><td><span class="team-badge">${p.team}</span></td><td style="font-size:.78rem;color:var(--muted)">${p.role}</td></tr>`;
  }).join('');
  document.getElementById('divb-player-count').textContent = `Showing ${filtered.length} of ${DIV_B_PLAYERS.length} players`;
}

// ── DIVISION B INIT ──
renderDivBStandings();
renderDivBTeams();
populateDivBScheduleFilter();
renderDivBSchedule();
populateDivBResultsFilter();
renderDivBResults();
populateDivBPlayerFilter();
renderDivBPlayers();

// ═══════════════════════════════════════════════════════════════════════════
// DIVISION D RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function renderDivDStandings() {
  const tb = document.getElementById('tbody-divd-standings');
  if (!tb) return;
  const total = DIV_D_STANDINGS.length;
  tb.innerHTML = DIV_D_STANDINGS.map(s => {
    const playedPts = s.played;
    const matches = Math.floor(s.played / 3);
    const ptsPct = playedPts > 0 ? Math.round((s.pts / playedPts) * 100) : 0;
    return `<tr${_standingRowClass(s.rank, total)}>
    <td class="rank-cell ${s.rank<=3?'top3':''}">${s.rank} ${_standingIcon(s.rank, total)}</td>
    <td><span class="team-badge">${s.short}</span> ${s.full}</td>
    <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${matches}m)</span></td>
    <td class="pts-cell">${s.pts} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
    <td style="font-family:'DM Mono',monospace">${s.setsW}</td>
    <td style="font-family:'DM Mono',monospace">${s.setsL}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesW}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesL}</td>
  </tr>`;
  }).join('');
  const el = document.getElementById('divd-player-total');
  if (el) el.textContent = DIV_D_PLAYERS.length;
}

function renderDivDTeams() {
  const tb = document.getElementById('tbody-divd-teams');
  if (!tb) return;
  tb.innerHTML = [...DIV_D_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).map((t,i) => `<tr>
    <td class="rank-cell">${i+1}</td>
    <td><strong>${t.full}</strong></td>
    <td><span class="team-badge">${t.short}</span></td>
    <td>${t.captain} <span class="pill pill-gold" style="margin-left:4px">C</span></td>
    <td style="color:var(--muted);font-size:.82rem">${t.club}</td>
    <td>${t.players}</td>
  </tr>`).join('');
}

function populateDivDScheduleFilter() {
  const weekSel = document.getElementById('divd-schedule-week-filter');
  const teamSel = document.getElementById('divd-schedule-team-filter');
  if (!weekSel || !teamSel) return;
  DIV_D_SCHEDULE.forEach(wk => { const o = document.createElement('option'); o.value = wk.week; o.textContent = 'Week ' + wk.week; weekSel.appendChild(o); });
  [...DIV_D_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.full; o.textContent = t.full; teamSel.appendChild(o); });
}

function renderDivDSchedule() {
  const filterWeek = parseInt(document.getElementById('divd-schedule-week-filter')?.value) || null;
  const filterTeam = document.getElementById('divd-schedule-team-filter')?.value || '';
  const c = document.getElementById('divd-schedule-container');
  if (!c) return;
  const filtered = DIV_D_SCHEDULE.filter(wk => !filterWeek || wk.week === filterWeek);
  c.innerHTML = SCHEDULE_COL_HEADER + filtered.map(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return '';
    const upcomingBadge = !wk.done ? '<span class="wk-badge">UPCOMING</span>' : '';
    return `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span>${upcomingBadge}</div>${matches.map(m => {
      const sc = m.score ? `<div class="match-score">${m.score}</div>` : '<div class="match-score" style="color:var(--muted);font-size:.72rem">TBD</div>';
      return `<div class="match-row"><div class="match-home">${m.home}</div>${sc}<div class="match-away">${m.away}</div><div class="match-venue">${m.venue||''}</div></div>`;
    }).join('')}</div>`;
  }).join('');
}

function populateDivDResultsFilter() {
  const wSel = document.getElementById('divd-results-week-filter');
  const tSel = document.getElementById('divd-results-team-filter');
  if (!wSel || !tSel) return;
  DIV_D_SCHEDULE.filter(w => w.done).forEach(wk => { const o = document.createElement('option'); o.value = wk.week; o.textContent = 'Week ' + wk.week; wSel.appendChild(o); });
  [...DIV_D_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.full; o.textContent = t.full; tSel.appendChild(o); });
}

function renderDivDResults() {
  const filterTeam = document.getElementById('divd-results-team-filter').value;
  const filterWeek = parseInt(document.getElementById('divd-results-week-filter').value) || null;
  const c = document.getElementById('divd-results-container');
  if (!c) return;
  const played = DIV_D_SCHEDULE.filter(w => w.done && (!filterWeek || w.week === filterWeek));
  let html = '';
  played.forEach(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return;
    html += `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span></div>`;
    matches.forEach(m => {
      html += `<div class="match-row"><div class="match-home">${m.home}</div><div class="match-score">${m.score}</div><div class="match-away">${m.away}</div><div class="match-venue">${m.venue||''}</div></div>`;
      if (m.courts) m.courts.forEach(ct => {
        const hw = ct.win==='home', aw = ct.win==='away';
        html += `<div style="display:grid;grid-template-columns:1fr 100px 1fr;align-items:center;padding:6px 16px 6px 28px;border-bottom:1px solid #d1d9e6;font-size:.78rem;">
          <div style="${hw?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.home}</div>
          <div style="text-align:center"><span style="font-size:.62rem;color:#64748b;margin-right:3px;text-transform:uppercase;letter-spacing:.5px">Ct${ct.ct}</span>
          <span style="font-family:'DM Mono',monospace;color:${hw?'#22c55e':aw?'#ef4444':'#64748b'}">${ct.sets}</span></div>
          <div style="${aw?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.away}</div></div>`;
      });
    });
    html += '</div>';
  });
  c.innerHTML = RESULTS_COL_HEADER + html;
}

function populateDivDPlayerFilter() {
  const sel = document.getElementById('divd-player-team-filter');
  if (!sel) return;
  [...DIV_D_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.short; o.textContent = t.full; sel.appendChild(o); });
}

function renderDivDPlayers() {
  const search = (document.getElementById('divd-player-search')?.value || '').toLowerCase();
  const teamF = document.getElementById('divd-player-team-filter')?.value || '';
  let filtered = DIV_D_PLAYERS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search)) return false;
    if (teamF && p.team !== teamF) return false;
    return true;
  }).sort((a,b) => a.name.localeCompare(b.name));
  const tb = document.getElementById('tbody-divd-players');
  tb.innerHTML = filtered.map(p => {
    const photoHtml = p.photo ? `<img src="${_esc(p.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    const capTag = p.role === 'Captain' ? ' <span class="pill pill-gold" style="font-size:.6rem;padding:1px 5px;vertical-align:middle">C</span>' : '';
    return `<tr><td>${photoHtml}${p.name}${capTag}</td><td><span class="team-badge">${p.team}</span></td><td style="font-size:.78rem;color:var(--muted)">${p.role}</td></tr>`;
  }).join('');
  document.getElementById('divd-player-count').textContent = `Showing ${filtered.length} of ${DIV_D_PLAYERS.length} players`;
}

// ── DIVISION D INIT ──
renderDivDStandings();
renderDivDTeams();
populateDivDScheduleFilter();
renderDivDSchedule();
populateDivDResultsFilter();
renderDivDResults();
populateDivDPlayerFilter();
renderDivDPlayers();

// ═══════════════════════════════════════════════════════════════════════════
// DIVISION E RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function renderDivEStandings() {
  const tb = document.getElementById('tbody-dive-standings');
  if (!tb) return;
  const total = DIV_E_STANDINGS.length;
  tb.innerHTML = DIV_E_STANDINGS.map(s => {
    const playedPts = s.played;
    const matches = Math.floor(s.played / 3);
    const ptsPct = playedPts > 0 ? Math.round((s.pts / playedPts) * 100) : 0;
    return `<tr${_standingRowClass(s.rank, total)}>
    <td class="rank-cell ${s.rank<=3?'top3':''}">${s.rank} ${_standingIcon(s.rank, total)}</td>
    <td><span class="team-badge">${s.short}</span> ${s.full}</td>
    <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${matches}m)</span></td>
    <td class="pts-cell">${s.pts} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
    <td style="font-family:'DM Mono',monospace">${s.setsW}</td>
    <td style="font-family:'DM Mono',monospace">${s.setsL}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesW}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesL}</td>
  </tr>`;
  }).join('');
  const el = document.getElementById('dive-player-total');
  if (el) el.textContent = DIV_E_PLAYERS.length;
}

function renderDivETeams() {
  const tb = document.getElementById('tbody-dive-teams');
  if (!tb) return;
  tb.innerHTML = [...DIV_E_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).map((t,i) => `<tr>
    <td class="rank-cell">${i+1}</td>
    <td><strong>${t.full}</strong></td>
    <td><span class="team-badge">${t.short}</span></td>
    <td>${t.captain} <span class="pill pill-gold" style="margin-left:4px">C</span></td>
    <td style="color:var(--muted);font-size:.82rem">${t.club}</td>
    <td>${t.players}</td>
  </tr>`).join('');
}

function populateDivEScheduleFilter() {
  const weekSel = document.getElementById('dive-schedule-week-filter');
  const teamSel = document.getElementById('dive-schedule-team-filter');
  if (!weekSel || !teamSel) return;
  DIV_E_SCHEDULE.forEach(wk => { const o = document.createElement('option'); o.value = wk.week; o.textContent = 'Week ' + wk.week; weekSel.appendChild(o); });
  [...DIV_E_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.full; o.textContent = t.full; teamSel.appendChild(o); });
}

function renderDivESchedule() {
  const filterWeek = parseInt(document.getElementById('dive-schedule-week-filter')?.value) || null;
  const filterTeam = document.getElementById('dive-schedule-team-filter')?.value || '';
  const c = document.getElementById('dive-schedule-container');
  if (!c) return;
  const filtered = DIV_E_SCHEDULE.filter(wk => !filterWeek || wk.week === filterWeek);
  c.innerHTML = SCHEDULE_COL_HEADER + filtered.map(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return '';
    const upcomingBadge = !wk.done ? '<span class="wk-badge">UPCOMING</span>' : '';
    return `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span>${upcomingBadge}</div>${matches.map(m => {
      const sc = m.score ? `<div class="match-score">${m.score}</div>` : '<div class="match-score" style="color:var(--muted);font-size:.72rem">TBD</div>';
      return `<div class="match-row"><div class="match-home">${m.home}</div>${sc}<div class="match-away">${m.away}</div><div class="match-venue">${m.venue||''}</div></div>`;
    }).join('')}</div>`;
  }).join('');
}

function populateDivEResultsFilter() {
  const wSel = document.getElementById('dive-results-week-filter');
  const tSel = document.getElementById('dive-results-team-filter');
  if (!wSel || !tSel) return;
  DIV_E_SCHEDULE.filter(w => w.done).forEach(wk => { const o = document.createElement('option'); o.value = wk.week; o.textContent = 'Week ' + wk.week; wSel.appendChild(o); });
  [...DIV_E_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.full; o.textContent = t.full; tSel.appendChild(o); });
}

function renderDivEResults() {
  const filterTeam = document.getElementById('dive-results-team-filter').value;
  const filterWeek = parseInt(document.getElementById('dive-results-week-filter').value) || null;
  const c = document.getElementById('dive-results-container');
  if (!c) return;
  const played = DIV_E_SCHEDULE.filter(w => w.done && (!filterWeek || w.week === filterWeek));
  let html = '';
  played.forEach(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return;
    html += `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span></div>`;
    matches.forEach(m => {
      html += `<div class="match-row"><div class="match-home">${m.home}</div><div class="match-score">${m.score}</div><div class="match-away">${m.away}</div><div class="match-venue">${m.venue||''}</div></div>`;
      if (m.courts) m.courts.forEach(ct => {
        const hw = ct.win==='home', aw = ct.win==='away';
        html += `<div style="display:grid;grid-template-columns:1fr 100px 1fr;align-items:center;padding:6px 16px 6px 28px;border-bottom:1px solid #d1d9e6;font-size:.78rem;">
          <div style="${hw?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.home}</div>
          <div style="text-align:center"><span style="font-size:.62rem;color:#64748b;margin-right:3px;text-transform:uppercase;letter-spacing:.5px">Ct${ct.ct}</span>
          <span style="font-family:'DM Mono',monospace;color:${hw?'#22c55e':aw?'#ef4444':'#64748b'}">${ct.sets}</span></div>
          <div style="${aw?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.away}</div></div>`;
      });
    });
    html += '</div>';
  });
  c.innerHTML = RESULTS_COL_HEADER + html;
}

function populateDivEPlayerFilter() {
  const sel = document.getElementById('dive-player-team-filter');
  if (!sel) return;
  [...DIV_E_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.short; o.textContent = t.full; sel.appendChild(o); });
}

function renderDivEPlayers() {
  const search = (document.getElementById('dive-player-search')?.value || '').toLowerCase();
  const teamF = document.getElementById('dive-player-team-filter')?.value || '';
  let filtered = DIV_E_PLAYERS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search)) return false;
    if (teamF && p.team !== teamF) return false;
    return true;
  }).sort((a,b) => a.name.localeCompare(b.name));
  const tb = document.getElementById('tbody-dive-players');
  tb.innerHTML = filtered.map(p => {
    const photoHtml = p.photo ? `<img src="${_esc(p.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    const capTag = p.role === 'Captain' ? ' <span class="pill pill-gold" style="font-size:.6rem;padding:1px 5px;vertical-align:middle">C</span>' : '';
    return `<tr><td>${photoHtml}${p.name}${capTag}</td><td><span class="team-badge">${p.team}</span></td><td style="font-size:.78rem;color:var(--muted)">${p.role}</td></tr>`;
  }).join('');
  document.getElementById('dive-player-count').textContent = `Showing ${filtered.length} of ${DIV_E_PLAYERS.length} players`;
}

// ── DIVISION E INIT ──
renderDivEStandings();
renderDivETeams();
populateDivEScheduleFilter();
renderDivESchedule();
populateDivEResultsFilter();
renderDivEResults();
populateDivEPlayerFilter();
renderDivEPlayers();

// ═══════════════════════════════════════════════════════════════════════════
// DIVISION G RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function renderDivGStandings() {
  const tb = document.getElementById('tbody-divg-standings');
  if (!tb) return;
  const total = DIV_G_STANDINGS.length;
  tb.innerHTML = DIV_G_STANDINGS.map(s => {
    const playedPts = s.played;
    const matches = Math.floor(s.played / 3);
    const ptsPct = playedPts > 0 ? Math.round((s.pts / playedPts) * 100) : 0;
    return `<tr${_standingRowClass(s.rank, total)}>
    <td class="rank-cell ${s.rank<=3?'top3':''}">${s.rank} ${_standingIcon(s.rank, total)}</td>
    <td><span class="team-badge">${s.short}</span> ${s.full}</td>
    <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${matches}m)</span></td>
    <td class="pts-cell">${s.pts} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
    <td style="font-family:'DM Mono',monospace">${s.setsW}</td>
    <td style="font-family:'DM Mono',monospace">${s.setsL}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesW}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesL}</td>
  </tr>`;
  }).join('');
  const el = document.getElementById('divg-player-total');
  if (el) el.textContent = DIV_G_PLAYERS.length;
}

function renderDivGTeams() {
  const tb = document.getElementById('tbody-divg-teams');
  if (!tb) return;
  tb.innerHTML = [...DIV_G_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).map((t,i) => `<tr>
    <td class="rank-cell">${i+1}</td>
    <td><strong>${t.full}</strong></td>
    <td><span class="team-badge">${t.short}</span></td>
    <td>${t.captain} <span class="pill pill-gold" style="margin-left:4px">C</span></td>
    <td style="color:var(--muted);font-size:.82rem">${t.club}</td>
    <td>${t.players}</td>
  </tr>`).join('');
}

function populateDivGScheduleFilter() {
  const weekSel = document.getElementById('divg-schedule-week-filter');
  const teamSel = document.getElementById('divg-schedule-team-filter');
  if (!weekSel || !teamSel) return;
  DIV_G_SCHEDULE.forEach(wk => { const o = document.createElement('option'); o.value = wk.week; o.textContent = 'Week ' + wk.week; weekSel.appendChild(o); });
  [...DIV_G_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.full; o.textContent = t.full; teamSel.appendChild(o); });
}

function renderDivGSchedule() {
  const filterWeek = parseInt(document.getElementById('divg-schedule-week-filter')?.value) || null;
  const filterTeam = document.getElementById('divg-schedule-team-filter')?.value || '';
  const c = document.getElementById('divg-schedule-container');
  if (!c) return;
  const filtered = DIV_G_SCHEDULE.filter(wk => !filterWeek || wk.week === filterWeek);
  c.innerHTML = SCHEDULE_COL_HEADER + filtered.map(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return '';
    const upcomingBadge = !wk.done ? '<span class="wk-badge">UPCOMING</span>' : '';
    return `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span>${upcomingBadge}</div>${matches.map(m => {
      const sc = m.score ? `<div class="match-score">${m.score}</div>` : '<div class="match-score" style="color:var(--muted);font-size:.72rem">TBD</div>';
      return `<div class="match-row"><div class="match-home">${m.home}</div>${sc}<div class="match-away">${m.away}</div><div class="match-venue">${m.venue||''}</div></div>`;
    }).join('')}</div>`;
  }).join('');
}

function populateDivGResultsFilter() {
  const wSel = document.getElementById('divg-results-week-filter');
  const tSel = document.getElementById('divg-results-team-filter');
  if (!wSel || !tSel) return;
  DIV_G_SCHEDULE.filter(w => w.done).forEach(wk => { const o = document.createElement('option'); o.value = wk.week; o.textContent = 'Week ' + wk.week; wSel.appendChild(o); });
  [...DIV_G_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.full; o.textContent = t.full; tSel.appendChild(o); });
}

function renderDivGResults() {
  const filterTeam = document.getElementById('divg-results-team-filter').value;
  const filterWeek = parseInt(document.getElementById('divg-results-week-filter').value) || null;
  const c = document.getElementById('divg-results-container');
  if (!c) return;
  const played = DIV_G_SCHEDULE.filter(w => w.done && (!filterWeek || w.week === filterWeek));
  let html = '';
  played.forEach(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return;
    html += `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span></div>`;
    matches.forEach(m => {
      html += `<div class="match-row"><div class="match-home">${m.home}</div><div class="match-score">${m.score}</div><div class="match-away">${m.away}</div><div class="match-venue">${m.venue||''}</div></div>`;
      if (m.courts) m.courts.forEach(ct => {
        const hw = ct.win==='home', aw = ct.win==='away';
        html += `<div style="display:grid;grid-template-columns:1fr 100px 1fr;align-items:center;padding:6px 16px 6px 28px;border-bottom:1px solid #d1d9e6;font-size:.78rem;">
          <div style="${hw?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.home}</div>
          <div style="text-align:center"><span style="font-size:.62rem;color:#64748b;margin-right:3px;text-transform:uppercase;letter-spacing:.5px">Ct${ct.ct}</span>
          <span style="font-family:'DM Mono',monospace;color:${hw?'#22c55e':aw?'#ef4444':'#64748b'}">${ct.sets}</span></div>
          <div style="${aw?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.away}</div></div>`;
      });
    });
    html += '</div>';
  });
  c.innerHTML = RESULTS_COL_HEADER + html;
}

function populateDivGPlayerFilter() {
  const sel = document.getElementById('divg-player-team-filter');
  if (!sel) return;
  [...DIV_G_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.short; o.textContent = t.full; sel.appendChild(o); });
}

function renderDivGPlayers() {
  const search = (document.getElementById('divg-player-search')?.value || '').toLowerCase();
  const teamF = document.getElementById('divg-player-team-filter')?.value || '';
  let filtered = DIV_G_PLAYERS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search)) return false;
    if (teamF && p.team !== teamF) return false;
    return true;
  }).sort((a,b) => a.name.localeCompare(b.name));
  const tb = document.getElementById('tbody-divg-players');
  tb.innerHTML = filtered.map(p => {
    const photoHtml = p.photo ? `<img src="${_esc(p.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    const capTag = p.role === 'Captain' ? ' <span class="pill pill-gold" style="font-size:.6rem;padding:1px 5px;vertical-align:middle">C</span>' : '';
    return `<tr><td>${photoHtml}${p.name}${capTag}</td><td><span class="team-badge">${p.team}</span></td><td style="font-size:.78rem;color:var(--muted)">${p.role}</td></tr>`;
  }).join('');
  document.getElementById('divg-player-count').textContent = `Showing ${filtered.length} of ${DIV_G_PLAYERS.length} players`;
}

// ── DIVISION G INIT ──
renderDivGStandings();
renderDivGTeams();
populateDivGScheduleFilter();
renderDivGSchedule();
populateDivGResultsFilter();
renderDivGResults();
populateDivGPlayerFilter();
renderDivGPlayers();

// ═══════════════════════════════════════════════════════════════════════════
// DIVISION J RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function renderDivJStandings() {
  const tb = document.getElementById('tbody-divj-standings');
  if (!tb) return;
  const total = DIV_J_STANDINGS.length;
  tb.innerHTML = DIV_J_STANDINGS.map(s => {
    const playedPts = s.played;
    const matches = Math.floor(s.played / 3);
    const ptsPct = playedPts > 0 ? Math.round((s.pts / playedPts) * 100) : 0;
    return `<tr${_standingRowClass(s.rank, total)}>
    <td class="rank-cell ${s.rank<=3?'top3':''}">${s.rank} ${_standingIcon(s.rank, total)}</td>
    <td><span class="team-badge">${s.short}</span> ${s.full}</td>
    <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${matches}m)</span></td>
    <td class="pts-cell">${s.pts} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
    <td style="font-family:'DM Mono',monospace">${s.setsW}</td>
    <td style="font-family:'DM Mono',monospace">${s.setsL}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesW}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesL}</td>
  </tr>`;
  }).join('');
  const el = document.getElementById('divj-player-total');
  if (el) el.textContent = DIV_J_PLAYERS.length;
}

function renderDivJTeams() {
  const tb = document.getElementById('tbody-divj-teams');
  if (!tb) return;
  tb.innerHTML = [...DIV_J_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).map((t,i) => `<tr>
    <td class="rank-cell">${i+1}</td>
    <td><strong>${t.full}</strong></td>
    <td><span class="team-badge">${t.short}</span></td>
    <td>${t.captain} <span class="pill pill-gold" style="margin-left:4px">C</span></td>
    <td style="color:var(--muted);font-size:.82rem">${t.club}</td>
    <td>${t.players}</td>
  </tr>`).join('');
}

function populateDivJScheduleFilter() {
  const weekSel = document.getElementById('divj-schedule-week-filter');
  const teamSel = document.getElementById('divj-schedule-team-filter');
  if (!weekSel || !teamSel) return;
  DIV_J_SCHEDULE.forEach(wk => { const o = document.createElement('option'); o.value = wk.week; o.textContent = 'Week ' + wk.week; weekSel.appendChild(o); });
  [...DIV_J_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.full; o.textContent = t.full; teamSel.appendChild(o); });
}

function renderDivJSchedule() {
  const filterWeek = parseInt(document.getElementById('divj-schedule-week-filter')?.value) || null;
  const filterTeam = document.getElementById('divj-schedule-team-filter')?.value || '';
  const c = document.getElementById('divj-schedule-container');
  if (!c) return;
  const filtered = DIV_J_SCHEDULE.filter(wk => !filterWeek || wk.week === filterWeek);
  c.innerHTML = SCHEDULE_COL_HEADER + filtered.map(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return '';
    const upcomingBadge = !wk.done ? '<span class="wk-badge">UPCOMING</span>' : '';
    return `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span>${upcomingBadge}</div>${matches.map(m => {
      const sc = m.score ? `<div class="match-score">${m.score}</div>` : '<div class="match-score" style="color:var(--muted);font-size:.72rem">TBD</div>';
      return `<div class="match-row"><div class="match-home">${m.home}</div>${sc}<div class="match-away">${m.away}</div><div class="match-venue">${m.venue}</div></div>`;
    }).join('')}</div>`;
  }).join('');
}

function populateDivJResultsFilter() {
  const wSel = document.getElementById('divj-results-week-filter');
  const tSel = document.getElementById('divj-results-team-filter');
  if (!wSel || !tSel) return;
  DIV_J_SCHEDULE.filter(w => w.done).forEach(wk => { const o = document.createElement('option'); o.value = wk.week; o.textContent = 'Week ' + wk.week; wSel.appendChild(o); });
  [...DIV_J_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.full; o.textContent = t.full; tSel.appendChild(o); });
}

function renderDivJResults() {
  const filterTeam = document.getElementById('divj-results-team-filter').value;
  const filterWeek = parseInt(document.getElementById('divj-results-week-filter').value) || null;
  const c = document.getElementById('divj-results-container');
  if (!c) return;
  const played = DIV_J_SCHEDULE.filter(w => w.done && (!filterWeek || w.week === filterWeek));
  let html = '';
  played.forEach(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return;
    html += `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span></div>`;
    matches.forEach(m => {
      html += `<div class="match-row"><div class="match-home">${m.home}</div><div class="match-score">${m.score}</div><div class="match-away">${m.away}</div><div class="match-venue">${m.venue}</div></div>`;
      if (m.courts) m.courts.forEach(ct => {
        const hw = ct.win==='home', aw = ct.win==='away';
        html += `<div style="display:grid;grid-template-columns:1fr 100px 1fr;align-items:center;padding:6px 16px 6px 28px;border-bottom:1px solid #d1d9e6;font-size:.78rem;">
          <div style="${hw?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.home}</div>
          <div style="text-align:center"><span style="font-size:.62rem;color:#64748b;margin-right:3px;text-transform:uppercase;letter-spacing:.5px">Ct${ct.ct}</span>
          <span style="font-family:'DM Mono',monospace;color:${hw?'#22c55e':aw?'#ef4444':'#64748b'}">${ct.sets}</span></div>
          <div style="${aw?'font-weight:600;color:#1e293b':'color:#64748b'}">${ct.away}</div></div>`;
      });
    });
    html += '</div>';
  });
  c.innerHTML = RESULTS_COL_HEADER + html;
}

function populateDivJPlayerFilter() {
  const sel = document.getElementById('divj-player-team-filter');
  if (!sel) return;
  [...DIV_J_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => { const o = document.createElement('option'); o.value = t.short; o.textContent = t.full; sel.appendChild(o); });
}

function renderDivJPlayers() {
  const search = (document.getElementById('divj-player-search')?.value || '').toLowerCase();
  const teamF = document.getElementById('divj-player-team-filter')?.value || '';
  let filtered = DIV_J_PLAYERS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search)) return false;
    if (teamF && p.team !== teamF) return false;
    return true;
  }).sort((a,b) => a.name.localeCompare(b.name));
  const tb = document.getElementById('tbody-divj-players');
  tb.innerHTML = filtered.map(p => {
    const photoHtml = p.photo ? `<img src="${_esc(p.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    const capTag = p.role === 'Captain' ? ' <span class="pill pill-gold" style="font-size:.6rem;padding:1px 5px;vertical-align:middle">C</span>' : '';
    return `<tr><td>${photoHtml}${p.name}${capTag}</td><td><span class="team-badge">${p.team}</span></td><td style="font-size:.78rem;color:var(--muted)">${p.role}</td></tr>`;
  }).join('');
  document.getElementById('divj-player-count').textContent = `Showing ${filtered.length} of ${DIV_J_PLAYERS.length} players`;
}

// ── DIVISION J INIT ──
renderDivJStandings();
renderDivJTeams();
populateDivJScheduleFilter();
renderDivJSchedule();
populateDivJResultsFilter();
renderDivJResults();
populateDivJPlayerFilter();
renderDivJPlayers();

// ═══════════════════════════════════════════════════════════════════════════
// DIVISION K RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function renderDivKStandings() {
  const tb = document.getElementById('tbody-divk-standings');
  if (!tb) return;
  const total = DIV_K_STANDINGS.length;
  tb.innerHTML = DIV_K_STANDINGS.map(s => {
    const matches = s.played;
    const playedPts = s.played * 3;
    const ptsPct = playedPts > 0 ? Math.round((s.pts / playedPts) * 100) : 0;
    return `<tr${_standingRowClass(s.rank, total)}>
    <td class="rank-cell ${s.rank<=3?'top3':''}">${s.rank} ${_standingIcon(s.rank, total)}</td>
    <td><span class="team-badge">${s.short}</span> ${s.full}</td>
    <td style="font-family:'DM Mono',monospace;color:var(--muted);font-size:.82rem">${playedPts} <span style="font-size:.68rem;color:#aab4c4">(${matches}m)</span></td>
    <td class="pts-cell">${s.pts} <span style="font-size:.68rem;font-weight:400;color:${ptsPct>=80?'var(--green)':ptsPct>=50?'var(--muted)':'var(--red)'}">${ptsPct}%</span></td>
    <td style="font-family:'DM Mono',monospace">${s.setsW}</td>
    <td style="font-family:'DM Mono',monospace">${s.setsL}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesW}</td>
    <td style="font-family:'DM Mono',monospace">${s.gamesL}</td>
  </tr>`;
  }).join('');
  const el = document.getElementById('divk-player-total');
  if (el) el.textContent = DIV_K_PLAYERS.length;
}

function renderDivKTeams() {
  const tb = document.getElementById('tbody-divk-teams');
  if (!tb) return;
  tb.innerHTML = [...DIV_K_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).map((t,i) => {
    const capPlayer = DIV_K_PLAYERS.find(p => p.team === t.short && p.role === 'Captain');
    const capPhoto = capPlayer && capPlayer.photo ? `<img src="${_esc(capPlayer.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    return `<tr>
      <td class="rank-cell">${i+1}</td>
      <td><strong>${t.full}</strong></td>
      <td><span class="team-badge">${t.short}</span></td>
      <td>${capPhoto}${t.captain} <span class="pill pill-gold" style="margin-left:4px">C</span></td>
      <td style="color:var(--muted);font-size:.82rem">${t.club}</td>
      <td>${t.players}</td>
    </tr>`;
  }).join('');
}

function populateDivKScheduleFilter() {
  const weekSel = document.getElementById('divk-schedule-week-filter');
  const teamSel = document.getElementById('divk-schedule-team-filter');
  if (!weekSel || !teamSel) return;
  DIV_K_SCHEDULE.forEach(wk => {
    const opt = document.createElement('option');
    opt.value = wk.week; opt.textContent = 'Week ' + wk.week;
    weekSel.appendChild(opt);
  });
  [...DIV_K_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.full; opt.textContent = t.full;
    teamSel.appendChild(opt);
  });
}

function renderDivKSchedule() {
  const filterWeek = parseInt(document.getElementById('divk-schedule-week-filter')?.value) || null;
  const filterTeam = document.getElementById('divk-schedule-team-filter')?.value || '';
  const c = document.getElementById('divk-schedule-container');
  if (!c) return;
  const filtered = DIV_K_SCHEDULE.filter(wk => !filterWeek || wk.week === filterWeek);
  c.innerHTML = SCHEDULE_COL_HEADER + filtered.map(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return '';
    const upcomingBadge = !wk.done ? `<span class="wk-badge">UPCOMING</span>` : '';
    const rows = matches.map(m => {
      const scoreCell = m.score
        ? `<div class="match-score">${m.score}</div>`
        : `<div class="match-score" style="color:var(--muted);font-size:.72rem">TBD</div>`;
      return `<div class="match-row">
        <div class="match-home">${m.home}</div>${scoreCell}
        <div class="match-away">${m.away}</div>
        <div class="match-venue">${m.venue}</div>
      </div>`;
    }).join('');
    return `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span>${upcomingBadge}</div>${rows}</div>`;
  }).join('');
}

function populateDivKResultsFilter() {
  const sel = document.getElementById('divk-results-team-filter');
  if (!sel) return;
  [...DIV_K_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.full; opt.textContent = t.full; sel.appendChild(opt);
  });
}

function renderDivKResults() {
  const filterTeam = document.getElementById('divk-results-team-filter').value;
  const filterWeek = parseInt(document.getElementById('divk-results-week-filter').value) || null;
  const c = document.getElementById('divk-results-container');
  if (!c) return;
  const played = DIV_K_SCHEDULE.filter(w => w.done && (!filterWeek || w.week === filterWeek));
  let html = '';
  played.forEach(wk => {
    const matches = wk.matches.filter(m => !filterTeam || m.home === filterTeam || m.away === filterTeam);
    if (matches.length === 0) return;
    html += `<div class="week-block"><div class="week-label">WEEK ${wk.week} — <span class="wk-date">${wk.date}</span></div>`;
    matches.forEach(m => {
      html += `<div class="match-row"><div class="match-home">${m.home}</div><div class="match-score">${m.score}</div><div class="match-away">${m.away}</div><div class="match-venue">${m.venue}</div></div>`;
      if (m.courts && m.courts.length > 0) {
        m.courts.forEach(ct => {
          const hw = ct.win === 'home'; const aw = ct.win === 'away';
          html += '<div style="display:grid;grid-template-columns:1fr 100px 1fr;align-items:center;padding:6px 16px 6px 28px;border-bottom:1px solid #d1d9e6;font-size:.78rem;">'
            + '<div style="' + (hw?'font-weight:600;color:#1e293b':'color:#64748b') + '">' + ct.home + '</div>'
            + '<div style="text-align:center;"><span style="font-size:.62rem;color:#64748b;margin-right:3px;text-transform:uppercase;letter-spacing:.5px">Ct' + ct.ct + '</span>'
            + '<span style="font-family:\'DM Mono\',monospace;color:' + (hw?'#22c55e':aw?'#ef4444':'#64748b') + '">' + ct.sets + '</span></div>'
            + '<div style="' + (aw?'font-weight:600;color:#1e293b':'color:#64748b') + '">' + ct.away + '</div></div>';
        });
      }
    });
    html += '</div>';
  });
  c.innerHTML = RESULTS_COL_HEADER + html;
}

function populateDivKPlayerFilter() {
  const sel = document.getElementById('divk-player-team-filter');
  if (!sel) return;
  [...DIV_K_TEAMS].sort((a,b) => a.full.localeCompare(b.full)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.short; opt.textContent = t.full; sel.appendChild(opt);
  });
}

function renderDivKPlayers() {
  const search = (document.getElementById('divk-player-search')?.value || '').toLowerCase();
  const teamF = document.getElementById('divk-player-team-filter')?.value || '';
  let filtered = DIV_K_PLAYERS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search)) return false;
    if (teamF && p.team !== teamF) return false;
    return true;
  });
  filtered.sort((a,b) => a.name.localeCompare(b.name));
  const tb = document.getElementById('tbody-divk-players');
  tb.innerHTML = filtered.map(p => {
    const photoHtml = p.photo ? `<img src="${_esc(p.photo)}" class="player-photo" onerror="this.style.display='none'">` : '';
    const capTag = p.role === 'Captain' ? ' <span class="pill pill-gold" style="font-size:.6rem;padding:1px 5px;vertical-align:middle">C</span>' : '';
    return `<tr>
      <td>${photoHtml}${p.name}${capTag}</td>
      <td><span class="team-badge">${p.team}</span></td>
      <td style="font-size:.78rem;color:var(--muted)">${p.role}</td>
    </tr>`;
  }).join('');
  document.getElementById('divk-player-count').textContent = `Showing ${filtered.length} of ${DIV_K_PLAYERS.length} players`;
}

// ── DIVISION K INIT ──
renderDivKStandings();
renderDivKTeams();
populateDivKScheduleFilter();
renderDivKSchedule();
populateDivKResultsFilter();
renderDivKResults();
populateDivKPlayerFilter();
renderDivKPlayers();

// ─── RESTORE PAGE STATE FROM HASH ──────────────────────────────────────────
(function restoreFromHash() {
  const h = location.hash.replace('#','');
  if (!h) return;
  const [div, page] = h.split('/');
  if (!div || !page) return;

  if (div === 'svg') {
    const svgBtn = document.querySelector('.div-btn[onclick*="switchToSvgClub"]');
    if (svgBtn) switchToSvgClub(svgBtn);
    return;
  }
  if (div === 'admin') return;

  // Division A-K
  const btn = document.getElementById('btn-div-' + div);
  if (!btn || btn.style.display === 'none') return;
  switchToDiv(div.toUpperCase(), btn);

  // Now navigate to the sub-page
  if (page && page !== 'standings') {
    const navBtn = document.querySelector('#nav-divs .nav-btn[onclick*="\''+page+'\'"]');
    if (navBtn) showPage(page, navBtn);
  }
})();
