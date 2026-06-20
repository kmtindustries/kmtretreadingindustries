/* ============================================================
   K.M.T. — Machinery catalogue, modal & image zoom (home page)
   Photos & structure aligned to the official Product Catalogue.
   ============================================================ */
(function () {
  'use strict';

  var ENQUIRY_PHONE = '919812044530';
  var ENQUIRY_EMAIL = 'info@kmtretreadingindustries.com';

  var machineData = [
    { id: 1, name: "Buffer", model: "KRI-BF-10.20", img: "image/buffer.png", category: "buffer",
      summary: "10.20 tyre-size buffer with a 7.5 H.P. motor and pneumatic brake.",
      specs: [
        "Capacity: 10.20 tyre size.",
        "Provided with 7.5 H.P. motor for buffing.",
        "Shoulder trimming facility.",
        "Forward & reverse buffing facility.",
        "Pneumatic brake for rotary table & rasp stand.",
        "Heavy-section 3 H.P. blower for buffer dust.",
        "Air blow gun for air-blowing purposes as required.",
        "Specially designed rasp hub assembly & blades for uninterrupted working.",
        "Motorised table slide movement with 0.5 H.P. motor.",
        "Overall dimensions: 6'×6'×6' approx.",
        "Air consumption: 10 cfm at 125 psi; 50 cfm at 125 psi while inflation.",
        "Connected load: 9.37 K.W."
      ] },
    { id: 2, name: "Builder", model: "KRI-BD-10.20", img: "image/builder.png", category: "builder",
      summary: "Up to 10.20 tyre-size builder with zero-air-entrapment stitcher wheels.",
      specs: [
        "Capacity: up to 10.20 tyre size.",
        "Foot-switch operated tyre drive.",
        "Provided with leak-proof chucks.",
        "Specially designed stitcher wheels, moving on linear bearings, for zero air entrapment.",
        "Forward & reverse tyre drive motion.",
        "Provided with pneumatic tread cutter.",
        "Safeties for high inflation pressure.",
        "Overall dimensions: 5'×5'×5' approx.",
        "Air consumption: 10 cfm at 125 psi intermittent; 50 cfm at 125 psi while inflation.",
        "Connected load: 0.38 K.W."
      ] },
    { id: 3, name: "Buffer (Expandable)", model: "KRI-BF-10.20", img: "image/buffer-expandable.png",
      images: ["image/buffer-expandable.png", "image/buffer-expandable-2.png", "image/buffer-expandable-3.png"], category: "buffer",
      summary: "Expandable buffer for 10.20 tyre size with a 7.5 H.P. motor.",
      specs: [
        "Capacity: 10.20 tyre size.",
        "Provided with 7.5 H.P. motor for buffing.",
        "Shoulder trimming facility.",
        "Forward buffing facility.",
        "Pneumatic brake for rotary table & rasp stand.",
        "Heavy-section 3 H.P. blower for buffer dust.",
        "Air blow gun for air-blowing purposes as required.",
        "Specially designed rasp hub assembly & blades for uninterrupted working.",
        "Motorised table slide movement with 0.5 H.P. motor.",
        "Overall dimensions: 6'×6'×6' approx.",
        "Air consumption: 10 cfm at 125 psi; 50 cfm at 125 psi while inflation.",
        "Connected load: 8.87 K.W."
      ] },
    { id: 4, name: "Builder (Expandable)", model: "KRI-BD-10.20", img: "image/builder-expandable.png", category: "builder",
      summary: "Builder featuring an expandable hub and pneumatic tread cutter.",
      specs: [
        "Capacity: up to 10.20 tyre size.",
        "Foot-switch operated tyre drive.",
        "Provided with expandable hub.",
        "Specially designed stitcher wheels, moving on linear bearings, for zero air entrapment.",
        "Forward & reverse tyre drive motion.",
        "Provided with pneumatic tread cutter.",
        "Safeties for high inflation pressure.",
        "Overall dimensions: 5'×5'×5' approx.",
        "Air consumption: 10 cfm at 125 psi intermittent; 50 cfm at 125 psi while inflation.",
        "Connected load: 0.38 K.W."
      ] },
    { id: 5, name: "Buffer (OTR)", model: "KRI-BF-14.25", img: "image/buffer-otr.png",
      images: ["image/buffer-otr.png", "image/buffer-otr-2.png", "image/buffer-otr-3.png", "image/buffer-otr-4.png", "image/buffer-otr-5.png"], category: "otr",
      summary: "Heavy-duty OTR buffer up to 14.25 tyre size with a 10 H.P. motor.",
      specs: [
        "Capacity: up to 14.25 tyre size.",
        "Provided with one fixed & one movable chuck.",
        "10 H.P. motor for buffing.",
        "Pneumatically operated in-built tyre lift for lifting the tyre from the floor to the chuck.",
        "Tread measuring device for easy measurement of circumference.",
        "Shoulder trimming facility & forward/reverse buffing facility.",
        "Device for measuring shoulder trimming width.",
        "Rasp blade sharpening attachment.",
        "Pneumatic brake for rotary table & rasp stand.",
        "Heavy-suction 3 H.P. blower for buffer dust & air blow gun.",
        "Air jets for buffer-dust cleaning at side rail & lead screw.",
        "Specially designed rasp hub assembly & blades for uninterrupted working.",
        "Motorised table slide movement with 0.5 H.P. motor.",
        "Overall dimensions: 7'×8'×9' approx.",
        "Air consumption: 10 cfm at 125 psi; 50 cfm at 125 psi while inflation.",
        "Connected load: 15.5 K.W.",
        "Optional: tractor-tyre attachment with 7.5 H.P. motor."
      ] },
    { id: 6, name: "Builder (OTR)", model: "KRI-KBD-14.25", img: "image/builder-otr.png",
      images: ["image/builder-otr.png", "image/builder-otr-2.png", "image/builder-otr-3.png"], category: "otr",
      summary: "OTR builder with movable/fixed chucks and adjustable stitcher wheels.",
      specs: [
        "Capacity: up to 14.25 tyre size.",
        "Foot-switch operated tyre drive control.",
        "Provided with one movable & one fixed chuck.",
        "Pneumatic tyre lift for lifting the tyre from the floor to the desired level between the chucks.",
        "Specially designed stitcher wheels, moving on linear bearings, for zero air entrapment.",
        "Adjustable stitcher-wheel linear speed.",
        "Forward & reverse tyre drive motion.",
        "Overall dimensions: 6'×5'×7' approx.",
        "Air consumption: 10 cfm at 125 psi intermittent; 50 cfm at 125 psi while inflation.",
        "Connected load: 0.38 K.W."
      ] },
    { id: 7, name: "Mini Rasper", model: "KRI-MRS-11.20", img: "image/mini-rasper.png",
      images: ["image/mini-rasper.png", "image/mini-rasper-2.png"], category: "buffer",
      summary: "11.20 tyre capacity with a 10 H.P. buffing motor and in-built tyre lift.",
      specs: [
        "Capacity: 11.20 tyre size.",
        "Provided with 10 H.P. motor for buffing.",
        "Pneumatically operated in-built tyre lift for lifting the tyre from the floor to the chuck.",
        "Shoulder trimming facility provided.",
        "Forward & reverse buffing facility provided.",
        "Pneumatic brake for rotary table & rasp stand.",
        "Heavy-section 3 H.P. blower for buffer dust.",
        "Air blow gun for air-blowing purposes as required.",
        "Specially designed rasp hub assembly & blades for uninterrupted working.",
        "Motorised table slide motion with 0.5 H.P. motor.",
        "Foot-switch operated tyre drive control.",
        "Overall dimensions: 6'×6'×7' approx.",
        "Air pressure required: 10 kg/cm².",
        "Air consumption: 40 cfm at 100 psi while inflation.",
        "Connected load: 11.37 K.W."
      ] },
    { id: 8, name: "Mini Rasper (Expandable)", model: "KRI-MRS-12.20", img: "image/mini-rasper-expandable.png",
      images: ["image/mini-rasper-expandable.png", "image/mini-rasper-expandable-2.png", "image/mini-rasper-expandable-3.png", "image/mini-rasper-expandable-4.png", "image/mini-rasper-expandable-5.png"], category: "buffer",
      summary: "12.20 tyre-capacity expandable mini rasper with 12\"–24\" rim.",
      specs: [
        "Capacity: 12.20 tyre size.",
        "Provided with 10 H.P. motor for buffing.",
        "Pneumatically operated in-built tyre lift for lifting the tyre from the floor to the expandable rim.",
        "Shoulder trimming facility provided.",
        "Forward & reverse buffing facility provided.",
        "Pneumatic brake for rotary table & rasp stand.",
        "Heavy-section 3 H.P. blower for buffer dust.",
        "Air blow gun for air-blowing purposes as required.",
        "Specially designed rasp hub assembly & blades for uninterrupted working.",
        "Motorised table slide motion with 0.5 H.P. motor.",
        "Foot-switch operated tyre drive control.",
        "Overall dimensions: 6'×6'×7' approx.",
        "Air pressure required: 10 kg/cm².",
        "Air consumption: 40 cfm at 100 psi while inflation.",
        "Connected load: 11.37 K.W.",
        "Expandable rim up to tyre size 12\" to 24\" (available with 10 or 12 segments)."
      ] },
    { id: 9, name: "Inspection Spreader", model: "KRI-IS-10.20", img: "image/inspection-spreader.png", category: "other",
      summary: "Pneumatic tyre inspection unit with 4 lights and floor-to-jaw lift.",
      specs: [
        "Pneumatically air-operated.",
        "Capacity to inspect 10.00-20 tyre size.",
        "Provided with 4 lights for clear vision.",
        "Provided with tyre lift for lifting the tyre from the floor to the gripping jaws.",
        "Multi-angular bead hooks for firm gripping of the tyre at the bead circumference.",
        "Overall dimensions: 3'×6'×7' approx.",
        "Air pressure required: 8 kg/cm².",
        "Connected load: 0.4 K.W."
      ] },
    { id: 10, name: "Repair Spreader", model: "KRI-IS-10.20", img: "image/repair-spreader.png",
      images: ["image/repair-spreader.png", "image/repair-spreader-2.png"], category: "other",
      summary: "Compact pneumatic repair spreader for up to 10.00-20 tyre size.",
      specs: [
        "Pneumatically air-operated.",
        "Capacity to inspect 10.00-20 tyre size.",
        "Provided with light for clear vision.",
        "Multi-angular bead hooks for firm gripping of the tyre at the bead circumference.",
        "Overall dimensions: 3'×2'×3' approx.",
        "Air pressure required: 8 kg/cm².",
        "Connected load: 0.1 K.W."
      ] },
    { id: 11, name: "Cold Curing Chamber (Standard)", model: "KRI-CCC-4-12.20 (Standard)", img: "image/curing-chamber-standard.png",
      images: ["image/curing-chamber-standard.png", "image/curing-chamber-standard-2.png", "image/curing-chamber-standard-3.png"], category: "chamber",
      summary: "High-capacity insulated curing chamber with pneumatic doors.",
      specs: [
        "Available capacities: 4, 5, 7, 11 or 14 tyres of 10.00-20 + 1 tyre of LTV.",
        "Inside & outside insulated for lower power consumption. Outside fan motor.",
        "Hydraulically tested at 12 kg/cm².",
        "Finned-type heaters for heat dissipation.",
        "Pneumatic door design for greater safety & easy operation.",
        "Air ducting for streamlined airflow & even temperature distribution.",
        "Fitted with thermometer and overheat safety controller with digital temperature display.",
        "999-minute timer for auto exhaust, with hooter indication on completion of the curing cycle.",
        "Auto differential-pressure control.",
        "Interlocking of heaters with fan motor & chamber pressure.",
        "Provided with safeties such as high chamber pressure / tyre pressure & high temperature.",
        "Overall dimensions: 9'×7'×6' approx.",
        "Air pressure required: 10 kg/cm².",
        "Air consumption required: 60 cfm at 150 psi.",
        "Connected load: 15.50 K.W.",
        "Optional: Differential Pressure Curing (D.P.C.) system, alarm system, pressure/temperature recorders."
      ] },
    { id: 12, name: "Cold Curing Chamber (Pin Type)", model: "KRI-CCC-3-11.20", img: "image/curing-chamber-pin.png",
      images: ["image/curing-chamber-pin.png", "image/curing-chamber-pin-2.png", "image/curing-chamber-pin-3.png", "image/curing-chamber-pin-4.png"], category: "chamber",
      summary: "Insulated 3-tyre curing chamber with round heaters and pin-type door.",
      specs: [
        "Capacity: up to 11.20 tyre size (3 tyres of 10.00-20 + 1 tyre of LTV size).",
        "Inside & outside insulated. Outside fan motor.",
        "Round-type heaters for fast heat dissipation.",
        "Pin-type door design, provided with 4 nos. heavy-duty L-type locks.",
        "Fitted with thermometer and overheat safety controller with digital temperature display.",
        "999-minute timer for auto exhaust, with hooter indication.",
        "Auto differential-pressure control.",
        "Interlocking of heaters with fan motor & chamber pressure.",
        "Overall dimensions: 6'×7'×6' approx.",
        "Air pressure: 8 kg/cm².",
        "Air consumption required: 27 cfm at 150 psi.",
        "Connected load: 12.50 K.W."
      ] },
    { id: 13, name: "Cold Curing Chamber (Pneumatic Door)", model: "KRI-CCC-3-11.20", img: "image/curing-chamber-pneumatic.png",
      images: ["image/curing-chamber-pneumatic.png", "image/curing-chamber-pneumatic-2.png"], category: "chamber",
      summary: "3-tyre chamber featuring a pneumatic door and in-built tyre lift.",
      specs: [
        "Capacity: up to 11.20 tyre size (3 tyres of 10.00-20 + 1 tyre of LTV size).",
        "Inside & outside insulated. Outside fan motor.",
        "Round-type heaters for fast heat dissipation.",
        "Pneumatic door design for greater safety & easy operation.",
        "Fitted with thermometer and overheat safety controller with digital temperature display.",
        "999-minute timer for auto exhaust, with hooter indication.",
        "Auto differential-pressure control.",
        "Interlocking of heaters with fan motor & chamber pressure.",
        "Provided with pneumatic tyre lift.",
        "Overall dimensions: 6'×7'×6' approx.",
        "Air pressure: 8 kg/cm².",
        "Air consumption required: 27 cfm at 150 psi.",
        "Connected load: 12.50 K.W."
      ] },
    { id: 14, name: "Electric Cut Vulcanizer", model: "KRI-ECV-32 / KRI-ECV-52 (OTR)", img: "image/electric-cut-vulcanizer.png", category: "otr",
      summary: "Electric cut vulcanizer for spot repairs — available in standard (up to 12.20) and OTR (up to 14.25) variants.",
      specs: [
        "Available in two variants — ECV-32 (standard) and ECV-52 (OTR).",
        "Three-bolt clamping with air heaters and control panel on stand.",
        "ECV-32: capacity up to 12.20 tyre size; bead plate 20\" (one set); spacer ring set — 1/2\", 3/4\", 1\" (2 pcs); connected load 5 K.W.",
        "ECV-52 (OTR): capacity up to 14.25 tyre size; bead plates 24\", 25\" & 28\" (three sets); spacer ring set — 1/2\", 3/4\", 1\" (2 pcs), 2\" (2 pcs); connected load 6 K.W.",
        "Overall dimensions: 3'×3'×3' approx. (both variants)."
      ] },
    { id: 15, name: "Mono Rail", model: "KRI-MR-7-12.20", img: "image/mono-rail.png", category: "other",
      summary: "Holds up to 14 tyres at a time for quick chamber loading.",
      specs: [
        "Capacity: 12.20 tyre size.",
        "Holds up to 14 tyres at a time for easy & quick loading into the chamber.",
        "Provided with pneumatically operated tyre lift for lifting rimmed tyres.",
        "Overall dimensions: 14'×6'×6' approx.",
        "Air pressure required: 8 kg/cm²."
      ] },
    { id: 16, name: "Mobile Tyre Lift", model: "KRI-TL-10.20", img: "image/mobile-tyre-lift.png",
      images: ["image/mobile-tyre-lift.png", "image/mobile-tyre-lift-2.png"], category: "other",
      summary: "Movable pneumatic lift for heavy rimmed tyres.",
      specs: [
        "Movable lift for lifting rimmed tyres.",
        "Pneumatically operated frame.",
        "Heavy-duty castor wheels.",
        "Capacity: up to 10.00-20 tyre size.",
        "Overall dimensions: 6'×3'×3' approx."
      ] },
    { id: 17, name: "Skiving Stand", model: "KRI-SS-4-10.00-20", img: "image/skiving-stand.png", category: "other",
      summary: "Sturdy stand holding up to 4 tyres for skiving work.",
      specs: [
        "Capacity: up to 10.00-20 tyre size.",
        "Holds up to 4 tyres of 10.00-20.",
        "Overall dimensions: 3'×4'×4' approx."
      ] },
    { id: 18, name: "Skiving Motor", model: "KRI-FSB", img: "image/skiving-motor.png", category: "other",
      summary: "Trolley-mounted, fully balanced rotor motor for skiving.",
      specs: [
        "An efficient unit for carrying out skiving work.",
        "Driven by a 1 H.P. / 2800 rpm motor.",
        "Mounted on a trolley for easy movement.",
        "Fully balanced rotor."
      ] },
    { id: 19, name: "Envelope Expander", model: "KRI-EE-12.20", img: "image/envelope-expander.png", category: "other",
      summary: "Pneumatic tyre-lift envelope expander for 12.20 tyre sizes.",
      specs: [
        "Provided with pneumatically operated tyre lift.",
        "Capacity: 12.20 tyre size.",
        "Overall dimensions: 7'×7'×3' approx."
      ] },
    { id: 20, name: "Warming Tray", model: "KRI-WT", img: "image/warming-tray.png", category: "other",
      summary: "Thermostat-controlled device for heating repair gum.",
      specs: [
        "An excellent device for heating repair gum used for filling.",
        "Provided with a thermostat for temperature control.",
        "Connected load: 1 K.W."
      ] },
    { id: 21, name: "Guillotine Cutter", model: "KRI-GC-10.20", img: "image/guillotine-cutter.png", category: "other",
      summary: "300 mm width manual cutter for retreading materials.",
      specs: [
        "Cuts tread square — 300 mm cutting width.",
        "Overall dimensions: 2'×2'×1' approx."
      ] },
    { id: 22, name: "Tyre Changer Machine (Manual)", model: "KRI-TC-16", img: "image/tyre-changer.png",
      images: ["image/tyre-changer.png", "image/tyre-changer-2.png"], category: "other",
      summary: "Pneumatically operated manual tyre changer.",
      specs: [
        "Capacity: up to 16\" tyre size.",
        "Dimensions: 3'×2'×2'.",
        "Pneumatically operated.",
        "Provided with FRCL unit & hand-lever valve."
      ] },
    { id: 23, name: "Curing Rims", model: "8\"–24\"", img: "image/curing-rims.png", category: "other",
      summary: "Hydraulically pressed, lightweight curing rims with spring-loaded positive locks.",
      specs: [
        "Hydraulically pressed — strong yet light to handle.",
        "Spring-loaded positive locks for secure, leak-free fitment.",
        "E.R.W. welded construction for strength and durability.",
        "Sizes available: 8\" to 24\".",
        "Expandable rim available up to tyre size 12\" to 24\" (10 or 12 segments)."
      ] },
    { id: 24, name: "Distribution Control Panel Board", model: "KMT", img: "image/distribution-control-panel.png", category: "other",
      summary: "Electrical distribution control panel for centralised equipment control.",
      specs: [
        "Distribution control panel board.",
        "Features modular control compartments.",
        "Equipped with analog meters, indicator lights and control switches.",
        "Heavy-duty floor-mounted frame."
      ] },
    { id: 25, name: "Spares, Tools & Accessories", model: "Accessories", img: "image/retreading-tools.png",
      images: ["image/retreading-tools.png", "image/spare-parts-kit.png", "image/envelope-sealing-flanges.png"], category: "other",
      summary: "Retreading tool sets, equipment spare-parts kits and envelope sealing flanges.",
      specs: [
        "Retreading Tools — rotary rasps, buffing stones, skiving knives and awls; stitchers, brushes and repair accessories; safety goggles and operator kit included.",
        "Equipment Spare Parts Kit — curated consumables and wear parts for KMT machines: hoses, regulators, gauges, valves, heaters and more; keeps downtime to hours, not weeks.",
        "Envelope Sealing Flanges — hydraulically pressed, lightweight flange sets; pair with curing rims for a reliable envelope seal; full size range 8\" to 24\"."
      ] }
  ];

  /* ── Category labels ── */
  var CAT_LABEL = { buffer: 'Buffer', builder: 'Builder', chamber: 'Chamber', otr: 'OTR', other: 'Accessory' };

  /* ── Build the grid ── */
  var grid = document.getElementById('machine-grid');
  function buildGrid(filter) {
    var list = (filter === 'all') ? machineData : machineData.filter(function (m) { return m.category === filter; });
    if (!list.length) { grid.innerHTML = '<p class="grid-empty">No machines in this category yet.</p>'; return; }
    grid.innerHTML = list.map(function (m) {
      return '' +
        '<article class="machine-card" tabindex="0" role="button" aria-label="View details for ' + m.name + '" data-id="' + m.id + '">' +
          '<div class="card-img-area">' +
            '<span class="card-cat">' + (CAT_LABEL[m.category] || 'Machine') + '</span>' +
            '<img src="' + m.img + '" alt="' + m.name + ' — ' + m.model + '" loading="lazy" decoding="async">' +
          '</div>' +
          '<div class="card-body">' +
            '<div class="card-model-tag">' + m.model + '</div>' +
            '<h3 class="card-title">' + m.name + '</h3>' +
            '<p class="card-summary">' + m.summary + '</p>' +
            '<div class="card-action">' +
              '<span class="card-view-btn">View details</span>' +
              '<span class="card-arrow" aria-hidden="true">' + svgArrow() + '</span>' +
            '</div>' +
          '</div>' +
        '</article>';
    }).join('');
  }

  function svgArrow() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  }

  /* ── Filters ── */
  document.querySelectorAll('.filter-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.filter-tab').forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      buildGrid(tab.dataset.filter);
    });
  });

  /* ── Card open (click + keyboard) ── */
  grid.addEventListener('click', function (e) {
    var card = e.target.closest('.machine-card');
    if (card) openModal(+card.dataset.id);
  });
  grid.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var card = e.target.closest('.machine-card');
    if (card) { e.preventDefault(); openModal(+card.dataset.id); }
  });

  /* ── Modal ── */
  var modal = document.getElementById('machineModal');
  var modalImg = document.getElementById('modalImg');
  var currentImages = [], currentIndex = 0;

  function getBaseScale() { return 1.0; }
  var ZOOM_SCALE = 2.6;

  function openModal(id) {
    var m = machineData.find(function (x) { return x.id === id; });
    if (!m) return;
    currentImages = (m.images && m.images.length) ? m.images : [m.img];
    currentIndex = 0;
    updateGallery();

    document.getElementById('modalTitle').textContent = m.name;
    document.getElementById('modalModel').textContent = 'Model · ' + m.model;
    document.getElementById('modalList').innerHTML = m.specs.map(function (s) { return '<li>' + s + '</li>'; }).join('');

    var msg = encodeURIComponent('Hello, I am interested in the ' + m.name + ' (Model: ' + m.model + '). Please share more details and pricing.');
    document.getElementById('btnCall').href = 'tel:+' + ENQUIRY_PHONE;
    document.getElementById('btnWhatsapp').href = 'https://wa.me/' + ENQUIRY_PHONE + '?text=' + msg;
    document.getElementById('btnEmail').href = 'mailto:' + ENQUIRY_EMAIL + '?subject=' + encodeURIComponent('Enquiry: ' + m.name) + '&body=' + msg;
    document.getElementById('btnSms').href = 'sms:+' + ENQUIRY_PHONE + '?body=' + msg;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function updateGallery() {
    modalImg.src = currentImages[currentIndex];
    modalImg.alt = document.getElementById('modalTitle').textContent || 'Machine image';
    modalImg.classList.remove('zoomed');
    modalImg.style.transform = 'scale(' + getBaseScale() + ') translate(0px,0px)';
    isZoomed = false; translateX = 0; translateY = 0;

    var prev = modal.querySelector('.prev-btn'), next = modal.querySelector('.next-btn');
    var ind = document.getElementById('imgIndicators');
    ind.innerHTML = '';
    if (currentImages.length > 1) {
      prev.style.display = 'flex'; next.style.display = 'flex';
      currentImages.forEach(function (_, idx) {
        var dot = document.createElement('button');
        dot.className = 'img-dot' + (idx === currentIndex ? ' active' : '');
        dot.setAttribute('aria-label', 'Image ' + (idx + 1));
        dot.onclick = function (e) { e.stopPropagation(); currentIndex = idx; updateGallery(); };
        ind.appendChild(dot);
      });
    } else { prev.style.display = 'none'; next.style.display = 'none'; }
  }

  window.prevImage = function (e) { e.stopPropagation(); currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentImages.length - 1; updateGallery(); };
  window.nextImage = function (e) { e.stopPropagation(); currentIndex = (currentIndex < currentImages.length - 1) ? currentIndex + 1 : 0; updateGallery(); };
  window.closeModal = function () { modal.classList.remove('active'); document.body.style.overflow = ''; };

  modal.addEventListener('click', function (e) { if (e.target === modal) window.closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) window.closeModal();
    if (!modal.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') window.prevImage(e);
    if (e.key === 'ArrowRight') window.nextImage(e);
  });

  /* ── Click-to-zoom + drag-pan ── */
  var isZoomed = false, isDragging = false, hasDragged = false;
  var dragStartX, dragStartY, rawStartX, rawStartY, translateX = 0, translateY = 0;

  function loc(e) {
    if (e.touches && e.touches.length) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    if (e.changedTouches && e.changedTouches.length) return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  }
  function startDrag(e) {
    if (!isZoomed) return;
    isDragging = true; hasDragged = false;
    var p = loc(e); rawStartX = p.x; rawStartY = p.y;
    dragStartX = p.x - translateX; dragStartY = p.y - translateY;
    modalImg.style.transition = 'none';
  }
  function moveDrag(e) {
    if (!isDragging) return;
    if (e.cancelable) e.preventDefault();
    var p = loc(e);
    if (Math.abs(p.x - rawStartX) > 5 || Math.abs(p.y - rawStartY) > 5) hasDragged = true;
    if (!hasDragged) return;
    translateX = p.x - dragStartX; translateY = p.y - dragStartY;
    modalImg.style.transform = 'scale(' + ZOOM_SCALE + ') translate(' + (translateX / ZOOM_SCALE) + 'px,' + (translateY / ZOOM_SCALE) + 'px)';
  }
  function endDrag() { if (!isDragging) return; isDragging = false; modalImg.style.transition = 'transform 0.3s ease'; }

  modalImg.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', moveDrag);
  window.addEventListener('mouseup', endDrag);
  modalImg.addEventListener('touchstart', startDrag, { passive: false });
  window.addEventListener('touchmove', moveDrag, { passive: false });
  window.addEventListener('touchend', endDrag);

  modalImg.addEventListener('click', function () {
    if (hasDragged) { hasDragged = false; return; }
    if (!isZoomed) { this.classList.add('zoomed'); isZoomed = true; translateX = translateY = 0; this.style.transform = 'scale(' + ZOOM_SCALE + ') translate(0px,0px)'; }
    else { this.classList.remove('zoomed'); isZoomed = false; translateX = translateY = 0; this.style.transform = 'scale(' + getBaseScale() + ') translate(0px,0px)'; }
  });

  /* init */
  buildGrid('all');
})();
