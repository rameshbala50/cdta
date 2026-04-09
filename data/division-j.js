// ============================================================
// DIVISION J — CDTA 2026
// ============================================================

const DIV_J_TEAMS = [
  { short:'OMSHREE', full:'OM SHREE - B',                        captain:'Nandhakumar',          mobile:'', players:10, club:'Om Shree Tennis Academy',    surface:'', division:'J' },
  { short:'TITANS',  full:'TenniMaSh Titans',                     captain:'Rajinikanth Muthukrishnan', mobile:'', players:10, club:'TenniMaSh',              surface:'', division:'J' },
  { short:'SSA',     full:'Suresh Sports Academy',                captain:'J.GURUSARAN',          mobile:'', players:10, club:'Suresh Sports Academy',      surface:'', division:'J' },
  { short:'TGLO-E',  full:'TENNIGLO - E',                        captain:'Gokul Murari Halsu',   mobile:'', players:10, club:'Tenniglo Tennis Academy',    surface:'', division:'J' },
  { short:'ARK',     full:'ARK RALLY RIDERS(TOP SPIN - C)',       captain:'Arun Kumaran',         mobile:'', players:7,  club:'Top Spin Tennis Academy',    surface:'', division:'J' },
  { short:'CCTA-D',  full:'CCTA-D',                               captain:'S P liyanaa',          mobile:'', players:12, club:'CCTA',                       surface:'', division:'J' },
  { short:'GST-C',   full:'GST - C',                              captain:'RAMESHKANNA',          mobile:'', players:10, club:'GST Tennis Academy',         surface:'', division:'J' },
  { short:'SNS-E',   full:'SNS - E',                              captain:'Hariharan M',          mobile:'', players:9,  club:'SNS Tennis Academy',         surface:'', division:'J' },
  { short:'GNEST-C', full:'GREEN NEST - C',                       captain:'BASKARAN V',           mobile:'', players:8,  club:'Green Nest Tennis Academy',  surface:'', division:'J' },
  { short:'KCT',     full:'KCT',                                  captain:'Dr. S. Kamalakannan',  mobile:'', players:14, club:'KCT Tennis Academy',         surface:'', division:'J' },
];

const DIV_J_STANDINGS = [
  { rank:1,  short:'OMSHREE', full:'OM SHREE - B',                  pts:20, played:27, setsW:42, setsL:16, gamesW:283, gamesL:160 },
  { rank:2,  short:'TITANS',  full:'TenniMaSh Titans',               pts:20, played:27, setsW:43, setsL:17, gamesW:289, gamesL:170 },
  { rank:3,  short:'SSA',     full:'Suresh Sports Academy',          pts:20, played:27, setsW:43, setsL:18, gamesW:274, gamesL:150 },
  { rank:4,  short:'TGLO-E',  full:'TENNIGLO - E',                   pts:16, played:27, setsW:34, setsL:25, gamesW:237, gamesL:202 },
  { rank:5,  short:'ARK',     full:'ARK RALLY RIDERS(TOP SPIN - C)', pts:14, played:27, setsW:30, setsL:27, gamesW:229, gamesL:194 },
  { rank:6,  short:'CCTA-D',  full:'CCTA-D',                         pts:14, played:27, setsW:28, setsL:28, gamesW:209, gamesL:214 },
  { rank:7,  short:'GST-C',   full:'GST - C',                        pts:13, played:27, setsW:28, setsL:30, gamesW:218, gamesL:214 },
  { rank:8,  short:'SNS-E',   full:'SNS - E',                        pts:8,  played:27, setsW:18, setsL:39, gamesW:154, gamesL:243 },
  { rank:9,  short:'GNEST-C', full:'GREEN NEST - C',                 pts:5,  played:27, setsW:13, setsL:44, gamesW:128, gamesL:274 },
  { rank:10, short:'KCT',     full:'KCT',                            pts:5,  played:27, setsW:10, setsL:45, gamesW:92,  gamesL:292 },
];

