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
  { rank:1,  short:'SATCH',  full:'SATCHIDANANDA',   pts:21, played:7, w:7, l:0, setsW:42, setsL:2,  gamesW:249, gamesL:70  },
  { rank:2,  short:'TTOTS',  full:'TenniMaSh Tots',  pts:20, played:7, w:7, l:0, setsW:40, setsL:4,  gamesW:231, gamesL:79  },
  { rank:3,  short:'STARS',  full:'SREEVATSA STARS', pts:14, played:7, w:5, l:2, setsW:29, setsL:17, gamesW:188, gamesL:127 },
  { rank:4,  short:'RAIL',   full:'S RAILWAY - B',   pts:14, played:7, w:5, l:2, setsW:29, setsL:17, gamesW:177, gamesL:131 },
  { rank:5,  short:'TGLO',   full:'TENNIGLO - D',    pts:11, played:7, w:5, l:2, setsW:21, setsL:19, gamesW:165, gamesL:140 },
  { rank:6,  short:'CBE',    full:'CBE CLUB - C',    pts:10, played:7, w:4, l:3, setsW:22, setsL:23, gamesW:186, gamesL:173 },
  { rank:7,  short:'GNEST',  full:'GREEN NEST - B',  pts:8,  played:8, w:2, l:6, setsW:18, setsL:26, gamesW:134, gamesL:172 },
  { rank:8,  short:'CHAMPS', full:'SVG Champs',      pts:8,  played:8, w:2, l:6, setsW:18, setsL:33, gamesW:157, gamesL:228 },
  { rank:9,  short:'SNS',    full:'SNS-C(AS TENNIS)',pts:7,  played:7, w:2, l:5, setsW:17, setsL:29, gamesW:162, gamesL:227 },
  { rank:10, short:'SAI',    full:'SAI TENNIS - B',  pts:4,  played:8, w:1, l:7, setsW:9,  setsL:43, gamesW:89,  gamesL:260 },
  { rank:11, short:'KING',   full:'Kingsberry Tennis',pts:3, played:7, w:0, l:7, setsW:6,  setsL:36, gamesW:88,  gamesL:218 }
];

const DIV_I_PROJECTIONS = [
  { rank:1,  short:'SATCH',  full:'SATCHIDANANDA',    current:21, expected:4.4,  projected:25.4, min:null, max:30 },
  { rank:2,  short:'TTOTS',  full:'TenniMaSh Tots',   current:20, expected:5.5,  projected:25.5, min:null, max:29 },
  { rank:3,  short:'STARS',  full:'SREEVATSA STARS',  current:14, expected:7.5,  projected:21.5, min:20,   max:23 },
  { rank:4,  short:'RAIL',   full:'S RAILWAY - B',    current:14, expected:4.5,  projected:18.5, min:17,   max:23 },
  { rank:5,  short:'TGLO',   full:'TENNIGLO - D',     current:11, expected:7.0,  projected:18.0, min:14,   max:20 },
  { rank:6,  short:'CBE',    full:'CBE CLUB - C',     current:10, expected:6.0,  projected:16.0, min:13,   max:19 },
  { rank:7,  short:'SNS',    full:'SNS-C(AS TENNIS)', current:7,  expected:4.0,  projected:11.0, min:null, max:16 },
  { rank:8,  short:'GNEST',  full:'GREEN NEST - B',   current:8,  expected:3.0,  projected:11.0, min:null, max:11 },
  { rank:9,  short:'CHAMPS', full:'SVG Champs',       current:8,  expected:2.6,  projected:10.6, min:8,    max:11 },
  { rank:10, short:'SAI',    full:'SAI TENNIS - B',   current:4,  expected:2.6,  projected:6.6,  min:null, max:10 },
  { rank:11, short:'KING',   full:'Kingsberry Tennis',current:3,  expected:2.0,  projected:5.0,  min:null, max:12 }
];

const DIV_I_KEY_PAIRS = [
  { pair:'T.Karthick / B.R.Viswak', team:'SATCH', apps:5, wins:5 },
  { pair:'Sarankumar / Shivani Sivakumar', team:'TTOTS', apps:6, wins:6 },
  { pair:'G.Prasath / Theneeshwaran M', team:'SATCH', apps:5, wins:5 },
  { pair:'S K Nithin / G Sendhur', team:'SATCH', apps:4, wins:4 },
  { pair:'Adith Balasubramaniam / Mahita Karthik', team:'TTOTS', apps:5, wins:5 },
  { pair:'Pragathishwar / Juanishbibian', team:'TTOTS', apps:4, wins:4 },
  { pair:'Sampath Gnanaraja / Saravanakumar', team:'RAIL', apps:6, wins:4 },
  { pair:'Monish / Kishore', team:'STARS', apps:4, wins:3 },
  { pair:'Raghuram Murugesan / Gaurav Kapoor', team:'CBE', apps:4, wins:3 },
  { pair:'Pragadeesan T / Rajesh K', team:'SNS', apps:4, wins:2 },
  { pair:'Shyama Kelath / Siddaarth Malay', team:'TGLO', apps:3, wins:2 }
];

