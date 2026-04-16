/* ===== BAZAAR E-COMMERCE - APP.JS ===== */

// ===== DATA =====
const PRODUCTS = [
  // Electronics
  { id:1, name:'iPhone 15 Pro Max', brand:'Apple', category:'Electronics', price:134900, original:149900, discount:10, rating:4.8, reviews:12430, emoji:'📱', badge:'hot', tags:['flagship','5G'] },
  { id:2, name:'Samsung Galaxy S24 Ultra', brand:'Samsung', category:'Electronics', price:109999, original:129999, discount:15, rating:4.7, reviews:8920, emoji:'📱', badge:'sale', tags:['5G','AI'] },
  { id:3, name:'Sony WH-1000XM5 Headphones', brand:'Sony', category:'Electronics', price:24990, original:34990, discount:29, rating:4.9, reviews:5678, emoji:'🎧', badge:'sale', tags:['ANC','wireless'] },
  { id:4, name:'MacBook Air M3', brand:'Apple', category:'Electronics', price:114900, original:124900, discount:8, rating:4.9, reviews:3201, emoji:'💻', badge:'new', tags:['M3','laptop'] },
  { id:5, name:'iPad Pro 12.9"', brand:'Apple', category:'Electronics', price:89900, original:99900, discount:10, rating:4.8, reviews:2109, emoji:'📟', badge:'hot', tags:['tablet'] },
  { id:6, name:'OnePlus 12', brand:'OnePlus', category:'Electronics', price:64999, original:74999, discount:13, rating:4.6, reviews:6780, emoji:'📱', badge:'sale', tags:['5G','fast charge'] },
  { id:7, name:'Dell XPS 15', brand:'Dell', category:'Electronics', price:149900, original:164900, discount:9, rating:4.7, reviews:1890, emoji:'💻', badge:'', tags:['laptop','OLED'] },
  { id:8, name:'LG C3 OLED 55" TV', brand:'LG', category:'Electronics', price:89990, original:119990, discount:25, rating:4.8, reviews:4320, emoji:'📺', badge:'sale', tags:['OLED','4K'] },
  { id:9, name:'Apple Watch Series 9', brand:'Apple', category:'Electronics', price:41900, original:44900, discount:7, rating:4.7, reviews:7823, emoji:'⌚', badge:'new', tags:['smartwatch'] },
  { id:10, name:'Canon EOS R8 Camera', brand:'Canon', category:'Electronics', price:89995, original:94995, discount:5, rating:4.6, reviews:923, emoji:'📷', badge:'', tags:['DSLR','mirrorless'] },

  // Fashion
  { id:11, name:'Nike Air Max 270', brand:'Nike', category:'Fashion', price:7995, original:12995, discount:38, rating:4.6, reviews:15320, emoji:'👟', badge:'hot', tags:['sneakers'] },
  { id:12, name:'Levis 511 Slim Fit Jeans', brand:'Levis', category:'Fashion', price:2299, original:3999, discount:43, rating:4.4, reviews:22100, emoji:'👖', badge:'sale', tags:['jeans','casual'] },
  { id:13, name:'Zara Trench Coat', brand:'Zara', category:'Fashion', price:8990, original:12990, discount:31, rating:4.5, reviews:3400, emoji:'🧥', badge:'new', tags:['coat','winter'] },
  { id:14, name:'Puma Men\'s T-Shirt Pack', brand:'Puma', category:'Fashion', price:1499, original:2499, discount:40, rating:4.3, reviews:18900, emoji:'👕', badge:'sale', tags:['casual'] },
  { id:15, name:'Adidas Ultraboost 23', brand:'Adidas', category:'Fashion', price:14999, original:19999, discount:25, rating:4.7, reviews:9800, emoji:'👟', badge:'hot', tags:['running'] },
  { id:16, name:'FabIndia Kurta Set', brand:'FabIndia', category:'Fashion', price:2499, original:3499, discount:29, rating:4.5, reviews:7600, emoji:'👘', badge:'new', tags:['ethnic'] },
  { id:17, name:'Ray-Ban Aviator Sunglasses', brand:'Ray-Ban', category:'Fashion', price:7490, original:9990, discount:25, rating:4.7, reviews:5430, emoji:'🕶️', badge:'', tags:['eyewear'] },
  { id:18, name:'Tommy Hilfiger Bag', brand:'Tommy Hilfiger', category:'Fashion', price:5999, original:8999, discount:33, rating:4.5, reviews:3210, emoji:'👜', badge:'sale', tags:['bag'] },

  // Home
  { id:19, name:'Philips Air Fryer XXL', brand:'Philips', category:'Home', price:8995, original:12995, discount:31, rating:4.6, reviews:11230, emoji:'🍳', badge:'sale', tags:['kitchen'] },
  { id:20, name:'Dyson V15 Vacuum', brand:'Dyson', category:'Home', price:44900, original:54900, discount:18, rating:4.8, reviews:4560, emoji:'🧹', badge:'hot', tags:['vacuum'] },
  { id:21, name:'Instant Pot Duo 7-in-1', brand:'Instant Pot', category:'Home', price:7499, original:10999, discount:32, rating:4.7, reviews:21000, emoji:'🍲', badge:'sale', tags:['cooker'] },
  { id:22, name:'IKEA Kallax Shelf', brand:'IKEA', category:'Home', price:4999, original:6999, discount:29, rating:4.4, reviews:8900, emoji:'🗄️', badge:'', tags:['furniture'] },
  { id:23, name:'Saatva Classic Mattress', brand:'Saatva', category:'Home', price:34999, original:44999, discount:22, rating:4.8, reviews:2340, emoji:'🛏️', badge:'new', tags:['mattress'] },
  { id:24, name:'Amazon Echo Show 10', brand:'Amazon', category:'Home', price:19999, original:24999, discount:20, rating:4.5, reviews:6700, emoji:'🔊', badge:'', tags:['smart home'] },

  // Beauty
  { id:25, name:'Lakme Perfecting Liquid Foundation', brand:'Lakme', category:'Beauty', price:499, original:799, discount:38, rating:4.3, reviews:34500, emoji:'💄', badge:'hot', tags:['foundation','makeup'] },
  { id:26, name:'Forest Essentials Face Cream', brand:'Forest Essentials', category:'Beauty', price:1695, original:1995, discount:15, rating:4.6, reviews:8700, emoji:'🧴', badge:'new', tags:['skincare'] },
  { id:27, name:'Dyson Airwrap Styler', brand:'Dyson', category:'Beauty', price:44900, original:49900, discount:10, rating:4.7, reviews:12300, emoji:'💇', badge:'hot', tags:['haircare'] },
  { id:28, name:'MAC Ruby Woo Lipstick', brand:'MAC', category:'Beauty', price:1550, original:1850, discount:16, rating:4.8, reviews:25600, emoji:'💋', badge:'', tags:['lipstick'] },
  { id:29, name:'The Ordinary Serum Set', brand:'The Ordinary', category:'Beauty', price:2499, original:3499, discount:29, rating:4.6, reviews:9800, emoji:'💊', badge:'sale', tags:['serum','skincare'] },

  // Sports
  { id:30, name:'Yonex Astrox 88D Badminton', brand:'Yonex', category:'Sports', price:8990, original:11990, discount:25, rating:4.7, reviews:3400, emoji:'🏸', badge:'hot', tags:['badminton'] },
  { id:31, name:'Boldfit Gym Dumbbells Set', brand:'Boldfit', category:'Sports', price:2999, original:4999, discount:40, rating:4.5, reviews:12300, emoji:'💪', badge:'sale', tags:['gym','fitness'] },
  { id:32, name:'Nivia Football', brand:'Nivia', category:'Sports', price:799, original:1299, discount:38, rating:4.4, reviews:9800, emoji:'⚽', badge:'', tags:['football'] },
  { id:33, name:'Lifelong Yoga Mat', brand:'Lifelong', category:'Sports', price:699, original:1299, discount:46, rating:4.3, reviews:28900, emoji:'🧘', badge:'sale', tags:['yoga'] },

  // Books
  { id:34, name:'Atomic Habits', brand:'James Clear', category:'Books', price:399, original:599, discount:33, rating:4.9, reviews:89000, emoji:'📖', badge:'hot', tags:['self-help','bestseller'] },
  { id:35, name:'Rich Dad Poor Dad', brand:'Robert Kiyosaki', category:'Books', price:279, original:499, discount:44, rating:4.7, reviews:125000, emoji:'📚', badge:'sale', tags:['finance'] },
  { id:36, name:'The Psychology of Money', brand:'Morgan Housel', category:'Books', price:349, original:549, discount:36, rating:4.8, reviews:67800, emoji:'📕', badge:'hot', tags:['finance'] },

  // Toys
  { id:37, name:'LEGO Technic Set 42162', brand:'LEGO', category:'Toys', price:4499, original:5999, discount:25, rating:4.8, reviews:4300, emoji:'🧱', badge:'new', tags:['building'] },
  { id:38, name:'Barbie Dreamhouse', brand:'Barbie', category:'Toys', price:7999, original:9999, discount:20, rating:4.6, reviews:3200, emoji:'🏠', badge:'', tags:['dolls'] },

  // Grocery
  { id:39, name:'Organic Ghee 1L', brand:'Patanjali', category:'Grocery', price:549, original:699, discount:21, rating:4.5, reviews:45000, emoji:'🫙', badge:'', tags:['organic'] },
  { id:40, name:'Basmati Rice 5kg', brand:'India Gate', category:'Grocery', price:499, original:649, discount:23, rating:4.6, reviews:34000, emoji:'🌾', badge:'sale', tags:['staples'] },
];

