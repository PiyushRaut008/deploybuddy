# ProjectVault — Complete Guide

> Save this file for future reference. It covers adding projects, changing images, setting up the contact form, and deploying to GitHub Pages.

---

## Files Overview

| File | Purpose |
|---|---|
| `index.html` | Main page — hero, 6 project cards, contact form, footer |
| `css/style.css` | Full design system — dark theme, responsive grid, animations |
| `js/script.js` | Navbar, scroll reveal, autofill, form validation, toasts |
| `images/` | Folder for your project images |

---

## Key Features

- **6 sample project cards** in a responsive 3-column grid
- **Smart contact flow** — clicking "Contact for This" auto-fills the Project ID and scrolls to the form
- **FormSubmit.co integration** — zero-backend email delivery
- **Scroll reveal animations** — cards fade in as you scroll
- **Frosted-glass navbar** — becomes translucent on scroll
- **Mobile responsive** — hamburger menu, stacked cards on small screens
- **Lucide Icons** — lightweight, beautiful icon set via CDN

---

## How to Add a New Project (Step-by-Step)

### Step 1: Open `index.html`

### Step 2: Find the projects grid (search for `ADD MORE PROJECT CARDS`)

### Step 3: Copy this template and paste it **above** that comment:

```html
<!-- ── PROJECT CARD (NEW) ── -->
<div class="project-card">
  <div class="project-card__image-wrapper">
    <img
      src="images/your-image.jpg"
      alt="Your Project Name"
      class="project-card__image"
      loading="lazy"
    />
    <span class="project-card__id-badge">PRJ-007</span>
  </div>
  <div class="project-card__body">
    <h3 class="project-card__title">Your Project Title</h3>
    <p class="project-card__desc">
      Describe your project here. Keep it 2-3 sentences.
    </p>
    <div class="project-card__footer">
      <span class="project-card__price">₹X,XXX</span>
      <button class="project-card__btn" data-project-id="PRJ-007">
        Contact for This
      </button>
    </div>
  </div>
</div>
```

### Step 4: Change these 6 things:

1. **Image** → `src="images/your-new-image.jpg"`
2. **ID badge** → Update the text inside `project-card__id-badge`
3. **Title** → Update `project-card__title`
4. **Description** → Update `project-card__desc`
5. **Price** → Update `project-card__price`
6. **Button `data-project-id`** → Must match the ID badge (e.g. `PRJ-007`)

> ⚠️ **IMPORTANT:** The `data-project-id` on the button **must match** the ID badge text — this is what gets auto-filled into the contact form when the user clicks the button.

---

## How to Change Images

**Option A — Local images:**
1. Drop your image into the `images/` folder
2. Update the `src` attribute: `src="images/my-project.jpg"`

**Option B — External URLs (currently used):**
- The demo uses Unsplash URLs like `https://images.unsplash.com/photo-xxx?w=600&h=400&fit=crop`
- Replace with any URL or your own hosted images

> 💡 **TIP:** For best results, use images with a **3:2 aspect ratio** (e.g. 600×400px). The CSS handles cropping via `object-fit: cover`.

---

## How to Set Up the Contact Form

1. Open `index.html`
2. Find the `<form>` tag in the contact section
3. Replace `YOUR_EMAIL@gmail.com` in the action URL:
   ```html
   action="https://formsubmit.co/your-real-email@gmail.com"
   ```
4. Submit a test message — FormSubmit will send you a confirmation email
5. Click the confirmation link — **done!** All future submissions go to your inbox

---

## How to Deploy on GitHub Pages

### Step 1: Create a GitHub repository
- Go to https://github.com/new
- Name it (e.g. `project-showcase`)
- Make it **public**

### Step 2: Push your code
```bash
git init
git add .
git commit -m "Initial commit - ProjectVault website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/project-showcase.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click **Save**

### Step 4: Your site is live!
- URL: `https://YOUR_USERNAME.github.io/project-showcase/`
- Takes 1-2 minutes to go live after first deploy

> 📝 **NOTE:** If using local images in the `images/` folder, make sure they are committed to the repo too.

---

## Customization Quick Reference

| What to change | Where to edit |
|---|---|
| Site name | `nav-logo` in HTML + `<title>` tag |
| Colors | CSS variables in `:root` at top of `css/style.css` |
| Email for form | `action` URL in the `<form>` tag in `index.html` |
| Social links | Footer `<a>` href values in `index.html` |
| Contact info (email, location) | `.contact-detail` spans in `index.html` |
| Font family | `@import` URL at top of `css/style.css` |
| Card hover glow color | `--border-glow` and `--accent` in CSS `:root` |
| Number of grid columns | `grid-template-columns` in `.projects-grid` in CSS |
