// CDTA 2026 -- Division I Data
// Auto-extracted from cdta2026_dashboard_w8.html

const DIV_I_TEAMS = [
  { short:'SATCH', full:'SATCHIDANANDA', captain:'T. Karthick', mobile:'9942065746', players:12, club:'Satchidananda School', surface:'Synthetic', division:'I' },
  { short:'TTOTS', full:'TenniMaSh Tots', captain:'Sarankumar Sathasivam', mobile:'8056203134', players:8, club:'TenniMaSh Academy', surface:'Clay', division:'I' },
  { short:'STARS', full:'SREEVATSA STARS', captain:'Monish', mobile:'8056893111', players:11, club:'Sreevatsa Club', surface:'Synthetic', division:'I' },
  { short:'TGLO', full:'TENNIGLO - D', captain:'Shyama Kelath', mobile:'9894587477', players:8, club:'The Tenniglo Academy', surface:'Clay', division:'I' },
  { short:'RAIL', full:'S RAILWAY - B', captain:'Sampath Gnanaraja', mobile:'9965596650', players:8, club:'S Railway', surface:'Clay', division:'I' },
  { short:'GNEST', full:'GREEN NEST - B', captain:'Vigneswar', mobile:'9003931969', players:9, club:'Green Nest Sports Academy', surface:'Clay', division:'I' },
  { short:'CBE', full:'CBE CLUB - C', captain:'Giulia Bosco', mobile:'9994448912', players:13, club:'Coimbatore Club', surface:'Clay', division:'I' },
  { short:'CHAMPS', full:'SVG Champs', captain:'Murugesan M', mobile:'9176663383', players:8, club:'Sreevatsa Club', surface:'Synthetic', division:'I' },
  { short:'SNS', full:'SNS-C(AS TENNIS)', captain:'Pragadeesan T', mobile:'9880960030', players:9, club:'SNS Tennis Academy', surface:'Synthetic', division:'I' },
  { short:'SAI', full:'SAI TENNIS - B', captain:'Naveen', mobile:'8144460005', players:8, club:'Sai Tennis Academy', surface:'Clay', division:'I' },
  { short:'KING', full:'Kingsberry Tennis', captain:'Pani Ramasami', mobile:'9043287321', players:10, club:'Kingsberry Tennis', surface:'Synthetic', division:'I' }
];
const DIV_I_STANDINGS = [
  { rank:1,  short:'SATCH',  full:'SATCHIDANANDA',   pts:24, played:8, w:8, l:0, setsW:48, setsL:3,  gamesW:286, gamesL:89  },
  { rank:2,  short:'TTOTS',  full:'TenniMaSh Tots',  pts:23, played:8, w:8, l:0, setsW:46, setsL:4,  gamesW:267, gamesL:84  },
  { rank:3,  short:'STARS',  full:'SREEVATSA STARS', pts:20, played:9, w:7, l:2, setsW:41, setsL:17, gamesW:261, gamesL:150 },
  { rank:4,  short:'RAIL',   full:'S RAILWAY - B',   pts:14, played:8, w:5, l:3, setsW:30, setsL:23, gamesW:196, gamesL:168 },
  { rank:5,  short:'CBE',    full:'CBE CLUB - C',    pts:13, played:8, w:5, l:3, setsW:28, setsL:24, gamesW:233, gamesL:193 },
  { rank:6,  short:'TGLO',   full:'TENNIGLO - D',    pts:12, played:8, w:5, l:3, setsW:23, setsL:23, gamesW:189, gamesL:170 },
  { rank:7,  short:'SNS',    full:'SNS-C(AS TENNIS)',pts:9,  played:9, w:3, l:6, setsW:21, setsL:37, gamesW:208, gamesL:288 },
  { rank:8,  short:'GNEST',  full:'GREEN NEST - B',  pts:8,  played:9, w:2, l:7, setsW:19, setsL:32, gamesW:154, gamesL:219 },
  { rank:9,  short:'CHAMPS', full:'SVG Champs',      pts:8,  played:9, w:2, l:7, setsW:18, setsL:39, gamesW:162, gamesL:264 },
  { rank:10, short:'SAI',    full:'SAI TENNIS - B',  pts:4,  played:8, w:1, l:7, setsW:9,  setsL:43, gamesW:89,  gamesL:260 },
  { rank:11, short:'KING',   full:'Kingsberry Tennis',pts:3, played:8, w:0, l:8, setsW:6,  setsL:42, gamesW:95,  gamesL:254 }
];

const DIV_I_PROJECTIONS = [
  { rank:1,  short:'SATCH',  full:'SATCHIDANANDA',    current:24, expected:4.3,  projected:28.3, min:24,   max:30 },
  { rank:2,  short:'TTOTS',  full:'TenniMaSh Tots',   current:23, expected:4.3,  projected:27.3, min:23,   max:29 },
  { rank:3,  short:'STARS',  full:'SREEVATSA STARS',  current:20, expected:2.0,  projected:22.0, min:20,   max:23 },
  { rank:4,  short:'RAIL',   full:'S RAILWAY - B',    current:14, expected:3.5,  projected:17.5, min:14,   max:20 },
  { rank:5,  short:'CBE',    full:'CBE CLUB - C',     current:13, expected:2.0,  projected:15.0, min:13,   max:19 },
  { rank:6,  short:'TGLO',   full:'TENNIGLO - D',     current:12, expected:2.0,  projected:14.0, min:12,   max:18 },
  { rank:7,  short:'SNS',    full:'SNS-C(AS TENNIS)', current:9,  expected:2.0,  projected:11.0, min:9,    max:12 },
  { rank:8,  short:'CHAMPS', full:'SVG Champs',       current:8,  expected:2.0,  projected:10.0, min:8,    max:11 },
  { rank:9,  short:'GNEST',  full:'GREEN NEST - B',   current:8,  expected:0.5,  projected:8.5,  min:8,    max:9  },
  { rank:10, short:'SAI',    full:'SAI TENNIS - B',   current:4,  expected:2.5,  projected:6.5,  min:4,    max:10 },
  { rank:11, short:'KING',   full:'Kingsberry Tennis',current:3,  expected:2.0,  projected:5.0,  min:3,    max:9  }
];

const DIV_I_KEY_PAIRS = [
  { pair:'Adith Balasubramaniam / Mahita Karthik', team:'TTOTS', apps:6, wins:6 },
  { pair:'Sarankumar / Shivani Sivakumar', team:'TTOTS', apps:6, wins:6 },
  { pair:'T.Karthick / B.R.Viswak', team:'SATCH', apps:5, wins:5 },
  { pair:'G.Prasath / Theneeshwaran M', team:'SATCH', apps:5, wins:5 },
  { pair:'S K Nithin / G Sendhur', team:'SATCH', apps:5, wins:5 },
  { pair:'Pragadeesan T / Rajesh K', team:'SNS', apps:5, wins:3 },
  { pair:'Sampath Gnanaraja / Saravanakumar', team:'RAIL', apps:6, wins:4 },
  { pair:'Pragathishwar / Juanishbibian', team:'TTOTS', apps:4, wins:4 },
  { pair:'Monish / Kishore', team:'STARS', apps:4, wins:3 },
  { pair:'Yunus Abbas Vagh / Gaurav Kapoor', team:'CBE', apps:4, wins:4 },
  { pair:'Raghuram Murugesan / Gaurav Kapoor', team:'CBE', apps:4, wins:3 },
  { pair:'Shyama Kelath / Siddaarth Malay', team:'TGLO', apps:3, wins:2 }
];

