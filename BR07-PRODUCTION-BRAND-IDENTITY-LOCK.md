# BR07 — Production Brand Identity Lock v1.2

**Repository:** `aicapitalventures/www.DivinityxPublishing.com`  
**Production source:** `build/01-static-publication-catalog`  
**Controlled branch:** `build/07-production-brand-identity-lock`  
**Pull request:** `#2`

## Corrected founder-approved source assignment

- `b498fcbd-e511-4bae-9a3e-f0781fa71a8d.png` — native 607×155 — controls the global desktop/mobile header wordmark.
- `cover.png` — native 2033×774 — controls the homepage institutional lockup, footer corporate identity, Open Graph image, Twitter preview image, and Organization-schema logo.
- `celestial_emblem_of_divinityx_publishing.png` — native 1024×1024 — controls favicon, Apple touch, Android/app, and platform-icon derivatives.

No alternate or generated Divinityx identity is authorized by this record.

## Canonical website assets

- `assets/brand/divinityx-publishing-wordmark-gold.webp`
- `assets/brand/divinityx-publishing-crest-gold.webp`
- `assets/brand/favicon.ico`
- `assets/brand/favicon-16x16.png`
- `assets/brand/favicon-32x32.png`
- `assets/brand/apple-touch-icon.png`
- `assets/brand/android-chrome-192x192.png`
- `assets/brand/android-chrome-512x512.png`
- `assets/brand/site.webmanifest`

## Exact proportion lock

- Header wordmark aspect ratio: `607 / 155`.
- Homepage/footer corporate lockup aspect ratio: `2033 / 774`.
- Platform icon source aspect ratio: `1 / 1`.

`assets/css/brand-identity.css` must use these actual artwork proportions rather than previously assumed ratios.

## Homepage display correction

The homepage lockup receives a larger usable display area within the existing right-side hero composition. The approved hero copy, grid relationship, navigation, typography, color system, and route structure remain preserved.

## Runtime and metadata integration

- `assets/js/app-core.js` remains the preserved production application runtime.
- `assets/js/app.js` loads the isolated v1.2 brand layer and declares favicon, Apple touch, manifest, Open Graph, Twitter, canonical URL, and Organization schema identity.
- `assets/brand/site.webmanifest` declares both the 192×192 and 512×512 crest-derived application icons and preserves midnight navy `#020711` as the theme and background color.

## Preservation controls

- No publication record changed.
- No author record changed.
- No catalog search, filter, or count changed.
- No navigation destination changed.
- No book, author, program, institutional, legal, or fallback route changed.
- No approved page copy or typography changed.
- No custom domain, CNAME, DNS, or GitHub Pages production-source setting changed.
- The production branch remains untouched until explicit Final Merge Gate approval.
- No merge is authorized by this document.
