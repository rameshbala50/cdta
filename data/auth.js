// CDTA 2026 -- Auth / Users
// Roles: admin, captain, svgplayer, viewer
// Division access: admin sees all; captains see their division + SVG if applicable

const USERS = {
  // username: { password, role, name, division, team }
  'rameshadmin':  { password:'ramesh123',       role:'admin',     name:'Ramesh Admin',     division:null,  team:null },
  'ramesh':       { password:'ramesh2026',       role:'svgplayer', name:'Ramesh',            division:'I',   team:'STARS' },
  'monish':       { password:'monish2026',       role:'captain',   name:'Monish',            division:'I',   team:'STARS' },
  'murugesan':    { password:'murugesan2026',    role:'captain',   name:'Murugesan M',       division:'I',   team:'CHAMPS' },
  'sethupathy':   { password:'sethupathy2026',   role:'captain',   name:'Dr. Sethupathy',    division:'F',   team:'ACES' },
  'nagendran':    { password:'nagendran2026',     role:'captain',   name:'Nagendran K',       division:'C',   team:'SVG-C' },
};

// Users who can see Division H
const DIV_H_USERS = ['rameshadmin'];

const SESSION_KEY = 'cdta2026_auth';