const DIV_J_PLAYERS = [
  // OM SHREE - B
  { name:'Nandhakumar',                    team:'OMSHREE', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-j/omshree/nandhakumar.jpeg' },
  { name:'Sanjay',                         team:'OMSHREE', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/omshree/sanjay.jpeg' },
  { name:'Mogeetha Shree S',              team:'OMSHREE', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/omshree/mogeetha-shree-s.jpeg' },
  { name:'Prithvika S',                   team:'OMSHREE', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/omshree/prithvika-s.jpeg' },
  { name:'Judekingseley Robert Antony',   team:'OMSHREE', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/omshree/judekingseley-robert-antony.jpeg' },
  { name:'Sivaguru',                       team:'OMSHREE', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/omshree/sivaguru.jpg' },
  { name:'Rithish. R',                    team:'OMSHREE', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/omshree/rithish-r.jpg' },
  { name:'Sanjith',                        team:'OMSHREE', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/omshree/sanjith.jpg' },
  { name:'Thanvanth',                      team:'OMSHREE', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/omshree/thanvanth.jpg' },
  { name:'Ajay madhavan',                  team:'OMSHREE', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/omshree/ajay-madhavan.jpg' },

  // TenniMaSh Titans
  { name:'Rajinikanth Muthukrishnan',      team:'TITANS', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-j/titans/rajinikanth-muthukrishnan.jpg' },
  { name:'R Arunkumar',                    team:'TITANS', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/titans/r-arunkumar.jpg' },
  { name:'Karthik Lakshmanasamy',          team:'TITANS', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/titans/karthik-lakshmanasamy.jpg' },
  { name:'Karthikkumar Thangavel',         team:'TITANS', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/titans/karthikkumar-thangavel.jpg' },
  { name:'Thirugnanam',                    team:'TITANS', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/titans/thirugnanam.jpg' },
  { name:'Arvind Shankar',                 team:'TITANS', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/titans/arvind-shankar.jpg' },
  { name:'Srihari Sritharan',              team:'TITANS', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/titans/srihari-sritharan.jpg' },
  { name:'Advika Vaibhavi',                team:'TITANS', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/titans/advika-vaibhavi.jpg' },
  { name:'Allan Balas',                    team:'TITANS', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/titans/allan-balas.jpg' },
  { name:'Mukil.T',                        team:'TITANS', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/titans/mukilt.jpg' },

  // Suresh Sports Academy
  { name:'J.GURUSARAN',                   team:'SSA', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-j/ssa/jgurusaran.jpg' },
  { name:'S.JEYARAJU',                    team:'SSA', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ssa/sjeyaraju.jpg' },
  { name:'R.SURIYANARAYANAN',             team:'SSA', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ssa/rsuriyanarayanan.jpg' },
  { name:'Shrinish P',                    team:'SSA', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ssa/shrinish-p.jpg' },
  { name:'S.AKHILESH BHARATHI',           team:'SSA', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ssa/sakhilesh-bharathi.jpg' },
  { name:'T.S.SASHTI',                    team:'SSA', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ssa/tssashti.jpg' },
  { name:'A.SIVASATHYAN',                 team:'SSA', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ssa/asivasathyan.jpg' },
  { name:'J.VIVEN',                       team:'SSA', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ssa/jviven.jpg' },
  { name:'Abdulla A',                     team:'SSA', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ssa/abdulla-a.jpg' },
  { name:'Periyasamy S',                  team:'SSA', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ssa/periyasamy-s.jpg' },

  // TENNIGLO - E
  { name:'Gokul Murari Halsu',            team:'TGLO-E', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-j/tglo-e/gokul-murari-halsu.jpg' },
  { name:'Magesh Kumar',                   team:'TGLO-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/tglo-e/magesh-kumar.jpg' },
  { name:'Sagishnu Viyasan S',             team:'TGLO-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/tglo-e/sagishnu-viyasan-s.jpeg' },
  { name:'Sai Sabari',                     team:'TGLO-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/tglo-e/sai-sabari.jpg' },
  { name:'Sai Advik',                      team:'TGLO-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/tglo-e/sai-advik.jpg' },
  { name:'Kesavan P',                      team:'TGLO-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/tglo-e/kesavan-p.jpg' },
  { name:'Sundareswar V',                  team:'TGLO-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/tglo-e/sundareswar-v.jpeg' },
  { name:'R M Vishnuvarthan',              team:'TGLO-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/tglo-e/r-m-vishnuvarthan.jpg' },
  { name:'SUNIL KUMAR G',                 team:'TGLO-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/tglo-e/sunil-kumar-g.jpeg' },
  { name:'Thanush Vel',                    team:'TGLO-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/tglo-e/thanush-vel.jpg' },

  // ARK RALLY RIDERS(TOP SPIN - C)
  { name:'Arun Kumaran',                  team:'ARK', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-j/ark/arun-kumaran.jpg' },
  { name:'Hrithvik Kumaran',              team:'ARK', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ark/hrithvik-kumaran.jpg' },
  { name:'Ananya Isabelle Immanuel',      team:'ARK', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ark/ananya-isabelle-immanuel.jpg' },
  { name:'Nitya Sri B.S',                 team:'ARK', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ark/nitya-sri-bs.jpeg' },
  { name:'Kaviya Sri B.S',                team:'ARK', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ark/kaviya-sri-bs.jpeg' },
  { name:'P BALAMURUGAN',                 team:'ARK', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ark/p-balamurugan.jpg' },
  { name:'Solomon Madhu David',           team:'ARK', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ark/solomon-madhu-david.jpeg' },

  // CCTA-D
  { name:'S P liyanaa',                   team:'CCTA-D', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-j/ccta-d/s-p-liyanaa.jpg' },
  { name:'Ananyaa',                        team:'CCTA-D', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ccta-d/ananyaa.jpg' },
  { name:'S G Aadhiyogi',                 team:'CCTA-D', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ccta-d/s-g-aadhiyogi.jpg' },
  { name:'Akshataa',                       team:'CCTA-D', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ccta-d/akshataa.jpg' },
  { name:'Thanvi k',                       team:'CCTA-D', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ccta-d/thanvi-k.jpg' },
  { name:'Sashwin Akash',                 team:'CCTA-D', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ccta-d/sashwin-akash.jpeg' },
  { name:'A John Mario fernando',         team:'CCTA-D', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ccta-d/a-john-mario-fernando.jpeg' },
  { name:'Magathi',                        team:'CCTA-D', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ccta-d/magathi.jpeg' },
  { name:'Anamika MP',                    team:'CCTA-D', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ccta-d/anamika-mp.jpeg' },
  { name:'S P Sangamithra',               team:'CCTA-D', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ccta-d/s-p-sangamithra.jpeg' },
  { name:'Dev akshat k',                  team:'CCTA-D', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ccta-d/dev-akshat-k.jpg' },
  { name:'Prakalya v',                    team:'CCTA-D', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/ccta-d/prakalya-v.jpg' },

  // GST - C
  { name:'RAMESHKANNA',                   team:'GST-C', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-j/gst-c/rameshkanna.jpeg' },
  { name:'D.Sankar',                       team:'GST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gst-c/dsankar.jpg' },
  { name:'SELVAKUMAR',                     team:'GST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gst-c/selvakumar.jpeg' },
  { name:'HEMACHANDRAN',                   team:'GST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gst-c/hemachandran.jpeg' },
  { name:'THANGA KUMAR',                  team:'GST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gst-c/thanga-kumar.jpeg' },
  { name:'S.Karthik',                      team:'GST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gst-c/skarthik.jpg' },
  { name:'MADHAN',                         team:'GST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gst-c/madhan.png' },
  { name:'NAVEENKUMAR',                    team:'GST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gst-c/naveenkumar.jpeg' },
  { name:'SELVAMUTHUKUMAR',                team:'GST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gst-c/selvamuthukumar.jpeg' },
  { name:'Vijay Vignesh.K',               team:'GST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gst-c/vijay-vigneshk.jpg' },

  // SNS - E
  { name:'Hariharan M',                   team:'SNS-E', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-j/sns-e/hariharan-m.jpg' },
  { name:'Leya H',                         team:'SNS-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/sns-e/leya-h.jpg' },
  { name:'Praneet P',                      team:'SNS-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/sns-e/praneet-p.jpg' },
  { name:'Ajayrathnam P',                 team:'SNS-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/sns-e/ajayrathnam-p.jpg' },
  { name:'Trinay Adith Mahesh',           team:'SNS-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/sns-e/trinay-adith-mahesh.jpg' },
  { name:'Krithik Venkatesh',              team:'SNS-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/sns-e/krithik-venkatesh.jpg' },
  { name:'Pranay N',                       team:'SNS-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/sns-e/pranay-n.jpg' },
  { name:'Aadidev Abhishek',              team:'SNS-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/sns-e/aadidev-abhishek.jpg' },
  { name:'DHRUV V',                        team:'SNS-E', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/sns-e/dhruv-v.jpeg' },

  // GREEN NEST - C
  { name:'BASKARAN V',                    team:'GNEST-C', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-j/gnest-c/baskaran-v.jpeg' },
  { name:'CHIDAMBARAM RAMASAMY',          team:'GNEST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gnest-c/chidambaram-ramasamy.jpeg' },
  { name:'SUBRAMANIAM SWAMINATHAN',       team:'GNEST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gnest-c/subramaniam-swaminathan.jpg' },
  { name:'TEJASVI V',                      team:'GNEST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gnest-c/tejasvi-v.jpg' },
  { name:'RENGAMNI SOWMYA NARAYANAN',     team:'GNEST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gnest-c/rengamni-sowmya-narayanan.jpg' },
  { name:'RETHANYA D',                    team:'GNEST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gnest-c/rethanya-d.jpg' },
  { name:'EYAN',                           team:'GNEST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gnest-c/eyan.jpg' },
  { name:'K SREE GANESH',                 team:'GNEST-C', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/gnest-c/k-sree-ganesh.jpg' },

  // KCT
  { name:'Dr. S. Kamalakannan',            team:'KCT', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-j/kct/dr-s-kamalakannan.jpeg' },
  { name:'THANGADURAI.S',                  team:'KCT', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/kct/thangadurais.jpeg' },
  { name:'Steven Josh A',                  team:'KCT', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/kct/steven-josh-a.jpg' },
  { name:'RITHIK KRISHNA GM',              team:'KCT', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/kct/rithik-krishna-gm.jpeg' },
  { name:'SOWBIRAAJ',                       team:'KCT', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/kct/sowbiraaj.jpg' },
  { name:'MUKILAN K',                       team:'KCT', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/kct/mukilan-k.jpg' },
  { name:'Abhisheek',                       team:'KCT', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/kct/abhisheek.jpg' },
  { name:'Ahilesvaran M',                  team:'KCT', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/kct/ahilesvaran-m.jpg' },
  { name:'Ashwin Prabhu A',                team:'KCT', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/kct/ashwin-prabhu-a.jpg' },
  { name:'NITHESH',                         team:'KCT', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/kct/nithesh.jpeg' },
  { name:'VAALE M K',                       team:'KCT', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/kct/vaale-m-k.jpg' },
  { name:'THARIKA',                         team:'KCT', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/kct/tharika.jpg' },
  { name:'SRI SUGANTHAN',                   team:'KCT', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/kct/sri-suganthan.jpeg' },
  { name:'NITHIN KRISHNA K',               team:'KCT', gender:null, age:null, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-j/kct/nithin-krishna-k.jpeg' },
];

const DIV_J_SCHEDULE = [
  // ── Week 1 ─────────────────────────────────────────────────
  { week:1, date:'24-25 Jan 2026', done:true, matches:[
    { home:'OM SHREE - B',     score:'2-1', away:'GREEN NEST - C',  venue:'Om Shree Tennis Academy',
      courts:[
        { ct:1, home:'W/O',                                        away:'K SREE GANESH / CHIDAMBARAM RAMASAMY',      sets:'0-6, 0-6',       win:'away' },
        { ct:2, home:'Ajay madhavan / Nandhakumar',                away:'BASKARAN V / RENGAMNI SOWMYA NARAYANAN',    sets:'6-1, 6-2',       win:'home' },
        { ct:3, home:'Sanjay / Thanvanth',                         away:'RETHANYA D / EYAN',                          sets:'6-3, 6-1',       win:'home' },
      ]},
    { home:'TENNIGLO - E',     score:'2-1', away:'CCTA-D',          venue:'Tenniglo Tennis Academy',
      courts:[
        { ct:1, home:'Gokul Murari Halsu / Sagishnu Viyasan S',   away:'S P liyanaa / S G Aadhiyogi',               sets:'6-2, 6-4',       win:'home' },
        { ct:2, home:'Sai Advik / Magesh Kumar',                   away:'Prakalya v / Magathi',                       sets:'6-1, 6-0',       win:'home' },
        { ct:3, home:'Kesavan P / Sundareswar V',                  away:'Akshataa / Ananyaa',                          sets:'1-6, 0-6',       win:'away' },
      ]},
    { home:'GST - C',          score:'3-0', away:'ARK RALLY RIDERS(TOP SPIN - C)', venue:'GST Tennis Academy',
      courts:[
        { ct:1, home:'HEMACHANDRAN / D.Sankar',                    away:'Hrithvik Kumaran / Arun Kumaran',            sets:'7-6, 6-0',       win:'home' },
        { ct:2, home:'THANGA KUMAR / SELVAMUTHUKUMAR',             away:'P BALAMURUGAN / Kaviya Sri B.S',             sets:'6-3, 6-4',       win:'home' },
        { ct:3, home:'S.Karthik / MADHAN',                         away:'Ananya Isabelle Immanuel / Nitya Sri B.S',   sets:'6-7, 6-0, 10-6', win:'home' },
      ]},
    { home:'TenniMaSh Titans', score:'3-0', away:'SNS - E',         venue:'TenniMaSh',
      courts:[
        { ct:1, home:'Rajinikanth Muthukrishnan / Thirugnanam',    away:'Praneet P / DHRUV V',                        sets:'6-0, 6-0',       win:'home' },
        { ct:2, home:'R Arunkumar / Allan Balas',                  away:'Krithik Venkatesh / Trinay Adith Mahesh',    sets:'6-2, 6-1',       win:'home' },
        { ct:3, home:'Srihari Sritharan / Advika Vaibhavi',       away:'Leya H / Hariharan M',                       sets:'6-3, 4-6, 15-13',win:'home' },
      ]},
    { home:'Suresh Sports Academy', score:'3-0', away:'KCT',       venue:'Suresh Sports Academy',
      courts:[
        { ct:1, home:'A.SIVASATHYAN / S.AKHILESH BHARATHI',       away:'NITHIN KRISHNA K / VAALE M K',               sets:'6-0, 6-1',       win:'home' },
        { ct:2, home:'S.JEYARAJU / J.VIVEN',                      away:'Dr. S. Kamalakannan / THANGADURAI.S',        sets:'6-2, 6-4',       win:'home' },
        { ct:3, home:'Shrinish P / T.S.SASHTI',                   away:'W/O',                                         sets:'6-0, 6-0',       win:'home' },
      ]},
  ]},

  // ── Week 2 ─────────────────────────────────────────────────
  { week:2, date:'31 Jan - 01 Feb 2026', done:true, matches:[
    { home:'OM SHREE - B',     score:'3-0', away:'SNS - E',         venue:'Om Shree Tennis Academy',
      courts:[
        { ct:1, home:'Nandhakumar / Prithvika S',                  away:'Praneet P / Pranay N',                       sets:'6-1, 6-0',       win:'home' },
        { ct:2, home:'Judekingseley Robert Antony / Mogeetha Shree S', away:'Hariharan M / Leya H',                  sets:'6-3, 4-6, 10-6', win:'home' },
        { ct:3, home:'Ajay madhavan / Thanvanth',                  away:'Ajayrathnam P / DHRUV V',                    sets:'6-3, 6-3',       win:'home' },
      ]},
    { home:'CCTA-D',           score:'3-0', away:'GREEN NEST - C',  venue:'CCTA',
      courts:[
        { ct:1, home:'S P liyanaa / Anamika MP',                  away:'CHIDAMBARAM RAMASAMY / K SREE GANESH',       sets:'6-0, 6-1',       win:'home' },
        { ct:2, home:'Dev akshat k / Thanvi k',                    away:'RETHANYA D / TEJASVI V',                      sets:'6-0, 6-1',       win:'home' },
        { ct:3, home:'S G Aadhiyogi / Sashwin Akash',             away:'BASKARAN V / RENGAMNI SOWMYA NARAYANAN',     sets:'6-1, 7-5',       win:'home' },
      ]},
    { home:'Suresh Sports Academy', score:'2-1', away:'GST - C',   venue:'Suresh Sports Academy',
      courts:[
        { ct:1, home:'J.GURUSARAN / Shrinish P',                  away:'HEMACHANDRAN / D.Sankar',                    sets:'6-1, 2-6, 11-9', win:'home' },
        { ct:2, home:'Abdulla A / S.AKHILESH BHARATHI',           away:'S.Karthik / SELVAMUTHUKUMAR',                sets:'2-6, 6-1, 6-10', win:'away' },
        { ct:3, home:'T.S.SASHTI / R.SURIYANARAYANAN',            away:'THANGA KUMAR / RAMESHKANNA',                 sets:'6-1, 6-1',       win:'home' },
      ]},
    { home:'TENNIGLO - E',     score:'3-0', away:'KCT',            venue:'Tenniglo Tennis Academy',
      courts:[
        { ct:1, home:'Magesh Kumar / Sai Advik',                  away:'SOWBIRAAJ / SRI SUGANTHAN',                   sets:'6-0, 6-0',       win:'home' },
        { ct:2, home:'Thanush Vel / Gokul Murari Halsu',          away:'Dr. S. Kamalakannan / THANGADURAI.S',         sets:'7-5, 6-3',       win:'home' },
        { ct:3, home:'Sagishnu Viyasan S / Sai Sabari',           away:'Ashwin Prabhu A / NITHIN KRISHNA K',          sets:'6-2, 6-0',       win:'home' },
      ]},
    { home:'TenniMaSh Titans', score:'2-1', away:'ARK RALLY RIDERS(TOP SPIN - C)', venue:'TenniMaSh',
      courts:[
        { ct:1, home:'Mukil.T / Srihari Sritharan',               away:'Arun Kumaran / Hrithvik Kumaran',            sets:'1-6, 1-6',       win:'away' },
        { ct:2, home:'R Arunkumar / Allan Balas',                  away:'P BALAMURUGAN / Kaviya Sri B.S',             sets:'6-2, 7-6',       win:'home' },
        { ct:3, home:'Rajinikanth Muthukrishnan / Thirugnanam',   away:'Nitya Sri B.S / Ananya Isabelle Immanuel',   sets:'6-3, 6-0',       win:'home' },
      ]},
  ]},

  // ── Week 3 ─────────────────────────────────────────────────
  { week:3, date:'07-08 Feb 2026', done:true, matches:[
    { home:'SNS - E',          score:'2-1', away:'GREEN NEST - C',  venue:'SNS Tennis Academy',
      courts:[
        { ct:1, home:'Leya H / Hariharan M',                      away:'SUBRAMANIAM SWAMINATHAN / TEJASVI V',        sets:'7-5, 2-6, 10-8', win:'home' },
        { ct:2, home:'Krithik Venkatesh / Ajayrathnam P',         away:'EYAN / K SREE GANESH',                        sets:'6-1, 6-0',       win:'home' },
        { ct:3, home:'Praneet P / Trinay Adith Mahesh',           away:'RETHANYA D / RENGAMNI SOWMYA NARAYANAN',     sets:'3-6, 1-6',       win:'away' },
      ]},
    { home:'TENNIGLO - E',     score:'2-1', away:'GST - C',        venue:'Tenniglo Tennis Academy',
      courts:[
        { ct:1, home:'Gokul Murari Halsu / SUNIL KUMAR G',       away:'HEMACHANDRAN / D.Sankar',                     sets:'2-6, 1-6',       win:'away' },
        { ct:2, home:'Magesh Kumar / Sundareswar V',               away:'S.Karthik / SELVAKUMAR',                     sets:'6-4, 6-1',       win:'home' },
        { ct:3, home:'Sagishnu Viyasan S / Kesavan P',             away:'RAMESHKANNA / THANGA KUMAR',                 sets:'6-1, 6-1',       win:'home' },
      ]},
    { home:'OM SHREE - B',     score:'3-0', away:'ARK RALLY RIDERS(TOP SPIN - C)', venue:'Om Shree Tennis Academy',
      courts:[
        { ct:1, home:'Sanjay / Prithvika S',                      away:'P BALAMURUGAN / Kaviya Sri B.S',             sets:'6-1, 6-1',       win:'home' },
        { ct:2, home:'Ajay madhavan / Sivaguru',                   away:'Arun Kumaran / Ananya Isabelle Immanuel',    sets:'6-4, 6-2',       win:'home' },
        { ct:3, home:'Nandhakumar / Judekingseley Robert Antony', away:'W/O',                                         sets:'6-0, 6-0',       win:'home' },
      ]},
    { home:'CCTA-D',           score:'3-0', away:'KCT',            venue:'CCTA',
      courts:[
        { ct:1, home:'Ananyaa / S P Sangamithra',                 away:'Ashwin Prabhu A / Ahilesvaran M',            sets:'6-0, 6-1',       win:'home' },
        { ct:2, home:'Akshataa / A John Mario fernando',          away:'THARIKA / RITHIK KRISHNA GM',                sets:'6-0, 6-1',       win:'home' },
        { ct:3, home:'Thanvi k / Prakalya v',                     away:'W/O',                                         sets:'6-0, 6-0',       win:'home' },
      ]},
    { home:'TenniMaSh Titans', score:'2-1', away:'Suresh Sports Academy', venue:'TenniMaSh',
      courts:[
        { ct:1, home:'R Arunkumar / Karthikkumar Thangavel',     away:'S.JEYARAJU / Periyasamy S',                   sets:'6-2, 6-3',       win:'home' },
        { ct:2, home:'Rajinikanth Muthukrishnan / Thirugnanam',   away:'J.GURUSARAN / Shrinish P',                   sets:'3-6, 6-1, 10-5', win:'home' },
        { ct:3, home:'Srihari Sritharan / Advika Vaibhavi',      away:'J.VIVEN / A.SIVASATHYAN',                     sets:'6-4, 6-7, 5-10', win:'away' },
      ]},
  ]},

  // ── Week 4 ─────────────────────────────────────────────────
  { week:4, date:'14-15 Feb 2026', done:true, matches:[
    { home:'ARK RALLY RIDERS(TOP SPIN - C)', score:'2-1', away:'SNS - E', venue:'Top Spin Tennis Academy',
      courts:[
        { ct:1, home:'Hrithvik Kumaran / Arun Kumaran',           away:'Hariharan M / Trinay Adith Mahesh',          sets:'6-0, 6-2',       win:'home' },
        { ct:2, home:'P BALAMURUGAN / Ananya Isabelle Immanuel',  away:'Ajayrathnam P / Krithik Venkatesh',          sets:'6-0, 6-3',       win:'home' },
        { ct:3, home:'W/O',                                        away:'Leya H / Praneet P',                          sets:'0-6, 0-6',       win:'away' },
      ]},
    { home:'TenniMaSh Titans', score:'2-1', away:'TENNIGLO - E',   venue:'TenniMaSh',
      courts:[
        { ct:1, home:'Allan Balas / Mukil.T',                     away:'Kesavan P / Sagishnu Viyasan S',             sets:'3-6, 2-6',       win:'away' },
        { ct:2, home:'Arvind Shankar / Thirugnanam',              away:'Gokul Murari Halsu / Sai Sabari',            sets:'6-0, 6-0',       win:'home' },
        { ct:3, home:'Rajinikanth Muthukrishnan / R Arunkumar',   away:'Magesh Kumar / Sundareswar V',               sets:'6-2, 6-3',       win:'home' },
      ]},
    { home:'CCTA-D',           score:'2-1', away:'GST - C',        venue:'CCTA',
      courts:[
        { ct:1, home:'S G Aadhiyogi / Sashwin Akash',             away:'THANGA KUMAR / S.Karthik',                   sets:'6-0, 6-4',       win:'home' },
        { ct:2, home:'Anamika MP / Magathi',                       away:'MADHAN / Vijay Vignesh.K',                   sets:'2-6, 2-6',       win:'away' },
        { ct:3, home:'Ananyaa / A John Mario fernando',           away:'D.Sankar / HEMACHANDRAN',                     sets:'6-3, 7-5',       win:'home' },
      ]},
    { home:'Suresh Sports Academy', score:'3-0', away:'OM SHREE - B', venue:'Suresh Sports Academy',
      courts:[
        { ct:1, home:'R.SURIYANARAYANAN / S.AKHILESH BHARATHI',  away:'Sanjay / Thanvanth',                          sets:'7-5, 7-6',       win:'home' },
        { ct:2, home:'A.SIVASATHYAN / Abdulla A',                 away:'Sivaguru / Judekingseley Robert Antony',     sets:'6-2, 2-6, 10-8', win:'home' },
        { ct:3, home:'T.S.SASHTI / J.GURUSARAN',                 away:'Nandhakumar / Ajay madhavan',                 sets:'6-3, 6-2',       win:'home' },
      ]},
    { home:'GREEN NEST - C',   score:'2-1', away:'KCT',            venue:'Green Nest Tennis Academy',
      courts:[
        { ct:1, home:'RETHANYA D / RENGAMNI SOWMYA NARAYANAN',   away:'Steven Josh A / NITHIN KRISHNA K',           sets:'6-0, 6-3',       win:'home' },
        { ct:2, home:'EYAN / K SREE GANESH',                      away:'Dr. S. Kamalakannan / THANGADURAI.S',        sets:'1-6, 0-6',       win:'away' },
        { ct:3, home:'CHIDAMBARAM RAMASAMY / TEJASVI V',          away:'W/O',                                         sets:'6-0, 6-0',       win:'home' },
      ]},
  ]},

  // ── Week 5 ─────────────────────────────────────────────────
  { week:5, date:'21-22 Feb 2026', done:true, matches:[
    { home:'ARK RALLY RIDERS(TOP SPIN - C)', score:'2-1', away:'GREEN NEST - C', venue:'Top Spin Tennis Academy',
      courts:[
        { ct:1, home:'Hrithvik Kumaran / Arun Kumaran',           away:'BASKARAN V / EYAN',                           sets:'6-0, 6-0',       win:'home' },
        { ct:2, home:'Ananya Isabelle Immanuel / Nitya Sri B.S',  away:'CHIDAMBARAM RAMASAMY / K SREE GANESH',       sets:'6-0, 6-2',       win:'home' },
        { ct:3, home:'P BALAMURUGAN / Kaviya Sri B.S',            away:'RENGAMNI SOWMYA NARAYANAN / RETHANYA D',     sets:'4-6, 6-7',       win:'away' },
      ]},
    { home:'KCT',              score:'2-1', away:'GST - C',        venue:'KCT Tennis Academy',
      courts:[
        { ct:1, home:'Dr. S. Kamalakannan / THANGADURAI.S',       away:'D.Sankar / HEMACHANDRAN',                     sets:'2-6, 6-3, 11-9', win:'home' },
        { ct:2, home:'SOWBIRAAJ / Steven Josh A',                  away:'MADHAN / RAMESHKANNA',                        sets:'6-2, 7-5',       win:'home' },
        { ct:3, home:'W/O',                                        away:'S.Karthik / SELVAMUTHUKUMAR',                 sets:'0-6, 0-6',       win:'away' },
      ]},
    { home:'Suresh Sports Academy', score:'2-1', away:'SNS - E',   venue:'Suresh Sports Academy',
      courts:[
        { ct:1, home:'R.SURIYANARAYANAN / Abdulla A',             away:'Hariharan M / Ajayrathnam P',                sets:'0-6, 0-6',       win:'away' },
        { ct:2, home:'Shrinish P / Periyasamy S',                 away:'Krithik Venkatesh / Trinay Adith Mahesh',    sets:'6-1, 6-0',       win:'home' },
        { ct:3, home:'J.VIVEN / S.JEYARAJU',                      away:'Pranay N / DHRUV V',                          sets:'6-0, 6-0',       win:'home' },
      ]},
    { home:'TenniMaSh Titans', score:'2-1', away:'CCTA-D',         venue:'TenniMaSh',
      courts:[
        { ct:1, home:'Karthikkumar Thangavel / R Arunkumar',     away:'S P liyanaa / Akshataa',                      sets:'6-2, 7-5',       win:'home' },
        { ct:2, home:'Rajinikanth Muthukrishnan / Thirugnanam',   away:'Ananyaa / S G Aadhiyogi',                    sets:'3-6, 6-2, 3-10', win:'away' },
        { ct:3, home:'Srihari Sritharan / Advika Vaibhavi',      away:'A John Mario fernando / Thanvi k',            sets:'7-6, 6-0',       win:'home' },
      ]},
    { home:'OM SHREE - B',     score:'2-1', away:'TENNIGLO - E',   venue:'Om Shree Tennis Academy',
      courts:[
        { ct:1, home:'Judekingseley Robert Antony / Sanjay',     away:'Magesh Kumar / Sundareswar V',                sets:'7-6, 6-3',       win:'home' },
        { ct:2, home:'Sivaguru / Ajay madhavan',                   away:'Sai Sabari / R M Vishnuvarthan',             sets:'6-0, 6-3',       win:'home' },
        { ct:3, home:'Nandhakumar / Prithvika S',                 away:'Kesavan P / Sagishnu Viyasan S',             sets:'0-6, 6-4, 6-10', win:'away' },
      ]},
  ]},

  // ── Week 6 ─────────────────────────────────────────────────
  { week:6, date:'28 Feb - 01 Mar 2026', done:true, matches:[
    { home:'GST - C',          score:'3-0', away:'GREEN NEST - C',  venue:'GST Tennis Academy',
      courts:[
        { ct:1, home:'THANGA KUMAR / SELVAMUTHUKUMAR',             away:'CHIDAMBARAM RAMASAMY / TEJASVI V',           sets:'6-0, 6-2',       win:'home' },
        { ct:2, home:'HEMACHANDRAN / S.Karthik',                   away:'BASKARAN V / RETHANYA D',                    sets:'6-0, 6-2',       win:'home' },
        { ct:3, home:'RAMESHKANNA / MADHAN',                       away:'W/O',                                         sets:'6-0, 6-0',       win:'home' },
      ]},
    { home:'TENNIGLO - E',     score:'2-1', away:'SNS - E',        venue:'Tenniglo Tennis Academy',
      courts:[
        { ct:1, home:'Sundareswar V / SUNIL KUMAR G',             away:'Hariharan M / Ajayrathnam P',                sets:'2-6, 1-6',       win:'away' },
        { ct:2, home:'Magesh Kumar / Sai Advik',                   away:'Krithik Venkatesh / DHRUV V',                sets:'6-0, 6-1',       win:'home' },
        { ct:3, home:'Kesavan P / Sagishnu Viyasan S',             away:'Leya H / Praneet P',                          sets:'6-0, 6-0',       win:'home' },
      ]},
    { home:'OM SHREE - B',     score:'2-1', away:'CCTA-D',         venue:'Om Shree Tennis Academy',
      courts:[
        { ct:1, home:'Sivaguru / Prithvika S',                     away:'S G Aadhiyogi / S P liyanaa',                sets:'3-6, 4-6',       win:'away' },
        { ct:2, home:'Sanjay / Mogeetha Shree S',                 away:'Ananyaa / A John Mario fernando',            sets:'6-4, 6-4',       win:'home' },
        { ct:3, home:'Judekingseley Robert Antony / Ajay madhavan', away:'S P Sangamithra / Dev akshat k',           sets:'6-0, 6-0',       win:'home' },
      ]},
    { home:'ARK RALLY RIDERS(TOP SPIN - C)', score:'2-1', away:'Suresh Sports Academy', venue:'Top Spin Tennis Academy',
      courts:[
        { ct:1, home:'Hrithvik Kumaran / Arun Kumaran',           away:'T.S.SASHTI / A.SIVASATHYAN',                 sets:'6-3, 6-2',       win:'home' },
        { ct:2, home:'P BALAMURUGAN / Nitya Sri B.S',             away:'J.GURUSARAN / Periyasamy S',                 sets:'6-4, 6-1',       win:'home' },
        { ct:3, home:'Ananya Isabelle Immanuel / Kaviya Sri B.S', away:'Abdulla A / S.JEYARAJU',                     sets:'0-6, 0-6',       win:'away' },
      ]},
    { home:'TenniMaSh Titans', score:'3-0', away:'KCT',            venue:'TenniMaSh',
      courts:[
        { ct:1, home:'R Arunkumar / Rajinikanth Muthukrishnan',   away:'Dr. S. Kamalakannan / THANGADURAI.S',        sets:'6-2, 6-2',       win:'home' },
        { ct:2, home:'Thirugnanam / Arvind Shankar',               away:'Ashwin Prabhu A / SOWBIRAAJ',                sets:'7-6, 6-2',       win:'home' },
        { ct:3, home:'Srihari Sritharan / Allan Balas',           away:'W/O',                                         sets:'6-0, 6-0',       win:'home' },
      ]},
  ]},

  // ── Week 7 ─────────────────────────────────────────────────
  { week:7, date:'07-08 Mar 2026', done:true, matches:[
    { home:'CCTA-D',           score:'2-1', away:'SNS - E',        venue:'CCTA',
      courts:[
        { ct:1, home:'Thanvi k / Akshataa',                        away:'Hariharan M / Ajayrathnam P',                sets:'0-6, 1-6',       win:'away' },
        { ct:2, home:'S P liyanaa / Prakalya v',                  away:'Trinay Adith Mahesh / Praneet P',            sets:'6-4, 6-0',       win:'home' },
        { ct:3, home:'Magathi / Sashwin Akash',                    away:'Leya H / Krithik Venkatesh',                 sets:'6-3, 6-1',       win:'home' },
      ]},
    { home:'TenniMaSh Titans', score:'2-1', away:'GST - C',        venue:'TenniMaSh',
      courts:[
        { ct:1, home:'R Arunkumar / Rajinikanth Muthukrishnan',   away:'D.Sankar / S.Karthik',                       sets:'6-2, 6-1',       win:'home' },
        { ct:2, home:'Karthikkumar Thangavel / Thirugnanam',      away:'SELVAMUTHUKUMAR / NAVEENKUMAR',              sets:'6-1, 6-4',       win:'home' },
        { ct:3, home:'Srihari Sritharan / Advika Vaibhavi',      away:'MADHAN / SELVAKUMAR',                         sets:'5-7, 3-6',       win:'away' },
      ]},
    { home:'OM SHREE - B',     score:'3-0', away:'KCT',            venue:'Om Shree Tennis Academy',
      courts:[
        { ct:1, home:'Ajay madhavan / Judekingseley Robert Antony', away:'W/O',                                       sets:'6-0, 6-0',       win:'home' },
        { ct:2, home:'Sanjay / Sanjith',                           away:'W/O',                                         sets:'6-0, 6-0',       win:'home' },
        { ct:3, home:'Thanvanth / Sivaguru',                       away:'W/O',                                         sets:'6-0, 6-0',       win:'home' },
      ]},
    { home:'ARK RALLY RIDERS(TOP SPIN - C)', score:'2-1', away:'TENNIGLO - E', venue:'Top Spin Tennis Academy',
      courts:[
        { ct:1, home:'Hrithvik Kumaran / Arun Kumaran',           away:'Magesh Kumar / Sai Advik',                   sets:'7-5, 6-7, 10-5', win:'home' },
        { ct:2, home:'P BALAMURUGAN / Ananya Isabelle Immanuel',  away:'Gokul Murari Halsu / R M Vishnuvarthan',    sets:'6-0, 6-1',       win:'home' },
        { ct:3, home:'Nitya Sri B.S / Kaviya Sri B.S',            away:'Sagishnu Viyasan S / Kesavan P',             sets:'0-6, 2-6',       win:'away' },
      ]},
    { home:'Suresh Sports Academy', score:'3-0', away:'GREEN NEST - C', venue:'Suresh Sports Academy',
      courts:[
        { ct:1, home:'R.SURIYANARAYANAN / S.AKHILESH BHARATHI',  away:'TEJASVI V / EYAN',                            sets:'6-0, 6-1',       win:'home' },
        { ct:2, home:'Shrinish P / T.S.SASHTI',                   away:'RENGAMNI SOWMYA NARAYANAN / RETHANYA D',     sets:'6-2, 6-1',       win:'home' },
        { ct:3, home:'A.SIVASATHYAN / J.VIVEN',                   away:'K SREE GANESH / CHIDAMBARAM RAMASAMY',       sets:'6-0, 6-0',       win:'home' },
      ]},
  ]},

  // ── Week 8 ─────────────────────────────────────────────────
  { week:8, date:'14-15 Mar 2026', done:true, matches:[
    { home:'Suresh Sports Academy', score:'2-1', away:'TENNIGLO - E', venue:'Suresh Sports Academy',
      courts:[
        { ct:1, home:'A.SIVASATHYAN / J.VIVEN',                   away:'Magesh Kumar / Sai Advik',                   sets:'7-6, 6-7, 11-13',win:'away' },
        { ct:2, home:'J.GURUSARAN / Shrinish P',                  away:'Sagishnu Viyasan S / Kesavan P',             sets:'6-0, 6-2',       win:'home' },
        { ct:3, home:'S.AKHILESH BHARATHI / R.SURIYANARAYANAN',  away:'Thanush Vel / Sundareswar V',                sets:'4-6, 6-1, 11-9', win:'home' },
      ]},
    { home:'TenniMaSh Titans', score:'3-0', away:'GREEN NEST - C', venue:'TenniMaSh',
      courts:[
        { ct:1, home:'Advika Vaibhavi / R Arunkumar',             away:'CHIDAMBARAM RAMASAMY / EYAN',                sets:'6-0, 6-0',       win:'home' },
        { ct:2, home:'Karthikkumar Thangavel / Thirugnanam',      away:'BASKARAN V / RETHANYA D',                    sets:'6-1, 6-0',       win:'home' },
        { ct:3, home:'Rajinikanth Muthukrishnan / Allan Balas',   away:'RENGAMNI SOWMYA NARAYANAN / SUBRAMANIAM SWAMINATHAN', sets:'2-6, 6-3, 10-6', win:'home' },
      ]},
    { home:'ARK RALLY RIDERS(TOP SPIN - C)', score:'2-1', away:'CCTA-D', venue:'Top Spin Tennis Academy',
      courts:[
        { ct:1, home:'Hrithvik Kumaran / Arun Kumaran',           away:'Ananyaa / S P Sangamithra',                  sets:'6-3, 6-3',       win:'home' },
        { ct:2, home:'Ananya Isabelle Immanuel / Nitya Sri B.S',  away:'S P liyanaa / Prakalya v',                   sets:'3-6, 6-2, 8-10', win:'away' },
        { ct:3, home:'P BALAMURUGAN / Solomon Madhu David',       away:'Magathi / Sashwin Akash',                    sets:'6-0, 6-1',       win:'home' },
      ]},
    { home:'KCT',              score:'2-1', away:'SNS - E',        venue:'KCT Tennis Academy',
      courts:[
        { ct:1, home:'Ashwin Prabhu A / SRI SUGANTHAN',           away:'Ajayrathnam P / Hariharan M',                sets:'0-6, 1-6',       win:'away' },
        { ct:2, home:'Dr. S. Kamalakannan / THANGADURAI.S',       away:'Praneet P / Leya H',                          sets:'6-3, 6-3',       win:'home' },
        { ct:3, home:'SOWBIRAAJ / Steven Josh A',                  away:'Trinay Adith Mahesh / Krithik Venkatesh',    sets:'6-0, 6-3',       win:'home' },
      ]},
    { home:'OM SHREE - B',     score:'3-0', away:'GST - C',        venue:'Om Shree Tennis Academy',
      courts:[
        { ct:1, home:'Ajay madhavan / Sivaguru',                   away:'HEMACHANDRAN / D.Sankar',                    sets:'6-3, 6-3',       win:'home' },
        { ct:2, home:'Judekingseley Robert Antony / Prithvika S', away:'RAMESHKANNA / NAVEENKUMAR',                  sets:'6-3, 6-2',       win:'home' },
        { ct:3, home:'Mogeetha Shree S / Sanjay',                 away:'SELVAMUTHUKUMAR / SELVAKUMAR',               sets:'6-0, 6-0',       win:'home' },
      ]},
  ]},

  // ── Week 9 ─────────────────────────────────────────────────
  { week:9, date:'21-22 Mar 2026', done:true, matches:[
    { home:'OM SHREE - B',     score:'2-1', away:'TenniMaSh Titans', venue:'Om Shree Tennis Academy',
      courts:[
        { ct:1, home:'Nandhakumar / Sanjay',                      away:'Rajinikanth Muthukrishnan / R Arunkumar',   sets:'4-6, 7-6, 10-6', win:'home' },
        { ct:2, home:'Sivaguru / Ajay madhavan',                   away:'Advika Vaibhavi / Karthikkumar Thangavel',  sets:'6-2, 6-4',       win:'home' },
        { ct:3, home:'Judekingseley Robert Antony / Prithvika S', away:'Arvind Shankar / Thirugnanam',               sets:'4-6, 4-6',       win:'away' },
      ]},
    { home:'Suresh Sports Academy', score:'3-0', away:'CCTA-D',    venue:'Suresh Sports Academy',
      courts:[
        { ct:1, home:'S.JEYARAJU / J.VIVEN',                      away:'Akshataa / A John Mario fernando',           sets:'6-1, 6-2',       win:'home' },
        { ct:2, home:'T.S.SASHTI / Abdulla A',                    away:'Magathi / Thanvi k',                          sets:'6-3, 6-1',       win:'home' },
        { ct:3, home:'J.GURUSARAN / Shrinish P',                  away:'Dev akshat k / Sashwin Akash',               sets:'6-0, 6-0',       win:'home' },
      ]},
    { home:'ARK RALLY RIDERS(TOP SPIN - C)', score:'3-0', away:'KCT', venue:'Top Spin Tennis Academy',
      courts:[
        { ct:1, home:'Hrithvik Kumaran / Arun Kumaran',           away:'W/O',                                         sets:'6-0, 6-0',       win:'home' },
        { ct:2, home:'P BALAMURUGAN / Kaviya Sri B.S',            away:'W/O',                                         sets:'6-0, 6-0',       win:'home' },
        { ct:3, home:'Ananya Isabelle Immanuel / Nitya Sri B.S',  away:'W/O',                                         sets:'6-0, 6-0',       win:'home' },
      ]},
    { home:'TENNIGLO - E',     score:'3-0', away:'GREEN NEST - C', venue:'Tenniglo Tennis Academy',
      courts:[
        { ct:1, home:'Gokul Murari Halsu / Sundareswar V',       away:'TEJASVI V / BASKARAN V',                      sets:'6-1, 7-5',       win:'home' },
        { ct:2, home:'Sai Sabari / R M Vishnuvarthan',             away:'RETHANYA D / SUBRAMANIAM SWAMINATHAN',       sets:'6-2, 6-2',       win:'home' },
        { ct:3, home:'Sagishnu Viyasan S / Thanush Vel',           away:'RENGAMNI SOWMYA NARAYANAN / K SREE GANESH', sets:'4-6, 6-3, 10-2', win:'home' },
      ]},
    { home:'GST - C',          score:'2-1', away:'SNS - E',        venue:'GST Tennis Academy',
      courts:[
        { ct:1, home:'HEMACHANDRAN / S.Karthik',                   away:'Leya H / Hariharan M',                       sets:'6-2, 6-1',       win:'home' },
        { ct:2, home:'MADHAN / SELVAMUTHUKUMAR',                   away:'Ajayrathnam P / Praneet P',                  sets:'1-6, 1-6',       win:'away' },
        { ct:3, home:'THANGA KUMAR / NAVEENKUMAR',                 away:'Krithik Venkatesh / Pranay N',               sets:'6-1, 6-1',       win:'home' },
      ]},
  ]},
];
