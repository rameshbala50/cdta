// CDTA 2026 -- Division H Data
// Auto-extracted from match records, Week 10

const DIV_H_TEAMS = [
  { short:'SNS-D',  full:'SNS - D',              captain:'', mobile:'', players:0, club:'SNS Tennis Academy(Bullseye)',  surface:'', division:'H' },
  { short:'PSG',    full:'PSG Tech',              captain:'', mobile:'', players:0, club:'PSG Tech Tennis Club',          surface:'', division:'H' },
  { short:'ANU-B',  full:'ANUSHAM - B',           captain:'', mobile:'', players:0, club:'Anusham Tennis Academy',        surface:'', division:'H' },
  { short:'RSP',    full:'RS PURAM - A',          captain:'', mobile:'', players:0, club:'RS Puram Club',                 surface:'', division:'H' },
  { short:'GPTC-C', full:'G.P.T.C - C',          captain:'', mobile:'', players:0, club:'GPTC',                          surface:'', division:'H' },
  { short:'ANNUR',  full:'ANNUR - C(V2 SPORTS)',  captain:'', mobile:'', players:0, club:'Annur Club',                    surface:'', division:'H' },
  { short:'ACTC-B', full:'ACTC - B',              captain:'', mobile:'', players:0, club:'Arima Cyprus Tennis Club',      surface:'', division:'H' },
  { short:'TIR-B',  full:'TIRUPUR - B',           captain:'', mobile:'', players:0, club:'Tirupur Club',                  surface:'', division:'H' },
  { short:'KGR-D',  full:'KGR - D',               captain:'', mobile:'', players:0, club:'KGR Academy',                   surface:'', division:'H' },
  { short:'FALCON', full:'FALCON',                captain:'', mobile:'', players:0, club:'Falcon Tennis Academy',         surface:'', division:'H' },
  { short:'CSA',    full:'CS ACADEMY - C',        captain:'', mobile:'', players:0, club:'CS Academy',                    surface:'', division:'H' }
];

const DIV_H_STANDINGS = [
  { rank:1,  short:'SNS-D',  full:'SNS - D',              pts:22, played:9, w:9, l:0, setsW:46, setsL:16, gamesW:302, gamesL:209 },
  { rank:2,  short:'PSG',    full:'PSG Tech',              pts:21, played:8, w:7, l:1, setsW:43, setsL:9,  gamesW:270, gamesL:149 },
  { rank:3,  short:'ANU-B',  full:'ANUSHAM - B',           pts:16, played:9, w:6, l:3, setsW:35, setsL:23, gamesW:269, gamesL:187 },
  { rank:4,  short:'RSP',    full:'RS PURAM - A',          pts:13, played:8, w:4, l:4, setsW:29, setsL:24, gamesW:226, gamesL:178 },
  { rank:5,  short:'GPTC-C', full:'G.P.T.C - C',          pts:13, played:8, w:4, l:4, setsW:28, setsL:23, gamesW:215, gamesL:192 },
  { rank:6,  short:'ANNUR',  full:'ANNUR - C(V2 SPORTS)',  pts:12, played:8, w:4, l:4, setsW:26, setsL:28, gamesW:188, gamesL:197 },
  { rank:7,  short:'ACTC-B', full:'ACTC - B',              pts:11, played:8, w:3, l:5, setsW:23, setsL:29, gamesW:196, gamesL:235 },
  { rank:8,  short:'TIR-B',  full:'TIRUPUR - B',           pts:10, played:8, w:4, l:4, setsW:23, setsL:30, gamesW:192, gamesL:225 },
  { rank:9,  short:'KGR-D',  full:'KGR - D',               pts:6,  played:8, w:2, l:6, setsW:15, setsL:37, gamesW:143, gamesL:244 },
  { rank:10, short:'FALCON', full:'FALCON',                pts:5,  played:7, w:1, l:6, setsW:13, setsL:33, gamesW:153, gamesL:221 },
  { rank:11, short:'CSA',    full:'CS ACADEMY - C',        pts:3,  played:7, w:1, l:6, setsW:7,  setsL:36, gamesW:110, gamesL:227 }
];

const DIV_H_PROJECTIONS = [
  { rank:1,  short:'SNS-D',  full:'SNS - D',              current:20, expected:5.0,  projected:25.0, min:null, max:26 },
  { rank:2,  short:'PSG',    full:'PSG Tech',              current:18, expected:7.0,  projected:25.0, min:null, max:27 },
  { rank:3,  short:'ANU-B',  full:'ANUSHAM - B',           current:16, expected:3.5,  projected:19.5, min:null, max:22 },
  { rank:4,  short:'RSP',    full:'RS PURAM - A',          current:12, expected:6.5,  projected:18.5, min:null, max:21 },
  { rank:5,  short:'GPTC-C', full:'G.P.T.C - C',          current:11, expected:5.5,  projected:16.5, min:null, max:20 },
  { rank:6,  short:'ANNUR',  full:'ANNUR - C(V2 SPORTS)',  current:11, expected:4.0,  projected:15.0, min:null, max:20 },
  { rank:7,  short:'ACTC-B', full:'ACTC - B',              current:10, expected:4.5,  projected:14.5, min:null, max:19 },
  { rank:8,  short:'TIR-B',  full:'TIRUPUR - B',           current:8,  expected:4.5,  projected:12.5, min:null, max:17 },
  { rank:9,  short:'FALCON', full:'FALCON',                current:5,  expected:4.0,  projected:9.0,  min:null, max:14 },
  { rank:10, short:'KGR-D',  full:'KGR - D',               current:6,  expected:1.5,  projected:7.5,  min:null, max:12 },
  { rank:11, short:'CSA',    full:'CS ACADEMY - C',        current:3,  expected:2.5,  projected:5.5,  min:null, max:12 }
];

const DIV_H_KEY_PAIRS = [
  { pair:'SATHISH KUMAR / Sathyaseelan',                        team:'SNS-D',  apps:8, wins:8 },
  { pair:'Penmetsha Sita Ram Rohit Verma / Senthilnathan CR',   team:'SNS-D',  apps:6, wins:6 },
  { pair:'Ravi.N / Rajendran',                                  team:'RSP',    apps:7, wins:5 },
  { pair:'Vignesh K / Karthikeyan UKPM',                        team:'ANU-B',  apps:6, wins:5 },
  { pair:'Ganesh Pattiappan / Charan Ganesh',                    team:'ANU-B',  apps:6, wins:5 },
  { pair:'GOPALAKRISHNAN NALLAIYAN / KAVINKUMAR',               team:'KGR-D',  apps:6, wins:3 },
  { pair:'S.CHANDRU / R.KARTHIKAA',                             team:'TIR-B',  apps:6, wins:4 },
  { pair:'Jayachandran J / KRISHNASAAMY.M',                     team:'SNS-D',  apps:5, wins:3 },
  { pair:'RINESH AARYA / Lakshan N',                             team:'ANU-B',  apps:5, wins:2 },
  { pair:'SELVAKUMAR / RANSLEY ROGER',                           team:'ANNUR',  apps:4, wins:1 },
  { pair:'Raul Gujjan R R / MITHRAN',                            team:'ACTC-B', apps:3, wins:3 },
  { pair:'YOGESH KUMAR / LAKSHMI VISHNU',                        team:'ANNUR',  apps:3, wins:3 },
  { pair:'Srinivasan C. V / Vishwaroop',                         team:'RSP',    apps:3, wins:0 },
  { pair:'Adhitya R / Mehul Dinesh',                             team:'PSG',    apps:3, wins:3 },
  { pair:'Abhishek K A / Viswa D K',                             team:'PSG',    apps:2, wins:2 }
];

