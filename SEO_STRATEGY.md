# Bani Ibrahim Farms — SEO Strategy & Enhancement Plan
**Domain:** baniibrahimfarms.com
**Location:** Gunung Pulai, Johor, Malaysia
**Last updated:** 2026-09-12

---

## Current Status
- [x] Homepage live (index.html) — single-page, bilingual EN/MS
- [x] Schema: LocalBusiness + Farm + FAQPage
- [x] Canonical tag set
- [x] Open Graph tags
- [ ] Google Search Console — not yet verified
- [ ] Bing Webmaster Tools — not yet added
- [ ] Google Business Profile — not yet created
- [ ] Sitemap — not yet created
- [ ] Individual service subpages — not yet built

---

## Phase 1 — Foundation (Priority: HIGH, Do First)

### 1.1 Google Search Console
- [ ] Verify baniibrahimfarms.com in GSC (DNS TXT record via Cloudflare)
- [ ] Submit sitemap once created
- [ ] Request indexing for homepage

### 1.2 Bing Webmaster Tools
- [ ] Add baniibrahimfarms.com to Bing Webmaster
- [ ] Submit sitemap
- [ ] Submit homepage URL via SubmitUrlBatch API

### 1.3 Google Business Profile
- [ ] Create listing: "Bani Ibrahim Farms"
- [ ] Category: "Farm" + "Animal Feed Store" + "Agricultural Service"
- [ ] Add: address (Gunung Pulai, Johor), phone (+60132481071), hours (daily 8am–6pm)
- [ ] Add services: Aqiqah, Qurban, Farm Visits, Live Goat Sales, Goat Milk
- [ ] Add photos once available
- [ ] Write business description (EN + MS)
- **Why:** GBP drives local pack rankings and Maps visibility — critical for "aqiqah johor" searches

### 1.4 Sitemap
- [ ] Create `sitemap.xml` at root
- [ ] Include homepage + all future subpages
- [ ] Submit to GSC + Bing
- [ ] Add `<link rel="sitemap">` to index.html head

### 1.5 robots.txt
- [ ] Create `robots.txt` at root
- [ ] Allow all crawlers, point to sitemap

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
| `lawatan-ladang-johor.html` | farm visit johor, goat farm visit johor | lawatan ladang johor, ladang kambing johor | 🟢 Low |
| `about.html` | bani ibrahim farms, halal farm gunung pulai | ladang halal johor, ternakan halal johor | 🟢 Low |

### 2.2 Homepage Meta Improvements
- [ ] Title tag: add year — "Bani Ibrahim Farms — Halal Livestock Farm Johor | Aqiqah & Qurban 2025"
- [ ] Meta description: include "Gunung Pulai" + primary service keywords
- [ ] Add `hreflang` tags for EN/MS versions (once separate URL structure decided)
- [ ] Add `dateModified` in WebPage schema

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
| "Apa Itu Aqiqah dan Bilakah Perlu Dilakukan?" | apa itu aqiqah | MS |
| "Aqiqah vs Qurban: What's the Difference?" | aqiqah vs qurban | EN |
| "How to Choose a Halal Goat for Qurban in Malaysia" | pilih kambing qurban | EN/MS |
| "Benefits of Goat Milk vs Cow Milk" | manfaat susu kambing | EN/MS |
| "Farm-to-Table: How We Raise Our Goats in Gunung Pulai" | ladang kambing johor | EN |
| "Qurban 2027: Book Early to Secure Your Slot" | qurban 2027 malaysia | EN/MS |

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

### 5.2 Structured Data Additions
- [ ] Add `WebSite` schema with SearchAction (sitelinks search box)
- [ ] Add `BreadcrumbList` schema on subpages
- [ ] Add `Product` schema for goat milk (with price range)
- [ ] Add `Event` schema for Qurban 2027 season (once date confirmed)
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