const FLASH_SALE_IDS = [1, 3, 6, 11, 19, 25, 30, 31, 33, 35];
const TRENDING_IDS = [1, 11, 27, 19, 3, 30, 34, 25, 15, 37];
const RECOMMENDED_IDS = [4, 12, 21, 28, 32, 36, 16, 23, 39, 40];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('bazaar_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('bazaar_wishlist') || '[]');
let currentPage = 'home';
let currentProduct = null;
let heroIndex = 0;
let heroTimer = null;
let searchCategory = 'All';
let currentSearchQuery = '';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadUser();
  updateCartBadge();
  updateWishBadge();
  renderFlashSale();
  renderTrending();
  renderRecommended();
  startHeroAuto();
  startCountdown();
  startTopbarCountdown();
  renderOrders();
  // Show hamburger on mobile
  checkMobile();
  window.addEventListener('resize', checkMobile);
  document.addEventListener('click', () => {
    document.getElementById('search-suggestions').classList.remove('show');
  });
});

function checkMobile() {
  const ham = document.getElementById('hamburger');
  if (ham) ham.style.display = window.innerWidth <= 768 ? 'flex' : 'none';
}

function loadUser() {
  const user = JSON.parse(localStorage.getItem('bazaar_user') || '{"name":"Guest","email":"guest@bazaar.com"}');
  const nameEl = document.getElementById('nav-username');
  if (nameEl) nameEl.textContent = user.name.split(' ')[0];
  const accName = document.getElementById('acc-name');
  const accEmail = document.getElementById('acc-email');
  const avatarEl = document.getElementById('avatar-initials');
  if (accName) accName.textContent = user.name;
  if (accEmail) accEmail.textContent = user.email;
  if (avatarEl) avatarEl.textContent = user.name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
}

