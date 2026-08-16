/* =========================================================
   Shari Lagbe? — shared behaviour
   Reads product/category/blog data from data.js (must be
   loaded before this file) and renders it into whichever
   containers exist on the current page. Cart + wishlist are
   kept in localStorage so they persist across pages without
   a backend.
   ========================================================= */

const CART_KEY = "sharilagbe_cart";
const WISHLIST_KEY = "sharilagbe_wishlist";

/* ---------- cart data helpers ---------- */

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch (e) { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCounts();
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.qty += 1;
  else cart.push({ id: product.id, name: product.name, price: product.price, region: product.region, image: product.image, qty: 1 });
  saveCart(cart);
  showToast(`${product.name} added to your cart`);
}

function removeFromCart(id) {
  saveCart(getCart().filter(item => item.id !== id));
  renderCartPage();
}

function updateQty(id, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, qty);
  saveCart(cart);
  renderCartPage();
}

function cartTotals(cart) {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = cart.length === 0 ? 0 : subtotal >= 3500 ? 0 : 100;
  return { subtotal, shipping, total: subtotal + shipping };
}

/* ---------- wishlist data helpers ---------- */

function getWishlist() {
  try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; }
  catch (e) { return []; }
}

function saveWishlist(list) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  updateCounts();
}

function isWishlisted(id) {
  return getWishlist().some(i => i.id === id);
}

function toggleWishlist(product) {
  let list = getWishlist();
  if (list.some(i => i.id === product.id)) {
    list = list.filter(i => i.id !== product.id);
    saveWishlist(list);
    showToast("Removed from wishlist");
    return false;
  } else {
    list.push({ id: product.id, name: product.name, price: product.price, region: product.region, image: product.image, meta: product.meta });
    saveWishlist(list);
    showToast("Saved to your wishlist");
    return true;
  }
}

/* ---------- counters ---------- */

function updateCounts() {
  const cartCount = getCart().reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = cartCount;
    el.style.display = cartCount > 0 ? "inline-flex" : "none";
  });
  const wishCount = getWishlist().length;
  document.querySelectorAll(".wish-count").forEach(el => {
    el.textContent = wishCount;
    el.style.display = wishCount > 0 ? "inline-flex" : "none";
  });
}

/* ---------- toast ---------- */

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i><span></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector("span").textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ---------- mobile nav ---------- */

function initMobileNav() {
  const toggle = document.getElementById("mobile-toggle");
  const navbar = document.getElementById("navbar");
  if (!toggle || !navbar) return;
  toggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });
  navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
      toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

/* ---------- product card rendering ---------- */

function productCardHTML(p) {
  const wished = isWishlisted(p.id);
  return `
    <article class="product-card" data-product data-id="${p.id}" data-category="${p.category}" data-price="${p.price}">
      <div class="product-media">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <button type="button" class="wish-btn ${wished ? "active" : ""}" data-wishlist aria-label="Add to wishlist">
          <i class="fa-${wished ? "solid" : "regular"} fa-heart"></i>
        </button>
        <div class="paar paar--thin"></div>
      </div>
      <div class="product-info">
        <span class="product-region">${p.region}</span>
        <h3>${p.name}</h3>
        <span class="product-meta">${p.meta}</span>
        <div class="product-price">
          <span class="price">৳${p.price.toLocaleString()}</span>
          <button type="button" class="add-btn" data-add-to-cart aria-label="Add to cart"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </article>`;
}

function bindProductCard(el, product) {
  const addBtn = el.querySelector("[data-add-to-cart]");
  if (addBtn) addBtn.addEventListener("click", (e) => { e.preventDefault(); addToCart(product); });

  const wishBtn = el.querySelector("[data-wishlist]");
  if (wishBtn) wishBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const active = toggleWishlist(product);
    wishBtn.classList.toggle("active", active);
    const icon = wishBtn.querySelector("i");
    icon.classList.toggle("fa-solid", active);
    icon.classList.toggle("fa-regular", !active);
  });
}

