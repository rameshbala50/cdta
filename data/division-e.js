// ============================================================
// DIVISION E — CDTA 2026
// ============================================================

const DIV_E_TEAMS = [
  { short:'TGLO-B', full:'TENNIGLO - B', captain:'Ramesh Krishnan', mobile:'', players:10, club:'', surface:'', division:'E' },
  { short:'SAI-A', full:'SAI TENNIS - A', captain:'SATHISH KUMAR', mobile:'', players:8, club:'', surface:'', division:'E' },
  { short:'CBE-B', full:'CBE CLUB - B', captain:'Aditya Srinivasan', mobile:'', players:10, club:'', surface:'', division:'E' },
  { short:'KGR-B', full:'KGR - B', captain:'Dr KARTHIKEYAN SAIRAM', mobile:'', players:11, club:'', surface:'', division:'E' },
  { short:'ANN-B', full:'ANNUR CLUB - B', captain:'MANOJ KUMAR K', mobile:'', players:8, club:'', surface:'', division:'E' },
  { short:'LEVO-C', full:'LEVO SPORTS-C', captain:'Praveen Kulandairaj S', mobile:'', players:10, club:'', surface:'', division:'E' },
  { short:'ACTC-A', full:'ACTC - A', captain:'KARTHIK S', mobile:'', players:9, club:'', surface:'', division:'E' },
  { short:'MET', full:'THE METTUPALAYAM CLUB', captain:'THE METTUPALAYAM CLUB', mobile:'', players:11, club:'', surface:'', division:'E' },
  { short:'VEL-B', full:'VELAN - B', captain:'R.KAILASH KUMAR', mobile:'', players:12, club:'', surface:'', division:'E' },
  { short:'PSRV-C', full:'PROSERVE - C', captain:'SUSHIL PARVATHAM', mobile:'', players:9, club:'', surface:'', division:'E' },
  { short:'ACE', full:'ACE CLUB', captain:'RAVI PONNUSAMY', mobile:'', players:10, club:'', surface:'', division:'E' },
];

const DIV_E_STANDINGS = [
  { rank:1, short:'TGLO-B', full:'TENNIGLO - B', pts:25, played:30, setsW:52, setsL:16, gamesW:326, gamesL:179 },
  { rank:2, short:'SAI-A', full:'SAI TENNIS - A', pts:21, played:30, setsW:45, setsL:26, gamesW:295, gamesL:250 },
  { rank:3, short:'CBE-B', full:'CBE CLUB - B', pts:20, played:30, setsW:44, setsL:23, gamesW:307, gamesL:226 },
  { rank:4, short:'KGR-B', full:'KGR - B', pts:19, played:30, setsW:45, setsL:27, gamesW:313, gamesL:229 },
  { rank:5, short:'ANN-B', full:'ANNUR CLUB - B', pts:17, played:30, setsW:36, setsL:32, gamesW:255, gamesL:236 },
  { rank:6, short:'LEVO-C', full:'LEVO SPORTS-C', pts:14, played:30, setsW:34, setsL:37, gamesW:280, gamesL:274 },
  { rank:7, short:'ACTC-A', full:'ACTC - A', pts:14, played:30, setsW:34, setsL:36, gamesW:266, gamesL:262 },
  { rank:8, short:'MET', full:'THE METTUPALAYAM CLUB', pts:13, played:30, setsW:28, setsL:39, gamesW:238, gamesL:283 },
  { rank:9, short:'VEL-B', full:'VELAN - B', pts:11, played:30, setsW:30, setsL:42, gamesW:248, gamesL:299 },
  { rank:10, short:'PSRV-C', full:'PROSERVE - C', pts:7, played:30, setsW:17, setsL:47, gamesW:178, gamesL:312 },
  { rank:11, short:'ACE', full:'ACE CLUB', pts:4, played:30, setsW:11, setsL:51, gamesW:168, gamesL:324 },
];

