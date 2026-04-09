// ============================================================
// DIVISION G — CDTA 2026
// ============================================================

const DIV_G_TEAMS = [
  { short:'RAKS', full:'Raks DK Courts', captain:'Guganvarma. M', mobile:'', players:10, club:'Raks DK Courts', surface:'', division:'G' },
  { short:'PSG-B', full:'PSG - B', captain:'SHYAM', mobile:'', players:10, club:'PSG', surface:'', division:'G' },
  { short:'TS-B', full:'TOP SPIN B', captain:'SUDHAKAR S', mobile:'', players:9, club:'Top Spin', surface:'', division:'G' },
  { short:'TGLO-C', full:'TENNIGLO - C', captain:'Thirumurugan S', mobile:'', players:8, club:'Tenniglo', surface:'', division:'G' },
  { short:'BMT', full:'Blue Mountain Tennis', captain:'Blue Mountain Tennis', mobile:'', players:13, club:'Blue Mountain Tennis', surface:'', division:'G' },
  { short:'LMTA-B', full:'CAPITAL TENNIS CLUB (LMTA-B)', captain:'Bharathkumar gopalan', mobile:'', players:9, club:'LMTA', surface:'', division:'G' },
  { short:'GST-B', full:'GST - B', captain:'PRADEEP JERRY', mobile:'', players:10, club:'GST', surface:'', division:'G' },
  { short:'LEVO-D', full:'LEVO SPORTS-D', captain:'Boopal P', mobile:'', players:12, club:'Levo Sports', surface:'', division:'G' },
  { short:'KGR-C', full:'KGR - C', captain:'SRIRAM MAHALINGAM A S', mobile:'', players:14, club:'KGR', surface:'', division:'G' },
  { short:'URC', full:'URC', captain:'DURAIPANDIAN ARUMUGAM', mobile:'', players:10, club:'URC', surface:'', division:'G' },
  { short:'CMTA-E', full:'CMTA - E', captain:'JEEVAGAN RAJENDRAN', mobile:'', players:14, club:'CMTA', surface:'', division:'G' },
];

const DIV_G_STANDINGS = [
  { rank:1, short:'RAKS', full:'Raks DK Courts', pts:27, played:30, setsW:55, setsL:8, gamesW:340, gamesL:111 },
  { rank:2, short:'PSG-B', full:'PSG - B', pts:21, played:30, setsW:43, setsL:23, gamesW:295, gamesL:229 },
  { rank:3, short:'TS-B', full:'TOP SPIN B', pts:19, played:30, setsW:43, setsL:25, gamesW:303, gamesL:213 },
  { rank:4, short:'TGLO-C', full:'TENNIGLO - C', pts:18, played:30, setsW:36, setsL:27, gamesW:280, gamesL:253 },
  { rank:5, short:'BMT', full:'Blue Mountain Tennis', pts:17, played:27, setsW:40, setsL:21, gamesW:288, gamesL:185 },
  { rank:6, short:'LMTA-B', full:'CAPITAL TENNIS CLUB (LMTA-B)', pts:14, played:27, setsW:26, setsL:29, gamesW:184, gamesL:216 },
  { rank:7, short:'GST-B', full:'GST - B', pts:14, played:30, setsW:29, setsL:32, gamesW:248, gamesL:242 },
  { rank:8, short:'LEVO-D', full:'LEVO SPORTS-D', pts:11, played:30, setsW:24, setsL:43, gamesW:199, gamesL:301 },
  { rank:9, short:'KGR-C', full:'KGR - C', pts:8, played:30, setsW:21, setsL:44, gamesW:208, gamesL:283 },
  { rank:10, short:'URC', full:'URC', pts:7, played:27, setsW:17, setsL:42, gamesW:170, gamesL:282 },
  { rank:11, short:'CMTA-E', full:'CMTA - E', pts:3, played:27, setsW:9, setsL:49, gamesW:115, gamesL:315 },
];