const DIV_H_PLAYERS = [
  // SNS - D
  { name:'SATHISH KUMAR',                    team:'SNS-D',  gender:null, age:null, role:'Player', gamesPlayed:8, wins:8, photo:'photos/div-h/sns-d/sathish-kumar.jpg' },
  { name:'Sathyaseelan',                     team:'SNS-D',  gender:null, age:null, role:'Player', gamesPlayed:8, wins:8, photo:'photos/div-h/sns-d/sathyaseelan.jpg' },
  { name:'KRISHNASAAMY.M',                   team:'SNS-D',  gender:null, age:null, role:'Player', gamesPlayed:8, wins:4, photo:'photos/div-h/sns-d/krishnasaamy-m.jpg' },
  { name:'Jayachandran J',                   team:'SNS-D',  gender:null, age:null, role:'Player', gamesPlayed:7, wins:5, photo:'photos/div-h/sns-d/jayachandran-j.jpg' },
  { name:'Penmetsha Sita Ram Rohit Verma',   team:'SNS-D',  gender:null, age:null, role:'Player', gamesPlayed:7, wins:6, photo:'photos/div-h/sns-d/penmetsha-sita-ram-rohit-verma.jpg' },
  { name:'Senthilnathan CR',                 team:'SNS-D',  gender:null, age:null, role:'Player', gamesPlayed:6, wins:6, photo:'photos/div-h/sns-d/senthilnathan-cr.jpg' },
  { name:'Prabhakaran C',                    team:'SNS-D',  gender:null, age:null, role:'Player', gamesPlayed:2, wins:2, photo:'photos/div-h/sns-d/prabhakaran-c.jpg' },
  { name:'Pushparaj',                        team:'SNS-D',  gender:null, age:null, role:'Player', gamesPlayed:2, wins:1, photo:'photos/div-h/sns-d/pushparaj.jpg' },
  // PSG Tech
  { name:'Adhitya R',                        team:'PSG',    gender:null, age:null, role:'Player', gamesPlayed:7, wins:7, photo:'photos/div-h/psg/adhitya-r.jpg' },
  { name:'Abhishek K A',                     team:'PSG',    gender:null, age:null, role:'Player', gamesPlayed:7, wins:6, photo:'photos/div-h/psg/abhishek-k-a.jpg' },
  { name:'Mehul Dinesh',                     team:'PSG',    gender:null, age:null, role:'Player', gamesPlayed:5, wins:5, photo:'photos/div-h/psg/mehul-dinesh.jpg' },
  { name:'Sukesh Netaji M A',               team:'PSG',    gender:null, age:null, role:'Player', gamesPlayed:5, wins:5, photo:'photos/div-h/psg/sukesh-netaji-m-a.jpg' },
  { name:'Aatish Srinivasan',               team:'PSG',    gender:null, age:null, role:'Player', gamesPlayed:4, wins:4, photo:'photos/div-h/psg/aatish-srinivasan.jpg' },
  { name:'Viswa D K',                        team:'PSG',    gender:null, age:null, role:'Player', gamesPlayed:4, wins:3, photo:'photos/div-h/psg/viswa-d-k.jpg' },
  { name:'BHUVANESH D',                      team:'PSG',    gender:null, age:null, role:'Player', gamesPlayed:3, wins:2, photo:'photos/div-h/psg/bhuvanesh-d.jpg' },
  { name:'Karin Senapati R',                team:'PSG',    gender:null, age:null, role:'Player', gamesPlayed:2, wins:2, photo:'photos/div-h/psg/karin-senapati-r.jpg' },
  { name:'NAVANEETH M',                      team:'PSG',    gender:null, age:null, role:'Player', gamesPlayed:1, wins:0, photo:'photos/div-h/psg/navaneeth-m.jpg' },
  { name:'SAKTHIVEL M',                      team:'PSG',    gender:null, age:null, role:'Player', gamesPlayed:1, wins:1, photo:'photos/div-h/psg/sakthivel-m.jpg' },
  { name:'Richard Samuel D',                team:'PSG',    gender:null, age:null, role:'Player', gamesPlayed:1, wins:1, photo:'photos/div-h/psg/richard-samuel-d.jpg' },
  // ANUSHAM - B
  { name:'Vignesh K',                        team:'ANU-B',  gender:null, age:null, role:'Player', gamesPlayed:8, wins:7, photo:'photos/div-h/anu-b/vignesh-k.png' },
  { name:'Ganesh Pattiappan',                team:'ANU-B',  gender:null, age:null, role:'Player', gamesPlayed:8, wins:7, photo:'photos/div-h/anu-b/ganesh-pattiappan.png' },
  { name:'Charan Ganesh',                    team:'ANU-B',  gender:null, age:null, role:'Player', gamesPlayed:8, wins:6, photo:'photos/div-h/anu-b/charan-ganesh.png' },
  { name:'RINESH AARYA',                     team:'ANU-B',  gender:null, age:null, role:'Player', gamesPlayed:8, wins:3, photo:'photos/div-h/anu-b/rinesh-aarya.jpg' },
  { name:'Karthikeyan UKPM',                team:'ANU-B',  gender:null, age:null, role:'Player', gamesPlayed:6, wins:5, photo:'photos/div-h/anu-b/karthikeyan-ukpm.jpg' },
  { name:'Lakshan N',                        team:'ANU-B',  gender:null, age:null, role:'Player', gamesPlayed:6, wins:2, photo:'photos/div-h/anu-b/lakshan-n.jpg' },
  { name:'Nithinraj PG',                     team:'ANU-B',  gender:null, age:null, role:'Player', gamesPlayed:2, wins:2, photo:'photos/div-h/anu-b/nithinraj-pg.jpg' },
  { name:'Dharani Deepan M',                team:'ANU-B',  gender:null, age:null, role:'Player', gamesPlayed:1, wins:0, photo:'photos/div-h/anu-b/dharani-deepan-m.jpg' },
  { name:'Dakshin Eshwar P',                team:'ANU-B',  gender:null, age:null, role:'Player', gamesPlayed:1, wins:0, photo:'photos/div-h/anu-b/dakshin-eshwar-p.jpg' },
  // RS PURAM - A
  { name:'Ravi.N',                           team:'RSP',    gender:null, age:null, role:'Player', gamesPlayed:7, wins:5, photo:'photos/div-h/rsp/ravi-n.png' },
  { name:'Rajendran',                        team:'RSP',    gender:null, age:null, role:'Player', gamesPlayed:7, wins:5, photo:'photos/div-h/rsp/rajendran.jpg' },
  { name:'Srinivasan C. V',                 team:'RSP',    gender:null, age:null, role:'Player', gamesPlayed:6, wins:2, photo:'photos/div-h/rsp/srinivasan-c-v.jpg' },
  { name:'Arunkumar G',                      team:'RSP',    gender:null, age:null, role:'Player', gamesPlayed:5, wins:4, photo:'photos/div-h/rsp/arunkumar-g.jpg' },
  { name:'Venugopal C.V',                   team:'RSP',    gender:null, age:null, role:'Player', gamesPlayed:5, wins:2, photo:'photos/div-h/rsp/venugopal-c-v.jpg' },
  { name:'Prakash. R',                       team:'RSP',    gender:null, age:null, role:'Player', gamesPlayed:5, wins:4, photo:'photos/div-h/rsp/prakash-r.jpg' },
  { name:'Vishwaroop',                       team:'RSP',    gender:null, age:null, role:'Player', gamesPlayed:4, wins:1, photo:'photos/div-h/rsp/vishwaroop.jpg' },
  { name:'Ramachandran Dr',                 team:'RSP',    gender:null, age:null, role:'Player', gamesPlayed:3, wins:1, photo:'photos/div-h/rsp/ramachandran-dr.jpg' },
  // G.P.T.C - C
  { name:'SAI SIMIRITHI',                   team:'GPTC-C', gender:null, age:null, role:'Player', gamesPlayed:6, wins:4, photo:'photos/div-h/gptc-c/sai-simirithi.jpg' },
  { name:'GOKUL THANGAM',                   team:'GPTC-C', gender:null, age:null, role:'Player', gamesPlayed:5, wins:3, photo:'photos/div-h/gptc-c/gokul-thangam.jpg' },
  { name:'VIKRAM DG',                        team:'GPTC-C', gender:null, age:null, role:'Player', gamesPlayed:5, wins:3, photo:'photos/div-h/gptc-c/vikram-dg.jpg' },
  { name:'SAMPATHKUMAR AJAY HEMANTH',       team:'GPTC-C', gender:null, age:null, role:'Player', gamesPlayed:4, wins:2, photo:'photos/div-h/gptc-c/sampathkumar-ajay-hemanth.jpg' },
  { name:'YOKESH R',                         team:'GPTC-C', gender:null, age:null, role:'Player', gamesPlayed:3, wins:2, photo:'photos/div-h/gptc-c/yokesh-r.jpg' },
  { name:'AARAV M VELAYUTHAM',              team:'GPTC-C', gender:null, age:null, role:'Player', gamesPlayed:4, wins:2, photo:'photos/div-h/gptc-c/aarav-m-velayutham.jpg' },
  { name:'S P Suresh Kumar',                team:'GPTC-C', gender:null, age:null, role:'Player', gamesPlayed:3, wins:1, photo:'photos/div-h/gptc-c/s-p-suresh-kumar.jpg' },
  { name:'Prabhu Anand R',                  team:'GPTC-C', gender:null, age:null, role:'Player', gamesPlayed:3, wins:1, photo:'photos/div-h/gptc-c/prabhu-anand-r.jpg' },
  { name:'RANGARAJ LAKSHMANAN',             team:'GPTC-C', gender:null, age:null, role:'Player', gamesPlayed:3, wins:2, photo:'photos/div-h/gptc-c/rangaraj-lakshmanan.jpg' },
  { name:'AKILADITHYA',                     team:'GPTC-C', gender:null, age:null, role:'Player', gamesPlayed:2, wins:2, photo:'photos/div-h/gptc-c/akiladithya.jpg' },
  { name:'RAJENDRAN N',                      team:'GPTC-C', gender:null, age:null, role:'Player', gamesPlayed:2, wins:0, photo:'photos/div-h/gptc-c/rajendran-n.jpg' },
  { name:'JERRY',                            team:'GPTC-C', gender:null, age:null, role:'Player', gamesPlayed:2, wins:0, photo:'photos/div-h/gptc-c/jerry.jpg' },
  // ANNUR - C(V2 SPORTS)
  { name:'LAKSHMI VISHNU',                  team:'ANNUR',  gender:null, age:null, role:'Player', gamesPlayed:7, wins:5, photo:'photos/div-h/annur/lakshmi-vishnu.jpg' },
  { name:'YOGESH KUMAR',                    team:'ANNUR',  gender:null, age:null, role:'Player', gamesPlayed:6, wins:4, photo:'photos/div-h/annur/yogesh-kumar.jpg' },
  { name:'RANSLEY ROGER',                   team:'ANNUR',  gender:null, age:null, role:'Player', gamesPlayed:6, wins:3, photo:'photos/div-h/annur/ransley-roger.jpg' },
  { name:'SELVAKUMAR',                       team:'ANNUR',  gender:null, age:null, role:'Player', gamesPlayed:7, wins:3, photo:'photos/div-h/annur/selvakumar.jpg' },
  { name:'Kiruthick',                        team:'ANNUR',  gender:null, age:null, role:'Player', gamesPlayed:5, wins:2, photo:'photos/div-h/annur/kiruthick.jpg' },
  { name:'Gnaalan',                          team:'ANNUR',  gender:null, age:null, role:'Player', gamesPlayed:5, wins:2, photo:'photos/div-h/annur/gnaalan.jpg' },
  { name:'Akarshana',                        team:'ANNUR',  gender:null, age:null, role:'Player', gamesPlayed:3, wins:1, photo:'photos/div-h/annur/akarshana.jpg' },
  { name:'Samyuktha',                        team:'ANNUR',  gender:null, age:null, role:'Player', gamesPlayed:3, wins:2, photo:'photos/div-h/annur/samyuktha.jpg' },
  // ACTC - B
  { name:'Raul Gujjan R R',                 team:'ACTC-B', gender:null, age:null, role:'Player', gamesPlayed:7, wins:5, photo:'photos/div-h/actc-b/raul-gujjan-r-r.jpg' },
  { name:'VIJAYAKUMAR G',                   team:'ACTC-B', gender:null, age:null, role:'Player', gamesPlayed:6, wins:2, photo:'photos/div-h/actc-b/vijayakumar-g.jpg' },
  { name:'KARTHICK SHANKAR',                team:'ACTC-B', gender:null, age:null, role:'Player', gamesPlayed:6, wins:3, photo:'photos/div-h/actc-b/karthick-shankar.jpg' },
  { name:'ARAVINDH P',                      team:'ACTC-B', gender:null, age:null, role:'Player', gamesPlayed:5, wins:2, photo:'photos/div-h/actc-b/aravindh-p.jpg' },
  { name:'SRIDHAR M',                        team:'ACTC-B', gender:null, age:null, role:'Player', gamesPlayed:5, wins:4, photo:'photos/div-h/actc-b/sridhar-m.jpg' },
  { name:'GOWRI SHANKAR',                   team:'ACTC-B', gender:null, age:null, role:'Player', gamesPlayed:5, wins:0, photo:'photos/div-h/actc-b/gowri-shankar.jpg' },
  { name:'MITHRAN',                          team:'ACTC-B', gender:null, age:null, role:'Player', gamesPlayed:6, wins:4, photo:'photos/div-h/actc-b/mithran.jpg' },
  { name:'JEYAKUMAR R',                     team:'ACTC-B', gender:null, age:null, role:'Player', gamesPlayed:2, wins:0, photo:'photos/div-h/actc-b/jeyakumar-r.jpg' },
  // TIRUPUR - B
  { name:'S.CHANDRU',                        team:'TIR-B',  gender:null, age:null, role:'Player', gamesPlayed:7, wins:4, photo:'photos/div-h/tir-b/s-chandru.jpg' },
  { name:'R.KARTHIKAA',                      team:'TIR-B',  gender:null, age:null, role:'Player', gamesPlayed:7, wins:4, photo:'photos/div-h/tir-b/r-karthikaa.jpg' },
  { name:'AYYASSUWAMY',                      team:'TIR-B',  gender:null, age:null, role:'Player', gamesPlayed:7, wins:2, photo:'photos/div-h/tir-b/ayyassuwamy.jpg' },
  { name:'K.VIVEKANANDA',                   team:'TIR-B',  gender:null, age:null, role:'Player', gamesPlayed:5, wins:1, photo:'photos/div-h/tir-b/k-vivekananda.jpg' },
  { name:'S.SUKUMARAN',                      team:'TIR-B',  gender:null, age:null, role:'Player', gamesPlayed:4, wins:1, photo:'photos/div-h/tir-b/s-sukumaran.jpg' },
  { name:'SIVASUBRAMANIAM',                  team:'TIR-B',  gender:null, age:null, role:'Player', gamesPlayed:3, wins:0, photo:'photos/div-h/tir-b/sivasubramaniam.jpg' },
  { name:'CHANDRASEKARAN C',                team:'TIR-B',  gender:null, age:null, role:'Player', gamesPlayed:3, wins:1, photo:'photos/div-h/tir-b/chandrasekaran-c.jpg' },
  { name:'THIYAGEARAJAN T',                 team:'TIR-B',  gender:null, age:null, role:'Player', gamesPlayed:2, wins:2, photo:'photos/div-h/tir-b/thiyagearajan-t.jpg' },
  { name:'LAKSHAMANAN S',                   team:'TIR-B',  gender:null, age:null, role:'Player', gamesPlayed:1, wins:1, photo:'photos/div-h/tir-b/lakshamanan-s.jpg' },
  { name:'HEMAVARSHINI S J',                team:'TIR-B',  gender:null, age:null, role:'Player', gamesPlayed:1, wins:0, photo:'photos/div-h/tir-b/hemavarshini-s-j.jpg' },
  // KGR - D
  { name:'GOPALAKRISHNAN NALLAIYAN',        team:'KGR-D',  gender:null, age:null, role:'Player', gamesPlayed:8, wins:4, photo:'photos/div-h/kgr-d/gopalakrishnan-nallaiyan.jpg' },
  { name:'KAVINKUMAR',                       team:'KGR-D',  gender:null, age:null, role:'Player', gamesPlayed:7, wins:3, photo:'photos/div-h/kgr-d/kavinkumar.jpg' },
  { name:'K A KOWSIYAN',                    team:'KGR-D',  gender:null, age:null, role:'Player', gamesPlayed:7, wins:2, photo:'photos/div-h/kgr-d/k-a-kowsiyan.jpg' },
  { name:'SARAVANA PRASAD',                 team:'KGR-D',  gender:null, age:null, role:'Player', gamesPlayed:7, wins:0, photo:'photos/div-h/kgr-d/saravana-prasad.jpg' },
  { name:'SHAHUL HAMEED',                   team:'KGR-D',  gender:null, age:null, role:'Player', gamesPlayed:5, wins:1, photo:'photos/div-h/kgr-d/shahul-hameed.jpg' },
  { name:'SATHISHKUMAR SHANKAR',            team:'KGR-D',  gender:null, age:null, role:'Player', gamesPlayed:4, wins:0, photo:'photos/div-h/kgr-d/sathishkumar-shankar.jpg' },
  { name:'SATHISH KUMAR M',                 team:'KGR-D',  gender:null, age:null, role:'Player', gamesPlayed:4, wins:0, photo:'photos/div-h/kgr-d/sathish-kumar-m.jpg' },
  { name:'JEEVAN DIVAKAR K',               team:'KGR-D',  gender:null, age:null, role:'Player', gamesPlayed:4, wins:1, photo:'photos/div-h/kgr-d/jeevan-divakar-k.jpg' },
  { name:'KUMAR D',                          team:'KGR-D',  gender:null, age:null, role:'Player', gamesPlayed:2, wins:1, photo:'photos/div-h/kgr-d/kumar-d.jpg' },
  // FALCON
  { name:'BALA',                             team:'FALCON', gender:null, age:null, role:'Player', gamesPlayed:7, wins:1, photo:'photos/div-h/falcon/bala.jpg' },
  { name:'SRIRAM',                           team:'FALCON', gender:null, age:null, role:'Player', gamesPlayed:7, wins:0, photo:'photos/div-h/falcon/sriram.jpg' },
  { name:'EZEKIEL I',                       team:'FALCON', gender:null, age:null, role:'Player', gamesPlayed:5, wins:2, photo:'photos/div-h/falcon/ezekiel-i.jpg' },
  { name:'R S ROSHAN',                      team:'FALCON', gender:null, age:null, role:'Player', gamesPlayed:5, wins:3, photo:'photos/div-h/falcon/r-s-roshan.jpg' },
  { name:'VIJAYARAMAMOORTHY',               team:'FALCON', gender:null, age:null, role:'Player', gamesPlayed:5, wins:1, photo:'https://cdta.co.in/CDTA/ProfileImages/CTL/League/62be055cacd7ee3840c6c602af2264ef/b6ec3911d413cbddc560471016a46b0f/fad4ce94bf10e3ba64112c30519ece66.jpeg' },
  { name:'KRISHNARAJ M',                    team:'FALCON', gender:null, age:null, role:'Player', gamesPlayed:4, wins:1, photo:'photos/div-h/falcon/krishnaraj-m.jpg' },
  { name:'PRABHU',                           team:'FALCON', gender:null, age:null, role:'Player', gamesPlayed:4, wins:0, photo:'photos/div-h/falcon/prabhu.jpg' },
  { name:'ANINDITHA',                        team:'FALCON', gender:null, age:null, role:'Player', gamesPlayed:3, wins:2, photo:'photos/div-h/falcon/aninditha.jpg' },
  // CS ACADEMY - C
  { name:'YOGAN',                            team:'CSA',    gender:null, age:null, role:'Player', gamesPlayed:7, wins:1, photo:'photos/div-h/csa/yogan.jpg' },
  { name:'RITHVIK',                          team:'CSA',    gender:null, age:null, role:'Player', gamesPlayed:7, wins:0, photo:'photos/div-h/csa/rithvik.jpg' },
  { name:'ARYA',                             team:'CSA',    gender:null, age:null, role:'Player', gamesPlayed:5, wins:2, photo:'photos/div-h/csa/arya.jpg' },
  { name:'NARAIN',                           team:'CSA',    gender:null, age:null, role:'Player', gamesPlayed:5, wins:0, photo:'photos/div-h/csa/narain.jpg' },
  { name:'SANKRIT',                          team:'CSA',    gender:null, age:null, role:'Player', gamesPlayed:4, wins:1, photo:'photos/div-h/csa/sankrit.jpg' },
  { name:'YUKTI',                            team:'CSA',    gender:null, age:null, role:'Player', gamesPlayed:4, wins:1, photo:'photos/div-h/csa/yukti.jpg' },
  { name:'MAHIZHINI',                        team:'CSA',    gender:null, age:null, role:'Player', gamesPlayed:4, wins:0, photo:'photos/div-h/csa/mahizhini.jpg' },
  { name:'VIGNESH',                          team:'CSA',    gender:null, age:null, role:'Player', gamesPlayed:2, wins:1, photo:'photos/div-h/csa/vignesh.jpg' },
  { name:'DIYA',                             team:'CSA',    gender:null, age:null, role:'Player', gamesPlayed:2, wins:0, photo:'photos/div-h/csa/diya.jpg' },
  { name:'KISHORE',                          team:'CSA',    gender:null, age:null, role:'Player', gamesPlayed:2, wins:0, photo:'photos/div-h/csa/kishore.jpg' }
];

