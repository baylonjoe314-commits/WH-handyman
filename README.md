# Working Hands Construction Website

**From Demo to Detail.** A polished single-page marketing site for a locally owned renovation and handyman company serving Toledo, Ohio and nearby areas.

Visit the live site by enabling GitHub Pages for this repository (Settings → Pages) or by running a local static server.

---

## 🧭 Features at a Glance
- **Hero section with CTA** highlighting licensing, insurance, and direct phone link.
- **Service overview cards** that make drywall, painting, and remodel capabilities easy to scan.
- **Recent work gallery** with placeholders you can replace with your own before/after photos.
- **Testimonials and trust badges** to build credibility and reinforce referrals.
- **Service area map** with a stylized coverage graphic for quick visual context.
- **Lead capture form** (Formspree-ready) with a honeypot field to help reduce spam.
- **Responsive navigation** featuring a sticky header and mobile menu toggle.

---

## 📂 Project Structure
```
/
├── index.html              # Main single-page site
├── styles.css              # Global styling, layout, and responsive rules
├── script.js               # Mobile nav toggle, year update, spam guard
└── assets/
    └── hero-placeholder.svg # Replace with your own hero imagery if desired
```

Add your project images to the `assets/` folder and update the `work` section captions or background URLs in `styles.css` as needed.

---

## 🚀 Run Locally
```bash
# Using Python 3
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

Any static server will work — deploy via GitHub Pages, Netlify Drop, Vercel, or your host of choice.

---

## 🔧 Customize
- Update the `form` action in `index.html` with your preferred form handler endpoint.
- Swap the placeholder SVG with a project photo and adjust the color palette in `styles.css` to match your branding.
- Add analytics, chat widgets, or scheduling tools by dropping their scripts before the closing `</body>` tag.

---

## 📞 Contact Info (defaults shown)
- **Phone:** (419) 944-0398
- **Email:** workinghands.toledo@gmail.com
- **Service Area:** Toledo, Perrysburg, Maumee, Sylvania, Oregon, Rossford, Waterville

---

© <span id="year"></span> Working Hands Construction. Clean work. Clear communication. From Demo to Detail.
