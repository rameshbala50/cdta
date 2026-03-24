// Run with: node audit-partners.js
// Reads all division data files, rebuilds partner maps from court-level results,
// and reports mismatches + generates corrected partner data.

const fs = require('fs');

function audit(divFile, divLabel) {
  const src = fs.readFileSync(divFile, 'utf8');

  // Extract players array
  const playersMatch = src.match(/const DIV_[A-Z]_PLAYERS\s*=\s*\[([\s\S]*?)\];/);
  if (!playersMatch) { console.log(`[${divLabel}] No PLAYERS found`); return; }

  // Parse players using eval (safe for local scripts)
  let players;
  eval(`players = [${playersMatch[1]}]`);

  // Extract schedule array - find start, then find matching end
  const schedStart = src.indexOf(`DIV_${divLabel}_SCHEDULE`);
  if (schedStart === -1) { console.log(`[${divLabel}] No SCHEDULE found`); return; }
  const schedArrStart = src.indexOf('[', schedStart);
  // Find the end by matching brackets
  let depth = 0, schedEnd = schedArrStart;
  for (let i = schedArrStart; i < src.length; i++) {
    if (src[i] === '[') depth++;
    if (src[i] === ']') { depth--; if (depth === 0) { schedEnd = i + 1; break; } }
  }
  let schedule;
  try {
    eval(`schedule = ${src.slice(schedArrStart, schedEnd)}`);
  } catch(e) {
    console.log(`[${divLabel}] Failed to parse schedule: ${e.message}`);
    return;
  }

  // Extract existing partners
  const partnersMatch = src.match(/const DIV_[A-Z]_PARTNERS\s*=\s*\{([\s\S]*?)\};/);
  let existingPartners = {};
  if (partnersMatch) {
    eval(`existingPartners = {${partnersMatch[1]}}`);
  }

  // Build player stats and partner maps from court data
  const stats = {};    // playerName -> { played: 0, wins: 0, team: '' }
  const partners = {}; // playerName -> { partnerName: count }

  // Build team lookup from players
  const teamLookup = {};
  players.forEach(p => { teamLookup[p.name] = p.team; });

  schedule.forEach(week => {
    if (!week.matches) return;
    week.matches.forEach(match => {
      if (!match.courts) return;
      match.courts.forEach(ct => {
        // Parse home pair
        const homePair = ct.home.split(' / ').map(s => s.trim()).filter(s => s);
        const awayPair = ct.away.split(' / ').map(s => s.trim()).filter(s => s);

        // Skip empty pairs (walkovers with no players listed)
        const homeValid = homePair.length === 2 && homePair[0] !== '';
        const awayValid = awayPair.length === 2 && awayPair[0] !== '';

        if (homeValid) {
          const [h1, h2] = homePair;
          // Count games played
          if (!stats[h1]) stats[h1] = { played: 0, wins: 0 };
          if (!stats[h2]) stats[h2] = { played: 0, wins: 0 };
          stats[h1].played++;
          stats[h2].played++;
          if (ct.win === 'home') { stats[h1].wins++; stats[h2].wins++; }
          // Count partners
          if (!partners[h1]) partners[h1] = {};
          if (!partners[h2]) partners[h2] = {};
          partners[h1][h2] = (partners[h1][h2] || 0) + 1;
          partners[h2][h1] = (partners[h2][h1] || 0) + 1;
        }

        if (awayValid) {
          const [a1, a2] = awayPair;
          if (!stats[a1]) stats[a1] = { played: 0, wins: 0 };
          if (!stats[a2]) stats[a2] = { played: 0, wins: 0 };
          stats[a1].played++;
          stats[a2].played++;
          if (ct.win === 'away') { stats[a1].wins++; stats[a2].wins++; }
          if (!partners[a1]) partners[a1] = {};
          if (!partners[a2]) partners[a2] = {};
          partners[a1][a2] = (partners[a1][a2] || 0) + 1;
          partners[a2][a1] = (partners[a2][a1] || 0) + 1;
        }
      });
    });
  });

  // Report mismatches
  let mismatchCount = 0;
  let gpMismatch = 0;
  let winsMismatch = 0;

  console.log(`\n${'='.repeat(60)}`);
  console.log(`DIVISION ${divLabel} AUDIT`);
  console.log(`${'='.repeat(60)}`);

  // Check gamesPlayed and wins
  players.forEach(p => {
    if (p.gamesPlayed === null) return;
    const s = stats[p.name];
    if (!s) {
      console.log(`  [GP] ${p.team} - ${p.name}: listed gamesPlayed=${p.gamesPlayed} but NOT FOUND in any court data!`);
      gpMismatch++;
      return;
    }
    if (s.played !== p.gamesPlayed) {
      console.log(`  [GP] ${p.team} - ${p.name}: listed=${p.gamesPlayed}, actual=${s.played}`);
      gpMismatch++;
    }
    if (s.wins !== p.wins) {
      console.log(`  [WINS] ${p.team} - ${p.name}: listed=${p.wins}, actual=${s.wins}`);
      winsMismatch++;
    }
  });

  // Check partner sums
  players.forEach(p => {
    if (p.gamesPlayed === null) return;
    const existing = existingPartners[p.name];
    const correct = partners[p.name];

    if (!correct) return;

    const existingSum = existing ? existing.reduce((s, [n, c]) => s + c, 0) : 0;
    const correctSum = Object.values(correct).reduce((s, c) => s + c, 0);

    if (existingSum !== correctSum) {
      const existingStr = existing ? existing.map(([n,c]) => `${n}(${c})`).join(', ') : 'MISSING';
      const correctStr = Object.entries(correct).map(([n,c]) => `${n}(${c})`).join(', ');
      console.log(`  [PARTNER] ${p.team} - ${p.name}: existing sum=${existingSum} [${existingStr}] → correct sum=${correctSum} [${correctStr}]`);
      mismatchCount++;
    }
  });

  console.log(`\n  Summary: ${gpMismatch} gamesPlayed mismatches, ${winsMismatch} wins mismatches, ${mismatchCount} partner mismatches`);

  // Generate corrected partner JS
  const lines = [];
  // Sort by team then name
  const sortedNames = Object.keys(partners).sort((a, b) => {
    const ta = teamLookup[a] || '?';
    const tb = teamLookup[b] || '?';
    if (ta !== tb) return ta.localeCompare(tb);
    return a.localeCompare(b);
  });

  sortedNames.forEach(name => {
    const pMap = partners[name];
    const entries = Object.entries(pMap).sort((a, b) => b[1] - a[1]);
    const arr = entries.map(([n, c]) => `['${n.replace(/'/g, "\\'")}',${c}]`).join(',');
    lines.push(`  '${name.replace(/'/g, "\\'")}': [${arr}]`);
  });

  const varName = `DIV_${divLabel}_PARTNERS`;
  const output = `const ${varName} = {\n${lines.join(',\n')}\n};`;

  // Write corrected file
  const outFile = divFile.replace('.js', '-partners-corrected.js');
  fs.writeFileSync(outFile, output);
  console.log(`\n  Corrected partners written to: ${outFile}`);

  return { stats, partners, mismatchCount, gpMismatch, winsMismatch };
}

// Run audits
audit('data/division-i.js', 'I');
audit('data/division-c.js', 'C');
audit('data/division-f.js', 'F');
