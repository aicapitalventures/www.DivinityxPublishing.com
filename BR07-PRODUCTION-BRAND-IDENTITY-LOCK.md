# BR07 — Production Brand Identity Lock v1.1

**Repository:** `aicapitalventures/www.DivinityxPublishing.com`  
**Production source:** `build/01-static-publication-catalog`  
**Controlled branch:** `build/07-production-brand-identity-lock`  
**Pull request:** `#2`

## Corrected source assignment

The founder-supplied packages supersede the earlier staged binary assets:

- `favicon_io (1).zip` is the controlling source for the horizontal Divinityx Publishing Company wordmark used in the global header and other wide identity placements.
- `favicon_io.zip` is the controlling source for the Divinityx Publishing Company crest, footer identity, homepage institutional emblem, favicon family, Apple touch identity, Android/app identity, Open Graph image, Twitter preview image, and Organization-schema logo.

## Canonical web assets

- `assets/brand/divinityx-publishing-wordmark-gold.webp`
- `assets/brand/divinityx-publishing-crest-gold.webp`

These are web-optimized derivatives of the founder-approved sources. No alternate mark is authorized by this record.

## Technical compatibility derivatives

The following platform assets are derived only from the approved crest and are not alternate logos:

- `assets/brand/favicon.ico`
- `assets/brand/favicon-16x16.png`
- `assets/brand/favicon-32x32.png`
- `assets/brand/apple-touch-icon.png`
- `assets/brand/android-chrome-192x192.png`
- `assets/brand/site.webmanifest`

The validated 192×192 PNG is the controlling Android/installable-app icon in this revision. A 512×512 asset is not declared until a corrected source binary passes repository-integrity verification; the two superseded WebP app-icon files are removed.

## Confirmed identity replacement method

- The original production runtime remains preserved byte-for-byte as `assets/js/app-core.js`.
- `assets/js/app.js` operates only as the v1.1 identity and metadata bootstrap before invoking the preserved application runtime.
- `assets/css/brand-identity.css` replaces the generated text-based `DX` identity with the approved horizontal wordmark in the header and the approved crest in the footer and homepage institutional-emblem area.
- The bootstrap declares `favicon.ico`, 16×16 and 32×32 PNG favicons, Apple touch identity, the corrected manifest, canonical URL, Open Graph identity, Twitter identity, and Organization JSON-LD.
- The official manifest uses the company name, the short name `Divinityx Publishing`, and midnight-navy `#020711` for both theme and background colors.

## Asset-role lock

| Asset | Authorized role |
|---|---|
| Horizontal wordmark | Global desktop/mobile header and wide publisher identity |
| Crest | Footer, homepage institutional emblem, Open Graph, Twitter preview, Organization schema |
| Crest-derived favicon family | Browser-tab identity |
| Crest-derived Apple touch icon | Apple device shortcut identity |
| Crest-derived 192×192 app icon | Installable/Android application identity |

## Preservation controls

- No catalog record changed.
- No author record changed.
- No publication route changed.
- No navigation destination changed.
- No page copy, typography, or established layout system changed.
- No custom domain, CNAME, DNS, or GitHub Pages production-source setting changed.
- The production branch remains untouched until PR #2 receives explicit visual and functional approval.
- No merge is authorized by this document.
