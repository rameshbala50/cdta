// ============================================================
// DIVISION D — CDTA 2026
// ============================================================

const DIV_D_TEAMS = [
  { short:'OMSH-A', full:'OM SHREE - A', captain:'DEVARAJ E', mobile:'', players:9, club:'Om Shree', surface:'', division:'D' },
  { short:'PAL', full:'PALLADAM PROS TENNIS CLUB', captain:'D.PRAVEEN VINO', mobile:'', players:11, club:'Palladam Pros', surface:'', division:'D' },
  { short:'MAP-A', full:'MAPLES - A', captain:'T.S.Sugumar', mobile:'', players:12, club:'Maples', surface:'', division:'D' },
  { short:'RAIL-A', full:'S RAILWAY - A', captain:'SIRAJUDEEN.M', mobile:'', players:7, club:'S Railway', surface:'', division:'D' },
  { short:'GST-A', full:'GST - A', captain:'PRABHU RAJ', mobile:'', players:11, club:'GST', surface:'', division:'D' },
  { short:'DHRM-B', full:'DHARMU - B', captain:'S Mahendran', mobile:'', players:12, club:'Dharmu', surface:'', division:'D' },
  { short:'PSRV-D', full:'PROSERVE - D', captain:'Kamesh', mobile:'', players:10, club:'ProServe', surface:'', division:'D' },
  { short:'ALPHA-A', full:'ALPHA-A', captain:'HARI KRISHNA', mobile:'', players:11, club:'Alpha', surface:'', division:'D' },
  { short:'CMTA-D', full:'CMTA - D', captain:'SATISH RAJAN', mobile:'', players:11, club:'CMTA', surface:'', division:'D' },
  { short:'MOX', full:'MOXIEE', captain:'GOWTHAMAN N', mobile:'', players:12, club:'Moxiee', surface:'', division:'D' },
  { short:'COS-E', full:'COSMO - E', captain:'SENGOTTIAN VSLB', mobile:'', players:10, club:'Cosmo', surface:'', division:'D' },
];

const DIV_D_STANDINGS = [
  { rank:1, short:'OMSH-A', full:'OM SHREE - A', pts:27, played:30, setsW:54, setsL:10, gamesW:336, gamesL:154 },
  { rank:2, short:'PAL', full:'PALLADAM PROS TENNIS CLUB', pts:25, played:30, setsW:52, setsL:12, gamesW:336, gamesL:165 },
  { rank:3, short:'MAP-A', full:'MAPLES - A', pts:22, played:30, setsW:46, setsL:23, gamesW:302, gamesL:221 },
  { rank:4, short:'RAIL-A', full:'S RAILWAY - A', pts:19, played:30, setsW:44, setsL:22, gamesW:323, gamesL:200 },
  { rank:5, short:'GST-A', full:'GST - A', pts:15, played:30, setsW:36, setsL:34, gamesW:264, gamesL:250 },
  { rank:6, short:'DHRM-B', full:'DHARMU - B', pts:14, played:30, setsW:31, setsL:35, gamesW:247, gamesL:247 },
  { rank:7, short:'PSRV-D', full:'PROSERVE - D', pts:11, played:27, setsW:24, setsL:34, gamesW:209, gamesL:239 },
  { rank:8, short:'ALPHA-A', full:'ALPHA-A', pts:11, played:24, setsW:27, setsL:29, gamesW:212, gamesL:201 },
  { rank:9, short:'CMTA-D', full:'CMTA - D', pts:6, played:30, setsW:13, setsL:49, gamesW:154, gamesL:320 },
  { rank:10, short:'MOX', full:'MOXIEE', pts:5, played:27, setsW:10, setsL:45, gamesW:105, gamesL:285 },
  { rank:11, short:'COS-E', full:'COSMO - E', pts:4, played:30, setsW:8, setsL:52, gamesW:134, gamesL:340 },
];

