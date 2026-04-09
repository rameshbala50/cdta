// ============================================================
// DIVISION K — CDTA 2026
// ============================================================

const DIV_K_TEAMS = [
  { short:'CCTA-E', full:'CCTA - E',           captain:'SHYAM',            mobile:'', players:8,  club:'CCTA (Nehru Stadium)',      surface:'', division:'K' },
  { short:'PSG-K',  full:'PSG SPORTS CLUB',     captain:'JAYAVARDHANA',     mobile:'', players:10, club:'PSG Sports Club',           surface:'', division:'K' },
  { short:'ALPHA-C',full:'ALPHA-C',             captain:'R G Rajkumar',     mobile:'', players:9,  club:'Alpha Tennis Academy',      surface:'', division:'K' },
  { short:'ACE-K',  full:'ACEKING',             captain:'Kowsik Kumar S',   mobile:'', players:8,  club:'Aceking Tennis Academy',    surface:'', division:'K' },
  { short:'RKM',    full:'RKMVERI GAPEY',       captain:'Gunal R',          mobile:'', players:8,  club:'RKMVERI',                   surface:'', division:'K' },
  { short:'FMP-B',  full:'FMPTA - B',           captain:'Ilamparithi D K',  mobile:'', players:10, club:'FMPTA',                     surface:'', division:'K' },
  { short:'SAI-C',  full:'SAI TENNIS - C',      captain:'RAVI',             mobile:'', players:9,  club:'Sai Tennis Academy',        surface:'', division:'K' },
];

const DIV_K_STANDINGS = [
  { rank:1, short:'CCTA-E', full:'CCTA - E',       pts:15, played:6, setsW:30, setsL:9,  gamesW:188, gamesL:108 },
  { rank:2, short:'PSG-K',  full:'PSG SPORTS CLUB', pts:13, played:6, setsW:28, setsL:13, gamesW:174, gamesL:104 },
  { rank:3, short:'ALPHA-C',full:'ALPHA-C',         pts:12, played:6, setsW:25, setsL:13, gamesW:185, gamesL:114 },
  { rank:4, short:'ACE-K',  full:'ACEKING',         pts:10, played:5, setsW:23, setsL:11, gamesW:157, gamesL:90  },
  { rank:5, short:'RKM',    full:'RKMVERI GAPEY',   pts:5,  played:6, setsW:12, setsL:26, gamesW:117, gamesL:161 },
  { rank:6, short:'FMP-B',  full:'FMPTA - B',       pts:4,  played:5, setsW:9,  setsL:22, gamesW:83,  gamesL:138 },
  { rank:7, short:'SAI-C',  full:'SAI TENNIS - C',  pts:1,  played:6, setsW:2,  setsL:35, gamesW:24,  gamesL:213 },
];

