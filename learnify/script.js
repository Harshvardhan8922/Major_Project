/* ================================================
   LEARNIFY — app.js
   Full interactive functionality
================================================ */

/* ---- DATA ---- */
const CATEGORIES = [
  { name: 'Development', icon: '💻', count: '42,000+', color: '#1a2a4a', accent: '#4f9eff' },
  { name: 'Design',      icon: '🎨', count: '18,500+', color: '#2a1a3a', accent: '#c084fc' },
  { name: 'Business',    icon: '📈', count: '29,000+', color: '#1a2a1a', accent: '#4ade80' },
  { name: 'Marketing',   icon: '📣', count: '12,800+', color: '#2a2a1a', accent: '#facc15' },
  { name: 'Data Science',icon: '📊', count: '9,400+',  color: '#1a2a2a', accent: '#22d3ee' },
  { name: 'Photography', icon: '📷', count: '7,200+',  color: '#2a1a1a', accent: '#fb923c' },
  { name: 'Music',       icon: '🎵', count: '5,800+',  color: '#1a1a2a', accent: '#a78bfa' },
  { name: 'Health',      icon: '💪', count: '8,100+',  color: '#1a2a1a', accent: '#34d399' },
  { name: 'Finance',     icon: '💰', count: '11,200+', color: '#1e2a1a', accent: '#f5a623' },
  { name: 'Language',    icon: '🌐', count: '6,500+',  color: '#1a2a2a', accent: '#38bdf8' },
  { name: 'Personal Dev',icon: '🧠', count: '14,000+', color: '#2a1a2a', accent: '#e879f9' },
  { name: 'IT & Software',icon: '🔐', count: '21,000+', color: '#1a1f2a', accent: '#60a5fa' },
];

const COURSES = [
  {
    id: 1,
    title: 'Complete Python Bootcamp: From Zero to Hero',
    instructor: 'Alex Rivera',
    rating: 4.9,
    reviews: 23410,
    price: 14.99,
    original: 89.99,
    thumb: '🐍',
    thumbBg: 'linear-gradient(135deg,#1a2a1a,#2a3a1a)',
    category: 'development',
    tag: 'Best Seller',
    hours: 42,
    lectures: 280,
  },
  {
    id: 2,
    title: 'UI/UX Design Masterclass 2025',
    instructor: 'Sara Chen',
    rating: 4.8,
    reviews: 18720,
    price: 12.99,
    original: 74.99,
    thumb: '✏️',
    thumbBg: 'linear-gradient(135deg,#2a1a3a,#3a1a4a)',
    category: 'design',
    tag: 'Hot & New',
    hours: 36,
    lectures: 220,
  },
  {
    id: 3,
    title: 'The Complete Digital Marketing Strategy',
    instructor: 'James Patel',
    rating: 4.7,
    reviews: 15200,
    price: 9.99,
    original: 59.99,
    thumb: '📣',
    thumbBg: 'linear-gradient(135deg,#2a2a1a,#3a2a1a)',
    category: 'marketing',
    tag: 'Best Seller',
    hours: 28,
    lectures: 190,
  },
  {
    id: 4,
    title: 'Machine Learning A-Z: AI & Python',
    instructor: 'Dr. Anna Kowalski',
    rating: 4.9,
    reviews: 31500,
    price: 15.99,
    original: 99.99,
    thumb: '🤖',
    thumbBg: 'linear-gradient(135deg,#1a1f2a,#1a2a3a)',
    category: 'data',
    tag: 'Best Seller',
    hours: 55,
    lectures: 340,
  },
  {
    id: 5,
    title: 'React & Next.js — The Complete Guide',
    instructor: 'Michael Torres',
    rating: 4.8,
    reviews: 22100,
    price: 13.99,
    original: 84.99,
    thumb: '⚛️',
    thumbBg: 'linear-gradient(135deg,#1a2a3a,#1a1f3a)',
    category: 'development',
    tag: 'Updated 2025',
    hours: 48,
    lectures: 310,
  },
  {
    id: 6,
    title: 'Financial Modeling & Valuation Analyst',
    instructor: 'David Kim',
    rating: 4.7,
    reviews: 9830,
    price: 11.99,
    original: 69.99,
    thumb: '📊',
    thumbBg: 'linear-gradient(135deg,#1e2a1a,#2a2a1a)',
    category: 'business',
    tag: 'Top Rated',
    hours: 31,
    lectures: 200,
  },
  {
    id: 7,
    title: 'Figma for Beginners to Advanced',
    instructor: 'Layla Hassan',
    rating: 4.8,
    reviews: 12400,
    price: 10.99,
    original: 64.99,
    thumb: '🖌️',
    thumbBg: 'linear-gradient(135deg,#2a1a2a,#3a1a3a)',
    category: 'design',
    tag: 'Best Seller',
    hours: 22,
    lectures: 145,
  },
  {
    id: 8,
    title: 'SQL & Database Design for Beginners',
    instructor: 'Tom Andrews',
    rating: 4.6,
    reviews: 8900,
    price: 9.99,
    original: 54.99,
    thumb: '🗄️',
    thumbBg: 'linear-gradient(135deg,#1a2a2a,#1a2a3a)',
    category: 'data',
    tag: 'New',
    hours: 18,
    lectures: 120,
  },
];

