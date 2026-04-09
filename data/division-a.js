// ============================================================
// DIVISION A — CDTA 2026
// ============================================================

const DIV_A_TEAMS = [
  { short:'CCTA-A', full:'CCTA - A', captain:'GOWTHAM V', mobile:'', players:11, club:'CCTA', surface:'', division:'A' },
  { short:'PSRV-A', full:'PROSERVE - A', captain:'MANOJ KUMAR', mobile:'', players:14, club:'ProServe', surface:'', division:'A' },
  { short:'COS-C', full:'COSMO - C', captain:'Dr.Thangaraj', mobile:'', players:14, club:'Cosmo', surface:'', division:'A' },
  { short:'LEVO', full:'LEVO SPORTS - A', captain:'Gowtham S', mobile:'', players:11, club:'Levo Sports', surface:'', division:'A' },
  { short:'KGR-A', full:'KGR - A', captain:'RAMESH K G', mobile:'', players:9, club:'KGR', surface:'', division:'A' },
  { short:'PHX', full:'PHOENIX', captain:'S VIJAI KUMAR', mobile:'', players:10, club:'Phoenix', surface:'', division:'A' },
  { short:'COS-A', full:'COSMO - A', captain:'JAYAKUMAR RAMDASS', mobile:'', players:15, club:'Cosmo', surface:'', division:'A' },
  { short:'PSCH-A', full:'PROSCHOOL - A', captain:'BHARAT N SHAH', mobile:'', players:12, club:'ProSchool', surface:'', division:'A' },
  { short:'DHRM', full:'DHARMU - A', captain:'SANJEEV SUNDARAM', mobile:'', players:11, club:'Dharmu', surface:'', division:'A' },
  { short:'ALV-A', full:'ALV ACADEMY', captain:'DR. RAJESH D', mobile:'', players:10, club:'ALV Academy', surface:'', division:'A' },
  { short:'PSRV-B', full:'PROSERVE - B', captain:'Ishvar Arjun', mobile:'', players:7, club:'ProServe', surface:'', division:'A' },
];

const DIV_A_STANDINGS = [
  { rank:1, short:'CCTA-A', full:'CCTA - A', pts:26, played:30, setsW:54, setsL:13, gamesW:335, gamesL:165 },
  { rank:2, short:'PSRV-A', full:'PROSERVE - A', pts:26, played:30, setsW:52, setsL:15, gamesW:319, gamesL:175 },
  { rank:3, short:'COS-C', full:'COSMO - C', pts:22, played:30, setsW:48, setsL:17, gamesW:332, gamesL:158 },
  { rank:4, short:'LEVO', full:'LEVO SPORTS - A', pts:17, played:30, setsW:35, setsL:28, gamesW:284, gamesL:215 },
  { rank:5, short:'KGR-A', full:'KGR - A', pts:15, played:30, setsW:32, setsL:33, gamesW:271, gamesL:222 },
  { rank:6, short:'PHX', full:'PHOENIX', pts:15, played:30, setsW:35, setsL:31, gamesW:265, gamesL:223 },
  { rank:7, short:'COS-A', full:'COSMO - A', pts:14, played:30, setsW:34, setsL:34, gamesW:276, gamesL:236 },
  { rank:8, short:'PSCH-A', full:'PROSCHOOL - A', pts:14, played:30, setsW:29, setsL:33, gamesW:193, gamesL:245 },
  { rank:9, short:'DHRM', full:'DHARMU - A', pts:9, played:30, setsW:21, setsL:44, gamesW:182, gamesL:284 },
  { rank:10, short:'ALV-A', full:'ALV ACADEMY', pts:7, played:30, setsW:15, setsL:47, gamesW:118, gamesL:301 },
  { rank:11, short:'PSRV-B', full:'PROSERVE - B', pts:0, played:30, setsW:0, setsL:60, gamesW:9, gamesL:360 },
];

