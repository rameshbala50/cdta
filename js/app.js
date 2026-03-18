// CDTA 2026 -- App Logic
// Auto-extracted from cdta2026_dashboard_w8.html


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

// ─── NAV ─────────────────────────────────────────────────────────────────────
function showPage(name) {
  const activeDivBtn = document.querySelector('.div-btn.active');
  const activeDivText = activeDivBtn ? activeDivBtn.textContent.trim() : '';
  if (activeDivText === 'SVG Players') return;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  let pageId = 'page-' + name;
  if (activeDivText === 'Division F') pageId = 'page-divf-' + name;
  else if (activeDivText === 'Division C') pageId = 'page-divc-' + name;
  const pg = document.getElementById(pageId);
  if (pg) pg.classList.add('active');
  event.target.classList.add('active');
  window.scrollTo(0,0);
}

// ─── DIV_I_STANDINGS ───────────────────────────────────────────────────────────────
function renderStandings() {
  const tb = document.getElementById('tbody-standings');
  tb.innerHTML = DIV_I_STANDINGS.map(s => `
    <tr>
      <td class="rank-cell ${s.rank<=3?'top3':''}">${s.rank}</td>
      <td><span class="team-badge">${s.short}</span> ${s.full}</td>
      <td class="pts-cell">${s.pts}</td>
      <td>${s.played}</td>
      <td style="font-family:'DM Mono',monospace">${s.setsW}</td>
      <td style="font-family:'DM Mono',monospace">${s.setsL}</td>
      <td style="font-family:'DM Mono',monospace">${s.gamesW}</td>
      <td style="font-family:'DM Mono',monospace">${s.gamesL}</td>
    </tr>`).join('');
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
    const totalMin = team.current + team.fixtures.reduce((s,f) => s+f.min, 0);
    const totalMax = team.current + team.fixtures.reduce((s,f) => s+f.max, 0);
    const totalProj = team.current + team.fixtures.reduce((s,f) => s+f.projPts, 0);
    const isMyTeam = team.short === 'STARS';
    const rows = team.fixtures.map(f => {
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
    return `<tr>
      <td class="rank-cell">${i+1}</td>
      <td><strong>${t.full}</strong></td>
      <td><span class="team-badge">${t.short}</span></td>
      <td>${t.captain} <span class="pill pill-gold" style="margin-left:4px">C</span></td>
      ${clubCell}
      <td><span style="font-size:.72rem;padding:2px 7px;border-radius:3px;font-weight:600;letter-spacing:.5px;background:${t.surface==='Clay'?'rgba(180,100,30,.12)':'rgba(37,99,235,.1)'};color:${t.surface==='Clay'?'#a05a1a':'var(--accent2)'}">${t.surface||'—'}</span></td>
      <td>${t.players}</td>
    </tr>`;
  }).join('');
}

// ─── DIV_I_SCHEDULE ─────────────────────────────────────────────────────────────────
const SCHEDULE_COL_HEADER = '<div style="display:grid;grid-template-columns:1fr 80px 1fr 1fr;gap:10px;padding:5px 16px;margin-bottom:8px;font-size:.68rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;font-weight:600;border-bottom:1px solid var(--border)"><div style="text-align:right">Home</div><div style="text-align:center">Score</div><div>Away</div><div>Venue</div></div>';
const RESULTS_COL_HEADER  = '<div style="display:grid;grid-template-columns:1fr 70px 1fr 1fr;gap:10px;padding:5px 16px;margin-bottom:8px;font-size:.68rem;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;font-weight:600;border-bottom:1px solid var(--border)"><div style="text-align:right">Home</div><div style="text-align:center">Score</div><div>Away</div><div>Venue</div></div>';

