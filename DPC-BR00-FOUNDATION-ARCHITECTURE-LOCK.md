# Divinityx Publishing Company Website
## DPC Build Room 00 — Foundation and Architecture Lock v1.0

**Status:** APPROVED FOUNDATION  
**Repository:** `aicapitalventures/www.DivinityxPublishing.com`  
**Default branch:** `main`  
**Deployment target:** GitHub Pages with later custom-domain activation for `DivinityxPublishing.com` and `www.DivinityxPublishing.com`  
**Build model:** Static-first HTML, CSS, and JavaScript; no framework, package manager, database, authentication, or paid dependency in the public-site foundation.

---

## 1. Public Mission

DivinityxPublishing.com is the official public publishing platform for Divinityx Publishing Company. It presents the company’s books, authors, reports, white papers, research, author-development programs, institutional opportunities, rights pathways, and long-term intellectual-property catalog.

The website must establish Divinityx Publishing Company as a serious publishing institution rather than a generic author-services page.

---

## 2. Primary Audiences

1. Readers and book buyers
2. Prospective Voice to Legacy™ authors
3. Existing and future Divinityx authors
4. Institutional and bulk purchasers
5. Media, research, and intelligence readers
6. Rights, licensing, distribution, and strategic partners
7. Community organizations, schools, churches, recovery organizations, libraries, and professional programs

---

## 3. Primary Navigation

- Home
- Publications
- Authors
- Voice to Legacy™
- SignalBreak
- Research
- About
- Contact

**Primary header CTA:** `Browse Publications`

**Secondary conversion CTA where appropriate:** `Start Your Author Journey`

---

## 4. Locked Public Page Map

### Core pages

- `/` — Homepage
- `/publications/` — Master publication catalog
- `/books/` — Books catalog
- `/reports/` — Reports and intelligence publications
- `/white-papers/` — White papers and downloadable institutional documents
- `/research/` — Research hub
- `/authors/` — Author directory
- `/voice-to-legacy/` — Voice to Legacy™ program bridge page
- `/signalbreak/` — SignalBreak publishing and intelligence bridge page
- `/institutional/` — Bulk, educational, organizational, and program-use opportunities
- `/rights/` — Rights, permissions, licensing, translation, audio, adaptation, and media inquiries
- `/about/` — Company mission, publishing doctrine, and operating identity
- `/contact/` — Reader, author, institutional, rights, and general inquiry routes

### Legal and support pages

- `/privacy/`
- `/terms/`
- `/accessibility/`
- `/404.html`

### Initial detail pages

- `/books/boys-to-men/`
- `/books/how-to-build-business-credit-and-get-business-funding/`
- `/authors/elijah-l-cooley/`
- `/authors/bernard-shell-jr/`

### Future repeatable detail structures

- `/books/<publication-slug>/`
- `/reports/<report-slug>/`
- `/white-papers/<document-slug>/`
- `/research/<research-slug>/`
- `/authors/<author-slug>/`

---

## 5. Locked Repository Structure

```text
www.DivinityxPublishing.com/
├── .nojekyll
├── 404.html
├── CNAME                         # added only when DNS is ready
├── DPC-BR00-FOUNDATION-ARCHITECTURE-LOCK.md
├── README.md
├── index.html
├── publications/
│   └── index.html
├── books/
│   ├── index.html
│   ├── boys-to-men/
│   │   └── index.html
│   └── how-to-build-business-credit-and-get-business-funding/
│       └── index.html
├── reports/
│   └── index.html
├── white-papers/
│   └── index.html
├── research/
│   └── index.html
├── authors/
│   ├── index.html
│   ├── elijah-l-cooley/
│   │   └── index.html
│   └── bernard-shell-jr/
│       └── index.html
├── voice-to-legacy/
│   └── index.html
├── signalbreak/
│   └── index.html
├── institutional/
│   └── index.html
├── rights/
│   └── index.html
├── about/
│   └── index.html
├── contact/
│   └── index.html
├── privacy/
│   └── index.html
├── terms/
│   └── index.html
├── accessibility/
│   └── index.html
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    ├── img/
    │   ├── brand/
    │   ├── backgrounds/
    │   ├── books/
    │   ├── authors/
    │   ├── divisions/
    │   ├── social/
    │   └── placeholders/
    ├── docs/
    │   ├── reports/
    │   ├── white-papers/
    │   └── press/
    └── icons/
```

