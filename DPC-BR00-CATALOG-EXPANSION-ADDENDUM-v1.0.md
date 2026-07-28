# Divinityx Publishing Company Website
## DPC Build Room 00 — Catalog Expansion Addendum v1.0

**Status:** APPROVED AND LOCKED  
**Effective date:** July 28, 2026  
**Parent record:** `DPC-BR00-FOUNDATION-ARCHITECTURE-LOCK.md`  
**Catalog record:** `DPC-PUBLICATION-REGISTRY-v1.0.md`

---

## 1. Purpose

This addendum expands the initial DivinityxPublishing.com book catalog from the two-title starter assumption to the full confirmed sixteen-title public catalog supplied by the founder.

The parent Build Room 00 architecture remains controlling except where this addendum expressly expands the catalog, book-detail routes, author directory, and homepage publication strategy.

---

## 2. Catalog Scope Lock

Build Room 01 must create a complete catalog system capable of displaying all sixteen registered titles in `DPC-PUBLICATION-REGISTRY-v1.0.md`.

The build must not limit the public catalog to only:

- `Boys to Men`
- `How to Build Business Credit and Get Business Funding`

Those titles remain important, but they are part of a larger publishing catalog.

---

## 3. Required Initial Book Detail Routes

Build Room 01 must create the following routes:

- `/books/boys-to-men/`
- `/books/the-fortune-500-blueprint/`
- `/books/credit-alchemy/`
- `/books/the-american-illusion/`
- `/books/cybersecurity-hacking-and-digital-defense/`
- `/books/the-wealth-fortress/`
- `/books/escape-the-rat-race/`
- `/books/powerless-but-not-broken/`
- `/books/the-machine-and-the-mirror/`
- `/books/project-ascend-the-dream-code/`
- `/books/the-ultimate-guide-to-ai-mastery/`
- `/books/the-war-of-the-gods/`
- `/books/real-estate-secrets-of-the-wealthy/`
- `/books/harmonic-unity-the-way-of-life/`
- `/books/mastering-money/`
- `/books/how-to-build-business-credit-and-get-business-funding/`

Each route may begin with a controlled catalog-detail template, but every page must contain the correct title, author, category, Amazon link, and cover placeholder path from the registry.

---

## 4. Required Author Routes

The initial author directory is expanded to:

- `/authors/elijah-l-cooley/`
- `/authors/bernard-shell-jr/`
- `/authors/eden-r-cooley/`

No title may be assigned to the wrong author.

---

## 5. Homepage Publication Strategy

The homepage must not attempt to display all sixteen books at once.

The approved structure is:

1. **Primary featured publication:** `Boys to Men`
2. **Featured founder publication:** `The Wealth Fortress` or another founder-selected title
3. **Catalog preview row:** a controlled selection of four to six covers
4. **Browse all publications CTA:** routes to `/publications/` or `/books/`

The full sixteen-title collection belongs in the catalog, not as an overloaded homepage wall.

---

## 6. Catalog UX Requirement

The books catalog must support clear grouping or filtering by major vertical:

- Business, Credit, and Funding
- Wealth, Real Estate, and Financial Independence
- Artificial Intelligence and Technology
- Cybersecurity and Digital Defense
- Recovery, Responsibility, and Personal Stability
- Spirituality, Theology, and Self-Mastery
- Youth, Family, and Mentorship
- Society, Power, and Public Systems

A basic static filter may be implemented with vanilla JavaScript. The catalog must remain usable when JavaScript is unavailable.

---

## 7. Cover Asset Control

The uploaded Amazon screenshots establish publication existence and visible cover identity, but they are not approved public-facing cover files for the website.

Until clean covers are uploaded:

- use branded aspect-ratio placeholders
- display the exact title and author in HTML
- do not crop covers out of full Amazon screenshots for final production
- document each missing cover path in the Build Room 01 report

Once clean covers are uploaded, they must replace placeholders without changing layout dimensions.

---

## 8. Implementation Effect

This addendum modifies Build Room 01 as follows:

- Sixteen book records instead of two
- Sixteen book detail routes
- Three author routes instead of two
- Catalog filtering/grouping required
- Cover placeholders required for missing clean cover files
- All supplied Amazon links must be wired into the correct records

All other Build Room 00 design, accessibility, routing, claims, and technical locks remain unchanged.

---

## 9. Gate Status

- **Catalog Expansion Gate:** APPROVED
- **Asset Completion Gate:** PARTIALLY OPEN — clean covers pending
- **Implementation Gate:** OPEN
- **Public Launch Gate:** CLOSED until founder visual approval and functional verification