const DIV_E_PLAYERS = [
  // TENNIGLO - B
  { name:'Ramesh Krishnan', team:'TGLO-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-e/tglo-b/ramesh-krishnan.jpg' },
  { name:'Moulieswaran S', team:'TGLO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/tglo-b/moulieswaran-s.jpg' },
  { name:'Krishnaraj', team:'TGLO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/tglo-b/krishnaraj.jpeg' },
  { name:'Aegan Balakumar', team:'TGLO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/tglo-b/aegan-balakumar.jpeg' },
  { name:'Aditi Balamurugan', team:'TGLO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/tglo-b/aditi-balamurugan.jpeg' },
  { name:'Thrrivik Arun Pasad', team:'TGLO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/tglo-b/thrrivik-arun-pasad.jpeg' },
  { name:'Jenith P', team:'TGLO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/tglo-b/jenith-p.jpeg' },
  { name:'Prabhakaran Ganeshan', team:'TGLO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/tglo-b/prabhakaran-ganeshan.jpeg' },
  { name:'Manobharath T', team:'TGLO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/tglo-b/manobharath-t.jpg' },
  { name:'Sudhan Sekar', team:'TGLO-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/tglo-b/sudhan-sekar.jpg' },

  // SAI TENNIS - A
  { name:'SATHISH KUMAR', team:'SAI-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-e/sai-a/sathish-kumar.jpeg' },
  { name:'ANVESH.V', team:'SAI-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/sai-a/anveshv.jpeg' },
  { name:'KARTHIKEYAN S', team:'SAI-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/sai-a/karthikeyan-s.jpeg' },
  { name:'AADITYA.A', team:'SAI-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/sai-a/aadityaa.jpeg' },
  { name:'HARIDHRA', team:'SAI-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/sai-a/haridhra.jpeg' },
  { name:'VIBESRI', team:'SAI-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/sai-a/vibesri.jpeg' },
  { name:'MITHUN J', team:'SAI-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/sai-a/mithun-j.jpeg' },
  { name:'SUJAI', team:'SAI-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/sai-a/sujai.jpeg' },

  // CBE CLUB - B
  { name:'Aditya Srinivasan', team:'CBE-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-e/cbe-b/aditya-srinivasan.jpeg' },
  { name:'KARTHIK RAM', team:'CBE-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/cbe-b/karthik-ram.jpg' },
  { name:'Santossh R', team:'CBE-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/cbe-b/santossh-r.jpg' },
  { name:'Siva', team:'CBE-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/cbe-b/siva.jpeg' },
  { name:'Ishaan Raveendran', team:'CBE-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/cbe-b/ishaan-raveendran.jpg' },
  { name:'Vikram Soundarraj', team:'CBE-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/cbe-b/vikram-soundarraj.jpg' },
  { name:'Mritun Anand', team:'CBE-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/cbe-b/mritun-anand.jpg' },
  { name:'Anvar Jay Varadaraj', team:'CBE-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/cbe-b/anvar-jay-varadaraj.jpg' },
  { name:'Srivardan', team:'CBE-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/cbe-b/srivardan.jpeg' },
  { name:'Varsha Charan', team:'CBE-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/cbe-b/varsha-charan.jpg' },

  // KGR - B
  { name:'Dr KARTHIKEYAN SAIRAM', team:'KGR-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-e/kgr-b/dr-karthikeyan-sairam.jpg' },
  { name:'JAI PRASHANTH V A', team:'KGR-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/kgr-b/jai-prashanth-v-a.jpg' },
  { name:'SUDEV R B', team:'KGR-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/kgr-b/sudev-r-b.jpg' },
  { name:'AKASH D', team:'KGR-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/kgr-b/akash-d.png' },
  { name:'GOWTHAM BALASUBRAMANIAM', team:'KGR-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/kgr-b/gowtham-balasubramaniam.png' },
  { name:'ROHAN BAIRAV M', team:'KGR-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/kgr-b/rohan-bairav-m.jpg' },
  { name:'KATHIRKAM S', team:'KGR-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/kgr-b/kathirkam-s.png' },
  { name:'KARTHIKEYAN K', team:'KGR-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/kgr-b/karthikeyan-k.png' },
  { name:'ADRIAN COSTA', team:'KGR-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/kgr-b/adrian-costa.jpg' },
  { name:'PRASHANNA', team:'KGR-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/kgr-b/prashanna.jpg' },
  { name:'GIRIDHAR R', team:'KGR-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/kgr-b/giridhar-r.jpg' },

  // ANNUR CLUB - B
  { name:'MANOJ KUMAR K', team:'ANN-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-e/ann-b/manoj-kumar-k.jpeg' },
  { name:'PRABHAKARAN E', team:'ANN-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ann-b/prabhakaran-e.jpeg' },
  { name:'KARTHIKEYAN S', team:'ANN-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ann-b/karthikeyan-s.jpeg' },
  { name:'DINESH RAJ R', team:'ANN-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ann-b/dinesh-raj-r.jpg' },
  { name:'Navadeep', team:'ANN-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ann-b/navadeep.jpeg' },
  { name:'Gowthaman', team:'ANN-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ann-b/gowthaman.jpeg' },
  { name:'YESURAJA G', team:'ANN-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ann-b/yesuraja-g.jpeg' },
  { name:'SENTHIL KUMAR P', team:'ANN-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ann-b/senthil-kumar-p.jpg' },

  // LEVO SPORTS-C
  { name:'Praveen Kulandairaj S', team:'LEVO-C', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-e/levo-c/praveen-kulandairaj-s.jpg' },
  { name:'Manivannan', team:'LEVO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/levo-c/manivannan.jpg' },
  { name:'Arun Chakravarthi N', team:'LEVO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/levo-c/arun-chakravarthi-n.jpg' },
  { name:'VIJAY GANESH', team:'LEVO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/levo-c/vijay-ganesh.jpg' },
  { name:'Chalapathy', team:'LEVO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/levo-c/chalapathy.jpg' },
  { name:'Selva', team:'LEVO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/levo-c/selva.jpg' },
  { name:'Nishica Gomes', team:'LEVO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/levo-c/nishica-gomes.jpg' },
  { name:'Krithik Varshan', team:'LEVO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/levo-c/krithik-varshan.jpg' },
  { name:'Baranidhanarn', team:'LEVO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/levo-c/baranidhanarn.jpg' },
  { name:'GOKUL RAJ', team:'LEVO-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/levo-c/gokul-raj.jpeg' },

  // ACTC - A
  { name:'KARTHIK S', team:'ACTC-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-e/actc-a/karthik-s.jpeg' },
  { name:'RAM GANESH V R', team:'ACTC-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/actc-a/ram-ganesh-v-r.jpeg' },
  { name:'ARUN C', team:'ACTC-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/actc-a/arun-c.jpeg' },
  { name:'JAI GANESH L', team:'ACTC-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/actc-a/jai-ganesh-l.jpeg' },
  { name:'TILIPAN T', team:'ACTC-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/actc-a/tilipan-t.jpeg' },
  { name:'SATHYANANTH', team:'ACTC-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/actc-a/sathyananth.jpg' },
  { name:'SARAVANA PRAKASH', team:'ACTC-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/actc-a/saravana-prakash.jpeg' },
  { name:'VIJAYA KUMAR P', team:'ACTC-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/actc-a/vijaya-kumar-p.jpeg' },
  { name:'THANGARASU T P', team:'ACTC-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/actc-a/thangarasu-t-p.jpeg' },

  // THE METTUPALAYAM CLUB
  { name:'THE METTUPALAYAM CLUB', team:'MET', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-e/met/the-mettupalayam-club.jpeg' },
  { name:'R Pankaj Shankla', team:'MET', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/met/r-pankaj-shankla.jpeg' },
  { name:'Capt R Dorai', team:'MET', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/met/capt-r-dorai.jpeg' },
  { name:'Neeraj V Shankla', team:'MET', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/met/neeraj-v-shankla.jpg' },
  { name:'Rishab Shankla G', team:'MET', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/met/rishab-shankla-g.jpeg' },
  { name:'Senthil Kumar P', team:'MET', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/met/senthil-kumar-p.jpeg' },
  { name:'S Dakshinesh', team:'MET', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/met/s-dakshinesh.jpeg' },
  { name:'Ashwin Shankar', team:'MET', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/met/ashwin-shankar.jpeg' },
  { name:'Manoj Shankla V', team:'MET', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/met/manoj-shankla-v.jpg' },
  { name:'Sidharath Kantharaj', team:'MET', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/met/sidharath-kantharaj.jpeg' },
  { name:'Evanth Nahar', team:'MET', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/met/evanth-nahar.jpeg' },

  // VELAN - B
  { name:'R.KAILASH KUMAR', team:'VEL-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-e/vel-b/rkailash-kumar.jpeg' },
  { name:'M.M.M.SATHISH KUMAR', team:'VEL-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/vel-b/mmmsathish-kumar.jpg' },
  { name:'M.R.GAUTHAM', team:'VEL-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/vel-b/mrgautham.jpg' },
  { name:'C.N.ANANDAGIRI', team:'VEL-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/vel-b/cnanandagiri.jpg' },
  { name:'S.RAJKUMAR', team:'VEL-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/vel-b/srajkumar.jpg' },
  { name:'DR.A.VINODH ANAND', team:'VEL-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/vel-b/dravinodh-anand.jpeg' },
  { name:'DR.T.DEEPAK', team:'VEL-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/vel-b/drtdeepak.jpg' },
  { name:'DR.SANKAR KATHIR', team:'VEL-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/vel-b/drsankar-kathir.jpg' },
  { name:'SRUTI A V', team:'VEL-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/vel-b/sruti-a-v.jpeg' },
  { name:'VIVEKANANDAN S', team:'VEL-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/vel-b/vivekanandan-s.jpeg' },
  { name:'GOUTHAM S', team:'VEL-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/vel-b/goutham-s.jpeg' },
  { name:'NISHANTH P V', team:'VEL-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/vel-b/nishanth-p-v.jpeg' },

  // PROSERVE - C
  { name:'SUSHIL PARVATHAM', team:'PSRV-C', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-e/psrv-c/sushil-parvatham.jpg' },
  { name:'ARUNKUMAR NAVASIVA', team:'PSRV-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/psrv-c/arunkumar-navasiva.jpeg' },
  { name:'SAGAR JAIN', team:'PSRV-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/psrv-c/sagar-jain.jpeg' },
  { name:'VASUDEV SURATH', team:'PSRV-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/psrv-c/vasudev-surath.jpg' },
  { name:'ARUNKUMAR SANTHANAM', team:'PSRV-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/psrv-c/arunkumar-santhanam.jpeg' },
  { name:'AMRIT S', team:'PSRV-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/psrv-c/amrit-s.png' },
  { name:'T REVAN', team:'PSRV-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/psrv-c/t-revan.jpeg' },
  { name:'S DHANVIN', team:'PSRV-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/psrv-c/s-dhanvin.jpeg' },
  { name:'ANYA PARVATHAM', team:'PSRV-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/psrv-c/anya-parvatham.jpeg' },

  // ACE CLUB
  { name:'RAVI PONNUSAMY', team:'ACE', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-e/ace/ravi-ponnusamy.jpeg' },
  { name:'VENKATESWARAN', team:'ACE', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ace/venkateswaran.jpeg' },
  { name:'S KRISHNAMOORTHI', team:'ACE', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ace/s-krishnamoorthi.jpeg' },
  { name:'PRABHAKAR DWARAPUDI', team:'ACE', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ace/prabhakar-dwarapudi.jpeg' },
  { name:'KLAUS BERGMANN', team:'ACE', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ace/klaus-bergmann.png' },
  { name:'PANNIRSELVAM K', team:'ACE', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ace/pannirselvam-k.png' },
  { name:'LOGESHWARAN V', team:'ACE', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ace/logeshwaran-v.jpeg' },
  { name:'SRINIVASAN S', team:'ACE', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ace/srinivasan-s.jpeg' },
  { name:'RAVI KRISHNAMURTHY', team:'ACE', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ace/ravi-krishnamurthy.jpg' },
  { name:'SARAVANA', team:'ACE', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-e/ace/saravana.jpeg' },
];

const DIV_E_SCHEDULE = [
  // ── Week 1 ─────────────────────────────
  { week:1, date:'24-25 Jan 2026', done:true, matches:[
    { home:'KGR - B', score:'2-1', away:'PROSERVE - C', venue:'',
      courts:[
        { ct:1, home:'AKASH D / ROHAN BAIRAV M', away:'ARUNKUMAR NAVASIVA / S DHANVIN', sets:'6-1, 6-4', win:'home' },
        { ct:2, home:'GOWTHAM BALASUBRAMANIAM / GIRIDHAR R', away:'ARUNKUMAR SANTHANAM / SAGAR JAIN', sets:'3-6, 6-2, 11-13', win:'away' },
        { ct:3, home:'Dr KARTHIKEYAN SAIRAM / SUDEV R B', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'SAI TENNIS - A', score:'2-1', away:'LEVO SPORTS-C', venue:'',
      courts:[
        { ct:1, home:'ANVESH.V / SUJAI', away:'Praveen Kulandairaj S / VIJAY GANESH', sets:'6-1, 3-6, 10-5', win:'home' },
        { ct:2, home:'KARTHIKEYAN S / AADITYA.A', away:'GOKUL RAJ / Chalapathy', sets:'6-4, 6-3', win:'home' },
        { ct:3, home:'HARIDHRA / VIBESRI', away:'Arun Chakravarthi N / Manivannan', sets:'1-6, 0-6', win:'away' },
      ]},
    { home:'TENNIGLO - B', score:'2-1', away:'ANNUR CLUB - B', venue:'',
      courts:[
        { ct:1, home:'Jenith P / Krishnaraj', away:'SENTHIL KUMAR P / MANOJ KUMAR K', sets:'6-4, 3-6, 7-10', win:'away' },
        { ct:2, home:'Aegan Balakumar / Moulieswaran S', away:'YESURAJA G / KARTHIKEYAN S', sets:'6-2, 6-3', win:'home' },
        { ct:3, home:'Ramesh Krishnan / Sudhan Sekar', away:'DINESH RAJ R / PRABHAKARAN E', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'ACTC - A', score:'2-1', away:'THE METTUPALAYAM CLUB', venue:'',
      courts:[
        { ct:1, home:'RAM GANESH V R / ARUN C', away:'Manoj Shankla V / S Dakshinesh', sets:'7-5, 7-5', win:'home' },
        { ct:2, home:'KARTHIK S / THANGARASU T P', away:'Rishab Shankla G / Neeraj V Shankla', sets:'6-1, 6-2', win:'home' },
        { ct:3, home:'TILIPAN T / VIJAYA KUMAR P', away:'R Pankaj Shankla / Ashwin Shankar', sets:'2-6, 1-6', win:'away' },
      ]},
    { home:'CBE CLUB - B', score:'3-0', away:'VELAN - B', venue:'',
      courts:[
        { ct:1, home:'Anvar Jay Varadaraj / Srivardan', away:'C.N.ANANDAGIRI / NISHANTH P V', sets:'5-7, 6-4, 10-1', win:'home' },
        { ct:2, home:'Vikram Soundarraj / Aditya Srinivasan', away:'VIVEKANANDAN S / GOUTHAM S', sets:'6-4, 1-6, 10-4', win:'home' },
        { ct:3, home:'KARTHIK RAM / Santossh R', away:'DR.A.VINODH ANAND / SRUTI A V', sets:'6-1, 6-0', win:'home' },
      ]},
  ]},

  // ── Week 2 ─────────────────────────────
  { week:2, date:'31 Jan - 01 Feb 2026', done:true, matches:[
    { home:'VELAN - B', score:'2-1', away:'THE METTUPALAYAM CLUB', venue:'',
      courts:[
        { ct:1, home:'GOUTHAM S / VIVEKANANDAN S', away:'Ashwin Shankar / R Pankaj Shankla', sets:'1-6, 2-6', win:'away' },
        { ct:2, home:'R.KAILASH KUMAR / C.N.ANANDAGIRI', away:'Rishab Shankla G / Neeraj V Shankla', sets:'4-6, 6-4, 10-7', win:'home' },
        { ct:3, home:'NISHANTH P V / DR.A.VINODH ANAND', away:'S Dakshinesh / Manoj Shankla V', sets:'7-6, 6-4', win:'home' },
      ]},
    { home:'ACE CLUB', score:'2-1', away:'ACTC - A', venue:'',
      courts:[
        { ct:1, home:'KLAUS BERGMANN / RAVI KRISHNAMURTHY', away:'JAI GANESH L / KARTHIK S', sets:'6-4, 6-4', win:'home' },
        { ct:2, home:'PRABHAKAR DWARAPUDI / SARAVANA', away:'ARUN C / TILIPAN T', sets:'6-2, 6-1', win:'home' },
        { ct:3, home:'RAVI PONNUSAMY / SRINIVASAN S', away:'THANGARASU T P / SATHYANANTH', sets:'3-6, 2-6', win:'away' },
      ]},
    { home:'ANNUR CLUB - B', score:'2-1', away:'LEVO SPORTS-C', venue:'',
      courts:[
        { ct:1, home:'SENTHIL KUMAR P / DINESH RAJ R', away:'Baranidhanarn / Nishica Gomes', sets:'7-6, 6-2', win:'home' },
        { ct:2, home:'KARTHIKEYAN S / YESURAJA G', away:'Arun Chakravarthi N / Manivannan', sets:'2-6, 6-3, 7-10', win:'away' },
        { ct:3, home:'MANOJ KUMAR K / Navadeep', away:'Praveen Kulandairaj S / GOKUL RAJ', sets:'6-4, 3-6, 10-8', win:'home' },
      ]},
    { home:'SAI TENNIS - A', score:'2-1', away:'PROSERVE - C', venue:'',
      courts:[
        { ct:1, home:'SATHISH KUMAR / VIBESRI', away:'ARUNKUMAR NAVASIVA / AMRIT S', sets:'3-6, 3-6', win:'away' },
        { ct:2, home:'KARTHIKEYAN S / AADITYA.A', away:'T REVAN / S DHANVIN', sets:'6-1, 6-3', win:'home' },
        { ct:3, home:'ANVESH.V / SUJAI', away:'ARUNKUMAR SANTHANAM / SAGAR JAIN', sets:'6-1, 6-3', win:'home' },
      ]},
    { home:'KGR - B', score:'2-1', away:'CBE CLUB - B', venue:'',
      courts:[
        { ct:1, home:'Dr KARTHIKEYAN SAIRAM / ADRIAN COSTA', away:'Ishaan Raveendran / Varsha Charan', sets:'6-4, 6-3', win:'home' },
        { ct:2, home:'AKASH D / GIRIDHAR R', away:'KARTHIK RAM / Santossh R', sets:'5-7, 4-6', win:'away' },
        { ct:3, home:'ROHAN BAIRAV M / SUDEV R B', away:'Aditya Srinivasan / Srivardan', sets:'6-4, 5-7, 10-6', win:'home' },
      ]},
  ]},

  // ── Week 3 ─────────────────────────────
  { week:3, date:'07-08 Feb 2026', done:true, matches:[
    { home:'TENNIGLO - B', score:'3-0', away:'VELAN - B', venue:'',
      courts:[
        { ct:1, home:'Ramesh Krishnan / Thrrivik Arun Pasad', away:'VIVEKANANDAN S / GOUTHAM S', sets:'6-4, 4-6, 10-7', win:'home' },
        { ct:2, home:'Jenith P / Sudhan Sekar', away:'R.KAILASH KUMAR / C.N.ANANDAGIRI', sets:'7-5, 6-0', win:'home' },
        { ct:3, home:'Aegan Balakumar / Moulieswaran S', away:'S.RAJKUMAR / DR.A.VINODH ANAND', sets:'6-3, 6-1', win:'home' },
      ]},
    { home:'LEVO SPORTS-C', score:'2-1', away:'ACTC - A', venue:'',
      courts:[
        { ct:1, home:'Praveen Kulandairaj S / GOKUL RAJ', away:'JAI GANESH L / RAM GANESH V R', sets:'6-1, 3-6, 10-8', win:'home' },
        { ct:2, home:'Manivannan / Arun Chakravarthi N', away:'THANGARASU T P / SARAVANA PRAKASH', sets:'6-1, 6-3', win:'home' },
        { ct:3, home:'VIJAY GANESH / Baranidhanarn', away:'VIJAYA KUMAR P / KARTHIK S', sets:'6-4, 4-6, 4-10', win:'away' },
      ]},
    { home:'SAI TENNIS - A', score:'2-1', away:'CBE CLUB - B', venue:'',
      courts:[
        { ct:1, home:'KARTHIKEYAN S / AADITYA.A', away:'Vikram Soundarraj / Srivardan', sets:'6-1, 7-6', win:'home' },
        { ct:2, home:'SUJAI / SATHISH KUMAR', away:'Santossh R / KARTHIK RAM', sets:'4-6, 6-4, 10-7', win:'home' },
        { ct:3, home:'ANVESH.V / HARIDHRA', away:'Aditya Srinivasan / Anvar Jay Varadaraj', sets:'4-6, 0-6', win:'away' },
      ]},
    { home:'KGR - B', score:'2-1', away:'ACE CLUB', venue:'',
      courts:[
        { ct:1, home:'GIRIDHAR R / ADRIAN COSTA', away:'KLAUS BERGMANN / RAVI KRISHNAMURTHY', sets:'6-2, 6-1', win:'home' },
        { ct:2, home:'ROHAN BAIRAV M / SUDEV R B', away:'VENKATESWARAN / PRABHAKAR DWARAPUDI', sets:'4-6, 7-5, 7-10', win:'away' },
        { ct:3, home:'Dr KARTHIKEYAN SAIRAM / KATHIRKAM S', away:'RAVI PONNUSAMY / SRINIVASAN S', sets:'6-1, 6-1', win:'home' },
      ]},
    { home:'THE METTUPALAYAM CLUB', score:'2-1', away:'PROSERVE - C', venue:'',
      courts:[
        { ct:1, home:'Senthil Kumar P / S Dakshinesh', away:'AMRIT S / SAGAR JAIN', sets:'3-6, 1-6', win:'away' },
        { ct:2, home:'Rishab Shankla G / Neeraj V Shankla', away:'ARUNKUMAR SANTHANAM / VASUDEV SURATH', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'R Pankaj Shankla / Ashwin Shankar', away:'SUSHIL PARVATHAM / ANYA PARVATHAM', sets:'6-0, 6-2', win:'home' },
      ]},
  ]},

  // ── Week 4 ─────────────────────────────
  { week:4, date:'14-15 Feb 2026', done:true, matches:[
    { home:'TENNIGLO - B', score:'3-0', away:'ACTC - A', venue:'',
      courts:[
        { ct:1, home:'Prabhakaran Ganeshan / Moulieswaran S', away:'ARUN C / VIJAYA KUMAR P', sets:'6-2, 1-6, 10-4', win:'home' },
        { ct:2, home:'Ramesh Krishnan / Sudhan Sekar', away:'JAI GANESH L / RAM GANESH V R', sets:'6-4, 6-3', win:'home' },
        { ct:3, home:'Aegan Balakumar / Jenith P', away:'SATHYANANTH / THANGARASU T P', sets:'6-2, 6-3', win:'home' },
      ]},
    { home:'SAI TENNIS - A', score:'2-1', away:'ANNUR CLUB - B', venue:'',
      courts:[
        { ct:1, home:'ANVESH.V / SUJAI', away:'YESURAJA G / DINESH RAJ R', sets:'6-3, 0-6, 10-8', win:'home' },
        { ct:2, home:'SATHISH KUMAR / HARIDHRA', away:'Navadeep / MANOJ KUMAR K', sets:'7-5, 0-6, 10-4', win:'home' },
        { ct:3, home:'KARTHIKEYAN S / AADITYA.A', away:'SENTHIL KUMAR P / KARTHIKEYAN S', sets:'6-2, 6-7, 7-10', win:'away' },
      ]},
    { home:'CBE CLUB - B', score:'3-0', away:'PROSERVE - C', venue:'',
      courts:[
        { ct:1, home:'KARTHIK RAM / Santossh R', away:'ARUNKUMAR NAVASIVA / VASUDEV SURATH', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'Aditya Srinivasan / Vikram Soundarraj', away:'AMRIT S / SAGAR JAIN', sets:'6-2, 6-4', win:'home' },
        { ct:3, home:'Anvar Jay Varadaraj / Srivardan', away:'T REVAN / S DHANVIN', sets:'6-3, 6-2', win:'home' },
      ]},
    { home:'KGR - B', score:'2-1', away:'THE METTUPALAYAM CLUB', venue:'',
      courts:[
        { ct:1, home:'Dr KARTHIKEYAN SAIRAM / KARTHIKEYAN K', away:'R Pankaj Shankla / Ashwin Shankar', sets:'3-6, 2-6', win:'away' },
        { ct:2, home:'SUDEV R B / ROHAN BAIRAV M', away:'Neeraj V Shankla / Rishab Shankla G', sets:'6-2, 6-2', win:'home' },
        { ct:3, home:'AKASH D / GIRIDHAR R', away:'S Dakshinesh / Manoj Shankla V', sets:'6-2, 6-2', win:'home' },
      ]},
    { home:'VELAN - B', score:'3-0', away:'ACE CLUB', venue:'',
      courts:[
        { ct:1, home:'M.M.M.SATHISH KUMAR / DR.A.VINODH ANAND', away:'RAVI PONNUSAMY / RAVI KRISHNAMURTHY', sets:'6-3, 6-3', win:'home' },
        { ct:2, home:'C.N.ANANDAGIRI / S.RAJKUMAR', away:'VENKATESWARAN / PRABHAKAR DWARAPUDI', sets:'7-6, 6-7, 10-8', win:'home' },
        { ct:3, home:'VIVEKANANDAN S / NISHANTH P V', away:'SRINIVASAN S / S KRISHNAMOORTHI', sets:'6-1, 6-3', win:'home' },
      ]},
  ]},

  // ── Week 5 ─────────────────────────────
  { week:5, date:'21-22 Feb 2026', done:true, matches:[
    { home:'TENNIGLO - B', score:'3-0', away:'PROSERVE - C', venue:'',
      courts:[
        { ct:1, home:'Ramesh Krishnan / Thrrivik Arun Pasad', away:'VASUDEV SURATH / ANYA PARVATHAM', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Jenith P / Sudhan Sekar', away:'SUSHIL PARVATHAM / S DHANVIN', sets:'6-1, 6-0', win:'home' },
        { ct:3, home:'Aegan Balakumar / Moulieswaran S', away:'ARUNKUMAR NAVASIVA / ARUNKUMAR SANTHANAM', sets:'6-1, 6-4', win:'home' },
      ]},
    { home:'THE METTUPALAYAM CLUB', score:'2-1', away:'SAI TENNIS - A', venue:'',
      courts:[
        { ct:1, home:'Senthil Kumar P / S Dakshinesh', away:'SATHISH KUMAR / HARIDHRA', sets:'1-6, 3-6', win:'away' },
        { ct:2, home:'R Pankaj Shankla / Ashwin Shankar', away:'KARTHIKEYAN S / AADITYA.A', sets:'6-4, 2-6, 11-9', win:'home' },
        { ct:3, home:'Neeraj V Shankla / Rishab Shankla G', away:'SUJAI / ANVESH.V', sets:'3-6, 6-4, 10-3', win:'home' },
      ]},
    { home:'CBE CLUB - B', score:'3-0', away:'ACE CLUB', venue:'',
      courts:[
        { ct:1, home:'Aditya Srinivasan / Santossh R', away:'VENKATESWARAN / PRABHAKAR DWARAPUDI', sets:'6-3, 7-5', win:'home' },
        { ct:2, home:'Anvar Jay Varadaraj / Srivardan', away:'RAVI PONNUSAMY / SRINIVASAN S', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'KARTHIK RAM / Vikram Soundarraj', away:'RAVI KRISHNAMURTHY / KLAUS BERGMANN', sets:'6-4, 6-2', win:'home' },
      ]},
    { home:'LEVO SPORTS-C', score:'3-0', away:'PROSERVE - C', venue:'',
      courts:[
        { ct:1, home:'Manivannan / Arun Chakravarthi N', away:'ARUNKUMAR NAVASIVA / ARUNKUMAR SANTHANAM', sets:'3-6, 7-5, 10-8', win:'home' },
        { ct:2, home:'Praveen Kulandairaj S / Selva', away:'SAGAR JAIN / AMRIT S', sets:'7-5, 6-2', win:'home' },
        { ct:3, home:'Baranidhanarn / VIJAY GANESH', away:'SUSHIL PARVATHAM / ANYA PARVATHAM', sets:'6-0, 6-1', win:'home' },
      ]},
    { home:'KGR - B', score:'2-1', away:'ANNUR CLUB - B', venue:'',
      courts:[
        { ct:1, home:'SUDEV R B / ADRIAN COSTA', away:'SENTHIL KUMAR P / KARTHIKEYAN S', sets:'6-4, 6-3', win:'home' },
        { ct:2, home:'AKASH D / ROHAN BAIRAV M', away:'MANOJ KUMAR K / Navadeep', sets:'4-6, 6-1, 8-10', win:'away' },
        { ct:3, home:'Dr KARTHIKEYAN SAIRAM / GIRIDHAR R', away:'YESURAJA G / DINESH RAJ R', sets:'6-3, 6-3', win:'home' },
      ]},
  ]},

  // ── Week 6 ─────────────────────────────
  { week:6, date:'28 Feb - 01 Mar 2026', done:true, matches:[
    { home:'THE METTUPALAYAM CLUB', score:'3-0', away:'ACE CLUB', venue:'',
      courts:[
        { ct:1, home:'Neeraj V Shankla / Rishab Shankla G', away:'RAVI KRISHNAMURTHY / KLAUS BERGMANN', sets:'6-3, 2-6, 10-4', win:'home' },
        { ct:2, home:'Ashwin Shankar / R Pankaj Shankla', away:'VENKATESWARAN / PRABHAKAR DWARAPUDI', sets:'6-3, 6-1', win:'home' },
        { ct:3, home:'Manoj Shankla V / Senthil Kumar P', away:'RAVI PONNUSAMY / SRINIVASAN S', sets:'6-1, 3-6, 10-6', win:'home' },
      ]},
    { home:'SAI TENNIS - A', score:'2-1', away:'ACTC - A', venue:'',
      courts:[
        { ct:1, home:'KARTHIKEYAN S / AADITYA.A', away:'KARTHIK S / THANGARASU T P', sets:'6-4, 3-6, 10-7', win:'home' },
        { ct:2, home:'SUJAI / ANVESH.V', away:'RAM GANESH V R / TILIPAN T', sets:'6-4, 6-3', win:'home' },
        { ct:3, home:'SATHISH KUMAR / HARIDHRA', away:'ARUN C / VIJAYA KUMAR P', sets:'4-6, 4-6', win:'away' },
      ]},
    { home:'TENNIGLO - B', score:'2-1', away:'CBE CLUB - B', venue:'',
      courts:[
        { ct:1, home:'Prabhakaran Ganeshan / Moulieswaran S', away:'Santossh R / Vikram Soundarraj', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'Aegan Balakumar / Jenith P', away:'Ishaan Raveendran / Anvar Jay Varadaraj', sets:'2-6, 6-2, 10-3', win:'home' },
        { ct:3, home:'Ramesh Krishnan / Sudhan Sekar', away:'Aditya Srinivasan / KARTHIK RAM', sets:'4-6, 4-6', win:'away' },
      ]},
    { home:'LEVO SPORTS-C', score:'3-0', away:'PROSERVE - C', venue:'',
      courts:[
        { ct:1, home:'Manivannan / Arun Chakravarthi N', away:'ARUNKUMAR NAVASIVA / ARUNKUMAR SANTHANAM', sets:'3-6, 7-5, 10-8', win:'home' },
        { ct:2, home:'Praveen Kulandairaj S / Selva', away:'SAGAR JAIN / AMRIT S', sets:'7-5, 6-2', win:'home' },
        { ct:3, home:'Baranidhanarn / VIJAY GANESH', away:'SUSHIL PARVATHAM / ANYA PARVATHAM', sets:'6-0, 6-1', win:'home' },
      ]},
    { home:'CBE CLUB - B', score:'2-1', away:'THE METTUPALAYAM CLUB', venue:'',
      courts:[
        { ct:1, home:'Anvar Jay Varadaraj / Ishaan Raveendran', away:'Rishab Shankla G / S Dakshinesh', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'Aditya Srinivasan / Vikram Soundarraj', away:'Neeraj V Shankla / Senthil Kumar P', sets:'6-4, 6-1', win:'home' },
        { ct:3, home:'KARTHIK RAM / Santossh R', away:'R Pankaj Shankla / Ashwin Shankar', sets:'3-6, 2-6', win:'away' },
      ]},
  ]},

  // ── Week 7 ─────────────────────────────
  { week:7, date:'07-08 Mar 2026', done:true, matches:[
    { home:'TENNIGLO - B', score:'3-0', away:'THE METTUPALAYAM CLUB', venue:'',
      courts:[
        { ct:1, home:'Jenith P / Krishnaraj', away:'Neeraj V Shankla / Rishab Shankla G', sets:'7-5, 7-5', win:'home' },
        { ct:2, home:'Ramesh Krishnan / Sudhan Sekar', away:'Manoj Shankla V / Evanth Nahar', sets:'6-2, 6-1', win:'home' },
        { ct:3, home:'Aegan Balakumar / Moulieswaran S', away:'R Pankaj Shankla / Ashwin Shankar', sets:'4-6, 6-2, 10-5', win:'home' },
      ]},
    { home:'ACTC - A', score:'3-0', away:'VELAN - B', venue:'',
      courts:[
        { ct:1, home:'TILIPAN T / VIJAYA KUMAR P', away:'VIVEKANANDAN S / GOUTHAM S', sets:'6-0, 6-2', win:'home' },
        { ct:2, home:'RAM GANESH V R / JAI GANESH L', away:'DR.A.VINODH ANAND / NISHANTH P V', sets:'6-3, 3-6, 14-12', win:'home' },
        { ct:3, home:'KARTHIK S / THANGARASU T P', away:'R.KAILASH KUMAR / C.N.ANANDAGIRI', sets:'6-1, 6-2', win:'home' },
      ]},
    { home:'ANNUR CLUB - B', score:'3-0', away:'PROSERVE - C', venue:'',
      courts:[
        { ct:1, home:'MANOJ KUMAR K / Navadeep', away:'SAGAR JAIN / AMRIT S', sets:'7-5, 6-2', win:'home' },
        { ct:2, home:'DINESH RAJ R / YESURAJA G', away:'SUSHIL PARVATHAM / VASUDEV SURATH', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'SENTHIL KUMAR P / KARTHIKEYAN S', away:'ARUNKUMAR NAVASIVA / ARUNKUMAR SANTHANAM', sets:'6-2, 6-0', win:'home' },
      ]},
    { home:'SAI TENNIS - A', score:'3-0', away:'ACE CLUB', venue:'',
      courts:[
        { ct:1, home:'SUJAI / ANVESH.V', away:'RAVI PONNUSAMY / SRINIVASAN S', sets:'6-0, 6-4', win:'home' },
        { ct:2, home:'KARTHIKEYAN S / AADITYA.A', away:'PRABHAKAR DWARAPUDI / RAVI KRISHNAMURTHY', sets:'6-2, 6-3', win:'home' },
        { ct:3, home:'SATHISH KUMAR / VIBESRI', away:'LOGESHWARAN V / S KRISHNAMOORTHI', sets:'6-2, 6-4', win:'home' },
      ]},
    { home:'CBE CLUB - B', score:'2-1', away:'LEVO SPORTS-C', venue:'',
      courts:[
        { ct:1, home:'Ishaan Raveendran / Anvar Jay Varadaraj', away:'Praveen Kulandairaj S / VIJAY GANESH', sets:'6-7, 5-7', win:'away' },
        { ct:2, home:'Santossh R / KARTHIK RAM', away:'Manivannan / Arun Chakravarthi N', sets:'7-6, 4-6, 10-8', win:'home' },
        { ct:3, home:'Aditya Srinivasan / Vikram Soundarraj', away:'Baranidhanarn / Chalapathy', sets:'6-4, 6-2', win:'home' },
      ]},
  ]},

  // ── Week 8 ─────────────────────────────
  { week:8, date:'14-15 Mar 2026', done:true, matches:[
    { home:'ANNUR CLUB - B', score:'2-1', away:'VELAN - B', venue:'',
      courts:[
        { ct:1, home:'KARTHIKEYAN S / SENTHIL KUMAR P', away:'M.M.M.SATHISH KUMAR / S.RAJKUMAR', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'MANOJ KUMAR K / Navadeep', away:'GOUTHAM S / NISHANTH P V', sets:'6-4, 2-6, 10-7', win:'home' },
        { ct:3, home:'PRABHAKARAN E / DINESH RAJ R', away:'DR.A.VINODH ANAND / R.KAILASH KUMAR', sets:'2-6, 4-6', win:'away' },
      ]},
    { home:'KGR - B', score:'3-0', away:'LEVO SPORTS-C', venue:'',
      courts:[
        { ct:1, home:'SUDEV R B / ADRIAN COSTA', away:'Praveen Kulandairaj S / VIJAY GANESH', sets:'5-7, 6-2, 10-7', win:'home' },
        { ct:2, home:'ROHAN BAIRAV M / Dr KARTHIKEYAN SAIRAM', away:'Manivannan / Arun Chakravarthi N', sets:'6-2, 6-1', win:'home' },
        { ct:3, home:'AKASH D / GIRIDHAR R', away:'Chalapathy / Baranidhanarn', sets:'6-2, 6-2', win:'home' },
      ]},
    { home:'TENNIGLO - B', score:'3-0', away:'PROSERVE - C', venue:'',
      courts:[
        { ct:1, home:'Ramesh Krishnan / Thrrivik Arun Pasad', away:'VASUDEV SURATH / ANYA PARVATHAM', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Jenith P / Sudhan Sekar', away:'SUSHIL PARVATHAM / S DHANVIN', sets:'6-1, 6-0', win:'home' },
        { ct:3, home:'Aegan Balakumar / Moulieswaran S', away:'ARUNKUMAR NAVASIVA / ARUNKUMAR SANTHANAM', sets:'6-1, 6-4', win:'home' },
      ]},
    { home:'THE METTUPALAYAM CLUB', score:'2-1', away:'SAI TENNIS - A', venue:'',
      courts:[
        { ct:1, home:'Senthil Kumar P / S Dakshinesh', away:'SATHISH KUMAR / HARIDHRA', sets:'1-6, 3-6', win:'away' },
        { ct:2, home:'R Pankaj Shankla / Ashwin Shankar', away:'KARTHIKEYAN S / AADITYA.A', sets:'6-4, 2-6, 11-9', win:'home' },
        { ct:3, home:'Neeraj V Shankla / Rishab Shankla G', away:'SUJAI / ANVESH.V', sets:'3-6, 6-4, 10-3', win:'home' },
      ]},
    { home:'CBE CLUB - B', score:'3-0', away:'ACE CLUB', venue:'',
      courts:[
        { ct:1, home:'Aditya Srinivasan / Santossh R', away:'VENKATESWARAN / PRABHAKAR DWARAPUDI', sets:'6-3, 7-5', win:'home' },
        { ct:2, home:'Anvar Jay Varadaraj / Srivardan', away:'RAVI PONNUSAMY / SRINIVASAN S', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'KARTHIK RAM / Vikram Soundarraj', away:'RAVI KRISHNAMURTHY / KLAUS BERGMANN', sets:'6-4, 6-2', win:'home' },
      ]},
  ]},

  // ── Week 9 ─────────────────────────────
  { week:9, date:'21-22 Mar 2026', done:true, matches:[
    { home:'LEVO SPORTS-C', score:'2-1', away:'ACE CLUB', venue:'',
      courts:[
        { ct:1, home:'Praveen Kulandairaj S / Baranidhanarn', away:'PRABHAKAR DWARAPUDI / RAVI PONNUSAMY', sets:'7-5, 6-3', win:'home' },
        { ct:2, home:'VIJAY GANESH / Selva', away:'LOGESHWARAN V / S KRISHNAMOORTHI', sets:'6-1, 6-3', win:'home' },
        { ct:3, home:'Nishica Gomes / Chalapathy', away:'RAVI KRISHNAMURTHY / SRINIVASAN S', sets:'1-6, 3-6', win:'away' },
      ]},
    { home:'ACTC - A', score:'3-0', away:'PROSERVE - C', venue:'',
      courts:[
        { ct:1, home:'ARUN C / VIJAYA KUMAR P', away:'SAGAR JAIN / AMRIT S', sets:'6-4, 3-6, 10-7', win:'home' },
        { ct:2, home:'KARTHIK S / RAM GANESH V R', away:'ANYA PARVATHAM / T REVAN', sets:'6-0, 6-2', win:'home' },
        { ct:3, home:'TILIPAN T / THANGARASU T P', away:'ARUNKUMAR NAVASIVA / ARUNKUMAR SANTHANAM', sets:'6-4, 6-3', win:'home' },
      ]},
    { home:'SAI TENNIS - A', score:'2-1', away:'TENNIGLO - B', venue:'',
      courts:[
        { ct:1, home:'KARTHIKEYAN S / AADITYA.A', away:'Aegan Balakumar / Jenith P', sets:'6-4, 6-3', win:'home' },
        { ct:2, home:'SATHISH KUMAR / SUJAI', away:'Ramesh Krishnan / Sudhan Sekar', sets:'7-6, 6-4', win:'home' },
        { ct:3, home:'ANVESH.V / HARIDHRA', away:'Moulieswaran S / Prabhakaran Ganeshan', sets:'1-6, 0-6', win:'away' },
      ]},
    { home:'ANNUR CLUB - B', score:'2-1', away:'THE METTUPALAYAM CLUB', venue:'',
      courts:[
        { ct:1, home:'YESURAJA G / DINESH RAJ R', away:'Neeraj V Shankla / Rishab Shankla G', sets:'4-6, 6-2, 4-10', win:'away' },
        { ct:2, home:'MANOJ KUMAR K / Navadeep', away:'Senthil Kumar P / Manoj Shankla V', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'SENTHIL KUMAR P / KARTHIKEYAN S', away:'R Pankaj Shankla / Ashwin Shankar', sets:'6-3, 6-3', win:'home' },
      ]},
    { home:'VELAN - B', score:'2-1', away:'KGR - B', venue:'',
      courts:[
        { ct:1, home:'VIVEKANANDAN S / NISHANTH P V', away:'AKASH D / GIRIDHAR R', sets:'6-4, 6-2', win:'home' },
        { ct:2, home:'S.RAJKUMAR / DR.A.VINODH ANAND', away:'Dr KARTHIKEYAN SAIRAM / KARTHIKEYAN K', sets:'7-5, 2-6, 10-7', win:'home' },
        { ct:3, home:'C.N.ANANDAGIRI / M.M.M.SATHISH KUMAR', away:'ADRIAN COSTA / SUDEV R B', sets:'4-6, 4-6', win:'away' },
      ]},
  ]},

  // ── Week 10 ─────────────────────────────
  { week:10, date:'28-29 Mar 2026', done:true, matches:[
    { home:'SAI TENNIS - A', score:'3-0', away:'VELAN - B', venue:'',
      courts:[
        { ct:1, home:'KARTHIKEYAN S / VIBESRI', away:'DR.A.VINODH ANAND / S.RAJKUMAR', sets:'7-6, 6-0', win:'home' },
        { ct:2, home:'AADITYA.A / SATHISH KUMAR', away:'VIVEKANANDAN S / NISHANTH P V', sets:'6-1, 6-2', win:'home' },
        { ct:3, home:'SUJAI / ANVESH.V', away:'C.N.ANANDAGIRI / M.R.GAUTHAM', sets:'6-7, 6-2, 10-8', win:'home' },
      ]},
    { home:'CBE CLUB - B', score:'2-1', away:'ANNUR CLUB - B', venue:'',
      courts:[
        { ct:1, home:'KARTHIK RAM / Mritun Anand', away:'KARTHIKEYAN S / DINESH RAJ R', sets:'6-0, 6-2', win:'home' },
        { ct:2, home:'Anvar Jay Varadaraj / Ishaan Raveendran', away:'YESURAJA G / SENTHIL KUMAR P', sets:'2-6, 0-6', win:'away' },
        { ct:3, home:'Aditya Srinivasan / Vikram Soundarraj', away:'MANOJ KUMAR K / Navadeep', sets:'6-3, 6-1', win:'home' },
      ]},
    { home:'LEVO SPORTS-C', score:'2-1', away:'THE METTUPALAYAM CLUB', venue:'',
      courts:[
        { ct:1, home:'Arun Chakravarthi N / Manivannan', away:'S Dakshinesh / Senthil Kumar P', sets:'6-2, 6-3', win:'home' },
        { ct:2, home:'Praveen Kulandairaj S / Chalapathy', away:'Rishab Shankla G / Neeraj V Shankla', sets:'7-6, 6-3', win:'home' },
        { ct:3, home:'Baranidhanarn / Selva', away:'R Pankaj Shankla / Ashwin Shankar', sets:'5-7, 2-6', win:'away' },
      ]},
    { home:'TENNIGLO - B', score:'3-0', away:'ACE CLUB', venue:'',
      courts:[
        { ct:1, home:'Ramesh Krishnan / Jenith P', away:'RAVI PONNUSAMY / RAVI KRISHNAMURTHY', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'Thrrivik Arun Pasad / Prabhakaran Ganeshan', away:'PRABHAKAR DWARAPUDI / VENKATESWARAN', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Moulieswaran S / Aegan Balakumar', away:'LOGESHWARAN V / S KRISHNAMOORTHI', sets:'6-1, 6-2', win:'home' },
      ]},
    { home:'KGR - B', score:'3-0', away:'ACTC - A', venue:'',
      courts:[
        { ct:1, home:'AKASH D / GIRIDHAR R', away:'ARUN C / TILIPAN T', sets:'6-4, 6-2', win:'home' },
        { ct:2, home:'SUDEV R B / ADRIAN COSTA', away:'KARTHIK S / RAM GANESH V R', sets:'6-4, 3-6, 10-5', win:'home' },
        { ct:3, home:'KATHIRKAM S / Dr KARTHIKEYAN SAIRAM', away:'SARAVANA PRAKASH / THANGARASU T P', sets:'2-6, 6-1, 10-4', win:'home' },
      ]},
  ]},

  // ── Week 11 ─────────────────────────────
  { week:11, date:'04-05 Apr 2026', done:true, matches:[
    { home:'CBE CLUB - B', score:'2-1', away:'ACTC - A', venue:'',
      courts:[
        { ct:1, home:'Ishaan Raveendran / Anvar Jay Varadaraj', away:'RAM GANESH V R / KARTHIK S', sets:'7-5, 6-2', win:'home' },
        { ct:2, home:'KARTHIK RAM / Mritun Anand', away:'ARUN C / VIJAYA KUMAR P', sets:'6-2, 6-3', win:'home' },
        { ct:3, home:'Aditya Srinivasan / Vikram Soundarraj', away:'THANGARASU T P / JAI GANESH L', sets:'2-6, 6-3, 8-10', win:'away' },
      ]},
    { home:'TENNIGLO - B', score:'3-0', away:'LEVO SPORTS-C', venue:'',
      courts:[
        { ct:1, home:'Ramesh Krishnan / Jenith P', away:'VIJAY GANESH / Selva', sets:'6-4, 6-3', win:'home' },
        { ct:2, home:'Moulieswaran S / Aegan Balakumar', away:'Baranidhanarn / Krithik Varshan', sets:'6-2, 6-3', win:'home' },
        { ct:3, home:'Krishnaraj / Thrrivik Arun Pasad', away:'Manivannan / Arun Chakravarthi N', sets:'7-5, 1-6, 10-6', win:'home' },
      ]},
    { home:'ANNUR CLUB - B', score:'3-0', away:'ACE CLUB', venue:'',
      courts:[
        { ct:1, home:'Navadeep / YESURAJA G', away:'RAVI PONNUSAMY / PRABHAKAR DWARAPUDI', sets:'6-2, 6-2', win:'home' },
        { ct:2, home:'PRABHAKARAN E / SENTHIL KUMAR P', away:'PANNIRSELVAM K / RAVI KRISHNAMURTHY', sets:'6-2, 6-2', win:'home' },
        { ct:3, home:'MANOJ KUMAR K / KARTHIKEYAN S', away:'SARAVANA / LOGESHWARAN V', sets:'0-0, 0-0', win:'home' },
      ]},
    { home:'SAI TENNIS - A', score:'2-1', away:'KGR - B', venue:'',
      courts:[
        { ct:1, home:'KARTHIKEYAN S / AADITYA.A', away:'Dr KARTHIKEYAN SAIRAM / ROHAN BAIRAV M', sets:'7-6, 4-6, 10-3', win:'home' },
        { ct:2, home:'SUJAI / SATHISH KUMAR', away:'AKASH D / GIRIDHAR R', sets:'5-7, 6-2, 10-3', win:'home' },
        { ct:3, home:'ANVESH.V / HARIDHRA', away:'SUDEV R B / ADRIAN COSTA', sets:'4-6, 5-7', win:'away' },
      ]},
    { home:'VELAN - B', score:'2-1', away:'PROSERVE - C', venue:'',
      courts:[
        { ct:1, home:'R.KAILASH KUMAR / DR.A.VINODH ANAND', away:'ARUNKUMAR SANTHANAM / SUSHIL PARVATHAM', sets:'6-0, 3-6, 10-6', win:'home' },
        { ct:2, home:'S.RAJKUMAR / GOUTHAM S', away:'ARUNKUMAR NAVASIVA / VASUDEV SURATH', sets:'6-3, 6-4', win:'home' },
        { ct:3, home:'VIVEKANANDAN S / NISHANTH P V', away:'AMRIT S / T REVAN', sets:'4-6, 4-6', win:'away' },
      ]},
  ]},
];