---

## 6. Homepage Wireframe Lock

### Section 1 — Global Header

- Professional horizontal Divinityx Publishing Company identity
- Primary navigation
- `Browse Publications` CTA
- Accessible mobile menu
- Sticky behavior after scroll without obscuring content

### Section 2 — Institutional Hero

**Purpose:** Establish Divinityx Publishing Company as a publisher of books, ideas, research, and enduring intellectual property.

**Primary CTA:** `Browse Publications`  
**Secondary CTA:** `Explore Divinityx Publishing`

The hero must not resemble a generic self-publishing sales funnel. It must feel like the front door of a premium independent publishing institution.

### Section 3 — Publishing Scope Strip

Four concise proof categories:

- Books and Authors
- Reports and White Papers
- Research and Public Intelligence
- Author Development and Legacy Preservation

No invented statistics or unsupported sales claims.

### Section 4 — Featured Publications

- Feature confirmed published work
- Display real cover art, format availability, author/editor credit, short description, and retailer/detail links
- First controlled feature: `Boys to Men`
- Secondary confirmed publication: `How to Build Business Credit and Get Business Funding`

### Section 5 — Publication Divisions

Cards routing to:

- Books
- Reports
- White Papers
- Research

### Section 6 — Voice to Legacy™

Explain that Voice to Legacy™ helps people turn lived experience, testimony, family history, wisdom, and professional knowledge into professionally developed books and expandable intellectual property.

**CTA:** `Visit VoiceToLegacy.org`

This page is a bridge and credibility layer. The complete intake workflow remains on VoiceToLegacy.org.

### Section 7 — SignalBreak

Present SignalBreak as a serious public-interest intelligence and publishing initiative focused on high-impact developments, infrastructure, geopolitics, technology, and public consequence.

**CTA:** `Explore SignalBreak Publications`

Do not imply secret intelligence, government affiliation, or guaranteed forecasting accuracy.

### Section 8 — Authors and Editorial Stewardship

- Featured author profiles
- Publisher/editorial development role
- Author approval, rights clarity, and controlled production language

### Section 9 — Institutional, Bulk, and Program Use

Route schools, churches, libraries, recovery programs, nonprofits, companies, and community organizations toward bulk, educational, gift, workshop, or program integration discussions.

**CTA:** `Discuss Institutional Use`

### Section 10 — Rights and Expansion

Explain project-specific opportunities for:

- Audio
- Translation
- Licensing
- Adaptation
- Workbooks
- Courses
- Speaking
- Media
- Series expansion

No right is implied to be available until confirmed in writing.

### Section 11 — Final Conversion Panel

Three controlled routes:

1. `Browse Publications`
2. `Start Your Author Journey`
3. `Contact Divinityx Publishing Company`

### Section 12 — Footer

- Divinityx Publishing Company identity
- Publication links
- Program links
- Institutional and rights links
- Contact route
- Privacy, Terms, Accessibility
- Divinityx Enterprises LLC d/b/a Divinityx Publishing Company ownership statement

---

## 7. Approved Conversion Paths

### Reader and buyer path

`Homepage → Publications → Category → Publication Detail → Retailer / Purchase Link`

### Prospective author path

`Homepage → Voice to Legacy™ → VoiceToLegacy.org → Intake → Review → Agreement → Discovery`

### Institutional buyer path

`Homepage → Institutional → Use Case / Bulk Inquiry → Contact`

### Rights and licensing path

`Publication Detail or Homepage → Rights → Rights Inquiry → Written Review`

### Research reader path

`Homepage → Research / White Papers / Reports → Detail Page → Read or Download → Related Publication / Contact`

### Media or partnership path

`Homepage → About / SignalBreak / Rights → Contact → Internal Review`

---

## 8. Visual System Lock

### Brand character

