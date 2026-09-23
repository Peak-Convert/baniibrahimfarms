# Bani Ibrahim Farms — SEO Strategy & Enhancement Plan
**Domain:** baniibrahimfarms.com
**Location:** Gunung Pulai, Johor, Malaysia
**Last updated:** 2026-09-19

---

## Current Status
- [x] Homepage live (index.html) — single-page, bilingual EN/MS
- [x] Schema: LocalBusiness + Farm + FAQPage + 3x HowTo + Speakable
- [x] Canonical tag set
- [x] Open Graph tags
- [x] Google Search Console — verified 2026-09-12
- [x] Bing Webmaster Tools — verified 2026-09-12
- [x] Sitemap — 7 URLs, updated 2026-09-13
- [x] robots.txt — created 2026-09-12
- [x] `aqiqah-johor.html` — built + indexed ✅ 2026-09-12
- [x] `qurban-johor.html` — built + indexed ✅ 2026-09-12
- [x] `beli-kambing-johor.html` — built + Bing submitted ✅ 2026-09-12
- [x] `susu-kambing-johor.html` — built + Bing submitted ✅ 2026-09-12
- [x] `lawatan-ladang-johor.html` — built + live + Bing submitted ✅ 2026-09-12
- [x] `sayur-segar-johor.html` — built + live + Bing submitted ✅ 2026-09-13
- [x] SVG logo (3 variants) + 720×720 JPG for GBP ✅ 2026-09-13
- [x] Google Business Profile — created + verified ✅ 2026-09-12, GBP URL: `https://share.google/nEvMfdhIC09yPJPk1`
- [x] `sameAs` GBP link on all 7 pages ✅ 2026-09-12 (commit b7417cb)
- [x] Sitemap submitted to GSC UI ✅ 2026-09-12 — `https://baniibrahimfarms.com/sitemap.xml`
- [ ] Delete old www sitemap from GSC — `https://www.baniibrahimfarms.com/sitemap.xml` (if still listed)
- [x] GSC Request Indexing submitted 2026-09-14 for: /beli-kambing-johor, /susu-kambing-johor, /lawatan-ladang-johor, /sayur-segar-johor — monitor by 2026-09-21
- [x] Homepage internal links added to all 6 service cards ✅ 2026-09-14 (commit 09ee865)
- [x] `blog/apa-itu-aqiqah.html` — built + deployed ✅ 2026-09-14 (commit 87a3bd5), Bing submitted
- [x] `blog/qurban-2027-johor.html` — built + deployed ✅ 2026-09-14 (commit 87a3bd5), Bing submitted
- [x] `blog/manfaat-susu-kambing.html` — built + deployed ✅ 2026-09-14 (commit 87a3bd5), Bing submitted
- [x] Sitemap updated to 10 URLs ✅ 2026-09-14
- [x] Mobile optimisation — all 10 pages audited + fixed ✅ 2026-09-14 (commit 068cb34)
- [x] GSC: blog/apa-itu-aqiqah — **already indexed** ✅ (crawled 2026-09-14)
- [x] GSC: blog/qurban-2027-johor — **already indexed** ✅ (crawled 2026-09-14)
- [x] GSC: blog/manfaat-susu-kambing — **already indexed** ✅ (crawled 2026-09-14)
- [ ] GSC Request Indexing for blog/index.html — deploy first, then submit
- [x] `blog/index.html` — blog index page created + sitemap updated ✅ 2026-09-19
- [x] WebSite schema with SearchAction added to homepage ✅ 2026-09-19
- [x] Event schema for Qurban 2027 added to qurban-johor.html ✅ 2026-09-19
- [x] dateModified updated to 2026-09-19 on all 7 service pages ✅ 2026-09-19
- [x] Homepage title updated to include year (Aqiqah & Qurban 2027) ✅ 2026-09-19
- [ ] Add photos to GBP (farm, goats, packaging)
- [ ] Collect first 3–5 customer reviews on GBP

---

## Phase 1 — Foundation (Priority: HIGH, Do First)

### 1.1 Google Search Console
- [x] Verify baniibrahimfarms.com in GSC ✅ 2026-09-12
- [x] Submit sitemap ✅ 2026-09-12 — `https://baniibrahimfarms.com/sitemap.xml`
- [x] Request indexing: homepage ✅ 2026-09-12
- [x] Request indexing: aqiqah-johor + qurban-johor ✅ indexed 2026-09-12

### 1.2 Bing Webmaster Tools
- [x] Add baniibrahimfarms.com to Bing Webmaster ✅ 2026-09-12
- [x] All 7 pages submitted via SubmitUrlBatch API ✅ (last: sayur-segar-johor 2026-09-13)
- [x] Sitemap URL submitted via API ✅