// ===== NAVIGATION =====
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add('active');
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update mobile nav
  document.querySelectorAll('.mobile-nav-item').forEach(i => i.classList.remove('active'));
  const mn = document.getElementById(`mn-${page}`);
  if (mn) mn.classList.add('active');

  // Page-specific renders
  if (page === 'cart') renderCart();
  if (page === 'wishlist') renderWishlist();
  if (page === 'account') renderAccountWishlist();
  if (page === 'checkout') renderCheckout();
  if (page === 'search' && !currentSearchQuery) renderSearchProducts(PRODUCTS);
}

function setCatNav(el, cat) {
  document.querySelectorAll('.cat-nav-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  if (cat === 'all') { navigateTo('home'); }
  else { filterByCategory(cat); }
}

function filterByCategory(cat) {
  currentSearchQuery = '';
  document.getElementById('main-search').value = '';
  const filtered = PRODUCTS.filter(p => p.category === cat);
  document.getElementById('results-count').textContent = `Showing ${filtered.length} products in "${cat}"`;
  renderSearchProducts(filtered);
  navigateTo('search');
  // update cat nav
  document.querySelectorAll('.cat-nav-item').forEach(i => {
    if (i.dataset.cat === cat) i.classList.add('active');
    else i.classList.remove('active');
  });
}

// ===== PRODUCT CARD RENDERING =====
function createProductCard(p, compact = false) {
  const inWish = wishlist.includes(p.id);
  return `
    <div class="product-card" onclick="openProduct(${p.id})">
      <div class="product-img-wrap">
        <div class="product-img-emoji">${p.emoji}</div>
        <div class="product-badges">
          ${p.badge === 'sale' ? '<span class="product-badge badge-sale">SALE</span>' : ''}
          ${p.badge === 'new' ? '<span class="product-badge badge-new">NEW</span>' : ''}
          ${p.badge === 'hot' ? '<span class="product-badge badge-hot">HOT</span>' : ''}
        </div>
        <button class="product-wishlist ${inWish ? 'active' : ''}" onclick="event.stopPropagation();toggleWish(${p.id}, this)">
          ${inWish ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name" title="${p.name}">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${'⭐'.repeat(Math.round(p.rating))} ${p.rating}</span>
          <span class="count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price">
          <span class="price-current">₹${p.price.toLocaleString()}</span>
          <span class="price-original">₹${p.original.toLocaleString()}</span>
          <span class="price-discount">${p.discount}% off</span>
        </div>
        <button class="product-add-btn" onclick="event.stopPropagation();addToCart(${p.id})">+ Add to Cart</button>
      </div>
    </div>
  `;
}

function renderFlashSale() {
  const el = document.getElementById('flash-products');
  if (!el) return;
  const products = FLASH_SALE_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean).slice(0, 5);
  el.innerHTML = products.map(p => createProductCard(p)).join('');
}