function renderProductGrid(container, products) {
  if (!container) return;
  container.innerHTML = products.map(productCardHTML).join("");
  container.querySelectorAll("[data-product]").forEach(el => {
    const product = products.find(p => p.id === el.dataset.id);
    if (product) bindProductCard(el, product);
  });
}

/* ---------- category rendering ---------- */

function renderCategories(container, limit) {
  if (!container || typeof CATEGORIES === "undefined") return;
  const list = limit ? CATEGORIES.slice(0, limit) : CATEGORIES;
  container.innerHTML = list.map(c => `
    <a href="shop.html?category=${encodeURIComponent(c.name)}" class="category-card">
      <div class="category-swatch">
        <img src="${c.image}" alt="${c.name}" loading="lazy">
      </div>
      <div class="cat-body">
        <h3>${c.name}</h3>
        <span>${c.desc}</span>
      </div>
    </a>`).join("");
}

/* ---------- home page ---------- */

function initHomePage() {
  const featuredGrid = document.querySelector("[data-featured-grid]");
  const catGrid = document.querySelector("[data-category-grid]");
  if (typeof PRODUCTS !== "undefined" && featuredGrid) {
    renderProductGrid(featuredGrid, PRODUCTS.slice(0, 8));
  }
  if (catGrid) renderCategories(catGrid, 8);
}

/* ---------- shop page ---------- */

let shopState = { category: "all", sort: "featured", min: null, max: null, page: 1 };
const PAGE_SIZE = 12;