const DIV_D_PLAYERS = [
  // OM SHREE - A
  { name:'DEVARAJ E', team:'OMSH-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-d/omsh-a/devaraj-e.jpg' },
  { name:'SANTHOSH S', team:'OMSH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/omsh-a/santhosh-s.jpg' },
  { name:'Vinoth Kumar.M', team:'OMSH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/omsh-a/vinoth-kumarm.jpg' },
  { name:'ADITHYA RAMRAJ', team:'OMSH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/omsh-a/adithya-ramraj.jpg' },
  { name:'SUNDAR B', team:'OMSH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/omsh-a/sundar-b.jpeg' },
  { name:'Praneash. S', team:'OMSH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/omsh-a/praneash-s.jpg' },
  { name:'Piranav. S', team:'OMSH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/omsh-a/piranav-s.jpg' },
  { name:'Ashwin Kumar', team:'OMSH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/omsh-a/ashwin-kumar.jpg' },
  { name:'AARUSSH K', team:'OMSH-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/omsh-a/aarussh-k.jpg' },

  // PALLADAM PROS TENNIS CLUB
  { name:'D.PRAVEEN VINO', team:'PAL', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-d/pal/dpraveen-vino.jpeg' },
  { name:'RAGUNATH R', team:'PAL', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/pal/ragunath-r.jpeg' },
  { name:'GOKUL.P', team:'PAL', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/pal/gokulp.jpeg' },
  { name:'SENTHIL KUMAR..S', team:'PAL', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/pal/senthil-kumars.jpg' },
  { name:'Kowsik Sundara Varathan Sridhar', team:'PAL', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/pal/kowsik-sundara-varathan-sridhar.jpg' },
  { name:'Prabhuram', team:'PAL', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/pal/prabhuram.jpg' },
  { name:'Sooraj Brayan John', team:'PAL', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/pal/sooraj-brayan-john.jpg' },
  { name:'John Carino S', team:'PAL', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/pal/john-carino-s.jpg' },
  { name:'Mukil', team:'PAL', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/pal/mukil.jpg' },
  { name:'Jordan J', team:'PAL', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/pal/jordan-j.jpg' },
  { name:'Veera', team:'PAL', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/pal/veera.jpg' },

  // MAPLES - A
  { name:'T.S.Sugumar', team:'MAP-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-d/map-a/tssugumar.png' },
  { name:'N.P.Sivanandham', team:'MAP-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/map-a/npsivanandham.png' },
  { name:'R.Ramakrishnan', team:'MAP-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/map-a/rramakrishnan.png' },
  { name:'C.Manivenkatesh', team:'MAP-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/map-a/cmanivenkatesh.png' },
  { name:'M.Paramsivam', team:'MAP-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/map-a/mparamsivam.png' },
  { name:'N.Shanmugaprabakar', team:'MAP-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/map-a/nshanmugaprabakar.png' },
  { name:'Sakthivel', team:'MAP-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/map-a/sakthivel.jpeg' },
  { name:'A.S.Mushtafa', team:'MAP-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/map-a/asmushtafa.png' },
  { name:'M.Senthil Kumar', team:'MAP-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/map-a/msenthil-kumar.jpg' },
  { name:'Murugan Settu', team:'MAP-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/map-a/murugan-settu.jpg' },
  { name:'Kulasekarapandiyan', team:'MAP-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/map-a/kulasekarapandiyan.jpeg' },
  { name:'PARTHIBAN R', team:'MAP-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/map-a/parthiban-r.jpeg' },

  // S RAILWAY - A
  { name:'SIRAJUDEEN.M', team:'RAIL-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-d/rail-a/sirajudeenm.jpeg' },
  { name:'SABAPATHY', team:'RAIL-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/rail-a/sabapathy.jpg' },
  { name:'GOPALA KRISHNAN', team:'RAIL-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/rail-a/gopala-krishnan.jpeg' },
  { name:'MERVIN RAJA', team:'RAIL-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/rail-a/mervin-raja.jpeg' },
  { name:'RAJESH', team:'RAIL-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/rail-a/rajesh.jpeg' },
  { name:'MELVIN RAJA', team:'RAIL-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/rail-a/melvin-raja.jpg' },
  { name:'KARTHIKEYAN M', team:'RAIL-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/rail-a/karthikeyan-m.jpg' },

  // GST - A
  { name:'PRABHU RAJ', team:'GST-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-d/gst-a/prabhu-raj.jpeg' },
  { name:'ARAVIND', team:'GST-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/gst-a/aravind.jpeg' },
  { name:'SAI PRADEEP', team:'GST-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/gst-a/sai-pradeep.jpeg' },
  { name:'RAMESH G', team:'GST-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/gst-a/ramesh-g.jpeg' },
  { name:'Vivaan', team:'GST-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/gst-a/vivaan.jpg' },
  { name:'RAAMKUMAR', team:'GST-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/gst-a/raamkumar.jpeg' },
  { name:'M.Vignesh', team:'GST-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/gst-a/mvignesh.jpg' },
  { name:'Pritul.S', team:'GST-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/gst-a/prituls.jpg' },
  { name:'Likeeth', team:'GST-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/gst-a/likeeth.jpg' },
  { name:'R.Vedhanthan', team:'GST-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/gst-a/rvedhanthan.jpg' },

  // DHARMU - B
  { name:'S Mahendran', team:'DHRM-B', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-d/dhrm-b/s-mahendran.jpg' },
  { name:'Dr. Thillainayagam', team:'DHRM-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/dhrm-b/dr-thillainayagam.jpeg' },
  { name:'PALANIAPPAN S', team:'DHRM-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/dhrm-b/palaniappan-s.jpg' },
  { name:'MALLIKESWARAJA', team:'DHRM-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/dhrm-b/mallikeswaraja.jpg' },
  { name:'S R P RAMESH', team:'DHRM-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/dhrm-b/s-r-p-ramesh.jpeg' },
  { name:'YUVARAJ', team:'DHRM-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/dhrm-b/yuvaraj.jpg' },
  { name:'SARAVANA KARTHI', team:'DHRM-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/dhrm-b/saravana-karthi.jpg' },
  { name:'NAGARAJ V', team:'DHRM-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/dhrm-b/nagaraj-v.jpg' },
  { name:'KARTHIK N', team:'DHRM-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/dhrm-b/karthik-n.jpeg' },
  { name:'BALAJI NATARAJ', team:'DHRM-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/dhrm-b/balaji-nataraj.jpg' },
  { name:'SANJAY R', team:'DHRM-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/dhrm-b/sanjay-r.jpeg' },
  { name:'SHANKARANARAYANAN T', team:'DHRM-B', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/dhrm-b/shankaranarayanan-t.jpeg' },

  // PROSERVE - D
  { name:'Kamesh', team:'PSRV-D', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-d/psrv-d/kamesh.jpg' },
  { name:'MANOJKUMAR S', team:'PSRV-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/psrv-d/manojkumar-s.jpg' },
  { name:'Vignesh Thangavel', team:'PSRV-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/psrv-d/vignesh-thangavel.jpeg' },
  { name:'Anand Rathinakumar', team:'PSRV-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/psrv-d/anand-rathinakumar.jpeg' },
  { name:'Vinod B', team:'PSRV-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/psrv-d/vinod-b.jpeg' },
  { name:'JEEVAN NEHEMAIH V', team:'PSRV-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/psrv-d/jeevan-nehemaih-v.jpg' },
  { name:'Sudarshan k', team:'PSRV-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/psrv-d/sudarshan-k.jpeg' },
  { name:'Sumit nayar', team:'PSRV-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/psrv-d/sumit-nayar.jpeg' },
  { name:'Bharath Arjun. R', team:'PSRV-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/psrv-d/bharath-arjun-r.jpeg' },
  { name:'Prabhu Rathinakumar', team:'PSRV-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/psrv-d/prabhu-rathinakumar.jpeg' },

  // ALPHA-A
  { name:'HARI KRISHNA', team:'ALPHA-A', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-d/alpha-a/hari-krishna.png' },
  { name:'DAVID', team:'ALPHA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/alpha-a/david.png' },
  { name:'Kandasamy', team:'ALPHA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/alpha-a/kandasamy.jpg' },
  { name:'ALAGAPPAN', team:'ALPHA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/alpha-a/alagappan.jpg' },
  { name:'Jayakrishna Manokaran', team:'ALPHA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/alpha-a/jayakrishna-manokaran.jpg' },
  { name:'SIVANANTHAM', team:'ALPHA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/alpha-a/sivanantham.png' },
  { name:'Antony terance', team:'ALPHA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/alpha-a/antony-terance.jpg' },
  { name:'DEV', team:'ALPHA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/alpha-a/dev.jpg' },
  { name:'RAMESH', team:'ALPHA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/alpha-a/ramesh.jpg' },
  { name:'Poulous H', team:'ALPHA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/alpha-a/poulous-h.jpg' },
  { name:'ANAND BHOJRAJ', team:'ALPHA-A', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/alpha-a/anand-bhojraj.jpg' },

  // CMTA - D
  { name:'SATISH RAJAN', team:'CMTA-D', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-d/cmta-d/satish-rajan.jpg' },
  { name:'KAMALESH PUNMIYA', team:'CMTA-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cmta-d/kamalesh-punmiya.jpg' },
  { name:'MEGHNA DARSHAK', team:'CMTA-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cmta-d/meghna-darshak.jpg' },
  { name:'ARVIND RAMESH', team:'CMTA-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cmta-d/arvind-ramesh.jpg' },
  { name:'PRASHANT JAIN', team:'CMTA-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cmta-d/prashant-jain.jpg' },
  { name:'DARSHAN O JAIN', team:'CMTA-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cmta-d/darshan-o-jain.jpg' },
  { name:'Navratan Singh', team:'CMTA-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cmta-d/navratan-singh.jpg' },
  { name:'Radhakrishnan Jaishankar', team:'CMTA-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cmta-d/radhakrishnan-jaishankar.jpg' },
  { name:'CHOCKALINGAM', team:'CMTA-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cmta-d/chockalingam.jpeg' },
  { name:'Narayan Dhona', team:'CMTA-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cmta-d/narayan-dhona.jpeg' },
  { name:'ANISH G K', team:'CMTA-D', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cmta-d/anish-g-k.jpeg' },

  // MOXIEE
  { name:'GOWTHAMAN N', team:'MOX', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-d/mox/gowthaman-n.jpg' },
  { name:'SIDDHARTH G', team:'MOX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/mox/siddharth-g.jpeg' },
  { name:'KANISHKA G', team:'MOX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/mox/kanishka-g.jpeg' },
  { name:'THULASIDHARAN', team:'MOX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/mox/thulasidharan.jpg' },
  { name:'DEEPAK R', team:'MOX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/mox/deepak-r.jpg' },
  { name:'PAPSIKARAN', team:'MOX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/mox/papsikaran.jpg' },
  { name:'SEKHAR PERUVAMBA SESHAN', team:'MOX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/mox/sekhar-peruvamba-seshan.jpg' },
  { name:'ABHINAV JAYARAM', team:'MOX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/mox/abhinav-jayaram.jpg' },
  { name:'SAILAPATHI VENKATRAMAN', team:'MOX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/mox/sailapathi-venkatraman.jpg' },
  { name:'RUDRA DASAN GANESAN CHIDAMBARAM', team:'MOX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/mox/rudra-dasan-ganesan-chidambaram.jpg' },
  { name:'SRI PRIYA D', team:'MOX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/mox/sri-priya-d.jpg' },
  { name:'HEMA SEKHAR', team:'MOX', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/mox/hema-sekhar.jpg' },

  // COSMO - E
  { name:'SENGOTTIAN VSLB', team:'COS-E', gender:null, age:null, role:'Captain', gamesPlayed:null, wins:null, photo:'photos/div-d/cos-e/sengottian-vslb.jpeg' },
  { name:'NARENDRA', team:'COS-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cos-e/narendra.jpg' },
  { name:'BHARATH SHAH', team:'COS-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cos-e/bharath-shah.jpeg' },
  { name:'PRAVIN KUMAR MAHESHWARI', team:'COS-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cos-e/pravin-kumar-maheshwari.jpeg' },
  { name:'SANJAY D SHAH', team:'COS-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cos-e/sanjay-d-shah.jpg' },
  { name:'R KRISHNAMURTHI', team:'COS-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cos-e/r-krishnamurthi.jpg' },
  { name:'DHURUVAKUMAR SENTHILKUMAR', team:'COS-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cos-e/dhuruvakumar-senthilkumar.jpeg' },
  { name:'SELVAKUMAR P', team:'COS-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cos-e/selvakumar-p.jpg' },
  { name:'SAI PRANAV DEVAA N', team:'COS-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cos-e/sai-pranav-devaa-n.jpeg' },
  { name:'PRANAV', team:'COS-E', gender:null, age:null, role:'Player', gamesPlayed:null, wins:null, photo:'photos/div-d/cos-e/pranav.jpeg' },
];

const DIV_D_SCHEDULE = [
  // ── Week 1 ─────────────────────────────
  { week:1, date:'24 Jan 2026', done:true, matches:[
    { home:'OM SHREE - A', score:'3-0', away:'S RAILWAY - A', venue:'',
      courts:[
        { ct:1, home:'ADITHYA RAMRAJ / Vinoth Kumar.M', away:'MERVIN RAJA / RAJESH', sets:'6-2, 6-4', win:'home' },
        { ct:2, home:'Praneash. S / AARUSSH K', away:'SABAPATHY / SIRAJUDEEN.M', sets:'6-7, 6-3, 10-3', win:'home' },
        { ct:3, home:'DEVARAJ E / Ashwin Kumar', away:'GOPALA KRISHNAN / MELVIN RAJA', sets:'6-0, 6-1', win:'home' },
      ]},
    { home:'MAPLES - A', score:'2-1', away:'ALPHA-A', venue:'',
      courts:[
        { ct:1, home:'A.S.Mushtafa / Murugan Settu', away:'Kandasamy / HARI KRISHNA', sets:'4-6, 6-1, 10-1', win:'home' },
        { ct:2, home:'Sakthivel / PARTHIBAN R', away:'DAVID / Jayakrishna Manokaran', sets:'6-2, 6-3', win:'home' },
        { ct:3, home:'M.Senthil Kumar / C.Manivenkatesh', away:'RAMESH / ANAND BHOJRAJ', sets:'1-6, 1-6', win:'away' },
      ]},
    { home:'COSMO - E', score:'2-1', away:'MOXIEE', venue:'',
      courts:[
        { ct:1, home:'SENGOTTIAN VSLB / SAI PRANAV DEVAA N', away:'DEEPAK R / RUDRA DASAN GANESAN CHIDAMBARAM', sets:'7-6, 6-0', win:'home' },
        { ct:2, home:'BHARATH SHAH / NARENDRA', away:'SIDDHARTH G / KANISHKA G', sets:'2-6, 2-6', win:'away' },
        { ct:3, home:'PRAVIN KUMAR MAHESHWARI / PRANAV', away:'GOWTHAMAN N / ABHINAV JAYARAM', sets:'6-1, 6-4', win:'home' },
      ]},
    { home:'PROSERVE - D', score:'2-1', away:'CMTA - D', venue:'',
      courts:[
        { ct:1, home:'Vinod B / Bharath Arjun. R', away:'KAMALESH PUNMIYA / MEGHNA DARSHAK', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'Prabhu Rathinakumar / Kamesh', away:'Navratan Singh / ARVIND RAMESH', sets:'1-6, 2-6', win:'away' },
        { ct:3, home:'Anand Rathinakumar / Sudarshan k', away:'SATISH RAJAN / CHOCKALINGAM', sets:'6-4, 6-1', win:'home' },
      ]},
    { home:'PALLADAM PROS TENNIS CLUB', score:'3-0', away:'GST - A', venue:'',
      courts:[
        { ct:1, home:'RAGUNATH R / Kowsik Sundara Varathan Sridhar', away:'PRABHU RAJ / SAI PRADEEP', sets:'6-0, 7-6', win:'home' },
        { ct:2, home:'John Carino S / Jordan J', away:'RAMESH G / R.Vedhanthan', sets:'7-5, 6-4', win:'home' },
        { ct:3, home:'Sooraj Brayan John / Mukil', away:'Pritul.S / Likeeth', sets:'5-7, 6-4, 10-3', win:'home' },
      ]},
  ]},

  // ── Week 2 ─────────────────────────────
  { week:2, date:'31 Jan - 01 Feb 2026', done:true, matches:[
    { home:'ALPHA-A', score:'2-1', away:'CMTA - D', venue:'',
      courts:[
        { ct:1, home:'RAMESH / Antony terance', away:'MEGHNA DARSHAK / DARSHAN O JAIN', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'HARI KRISHNA / Jayakrishna Manokaran', away:'SATISH RAJAN / ANISH G K', sets:'6-2, 6-3', win:'home' },
        { ct:3, home:'Kandasamy / ANAND BHOJRAJ', away:'ARVIND RAMESH / Radhakrishnan Jaishankar', sets:'6-4, 4-6, 8-10', win:'away' },
      ]},
    { home:'OM SHREE - A', score:'3-0', away:'MAPLES - A', venue:'',
      courts:[
        { ct:1, home:'Praneash. S / Ashwin Kumar', away:'A.S.Mushtafa / Murugan Settu', sets:'6-7, 6-4, 10-5', win:'home' },
        { ct:2, home:'DEVARAJ E / Piranav. S', away:'Sakthivel / PARTHIBAN R', sets:'6-2, 6-2', win:'home' },
        { ct:3, home:'ADITHYA RAMRAJ / Vinoth Kumar.M', away:'T.S.Sugumar / M.Senthil Kumar', sets:'6-2, 7-5', win:'home' },
      ]},
    { home:'S RAILWAY - A', score:'2-1', away:'GST - A', venue:'',
      courts:[
        { ct:1, home:'MELVIN RAJA / SABAPATHY', away:'Likeeth / Vivaan', sets:'6-1, 6-2', win:'home' },
        { ct:2, home:'SIRAJUDEEN.M / GOPALA KRISHNAN', away:'PRABHU RAJ / SAI PRADEEP', sets:'6-1, 6-2', win:'home' },
        { ct:3, home:'RAJESH / MERVIN RAJA', away:'RAMESH G / M.Vignesh', sets:'0-6, 2-6', win:'away' },
      ]},
    { home:'DHARMU - B', score:'3-0', away:'COSMO - E', venue:'',
      courts:[
        { ct:1, home:'YUVARAJ / SARAVANA KARTHI', away:'SENGOTTIAN VSLB / SANJAY D SHAH', sets:'6-3, 6-1', win:'home' },
        { ct:2, home:'MALLIKESWARAJA / KARTHIK N', away:'BHARATH SHAH / SAI PRANAV DEVAA N', sets:'6-3, 6-1', win:'home' },
        { ct:3, home:'S R P RAMESH / BALAJI NATARAJ', away:'PRAVIN KUMAR MAHESHWARI / PRANAV', sets:'6-1, 6-1', win:'home' },
      ]},
    { home:'PALLADAM PROS TENNIS CLUB', score:'3-0', away:'MOXIEE', venue:'',
      courts:[
        { ct:1, home:'John Carino S / Jordan J', away:'SIDDHARTH G / KANISHKA G', sets:'6-3, 6-3', win:'home' },
        { ct:2, home:'RAGUNATH R / Kowsik Sundara Varathan Sridhar', away:'SAILAPATHI VENKATRAMAN / RUDRA DASAN GANESAN CHIDAMBARAM', sets:'6-0, 6-2', win:'home' },
        { ct:3, home:'Sooraj Brayan John / Mukil', away:'GOWTHAMAN N / DEEPAK R', sets:'6-1, 6-2', win:'home' },
      ]},
  ]},

  // ── Week 3 ─────────────────────────────
  { week:3, date:'07 Feb 2026', done:true, matches:[
    { home:'ALPHA-A', score:'3-0', away:'COSMO - E', venue:'',
      courts:[
        { ct:1, home:'Kandasamy / Poulous H', away:'PRANAV / SAI PRANAV DEVAA N', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'RAMESH / ANAND BHOJRAJ', away:'BHARATH SHAH / PRAVIN KUMAR MAHESHWARI', sets:'6-2, 6-4', win:'home' },
        { ct:3, home:'Jayakrishna Manokaran / HARI KRISHNA', away:'R KRISHNAMURTHI / DHURUVAKUMAR SENTHILKUMAR', sets:'6-0, 6-2', win:'home' },
      ]},
    { home:'S RAILWAY - A', score:'3-0', away:'CMTA - D', venue:'',
      courts:[
        { ct:1, home:'MELVIN RAJA / SABAPATHY', away:'Radhakrishnan Jaishankar / Narayan Dhona', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'MERVIN RAJA / RAJESH', away:'CHOCKALINGAM / ARVIND RAMESH', sets:'7-6, 6-0', win:'home' },
        { ct:3, home:'SIRAJUDEEN.M / GOPALA KRISHNAN', away:'ANISH G K / PRASHANT JAIN', sets:'6-2, 6-3', win:'home' },
      ]},
    { home:'OM SHREE - A', score:'3-0', away:'DHARMU - B', venue:'',
      courts:[
        { ct:1, home:'ADITHYA RAMRAJ / Vinoth Kumar.M', away:'SARAVANA KARTHI / YUVARAJ', sets:'7-5, 6-2', win:'home' },
        { ct:2, home:'DEVARAJ E / Praneash. S', away:'MALLIKESWARAJA / KARTHIK N', sets:'7-5, 6-1', win:'home' },
        { ct:3, home:'Piranav. S / Ashwin Kumar', away:'BALAJI NATARAJ / SANJAY R', sets:'6-1, 6-3', win:'home' },
      ]},
    { home:'GST - A', score:'2-1', away:'MOXIEE', venue:'',
      courts:[
        { ct:1, home:'Vivaan / M.Vignesh', away:'PAPSIKARAN / SEKHAR PERUVAMBA SESHAN', sets:'6-0, 6-3', win:'home' },
        { ct:2, home:'Likeeth / Pritul.S', away:'DEEPAK R / RUDRA DASAN GANESAN CHIDAMBARAM', sets:'6-1, 6-2', win:'home' },
        { ct:3, home:'ARAVIND / RAAMKUMAR', away:'SIDDHARTH G / KANISHKA G', sets:'1-6, 3-6', win:'away' },
      ]},
    { home:'PALLADAM PROS TENNIS CLUB', score:'3-0', away:'PROSERVE - D', venue:'',
      courts:[
        { ct:1, home:'RAGUNATH R / Kowsik Sundara Varathan Sridhar', away:'Sudarshan k / Kamesh', sets:'6-2, 6-0', win:'home' },
        { ct:2, home:'John Carino S / Jordan J', away:'JEEVAN NEHEMAIH V / Bharath Arjun. R', sets:'6-3, 6-0', win:'home' },
        { ct:3, home:'Sooraj Brayan John / Mukil', away:'MANOJKUMAR S / Sumit nayar', sets:'6-4, 6-0', win:'home' },
      ]},
  ]},

  // ── Week 4 ─────────────────────────────
  { week:4, date:'14 Feb 2026', done:true, matches:[
    { home:'OM SHREE - A', score:'2-1', away:'ALPHA-A', venue:'',
      courts:[
        { ct:1, home:'ADITHYA RAMRAJ / AARUSSH K', away:'DAVID / Poulous H', sets:'7-6, 6-0', win:'home' },
        { ct:2, home:'Vinoth Kumar.M / Praneash. S', away:'HARI KRISHNA / Jayakrishna Manokaran', sets:'6-3, 6-4', win:'home' },
        { ct:3, home:'DEVARAJ E / Ashwin Kumar', away:'RAMESH / ANAND BHOJRAJ', sets:'2-6, 1-6', win:'away' },
      ]},
    { home:'CMTA - D', score:'2-1', away:'MOXIEE', venue:'',
      courts:[
        { ct:1, home:'CHOCKALINGAM / MEGHNA DARSHAK', away:'SRI PRIYA D / SAILAPATHI VENKATRAMAN', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'SATISH RAJAN / DARSHAN O JAIN', away:'ABHINAV JAYARAM / SEKHAR PERUVAMBA SESHAN', sets:'7-6, 6-0', win:'home' },
        { ct:3, home:'PRASHANT JAIN / Radhakrishnan Jaishankar', away:'DEEPAK R / RUDRA DASAN GANESAN CHIDAMBARAM', sets:'6-3, 5-7, 5-10', win:'away' },
      ]},
    { home:'S RAILWAY - A', score:'3-0', away:'COSMO - E', venue:'',
      courts:[
        { ct:1, home:'RAJESH / MERVIN RAJA', away:'SELVAKUMAR P / SAI PRANAV DEVAA N', sets:'6-1, 6-2', win:'home' },
        { ct:2, home:'SIRAJUDEEN.M / GOPALA KRISHNAN', away:'NARENDRA / BHARATH SHAH', sets:'7-5, 6-2', win:'home' },
        { ct:3, home:'MELVIN RAJA / SABAPATHY', away:'SENGOTTIAN VSLB / PRANAV', sets:'6-2, 6-1', win:'home' },
      ]},
    { home:'MAPLES - A', score:'2-1', away:'DHARMU - B', venue:'',
      courts:[
        { ct:1, home:'R.Ramakrishnan / C.Manivenkatesh', away:'MALLIKESWARAJA / KARTHIK N', sets:'0-6, 4-6', win:'away' },
        { ct:2, home:'A.S.Mushtafa / Murugan Settu', away:'SARAVANA KARTHI / BALAJI NATARAJ', sets:'6-4, 6-2', win:'home' },
        { ct:3, home:'M.Senthil Kumar / Sakthivel', away:'YUVARAJ / NAGARAJ V', sets:'3-6, 6-3, 10-6', win:'home' },
      ]},
    { home:'PROSERVE - D', score:'2-1', away:'GST - A', venue:'',
      courts:[
        { ct:1, home:'Vignesh Thangavel / Anand Rathinakumar', away:'Vivaan / M.Vignesh', sets:'6-2, 6-2', win:'home' },
        { ct:2, home:'MANOJKUMAR S / Prabhu Rathinakumar', away:'SAI PRADEEP / ARAVIND', sets:'6-2, 2-6, 10-4', win:'home' },
        { ct:3, home:'Sudarshan k / Vinod B', away:'Likeeth / Pritul.S', sets:'6-3, 4-6, 9-11', win:'away' },
      ]},
  ]},

  // ── Week 5 ─────────────────────────────
  { week:5, date:'21 Feb 2026', done:true, matches:[
    { home:'PALLADAM PROS TENNIS CLUB', score:'3-0', away:'CMTA - D', venue:'',
      courts:[
        { ct:1, home:'RAGUNATH R / Kowsik Sundara Varathan Sridhar', away:'SATISH RAJAN / DARSHAN O JAIN', sets:'6-0, 6-2', win:'home' },
        { ct:2, home:'Sooraj Brayan John / Mukil', away:'CHOCKALINGAM / KAMALESH PUNMIYA', sets:'6-2, 6-1', win:'home' },
        { ct:3, home:'John Carino S / Jordan J', away:'ANISH G K / MEGHNA DARSHAK', sets:'6-0, 6-1', win:'home' },
      ]},
    { home:'ALPHA-A', score:'2-1', away:'DHARMU - B', venue:'',
      courts:[
        { ct:1, home:'Poulous H / Kandasamy', away:'NAGARAJ V / PALANIAPPAN S', sets:'6-2, 6-1', win:'home' },
        { ct:2, home:'HARI KRISHNA / Jayakrishna Manokaran', away:'Dr. Thillainayagam / BALAJI NATARAJ', sets:'7-5, 2-6, 11-9', win:'home' },
        { ct:3, home:'ALAGAPPAN / DAVID', away:'YUVARAJ / KARTHIK N', sets:'7-5, 4-6, 6-10', win:'away' },
      ]},
    { home:'PROSERVE - D', score:'3-0', away:'COSMO - E', venue:'',
      courts:[
        { ct:1, home:'MANOJKUMAR S / JEEVAN NEHEMAIH V', away:'DHURUVAKUMAR SENTHILKUMAR / PRANAV', sets:'6-1, 6-2', win:'home' },
        { ct:2, home:'Anand Rathinakumar / Sudarshan k', away:'BHARATH SHAH / NARENDRA', sets:'7-5, 6-3', win:'home' },
        { ct:3, home:'Vignesh Thangavel / Vinod B', away:'SENGOTTIAN VSLB / SAI PRANAV DEVAA N', sets:'6-3, 6-1', win:'home' },
      ]},
    { home:'MAPLES - A', score:'2-1', away:'S RAILWAY - A', venue:'',
      courts:[
        { ct:1, home:'R.Ramakrishnan / Murugan Settu', away:'SIRAJUDEEN.M / GOPALA KRISHNAN', sets:'5-7, 7-6, 10-8', win:'home' },
        { ct:2, home:'M.Senthil Kumar / PARTHIBAN R', away:'MERVIN RAJA / KARTHIKEYAN M', sets:'2-6, 6-4, 10-7', win:'home' },
        { ct:3, home:'A.S.Mushtafa / Sakthivel', away:'SABAPATHY / MELVIN RAJA', sets:'3-6, 4-6', win:'away' },
      ]},
    { home:'OM SHREE - A', score:'3-0', away:'MOXIEE', venue:'',
      courts:[
        { ct:1, home:'ADITHYA RAMRAJ / AARUSSH K', away:'DEEPAK R / ABHINAV JAYARAM', sets:'6-0, 6-2', win:'home' },
        { ct:2, home:'Vinoth Kumar.M / Ashwin Kumar', away:'SEKHAR PERUVAMBA SESHAN / SAILAPATHI VENKATRAMAN', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'DEVARAJ E / Piranav. S', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
  ]},

  // ── Week 6 ─────────────────────────────
  { week:6, date:'28 Feb - 01 Mar 2026', done:true, matches:[
    { home:'PALLADAM PROS TENNIS CLUB', score:'3-0', away:'COSMO - E', venue:'',
      courts:[
        { ct:1, home:'RAGUNATH R / Kowsik Sundara Varathan Sridhar', away:'SENGOTTIAN VSLB / SANJAY D SHAH', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Jordan J / John Carino S', away:'SAI PRANAV DEVAA N / PRAVIN KUMAR MAHESHWARI', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Sooraj Brayan John / Mukil', away:'NARENDRA / DHURUVAKUMAR SENTHILKUMAR', sets:'6-0, 6-1', win:'home' },
      ]},
    { home:'S RAILWAY - A', score:'3-0', away:'DHARMU - B', venue:'',
      courts:[
        { ct:1, home:'RAJESH / MERVIN RAJA', away:'Dr. Thillainayagam / BALAJI NATARAJ', sets:'6-1, 6-2', win:'home' },
        { ct:2, home:'SIRAJUDEEN.M / KARTHIKEYAN M', away:'PALANIAPPAN S / SARAVANA KARTHI', sets:'6-2, 7-5', win:'home' },
        { ct:3, home:'SABAPATHY / MELVIN RAJA', away:'KARTHIK N / MALLIKESWARAJA', sets:'6-3, 6-1', win:'home' },
      ]},
    { home:'OM SHREE - A', score:'3-0', away:'PROSERVE - D', venue:'',
      courts:[
        { ct:1, home:'ADITHYA RAMRAJ / AARUSSH K', away:'MANOJKUMAR S / JEEVAN NEHEMAIH V', sets:'7-6, 6-3', win:'home' },
        { ct:2, home:'Piranav. S / Ashwin Kumar', away:'Vinod B / Sudarshan k', sets:'6-3, 6-4', win:'home' },
        { ct:3, home:'SANTHOSH S / Vinoth Kumar.M', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'MAPLES - A', score:'3-0', away:'MOXIEE', venue:'',
      courts:[
        { ct:1, home:'Murugan Settu / T.S.Sugumar', away:'DEEPAK R / SIDDHARTH G', sets:'6-3, 6-1', win:'home' },
        { ct:2, home:'A.S.Mushtafa / R.Ramakrishnan', away:'SAILAPATHI VENKATRAMAN / SRI PRIYA D', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'N.Shanmugaprabakar / Sakthivel', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'GST - A', score:'3-0', away:'CMTA - D', venue:'',
      courts:[
        { ct:1, home:'RAMESH G / Vivaan', away:'SATISH RAJAN / Navratan Singh', sets:'6-2, 6-2', win:'home' },
        { ct:2, home:'SAI PRADEEP / RAAMKUMAR', away:'PRASHANT JAIN / Narayan Dhona', sets:'6-4, 6-0', win:'home' },
        { ct:3, home:'Pritul.S / M.Vignesh', away:'Radhakrishnan Jaishankar / ARVIND RAMESH', sets:'6-2, 6-2', win:'home' },
      ]},
  ]},

  // ── Week 7 ─────────────────────────────
  { week:7, date:'07 Mar 2026', done:true, matches:[
    { home:'OM SHREE - A', score:'3-0', away:'COSMO - E', venue:'',
      courts:[
        { ct:1, home:'Vinoth Kumar.M / ADITHYA RAMRAJ', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'DEVARAJ E / Piranav. S', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Ashwin Kumar / AARUSSH K', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'MAPLES - A', score:'3-0', away:'CMTA - D', venue:'',
      courts:[
        { ct:1, home:'M.Paramsivam / Murugan Settu', away:'CHOCKALINGAM / MEGHNA DARSHAK', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'A.S.Mushtafa / PARTHIBAN R', away:'SATISH RAJAN / KAMALESH PUNMIYA', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'M.Senthil Kumar / Sakthivel', away:'Navratan Singh / Narayan Dhona', sets:'6-2, 6-4', win:'home' },
      ]},
    { home:'S RAILWAY - A', score:'2-1', away:'PROSERVE - D', venue:'',
      courts:[
        { ct:1, home:'RAJESH / MERVIN RAJA', away:'MANOJKUMAR S / JEEVAN NEHEMAIH V', sets:'6-2, 7-6', win:'home' },
        { ct:2, home:'SABAPATHY / MELVIN RAJA', away:'Vignesh Thangavel / Prabhu Rathinakumar', sets:'6-0, 6-2', win:'home' },
        { ct:3, home:'SIRAJUDEEN.M / KARTHIKEYAN M', away:'Vinod B / Anand Rathinakumar', sets:'7-5, 2-6, 4-10', win:'away' },
      ]},
    { home:'PALLADAM PROS TENNIS CLUB', score:'3-0', away:'ALPHA-A', venue:'',
      courts:[
        { ct:1, home:'John Carino S / Jordan J', away:'Kandasamy / ALAGAPPAN', sets:'6-0, 6-3', win:'home' },
        { ct:2, home:'SENTHIL KUMAR..S / Mukil', away:'Jayakrishna Manokaran / HARI KRISHNA', sets:'6-3, 6-1', win:'home' },
        { ct:3, home:'RAGUNATH R / Kowsik Sundara Varathan Sridhar', away:'ANAND BHOJRAJ / Poulous H', sets:'7-5, 6-1', win:'home' },
      ]},
    { home:'GST - A', score:'2-1', away:'DHARMU - B', venue:'',
      courts:[
        { ct:1, home:'PRABHU RAJ / Likeeth', away:'YUVARAJ / BALAJI NATARAJ', sets:'6-4, 5-7, 7-10', win:'away' },
        { ct:2, home:'RAAMKUMAR / RAMESH G', away:'MALLIKESWARAJA / KARTHIK N', sets:'0-6, 6-4, 10-8', win:'home' },
        { ct:3, home:'ARAVIND / SAI PRADEEP', away:'S R P RAMESH / SARAVANA KARTHI', sets:'7-6, 7-5', win:'home' },
      ]},
  ]},

  // ── Week 8 ─────────────────────────────
  { week:8, date:'14 Mar 2026', done:true, matches:[
    { home:'PALLADAM PROS TENNIS CLUB', score:'2-1', away:'MAPLES - A', venue:'',
      courts:[
        { ct:1, home:'Sooraj Brayan John / Mukil', away:'PARTHIBAN R / A.S.Mushtafa', sets:'3-6, 1-6', win:'away' },
        { ct:2, home:'RAGUNATH R / Kowsik Sundara Varathan Sridhar', away:'Sakthivel / Murugan Settu', sets:'7-6, 5-7, 10-5', win:'home' },
        { ct:3, home:'John Carino S / Jordan J', away:'T.S.Sugumar / M.Senthil Kumar', sets:'6-1, 6-0', win:'home' },
      ]},
    { home:'OM SHREE - A', score:'2-1', away:'GST - A', venue:'',
      courts:[
        { ct:1, home:'DEVARAJ E / Piranav. S', away:'RAMESH G / Likeeth', sets:'0-6, 1-6', win:'away' },
        { ct:2, home:'Ashwin Kumar / ADITHYA RAMRAJ', away:'SAI PRADEEP / ARAVIND', sets:'6-0, 6-2', win:'home' },
        { ct:3, home:'Praneash. S / Vinoth Kumar.M', away:'Pritul.S / M.Vignesh', sets:'6-2, 4-6, 10-1', win:'home' },
      ]},
    { home:'DHARMU - B', score:'3-0', away:'PROSERVE - D', venue:'',
      courts:[
        { ct:1, home:'SARAVANA KARTHI / NAGARAJ V', away:'Anand Rathinakumar / Sudarshan k', sets:'6-0, 6-2', win:'home' },
        { ct:2, home:'YUVARAJ / BALAJI NATARAJ', away:'Vignesh Thangavel / Bharath Arjun. R', sets:'6-4, 6-1', win:'home' },
        { ct:3, home:'PALANIAPPAN S / KARTHIK N', away:'MANOJKUMAR S / Vinod B', sets:'6-1, 6-2', win:'home' },
      ]},
    { home:'CMTA - D', score:'2-1', away:'COSMO - E', venue:'',
      courts:[
        { ct:1, home:'SATISH RAJAN / CHOCKALINGAM', away:'R KRISHNAMURTHI / PRANAV', sets:'7-5, 6-4', win:'home' },
        { ct:2, home:'Navratan Singh / PRASHANT JAIN', away:'SENGOTTIAN VSLB / SANJAY D SHAH', sets:'6-3, 6-1', win:'home' },
        { ct:3, home:'ARVIND RAMESH / Narayan Dhona', away:'BHARATH SHAH / NARENDRA', sets:'4-6, 4-6', win:'away' },
      ]},
    { home:'ALPHA-A', score:'3-0', away:'MOXIEE', venue:'',
      courts:[
        { ct:1, home:'RAMESH / Poulous H', away:'SRI PRIYA D / SAILAPATHI VENKATRAMAN', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Jayakrishna Manokaran / HARI KRISHNA', away:'DEEPAK R / ABHINAV JAYARAM', sets:'6-3, 6-2', win:'home' },
        { ct:3, home:'ALAGAPPAN / Kandasamy', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
  ]},

  // ── Week 9 ─────────────────────────────
  { week:9, date:'21 Mar 2026', done:true, matches:[
    { home:'OM SHREE - A', score:'3-0', away:'CMTA - D', venue:'',
      courts:[
        { ct:1, home:'Praneash. S / SUNDAR B', away:'KAMALESH PUNMIYA / MEGHNA DARSHAK', sets:'6-1, 6-0', win:'home' },
        { ct:2, home:'Ashwin Kumar / Piranav. S', away:'SATISH RAJAN / ANISH G K', sets:'6-1, 6-4', win:'home' },
        { ct:3, home:'ADITHYA RAMRAJ / Vinoth Kumar.M', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'PROSERVE - D', score:'3-0', away:'ALPHA-A', venue:'',
      courts:[
        { ct:1, home:'Anand Rathinakumar / Kamesh', away:'Kandasamy / ALAGAPPAN', sets:'6-4, 6-4', win:'home' },
        { ct:2, home:'JEEVAN NEHEMAIH V / Prabhu Rathinakumar', away:'ANAND BHOJRAJ / Jayakrishna Manokaran', sets:'6-1, 6-4', win:'home' },
        { ct:3, home:'Vinod B / Bharath Arjun. R', away:'HARI KRISHNA / Antony terance', sets:'6-2, 5-7, 11-9', win:'home' },
      ]},
    { home:'MAPLES - A', score:'3-0', away:'GST - A', venue:'',
      courts:[
        { ct:1, home:'M.Senthil Kumar / Kulasekarapandiyan', away:'RAAMKUMAR / SAI PRADEEP', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'A.S.Mushtafa / PARTHIBAN R', away:'RAMESH G / Pritul.S', sets:'2-6, 6-2, 14-12', win:'home' },
        { ct:3, home:'Sakthivel / Murugan Settu', away:'Vivaan / Likeeth', sets:'4-6, 7-5, 10-5', win:'home' },
      ]},
    { home:'S RAILWAY - A', score:'3-0', away:'MOXIEE', venue:'',
      courts:[
        { ct:1, home:'MERVIN RAJA / KARTHIKEYAN M', away:'DEEPAK R / ABHINAV JAYARAM', sets:'6-1, 6-2', win:'home' },
        { ct:2, home:'SABAPATHY / MELVIN RAJA', away:'SAILAPATHI VENKATRAMAN / SRI PRIYA D', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'SIRAJUDEEN.M / RAJESH', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'PALLADAM PROS TENNIS CLUB', score:'2-1', away:'DHARMU - B', venue:'',
      courts:[
        { ct:1, home:'RAGUNATH R / Kowsik Sundara Varathan Sridhar', away:'KARTHIK N / BALAJI NATARAJ', sets:'2-6, 6-0, 8-10', win:'away' },
        { ct:2, home:'John Carino S / Jordan J', away:'PALANIAPPAN S / YUVARAJ', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'Mukil / SENTHIL KUMAR..S', away:'SARAVANA KARTHI / SANJAY R', sets:'6-3, 6-1', win:'home' },
      ]},
  ]},

  // ── Week 10 ─────────────────────────────
  { week:10, date:'28 Mar 2026', done:true, matches:[
    { home:'OM SHREE - A', score:'3-0', away:'PALLADAM PROS TENNIS CLUB', venue:'',
      courts:[
        { ct:1, home:'Vinoth Kumar.M / Piranav. S', away:'SENTHIL KUMAR..S / Mukil', sets:'6-3, 3-6, 10-5', win:'home' },
        { ct:2, home:'ADITHYA RAMRAJ / Ashwin Kumar', away:'John Carino S / Jordan J', sets:'6-3, 6-2', win:'home' },
        { ct:3, home:'Praneash. S / SANTHOSH S', away:'RAGUNATH R / Kowsik Sundara Varathan Sridhar', sets:'3-6, 5-7', win:'away' },
      ]},
    { home:'ALPHA-A', score:'2-1', away:'S RAILWAY - A', venue:'',
      courts:[
        { ct:1, home:'Jayakrishna Manokaran / HARI KRISHNA', away:'SIRAJUDEEN.M / KARTHIKEYAN M', sets:'6-4, 2-6, 11-9', win:'home' },
        { ct:2, home:'RAMESH / ANAND BHOJRAJ', away:'SABAPATHY / MELVIN RAJA', sets:'4-6, 6-4, 10-6', win:'home' },
        { ct:3, home:'Antony terance / Kandasamy', away:'MERVIN RAJA / RAJESH', sets:'4-6, 3-6', win:'away' },
      ]},
    { home:'MAPLES - A', score:'3-0', away:'PROSERVE - D', venue:'',
      courts:[
        { ct:1, home:'T.S.Sugumar / R.Ramakrishnan', away:'Prabhu Rathinakumar / Sudarshan k', sets:'7-6, 7-5', win:'home' },
        { ct:2, home:'PARTHIBAN R / M.Senthil Kumar', away:'MANOJKUMAR S / Vinod B', sets:'7-5, 6-7, 16-14', win:'home' },
        { ct:3, home:'N.Shanmugaprabakar / C.Manivenkatesh', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'MOXIEE', score:'2-1', away:'DHARMU - B', venue:'',
      courts:[
        { ct:1, home:'PAPSIKARAN / GOWTHAMAN N', away:'PALANIAPPAN S / Dr. Thillainayagam', sets:'0-6, 0-6', win:'away' },
        { ct:2, home:'DEEPAK R / ABHINAV JAYARAM', away:'W/O', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'SAILAPATHI VENKATRAMAN / SRI PRIYA D', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'GST - A', score:'2-1', away:'COSMO - E', venue:'',
      courts:[
        { ct:1, home:'RAMESH G / Vivaan', away:'PRAVIN KUMAR MAHESHWARI / PRANAV', sets:'6-3, 6-1', win:'home' },
        { ct:2, home:'Likeeth / ARAVIND', away:'SENGOTTIAN VSLB / SAI PRANAV DEVAA N', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'PRABHU RAJ / Pritul.S', away:'BHARATH SHAH / NARENDRA', sets:'4-6, 2-6', win:'away' },
      ]},
  ]},

  // ── Week 11 ─────────────────────────────
  { week:11, date:'04 Apr 2026', done:true, matches:[
    { home:'PALLADAM PROS TENNIS CLUB', score:'2-1', away:'S RAILWAY - A', venue:'',
      courts:[
        { ct:1, home:'Sooraj Brayan John / SENTHIL KUMAR..S', away:'SIRAJUDEEN.M / GOPALA KRISHNAN', sets:'3-6, 1-6', win:'away' },
        { ct:2, home:'RAGUNATH R / Mukil', away:'SABAPATHY / MELVIN RAJA', sets:'7-5, 7-5', win:'home' },
        { ct:3, home:'John Carino S / Jordan J', away:'KARTHIKEYAN M / MERVIN RAJA', sets:'6-4, 7-6', win:'home' },
      ]},
    { home:'PROSERVE - D', score:'3-0', away:'MOXIEE', venue:'',
      courts:[
        { ct:1, home:'Vinod B / Prabhu Rathinakumar', away:'DEEPAK R / ABHINAV JAYARAM', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'MANOJKUMAR S / JEEVAN NEHEMAIH V', away:'SAILAPATHI VENKATRAMAN / SRI PRIYA D', sets:'6-1, 6-0', win:'home' },
        { ct:3, home:'Vignesh Thangavel / Sudarshan k', away:'W/O', sets:'6-0, 6-0', win:'home' },
      ]},
    { home:'MAPLES - A', score:'3-0', away:'COSMO - E', venue:'',
      courts:[
        { ct:1, home:'M.Senthil Kumar / R.Ramakrishnan', away:'NARENDRA / PRANAV', sets:'6-2, 6-3', win:'home' },
        { ct:2, home:'A.S.Mushtafa / Sakthivel', away:'SENGOTTIAN VSLB / SAI PRANAV DEVAA N', sets:'6-0, 6-1', win:'home' },
        { ct:3, home:'T.S.Sugumar / PARTHIBAN R', away:'PRAVIN KUMAR MAHESHWARI / BHARATH SHAH', sets:'6-4, 6-4', win:'home' },
      ]},
    { home:'GST - A', score:'3-0', away:'ALPHA-A', venue:'',
      courts:[
        { ct:1, home:'PRABHU RAJ / Likeeth', away:'DAVID / Antony terance', sets:'6-2, 6-1', win:'home' },
        { ct:2, home:'SAI PRADEEP / ARAVIND', away:'Poulous H / Kandasamy', sets:'2-6, 6-2, 10-5', win:'home' },
        { ct:3, home:'M.Vignesh / RAMESH G', away:'Jayakrishna Manokaran / HARI KRISHNA', sets:'7-6, 4-6, 10-5', win:'home' },
      ]},
    { home:'DHARMU - B', score:'3-0', away:'CMTA - D', venue:'',
      courts:[
        { ct:1, home:'S R P RAMESH / SARAVANA KARTHI', away:'ANISH G K / Narayan Dhona', sets:'6-1, 6-3', win:'home' },
        { ct:2, home:'YUVARAJ / NAGARAJ V', away:'PRASHANT JAIN / DARSHAN O JAIN', sets:'6-1, 6-0', win:'home' },
        { ct:3, home:'MALLIKESWARAJA / KARTHIK N', away:'ARVIND RAMESH / Radhakrishnan Jaishankar', sets:'6-2, 6-1', win:'home' },
      ]},
  ]},
];
