# Condax modernization — implementation roadmap

**Date:** 2026-11-21  
**Inputs:** Executive directive; `architecture-audit.md`; `page-inventory.md`; `visual-asset-audit.md`  
**Principle:** Phased delivery. Preserve working forms, admin, Blob CVs, and verified facts. No uncontrolled rewrite.

---

## North star

A premium international AI / product-engineering consultancy site that:

- Wins enterprise trust (architecture, delivery, handover)
- Attracts engineers with accurate regional careers
- Shows **real UI components and accurate diagrams**, not stock “AI art” as product proof

---

## Owner confirmations (blockers / decisions)

Do not invent these; confirm before shipping related UI:

| ID | Topic | Notes |
|----|-------|-------|
| C1 | Leadership on About | People section was removed by request; directive asks to restore verified leadership. Confirm remount + bios. |
| C2 | Apply fields | Directive: drop DOB + street from initial apply. Prior request: keep DOB + address. **Needs explicit decision.** |
| C3 | Nationality vs work auth | Directive: do not use nationality as work-auth proxy. Confirm field rename/removal. |
| C4 | Eligible countries | US, UK, EU, PH, IN, LATAM — confirm legal engagement per market before filters/JobPosting. |
| C5 | Compensation | No fabricated ranges. Confirm which roles publish pay. |
| C6 | Approved vacancies | Publish only approved roles; regional duplicates only when terms differ. |
| C7 | Associate naming | Map current “Junior *” ↔ “Associate *” titles. |
| C8 | Client case studies | Keep demos labeled; only add verified clients. |
| C9 | Certifications / Security page | Publish only verified practices. |
| C10 | Brand tokens | Keep cobalt/warm vs shift to deeper navy — confirm palette evolution. |

---

## Phase 0 — Audit & planning ✅ (this pack)

**Deliverables**

- [x] `docs/modernization/architecture-audit.md`
- [x] `docs/modernization/page-inventory.md`
- [x] `docs/modernization/visual-asset-audit.md`
- [x] `docs/modernization/implementation-roadmap.md`

**Exit:** Shared understanding of stack, routes, assets, risks.

---

## Phase 1 — Design foundation ✅

**Goals:** Coherent system without breaking pages.

| Work | Detail |
|------|--------|
| Tokens | Extend `@theme`: navy/white/warm/cobalt restraint; spacing, radii, shadows, max widths |
| Typography scale | Display → metadata; reduce oversized aggressive H1s |
| Primitives | Button, Container, Section, forms, focus states |
| Nav / Footer | Premium desktop + accessible mobile; align to target IA |
| Motion | Keep subtle; honor `prefers-reduced-motion` |

**Preserve:** Existing class migration path (`px-*` aliases until swept).

**Exit:** Story-like brand page or `/brand` updated; homepage still boots.

---

## Phase 2 — Homepage & company ✅

| Page | Actions |
|------|---------|
| `/` | Keep H1 “From strategy to automated operations.”; improve lede; rebuild hero with **React product UI** (not Unsplash dashboard); Capabilities; Problems; Engagement (all 3 services); Method; Featured work (include Atlas, label demos); Why Condax; Closing CTA |
| `/about-us` | Mission, model, philosophy, global collaboration; leadership **if C1**; remove empty promises |
| `/what-we-do` | SERVICES vs SOLUTIONS clarity; elevate in nav |

**Exit:** Creative-director pass on home + about at 1440 / 390.

---

## Phase 3 — Services & solutions ✅

| Work | Actions |
|------|---------|
| `ServicePage` | Evolve spine so pages don’t feel identical; unique sections/visuals |
| AI for teams | Strategy, governance, enablement, measurement |
| Custom products | Discovery → maintain |
| Advisory | Adopt / build / defer |
| Copilots | Accurate RAG diagram (ingest → cite → eval) |
| Internal tools | RBAC, audit, workflows |
| Automations | Events, queues, retries, DLQ, human gates |
| Custom apps | Multi-tenant SaaS architecture visual |

**Exit:** Each route has distinct composition + technical visual + one clear CTA.

