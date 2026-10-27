(function () {
  'use strict';

  var WA = 'https://wa.me/553192980064';

  // ===== Ano do rodapé =====
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ===== Menu mobile =====
  var toggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileMenu.hidden = !open;
  }

  toggle.addEventListener('click', function () {
    setMenu(mobileMenu.hidden);
  });

  document.querySelectorAll('[data-scroll]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      setMenu(false);
    });
  });

  // ===== Carrossel em loop (substitui o embla) =====
  function Carousel(root, opts) {
    var viewport = root.querySelector('.carousel-viewport');
    var track = root.querySelector('.carousel-track');
    var duration = opts.duration || 500;
    var easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
    var busy = false;
    var self = this;

    function itemWidth() {
      return track.firstElementChild.getBoundingClientRect().width;
    }

    function animateTo(x, done) {
      busy = true;
      track.style.transition = 'transform ' + duration + 'ms ' + easing;
      track.style.transform = 'translate3d(' + x + 'px,0,0)';
      var finished = false;
      function end() {
        if (finished) return;
        finished = true;
        track.removeEventListener('transitionend', end);
        track.style.transition = 'none';
        if (done) done();
        busy = false;
      }
      track.addEventListener('transitionend', end);
      setTimeout(end, duration + 50);
    }

    function setX(x) {
      track.style.transition = 'none';
      track.style.transform = 'translate3d(' + x + 'px,0,0)';
    }

    function rotateForward() {
      track.appendChild(track.firstElementChild);
      setX(0);
    }

    this.next = function (fromX) {
      if (busy) return;
      if (fromX !== undefined) setX(fromX);
      animateTo(-itemWidth(), rotateForward);
    };

    this.prev = function (fromX) {
      if (busy) return;
      var w = itemWidth();
      track.insertBefore(track.lastElementChild, track.firstElementChild);
      setX((fromX || 0) - w);
      void track.offsetWidth;
      animateTo(0);
    };

    // Arrastar / swipe
    var startX = 0, dx = 0, dragging = false;
    this.dragged = false;

    viewport.addEventListener('pointerdown', function (e) {
      if (busy || (e.pointerType === 'mouse' && e.button !== 0)) return;
      dragging = true;
      self.dragging = true;
      self.dragged = false;
      startX = e.clientX;
      dx = 0;
    });

    window.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      dx = e.clientX - startX;
      if (Math.abs(dx) > 5) {
        self.dragged = true;
        setX(dx);
      }
    });

    function release() {
      if (!dragging) return;
      dragging = false;
      self.dragging = false;
      if (dx < -50) self.next(dx);
      else if (dx > 50) self.prev(dx);
      else if (dx !== 0) animateTo(0);
      setTimeout(function () { self.dragged = false; }, 0);
    }
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);

    viewport.addEventListener('dragstart', function (e) { e.preventDefault(); });
    viewport.addEventListener('click', function (e) {
      if (self.dragged) { e.preventDefault(); e.stopPropagation(); }
    }, true);

    var prevBtn = root.querySelector('[data-carousel-prev]');
    var nextBtn = root.querySelector('[data-carousel-next]');
    if (prevBtn) prevBtn.addEventListener('click', function () { self.prev(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { self.next(); });
  }

  // ===== Galeria + lightbox =====
  var galleryRoot = document.getElementById('galleryCarousel');
  var gallery = new Carousel(galleryRoot, { duration: 500 });

  var images = Array.prototype.map.call(
    galleryRoot.querySelectorAll('.gallery-item'),
    function (item) {
      var img = item.querySelector('img');
      return { src: img.getAttribute('src'), alt: img.getAttribute('alt'), title: item.querySelector('h3').textContent };
    }
  );

  var lightbox = document.getElementById('lightbox');
  var lightboxOverlay = document.getElementById('lightboxOverlay');
  var lbImg = document.getElementById('lightboxImg');
  var lbTitle = document.getElementById('lightboxTitle');
  var lbCounter = document.getElementById('lightboxCounter');
  var current = 0;
  var lastFocus = null;

  function renderLightbox() {
    var image = images[current];
    lbImg.src = image.src;
    lbImg.alt = image.alt;
    lbTitle.textContent = image.title;
    lbCounter.textContent = (current + 1) + ' / ' + images.length;
  }

  function openLightbox(index) {
    current = index;
    renderLightbox();
    lastFocus = document.activeElement;
    lightbox.hidden = false;
    lightboxOverlay.hidden = false;
    document.body.classList.add('no-scroll');
    lightbox.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxOverlay.hidden = true;
    document.body.classList.remove('no-scroll');
    if (lastFocus) lastFocus.focus();
  }

  function nextImage() { current = (current + 1) % images.length; renderLightbox(); }
  function previousImage() { current = (current - 1 + images.length) % images.length; renderLightbox(); }

  galleryRoot.querySelectorAll('.gallery-item').forEach(function (item) {
    item.querySelector('.gallery-card').addEventListener('click', function () {
      if (gallery.dragged) return;
      openLightbox(parseInt(item.getAttribute('data-index'), 10));
    });
  });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxNext').addEventListener('click', nextImage);
  document.getElementById('lightboxPrev').addEventListener('click', previousImage);
  lightboxOverlay.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (lightbox.hidden) return;
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'Escape') closeLightbox();
  });

  // ===== Parceiros (autoplay 2s) =====
  var partners = new Carousel(document.getElementById('partnersCarousel'), { duration: 400 });
  setInterval(function () { if (!partners.dragging) partners.next(); }, 2000);

  // ===== Serviços: orçamento =====
  document.querySelectorAll('[data-quote]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var message = 'Olá! Gostaria de solicitar orçamento para o serviço: ' + btn.getAttribute('data-quote');
      window.open(WA + '?text=' + encodeURIComponent(message), '_blank');
    });
  });

  // ===== Planos: carrinho =====
  var cart = [];
  var icons = {
    cart: document.querySelector('#cartOpen svg').outerHTML,
    minus: document.querySelector('[data-qty-minus] svg').outerHTML,
    plus: document.querySelector('[data-qty-plus] svg').outerHTML,
    trash: '<svg class="lucide lucide-trash-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>'
  };

  var cartFloat = document.getElementById('cartFloat');
  var cartBadge = document.getElementById('cartBadge');
  var cartCount = document.getElementById('cartCount');
  var cartBody = document.getElementById('cartBody');
  var cartFoot = document.getElementById('cartFoot');
  var cartDrawer = document.getElementById('cartDrawer');
  var cartBackdrop = document.getElementById('cartBackdrop');

  function totalItems() {
    return cart.reduce(function (sum, item) { return sum + item.quantity; }, 0);
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderCart() {
    var total = totalItems();
    cartFloat.hidden = total === 0;
    cartBadge.textContent = total;
    cartCount.textContent = total;
    cartFoot.hidden = cart.length === 0;

    if (cart.length === 0) {
      cartBody.innerHTML = '<div class="cart-empty">' + icons.cart + '<p>Seu carrinho está vazio</p></div>';
      return;
    }

    cartBody.innerHTML = '<div class="cart-list">' + cart.map(function (item) {
      return '<div class="card"><div class="cart-item">' +
        '<div class="cart-item-top">' +
          '<div class="cart-item-info"><h3 class="cart-item-name">' + escapeHtml(item.name) + '</h3><p class="cart-item-price">' + item.price + '</p></div>' +
          '<button type="button" class="btn btn-ghost btn-square cart-remove" data-remove="' + item.id + '" aria-label="Remover">' + icons.trash + '</button>' +
        '</div>' +
        '<div class="cart-item-bottom">' +
          '<div class="cart-item-qty">' +
            '<button type="button" class="btn btn-outline btn-square" data-dec="' + item.id + '" aria-label="Diminuir">' + icons.minus + '</button>' +
            '<span>' + item.quantity + '</span>' +
            '<button type="button" class="btn btn-outline btn-square" data-inc="' + item.id + '" aria-label="Aumentar">' + icons.plus + '</button>' +
          '</div>' +
          '<span class="cart-item-x">' + item.quantity + 'x</span>' +
        '</div>' +
      '</div></div>';
    }).join('') + '</div>';
  }

  function findItem(id) {
    for (var i = 0; i < cart.length; i++) if (cart[i].id === id) return cart[i];
    return null;
  }

  function addToCart(item, quantity) {
    var existing = findItem(item.id);
    if (existing) existing.quantity += quantity;
    else cart.push({ id: item.id, name: item.name, price: item.price, quantity: quantity });
    renderCart();
  }

  function removeFromCart(id) {
    cart = cart.filter(function (item) { return item.id !== id; });
    renderCart();
  }

  function updateQuantity(id, quantity) {
    if (quantity <= 0) { removeFromCart(id); return; }
    var item = findItem(id);
    if (item) item.quantity = quantity;
    renderCart();
  }

  document.querySelectorAll('.plan-card').forEach(function (card) {
    var qty = 1;
    var qtyEl = card.querySelector('[data-qty]');
    var minus = card.querySelector('[data-qty-minus]');
    var plus = card.querySelector('[data-qty-plus]');

    function setQty(n) {
      if (n < 1) return;
      qty = n;
      qtyEl.textContent = qty;
      minus.disabled = qty <= 1;
    }

    minus.addEventListener('click', function () { setQty(qty - 1); });
    plus.addEventListener('click', function () { setQty(qty + 1); });
    card.querySelector('[data-add]').addEventListener('click', function () {
      addToCart({
        id: parseInt(card.getAttribute('data-id'), 10),
        name: card.getAttribute('data-name'),
        price: card.getAttribute('data-price')
      }, qty);
    });
  });

  cartBody.addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    var id;
    if (btn.hasAttribute('data-remove')) {
      removeFromCart(parseInt(btn.getAttribute('data-remove'), 10));
    } else if (btn.hasAttribute('data-dec')) {
      id = parseInt(btn.getAttribute('data-dec'), 10);
      updateQuantity(id, findItem(id).quantity - 1);
    } else if (btn.hasAttribute('data-inc')) {
      id = parseInt(btn.getAttribute('data-inc'), 10);
      updateQuantity(id, findItem(id).quantity + 1);
    }
  });

  function openCart() { cartDrawer.hidden = false; cartBackdrop.hidden = false; }
  function closeCart() { cartDrawer.hidden = true; cartBackdrop.hidden = true; }

  document.getElementById('cartOpen').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  cartBackdrop.addEventListener('click', closeCart);
  document.getElementById('cartClear').addEventListener('click', function () { cart = []; renderCart(); });
  document.getElementById('cartSend').addEventListener('click', function () {
    var itemsList = cart.map(function (item) {
      return '• ' + item.name + ' - ' + item.price + ' (' + item.quantity + 'x)';
    }).join('\n');
    var message = 'Olá! Gostaria de contratar os seguintes serviços da Infolinx:\n\n' + itemsList;
    window.open(WA + '?text=' + encodeURIComponent(message), '_blank');
  });

  renderCart();
})();