const DIV_I_PLAYERS = [
  { name:'T. Karthick',           team:'SATCH', gender:'M', age:35, role:'Captain', gamesPlayed:7, wins:7 },
  { name:'G. Prasath',            team:'SATCH', gender:'M', age:29, role:'Player',  gamesPlayed:7, wins:7 },
  { name:'Anika B. Sathish',      team:'SATCH', gender:'F', age:13, role:'Player',  gamesPlayed:null, wins:null },
  { name:'Thakshana B',           team:'SATCH', gender:'F', age:11, role:'Player',  gamesPlayed:null, wins:null },
  { name:'Diya Senthil',          team:'SATCH', gender:'F', age:13, role:'Player',  gamesPlayed:null, wins:null },
  { name:'Sasritha G',            team:'SATCH', gender:'F', age:13, role:'Player',  gamesPlayed:null, wins:null },
  { name:'G Sendhur',             team:'SATCH', gender:'M', age:16, role:'Player',  gamesPlayed:7, wins:7 },
  { name:'B.R. Viswak',           team:'SATCH', gender:'M', age:13, role:'Player',  gamesPlayed:7, wins:7 },
  { name:'Ashwin Krishna M.R',    team:'SATCH', gender:'M', age:12, role:'Player',  gamesPlayed:2, wins:2 },
  { name:'Theneeshwaran M',       team:'SATCH', gender:'M', age:13, role:'Player',  gamesPlayed:7, wins:7 },
  { name:'Nithik M.K',            team:'SATCH', gender:'M', age:12, role:'Player',  gamesPlayed:2, wins:2 },
  { name:'S K Nithin',            team:'SATCH', gender:'M', age:16, role:'Player',  gamesPlayed:3, wins:3 },
  { name:'Sarankumar Sathasivam', team:'TTOTS', gender:'M', age:31, role:'Captain', gamesPlayed:7, wins:7 },
  { name:'Sivakumar Eswaran',     team:'TTOTS', gender:'M', age:50, role:'Player',  gamesPlayed:null, wins:null },
  { name:'Mahita Karthik',        team:'TTOTS', gender:'F', age:14, role:'Player',  gamesPlayed:5, wins:5 },
  { name:'Pragathishwar Aan',     team:'TTOTS', gender:'M', age:21, role:'Player',  gamesPlayed:7, wins:6 },
  { name:'Adith Balasubramaniam', team:'TTOTS', gender:'M', age:16, role:'Player',  gamesPlayed:7, wins:7 },
  { name:'Varun Satishkumar',     team:'TTOTS', gender:'M', age:11, role:'Player',  gamesPlayed:3, wins:3 },
  { name:'Shivani Sivakumar',     team:'TTOTS', gender:'F', age:14, role:'Player',  gamesPlayed:7, wins:7 },
  { name:'Juanishbibian C',       team:'TTOTS', gender:'M', age:16, role:'Player',  gamesPlayed:6, wins:5 },
  { name:'Monish',                team:'STARS', gender:'M', age:40, role:'Captain', gamesPlayed:7, wins:5 },
  { name:'Kishore',               team:'STARS', gender:'M', age:41, role:'Player',  gamesPlayed:7, wins:5 },
  { name:'Ramesh',                team:'STARS', gender:'M', age:58, role:'Player',  gamesPlayed:1, wins:0 },
  { name:'Palaniappan',           team:'STARS', gender:'M', age:42, role:'Player',  gamesPlayed:5, wins:3 },
  { name:'Chandrasekar',          team:'STARS', gender:'M', age:59, role:'Player',  gamesPlayed:1, wins:1 },
  { name:'Suryaa',                team:'STARS', gender:'M', age:14, role:'Player',  gamesPlayed:4, wins:3 },
  { name:'Harin',                 team:'STARS', gender:'M', age:15, role:'Player',  gamesPlayed:null, wins:null },
  { name:'Revathi',               team:'STARS', gender:'F', age:40, role:'Player',  gamesPlayed:4, wins:2 },
  { name:'Senthil',               team:'STARS', gender:'M', age:54, role:'Player',  gamesPlayed:5, wins:4 },
  { name:'Abhinnav',              team:'STARS', gender:'M', age:24, role:'Player',  gamesPlayed:1, wins:0 },
  { name:'Shankar V',             team:'STARS', gender:'M', age:65, role:'Player',  gamesPlayed:7, wins:5 },
  { name:'Shyama Kelath',         team:'TGLO',  gender:'F', age:36, role:'Captain', gamesPlayed:7, wins:4 },
  { name:'Thirumalai Nambi',      team:'TGLO',  gender:'M', age:41, role:'Player',  gamesPlayed:3, wins:2 },
  { name:'Rajarathnam',           team:'TGLO',  gender:'M', age:42, role:'Player',  gamesPlayed:5, wins:4 },
  { name:'Arun Kumar A S',        team:'TGLO',  gender:'M', age:38, role:'Player',  gamesPlayed:5, wins:3 },
  { name:'Pradeep E S',           team:'TGLO',  gender:'M', age:41, role:'Player',  gamesPlayed:6, wins:3 },
  { name:'Naveen Kumar',          team:'TGLO',  gender:'M', age:29, role:'Player',  gamesPlayed:6, wins:3 },
  { name:'Arjun Visratej',        team:'TGLO',  gender:'M', age:29, role:'Player',  gamesPlayed:5, wins:1 },
  { name:'Siddaarth Malay',       team:'TGLO',  gender:'M', age:29, role:'Player',  gamesPlayed:5, wins:3 },
  { name:'Sampath Gnanaraja',     team:'RAIL',  gender:'M', age:53, role:'Captain', gamesPlayed:7, wins:4 },
  { name:'Saravanakumar',         team:'RAIL',  gender:'M', age:37, role:'Player',  gamesPlayed:7, wins:4 },
  { name:'Vivinraja',             team:'RAIL',  gender:'M', age:20, role:'Player',  gamesPlayed:6, wins:5 },
  { name:'Sasikumar',             team:'RAIL',  gender:'M', age:51, role:'Player',  gamesPlayed:6, wins:4 },
  { name:'Louis Paal',            team:'RAIL',  gender:'M', age:58, role:'Player',  gamesPlayed:7, wins:4 },
  { name:'Sugunan',               team:'RAIL',  gender:'M', age:57, role:'Player',  gamesPlayed:7, wins:6 },
  { name:'Murugesan',             team:'RAIL',  gender:'M', age:59, role:'Player',  gamesPlayed:1, wins:1 },
  { name:'Shanmugamsundaram V',   team:'RAIL',  gender:'M', age:71, role:'Player',  gamesPlayed:1, wins:0 },
  { name:'Vigneswar',             team:'GNEST', gender:'M', age:32, role:'Captain', gamesPlayed:7, wins:2 },
  { name:'Raghavendr Ban',        team:'GNEST', gender:'M', age:36, role:'Player',  gamesPlayed:null, wins:null },
  { name:'Gopala Krishnan',       team:'GNEST', gender:'M', age:43, role:'Player',  gamesPlayed:8, wins:4 },
  { name:'Gunaseel',              team:'GNEST', gender:'M', age:29, role:'Player',  gamesPlayed:7, wins:3 },
  { name:'Vijayaraju G',          team:'GNEST', gender:'M', age:30, role:'Player',  gamesPlayed:4, wins:2 },
  { name:'Sujith G',              team:'GNEST', gender:'M', age:13, role:'Player',  gamesPlayed:1, wins:0 },
  { name:'S Vijayarangan',        team:'GNEST', gender:'M', age:51, role:'Player',  gamesPlayed:5, wins:2 },
  { name:'Virat',                 team:'GNEST', gender:'M', age:10, role:'Player',  gamesPlayed:null, wins:null },
  { name:'Murali Kumar D',        team:'GNEST', gender:'M', age:29, role:'Player',  gamesPlayed:8, wins:3 },
  { name:'Giulia Bosco',          team:'CBE',   gender:'F', age:47, role:'Captain', gamesPlayed:7, wins:3 },
  { name:'Danalakshmi Govindrajann',team:'CBE', gender:'F', age:44, role:'Player',  gamesPlayed:1, wins:0 },
  { name:'Sangeet Bagaria',       team:'CBE',   gender:'M', age:49, role:'Player',  gamesPlayed:4, wins:2 },
  { name:'Saujas Vaibhav Sankar', team:'CBE',   gender:'M', age:13, role:'Player',  gamesPlayed:1, wins:0 },
  { name:'Sara Vivek Khona',      team:'CBE',   gender:'F', age:14, role:'Player',  gamesPlayed:2, wins:0 },
  { name:'Gaurav Kapoor',         team:'CBE',   gender:'M', age:37, role:'Player',  gamesPlayed:5, wins:4 },
  { name:'Suprej Venkat',         team:'CBE',   gender:'M', age:42, role:'Player',  gamesPlayed:null, wins:null },
  { name:'Natasha Chandran',      team:'CBE',   gender:'F', age:41, role:'Player',  gamesPlayed:null, wins:null },
  { name:'Ashwin Karivaradaraj',  team:'CBE',   gender:'M', age:27, role:'Player',  gamesPlayed:null, wins:null },
  { name:'Raghuram Murugesan',    team:'CBE',   gender:'M', age:55, role:'Player',  gamesPlayed:6, wins:4 },
  { name:'Joseph J Chakola',      team:'CBE',   gender:'M', age:40, role:'Player',  gamesPlayed:5, wins:2 },
  { name:'Yunus Abbas Vagh',      team:'CBE',   gender:'M', age:43, role:'Player',  gamesPlayed:6, wins:5 },
  { name:'Varun Ravichandran',    team:'CBE',   gender:'M', age:37, role:'Player',  gamesPlayed:5, wins:2 },
  { name:'Murugesan M',           team:'CHAMPS',gender:'M', age:49, role:'Captain', gamesPlayed:6, wins:2 },
  { name:'Abdul Rahiman K',       team:'CHAMPS',gender:'M', age:53, role:'Player',  gamesPlayed:8, wins:5 },
  { name:'T Karthikeyan Sudhakar',team:'CHAMPS',gender:'M', age:55, role:'Player',  gamesPlayed:5, wins:0 },
  { name:'Dhivya Kanakabala B',   team:'CHAMPS',gender:'F', age:42, role:'Player',  gamesPlayed:4, wins:1 },
  { name:'Gnanasekaran S',        team:'CHAMPS',gender:'M', age:43, role:'Player',  gamesPlayed:8, wins:5 },
  { name:'Senthilkumar T',        team:'CHAMPS',gender:'M', age:43, role:'Player',  gamesPlayed:6, wins:1 },
  { name:'Jeevaraj A',            team:'CHAMPS',gender:'M', age:54, role:'Player',  gamesPlayed:8, wins:2 },
  { name:'Natarajan',             team:'CHAMPS',gender:'M', age:80, role:'Player',  gamesPlayed:1, wins:0 },
  { name:'Pragadeesan T',         team:'SNS',   gender:'M', age:47, role:'Captain', gamesPlayed:6, wins:4 },
  { name:'Sai Sankar Mohana Kesavan',team:'SNS',gender:'M', age:37, role:'Player',  gamesPlayed:4, wins:0 },
  { name:'Jeganath R',            team:'SNS',   gender:'M', age:43, role:'Player',  gamesPlayed:4, wins:1 },
  { name:'Neelesh Lingaraj',      team:'SNS',   gender:'M', age:40, role:'Player',  gamesPlayed:3, wins:1 },
  { name:'Subramanian',           team:'SNS',   gender:'M', age:47, role:'Player',  gamesPlayed:null, wins:null },
  { name:'Rajesh K',              team:'SNS',   gender:'M', age:40, role:'Player',  gamesPlayed:7, wins:3 },
  { name:'Prabhakaran V',         team:'SNS',   gender:'M', age:46, role:'Player',  gamesPlayed:7, wins:2 },
  { name:'Harsha M K',            team:'SNS',   gender:'F', age:15, role:'Player',  gamesPlayed:5, wins:2 },
  { name:'Jaswanth M K',          team:'SNS',   gender:'M', age:12, role:'Player',  gamesPlayed:6, wins:1 },
  { name:'Naveen',                team:'SAI',   gender:'M', age:38, role:'Captain', gamesPlayed:8, wins:1 },
  { name:'Harsith',               team:'SAI',   gender:'M', age:18, role:'Player',  gamesPlayed:8, wins:3 },
  { name:'Dinesh',                team:'SAI',   gender:'M', age:33, role:'Player',  gamesPlayed:5, wins:1 },
  { name:'Ridhishree',            team:'SAI',   gender:'F', age:13, role:'Player',  gamesPlayed:6, wins:0 },
  { name:'Kanishkka',             team:'SAI',   gender:'F', age:11, role:'Player',  gamesPlayed:7, wins:0 },
  { name:'Abinanth',              team:'SAI',   gender:'M', age:13, role:'Player',  gamesPlayed:6, wins:0 },
  { name:'Kevin',                 team:'SAI',   gender:'M', age:15, role:'Player',  gamesPlayed:1, wins:0 },
  { name:'Alwin Swaminathan',     team:'SAI',   gender:'M', age:13, role:'Player',  gamesPlayed:7, wins:3 },
  { name:'Pani Ramasami',         team:'KING',  gender:'M', age:52, role:'Captain', gamesPlayed:6, wins:2 },
  { name:'David Simon',           team:'KING',  gender:'M', age:50, role:'Player',  gamesPlayed:3, wins:0 },
  { name:'Kulasekaran J',         team:'KING',  gender:'M', age:48, role:'Player',  gamesPlayed:5, wins:0 },
  { name:'Aashi Manuel Charles',  team:'KING',  gender:'M', age:26, role:'Player',  gamesPlayed:4, wins:0 },
  { name:'Damien Stany',          team:'KING',  gender:'M', age:10, role:'Player',  gamesPlayed:1, wins:0 },
  { name:'Sandra Christine',      team:'KING',  gender:'F', age:20, role:'Player',  gamesPlayed:3, wins:0 },
  { name:'Joseph Stany',          team:'KING',  gender:'M', age:42, role:'Player',  gamesPlayed:1, wins:0 },
  { name:'Angel Christina (Tina)',team:'KING',  gender:'F', age:21, role:'Player',  gamesPlayed:4, wins:0 },
  { name:'Samyukta Y',            team:'KING',  gender:'F', age:12, role:'Player',  gamesPlayed:5, wins:1 },
  { name:'Babu',                  team:'KING',  gender:'M', age:50, role:'Player',  gamesPlayed:2, wins:1 }
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
  { week:9, date:'21-22 Mar 2026', done:false, matches:[
    { home:'SATCHIDANANDA', score:null, away:'S RAILWAY - B', venue:'Satchidananda School', courts:[] },
    { home:'TenniMaSh Tots', score:null, away:'SVG Champs', venue:'TenniMaSh Academy', courts:[] },
    { home:'SREEVATSA STARS', score:null, away:'Kingsberry Tennis', venue:'Sreevatsa Club', courts:[] },
    { home:'SNS-C(AS TENNIS)', score:null, away:'TENNIGLO - D', venue:'SNS Tennis Academy', courts:[] },
    { home:'CBE CLUB - C', score:null, away:'GREEN NEST - B', venue:'Coimbatore Club', courts:[] },
  ]},
  { week:10, date:'28-29 Mar 2026', done:false, matches:[
    { home:'SATCHIDANANDA', score:null, away:'CBE CLUB - C', venue:'Satchidananda School', courts:[] },
    { home:'GREEN NEST - B', score:null, away:'TenniMaSh Tots', venue:'Green Nest Sports Academy', courts:[] },
    { home:'S RAILWAY - B', score:null, away:'TENNIGLO - D', venue:'S Railway', courts:[] },
    { home:'SAI TENNIS - B', score:null, away:'Kingsberry Tennis', venue:'Sai Tennis Academy', courts:[] },
    { home:'SNS-C(AS TENNIS)', score:null, away:'SREEVATSA STARS', venue:'SNS Tennis Academy', courts:[] },
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
  // SATCHIDANANDA
  'T. Karthick':        [['B.R. Viswak',4],['Theneeshwaran M',2],['G Sendhur',1]],
  'B.R. Viswak':        [['T. Karthick',4],['G. Prasath',2],['Nithik M.K',1]],
  'G. Prasath':         [['B.R. Viswak',2],['Ashwin Krishna M.R',1],['Nithik M.K',1],['Theneeshwaran M',3]],
  'Theneeshwaran M':    [['G Sendhur',3],['T. Karthick',2],['G. Prasath',2]],
  'G Sendhur':          [['S K Nithin',3],['Theneeshwaran M',3],['T. Karthick',1]],
  'S K Nithin':         [['G Sendhur',3]],
  'Ashwin Krishna M.R': [['G. Prasath',1]],
  'Nithik M.K':         [['G. Prasath',1],['B.R. Viswak',1]],
  // TenniMaSh Tots
  'Sarankumar Sathasivam': [['Shivani Sivakumar',5],['Varun Satishkumar',2]],
  'Shivani Sivakumar':  [['Sarankumar Sathasivam',5],['Adith Balasubramaniam',1],['Pragathishwar Aan',1]],
  'Pragathishwar Aan':  [['Juanishbibian C',4],['Shivani Sivakumar',2]],
  'Juanishbibian C':    [['Pragathishwar Aan',4],['Adith Balasubramaniam',1]],
  'Adith Balasubramaniam': [['Mahita Karthik',5],['Juanishbibian C',1],['Shivani Sivakumar',1]],
  'Mahita Karthik':     [['Adith Balasubramaniam',5]],
  'Varun Satishkumar':  [['Sarankumar Sathasivam',2]],
  // SREEVATSA STARS
  'Monish':             [['Suryaa',2],['Palaniappan',2],['Chandrasekar',1],['Kishore',1],['Shankar V',1]],
  'Kishore':            [['Senthil',3],['Palaniappan',1],['Suryaa',1],['Monish',1],['Abhinnav',1]],
  'Ramesh':             [['Palaniappan',1]],
  'Palaniappan':        [['Monish',2],['Kishore',1],['Senthil',1],['Ramesh',1]],
  'Chandrasekar':       [['Monish',1]],
  'Suryaa':             [['Monish',2],['Kishore',1],['Shankar V',1]],
  'Revathi':            [['Shankar V',4]],
  'Senthil':            [['Kishore',3],['Shankar V',1],['Palaniappan',1]],
  'Abhinnav':           [['Kishore',1]],
  'Shankar V':          [['Revathi',4],['Senthil',1],['Suryaa',1],['Monish',1]],
  // TENNIGLO - D
  'Shyama Kelath':      [['Rajarathnam',1],['Naveen Kumar',2],['Siddaarth Malay',2],['Arun Kumar A S',1]],
  'Arun Kumar A S':     [['Naveen Kumar',3],['Shyama Kelath',1]],
  'Naveen Kumar':       [['Arun Kumar A S',3],['Shyama Kelath',2]],
  'Siddaarth Malay':    [['Arjun Visratej',1],['Shyama Kelath',2],['Thirumalai Nambi',1]],
  'Arjun Visratej':     [['Thirumalai Nambi',1],['Siddaarth Malay',1],['Pradeep E S',2]],
  'Pradeep E S':        [['Rajarathnam',3],['Arjun Visratej',2],['Thirumalai Nambi',1]],
  'Rajarathnam':        [['Shyama Kelath',1],['Pradeep E S',3]],
  'Thirumalai Nambi':   [['Arjun Visratej',1],['Pradeep E S',1],['Siddaarth Malay',1]],
  // S RAILWAY - B
  'Sampath Gnanaraja':  [['Saravanakumar',6]],
  'Saravanakumar':      [['Sampath Gnanaraja',6]],
  'Vivinraja':          [['Sugunan',4]],
  'Sugunan':            [['Vivinraja',4],['Murugesan',1]],
  'Sasikumar':          [['Louis Paal',4]],
  'Louis Paal':         [['Sasikumar',4],['Shanmugamsundaram V',1]],
  'Shanmugamsundaram V':[['Louis Paal',1]],
  'Murugesan':          [['Sugunan',1]],
  // GREEN NEST - B
  'Vigneswar':          [['Gopala Krishnan',3],['Murali Kumar D',1],['Gunaseel',1]],
  'Gopala Krishnan':    [['Gunaseel',3],['Vigneswar',3],['Vijayaraju G',1]],
  'Gunaseel':           [['Vijayaraju G',2],['Gopala Krishnan',3],['Vigneswar',1],['Sujith G',1]],
  'Vijayaraju G':       [['Gunaseel',2],['Gopala Krishnan',1]],
  'S Vijayarangan':     [['Murali Kumar D',4]],
  'Murali Kumar D':     [['S Vijayarangan',4],['Vigneswar',1]],
  'Sujith G':           [['Gunaseel',1]],
  // CBE CLUB - C
  'Raghuram Murugesan': [['Varun Ravichandran',3],['Saujas Vaibhav Sankar',1],['Giulia Bosco',1]],
  'Giulia Bosco':       [['Varun Ravichandran',1],['Raghuram Murugesan',1],['Sangeet Bagaria',1],['Joseph J Chakola',1]],
  'Gaurav Kapoor':      [['Yunus Abbas Vagh',3],['Sangeet Bagaria',1]],
  'Yunus Abbas Vagh':   [['Gaurav Kapoor',3],['Joseph J Chakola',1],['Sangeet Bagaria',1]],
  'Varun Ravichandran': [['Raghuram Murugesan',3],['Giulia Bosco',1]],
  'Sangeet Bagaria':    [['Giulia Bosco',1],['Gaurav Kapoor',1],['Yunus Abbas Vagh',1]],
  'Joseph J Chakola':   [['Yunus Abbas Vagh',1],['Sangeet Bagaria',1],['Giulia Bosco',1]],
  'Sara Vivek Khona':   [['Danalakshmi Govindrajann',1]],
  'Danalakshmi Govindrajann': [['Sara Vivek Khona',1]],
  // SVG Champs
  'Abdul Rahiman K':    [['Gnanasekaran S',6],['Murugesan M',1],['T Karthikeyan Sudhakar',1]],
  'Gnanasekaran S':     [['Abdul Rahiman K',6],['Dhivya Kanakabala B',2]],
  'Jeevaraj A':         [['Senthilkumar T',6],['Murugesan M',2]],
  'Murugesan M':        [['T Karthikeyan Sudhakar',3],['Jeevaraj A',2],['Abdul Rahiman K',1]],
  'T Karthikeyan Sudhakar': [['Murugesan M',3],['Abdul Rahiman K',1],['Dhivya Kanakabala B',1]],
  'Dhivya Kanakabala B':[['Gnanasekaran S',2],['Natarajan',1],['T Karthikeyan Sudhakar',1]],
  'Senthilkumar T':     [['Jeevaraj A',6]],
  'Natarajan':          [['Dhivya Kanakabala B',1]],
  // SNS-C(AS TENNIS)
  'Pragadeesan T':      [['Jaswanth M K',1],['Rajesh K',3]],
  'Rajesh K':           [['Prabhakaran V',3],['Pragadeesan T',3]],
  'Prabhakaran V':      [['Rajesh K',3],['Jeganath R',1]],
  'Jeganath R':         [['Sai Sankar Mohana Kesavan',3],['Prabhakaran V',1]],
  'Sai Sankar Mohana Kesavan': [['Jeganath R',3]],
  'Neelesh Lingaraj':   [['Harsha M K',1],['Pragadeesan T',1]],
  'Harsha M K':         [['Neelesh Lingaraj',1],['Jaswanth M K',2]],
  'Jaswanth M K':       [['Pragadeesan T',1],['Harsha M K',2],['Prabhakaran V',1]],
  // SAI TENNIS - B
  'Naveen':             [['Dinesh',2],['Abinanth',1],['Kevin',1]],
  'Dinesh':             [['Naveen',2],['Alwin Swaminathan',1]],
  'Harsith':            [['Kanishkka',2],['Alwin Swaminathan',3]],
  'Kanishkka':          [['Harsith',2],['Ridhishree',2]],
  'Ridhishree':         [['Kanishkka',2],['Abinanth',2]],
  'Alwin Swaminathan':  [['Dinesh',1],['Harsith',3]],
  'Abinanth':           [['Ridhishree',2],['Naveen',1]],
  'Kevin':              [['Naveen',1]],
  // Kingsberry Tennis
  'Pani Ramasami':      [['Samyukta Y',2],['Babu',1],['David Simon',1]],
  'Kulasekaran J':      [['Sandra Christine',1],['David Simon',1],['Samyukta Y',1]],
  'Sandra Christine':   [['Kulasekaran J',1]],
  'Angel Christina (Tina)': [['Aashi Manuel Charles',2]],
  'Aashi Manuel Charles': [['Angel Christina (Tina)',2],['Samyukta Y',1]],
  'Samyukta Y':         [['Pani Ramasami',2],['Aashi Manuel Charles',1],['Kulasekaran J',1]],
  'Babu':               [['Pani Ramasami',1]],
  'Damien Stany':       [['Joseph Stany',1]],
  'Joseph Stany':       [['Damien Stany',1]],
  'David Simon':        [['Kulasekaran J',1],['Pani Ramasami',1]],
};

const DIV_I_TEAM_INFO = {
  SATCH:  { wosGiven:0, weeksPlayed:7 },
  TTOTS:  { wosGiven:0, weeksPlayed:7 },
  STARS:  { wosGiven:0, weeksPlayed:7 },
  TGLO:   { wosGiven:0, weeksPlayed:7 },
  RAIL:   { wosGiven:0, weeksPlayed:8 },
  GNEST:  { wosGiven:4, weeksPlayed:8 },
  CBE:    { wosGiven:0, weeksPlayed:7 },
  CHAMPS: { wosGiven:1, weeksPlayed:8 },
  SNS:    { wosGiven:0, weeksPlayed:7 },
  SAI:    { wosGiven:0, weeksPlayed:8 },
  KING:   { wosGiven:4, weeksPlayed:7 },
};

const DIV_I_PROJ_BREAKDOWN = [
  {
    short:'STARS', full:'SREEVATSA STARS', current:14,
    fixtures:[
      { wk:9,  opp:'Kingsberry Tennis',   oppShort:'KING', venue:'H', projPts:3.0, min:2, max:3,
        note:'Home vs KING (0W-7L). Comfortable win expected. Min: KING steal 1 court; Max: STARS 3-0.' },
      { wk:10, opp:'SNS-C(AS TENNIS)',    oppShort:'SNS',  venue:'A', projPts:1.5, min:2, max:3,
        note:'Away at SNS (2W-5L). Competitive away fixture. Min: STARS win 2 courts; Max: STARS sweep 3-0.' },
      { wk:11, opp:'TENNIGLO - D',        oppShort:'TGLO', venue:'H', projPts:3.0, min:2, max:3,
        note:'Home vs TGLO (4W-3L). STARS have edge at home. Min: TGLO win 1 court; Max: STARS 3-0.' },
    ]
  },
  {
    short:'TGLO', full:'TENNIGLO - D', current:11,
    fixtures:[
      { wk:9,  opp:'SNS-C(AS TENNIS)',    oppShort:'SNS',  venue:'A', projPts:2.0, min:2, max:3,
        note:'Away at SNS (2W-5L). TGLO stronger overall. Min: TGLO win 2 courts; Max: TGLO sweep 3-0.' },
      { wk:10, opp:'S RAILWAY - B',       oppShort:'RAIL', venue:'A', projPts:1.5, min:1, max:3,
        note:'Away at RAIL (6W-2L). Tough away fixture. Min: TGLO win 1 court; Max: TGLO upset 3-0.' },
      { wk:11, opp:'SREEVATSA STARS',     oppShort:'STARS',venue:'A', projPts:1.5, min:2, max:3,
        note:'Away at STARS (5W-2L). STARS home advantage. Min: TGLO win 2 courts; Max: TGLO sweep 3-0.' },
    ]
  },
  {
    short:'RAIL', full:'S RAILWAY - B', current:14,
    fixtures:[
      { wk:9,  opp:'SATCHIDANANDA',       oppShort:'SATCH',venue:'A', projPts:0.5, min:0, max:1,
        note:'Away at SATCH (7W-0L, 21 pts). Near-certain loss. Min: 0 from SATCH; Max: RAIL steal 1 court.' },
      { wk:10, opp:'TENNIGLO - D',        oppShort:'TGLO', venue:'H', projPts:2.0, min:2, max:3,
        note:'Home vs TGLO (4W-3L). Home advantage key. Min: RAIL win 2 courts; Max: RAIL 3-0.' },
      { wk:11, opp:'CBE CLUB - C',        oppShort:'CBE',  venue:'A', projPts:1.5, min:2, max:3,
        note:'Away at CBE (4W-3L). Evenly matched. Min: RAIL win 2 courts; Max: RAIL sweep 3-0.' },
    ]
  },
  {
    short:'CBE', full:'CBE CLUB - C', current:10,
    fixtures:[
      { wk:9,  opp:'GREEN NEST - B',      oppShort:'GNEST', venue:'H', projPts:2.5, min:2, max:3,
        note:'Home vs GNEST (2W-6L, 4 WOs given). CBE solid favorite. Min: CBE win 2 courts; Max: CBE 3-0.' },
      { wk:10, opp:'SATCHIDANANDA',       oppShort:'SATCH', venue:'A', projPts:0.5, min:0, max:1,
        note:'Away at SATCH (7W-0L). Near-certain loss. Min: 0; Max: CBE steal 1 court.' },
      { wk:11, opp:'S RAILWAY - B',       oppShort:'RAIL',  venue:'H', projPts:1.5, min:2, max:3,
        note:'Home vs RAIL (6W-2L). RAIL stronger but CBE has home edge. Min: CBE win 2 courts; Max: CBE 3-0.' },
    ]
  },
  {
    short:'CHAMPS', full:'SVG Champs', current:8,
    fixtures:[
      { wk:9,  opp:'TenniMaSh Tots',      oppShort:'TTOTS', venue:'A', projPts:0.8, min:0, max:1,
        note:'Away at TTOTS (7W-0L, 20 pts). TTOTS unbeaten — near-certain loss. Min: 0; Max: CHAMPS steal 1 court.' },
      { wk:10, opp:'REST WEEK',            oppShort:'—',      venue:'—', projPts:0.0, min:0, max:0,
        note:'Rest week — no match played.' },
      { wk:11, opp:'Kingsberry Tennis',   oppShort:'KING',  venue:'A', projPts:2.4, min:2, max:3,
        note:'Away at KING (0W-7L). CHAMPS heavy favourites. Min: KING steal 1 court; Max: CHAMPS sweep 3-0.' },
    ]
  },
  {
    short:'SATCH', full:'SATCHIDANANDA', current:21,
    fixtures:[
      { wk:9,  opp:'S RAILWAY - B',       oppShort:'RAIL',  venue:'H', projPts:2.8, min:2, max:3,
        note:'Home vs RAIL (6W-2L, 14 pts). SATCH unbeaten and at home — strong favourite. Min: RAIL steal 1 court; Max: SATCH sweep 3-0.' },
      { wk:10, opp:'CBE CLUB - C',        oppShort:'CBE',   venue:'H', projPts:2.9, min:2, max:3,
        note:'Home vs CBE (4W-3L, 10 pts). SATCH comfortably stronger — home court adds to the advantage. Min: CBE steal 1 court; Max: SATCH sweep 3-0.' },
      { wk:11, opp:'TenniMaSh Tots',      oppShort:'TTOTS', venue:'A', projPts:1.5, min:0, max:3,
        note:'Away at TTOTS (7W-0L, 20 pts). Title decider — two unbeaten sides. TTOTS home edge makes this 50/50. Full range possible.' },
    ]
  },
  {
    short:'TTOTS', full:'TenniMaSh Tots', current:20,
    fixtures:[
      { wk:9,  opp:'SVG Champs',          oppShort:'CHAMPS',venue:'H', projPts:3.0, min:2, max:3,
        note:'Home vs CHAMPS (2W-6L, 8 pts). TTOTS unbeaten and at home — comfortable win expected. Min: CHAMPS steal 1 court; Max: TTOTS sweep 3-0.' },
      { wk:10, opp:'GREEN NEST - B',      oppShort:'GNEST', venue:'A', projPts:2.8, min:2, max:3,
        note:'Away at GNEST (2W-6L, 8 pts). TTOTS heavily favoured even on the road. Min: GNEST steal 1 court; Max: TTOTS sweep 3-0.' },
      { wk:11, opp:'SATCHIDANANDA',       oppShort:'SATCH', venue:'H', projPts:1.5, min:0, max:3,
        note:'Home vs SATCH (7W-0L, 21 pts). Title decider — two unbeaten sides. TTOTS home advantage gives a slight edge in what will be an even contest. Full range possible.' },
    ]
  },
  {
    short:'GNEST', full:'GREEN NEST - B', current:8,
    fixtures:[
      { wk:9,  opp:'CBE CLUB - C',        oppShort:'CBE',   venue:'A', projPts:0.8, min:0, max:2,
        note:'Away at CBE (4W-3L, 10 pts). CBE the stronger side with home advantage. Min: CBE sweep 3-0; Max: GNEST steal 2 courts.' },
      { wk:10, opp:'TenniMaSh Tots',      oppShort:'TTOTS', venue:'H', projPts:0.2, min:0, max:1,
        note:'Home vs TTOTS (7W-0L, 20 pts). TTOTS unbeaten — near-certain loss for GNEST even at home. Min: 0; Max: GNEST steal 1 court.' },
      { wk:11, opp:'REST WEEK',            oppShort:'—',      venue:'—', projPts:0.0, min:0, max:0,
        note:'Rest week — no match played.' },
    ]
  },
  {
    short:'SNS', full:'SNS-C(AS TENNIS)', current:7,
    fixtures:[
      { wk:9,  opp:'TENNIGLO - D',        oppShort:'TGLO',  venue:'H', projPts:1.3, min:0, max:3,
        note:'Home vs TGLO (4W-3L, 11 pts). TGLO stronger overall but SNS at home — competitive fixture. Min: TGLO sweep; Max: SNS upset 3-0.' },
      { wk:10, opp:'SREEVATSA STARS',     oppShort:'STARS', venue:'H', projPts:1.0, min:0, max:2,
        note:'Home vs STARS (5W-2L, 14 pts). STARS are title contenders — SNS home edge partially offsets the gap. Min: STARS sweep; Max: SNS steal 2 courts.' },
      { wk:11, opp:'SAI TENNIS - B',      oppShort:'SAI',   venue:'A', projPts:2.5, min:1, max:3,
        note:'Away at SAI (1W-7L, 4 pts). SAI very weak — SNS strong favourite even on the road. Min: SAI steal 1 court; Max: SNS sweep 3-0.' },
    ]
  },
  {
    short:'SAI', full:'SAI TENNIS - B', current:4,
    fixtures:[
      { wk:9,  opp:'REST WEEK',            oppShort:'—',      venue:'—', projPts:0.0, min:0, max:0,
        note:'Rest week — no match played.' },
      { wk:10, opp:'Kingsberry Tennis',   oppShort:'KING',  venue:'H', projPts:2.0, min:1, max:3,
        note:'Home vs KING (0W-7L, 3 pts). Bottom-two clash — SAI home advantage gives the edge. Min: KING steal 1 court; Max: SAI sweep 3-0.' },
      { wk:11, opp:'SNS-C(AS TENNIS)',    oppShort:'SNS',   venue:'H', projPts:1.3, min:0, max:3,
        note:'Home vs SNS (2W-5L, 7 pts). SNS stronger but SAI at home — competitive lower-half fixture. Full range possible.' },
    ]
  },
  {
    short:'KING', full:'Kingsberry Tennis', current:3,
    fixtures:[
      { wk:9,  opp:'SREEVATSA STARS',     oppShort:'STARS', venue:'A', projPts:0.1, min:0, max:1,
        note:'Away at STARS (5W-2L, 14 pts). STARS heavily favoured — KING winless all season. Min: 0; Max: KING steal 1 court.' },
      { wk:10, opp:'SAI TENNIS - B',      oppShort:'SAI',   venue:'A', projPts:1.0, min:0, max:3,
        note:'Away at SAI (1W-7L, 4 pts). Bottom-two clash away — near-even contest, SAI home edge gives slight advantage. Full range possible.' },
      { wk:11, opp:'SVG Champs',          oppShort:'CHAMPS',venue:'H', projPts:1.3, min:0, max:3,
        note:'Home vs CHAMPS (2W-6L, 8 pts). CHAMPS slightly stronger but KING at home — competitive final fixture. Min: CHAMPS sweep; Max: KING win 3-0.' },
    ]
  },
];

