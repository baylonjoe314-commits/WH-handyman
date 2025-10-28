# Working Hands Construction

**From Demo to Detail.** Locally owned renovation and handyman company serving Toledo, Ohio and nearby areas. We specialize in **drywall repair**, **painting**, **flooring**, **trim**, and **small remodels** — combining clean, detailed work with fair pricing and reliable communication. Whether it’s patching a wall or transforming a room, we take pride in craftsmanship from demo to detail. **Licensed, insured, and trusted by Toledo homeowners.**

<p align="left">
  <a href="https://YOUR_GITHUB_USERNAME.github.io/working-hands-site" target="_blank"><img alt="Live Site" src="https://img.shields.io/badge/Live%20Site-Visit-1?logo=google-chrome"></a>
  <img alt="Made with" src="https://img.shields.io/badge/HTML-CSS-JS-1">
  <img alt="Location" src="https://img.shields.io/badge/Toledo-OH-1">
</p>

---

## 📍 Services
- Drywall & Finishing (patches, skim coats, texture match)
- Interior & Exterior Painting (walls, ceilings, trim, decks/fences)
- Flooring Installation (LVP/laminate, baseboards, transitions)
- Trim & Carpentry (base, casing, crown, wainscoting, paneling updates)
- Repairs & Punch Lists (rental turns, inspection items)
- Small Remodels (basements, baths, accent walls, built-ins)

**Service Area:** Toledo, Perrysburg, Maumee, Sylvania, Oregon, and nearby communities.

---

## 📞 Contact
- **Phone:** (419) 944-0398
- **Email:** workinghands.toledo@gmail.com
- **Website:** https://workinghandsconstruction.com

> Tip: On the live site, use the “Request a Quote” button or call directly.

---

## 🧰 Project Structure
```
/assets           # logo + vector placeholders
index.html        # single-page site
styles.css        # styling (dark + gold brand)
script.js         # smooth scroll, mobile nav, helpers
```

- Replace the `assets/sample*.svg` files with project photos (maintain file names or update the `<img>` paths in `index.html`).
- Update the `Formspree` endpoint in `index.html` if you prefer a different form handler.

---

## 🚀 Deploying with GitHub Pages
GitHub Actions now publishes the site for you whenever you push to `main`.

1. Push your latest changes to the `main` branch (or merge a pull request).
2. In **Settings → Pages**, set the source to **GitHub Actions** the first time you enable Pages.
3. The `Deploy static site` workflow will build and deploy your files — wait for the green checkmark.
4. Copy the **Live** URL from the workflow run or from *Settings → Pages* and update the badge link above (replace `YOUR_GITHUB_USERNAME`).

**Custom domain (optional):** In *Settings → Pages*, add your domain (for example, `workinghandsconstruction.com`) and follow the DNS instructions.

### 🌐 Configure `workinghandsreno.com`
Follow these steps if you want the site to live at `https://workinghandsreno.com`.

1. Open **Settings → Pages** and enter `workinghandsreno.com` in the **Custom domain** field. Click **Save** and ensure **Enforce HTTPS** remains checked after GitHub verifies the domain.
2. Add (or confirm) the `CNAME` file in the repository root so Pages knows your domain:
   ```bash
   echo "workinghandsreno.com" > CNAME
   ```
   Commit and push the change so the workflow redeploys with the domain file.
3. Update your DNS provider with the GitHub Pages records:
   - **A records for the apex (`workinghandsreno.com`):**
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME for `www.workinghandsreno.com`:** point to `<your-github-username>.github.io`
4. Wait for DNS to propagate (it can take up to 24 hours) and rerun the deployment if prompted. Once the green checkmark appears in the latest **Deploy static site** workflow, visit both `https://workinghandsreno.com` and `https://www.workinghandsreno.com` to confirm HTTPS is active.

---

## 🖼️ Adding Your Photos
Replace the placeholder images in `/assets` with your before/after shots. Keep filenames the same or update the `<img>` paths in `index.html`.

---

## 🔒 License
This is a business website, not open-source software. No public license is provided.

---

## ✅ Credits
Designed and built for **Working Hands Construction** — Toledo, OH. Clean work. Clear communication. From Demo to Detail.