const DIV_G_PLAYERS = [
  // Raks DK Courts
  { name:'Guganvarma. M', team:'RAKS', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-g/raks/guganvarma-m.jpg' },
  { name:'Jayaprakash Govindharaj', team:'RAKS', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/raks/jayaprakash-govindharaj.jpg' },
  { name:'ACHINTHYA', team:'RAKS', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/raks/achinthya.jpg' },
  { name:'ADVAY GOKULRAJA', team:'RAKS', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/raks/advay-gokulraja.jpg' },
  { name:'KABILAYAYATI C', team:'RAKS', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/raks/kabilayayati-c.jpeg' },
  { name:'MAHAKRITHI', team:'RAKS', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/raks/mahakrithi.jpg' },
  { name:'SAMEEHA M', team:'RAKS', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/raks/sameeha-m.jpg' },
  { name:'ADHISH PM', team:'RAKS', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/raks/adhish-pm.jpg' },
  { name:'MITUN C', team:'RAKS', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/raks/mitun-c.jpg' },
  { name:'KULANTHAI YESU', team:'RAKS', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/raks/kulanthai-yesu.jpg' },

  // PSG - B
  { name:'SHYAM', team:'PSG-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-g/psg-b/shyam.jpeg' },
  { name:'Raj Kumar', team:'PSG-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/psg-b/raj-kumar.jpg' },
  { name:'Joha', team:'PSG-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/psg-b/joha.jpg' },
  { name:'Johan sathya', team:'PSG-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/psg-b/johan-sathya.jpg' },
  { name:'Deepak', team:'PSG-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/psg-b/deepak.jpg' },
  { name:'Karthikeyan', team:'PSG-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/psg-b/karthikeyan.jpeg' },
  { name:'NIRMAL KUMAR K', team:'PSG-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/psg-b/nirmal-kumar-k.jpeg' },
  { name:'Mahesh', team:'PSG-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/psg-b/mahesh.jpeg' },
  { name:'Rangaraj. KJ', team:'PSG-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/psg-b/rangaraj-kj.jpg' },
  { name:'Dr. Surenthiran', team:'PSG-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/psg-b/dr-surenthiran.jpg' },

  // TOP SPIN B
  { name:'SUDHAKAR S', team:'TS-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-g/ts-b/sudhakar-s.jpg' },
  { name:'SENTHILKUMAR A', team:'TS-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/ts-b/senthilkumar-a.jpg' },
  { name:'saravanan', team:'TS-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/ts-b/saravanan.jpg' },
  { name:'A P Vishwanath', team:'TS-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/ts-b/a-p-vishwanath.jpg' },
  { name:'NANDAKUMAR K', team:'TS-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/ts-b/nandakumar-k.jpg' },
  { name:'Rajkumar', team:'TS-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/ts-b/rajkumar.jpg' },
  { name:'Ramasubramaniam', team:'TS-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/ts-b/ramasubramaniam.jpg' },
  { name:'Venkat Annamalai Annamalai', team:'TS-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/ts-b/venkat-annamalai-annamalai.jpeg' },
  { name:'Jawahar  Harinarayanan', team:'TS-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/ts-b/jawahar-harinarayanan.jpeg' },

  // TENNIGLO - C
  { name:'Thirumurugan S', team:'TGLO-C', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-g/tglo-c/thirumurugan-s.jpg' },
  { name:'Balamurugan K', team:'TGLO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/tglo-c/balamurugan-k.jpeg' },
  { name:'Raja Vignesh M', team:'TGLO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/tglo-c/raja-vignesh-m.jpg' },
  { name:'Umapathi P', team:'TGLO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/tglo-c/umapathi-p.jpeg' },
  { name:'Sivaramakrishnan N', team:'TGLO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/tglo-c/sivaramakrishnan-n.jpg' },
  { name:'T S Prabhu', team:'TGLO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/tglo-c/t-s-prabhu.jpg' },
  { name:'N Shanmugam', team:'TGLO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/tglo-c/n-shanmugam.jpeg' },
  { name:'Bishak Muthukumar', team:'TGLO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/tglo-c/bishak-muthukumar.jpg' },

  // Blue Mountain Tennis
  { name:'Blue Mountain Tennis', team:'BMT', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/blue-mountain-tennis.jpeg' },
  { name:'NIKHIL SURESH', team:'BMT', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/nikhil-suresh.jpeg' },
  { name:'VARUN KAUSHIK', team:'BMT', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/varun-kaushik.jpeg' },
  { name:'ANAND MUKESH', team:'BMT', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/anand-mukesh.jpg' },
  { name:'SATHISH KUMAR L', team:'BMT', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/sathish-kumar-l.jpeg' },
  { name:'NITIN SURESH', team:'BMT', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/nitin-suresh.jpg' },
  { name:'RAMKUMAR S', team:'BMT', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/ramkumar-s.jpg' },
  { name:'YADUSH BOSE', team:'BMT', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/yadush-bose.jpeg' },
  { name:'VARSHA SAROJNI P M', team:'BMT', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/varsha-sarojni-p-m.jpeg' },
  { name:'SHIVKARAN', team:'BMT', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/shivkaran.jpeg' },
  { name:'MOHAMMED SHARIFF', team:'BMT', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/mohammed-shariff.jpeg' },
  { name:'PRAVEEN BARDIA', team:'BMT', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/praveen-bardia.png' },
  { name:'YASH', team:'BMT', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/yash.jpeg' },
  { name:'PARAS SADHOTRA', team:'BMT', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/bmt/paras-sadhotra.jpeg' },

  // CAPITAL TENNIS CLUB (LMTA-B)
  { name:'Bharathkumar gopalan', team:'LMTA-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-g/lmta-b/bharathkumar-gopalan.jpg' },
  { name:'Riyas sheriff', team:'LMTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/lmta-b/riyas-sheriff.jpg' },
  { name:'AKSHAY B S', team:'LMTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/lmta-b/akshay-b-s.jpg' },
  { name:'Dineshkumar', team:'LMTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/lmta-b/dineshkumar.jpg' },
  { name:'Anand Kumar', team:'LMTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/lmta-b/anand-kumar.jpeg' },
  { name:'ABHISHEK B S', team:'LMTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/lmta-b/abhishek-b-s.jpg' },
  { name:'Princejabez', team:'LMTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/lmta-b/princejabez.jpg' },
  { name:'AMITHA SRI SIVA', team:'LMTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/lmta-b/amitha-sri-siva.jpg' },
  { name:'Mohammed Hidhayath', team:'LMTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/lmta-b/mohammed-hidhayath.jpeg' },

  // GST - B
  { name:'PRADEEP JERRY', team:'GST-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-g/gst-b/pradeep-jerry.jpeg' },
  { name:'SENTHIL', team:'GST-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/gst-b/senthil.jpg' },
  { name:'TamilZhanban K', team:'GST-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/gst-b/tamilzhanban-k.jpg' },
  { name:'VIMALESH', team:'GST-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/gst-b/vimalesh.jpeg' },
  { name:'Thulasi Dass', team:'GST-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/gst-b/thulasi-dass.jpg' },
  { name:'Kashinathan.M', team:'GST-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/gst-b/kashinathanm.jpg' },
  { name:'KARTHIKEYAN', team:'GST-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/gst-b/karthikeyan.jpeg' },
  { name:'VINOTH', team:'GST-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/gst-b/vinoth.jpeg' },
  { name:'J.Ganesh', team:'GST-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/gst-b/jganesh.jpg' },
  { name:'VENKATESH A', team:'GST-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/gst-b/venkatesh-a.jpeg' },

  // LEVO SPORTS-D
  { name:'Boopal P', team:'LEVO-D', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-g/levo-d/boopal-p.jpg' },
  { name:'Sivaram', team:'LEVO-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/levo-d/sivaram.jpg' },
  { name:'Sivaranjan', team:'LEVO-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/levo-d/sivaranjan.jpg' },
  { name:'Rithul S', team:'LEVO-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/levo-d/rithul-s.jpg' },
  { name:'Veera Kairav', team:'LEVO-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/levo-d/veera-kairav.jpg' },
  { name:'Krishna', team:'LEVO-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/levo-d/krishna.jpg' },
  { name:'Dhruv', team:'LEVO-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/levo-d/dhruv.jpg' },
  { name:'Yothesh kumar', team:'LEVO-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/levo-d/yothesh-kumar.jpg' },
  { name:'Ramamurthi Nadarajan', team:'LEVO-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/levo-d/ramamurthi-nadarajan.jpg' },
  { name:'Sujith', team:'LEVO-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/levo-d/sujith.jpg' },
  { name:'Devaraj', team:'LEVO-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/levo-d/devaraj.jpg' },
  { name:'Thanvanth', team:'LEVO-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/levo-d/thanvanth.jpg' },

  // KGR - C
  { name:'SRIRAM MAHALINGAM A S', team:'KGR-C', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/sriram-mahalingam-a-s.jpg' },
  { name:'BALAMUTHU', team:'KGR-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/balamuthu.jpg' },
  { name:'ROBERT', team:'KGR-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/robert.jpeg' },
  { name:'Dr ELANKUMAR S', team:'KGR-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/dr-elankumar-s.jpg' },
  { name:'Dr GANESAN A', team:'KGR-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/dr-ganesan-a.jpg' },
  { name:'ANAND R', team:'KGR-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/anand-r.jpg' },
  { name:'SENDHILKUMAR S', team:'KGR-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/sendhilkumar-s.jpg' },
  { name:'RAVI M', team:'KGR-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/ravi-m.jpg' },
  { name:'MANI PALANISWAMY', team:'KGR-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/mani-palaniswamy.jpeg' },
  { name:'MOHAMMED HARRIS M', team:'KGR-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/mohammed-harris-m.png' },
  { name:'ARUMUGAM K K', team:'KGR-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/arumugam-k-k.jpg' },
  { name:'MANIKANDAN R', team:'KGR-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/manikandan-r.jpg' },
  { name:'GNANAPRAKASAM F', team:'KGR-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/gnanaprakasam-f.jpg' },
  { name:'MOHAN', team:'KGR-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/kgr-c/mohan.jpeg' },

  // URC
  { name:'DURAIPANDIAN ARUMUGAM', team:'URC', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-g/urc/duraipandian-arumugam.jpg' },
  { name:'RAJKUMAR S', team:'URC', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/urc/rajkumar-s.jpeg' },
  { name:'JAYAPRAKASH', team:'URC', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/urc/jayaprakash.jpeg' },
  { name:'RAJKUMAR N', team:'URC', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/urc/rajkumar-n.jpeg' },
  { name:'THIRUNAVAKARASU', team:'URC', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/urc/thirunavakarasu.jpeg' },
  { name:'Ramaraj D', team:'URC', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/urc/ramaraj-d.jpeg' },
  { name:'PANNERSELVAM R', team:'URC', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/urc/pannerselvam-r.jpg' },
  { name:'Krishnakumar G', team:'URC', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/urc/krishnakumar-g.jpeg' },
  { name:'Ajay Shankar B.R', team:'URC', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/urc/ajay-shankar-br.jpeg' },
  { name:'Rithik Rokin B S', team:'URC', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/urc/rithik-rokin-b-s.jpeg' },

  // CMTA - E
  { name:'JEEVAGAN RAJENDRAN', team:'CMTA-E', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/jeevagan-rajendran.jpg' },
  { name:'KARTHICKPRABHU R', team:'CMTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/karthickprabhu-r.jpeg' },
  { name:'NAMAM', team:'CMTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/namam.jpg' },
  { name:'DIVYA', team:'CMTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/divya.png' },
  { name:'FAYAZ', team:'CMTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/fayaz.jpeg' },
  { name:'VIDUR', team:'CMTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/vidur.jpeg' },
  { name:'MARIYA SUNDARAM', team:'CMTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/mariya-sundaram.jpeg' },
  { name:'VISWAK', team:'CMTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/viswak.jpeg' },
  { name:'NAVANEETHAN', team:'CMTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/navaneethan.jpeg' },
  { name:'DHARSHAN', team:'CMTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/dharshan.jpeg' },
  { name:'SWATHI R', team:'CMTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/swathi-r.jpg' },
  { name:'VRISHIN M', team:'CMTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/vrishin-m.jpeg' },
  { name:'LOGESH R', team:'CMTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/logesh-r.jpeg' },
  { name:'MADHUMITHA m', team:'CMTA-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-g/cmta-e/madhumitha-m.jpeg' },
];

const DIV_G_SCHEDULE = [
  // ── Week 1 ─────────────────────────────
  { week:1, date:'24 Jan 2026', done:true, matches:[
    { home:'Raks DK Courts', score:'3-0', away:'KGR - C', venue:'',
      courts:[
        { ct:1, home:'Guganvarma. M / MITUN C', away:'MANIKANDAN R / SRIRAM MAHALINGAM A S', sets:'6-1, 6-0', win:'home' },
        { ct:2, home:'Jayaprakash Govindharaj / KABILAYAYATI C', away:'ANAND R / BALAMUTHU', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'ACHINTHYA / KULANTHAI YESU', away:'ROBERT / MOHAN', sets:'6-1, 6-2', win:'home' },
      ]},
    { home:'TENNIGLO - C', score:'3-0', away:'CMTA - E', venue:'',
      courts:[
        { ct:1, home:'Thirumurugan S / Sivaramakrishnan N', away:'NAMAM / VRISHIN M', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'Umapathi P / N Shanmugam', away:'JEEVAGAN RAJENDRAN / FAYAZ', sets:'6-0, 6-2', win:'home' },
        { ct:3, home:'Balamurugan K / T S Prabhu', away:'DIVYA / LOGESH R', sets:'6-4, 6-4', win:'home' },
      ]},
    { home:'PSG - B', score:'3-0', away:'URC', venue:'',
      courts:[
        { ct:1, home:'SHYAM / NIRMAL KUMAR K', away:'DURAIPANDIAN ARUMUGAM / RAJKUMAR N', sets:'6-4, 7-5', win:'home' },
        { ct:2, home:'Dr. Surenthiran / Deepak', away:'Ramaraj D / Ajay Shankar B.R', sets:'6-2, 6-3', win:'home' },
        { ct:3, home:'Rangaraj. KJ / Joha', away:'RAJKUMAR S / JAYAPRAKASH', sets:'7-5, 5-7, 10-5', win:'home' },
      ]},
    { home:'LEVO SPORTS-D', score:'2-1', away:'CAPITAL TENNIS CLUB (LMTA-B)', venue:'',
      courts:[
        { ct:1, home:'Sivaranjan / Krishna', away:'Bharathkumar gopalan / AKSHAY B S', sets:'5-7, 1-6', win:'away' },
        { ct:2, home:'Boopal P / Sivaram', away:'Riyas sheriff / Anand Kumar', sets:'6-4, 7-5', win:'home' },
        { ct:3, home:'Devaraj / Sujith', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'Blue Mountain Tennis', score:'2-1', away:'GST - B', venue:'',
      courts:[
        { ct:1, home:'NIKHIL SURESH / YADUSH BOSE', away:'Kashinathan.M / VENKATESH A', sets:'6-4, 6-7, 3-10', win:'away' },
        { ct:2, home:'VARSHA SAROJNI P M / PARAS SADHOTRA', away:'PRADEEP JERRY / KARTHIKEYAN', sets:'6-1, 6-2', win:'home' },
        { ct:3, home:'ANAND MUKESH / RAMKUMAR S', away:'VINOTH / SENTHIL', sets:'6-4, 6-0', win:'home' },
      ]},
  ]},

  // ── Week 2 ─────────────────────────────
  { week:2, date:'31 Jan-1 Feb 2026', done:true, matches:[
    { home:'CAPITAL TENNIS CLUB (LMTA-B)', score:'3-0', away:'CMTA - E', venue:'',
      courts:[
        { ct:1, home:'Bharathkumar gopalan / AKSHAY B S', away:'VISWAK / FAYAZ', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Riyas sheriff / Anand Kumar', away:'DIVYA / KARTHICKPRABHU R', sets:'6-2, 6-1', win:'home' },
        { ct:3, home:'Dineshkumar / Princejabez', away:'VIDUR / DHARSHAN', sets:'6-4, 4-6, 10-8', win:'home' },
      ]},
    { home:'Raks DK Courts', score:'3-0', away:'URC', venue:'',
      courts:[
        { ct:1, home:'Guganvarma. M / MITUN C', away:'JAYAPRAKASH / Krishnakumar G', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'ADHISH PM / ACHINTHYA', away:'RAJKUMAR S / Ajay Shankar B.R', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Jayaprakash Govindharaj / KABILAYAYATI C', away:'DURAIPANDIAN ARUMUGAM / RAJKUMAR N', sets:'6-0, 6-3', win:'home' },
      ]},
    { home:'TOP SPIN B', score:'3-0', away:'GST - B', venue:'',
      courts:[
        { ct:1, home:'Ramasubramaniam / A P Vishwanath', away:'PRADEEP JERRY / VIMALESH', sets:'6-3, 7-6', win:'home' },
        { ct:2, home:'SUDHAKAR S / saravanan', away:'VENKATESH A / TamilZhanban K', sets:'6-4, 6-3', win:'home' },
        { ct:3, home:'SENTHILKUMAR A / Rajkumar', away:'VINOTH / KARTHIKEYAN', sets:'7-5, 6-4', win:'home' },
      ]},
    { home:'Blue Mountain Tennis', score:'2-1', away:'LEVO SPORTS-D', venue:'',
      courts:[
        { ct:1, home:'NIKHIL SURESH / SHIVKARAN', away:'Thanvanth / Dhruv', sets:'6-0, 6-2', win:'home' },
        { ct:2, home:'ANAND MUKESH / RAMKUMAR S', away:'Boopal P / Sivaram', sets:'6-3, 3-6, 10-8', win:'home' },
        { ct:3, home:'VARSHA SAROJNI P M / YADUSH BOSE', away:'Sivaranjan / Rithul S', sets:'7-5, 4-6, 6-10', win:'away' },
      ]},
    { home:'PSG - B', score:'2-1', away:'TENNIGLO - C', venue:'',
      courts:[
        { ct:1, home:'Karthikeyan / Dr. Surenthiran', away:'T S Prabhu / Bishak Muthukumar', sets:'7-6, 7-6', win:'home' },
        { ct:2, home:'Deepak / Johan sathya', away:'Thirumurugan S / Raja Vignesh M', sets:'1-6, 5-7', win:'away' },
        { ct:3, home:'SHYAM / NIRMAL KUMAR K', away:'Umapathi P / N Shanmugam', sets:'6-3, 6-1', win:'home' },
      ]},
  ]},

  // ── Week 3 ─────────────────────────────
  { week:3, date:'7 Feb 2026', done:true, matches:[
    { home:'LEVO SPORTS-D', score:'3-0', away:'CMTA - E', venue:'',
      courts:[
        { ct:1, home:'Sujith / Thanvanth', away:'VISWAK / KARTHICKPRABHU R', sets:'6-4, 5-7, 10-8', win:'home' },
        { ct:2, home:'Sivaram / Krishna', away:'LOGESH R / FAYAZ', sets:'6-2, 5-7, 10-4', win:'home' },
        { ct:3, home:'Rithul S / Sivaranjan', away:'DIVYA / JEEVAGAN RAJENDRAN', sets:'6-1, 6-2', win:'home' },
      ]},
    { home:'TENNIGLO - C', score:'3-0', away:'KGR - C', venue:'',
      courts:[
        { ct:1, home:'Thirumurugan S / T S Prabhu', away:'MOHAN / MOHAMMED HARRIS M', sets:'6-2, 6-2', win:'home' },
        { ct:2, home:'Sivaramakrishnan N / N Shanmugam', away:'RAVI M / GNANAPRAKASAM F', sets:'2-6, 6-2, 10-7', win:'home' },
        { ct:3, home:'Balamurugan K / Raja Vignesh M', away:'ROBERT / ANAND R', sets:'6-3, 6-2', win:'home' },
      ]},
    { home:'PSG - B', score:'2-1', away:'GST - B', venue:'',
      courts:[
        { ct:1, home:'SHYAM / NIRMAL KUMAR K', away:'VIMALESH / SENTHIL', sets:'6-1, 6-2', win:'home' },
        { ct:2, home:'Karthikeyan / Dr. Surenthiran', away:'PRADEEP JERRY / KARTHIKEYAN', sets:'6-2, 5-7, 10-7', win:'home' },
        { ct:3, home:'Deepak / Joha', away:'Kashinathan.M / VENKATESH A', sets:'4-6, 3-6', win:'away' },
      ]},
    { home:'Raks DK Courts', score:'2-1', away:'Blue Mountain Tennis', venue:'',
      courts:[
        { ct:1, home:'Guganvarma. M / ACHINTHYA', away:'NIKHIL SURESH / VARUN KAUSHIK', sets:'2-6, 6-1, 10-6', win:'home' },
        { ct:2, home:'MITUN C / KABILAYAYATI C', away:'VARSHA SAROJNI P M / PARAS SADHOTRA', sets:'3-6, 3-6', win:'away' },
        { ct:3, home:'Jayaprakash Govindharaj / KULANTHAI YESU', away:'RAMKUMAR S / ANAND MUKESH', sets:'6-1, 6-3', win:'home' },
      ]},
    { home:'TOP SPIN B', score:'2-1', away:'URC', venue:'',
      courts:[
        { ct:1, home:'saravanan / Jawahar  Harinarayanan', away:'Ramaraj D / RAJKUMAR S', sets:'6-2, 6-2', win:'home' },
        { ct:2, home:'SUDHAKAR S / Rajkumar', away:'Ajay Shankar B.R / RAJKUMAR N', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Ramasubramaniam / A P Vishwanath', away:'PANNERSELVAM R / DURAIPANDIAN ARUMUGAM', sets:'3-6, 5-7', win:'away' },
      ]},
  ]},

  // ── Week 4 ─────────────────────────────
  { week:4, date:'14 Feb 2026', done:true, matches:[
    { home:'CAPITAL TENNIS CLUB (LMTA-B)', score:'2-1', away:'TENNIGLO - C', venue:'',
      courts:[
        { ct:1, home:'ABHISHEK B S / Mohammed Hidhayath', away:'Thirumurugan S / Bishak Muthukumar', sets:'0-6, 3-6', win:'away' },
        { ct:2, home:'AKSHAY B S / AMITHA SRI SIVA', away:'N Shanmugam / Raja Vignesh M', sets:'6-2, 6-2', win:'home' },
        { ct:3, home:'Bharathkumar gopalan / Riyas sheriff', away:'T S Prabhu / Sivaramakrishnan N', sets:'6-3, 6-3', win:'home' },
      ]},
    { home:'GST - B', score:'3-0', away:'KGR - C', venue:'',
      courts:[
        { ct:1, home:'VIMALESH / Thulasi Dass', away:'GNANAPRAKASAM F / ANAND R', sets:'1-6, 6-4, 10-8', win:'home' },
        { ct:2, home:'PRADEEP JERRY / J.Ganesh', away:'SRIRAM MAHALINGAM A S / BALAMUTHU', sets:'6-2, 7-6', win:'home' },
        { ct:3, home:'Kashinathan.M / VENKATESH A', away:'MANIKANDAN R / MOHAMMED HARRIS M', sets:'6-0, 6-2', win:'home' },
      ]},
    { home:'PSG - B', score:'2-1', away:'TOP SPIN B', venue:'',
      courts:[
        { ct:1, home:'Joha / Dr. Surenthiran', away:'SENTHILKUMAR A / Rajkumar', sets:'2-6, 6-3, 6-10', win:'away' },
        { ct:2, home:'Deepak / Karthikeyan', away:'Ramasubramaniam / A P Vishwanath', sets:'7-5, 2-6, 10-6', win:'home' },
        { ct:3, home:'NIRMAL KUMAR K / SHYAM', away:'SUDHAKAR S / saravanan', sets:'6-3, 6-2', win:'home' },
      ]},
    { home:'Raks DK Courts', score:'3-0', away:'CMTA - E', venue:'',
      courts:[
        { ct:1, home:'Guganvarma. M / ADHISH PM', away:'FAYAZ / LOGESH R', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Jayaprakash Govindharaj / MITUN C', away:'VIDUR / NAVANEETHAN', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'ACHINTHYA / KABILAYAYATI C', away:'JEEVAGAN RAJENDRAN / KARTHICKPRABHU R', sets:'6-2, 6-0', win:'home' },
      ]},
    { home:'Blue Mountain Tennis', score:'3-0', away:'URC', venue:'',
      courts:[
        { ct:1, home:'NIKHIL SURESH / YADUSH BOSE', away:'DURAIPANDIAN ARUMUGAM / PANNERSELVAM R', sets:'6-4, 6-1', win:'home' },
        { ct:2, home:'SATHISH KUMAR L / VARSHA SAROJNI P M', away:'RAJKUMAR S / Ajay Shankar B.R', sets:'7-6, 7-5', win:'home' },
        { ct:3, home:'ANAND MUKESH / RAMKUMAR S', away:'THIRUNAVAKARASU / Rithik Rokin B S', sets:'6-2, 6-1', win:'home' },
      ]},
  ]},

  // ── Week 5 ─────────────────────────────
  { week:5, date:'21 Feb 2026', done:true, matches:[
    { home:'GST - B', score:'3-0', away:'LEVO SPORTS-D', venue:'',
      courts:[
        { ct:1, home:'VENKATESH A / SENTHIL', away:'Sivaram / Dhruv', sets:'6-3, 6-2', win:'home' },
        { ct:2, home:'KARTHIKEYAN / Thulasi Dass', away:'Ramamurthi Nadarajan / Devaraj', sets:'6-2, 6-3', win:'home' },
        { ct:3, home:'PRADEEP JERRY / J.Ganesh', away:'Thanvanth / Veera Kairav', sets:'6-0, 6-1', win:'home' },
      ]},
    { home:'Raks DK Courts', score:'3-0', away:'TENNIGLO - C', venue:'',
      courts:[
        { ct:1, home:'Jayaprakash Govindharaj / ADHISH PM', away:'Thirumurugan S / Sivaramakrishnan N', sets:'6-3, 6-1', win:'home' },
        { ct:2, home:'Guganvarma. M / ACHINTHYA', away:'Umapathi P / Balamurugan K', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'MITUN C / KABILAYAYATI C', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'PSG - B', score:'2-1', away:'CAPITAL TENNIS CLUB (LMTA-B)', venue:'',
      courts:[
        { ct:1, home:'W/O', away:'Bharathkumar gopalan / AKSHAY B S', sets:'0-6, 0-6', win:'away' },
        { ct:2, home:'Dr. Surenthiran / Karthikeyan', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'SHYAM / NIRMAL KUMAR K', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'TOP SPIN B', score:'2-1', away:'KGR - C', venue:'',
      courts:[
        { ct:1, home:'SUDHAKAR S / Jawahar  Harinarayanan', away:'SRIRAM MAHALINGAM A S / BALAMUTHU', sets:'6-2, 6-1', win:'home' },
        { ct:2, home:'SENTHILKUMAR A / Ramasubramaniam', away:'MANIKANDAN R / ROBERT', sets:'6-2, 7-6', win:'home' },
        { ct:3, home:'Rajkumar / Venkat Annamalai Annamalai', away:'ANAND R / GNANAPRAKASAM F', sets:'4-6, 0-6', win:'away' },
      ]},
    { home:'Blue Mountain Tennis', score:'3-0', away:'CMTA - E', venue:'',
      courts:[
        { ct:1, home:'PRAVEEN BARDIA / NIKHIL SURESH', away:'VIDUR / NAMAM', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'YADUSH BOSE / RAMKUMAR S', away:'FAYAZ / JEEVAGAN RAJENDRAN', sets:'6-0, 6-1', win:'home' },
        { ct:3, home:'ANAND MUKESH / VARSHA SAROJNI P M', away:'VISWAK / DHARSHAN', sets:'6-1, 6-0', win:'home' },
      ]},
  ]},

  // ── Week 6 ─────────────────────────────
  { week:6, date:'28 Feb-1 Mar 2026', done:true, matches:[
    { home:'CAPITAL TENNIS CLUB (LMTA-B)', score:'2-1', away:'KGR - C', venue:'',
      courts:[
        { ct:1, home:'Bharathkumar gopalan / AKSHAY B S', away:'BALAMUTHU / MANI PALANISWAMY', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'ABHISHEK B S / AMITHA SRI SIVA', away:'ANAND R / GNANAPRAKASAM F', sets:'2-6, 2-6', win:'away' },
        { ct:3, home:'Anand Kumar / Mohammed Hidhayath', away:'SENDHILKUMAR S / MANIKANDAN R', sets:'6-0, 7-5', win:'home' },
      ]},
    { home:'PSG - B', score:'3-0', away:'LEVO SPORTS-D', venue:'',
      courts:[
        { ct:1, home:'SHYAM / NIRMAL KUMAR K', away:'Sivaram / Sivaranjan', sets:'7-6, 6-2', win:'home' },
        { ct:2, home:'Joha / Dr. Surenthiran', away:'Veera Kairav / Ramamurthi Nadarajan', sets:'6-1, 6-0', win:'home' },
        { ct:3, home:'Deepak / Karthikeyan', away:'Rithul S / Krishna', sets:'6-2, 6-3', win:'home' },
      ]},
    { home:'Raks DK Courts', score:'3-0', away:'GST - B', venue:'',
      courts:[
        { ct:1, home:'Guganvarma. M / MITUN C', away:'Kashinathan.M / VENKATESH A', sets:'6-2, 6-2', win:'home' },
        { ct:2, home:'ACHINTHYA / ADHISH PM', away:'KARTHIKEYAN / VIMALESH', sets:'6-2, 6-1', win:'home' },
        { ct:3, home:'KABILAYAYATI C / Jayaprakash Govindharaj', away:'PRADEEP JERRY / J.Ganesh', sets:'6-0, 6-1', win:'home' },
      ]},
    { home:'TENNIGLO - C', score:'2-1', away:'URC', venue:'',
      courts:[
        { ct:1, home:'T S Prabhu / Balamurugan K', away:'DURAIPANDIAN ARUMUGAM / RAJKUMAR S', sets:'3-6, 5-7', win:'away' },
        { ct:2, home:'Thirumurugan S / N Shanmugam', away:'JAYAPRAKASH / PANNERSELVAM R', sets:'7-5, 5-7, 10-8', win:'home' },
        { ct:3, home:'Sivaramakrishnan N / Bishak Muthukumar', away:'THIRUNAVAKARASU / Ajay Shankar B.R', sets:'7-5, 6-0', win:'home' },
      ]},
    { home:'TOP SPIN B', score:'3-0', away:'CMTA - E', venue:'',
      courts:[
        { ct:1, home:'saravanan / SENTHILKUMAR A', away:'VISWAK / JEEVAGAN RAJENDRAN', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'Rajkumar / Ramasubramaniam', away:'FAYAZ / KARTHICKPRABHU R', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'SUDHAKAR S / Jawahar  Harinarayanan', away:'DHARSHAN / NAMAM', sets:'6-0, 6-0', win:'home' },
      ]},
  ]},

  // ── Week 7 ─────────────────────────────
  { week:7, date:'7 Mar 2026', done:true, matches:[
    { home:'PSG - B', score:'2-1', away:'Blue Mountain Tennis', venue:'',
      courts:[
        { ct:1, home:'SHYAM / NIRMAL KUMAR K', away:'PARAS SADHOTRA / RAMKUMAR S', sets:'6-7, 6-3, 10-4', win:'home' },
        { ct:2, home:'Deepak / Karthikeyan', away:'NIKHIL SURESH / VARSHA SAROJNI P M', sets:'3-6, 1-6', win:'away' },
        { ct:3, home:'Rangaraj. KJ / Dr. Surenthiran', away:'MOHAMMED SHARIFF / YADUSH BOSE', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'URC', score:'2-1', away:'KGR - C', venue:'',
      courts:[
        { ct:1, home:'JAYAPRAKASH / Ajay Shankar B.R', away:'ANAND R / GNANAPRAKASAM F', sets:'1-6, 0-6', win:'away' },
        { ct:2, home:'DURAIPANDIAN ARUMUGAM / RAJKUMAR N', away:'Dr GANESAN A / MANIKANDAN R', sets:'6-2, 6-2', win:'home' },
        { ct:3, home:'PANNERSELVAM R / Ramaraj D', away:'SRIRAM MAHALINGAM A S / BALAMUTHU', sets:'6-0, 6-7, 10-2', win:'home' },
      ]},
    { home:'GST - B', score:'2-1', away:'CMTA - E', venue:'',
      courts:[
        { ct:1, home:'VENKATESH A / VIMALESH', away:'KARTHICKPRABHU R / FAYAZ', sets:'6-1, 6-0', win:'home' },
        { ct:2, home:'J.Ganesh / Kashinathan.M', away:'VIDUR / VRISHIN M', sets:'6-2, 6-2', win:'home' },
        { ct:3, home:'KARTHIKEYAN / Thulasi Dass', away:'JEEVAGAN RAJENDRAN / LOGESH R', sets:'4-6, 6-7', win:'away' },
      ]},
    { home:'Raks DK Courts', score:'3-0', away:'CAPITAL TENNIS CLUB (LMTA-B)', venue:'',
      courts:[
        { ct:1, home:'Guganvarma. M / ACHINTHYA', away:'Bharathkumar gopalan / Riyas sheriff', sets:'6-0, 6-4', win:'home' },
        { ct:2, home:'Jayaprakash Govindharaj / KABILAYAYATI C', away:'Anand Kumar / Mohammed Hidhayath', sets:'6-0, 6-3', win:'home' },
        { ct:3, home:'ADHISH PM / KULANTHAI YESU', away:'AMITHA SRI SIVA / AKSHAY B S', sets:'6-2, 6-3', win:'home' },
      ]},
    { home:'TOP SPIN B', score:'3-0', away:'LEVO SPORTS-D', venue:'',
      courts:[
        { ct:1, home:'SENTHILKUMAR A / saravanan', away:'Sivaram / Krishna', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'NANDAKUMAR K / Jawahar  Harinarayanan', away:'Ramamurthi Nadarajan / Devaraj', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Ramasubramaniam / A P Vishwanath', away:'Sivaranjan / Rithul S', sets:'6-4, 6-1', win:'home' },
      ]},
  ]},

  // ── Week 8 ─────────────────────────────
  { week:8, date:'14 Mar 2026', done:true, matches:[
    { home:'TENNIGLO - C', score:'2-1', away:'TOP SPIN B', venue:'',
      courts:[
        { ct:1, home:'Thirumurugan S / Raja Vignesh M', away:'SUDHAKAR S / saravanan', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'Umapathi P / Sivaramakrishnan N', away:'Rajkumar / SENTHILKUMAR A', sets:'1-6, 5-7', win:'away' },
        { ct:3, home:'T S Prabhu / Bishak Muthukumar', away:'Ramasubramaniam / Jawahar  Harinarayanan', sets:'7-5, 4-6, 10-8', win:'home' },
      ]},
    { home:'Blue Mountain Tennis', score:'2-1', away:'KGR - C', venue:'',
      courts:[
        { ct:1, home:'SHIVKARAN / NIKHIL SURESH', away:'GNANAPRAKASAM F / ANAND R', sets:'4-6, 5-7', win:'away' },
        { ct:2, home:'YADUSH BOSE / PARAS SADHOTRA', away:'ROBERT / MANIKANDAN R', sets:'6-4, 6-2', win:'home' },
        { ct:3, home:'ANAND MUKESH / RAMKUMAR S', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'URC', score:'2-1', away:'CAPITAL TENNIS CLUB (LMTA-B)', venue:'',
      courts:[
        { ct:1, home:'Ajay Shankar B.R / PANNERSELVAM R', away:'Bharathkumar gopalan / AKSHAY B S', sets:'0-6, 0-6', win:'away' },
        { ct:2, home:'JAYAPRAKASH / RAJKUMAR N', away:'Riyas sheriff / Mohammed Hidhayath', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'DURAIPANDIAN ARUMUGAM / RAJKUMAR S', away:'Anand Kumar / Dineshkumar', sets:'6-2, 6-0', win:'home' },
      ]},
    { home:'PSG - B', score:'2-1', away:'CMTA - E', venue:'',
      courts:[
        { ct:1, home:'SHYAM / NIRMAL KUMAR K', away:'FAYAZ / VISWAK', sets:'6-2, 6-0', win:'home' },
        { ct:2, home:'Dr. Surenthiran / Raj Kumar', away:'NAVANEETHAN / DHARSHAN', sets:'6-1, 7-5', win:'home' },
        { ct:3, home:'Mahesh / Karthikeyan', away:'LOGESH R / JEEVAGAN RAJENDRAN', sets:'6-7, 2-6', win:'away' },
      ]},
    { home:'Raks DK Courts', score:'3-0', away:'LEVO SPORTS-D', venue:'',
      courts:[
        { ct:1, home:'ADHISH PM / ACHINTHYA', away:'Sivaranjan / Rithul S', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Jayaprakash Govindharaj / KABILAYAYATI C', away:'Sujith / Devaraj', sets:'6-2, 6-2', win:'home' },
        { ct:3, home:'Guganvarma. M / MITUN C', away:'Veera Kairav / Krishna', sets:'6-1, 6-1', win:'home' },
      ]},
  ]},

  // ── Week 9 ─────────────────────────────
  { week:9, date:'21 Mar 2026', done:true, matches:[
    { home:'Blue Mountain Tennis', score:'2-1', away:'CAPITAL TENNIS CLUB (LMTA-B)', venue:'',
      courts:[
        { ct:1, home:'RAMKUMAR S / YADUSH BOSE', away:'Bharathkumar gopalan / Anand Kumar', sets:'3-6, 4-6', win:'away' },
        { ct:2, home:'NIKHIL SURESH / ANAND MUKESH', away:'Riyas sheriff / Dineshkumar', sets:'6-1, 6-3', win:'home' },
        { ct:3, home:'VARSHA SAROJNI P M / PARAS SADHOTRA', away:'AKSHAY B S / ABHISHEK B S', sets:'6-2, 6-3', win:'home' },
      ]},
    { home:'KGR - C', score:'2-1', away:'CMTA - E', venue:'',
      courts:[
        { ct:1, home:'SRIRAM MAHALINGAM A S / BALAMUTHU', away:'NAMAM / VIDUR', sets:'6-0, 6-2', win:'home' },
        { ct:2, home:'ANAND R / GNANAPRAKASAM F', away:'JEEVAGAN RAJENDRAN / LOGESH R', sets:'6-2, 6-2', win:'home' },
        { ct:3, home:'ROBERT / MOHAMMED HARRIS M', away:'DHARSHAN / NAVANEETHAN', sets:'7-5, 5-7, 5-10', win:'away' },
      ]},
    { home:'Raks DK Courts', score:'2-1', away:'TOP SPIN B', venue:'',
      courts:[
        { ct:1, home:'Jayaprakash Govindharaj / KABILAYAYATI C', away:'Jawahar  Harinarayanan / Rajkumar', sets:'6-7, 6-4, 10-8', win:'home' },
        { ct:2, home:'ACHINTHYA / ADHISH PM', away:'SUDHAKAR S / A P Vishwanath', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'MAHAKRITHI / SAMEEHA M', away:'NANDAKUMAR K / Venkat Annamalai Annamalai', sets:'3-6, 1-6', win:'away' },
      ]},
    { home:'LEVO SPORTS-D', score:'2-1', away:'URC', venue:'',
      courts:[
        { ct:1, home:'Thanvanth / Dhruv', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Sivaranjan / Veera Kairav', away:'DURAIPANDIAN ARUMUGAM / RAJKUMAR S', sets:'4-6, 6-3, 8-10', win:'away' },
        { ct:3, home:'Sivaram / Krishna', away:'Ajay Shankar B.R / PANNERSELVAM R', sets:'7-5, 2-6, 10-8', win:'home' },
      ]},
    { home:'TENNIGLO - C', score:'3-0', away:'GST - B', venue:'',
      courts:[
        { ct:1, home:'Thirumurugan S / Sivaramakrishnan N', away:'VENKATESH A / KARTHIKEYAN', sets:'6-1, 6-4', win:'home' },
        { ct:2, home:'Umapathi P / N Shanmugam', away:'PRADEEP JERRY / Kashinathan.M', sets:'6-3, 6-3', win:'home' },
        { ct:3, home:'T S Prabhu / Bishak Muthukumar', away:'J.Ganesh / SENTHIL', sets:'6-3, 6-3', win:'home' },
      ]},
  ]},

  // ── Week 10 ─────────────────────────────
  { week:10, date:'28 Mar 2026', done:true, matches:[
    { home:'Raks DK Courts', score:'2-1', away:'PSG - B', venue:'',
      courts:[
        { ct:1, home:'Guganvarma. M / ACHINTHYA', away:'SHYAM / NIRMAL KUMAR K', sets:'6-3, 6-3', win:'home' },
        { ct:2, home:'KABILAYAYATI C / MITUN C', away:'Dr. Surenthiran / Karthikeyan', sets:'4-6, 6-2, 5-10', win:'away' },
        { ct:3, home:'Jayaprakash Govindharaj / KULANTHAI YESU', away:'Joha / Raj Kumar', sets:'6-1, 6-3', win:'home' },
      ]},
    { home:'Blue Mountain Tennis', score:'2-1', away:'TENNIGLO - C', venue:'',
      courts:[
        { ct:1, home:'VARSHA SAROJNI P M / NIKHIL SURESH', away:'Bishak Muthukumar / T S Prabhu', sets:'6-2, 6-4', win:'home' },
        { ct:2, home:'YADUSH BOSE / ANAND MUKESH', away:'N Shanmugam / Raja Vignesh M', sets:'6-2, 6-4', win:'home' },
        { ct:3, home:'PRAVEEN BARDIA / RAMKUMAR S', away:'Thirumurugan S / Sivaramakrishnan N', sets:'6-7, 4-6', win:'away' },
      ]},
    { home:'CAPITAL TENNIS CLUB (LMTA-B)', score:'2-1', away:'TOP SPIN B', venue:'',
      courts:[
        { ct:1, home:'Dineshkumar / Princejabez', away:'saravanan / Jawahar  Harinarayanan', sets:'0-6, 0-6', win:'away' },
        { ct:2, home:'AKSHAY B S / AMITHA SRI SIVA', away:'SENTHILKUMAR A / Rajkumar', sets:'4-6, 6-4, 10-7', win:'home' },
        { ct:3, home:'Bharathkumar gopalan / ABHISHEK B S', away:'Venkat Annamalai Annamalai / A P Vishwanath', sets:'3-6, 6-3, 10-4', win:'home' },
      ]},
    { home:'LEVO SPORTS-D', score:'2-1', away:'KGR - C', venue:'',
      courts:[
        { ct:1, home:'Sivaranjan / Rithul S', away:'GNANAPRAKASAM F / ANAND R', sets:'2-6, 1-6', win:'away' },
        { ct:2, home:'Sivaram / Krishna', away:'ROBERT / ARUMUGAM K K', sets:'6-2, 6-3', win:'home' },
        { ct:3, home:'Sujith / Veera Kairav', away:'SENDHILKUMAR S / MANIKANDAN R', sets:'1-6, 6-2, 10-3', win:'home' },
      ]},
    { home:'GST - B', score:'3-0', away:'URC', venue:'',
      courts:[
        { ct:1, home:'VENKATESH A / Kashinathan.M', away:'Ajay Shankar B.R / PANNERSELVAM R', sets:'6-0, 6-4', win:'home' },
        { ct:2, home:'KARTHIKEYAN / VIMALESH', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'TamilZhanban K / SENTHIL', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
  ]},

  // ── Week 11 ─────────────────────────────
  { week:11, date:'4 Apr 2026', done:true, matches:[
    { home:'PSG - B', score:'2-1', away:'KGR - C', venue:'',
      courts:[
        { ct:1, home:'SHYAM / NIRMAL KUMAR K', away:'ROBERT / MANIKANDAN R', sets:'7-5, 6-3', win:'home' },
        { ct:2, home:'Karthikeyan / Deepak', away:'SRIRAM MAHALINGAM A S / ARUMUGAM K K', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'Rangaraj. KJ / Joha', away:'ANAND R / GNANAPRAKASAM F', sets:'2-6, 0-6', win:'away' },
      ]},
    { home:'TOP SPIN B', score:'2-1', away:'Blue Mountain Tennis', venue:'',
      courts:[
        { ct:1, home:'saravanan / SENTHILKUMAR A', away:'PRAVEEN BARDIA / ANAND MUKESH', sets:'6-7, 7-5, 11-9', win:'home' },
        { ct:2, home:'SUDHAKAR S / A P Vishwanath', away:'RAMKUMAR S / SATHISH KUMAR L', sets:'1-6, 1-6', win:'away' },
        { ct:3, home:'Ramasubramaniam / Jawahar  Harinarayanan', away:'NIKHIL SURESH / VARSHA SAROJNI P M', sets:'6-4, 4-6, 10-4', win:'home' },
      ]},
    { home:'URC', score:'2-1', away:'CMTA - E', venue:'',
      courts:[
        { ct:1, home:'DURAIPANDIAN ARUMUGAM / RAJKUMAR N', away:'KARTHICKPRABHU R / FAYAZ', sets:'6-3, 6-4', win:'home' },
        { ct:2, home:'Ajay Shankar B.R / PANNERSELVAM R', away:'VIDUR / NAVANEETHAN', sets:'6-2, 6-4', win:'home' },
        { ct:3, home:'THIRUNAVAKARASU / Rithik Rokin B S', away:'VISWAK / LOGESH R', sets:'2-6, 4-6', win:'away' },
      ]},
    { home:'TENNIGLO - C', score:'2-1', away:'LEVO SPORTS-D', venue:'',
      courts:[
        { ct:1, home:'Balamurugan K / Bishak Muthukumar', away:'Sivaranjan / Krishna', sets:'4-6, 5-7', win:'away' },
        { ct:2, home:'N Shanmugam / Umapathi P', away:'Sujith / Thanvanth', sets:'6-2, 6-0', win:'home' },
        { ct:3, home:'Thirumurugan S / Raja Vignesh M', away:'Rithul S / Veera Kairav', sets:'6-1, 7-6', win:'home' },
      ]},
    { home:'CAPITAL TENNIS CLUB (LMTA-B)', score:'2-1', away:'GST - B', venue:'',
      courts:[
        { ct:1, home:'AKSHAY B S / ABHISHEK B S', away:'Kashinathan.M / SENTHIL', sets:'0-0, 0-0', win:'home' },
        { ct:2, home:'Dineshkumar / Princejabez', away:'PRADEEP JERRY / VENKATESH A', sets:'0-6, 1-6', win:'away' },
        { ct:3, home:'Bharathkumar gopalan / Anand Kumar', away:'VIMALESH / TamilZhanban K', sets:'6-3, 6-3', win:'home' },
      ]},
  ]},
];