- Institutional
- Premium
- Authoritative
- Elegant
- Modern publishing house
- Controlled celestial symbolism
- Serious rather than theatrical

### Core palette

- Midnight navy: `#020711`
- Institutional navy: `#06101F`
- Deep panel blue: `#0A1A2E`
- Ivory: `#F6F0E1`
- Warm white: `#FFFDF7`
- Restrained metallic gold: `#D7A93D`
- Pale gold highlight: `#F2D783`
- Muted silver-blue: `#AEB7C6`

### Typography

- Display and section headings: `Cinzel`
- Body, UI, labels, and forms: `Inter`

### Asset rules

- Use approved Divinityx Publishing Company assets as controlling references.
- Do not stretch, crop, duplicate, redraw, or place logos inside unrelated generated imagery.
- Do not bake important text into images when HTML text can be used.
- Use responsive `<picture>` or properly sized WebP/PNG assets.
- Every image requires meaningful alt text or an empty alt value when decorative.
- No generic AI-book imagery, random feathers, malformed typography, or decorative elements outside the approved visual system.

---

## 9. Technical Architecture Lock

- Plain semantic HTML5
- One shared CSS system in `assets/css/styles.css`
- One shared JavaScript controller in `assets/js/main.js`
- No React, Vite, Tailwind, npm, bundler, database, authentication, or server dependency
- GitHub Pages deployment from `main` and repository root
- Custom-domain compatible
- GitHub Pages preview compatible
- Dynamic base-path strategy for both the GitHub project path and final custom domain
- Responsive from 320px upward
- Keyboard-accessible navigation
- Visible focus states
- Reduced-motion support
- Safe external-link behavior
- Accurate active-navigation state
- Reusable publication cards and detail-page structures
- No public contact form that falsely implies secure server submission; use clearly disclosed email, phone, or external approved form behavior until a secure backend is authorized

### Dual-path base rule

Every page must use the same base-path initializer:

```html
<script>
  (function () {
    var base = document.createElement('base');
    base.href = location.hostname.endsWith('github.io')
      ? '/www.DivinityxPublishing.com/'
      : '/';
    document.head.appendChild(base);
  }());
</script>
```

Internal links use clean paths such as `books/`, `authors/`, and `contact/` after the base initializer.

---

## 10. Content and Claims Controls

- No guaranteed sales, royalties, rankings, reach, publication acceptance, media coverage, institutional orders, or commercial outcomes.
- No publication, author, partnership, credential, format, review, or distribution claim may appear unless confirmed.
- No false implication that all Divinityx publications are Voice to Legacy™ projects.
- Voice to Legacy™, SignalBreak, books, reports, white papers, and research must retain their proper program or publication identities.
- Retailer links must open safely in a new tab.
- Prices and formats must be maintained from current confirmed listings rather than permanently hard-coded without review.

---

## 11. Fast Build Operating Model

This project will use the same direct controlled model that completed VoiceToLegacy.org:

1. One complete Build Room authorization prompt
2. One implementation pass on a dedicated branch
3. One independent functional and visual review
4. One correction pass only for actual defects
5. One pre-merge gate
6. Merge to `main`
7. GitHub Pages deployment and custom-domain activation

Do not create audits merely to audit previous audits. A passed gate remains authoritative unless the affected files change.

---

## 12. Build Room 01 Authorization Boundary

Build Room 01 may create the complete static foundation, shared design system, navigation, homepage, core catalog pages, initial detail-page templates, legal pages, accessibility baseline, and GitHub Pages documentation.

Build Room 01 may not:

- Invent new corporate divisions
- Publish unverified claims
- Add paid services or external databases
- Add user accounts
- Add secure file-upload claims
- Add agreements or signature execution
- Replace approved brand assets without founder authorization
- Activate the custom domain before the preview is validated

---

## 13. Build Room 00 Verdict

**Foundation Gate:** OPEN  
**Architecture Gate:** LOCKED  
**Implementation Gate:** AUTHORIZED FOR DPC BUILD ROOM 01  
**Next controlled action:** Create a dedicated implementation branch and execute the static foundation and homepage shell in one pass.