const DIV_I_PLAYERS = [
  { name:'T. Karthick',           team:'SATCH', gender:'M', age:35, role:'Captain', gamesPlayed:8, wins:8, photo:'photos/div-i/satch/t-karthick.jpg' },
  { name:'G. Prasath',            team:'SATCH', gender:'M', age:29, role:'Player',  gamesPlayed:8, wins:8, photo:'photos/div-i/satch/g-prasath.jpg' },
  { name:'Anika B. Sathish',      team:'SATCH', gender:'F', age:13, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-i/satch/anika-b-sathish.jpg' },
  { name:'Thakshana B',           team:'SATCH', gender:'F', age:11, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-i/satch/thakshana-b.jpg' },
  { name:'Diya Senthil',          team:'SATCH', gender:'F', age:13, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-i/satch/diya-senthil.jpg' },
  { name:'Sasritha G',            team:'SATCH', gender:'F', age:13, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-i/satch/sasritha-g.jpg' },
  { name:'G Sendhur',             team:'SATCH', gender:'M', age:16, role:'Player',  gamesPlayed:8, wins:8, photo:'photos/div-i/satch/g-sendhur.jpg' },
  { name:'B.R. Viswak',           team:'SATCH', gender:'M', age:13, role:'Player',  gamesPlayed:8, wins:8, photo:'photos/div-i/satch/b-r-viswak.jpg' },
  { name:'Ashwin Krishna M.R',    team:'SATCH', gender:'M', age:12, role:'Player',  gamesPlayed:2, wins:2, photo:'photos/div-i/satch/ashwin-krishna-m-r.jpg' },
  { name:'Theneeshwaran M',       team:'SATCH', gender:'M', age:13, role:'Player',  gamesPlayed:8, wins:8, photo:'photos/div-i/satch/theneeshwaran-m.jpg' },
  { name:'Nithik M.K',            team:'SATCH', gender:'M', age:12, role:'Player',  gamesPlayed:2, wins:2, photo:'photos/div-i/satch/nithik-m-k.jpg' },
  { name:'S K Nithin',            team:'SATCH', gender:'M', age:16, role:'Player',  gamesPlayed:4, wins:4, photo:'photos/div-i/satch/s-k-nithin.jpg' },
  { name:'Sarankumar Sathasivam', team:'TTOTS', gender:'M', age:31, role:'Captain', gamesPlayed:8, wins:8, photo:'photos/div-i/ttots/sarankumar-sathasivam.jpg' },
  { name:'Sivakumar Eswaran',     team:'TTOTS', gender:'M', age:50, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-i/ttots/sivakumar-eswaran.jpg' },
  { name:'Mahita Karthik',        team:'TTOTS', gender:'F', age:14, role:'Player',  gamesPlayed:6, wins:6, photo:'photos/div-i/ttots/mahita-karthik.jpg' },
  { name:'Pragathishwar Aan',     team:'TTOTS', gender:'M', age:21, role:'Player',  gamesPlayed:7, wins:6, photo:'photos/div-i/ttots/pragathishwar-aan.jpg' },
  { name:'Adith Balasubramaniam', team:'TTOTS', gender:'M', age:16, role:'Player',  gamesPlayed:8, wins:8, photo:'photos/div-i/ttots/adith-balasubramaniam.jpg' },
  { name:'Varun Satishkumar',     team:'TTOTS', gender:'M', age:11, role:'Player',  gamesPlayed:4, wins:4, photo:'photos/div-i/ttots/varun-satishkumar.jpg' },
  { name:'Shivani Sivakumar',     team:'TTOTS', gender:'F', age:14, role:'Player',  gamesPlayed:8, wins:8, photo:'photos/div-i/ttots/shivani-sivakumar.jpg' },
  { name:'Juanishbibian C',       team:'TTOTS', gender:'M', age:16, role:'Player',  gamesPlayed:7, wins:6, photo:'photos/div-i/ttots/juanishbibian-c.jpg' },
  { name:'Monish',                team:'STARS', gender:'M', age:40, role:'Captain', gamesPlayed:9, wins:7, photo:'photos/div-i/stars/monish.jpg' },
  { name:'Kishore',               team:'STARS', gender:'M', age:41, role:'Player',  gamesPlayed:7, wins:5, photo:'photos/div-i/stars/kishore.jpg' },
  { name:'Ramesh',                team:'STARS', gender:'M', age:58, role:'Player',  gamesPlayed:3, wins:2, photo:'photos/div-i/stars/ramesh.jpg' },
  { name:'Palaniappan',           team:'STARS', gender:'M', age:42, role:'Player',  gamesPlayed:6, wins:4, photo:'photos/div-i/stars/palaniappan.jpg' },
  { name:'Chandrasekar',          team:'STARS', gender:'M', age:59, role:'Player',  gamesPlayed:2, wins:2, photo:'photos/div-i/stars/chandrasekar.jpg' },
  { name:'Suryaa',                team:'STARS', gender:'M', age:14, role:'Player',  gamesPlayed:6, wins:5, photo:'photos/div-i/stars/suryaa.jpg' },
  { name:'Harin',                 team:'STARS', gender:'M', age:15, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-i/stars/harin.jpg' },
  { name:'Revathi',               team:'STARS', gender:'F', age:40, role:'Player',  gamesPlayed:5, wins:3, photo:'photos/div-i/stars/revathi.jpg' },
  { name:'Senthil',               team:'STARS', gender:'M', age:54, role:'Player',  gamesPlayed:6, wins:5, photo:'photos/div-i/stars/senthil.jpg' },
  { name:'Abhinnav',              team:'STARS', gender:'M', age:24, role:'Player',  gamesPlayed:1, wins:0, photo:'photos/div-i/stars/abhinnav.jpg' },
  { name:'Shankar V',             team:'STARS', gender:'M', age:65, role:'Player',  gamesPlayed:9, wins:7, photo:'photos/div-i/stars/shankar-v.jpg' },
  { name:'Shyama Kelath',         team:'TGLO',  gender:'F', age:36, role:'Captain', gamesPlayed:8, wins:5, photo:'photos/div-i/tglo/shyama-kelath.jpg' },
  { name:'Thirumalai Nambi',      team:'TGLO',  gender:'M', age:41, role:'Player',  gamesPlayed:4, wins:2, photo:'photos/div-i/tglo/thirumalai-nambi.jpg' },
  { name:'Rajarathnam',           team:'TGLO',  gender:'M', age:42, role:'Player',  gamesPlayed:6, wins:4, photo:'photos/div-i/tglo/rajarathnam.jpg' },
  { name:'Arun Kumar A S',        team:'TGLO',  gender:'M', age:38, role:'Player',  gamesPlayed:5, wins:3, photo:'photos/div-i/tglo/arun-kumar-a-s.jpg' },
  { name:'Pradeep E S',           team:'TGLO',  gender:'M', age:41, role:'Player',  gamesPlayed:6, wins:3, photo:'photos/div-i/tglo/pradeep-e-s.jpg' },
  { name:'Naveen Kumar',          team:'TGLO',  gender:'M', age:29, role:'Player',  gamesPlayed:7, wins:3, photo:'photos/div-i/tglo/naveen-kumar.jpg' },
  { name:'Arjun Visratej',        team:'TGLO',  gender:'M', age:29, role:'Player',  gamesPlayed:6, wins:1, photo:'photos/div-i/tglo/arjun-visratej.jpg' },
  { name:'Siddaarth Malay',       team:'TGLO',  gender:'M', age:29, role:'Player',  gamesPlayed:6, wins:3, photo:'photos/div-i/tglo/siddaarth-malay.jpg' },
  { name:'Sampath Gnanaraja',     team:'RAIL',  gender:'M', age:53, role:'Captain', gamesPlayed:8, wins:4, photo:'photos/div-i/rail/sampath-gnanaraja.jpg' },
  { name:'Saravanakumar',         team:'RAIL',  gender:'M', age:37, role:'Player',  gamesPlayed:8, wins:4, photo:'photos/div-i/rail/saravanakumar.jpg' },
  { name:'Vivinraja',             team:'RAIL',  gender:'M', age:20, role:'Player',  gamesPlayed:7, wins:5, photo:'photos/div-i/rail/vivinraja.jpg' },
  { name:'Sasikumar',             team:'RAIL',  gender:'M', age:51, role:'Player',  gamesPlayed:7, wins:4, photo:'photos/div-i/rail/sasikumar.jpg' },
  { name:'Louis Paal',            team:'RAIL',  gender:'M', age:58, role:'Player',  gamesPlayed:8, wins:4, photo:'photos/div-i/rail/louis-paal.jpg' },
  { name:'Sugunan',               team:'RAIL',  gender:'M', age:57, role:'Player',  gamesPlayed:8, wins:6, photo:'photos/div-i/rail/sugunan.jpg' },
  { name:'Murugesan',             team:'RAIL',  gender:'M', age:59, role:'Player',  gamesPlayed:1, wins:1, photo:'photos/div-i/rail/murugesan.jpg' },
  { name:'Shanmugamsundaram V',   team:'RAIL',  gender:'M', age:71, role:'Player',  gamesPlayed:1, wins:0, photo:'photos/div-i/rail/shanmugamsundaram-v.jpg' },
  { name:'Vigneswar',             team:'GNEST', gender:'M', age:32, role:'Captain', gamesPlayed:8, wins:2, photo:'photos/div-i/gnest/vigneswar.jpg' },
  { name:'Raghavendr Ban',        team:'GNEST', gender:'M', age:36, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-i/gnest/raghavendr-ban.jpg' },
  { name:'Gopala Krishnan',       team:'GNEST', gender:'M', age:43, role:'Player',  gamesPlayed:9, wins:4, photo:'photos/div-i/gnest/gopala-krishnan.jpg' },
  { name:'Gunaseel',              team:'GNEST', gender:'M', age:29, role:'Player',  gamesPlayed:7, wins:3, photo:'photos/div-i/gnest/gunaseel.jpg' },
  { name:'Vijayaraju G',          team:'GNEST', gender:'M', age:30, role:'Player',  gamesPlayed:5, wins:2, photo:'photos/div-i/gnest/vijayaraju-g.jpg' },
  { name:'Sujith G',              team:'GNEST', gender:'M', age:13, role:'Player',  gamesPlayed:1, wins:0, photo:'photos/div-i/gnest/sujith-g.jpg' },
  { name:'S Vijayarangan',        team:'GNEST', gender:'M', age:51, role:'Player',  gamesPlayed:5, wins:2, photo:'photos/div-i/gnest/s-vijayarangan.jpg' },
  { name:'Virat',                 team:'GNEST', gender:'M', age:10, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-i/gnest/virat.jpg' },
  { name:'Murali Kumar D',        team:'GNEST', gender:'M', age:29, role:'Player',  gamesPlayed:9, wins:3, photo:'photos/div-i/gnest/murali-kumar-d.jpg' },
  { name:'Giulia Bosco',          team:'CBE',   gender:'F', age:47, role:'Captain', gamesPlayed:8, wins:4, photo:'photos/div-i/cbe/giulia-bosco.jpg' },
  { name:'Danalakshmi Govindrajann',team:'CBE', gender:'F', age:44, role:'Player',  gamesPlayed:1, wins:0, photo:'photos/div-i/cbe/danalakshmi-govindrajann.jpg' },
  { name:'Sangeet Bagaria',       team:'CBE',   gender:'M', age:49, role:'Player',  gamesPlayed:5, wins:3, photo:'photos/div-i/cbe/sangeet-bagaria.jpg' },
  { name:'Saujas Vaibhav Sankar', team:'CBE',   gender:'M', age:13, role:'Player',  gamesPlayed:1, wins:0, photo:'photos/div-i/cbe/saujas-vaibhav-sankar.jpg' },
  { name:'Sara Vivek Khona',      team:'CBE',   gender:'F', age:14, role:'Player',  gamesPlayed:2, wins:0, photo:'photos/div-i/cbe/sara-vivek-khona.jpg' },
  { name:'Gaurav Kapoor',         team:'CBE',   gender:'M', age:37, role:'Player',  gamesPlayed:6, wins:5, photo:'photos/div-i/cbe/gaurav-kapoor.jpg' },
  { name:'Suprej Venkat',         team:'CBE',   gender:'M', age:42, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-i/cbe/suprej-venkat.jpg' },
  { name:'Natasha Chandran',      team:'CBE',   gender:'F', age:41, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-i/cbe/natasha-chandran.jpg' },
  { name:'Ashwin Karivaradaraj',  team:'CBE',   gender:'M', age:27, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-i/cbe/ashwin-karivaradaraj.jpg' },
  { name:'Raghuram Murugesan',    team:'CBE',   gender:'M', age:55, role:'Player',  gamesPlayed:7, wins:4, photo:'photos/div-i/cbe/raghuram-murugesan.jpg' },
  { name:'Joseph J Chakola',      team:'CBE',   gender:'M', age:40, role:'Player',  gamesPlayed:6, wins:3, photo:'photos/div-i/cbe/joseph-j-chakola.jpg' },
  { name:'Yunus Abbas Vagh',      team:'CBE',   gender:'M', age:43, role:'Player',  gamesPlayed:7, wins:6, photo:'photos/div-i/cbe/yunus-abbas-vagh.jpg' },
  { name:'Varun Ravichandran',    team:'CBE',   gender:'M', age:37, role:'Player',  gamesPlayed:5, wins:1, photo:'photos/div-i/cbe/varun-ravichandran.jpg' },
  { name:'Murugesan M',           team:'CHAMPS',gender:'M', age:49, role:'Captain', gamesPlayed:7, wins:2, photo:'photos/div-i/champs/murugesan-m.jpg' },
  { name:'Abdul Rahiman K',       team:'CHAMPS',gender:'M', age:53, role:'Player',  gamesPlayed:9, wins:5, photo:'photos/div-i/champs/abdul-rahiman-k.jpg' },
  { name:'T Karthikeyan Sudhakar',team:'CHAMPS',gender:'M', age:55, role:'Player',  gamesPlayed:6, wins:0, photo:'photos/div-i/champs/t-karthikeyan-sudhakar.jpg' },
  { name:'Dhivya Kanakabala B',   team:'CHAMPS',gender:'F', age:42, role:'Player',  gamesPlayed:4, wins:1, photo:'photos/div-i/champs/dhivya-kanakabala-b.jpg' },
  { name:'Gnanasekaran S',        team:'CHAMPS',gender:'M', age:43, role:'Player',  gamesPlayed:9, wins:5, photo:'photos/div-i/champs/gnanasekaran-s.jpg' },
  { name:'Senthilkumar T',        team:'CHAMPS',gender:'M', age:43, role:'Player',  gamesPlayed:7, wins:1, photo:'photos/div-i/champs/senthilkumar-t.jpg' },
  { name:'Jeevaraj A',            team:'CHAMPS',gender:'M', age:54, role:'Player',  gamesPlayed:9, wins:2, photo:'photos/div-i/champs/jeevaraj-a.png' },
  { name:'Natarajan',             team:'CHAMPS',gender:'M', age:80, role:'Player',  gamesPlayed:1, wins:0, photo:'photos/div-i/champs/natarajan.jpg' },
  { name:'Pragadeesan T',         team:'SNS',   gender:'M', age:47, role:'Captain', gamesPlayed:7, wins:5, photo:'photos/div-i/sns/pragadeesan-t.jpg' },
  { name:'Sai Sankar Mohana Kesavan',team:'SNS',gender:'M', age:37, role:'Player',  gamesPlayed:6, wins:1, photo:'photos/div-i/sns/sai-sankar-mohana-kesavan.jpg' },
  { name:'Jeganath R',            team:'SNS',   gender:'M', age:43, role:'Player',  gamesPlayed:5, wins:1, photo:'photos/div-i/sns/jeganath-r.jpg' },
  { name:'Neelesh Lingaraj',      team:'SNS',   gender:'M', age:40, role:'Player',  gamesPlayed:4, wins:2, photo:'photos/div-i/sns/neelesh-lingaraj.jpg' },
  { name:'Subramanian',           team:'SNS',   gender:'M', age:47, role:'Player',  gamesPlayed:null, wins:null, photo:'photos/div-i/sns/subramanian.jpg' },
  { name:'Rajesh K',              team:'SNS',   gender:'M', age:40, role:'Player',  gamesPlayed:9, wins:4, photo:'photos/div-i/sns/rajesh-k.jpg' },
  { name:'Prabhakaran V',         team:'SNS',   gender:'M', age:46, role:'Player',  gamesPlayed:8, wins:2, photo:'photos/div-i/sns/prabhakaran-v.jpg' },
  { name:'Harsha M K',            team:'SNS',   gender:'F', age:15, role:'Player',  gamesPlayed:7, wins:2, photo:'photos/div-i/sns/harsha-m-k.jpg' },
  { name:'Jaswanth M K',          team:'SNS',   gender:'M', age:12, role:'Player',  gamesPlayed:8, wins:1, photo:'photos/div-i/sns/jaswanth-m-k.jpg' },
  { name:'Naveen',                team:'SAI',   gender:'M', age:38, role:'Captain', gamesPlayed:8, wins:1, photo:'photos/div-i/sai/naveen.jpg' },
  { name:'Harsith',               team:'SAI',   gender:'M', age:18, role:'Player',  gamesPlayed:8, wins:3, photo:'photos/div-i/sai/harsith.jpg' },
  { name:'Dinesh',                team:'SAI',   gender:'M', age:33, role:'Player',  gamesPlayed:5, wins:1, photo:'photos/div-i/sai/dinesh.jpg' },
  { name:'Ridhishree',            team:'SAI',   gender:'F', age:13, role:'Player',  gamesPlayed:6, wins:0, photo:'photos/div-i/sai/ridhishree.jpg' },
  { name:'Kanishkka',             team:'SAI',   gender:'F', age:11, role:'Player',  gamesPlayed:7, wins:0, photo:'photos/div-i/sai/kanishkka.jpg' },
  { name:'Abinanth',              team:'SAI',   gender:'M', age:13, role:'Player',  gamesPlayed:6, wins:0, photo:'photos/div-i/sai/abinanth.jpg' },
  { name:'Kevin',                 team:'SAI',   gender:'M', age:15, role:'Player',  gamesPlayed:1, wins:0, photo:'photos/div-i/sai/kevin.jpg' },
  { name:'Alwin Swaminathan',     team:'SAI',   gender:'M', age:13, role:'Player',  gamesPlayed:7, wins:3, photo:'photos/div-i/sai/alwin-swaminathan.jpg' },
  { name:'Pani Ramasami',         team:'KING',  gender:'M', age:52, role:'Captain', gamesPlayed:7, wins:3, photo:'photos/div-i/king/pani-ramasami.jpg' },
  { name:'David Simon',           team:'KING',  gender:'M', age:50, role:'Player',  gamesPlayed:3, wins:1, photo:'photos/div-i/king/david-simon.jpg' },
  { name:'Kulasekaran J',         team:'KING',  gender:'M', age:48, role:'Player',  gamesPlayed:5, wins:0, photo:'photos/div-i/king/kulasekaran-j.jpg' },
  { name:'Aashi Manuel Charles',  team:'KING',  gender:'M', age:26, role:'Player',  gamesPlayed:5, wins:0, photo:'photos/div-i/king/aashi-manuel-charles.jpg' },
  { name:'Damien Stany',          team:'KING',  gender:'M', age:10, role:'Player',  gamesPlayed:1, wins:0, photo:'photos/div-i/king/damien-stany.jpg' },
  { name:'Sandra Christine',      team:'KING',  gender:'F', age:20, role:'Player',  gamesPlayed:4, wins:0, photo:'photos/div-i/king/sandra-christine.jpg' },
  { name:'Joseph Stany',          team:'KING',  gender:'M', age:42, role:'Player',  gamesPlayed:1, wins:0, photo:'photos/div-i/king/joseph-stany.jpg' },
  { name:'Angel Christina (Tina)',team:'KING',  gender:'F', age:21, role:'Player',  gamesPlayed:5, wins:0, photo:'photos/div-i/king/angel-christina-tina.jpg' },
  { name:'Samyukta Y',            team:'KING',  gender:'F', age:12, role:'Player',  gamesPlayed:6, wins:1, photo:'photos/div-i/king/samyukta-y.jpg' },
  { name:'Babu',                  team:'KING',  gender:'M', age:50, role:'Player',  gamesPlayed:3, wins:1, photo:'photos/div-i/king/babu.jpg' }
];
const DIV_I_SCHEDULE = [
  { week:1, date:'24-25 Jan 2026', done:true, matches:[
    { home:'CBE CLUB - C', score:'0-3', away:'TenniMaSh Tots', venue:'Coimbatore Club',
      courts:[
        { ct:1, home:'Raghuram Murugesan / Varun Ravichandran', away:'Pragathishwar Aan / Juanishbibian C', sets:'6-7, 7-6, 4-10', win:'away' },
        { ct:2, home:'Gaurav Kapoor / Giulia Bosco', away:'Sarankumar Sathasivam / Shivani Sivakumar', sets:'0-6, 3-6', win:'away' },
        { ct:3, home:'Joseph J Chakola / Yunus Abbas Vagh', away:'Adith Balasubramaniam / Mahita Karthik', sets:'2-6, 0-6', win:'away' }
      ]},
    { home:'SREEVATSA STARS', score:'2-1', away:'S RAILWAY - B', venue:'S Railway',
      courts:[
        { ct:1, home:'Monish / Suryaa', away:'Louis Paal / Sasikumar', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Senthil / Kishore', away:'Sampath Gnanaraja / Saravanakumar', sets:'2-6, 7-6, 10-4', win:'home' },
        { ct:3, home:'Shankar V / Revathi', away:'Vivinraja / Sugunan', sets:'6-1, 4-6, 7-10', win:'away' }
      ]},
    { home:'SVG Champs', score:'2-1', away:'SNS-C(AS TENNIS)', venue:'Sreevatsa Club',
      courts:[
        { ct:1, home:'Gnanasekaran S / Abdul Rahiman K', away:'Neelesh Lingaraj / Prabhakaran V', sets:'6-3, 6-3', win:'home' },
        { ct:2, home:'Natarajan / Dhivya Kanakabala B', away:'Pragadeesan T / Harsha M K', sets:'1-6, 2-6', win:'away' },
        { ct:3, home:'Senthilkumar T / Jeevaraj A', away:'Jaswanth M K / Rajesh K', sets:'7-6, 6-7, 10-5', win:'home' }
      ]},
    { home:'Kingsberry Tennis', score:'0-3', away:'GREEN NEST - B', venue:'Kingsberry Tennis',
      courts:[
        { ct:1, home:'Kulasekaran J / David Simon', away:'Gunaseel / Vijayaraju G', sets:'2-6, 0-6', win:'away' },
        { ct:2, home:'Samyukta Y / Aashi Manuel Charles', away:'S Vijayarangan / Murali Kumar D', sets:'0-6, 0-6', win:'away' },
        { ct:3, home:'Angel Christina (Tina) / Sandra Christine', away:'Vigneswar / Gopala Krishnan', sets:'0-6, 0-6', win:'away' }
      ]},
    { home:'TENNIGLO - D', score:'3-0', away:'SAI TENNIS - B', venue:'The Tenniglo Academy',
      courts:[
        { ct:1, home:'Shyama Kelath / Rajarathnam', away:'Naveen / Harsith', sets:'6-1, 7-5', win:'home' },
        { ct:2, home:'Arun Kumar A S / Naveen Kumar', away:'Dinesh / Alwin Swaminathan', sets:'6-2, 6-2', win:'home' },
        { ct:3, home:'Arjun Visratej / Pradeep E S', away:'Ridhishree / Kanishkka', sets:'6-3, 6-1', win:'home' }
      ]},
  ]},
  { week:2, date:'31 Jan - 01 Feb 2026', done:true, matches:[
    { home:'Kingsberry Tennis', score:'0-3', away:'SATCHIDANANDA', venue:'Kingsberry Tennis',
      courts:[
        { ct:1, home:'Sandra Christine / Kulasekaran J', away:'G. Prasath / Ashwin Krishna M.R', sets:'1-6, 1-6', win:'away' },
        { ct:2, home:'Samyukta Y / Pani Ramasami', away:'B.R. Viswak / T. Karthick', sets:'4-6, 2-6', win:'away' },
        { ct:3, home:'W/O (Kingsberry)', away:'Theneeshwaran M / G Sendhur', sets:'W/O', win:'away', wo:true }
      ]},
    { home:'TenniMaSh Tots', score:'3-0', away:'S RAILWAY - B', venue:'TenniMaSh Academy',
      courts:[
        { ct:1, home:'Sarankumar Sathasivam / Shivani Sivakumar', away:'Saravanakumar / Sampath Gnanaraja', sets:'6-2, 6-1', win:'home' },
        { ct:2, home:'Adith Balasubramaniam / Mahita Karthik', away:'Sugunan / Vivinraja', sets:'7-5, 6-7, 10-6', win:'home' },
        { ct:3, home:'Juanishbibian C / Pragathishwar Aan', away:'Sasikumar / Louis Paal', sets:'6-3, 6-2', win:'home' }
      ]},
    { home:'SVG Champs', score:'1-2', away:'TENNIGLO - D', venue:'Sreevatsa Club',
      courts:[
        { ct:1, home:'Murugesan M / T Karthikeyan Sudhakar', away:'Shyama Kelath / Rajarathnam', sets:'2-6, 3-6', win:'away' },
        { ct:2, home:'Senthilkumar T / Jeevaraj A', away:'Naveen Kumar / Arun Kumar A S', sets:'0-6, 2-6', win:'away' },
        { ct:3, home:'Abdul Rahiman K / Gnanasekaran S', away:'Pradeep E S / Arjun Visratej', sets:'7-5, 6-1', win:'home' }
      ]},
    { home:'SREEVATSA STARS', score:'3-0', away:'SAI TENNIS - B', venue:'Sreevatsa Club',
      courts:[
        { ct:1, home:'Senthil / Shankar V', away:'Naveen / Dinesh', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'Kishore / Palaniappan', away:'Harsith / Alwin Swaminathan', sets:'6-2, 3-6, 10-4', win:'home' },
        { ct:3, home:'Monish / Chandrasekar', away:'Kanishkka / Abinanth', sets:'6-2, 6-0', win:'home' }
      ]},
    { home:'SNS-C(AS TENNIS)', score:'2-1', away:'GREEN NEST - B', venue:'SNS Tennis Academy',
      courts:[
        { ct:1, home:'Rajesh K / Prabhakaran V', away:'Gunaseel / Vijayaraju G', sets:'6-3, 6-4', win:'home' },
        { ct:2, home:'Pragadeesan T / Neelesh Lingaraj', away:'Vigneswar / Gopala Krishnan', sets:'5-7, 6-4, 10-4', win:'home' },
        { ct:3, home:'Jeganath R / Sai Sankar Mohana Kesavan', away:'S Vijayarangan / Murali Kumar D', sets:'1-6, 3-6', win:'away' }
      ]},
  ]},
  { week:3, date:'07-08 Feb 2026', done:true, matches:[
    { home:'SATCHIDANANDA', score:'3-0', away:'SNS-C(AS TENNIS)', venue:'Satchidananda School',
      courts:[
        { ct:1, home:'G. Prasath / B.R. Viswak', away:'Jaswanth M K / Pragadeesan T', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'T. Karthick / Theneeshwaran M', away:'Rajesh K / Prabhakaran V', sets:'6-2, 6-1', win:'home' },
        { ct:3, home:'S K Nithin / G Sendhur', away:'Sai Sankar Mohana Kesavan / Jeganath R', sets:'6-1, 6-0', win:'home' }
      ]},
    { home:'S RAILWAY - B', score:'3-0', away:'SAI TENNIS - B', venue:'S Railway',
      courts:[
        { ct:1, home:'Sasikumar / Louis Paal', away:'Naveen / Harsith', sets:'6-3, 6-2', win:'home' },
        { ct:2, home:'Saravanakumar / Sampath Gnanaraja', away:'Ridhishree / Kanishkka', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Vivinraja / Sugunan', away:'Abinanth / Alwin Swaminathan', sets:'6-0, 6-0', win:'home' }
      ]},
    { home:'SREEVATSA STARS', score:'3-0', away:'SVG Champs', venue:'Sreevatsa Club',
      courts:[
        { ct:1, home:'Shankar V / Revathi', away:'W/O (SVG Champs)', sets:'W/O', win:'home', wo:true },
        { ct:2, home:'Monish / Palaniappan', away:'Gnanasekaran S / Abdul Rahiman K', sets:'4-6, 6-3, 11-9', win:'home' },
        { ct:3, home:'Kishore / Suryaa', away:'Jeevaraj A / Senthilkumar T', sets:'6-0, 6-0', win:'home' }
      ]},
    { home:'GREEN NEST - B', score:'1-2', away:'TENNIGLO - D', venue:'Green Nest Sports Academy',
      courts:[
        { ct:1, home:'W/O (Green Nest)', away:'Arun Kumar A S / Naveen Kumar', sets:'W/O', win:'away', wo:true },
        { ct:2, home:'Gopala Krishnan / Gunaseel', away:'Arjun Visratej / Thirumalai Nambi', sets:'6-2, 6-0', win:'home' },
        { ct:3, home:'S Vijayarangan / Murali Kumar D', away:'Shyama Kelath / Siddaarth Malay', sets:'1-6, 0-6', win:'away' }
      ]},
    { home:'CBE CLUB - C', score:'2-1', away:'Kingsberry Tennis', venue:'Coimbatore Club',
      courts:[
        { ct:1, home:'Raghuram Murugesan / Varun Ravichandran', away:'Aashi Manuel Charles / Kulasekaran J', sets:'6-2, 6-3', win:'home' },
        { ct:2, home:'Yunus Abbas Vagh / Gaurav Kapoor', away:'Damien Stany / Joseph Stany', sets:'6-2, 6-0', win:'home' },
        { ct:3, home:'Giulia Bosco / Joseph J Chakola', away:'Pani Ramasami / Babu', sets:'4-6, 4-6', win:'away' }
      ]},
  ]},
  { week:4, date:'14-15 Feb 2026', done:true, matches:[
    { home:'TENNIGLO - D', score:'0-3', away:'SATCHIDANANDA', venue:'The Tenniglo Academy',
      courts:[
        { ct:1, home:'Shyama Kelath / Naveen Kumar', away:'T. Karthick / B.R. Viswak', sets:'1-6, 3-6', win:'away' },
        { ct:2, home:'Arjun Visratej / Siddaarth Malay', away:'G. Prasath / Ashwin Krishna M.R', sets:'5-7, 7-5, 8-10', win:'away' },
        { ct:3, home:'Pradeep E S / Rajarathnam', away:'Theneeshwaran M / G Sendhur', sets:'0-6, 6-1, 5-10', win:'away' }
      ]},
    { home:'SREEVATSA STARS', score:'3-0', away:'GREEN NEST - B', venue:'Sreevatsa Club',
      courts:[
        { ct:1, home:'Shankar V / Suryaa', away:'Murali Kumar D / Vijayaraju G', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Monish / Kishore', away:'Vigneswar / Gopala Krishnan', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Palaniappan / Senthil', away:'W/O (Green Nest)', sets:'W/O', win:'home', wo:true }
      ]},
    { home:'SVG Champs', score:'2-1', away:'SAI TENNIS - B', venue:'Sreevatsa Club',
      courts:[
        { ct:1, home:'Gnanasekaran S / Dhivya Kanakabala B', away:'Naveen / Dinesh', sets:'6-1, 6-1', win:'home' },
        { ct:2, home:'Murugesan M / Abdul Rahiman K', away:'Abinanth / Kanishkka', sets:'6-1, 6-3', win:'home' },
        { ct:3, home:'Senthilkumar T / Jeevaraj A', away:'Alwin Swaminathan / Harsith', sets:'6-3, 3-6, 9-11', win:'away' }
      ]},
    { home:'SNS-C(AS TENNIS)', score:'1-2', away:'CBE CLUB - C', venue:'SNS Tennis Academy',
      courts:[
        { ct:1, home:'Pragadeesan T / Rajesh K', away:'Sangeet Bagaria / Joseph J Chakola', sets:'7-6, 7-5', win:'home' },
        { ct:2, home:'Neelesh Lingaraj / Harsha M K', away:'Yunus Abbas Vagh / Gaurav Kapoor', sets:'0-6, 2-6', win:'away' },
        { ct:3, home:'Jaswanth M K / Prabhakaran V', away:'Giulia Bosco / Raghuram Murugesan', sets:'6-3, 4-6, 4-10', win:'away' }
      ]},
    { home:'Kingsberry Tennis', score:'0-3', away:'TenniMaSh Tots', venue:'Kingsberry Tennis',
      courts:[
        { ct:1, home:'Pani Ramasami / Sandra Christine', away:'Juanishbibian C / Adith Balasubramaniam', sets:'6-7, 2-6', win:'away' },
        { ct:2, home:'Angel Christina (Tina) / Samyukta Y', away:'Sarankumar Sathasivam / Varun Satishkumar', sets:'0-6, 0-6', win:'away' },
        { ct:3, home:'W/O (Kingsberry)', away:'Pragathishwar Aan / Shivani Sivakumar', sets:'W/O', win:'away', wo:true }
      ]},
  ]},
  { week:5, date:'21-22 Feb 2026', done:true, matches:[
    { home:'SATCHIDANANDA', score:'3-0', away:'SREEVATSA STARS', venue:'Satchidananda School',
      courts:[
        { ct:1, home:'G. Prasath / B.R. Viswak', away:'Kishore / Abhinnav', sets:'6-0, 6-4', win:'home' },
        { ct:2, home:'T. Karthick / Theneeshwaran M', away:'Shankar V / Revathi', sets:'6-0, 6-2', win:'home' },
        { ct:3, home:'S K Nithin / G Sendhur', away:'Monish / Suryaa', sets:'6-1, 7-5', win:'home' }
      ]},
    { home:'TENNIGLO - D', score:'2-1', away:'CBE CLUB - C', venue:'The Tenniglo Academy',
      courts:[
        { ct:1, home:'Shyama Kelath / Siddaarth Malay', away:'Giulia Bosco / Varun Ravichandran', sets:'6-1, 6-3', win:'home' },
        { ct:2, home:'Arun Kumar A S / Naveen Kumar', away:'Gaurav Kapoor / Yunus Abbas Vagh', sets:'5-7, 3-6', win:'away' },
        { ct:3, home:'Pradeep E S / Rajarathnam', away:'Sara Vivek Khona / Danalakshmi Govindrajann', sets:'6-1, 6-0', win:'home' }
      ]},
    { home:'S RAILWAY - B', score:'2-1', away:'SVG Champs', venue:'S Railway',
      courts:[
        { ct:1, home:'Louis Paal / Sasikumar', away:'Murugesan M / T Karthikeyan Sudhakar', sets:'6-0, 6-1', win:'home' },
        { ct:2, home:'Sugunan / Vivinraja', away:'Senthilkumar T / Jeevaraj A', sets:'6-2, 6-0', win:'home' },
        { ct:3, home:'Sampath Gnanaraja / Saravanakumar', away:'Gnanasekaran S / Abdul Rahiman K', sets:'2-6, 3-6', win:'away' }
      ]},
    { home:'GREEN NEST - B', score:'1-2', away:'SAI TENNIS - B', venue:'Green Nest Sports Academy',
      courts:[
        { ct:1, home:'Vigneswar / Gunaseel', away:'Alwin Swaminathan / Harsith', sets:'6-7, 4-6', win:'away' },
        { ct:2, home:'Murali Kumar D / S Vijayarangan', away:'Naveen / Dinesh', sets:'6-1, 3-6, 6-10', win:'away' },
        { ct:3, home:'Gopala Krishnan / Vijayaraju G', away:'Kanishkka / Ridhishree', sets:'6-1, 6-2', win:'home' }
      ]},
    { home:'TenniMaSh Tots', score:'3-0', away:'SNS-C(AS TENNIS)', venue:'TenniMaSh Academy',
      courts:[
        { ct:1, home:'Sarankumar Sathasivam / Varun Satishkumar', away:'Sai Sankar Mohana Kesavan / Prabhakaran V', sets:'6-0, 6-2', win:'home' },
        { ct:2, home:'Adith Balasubramaniam / Shivani Sivakumar', away:'Pragadeesan T / Rajesh K', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'Pragathishwar Aan / Juanishbibian C', away:'Harsha M K / Jaswanth M K', sets:'6-0, 6-2', win:'home' }
      ]},
  ]},
  { week:6, date:'28 Feb - 01 Mar 2026', done:true, matches:[
    { home:'SAI TENNIS - B', score:'0-3', away:'SATCHIDANANDA', venue:'Sai Tennis Academy',
      courts:[
        { ct:1, home:'Naveen / Dinesh', away:'T. Karthick / B.R. Viswak', sets:'0-6, 0-6', win:'away' },
        { ct:2, home:'Harsith / Kanishkka', away:'G Sendhur / Theneeshwaran M', sets:'3-6, 2-6', win:'away' },
        { ct:3, home:'Abinanth / Ridhishree', away:'G. Prasath / Nithik M.K', sets:'0-6, 2-6', win:'away' }
      ]},
    { home:'TENNIGLO - D', score:'0-3', away:'TenniMaSh Tots', venue:'The Tenniglo Academy',
      courts:[
        { ct:1, home:'Pradeep E S / Thirumalai Nambi', away:'Sarankumar Sathasivam / Shivani Sivakumar', sets:'0-6, 1-6', win:'away' },
        { ct:2, home:'Shyama Kelath / Naveen Kumar', away:'Juanishbibian C / Pragathishwar Aan', sets:'2-6, 1-6', win:'away' },
        { ct:3, home:'Arjun Visratej / Siddaarth Malay', away:'Mahita Karthik / Adith Balasubramaniam', sets:'1-6, 6-7', win:'away' }
      ]},
    { home:'SREEVATSA STARS', score:'2-1', away:'CBE CLUB - C', venue:'Sreevatsa Club',
      courts:[
        { ct:1, home:'Monish / Palaniappan', away:'Raghuram Murugesan / Gaurav Kapoor', sets:'2-6, 2-6', win:'away' },
        { ct:2, home:'Kishore / Senthil', away:'Sangeet Bagaria / Giulia Bosco', sets:'7-5, 6-2', win:'home' },
        { ct:3, home:'Revathi / Shankar V', away:'Sara Vivek Khona / Varun Ravichandran', sets:'6-3, 6-0', win:'home' }
      ]},
    { home:'Kingsberry Tennis', score:'1-2', away:'S RAILWAY - B', venue:'Kingsberry Tennis',
      courts:[
        { ct:1, home:'Angel Christina (Tina) / Aashi Manuel Charles', away:'Vivinraja / Sugunan', sets:'2-6, 1-6', win:'away' },
        { ct:2, home:'Samyukta Y / Pani Ramasami', away:'Louis Paal / Shanmugamsundaram V', sets:'6-0, 6-3', win:'home' },
        { ct:3, home:'Kulasekaran J / David Simon', away:'Sampath Gnanaraja / Saravanakumar', sets:'0-6, 0-6', win:'away' }
      ]},
    { home:'SVG Champs', score:'1-2', away:'GREEN NEST - B', venue:'Sreevatsa Club',
      courts:[
        { ct:1, home:'Gnanasekaran S / Dhivya Kanakabala B', away:'Gunaseel / Gopala Krishnan', sets:'2-6, 1-6', win:'away' },
        { ct:2, home:'Abdul Rahiman K / T Karthikeyan Sudhakar', away:'Vigneswar / Murali Kumar D', sets:'3-6, 4-6', win:'away' },
        { ct:3, home:'Murugesan M / Jeevaraj A', away:'W/O (Green Nest)', sets:'W/O', win:'home', wo:true }
      ]},
  ]},
  { week:7, date:'07-08 Mar 2026', done:true, matches:[
    { home:'SATCHIDANANDA', score:'3-0', away:'SVG Champs', venue:'Satchidananda School',
      courts:[
        { ct:1, home:'T. Karthick / B.R. Viswak', away:'Gnanasekaran S / Abdul Rahiman K', sets:'7-6, 6-2', win:'home' },
        { ct:2, home:'S K Nithin / G Sendhur', away:'Murugesan M / Jeevaraj A', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'G. Prasath / Theneeshwaran M', away:'Dhivya Kanakabala B / T Karthikeyan Sudhakar', sets:'6-1, 6-0', win:'home' }
      ]},
    { home:'TenniMaSh Tots', score:'2-1', away:'SREEVATSA STARS', venue:'TenniMaSh Academy',
      courts:[
        { ct:1, home:'Sarankumar Sathasivam / Shivani Sivakumar', away:'Palaniappan / Ramesh', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Adith Balasubramaniam / Mahita Karthik', away:'Senthil / Kishore', sets:'6-0, 6-1', win:'home' },
        { ct:3, home:'Juanishbibian C / Pragathishwar Aan', away:'Monish / Shankar V', sets:'2-6, 3-6', win:'away' }
      ]},
    { home:'GREEN NEST - B', score:'0-3', away:'S RAILWAY - B', venue:'Green Nest Sports Academy',
      courts:[
        { ct:1, home:'Gopala Krishnan / Gunaseel', away:'Sampath Gnanaraja / Saravanakumar', sets:'5-7, 0-6', win:'away' },
        { ct:2, home:'W/O (Green Nest)', away:'Louis Paal / Sasikumar', sets:'W/O', win:'away', wo:true },
        { ct:3, home:'Vigneswar / Murali Kumar D', away:'Vivinraja / Sugunan', sets:'6-4, 4-6, 9-11', win:'away' }
      ]},
    { home:'SNS-C(AS TENNIS)', score:'3-0', away:'Kingsberry Tennis', venue:'SNS Tennis Academy',
      courts:[
        { ct:1, home:'Pragadeesan T / Rajesh K', away:'Samyukta Y / Kulasekaran J', sets:'6-2, 6-0', win:'home' },
        { ct:2, home:'Harsha M K / Jaswanth M K', away:'Angel Christina (Tina) / Aashi Manuel Charles', sets:'7-5, 6-3', win:'home' },
        { ct:3, home:'Jeganath R / Prabhakaran V', away:'Pani Ramasami / Babu', sets:'7-6, 6-3', win:'home' }
      ]},
    { home:'CBE CLUB - C', score:'2-1', away:'SAI TENNIS - B', venue:'Coimbatore Club',
      courts:[
        { ct:1, home:'Raghuram Murugesan / Saujas Vaibhav Sankar', away:'Harsith / Alwin Swaminathan', sets:'6-1, 6-7, 8-10', win:'away' },
        { ct:2, home:'Yunus Abbas Vagh / Joseph J Chakola', away:'Kanishkka / Ridhishree', sets:'6-0, 6-0', win:'home' },
        { ct:3, home:'Sangeet Bagaria / Giulia Bosco', away:'Naveen / Abinanth', sets:'6-1, 6-2', win:'home' }
      ]},
  ]},
  { week:8, date:'14-15 Mar 2026', done:true, matches:[
    { home:'GREEN NEST - B', score:'0-3', away:'SATCHIDANANDA', venue:'Green Nest Sports Academy',
      courts:[
        { ct:1, home:'Murali Kumar D / S Vijayarangan', away:'B.R. Viswak / Nithik M.K', sets:'0-6, 0-6', win:'away' },
        { ct:2, home:'Gopala Krishnan / Vigneswar', away:'G. Prasath / Theneeshwaran M', sets:'1-6, 1-6', win:'away' },
        { ct:3, home:'Gunaseel / Sujith G', away:'T. Karthick / G Sendhur', sets:'2-6, 0-6', win:'away' }
      ]},
    { home:'SAI TENNIS - B', score:'0-3', away:'TenniMaSh Tots', venue:'Sai Tennis Academy',
      courts:[
        { ct:1, home:'Kevin / Naveen', away:'Sarankumar Sathasivam / Varun Satishkumar', sets:'1-6, 0-6', win:'away' },
        { ct:2, home:'Ridhishree / Abinanth', away:'Pragathishwar Aan / Shivani Sivakumar', sets:'1-6, 0-6', win:'away' },
        { ct:3, home:'Alwin Swaminathan / Harsith', away:'Adith Balasubramaniam / Mahita Karthik', sets:'1-6, 0-6', win:'away' }
      ]},
    { home:'TENNIGLO - D', score:'2-1', away:'Kingsberry Tennis', venue:'The Tenniglo Academy',
      courts:[
        { ct:1, home:'Shyama Kelath / Arun Kumar A S', away:'Pani Ramasami / David Simon', sets:'7-6, 5-7, 5-10', win:'away' },
        { ct:2, home:'Rajarathnam / Pradeep E S', away:'W/O (Kingsberry)', sets:'W/O', win:'home', wo:true },
        { ct:3, home:'Thirumalai Nambi / Siddaarth Malay', away:'W/O (Kingsberry)', sets:'W/O', win:'home', wo:true }
      ]},
    { home:'S RAILWAY - B', score:'3-0', away:'SNS-C(AS TENNIS)', venue:'S Railway',
      courts:[
        { ct:1, home:'Saravanakumar / Sampath Gnanaraja', away:'Rajesh K / Prabhakaran V', sets:'4-6, 7-5, 11-9', win:'home' },
        { ct:2, home:'Sugunan / Murugesan', away:'Harsha M K / Jaswanth M K', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'Sasikumar / Louis Paal', away:'Jeganath R / Sai Sankar Mohana Kesavan', sets:'6-2, 6-4', win:'home' }
      ]},
    { home:'SVG Champs', score:'1-2', away:'CBE CLUB - C', venue:'Sreevatsa Club',
      courts:[
        { ct:1, home:'Gnanasekaran S / Abdul Rahiman K', away:'Raghuram Murugesan / Varun Ravichandran', sets:'6-2, 6-2', win:'home' },
        { ct:2, home:'Murugesan M / T Karthikeyan Sudhakar', away:'Giulia Bosco / Joseph J Chakola', sets:'0-6, 1-6', win:'away' },
        { ct:3, home:'Jeevaraj A / Senthilkumar T', away:'Yunus Abbas Vagh / Sangeet Bagaria', sets:'4-6, 2-6', win:'away' }
      ]},
  ]},
  { week:9, date:'21-22 Mar 2026', done:true, matches:[
    { home:'SATCHIDANANDA', score:'3-0', away:'S RAILWAY - B', venue:'Satchidananda School',
      courts:[
        { ct:1, home:'T. Karthick / Theneeshwaran M', away:'Saravanakumar / Sugunan', sets:'6-4, 6-7, 1-0ret', win:'home' },
        { ct:2, home:'G. Prasath / B.R. Viswak', away:'Louis Paal / Sasikumar', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'S K Nithin / G Sendhur', away:'Sampath Gnanaraja / Vivinraja', sets:'6-3, 6-3', win:'home' }
      ]},
    { home:'TenniMaSh Tots', score:'3-0', away:'SVG Champs', venue:'TenniMaSh Academy',
      courts:[
        { ct:1, home:'Adith Balasubramaniam / Mahita Karthik', away:'Senthilkumar T / Murugesan M', sets:'6-1, 6-2', win:'home' },
        { ct:2, home:'Juanishbibian C / Shivani Sivakumar', away:'Abdul Rahiman K / Gnanasekaran S', sets:'6-1, 6-1', win:'home' },
        { ct:3, home:'Sarankumar Sathasivam / Varun Satishkumar', away:'Jeevaraj A / T Karthikeyan Sudhakar', sets:'6-0, 6-0', win:'home' }
      ]},
    { home:'SREEVATSA STARS', score:'3-0', away:'Kingsberry Tennis', venue:'Sreevatsa Club',
      courts:[
        { ct:1, home:'Ramesh / Shankar V', away:'Angel Christina (Tina) / Aashi Manuel Charles', sets:'6-0, 6-0', win:'home' },
        { ct:2, home:'Monish / Palaniappan', away:'Pani Ramasami / Babu', sets:'6-3, 6-3', win:'home' },
        { ct:3, home:'Revathi / Suryaa', away:'Samyukta Y / Sandra Christine', sets:'6-1, 6-0', win:'home' }
      ]},
    { home:'SNS-C(AS TENNIS)', score:'2-1', away:'TENNIGLO - D', venue:'SNS Tennis Academy',
      courts:[
        { ct:1, home:'Sai Sankar Mohana Kesavan / Neelesh Lingaraj', away:'Naveen Kumar / Rajarathnam', sets:'6-4, 7-6', win:'home' },
        { ct:2, home:'Harsha M K / Jaswanth M K', away:'Shyama Kelath / Thirumalai Nambi', sets:'3-6, 2-6', win:'away' },
        { ct:3, home:'Pragadeesan T / Rajesh K', away:'Arjun Visratej / Siddaarth Malay', sets:'6-0, 6-2', win:'home' }
      ]},
    { home:'CBE CLUB - C', score:'3-0', away:'GREEN NEST - B', venue:'Coimbatore Club',
      courts:[
        { ct:1, home:'Raghuram Murugesan / Sangeet Bagaria', away:'Vigneswar / Vijayaraju G', sets:'6-2, 7-5', win:'home' },
        { ct:2, home:'Yunus Abbas Vagh / Gaurav Kapoor', away:'Murali Kumar D / Gopala Krishnan', sets:'6-7, 6-1, 10-5', win:'home' },
        { ct:3, home:'Giulia Bosco / Joseph J Chakola', away:'W/O (GREEN NEST - B)', sets:'W/O', win:'home', wo:true }
      ]},
  ]},
  { week:10, date:'28-29 Mar 2026', done:false, matches:[
    { home:'SATCHIDANANDA', score:null, away:'CBE CLUB - C', venue:'Satchidananda School', courts:[] },
    { home:'GREEN NEST - B', score:null, away:'TenniMaSh Tots', venue:'Green Nest Sports Academy', courts:[] },
    { home:'S RAILWAY - B', score:null, away:'TENNIGLO - D', venue:'S Railway', courts:[] },
    { home:'SAI TENNIS - B', score:null, away:'Kingsberry Tennis', venue:'Sai Tennis Academy', courts:[] },
    { home:'SNS-C(AS TENNIS)', score:'0-3', away:'SREEVATSA STARS', venue:'SNS Tennis Academy',
      courts:[
        { ct:1, home:'Harsha M K / Jaswanth M K', away:'Senthil / Suryaa', sets:'1-6, 5-7', win:'away' },
        { ct:2, home:'Jeganath R / Rajesh K', away:'Monish / Chandrasekar', sets:'3-6, 2-6', win:'away' },
        { ct:3, home:'Sai Sankar Mohana Kesavan / Prabhakaran V', away:'Ramesh / Shankar V', sets:'4-6, 1-6', win:'away' }
      ]},
  ]},
  { week:11, date:'04-05 Apr 2026', done:false, title:'Title Decider Week', matches:[
    { home:'TenniMaSh Tots', score:null, away:'SATCHIDANANDA', venue:'TenniMaSh Academy', titleMatch:true, courts:[] },
    { home:'SREEVATSA STARS', score:null, away:'TENNIGLO - D', venue:'Sreevatsa Club', courts:[] },
    { home:'Kingsberry Tennis', score:null, away:'SVG Champs', venue:'Kingsberry Tennis', courts:[] },
    { home:'CBE CLUB - C', score:null, away:'S RAILWAY - B', venue:'Coimbatore Club', courts:[] },
    { home:'SAI TENNIS - B', score:null, away:'SNS-C(AS TENNIS)', venue:'Sai Tennis Academy', courts:[] },
  ]},
];

const DIV_I_PARTNERS = {
  'Danalakshmi Govindrajann': [['Sara Vivek Khona',1]],
  'Gaurav Kapoor': [['Yunus Abbas Vagh',4],['Giulia Bosco',1],['Raghuram Murugesan',1]],
  'Giulia Bosco': [['Joseph J Chakola',3],['Sangeet Bagaria',2],['Gaurav Kapoor',1],['Raghuram Murugesan',1],['Varun Ravichandran',1]],
  'Joseph J Chakola': [['Giulia Bosco',3],['Yunus Abbas Vagh',2],['Sangeet Bagaria',1]],
  'Raghuram Murugesan': [['Varun Ravichandran',3],['Giulia Bosco',1],['Gaurav Kapoor',1],['Saujas Vaibhav Sankar',1],['Sangeet Bagaria',1]],
  'Sangeet Bagaria': [['Giulia Bosco',2],['Joseph J Chakola',1],['Yunus Abbas Vagh',1],['Raghuram Murugesan',1]],
  'Sara Vivek Khona': [['Danalakshmi Govindrajann',1],['Varun Ravichandran',1]],
  'Saujas Vaibhav Sankar': [['Raghuram Murugesan',1]],
  'Varun Ravichandran': [['Raghuram Murugesan',3],['Giulia Bosco',1],['Sara Vivek Khona',1]],
  'Yunus Abbas Vagh': [['Gaurav Kapoor',4],['Joseph J Chakola',2],['Sangeet Bagaria',1]],
  'Abdul Rahiman K': [['Gnanasekaran S',7],['Murugesan M',1],['T Karthikeyan Sudhakar',1]],
  'Dhivya Kanakabala B': [['Gnanasekaran S',2],['Natarajan',1],['T Karthikeyan Sudhakar',1]],
  'Gnanasekaran S': [['Abdul Rahiman K',7],['Dhivya Kanakabala B',2]],
  'Jeevaraj A': [['Senthilkumar T',6],['Murugesan M',2],['T Karthikeyan Sudhakar',1]],
  'Murugesan M': [['T Karthikeyan Sudhakar',3],['Jeevaraj A',2],['Abdul Rahiman K',1],['Senthilkumar T',1]],
  'Natarajan': [['Dhivya Kanakabala B',1]],
  'Senthilkumar T': [['Jeevaraj A',6],['Murugesan M',1]],
  'T Karthikeyan Sudhakar': [['Murugesan M',3],['Abdul Rahiman K',1],['Dhivya Kanakabala B',1],['Jeevaraj A',1]],
  'Gopala Krishnan': [['Vigneswar',4],['Gunaseel',3],['Vijayaraju G',1],['Murali Kumar D',1]],
  'Gunaseel': [['Gopala Krishnan',3],['Vijayaraju G',2],['Vigneswar',1],['Sujith G',1]],
  'Murali Kumar D': [['S Vijayarangan',5],['Vigneswar',2],['Vijayaraju G',1],['Gopala Krishnan',1]],
  'S Vijayarangan': [['Murali Kumar D',5]],
  'Sujith G': [['Gunaseel',1]],
  'Vigneswar': [['Gopala Krishnan',4],['Murali Kumar D',2],['Gunaseel',1],['Vijayaraju G',1]],
  'Vijayaraju G': [['Gunaseel',2],['Murali Kumar D',1],['Gopala Krishnan',1],['Vigneswar',1]],
  'Aashi Manuel Charles': [['Angel Christina (Tina)',3],['Samyukta Y',1],['Kulasekaran J',1]],
  'Angel Christina (Tina)': [['Aashi Manuel Charles',3],['Sandra Christine',1],['Samyukta Y',1]],
  'Babu': [['Pani Ramasami',3]],
  'Damien Stany': [['Joseph Stany',1]],
  'David Simon': [['Kulasekaran J',2],['Pani Ramasami',1]],
  'Joseph Stany': [['Damien Stany',1]],
  'Kulasekaran J': [['David Simon',2],['Sandra Christine',1],['Aashi Manuel Charles',1],['Samyukta Y',1]],
  'Pani Ramasami': [['Babu',3],['Samyukta Y',2],['Sandra Christine',1],['David Simon',1]],
  'Samyukta Y': [['Pani Ramasami',2],['Aashi Manuel Charles',1],['Angel Christina (Tina)',1],['Kulasekaran J',1],['Sandra Christine',1]],
  'Sandra Christine': [['Angel Christina (Tina)',1],['Kulasekaran J',1],['Pani Ramasami',1],['Samyukta Y',1]],
  'Louis Paal': [['Sasikumar',7],['Shanmugamsundaram V',1]],
  'Murugesan': [['Sugunan',1]],
  'Sampath Gnanaraja': [['Saravanakumar',7],['Vivinraja',1]],
  'Saravanakumar': [['Sampath Gnanaraja',7],['Sugunan',1]],
  'Sasikumar': [['Louis Paal',7]],
  'Shanmugamsundaram V': [['Louis Paal',1]],
  'Sugunan': [['Vivinraja',6],['Murugesan',1],['Saravanakumar',1]],
  'Vivinraja': [['Sugunan',6],['Sampath Gnanaraja',1]],
  'Abinanth': [['Kanishkka',2],['Ridhishree',2],['Alwin Swaminathan',1],['Naveen',1]],
  'Alwin Swaminathan': [['Harsith',5],['Dinesh',1],['Abinanth',1]],
  'Dinesh': [['Naveen',4],['Alwin Swaminathan',1]],
  'Harsith': [['Alwin Swaminathan',5],['Naveen',2],['Kanishkka',1]],
  'Kanishkka': [['Ridhishree',4],['Abinanth',2],['Harsith',1]],
  'Kevin': [['Naveen',1]],
  'Naveen': [['Dinesh',4],['Harsith',2],['Abinanth',1],['Kevin',1]],
  'Ridhishree': [['Kanishkka',4],['Abinanth',2]],
  'Ashwin Krishna M.R': [['G. Prasath',2]],
  'B.R. Viswak': [['T. Karthick',4],['G. Prasath',3],['Nithik M.K',1]],
  'G Sendhur': [['S K Nithin',4],['Theneeshwaran M',3],['T. Karthick',1]],
  'G. Prasath': [['B.R. Viswak',3],['Ashwin Krishna M.R',2],['Theneeshwaran M',2],['Nithik M.K',1]],
  'Nithik M.K': [['G. Prasath',1],['B.R. Viswak',1]],
  'S K Nithin': [['G Sendhur',4]],
  'T. Karthick': [['B.R. Viswak',4],['Theneeshwaran M',3],['G Sendhur',1]],
  'Theneeshwaran M': [['G Sendhur',3],['T. Karthick',3],['G. Prasath',2]],
  'Harsha M K': [['Jaswanth M K',4],['Pragadeesan T',1],['Neelesh Lingaraj',1]],
  'Jaswanth M K': [['Harsha M K',4],['Rajesh K',1],['Pragadeesan T',1],['Prabhakaran V',1]],
  'Jeganath R': [['Sai Sankar Mohana Kesavan',3],['Prabhakaran V',1]],
  'Neelesh Lingaraj': [['Prabhakaran V',1],['Pragadeesan T',1],['Harsha M K',1],['Sai Sankar Mohana Kesavan',1]],
  'Prabhakaran V': [['Rajesh K',3],['Neelesh Lingaraj',1],['Jaswanth M K',1],['Sai Sankar Mohana Kesavan',1],['Jeganath R',1]],
  'Pragadeesan T': [['Rajesh K',4],['Harsha M K',1],['Neelesh Lingaraj',1],['Jaswanth M K',1]],
  'Rajesh K': [['Pragadeesan T',4],['Prabhakaran V',3],['Jaswanth M K',1]],
  'Sai Sankar Mohana Kesavan': [['Jeganath R',3],['Prabhakaran V',1],['Neelesh Lingaraj',1]],
  'Abhinnav': [['Kishore',1]],
  'Chandrasekar': [['Monish',1]],
  'Kishore': [['Senthil',3],['Palaniappan',1],['Suryaa',1],['Monish',1],['Abhinnav',1]],
  'Monish': [['Palaniappan',3],['Suryaa',2],['Chandrasekar',1],['Kishore',1],['Shankar V',1]],
  'Palaniappan': [['Monish',3],['Kishore',1],['Senthil',1],['Ramesh',1]],
  'Ramesh': [['Palaniappan',1],['Shankar V',1]],
  'Revathi': [['Shankar V',4],['Suryaa',1]],
  'Senthil': [['Kishore',3],['Shankar V',1],['Palaniappan',1]],
  'Shankar V': [['Revathi',4],['Senthil',1],['Suryaa',1],['Monish',1],['Ramesh',1]],
  'Suryaa': [['Monish',2],['Kishore',1],['Shankar V',1],['Revathi',1]],
  'Arjun Visratej': [['Siddaarth Malay',3],['Pradeep E S',2],['Thirumalai Nambi',1]],
  'Arun Kumar A S': [['Naveen Kumar',4],['Shyama Kelath',1]],
  'Naveen Kumar': [['Arun Kumar A S',4],['Shyama Kelath',2],['Rajarathnam',1]],
  'Pradeep E S': [['Rajarathnam',3],['Arjun Visratej',2],['Thirumalai Nambi',1]],
  'Rajarathnam': [['Pradeep E S',3],['Shyama Kelath',2],['Naveen Kumar',1]],
  'Shyama Kelath': [['Rajarathnam',2],['Siddaarth Malay',2],['Naveen Kumar',2],['Arun Kumar A S',1],['Thirumalai Nambi',1]],
  'Siddaarth Malay': [['Arjun Visratej',3],['Shyama Kelath',2],['Thirumalai Nambi',1]],
  'Thirumalai Nambi': [['Arjun Visratej',1],['Pradeep E S',1],['Siddaarth Malay',1],['Shyama Kelath',1]],
  'Adith Balasubramaniam': [['Mahita Karthik',6],['Juanishbibian C',1],['Shivani Sivakumar',1]],
  'Juanishbibian C': [['Pragathishwar Aan',5],['Adith Balasubramaniam',1],['Shivani Sivakumar',1]],
  'Mahita Karthik': [['Adith Balasubramaniam',6]],
  'Pragathishwar Aan': [['Juanishbibian C',5],['Shivani Sivakumar',2]],
  'Sarankumar Sathasivam': [['Shivani Sivakumar',4],['Varun Satishkumar',4]],
  'Shivani Sivakumar': [['Sarankumar Sathasivam',4],['Pragathishwar Aan',2],['Adith Balasubramaniam',1],['Juanishbibian C',1]],
  'Varun Satishkumar': [['Sarankumar Sathasivam',4]]
};

const DIV_I_TEAM_INFO = {
  SATCH:  { wosGiven:0, weeksPlayed:8 },
  TTOTS:  { wosGiven:0, weeksPlayed:8 },
  STARS:  { wosGiven:0, weeksPlayed:8 },
  TGLO:   { wosGiven:0, weeksPlayed:8 },
  RAIL:   { wosGiven:0, weeksPlayed:8 },
  GNEST:  { wosGiven:5, weeksPlayed:9 },
  CBE:    { wosGiven:0, weeksPlayed:8 },
  CHAMPS: { wosGiven:1, weeksPlayed:9 },
  SNS:    { wosGiven:0, weeksPlayed:8 },
  SAI:    { wosGiven:0, weeksPlayed:8 },
  KING:   { wosGiven:4, weeksPlayed:8 },
};

const DIV_I_PROJ_BREAKDOWN = [
  {
    short:'SATCH', full:'SATCHIDANANDA', current:24,
    fixtures:[
      { wk:10, opp:'CBE CLUB - C',        oppShort:'CBE',   venue:'H', projPts:2.8, min:2, max:3,
        note:'Home vs CBE (5W-3L, 13 pts). SATCH unbeaten at home — CBE unlikely to trouble. Min: CBE steal 1 court; Max: SATCH sweep 3-0.' },
      { wk:11, opp:'TenniMaSh Tots',      oppShort:'TTOTS', venue:'A', projPts:1.5, min:0, max:3,
        note:'TITLE DECIDER. Away at TTOTS (8W-0L, 23 pts). Two unbeaten teams — TTOTS home edge makes this 50/50. Full range possible.' },
    ]
  },
  {
    short:'TTOTS', full:'TenniMaSh Tots', current:23,
    fixtures:[
      { wk:10, opp:'GREEN NEST - B',      oppShort:'GNEST', venue:'A', projPts:2.5, min:2, max:3,
        note:'Away at GNEST (2W-7L, 8 pts). TTOTS heavily favoured. Min: GNEST steal 1 court; Max: TTOTS sweep.' },
      { wk:11, opp:'SATCHIDANANDA',       oppShort:'SATCH', venue:'H', projPts:1.5, min:0, max:3,
        note:'TITLE DECIDER. Home vs SATCH (8W-0L, 24 pts). Two unbeaten teams — home court gives TTOTS a slight edge. Full range possible.' },
    ]
  },
  {
    short:'STARS', full:'SREEVATSA STARS', current:17,
    fixtures:[
      { wk:10, opp:'SNS-C(AS TENNIS)',    oppShort:'SNS',  venue:'A', projPts:2.0, min:1, max:3,
        note:'Away at SNS (3W-5L, 9 pts). SNS improved with Wk9 win — competitive away fixture. Min: SNS steal 2 courts; Max: STARS sweep.' },
      { wk:11, opp:'TENNIGLO - D',        oppShort:'TGLO', venue:'H', projPts:2.0, min:1, max:3,
        note:'Home vs TGLO (5W-3L, 12 pts). STARS have edge at home. Min: TGLO steal 2 courts; Max: STARS 3-0.' },
    ]
  },
  {
    short:'RAIL', full:'S RAILWAY - B', current:14,
    fixtures:[
      { wk:10, opp:'TENNIGLO - D',        oppShort:'TGLO', venue:'H', projPts:2.0, min:1, max:3,
        note:'Home vs TGLO (5W-3L, 12 pts). Home advantage key — RAIL need a strong win to secure 4th. Min: TGLO steal 2 courts; Max: RAIL 3-0.' },
      { wk:11, opp:'CBE CLUB - C',        oppShort:'CBE',  venue:'A', projPts:1.5, min:0, max:3,
        note:'Away at CBE (5W-3L, 13 pts). CBE on form after 3-0 Wk9 win — evenly matched away fixture.' },
    ]
  },
  {
    short:'CBE', full:'CBE CLUB - C', current:13,
    fixtures:[
      { wk:10, opp:'SATCHIDANANDA',       oppShort:'SATCH', venue:'A', projPts:0.5, min:0, max:1,
        note:'Away at SATCH (8W-0L, 24 pts). Near-certain loss. Min: 0; Max: CBE steal 1 court.' },
      { wk:11, opp:'S RAILWAY - B',       oppShort:'RAIL',  venue:'H', projPts:1.5, min:0, max:3,
        note:'Home vs RAIL (5W-3L, 14 pts). RAIL stronger but CBE has home edge. Could go either way.' },
    ]
  },
  {
    short:'TGLO', full:'TENNIGLO - D', current:12,
    fixtures:[
      { wk:10, opp:'S RAILWAY - B',       oppShort:'RAIL', venue:'A', projPts:1.0, min:0, max:3,
        note:'Away at RAIL (5W-3L, 14 pts). RAIL at home are strong — TGLO need to bounce back. Min: RAIL sweep; Max: TGLO upset.' },
      { wk:11, opp:'SREEVATSA STARS',     oppShort:'STARS',venue:'A', projPts:1.0, min:0, max:3,
        note:'Away at STARS (6W-2L, 17 pts). Tough finish — STARS at home are formidable.' },
    ]
  },
  {
    short:'SNS', full:'SNS-C(AS TENNIS)', current:9,
    fixtures:[
      { wk:10, opp:'SREEVATSA STARS',     oppShort:'STARS', venue:'H', projPts:1.0, min:0, max:2,
        note:'Home vs STARS (6W-2L, 17 pts). STARS much stronger — SNS need home court magic. Min: STARS sweep; Max: SNS steal 2 courts.' },
      { wk:11, opp:'SAI TENNIS - B',      oppShort:'SAI',   venue:'A', projPts:2.5, min:1, max:3,
        note:'Away at SAI (1W-7L, 4 pts). SAI very weak — SNS strong favourite. Min: SAI steal 1 court; Max: SNS sweep.' },
    ]
  },
  {
    short:'CHAMPS', full:'SVG Champs', current:8,
    fixtures:[
      { wk:10, opp:'REST WEEK',            oppShort:'—',      venue:'—', projPts:0.0, min:0, max:0,
        note:'Rest week — no match played.' },
      { wk:11, opp:'Kingsberry Tennis',   oppShort:'KING',  venue:'A', projPts:2.0, min:0, max:3,
        note:'Away at KING (0W-8L). CHAMPS should be favourites but KING playing at home. Min: KING upset; Max: CHAMPS sweep.' },
    ]
  },
  {
    short:'GNEST', full:'GREEN NEST - B', current:8,
    fixtures:[
      { wk:10, opp:'TenniMaSh Tots',      oppShort:'TTOTS', venue:'H', projPts:0.5, min:0, max:1,
        note:'Home vs TTOTS (8W-0L, 23 pts). TTOTS unbeaten — near-certain loss. Max: GNEST steal 1 court.' },
      { wk:11, opp:'REST WEEK',            oppShort:'—',      venue:'—', projPts:0.0, min:0, max:0,
        note:'Rest week — no match played.' },
    ]
  },
  {
    short:'SAI', full:'SAI TENNIS - B', current:4,
    fixtures:[
      { wk:10, opp:'Kingsberry Tennis',   oppShort:'KING',  venue:'H', projPts:2.0, min:1, max:3,
        note:'Home vs KING (0W-8L). Bottom-two clash — SAI home advantage gives the edge. Min: KING steal 2 courts; Max: SAI sweep.' },
      { wk:11, opp:'SNS-C(AS TENNIS)',    oppShort:'SNS',   venue:'H', projPts:0.5, min:0, max:3,
        note:'Home vs SNS (3W-5L, 9 pts). SNS improving — tough final match for SAI.' },
    ]
  },
  {
    short:'KING', full:'Kingsberry Tennis', current:3,
    fixtures:[
      { wk:10, opp:'SAI TENNIS - B',      oppShort:'SAI',   venue:'A', projPts:1.0, min:0, max:3,
        note:'Away at SAI (1W-7L). Bottom-two clash — KING\'s best remaining chance for a first win. Full range possible.' },
      { wk:11, opp:'SVG Champs',          oppShort:'CHAMPS',venue:'H', projPts:1.0, min:0, max:3,
        note:'Home vs CHAMPS (2W-7L). Home court could help — KING need a final push. Min: CHAMPS sweep; Max: KING upset 3-0.' },
    ]
  },
];