function renderTrending() {
  const el = document.getElementById('trending-products');
  if (!el) return;
  const products = TRENDING_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean).slice(0, 10);
  el.innerHTML = products.map(p => createProductCard(p)).join('');
}

function renderRecommended() {
  const el = document.getElementById('recommended-products');
  if (!el) return;
  const products = RECOMMENDED_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean).slice(0, 10);
  el.innerHTML = products.map(p => createProductCard(p)).join('');
}

function renderSearchProducts(products) {
  const el = document.getElementById('search-products');
  if (!el) return;
  if (!products.length) {
    el.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;"><div style="font-size:60px;margin-bottom:16px;">😔</div><h3 style="font-family:'Playfair Display',serif;">No products found</h3><p style="color:var(--text-muted);margin-top:8px;">Try a different search or browse our categories</p></div>`;
    return;
  }
  el.innerHTML = products.map(p => createProductCard(p)).join('');
}

// ===== SEARCH =====
const suggestions = ['iPhone', 'Samsung Galaxy', 'Nike shoes', 'Levis jeans', 'Apple Watch', 'Sony headphones', 'MacBook', 'Kurta', 'Face cream', 'Yoga mat', 'LEGO', 'Dumbbell', 'Atomic Habits', 'Air fryer', 'Instant Pot'];

function showSuggestions(val) {
  const el = document.getElementById('search-suggestions');
  if (!val.trim()) { el.classList.remove('show'); return; }
  const matches = suggestions.filter(s => s.toLowerCase().includes(val.toLowerCase())).slice(0, 6);
  if (!matches.length) { el.classList.remove('show'); return; }
  el.innerHTML = matches.map(s => `<div class="search-suggestion-item" onclick="selectSuggestion('${s}')">🔍 ${s}</div>`).join('');
  el.classList.add('show');
}

function selectSuggestion(val) {
  document.getElementById('main-search').value = val;
  document.getElementById('search-suggestions').classList.remove('show');
  doSearch();
}

function doSearch() {
  const q = document.getElementById('main-search').value.trim().toLowerCase();
  const cat = document.getElementById('search-cat-select').value;
  document.getElementById('search-suggestions').classList.remove('show');
  currentSearchQuery = q;
  let filtered = PRODUCTS;
  if (q) filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)));
  if (cat !== 'All') filtered = filtered.filter(p => p.category === cat);
  document.getElementById('results-count').textContent = `${filtered.length} results${q ? ` for "${q}"` : ''}`;
  renderSearchProducts(filtered);
  navigateTo('search');
}

function updateSearchCat(sel) { searchCategory = sel.value; }

function clearFilters() {
  document.querySelectorAll('.filter-option input').forEach(i => i.checked = false);
  document.getElementById('price-min').value = '';
  document.getElementById('price-max').value = '';
  renderSearchProducts(PRODUCTS);
  document.getElementById('results-count').textContent = `Showing ${PRODUCTS.length} products`;
}

function sortProducts() {
  const sort = document.getElementById('sort-select').value;
  let products = [...PRODUCTS];
  if (currentSearchQuery) products = products.filter(p => p.name.toLowerCase().includes(currentSearchQuery));
  if (sort === 'price-low') products.sort((a,b) => a.price - b.price);
  else if (sort === 'price-high') products.sort((a,b) => b.price - a.price);
  else if (sort === 'rating') products.sort((a,b) => b.rating - a.rating);
  else if (sort === 'discount') products.sort((a,b) => b.discount - a.discount);
  renderSearchProducts(products);
}

