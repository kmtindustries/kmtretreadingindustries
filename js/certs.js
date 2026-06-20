/* ============================================================
   K.M.T. — Certificate lightbox with zoom & pan
   ============================================================ */
(function () {
  'use strict';
  var lightbox = document.getElementById('certLightbox');
  var img = document.getElementById('certLightboxImg');
  if (!lightbox || !img) return;

  var isZoomed = false, isDragging = false, hasDragged = false;
  var startX, startY, rawX, rawY, tx = 0, ty = 0;
  var ZOOM = 2.5;

  function open(src, alt) {
    img.src = src; img.alt = alt || 'Certificate';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    img.classList.remove('zoomed');
    img.style.transform = 'scale(1) translate(0,0)';
    isZoomed = false; tx = ty = 0;
  }
  function close() { lightbox.classList.remove('active'); document.body.style.overflow = ''; }
  window.closeCertLightbox = close;

  /* delegate clicks on cert items */
  document.querySelectorAll('.cert-item').forEach(function (item) {
    item.addEventListener('click', function () {
      open(item.dataset.full, item.dataset.title);
    });
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(item.dataset.full, item.dataset.title); }
    });
  });

  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) close(); });
  document.querySelector('.cert-lightbox-close').addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && lightbox.classList.contains('active')) close(); });

  function loc(e) {
    if (e.touches && e.touches.length) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    if (e.changedTouches && e.changedTouches.length) return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  }
  function startDrag(e) {
    if (!isZoomed) return;
    if (e.cancelable) e.preventDefault();
    isDragging = true; hasDragged = false;
    var p = loc(e); rawX = p.x; rawY = p.y;
    startX = p.x - tx; startY = p.y - ty;
    img.style.transition = 'none';
  }
  function moveDrag(e) {
    if (!isDragging) return;
    if (e.cancelable) e.preventDefault();
    var p = loc(e);
    if (Math.abs(p.x - rawX) > 5 || Math.abs(p.y - rawY) > 5) hasDragged = true;
    if (!hasDragged) return;
    tx = p.x - startX; ty = p.y - startY;
    img.style.transform = 'scale(' + ZOOM + ') translate(' + (tx / ZOOM) + 'px,' + (ty / ZOOM) + 'px)';
  }
  function endDrag() { if (!isDragging) return; isDragging = false; img.style.transition = 'transform 0.3s ease'; }

  img.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', moveDrag);
  window.addEventListener('mouseup', endDrag);
  img.addEventListener('touchstart', startDrag, { passive: false });
  window.addEventListener('touchmove', moveDrag, { passive: false });
  window.addEventListener('touchend', endDrag);

  img.addEventListener('click', function (e) {
    if (hasDragged) { hasDragged = false; return; }
    e.stopPropagation();
    if (!isZoomed) { this.classList.add('zoomed'); isZoomed = true; tx = ty = 0; this.style.transform = 'scale(' + ZOOM + ') translate(0,0)'; }
    else { this.classList.remove('zoomed'); isZoomed = false; tx = ty = 0; this.style.transform = 'scale(1) translate(0,0)'; }
  });
})();
