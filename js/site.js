/* ============================================================
   K.M.T. — shared site behaviour (all pages)
   ============================================================ */
(function () {
  'use strict';

  /* ── Sticky nav shadow on scroll ── */
  var nav = document.querySelector('.site-nav');
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu toggle ── */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Scroll reveal ──
     Reveals .reveal elements as they scroll into view, but NEVER leaves
     content hidden: a load-time failsafe force-shows everything, which
     covers tall single-column mobile layouts and content built after load
     (e.g. the machine grid) where the observer may not fire. */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function reveal(el) { el.classList.add('visible'); }
  function revealInView() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    document.querySelectorAll('.reveal:not(.visible)').forEach(function (el) {
      if (el.getBoundingClientRect().top < vh + 150) reveal(el);
    });
  }
  if (reduce || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(reveal);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    // Bulletproofing: anything on screen is always revealed, even if the
    // observer misses it (tall mobile layouts, content built after load).
    window.addEventListener('scroll', revealInView, { passive: true });
    window.addEventListener('load', function () { setTimeout(revealInView, 250); });
    setTimeout(revealInView, 1500);
  }

  /* ── Floating enquiry button ── */
  var fab = document.querySelector('.fab');
  var fabToggle = document.querySelector('.fab-toggle');
  if (fab && fabToggle) {
    fabToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      fab.classList.toggle('open');
      fabToggle.setAttribute('aria-expanded', fab.classList.contains('open') ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!fab.contains(e.target)) fab.classList.remove('open');
    });
  }

  /* ── Current year in footer ── */
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