// ===== PRODUCT DETAIL =====
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  const inWish = wishlist.includes(p.id);
  const el = document.getElementById('product-detail-content');
  el.innerHTML = `
    <div class="product-gallery">
      <div class="gallery-main">${p.emoji}</div>
      <div class="gallery-thumbs">
        ${[p.emoji, p.emoji, p.emoji, p.emoji].map((e,i) => `<div class="gallery-thumb ${i===0?'active':''}" onclick="selectThumb(this)">${e}</div>`).join('')}
      </div>
    </div>
    <div class="product-detail-info">
      <div class="breadcrumb">Home / ${p.category} / <span>${p.name}</span></div>
      <div class="product-detail-title">${p.name}</div>
      <div class="product-detail-brand">by <b>${p.brand}</b></div>
      <div class="product-detail-rating">
        <div class="rating-score">⭐ ${p.rating}</div>
        <span class="rating-count">${p.reviews.toLocaleString()} ratings & reviews</span>
      </div>
      <div class="product-detail-price">
        <div class="detail-price-current">₹${p.price.toLocaleString()}</div>
        <div class="detail-price-original">₹${p.original.toLocaleString()}</div>
        <div class="detail-price-off">${p.discount}% OFF</div>
      </div>
      ${p.category === 'Fashion' ? `
      <div class="variant-section">
        <div class="variant-label">Size</div>
        <div class="variant-options">
          ${['XS','S','M','L','XL','XXL'].map(s => `<div class="variant-opt ${s==='M'?'active':''}" onclick="selectVariant(this)">${s}</div>`).join('')}
        </div>
      </div>
      <div class="variant-section">
        <div class="variant-label">Color</div>
        <div class="variant-options">
          ${['#FF6B35','#1A1A2E','#4facfe','#43e97b','#f093fb'].map(c => `<div class="variant-opt color-opt ${c==='#FF6B35'?'active':''}" style="background:${c};border-color:${c==='#FF6B35'?'var(--primary)':'var(--border)'};" onclick="selectVariant(this)"></div>`).join('')}
        </div>
      </div>` : ''}
      <div style="margin-bottom:20px;">
        <div class="variant-label">Quantity</div>
        <div class="qty-control" style="margin-top:10px;">
          <button class="qty-btn" onclick="changeDetailQty(-1)">−</button>
          <div class="qty-val" id="detail-qty">1</div>
          <button class="qty-btn" onclick="changeDetailQty(1)">+</button>
        </div>
      </div>
      <div class="detail-actions">
        <button class="btn-add-cart" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
        <button class="btn-buy-now" onclick="addToCart(${p.id});navigateTo('cart')">⚡ Buy Now</button>
      </div>
      <button class="product-wishlist" style="position:static;width:auto;height:auto;border-radius:8px;padding:10px 20px;background:${inWish?'#fff0f0':'var(--surface2)'};margin-top:12px;font-size:14px;font-weight:600;box-shadow:none;" onclick="toggleWish(${p.id}, this)">
        ${inWish ? '❤️ Remove from Wishlist' : '🤍 Add to Wishlist'}
      </button>
      <div class="product-features">
        <div class="product-feature"><span class="icon">🚀</span> Free delivery in 2-3 business days</div>
        <div class="product-feature"><span class="icon">↩️</span> 30-day easy return & exchange</div>
        <div class="product-feature"><span class="icon">🔒</span> Secure & encrypted payment</div>
        <div class="product-feature"><span class="icon">✅</span> 100% genuine product guarantee</div>
      </div>
    </div>
  `;

  // Similar products
  const similar = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 5);
  document.getElementById('similar-products').innerHTML = similar.map(x => createProductCard(x)).join('');
  navigateTo('product');
}

let detailQty = 1;
function changeDetailQty(d) {
  detailQty = Math.max(1, Math.min(10, detailQty + d));
  const el = document.getElementById('detail-qty');
  if (el) el.textContent = detailQty;
}
function selectVariant(el) {
  el.closest('.variant-options').querySelectorAll('.variant-opt').forEach(v => v.classList.remove('active'));
  el.classList.add('active');
}
function selectThumb(el) {
  el.closest('.gallery-thumbs').querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// ===== CART =====
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ id, qty: 1 }); }
  saveCart();
  updateCartBadge();
  showToast(`${p.emoji} ${p.name} added to cart!`, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartBadge();
  renderCart();
  showToast('Item removed from cart', 'info');
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCart();
}

