# Condax modernization — final QA report

**Date:** 2026-11-21  
**Scope:** Phases 0–8 (enterprise modernization)  
**Build:** `npm run build` — **passed** (Next.js 16.4.6, 80 routes generated)

---

## Verdict

Modernization shipped end-to-end in-repo: product/diagram visuals, careers platform, Security & Trust, asset prune, SEO/sitemap coverage, and a green production build. Forms and admin pipelines were preserved. No fabricated salaries, client logos, or certifications were added.

---

## Phase completion

| Phase | Status | Notes |
|-------|--------|-------|
| 0 Audit & planning | Done | `architecture-audit`, `page-inventory`, `visual-asset-audit`, roadmap |
| 1 Design foundation | Done (prior) | Tokens, nav/footer, motion restraint |
| 2 Homepage & company | Done | React `HeroProduct`; About leadership remounted; What we do clarity |
| 3 Services & solutions | Done | Distinct spines + RAG / automation / SaaS diagrams |
| 4 Visual assets | Done | Orphans removed; `asset-manifest.md`; `lib/images.ts` synced |
| 5 Work & Insights | Done | Taxonomy + metadata/TOC polish |
| 6 Careers | Done | Filters, associates, JobPosting, slim apply |
| 7 Contact & trust | Done | `/security`; contact/referral UX retained |
| 8 SEO / a11y / build | Done | Sitemap includes `/security` + careers; production build green |

---

## Acceptance checks (directive-aligned)

| Criterion | Result |
|-----------|--------|
| Premium consultancy positioning | Met in IA/copy/visual system |
| Real product UI / diagrams as proof | Met (React UIs + SVG diagrams; stock AI art not used as product proof) |
| Leadership only with verified people | Met (`lib/people.ts` + Condax photos) |
| No fabricated clients / salaries / certs | Met |
| Careers filters + associate roles | Met |
| Apply form lean (no DOB/street required) | Met in UI; see Neon note |
| Security & Trust without overstated claims | Met (`/security`) |
| Production build | **Pass** |

---

## Owner decisions applied (“proceed fully”)

| ID | Resolution shipped |
|----|--------------------|
| C1 | Leadership remounted on About |
| C2 | DOB + street removed from initial apply UX |
| C3 | Nationality retained as identity field; not framed as work-auth proxy in UX copy |
| C5 / C9 | No invented pay bands or certifications |
| C7 | Associate naming for early-career roles |
| C8 | Work demos remain labeled as demonstrations |

Still market/legal-owned (not inventable in code): C4 engagement eligibility per country; C6 which vacancies to keep live; C10 deeper palette evolution if desired later.

---

## Ops required before/after deploy

1. **Neon:** run `db/migrations/002_add_nationality.sql` and `db/migrations/003_relax_apply_fields.sql` if not already applied.
2. **DNS / HTTPS:** apex → www redirect and Vercel A record remain environment-owned (documented earlier).
3. **Env:** Turnstile, Resend, Neon, Blob, admin cookie secrets must remain set on Vercel.

---

## Automated tests

Playwright smoke suite was **not** expanded in this pass. Do not treat E2E as green. Manual smoke recommended after deploy:

- [ ] Contact submit (Turnstile success path)
- [ ] Referral submit
- [ ] Careers apply with CV upload
- [ ] Admin login → applications list → CV download → status update
- [ ] `/security`, careers filters, associate JD + JobPosting view-source

---

## Asset inventory

See `docs/modernization/asset-manifest.md`. Live rasters: About/Careers heroes, two people photos, three insight covers. Homepage/work product proof is React/SVG.

---

## Residual risks

- In-memory rate limits (per isolate) — known from architecture audit
- Some legacy service/solution routes still exist for IA continuity; primary narrative is What we do + core three services/solutions
- Playwright coverage gap until a follow-up adds critical-path tests