function renderSchedule() {
  const c = document.getElementById('schedule-container');
  c.innerHTML = SCHEDULE_COL_HEADER + DIV_I_SCHEDULE.map(wk => {
    const rows = wk.matches.map(m => {
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
    const nameDisp = p.name + (p.age===80?' 🏅':p.age===10?' ⭐':'') + capTag;
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
function switchDivision(div, btn) {
  document.querySelectorAll('.div-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (div !== 'I') { divisionComingSoon(div); btn.classList.remove('active'); return; }
  // Restore Div nav bar
  document.getElementById('nav-divs').style.display = 'flex';
  document.getElementById('nav-svg').style.display = 'none';
  // Show Division I standings page
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-standings').classList.add('active');
  // Highlight Standings in nav-bar
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const standingsBtn = document.querySelector('#nav-divs .nav-btn[onclick*="standings"]');
  if (standingsBtn) standingsBtn.classList.add('active');
  window.scrollTo(0,0);
}

function switchToDivC(btn) {
  document.querySelectorAll('.div-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('nav-divs').style.display = 'flex';
  document.getElementById('nav-svg').style.display = 'none';
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const navStandingsBtn = document.querySelector('#nav-divs .nav-btn[onclick*="standings"]');
  if (navStandingsBtn) navStandingsBtn.classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-divc-standings').classList.add('active');
  window.scrollTo(0,0);
}

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
    const totalProj = team.current + team.fixtures.reduce((s,f) => s + f.projPts, 0);
    const totalMax  = team.current + team.fixtures.reduce((s,f) => s + f.max, 0);
    const isBlues = team.short === 'SVG-C';
    const rows = team.fixtures.map(f => {
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
  tb.innerHTML = DIV_C_STANDINGS.map(s => {
    const isBlues = s.short === 'SVG-C';
    return `<tr ${isBlues ? 'style="background:#fffbeb;border-left:3px solid var(--accent)"' : ''}>
      <td class="rank-cell ${s.rank<=4?'top3':''}">${s.rank}</td>
      <td>
        <span class="team-badge">${s.short}</span> ${s.full}
        ${isBlues ? '<span style="font-size:.62rem;color:var(--accent);background:rgba(184,122,16,.15);padding:2px 7px;border-radius:3px;margin-left:4px">SVG CLUB</span>' : ''}
      </td>
      <td class="pts-cell">${s.pts}</td>
      <td>${s.played}</td>
      <td style="font-family:'DM Mono',monospace">${s.setsW}</td>
      <td style="font-family:'DM Mono',monospace">${s.setsL}</td>
      <td style="font-family:'DM Mono',monospace">${s.gamesW}</td>
      <td style="font-family:'DM Mono',monospace">${s.gamesL}</td>
    </tr>`;
  }).join('');
}


function renderDivCSchedule() {
  const c = document.getElementById('divc-schedule-container');
  if (!c) return;
  c.innerHTML = SCHEDULE_COL_HEADER + DIV_C_SCHEDULE.map(wk => {
    const rows = wk.matches.map(m => {
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
    return `<tr>
      <td class="rank-cell">${i+1}</td>
      <td><strong>${t.full}</strong></td>
      <td><span class="team-badge">${t.short}</span></td>
      <td>${t.captain} <span class="pill pill-gold" style="margin-left:4px">C</span></td>
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
    return `<tr>
      <td>${p.name}${ageTag}${capTag}</td>
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

    return `<tr${isMe ? ' style="background:#fffbeb"' : ''}>
      <td>${p.name}${p.age===80?' 🏅':''}${capTag}</td>
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

// ─── DIVISION / SVG CLUB SWITCHER ─────────────────────────────────────────────
function showSvgTab(name, btn) {
  ['performance','players'].forEach(t => {
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
}

function switchToSvgClub(btn) {
  document.querySelectorAll('.div-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  // Swap nav bar: hide Div I/C tabs, show SVG tabs
  document.getElementById('nav-divs').style.display = 'none';
  document.getElementById('nav-svg').style.display = 'flex';
  showPageDirect('svgclub');
  // Default to Club Performance sub-tab
  const perfBtn = document.getElementById('svgsubbtn-performance');
  if (perfBtn) showSvgTab('performance', perfBtn);
}

function showPageDirect(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  window.scrollTo(0,0);
}


// ─── AUTH ─────────────────────────────────────────────────────────────────────

function checkAuth() {
  const stored = sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY);
  if (stored && USERS[stored]) {
    document.getElementById('login-overlay').classList.add('hidden');
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
  if (USERS[user] && USERS[user] === pass) {
    localStorage.setItem(SESSION_KEY, user);
    document.getElementById('login-overlay').classList.add('hidden');
    err.textContent = '';
  } else {
    err.textContent = 'Incorrect username or password.';
    document.getElementById('login-pass').value = '';
    document.getElementById('login-pass').focus();
  }
}

function doLogout() {
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
  document.getElementById('login-user').value = '';
  document.getElementById('login-pass').value = '';
  document.getElementById('login-error').textContent = '';
  document.getElementById('login-overlay').classList.remove('hidden');
  document.getElementById('login-user').focus();
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
    const totalProj = team.current + team.fixtures.reduce((s,f) => s + f.projPts, 0);
    const totalMax  = team.current + team.fixtures.reduce((s,f) => s + f.max, 0);
    const isAces = team.short === 'ACES';
    const rows = team.fixtures.map(f => {
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
renderSchedule();
populateResultsFilter();
renderResults();
populatePlayerFilters();
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
renderDivCTeams();
renderDivCStandings();
renderDivCProjection();
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
  tb.innerHTML = DIV_F_STANDINGS.map(s => {
    const isAces = s.short === 'ACES';
    return `<tr${isAces?' style="background:#fffbeb;border-left:3px solid var(--accent)"':''}>
      <td class="rank-cell ${s.rank<=3?'top3':''}">${s.rank}</td>
      <td><span class="team-badge">${s.short}</span> ${s.full}${isAces?' <span style="font-size:.62rem;color:var(--accent);background:rgba(184,122,16,.15);padding:2px 7px;border-radius:3px;margin-left:4px">SVG CLUB</span>':''}</td>
      <td class="pts-cell">${s.pts}</td>
      <td>${s.played}</td>
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
    return `<tr>
      <td class="rank-cell">${i+1}</td>
      <td><strong>${t.full}</strong></td>
      <td><span class="team-badge">${t.short}</span></td>
      <td>${t.captain} <span class="pill pill-gold" style="margin-left:4px">C</span></td>
      ${clubCell}
      <td><span style="font-size:.72rem;padding:2px 7px;border-radius:3px;font-weight:600;letter-spacing:.5px;background:${t.surface==='Clay'?'rgba(180,100,30,.12)':t.surface==='Hard'?'rgba(37,99,235,.1)':'transparent'};color:${t.surface==='Clay'?'#a05a1a':t.surface==='Hard'?'var(--accent2)':'var(--muted)'}">${t.surface||'—'}</span></td>
      <td>${t.players}</td>
    </tr>`;
  }).join('');
}

function renderDivFSchedule() {
  const c = document.getElementById('divf-schedule-container');
  if (!c) return;
  c.innerHTML = SCHEDULE_COL_HEADER + DIV_F_SCHEDULE.map(wk => {
    const upcomingBadge = !wk.done ? `<span class="wk-badge">UPCOMING</span>` : '';
    const rows = wk.matches.map(m => {
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
    return `<tr>
      <td>${p.name}${ageTag}${capTag}</td>
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


function switchToDivF(btn) {
  document.querySelectorAll('.div-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('nav-divs').style.display='flex';
  document.getElementById('nav-svg').style.display='none';
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const navStandingsBtn = document.querySelector('#nav-divs .nav-btn[onclick*="standings"]');
  if (navStandingsBtn) navStandingsBtn.classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-divf-standings').classList.add('active');
  window.scrollTo(0,0);
}

// ─── DIVISION F INIT ──────────────────────────────────────────────────────────
renderDivFTeams();
renderDivFStandings();
renderDivFProjection();
renderDivFProjBreakdown();
renderDivFSchedule();
populateDivFResultsFilter();
renderDivFResults();
renderDivFPlayers();
renderDivFStats();
populateDivFPlayerFilter();

checkAuth();