function clearCart() {
  if (!cart.length) return;
  cart = [];
  saveCart();
  updateCartBadge();
  renderCart();
  showToast('Cart cleared', 'info');
}

function saveCart() { localStorage.setItem('bazaar_cart', JSON.stringify(cart)); }

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cart-badge');
  const mnBadge = document.getElementById('mn-cart-badge');
  if (badge) { badge.textContent = total; badge.style.display = total ? 'flex' : 'none'; }
  if (mnBadge) { mnBadge.textContent = total; mnBadge.style.display = total ? 'flex' : 'none'; }
}

function renderCart() {
  const listEl = document.getElementById('cart-items-list');
  const countEl = document.getElementById('cart-count-label');
  if (!listEl) return;

  if (!cart.length) {
    listEl.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add items to get started!</p>
        <button class="btn btn-primary" onclick="navigateTo('home')">Start Shopping</button>
      </div>`;
    if (countEl) countEl.textContent = '(0 items)';
    updateSummary(0, 0, 0);
    return;
  }

  const totalItems = cart.reduce((s,i) => s+i.qty, 0);
  if (countEl) countEl.textContent = `(${totalItems} items)`;
  listEl.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    const savings = (p.original - p.price) * item.qty;
    return `
      <div class="cart-item">
        <div class="cart-item-img">${p.emoji}</div>
        <div>
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-variant">${p.brand} • ${p.category}</div>
          <div style="display:flex;align-items:center;gap:8px;">
            <span class="cart-item-price">₹${(p.price * item.qty).toLocaleString()}</span>
            <span class="cart-item-original">₹${(p.original * item.qty).toLocaleString()}</span>
          </div>
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
            <div class="qty-val">${item.qty}</div>
            <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
          </div>
          <div style="font-size:12px;color:var(--success);font-weight:600;margin-top:6px;">You save ₹${savings.toLocaleString()}</div>
        </div>
        <div class="cart-item-actions">
          <button class="btn-remove" onclick="removeFromCart(${p.id})" title="Remove">🗑️</button>
          <button class="btn btn-ghost" style="font-size:12px;" onclick="toggleWish(${p.id},this);event.stopPropagation()">
            ${wishlist.includes(p.id) ? '❤️' : '🤍'}
          </button>
        </div>
      </div>`;
  }).join('');

  // Summary
  const subtotal = cart.reduce((s,i) => { const p = PRODUCTS.find(x=>x.id===i.id); return s + (p ? p.price*i.qty : 0); }, 0);
  const original = cart.reduce((s,i) => { const p = PRODUCTS.find(x=>x.id===i.id); return s + (p ? p.original*i.qty : 0); }, 0);
  const discount = original - subtotal;
  updateSummary(subtotal, original, discount, totalItems);
}

function updateSummary(subtotal, original, discount, items = 0) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('sum-items', items);
  set('sum-price', '₹' + original.toLocaleString());
  set('sum-discount', '-₹' + discount.toLocaleString());
  set('sum-delivery', subtotal > 499 ? 'FREE' : '₹49');
  const total = subtotal + (subtotal > 499 ? 0 : 49) + 3;
  set('sum-total', '₹' + total.toLocaleString());
  const msg = document.getElementById('sum-savings-msg');
  if (msg) msg.textContent = discount > 0 ? `🎉 You're saving ₹${discount.toLocaleString()} on this order!` : '';
}

function applyCoupon() {
  const code = document.getElementById('coupon-code').value.toUpperCase().trim();
  const valid = { 'BAZAAR20': 20, 'SAVE10': 10, 'NEWUSER': 30, 'BAZAAR500': 'flat500' };
  if (valid[code]) {
    showToast(`Coupon "${code}" applied! 🎉`, 'success');
  } else {
    showToast('Invalid coupon code', 'error');
  }
}

// ===== WISHLIST =====
function toggleWish(id, btn) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(w => w !== id);
    if (btn) btn.innerHTML = btn.classList.contains('product-wishlist') ? '🤍' : '🤍 Add to Wishlist';
    showToast('Removed from wishlist', 'info');
  } else {
    wishlist.push(id);
    if (btn) btn.innerHTML = btn.classList.contains('product-wishlist') ? '❤️' : '❤️ Remove from Wishlist';
    showToast(`${p.emoji} Added to wishlist!`, 'success');
  }
  localStorage.setItem('bazaar_wishlist', JSON.stringify(wishlist));
  updateWishBadge();
  // Refresh wishlist page if open
  if (currentPage === 'wishlist') renderWishlist();
}