const INSTRUCTORS = [
  { name: 'Alex Rivera',     role: 'Senior Software Engineer', emoji: '👨‍💻', bg: '#1a2a3a', students: '142K', courses: 8,  rating: 4.9 },
  { name: 'Sara Chen',       role: 'Lead UX Designer @ Adobe', emoji: '👩‍🎨', bg: '#2a1a3a', students: '98K',  courses: 5,  rating: 4.8 },
  { name: 'Dr. Anna Kowalski',role: 'AI Researcher & Educator', emoji: '👩‍🔬', bg: '#1a1f2a', students: '210K', courses: 6,  rating: 4.9 },
  { name: 'James Patel',     role: 'CMO & Growth Strategist',  emoji: '📈',   bg: '#2a2a1a', students: '87K',  courses: 4,  rating: 4.7 },
];

const TESTIMONIALS = [
  [
    { text: 'Learnify completely changed my career trajectory. The Python bootcamp was phenomenal — I landed a dev job within 6 months.', author: 'Marcus Johnson', role: 'Frontend Developer', emoji: '👨‍💻', bg: '#1a2a3a', rating: 5 },
    { text: 'The UX Design course felt like a $10,000 bootcamp for $15. Seriously impressive depth and quality of instruction.', author: 'Priya Sharma',   role: 'UX Designer at Stripe', emoji: '👩‍🎨', bg: '#2a1a3a', rating: 5 },
    { text: 'I went from knowing zero about data science to getting a job offer in 8 months. The certificate actually impressed my interviewer!', author: 'Emma Tran', role: 'Data Analyst at Tesla', emoji: '👩‍💼', bg: '#1a2a1a', rating: 5 },
  ],
  [
    { text: 'The lifetime access model is genius. I revisit courses months later and still learn something new every time.', author: 'Oliver Park',    role: 'Startup Founder', emoji: '🧑‍💼', bg: '#2a2a1a', rating: 5 },
    { text: 'As a self-taught developer, Learnify filled all the gaps in my knowledge. The React course is worth every penny.', author: 'Sofia Martinez', role: 'Full-Stack Dev', emoji: '👩‍💻', bg: '#1a1f2a', rating: 5 },
    { text: 'I love how the mobile app lets me learn during my commute. Completed 3 courses in just one month.', author: 'Liam O\'Brien', role: 'Marketing Manager', emoji: '👨‍📱', bg: '#2a1a2a', rating: 5 },
  ],
];

const PLANS = [
  {
    name: 'Free',
    monthly: 0,
    annual: 0,
    desc: 'Great to get started and explore.',
    features: [
      { text: 'Access to 5 free courses', check: true },
      { text: 'Community forum access', check: true },
      { text: 'Mobile app access', check: true },
      { text: 'HD video playback', check: false },
      { text: 'Certificates of completion', check: false },
      { text: 'Offline downloads', check: false },
    ],
    cta: 'Get Started Free',
    primary: false,
  },
  {
    name: 'Pro',
    monthly: 19.99,
    annual: 11.99,
    desc: 'Everything you need to accelerate your growth.',
    popular: true,
    features: [
      { text: 'Unlimited course access',   check: true },
      { text: 'Community forum access',     check: true },
      { text: 'Mobile & desktop app',       check: true },
      { text: 'HD & 4K video playback',    check: true },
      { text: 'Certificates of completion',check: true },
      { text: 'Offline downloads (30)',     check: true },
    ],
    cta: 'Start 7-Day Free Trial',
    primary: true,
  },
  {
    name: 'Teams',
    monthly: 39.99,
    annual: 23.99,
    desc: 'Built for companies and learning teams.',
    features: [
      { text: 'Everything in Pro',          check: true },
      { text: 'Team analytics dashboard',   check: true },
      { text: 'SSO & SCIM provisioning',    check: true },
      { text: 'Dedicated customer success', check: true },
      { text: 'Custom learning paths',      check: true },
      { text: 'Priority 24/7 support',      check: true },
    ],
    cta: 'Contact Sales',
    primary: false,
  },
];