const DIV_H_PARTNERS = {
  // SNS - D
  'SATHISH KUMAR':                   [['Sathyaseelan',8]],
  'Sathyaseelan':                    [['SATHISH KUMAR',8]],
  'Jayachandran J':                  [['KRISHNASAAMY.M',5],['Prabhakaran C',2]],
  'KRISHNASAAMY.M':                  [['Jayachandran J',5],['Pushparaj',2],['Penmetsha Sita Ram Rohit Verma',1]],
  'Penmetsha Sita Ram Rohit Verma':  [['Senthilnathan CR',6],['KRISHNASAAMY.M',1]],
  'Senthilnathan CR':               [['Penmetsha Sita Ram Rohit Verma',6]],
  'Prabhakaran C':                   [['Jayachandran J',2]],
  'Pushparaj':                       [['KRISHNASAAMY.M',2]],
  // PSG Tech
  'Adhitya R':                       [['Mehul Dinesh',3],['Aatish Srinivasan',2],['Karin Senapati R',1],['Richard Samuel D',1]],
  'Abhishek K A':                    [['Viswa D K',2],['SAKTHIVEL M',1],['BHUVANESH D',1],['Sukesh Netaji M A',1],['Karin Senapati R',1],['NAVANEETH M',1]],
  'Mehul Dinesh':                    [['Adhitya R',3],['Sukesh Netaji M A',2]],
  'Sukesh Netaji M A':              [['Mehul Dinesh',2],['Aatish Srinivasan',2],['Abhishek K A',1]],
  'Aatish Srinivasan':              [['Adhitya R',2],['Sukesh Netaji M A',2]],
  'Viswa D K':                       [['Abhishek K A',2],['BHUVANESH D',1],['NAVANEETH M',1]],
  'BHUVANESH D':                     [['Viswa D K',1],['Abhishek K A',1],['NAVANEETH M',1]],
  'Karin Senapati R':               [['Adhitya R',1],['Abhishek K A',1]],
  'NAVANEETH M':                     [['Viswa D K',1]],
  'SAKTHIVEL M':                     [['Abhishek K A',1]],
  'Richard Samuel D':               [['Adhitya R',1]],
  // ANUSHAM - B
  'Vignesh K':                       [['Karthikeyan UKPM',6],['Nithinraj PG',2]],
  'Karthikeyan UKPM':               [['Vignesh K',6]],
  'Ganesh Pattiappan':               [['Charan Ganesh',6],['RINESH AARYA',1],['Lakshan N',1]],
  'Charan Ganesh':                   [['Ganesh Pattiappan',6],['Lakshan N',2]],
  'RINESH AARYA':                    [['Lakshan N',5],['Dharani Deepan M',1],['Dakshin Eshwar P',1],['Ganesh Pattiappan',1]],
  'Lakshan N':                       [['RINESH AARYA',5],['Charan Ganesh',1]],
  'Nithinraj PG':                    [['Vignesh K',2]],
  'Dharani Deepan M':               [['RINESH AARYA',1]],
  'Dakshin Eshwar P':               [['RINESH AARYA',1]],
  // RS PURAM - A
  'Ravi.N':                          [['Rajendran',7]],
  'Rajendran':                       [['Ravi.N',7]],
  'Srinivasan C. V':                [['Vishwaroop',3],['Arunkumar G',2],['Venugopal C.V',1]],
  'Arunkumar G':                     [['Srinivasan C. V',1],['Prakash. R',2],['Ramachandran Dr',2]],
  'Venugopal C.V':                  [['Prakash. R',2],['Ramachandran Dr',1],['Srinivasan C. V',1],['Arunkumar G',1]],
  'Prakash. R':                      [['Arunkumar G',2],['Venugopal C.V',2]],
  'Vishwaroop':                      [['Srinivasan C. V',3]],
  'Ramachandran Dr':                [['Arunkumar G',2],['Venugopal C.V',1]],
  // G.P.T.C - C
  'SAI SIMIRITHI':                  [['AKILADITHYA',2],['VIKRAM DG',2],['JERRY',1],['GOKUL THANGAM',1]],
  'GOKUL THANGAM':                  [['SAMPATHKUMAR AJAY HEMANTH',3],['JERRY',1],['RANGARAJ LAKSHMANAN',1]],
  'VIKRAM DG':                       [['SAI SIMIRITHI',2],['Prabhu Anand R',1],['RAJENDRAN N',1]],
  'SAMPATHKUMAR AJAY HEMANTH':      [['GOKUL THANGAM',3],['S P Suresh Kumar',1]],
  'YOKESH R':                        [['AARAV M VELAYUTHAM',3]],
  'AARAV M VELAYUTHAM':             [['YOKESH R',3]],
  'S P Suresh Kumar':               [['RANGARAJ LAKSHMANAN',1],['SAMPATHKUMAR AJAY HEMANTH',1],['Prabhu Anand R',1]],
  'Prabhu Anand R':                 [['VIKRAM DG',1],['RANGARAJ LAKSHMANAN',1],['S P Suresh Kumar',1]],
  'RANGARAJ LAKSHMANAN':            [['S P Suresh Kumar',1],['GOKUL THANGAM',1]],
  'AKILADITHYA':                    [['SAI SIMIRITHI',2]],
  'RAJENDRAN N':                     [['AARAV M VELAYUTHAM',1],['VIKRAM DG',1]],
  'JERRY':                           [['GOKUL THANGAM',1],['SAI SIMIRITHI',1]],
  // ANNUR - C(V2 SPORTS)
  'LAKSHMI VISHNU':                 [['Kiruthick',3],['YOGESH KUMAR',3],['RANSLEY ROGER',1]],
  'YOGESH KUMAR':                   [['LAKSHMI VISHNU',3],['RANSLEY ROGER',1],['Akarshana',1],['Gnaalan',1]],
  'RANSLEY ROGER':                  [['SELVAKUMAR',4],['YOGESH KUMAR',1],['LAKSHMI VISHNU',1]],
  'SELVAKUMAR':                      [['RANSLEY ROGER',4],['Akarshana',2]],
  'Kiruthick':                       [['LAKSHMI VISHNU',3],['Akarshana',1],['Gnaalan',1]],
  'Gnaalan':                         [['Samyuktha',3],['YOGESH KUMAR',1],['Kiruthick',1]],
  'Akarshana':                       [['SELVAKUMAR',2],['YOGESH KUMAR',1]],
  'Samyuktha':                       [['Gnaalan',3]],
  // ACTC - B
  'Raul Gujjan R R':                [['MITHRAN',3],['SRIDHAR M',1],['KARTHICK SHANKAR',1],['VIJAYAKUMAR G',1],['ARAVINDH P',1]],
  'VIJAYAKUMAR G':                  [['SRIDHAR M',2],['GOWRI SHANKAR',2],['ARAVINDH P',1],['Raul Gujjan R R',1]],
  'KARTHICK SHANKAR':               [['ARAVINDH P',3],['SRIDHAR M',1],['Raul Gujjan R R',1]],
  'ARAVINDH P':                     [['KARTHICK SHANKAR',3],['VIJAYAKUMAR G',1],['Raul Gujjan R R',1]],
  'SRIDHAR M':                       [['VIJAYAKUMAR G',2],['KARTHICK SHANKAR',1],['Raul Gujjan R R',1],['GOWRI SHANKAR',1]],
  'GOWRI SHANKAR':                  [['JEYAKUMAR R',2],['VIJAYAKUMAR G',2],['SRIDHAR M',1]],
  'MITHRAN':                         [['Raul Gujjan R R',3],['KARTHICK SHANKAR',1]],
  'JEYAKUMAR R':                    [['GOWRI SHANKAR',2]],
  // TIRUPUR - B
  'S.CHANDRU':                       [['R.KARTHIKAA',6],['HEMAVARSHINI S J',1]],
  'R.KARTHIKAA':                     [['S.CHANDRU',6],['AYYASSUWAMY',1]],
  'AYYASSUWAMY':                     [['K.VIVEKANANDA',3],['THIYAGEARAJAN T',2],['R.KARTHIKAA',1]],
  'K.VIVEKANANDA':                  [['AYYASSUWAMY',3],['S.SUKUMARAN',2]],
  'S.SUKUMARAN':                     [['SIVASUBRAMANIAM',2],['K.VIVEKANANDA',1],['CHANDRASEKARAN C',1]],
  'SIVASUBRAMANIAM':                 [['S.SUKUMARAN',2],['CHANDRASEKARAN C',1]],
  'CHANDRASEKARAN C':               [['S.SUKUMARAN',1],['SIVASUBRAMANIAM',1],['AYYASSUWAMY',1]],
  'THIYAGEARAJAN T':                [['LAKSHAMANAN S',1],['AYYASSUWAMY',1]],
  'LAKSHAMANAN S':                  [['THIYAGEARAJAN T',1]],
  'HEMAVARSHINI S J':               [['S.CHANDRU',1]],
  // KGR - D
  'GOPALAKRISHNAN NALLAIYAN':       [['KAVINKUMAR',5],['SHAHUL HAMEED',2],['JEEVAN DIVAKAR K',1]],
  'KAVINKUMAR':                      [['GOPALAKRISHNAN NALLAIYAN',5],['SATHISH KUMAR M',2]],
  'K A KOWSIYAN':                   [['JEEVAN DIVAKAR K',2],['SATHISHKUMAR SHANKAR',1],['KUMAR D',1],['SHAHUL HAMEED',1],['SARAVANA PRASAD',1]],
  'SARAVANA PRASAD':                [['SATHISHKUMAR SHANKAR',2],['SHAHUL HAMEED',2],['SATHISH KUMAR M',1],['K A KOWSIYAN',1]],
  'SHAHUL HAMEED':                  [['GOPALAKRISHNAN NALLAIYAN',2],['SARAVANA PRASAD',1],['K A KOWSIYAN',1],['SATHISHKUMAR SHANKAR',1]],
  'SATHISHKUMAR SHANKAR':           [['SARAVANA PRASAD',2],['K A KOWSIYAN',1],['SHAHUL HAMEED',1]],
  'SATHISH KUMAR M':                [['KAVINKUMAR',2],['SARAVANA PRASAD',1],['KUMAR D',1]],
  'JEEVAN DIVAKAR K':              [['K A KOWSIYAN',2],['GOPALAKRISHNAN NALLAIYAN',1],['SATHISH KUMAR M',1]],
  'KUMAR D':                         [['K A KOWSIYAN',1],['SATHISH KUMAR M',1]],
  // FALCON
  'BALA':                            [['VIJAYARAMAMOORTHY',3],['R S ROSHAN',1],['SRIRAM',2],['KRISHNARAJ M',1]],
  'SRIRAM':                          [['PRABHU',2],['KRISHNARAJ M',1],['BALA',1],['EZEKIEL I',1],['VIJAYARAMAMOORTHY',1]],
  'EZEKIEL I':                      [['R S ROSHAN',3],['KRISHNARAJ M',1],['SRIRAM',1]],
  'R S ROSHAN':                     [['EZEKIEL I',3],['BALA',1],['ANINDITHA',1]],
  'VIJAYARAMAMOORTHY':              [['BALA',3],['SRIRAM',1],['KRISHNARAJ M',1]],
  'KRISHNARAJ M':                   [['ANINDITHA',1],['SRIRAM',1],['EZEKIEL I',1],['BALA',1]],
  'PRABHU':                          [['SRIRAM',2],['ANINDITHA',1],['VIJAYARAMAMOORTHY',1]],
  'ANINDITHA':                       [['KRISHNARAJ M',1],['PRABHU',1],['R S ROSHAN',1]],
  // CS ACADEMY - C
  'YOGAN':                           [['VIGNESH',1],['SANKRIT',1],['MAHIZHINI',1],['RITHVIK',1],['NARAIN',1],['ARYA',1]],
  'RITHVIK':                         [['NARAIN',2],['MAHIZHINI',1],['YUKTI',1],['ARYA',1],['YOGAN',1]],
  'ARYA':                            [['YUKTI',2],['SANKRIT',2],['KISHORE',1]],
  'NARAIN':                          [['RITHVIK',2],['KISHORE',1],['YOGAN',1],['ARYA',1]],
  'SANKRIT':                         [['YOGAN',1],['ARYA',2],['RITHVIK',1]],
  'YUKTI':                           [['ARYA',2],['RITHVIK',1],['MAHIZHINI',1]],
  'MAHIZHINI':                       [['DIYA',1],['RITHVIK',1],['YOGAN',1],['YUKTI',1]],
  'VIGNESH':                         [['YOGAN',1],['SANKRIT',1]],
  'DIYA':                            [['MAHIZHINI',1],['YOGAN',1]],
  'KISHORE':                         [['NARAIN',1],['ARYA',1]]
};