function updateWishBadge() {
  const badge = document.getElementById('wish-badge');
  if (badge) { badge.textContent = wishlist.length; badge.style.display = wishlist.length ? 'flex' : 'none'; }
}

function renderWishlist() {
  const el = document.getElementById('wishlist-products');
  const emptyEl = document.getElementById('wishlist-empty');
  const countEl = document.getElementById('wish-count-label');
  if (!el) return;
  if (!wishlist.length) {
    el.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    if (countEl) countEl.textContent = '0 items saved';
    return;
  }
  if (emptyEl) emptyEl.style.display = 'none';
  const products = wishlist.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  if (countEl) countEl.textContent = `${products.length} items saved`;
  el.innerHTML = products.map(p => createProductCard(p)).join('');
}

function renderAccountWishlist() {
  const el = document.getElementById('acc-wish-products');
  if (!el) return;
  const products = wishlist.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  el.innerHTML = products.length ? products.map(p => createProductCard(p)).join('') : '<p style="color:var(--text-muted);">No items in wishlist yet.</p>';
}

// ===== ORDERS =====
const MOCK_ORDERS = [
  { id:'BZR78234', date:'16 Apr 2026', status:'shipped', total:24990, items:[{ id:3 },{ id:11 }] },
  { id:'BZR77900', date:'10 Apr 2026', status:'delivered', total:7995, items:[{ id:11 }] },
  { id:'BZR77120', date:'28 Mar 2026', status:'delivered', total:134900, items:[{ id:1 }] },
  { id:'BZR76004', date:'15 Mar 2026', status:'delivered', total:2499, items:[{ id:29 }, { id:25 }] },
  { id:'BZR74800', date:'02 Mar 2026', status:'cancelled', total:8990, items:[{ id:30 }] },
];

function renderOrders() {
  const el = document.getElementById('orders-list');
  if (!el) return;
  el.innerHTML = MOCK_ORDERS.map(order => {
    const items = order.items.map(i => PRODUCTS.find(p => p.id === i.id)).filter(Boolean);
    return `
      <div class="order-card">
        <div class="order-header">
          <div>
            <div class="order-id">Order #${order.id}</div>
            <div class="order-date">Placed on ${order.date}</div>
          </div>
          <div class="order-status status-${order.status}">${order.status.charAt(0).toUpperCase()+order.status.slice(1)}</div>
        </div>
        <div class="order-items-preview">
          ${items.map(p => `<div class="order-item-thumb" title="${p.name}">${p.emoji}</div>`).join('')}
          <div style="display:flex;align-items:center;padding:0 8px;font-size:13px;color:var(--text-muted);">${items.map(p=>p.name.slice(0,20)).join(', ')}</div>
        </div>
        <div class="order-footer">
          <div class="order-total">₹${order.total.toLocaleString()}</div>
          <button class="btn-track" onclick="showToast('Tracking order #${order.id} 📦','info')">
            ${order.status === 'shipped' ? '📍 Track Order' : order.status === 'delivered' ? '📄 View Invoice' : '↩️ Reorder'}
          </button>
        </div>
      </div>`;
  }).join('');
}

// ===== ACCOUNT =====
function switchAccountSection(section, el) {
  document.querySelectorAll('.account-menu-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.account-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`acc-${section}`);
  if (target) target.classList.add('active');
  if (section === 'wishlist-acc') renderAccountWishlist();
}

// ===== CHECKOUT =====
function renderCheckout() {
  const el = document.getElementById('checkout-items');
  if (!el) return;
  const subtotal = cart.reduce((s,i) => { const p=PRODUCTS.find(x=>x.id===i.id); return s+(p?p.price*i.qty:0); }, 0);
  const original = cart.reduce((s,i) => { const p=PRODUCTS.find(x=>x.id===i.id); return s+(p?p.original*i.qty:0); }, 0);
  el.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x=>x.id===item.id);
    if (!p) return '';
    return `<div style="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);align-items:center;">
      <div style="font-size:32px;background:var(--surface2);border-radius:8px;width:48px;height:48px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${p.emoji}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.name}</div>
        <div style="font-size:11px;color:var(--text-muted);">Qty: ${item.qty}</div>
      </div>
      <div style="font-weight:700;font-size:14px;">₹${(p.price*item.qty).toLocaleString()}</div>
    </div>`;
  }).join('');
  const total = subtotal + 3;
  const discount = original - subtotal;
  const set = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
  set('co-subtotal','₹'+original.toLocaleString());
  set('co-discount','-₹'+discount.toLocaleString());
  set('co-total','₹'+total.toLocaleString());
  set('co-savings','₹'+discount.toLocaleString());
}

