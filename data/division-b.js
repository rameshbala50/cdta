// ============================================================
// DIVISION B — CDTA 2026
// ============================================================

const DIV_B_TEAMS = [
  { short:'CMTA-A', full:'CMTA - A', captain:'Syed Ibrahim A.', mobile:'', players:11, club:'CMTA', surface:'', division:'B' },
  { short:'ANN-A', full:'ANNUR CLUB - A', captain:'RAJASEKAR A', mobile:'', players:9, club:'Annur Club', surface:'', division:'B' },
  { short:'CCTA-B', full:'CCTA - B', captain:'PREM PRAKASH', mobile:'', players:13, club:'CCTA', surface:'', division:'B' },
  { short:'TS-A', full:'TOP SPIN - A', captain:'SUDARSHAN K N', mobile:'', players:9, club:'Top Spin', surface:'', division:'B' },
  { short:'COS-D', full:'COSMO - D', captain:'Balakumar', mobile:'', players:13, club:'Cosmo', surface:'', division:'B' },
  { short:'SKY', full:'SKY HIGH TENNIS CLUB', captain:'ANNADURAI', mobile:'', players:11, club:'Sky High', surface:'', division:'B' },
  { short:'CBE-A', full:'CBE CLUB - A', captain:'CBE CLUB - A', mobile:'', players:12, club:'CBE Club', surface:'', division:'B' },
  { short:'CSA-A', full:'CS ACADEMY - A', captain:'Muthu Palanisamy', mobile:'', players:13, club:'CS Academy', surface:'', division:'B' },
  { short:'LEVO-B', full:'LEVO SPORTS-B', captain:'Ajith kumar S', mobile:'', players:14, club:'Levo Sports', surface:'', division:'B' },
  { short:'RSP-B', full:'RS PURAM - B', captain:'SATHYANARAYANAN', mobile:'', players:14, club:'RS Puram', surface:'', division:'B' },
  { short:'TGLO-A', full:'TENNIGLO - A', captain:'NANTHAKUMAR', mobile:'', players:8, club:'Tenniglo', surface:'', division:'B' },
];

const DIV_B_STANDINGS = [
  { rank:1, short:'CMTA-A', full:'CMTA - A', pts:21, played:30, setsW:45, setsL:24, gamesW:306, gamesL:237 },
  { rank:2, short:'ANN-A', full:'ANNUR CLUB - A', pts:19, played:30, setsW:40, setsL:23, gamesW:275, gamesL:213 },
  { rank:3, short:'CCTA-B', full:'CCTA - B', pts:16, played:30, setsW:39, setsL:30, gamesW:297, gamesL:260 },
  { rank:4, short:'TS-A', full:'TOP SPIN - A', pts:15, played:30, setsW:32, setsL:34, gamesW:274, gamesL:272 },
  { rank:5, short:'COS-D', full:'COSMO - D', pts:15, played:30, setsW:35, setsL:33, gamesW:252, gamesL:260 },
  { rank:6, short:'SKY', full:'SKY HIGH TENNIS CLUB', pts:14, played:30, setsW:30, setsL:33, gamesW:260, gamesL:272 },
  { rank:7, short:'CBE-A', full:'CBE CLUB - A', pts:14, played:30, setsW:31, setsL:36, gamesW:239, gamesL:275 },
  { rank:8, short:'CSA-A', full:'CS ACADEMY - A', pts:14, played:30, setsW:28, setsL:36, gamesW:259, gamesL:286 },
  { rank:9, short:'LEVO-B', full:'LEVO SPORTS-B', pts:13, played:30, setsW:31, setsL:37, gamesW:274, gamesL:272 },
  { rank:10, short:'RSP-B', full:'RS PURAM - B', pts:13, played:30, setsW:27, setsL:35, gamesW:240, gamesL:278 },
  { rank:11, short:'TGLO-A', full:'TENNIGLO - A', pts:11, played:30, setsW:25, setsL:42, gamesW:246, gamesL:297 },
];