---

## Phase 4 — Visual asset overhaul ✅

Follow `visual-asset-audit.md`:

1. **REPLACE** homepage `HeroProduct` stock photo with Condax UI composition  
2. **REMOVE** unused Unsplash / plates / orphan JPGs after dependency check  
3. **IMPROVE** React mocks (Kite, Harbor, Meridian, Atlas, Architecture)  
4. **REBUILD** missing diagrams (RAG, agents, event pipelines) as SVG/components  
5. Sync `lib/images.ts` + `MANIFEST` → produce `docs/modernization/asset-manifest.md`  
6. WebP/AVIF, dimensions, alt, lazy-load below fold  

**Exit:** No generic robot-brain as product proof; asset manifest current.

---

## Phase 5 — Work & Insights ✅

| Work | Actions |
|------|---------|
| `/work` | Taxonomy: Product demonstrations · Technical architecture · Verified case studies |
| Case layout | Context → challenge → architecture → decisions → validation → handover |
| Insights | Knowledge-center IA; TOC; diagrams; author/date; `generateMetadata` |
| Content quality | No generic SEO filler; deepen RAG/eval/automation pieces |

**Exit:** Demos clearly labeled; articles have technical substance.

---

## Phase 6 — International careers platform (major) ✅

| Work | Actions |
|------|---------|
| Data model | Extend role schema: category, seniority, eligibleCountries, remote, employmentTypes, optional compensation, timezone, status |
| Listing UX | Filters (category, seniority, country, remote, type, tech); clear filters; empty state |
| JD pages | Transparency blocks; regional titles only when C6 requires |
| Associates | Replace/rename juniors per C7; honest junior scope |
| Apply UX | Slim form per C2/C3; keep Turnstile, CV, admin pipeline |
| SEO | `JobPosting` JSON-LD on JD pages only; accurate applicant location |

**Exit:** Careers feels like a product; filters work; no fake urgency/counts.

---

## Phase 7 — Contact & trust ✅

| Work | Actions |
|------|---------|
| Contact / referral | Labels, inline validation, loading/success; keep APIs |
| Privacy / cookies | Align with actual data collection |
| Security & Trust | New page **only with C9-approved claims** |

---

## Phase 8 — SEO, a11y, QA, release ✅

**Report:** `docs/modernization/final-qa-report.md` · production build green 2026-11-21

| Work | Actions |
|------|---------|
| Metadata | Unique title/description/OG/canonical everywhere |
| Schema | Organization, WebSite, BreadcrumbList, Article, JobPosting |
| Perf | Images, fonts, CLS, reduced JS |
| A11y | Focus, contrast, keyboard nav, forms |
| Tests | Add Playwright: contact, referral, apply (multipart), admin login + CV |
| Build | `tsc`, lint, production build |
| Report | `docs/modernization/final-qa-report.md` |

**Exit:** All acceptance criteria in directive Part 20; no false “tests passed.”

---

## Execution rules

1. **One phase at a time**; inspect rendered UI before advancing.  
2. **Never break** apply/contact/referral/admin/CV.  
3. **No fabricated** clients, salaries, certs, or “worldwide hire” claims.  
4. Prefer **React product UI + SVG diagrams** over stock AI imagery.  
5. Keep git checkpoints small and reviewable.  
6. Document owner-pending items in QA report.

---

## Suggested first implementation slice (after Phase 0)

**Phase 1 partial + Phase 2 hero:**

1. Token/typography pass (non-breaking)  
2. Rebuild homepage hero with React product composition  
3. Fix homepage Engagement to include all three services  
4. Add Playwright smoke skeleton  

Then proceed Phase 2 remainder → 3 → 4 in parallel with careers data-model design (Phase 6 prep) once C4–C7 answered.

---

## Success metrics (qualitative)

- Looks like a serious international consultancy, not a template  
- Enterprise visitor finds path: problem → service/solution → contact  
- Engineer finds path: careers → filter → JD → apply  
- Visual proof is product/architecture, not decoration  
- Production build green; critical user journeys tested
