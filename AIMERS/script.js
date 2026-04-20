
const COURSES = [
  { id:1, title:"The Complete Python Bootcamp: From Zero to Hero", instructor:"Jose Portilla", category:"Web Development", rating:4.9, reviews:142000, students:310000, hours:22, lectures:156, level:"All Levels", price:499, originalPrice:3499, image:"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=480&q=80", badge:"Bestseller", description:"Learn Python like a professional! Start from the basics and go all the way to creating your own applications and games. Includes Python 3, object-oriented programming, advanced modules, web scraping, Django, machine learning, and more.", highlights:["Learn Python from scratch","Build 5 real-world projects","Deploy apps to the web","Understand data structures and algorithms","Work with databases"], tag:"python" },
  { id:2, title:"Machine Learning A-Z: AI, Python & R + ChatGPT", instructor:"Kirill Eremenko", category:"AI & ML", rating:4.8, reviews:98000, students:215000, hours:44, lectures:305, level:"Intermediate", price:599, originalPrice:3999, image:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=480&q=80", badge:"Hot & New", description:"Master Machine Learning on Python & R. Hands-on exercises with intuitive explanations and real-world use-cases. Dive into ML algorithms, neural networks, deep learning, and natural language processing.", highlights:["Understand ML concepts deeply","Implement algorithms from scratch","Use Python and R","Work with real datasets","Build production-ready models"], tag:"ml" },
  { id:3, title:"The Web Developer Bootcamp 2025", instructor:"Colt Steele", category:"Web Development", rating:4.8, reviews:87000, students:195000, hours:65, lectures:430, level:"Beginner", price:399, originalPrice:2999, image:"https://images.unsplash.com/photo-1547658719-da2b51169166?w=480&q=80", badge:"Bestseller", description:"The only course you need to learn web development! Covers HTML, CSS, JavaScript, React, Node, MongoDB and much more. Built by expert developer with 10+ years of experience.", highlights:["Full stack web development","HTML, CSS & JavaScript","React & Node.js","MongoDB & Express","Deploy to Heroku & AWS"], tag:"webdev" },
  { id:4, title:"UI/UX Design Masterclass with Figma", instructor:"Vako Shvili", category:"Design", rating:4.7, reviews:54000, students:120000, hours:28, lectures:210, level:"Beginner", price:449, originalPrice:2799, image:"https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=480&q=80", badge:null, description:"Master UI/UX design from scratch. Learn Figma, design principles, user research, prototyping, and design systems. Build a professional portfolio that gets you hired.", highlights:["Design with Figma","UX research methods","Build design systems","Create interactive prototypes","Portfolio projects"], tag:"design" },
  { id:5, title:"AWS Certified Solutions Architect 2025", instructor:"Ryan Kroonenburg", category:"Cybersecurity", rating:4.7, reviews:76000, students:180000, hours:32, lectures:340, level:"Intermediate", price:699, originalPrice:4499, image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=480&q=80", badge:"Top Rated", description:"Pass the AWS Solutions Architect exam and launch your cloud career. Includes hands-on labs, practice exams, and comprehensive coverage of all AWS services.", highlights:["AWS core services","Cloud architecture","Security & compliance","High availability","Real exam tips"], tag:"cloud" },
  { id:6, title:"Complete Digital Marketing Masterclass", instructor:"Daragh Walsh", category:"Marketing", rating:4.6, reviews:42000, students:98000, hours:23, lectures:180, level:"Beginner", price:349, originalPrice:2499, image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&q=80", badge:null, description:"Master digital marketing including SEO, social media, email marketing, Google Ads, Facebook Ads, content marketing, and analytics. Build your marketing career or grow your business.", highlights:["SEO & SEM strategy","Social media marketing","Email campaigns","Google & Facebook Ads","Analytics & ROI"], tag:"marketing" },
  { id:7, title:"Data Science & Analytics with Python", instructor:"Jose Manu", category:"Data Science", rating:4.9, reviews:65000, students:140000, hours:36, lectures:260, level:"Intermediate", price:549, originalPrice:3799, image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&q=80", badge:"Bestseller", description:"Become a data scientist! Learn data analysis, visualization, machine learning, and statistical modeling using Python, Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn.", highlights:["Python for data science","Pandas & NumPy","Data visualization","Statistical analysis","Machine learning basics"], tag:"data" },
  { id:8, title:"Photography Masterclass: Complete Guide", instructor:"Phil Ebiner", category:"Photography", rating:4.7, reviews:33000, students:75000, hours:14, lectures:115, level:"All Levels", price:299, originalPrice:1999, image:"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=480&q=80", badge:null, description:"Learn photography from scratch to advanced. Master your camera, understand light, edit photos professionally, and build a photography business.", highlights:["Camera fundamentals","Lighting mastery","Photo editing in Lightroom","Portrait & landscape photography","Start a photography business"], tag:"photo" },
  { id:9, title:"React – The Complete Guide 2025", instructor:"Maximilian Schwarzmüller", category:"Web Development", rating:4.8, reviews:112000, students:250000, hours:49, lectures:380, level:"Intermediate", price:499, originalPrice:3599, image:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=480&q=80", badge:"Bestseller", description:"Dive in and learn React from scratch! Learn Reactjs, Hooks, Redux, React Router, Next.js, and more. Build enterprise-level applications.", highlights:["React from zero to hero","Hooks & Context API","Redux for state management","Next.js & SSR","Testing React apps"], tag:"react" },
  { id:10, title:"Business Analytics & Intelligence with Excel", instructor:"365 DataScience", category:"Business", rating:4.6, reviews:28000, students:62000, hours:18, lectures:140, level:"Beginner", price:379, originalPrice:2299, image:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=480&q=80", badge:"New", description:"Master Excel for data analysis and business intelligence. Learn Power Query, Power Pivot, DAX formulas, dashboards, and data visualization for business decision making.", highlights:["Advanced Excel formulas","Power Query & Power Pivot","Business dashboards","Data modeling","DAX & M language"], tag:"business" },
  { id:11, title:"Ethical Hacking & Penetration Testing", instructor:"Zaid Sabih", category:"Cybersecurity", rating:4.8, reviews:58000, students:130000, hours:30, lectures:220, level:"Beginner", price:649, originalPrice:4199, image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=480&q=80", badge:"Top Rated", description:"Learn ethical hacking from scratch. Understand network security, system hacking, web application attacks, penetration testing, and how to protect systems from real-world attacks.", highlights:["Network security fundamentals","Web application attacks","System hacking","Metasploit framework","Bug bounty hunting"], tag:"security" },
  { id:12, title:"Complete Graphic Design: Photoshop, Illustrator & More", instructor:"Lindsay Marsh", category:"Design", rating:4.7, reviews:44000, students:95000, hours:25, lectures:195, level:"Beginner", price:429, originalPrice:2899, image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=480&q=80", badge:null, description:"Become a professional graphic designer. Learn Adobe Photoshop, Illustrator, InDesign, logo design, branding, print design, and digital design from industry professionals.", highlights:["Adobe Photoshop mastery","Adobe Illustrator","Logo & branding design","Print & digital design","Build a design portfolio"], tag:"graphic" },
];

const JOBS = [
  { id:1, title:"Senior Frontend Developer", company:"Infosys", logo:"🏢", type:"Full-time", location:"Bangalore", remote:true, exp:"3-5 yrs", salary:"₹18-28 LPA", skills:["React","TypeScript","CSS","Node.js"], posted:"2 days ago", desc:"We are looking for an experienced Frontend Developer to join our growing team. You'll build scalable, performant web applications using modern JavaScript frameworks.", requirements:["5+ years of JavaScript experience","Strong proficiency in React","Experience with TypeScript","Knowledge of web performance optimization","Excellent communication skills"] },
  { id:2, title:"Data Scientist – AI/ML Team", company:"Google India", logo:"🔵", type:"Full-time", location:"Hyderabad", remote:false, exp:"1-3 yrs", salary:"₹25-40 LPA", skills:["Python","TensorFlow","ML","SQL"], posted:"1 day ago", desc:"Join Google's AI/ML team to build next-generation machine learning models that power our products. Work on large-scale distributed systems and cutting-edge AI research.", requirements:["MS or PhD in CS, Statistics, or related field","Proficiency in Python and ML frameworks","Experience with large-scale data processing","Published research papers (preferred)","Strong problem-solving skills"] },
  { id:3, title:"UI/UX Designer – Product Team", company:"Swiggy", logo:"🧡", type:"Full-time", location:"Bangalore", remote:true, exp:"1-3 yrs", salary:"₹12-20 LPA", skills:["Figma","Prototyping","User Research","Design Systems"], posted:"3 days ago", desc:"Design beautiful, user-centric interfaces for millions of Swiggy users. Collaborate with product managers and engineers to bring ideas to life.", requirements:["3+ years of UX/UI design experience","Proficiency in Figma","Strong portfolio with mobile/web projects","Experience conducting user research","Knowledge of design systems"] },
  { id:4, title:"Cloud Solutions Architect", company:"Amazon AWS", logo:"🟠", type:"Full-time", location:"Mumbai", remote:false, exp:"5+ yrs", salary:"₹35-55 LPA", skills:["AWS","Cloud Architecture","Python","DevOps"], posted:"5 days ago", desc:"Help customers design and implement robust, scalable cloud architectures on AWS. You'll work directly with enterprise clients across various industries.", requirements:["AWS Certified Solutions Architect","7+ years in IT infrastructure","Experience with enterprise clients","Knowledge of security best practices","Strong presentation skills"] },
  { id:5, title:"Full Stack Developer Intern", company:"Razorpay", logo:"💙", type:"Internship", location:"Bangalore", remote:true, exp:"Fresher", salary:"₹40,000/mo", skills:["React","Node.js","MongoDB","REST APIs"], posted:"1 day ago", desc:"Join Razorpay as an intern and get hands-on experience building fintech products. Great opportunity for final year students and recent graduates.", requirements:["Currently pursuing B.Tech/MCA","Good knowledge of React and Node","Understanding of REST APIs","Eagerness to learn","Available for 6 months"] },
  { id:6, title:"Digital Marketing Manager", company:"Flipkart", logo:"🟡", type:"Full-time", location:"Bangalore", remote:false, exp:"3-5 yrs", salary:"₹15-22 LPA", skills:["SEO","Google Ads","Analytics","Content Strategy"], posted:"1 week ago", desc:"Lead digital marketing initiatives for Flipkart's seller platform. Manage a team of marketers and drive customer acquisition through multiple digital channels.", requirements:["5+ years in digital marketing","Experience with performance marketing","Proficiency in Google Analytics","Team leadership experience","Data-driven mindset"] },
  { id:7, title:"Cybersecurity Analyst", company:"HCL Technologies", logo:"🔴", type:"Full-time", location:"Chennai", remote:true, exp:"1-3 yrs", salary:"₹10-18 LPA", skills:["Ethical Hacking","SIEM","Penetration Testing","Python"], posted:"4 days ago", desc:"Protect HCL's global infrastructure by identifying vulnerabilities, monitoring threats, and implementing security controls across enterprise systems.", requirements:["CEH or CISSP certification preferred","Experience with SIEM tools","Knowledge of network security","Incident response skills","Strong analytical ability"] },
  { id:8, title:"Business Analyst – Strategy", company:"Deloitte India", logo:"🟢", type:"Full-time", location:"Delhi", remote:false, exp:"1-3 yrs", salary:"₹14-22 LPA", skills:["Excel","PowerBI","SQL","Business Intelligence"], posted:"3 days ago", desc:"Support strategic consulting projects across BFSI, retail, and healthcare sectors. Analyze business data, identify insights, and present recommendations to clients.", requirements:["MBA or B.Tech with analytics focus","Advanced Excel and SQL skills","Experience with PowerBI or Tableau","Strong communication skills","Consulting mindset"] },
  { id:9, title:"Freelance Content Creator", company:"Self / Multiple Clients", logo:"✍️", type:"Freelance", location:"Remote", remote:true, exp:"Fresher", salary:"₹20-60K/project", skills:["Content Writing","SEO","Social Media","Video Editing"], posted:"Ongoing", desc:"Create engaging content for tech startups and e-learning platforms. Flexible hours, remote work. Perfect for students and recent graduates.", requirements:["Excellent written communication","Basic SEO knowledge","Portfolio of writing samples","Self-motivated","Consistent delivery"] },
];

const INSTRUCTORS = [
  { name:"Dr. Anil Sharma", subject:"Machine Learning", rating:4.9, students:"120K", img:"https://i.pravatar.cc/80?img=11" },
  { name:"Priya Mehta", subject:"Web Development", rating:4.8, students:"95K", img:"https://i.pravatar.cc/80?img=12" },
  { name:"Rohit Desai", subject:"Data Science", rating:4.9, students:"88K", img:"https://i.pravatar.cc/80?img=13" },
  { name:"Sarah Connor", subject:"UX Design", rating:4.7, students:"64K", img:"https://i.pravatar.cc/80?img=14" },
  { name:"James Patel", subject:"Cybersecurity", rating:4.8, students:"72K", img:"https://i.pravatar.cc/80?img=15" },
  { name:"Neha Gupta", subject:"Business Strategy", rating:4.6, students:"53K", img:"https://i.pravatar.cc/80?img=16" },
];

let enrolledIds = [1, 3, 9];
let wishlistedIds = [];
let currentTab = 'home';
let currentCategoryFilter = 'all';

/* ─── UTILS ─── */
function showToast(msg, type='success'){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast ${type}`;
  t.classList.remove('hidden');
  setTimeout(()=> t.classList.add('hidden'), 3000);
}

function starsHTML(r){
  const full = Math.floor(r), half = r % 1 >= 0.5;
  let s = '';
  for(let i=0;i<full;i++) s+='★';
  if(half) s+='☆';
  return s;
}

/* ─── AUTH ─── */
function doLogin(){
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value.trim();
  const err = document.getElementById('login-error');
  if((u==='admin'||u==='admin@aimers.io') && p==='admin123'){
    document.getElementById('page-login').classList.remove('active');
    document.getElementById('page-home').classList.add('active');
    err.classList.add('hidden');
    initApp();
  } else {
    err.classList.remove('hidden');
    err.textContent = '❌ Invalid credentials. Use: admin / admin123';
  }
}

function logout(){
  document.getElementById('page-home').classList.remove('active');
  document.getElementById('page-login').classList.add('active');
  document.getElementById('login-user').value='';
  document.getElementById('login-pass').value='';
}

function togglePass(){
  const inp = document.getElementById('login-pass');
  inp.type = inp.type==='password' ? 'text' : 'password';
}

// Enter key login
document.addEventListener('keydown', e=>{
  if(e.key==='Enter' && document.getElementById('page-login').classList.contains('active')) doLogin();
});

/* ─── NAVIGATION ─── */
function switchTab(tab){
  // Remove active from all tabs and content
  document.querySelectorAll('.tab-content').forEach(t=> t.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t=> t.classList.remove('active'));
  // Activate
  document.getElementById(`tab-${tab}`).classList.add('active');
  const btn = document.querySelector(`[data-tab="${tab}"]`);
  if(btn) btn.classList.add('active');
  currentTab = tab;
  // Scroll to top
  window.scrollTo(0,0);
}

function goHome(){ switchTab('home'); }

function toggleMobileMenu(){
  const m = document.getElementById('mobile-menu');
  m.classList.toggle('hidden');
}

/* ─── SEARCH ─── */
function filterSearch(q){
  const dd = document.getElementById('search-dropdown');
  if(!q || q.length < 2){ dd.classList.add('hidden'); return; }
  const results = COURSES.filter(c=>
    c.title.toLowerCase().includes(q.toLowerCase()) ||
    c.category.toLowerCase().includes(q.toLowerCase()) ||
    c.instructor.toLowerCase().includes(q.toLowerCase())
  ).slice(0,6);
  if(results.length===0){ dd.classList.add('hidden'); return; }
  dd.innerHTML = results.map(c=>`
    <div class="search-item" onclick="openCourseModal(${c.id}); document.getElementById('global-search').value=''; document.getElementById('search-dropdown').classList.add('hidden')">
      <i class="fa fa-graduation-cap"></i>
      <div>
        <div style="font-weight:600">${c.title}</div>
        <div style="font-size:0.78rem;color:var(--text-muted)">${c.category} · ${c.instructor}</div>
      </div>
    </div>
  `).join('');
  dd.classList.remove('hidden');
}

// Close search dropdown on outside click
document.addEventListener('click', e=>{
  if(!e.target.closest('.nav-search-wrap')) document.getElementById('search-dropdown')?.classList.add('hidden');
});

/* ─── INIT ─── */
function initApp(){
  renderFeaturedCourses();
  renderInstructors();
  renderCourses();
  renderCategoryPills();
  renderEnrolled();
  renderRecommended();
  renderJobs();
  updateMLStats();
}

/* ─── HOME SECTION ─── */
function renderFeaturedCourses(){
  const el = document.getElementById('featured-courses');
  const featured = COURSES.slice(0,4);
  el.innerHTML = featured.map(c=> courseCardHTML(c)).join('');
}

function renderInstructors(){
  const el = document.getElementById('instructors-row');
  el.innerHTML = INSTRUCTORS.map(i=>`
    <div class="instructor-card">
      <img src="${i.img}" alt="${i.name}" />
      <h4>${i.name}</h4>
      <p>${i.subject}</p>
      <div class="instructor-stat"><i class="fa fa-star" style="color:var(--gold)"></i> ${i.rating} · ${i.students} students</div>
    </div>
  `).join('');
}

/* ─── COURSES ─── */
function renderCategoryPills(){
  const cats = ['all',...new Set(COURSES.map(c=>c.category))];
  const el = document.getElementById('cat-pills');
  el.innerHTML = cats.map(c=>`
    <div class="pill${c===currentCategoryFilter?' active':''}" onclick="setCatFilter('${c}')">${c==='all'?'All':c}</div>
  `).join('');
}

function setCatFilter(cat){
  currentCategoryFilter = cat;
  renderCategoryPills();
  renderCourses();
}

function filterCategory(cat){
  currentCategoryFilter = cat;
  switchTab('courses');
  setTimeout(()=>{ renderCategoryPills(); renderCourses(); },50);
}

function renderCourses(){
  const searchQ = (document.getElementById('courses-search')?.value||'').toLowerCase();
  const sort = document.getElementById('courses-sort')?.value||'popular';
  let list = COURSES.filter(c=>{
    const matchCat = currentCategoryFilter==='all' || c.category===currentCategoryFilter;
    const matchSearch = !searchQ || c.title.toLowerCase().includes(searchQ) || c.instructor.toLowerCase().includes(searchQ);
    return matchCat && matchSearch;
  });
  // Sort
  if(sort==='rating') list.sort((a,b)=>b.rating-a.rating);
  else if(sort==='price-low') list.sort((a,b)=>a.price-b.price);
  else if(sort==='price-high') list.sort((a,b)=>b.price-a.price);
  else if(sort==='newest') list.sort((a,b)=>b.id-a.id);
  else list.sort((a,b)=>b.students-a.students);

  const el = document.getElementById('all-courses-grid');
  if(list.length===0){
    el.innerHTML = `<div class="no-results" style="grid-column:1/-1"><i class="fa fa-search"></i><p>No courses found. Try a different search.</p></div>`;
    return;
  }
  el.innerHTML = list.map(c=> courseCardHTML(c)).join('');
}

function courseCardHTML(c){
  const enrolled = enrolledIds.includes(c.id);
  const wished = wishlistedIds.includes(c.id);
  return `
  <div class="course-card" onclick="openCourseModal(${c.id})">
    <div class="course-thumb">
      <img src="${c.image}" alt="${c.title}" loading="lazy" />
      ${c.badge?`<div class="course-badge">${c.badge}</div>`:''}
      <div class="course-wishlist" onclick="toggleWishlist(event,${c.id})">
        <i class="fa${wished?'s':''} fa-heart" style="${wished?'color:var(--danger)':''}"></i>
      </div>
    </div>
    <div class="course-body">
      <div class="course-cat">${c.category}</div>
      <div class="course-title">${c.title}</div>
      <div class="course-instructor">${c.instructor}</div>
      <div class="course-rating">
        <span class="stars">${starsHTML(c.rating)}</span>
        <span class="rating-score">${c.rating}</span>
        <span class="rating-count">(${(c.reviews/1000).toFixed(0)}K)</span>
      </div>
      <div class="course-meta">
        <span><i class="fa fa-clock"></i>${c.hours}h</span>
        <span><i class="fa fa-play-circle"></i>${c.lectures} lectures</span>
        <span><i class="fa fa-signal"></i>${c.level}</span>
      </div>
      <div class="course-footer">
        <div>
          <span class="course-price">₹${c.price}</span>
          <span class="course-price-original">₹${c.originalPrice}</span>
        </div>
        <button class="btn-enroll" onclick="enrollCourse(event,${c.id})">${enrolled?'<i class="fa fa-check"></i> Enrolled':'Enroll Now'}</button>
      </div>
    </div>
  </div>`;
}

function toggleWishlist(e, id){
  e.stopPropagation();
  if(wishlistedIds.includes(id)){
    wishlistedIds = wishlistedIds.filter(i=>i!==id);
    showToast('Removed from wishlist','success');
  } else {
    wishlistedIds.push(id);
    showToast('❤️ Added to wishlist','success');
  }
  renderCourses();
  renderFeaturedCourses();
}

function enrollCourse(e, id){
  e.stopPropagation();
  if(enrolledIds.includes(id)){ showToast('Already enrolled!','success'); return; }
  enrolledIds.push(id);
  showToast('🎉 Successfully enrolled!','success');
  renderCourses();
  renderFeaturedCourses();
  renderEnrolled();
  renderRecommended();
  updateMLStats();
}

/* ─── MY LEARNING ─── */
function updateMLStats(){
  const el = document.getElementById('ml-enrolled');
  if(el) el.textContent = enrolledIds.length;
}

function renderEnrolled(){
  const el = document.getElementById('enrolled-list');
  if(!el) return;
  const courses = COURSES.filter(c=> enrolledIds.includes(c.id));
  if(courses.length===0){
    el.innerHTML='<div class="no-results"><i class="fa fa-book-open"></i><p>You haven\'t enrolled in any courses yet.</p></div>';
    return;
  }
  const progMap = {1:72, 3:35, 9:15};
  el.innerHTML = courses.map(c=>{
    const prog = progMap[c.id]||Math.floor(Math.random()*80+10);
    return `
    <div class="enrolled-card" onclick="openCourseModal(${c.id})">
      <div class="enrolled-thumb"><img src="${c.image}" alt="${c.title}" loading="lazy" /></div>
      <div class="enrolled-info">
        <h4>${c.title}</h4>
        <p>${c.instructor} · ${c.category}</p>
        <div class="progress-bar-wrap"><div class="progress-bar" style="width:${prog}%"></div></div>
        <div class="progress-label">${prog}% complete · ${c.hours - Math.floor(c.hours*prog/100)}h remaining</div>
      </div>
      <div class="enrolled-actions">
        <button class="btn-continue" onclick="event.stopPropagation();showToast('▶️ Resuming course…')">Continue</button>
      </div>
    </div>`;
  }).join('');
}

function renderRecommended(){
  const el = document.getElementById('recommended-courses');
  if(!el) return;
  const rec = COURSES.filter(c=> !enrolledIds.includes(c.id)).slice(0,4);
  el.innerHTML = rec.map(c=> courseCardHTML(c)).join('');
}

/* ─── JOBS ─── */
function renderJobs(){
  const searchQ = (document.getElementById('jobs-search')?.value||'').toLowerCase();
  const type = document.getElementById('jobs-type')?.value||'all';
  const exp = document.getElementById('jobs-exp')?.value||'all';

  let list = JOBS.filter(j=>{
    const matchSearch = !searchQ || j.title.toLowerCase().includes(searchQ) || j.company.toLowerCase().includes(searchQ) || j.skills.some(s=>s.toLowerCase().includes(searchQ));
    const matchType = type==='all' || j.type===type || (type==='Remote' && j.remote);
    const matchExp = exp==='all' || j.exp===exp;
    return matchSearch && matchType && matchExp;
  });

  const el = document.getElementById('jobs-list');
  if(list.length===0){
    el.innerHTML='<div class="no-results"><i class="fa fa-briefcase"></i><p>No jobs match your filters.</p></div>';
    return;
  }
  el.innerHTML = list.map(j=>`
    <div class="job-card" onclick="openJobModal(${j.id})">
      <div class="job-logo">${j.logo}</div>
      <div class="job-info">
        <h3>${j.title}</h3>
        <div class="company">${j.company} · ${j.location}</div>
        <div class="job-tags">
          <span class="job-tag">${j.type}</span>
          ${j.remote?'<span class="job-tag remote">🌐 Remote</span>':''}
          <span class="job-tag exp">${j.exp}</span>
          ${j.skills.slice(0,3).map(s=>`<span class="job-tag">${s}</span>`).join('')}
        </div>
      </div>
      <div class="job-right">
        <div class="job-salary">${j.salary}</div>
        <div class="job-posted"><i class="fa fa-clock"></i> ${j.posted}</div>
        <button class="btn-apply" onclick="event.stopPropagation();applyJob(${j.id})">Apply Now</button>
      </div>
    </div>`).join('');
}

function applyJob(id){
  showToast('✅ Application submitted successfully!','success');
}

/* ─── MODALS ─── */
function openCourseModal(id){
  const c = COURSES.find(x=>x.id===id);
  if(!c) return;
  const enrolled = enrolledIds.includes(c.id);
  const discount = Math.round((1 - c.price/c.originalPrice)*100);
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header">
      <img src="${c.image}" alt="${c.title}" />
      <div class="modal-header-overlay"></div>
      <h2>${c.title}</h2>
      <div class="modal-close" onclick="closeCourseModal()"><i class="fa fa-times"></i></div>
    </div>
    <div class="modal-body">
      <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;flex-wrap:wrap">
        ${c.badge?`<span style="background:var(--primary);color:#fff;padding:3px 10px;border-radius:50px;font-size:0.75rem;font-weight:700;text-transform:uppercase">${c.badge}</span>`:''}
        <span style="background:#ecfdf5;color:var(--success);padding:3px 10px;border-radius:50px;font-size:0.78rem;font-weight:700">${discount}% OFF</span>
        <span style="font-size:0.85rem;color:var(--text-muted)">${c.category}</span>
      </div>
      <div class="modal-meta">
        <div class="modal-meta-item"><i class="fa fa-star" style="color:var(--gold)"></i><strong>${c.rating}</strong> rating</div>
        <div class="modal-meta-item"><i class="fa fa-users"></i><strong>${(c.students/1000).toFixed(0)}K</strong> students</div>
        <div class="modal-meta-item"><i class="fa fa-clock"></i><strong>${c.hours}h</strong> content</div>
        <div class="modal-meta-item"><i class="fa fa-play-circle"></i><strong>${c.lectures}</strong> lectures</div>
        <div class="modal-meta-item"><i class="fa fa-signal"></i><strong>${c.level}</strong></div>
        <div class="modal-meta-item"><i class="fa fa-user-tie"></i><strong>${c.instructor}</strong></div>
      </div>
      <div class="modal-section">
        <h3>About this course</h3>
        <p>${c.description}</p>
        <h3>What you'll learn</h3>
        <ul>${c.highlights.map(h=>`<li>✅ ${h}</li>`).join('')}</ul>
      </div>
      <div class="modal-actions">
        <div>
          <span class="modal-price">₹${c.price}</span>
          <span style="font-size:0.9rem;color:var(--text-muted);text-decoration:line-through;margin-left:0.5rem">₹${c.originalPrice}</span>
        </div>
        ${enrolled
          ? `<button class="btn-primary" onclick="showToast('▶️ Resuming course…');closeCourseModal()"><i class="fa fa-play"></i> Continue Learning</button>`
          : `<button class="btn-primary" onclick="enrollCourse(event,${c.id});closeCourseModal()"><i class="fa fa-graduation-cap"></i> Enroll Now</button>`
        }
        <button class="btn-outline" onclick="toggleWishlist(event,${c.id});document.querySelector('.modal-overlay:not(.hidden)').click()">
          <i class="fa${wishlistedIds.includes(c.id)?'s':''} fa-heart"></i> ${wishlistedIds.includes(c.id)?'Wishlisted':'Wishlist'}
        </button>
      </div>
    </div>`;
  document.getElementById('course-modal').classList.remove('hidden');
  document.body.style.overflow='hidden';
}

function closeCourseModal(e){
  if(e && e.target!==e.currentTarget) return;
  document.getElementById('course-modal').classList.add('hidden');
  document.body.style.overflow='';
}

function openJobModal(id){
  const j = JOBS.find(x=>x.id===id);
  if(!j) return;
  document.getElementById('job-modal-content').innerHTML = `
    <div class="modal-header" style="height:140px;background:linear-gradient(135deg,var(--accent),#2d3561);display:flex;align-items:center;padding:2rem">
      <div style="font-size:3.5rem;margin-right:1.5rem">${j.logo}</div>
      <div>
        <h2 style="position:static;color:#fff;font-size:1.3rem;margin-bottom:0.3rem;font-family:var(--font-display)">${j.title}</h2>
        <p style="color:rgba(255,255,255,0.7)">${j.company} · ${j.location}${j.remote?' · Remote':''}</p>
      </div>
      <div class="modal-close" onclick="closeJobModal()" style="margin-left:auto"><i class="fa fa-times"></i></div>
    </div>
    <div class="modal-body">
      <div class="modal-meta">
        <div class="modal-meta-item"><i class="fa fa-briefcase"></i><strong>${j.type}</strong></div>
        <div class="modal-meta-item"><i class="fa fa-chart-line"></i><strong>${j.exp}</strong> experience</div>
        <div class="modal-meta-item"><i class="fa fa-rupee-sign"></i><strong>${j.salary}</strong></div>
        <div class="modal-meta-item"><i class="fa fa-clock"></i>Posted <strong>${j.posted}</strong></div>
      </div>
      <div class="modal-section">
        <h3>Job Description</h3>
        <p>${j.desc}</p>
        <h3>Requirements</h3>
        <ul>${j.requirements.map(r=>`<li>${r}</li>`).join('')}</ul>
        <h3>Skills Required</h3>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.5rem">
          ${j.skills.map(s=>`<span style="background:var(--primary-light);color:var(--primary);padding:0.3rem 0.8rem;border-radius:50px;font-size:0.82rem;font-weight:700">${s}</span>`).join('')}
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn-primary" onclick="applyJob(${j.id});closeJobModal()"><i class="fa fa-paper-plane"></i> Apply Now</button>
        <button class="btn-outline" onclick="showToast('📌 Job saved!');closeJobModal()"><i class="fa fa-bookmark"></i> Save Job</button>
      </div>
    </div>`;
  document.getElementById('job-modal').classList.remove('hidden');
  document.body.style.overflow='hidden';
}

function closeJobModal(e){
  if(e && e.target!==e.currentTarget) return;
  document.getElementById('job-modal').classList.add('hidden');
  document.body.style.overflow='';
}

/* ─── ACCOUNT ─── */
function switchAccTab(tab){
  document.querySelectorAll('.acc-panel').forEach(p=> p.classList.remove('active'));
  document.querySelectorAll('.acc-tab').forEach(t=> t.classList.remove('active'));
  document.getElementById(`acc-${tab}`).classList.add('active');
  event.target.classList.add('active');
}

function saveProfile(){
  showToast('✅ Profile updated successfully!','success');
}

function changeAvatar(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ev=>{
    document.getElementById('acc-avatar').src = ev.target.result;
    showToast('✅ Profile photo updated!','success');
  };
  reader.readAsDataURL(file);
}