### 1.3 Google Business Profile
- [x] Create listing: "Bani Ibrahim Farms" ✅ 2026-09-12
- [x] Category: Farm + Agricultural Service ✅
- [x] Address, phone, hours, services, description added ✅
- [x] `sameAs` added to all 7 page schemas ✅ (confirmed URL: commit b7417cb)
- [x] **Google verification completed** ✅ 2026-09-12 — listing live on Maps
- [x] GBP logo uploaded (logo-square.jpg, 720×720) ✅ 2026-09-13
- [ ] Add more photos (farm exterior, goats, slaughter area, packaging)
- [ ] Enable WhatsApp contact in GBP
- [ ] Collect first 3–5 customer reviews on GBP
- **GBP confirmed URL:** `https://share.google/nEvMfdhIC09yPJPk1`
- **Why:** GBP drives local pack rankings and Maps visibility — critical for "aqiqah johor" searches

### 1.4 Sitemap
- [x] `sitemap.xml` at root ✅ — 7 URLs as of 2026-09-13
- [x] Submitted to GSC ✅ 2026-09-12
- [x] Submitted to Bing ✅ 2026-09-12
- [x] `<link rel="sitemap">` in all page heads ✅

### 1.5 robots.txt
- [x] `robots.txt` live ✅ — allows all crawlers, points to sitemap

---

## Phase 2 — On-Page SEO (Priority: HIGH)

### 2.1 Service Subpages
Each service needs its own page for keyword targeting. Build these as individual HTML files:

| Page | Target Keyword (EN) | Target Keyword (MS) | Priority |
|------|--------------------|--------------------|----------|
| `aqiqah-johor.html` | aqiqah johor, aqiqah service johor | aqiqah johor, khidmat aqiqah johor | 🔴 High |
| `qurban-johor.html` | qurban johor, qurban 2027 johor | qurban johor, qurban kambing johor | 🔴 High |
| `beli-kambing-johor.html` | buy live goat johor, live goat for sale johor | beli kambing johor, kambing hidup johor | 🟡 Medium |
| `susu-kambing-johor.html` | goat milk johor, fresh goat milk johor | susu kambing johor, susu kambing segar | 🟡 Medium |
| `lawatan-ladang-johor.html` | farm visit johor, goat farm visit johor | lawatan ladang johor, ladang kambing johor | ✅ Done |
| `sayur-segar-johor.html` | fresh vegetables johor, organic vegetables johor | sayur segar johor, sayur organik johor, sayur ladang johor | ✅ Done 2026-09-13 |
| `about.html` | bani ibrahim farms, halal farm gunung pulai | ladang halal johor, ternakan halal johor | 🟢 Low |

### 2.2 Homepage Meta Improvements
- [x] Title tag updated with year — "Bani Ibrahim Farms — Halal Livestock Farm Johor | Aqiqah & Qurban 2027" ✅ 2026-09-19
- [x] Meta description includes "Gunung Pulai" + primary service keywords ✅
- [x] `dateModified` in WebPage schema on all pages, updated to 2026-09-19 ✅
- [ ] Add `hreflang` tags for EN/MS versions (once separate URL structure decided)

### 2.3 Heading Structure
- [ ] Add explicit `<h2>` for each section (currently some are styled divs)
- [ ] Ensure keyword appears in at least one H2 (e.g. "Aqiqah & Qurban Services in Johor")
- [ ] Add alt text placeholder comments for when photos arrive

### 2.4 Internal Linking
- Once subpages exist, link each service card → its dedicated page
- Add breadcrumb schema on subpages
- Link subpages back to homepage

---

## Phase 3 — Local SEO (Priority: HIGH)

### 3.1 Malaysian Business Directories
Submit to:
- [ ] Malaysia.com business directory
- [ ] Hotfrog Malaysia (hotfrog.my)
- [ ] Yellcom Malaysia (yell.com.my)
- [ ] SME Corp Malaysia directory
- [ ] Halal Malaysia directory (if applicable)
- [ ] Johor state business listings

### 3.2 Islamic/Halal Directories
- [ ] HalalSquare.com listing
- [ ] IslamicFinder Malaysia
- [ ] Local mosque notice boards / digital platforms

### 3.3 Citation Consistency (NAP)
Ensure Name, Address, Phone is identical everywhere:
- **Name:** Bani Ibrahim Farms
- **Address:** Gunung Pulai, Johor, Malaysia
- **Phone:** +60 13-248 1071

---

## Phase 4 — Content Strategy (Priority: MEDIUM)

### 4.1 Blog / Articles
Target informational keywords that drive discovery:

