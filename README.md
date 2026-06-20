# K.M.T. Retreading Industries — Website

Official website for **K.M.T. Retreading Industries**, an ISO 9001:2015 certified manufacturer and
exporter of tyre retreading plants, cold curing chambers and machinery (Narwana, Haryana, India — est. 1995).

🌐 **Live site:** [kmtretreadingindustries.com](https://kmtretreadingindustries.com)

---

## 📁 Project structure

```
.
├── index.html              # Home (hero + machinery catalogue)
├── certifications.html     # Certifications & awards gallery
├── contact.html            # Contact page (details, form, map)
├── CNAME                   # Custom domain for GitHub Pages
├── KMT-Product-Catalogue.pdf
├── css/
│   └── styles.css          # All styling (shared by every page)
├── js/
│   ├── site.js             # Nav, mobile menu, scroll animations, floating button
│   ├── products.js         # Machinery list + popup details (HOME PAGE)
│   ├── certs.js            # Certificate zoom/lightbox
│   └── contact.js          # Contact form (sends enquiries to email)
└── image/                  # All photos, logo and certificate scans
```

This is a plain HTML / CSS / JavaScript site — **no build step, no frameworks**. Edit a file, save, refresh.

---

## ✏️ Common edits

### Change a machine photo
Open `js/products.js`. Each machine has an `img` (the photo shown on the card) and sometimes an
`images` list (extra photos in the popup). Put your new picture in the `image/` folder and point to it.
See **"How to change machine photos"** notes from the developer.

### Add a hero (cover) photo
In `index.html`, inside `<div class="hero-figure" id="heroSlider">`, add a new line:
`<img src="image/yourphoto.jpg" alt="Description" class="hero-slide">`
(only the first image keeps `class="hero-slide active"`). The slideshow updates automatically.

### Replace the catalogue
Replace the file `KMT-Product-Catalogue.pdf` with a new PDF of the **same name** — no code change needed.

### Contact form enquiries
Enquiries are delivered by [Web3Forms](https://web3forms.com) to the email tied to the access key in
`js/contact.js`. If WhatsApp opens instead of sending, the key needs checking.

---

## 🚀 Publishing (GitHub Pages)

1. Upload the **contents** of this folder to the repository root (so `index.html` sits at the top level,
   with `css/`, `js/` and `image/` beside it).
2. In the repo: **Settings → Pages** → deploy from the `main` branch (root).
3. The `CNAME` file keeps the custom domain `kmtretreadingindustries.com` connected.
4. Changes go live a minute or two after each commit.

---

© K.M.T. Retreading Industries · Narwana, Haryana, India
