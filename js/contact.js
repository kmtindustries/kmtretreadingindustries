/* ============================================================
   K.M.T. — Contact form
   ------------------------------------------------------------
   A single "Send Message" button.

   • If WEB3FORMS_KEY is set, the message is delivered straight to
     your inbox (no app switch, stays on the page) via Web3Forms —
     a free service for static sites. Get a free key in ~30 seconds
     at https://web3forms.com (just enter the address where you want
     enquiries delivered) and paste it below.

   • Until a key is set, the button falls back to WhatsApp so the
     form always works.
   ============================================================ */
(function () {
  'use strict';

  var PHONE = '919812044530';
  // Web3Forms access key — enquiries are delivered to the email registered with this key.
  var WEB3FORMS_KEY = 'aa76887e-649d-4ab6-a32e-d8e8e701ce3d';

  function keyReady() {
    return WEB3FORMS_KEY && WEB3FORMS_KEY.indexOf('YOUR_ACCESS') === -1 && WEB3FORMS_KEY.length > 10;
  }

  function status(msg, type) {
    var el = document.getElementById('formStatus');
    if (!el) return;
    el.textContent = msg;
    el.className = 'form-status' + (type ? ' is-' + type : '');
  }

  function collect() {
    var nameEl = document.getElementById('userName');
    var emailEl = document.getElementById('userEmail');
    var phoneEl = document.getElementById('userPhone');
    var msgEl = document.getElementById('userMessage');

    [nameEl, emailEl, phoneEl, msgEl].forEach(function (el) { el.classList.remove('error'); });

    var name = nameEl.value.trim();
    var email = emailEl.value.trim();
    var phone = phoneEl.value.trim();
    var msg = msgEl.value.trim();

    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRe = /^\+?[0-9]{7,15}$/;
    var strippedPhone = phone.replace(/[\s\-()]/g, '');

    if (!name) { nameEl.classList.add('error'); nameEl.focus(); status('Please provide your name.', 'error'); return null; }
    if (!email && !phone) {
      emailEl.classList.add('error'); phoneEl.classList.add('error'); emailEl.focus();
      status('Please provide your email or phone — at least one so we can reach you.', 'error'); return null;
    }
    if (email && !emailRe.test(email)) { emailEl.classList.add('error'); emailEl.focus(); status('Please enter a valid email address.', 'error'); return null; }
    if (phone && !phoneRe.test(strippedPhone)) { phoneEl.classList.add('error'); phoneEl.focus(); status('Please enter a valid phone number (7–15 digits).', 'error'); return null; }
    if (!msg) { msgEl.classList.add('error'); msgEl.focus(); status('Please type your enquiry.', 'error'); return null; }

    return { name: name, email: email, phone: phone, msg: msg };
  }

  function waText(d) {
    var t = 'Hello K.M.T. Retreading Industries,\n\nName: ' + d.name + '\n';
    if (d.phone) t += 'Phone: ' + d.phone + '\n';
    if (d.email) t += 'Email: ' + d.email + '\n';
    t += '\nMessage:\n' + d.msg;
    return encodeURIComponent(t);
  }

  function sendViaWhatsApp(d) {
    status('Opening WhatsApp so you can send your message…', 'ok');
    window.open('https://wa.me/' + PHONE + '?text=' + waText(d), '_blank', 'noopener');
  }

  window.sendMessage = function () {
    var d = collect();
    if (!d) return;

    var btn = document.getElementById('sendBtn');

    if (!keyReady()) { sendViaWhatsApp(d); return; }

    btn.disabled = true;
    btn.classList.add('loading');
    status('Sending your message…', '');

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: 'New website enquiry from ' + d.name,
        from_name: 'KMT Website',
        name: d.name,
        email: d.email || 'not provided',
        phone: d.phone || 'not provided',
        message: d.msg
      })
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res && res.success) {
          status('Thank you! Your message has been sent. We will get back to you shortly.', 'ok');
          ['userName', 'userEmail', 'userPhone', 'userMessage'].forEach(function (id) { document.getElementById(id).value = ''; });
        } else { sendViaWhatsApp(d); }
      })
      .catch(function () { sendViaWhatsApp(d); })
      .finally(function () { btn.disabled = false; btn.classList.remove('loading'); });
  };
})();
