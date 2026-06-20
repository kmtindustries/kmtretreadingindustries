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

  /* ── Scroll reveal ── */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
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
