// ═══════════════════════════════════════════════
// BIG NC TENNIS — Shared Data & Core Logic
// Used by both index.html and test-suite.html
// ═══════════════════════════════════════════════

const DEMO_COACHES = [
  {id:'c1',first_name:'Marcus',  last_name:'Williams', gender:'male',   age:35, role:'coach', specialty:'Competitive / Tournament',   years:8,  cert:'USPTA Pro',        bio:'Former ATP challenger. Competitive juniors and adults.',   avatar:'https://ui-avatars.com/api/?background=C9E70A&color=000&name=MW&size=128'},
  {id:'c2',first_name:'Sofia',   last_name:'Martinez', gender:'female', age:28, role:'coach', specialty:'Junior Development',          years:12, cert:'PTR Level 3',      bio:'Passionate about developing the next generation.',         avatar:'https://ui-avatars.com/api/?background=0A84FF&color=fff&name=SM&size=128'},
  {id:'c3',first_name:'James',   last_name:'Chen',     gender:'male',   age:42, role:'coach', specialty:'Adult Recreational',          years:5,  cert:'USPTA Elite',      bio:'Fun high-energy sessions. Zero pressure, max improvement.',avatar:'https://ui-avatars.com/api/?background=FF9F0A&color=000&name=JC&size=128'},
  {id:'c4',first_name:'Aaliyah', last_name:'Brooks',   gender:'female', age:31, role:'coach', specialty:'Fitness & Conditioning',      years:7,  cert:'PTR Level 2',      bio:'Tennis fitness specialist. Build athleticism your game demands.',avatar:'https://ui-avatars.com/api/?background=FF3B30&color=fff&name=AB&size=128'},
  {id:'c5',first_name:'Ryan',    last_name:'Mitchell', gender:'male',   age:39, role:'coach', specialty:'All Levels',                  years:10, cert:'USPTA',            bio:'Adaptable coach with a decade of experience.',             avatar:'https://ui-avatars.com/api/?background=34C759&color=000&name=RM&size=128'},
  {id:'c6',first_name:'Elena',   last_name:'Vasquez',  gender:'female', age:26, role:'coach', specialty:'Beginner Specialist',         years:3,  cert:'PTR Level 1',      bio:'Patient and encouraging with first-time players.',         avatar:'https://ui-avatars.com/api/?background=BF5AF2&color=fff&name=EV&size=128'},
  {id:'c7',first_name:'Darius',  last_name:'Johnson',  gender:'male',   age:45, role:'coach', specialty:'Serve & Technique',           years:15, cert:'USPTA Master Pro', bio:'15-year veteran and technique guru.',                      avatar:'https://ui-avatars.com/api/?background=FF6B35&color=fff&name=DJ&size=128'},
  {id:'c8',first_name:'Priya',   last_name:'Patel',    gender:'female', age:33, role:'coach', specialty:'Mental Game & Tactics',       years:9,  cert:'PTR Level 3',      bio:'Sports psychology certified. Breaks mental barriers.',     avatar:'https://ui-avatars.com/api/?background=5E5CE6&color=fff&name=PP&size=128'},
];

const DEMO_STUDENTS = [
  {id:'s1',  first_name:'Alex',    last_name:'Rivera',    gender:'male',   age:24, email:'alex@demo.com',     level:'intermediate', style:'aggressive',  focus:['forehand','serve','footwork'], bio:'Playing 3 years, want to break 4.0.'},
  {id:'s2',  first_name:'Jordan',  last_name:'Taylor',    gender:'female', age:31, email:'jordan@demo.com',   level:'beginner',     style:'baseline',    focus:['backhand','footwork'],         bio:'Just started tennis this year!'},
  {id:'s3',  first_name:'Morgan',  last_name:'Lee',       gender:'female', age:16, email:'morgan@demo.com',   level:'advanced',     style:'allcourt',    focus:['serve','mental','volley'],     bio:'Competing in USTA junior tournaments.'},
  {id:'s4',  first_name:'Casey',   last_name:'Brown',     gender:'male',   age:45, email:'casey@demo.com',    level:'intermediate', style:'defensive',   focus:['return','tactic'],             bio:'Weekend warrior getting competitive.'},
  {id:'s5',  first_name:'Taylor',  last_name:'Davis',     gender:'female', age:22, email:'taylor@demo.com',   level:'beginner',     style:'baseline',    focus:['forehand','backhand'],         bio:'College student, totally new to tennis.'},
  {id:'s6',  first_name:'Jamie',   last_name:'Wilson',    gender:'male',   age:38, email:'jamie@demo.com',    level:'advanced',     style:'serve-volley',focus:['serve','volley','mental'],     bio:'Former college player getting back in.'},
  {id:'s7',  first_name:'Sam',     last_name:'Anderson',  gender:'female', age:14, email:'sam@demo.com',      level:'beginner',     style:'baseline',    focus:['forehand','footwork'],         bio:'Wants to make the JV high school team.'},
  {id:'s8',  first_name:'Riley',   last_name:'Thomas',    gender:'male',   age:28, email:'riley@demo.com',    level:'intermediate', style:'aggressive',  focus:['forehand','tactic'],           bio:'Big hitter, working on consistency.'},
  {id:'s9',  first_name:'Avery',   last_name:'Jackson',   gender:'female', age:52, email:'avery@demo.com',    level:'beginner',     style:'defensive',   focus:['backhand','footwork'],         bio:'Learning tennis for fitness and fun.'},
  {id:'s10', first_name:'Dakota',  last_name:'White',     gender:'male',   age:19, email:'dakota@demo.com',   level:'elite',        style:'aggressive',  focus:['serve','mental'],              bio:'Aiming for college scholarship.'},
  {id:'s11', first_name:'Blake',   last_name:'Harris',    gender:'male',   age:33, email:'blake@demo.com',    level:'intermediate', style:'allcourt',    focus:['volley','tactic'],             bio:'Business exec playing twice a week.'},
  {id:'s12', first_name:'Cameron', last_name:'Martin',    gender:'female', age:27, email:'cameron@demo.com',  level:'advanced',     style:'baseline',    focus:['serve','footwork'],            bio:'Club team player, focused on consistency.'},
  {id:'s13', first_name:'Drew',    last_name:'Garcia',    gender:'male',   age:41, email:'drew@demo.com',     level:'beginner',     style:'baseline',    focus:['forehand','backhand'],         bio:'Dad who wants to play with his kids.'},
  {id:'s14', first_name:'Skyler',  last_name:'Rodriguez', gender:'female', age:17, email:'skyler@demo.com',   level:'intermediate', style:'aggressive',  focus:['forehand','mental'],           bio:'Varsity high school player.'},
  {id:'s15', first_name:'Logan',   last_name:'Lewis',     gender:'male',   age:25, email:'logan@demo.com',    level:'advanced',     style:'serve-volley',focus:['serve','volley'],              bio:'Ranked player, fine-tuning net game.'},
  {id:'s16', first_name:'Quinn',   last_name:'Walker',    gender:'female', age:36, email:'quinn@demo.com',    level:'intermediate', style:'defensive',   focus:['return','tactic'],             bio:'Counter-puncher learning to attack.'},
  {id:'s17', first_name:'Reese',   last_name:'Hall',      gender:'male',   age:48, email:'reese@demo.com',    level:'beginner',     style:'baseline',    focus:['forehand','footwork'],         bio:'Retired athlete picking up tennis.'},
  {id:'s18', first_name:'Hayden',  last_name:'Allen',     gender:'female', age:21, email:'hayden@demo.com',   level:'intermediate', style:'allcourt',    focus:['backhand','volley'],           bio:'College varsity improving all areas.'},
  {id:'s19', first_name:'Parker',  last_name:'Young',     gender:'male',   age:13, email:'parker@demo.com',   level:'beginner',     style:'baseline',    focus:['forehand','backhand','footwork'],bio:'Talented kid, playing 6 months.'},
  {id:'s20', first_name:'Peyton',  last_name:'King',      gender:'female', age:29, email:'peyton@demo.com',   level:'advanced',     style:'aggressive',  focus:['serve','forehand','mental'],   bio:'Competing in open-level tournaments.'},
];