const DIV_B_PLAYERS = [
  // CMTA - A
  { name:'Syed Ibrahim A.', team:'CMTA-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-b/cmta-a/syed-ibrahim-a.jpg' },
  { name:'Harish Desu', team:'CMTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cmta-a/harish-desu.jpg' },
  { name:'Senthilkumar Selvaraj', team:'CMTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cmta-a/senthilkumar-selvaraj.jpg' },
  { name:'BALASURYA', team:'CMTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cmta-a/balasurya.jpg' },
  { name:'Natarajan', team:'CMTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cmta-a/natarajan.jpg' },
  { name:'Vishnu V Raj', team:'CMTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cmta-a/vishnu-v-raj.jpg' },
  { name:'Gowtham S.', team:'CMTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cmta-a/gowtham-s.jpg' },
  { name:'BALASUBRAMANIAN N', team:'CMTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cmta-a/balasubramanian-n.jpeg' },
  { name:'RAM ROCHAN', team:'CMTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cmta-a/ram-rochan.jpeg' },
  { name:'Nithin Vijay P S', team:'CMTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cmta-a/nithin-vijay-p-s.jpeg' },
  { name:'Jovan Danraj', team:'CMTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cmta-a/jovan-danraj.jpg' },

  // ANNUR CLUB - A
  { name:'RAJASEKAR A', team:'ANN-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-b/ann-a/rajasekar-a.jpg' },
  { name:'P Karthikeyan', team:'ANN-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ann-a/p-karthikeyan.jpg' },
  { name:'KIRUTHIK KALYAN AS', team:'ANN-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ann-a/kiruthik-kalyan-as.jpg' },
  { name:'SANJEEV P V', team:'ANN-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ann-a/sanjeev-p-v.jpeg' },
  { name:'ROHITH ROYER', team:'ANN-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ann-a/rohith-royer.jpeg' },
  { name:'AKILESH P', team:'ANN-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ann-a/akilesh-p.jpeg' },
  { name:'ARJUN U', team:'ANN-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ann-a/arjun-u.jpeg' },
  { name:'RAVICHANDRAN', team:'ANN-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ann-a/ravichandran.jpeg' },
  { name:'VENKATACHALAPATHI', team:'ANN-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ann-a/venkatachalapathi.jpeg' },

  // CCTA - B
  { name:'PREM PRAKASH', team:'CCTA-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-b/ccta-b/prem-prakash.jpg' },
  { name:'VIMAL L', team:'CCTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ccta-b/vimal-l.jpg' },
  { name:'VENGETESH', team:'CCTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ccta-b/vengetesh.jpg' },
  { name:'GANAPATHY RAJAN', team:'CCTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ccta-b/ganapathy-rajan.jpg' },
  { name:'HARI', team:'CCTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ccta-b/hari.jpg' },
  { name:'DINESH', team:'CCTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ccta-b/dinesh.jpg' },
  { name:'PRATAP BALAJI', team:'CCTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ccta-b/pratap-balaji.jpeg' },
  { name:'CHIDAMBARAM', team:'CCTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ccta-b/chidambaram.jpeg' },
  { name:'SRIJITH', team:'CCTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ccta-b/srijith.jpg' },
  { name:'Nihileshwar Ram', team:'CCTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ccta-b/nihileshwar-ram.jpg' },
  { name:'Niranjeshwara Ram', team:'CCTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ccta-b/niranjeshwara-ram.jpg' },
  { name:'RAKESHKUMAR', team:'CCTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ccta-b/rakeshkumar.jpg' },
  { name:'JONES ROHAN', team:'CCTA-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ccta-b/jones-rohan.jpeg' },

  // TOP SPIN - A
  { name:'SUDARSHAN K N', team:'TS-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-b/ts-a/sudarshan-k-n.jpg' },
  { name:'Ramasamy', team:'TS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ts-a/ramasamy.jpg' },
  { name:'Senthil kumar', team:'TS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ts-a/senthil-kumar.jpg' },
  { name:'MANIMARAN S', team:'TS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ts-a/manimaran-s.jpg' },
  { name:'Dr. IMMANUEL SUBASH', team:'TS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ts-a/dr-immanuel-subash.jpeg' },
  { name:'Sankarnarayanan R', team:'TS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ts-a/sankarnarayanan-r.jpg' },
  { name:'Balakrishnan alagarswamy', team:'TS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ts-a/balakrishnan-alagarswamy.jpg' },
  { name:'Dr . ARVINDKUMAR R', team:'TS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ts-a/dr-arvindkumar-r.jpg' },
  { name:'R Kanish', team:'TS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/ts-a/r-kanish.jpg' },

  // COSMO - D
  { name:'Balakumar', team:'COS-D', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-b/cos-d/balakumar.png' },
  { name:'M Sathish Kumar Nair', team:'COS-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cos-d/m-sathish-kumar-nair.jpg' },
  { name:'Murali Balakrishnan', team:'COS-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cos-d/murali-balakrishnan.jpg' },
  { name:'Sudesh Reddy', team:'COS-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cos-d/sudesh-reddy.jpg' },
  { name:'B S Kumaralakshman', team:'COS-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cos-d/b-s-kumaralakshman.jpg' },
  { name:'Namadevan', team:'COS-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cos-d/namadevan.jpg' },
  { name:'Dandoo Subramanian', team:'COS-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cos-d/dandoo-subramanian.jpeg' },
  { name:'CJ Vikram', team:'COS-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cos-d/cj-vikram.jpeg' },
  { name:'Adithya Devaraj', team:'COS-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cos-d/adithya-devaraj.jpeg' },
  { name:'Roshan Kumar R', team:'COS-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cos-d/roshan-kumar-r.jpeg' },
  { name:'Pranav Karthick', team:'COS-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cos-d/pranav-karthick.jpeg' },
  { name:'Vivekananth V', team:'COS-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cos-d/vivekananth-v.jpg' },
  { name:'Abhay Srinivash', team:'COS-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cos-d/abhay-srinivash.jpg' },

  // SKY HIGH TENNIS CLUB
  { name:'ANNADURAI', team:'SKY', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-b/sky/annadurai.jpg' },
  { name:'RAJESHWARAN', team:'SKY', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/sky/rajeshwaran.jpeg' },
  { name:'ELANGOVAN', team:'SKY', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/sky/elangovan.jpeg' },
  { name:'Rajaram K', team:'SKY', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/sky/rajaram-k.jpeg' },
  { name:'ELAN E', team:'SKY', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/sky/elan-e.jpeg' },
  { name:'SARANDEEPAK E', team:'SKY', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/sky/sarandeepak-e.jpeg' },
  { name:'Deepak Pradeep Kumar P', team:'SKY', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/sky/deepak-pradeep-kumar-p.jpg' },
  { name:'KRITHIK', team:'SKY', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/sky/krithik.jpg' },
  { name:'Hitha', team:'SKY', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/sky/hitha.jpg' },
  { name:'RAMANAN S', team:'SKY', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/sky/ramanan-s.jpg' },
  { name:'RAJANBAALU P A', team:'SKY', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/sky/rajanbaalu-p-a.jpeg' },

  // CBE CLUB - A
  { name:'CBE CLUB - A', team:'CBE-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-b/cbe-a/cbe-club-a.jpeg' },
  { name:'MEIYAPPAN R M', team:'CBE-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cbe-a/meiyappan-r-m.jpeg' },
  { name:'SIDDARTH SHANKAR', team:'CBE-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cbe-a/siddarth-shankar.jpeg' },
  { name:'VIJAY RAJENDRA', team:'CBE-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cbe-a/vijay-rajendra.jpeg' },
  { name:'VEERA ANISH', team:'CBE-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cbe-a/veera-anish.jpg' },
  { name:'RAVEENDRAN C R', team:'CBE-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cbe-a/raveendran-c-r.jpg' },
  { name:'VIVEK J KHONA', team:'CBE-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cbe-a/vivek-j-khona.jpg' },
  { name:'RAMESH KUMAR', team:'CBE-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cbe-a/ramesh-kumar.jpg' },
  { name:'VISHNU CHARAN', team:'CBE-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cbe-a/vishnu-charan.jpg' },
  { name:'BALAJI JAGADEESAN', team:'CBE-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cbe-a/balaji-jagadeesan.jpg' },
  { name:'DEEPAK GUPTA', team:'CBE-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cbe-a/deepak-gupta.jpg' },
  { name:'SHRINIVAS GK', team:'CBE-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/cbe-a/shrinivas-gk.jpeg' },

  // CS ACADEMY - A
  { name:'Muthu Palanisamy', team:'CSA-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-b/csa-a/muthu-palanisamy.jpg' },
  { name:'RISHI VANDHAN', team:'CSA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/csa-a/rishi-vandhan.jpg' },
  { name:'SHIV SUNDER MK', team:'CSA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/csa-a/shiv-sunder-mk.jpg' },
  { name:'PRABHAKARAN', team:'CSA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/csa-a/prabhakaran.jpeg' },
  { name:'KARTHIKEYAN S', team:'CSA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/csa-a/karthikeyan-s.jpg' },
  { name:'ABHAY DWARAKNATH', team:'CSA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/csa-a/abhay-dwaraknath.jpeg' },
  { name:'AARAV V JAIN', team:'CSA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/csa-a/aarav-v-jain.jpeg' },
  { name:'DHEV ADVAITH SENTHIL', team:'CSA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/csa-a/dhev-advaith-senthil.jpg' },
  { name:'MUTHU NARAIN', team:'CSA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/csa-a/muthu-narain.jpeg' },
  { name:'Ragavendhara S', team:'CSA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/csa-a/ragavendhara-s.jpeg' },
  { name:'TANYA KARTHIK', team:'CSA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/csa-a/tanya-karthik.jpeg' },
  { name:'RANA JAI PARVATHAM', team:'CSA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/csa-a/rana-jai-parvatham.jpeg' },
  { name:'VISHWESH KARTHIKEYAN', team:'CSA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/csa-a/vishwesh-karthikeyan.jpeg' },

  // LEVO SPORTS-B
  { name:'Ajith kumar S', team:'LEVO-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/ajith-kumar-s.jpg' },
  { name:'Ponnusamy', team:'LEVO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/ponnusamy.jpg' },
  { name:'Fedelish J', team:'LEVO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/fedelish-j.jpg' },
  { name:'Amarnath M S', team:'LEVO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/amarnath-m-s.jpg' },
  { name:'Natesh Kumar Murugesan', team:'LEVO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/natesh-kumar-murugesan.jpg' },
  { name:'Srinivasan', team:'LEVO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/srinivasan.jpg' },
  { name:'Prativ V M', team:'LEVO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/prativ-v-m.jpg' },
  { name:'Aarish D S', team:'LEVO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/aarish-d-s.jpg' },
  { name:'P Karthikeyan', team:'LEVO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/p-karthikeyan.jpg' },
  { name:'Karthik Elango', team:'LEVO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/karthik-elango.jpg' },
  { name:'Aadarsh', team:'LEVO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/aadarsh.jpg' },
  { name:'Sakthi Ashwin', team:'LEVO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/sakthi-ashwin.jpg' },
  { name:'akshay ram s', team:'LEVO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/akshay-ram-s.jpeg' },
  { name:'Stephenraj A', team:'LEVO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/levo-b/stephenraj-a.jpg' },

  // RS PURAM - B
  { name:'SATHYANARAYANAN', team:'RSP-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/sathyanarayanan.png' },
  { name:'Bhishmaram', team:'RSP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/bhishmaram.jpg' },
  { name:'AVARKAN ANTONY', team:'RSP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/avarkan-antony.jpeg' },
  { name:'Sukavaneshwar', team:'RSP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/sukavaneshwar.jpg' },
  { name:'Mihir Modi', team:'RSP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/mihir-modi.jpeg' },
  { name:'AMBALAVANAN', team:'RSP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/ambalavanan.jpg' },
  { name:'L VAIRAVAN', team:'RSP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/l-vairavan.jpg' },
  { name:'Saravanan Raman', team:'RSP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/saravanan-raman.jpeg' },
  { name:'KARTHIC KUMARAN', team:'RSP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/karthic-kumaran.jpg' },
  { name:'K RAMARATINAM', team:'RSP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/k-ramaratinam.jpeg' },
  { name:'AYAAN MATHEWS', team:'RSP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/ayaan-mathews.jpeg' },
  { name:'RAVI GOPALAKRISHNAN', team:'RSP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/ravi-gopalakrishnan.jpeg' },
  { name:'Madhusudana', team:'RSP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/madhusudana.jpeg' },
  { name:'RAJESH THOMAS', team:'RSP-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/rsp-b/rajesh-thomas.jpeg' },

  // TENNIGLO - A
  { name:'NANTHAKUMAR', team:'TGLO-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-b/tglo-a/nanthakumar.jpeg' },
  { name:'Sarathkumar S', team:'TGLO-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/tglo-a/sarathkumar-s.jpeg' },
  { name:'Vishnu Praveen S', team:'TGLO-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/tglo-a/vishnu-praveen-s.jpeg' },
  { name:'Balamurugan G', team:'TGLO-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/tglo-a/balamurugan-g.jpeg' },
  { name:'Dinesh G', team:'TGLO-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/tglo-a/dinesh-g.jpeg' },
  { name:'Ashok Bheem Rao', team:'TGLO-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/tglo-a/ashok-bheem-rao.jpeg' },
  { name:'Poonguzhali Balamurugan', team:'TGLO-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/tglo-a/poonguzhali-balamurugan.jpeg' },
  { name:'Yogin S Prakash', team:'TGLO-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-b/tglo-a/yogin-s-prakash.jpg' },
];

const DIV_B_SCHEDULE = [
  // -- Week 1 ---------------------------------
  { week:1, date:'24 Jan 2026', done:true, matches:[
    { home:'LEVO SPORTS-B', score:'2-1', away:'RS PURAM - B', venue:'',
      courts:[
        { ct:1, home:'Fedelish J / P Karthikeyan', away:'Bhishmaram / Madhusudana', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Aadarsh / Sakthi Ashwin', away:'Mihir Modi / Sukavaneshwar', sets:'6-3, 6-1', win:'home' },
        { ct:3, home:'Stephenraj A / akshay ram s', away:'AVARKAN ANTONY / SATHYANARAYANAN', sets:'4-6, 6-7', win:'away' },
      ]},
    { home:'CMTA - A', score:'3-0', away:'CCTA - B', venue:'',
      courts:[
        { ct:1, home:'BALASUBRAMANIAN N / Senthilkumar Selvaraj', away:'JONES ROHAN / GANAPATHY RAJAN', sets:'6-4, 6-4', win:'home' },
        { ct:2, home:'BALASURYA / Natarajan', away:'HARI / Niranjeshwara Ram', sets:'6-3, 6-7, 10-3', win:'home' },
        { ct:3, home:'Harish Desu / RAM ROCHAN', away:'RAKESHKUMAR / VENGETESH', sets:'5-7, 6-1, 10-8', win:'home' },
      ]},
    { home:'TOP SPIN - A', score:'2-1', away:'COSMO - D', venue:'',
      courts:[
        { ct:1, home:'SUDARSHAN K N / Dr. IMMANUEL SUBASH', away:'Abhay Srinivash / Sudesh Reddy', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'Balakrishnan alagarswamy / Senthil kumar', away:'Dandoo Subramanian / B S Kumaralakshman', sets:'6-3, 2-6, 10-6', win:'home' },
        { ct:3, home:'Sankarnarayanan R / Ramasamy', away:'CJ Vikram / Vivekananth V', sets:'3-6, 4-6', win:'away' },
      ]},
    { home:'CS ACADEMY - A', score:'2-1', away:'TENNIGLO - A', venue:'',
      courts:[
        { ct:1, home:'RISHI VANDHAN / Muthu Palanisamy', away:'Yogin S Prakash / Sarathkumar S', sets:'4-6, 7-6, 10-5', win:'home' },
        { ct:2, home:'ABHAY DWARAKNATH / MUTHU NARAIN', away:'Balamurugan G / Dinesh G', sets:'5-7, 4-6', win:'away' },
        { ct:3, home:'DHEV ADVAITH SENTHIL / KARTHIKEYAN S', away:'NANTHAKUMAR / Vishnu Praveen S', sets:'6-4, 6-4', win:'home' },
      ]},
    { home:'CBE CLUB - A', score:'2-1', away:'ANNUR CLUB - A', venue:'',
      courts:[
        { ct:1, home:'MEIYAPPAN R M / RAMESH KUMAR', away:'P Karthikeyan / AKILESH P', sets:'6-2, 2-6, 10-6', win:'home' },
        { ct:2, home:'VIVEK J KHONA / VIJAY RAJENDRA', away:'SANJEEV P V / ARJUN U', sets:'4-6, 2-6', win:'away' },
        { ct:3, home:'VISHNU CHARAN / VEERA ANISH', away:'RAVICHANDRAN / VENKATACHALAPATHI', sets:'6-0, 6-0', win:'home' },
      ]},
  ]},

  // -- Week 2 ---------------------------------
  { week:2, date:'31 Jan 2026', done:true, matches:[
    { home:'RS PURAM - B', score:'2-1', away:'SKY HIGH TENNIS CLUB', venue:'',
      courts:[
        { ct:1, home:'AVARKAN ANTONY / RAJESH THOMAS', away:'ELAN E / SARANDEEPAK E', sets:'7-6, 7-6', win:'home' },
        { ct:2, home:'Mihir Modi / Sukavaneshwar', away:'KRITHIK / RAMANAN S', sets:'4-6, 3-6', win:'away' },
        { ct:3, home:'Bhishmaram / RAVI GOPALAKRISHNAN', away:'Hitha / ELANGOVAN', sets:'6-4, 6-3', win:'home' },
      ]},
    { home:'ANNUR CLUB - A', score:'2-1', away:'LEVO SPORTS-B', venue:'',
      courts:[
        { ct:1, home:'P Karthikeyan / RAJASEKAR A', away:'Stephenraj A / Srinivasan', sets:'4-6, 6-7', win:'away' },
        { ct:2, home:'KIRUTHIK KALYAN AS / ROHITH ROYER', away:'Fedelish J / Sakthi Ashwin', sets:'6-0, 6-1', win:'home' },
        { ct:3, home:'AKILESH P / SANJEEV P V', away:'Aadarsh / Prativ V M', sets:'6-2, 6-4', win:'home' },
      ]},
    { home:'CMTA - A', score:'3-0', away:'CS ACADEMY - A', venue:'',
      courts:[
        { ct:1, home:'BALASUBRAMANIAN N / Senthilkumar Selvaraj', away:'KARTHIKEYAN S / MUTHU NARAIN', sets:'6-4, 6-4', win:'home' },
        { ct:2, home:'Harish Desu / RAM ROCHAN', away:'ABHAY DWARAKNATH / Muthu Palanisamy', sets:'7-6, 6-2', win:'home' },
        { ct:3, home:'BALASURYA / Natarajan', away:'RISHI VANDHAN / DHEV ADVAITH SENTHIL', sets:'6-2, 6-3', win:'home' },
      ]},
    { home:'CBE CLUB - A', score:'2-1', away:'TOP SPIN - A', venue:'',
      courts:[
        { ct:1, home:'MEIYAPPAN R M / VEERA ANISH', away:'Balakrishnan alagarswamy / Senthil kumar', sets:'2-6, 6-4, 8-10', win:'away' },
        { ct:2, home:'VIJAY RAJENDRA / RAMESH KUMAR', away:'Ramasamy / Sankarnarayanan R', sets:'6-4, 6-3', win:'home' },
        { ct:3, home:'VIVEK J KHONA / SIDDARTH SHANKAR', away:'Dr. IMMANUEL SUBASH / SUDARSHAN K N', sets:'7-5, 3-6, 10-8', win:'home' },
      ]},
    { home:'COSMO - D', score:'2-1', away:'CCTA - B', venue:'',
      courts:[
        { ct:1, home:'Balakumar / Abhay Srinivash', away:'GANAPATHY RAJAN / Nihileshwar Ram', sets:'4-6, 6-4, 3-10', win:'away' },
        { ct:2, home:'B S Kumaralakshman / Pranav Karthick', away:'JONES ROHAN / HARI', sets:'3-6, 6-4, 10-6', win:'home' },
        { ct:3, home:'Vivekananth V / CJ Vikram', away:'Niranjeshwara Ram / CHIDAMBARAM', sets:'6-3, 6-2', win:'home' },
      ]},
  ]},

  // -- Week 3 ---------------------------------
  { week:3, date:'07 Feb 2026', done:true, matches:[
    { home:'CCTA - B', score:'2-1', away:'CBE CLUB - A', venue:'',
      courts:[
        { ct:1, home:'GANAPATHY RAJAN / HARI', away:'RAVEENDRAN C R / SIDDARTH SHANKAR', sets:'6-3, 6-1', win:'home' },
        { ct:2, home:'PREM PRAKASH / JONES ROHAN', away:'MEIYAPPAN R M / RAMESH KUMAR', sets:'7-5, 6-0', win:'home' },
        { ct:3, home:'VIMAL L / SRIJITH', away:'VIVEK J KHONA / VIJAY RAJENDRA', sets:'5-7, 6-4, 7-10', win:'away' },
      ]},
    { home:'LEVO SPORTS-B', score:'2-1', away:'TOP SPIN - A', venue:'',
      courts:[
        { ct:1, home:'Stephenraj A / Srinivasan', away:'SUDARSHAN K N / Dr. IMMANUEL SUBASH', sets:'2-6, 2-6', win:'away' },
        { ct:2, home:'Ajith kumar S / Amarnath M S', away:'MANIMARAN S / Ramasamy', sets:'6-2, 4-6, 10-2', win:'home' },
        { ct:3, home:'Prativ V M / Aadarsh', away:'Senthil kumar / Balakrishnan alagarswamy', sets:'6-4, 7-6', win:'home' },
      ]},
    { home:'CMTA - A', score:'2-1', away:'TENNIGLO - A', venue:'',
      courts:[
        { ct:1, home:'Natarajan / BALASURYA', away:'Sarathkumar S / Yogin S Prakash', sets:'0-6, 6-3, 5-10', win:'away' },
        { ct:2, home:'Harish Desu / RAM ROCHAN', away:'NANTHAKUMAR / Balamurugan G', sets:'6-0, 3-6, 10-4', win:'home' },
        { ct:3, home:'Syed Ibrahim A. / Senthilkumar Selvaraj', away:'Dinesh G / Ashok Bheem Rao', sets:'6-2, 6-3', win:'home' },
      ]},
    { home:'CS ACADEMY - A', score:'2-1', away:'COSMO - D', venue:'',
      courts:[
        { ct:1, home:'Muthu Palanisamy / RISHI VANDHAN', away:'CJ Vikram / Abhay Srinivash', sets:'6-0, 6-2', win:'home' },
        { ct:2, home:'Ragavendhara S / DHEV ADVAITH SENTHIL', away:'B S Kumaralakshman / Pranav Karthick', sets:'2-6, 4-6', win:'away' },
        { ct:3, home:'RANA JAI PARVATHAM / ABHAY DWARAKNATH', away:'Balakumar / Namadevan', sets:'4-6, 6-4, 11-9', win:'home' },
      ]},
    { home:'ANNUR CLUB - A', score:'3-0', away:'SKY HIGH TENNIS CLUB', venue:'',
      courts:[
        { ct:1, home:'SANJEEV P V / AKILESH P', away:'ELAN E / SARANDEEPAK E', sets:'6-3, 7-5', win:'home' },
        { ct:2, home:'P Karthikeyan / RAJASEKAR A', away:'Deepak Pradeep Kumar P / ELANGOVAN', sets:'5-7, 6-2, 10-7', win:'home' },
        { ct:3, home:'KIRUTHIK KALYAN AS / ROHITH ROYER', away:'KRITHIK / RAMANAN S', sets:'6-2, 6-0', win:'home' },
      ]},
  ]},

  // -- Week 4 ---------------------------------
  { week:4, date:'14 Feb 2026', done:true, matches:[
    { home:'ANNUR CLUB - A', score:'2-1', away:'TOP SPIN - A', venue:'',
      courts:[
        { ct:1, home:'KIRUTHIK KALYAN AS / ROHITH ROYER', away:'SUDARSHAN K N / Dr. IMMANUEL SUBASH', sets:'6-4, 6-2', win:'home' },
        { ct:2, home:'AKILESH P / SANJEEV P V', away:'Balakrishnan alagarswamy / R Kanish', sets:'6-4, 6-0', win:'home' },
        { ct:3, home:'P Karthikeyan / RAJASEKAR A', away:'Sankarnarayanan R / Senthil kumar', sets:'4-6, 3-6', win:'away' },
      ]},
    { home:'TENNIGLO - A', score:'2-1', away:'LEVO SPORTS-B', venue:'',
      courts:[
        { ct:1, home:'Yogin S Prakash / Sarathkumar S', away:'Stephenraj A / Fedelish J', sets:'6-2, 7-5', win:'home' },
        { ct:2, home:'NANTHAKUMAR / Balamurugan G', away:'Aadarsh / Prativ V M', sets:'7-6, 6-7, 10-6', win:'home' },
        { ct:3, home:'Dinesh G / Ashok Bheem Rao', away:'Ajith kumar S / Srinivasan', sets:'2-6, 4-6', win:'away' },
      ]},
    { home:'CS ACADEMY - A', score:'2-1', away:'SKY HIGH TENNIS CLUB', venue:'',
      courts:[
        { ct:1, home:'RISHI VANDHAN / Muthu Palanisamy', away:'RAMANAN S / ELAN E', sets:'6-4, 6-2', win:'home' },
        { ct:2, home:'DHEV ADVAITH SENTHIL / Ragavendhara S', away:'SARANDEEPAK E / KRITHIK', sets:'4-6, 3-6', win:'away' },
        { ct:3, home:'PRABHAKARAN / ABHAY DWARAKNATH', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'CMTA - A', score:'2-1', away:'CBE CLUB - A', venue:'',
      courts:[
        { ct:1, home:'BALASURYA / Natarajan', away:'VIJAY RAJENDRA / VIVEK J KHONA', sets:'6-4, 6-2', win:'home' },
        { ct:2, home:'Harish Desu / RAM ROCHAN', away:'VEERA ANISH / RAMESH KUMAR', sets:'5-7, 3-6', win:'away' },
        { ct:3, home:'Syed Ibrahim A. / Senthilkumar Selvaraj', away:'MEIYAPPAN R M / SHRINIVAS GK', sets:'6-7, 6-3, 10-8', win:'home' },
      ]},
    { home:'CCTA - B', score:'2-1', away:'RS PURAM - B', venue:'',
      courts:[
        { ct:1, home:'GANAPATHY RAJAN / HARI', away:'Mihir Modi / Sukavaneshwar', sets:'6-3, 6-4', win:'home' },
        { ct:2, home:'CHIDAMBARAM / VENGETESH', away:'Bhishmaram / Madhusudana', sets:'6-2, 6-2', win:'home' },
        { ct:3, home:'DINESH / PREM PRAKASH', away:'SATHYANARAYANAN / RAJESH THOMAS', sets:'5-7, 6-4, 7-10', win:'away' },
      ]},
  ]},

  // -- Week 5 ---------------------------------
  { week:5, date:'21 Feb 2026', done:true, matches:[
    { home:'CS ACADEMY - A', score:'2-1', away:'RS PURAM - B', venue:'',
      courts:[
        { ct:1, home:'DHEV ADVAITH SENTHIL / Ragavendhara S', away:'AVARKAN ANTONY / RAJESH THOMAS', sets:'6-3, 4-6, 11-9', win:'home' },
        { ct:2, home:'RANA JAI PARVATHAM / ABHAY DWARAKNATH', away:'SATHYANARAYANAN / Mihir Modi', sets:'1-6, 2-6', win:'away' },
        { ct:3, home:'Muthu Palanisamy / RISHI VANDHAN', away:'L VAIRAVAN / Saravanan Raman', sets:'6-0, 6-3', win:'home' },
      ]},
    { home:'CMTA - A', score:'3-0', away:'LEVO SPORTS-B', venue:'',
      courts:[
        { ct:1, home:'BALASURYA / Natarajan', away:'P Karthikeyan / Aarish D S', sets:'6-0, 6-2', win:'home' },
        { ct:2, home:'Harish Desu / Vishnu V Raj', away:'Aadarsh / Amarnath M S', sets:'6-4, 6-7, 10-4', win:'home' },
        { ct:3, home:'Senthilkumar Selvaraj / BALASUBRAMANIAN N', away:'Ponnusamy / Stephenraj A', sets:'7-6, 6-3', win:'home' },
      ]},
    { home:'CBE CLUB - A', score:'2-1', away:'COSMO - D', venue:'',
      courts:[
        { ct:1, home:'MEIYAPPAN R M / RAMESH KUMAR', away:'Vivekananth V / CJ Vikram', sets:'6-1, 5-7, 12-10', win:'home' },
        { ct:2, home:'VEERA ANISH / RAVEENDRAN C R', away:'Pranav Karthick / B S Kumaralakshman', sets:'3-6, 4-6', win:'away' },
        { ct:3, home:'VIJAY RAJENDRA / VIVEK J KHONA', away:'Balakumar / Abhay Srinivash', sets:'6-3, 6-4', win:'home' },
      ]},
    { home:'ANNUR CLUB - A', score:'2-1', away:'CCTA - B', venue:'',
      courts:[
        { ct:1, home:'RAVICHANDRAN / P Karthikeyan', away:'GANAPATHY RAJAN / HARI', sets:'2-6, 2-6', win:'away' },
        { ct:2, home:'RAJASEKAR A / AKILESH P', away:'PRATAP BALAJI / RAKESHKUMAR', sets:'7-6, 6-0', win:'home' },
        { ct:3, home:'KIRUTHIK KALYAN AS / ROHITH ROYER', away:'VENGETESH / DINESH', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'SKY HIGH TENNIS CLUB', score:'2-1', away:'TENNIGLO - A', venue:'',
      courts:[
        { ct:1, home:'ELAN E / RAMANAN S', away:'Vishnu Praveen S / Dinesh G', sets:'6-2, 6-3', win:'home' },
        { ct:2, home:'SARANDEEPAK E / KRITHIK', away:'NANTHAKUMAR / Balamurugan G', sets:'6-3, 6-4', win:'home' },
        { ct:3, home:'ELANGOVAN / ANNADURAI', away:'Sarathkumar S / Yogin S Prakash', sets:'2-6, 1-6', win:'away' },
      ]},
  ]},

  // -- Week 6 ---------------------------------
  { week:6, date:'28 Feb - 01 Mar 2026', done:true, matches:[
    { home:'COSMO - D', score:'2-1', away:'RS PURAM - B', venue:'',
      courts:[
        { ct:1, home:'M Sathish Kumar Nair / Balakumar', away:'L VAIRAVAN / Saravanan Raman', sets:'6-3, 6-4', win:'home' },
        { ct:2, home:'B S Kumaralakshman / Dandoo Subramanian', away:'SATHYANARAYANAN / AVARKAN ANTONY', sets:'5-7, 2-6', win:'away' },
        { ct:3, home:'Vivekananth V / Abhay Srinivash', away:'Bhishmaram / RAJESH THOMAS', sets:'6-4, 6-0', win:'home' },
      ]},
    { home:'CCTA - B', score:'2-1', away:'CS ACADEMY - A', venue:'',
      courts:[
        { ct:1, home:'VIMAL L / PREM PRAKASH', away:'Muthu Palanisamy / RISHI VANDHAN', sets:'4-6, 0-6', win:'away' },
        { ct:2, home:'HARI / PRATAP BALAJI', away:'ABHAY DWARAKNATH / RANA JAI PARVATHAM', sets:'6-3, 6-0', win:'home' },
        { ct:3, home:'GANAPATHY RAJAN / JONES ROHAN', away:'DHEV ADVAITH SENTHIL / Ragavendhara S', sets:'7-5, 7-6', win:'home' },
      ]},
    { home:'CMTA - A', score:'2-1', away:'ANNUR CLUB - A', venue:'',
      courts:[
        { ct:1, home:'BALASURYA / Senthilkumar Selvaraj', away:'RAVICHANDRAN / VENKATACHALAPATHI', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Vishnu V Raj / Syed Ibrahim A.', away:'P Karthikeyan / RAJASEKAR A', sets:'3-6, 2-6', win:'away' },
        { ct:3, home:'Natarajan / Harish Desu', away:'SANJEEV P V / ROHITH ROYER', sets:'6-2, 6-3', win:'home' },
      ]},
    { home:'TOP SPIN - A', score:'3-0', away:'TENNIGLO - A', venue:'',
      courts:[
        { ct:1, home:'Senthil kumar / Sankarnarayanan R', away:'NANTHAKUMAR / Sarathkumar S', sets:'6-1, 6-4', win:'home' },
        { ct:2, home:'MANIMARAN S / Balakrishnan alagarswamy', away:'Ashok Bheem Rao / Poonguzhali Balamurugan', sets:'6-0, 6-4', win:'home' },
        { ct:3, home:'SUDARSHAN K N / Dr. IMMANUEL SUBASH', away:'Dinesh G / Balamurugan G', sets:'7-5, 5-7, 10-7', win:'home' },
      ]},
    { home:'SKY HIGH TENNIS CLUB', score:'2-1', away:'CBE CLUB - A', venue:'',
      courts:[
        { ct:1, home:'RAJESHWARAN / Deepak Pradeep Kumar P', away:'MEIYAPPAN R M / RAMESH KUMAR', sets:'3-6, 3-6', win:'away' },
        { ct:2, home:'ELAN E / RAMANAN S', away:'VIVEK J KHONA / VIJAY RAJENDRA', sets:'6-2, 6-1', win:'home' },
        { ct:3, home:'SARANDEEPAK E / KRITHIK', away:'SHRINIVAS GK / SIDDARTH SHANKAR', sets:'6-2, 6-1', win:'home' },
      ]},
  ]},

  // -- Week 7 ---------------------------------
  { week:7, date:'07 Mar 2026', done:true, matches:[
    { home:'LEVO SPORTS-B', score:'2-1', away:'CCTA - B', venue:'',
      courts:[
        { ct:1, home:'Ponnusamy / Stephenraj A', away:'Nihileshwar Ram / VENGETESH', sets:'6-3, 6-3', win:'home' },
        { ct:2, home:'Sakthi Ashwin / Aadarsh', away:'GANAPATHY RAJAN / Niranjeshwara Ram', sets:'3-6, 6-3, 10-4', win:'home' },
        { ct:3, home:'akshay ram s / Karthik Elango', away:'HARI / CHIDAMBARAM', sets:'3-6, 7-5, 7-10', win:'away' },
      ]},
    { home:'CBE CLUB - A', score:'2-1', away:'CS ACADEMY - A', venue:'',
      courts:[
        { ct:1, home:'MEIYAPPAN R M / RAMESH KUMAR', away:'TANYA KARTHIK / RANA JAI PARVATHAM', sets:'6-2, 6-1', win:'home' },
        { ct:2, home:'VEERA ANISH / VIJAY RAJENDRA', away:'Ragavendhara S / DHEV ADVAITH SENTHIL', sets:'6-2, 6-3', win:'home' },
        { ct:3, home:'VIVEK J KHONA / SIDDARTH SHANKAR', away:'Muthu Palanisamy / RISHI VANDHAN', sets:'2-6, 2-6', win:'away' },
      ]},
    { home:'SKY HIGH TENNIS CLUB', score:'2-1', away:'TOP SPIN - A', venue:'',
      courts:[
        { ct:1, home:'ELAN E / RAMANAN S', away:'Dr. IMMANUEL SUBASH / SUDARSHAN K N', sets:'7-5, 6-3', win:'home' },
        { ct:2, home:'KRITHIK / SARANDEEPAK E', away:'Sankarnarayanan R / Senthil kumar', sets:'6-3, 7-5', win:'home' },
        { ct:3, home:'Deepak Pradeep Kumar P / Hitha', away:'R Kanish / Balakrishnan alagarswamy', sets:'1-6, 2-6', win:'away' },
      ]},
    { home:'COSMO - D', score:'2-1', away:'TENNIGLO - A', venue:'',
      courts:[
        { ct:1, home:'Balakumar / M Sathish Kumar Nair', away:'Balamurugan G / Dinesh G', sets:'6-2, 0-6, 8-10', win:'away' },
        { ct:2, home:'Vivekananth V / Adithya Devaraj', away:'NANTHAKUMAR / Poonguzhali Balamurugan', sets:'6-0, 6-2', win:'home' },
        { ct:3, home:'B S Kumaralakshman / Dandoo Subramanian', away:'Ashok Bheem Rao / Sarathkumar S', sets:'7-6, 6-2', win:'home' },
      ]},
    { home:'ANNUR CLUB - A', score:'2-1', away:'RS PURAM - B', venue:'',
      courts:[
        { ct:1, home:'KIRUTHIK KALYAN AS / ROHITH ROYER', away:'RAJESH THOMAS / L VAIRAVAN', sets:'6-2, 6-2', win:'home' },
        { ct:2, home:'AKILESH P / SANJEEV P V', away:'AVARKAN ANTONY / SATHYANARAYANAN', sets:'6-2, 6-3', win:'home' },
        { ct:3, home:'P Karthikeyan / RAJASEKAR A', away:'Sukavaneshwar / K RAMARATINAM', sets:'1-6, 2-6', win:'away' },
      ]},
  ]},

  // -- Week 8 ---------------------------------
  { week:8, date:'14 Mar 2026', done:true, matches:[
    { home:'TOP SPIN - A', score:'2-1', away:'CS ACADEMY - A', venue:'',
      courts:[
        { ct:1, home:'SUDARSHAN K N / Dr. IMMANUEL SUBASH', away:'Muthu Palanisamy / RISHI VANDHAN', sets:'6-4, 6-3', win:'home' },
        { ct:2, home:'Balakrishnan alagarswamy / Ramasamy', away:'TANYA KARTHIK / RANA JAI PARVATHAM', sets:'6-2, 6-3', win:'home' },
        { ct:3, home:'Senthil kumar / Sankarnarayanan R', away:'ABHAY DWARAKNATH / Ragavendhara S', sets:'5-7, 6-7', win:'away' },
      ]},
    { home:'ANNUR CLUB - A', score:'2-1', away:'TENNIGLO - A', venue:'',
      courts:[
        { ct:1, home:'SANJEEV P V / AKILESH P', away:'NANTHAKUMAR / Dinesh G', sets:'6-4, 6-1', win:'home' },
        { ct:2, home:'KIRUTHIK KALYAN AS / P Karthikeyan', away:'Balamurugan G / Sarathkumar S', sets:'6-3, 6-1', win:'home' },
        { ct:3, home:'W/O', away:'Ashok Bheem Rao / Poonguzhali Balamurugan', sets:'0-6, 0-6', win:'away' },
      ]},
    { home:'SKY HIGH TENNIS CLUB', score:'2-1', away:'COSMO - D', venue:'',
      courts:[
        { ct:1, home:'ELAN E / RAMANAN S', away:'Vivekananth V / Adithya Devaraj', sets:'6-2, 6-1', win:'home' },
        { ct:2, home:'KRITHIK / SARANDEEPAK E', away:'M Sathish Kumar Nair / Roshan Kumar R', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'ELANGOVAN / Deepak Pradeep Kumar P', away:'Dandoo Subramanian / Abhay Srinivash', sets:'3-6, 5-7', win:'away' },
      ]},
    { home:'LEVO SPORTS-B', score:'2-1', away:'CBE CLUB - A', venue:'',
      courts:[
        { ct:1, home:'Prativ V M / Amarnath M S', away:'MEIYAPPAN R M / RAMESH KUMAR', sets:'6-2, 4-6, 10-8', win:'home' },
        { ct:2, home:'Fedelish J / Ajith kumar S', away:'SIDDARTH SHANKAR / VIVEK J KHONA', sets:'6-0, 6-1', win:'home' },
        { ct:3, home:'Stephenraj A / akshay ram s', away:'VIJAY RAJENDRA / VEERA ANISH', sets:'4-6, 6-4, 4-10', win:'away' },
      ]},
    { home:'CMTA - A', score:'2-1', away:'RS PURAM - B', venue:'',
      courts:[
        { ct:1, home:'Senthilkumar Selvaraj / Nithin Vijay P S', away:'AVARKAN ANTONY / K RAMARATINAM', sets:'4-6, 0-6', win:'away' },
        { ct:2, home:'Harish Desu / Natarajan', away:'RAJESH THOMAS / SATHYANARAYANAN', sets:'6-3, 7-6', win:'home' },
        { ct:3, home:'BALASURYA / Jovan Danraj', away:'Sukavaneshwar / Bhishmaram', sets:'6-1, 6-0', win:'home' },
      ]},
  ]},

  // -- Week 9 ---------------------------------
  { week:9, date:'21 Mar 2026', done:true, matches:[
    { home:'ANNUR CLUB - A', score:'2-1', away:'CS ACADEMY - A', venue:'',
      courts:[
        { ct:1, home:'AKILESH P / SANJEEV P V', away:'DHEV ADVAITH SENTHIL / MUTHU NARAIN', sets:'6-4, 6-1', win:'home' },
        { ct:2, home:'KIRUTHIK KALYAN AS / ROHITH ROYER', away:'RISHI VANDHAN / Muthu Palanisamy', sets:'6-2, 7-5', win:'home' },
        { ct:3, home:'P Karthikeyan / RAJASEKAR A', away:'ABHAY DWARAKNATH / Ragavendhara S', sets:'7-5, 0-6, 7-10', win:'away' },
      ]},
    { home:'CCTA - B', score:'2-1', away:'TOP SPIN - A', venue:'',
      courts:[
        { ct:1, home:'RAKESHKUMAR / PREM PRAKASH', away:'SUDARSHAN K N / Dr. IMMANUEL SUBASH', sets:'6-2, 2-6, 2-10', win:'away' },
        { ct:2, home:'Niranjeshwara Ram / GANAPATHY RAJAN', away:'Ramasamy / Balakrishnan alagarswamy', sets:'7-5, 6-4', win:'home' },
        { ct:3, home:'HARI / Nihileshwar Ram', away:'Sankarnarayanan R / R Kanish', sets:'6-2, 6-1', win:'home' },
      ]},
    { home:'CMTA - A', score:'2-1', away:'SKY HIGH TENNIS CLUB', venue:'',
      courts:[
        { ct:1, home:'Harish Desu / Vishnu V Raj', away:'ELANGOVAN / Deepak Pradeep Kumar P', sets:'6-2, 6-2', win:'home' },
        { ct:2, home:'Senthilkumar Selvaraj / Nithin Vijay P S', away:'ELAN E / RAMANAN S', sets:'3-6, 6-3, 10-12', win:'away' },
        { ct:3, home:'BALASURYA / Natarajan', away:'SARANDEEPAK E / RAJESHWARAN', sets:'6-7, 6-3, 10-7', win:'home' },
      ]},
    { home:'TENNIGLO - A', score:'2-1', away:'RS PURAM - B', venue:'',
      courts:[
        { ct:1, home:'NANTHAKUMAR / Dinesh G', away:'Sukavaneshwar / SATHYANARAYANAN', sets:'6-7, 6-3, 10-8', win:'home' },
        { ct:2, home:'Sarathkumar S / Yogin S Prakash', away:'K RAMARATINAM / L VAIRAVAN', sets:'6-4, 6-3', win:'home' },
        { ct:3, home:'Balamurugan G / Ashok Bheem Rao', away:'AVARKAN ANTONY / Bhishmaram', sets:'1-6, 2-6', win:'away' },
      ]},
    { home:'COSMO - D', score:'2-1', away:'LEVO SPORTS-B', venue:'',
      courts:[
        { ct:1, home:'M Sathish Kumar Nair / Sudesh Reddy', away:'Stephenraj A / Amarnath M S', sets:'1-6, 1-6', win:'away' },
        { ct:2, home:'Vivekananth V / Abhay Srinivash', away:'P Karthikeyan / Fedelish J', sets:'6-4, 6-4', win:'home' },
        { ct:3, home:'Dandoo Subramanian / Pranav Karthick', away:'Ajith kumar S / Aadarsh', sets:'4-6, 6-4, 10-8', win:'home' },
      ]},
  ]},

  // -- Week 10 --------------------------------
  { week:10, date:'28 Mar 2026', done:true, matches:[
    { home:'COSMO - D', score:'2-1', away:'CMTA - A', venue:'',
      courts:[
        { ct:1, home:'Dandoo Subramanian / Pranav Karthick', away:'Harish Desu / Senthilkumar Selvaraj', sets:'5-7, 3-6', win:'away' },
        { ct:2, home:'Abhay Srinivash / CJ Vikram', away:'Natarajan / Vishnu V Raj', sets:'6-2, 4-6, 10-5', win:'home' },
        { ct:3, home:'Balakumar / Adithya Devaraj', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'TENNIGLO - A', score:'2-1', away:'CBE CLUB - A', venue:'',
      courts:[
        { ct:1, home:'Sarathkumar S / Balamurugan G', away:'VEERA ANISH / VIJAY RAJENDRA', sets:'0-6, 5-7', win:'away' },
        { ct:2, home:'Dinesh G / Ashok Bheem Rao', away:'MEIYAPPAN R M / RAVEENDRAN C R', sets:'6-4, 6-1', win:'home' },
        { ct:3, home:'NANTHAKUMAR / Yogin S Prakash', away:'VIVEK J KHONA / RAMESH KUMAR', sets:'6-1, 6-2', win:'home' },
      ]},
    { home:'CCTA - B', score:'2-1', away:'SKY HIGH TENNIS CLUB', venue:'',
      courts:[
        { ct:1, home:'HARI / Nihileshwar Ram', away:'ELAN E / RAMANAN S', sets:'7-6, 6-1', win:'home' },
        { ct:2, home:'JONES ROHAN / Niranjeshwara Ram', away:'ELANGOVAN / Deepak Pradeep Kumar P', sets:'6-4, 6-2', win:'home' },
        { ct:3, home:'VENGETESH / PREM PRAKASH', away:'SARANDEEPAK E / KRITHIK', sets:'2-6, 3-6', win:'away' },
      ]},
    { home:'RS PURAM - B', score:'2-1', away:'TOP SPIN - A', venue:'',
      courts:[
        { ct:1, home:'Sukavaneshwar / AVARKAN ANTONY', away:'Balakrishnan alagarswamy / Senthil kumar', sets:'6-1, 6-4', win:'home' },
        { ct:2, home:'Bhishmaram / RAVI GOPALAKRISHNAN', away:'MANIMARAN S / Ramasamy', sets:'3-6, 0-6', win:'away' },
        { ct:3, home:'K RAMARATINAM / SATHYANARAYANAN', away:'SUDARSHAN K N / Dr. IMMANUEL SUBASH', sets:'6-3, 6-1', win:'home' },
      ]},
    { home:'CS ACADEMY - A', score:'2-1', away:'LEVO SPORTS-B', venue:'',
      courts:[
        { ct:1, home:'SHIV SUNDER MK / Muthu Palanisamy', away:'Amarnath M S / P Karthikeyan', sets:'6-2, 6-4', win:'home' },
        { ct:2, home:'ABHAY DWARAKNATH / Ragavendhara S', away:'Sakthi Ashwin / Aadarsh', sets:'6-4, 6-3', win:'home' },
        { ct:3, home:'TANYA KARTHIK / RANA JAI PARVATHAM', away:'Stephenraj A / akshay ram s', sets:'3-6, 0-6', win:'away' },
      ]},
  ]},

  // -- Week 11 --------------------------------
  { week:11, date:'04 Apr 2026', done:true, matches:[
    { home:'TOP SPIN - A', score:'2-1', away:'CMTA - A', venue:'',
      courts:[
        { ct:1, home:'MANIMARAN S / Ramasamy', away:'BALASURYA / Harish Desu', sets:'1-6, 0-6', win:'away' },
        { ct:2, home:'SUDARSHAN K N / Dr. IMMANUEL SUBASH', away:'Senthilkumar Selvaraj / Syed Ibrahim A.', sets:'7-5, 7-5', win:'home' },
        { ct:3, home:'Senthil kumar / Sankarnarayanan R', away:'Natarajan / Vishnu V Raj', sets:'6-2, 6-2', win:'home' },
      ]},
    { home:'RS PURAM - B', score:'2-1', away:'CBE CLUB - A', venue:'',
      courts:[
        { ct:1, home:'SATHYANARAYANAN / AVARKAN ANTONY', away:'MEIYAPPAN R M / RAMESH KUMAR', sets:'6-0, 7-6', win:'home' },
        { ct:2, home:'Bhishmaram / Mihir Modi', away:'VIJAY RAJENDRA / VEERA ANISH', sets:'2-6, 0-6', win:'away' },
        { ct:3, home:'K RAMARATINAM / Sukavaneshwar', away:'SIDDARTH SHANKAR / VISHNU CHARAN', sets:'6-0, 0-0', win:'home' },
      ]},
    { home:'ANNUR CLUB - A', score:'2-1', away:'COSMO - D', venue:'',
      courts:[
        { ct:1, home:'RAVICHANDRAN / RAJASEKAR A', away:'Vivekananth V / Pranav Karthick', sets:'0-6, 1-6', win:'away' },
        { ct:2, home:'P Karthikeyan / AKILESH P', away:'Abhay Srinivash / CJ Vikram', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'KIRUTHIK KALYAN AS / ROHITH ROYER', away:'Balakumar / M Sathish Kumar Nair', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'CCTA - B', score:'3-0', away:'TENNIGLO - A', venue:'',
      courts:[
        { ct:1, home:'GANAPATHY RAJAN / Niranjeshwara Ram', away:'NANTHAKUMAR / Dinesh G', sets:'7-5, 6-4', win:'home' },
        { ct:2, home:'PREM PRAKASH / JONES ROHAN', away:'Yogin S Prakash / Ashok Bheem Rao', sets:'6-2, 7-6', win:'home' },
        { ct:3, home:'HARI / Nihileshwar Ram', away:'Sarathkumar S / Balamurugan G', sets:'6-1, 6-3', win:'home' },
      ]},
    { home:'SKY HIGH TENNIS CLUB', score:'2-1', away:'LEVO SPORTS-B', venue:'',
      courts:[
        { ct:1, home:'RAMANAN S / ELAN E', away:'Aarish D S / Aadarsh', sets:'6-2, 6-2', win:'home' },
        { ct:2, home:'SARANDEEPAK E / KRITHIK', away:'Srinivasan / Amarnath M S', sets:'6-3, 6-2', win:'home' },
        { ct:3, home:'ELANGOVAN / Deepak Pradeep Kumar P', away:'Ponnusamy / Stephenraj A', sets:'1-6, 1-6', win:'away' },
      ]},
  ]},
];