function placeOrder() {
  if (!cart.length) { showToast('Your cart is empty!','error'); return; }
  // Simulate order placement
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(26,26,46,0.9);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:white;';
  overlay.innerHTML = `
    <div style="text-align:center;animation:fadeIn 0.5s ease;">
      <div style="font-size:80px;animation:bounce 0.6s ease;">🎉</div>
      <div style="font-family:'Playfair Display',serif;font-size:32px;font-weight:900;margin:20px 0 8px;">Order Placed!</div>
      <div style="color:rgba(255,255,255,0.7);font-size:16px;">Thank you for shopping with Bazaar</div>
      <div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:16px 28px;margin:20px 0;font-size:14px;">
        Order ID: <b style="color:#FFD700;">#BZR${Math.floor(Math.random()*90000+10000)}</b><br>
        Estimated delivery: <b>18-20 April 2026</b>
      </div>
      <button style="background:var(--primary);color:white;border:none;padding:14px 32px;border-radius:12px;font-size:16px;font-weight:700;cursor:pointer;margin-top:8px;" onclick="document.body.removeChild(this.closest('div[style]'));cart=[];saveCart();updateCartBadge();navigateTo('home')">Continue Shopping</button>
    </div>`;
  document.body.appendChild(overlay);
  const style = document.createElement('style');
  style.textContent = '@keyframes bounce{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}';
  document.head.appendChild(style);
}

// ===== HERO SLIDER =====
function slideHero(dir) {
  const slides = document.querySelectorAll('.hero-slide');
  heroIndex = (heroIndex + dir + slides.length) % slides.length;
  document.getElementById('hero-slides').style.transform = `translateX(-${heroIndex * 100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d,i) => d.classList.toggle('active', i === heroIndex));
}
function goToSlide(i) {
  heroIndex = i;
  document.getElementById('hero-slides').style.transform = `translateX(-${i * 100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d,j) => d.classList.toggle('active', j === i));
}
function startHeroAuto() {
  heroTimer = setInterval(() => slideHero(1), 4500);
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mouseenter', () => clearInterval(heroTimer));
    hero.addEventListener('mouseleave', () => { heroTimer = setInterval(() => slideHero(1), 4500); });
  }
}

// ===== COUNTDOWN =====
function startCountdown() {
  let total = 8 * 3600 + 45 * 60 + 30;
  const h = document.getElementById('cd-h');
  const m = document.getElementById('cd-m');
  const s = document.getElementById('cd-s');
  if (!h) return;
  setInterval(() => {
    if (total <= 0) { total = 23 * 3600; }
    total--;
    const hrs = Math.floor(total / 3600);
    const mins = Math.floor((total % 3600) / 60);
    const secs = total % 60;
    h.textContent = String(hrs).padStart(2,'0');
    m.textContent = String(mins).padStart(2,'0');
    s.textContent = String(secs).padStart(2,'0');
  }, 1000);
}

function startTopbarCountdown() {
  let t = 6 * 3600 + 23 * 60 + 12;
  const el = document.getElementById('topbar-countdown');
  if (!el) return;
  setInterval(() => {
    t = Math.max(0, t - 1);
    const h = Math.floor(t/3600), m = Math.floor((t%3600)/60), s = t%60;
    el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }, 1000);
}

// ===== NOTIFICATIONS =====
function openNotif() {
  document.getElementById('notif-panel').classList.add('open');
  document.getElementById('notif-overlay').style.display = 'block';
  const badge = document.getElementById('notif-badge');
  if (badge) badge.style.display = 'none';
}
function closeNotif() {
  document.getElementById('notif-panel').classList.remove('open');
  document.getElementById('notif-overlay').style.display = 'none';
}

// ===== MOBILE MENU =====
function openMobileMenu() { document.getElementById('mobile-menu').classList.add('open'); }
function closeMobileMenu() { document.getElementById('mobile-menu').classList.remove('open'); }

// ===== TOAST =====
function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  const icons = { success: '✅', error: '❌', info: '💬' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== LOGOUT =====
function doLogout() {
  localStorage.removeItem('bazaar_user');
  window.location.href = 'index.html';
}