// 50 sessions — verified: no coach+date+time conflict, no student+date+time conflict
const DEMO_SESSIONS = [
  // PAST — Jan–Mar 2026
  {id:'ss1', date:'2026-01-10',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c1',student_id:'s1', status:'past',   objective:'Improve serve consistency and ball placement'},
  {id:'ss2', date:'2026-01-10',time:'10:00 AM',type:'Group Lesson',   coach_id:'c2',student_id:'s2', status:'past',   objective:'Develop baseline forehand mechanics'},
  {id:'ss3', date:'2026-01-10',time:'02:00 PM',type:'Private 1-on-1', coach_id:'c3',student_id:'s3', status:'past',   objective:'Work on volley technique at the net'},
  {id:'ss4', date:'2026-01-12',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c4',student_id:'s4', status:'past',   objective:'Build footwork patterns and split step'},
  {id:'ss5', date:'2026-01-12',time:'11:00 AM',type:'Match Play',     coach_id:'c5',student_id:'s5', status:'past',   objective:'First match experience and point construction'},
  {id:'ss6', date:'2026-01-13',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c6',student_id:'s6', status:'past',   objective:'Serve mechanics deep dive — toss and contact'},
  {id:'ss7', date:'2026-01-13',time:'10:00 AM',type:'Private 1-on-1', coach_id:'c7',student_id:'s7', status:'past',   objective:'Topspin forehand foundation for junior development'},
  {id:'ss8', date:'2026-01-13',time:'02:00 PM',type:'Clinic / Camp',  coach_id:'c8',student_id:'s8', status:'past',   objective:'Mental game strategies for match situations'},
  {id:'ss9', date:'2026-01-15',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c1',student_id:'s9', status:'past',   objective:'Two-handed backhand mechanics and contact point'},
  {id:'ss10',date:'2026-01-15',time:'11:00 AM',type:'Group Lesson',   coach_id:'c2',student_id:'s10',status:'past',   objective:'Elite competitive drills and shot selection'},
  {id:'ss11',date:'2026-01-17',time:'10:00 AM',type:'Private 1-on-1', coach_id:'c3',student_id:'s11',status:'past',   objective:'Net approach and punch volley technique'},
  {id:'ss12',date:'2026-01-20',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c4',student_id:'s12',status:'past',   objective:'Fitness training and on-court agility'},
  {id:'ss13',date:'2026-01-22',time:'02:00 PM',type:'Private 1-on-1', coach_id:'c5',student_id:'s13',status:'past',   objective:'Forehand cross-court consistency patterns'},
  {id:'ss14',date:'2026-01-24',time:'09:00 AM',type:'Group Lesson',   coach_id:'c6',student_id:'s14',status:'past',   objective:'Junior forehand aggression and placement'},
  {id:'ss15',date:'2026-01-27',time:'10:00 AM',type:'Private 1-on-1', coach_id:'c7',student_id:'s15',status:'past',   objective:'Serve and volley game plan development'},
  {id:'ss16',date:'2026-01-29',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c8',student_id:'s16',status:'past',   objective:'Return of serve tactics and reading the server'},
  {id:'ss17',date:'2026-02-03',time:'11:00 AM',type:'Match Play',     coach_id:'c1',student_id:'s17',status:'past',   objective:'Point construction from the baseline'},
  {id:'ss18',date:'2026-02-05',time:'02:00 PM',type:'Private 1-on-1', coach_id:'c2',student_id:'s18',status:'past',   objective:'Backhand slice technique and low ball handling'},
  {id:'ss19',date:'2026-02-07',time:'09:00 AM',type:'Clinic / Camp',  coach_id:'c3',student_id:'s19',status:'past',   objective:'Junior all-around: fun and fundamentals'},
  {id:'ss20',date:'2026-02-10',time:'10:00 AM',type:'Private 1-on-1', coach_id:'c4',student_id:'s20',status:'past',   objective:'Elite fitness and speed conditioning'},
  {id:'ss21',date:'2026-02-12',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c5',student_id:'s1', status:'past',   objective:'Forehand inside-out patterns and open stance'},
  {id:'ss22',date:'2026-02-14',time:'10:00 AM',type:'Group Lesson',   coach_id:'c6',student_id:'s3', status:'past',   objective:'Advanced serve variety: kick, slice, flat'},
  {id:'ss23',date:'2026-02-17',time:'02:00 PM',type:'Private 1-on-1', coach_id:'c7',student_id:'s5', status:'past',   objective:'Kick serve — toss at 12 o\'clock development'},
  {id:'ss24',date:'2026-02-19',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c8',student_id:'s7', status:'past',   objective:'Tactics under pressure and mental reset'},
  {id:'ss25',date:'2026-03-05',time:'11:00 AM',type:'Match Play',     coach_id:'c1',student_id:'s10',status:'past',   objective:'Tournament simulation — full match coaching'},
  // UPCOMING — Mar 16 – Apr 18, 2026
  {id:'ss26',date:'2026-03-16',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c2',student_id:'s2', status:'upcoming',objective:'Forehand topspin development and follow-through'},
  {id:'ss27',date:'2026-03-16',time:'10:00 AM',type:'Group Lesson',   coach_id:'c3',student_id:'s4', status:'upcoming',objective:'Net game fundamentals and approach shots'},
  {id:'ss28',date:'2026-03-17',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c4',student_id:'s6', status:'upcoming',objective:'Sprint and recovery conditioning for serve-volleyers'},
  {id:'ss29',date:'2026-03-17',time:'11:00 AM',type:'Private 1-on-1', coach_id:'c5',student_id:'s8', status:'upcoming',objective:'Aggressive baseline: inside-in forehand patterns'},
  {id:'ss30',date:'2026-03-18',time:'02:00 PM',type:'Clinic / Camp',  coach_id:'c6',student_id:'s9', status:'upcoming',objective:'Beginner serve mechanics — grip, stance, motion'},
  {id:'ss31',date:'2026-03-18',time:'10:00 AM',type:'Private 1-on-1', coach_id:'c7',student_id:'s11',status:'upcoming',objective:'Topspin serve — brushing up the back of the ball'},
  {id:'ss32',date:'2026-03-19',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c8',student_id:'s12',status:'upcoming',objective:'Mental game under pressure — focus and reset'},
  {id:'ss33',date:'2026-03-19',time:'03:00 PM',type:'Match Play',     coach_id:'c1',student_id:'s13',status:'upcoming',objective:'Competitive match experience — fun and learning'},
  {id:'ss34',date:'2026-03-20',time:'10:00 AM',type:'Private 1-on-1', coach_id:'c2',student_id:'s14',status:'upcoming',objective:'Junior forehand aggression and shot patterns'},
  {id:'ss35',date:'2026-03-23',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c3',student_id:'s15',status:'upcoming',objective:'Serve and volley: wide serve then close the net'},
  {id:'ss36',date:'2026-03-23',time:'11:00 AM',type:'Group Lesson',   coach_id:'c4',student_id:'s16',status:'upcoming',objective:'Defensive patterns, counter-play and passing shots'},
  {id:'ss37',date:'2026-03-24',time:'02:00 PM',type:'Private 1-on-1', coach_id:'c5',student_id:'s17',status:'upcoming',objective:'Open stance forehand for recreational players'},
  {id:'ss38',date:'2026-03-24',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c6',student_id:'s18',status:'upcoming',objective:'Backhand cross-court and down-the-line control'},
  {id:'ss39',date:'2026-03-25',time:'10:00 AM',type:'Clinic / Camp',  coach_id:'c7',student_id:'s19',status:'upcoming',objective:'Junior all-around: serve and groundstrokes'},
  {id:'ss40',date:'2026-03-25',time:'03:00 PM',type:'Private 1-on-1', coach_id:'c8',student_id:'s20',status:'upcoming',objective:'Tournament strategy — managing emotions and game plan'},
  {id:'ss41',date:'2026-03-26',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c1',student_id:'s2', status:'upcoming',objective:'Serve progression — learning the full swing motion'},
  {id:'ss42',date:'2026-03-27',time:'10:00 AM',type:'Private 1-on-1', coach_id:'c2',student_id:'s6', status:'upcoming',objective:'Match awareness — when to attack vs defend'},
  {id:'ss43',date:'2026-03-30',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c3',student_id:'s8', status:'upcoming',objective:'Cross-court rally consistency and depth control'},
  {id:'ss44',date:'2026-03-30',time:'11:00 AM',type:'Match Play',     coach_id:'c4',student_id:'s10',status:'upcoming',objective:'Competitive pressure simulation with elite opponent'},
  {id:'ss45',date:'2026-03-31',time:'02:00 PM',type:'Private 1-on-1', coach_id:'c5',student_id:'s12',status:'upcoming',objective:'Serve: kick vs flat — situational choice'},
  {id:'ss46',date:'2026-04-01',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c6',student_id:'s14',status:'upcoming',objective:'FH to BH transition and neutral ball handling'},
  {id:'ss47',date:'2026-04-02',time:'10:00 AM',type:'Group Lesson',   coach_id:'c7',student_id:'s16',status:'upcoming',objective:'Net play confidence: approach, split, volley finish'},
  {id:'ss48',date:'2026-04-06',time:'09:00 AM',type:'Private 1-on-1', coach_id:'c8',student_id:'s18',status:'upcoming',objective:'Focus and reset routine — between-point ritual'},
  {id:'ss49',date:'2026-04-07',time:'11:00 AM',type:'Private 1-on-1', coach_id:'c1',student_id:'s4', status:'upcoming',objective:'Down-the-line backhand attack from defensive position'},
  {id:'ss50',date:'2026-04-08',time:'02:00 PM',type:'Clinic / Camp',  coach_id:'c2',student_id:'s20',status:'upcoming',objective:'Advanced topspin mechanics: forehand and backhand'},
];

const DRILL_LIBRARY = [
  {id:'d1', name:'Cone Target Serve',        category:'Serve',    level:'All',          desc:'Place cones in box corners and aim precisely.',                video:'https://youtube.com/watch?v=GiW3Huo1E1s', thumb:'https://img.youtube.com/vi/GiW3Huo1E1s/mqdefault.jpg'},
  {id:'d2', name:'Kick Serve Toss Drill',    category:'Serve',    level:'Intermediate', desc:'Ball toss at 12 o\'clock for topspin kick serves.',            video:'https://youtube.com/watch?v=nMU-xhVsxK8', thumb:'https://img.youtube.com/vi/nMU-xhVsxK8/mqdefault.jpg'},
  {id:'d3', name:'First Serve Consistency',  category:'Serve',    level:'Beginner',     desc:'50 first serves — focus on toss and trophy position.',         video:'https://youtube.com/watch?v=HO3kGnRbGcc', thumb:'https://img.youtube.com/vi/HO3kGnRbGcc/mqdefault.jpg'},
  {id:'d4', name:'Cross-Court FH Rally',     category:'Forehand', level:'All',          desc:'Continuous cross-court targeting inside the service line.',    video:'https://youtube.com/watch?v=7O5uu3TDXH4', thumb:'https://img.youtube.com/vi/7O5uu3TDXH4/mqdefault.jpg'},
  {id:'d5', name:'Inside-Out Forehand',      category:'Forehand', level:'Intermediate', desc:'Run around backhand and rip inside-out winners.',              video:'https://youtube.com/watch?v=oVJQtniRkdo', thumb:'https://img.youtube.com/vi/oVJQtniRkdo/mqdefault.jpg'},
  {id:'d6', name:'FH Drive Fed Balls',       category:'Forehand', level:'Beginner',     desc:'Coach feeds to FH; student drives deep cross-court.',          video:'https://youtube.com/watch?v=V5eNMXmXRbs', thumb:'https://img.youtube.com/vi/V5eNMXmXRbs/mqdefault.jpg'},
  {id:'d7', name:'BH Topspin vs Slice',      category:'Backhand', level:'All',          desc:'Alternate topspin and slice backhands in a rally.',            video:'https://youtube.com/watch?v=x5VIqCU4MqY', thumb:'https://img.youtube.com/vi/x5VIqCU4MqY/mqdefault.jpg'},
  {id:'d8', name:'BH Down The Line',         category:'Backhand', level:'Intermediate', desc:'From defensive position, redirect BH down the line.',          video:'https://youtube.com/watch?v=JqG8rSMm67k', thumb:'https://img.youtube.com/vi/JqG8rSMm67k/mqdefault.jpg'},
  {id:'d9', name:'Swinging Volley Drill',    category:'Net Play', level:'Intermediate', desc:'Attack mid-court balls with swinging volleys.',                video:'https://youtube.com/watch?v=9tmNAkTYj0I', thumb:'https://img.youtube.com/vi/9tmNAkTYj0I/mqdefault.jpg'},
  {id:'d10',name:'Serve & Volley 1-2 Punch', category:'Net Play', level:'Advanced',     desc:'Serve then rush net to close with a crisp volley.',            video:'https://youtube.com/watch?v=ue8Y4nImYLI', thumb:'https://img.youtube.com/vi/ue8Y4nImYLI/mqdefault.jpg'},
  {id:'d11',name:'Half-Volley Pickup',        category:'Net Play', level:'Beginner',     desc:'Dig low balls at the net with soft half-volley.',              video:'https://youtube.com/watch?v=8N52GS_gLXM', thumb:'https://img.youtube.com/vi/8N52GS_gLXM/mqdefault.jpg'},
  {id:'d12',name:'Spider Drill',              category:'Footwork', level:'All',          desc:'Classic sprint drill touching 6 spots around the court.',      video:'https://youtube.com/watch?v=ZBHSaYBGM5A', thumb:'https://img.youtube.com/vi/ZBHSaYBGM5A/mqdefault.jpg'},
  {id:'d13',name:'Split Step & React',        category:'Footwork', level:'Beginner',     desc:'Coach points L/R; player split-steps then explodes.',          video:'https://youtube.com/watch?v=nAOFxvM8RkA', thumb:'https://img.youtube.com/vi/nAOFxvM8RkA/mqdefault.jpg'},
  {id:'d14',name:'Lateral Shuffle Baseline',  category:'Footwork', level:'All',          desc:'Lateral shuffles baseline-to-baseline with cone touches.',     video:'https://youtube.com/watch?v=Fp6xbhv2uHI', thumb:'https://img.youtube.com/vi/Fp6xbhv2uHI/mqdefault.jpg'},
  {id:'d15',name:'Return Position Drill',     category:'Return',   level:'All',          desc:'Block-return fast first serves from a solid split-step.',      video:'https://youtube.com/watch?v=E65jz_xCRZI', thumb:'https://img.youtube.com/vi/E65jz_xCRZI/mqdefault.jpg'},
  {id:'d16',name:'Patterns: Open Court',      category:'Tactics',  level:'Intermediate', desc:'3-ball: slice BH → open FH → finish DTL.',                    video:'https://youtube.com/watch?v=YCvmrKq6Ywk', thumb:'https://img.youtube.com/vi/YCvmrKq6Ywk/mqdefault.jpg'},
  {id:'d17',name:'Point Construction',        category:'Tactics',  level:'Advanced',     desc:'Build a point from serve through rally to finish.',            video:'https://youtube.com/watch?v=MBhOeISjT-I', thumb:'https://img.youtube.com/vi/MBhOeISjT-I/mqdefault.jpg'},
];

const AVAIL_TIMES = ['07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM',
                     '01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM'];
const MONTHS      = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS_SHORT  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const DAY_NAMES   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// ─── Default weekly availability (Mon–Sat, Sundays off) ───
function makeDefaultAvail() {
  return {
    0:{on:false,start:'09:00',end:'17:00'},
    1:{on:true, start:'09:00',end:'18:00'},
    2:{on:true, start:'09:00',end:'18:00'},
    3:{on:true, start:'09:00',end:'18:00'},
    4:{on:true, start:'09:00',end:'18:00'},
    5:{on:true, start:'09:00',end:'18:00'},
    6:{on:true, start:'08:00',end:'13:00'},
  };
}
const WEEK_AVAIL = {};
DEMO_COACHES.forEach(c => WEEK_AVAIL[c.id] = makeDefaultAvail());
WEEK_AVAIL['c4'][0] = {on:true,start:'10:00',end:'14:00'}; // Aaliyah: Sundays
WEEK_AVAIL['c7'][0] = {on:true,start:'09:00',end:'12:00'}; // Darius: Sun mornings

let DEMO_BLOCKOUTS = [];

// ─── Core booking logic (pure, testable) ───────────────────

function isDatePast(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  return d < today;
}

function hasCoachConflict(sessions, coachId, date, time, excludeId) {
  return sessions.some(s =>
    s.coach_id === coachId && s.date === date && s.time === time &&
    s.status !== 'cancelled' && s.id !== excludeId
  );
}

function hasStudentConflict(sessions, studentId, date, time, excludeId) {
  return sessions.some(s =>
    s.student_id === studentId && s.date === date && s.time === time &&
    s.status !== 'cancelled' && s.id !== excludeId
  );
}

function getAvailableTimesForCoach(sessions, blockouts, weekAvail, coachId, date) {
  if (isDatePast(date)) return [];
  const dow = new Date(date + 'T00:00:00').getDay();
  const avail = (weekAvail[coachId] || makeDefaultAvail())[dow];
  if (!avail || !avail.on) return [];
  if (blockouts.some(b => b.coach_id === coachId && date >= b.from_date && date <= b.to_date)) return [];
  return AVAIL_TIMES.filter(t => !hasCoachConflict(sessions, coachId, date, t));
}

function getAvailableCoachesForDate(sessions, blockouts, weekAvail, date) {
  if (isDatePast(date)) return [];
  return DEMO_COACHES.filter(c =>
    getAvailableTimesForCoach(sessions, blockouts, weekAvail, c.id, date).length > 0
  );
}

function validateBooking(sessions, studentId, coachId, date, time, sessionType) {
  if (!sessionType) return {valid:false, error:'Please select a session type'};
  if (!date)        return {valid:false, error:'Please select a date'};
  if (!coachId)     return {valid:false, error:'Please select a coach'};
  if (!time)        return {valid:false, error:'Please select a time slot'};
  if (isDatePast(date)) return {valid:false, error:'Cannot book sessions in the past'};
  if (hasCoachConflict(sessions, coachId, date, time, null))
    return {valid:false, error:'Coach is already booked at this time'};
  if (hasStudentConflict(sessions, studentId, date, time, null))
    return {valid:false, error:'You already have a session at this time'};
  return {valid:true, error:null};
}

// ─── Email generation ──────────────────────────────────────

function levelLabel(l) {
  return {beginner:'Beginner (0–2.5)',intermediate:'Intermediate (3.0–3.5)',advanced:'Advanced (4.0–4.5)',elite:'Elite (5.0+)'}[l] || l || '—';
}
function styleLabel(s) {
  return {baseline:'Baseline Grinder',aggressive:'Aggressive Baseliner','serve-volley':'Serve & Volley',allcourt:'All-Court Player',defensive:'Counter-Puncher'}[s] || s || '—';
}
function fullName(p) { return `${p?.first_name||''} ${p?.last_name||''}`.trim(); }
function capitalize(s) { return s ? s.charAt(0).toUpperCase()+s.slice(1) : s; }
function avatarURL(p) {
  if (p?.avatar) return p.avatar;
  const n = encodeURIComponent(fullName(p)||'?');
  return `https://ui-avatars.com/api/?background=222&color=C9E70A&name=${n}&size=128`;
}

function generateBookingEmail(session, student, coach, recipient='student') {
  const isStudent = recipient === 'student';
  const age = student.age || 25;
  const ageGroup = age < 18 ? 'junior' : age < 35 ? 'young_adult' : age < 55 ? 'adult' : 'senior';
  const level = student.level || 'intermediate';
  const gender = student.gender || 'neutral';
  const pr = {male:{sub:'He',pos:'his'},female:{sub:'She',pos:'her'},neutral:{sub:'They',pos:'their'}}[gender];
  const d = new Date(session.date + 'T00:00:00');
  const fmtDate = d.toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  const coachName = `Coach ${coach.first_name} ${coach.last_name}`;

  const subject = isStudent
    ? `🎾 Session Confirmed — ${fmtDate} at ${session.time} with ${coachName}`
    : `🎾 New Booking: ${fullName(student)} — ${fmtDate} at ${session.time}`;

  const greetings = {
    student: {
      junior:      `Hey ${student.first_name}! 🎾 Your next session is confirmed and the court is ready for you!`,
      young_adult: `Hi ${student.first_name}! Great news — your tennis session is officially locked in and ready to go.`,
      adult:       `Hi ${student.first_name}! Your session is confirmed and on the books. Looking forward to seeing you out there!`,
      senior:      `Hi ${student.first_name}! Wonderful — your upcoming session has been confirmed. We're so glad you're with Big NC Tennis.`,
    },
    coach: {
      junior:      `Hi Coach ${coach.first_name}! A new junior booking is in — ${fullName(student)} is looking forward to working with you.`,
      young_adult: `Hi Coach ${coach.first_name}! ${fullName(student)} has booked a session and is excited to get on the court with you.`,
      adult:       `Hi Coach ${coach.first_name}! You have a new session booked with ${fullName(student)}. Here are the details below.`,
      senior:      `Hi Coach ${coach.first_name}! ${fullName(student)} has confirmed an upcoming session with you — details below.`,
    },
  };

  const encouragement = {
    student: {
      beginner:     `Every champion started exactly where you are — keep showing up and trust the process. You are building something special, one session at a time. The court rewards consistency, and you are already proving that commitment! 💪`,
      intermediate: `You are in the most exciting phase of the game — the breakthrough zone. Your fundamentals are solid, your shots are sharper, and your confidence is growing. This session is your next leap forward. Bring your focus and watch what happens! 🔥`,
      advanced:     `Your game is operating at a high level and this session is designed to push it even further. The margins get smaller at this stage — but the rewards get bigger. Come ready to compete even in practice. Every rep counts at this level. Let's make it count! ⚡`,
      elite:        `Champions are built in moments exactly like this — when you show up, push hard, and stay sharp. You are building a champion's mindset one session at a time. The court respects dedication. See you on the other side of a great training session! 🏆`,
    },
    coach: {
      beginner:     `${fullName(student)} is ${ageGroup==='junior'?'a junior player':'a new player'} beginning ${pr.pos} tennis journey. ${pr.sub} will respond best to patience, encouragement, and clear technical guidance. Your experience building foundations will make a real difference here.`,
      intermediate: `${fullName(student)} is at a critical growth stage — ${pr.pos} fundamentals are in place and ${pr.sub.toLowerCase()} is ready to break through to the next level with your coaching. Expect a motivated student ready to work hard.`,
      advanced:     `${fullName(student)} is an advanced player hungry for refinement and higher-level competition. ${pr.sub} responds well to technical feedback and high-intensity work. Expect a focused student ready to push boundaries.`,
      elite:        `${fullName(student)} is an elite-level player. ${pr.sub} brings serious competitive energy and is laser-focused on peak performance. High expectations — and outstanding results ahead for both of you.`,
    },
  };

  const details = [
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `📅  Date:         ${fmtDate}`,
    `⏰  Time:         ${session.time}`,
    `🎾  Session Type: ${session.type}`,
    isStudent ? `👨‍🏫  Coach:        ${coachName}` : `👤  Student:      ${fullName(student)} (${levelLabel(level)}, Age ${student.age||'—'})`,
    `📍  Location:     Big NC Tennis Courts, North Carolina`,
    session.objective ? `🎯  Objective:    ${session.objective}` : null,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
  ].filter(Boolean).join('\n');

  const closing = isStudent
    ? `Need to reschedule? Please contact us at least 24 hours before your session.\n\nSee you on the court — let's make it a great one!\n\n— The Big NC Tennis Team\n🌐 https://bignctennis.com`
    : `Your preparation and expertise make all the difference. Thank you for being a valued part of the Big NC Tennis coaching staff!\n\n— Big NC Tennis Scheduling\n🌐 https://bignctennis.com`;

  const body = [
    greetings[recipient][ageGroup],
    '',
    details,
    '',
    encouragement[recipient][level],
    '',
    closing,
  ].join('\n');

  return {
    subject,
    body,
    to: isStudent
      ? (student.email || `${student.first_name.toLowerCase()}@player.com`)
      : `${coach.first_name.toLowerCase()}@bignctennis.com`,
  };
}

// ─── Calendar export helpers ───────────────────────────────

function timeTo24h(timeStr) {
  const m = timeStr.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return '090000';
  let h = parseInt(m[1]), min = parseInt(m[2]);
  const pm = m[3].toUpperCase() === 'PM';
  if (pm && h !== 12) h += 12;
  if (!pm && h === 12) h = 0;
  return String(h).padStart(2,'0') + String(min).padStart(2,'0') + '00';
}

function addOneHour(timeStr) {
  const t = timeTo24h(timeStr);
  const h = (parseInt(t.slice(0,2)) + 1) % 24;
  return String(h).padStart(2,'0') + t.slice(2);
}

function toICSDateTime(dateStr, timeStr) {
  return dateStr.replace(/-/g,'') + 'T' + timeTo24h(timeStr);
}

function generateICS(session, student, coach) {
  const dtStart = toICSDateTime(session.date, session.time);
  const dtEnd   = session.date.replace(/-/g,'') + 'T' + addOneHour(session.time);
  const stamp   = new Date().toISOString().replace(/[-:.]/g,'').slice(0,15) + 'Z';
  const desc    = `Coach: ${fullName(coach)}\\nStudent: ${fullName(student)}\\nObjective: ${session.objective||'Great session!'}\\nhttps://bignctennis.com`.replace(/,/g,'\\,');
  return [
    'BEGIN:VCALENDAR','VERSION:2.0',
    'PRODID:-//Big NC Tennis//Schedule//EN',
    'CALSCALE:GREGORIAN','METHOD:REQUEST',
    'BEGIN:VEVENT',
    `DTSTART:${dtStart}`, `DTEND:${dtEnd}`,
    `SUMMARY:🎾 ${session.type} — Big NC Tennis`,
    `DESCRIPTION:${desc}`,
    'LOCATION:Big NC Tennis Courts\\, North Carolina',
    `UID:${session.id}-${Date.now()}@bignctennis.com`,
    `DTSTAMP:${stamp}`, 'STATUS:CONFIRMED',
    'END:VEVENT','END:VCALENDAR',
  ].join('\r\n');
}

function buildGoogleCalendarURL(session, student, coach) {
  const dtStart = toICSDateTime(session.date, session.time);
  const dtEnd   = session.date.replace(/-/g,'') + 'T' + addOneHour(session.time);
  const p = new URLSearchParams({
    action:'TEMPLATE',
    text:`🎾 ${session.type} — Big NC Tennis`,
    dates:`${dtStart}/${dtEnd}`,
    details:`Coach: ${fullName(coach)}\nStudent: ${fullName(student)}\nObjective: ${session.objective||''}\nhttps://bignctennis.com`,
    location:'Big NC Tennis Courts, North Carolina',
  });
  return `https://calendar.google.com/calendar/render?${p}`;
}

function buildOutlookURL(session, student, coach) {
  const t24 = timeTo24h(session.time);
  const h   = t24.slice(0,2), mn = t24.slice(2,4);
  const eh  = String((parseInt(h)+1)%24).padStart(2,'0');
  const p = new URLSearchParams({
    path:'/calendar/action/compose', rru:'addevent',
    subject:`🎾 ${session.type} — Big NC Tennis`,
    startdt:`${session.date}T${h}:${mn}:00`,
    enddt:`${session.date}T${eh}:${mn}:00`,
    body:`Coach: ${fullName(coach)}\nObjective: ${session.objective||''}\nhttps://bignctennis.com`,
    location:'Big NC Tennis Courts, North Carolina',
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${p}`;
}

function downloadICS(session, student, coach) {
  const ics  = generateICS(session, student, coach);
  const blob = new Blob([ics],{type:'text/calendar;charset=utf-8'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `bignctennis-${session.id}.ics`;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

function skillBarsHTML(skills) {
  return skills.map(s=>`
    <div class="skill-row">
      <span class="skill-name">${s.skill}</span>
      <div class="skill-bar-bg"><div class="skill-bar-fill" style="width:${s.value}%"></div></div>
      <span class="t-sm t2" style="width:32px;text-align:right">${s.value}%</span>
    </div>`).join('');
}

function row(label, value) {
  return `<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid var(--border)">
    <span class="t-sm t2">${label}</span>
    <span class="t-sm" style="text-align:right;max-width:60%">${value||'—'}</span>
  </div>`;
}

const DEMO_SKILLS = {
  s1: [{skill:'Serve',value:65},{skill:'Forehand',value:78},{skill:'Backhand',value:55},{skill:'Net Play',value:42},{skill:'Footwork',value:70},{skill:'Mental',value:60}],
  s10:[{skill:'Serve',value:88},{skill:'Forehand',value:85},{skill:'Backhand',value:82},{skill:'Net Play',value:70},{skill:'Footwork',value:90},{skill:'Mental',value:78}],
};

const DEMO_FEEDBACK = [
  {id:'fb1',coach_id:'c1',student_id:'s1', date:'Jan 10, 2026', text:"Alex showed real improvement on the second serve today. The kick serve is clicking — toss at 12 o'clock is much more consistent. Key focus for next session: pressure situations. Keep drilling the serve-plus-one pattern!"},
  {id:'fb2',coach_id:'c5',student_id:'s1', date:'Feb 12, 2026', text:"The inside-out forehand is becoming a real weapon. Alex ran around the backhand well today and the open-stance recovery improved a lot. Next: sharpen the inside-in as a surprise shot."},
  {id:'fb3',coach_id:'c2',student_id:'s2', date:'Jan 10, 2026', text:"Jordan had a fantastic first group lesson! Great attitude and picked up the continental grip quickly. Focus on low-to-high swing path with shadow swings at home."},
  {id:'fb4',coach_id:'c1',student_id:'s10',date:'Mar 5, 2026',  text:"Dakota played a full simulated match and performed extremely well under pressure. Serve needs more variation — second set we targeted the T and it worked beautifully. College scouts will love this kid."},
];

// ═══════════════════════════════════════════════════════════
// ★ ROSTER, SEASONS, ENROLLMENTS, ATTENDANCE, ASSIGNMENTS ★
// ═══════════════════════════════════════════════════════════

// ── Seasons ────────────────────────────────────────────────
var SEASONS = [
  {id:'sea1', name:'Fall 2025',   start:'2025-09-01', end:'2025-11-30', color:'#FF9F0A', archived:true,  active:false},
  {id:'sea2', name:'Winter 2026', start:'2026-01-05', end:'2026-03-15', color:'#0A84FF', archived:false, active:false},
  {id:'sea3', name:'Spring 2026', start:'2026-03-16', end:'2026-06-14', color:'#C9E70A', archived:false, active:true},
  {id:'sea4', name:'Summer 2026', start:'2026-06-15', end:'2026-08-30', color:'#34C759', archived:false, active:false},
];

// ── Enrollments (student ↔ season, with package & assigned coach) ───
var ENROLLMENTS = [
  // Fall 2025 (archived)
  {id:'en1', season_id:'sea1', student_id:'s1',  coach_id:'c1', pkg:12, attended:11, active:false},
  {id:'en2', season_id:'sea1', student_id:'s3',  coach_id:'c2', pkg:8,  attended:8,  active:false},
  {id:'en3', season_id:'sea1', student_id:'s6',  coach_id:'c7', pkg:10, attended:9,  active:false},
  {id:'en4', season_id:'sea1', student_id:'s10', coach_id:'c1', pkg:16, attended:16, active:false},
  {id:'en5', season_id:'sea1', student_id:'s15', coach_id:'c7', pkg:12, attended:10, active:false},
  {id:'en6', season_id:'sea1', student_id:'s12', coach_id:'c4', pkg:8,  attended:7,  active:false},
  {id:'en7', season_id:'sea1', student_id:'s20', coach_id:'c8', pkg:10, attended:9,  active:false},
  {id:'en8', season_id:'sea1', student_id:'s7',  coach_id:'c2', pkg:8,  attended:6,  active:false},

  // Winter 2026 (completed)
  {id:'en9', season_id:'sea2',  student_id:'s1',  coach_id:'c1', pkg:12, attended:12, active:false},
  {id:'en10',season_id:'sea2',  student_id:'s2',  coach_id:'c6', pkg:8,  attended:6,  active:false},
  {id:'en11',season_id:'sea2',  student_id:'s3',  coach_id:'c2', pkg:10, attended:9,  active:false},
  {id:'en12',season_id:'sea2',  student_id:'s4',  coach_id:'c5', pkg:8,  attended:5,  active:false},
  {id:'en13',season_id:'sea2',  student_id:'s5',  coach_id:'c6', pkg:6,  attended:4,  active:false},
  {id:'en14',season_id:'sea2',  student_id:'s6',  coach_id:'c7', pkg:12, attended:11, active:false},
  {id:'en15',season_id:'sea2',  student_id:'s8',  coach_id:'c5', pkg:8,  attended:7,  active:false},
  {id:'en16',season_id:'sea2',  student_id:'s10', coach_id:'c1', pkg:16, attended:14, active:false},
  {id:'en17',season_id:'sea2',  student_id:'s12', coach_id:'c4', pkg:8,  attended:8,  active:false},
  {id:'en18',season_id:'sea2',  student_id:'s14', coach_id:'c2', pkg:8,  attended:6,  active:false},
  {id:'en19',season_id:'sea2',  student_id:'s15', coach_id:'c7', pkg:10, attended:9,  active:false},
  {id:'en20',season_id:'sea2',  student_id:'s20', coach_id:'c8', pkg:12, attended:10, active:false},

  // Spring 2026 (ACTIVE) — all 20 students enrolled
  {id:'en21',season_id:'sea3', student_id:'s1',  coach_id:'c1', pkg:12, attended:3,  active:true},
  {id:'en22',season_id:'sea3', student_id:'s2',  coach_id:'c2', pkg:8,  attended:1,  active:true},
  {id:'en23',season_id:'sea3', student_id:'s3',  coach_id:'c2', pkg:10, attended:2,  active:true},
  {id:'en24',season_id:'sea3', student_id:'s4',  coach_id:'c3', pkg:8,  attended:1,  active:true},
  {id:'en25',season_id:'sea3', student_id:'s5',  coach_id:'c6', pkg:6,  attended:1,  active:true},
  {id:'en26',season_id:'sea3', student_id:'s6',  coach_id:'c7', pkg:12, attended:1,  active:true},
  {id:'en27',season_id:'sea3', student_id:'s7',  coach_id:'c2', pkg:8,  attended:1,  active:true},
  {id:'en28',season_id:'sea3', student_id:'s8',  coach_id:'c5', pkg:8,  attended:1,  active:true},
  {id:'en29',season_id:'sea3', student_id:'s9',  coach_id:'c6', pkg:6,  attended:1,  active:true},
  {id:'en30',season_id:'sea3', student_id:'s10', coach_id:'c1', pkg:16, attended:2,  active:true},
  {id:'en31',season_id:'sea3', student_id:'s11', coach_id:'c7', pkg:8,  attended:1,  active:true},
  {id:'en32',season_id:'sea3', student_id:'s12', coach_id:'c4', pkg:8,  attended:1,  active:true},
  {id:'en33',season_id:'sea3', student_id:'s13', coach_id:'c3', pkg:6,  attended:1,  active:true},
  {id:'en34',season_id:'sea3', student_id:'s14', coach_id:'c2', pkg:8,  attended:1,  active:true},
  {id:'en35',season_id:'sea3', student_id:'s15', coach_id:'c7', pkg:10, attended:1,  active:true},
  {id:'en36',season_id:'sea3', student_id:'s16', coach_id:'c8', pkg:8,  attended:1,  active:true},
  {id:'en37',season_id:'sea3', student_id:'s17', coach_id:'c5', pkg:6,  attended:1,  active:true},
  {id:'en38',season_id:'sea3', student_id:'s18', coach_id:'c6', pkg:8,  attended:1,  active:true},
  {id:'en39',season_id:'sea3', student_id:'s19', coach_id:'c3', pkg:6,  attended:1,  active:true},
  {id:'en40',season_id:'sea3', student_id:'s20', coach_id:'c8', pkg:12, attended:2,  active:true},
];

// ── Attendance records (per session, per student) ──────────
var ATTENDANCE_RECORDS = [
  // Spring 2026 confirmed attendance from DEMO_SESSIONS (past sessions)
  {id:'at1', session_id:'ss1', student_id:'s1',  coach_id:'c1', date:'2026-01-10', attended:true},
  {id:'at2', session_id:'ss2', student_id:'s2',  coach_id:'c2', date:'2026-01-10', attended:true},
  {id:'at3', session_id:'ss3', student_id:'s3',  coach_id:'c3', date:'2026-01-10', attended:true},
  {id:'at4', session_id:'ss4', student_id:'s4',  coach_id:'c4', date:'2026-01-12', attended:true},
  {id:'at5', session_id:'ss5', student_id:'s5',  coach_id:'c5', date:'2026-01-12', attended:false}, // missed
  {id:'at6', session_id:'ss6', student_id:'s6',  coach_id:'c6', date:'2026-01-13', attended:true},
  {id:'at7', session_id:'ss7', student_id:'s7',  coach_id:'c7', date:'2026-01-13', attended:true},
  {id:'at8', session_id:'ss8', student_id:'s8',  coach_id:'c8', date:'2026-01-13', attended:true},
  {id:'at9', session_id:'ss9', student_id:'s9',  coach_id:'c1', date:'2026-01-15', attended:true},
  {id:'at10',session_id:'ss10',student_id:'s10', coach_id:'c2', date:'2026-01-15', attended:true},
  {id:'at11',session_id:'ss11',student_id:'s11', coach_id:'c3', date:'2026-01-17', attended:false},// missed
  {id:'at12',session_id:'ss12',student_id:'s12', coach_id:'c4', date:'2026-01-20', attended:true},
  {id:'at13',session_id:'ss13',student_id:'s13', coach_id:'c5', date:'2026-01-22', attended:true},
  {id:'at14',session_id:'ss14',student_id:'s14', coach_id:'c6', date:'2026-01-24', attended:true},
  {id:'at15',session_id:'ss15',student_id:'s15', coach_id:'c7', date:'2026-01-27', attended:true},
  {id:'at16',session_id:'ss16',student_id:'s16', coach_id:'c8', date:'2026-01-29', attended:true},
  {id:'at17',session_id:'ss17',student_id:'s17', coach_id:'c1', date:'2026-02-03', attended:false},// missed
  {id:'at18',session_id:'ss18',student_id:'s18', coach_id:'c2', date:'2026-02-05', attended:true},
  {id:'at19',session_id:'ss19',student_id:'s19', coach_id:'c3', date:'2026-02-07', attended:true},
  {id:'at20',session_id:'ss20',student_id:'s20', coach_id:'c4', date:'2026-02-10', attended:true},
  {id:'at21',session_id:'ss21',student_id:'s1',  coach_id:'c5', date:'2026-02-12', attended:true},
  {id:'at22',session_id:'ss22',student_id:'s3',  coach_id:'c6', date:'2026-02-14', attended:true},
  {id:'at23',session_id:'ss23',student_id:'s5',  coach_id:'c7', date:'2026-02-17', attended:true},
  {id:'at24',session_id:'ss24',student_id:'s7',  coach_id:'c8', date:'2026-02-19', attended:true},
  {id:'at25',session_id:'ss25',student_id:'s10', coach_id:'c1', date:'2026-03-05', attended:true},
];

// ── Staff assignments per coach per season ─────────────────
var STAFF_ASSIGNMENTS = [
  {id:'sa1', season_id:'sea3', coach_id:'c1', student_ids:['s1','s10'],        max_students:6, role:'Head Coach'},
  {id:'sa2', season_id:'sea3', coach_id:'c2', student_ids:['s2','s3','s7','s14'], max_students:8, role:'Junior Coach'},
  {id:'sa3', season_id:'sea3', coach_id:'c3', student_ids:['s4','s13','s19'],  max_students:6, role:'Adult Coach'},
  {id:'sa4', season_id:'sea3', coach_id:'c4', student_ids:['s12'],             max_students:5, role:'Fitness Coach'},
  {id:'sa5', season_id:'sea3', coach_id:'c5', student_ids:['s8','s17'],        max_students:6, role:'All-Levels Coach'},
  {id:'sa6', season_id:'sea3', coach_id:'c6', student_ids:['s5','s9','s18'],   max_students:7, role:'Beginner Coach'},
  {id:'sa7', season_id:'sea3', coach_id:'c7', student_ids:['s6','s11','s15'],  max_students:6, role:'Technique Coach'},
  {id:'sa8', season_id:'sea3', coach_id:'c8', student_ids:['s16','s20'],       max_students:5, role:'Tactics Coach'},
];

// ═══════════════════════════════════════════════════════════
// ★ MATCHING ALGORITHM — Coach ↔ Student scoring engine ★
// ═══════════════════════════════════════════════════════════

// Level → which specialties are ideal matches
var LEVEL_SPECIALTY_SCORES = {
  beginner:     {'Beginner Specialist':25,'Junior Development':18,'Adult Recreational':15,'All Levels':20,'Fitness & Conditioning':8,'Competitive / Tournament':5,'Serve & Technique':8,'Mental Game & Tactics':5},
  intermediate: {'All Levels':25,'Competitive / Tournament':20,'Adult Recreational':20,'Serve & Technique':15,'Mental Game & Tactics':12,'Junior Development':10,'Beginner Specialist':5,'Fitness & Conditioning':10},
  advanced:     {'Competitive / Tournament':25,'Serve & Technique':22,'Mental Game & Tactics':20,'All Levels':15,'Fitness & Conditioning':12,'Junior Development':10,'Adult Recreational':8,'Beginner Specialist':2},
  elite:        {'Competitive / Tournament':25,'Mental Game & Tactics':22,'Serve & Technique':22,'All Levels':12,'Fitness & Conditioning':15,'Junior Development':10,'Adult Recreational':5,'Beginner Specialist':1},
};

// Focus area → coach specialty bonus
var FOCUS_SPECIALTY_BONUS = {
  serve:    {'Serve & Technique':15, 'Competitive / Tournament':8},
  forehand: {'Competitive / Tournament':10,'All Levels':8},
  backhand: {'Competitive / Tournament':8, 'All Levels':8},
  volley:   {'Serve & Technique':10,'Competitive / Tournament':8},
  footwork: {'Fitness & Conditioning':15,'All Levels':8},
  mental:   {'Mental Game & Tactics':15,'Competitive / Tournament':10},
  return:   {'Mental Game & Tactics':10,'Competitive / Tournament':10},
  tactic:   {'Mental Game & Tactics':15,'Competitive / Tournament':12},
};

// Age group → specialty bonus
var AGE_SPECIALTY_BONUS = {
  junior: {'Junior Development':15,'Beginner Specialist':8,'Competitive / Tournament':5},
  adult:  {'Adult Recreational':12,'All Levels':8,'Competitive / Tournament':5},
  senior: {'Adult Recreational':15,'Beginner Specialist':10,'All Levels':8},
};

function getAgeGroup(age) {
  if (age < 18) return 'junior';
  if (age < 55) return 'adult';
  return 'senior';
}

/**
 * Score a single coach-student pair (0–100)
 * Considers: level match, specialty, age group, focus areas, load balance
 */
function scoreCoachStudentPair(coach, student, currentLoad, maxLoad) {
  // Coach at full capacity → score 0 (disqualified)
  if (currentLoad >= (maxLoad || 8)) return 0;
  let score = 0;

  // 1. Level ↔ specialty match (max 25 pts)
  const levelScore = (LEVEL_SPECIALTY_SCORES[student.level] || {})[coach.specialty] || 0;
  score += levelScore;

  // 2. Age group match (max 15 pts)
  const ageGroup = getAgeGroup(student.age || 25);
  const ageScore = (AGE_SPECIALTY_BONUS[ageGroup] || {})[coach.specialty] || 0;
  score += ageScore;

  // 3. Focus area match (max 15 pts — pick best match)
  const focus = Array.isArray(student.focus) ? student.focus : [];
  let bestFocus = 0;
  focus.forEach(f => {
    const fb = (FOCUS_SPECIALTY_BONUS[f] || {})[coach.specialty] || 0;
    if (fb > bestFocus) bestFocus = fb;
  });
  score += bestFocus;

  // 4. Load balance (max 20 pts — reward coaches with capacity)
  const loadRatio = currentLoad / (maxLoad || 8);
  const loadScore = Math.round((1 - loadRatio) * 20);
  score += Math.max(0, loadScore);

  // 5. Years experience bonus (max 10 pts)
  const expScore = Math.min(10, Math.floor((coach.years || 0) / 2));
  score += expScore;

  return Math.min(100, score);
}

/**
 * Auto-schedule: assign coaches to all students in a season
 * Returns array of {student, coach, score, reason}
 */
function autoScheduleSeason(seasonId, students, coaches, existingEnrollments) {
  const coachLoads = {};
  const coachMaxStudents = {};
  coaches.forEach(c => { coachLoads[c.id] = 0; coachMaxStudents[c.id] = 8; });

  // Count existing assignments this season
  existingEnrollments
    .filter(e => e.season_id === seasonId && e.active)
    .forEach(e => { if (coachLoads[e.coach_id] !== undefined) coachLoads[e.coach_id]++; });

  const assignments = [];

  // Sort students: elite/advanced first (harder to place), then by level
  const ordered = [...students].sort((a,b) => {
    const order = {elite:0, advanced:1, intermediate:2, beginner:3};
    return (order[a.level]||3) - (order[b.level]||3);
  });

  ordered.forEach(student => {
    // Score every coach
    const scored = coaches.map(coach => {
      const load = coachLoads[coach.id] || 0;
      const max  = coachMaxStudents[coach.id] || 8;
      const full = load >= max;
      const raw  = scoreCoachStudentPair(coach, student, load, max);
      return { coach, score: full ? 0 : raw, load, max, full };
    }).sort((a,b) => b.score - a.score);

    const best = scored[0];
    if (best && !best.full) {
      coachLoads[best.coach.id]++;
      assignments.push({
        student,
        coach: best.coach,
        score: best.score,
        allScores: scored.map(s=>({coachId:s.coach.id,score:s.score,load:s.load})),
        reason: buildMatchReason(student, best.coach, best.score),
      });
    } else {
      // All coaches full — assign to least loaded
      const fallback = coaches.slice().sort((a,b)=>(coachLoads[a.id]||0)-(coachLoads[b.id]||0))[0];
      coachLoads[fallback.id]++;
      assignments.push({
        student, coach: fallback, score: 0,
        allScores: scored.map(s=>({coachId:s.coach.id,score:s.score,load:s.load})),
        reason: 'Overflow assignment — all coaches near capacity',
      });
    }
  });

  return assignments;
}

function buildMatchReason(student, coach, score) {
  const parts = [];
  const ls = (LEVEL_SPECIALTY_SCORES[student.level]||{})[coach.specialty]||0;
  if (ls >= 20) parts.push(`Strong level match (${student.level} → ${coach.specialty})`);
  const ag = getAgeGroup(student.age||25);
  const as = (AGE_SPECIALTY_BONUS[ag]||{})[coach.specialty]||0;
  if (as >= 12) parts.push(`Ideal age group fit (${ag})`);
  const focus = Array.isArray(student.focus)?student.focus:[];
  focus.forEach(f => {
    if (((FOCUS_SPECIALTY_BONUS[f]||{})[coach.specialty]||0) >= 10) parts.push(`Focus match: ${f}`);
  });
  if (score >= 60) parts.push('High compatibility score');
  return parts.length ? parts.join(' · ') : 'Best available match';
}

// ═══════════════════════════════════════════════════════════
// ★ ROSTER FORMULA ENGINE ★
// ═══════════════════════════════════════════════════════════

/** Attendance rate for a student across all their sessions (0–1) */
function attendanceRate(studentId, attendanceRecords) {
  const recs = attendanceRecords.filter(r => r.student_id === studentId);
  if (!recs.length) return null;
  return recs.filter(r => r.attended).length / recs.length;
}

/** Sessions remaining in package for an enrollment */
function sessionsRemaining(enrollment) {
  return Math.max(0, enrollment.pkg - enrollment.attended);
}

/** Completion percentage for an enrollment */
function enrollmentCompletion(enrollment) {
  if (!enrollment.pkg) return 0;
  return Math.round((enrollment.attended / enrollment.pkg) * 100);
}

/** Season progress as percentage (0–100) based on dates */
function seasonProgress(season) {
  const now   = Date.now();
  const start = new Date(season.start).getTime();
  const end   = new Date(season.end).getTime();
  if (now < start) return 0;
  if (now > end)   return 100;
  return Math.round(((now - start) / (end - start)) * 100);
}

/** Coach load summary for a season */
function coachLoadSummary(seasonId, enrollments, coaches) {
  return coaches.map(coach => {
    const assigned = enrollments.filter(e => e.season_id === seasonId && e.coach_id === coach.id && e.active);
    const totalPkg  = assigned.reduce((s,e) => s + e.pkg, 0);
    const totalAtt  = assigned.reduce((s,e) => s + e.attended, 0);
    return {
      coach,
      studentCount: assigned.length,
      totalSessions: totalPkg,
      completedSessions: totalAtt,
      utilizationPct: totalPkg ? Math.round((totalAtt/totalPkg)*100) : 0,
    };
  });
}

/** Get all-time attendance count for a student across ALL seasons */
function allTimeAttendance(studentId, enrollments) {
  return enrollments
    .filter(e => e.student_id === studentId)
    .reduce((sum, e) => sum + e.attended, 0);
}

/** Validate enrollment (used in tests and UI) */
function validateEnrollment(enrollment) {
  const errors = [];
  if (!enrollment.student_id) errors.push('Missing student');
  if (!enrollment.coach_id)   errors.push('Missing coach');
  if (!enrollment.season_id)  errors.push('Missing season');
  if (!enrollment.pkg || enrollment.pkg < 1)  errors.push('Package must be >= 1 session');
  if (enrollment.attended < 0) errors.push('Attended cannot be negative');
  if (enrollment.attended > enrollment.pkg) errors.push('Attended cannot exceed package');
  const dupCheck = ENROLLMENTS.filter(e =>
    e.season_id === enrollment.season_id &&
    e.student_id === enrollment.student_id &&
    e.id !== enrollment.id
  );
  if (dupCheck.length) errors.push('Student already enrolled in this season');
  return { valid: errors.length === 0, errors };
}

/** Season roster summary */
function seasonRosterSummary(seasonId, enrollments, students) {
  const active = enrollments.filter(e => e.season_id === seasonId && e.active);
  const inactive = enrollments.filter(e => e.season_id === seasonId && !e.active);
  const totalPkg = active.reduce((s,e) => s+e.pkg, 0);
  const totalAtt = active.reduce((s,e) => s+e.attended, 0);
  return {
    seasonId,
    activeStudents: active.length,
    inactiveStudents: inactive.length,
    totalPackageSessions: totalPkg,
    totalAttended: totalAtt,
    overallCompletionPct: totalPkg ? Math.round((totalAtt/totalPkg)*100) : 0,
    studentsAtRisk: active.filter(e => {
      const rate = attendanceRate(e.student_id, ATTENDANCE_RECORDS);
      return rate !== null && rate < 0.6;
    }).map(e => e.student_id),
  };
}

/** Mark attendance for a session (mutates ATTENDANCE_RECORDS & enrollment) */
function markAttendance(sessionId, studentId, coachId, date, attended) {
  const existing = ATTENDANCE_RECORDS.find(r => r.session_id === sessionId && r.student_id === studentId);
  if (existing) {
    const wasAttended = existing.attended;
    existing.attended = attended;
    // Adjust enrollment count
    const en = ENROLLMENTS.find(e => e.student_id === studentId && e.active);
    if (en) {
      if (attended && !wasAttended) en.attended = Math.min(en.pkg, en.attended + 1);
      if (!attended && wasAttended) en.attended = Math.max(0, en.attended - 1);
    }
    return { action: 'updated', record: existing };
  }
  const newRec = {
    id: 'at' + Date.now(),
    session_id: sessionId, student_id: studentId,
    coach_id: coachId, date, attended,
  };
  ATTENDANCE_RECORDS.push(newRec);
  if (attended) {
    const en = ENROLLMENTS.find(e => e.student_id === studentId && e.active);
    if (en) en.attended = Math.min(en.pkg, en.attended + 1);
  }
  return { action: 'created', record: newRec };
}

/** Enroll a student in a season */
function enrollStudent(seasonId, studentId, coachId, pkg) {
  const enrollment = { season_id: seasonId, student_id: studentId, coach_id: coachId, pkg, attended: 0, active: true };
  const v = validateEnrollment(enrollment);
  if (!v.valid) return { success: false, errors: v.errors };
  const newEn = { ...enrollment, id: 'en' + Date.now() };
  ENROLLMENTS.push(newEn);
  return { success: true, enrollment: newEn };
}

/** Remove (deactivate) a student from a season */
function unenrollStudent(enrollmentId) {
  const en = ENROLLMENTS.find(e => e.id === enrollmentId);
  if (!en) return { success: false, error: 'Enrollment not found' };
  en.active = false;
  return { success: true, enrollment: en };
}

/** Update enrollment package size */
function updatePackage(enrollmentId, newPkg) {
  if (newPkg < 1) return { success: false, error: 'Package must be at least 1 session' };
  const en = ENROLLMENTS.find(e => e.id === enrollmentId);
  if (!en) return { success: false, error: 'Enrollment not found' };
  if (newPkg < en.attended) return { success: false, error: `Cannot reduce package below attended count (${en.attended})` };
  en.pkg = newPkg;
  return { success: true, enrollment: en };
}

/** Season rollover: copy enrollments to a new season (includes completed/inactive seasons) */
function rolloverSeason(fromSeasonId, toSeasonId, studentIds) {
  // Include all enrollments from source (past seasons have active:false for all)
  const source = ENROLLMENTS.filter(e => e.season_id === fromSeasonId);
  // Deduplicate by student — keep the one with most attended
  const seen = {};
  source.forEach(e => { if (!seen[e.student_id] || e.attended > seen[e.student_id].attended) seen[e.student_id] = e; });
  let toRollover = Object.values(seen);
  if (studentIds) toRollover = toRollover.filter(e => studentIds.includes(e.student_id));
  const created = [];
  const skipped = [];
  toRollover.forEach(e => {
    // Skip only if an ACTIVE enrollment already exists in target season
    const already = ENROLLMENTS.find(x => x.season_id === toSeasonId && x.student_id === e.student_id && x.active);
    if (already) { skipped.push(e.student_id); return; }
    const newEn = { id:'en'+Date.now()+Math.random(), season_id: toSeasonId, student_id: e.student_id, coach_id: e.coach_id, pkg: e.pkg, attended: 0, active: true };
    ENROLLMENTS.push(newEn);
    created.push(newEn);
  });
  return { created: created.length, skipped: skipped.length, enrollments: created };
}
