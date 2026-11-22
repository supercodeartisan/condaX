# Condax architecture audit

**Project:** Condax Information Technology Solutions (`condax-solutions`)  
**Repo:** `d:\Work\Consulting`  
**Date:** 2026-11-21  
**Phase:** 0 — Audit and planning

---

## 1. Stack summary

| Layer | Choice |
|-------|--------|
| Framework | Next.js **16.4.6** (App Router only; no `pages/`) |
| UI | React **19.3.1** |
| Language | TypeScript **6.x** |
| Styling | Tailwind CSS **4.3.3** (`@import "tailwindcss"`, `@theme` tokens in `app/globals.css`) |
| Package manager | **npm** (`package-lock.json`) |
| Node | `>=20.9.0` |
| Bundler | Webpack via `next dev --webpack` / `next build --webpack` |
| Data | Neon Postgres (`@neondatabase/serverless`) |
| Files | Vercel Blob (private CVs) |
| Email | Resend |
| Validation | Zod 4 |
| CAPTCHA | Cloudflare Turnstile (optional; both keys required) |
| Deploy target | Vercel (headers, Blob, edge geo) |

Scripts: `dev`, `dev:lan`, `build`, `start`, `lint`. **No test script.** Playwright is a dependency only — no config or specs.

---

## 2. Runtime topology

```
Browser
  ├── Marketing pages (SSG/SSR App Router)
  ├── /careers/* + ApplyForm → POST /api/careers/apply → Neon + Blob + Resend
  ├── /get-in-touch → POST /api/contact → Neon/local + Resend
  ├── /refer-a-client → POST /api/referrals → Neon/local + Resend
  └── /admin/* (cookie session) → applications / inquiries / notifications / CV proxy
```

- **No `middleware.ts`.** Admin auth is layout + per-route API checks (`lib/admin-auth.ts`, cookie `condax_admin`).
- Local dev fallback: `.data/` JSON + CVs when `NODE_ENV !== "production"` and DB/Blob missing (`lib/local-store.ts`).

---

## 3. Design system (current)

**Fonts** (`app/layout.tsx`): Outfit (display), IBM Plex Sans (body).

**Tokens** (`app/globals.css` `@theme`): warm `#f7f5f1`, paper, ink, charcoal, neutral, muted, hairline, cobalt `#2f5bff`, surface. Compat aliases `px-*` remain for legacy classes.

**Primitives:** `components/ui/*` (Button, Container, Section, Eyebrow, Reveal, EditorialImage, CalendarDatePicker, icons). Marketing spine: `ServicePage`, Header mega-nav, Footer.

**Motion:** fade-up, soft-float, scroll reveals; reduced-motion overrides exist.

---

## 4. Content & data modules

| Concern | Module |
|---------|--------|
| Nav, brand, static lists | `lib/site.ts` |
| Careers roles / hiring copy | `lib/careers.ts` (12 roles) |
| Apply validation | `lib/careers-apply.ts` |
| Apply pipeline | `lib/careers-submit.ts` |
| Applications DB | `lib/db.ts` |
| Contact/referral schemas | `lib/inquiries.ts` |
| Inquiries DB | `lib/inquiries-db.ts` |
| Work demos | `lib/site.ts` `workItems` + `components/work/*` |
| Orphan case copy | `lib/work-cases.ts` (unused slugs) |
| Insights | `lib/site.ts` + `lib/insights-content.ts` |
| People | `lib/people.ts` (component unused after About removal) |
| Images catalog | `lib/images.ts` |
| Countries / geo | `lib/countries.ts`, `lib/request-geo.ts` |

**DB:** `db/schema.sql` + migrations `001_add_date_of_birth.sql`, `002_add_nationality.sql`.

---

## 5. Forms & security

| Form | Endpoint | Guards |
|------|----------|--------|
| Contact | `POST /api/contact` | Rate limit, honeypot, Turnstile |
| Referral | `POST /api/referrals` | Rate limit, honeypot, Turnstile |
| Careers apply | `POST /api/careers/apply` | Rate limit, honeypot, Turnstile, CV magic bytes, 8MB |

CSP in `next.config.ts` allows Turnstile. Rate limits are **in-memory per isolate** (not global). HSTS + security headers enabled.

---

## 6. SEO (current)

- `app/sitemap.ts`, `app/robots.ts` (disallow `/admin`, `/brand`)
- Root metadata + title template in `app/layout.tsx`
- Gaps: `/work/[slug]` and `/insights/[slug]` lack dedicated `generateMetadata`
- No JobPosting / Organization JSON-LD yet
- Apply/general/submitted pages correctly out of sitemap / noindex where set

---

## 7. Technical issues & redesign risks

1. **Form field contracts are brittle** — UI field names ↔ Zod ↔ DB columns must move together.
2. **Private Blob CVs** — admin proxy + email links must stay intact.
3. **Nationality / DOB migrations** — Neon must stay in sync with schema or apply/admin fails.
4. **Token/font lock-in** — cobalt + warm paper pervasive; visual modernization needs token migration plan, not one-off class edits.
5. **CMS-less content** — roles/work/insights in TS; regional careers model needs schema expansion in code.
6. **No automated regression tests** — Playwright present but unused; forms/admin are high-risk.
7. **Dead visual weight** — large unused Unsplash set; hero uses stock photo framed as product UI.
8. **Legacy redirect pages** — seven old routes still ship as `redirect()` pages.
9. **People section removed from About** — photos/data still in repo; directive asks to restore leadership with verified bios only.
10. **README drift** — may still understate live backends.

---

## 8. Preserve-at-all-costs surface

- Career apply multipart + Blob private storage
- Contact + referral APIs + Turnstile
- Admin login/session + applications/inquiries + CV download
- Admin notifications polling
- Neon schema + migrations
- Apex → www domain redirect (ops, not code)

---

## 9. Recommended non-goals for early phases

- Framework migration
- Introducing a CMS before careers/data model is settled
- Public Web Push
- Fabricating clients, metrics, certifications, or salaries