function getFilteredProducts() {
  if (typeof PRODUCTS === "undefined") return [];
  let list = PRODUCTS.slice();
  if (shopState.category !== "all") list = list.filter(p => p.category === shopState.category);
  if (shopState.min !== null && !isNaN(shopState.min)) list = list.filter(p => p.price >= shopState.min);
  if (shopState.max !== null && !isNaN(shopState.max)) list = list.filter(p => p.price <= shopState.max);
  if (shopState.sort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (shopState.sort === "price-desc") list.sort((a, b) => b.price - a.price);
  return list;
}

function renderShopPage() {
  const grid = document.querySelector("[data-product-grid]");
  const countEl = document.querySelector("[data-result-count]");
  const pager = document.querySelector("[data-pagination]");
  if (!grid) return;

  const filtered = getFilteredProducts();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  shopState.page = Math.min(shopState.page, totalPages);
  const start = (shopState.page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  renderProductGrid(grid, pageItems);
  if (countEl) countEl.textContent = `${filtered.length} saree${filtered.length === 1 ? "" : "s"}`;

  if (pager) {
    let html = "";
    for (let i = 1; i <= totalPages; i++) {
      html += `<button type="button" class="${i === shopState.page ? "active" : ""}" data-page="${i}">${i}</button>`;
    }
    pager.innerHTML = html;
    pager.querySelectorAll("[data-page]").forEach(btn => {
      btn.addEventListener("click", () => {
        shopState.page = parseInt(btn.dataset.page, 10);
        renderShopPage();
        grid.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }
}

function initShopPage() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid || typeof PRODUCTS === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const catParam = params.get("category");
  if (catParam) shopState.category = catParam;

  const catList = document.querySelector("[data-category-filters]");
  if (catList) {
    const options = ["all", ...CATEGORIES.map(c => c.name)];
    catList.innerHTML = options.map(name => `
      <label class="filter-option">
        <input type="radio" name="category" value="${name}" ${shopState.category === name ? "checked" : ""}>
        ${name === "all" ? "All weaves" : name}
      </label>`).join("");
    catList.querySelectorAll("input").forEach(input => {
      input.addEventListener("change", () => {
        shopState.category = input.value;
        shopState.page = 1;
        renderShopPage();
      });
    });
  }

  const sortSelect = document.querySelector("[data-sort]");
  if (sortSelect) sortSelect.addEventListener("change", () => {
    shopState.sort = sortSelect.value;
    renderShopPage();
  });

  const priceForm = document.querySelector("[data-price-filter]");
  if (priceForm) priceForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const min = priceForm.querySelector("[name='min-price']").value;
    const max = priceForm.querySelector("[name='max-price']").value;
    shopState.min = min ? parseFloat(min) : null;
    shopState.max = max ? parseFloat(max) : null;
    shopState.page = 1;
    renderShopPage();
  });

  const resetBtn = document.querySelector("[data-price-reset]");
  if (resetBtn) resetBtn.addEventListener("click", () => {
    shopState = { category: "all", sort: "featured", min: null, max: null, page: 1 };
    if (priceForm) priceForm.reset();
    if (sortSelect) sortSelect.value = "featured";
    if (catList) catList.querySelector("input[value='all']").checked = true;
    renderShopPage();
  });

  renderShopPage();
}

/* ---------- wishlist page ---------- */

function renderWishlistPage() {
  const container = document.querySelector("[data-wishlist-items]");
  if (!container) return;

  const list = getWishlist();

  if (list.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <i class="fa-regular fa-heart"></i>
        <p>Nothing saved yet. Tap the heart on a saree to keep it here.</p>
        <a href="shop.html" class="btn btn-primary" style="margin-top:18px;">Browse the shop</a>
      </div>`;
    return;
  }

  container.innerHTML = list.map(item => `
    <div class="cart-row">
      <img class="cart-thumb" src="${item.image}" alt="${item.name}">
      <div class="cart-item">
        <h4>${item.name}</h4>
        <span>${item.region}${item.meta ? " · " + item.meta : ""}</span>
      </div>
      <div class="price">৳${item.price.toLocaleString()}</div>
      <button type="button" class="btn btn-outline" data-move-to-cart="${item.id}" style="padding:8px 16px;font-size:13px;">Add to cart</button>
      <button type="button" class="remove-btn" data-remove-wish="${item.id}" aria-label="Remove item">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `).join("");

  container.querySelectorAll("[data-remove-wish]").forEach(btn =>
    btn.addEventListener("click", () => {
      saveWishlist(getWishlist().filter(i => i.id !== btn.dataset.removeWish));
      renderWishlistPage();
    })
  );
  container.querySelectorAll("[data-move-to-cart]").forEach(btn =>
    btn.addEventListener("click", () => {
      const item = getWishlist().find(i => i.id === btn.dataset.moveToCart);
      if (item) addToCart(item);
    })
  );
}

/* ---------- cart page ---------- */

function renderCartPage() {
  const container = document.querySelector("[data-cart-items]");
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>Your cart is empty. Time to find a shari you love.</p>
        <a href="shop.html" class="btn btn-primary" style="margin-top:18px;">Browse the shop</a>
      </div>`;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-row">
        <img class="cart-thumb" src="${item.image}" alt="${item.name}">
        <div class="cart-item">
          <h4>${item.name}</h4>
          <span>${item.region}</span>
        </div>
        <div class="qty-control">
          <button type="button" data-qty-down="${item.id}" aria-label="Decrease quantity">−</button>
          <input type="text" value="${item.qty}" readonly aria-label="Quantity">
          <button type="button" data-qty-up="${item.id}" aria-label="Increase quantity">+</button>
        </div>
        <div class="price">৳${(item.price * item.qty).toLocaleString()}</div>
        <button type="button" class="remove-btn" data-remove="${item.id}" aria-label="Remove item">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `).join("");
  }

  const totals = cartTotals(cart);
  const subtotalEl = document.querySelector("[data-subtotal]");
  const shippingEl = document.querySelector("[data-shipping]");
  const totalEl = document.querySelector("[data-total]");
  if (subtotalEl) subtotalEl.textContent = `৳${totals.subtotal.toLocaleString()}`;
  if (shippingEl) shippingEl.textContent = totals.shipping === 0 ? "Free" : `৳${totals.shipping}`;
  if (totalEl) totalEl.textContent = `৳${totals.total.toLocaleString()}`;

  container.querySelectorAll("[data-qty-up]").forEach(btn =>
    btn.addEventListener("click", () => {
      const item = getCart().find(i => i.id === btn.dataset.qtyUp);
      updateQty(btn.dataset.qtyUp, item.qty + 1);
    })
  );
  container.querySelectorAll("[data-qty-down]").forEach(btn =>
    btn.addEventListener("click", () => {
      const item = getCart().find(i => i.id === btn.dataset.qtyDown);
      updateQty(btn.dataset.qtyDown, item.qty - 1);
    })
  );
  container.querySelectorAll("[data-remove]").forEach(btn =>
    btn.addEventListener("click", () => removeFromCart(btn.dataset.remove))
  );
}

/* ---------- blog list page ---------- */

function initBlogListPage() {
  const grid = document.querySelector("[data-blog-grid]");
  if (!grid || typeof POSTS === "undefined") return;
  grid.innerHTML = POSTS.map(post => `
    <article class="post-card">
      <a href="blog-post.html?slug=${post.slug}" class="post-media">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </a>
      <div class="post-body">
        <span class="post-tag">${post.tag}</span>
        <h3><a href="blog-post.html?slug=${post.slug}">${post.title}</a></h3>
        <p>${post.excerpt}</p>
        <div class="post-meta">
          <span><i class="fa-regular fa-calendar"></i> ${formatDate(post.date)}</span>
          <span><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
        </div>
        <a href="blog-post.html?slug=${post.slug}" class="btn btn-outline" style="margin-top:14px;padding:8px 18px;font-size:13px;">Read more</a>
      </div>
    </article>
  `).join("");
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/* ---------- blog detail page ---------- */

function initBlogPostPage() {
  const container = document.querySelector("[data-post-article]");
  if (!container || typeof POSTS === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const post = POSTS.find(p => p.slug === slug) || POSTS[0];

  document.title = `${post.title} — Shari Lagbe?`;
  container.innerHTML = `
    <p class="post-tag">${post.tag}</p>
    <h1>${post.title}</h1>
    <div class="post-meta" style="margin:14px 0 30px;">
      <span><i class="fa-regular fa-calendar"></i> ${formatDate(post.date)}</span>
      <span><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
    </div>
    <div class="post-hero-image"><img src="${post.image}" alt="${post.title}"></div>
    <div class="post-article-body">
      ${post.content.map(p => `<p>${p}</p>`).join("")}
    </div>
  `;

  const related = document.querySelector("[data-related-posts]");
  if (related) {
    const others = POSTS.filter(p => p.slug !== post.slug).slice(0, 3);
    related.innerHTML = others.map(p => `
      <article class="post-card">
        <a href="blog-post.html?slug=${p.slug}" class="post-media">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </a>
        <div class="post-body">
          <span class="post-tag">${p.tag}</span>
          <h3><a href="blog-post.html?slug=${p.slug}">${p.title}</a></h3>
          <p>${p.excerpt}</p>
        </div>
      </article>
    `).join("");
  }
}

/* ---------- newsletter + contact forms ---------- */

function initNewsletterForm() {
  const form = document.querySelector(".newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input[type='email']");
    const note = form.parentElement.querySelector(".form-note");
    if (input && input.value.includes("@")) {
      if (note) note.textContent = "You're on the list — thank you!";
      input.value = "";
    } else if (note) {
      note.textContent = "Please enter a valid email address.";
    }
  });
}

function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Message sent — we'll reply within a day.");
    form.reset();
  });
}

/* ---------- init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initNewsletterForm();
  initContactForm();
  initHomePage();
  initShopPage();
  initBlogListPage();
  initBlogPostPage();
  updateCounts();
  renderCartPage();
  renderWishlistPage();
});