const DIV_H_SCHEDULE = [
  { week:1, date:'24-25 Jan 2026', done:true, matches:[
    { home:'RS PURAM - A', score:'1-2', away:'ANUSHAM - B', venue:'RS Puram Club',
      courts:[
        { ct:1, home:'Prakash. R / Venugopal C.V', away:'Vignesh K / Karthikeyan UKPM', sets:'0-6, 1-6', win:'away' },
        { ct:2, home:'Srinivasan C. V / Vishwaroop', away:'Charan Ganesh / Ganesh Pattiappan', sets:'1-6, 3-6', win:'away' },
        { ct:3, home:'Ravi.N / Rajendran', away:'RINESH AARYA / Lakshan N', sets:'6-1, 6-1', win:'home' }
      ]},
    { home:'ANNUR - C(V2 SPORTS)', score:'2-1', away:'TIRUPUR - B', venue:'Annur Club',
      courts:[
        { ct:1, home:'Akarshana / SELVAKUMAR', away:'S.CHANDRU / R.KARTHIKAA', sets:'1-6, 4-6', win:'away' },
        { ct:2, home:'LAKSHMI VISHNU / Kiruthick', away:'AYYASSUWAMY / CHANDRASEKARAN C', sets:'6-4, 6-4', win:'home' },
        { ct:3, home:'Gnaalan / Samyuktha', away:'K.VIVEKANANDA / S.SUKUMARAN', sets:'6-5, 6-1', win:'home' }
      ]},
    { home:'KGR - D', score:'1-2', away:'FALCON', venue:'KGR Academy',
      courts:[
        { ct:1, home:'GOPALAKRISHNAN NALLAIYAN / SHAHUL HAMEED', away:'PRABHU / SRIRAM', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'KAVINKUMAR / SATHISH KUMAR M', away:'KRISHNARAJ M / ANINDITHA', sets:'0-6, 4-6', win:'away' },
        { ct:3, home:'JEEVAN DIVAKAR K / K A KOWSIYAN', away:'VIJAYARAMAMOORTHY / BALA', sets:'4-6, 6-7', win:'away' }
      ]},
    { home:'G.P.T.C - C', score:'3-0', away:'CS ACADEMY - C', venue:'GPTC',
      courts:[
        { ct:1, home:'YOKESH R / AARAV M VELAYUTHAM', away:'DIYA / MAHIZHINI', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'AKILADITHYA / SAI SIMIRITHI', away:'SANKRIT / YOGAN', sets:'6-3, 6-1', win:'home' },
        { ct:3, home:'S P Suresh Kumar / RANGARAJ LAKSHMANAN', away:'NARAIN / RITHVIK', sets:'6-0, 6-1', win:'home' }
      ]},
    { home:'PSG Tech', score:'1-2', away:'SNS - D', venue:'PSG Tech Tennis Club',
      courts:[
        { ct:1, home:'NAVANEETH M / Viswa D K', away:'Prabhakaran C / Jayachandran J', sets:'6-2, 5-7, 8-10', win:'away' },
        { ct:2, home:'Abhishek K A / BHUVANESH D', away:'Sathyaseelan / SATHISH KUMAR', sets:'3-6, 4-6', win:'away' },
        { ct:3, home:'Adhitya R / Mehul Dinesh', away:'KRISHNASAAMY.M / Penmetsha Sita Ram Rohit Verma', sets:'6-2, 6-2', win:'home' }
      ]}
  ]},
  { week:2, date:'31 Jan - 01 Feb 2026', done:true, matches:[
    { home:'PSG Tech', score:'3-0', away:'ACTC - B', venue:'PSG Tech Tennis Club',
      courts:[
        { ct:1, home:'Abhishek K A / Sukesh Netaji M A', away:'MITHRAN / KARTHICK SHANKAR', sets:'6-3, 6-2', win:'home' },
        { ct:2, home:'BHUVANESH D / Viswa D K', away:'VIJAYAKUMAR G / Raul Gujjan R R', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'Adhitya R / Mehul Dinesh', away:'SRIDHAR M / GOWRI SHANKAR', sets:'6-1, 6-4', win:'home' }
      ]},
    { home:'ANUSHAM - B', score:'2-1', away:'G.P.T.C - C', venue:'Anusham Tennis Academy',
      courts:[
        { ct:1, home:'Karthikeyan UKPM / Vignesh K', away:'RAJENDRAN N / AARAV M VELAYUTHAM', sets:'6-3, 6-0', win:'home' },
        { ct:2, home:'Ganesh Pattiappan / Charan Ganesh', away:'JERRY / GOKUL THANGAM', sets:'6-0, 6-1', win:'home' },
        { ct:3, home:'RINESH AARYA / Dharani Deepan M', away:'VIKRAM DG / Prabhu Anand R', sets:'2-6, 7-6, 6-10', win:'away' }
      ]},
    { home:'FALCON', score:'0-3', away:'SNS - D', venue:'Falcon Tennis Academy',
      courts:[
        { ct:1, home:'EZEKIEL I / R S ROSHAN', away:'SATHISH KUMAR / Sathyaseelan', sets:'4-6, 4-6', win:'away' },
        { ct:2, home:'KRISHNARAJ M / SRIRAM', away:'Penmetsha Sita Ram Rohit Verma / Senthilnathan CR', sets:'5-7, 1-6', win:'away' },
        { ct:3, home:'BALA / VIJAYARAMAMOORTHY', away:'Jayachandran J / KRISHNASAAMY.M', sets:'2-6, 4-6', win:'away' }
      ]},
    { home:'RS PURAM - A', score:'3-0', away:'KGR - D', venue:'RS Puram Club',
      courts:[
        { ct:1, home:'Srinivasan C. V / Arunkumar G', away:'GOPALAKRISHNAN NALLAIYAN / JEEVAN DIVAKAR K', sets:'6-1, 6-0', win:'home' },
        { ct:2, home:'Venugopal C.V / Prakash. R', away:'SATHISH KUMAR M / SARAVANA PRASAD', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Ravi.N / Rajendran', away:'K A KOWSIYAN / SATHISHKUMAR SHANKAR', sets:'6-0, 6-1', win:'home' }
      ]},
    { home:'CS ACADEMY - C', score:'2-1', away:'TIRUPUR - B', venue:'CS Academy',
      courts:[
        { ct:1, home:'YOGAN / VIGNESH', away:'K.VIVEKANANDA / AYYASSUWAMY', sets:'6-4, 6-4', win:'home' },
        { ct:2, home:'MAHIZHINI / RITHVIK', away:'S.CHANDRU / R.KARTHIKAA', sets:'4-6, 1-6', win:'away' },
        { ct:3, home:'ARYA / YUKTI', away:'W/O (TIRUPUR - B)', sets:'W/O', win:'home', wo:true }
      ]}
  ]},
  { week:3, date:'07-08 Feb 2026', done:true, matches:[
    { home:'TIRUPUR - B', score:'2-1', away:'ANUSHAM - B', venue:'Tirupur Club',
      courts:[
        { ct:1, home:'S.CHANDRU / R.KARTHIKAA', away:'Karthikeyan UKPM / Vignesh K', sets:'6-4, 7-6', win:'home' },
        { ct:2, home:'LAKSHAMANAN S / THIYAGEARAJAN T', away:'RINESH AARYA / Dakshin Eshwar P', sets:'6-3, 6-3', win:'home' },
        { ct:3, home:'AYYASSUWAMY / K.VIVEKANANDA', away:'Ganesh Pattiappan / Charan Ganesh', sets:'5-7, 6-2, 1-10', win:'away' }
      ]},
    { home:'ACTC - B', score:'3-0', away:'FALCON', venue:'Arima Cyprus Tennis Club',
      courts:[
        { ct:1, home:'Raul Gujjan R R / MITHRAN', away:'BALA / R S ROSHAN', sets:'6-2, 3-6, 10-8', win:'home' },
        { ct:2, home:'ARAVINDH P / KARTHICK SHANKAR', away:'EZEKIEL I / SRIRAM', sets:'7-6, 3-6, 10-5', win:'home' },
        { ct:3, home:'VIJAYAKUMAR G / SRIDHAR M', away:'ANINDITHA / PRABHU', sets:'6-2, 7-5', win:'home' }
      ]},
    { home:'ANNUR - C(V2 SPORTS)', score:'3-0', away:'CS ACADEMY - C', venue:'Annur Club',
      courts:[
        { ct:1, home:'RANSLEY ROGER / YOGESH KUMAR', away:'NARAIN / RITHVIK', sets:'6-1, 6-2', win:'home' },
        { ct:2, home:'Kiruthick / LAKSHMI VISHNU', away:'DIYA / YOGAN', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Akarshana / SELVAKUMAR', away:'MAHIZHINI / YUKTI', sets:'6-4, 6-4', win:'home' }
      ]},
    { home:'SNS - D', score:'2-1', away:'RS PURAM - A', venue:'SNS Tennis Academy(Bullseye)',
      courts:[
        { ct:1, home:'SATHISH KUMAR / Sathyaseelan', away:'Ravi.N / Rajendran', sets:'7-5, 6-7, 10-5', win:'home' },
        { ct:2, home:'Senthilnathan CR / Penmetsha Sita Ram Rohit Verma', away:'Srinivasan C. V / Vishwaroop', sets:'4-6, 6-3, 10-4', win:'home' },
        { ct:3, home:'KRISHNASAAMY.M / Jayachandran J', away:'Arunkumar G / Prakash. R', sets:'2-6, 6-4, 4-10', win:'away' }
      ]},
    { home:'KGR - D', score:'2-1', away:'G.P.T.C - C', venue:'KGR Academy',
      courts:[
        { ct:1, home:'GOPALAKRISHNAN NALLAIYAN / KAVINKUMAR', away:'YOKESH R / AARAV M VELAYUTHAM', sets:'6-2, 7-5', win:'home' },
        { ct:2, home:'K A KOWSIYAN / KUMAR D', away:'Prabhu Anand R / S P Suresh Kumar', sets:'6-4, 6-1', win:'home' },
        { ct:3, home:'SARAVANA PRASAD / SATHISHKUMAR SHANKAR', away:'VIKRAM DG / SAI SIMIRITHI', sets:'3-6, 1-6', win:'away' }
      ]}
  ]},
  { week:4, date:'14-15 Feb 2026', done:true, matches:[
    { home:'CS ACADEMY - C', score:'1-2', away:'KGR - D', venue:'CS Academy',
      courts:[
        { ct:1, home:'ARYA / SANKRIT', away:'SARAVANA PRASAD / SHAHUL HAMEED', sets:'6-4, 6-0', win:'home' },
        { ct:2, home:'NARAIN / RITHVIK', away:'KAVINKUMAR / GOPALAKRISHNAN NALLAIYAN', sets:'4-6, 4-6', win:'away' },
        { ct:3, home:'YOGAN / MAHIZHINI', away:'K A KOWSIYAN / JEEVAN DIVAKAR K', sets:'0-6, 5-7', win:'away' }
      ]},
    { home:'FALCON', score:'0-3', away:'PSG Tech', venue:'Falcon Tennis Academy',
      courts:[
        { ct:1, home:'SRIRAM / PRABHU', away:'Abhishek K A / SAKTHIVEL M', sets:'2-6, 7-5, 4-10', win:'away' },
        { ct:2, home:'BALA / VIJAYARAMAMOORTHY', away:'Sukesh Netaji M A / Mehul Dinesh', sets:'1-6, 2-6', win:'away' },
        { ct:3, home:'EZEKIEL I / KRISHNARAJ M', away:'Adhitya R / Richard Samuel D', sets:'4-6, 5-7', win:'away' }
      ]},
    { home:'ACTC - B', score:'1-2', away:'G.P.T.C - C', venue:'Arima Cyprus Tennis Club',
      courts:[
        { ct:1, home:'ARAVINDH P / KARTHICK SHANKAR', away:'GOKUL THANGAM / SAMPATHKUMAR AJAY HEMANTH', sets:'4-6, 5-7', win:'away' },
        { ct:2, home:'Raul Gujjan R R / MITHRAN', away:'Prabhu Anand R / RANGARAJ LAKSHMANAN', sets:'6-2, 6-1', win:'home' },
        { ct:3, home:'VIJAYAKUMAR G / GOWRI SHANKAR', away:'VIKRAM DG / SAI SIMIRITHI', sets:'2-6, 3-6', win:'away' }
      ]},
    { home:'ANNUR - C(V2 SPORTS)', score:'1-2', away:'ANUSHAM - B', venue:'Annur Club',
      courts:[
        { ct:1, home:'LAKSHMI VISHNU / Kiruthick', away:'Vignesh K / Karthikeyan UKPM', sets:'2-6, 2-6', win:'away' },
        { ct:2, home:'Akarshana / YOGESH KUMAR', away:'Ganesh Pattiappan / Charan Ganesh', sets:'0-6, 2-6', win:'away' },
        { ct:3, home:'RANSLEY ROGER / SELVAKUMAR', away:'Lakshan N / RINESH AARYA', sets:'3-6, 6-3, 10-4', win:'home' }
      ]},
    { home:'SNS - D', score:'3-0', away:'TIRUPUR - B', venue:'SNS Tennis Academy(Bullseye)',
      courts:[
        { ct:1, home:'Jayachandran J / KRISHNASAAMY.M', away:'AYYASSUWAMY / K.VIVEKANANDA', sets:'6-4, 6-4', win:'home' },
        { ct:2, home:'Sathyaseelan / SATHISH KUMAR', away:'SIVASUBRAMANIAM / S.SUKUMARAN', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Senthilnathan CR / Penmetsha Sita Ram Rohit Verma', away:'S.CHANDRU / R.KARTHIKAA', sets:'7-6, 6-4', win:'home' }
      ]}
  ]},
  { week:5, date:'21-22 Feb 2026', done:true, matches:[
    { home:'CS ACADEMY - C', score:'0-3', away:'SNS - D', venue:'CS Academy',
      courts:[
        { ct:1, home:'ARYA / SANKRIT', away:'SATHISH KUMAR / Sathyaseelan', sets:'0-6, 1-6', win:'away' },
        { ct:2, home:'VIGNESH / YOGAN', away:'Prabhakaran C / Jayachandran J', sets:'2-6, 3-6', win:'away' },
        { ct:3, home:'RITHVIK / YUKTI', away:'Pushparaj / KRISHNASAAMY.M', sets:'3-6, 6-4, 5-10', win:'away' }
      ]},
    { home:'ANUSHAM - B', score:'3-0', away:'KGR - D', venue:'Anusham Tennis Academy',
      courts:[
        { ct:1, home:'Vignesh K / Karthikeyan UKPM', away:'GOPALAKRISHNAN NALLAIYAN / KAVINKUMAR', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'RINESH AARYA / Lakshan N', away:'JEEVAN DIVAKAR K / K A KOWSIYAN', sets:'6-0, 6-2', win:'home' },
        { ct:3, home:'Ganesh Pattiappan / Charan Ganesh', away:'SARAVANA PRASAD / SATHISHKUMAR SHANKAR', sets:'6-0, 6-0', win:'home' }
      ]},
    { home:'FALCON', score:'1-2', away:'ANNUR - C(V2 SPORTS)', venue:'Falcon Tennis Academy',
      courts:[
        { ct:1, home:'EZEKIEL I / R S ROSHAN', away:'Gnaalan / Samyuktha', sets:'6-1, 6-0', win:'home' },
        { ct:2, home:'BALA / SRIRAM', away:'RANSLEY ROGER / SELVAKUMAR', sets:'1-6, 0-6', win:'away' },
        { ct:3, home:'W/O (FALCON)', away:'YOGESH KUMAR / LAKSHMI VISHNU', sets:'W/O', win:'away', wo:true }
      ]},
    { home:'ACTC - B', score:'2-1', away:'TIRUPUR - B', venue:'Arima Cyprus Tennis Club',
      courts:[
        { ct:1, home:'GOWRI SHANKAR / JEYAKUMAR R', away:'AYYASSUWAMY / K.VIVEKANANDA', sets:'1-6, 1-6', win:'away' },
        { ct:2, home:'Raul Gujjan R R / MITHRAN', away:'S.SUKUMARAN / SIVASUBRAMANIAM', sets:'6-1, 6-0', win:'home' },
        { ct:3, home:'SRIDHAR M / KARTHICK SHANKAR', away:'S.CHANDRU / R.KARTHIKAA', sets:'7-5, 6-0', win:'home' }
      ]},
    { home:'RS PURAM - A', score:'0-3', away:'PSG Tech', venue:'RS Puram Club',
      courts:[
        { ct:1, home:'Ravi.N / Rajendran', away:'Viswa D K / Abhishek K A', sets:'5-7, 6-2, 11-13', win:'away' },
        { ct:2, home:'Arunkumar G / Srinivasan C. V', away:'Adhitya R / Aatish Srinivasan', sets:'3-6, 1-6', win:'away' },
        { ct:3, home:'Venugopal C.V / Ramachandran Dr', away:'Mehul Dinesh / Sukesh Netaji M A', sets:'6-7, 3-6', win:'away' }
      ]}
  ]},
  { week:6, date:'28 Feb - 01 Mar 2026', done:true, matches:[
    { home:'PSG Tech', score:'3-0', away:'ANNUR - C(V2 SPORTS)', venue:'PSG Tech Tennis Club',
      courts:[
        { ct:1, home:'Sukesh Netaji M A / Aatish Srinivasan', away:'YOGESH KUMAR / Gnaalan', sets:'6-0, 6-2', win:'home' },
        { ct:2, home:'Viswa D K / Abhishek K A', away:'SELVAKUMAR / RANSLEY ROGER', sets:'6-1, 6-7, 10-8', win:'home' },
        { ct:3, home:'Adhitya R / Karin Senapati R', away:'Kiruthick / LAKSHMI VISHNU', sets:'6-2, 6-1', win:'home' }
      ]},
    { home:'TIRUPUR - B', score:'3-0', away:'KGR - D', venue:'Tirupur Club',
      courts:[
        { ct:1, home:'CHANDRASEKARAN C / S.SUKUMARAN', away:'SARAVANA PRASAD / SATHISH KUMAR M', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'AYYASSUWAMY / THIYAGEARAJAN T', away:'GOPALAKRISHNAN NALLAIYAN / KAVINKUMAR', sets:'6-2, 3-6, 10-5', win:'home' },
        { ct:3, home:'S.CHANDRU / R.KARTHIKAA', away:'SHAHUL HAMEED / K A KOWSIYAN', sets:'6-3, 1-6, 10-5', win:'home' }
      ]},
    { home:'ANUSHAM - B', score:'3-0', away:'CS ACADEMY - C', venue:'Anusham Tennis Academy',
      courts:[
        { ct:1, home:'Vignesh K / Karthikeyan UKPM', away:'KISHORE / NARAIN', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'Ganesh Pattiappan / Charan Ganesh', away:'YOGAN / RITHVIK', sets:'6-2, 6-4', win:'home' },
        { ct:3, home:'RINESH AARYA / Lakshan N', away:'ARYA / SANKRIT', sets:'6-1, 6-2', win:'home' }
      ]},
    { home:'ACTC - B', score:'0-3', away:'RS PURAM - A', venue:'Arima Cyprus Tennis Club',
      courts:[
        { ct:1, home:'GOWRI SHANKAR / JEYAKUMAR R', away:'Ramachandran Dr / Arunkumar G', sets:'1-6, 0-6', win:'away' },
        { ct:2, home:'Raul Gujjan R R / MITHRAN', away:'Srinivasan C. V / Vishwaroop', sets:'6-4, 6-7, 6-10', win:'away' },
        { ct:3, home:'VIJAYAKUMAR G / ARAVINDH P', away:'Rajendran / Ravi.N', sets:'1-6, 0-6', win:'away' }
      ]},
    { home:'G.P.T.C - C', score:'1-2', away:'SNS - D', venue:'GPTC',
      courts:[
        { ct:1, home:'SAMPATHKUMAR AJAY HEMANTH / GOKUL THANGAM', away:'Senthilnathan CR / Penmetsha Sita Ram Rohit Verma', sets:'3-6, 6-4, 7-10', win:'away' },
        { ct:2, home:'AKILADITHYA / SAI SIMIRITHI', away:'KRISHNASAAMY.M / Pushparaj', sets:'6-3, 6-1', win:'home' },
        { ct:3, home:'VIKRAM DG / RAJENDRAN N', away:'Sathyaseelan / SATHISH KUMAR', sets:'5-7, 2-6', win:'away' }
      ]}
  ]},
  { week:7, date:'07-08 Mar 2026', done:true, matches:[
    { home:'RS PURAM - A', score:'2-1', away:'FALCON', venue:'RS Puram Club',
      courts:[
        { ct:1, home:'Ravi.N / Rajendran', away:'PRABHU / SRIRAM', sets:'6-1, 6-2', win:'home' },
        { ct:2, home:'Srinivasan C. V / Vishwaroop', away:'EZEKIEL I / R S ROSHAN', sets:'4-6, 1-6', win:'away' },
        { ct:3, home:'Venugopal C.V / Prakash. R', away:'BALA / VIJAYARAMAMOORTHY', sets:'6-2, 7-6', win:'home' }
      ]},
    { home:'SNS - D', score:'2-1', away:'ANUSHAM - B', venue:'SNS Tennis Academy(Bullseye)',
      courts:[
        { ct:1, home:'Penmetsha Sita Ram Rohit Verma / Senthilnathan CR', away:'Charan Ganesh / Ganesh Pattiappan', sets:'4-6, 7-6, 10-8', win:'home' },
        { ct:2, home:'Jayachandran J / KRISHNASAAMY.M', away:'Vignesh K / Nithinraj PG', sets:'4-6, 3-6', win:'away' },
        { ct:3, home:'Sathyaseelan / SATHISH KUMAR', away:'Lakshan N / RINESH AARYA', sets:'6-1, 6-2', win:'home' }
      ]},
    { home:'KGR - D', score:'1-2', away:'ANNUR - C(V2 SPORTS)', venue:'KGR Academy',
      courts:[
        { ct:1, home:'SARAVANA PRASAD / SHAHUL HAMEED', away:'YOGESH KUMAR / LAKSHMI VISHNU', sets:'3-6, 1-6', win:'away' },
        { ct:2, home:'GOPALAKRISHNAN NALLAIYAN / KAVINKUMAR', away:'SELVAKUMAR / RANSLEY ROGER', sets:'6-4, 4-6, 10-5', win:'home' },
        { ct:3, home:'KUMAR D / SATHISH KUMAR M', away:'Samyuktha / Gnaalan', sets:'6-4, 3-6, 3-10', win:'away' }
      ]},
    { home:'G.P.T.C - C', score:'1-2', away:'PSG Tech', venue:'GPTC',
      courts:[
        { ct:1, home:'VIKRAM DG / SAI SIMIRITHI', away:'Adhitya R / Aatish Srinivasan', sets:'1-6, 2-6', win:'away' },
        { ct:2, home:'S P Suresh Kumar / SAMPATHKUMAR AJAY HEMANTH', away:'Abhishek K A / Karin Senapati R', sets:'4-6, 1-6', win:'away' },
        { ct:3, home:'GOKUL THANGAM / RANGARAJ LAKSHMANAN', away:'W/O (PSG Tech)', sets:'W/O', win:'home', wo:true }
      ]},
    { home:'CS ACADEMY - C', score:'0-3', away:'ACTC - B', venue:'CS Academy',
      courts:[
        { ct:1, home:'YUKTI / RITHVIK', away:'VIJAYAKUMAR G / SRIDHAR M', sets:'2-6, 4-6', win:'away' },
        { ct:2, home:'YOGAN / NARAIN', away:'ARAVINDH P / KARTHICK SHANKAR', sets:'3-6, 1-6', win:'away' },
        { ct:3, home:'ARYA / KISHORE', away:'Raul Gujjan R R / MITHRAN', sets:'1-6, 1-6', win:'away' }
      ]}
  ]},
  { week:8, date:'14-15 Mar 2026', done:true, matches:[
    { home:'ANUSHAM - B', score:'2-1', away:'ACTC - B', venue:'Anusham Tennis Academy',
      courts:[
        { ct:1, home:'Ganesh Pattiappan / RINESH AARYA', away:'KARTHICK SHANKAR / ARAVINDH P', sets:'7-5, 6-1', win:'home' },
        { ct:2, home:'Charan Ganesh / Lakshan N', away:'Raul Gujjan R R / SRIDHAR M', sets:'5-7, 4-6', win:'away' },
        { ct:3, home:'Vignesh K / Nithinraj PG', away:'VIJAYAKUMAR G / GOWRI SHANKAR', sets:'6-2, 6-1', win:'home' }
      ]},
    { home:'TIRUPUR - B', score:'0-3', away:'PSG Tech', venue:'Tirupur Club',
      courts:[
        { ct:1, home:'HEMAVARSHINI S J / S.CHANDRU', away:'Adhitya R / Mehul Dinesh', sets:'4-6, 5-7', win:'away' },
        { ct:2, home:'AYYASSUWAMY / R.KARTHIKAA', away:'Sukesh Netaji M A / Aatish Srinivasan', sets:'2-6, 1-6', win:'away' },
        { ct:3, home:'CHANDRASEKARAN C / SIVASUBRAMANIAM', away:'BHUVANESH D / Abhishek K A', sets:'2-6, 1-6', win:'away' }
      ]},
    { home:'ANNUR - C(V2 SPORTS)', score:'1-2', away:'RS PURAM - A', venue:'Annur Club',
      courts:[
        { ct:1, home:'YOGESH KUMAR / LAKSHMI VISHNU', away:'Ramachandran Dr / Venugopal C.V', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'Gnaalan / Kiruthick', away:'Arunkumar G / Prakash. R', sets:'1-6, 0-6', win:'away' },
        { ct:3, home:'RANSLEY ROGER / SELVAKUMAR', away:'Ravi.N / Rajendran', sets:'2-6, 4-6', win:'away' }
      ]},
    { home:'KGR - D', score:'0-3', away:'SNS - D', venue:'KGR Academy',
      courts:[
        { ct:1, home:'GOPALAKRISHNAN NALLAIYAN / KAVINKUMAR', away:'KRISHNASAAMY.M / Jayachandran J', sets:'2-6, 3-6', win:'away' },
        { ct:2, home:'SATHISHKUMAR SHANKAR / SHAHUL HAMEED', away:'SATHISH KUMAR / Sathyaseelan', sets:'3-6, 1-6', win:'away' },
        { ct:3, home:'K A KOWSIYAN / SARAVANA PRASAD', away:'Penmetsha Sita Ram Rohit Verma / Senthilnathan CR', sets:'3-6, 1-6', win:'away' }
      ]},
    { home:'G.P.T.C - C', score:'2-1', away:'FALCON', venue:'GPTC',
      courts:[
        { ct:1, home:'JERRY / SAI SIMIRITHI', away:'R S ROSHAN / ANINDITHA', sets:'4-6, 6-4, 4-10', win:'away' },
        { ct:2, home:'SAMPATHKUMAR AJAY HEMANTH / GOKUL THANGAM', away:'KRISHNARAJ M / SRIRAM', sets:'6-1, 6-3', win:'home' },
        { ct:3, home:'YOKESH R / AARAV M VELAYUTHAM', away:'BALA / VIJAYARAMAMOORTHY', sets:'6-3, 7-5', win:'home' }
      ]}
  ]},
  { week:9, date:'21-22 Mar 2026', done:false, matches:[
    { home:'FALCON', score:'TBD', away:'TIRUPUR - B', venue:'Falcon Tennis Academy' },
    { home:'KGR - D', score:'TBD', away:'ACTC - B', venue:'KGR Academy' },
    { home:'G.P.T.C - C', score:'TBD', away:'RS PURAM - A', venue:'GPTC' },
    { home:'SNS - D', score:'TBD', away:'ANNUR - C(V2 SPORTS)', venue:'SNS Tennis Academy(Bullseye)' },
    { home:'PSG Tech', score:'TBD', away:'CS ACADEMY - C', venue:'PSG Tech Tennis Club' }
  ]},
  { week:10, date:'28-29 Mar 2026', done:true, matches:[
    { home:'TIRUPUR - B', score:'2-1', away:'RS PURAM - A', venue:'Tirupur Club',
      courts:[
        { ct:1, home:'LAKSHAMANAN S / THIYAGEARAJAN T', away:'Ramachandran Dr / Prakash. R', sets:'7-5, 6-4', win:'home' },
        { ct:2, home:'HEMAVARSHINI S J / S.CHANDRU', away:'Venugopal C.V / Vishwaroop', sets:'6-4, 6-3', win:'home' },
        { ct:3, home:'AYYASSUWAMY / R.KARTHIKAA', away:'Rajendran / Ravi.N', sets:'3-6, 1-6', win:'away' }
      ]},
    { home:'ANNUR - C(V2 SPORTS)', score:'1-2', away:'G.P.T.C - C', venue:'Annur Club',
      courts:[
        { ct:1, home:'Kiruthick / SELVAKUMAR', away:'VIKRAM DG / SAI SIMIRITHI', sets:'3-6, 5-7', win:'away' },
        { ct:2, home:'Gnaalan / Samyuktha', away:'Prabhu Anand R / GOKUL THANGAM', sets:'0-6, 4-6', win:'away' },
        { ct:3, home:'YOGESH KUMAR / RANSLEY ROGER', away:'SATHVIKA R P / YOKESH R', sets:'6-3, 6-0', win:'home' }
      ]},
    { home:'SNS - D', score:'2-1', away:'ACTC - B', venue:'SNS Tennis Academy(Bullseye)',
      courts:[
        { ct:1, home:'Jayachandran J / Pushparaj', away:'GOWRI SHANKAR / JEYAKUMAR R', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Penmetsha Sita Ram Rohit Verma / Senthilnathan CR', away:'KARTHICK SHANKAR / MITHRAN', sets:'6-1, 6-4', win:'home' },
        { ct:3, home:'SATHISH KUMAR / Sathyaseelan', away:'Raul Gujjan R R / SRIDHAR M', sets:'5-7, 6-3, 10-12', win:'away' }
      ]},
    { home:'CS ACADEMY - C', score:null, away:'FALCON', venue:'CS Academy' },
    { home:'ANUSHAM - B', score:'0-3', away:'PSG Tech', venue:'Anusham Tennis Academy',
      courts:[
        { ct:1, home:'Ganesh Pattiappan / Charan Ganesh', away:'Mehul Dinesh / BHUVANESH D', sets:'5-7, 4-6', win:'away' },
        { ct:2, home:'RINESH AARYA / Nithinraj PG', away:'Adhitya R / Karin Senapati R', sets:'1-6, 3-6', win:'away' },
        { ct:3, home:'Venkatesh R / Vignesh K', away:'Aatish Srinivasan / Abhishek K A', sets:'4-6, 2-6', win:'away' }
      ]}
  ]},
  { week:11, date:'04-05 Apr 2026', done:false, matches:[
    { home:'FALCON', score:'TBD', away:'ANUSHAM - B', venue:'Falcon Tennis Academy' },
    { home:'RS PURAM - A', score:'TBD', away:'CS ACADEMY - C', venue:'RS Puram Club' },
    { home:'ACTC - B', score:'TBD', away:'ANNUR - C(V2 SPORTS)', venue:'Arima Cyprus Tennis Club' },
    { home:'PSG Tech', score:'TBD', away:'KGR - D', venue:'PSG Tech Tennis Club' },
    { home:'TIRUPUR - B', score:'TBD', away:'G.P.T.C - C', venue:'Tirupur Club' }
  ]}
];
