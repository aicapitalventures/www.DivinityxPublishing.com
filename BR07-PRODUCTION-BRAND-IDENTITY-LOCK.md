# BR07 — Production Brand Identity Lock

**Repository:** `aicapitalventures/www.DivinityxPublishing.com`  
**Production source:** `build/01-static-publication-catalog`  
**Controlled branch:** `build/07-production-brand-identity-lock`

## Canonical assets

- `assets/brand/divinityx-publishing-wordmark-gold.webp`
- `assets/brand/divinityx-publishing-crest-gold.webp`

Both web assets are optimized derivatives of founder-approved Divinityx Publishing Company image sources. No alternate mark is authorized by this record.

## Confirmed current identity sources

- `assets/js/app.js` generates the text-based `DX` header identity.
- `assets/js/app.js` generates the text-based `DX` footer identity.
- `assets/js/app.js` generates the homepage `DX` monogram.
- Static HTML shells load the shared styles and application runtime.
- The prior metadata shell did not declare Divinityx favicon, Apple touch identity, manifest, Open Graph image, Twitter image, canonical URL, or Organization schema.

## Controlled replacement method

The production runtime and catalog logic remain unchanged. `assets/css/brand-identity.css` is loaded after the existing stylesheet and replaces the generated identity visually with the approved assets. This avoids altering book records, author records, navigation, route generation, filters, buttons, or publication logic.

The approved crest is designated for favicon, Apple touch identity, manifest identity, Open Graph, Twitter preview, Organization schema, footer identity, and homepage institutional emblem. The approved wordmark is designated for the global header.

## Preservation controls

- No catalog record changed.
- No author record changed.
- No publication route changed.
- No domain or CNAME record changed.
- No production merge is authorized by this document.
- Review and live deployment verification are mandatory before merge.