/* ================================================
   NAVBAR: Scroll behavior & hamburger
================================================ */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on nav link click
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ================================================
   BACK TO TOP
================================================ */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ================================================
   REVEAL ON SCROLL
================================================ */
function setupReveal() {
  const els = document.querySelectorAll('.section-header, .cat-card, .course-card, .instructor-card, .why-feature, .pricing-card, .testimonial-item');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 6) * 0.08}s`;
    obs.observe(el);
  });
}

/* ================================================
   CATEGORIES
================================================ */
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="cat-card" style="--cat-accent:${c.accent}" onclick="filterByCategory('${c.name}')">
      <div class="cat-icon" style="background:${c.color};color:${c.accent};font-size:1.5rem">${c.icon}</div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count} courses</div>
    </div>
  `).join('');
}

/* ================================================
   COURSES
================================================ */
let activeFilter = 'all';
let wishlist = new Set();

function renderCourses(filter = 'all') {
  const grid = document.getElementById('coursesGrid');
  const filtered = filter === 'all' ? COURSES : COURSES.filter(c => c.category === filter);
  grid.innerHTML = filtered.map(c => `
    <div class="course-card reveal" data-id="${c.id}">
      <div class="course-thumb" style="background:${c.thumbBg}">
        <span>${c.thumb}</span>
        <span class="thumb-badge">${c.tag}</span>
        <button class="wishlist-btn ${wishlist.has(c.id) ? 'active' : ''}" data-id="${c.id}" title="Add to wishlist">
          <i class="fa-${wishlist.has(c.id) ? 'solid' : 'regular'} fa-heart"></i>
        </button>
      </div>
      <div class="course-body">
        <div class="course-cat-tag">${c.category}</div>
        <div class="course-title">${c.title}</div>
        <div class="course-instructor">by ${c.instructor}</div>
        <div class="course-rating">
          <span class="rating-score">${c.rating}</span>
          <span class="rating-stars">${'★'.repeat(Math.floor(c.rating))}${'☆'.repeat(5 - Math.floor(c.rating))}</span>
          <span class="rating-count">(${c.reviews.toLocaleString()})</span>
        </div>
        <div class="course-footer">
          <div class="course-price">
            <span class="price-current">$${c.price.toFixed(2)}</span>
            <span class="price-original">$${c.original.toFixed(2)}</span>
          </div>
          <div class="course-meta-icons">
            <span><i class="fa-solid fa-clock"></i> ${c.hours}h</span>
            <span><i class="fa-solid fa-play-circle"></i> ${c.lectures}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Wishlist toggle
  grid.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      if (wishlist.has(id)) {
        wishlist.delete(id);
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
      } else {
        wishlist.add(id);
        btn.classList.add('active');
        btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
        // Heartbeat animation
        btn.style.transform = 'scale(1.4)';
        setTimeout(() => { btn.style.transform = ''; }, 300);
      }
    });
  });

  // Course click
  grid.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', () => {
      const course = COURSES.find(c => c.id === parseInt(card.dataset.id));
      showCourseModal(course);
    });
  });

  setupReveal();
}

function filterByCategory(name) {
  // Map category names to filter keys
  const map = {
    'Development': 'development',
    'Design': 'design',
    'Business': 'business',
    'Marketing': 'marketing',
    'Data Science': 'data',
  };
  const key = map[name] || 'all';
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === key));
  activeFilter = key;
  renderCourses(key);
  document.getElementById('courses').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Filter buttons
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('coursesFilter').querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.cat;
      renderCourses(activeFilter);
    });
  });
});

/* ================================================
   COURSE MODAL
================================================ */
function showCourseModal(course) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-box">
      <button class="modal-close"><i class="fa-solid fa-xmark"></i></button>
      <div class="modal-thumb" style="background:${course.thumbBg}">
        <span>${course.thumb}</span>
      </div>
      <div class="modal-body">
        <span class="course-tag">${course.tag}</span>
        <h2>${course.title}</h2>
        <p class="modal-instructor">by <strong>${course.instructor}</strong></p>
        <div class="course-rating">
          <span class="rating-score">${course.rating}</span>
          <span class="rating-stars">${'★'.repeat(Math.floor(course.rating))}</span>
          <span class="rating-count">(${course.reviews.toLocaleString()} ratings)</span>
        </div>
        <div class="modal-stats">
          <span><i class="fa-solid fa-clock"></i> ${course.hours} hours</span>
          <span><i class="fa-solid fa-play-circle"></i> ${course.lectures} lectures</span>
          <span><i class="fa-solid fa-infinity"></i> Lifetime access</span>
          <span><i class="fa-solid fa-certificate"></i> Certificate</span>
        </div>
        <div class="modal-price">
          <span class="price-current">$${course.price.toFixed(2)}</span>
          <span class="price-original">$${course.original.toFixed(2)}</span>
          <span class="discount-pct">${Math.round((1 - course.price / course.original) * 100)}% off</span>
        </div>
        <div class="modal-actions">
          <button class="btn btn-primary btn-lg" style="flex:1" onclick="handleEnroll('${course.title}')">Enroll Now</button>
          <button class="btn btn-outline" onclick="toggleWishlistModal(${course.id}, this)">
            <i class="fa-${wishlist.has(course.id) ? 'solid' : 'regular'} fa-heart"></i>
          </button>
        </div>
        <p class="modal-guarantee"><i class="fa-solid fa-shield-halved"></i> 30-Day Money-Back Guarantee</p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add('open'), 10);

  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  function closeModal() {
    modal.classList.remove('open');
    setTimeout(() => modal.remove(), 300);
  }
}

window.toggleWishlistModal = function(id, btn) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
  } else {
    wishlist.add(id);
    btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
  }
};

window.handleEnroll = function(title) {
  showToast(`🎉 Enrolled in "${title.substring(0, 30)}…"!`);
};

/* ================================================
   INSTRUCTORS
================================================ */
function renderInstructors() {
  const grid = document.getElementById('instructorsGrid');
  grid.innerHTML = INSTRUCTORS.map(inst => `
    <div class="instructor-card">
      <div class="instructor-avatar" style="background:${inst.bg}">${inst.emoji}</div>
      <div class="instructor-name">${inst.name}</div>
      <div class="instructor-role">${inst.role}</div>
      <div class="instructor-stats">
        <div><strong>${inst.students}</strong><span>Students</span></div>
        <div><strong>${inst.courses}</strong><span>Courses</span></div>
        <div><strong>${inst.rating}</strong><span>Rating</span></div>
      </div>
    </div>
  `).join('');
}

/* ================================================
   TESTIMONIALS SLIDER
================================================ */
let currentSlide = 0;

function renderTestimonials() {
  const slider = document.getElementById('testimonialsSlider');
  const dotsContainer = document.getElementById('sliderDots');

  slider.innerHTML = `
    <div class="testimonials-track" id="testimonialTrack">
      ${TESTIMONIALS.map(group => `
        <div class="testimonial-card">
          ${group.map(t => `
            <div class="testimonial-item">
              <div class="t-quote">"</div>
              <p class="t-text">${t.text}</p>
              <div class="t-author">
                <div class="t-avatar" style="background:${t.bg}">${t.emoji}</div>
                <div class="t-author-info">
                  <strong>${t.author}</strong>
                  <span>${t.role}</span>
                  <div class="t-rating">${'★'.repeat(t.rating)}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `;

  // Dots
  dotsContainer.innerHTML = TESTIMONIALS.map((_, i) => `
    <button class="slider-dot ${i === 0 ? 'active' : ''}" data-i="${i}"></button>
  `).join('');

  dotsContainer.querySelectorAll('.slider-dot').forEach(dot => {
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.i)));
  });

  // Auto-advance
  setInterval(() => goToSlide((currentSlide + 1) % TESTIMONIALS.length), 6000);
}

function goToSlide(i) {
  currentSlide = i;
  document.getElementById('testimonialTrack').style.transform = `translateX(-${i * 100}%)`;
  document.querySelectorAll('.slider-dot').forEach((d, idx) => d.classList.toggle('active', idx === i));
}

/* ================================================
   PRICING
================================================ */
let isAnnual = false;

function renderPricing() {
  const grid = document.getElementById('pricingGrid');
  grid.innerHTML = PLANS.map(p => `
    <div class="pricing-card ${p.popular ? 'popular' : ''}">
      ${p.popular ? '<div class="popular-badge">Most Popular</div>' : ''}
      <div class="plan-name">${p.name}</div>
      <div class="plan-price">
        <span class="plan-currency">$</span>
        <span class="plan-amount" id="amount-${p.name.toLowerCase()}">${isAnnual && p.annual > 0 ? p.annual.toFixed(2) : (p.monthly === 0 ? '0' : p.monthly.toFixed(2))}</span>
        <span class="plan-period">/ mo</span>
      </div>
      <p class="plan-desc">${p.desc}</p>
      <ul class="plan-features">
        ${p.features.map(f => `
          <li class="${f.check ? '' : 'disabled'}">
            <i class="fa-solid ${f.check ? 'fa-check' : 'fa-xmark'}"></i>
            ${f.text}
          </li>
        `).join('')}
      </ul>
      <button class="btn ${p.primary ? 'btn-primary' : 'btn-outline'}" onclick="handlePlanClick('${p.name}', '${p.cta}')">
        ${p.cta}
      </button>
    </div>
  `).join('');
}

document.getElementById('billingToggle').addEventListener('change', e => {
  isAnnual = e.target.checked;
  renderPricing();
});

window.handlePlanClick = function(plan, cta) {
  if (plan === 'Free') {
    showToast('🎉 Welcome! Your free account is ready.');
  } else if (plan === 'Teams') {
    showToast('📞 Our sales team will contact you shortly!');
  } else {
    showToast(`🚀 Starting your 7-day free trial of ${plan}!`);
  }
};

/* ================================================
   SEARCH
================================================ */
document.getElementById('navSearchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const q = e.target.value.trim();
    if (q) {
      showToast(`🔍 Searching for "${q}"…`);
      document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
    }
  }
});

/* ================================================
   TOAST NOTIFICATION
================================================ */
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

/* ================================================
   INJECT TOAST & MODAL STYLES
================================================ */
const extraStyles = document.createElement('style');
extraStyles.textContent = `
/* TOAST */
.toast {
  position: fixed;
  bottom: 80px; left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: #1a1a26;
  border: 1px solid rgba(245,166,35,0.4);
  color: #f0f0f8;
  padding: 14px 24px;
  border-radius: 99px;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 9999;
  opacity: 0;
  transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
  white-space: nowrap;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  pointer-events: none;
}
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

/* MODAL */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.modal-overlay.open { opacity: 1; }
.modal-box {
  background: #1a1a26;
  border: 1px solid rgba(245,166,35,0.3);
  border-radius: 22px;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  transform: scale(0.92) translateY(20px);
  transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
  position: relative;
}
.modal-overlay.open .modal-box { transform: scale(1) translateY(0); }
.modal-close {
  position: absolute; top: 14px; right: 14px;
  background: rgba(255,255,255,0.08);
  border: none; border-radius: 50%;
  width: 36px; height: 36px;
  display: grid; place-items: center;
  color: #9898b8; cursor: pointer;
  z-index: 1;
  transition: all 0.2s;
}
.modal-close:hover { background: rgba(255,255,255,0.15); color: #f0f0f8; }
.modal-thumb {
  height: 160px;
  display: flex; align-items: center; justify-content: center;
  font-size: 4rem;
}
.modal-body { padding: 24px 28px 28px; }
.modal-body h2 {
  font-family: 'Syne', sans-serif;
  font-size: 1.2rem; font-weight: 800;
  margin: 10px 0 6px;
  line-height: 1.3;
}
.modal-instructor { font-size: 0.85rem; color: #9898b8; margin-bottom: 12px; }
.modal-stats {
  display: flex; flex-wrap: wrap; gap: 12px;
  margin: 16px 0;
  font-size: 0.82rem; color: #9898b8;
}
.modal-stats span { display: flex; align-items: center; gap: 6px; }
.modal-stats i { color: #f5a623; }
.modal-price {
  display: flex; align-items: baseline; gap: 10px;
  margin: 16px 0;
}
.discount-pct {
  background: rgba(245,166,35,0.15);
  border: 1px solid rgba(245,166,35,0.35);
  color: #f5a623;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 99px;
}
.modal-actions { display: flex; gap: 10px; margin-top: 20px; }
.modal-guarantee {
  font-size: 0.78rem;
  color: #9898b8;
  text-align: center;
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.modal-guarantee i { color: #4ade80; }

/* Responsive modal */
@media (max-width: 540px) {
  .modal-body { padding: 18px 20px 22px; }
  .modal-actions { flex-wrap: wrap; }
}
`;
document.head.appendChild(extraStyles);

/* ================================================
   CTA FORM
================================================ */
document.querySelector('.cta-form button').addEventListener('click', () => {
  const emailInput = document.querySelector('.cta-form input');
  const email = emailInput.value.trim();
  if (!email || !email.includes('@')) {
    emailInput.style.borderColor = '#ef4444';
    emailInput.placeholder = 'Please enter a valid email';
    setTimeout(() => {
      emailInput.style.borderColor = '';
      emailInput.placeholder = 'Enter your email address';
    }, 2000);
    return;
  }
  showToast('🎉 Check your inbox — your account is ready!');
  emailInput.value = '';
});

/* ================================================
   INIT
================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderCourses();
  renderInstructors();
  renderTestimonials();
  renderPricing();
  setupReveal();
});