const DIV_K_PLAYERS = [
  // CCTA - E
  { name:'SHYAM',                team:'CCTA-E', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-k/ccta-e/shyam.jpg' },
  { name:'SOMSEKHAR',            team:'CCTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ccta-e/somsekhar.jpg' },
  { name:'MOORTHY',              team:'CCTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ccta-e/moorthy.jpg' },
  { name:'VELUSAMY',             team:'CCTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ccta-e/velusamy.jpg' },
  { name:'NATARAJAN',            team:'CCTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ccta-e/natarajan.jpg' },
  { name:'GEORGE RAVI VICTOR',   team:'CCTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ccta-e/george-ravi-victor.jpeg' },
  { name:'KHARAN',               team:'CCTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ccta-e/kharan.jpeg' },
  { name:'SENTHIL',              team:'CCTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ccta-e/senthil.jpeg' },

  // PSG SPORTS CLUB
  { name:'JAYAVARDHANA',         team:'PSG-K', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-k/psg-k/jayavardhana.jpg' },
  { name:'PRABHU',               team:'PSG-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/psg-k/prabhu.jpeg' },
  { name:'JEYACHANDRAN',         team:'PSG-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/psg-k/jeyachandran.jpg' },
  { name:'DINESH NARASIMHAN',    team:'PSG-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/psg-k/dinesh-narasimhan.jpg' },
  { name:'SHYAM KUMAR',          team:'PSG-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/psg-k/shyam-kumar.jpeg' },
  { name:'MACHAT BALAKRISHNAN MENON', team:'PSG-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/psg-k/machat-balakrishnan-menon.jpeg' },
  { name:'SACHIN BALAKRISHNAN',  team:'PSG-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/psg-k/sachin-balakrishnan.jpeg' },
  { name:'SURENDHAR S',          team:'PSG-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/psg-k/surendhar-s.jpeg' },
  { name:'ATHISH M',             team:'PSG-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/psg-k/athish-m.jpg' },
  { name:'AKASH TAMILARASU',     team:'PSG-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/psg-k/akash-tamilarasu.jpeg' },

  // ALPHA-C
  { name:'R G Rajkumar',        team:'ALPHA-C', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-k/alpha-c/r-g-rajkumar.jpeg' },
  { name:'Starlin Immanuel M',  team:'ALPHA-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/alpha-c/starlin-immanuel-m.jpeg' },
  { name:'Indharjeeth M S',     team:'ALPHA-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/alpha-c/indharjeeth-m-s.jpg' },
  { name:'Tamilarasu Perumal',  team:'ALPHA-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/alpha-c/tamilarasu-perumal.jpeg' },
  { name:'Poorna Guhan',        team:'ALPHA-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/alpha-c/poorna-guhan.jpeg' },
  { name:'Shrirampirajin T',    team:'ALPHA-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/alpha-c/shrirampirajin-t.jpeg' },
  { name:'Karthik V',           team:'ALPHA-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/alpha-c/karthik-v.jpeg' },
  { name:'Mayakrishnan',        team:'ALPHA-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/alpha-c/mayakrishnan.jpeg' },
  { name:'Krithvik',            team:'ALPHA-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/alpha-c/krithvik.jpeg' },

  // ACEKING
  { name:'Kowsik Kumar S',      team:'ACE-K', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-k/ace-k/kowsik-kumar-s.jpg' },
  { name:'Gowsalya R',          team:'ACE-K', gender:'F', age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ace-k/gowsalya-r.jpg' },
  { name:'Muralidharan B',      team:'ACE-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ace-k/muralidharan-b.jpg' },
  { name:'Dharun Hari D',       team:'ACE-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ace-k/dharun-hari-d.jpg' },
  { name:'Sridhar S',           team:'ACE-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ace-k/sridhar-s.jpg' },
  { name:'Suhas P R',           team:'ACE-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ace-k/suhas-p-r.jpg' },
  { name:'Senthil Raj J',       team:'ACE-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ace-k/senthil-raj-j.jpg' },
  { name:'Ruthvik Santhosh',    team:'ACE-K', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/ace-k/ruthvik-santhosh.jpg' },

  // RKMVERI GAPEY
  { name:'Gunal R',             team:'RKM', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-k/rkm/gunal-r.jpg' },
  { name:'Nandhaumar M',        team:'RKM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/rkm/nandhaumar-m.jpg' },
  { name:'Logesh S',            team:'RKM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/rkm/logesh-s.jpg' },
  { name:'Athithyan T',         team:'RKM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/rkm/athithyan-t.jpg' },
  { name:'Arunkumar S',         team:'RKM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/rkm/arunkumar-s.jpg' },
  { name:'Nandhakumar S',       team:'RKM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/rkm/nandhakumar-s.jpg' },
  { name:'Bala Hariharan P',    team:'RKM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/rkm/bala-hariharan-p.jpg' },
  { name:'Sudharson S',         team:'RKM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/rkm/sudharson-s.jpg' },

  // FMPTA - B
  { name:'Ilamparithi D K',     team:'FMP-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-k/fmp-b/ilamparithi-d-k.jpg' },
  { name:'A. Tharunesh',        team:'FMP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/fmp-b/a-tharunesh.jpg' },
  { name:'Samundeswaran Krishnaraj', team:'FMP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/fmp-b/samundeswaran-krishnaraj.jpg' },
  { name:'Vignesh Gandhimathinathan', team:'FMP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/fmp-b/vignesh-gandhimathinathan.jpg' },
  { name:'Abinesh',             team:'FMP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/fmp-b/abinesh.jpg' },
  { name:'Sreyash Ananth',      team:'FMP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/fmp-b/sreyash-ananth.jpg' },
  { name:'Sidtharth',           team:'FMP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/fmp-b/sidtharth.jpg' },
  { name:'Aadhanakrishnan G A', team:'FMP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/fmp-b/aadhanakrishnan-g-a.jpg' },
  { name:'Saswin B R',          team:'FMP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/fmp-b/saswin-b-r.jpeg' },
  { name:'Sreya A V',           team:'FMP-B', gender:'F', age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/fmp-b/sreya-a-v.jpg' },

  // SAI TENNIS - C
  { name:'RAVI',                team:'SAI-C', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-k/sai-c/ravi.jpeg' },
  { name:'SHARASH',             team:'SAI-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/sai-c/sharash.jpeg' },
  { name:'KARTHIK KRISHNA L',   team:'SAI-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/sai-c/karthik-krishna-l.jpeg' },
  { name:'KAVINYA',             team:'SAI-C', gender:'F', age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/sai-c/kavinya.jpeg' },
  { name:'SAI LATHANGANI',      team:'SAI-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/sai-c/sai-lathangani.jpeg' },
  { name:'SHARVESH',            team:'SAI-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/sai-c/sharvesh.jpeg' },
  { name:'HARI KRISHNA',        team:'SAI-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/sai-c/hari-krishna.jpeg' },
  { name:'KARTHIK N',           team:'SAI-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/sai-c/karthik-n.jpeg' },
  { name:'ASHVANTH KUMAR J',    team:'SAI-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-k/sai-c/ashvanth-kumar-j.jpeg' },
];

const DIV_K_SCHEDULE = [
  { week:1, date:'24-25 Jan 2026', done:true, matches:[
    { home:'ALPHA-C',          score:'1-2', away:'ACEKING',          venue:'Alpha Tennis Academy',
      courts:[
        { ct:1, home:'Poorna Guhan / Starlin Immanuel M', away:'Muralidharan B / Dharun Hari D', sets:'6-2, 6-3', win:'home' },
        { ct:2, home:'R G Rajkumar / Karthik V', away:'Sridhar S / Gowsalya R', sets:'2-6, 4-6', win:'away' },
        { ct:3, home:'Mayakrishnan / Tamilarasu Perumal', away:'Kowsik Kumar S / Suhas P R', sets:'3-6, 4-6', win:'away' },
      ]},
    { home:'PSG SPORTS CLUB',  score:'1-2', away:'CCTA - E',        venue:'PSG Sports Club',
      courts:[
        { ct:1, home:'PRABHU / DINESH NARASIMHAN', away:'SHYAM / GEORGE RAVI VICTOR', sets:'6-1, 6-3', win:'home' },
        { ct:2, home:'JAYAVARDHANA / MACHAT BALAKRISHNAN MENON', away:'VELUSAMY / KHARAN', sets:'1-6, 4-6', win:'away' },
        { ct:3, home:'SHYAM KUMAR / ATHISH M', away:'MOORTHY / SENTHIL', sets:'1-6, 0-6', win:'away' },
      ]},
    { home:'FMPTA - B',        score:'2-1', away:'SAI TENNIS - C',  venue:'FMPTA',
      courts:[
        { ct:1, home:'Sidtharth / Sreyash Ananth', away:'KAVINYA / SAI LATHANGANI', sets:'6-0, 6-3', win:'home' },
        { ct:2, home:'Ilamparithi D K / Aadhanakrishnan G A', away:'HARI KRISHNA / SHARASH', sets:'6-0, 3-6, 8-10', win:'away' },
        { ct:3, home:'A. Tharunesh / Vignesh Gandhimathinathan', away:'SHARVESH / KARTHIK KRISHNA L', sets:'6-4, 6-0', win:'home' },
      ]},
  ]},
  { week:2, date:'31 Jan - 01 Feb 2026', done:true, matches:[
    { home:'RKMVERI GAPEY',    score:'2-1', away:'FMPTA - B',       venue:'RKMVERI',
      courts:[
        { ct:1, home:'Logesh S / Nandhakumar S', away:'Samundeswaran Krishnaraj / Aadhanakrishnan G A', sets:'2-6, 3-6', win:'away' },
        { ct:2, home:'Athithyan T / Sudharson S', away:'Ilamparithi D K / A. Tharunesh', sets:'6-3, 6-0', win:'home' },
        { ct:3, home:'Gunal R / Nandhaumar M', away:'Sreyash Ananth / Sidtharth', sets:'6-1, 6-0', win:'home' },
      ]},
    { home:'ACEKING',          score:'2-1', away:'PSG SPORTS CLUB', venue:'Aceking Tennis Academy',
      courts:[
        { ct:1, home:'Kowsik Kumar S / Suhas P R', away:'JAYAVARDHANA / SACHIN BALAKRISHNAN', sets:'2-6, 6-1, 10-5', win:'home' },
        { ct:2, home:'Sridhar S / Muralidharan B', away:'PRABHU / DINESH NARASIMHAN', sets:'2-6, 6-2, 6-10', win:'away' },
        { ct:3, home:'Dharun Hari D / Gowsalya R', away:'JEYACHANDRAN / SURENDHAR S', sets:'6-1, 6-2', win:'home' },
      ]},
    { home:'SAI TENNIS - C',   score:'0-3', away:'ALPHA-C',         venue:'Sai Tennis Academy',
      courts:[
        { ct:1, home:'KARTHIK KRISHNA L / SHARASH', away:'Poorna Guhan / Starlin Immanuel M', sets:'0-6, 0-6', win:'away' },
        { ct:2, home:'KAVINYA / SAI LATHANGANI', away:'Shrirampirajin T / Karthik V', sets:'0-6, 0-6', win:'away' },
        { ct:3, home:'ASHVANTH KUMAR J / KARTHIK N', away:'Mayakrishnan / Tamilarasu Perumal', sets:'0-6, 0-6', win:'away' },
      ]},
  ]},
  { week:3, date:'07-08 Feb 2026', done:true, matches:[
    { home:'ALPHA-C',          score:'3-0', away:'RKMVERI GAPEY',   venue:'Alpha Tennis Academy',
      courts:[
        { ct:1, home:'Poorna Guhan / Starlin Immanuel M', away:'Logesh S / Bala Hariharan P', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Karthik V / Tamilarasu Perumal', away:'Gunal R / Athithyan T', sets:'6-2, 6-1', win:'home' },
        { ct:3, home:'Shrirampirajin T / Indharjeeth M S', away:'Nandhakumar S / Sudharson S', sets:'6-1, 6-2', win:'home' },
      ]},
    { home:'ACEKING',          score:'3-0', away:'SAI TENNIS - C',  venue:'Aceking Tennis Academy',
      courts:[
        { ct:1, home:'Kowsik Kumar S / Ruthvik Santhosh', away:'SHARASH / KARTHIK N', sets:'6-1, 6-0', win:'home' },
        { ct:2, home:'Gowsalya R / Suhas P R', away:'SAI LATHANGANI / HARI KRISHNA', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Dharun Hari D / Senthil Raj J', away:'SHARVESH / ASHVANTH KUMAR J', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'FMPTA - B',        score:'1-2', away:'CCTA - E',        venue:'FMPTA',
      courts:[
        { ct:1, home:'Ilamparithi D K / Sreya A V', away:'VELUSAMY / SHYAM', sets:'2-6, 2-6', win:'away' },
        { ct:2, home:'Abinesh / Saswin B R', away:'MOORTHY / GEORGE RAVI VICTOR', sets:'0-6, 0-6', win:'away' },
        { ct:3, home:'Vignesh Gandhimathinathan / Aadhanakrishnan G A', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
  ]},
  { week:4, date:'14-15 Feb 2026', done:true, matches:[
    { home:'CCTA - E',         score:'2-1', away:'ALPHA-C',         venue:'CCTA (Nehru Stadium)',
      courts:[
        { ct:1, home:'SOMSEKHAR / SENTHIL', away:'Tamilarasu Perumal / Karthik V', sets:'6-0, 6-3', win:'home' },
        { ct:2, home:'SHYAM / GEORGE RAVI VICTOR', away:'Poorna Guhan / Starlin Immanuel M', sets:'6-4, 7-5', win:'home' },
        { ct:3, home:'MOORTHY / KHARAN', away:'Shrirampirajin T / Indharjeeth M S', sets:'4-6, 4-6', win:'away' },
      ]},
    { home:'RKMVERI GAPEY',    score:'0-3', away:'ACEKING',         venue:'RKMVERI',
      courts:[
        { ct:1, home:'Nandhakumar S / Athithyan T', away:'Gowsalya R / Dharun Hari D', sets:'2-6, 2-6', win:'away' },
        { ct:2, home:'Nandhaumar M / Gunal R', away:'Kowsik Kumar S / Suhas P R', sets:'4-6, 5-7', win:'away' },
        { ct:3, home:'Logesh S / Sudharson S', away:'Sridhar S / Muralidharan B', sets:'0-6, 0-6', win:'away' },
      ]},
    { home:'SAI TENNIS - C',   score:'0-3', away:'PSG SPORTS CLUB', venue:'Sai Tennis Academy',
      courts:[
        { ct:1, home:'SHARASH / HARI KRISHNA', away:'PRABHU / DINESH NARASIMHAN', sets:'1-6, 0-6', win:'away' },
        { ct:2, home:'SAI LATHANGANI / KAVINYA', away:'ATHISH M / AKASH TAMILARASU', sets:'0-6, 0-6', win:'away' },
        { ct:3, home:'SHARVESH / KARTHIK N', away:'SHYAM KUMAR / SACHIN BALAKRISHNAN', sets:'1-6, 0-6', win:'away' },
      ]},
  ]},
  { week:5, date:'21-22 Feb 2026', done:true, matches:[
    { home:'SAI TENNIS - C',   score:'0-3', away:'RKMVERI GAPEY',   venue:'Sai Tennis Academy',
      courts:[
        { ct:1, home:'RAVI / HARI KRISHNA', away:'Athithyan T / Logesh S', sets:'2-6, 2-6', win:'away' },
        { ct:2, home:'KARTHIK N / KARTHIK KRISHNA L', away:'Gunal R / Sudharson S', sets:'1-6, 0-6', win:'away' },
        { ct:3, home:'SHARASH / KAVINYA', away:'Nandhaumar M / Nandhakumar S', sets:'1-6, 0-6', win:'away' },
      ]},
    { home:'FMPTA - B',        score:'0-3', away:'PSG SPORTS CLUB', venue:'FMPTA',
      courts:[
        { ct:1, home:'Vignesh Gandhimathinathan / Sidtharth', away:'PRABHU / DINESH NARASIMHAN', sets:'0-6, 0-6', win:'away' },
        { ct:2, home:'Aadhanakrishnan G A / Saswin B R', away:'SHYAM KUMAR / SURENDHAR S', sets:'4-6, 1-6', win:'away' },
        { ct:3, home:'Sreya A V / A. Tharunesh', away:'JEYACHANDRAN / SACHIN BALAKRISHNAN', sets:'0-6, 1-6', win:'away' },
      ]},
    { home:'CCTA - E',         score:'3-0', away:'ACEKING',         venue:'CCTA (Nehru Stadium)',
      courts:[
        { ct:1, home:'SHYAM / GEORGE RAVI VICTOR', away:'Kowsik Kumar S / Ruthvik Santhosh', sets:'6-3, 2-6, 10-8', win:'home' },
        { ct:2, home:'VELUSAMY / KHARAN', away:'Gowsalya R / Suhas P R', sets:'6-1, 6-4', win:'home' },
        { ct:3, home:'SENTHIL / SOMSEKHAR', away:'Muralidharan B / Senthil Raj J', sets:'7-6, 6-7, 10-5', win:'home' },
      ]},
  ]},
  { week:6, date:'28 Feb - 01 Mar 2026', done:true, matches:[
    { home:'ALPHA-C',          score:'3-0', away:'FMPTA - B',       venue:'Alpha Tennis Academy',
      courts:[
        { ct:1, home:'Starlin Immanuel M / Poorna Guhan', away:'Samundeswaran Krishnaraj / Saswin B R', sets:'6-0, 6-3', win:'home' },
        { ct:2, home:'Shrirampirajin T / Indharjeeth M S', away:'Ilamparithi D K / Aadhanakrishnan G A', sets:'6-2, 6-4', win:'home' },
        { ct:3, home:'Karthik V / Krithvik', away:'Sidtharth / Sreyash Ananth', sets:'6-1, 6-2', win:'home' },
      ]},
    { home:'PSG SPORTS CLUB',  score:'3-0', away:'RKMVERI GAPEY',   venue:'PSG Sports Club',
      courts:[
        { ct:1, home:'PRABHU / DINESH NARASIMHAN', away:'Athithyan T / Bala Hariharan P', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'SACHIN BALAKRISHNAN / SHYAM KUMAR', away:'Nandhakumar S / Sudharson S', sets:'6-2, 6-1', win:'home' },
        { ct:3, home:'JAYAVARDHANA / ATHISH M', away:'Nandhaumar M / Gunal R', sets:'6-3, 2-6, 10-8', win:'home' },
      ]},
    { home:'CCTA - E',         score:'3-0', away:'SAI TENNIS - C',  venue:'CCTA (Nehru Stadium)',
      courts:[
        { ct:1, home:'SHYAM / MOORTHY', away:'SAI LATHANGANI / HARI KRISHNA', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'SENTHIL / NATARAJAN', away:'KARTHIK N / SHARVESH', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'GEORGE RAVI VICTOR / SOMSEKHAR', away:'KARTHIK KRISHNA L / ASHVANTH KUMAR J', sets:'6-0, 6-1', win:'home' },
      ]},
  ]},
  { week:7, date:'07-08 Mar 2026', done:true, matches:[
    { home:'PSG SPORTS CLUB',  score:'2-1', away:'ALPHA-C',         venue:'PSG Sports Club',
      courts:[
        { ct:1, home:'JAYAVARDHANA / ATHISH M', away:'Shrirampirajin T / Indharjeeth M S', sets:'4-6, 6-2, 7-10', win:'away' },
        { ct:2, home:'JEYACHANDRAN / SACHIN BALAKRISHNAN', away:'Karthik V / Tamilarasu Perumal', sets:'4-6, 7-5, 11-9', win:'home' },
        { ct:3, home:'PRABHU / DINESH NARASIMHAN', away:'Poorna Guhan / Starlin Immanuel M', sets:'7-6, 6-3', win:'home' },
      ]},
    { home:'RKMVERI GAPEY',    score:'0-3', away:'CCTA - E',        venue:'RKMVERI',
      courts:[
        { ct:1, home:'Gunal R / Nandhaumar M', away:'SHYAM / VELUSAMY', sets:'4-6, 2-6', win:'away' },
        { ct:2, home:'Sudharson S / Nandhakumar S', away:'MOORTHY / GEORGE RAVI VICTOR', sets:'6-3, 6-7, 2-10', win:'away' },
        { ct:3, home:'Bala Hariharan P / Athithyan T', away:'SOMSEKHAR / SENTHIL', sets:'1-6, 2-6', win:'away' },
      ]},
    { home:'ACEKING',          score:'2-1', away:'FMPTA - B',       venue:'Aceking Tennis Academy',
      courts:[
        { ct:1, home:'Kowsik Kumar S / Suhas P R', away:'Sreyash Ananth / A. Tharunesh', sets:'6-1, 6-0', win:'home' },
        { ct:2, home:'Dharun Hari D / Gowsalya R', away:'Ilamparithi D K / Sidtharth', sets:'6-3, 6-2', win:'home' },
        { ct:3, home:'Sridhar S / Muralidharan B', away:'Samundeswaran Krishnaraj / Aadhanakrishnan G A', sets:'6-3, 4-6, 10-12', win:'away' },
      ]},
  ]},
];