| Article Title | Target Keyword | Language |
|--------------|---------------|----------|
| "What is Aqiqah and When Should It Be Done?" | what is aqiqah malaysia | EN |
| ~~"Apa Itu Aqiqah dan Bilakah Perlu Dilakukan?"~~ ✅ `/blog/apa-itu-aqiqah` | apa itu aqiqah | MS |
| "Aqiqah vs Qurban: What's the Difference?" | aqiqah vs qurban | EN |
| "How to Choose a Halal Goat for Qurban in Malaysia" | pilih kambing qurban | EN/MS |
| ~~"Benefits of Goat Milk vs Cow Milk"~~ ✅ `/blog/manfaat-susu-kambing` | manfaat susu kambing | EN/MS |
| "Farm-to-Table: How We Raise Our Goats in Gunung Pulai" | ladang kambing johor | EN |
| ~~"Qurban 2027: Book Early to Secure Your Slot"~~ ✅ `/blog/qurban-2027-johor` | qurban 2027 malaysia | EN/MS |

### 4.2 Dedicated Malay Pages
Consider separate `/ms/` subpages or a language subdirectory for Malay SEO:
- Malay queries dominate Malaysian search for aqiqah/qurban
- "aqiqah johor" searches are likely majority BM intent
- Use `hreflang="ms"` to signal to Google

---

## Phase 5 — Technical SEO (Priority: MEDIUM)

### 5.1 Performance
- [ ] Add lazy loading to all images (`loading="lazy"`)
- [ ] Compress images when added (target <100KB per image, WebP format)
- [ ] Add `<link rel="preload">` for Google Fonts
- [ ] Test Core Web Vitals via PageSpeed Insights once live

### 5.4 Mobile Optimisation
- [x] Viewport meta tag on all pages ✅
- [x] Responsive breakpoints (900px, 600px, 480px) ✅ 2026-09-14 (commit 068cb34)
- [x] Touch targets ≥44px: navbar CTA, mobile nav links, lang toggle ✅ 2026-09-14
- [x] Tables: overflow-x:auto wrappers + word-break:break-word ✅
- [x] Font sizes ≥14px on all body text ✅ 2026-09-14
- [x] Section padding reduced on mobile (40px at ≤600px) ✅ 2026-09-14
- [x] info-cards 1-col at ≤480px ✅ 2026-09-14

### 5.2 Structured Data Additions
- [x] Add `WebSite` schema with SearchAction ✅ 2026-09-19
- [x] Add `BreadcrumbList` schema on all subpages ✅ 2026-09-12
- [x] Add `Product` schema for goat milk ✅ 2026-09-12
- [x] Add `Event` schema for Qurban 2027 ✅ 2026-09-19
- [ ] Add `Review`/`AggregateRating` once customer reviews collected

### 5.3 Security & Headers
- [x] `_headers` file created with security headers (X-Frame-Options, CSP)
- [ ] Verify HTTPS active (Cloudflare handles this automatically)

---

## Keyword Targets Summary

### English
| Keyword | Monthly Volume (est.) | Competition | Priority |
|---------|----------------------|-------------|----------|
| aqiqah johor | Medium | Low-Medium | 🔴 |
| qurban johor | Medium | Low | 🔴 |
| halal farm johor | Low | Low | 🔴 |
| buy goat johor | Low | Low | 🟡 |
| goat milk johor | Low | Low | 🟡 |
| farm visit johor | Low | Low | 🟢 |
| aqiqah malaysia | High | High | 🟢 (long-term) |

### Malay (Bahasa Malaysia)
| Keyword | Monthly Volume (est.) | Competition | Priority |
|---------|----------------------|-------------|----------|
| aqiqah johor | Medium-High | Low-Medium | 🔴 |
| qurban johor | Medium | Low | 🔴 |
| beli kambing johor | Low-Medium | Low | 🟡 |
| susu kambing johor | Low | Low | 🟡 |
| ladang kambing johor | Low | Low | 🟡 |
| lawatan ladang johor | Low | Low | 🟢 |
| ternakan halal johor | Low | Low | 🟢 |

---

## Monitoring Checklist
Once GSC is set up, check monthly:
- [ ] Impressions + clicks for "aqiqah johor"
- [ ] Impressions + clicks for "qurban johor"
- [ ] Index coverage — all pages indexed?
- [ ] Core Web Vitals scores
- [ ] GBP profile views + WhatsApp clicks

---

## Priority Order (What to Do First)
1. GSC verification + sitemap
2. Google Business Profile
3. Bing Webmaster
4. Build `aqiqah-johor.html` subpage
5. Build `qurban-johor.html` subpage
6. Submit to 3–5 local directories
7. Add HowTo schemas (covered in GEO_STRATEGY.md)