const DIV_A_PLAYERS = [
  // CCTA - A
  { name:'GOWTHAM V', team:'CCTA-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-a/ccta-a/gowtham-v.jpeg' },
  { name:'Vimal Raj', team:'CCTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/ccta-a/vimal-raj.jpeg' },
  { name:'ROHIT', team:'CCTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/ccta-a/rohit.jpeg' },
  { name:'Jaicharan c', team:'CCTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/ccta-a/jaicharan-c.jpg' },
  { name:'Aravind M', team:'CCTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/ccta-a/aravind-m.jpg' },
  { name:'Anirudha B', team:'CCTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/ccta-a/anirudha-b.jpg' },
  { name:'Haridev venkatesan', team:'CCTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/ccta-a/haridev-venkatesan.jpg' },
  { name:'sivaguru velliangiri', team:'CCTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/ccta-a/sivaguru-velliangiri.jpg' },
  { name:'Cidesh S', team:'CCTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/ccta-a/cidesh-s.jpg' },
  { name:'Jaiwanth S', team:'CCTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/ccta-a/jaiwanth-s.jpg' },
  { name:'Kavin M', team:'CCTA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/ccta-a/kavin-m.jpg' },

  // PROSERVE - A
  { name:'MANOJ KUMAR', team:'PSRV-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/manoj-kumar.jpg' },
  { name:'VIGNESH', team:'PSRV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/vignesh.jpg' },
  { name:'KAVIN KARTHIK K S', team:'PSRV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/kavin-karthik-k-s.jpg' },
  { name:'ishaan vijay', team:'PSRV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/ishaan-vijay.jpeg' },
  { name:'BHARATH NISHOK', team:'PSRV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/bharath-nishok.jpg' },
  { name:'DEEPAK S', team:'PSRV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/deepak-s.jpg' },
  { name:'SHRAVAN ANAND', team:'PSRV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/shravan-anand.jpg' },
  { name:'KANDHAVEL M', team:'PSRV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/kandhavel-m.jpg' },
  { name:'MAAYA', team:'PSRV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/maaya.jpg' },
  { name:'BOOPATHY S', team:'PSRV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/boopathy-s.jpg' },
  { name:'tarun vikram', team:'PSRV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/tarun-vikram.jpg' },
  { name:'venkatesh', team:'PSRV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/venkatesh.jpg' },
  { name:'allen chris joel', team:'PSRV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/allen-chris-joel.jpg' },
  { name:'kishore', team:'PSRV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-a/kishore.jpg' },

  // COSMO - C
  { name:'Dr.Thangaraj', team:'COS-C', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/drthangaraj.png' },
  { name:'Rajesh Manoharan', team:'COS-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/rajesh-manoharan.jpg' },
  { name:'R.Ramanand', team:'COS-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/rramanand.jpg' },
  { name:'Arjun Balu', team:'COS-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/arjun-balu.jpg' },
  { name:'Kapil Krishnamurthy', team:'COS-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/kapil-krishnamurthy.jpg' },
  { name:'Nikhil Sunil', team:'COS-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/nikhil-sunil.jpg' },
  { name:'Mahen Mandradiar', team:'COS-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/mahen-mandradiar.jpg' },
  { name:'Ramakrishnan R', team:'COS-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/ramakrishnan-r.jpg' },
  { name:'Harnish', team:'COS-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/harnish.jpeg' },
  { name:'V.M.Ranjeet', team:'COS-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/vmranjeet.jpeg' },
  { name:'Narendran R', team:'COS-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/narendran-r.jpeg' },
  { name:'Harisharan Baskaran', team:'COS-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/harisharan-baskaran.jpeg' },
  { name:'RAMESH VIGNESHWARAN', team:'COS-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/ramesh-vigneshwaran.jpeg' },
  { name:'Kannan', team:'COS-C', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-c/kannan.jpeg' },

  // LEVO SPORTS - A
  { name:'Gowtham S', team:'LEVO', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-a/levo/gowtham-s.jpg' },
  { name:'Ishaan Sudharshan', team:'LEVO', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/levo/ishaan-sudharshan.jpg' },
  { name:'Bhavishnu', team:'LEVO', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/levo/bhavishnu.jpg' },
  { name:'Tanish Jayanth V C', team:'LEVO', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/levo/tanish-jayanth-v-c.jpg' },
  { name:'Athray', team:'LEVO', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/levo/athray.jpg' },
  { name:'Azeez', team:'LEVO', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/levo/azeez.jpeg' },
  { name:'Raj Prakash', team:'LEVO', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/levo/raj-prakash.jpg' },
  { name:'Preetham Ganesh', team:'LEVO', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/levo/preetham-ganesh.jpg' },
  { name:'Manish', team:'LEVO', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/levo/manish.jpg' },
  { name:'Vedansh', team:'LEVO', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/levo/vedansh.jpg' },
  { name:'Harshavarthan', team:'LEVO', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/levo/harshavarthan.jpg' },

  // KGR - A
  { name:'RAMESH K G', team:'KGR-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-a/kgr-a/ramesh-k-g.jpg' },
  { name:'SREE HARI G', team:'KGR-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/kgr-a/sree-hari-g.png' },
  { name:'SURESH K G', team:'KGR-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/kgr-a/suresh-k-g.jpg' },
  { name:'SUNDARARAMAN C', team:'KGR-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/kgr-a/sundararaman-c.jpg' },
  { name:'NIKIL B', team:'KGR-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/kgr-a/nikil-b.jpg' },
  { name:'AJITHKUMAR S', team:'KGR-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/kgr-a/ajithkumar-s.jpg' },
  { name:'PARTHASARATHI S', team:'KGR-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/kgr-a/parthasarathi-s.jpeg' },
  { name:'AKSHAY A', team:'KGR-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/kgr-a/akshay-a.jpeg' },
  { name:'NEEL ARJUN R', team:'KGR-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/kgr-a/neel-arjun-r.jpeg' },

  // PHOENIX
  { name:'S VIJAI KUMAR', team:'PHX', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-a/phx/s-vijai-kumar.jpg' },
  { name:'SHRI KUMAR V', team:'PHX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/phx/shri-kumar-v.jpg' },
  { name:'VASANT RANGANATHEN S', team:'PHX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/phx/vasant-ranganathen-s.jpg' },
  { name:'VIVEKANAND K C', team:'PHX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/phx/vivekanand-k-c.jpg' },
  { name:'ANISH FROILAN R', team:'PHX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/phx/anish-froilan-r.jpeg' },
  { name:'OGES THEYJO J', team:'PHX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/phx/oges-theyjo-j.jpg' },
  { name:'HEMANYA AMBALAVANAN', team:'PHX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/phx/hemanya-ambalavanan.jpg' },
  { name:'BALAJI L R', team:'PHX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/phx/balaji-l-r.jpg' },
  { name:'M SAYED SOHAIL HAQUE', team:'PHX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/phx/m-sayed-sohail-haque.jpg' },
  { name:'VAIBHAV', team:'PHX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/phx/vaibhav.jpeg' },

  // COSMO - A
  { name:'JAYAKUMAR RAMDASS', team:'COS-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/jayakumar-ramdass.jpeg' },
  { name:'VISHNU', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/vishnu.png' },
  { name:'VIKRAM', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/vikram.png' },
  { name:'P S SADASIVAN (PREM)', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/p-s-sadasivan-prem.jpg' },
  { name:'RAJKUMAR', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/rajkumar.jpg' },
  { name:'ANISH', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/anish.jpg' },
  { name:'SADHASIVAM', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/sadhasivam.jpg' },
  { name:'SHRAVANTH', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/shravanth.jpg' },
  { name:'ASVIN RAAM', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/asvin-raam.jpg' },
  { name:'S.S.PRITHIV', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/ssprithiv.jpg' },
  { name:'V YOGANANTH', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/v-yogananth.jpg' },
  { name:'G MATHANSEKAR', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/g-mathansekar.jpeg' },
  { name:'A S  RITHISH ABINAV', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/a-s-rithish-abinav.jpeg' },
  { name:'Y SUDHIRTH', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/y-sudhirth.jpeg' },
  { name:'S V VIJEASWARAN', team:'COS-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/cos-a/s-v-vijeaswaran.jpeg' },

  // PROSCHOOL - A
  { name:'BHARAT N SHAH', team:'PSCH-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-a/psch-a/bharat-n-shah.jpg' },
  { name:'KUSHALRAJ.B', team:'PSCH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psch-a/kushalrajb.jpg' },
  { name:'VISWANATHAN.VENKATRAMAN', team:'PSCH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psch-a/viswanathanvenkatraman.png' },
  { name:'RAMESH. D', team:'PSCH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psch-a/ramesh-d.png' },
  { name:'SAACHIN RAJA', team:'PSCH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psch-a/saachin-raja.jpg' },
  { name:'JEYADURAI SARKKARAI', team:'PSCH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psch-a/jeyadurai-sarkkarai.png' },
  { name:'ARAVIND S', team:'PSCH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psch-a/aravind-s.jpg' },
  { name:'NAVIN R', team:'PSCH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psch-a/navin-r.jpg' },
  { name:'BALADHARUNESH B', team:'PSCH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psch-a/baladharunesh-b.jpg' },
  { name:'YASHVANTH A', team:'PSCH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psch-a/yashvanth-a.jpg' },
  { name:'MANIKANDAN BOSE', team:'PSCH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psch-a/manikandan-bose.jpg' },
  { name:'MUKILAN.V', team:'PSCH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psch-a/mukilanv.jpeg' },

  // DHARMU - A
  { name:'SANJEEV SUNDARAM', team:'DHRM', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-a/dhrm/sanjeev-sundaram.jpg' },
  { name:'MANI N', team:'DHRM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/dhrm/mani-n.jpg' },
  { name:'SENTHIL SRINIVASAN', team:'DHRM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/dhrm/senthil-srinivasan.jpg' },
  { name:'AJITH KUMAR', team:'DHRM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/dhrm/ajith-kumar.jpg' },
  { name:'PRASANNA V', team:'DHRM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/dhrm/prasanna-v.jpg' },
  { name:'Niral shah', team:'DHRM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/dhrm/niral-shah.jpg' },
  { name:'Lohit ganesh', team:'DHRM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/dhrm/lohit-ganesh.jpeg' },
  { name:'Abhinav', team:'DHRM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/dhrm/abhinav.jpeg' },
  { name:'Rajkumar P', team:'DHRM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/dhrm/rajkumar-p.jpeg' },
  { name:'VISWASENAN', team:'DHRM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/dhrm/viswasenan.jpeg' },
  { name:'SRIRAM S', team:'DHRM', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/dhrm/sriram-s.jpg' },

  // ALV ACADEMY
  { name:'DR. RAJESH D', team:'ALV-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-a/alv-a/dr-rajesh-d.jpg' },
  { name:'giriram', team:'ALV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/alv-a/giriram.jpg' },
  { name:'sruthi', team:'ALV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/alv-a/sruthi.jpg' },
  { name:'SUBASH V B', team:'ALV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/alv-a/subash-v-b.jpg' },
  { name:'venkatraman', team:'ALV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/alv-a/venkatraman.jpg' },
  { name:'VIJAYAKARNAN A', team:'ALV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/alv-a/vijayakarnan-a.jpg' },
  { name:'NITIN PRANAV', team:'ALV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/alv-a/nitin-pranav.jpg' },
  { name:'JERWIN', team:'ALV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/alv-a/jerwin.jpeg' },
  { name:'PRASANNA', team:'ALV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/alv-a/prasanna.jpeg' },
  { name:'PONNAMBALATHAN', team:'ALV-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/alv-a/ponnambalathan.jpeg' },

  // PROSERVE - B
  { name:'Ishvar Arjun', team:'PSRV-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-b/ishvar-arjun.jpeg' },
  { name:'Rhea Shah', team:'PSRV-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-b/rhea-shah.jpeg' },
  { name:'Nalyazhini', team:'PSRV-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-b/nalyazhini.jpeg' },
  { name:'Kishan', team:'PSRV-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-b/kishan.jpeg' },
  { name:'Gaby', team:'PSRV-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-b/gaby.jpg' },
  { name:'Shamruth', team:'PSRV-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-b/shamruth.jpg' },
  { name:'Madhuvan', team:'PSRV-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-a/psrv-b/madhuvan.jpeg' },
];

const DIV_A_SCHEDULE = [
  // ── Week 1 ─────────────────────────────
  { week:1, date:'24-25 Jan 2026', done:true, matches:[
    { home:'LEVO SPORTS - A', score:'3-0', away:'DHARMU - A', venue:'',
      courts:[
        { ct:1, home:'Gowtham S / Manish', away:'Lohit ganesh / Rajkumar P', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Ishaan Sudharshan / Preetham Ganesh', away:'SRIRAM S / AJITH KUMAR', sets:'6-4, 4-6, 10-5', win:'home' },
        { ct:3, home:'Athray / Vedansh', away:'SANJEEV SUNDARAM / PRASANNA V', sets:'6-2, 6-1', win:'home' },
      ]},
    { home:'PROSERVE - A', score:'3-0', away:'PROSERVE - B', venue:'',
      courts:[
        { ct:1, home:'venkatesh / ishaan vijay', away:'Ishvar Arjun / Kishan', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'allen chris joel / KANDHAVEL M', away:'Madhuvan / Shamruth', sets:'6-0, 6-1', win:'home' },
        { ct:3, home:'tarun vikram / KAVIN KARTHIK K S', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'CCTA - A', score:'3-0', away:'PROSCHOOL - A', venue:'',
      courts:[
        { ct:1, home:'ROHIT / Aravind M', away:'NAVIN R / SAACHIN RAJA', sets:'6-4, 6-7, 10-4', win:'home' },
        { ct:2, home:'GOWTHAM V / Anirudha B', away:'ARAVIND S / BALADHARUNESH B', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Cidesh S / Kavin M', away:'MUKILAN.V / BHARAT N SHAH', sets:'6-1, 6-1', win:'home' },
      ]},
    { home:'COSMO - A', score:'2-1', away:'ALV ACADEMY', venue:'',
      courts:[
        { ct:1, home:'S.S.PRITHIV / Y SUDHIRTH', away:'giriram / PRASANNA', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'ASVIN RAAM / RAJKUMAR', away:'venkatraman / PONNAMBALATHAN', sets:'6-0, 6-1', win:'home' },
        { ct:3, home:'G MATHANSEKAR / A S  RITHISH ABINAV', away:'NITIN PRANAV / JERWIN', sets:'7-5, 2-6, 7-10', win:'away' },
      ]},
    { home:'KGR - A', score:'2-1', away:'PHOENIX', venue:'',
      courts:[
        { ct:1, home:'SUNDARARAMAN C / SREE HARI G', away:'S VIJAI KUMAR / BALAJI L R', sets:'6-2, 6-3', win:'home' },
        { ct:2, home:'RAMESH K G / NIKIL B', away:'VASANT RANGANATHEN S / VAIBHAV', sets:'6-2, 5-7, 10-7', win:'home' },
        { ct:3, home:'SURESH K G / AKSHAY A', away:'SHRI KUMAR V / HEMANYA AMBALAVANAN', sets:'4-6, 2-6', win:'away' },
      ]},
  ]},

  // ── Week 2 ─────────────────────────────
  { week:2, date:'31 Jan - 01 Feb 2026', done:true, matches:[
    { home:'CCTA - A', score:'2-1', away:'ALV ACADEMY', venue:'',
      courts:[
        { ct:1, home:'GOWTHAM V / Aravind M', away:'SUBASH V B / venkatraman', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Vimal Raj / Anirudha B', away:'VIJAYAKARNAN A / giriram', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Jaicharan c / Jaiwanth S', away:'JERWIN / NITIN PRANAV', sets:'2-6, 2-6', win:'away' },
      ]},
    { home:'PROSCHOOL - A', score:'3-0', away:'DHARMU - A', venue:'',
      courts:[
        { ct:1, home:'SAACHIN RAJA / BALADHARUNESH B', away:'Lohit ganesh / Abhinav', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'NAVIN R / YASHVANTH A', away:'SANJEEV SUNDARAM / Rajkumar P', sets:'6-1, 6-2', win:'home' },
        { ct:3, home:'KUSHALRAJ.B / ARAVIND S', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'LEVO SPORTS - A', score:'2-1', away:'KGR - A', venue:'',
      courts:[
        { ct:1, home:'Raj Prakash / Tanish Jayanth V C', away:'RAMESH K G / NIKIL B', sets:'2-6, 2-6', win:'away' },
        { ct:2, home:'Athray / Ishaan Sudharshan', away:'AJITHKUMAR S / NEEL ARJUN R', sets:'6-0, 7-5', win:'home' },
        { ct:3, home:'Azeez / Gowtham S', away:'SUNDARARAMAN C / SREE HARI G', sets:'6-2, 6-3', win:'home' },
      ]},
    { home:'COSMO - A', score:'3-0', away:'PROSERVE - B', venue:'',
      courts:[
        { ct:1, home:'VISHNU / SHRAVANTH', away:'Ishvar Arjun / Kishan', sets:'6-1, 6-0', win:'home' },
        { ct:2, home:'RAJKUMAR / ANISH', away:'Madhuvan / Shamruth', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'JAYAKUMAR RAMDASS / ASVIN RAAM', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'PHOENIX', score:'2-1', away:'COSMO - C', venue:'',
      courts:[
        { ct:1, home:'OGES THEYJO J / VASANT RANGANATHEN S', away:'R.Ramanand / Ramakrishnan R', sets:'7-5, 6-1', win:'home' },
        { ct:2, home:'VIVEKANAND K C / HEMANYA AMBALAVANAN', away:'Kapil Krishnamurthy / Kannan', sets:'1-6, 5-7', win:'away' },
        { ct:3, home:'SHRI KUMAR V / ANISH FROILAN R', away:'Nikhil Sunil / Rajesh Manoharan', sets:'1-6, 6-3, 10-6', win:'home' },
      ]},
  ]},

  // ── Week 3 ─────────────────────────────
  { week:3, date:'07-08 Feb 2026', done:true, matches:[
    { home:'PROSERVE - A', score:'3-0', away:'PHOENIX', venue:'',
      courts:[
        { ct:1, home:'KANDHAVEL M / KAVIN KARTHIK K S', away:'VIVEKANAND K C / VASANT RANGANATHEN S', sets:'3-6, 6-0, 10-5', win:'home' },
        { ct:2, home:'kishore / allen chris joel', away:'ANISH FROILAN R / SHRI KUMAR V', sets:'3-6, 6-2, 10-4', win:'home' },
        { ct:3, home:'BHARATH NISHOK / tarun vikram', away:'S VIJAI KUMAR / M SAYED SOHAIL HAQUE', sets:'6-1, 2-0', win:'home' },
      ]},
    { home:'COSMO - C', score:'3-0', away:'COSMO - A', venue:'',
      courts:[
        { ct:1, home:'R.Ramanand / Rajesh Manoharan', away:'G MATHANSEKAR / A S  RITHISH ABINAV', sets:'6-1, 6-3', win:'home' },
        { ct:2, home:'Kapil Krishnamurthy / Kannan', away:'ASVIN RAAM / S.S.PRITHIV', sets:'6-4, 7-5', win:'home' },
        { ct:3, home:'Nikhil Sunil / V.M.Ranjeet', away:'VISHNU / SHRAVANTH', sets:'6-0, 6-2', win:'home' },
      ]},
    { home:'LEVO SPORTS - A', score:'3-0', away:'PROSERVE - B', venue:'',
      courts:[
        { ct:1, home:'Ishaan Sudharshan / Athray', away:'Ishvar Arjun / Kishan', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'Tanish Jayanth V C / Gowtham S', away:'Shamruth / Gaby', sets:'6-0, 6-1', win:'home' },
        { ct:3, home:'Azeez / Bhavishnu', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'PROSCHOOL - A', score:'3-0', away:'ALV ACADEMY', venue:'',
      courts:[
        { ct:1, home:'MUKILAN.V / KUSHALRAJ.B', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'NAVIN R / YASHVANTH A', away:'NITIN PRANAV / JERWIN', sets:'6-1, 3-6, 10-6', win:'home' },
        { ct:3, home:'SAACHIN RAJA / ARAVIND S', away:'giriram / PRASANNA', sets:'6-3, 6-3', win:'home' },
      ]},
    { home:'CCTA - A', score:'2-1', away:'KGR - A', venue:'',
      courts:[
        { ct:1, home:'Vimal Raj / Anirudha B', away:'RAMESH K G / AKSHAY A', sets:'2-6, 2-6', win:'away' },
        { ct:2, home:'GOWTHAM V / Jaiwanth S', away:'SURESH K G / SREE HARI G', sets:'6-4, 6-1', win:'home' },
        { ct:3, home:'Jaicharan c / Haridev venkatesan', away:'NIKIL B / SUNDARARAMAN C', sets:'6-3, 6-2', win:'home' },
      ]},
  ]},

  // ── Week 4 ─────────────────────────────
  { week:4, date:'14-15 Feb 2026', done:true, matches:[
    { home:'PHOENIX', score:'2-1', away:'DHARMU - A', venue:'',
      courts:[
        { ct:1, home:'SHRI KUMAR V / BALAJI L R', away:'AJITH KUMAR / SRIRAM S', sets:'7-5, 3-6, 7-10', win:'away' },
        { ct:2, home:'S VIJAI KUMAR / HEMANYA AMBALAVANAN', away:'SANJEEV SUNDARAM / PRASANNA V', sets:'6-3, 6-4', win:'home' },
        { ct:3, home:'VIVEKANAND K C / VASANT RANGANATHEN S', away:'Niral shah / Rajkumar P', sets:'6-1, 6-0', win:'home' },
      ]},
    { home:'PROSERVE - A', score:'3-0', away:'ALV ACADEMY', venue:'',
      courts:[
        { ct:1, home:'BHARATH NISHOK / SHRAVAN ANAND', away:'NITIN PRANAV / JERWIN', sets:'6-4, 6-1', win:'home' },
        { ct:2, home:'venkatesh / MANOJ KUMAR', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'VIGNESH / ishaan vijay', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'COSMO - A', score:'2-1', away:'PROSCHOOL - A', venue:'',
      courts:[
        { ct:1, home:'ASVIN RAAM / S.S.PRITHIV', away:'ARAVIND S / MUKILAN.V', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'Y SUDHIRTH / G MATHANSEKAR', away:'NAVIN R / SAACHIN RAJA', sets:'4-6, 3-6', win:'away' },
        { ct:3, home:'ANISH / RAJKUMAR', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'COSMO - C', score:'2-1', away:'KGR - A', venue:'',
      courts:[
        { ct:1, home:'Rajesh Manoharan / R.Ramanand', away:'RAMESH K G / AKSHAY A', sets:'2-6, 6-4, 5-10', win:'away' },
        { ct:2, home:'Ramakrishnan R / V.M.Ranjeet', away:'SREE HARI G / NEEL ARJUN R', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Kannan / Kapil Krishnamurthy', away:'SUNDARARAMAN C / NIKIL B', sets:'6-3, 7-5', win:'home' },
      ]},
    { home:'CCTA - A', score:'3-0', away:'LEVO SPORTS - A', venue:'',
      courts:[
        { ct:1, home:'ROHIT / Vimal Raj', away:'Ishaan Sudharshan / Preetham Ganesh', sets:'6-4, 6-2', win:'home' },
        { ct:2, home:'GOWTHAM V / Aravind M', away:'Gowtham S / Athray', sets:'6-1, 6-4', win:'home' },
        { ct:3, home:'Jaicharan c / Anirudha B', away:'Azeez / Bhavishnu', sets:'6-1, 7-5', win:'home' },
      ]},
  ]},

  // ── Week 5 ─────────────────────────────
  { week:5, date:'21-22 Feb 2026', done:true, matches:[
    { home:'COSMO - A', score:'2-1', away:'DHARMU - A', venue:'',
      courts:[
        { ct:1, home:'VISHNU / SHRAVANTH', away:'AJITH KUMAR / SRIRAM S', sets:'6-1, 6-7, 1-10', win:'away' },
        { ct:2, home:'S.S.PRITHIV / Y SUDHIRTH', away:'Niral shah / Rajkumar P', sets:'6-3, 3-6, 10-2', win:'home' },
        { ct:3, home:'ANISH / G MATHANSEKAR', away:'SANJEEV SUNDARAM / PRASANNA V', sets:'6-2, 6-0', win:'home' },
      ]},
    { home:'PHOENIX', score:'3-0', away:'ALV ACADEMY', venue:'',
      courts:[
        { ct:1, home:'VIVEKANAND K C / VASANT RANGANATHEN S', away:'JERWIN / NITIN PRANAV', sets:'7-5, 6-2', win:'home' },
        { ct:2, home:'SHRI KUMAR V / S VIJAI KUMAR', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'HEMANYA AMBALAVANAN / VAIBHAV', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'COSMO - C', score:'3-0', away:'PROSERVE - B', venue:'',
      courts:[
        { ct:1, home:'Harnish / Kannan', away:'Ishvar Arjun / Kishan', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Rajesh Manoharan / Nikhil Sunil', away:'Shamruth / Madhuvan', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Kapil Krishnamurthy / Ramakrishnan R', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'LEVO SPORTS - A', score:'2-1', away:'PROSCHOOL - A', venue:'',
      courts:[
        { ct:1, home:'Preetham Ganesh / Gowtham S', away:'NAVIN R / SAACHIN RAJA', sets:'5-7, 3-6', win:'away' },
        { ct:2, home:'Tanish Jayanth V C / Harshavarthan', away:'ARAVIND S / BALADHARUNESH B', sets:'6-3, 6-0', win:'home' },
        { ct:3, home:'Ishaan Sudharshan / Athray', away:'VISWANATHAN.VENKATRAMAN / MUKILAN.V', sets:'6-0, 6-1', win:'home' },
      ]},
    { home:'PROSERVE - A', score:'3-0', away:'KGR - A', venue:'',
      courts:[
        { ct:1, home:'tarun vikram / KANDHAVEL M', away:'RAMESH K G / AKSHAY A', sets:'1-6, 7-6, 10-7', win:'home' },
        { ct:2, home:'VIGNESH / SHRAVAN ANAND', away:'SUNDARARAMAN C / NIKIL B', sets:'6-1, 6-2', win:'home' },
        { ct:3, home:'BHARATH NISHOK / ishaan vijay', away:'SURESH K G / SREE HARI G', sets:'6-4, 7-6', win:'home' },
      ]},
  ]},

  // ── Week 6 ─────────────────────────────
  { week:6, date:'28 Feb - 01 Mar 2026', done:true, matches:[
    { home:'PHOENIX', score:'2-1', away:'PROSCHOOL - A', venue:'',
      courts:[
        { ct:1, home:'SHRI KUMAR V / OGES THEYJO J', away:'RAMESH. D / MUKILAN.V', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'VIVEKANAND K C / VASANT RANGANATHEN S', away:'ARAVIND S / KUSHALRAJ.B', sets:'6-1, 6-0', win:'home' },
        { ct:3, home:'S VIJAI KUMAR / HEMANYA AMBALAVANAN', away:'NAVIN R / SAACHIN RAJA', sets:'1-6, 3-6', win:'away' },
      ]},
    { home:'CCTA - A', score:'3-0', away:'COSMO - A', venue:'',
      courts:[
        { ct:1, home:'GOWTHAM V / Anirudha B', away:'ASVIN RAAM / S.S.PRITHIV', sets:'6-2, 6-1', win:'home' },
        { ct:2, home:'Kavin M / Jaicharan c', away:'G MATHANSEKAR / VISHNU', sets:'6-3, 5-7, 10-6', win:'home' },
        { ct:3, home:'ROHIT / Aravind M', away:'A S  RITHISH ABINAV / Y SUDHIRTH', sets:'6-4, 6-3', win:'home' },
      ]},
    { home:'KGR - A', score:'3-0', away:'PROSERVE - B', venue:'',
      courts:[
        { ct:1, home:'RAMESH K G / NEEL ARJUN R', away:'Ishvar Arjun / Gaby', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'SUNDARARAMAN C / NIKIL B', away:'Shamruth / Madhuvan', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'SURESH K G / SREE HARI G', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'COSMO - C', score:'3-0', away:'ALV ACADEMY', venue:'',
      courts:[
        { ct:1, home:'R.Ramanand / Kannan', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Kapil Krishnamurthy / Ramakrishnan R', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Rajesh Manoharan / Nikhil Sunil', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'PROSERVE - A', score:'2-1', away:'DHARMU - A', venue:'',
      courts:[
        { ct:1, home:'BHARATH NISHOK / ishaan vijay', away:'SANJEEV SUNDARAM / Rajkumar P', sets:'6-3, 6-3', win:'home' },
        { ct:2, home:'venkatesh / SHRAVAN ANAND', away:'AJITH KUMAR / Niral shah', sets:'4-6, 2-6', win:'away' },
        { ct:3, home:'BOOPATHY S / KANDHAVEL M', away:'PRASANNA V / SRIRAM S', sets:'6-3, 6-3', win:'home' },
      ]},
  ]},

  // ── Week 7 ─────────────────────────────
  { week:7, date:'07-08 Mar 2026', done:true, matches:[
    { home:'CCTA - A', score:'3-0', away:'PROSERVE - B', venue:'',
      courts:[
        { ct:1, home:'Vimal Raj / Cidesh S', away:'Madhuvan / Kishan', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Anirudha B / Aravind M', away:'Gaby / Shamruth', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'ROHIT / GOWTHAM V', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'DHARMU - A', score:'2-1', away:'ALV ACADEMY', venue:'',
      courts:[
        { ct:1, home:'SANJEEV SUNDARAM / VISWASENAN', away:'DR. RAJESH D / giriram', sets:'6-3, 6-3', win:'home' },
        { ct:2, home:'AJITH KUMAR / PRASANNA V', away:'venkatraman / SUBASH V B', sets:'6-0, 6-1', win:'home' },
        { ct:3, home:'MANI N / Rajkumar P', away:'JERWIN / NITIN PRANAV', sets:'4-6, 1-6', win:'away' },
      ]},
    { home:'PROSERVE - A', score:'3-0', away:'COSMO - A', venue:'',
      courts:[
        { ct:1, home:'BOOPATHY S / ishaan vijay', away:'VISHNU / G MATHANSEKAR', sets:'5-7, 6-4, 14-12', win:'home' },
        { ct:2, home:'tarun vikram / allen chris joel', away:'ASVIN RAAM / RAJKUMAR', sets:'2-6, 6-4, 10-2', win:'home' },
        { ct:3, home:'BHARATH NISHOK / SHRAVAN ANAND', away:'Y SUDHIRTH / A S  RITHISH ABINAV', sets:'6-0, 7-5', win:'home' },
      ]},
    { home:'KGR - A', score:'2-1', away:'PROSCHOOL - A', venue:'',
      courts:[
        { ct:1, home:'SURESH K G / RAMESH K G', away:'ARAVIND S / BALADHARUNESH B', sets:'6-2, 6-0', win:'home' },
        { ct:2, home:'SUNDARARAMAN C / NIKIL B', away:'NAVIN R / SAACHIN RAJA', sets:'3-6, 4-6', win:'away' },
        { ct:3, home:'SREE HARI G / AKSHAY A', away:'RAMESH. D / KUSHALRAJ.B', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'COSMO - C', score:'3-0', away:'LEVO SPORTS - A', venue:'',
      courts:[
        { ct:1, home:'Kannan / R.Ramanand', away:'Gowtham S / Tanish Jayanth V C', sets:'6-4, 6-2', win:'home' },
        { ct:2, home:'Rajesh Manoharan / Kapil Krishnamurthy', away:'Harshavarthan / Raj Prakash', sets:'6-2, 6-3', win:'home' },
        { ct:3, home:'V.M.Ranjeet / Ramakrishnan R', away:'Preetham Ganesh / Manish', sets:'6-3, 6-4', win:'home' },
      ]},
  ]},

  // ── Week 8 ─────────────────────────────
  { week:8, date:'14-15 Mar 2026', done:true, matches:[
    { home:'DHARMU - A', score:'3-0', away:'PROSERVE - B', venue:'',
      courts:[
        { ct:1, home:'SANJEEV SUNDARAM / Rajkumar P', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'SENTHIL SRINIVASAN / MANI N', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'PRASANNA V / SRIRAM S', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'CCTA - A', score:'2-1', away:'PROSERVE - A', venue:'',
      courts:[
        { ct:1, home:'GOWTHAM V / Kavin M', away:'BHARATH NISHOK / SHRAVAN ANAND', sets:'2-6, 6-3, 10-1', win:'home' },
        { ct:2, home:'ROHIT / Jaicharan c', away:'KAVIN KARTHIK K S / allen chris joel', sets:'6-3, 6-4', win:'home' },
        { ct:3, home:'Anirudha B / Haridev venkatesan', away:'KANDHAVEL M / tarun vikram', sets:'6-4, 5-7, 16-18', win:'away' },
      ]},
    { home:'COSMO - C', score:'2-1', away:'PROSCHOOL - A', venue:'',
      courts:[
        { ct:1, home:'Kannan / R.Ramanand', away:'NAVIN R / SAACHIN RAJA', sets:'6-7, 5-7', win:'away' },
        { ct:2, home:'V.M.Ranjeet / Rajesh Manoharan', away:'VISWANATHAN.VENKATRAMAN / ARAVIND S', sets:'6-0, 6-1', win:'home' },
        { ct:3, home:'Ramakrishnan R / Kapil Krishnamurthy', away:'KUSHALRAJ.B / MUKILAN.V', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'KGR - A', score:'2-1', away:'ALV ACADEMY', venue:'',
      courts:[
        { ct:1, home:'NIKIL B / RAMESH K G', away:'JERWIN / NITIN PRANAV', sets:'6-7, 3-6', win:'away' },
        { ct:2, home:'SREE HARI G / SURESH K G', away:'giriram / SUBASH V B', sets:'6-1, 6-0', win:'home' },
        { ct:3, home:'SUNDARARAMAN C / AJITHKUMAR S', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'LEVO SPORTS - A', score:'2-1', away:'PHOENIX', venue:'',
      courts:[
        { ct:1, home:'Gowtham S / Azeez', away:'SHRI KUMAR V / HEMANYA AMBALAVANAN', sets:'6-1, 6-2', win:'home' },
        { ct:2, home:'Athray / Ishaan Sudharshan', away:'S VIJAI KUMAR / VASANT RANGANATHEN S', sets:'6-4, 6-3', win:'home' },
        { ct:3, home:'Tanish Jayanth V C / Raj Prakash', away:'VIVEKANAND K C / VAIBHAV', sets:'6-4, 5-7, 8-10', win:'away' },
      ]},
  ]},

  // ── Week 9 ─────────────────────────────
  { week:9, date:'21-22 Mar 2026', done:true, matches:[
    { home:'CCTA - A', score:'3-0', away:'PHOENIX', venue:'',
      courts:[
        { ct:1, home:'ROHIT / Aravind M', away:'VIVEKANAND K C / VASANT RANGANATHEN S', sets:'6-0, 6-4', win:'home' },
        { ct:2, home:'GOWTHAM V / Jaicharan c', away:'ANISH FROILAN R / SHRI KUMAR V', sets:'4-6, 7-5, 10-8', win:'home' },
        { ct:3, home:'Kavin M / Vimal Raj', away:'HEMANYA AMBALAVANAN / S VIJAI KUMAR', sets:'6-2, 6-1', win:'home' },
      ]},
    { home:'ALV ACADEMY', score:'3-0', away:'PROSERVE - B', venue:'',
      courts:[
        { ct:1, home:'DR. RAJESH D / JERWIN', away:'Kishan / Madhuvan', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'VIJAYAKARNAN A / NITIN PRANAV', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'giriram / SUBASH V B', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'COSMO - C', score:'3-0', away:'DHARMU - A', venue:'',
      courts:[
        { ct:1, home:'Rajesh Manoharan / Kannan', away:'SANJEEV SUNDARAM / SRIRAM S', sets:'6-2, 6-1', win:'home' },
        { ct:2, home:'RAMESH VIGNESHWARAN / Ramakrishnan R', away:'AJITH KUMAR / Niral shah', sets:'6-3, 6-1', win:'home' },
        { ct:3, home:'Kapil Krishnamurthy / V.M.Ranjeet', away:'Abhinav / Lohit ganesh', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'PROSERVE - A', score:'3-0', away:'PROSCHOOL - A', venue:'',
      courts:[
        { ct:1, home:'BHARATH NISHOK / KAVIN KARTHIK K S', away:'NAVIN R / SAACHIN RAJA', sets:'6-2, 6-1', win:'home' },
        { ct:2, home:'KANDHAVEL M / allen chris joel', away:'KUSHALRAJ.B / MUKILAN.V', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'venkatesh / VIGNESH', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'LEVO SPORTS - A', score:'2-1', away:'COSMO - A', venue:'',
      courts:[
        { ct:1, home:'Harshavarthan / Tanish Jayanth V C', away:'S.S.PRITHIV / Y SUDHIRTH', sets:'6-7, 5-7', win:'away' },
        { ct:2, home:'Azeez / Gowtham S', away:'SHRAVANTH / ANISH', sets:'7-5, 6-3', win:'home' },
        { ct:3, home:'Raj Prakash / Athray', away:'RAJKUMAR / ASVIN RAAM', sets:'3-6, 6-3, 11-9', win:'home' },
      ]},
  ]},

  // ── Week 10 ─────────────────────────────
  { week:10, date:'28-29 Mar 2026', done:true, matches:[
    { home:'COSMO - A', score:'2-1', away:'PHOENIX', venue:'',
      courts:[
        { ct:1, home:'RAJKUMAR / ASVIN RAAM', away:'OGES THEYJO J / VASANT RANGANATHEN S', sets:'3-6, 1-6', win:'away' },
        { ct:2, home:'Y SUDHIRTH / S.S.PRITHIV', away:'SHRI KUMAR V / VIVEKANAND K C', sets:'6-4, 6-4', win:'home' },
        { ct:3, home:'G MATHANSEKAR / A S  RITHISH ABINAV', away:'S VIJAI KUMAR / HEMANYA AMBALAVANAN', sets:'6-1, 6-3', win:'home' },
      ]},
    { home:'KGR - A', score:'2-1', away:'DHARMU - A', venue:'',
      courts:[
        { ct:1, home:'NEEL ARJUN R / SREE HARI G', away:'SANJEEV SUNDARAM / AJITH KUMAR', sets:'0-6, 4-6', win:'away' },
        { ct:2, home:'RAMESH K G / SURESH K G', away:'PRASANNA V / Rajkumar P', sets:'6-0, 6-1', win:'home' },
        { ct:3, home:'NIKIL B / SUNDARARAMAN C', away:'Niral shah / SRIRAM S', sets:'6-2, 3-6, 10-7', win:'home' },
      ]},
    { home:'PROSERVE - A', score:'3-0', away:'LEVO SPORTS - A', venue:'',
      courts:[
        { ct:1, home:'VIGNESH / BHARATH NISHOK', away:'Azeez / Gowtham S', sets:'6-2, 6-3', win:'home' },
        { ct:2, home:'allen chris joel / KANDHAVEL M', away:'Raj Prakash / Tanish Jayanth V C', sets:'6-2, 6-1', win:'home' },
        { ct:3, home:'tarun vikram / KAVIN KARTHIK K S', away:'Ishaan Sudharshan / Athray', sets:'6-3, 6-3', win:'home' },
      ]},
    { home:'PROSCHOOL - A', score:'3-0', away:'PROSERVE - B', venue:'',
      courts:[
        { ct:1, home:'SAACHIN RAJA / ARAVIND S', away:'Ishvar Arjun / Kishan', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'NAVIN R / BHARAT N SHAH', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'MANIKANDAN BOSE / JEYADURAI SARKKARAI', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'CCTA - A', score:'2-1', away:'COSMO - C', venue:'',
      courts:[
        { ct:1, home:'GOWTHAM V / ROHIT', away:'V.M.Ranjeet / Kapil Krishnamurthy', sets:'6-4, 6-2', win:'home' },
        { ct:2, home:'Kavin M / Haridev venkatesan', away:'Rajesh Manoharan / Kannan', sets:'4-6, 6-4, 10-4', win:'home' },
        { ct:3, home:'Jaicharan c / Vimal Raj', away:'Ramakrishnan R / RAMESH VIGNESHWARAN', sets:'4-6, 6-3, 7-10', win:'away' },
      ]},
  ]},

  // ── Week 11 ─────────────────────────────
  { week:11, date:'04-05 Apr 2026', done:true, matches:[
    { home:'COSMO - A', score:'2-1', away:'KGR - A', venue:'',
      courts:[
        { ct:1, home:'VIKRAM / SHRAVANTH', away:'RAMESH K G / SUNDARARAMAN C', sets:'2-6, 0-6', win:'away' },
        { ct:2, home:'RAJKUMAR / ANISH', away:'SURESH K G / SREE HARI G', sets:'2-6, 7-6, 10-7', win:'home' },
        { ct:3, home:'S.S.PRITHIV / Y SUDHIRTH', away:'NIKIL B / NEEL ARJUN R', sets:'6-3, 6-3', win:'home' },
      ]},
    { home:'LEVO SPORTS - A', score:'3-0', away:'ALV ACADEMY', venue:'',
      courts:[
        { ct:1, home:'Gowtham S / Azeez', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Raj Prakash / Ishaan Sudharshan', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Athray / Tanish Jayanth V C', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'PHOENIX', score:'3-0', away:'PROSERVE - B', venue:'',
      courts:[
        { ct:1, home:'SHRI KUMAR V / HEMANYA AMBALAVANAN', away:'Gaby / Nalyazhini', sets:'6-1, 6-0', win:'home' },
        { ct:2, home:'VASANT RANGANATHEN S / S VIJAI KUMAR', away:'Madhuvan / Shamruth', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'VIVEKANAND K C / VAIBHAV', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'CCTA - A', score:'3-0', away:'DHARMU - A', venue:'',
      courts:[
        { ct:1, home:'Anirudha B / ROHIT', away:'SANJEEV SUNDARAM / AJITH KUMAR', sets:'6-4, 7-6', win:'home' },
        { ct:2, home:'Vimal Raj / GOWTHAM V', away:'Lohit ganesh / Abhinav', sets:'6-1, 6-0', win:'home' },
        { ct:3, home:'Kavin M / Cidesh S', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'PROSERVE - A', score:'2-1', away:'COSMO - C', venue:'',
      courts:[
        { ct:1, home:'allen chris joel / venkatesh', away:'Rajesh Manoharan / Nikhil Sunil', sets:'6-2, 3-6, 10-2', win:'home' },
        { ct:2, home:'BHARATH NISHOK / VIGNESH', away:'Kapil Krishnamurthy / Kannan', sets:'6-4, 7-6', win:'home' },
        { ct:3, home:'KANDHAVEL M / KAVIN KARTHIK K S', away:'V.M.Ranjeet / Ramakrishnan R', sets:'3-6, 2-6', win:'away' },
      ]},
  ]},
];
