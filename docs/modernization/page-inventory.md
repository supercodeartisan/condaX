# Condax page inventory

**Date:** 2026-11-21  
**Source:** `app/` routes verified against Header/Footer/`lib/site.ts`

---

## Navigation map (current)

**Header:** Services (3) · Solutions (4) · Work · About · Insights · Careers · Contact  
**Footer:** Company (+ What we do) · Services · Solutions · Contact · Legal  

**Under-linked but live:** `/refer-a-client` (from Contact only), `/what-we-do` (footer + Services panel, not primary nav)  
**Internal only:** `/brand` (noindex, robots disallow)

---

## Public marketing pages

| Route | File | Purpose | Key sections / components | Primary CTAs | Visual notes |
|-------|------|---------|---------------------------|--------------|--------------|
| `/` | `app/page.tsx` | Homepage | Hero, Capabilities, Engagement, Principles, SelectedWork, FinalCTA | Contact, View work, service links | `HeroProduct` (stock photo); React mocks in SelectedWork |
| `/what-we-do` | `app/what-we-do/page.tsx` | Engagement overview | Paths, expectations, Plans | Service links, Contact | Typography-led |
| `/services/ai-for-teams` | `…/ai-for-teams/page.tsx` | AI enablement | `ServicePage` spine | Scoped Contact | Inline + `AIAssistant` |
| `/services/custom-products` | `…/custom-products/page.tsx` | Custom build | `ServicePage` + Plans | Scoped Contact | `SaaSDashboard` |
| `/services/advisory` | `…/advisory/page.tsx` | Advisory | `ServicePage` | Book a session | `DecisionMemo` |
| `/solutions/copilots` | `…/copilots/page.tsx` | Copilots / RAG UX | `ServicePage` | Scope a copilot | `BrowserFrame` + `KiteAssistant` |
| `/solutions/internal-tools` | `…/internal-tools/page.tsx` | Ops tools | `ServicePage` | Map operations | `MeridianOps` |
| `/solutions/automations` | `…/automations/page.tsx` | Workflow automation | `ServicePage` | Chart automation | `HarborFlow` |
| `/solutions/custom-apps` | `…/custom-apps/page.tsx` | Customer apps | `ServicePage` | Scope app | `KiteAssistant` |
| `/work` | `app/work/page.tsx` | Portfolio grid | Filters + cards | Case links | `WorkScreenshot` |
| `/work/[slug]` | `app/work/[slug]/page.tsx` | Case detail | Challenge, approach, outcomes | Contact | kite/harbor/meridian/atlas only |
| `/about-us` | `app/about-us/page.tsx` | Company | Overview, values, engagement CTA | What we do | Condax office photo; **People removed** |
| `/insights` | `app/insights/page.tsx` | Article index | Filters, cards | Article links | Partial covers |
| `/insights/[slug]` | `app/insights/[slug]/page.tsx` | Article | Body + related | Back / related | 13 articles |
| `/careers` | `app/careers/page.tsx` | Hiring home | Why join, process, roles | Role + general apply | Careers hero photo |
| `/careers/[slug]` | `app/careers/[slug]/page.tsx` | JD | About, impact, requirements | Apply | 12 roles |
| `/careers/[slug]/apply` | `…/apply/page.tsx` | Apply form | `ApplyForm` | Submit | Geo prefill |
| `/careers/general` | `app/careers/general/page.tsx` | General apply | `ApplyForm` | Submit | Geo prefill |
| `/careers/submitted` | `app/careers/submitted/page.tsx` | Success | Status | Careers / home | noindex |
| `/get-in-touch` | `app/get-in-touch/page.tsx` | Contact | Form + FAQ | Submit, referral, careers | Form |
| `/refer-a-client` | `app/refer-a-client/page.tsx` | Referrals | `ReferralForm` | Create link | Form |
| `/legal/privacy-policy` | `…/privacy-policy/page.tsx` | Privacy | Policy copy | Email | — |
| `/legal/cookie-policy` | `…/cookie-policy/page.tsx` | Cookies | Policy copy | — | — |
| `/brand` | `app/brand/page.tsx` | Logo kit | Variants | Downloads | Internal |
| 404 | `app/not-found.tsx` | Not found | Message | Home | — |

### Live work slugs
`kite`, `harbor`, `meridian`, `atlas`

### Live career slugs (12)
Senior: full-stack, frontend, backend-platform, AI, devops-cloud, java-spring, dotnet, technical-interviewer, technical-interview-lead  
Junior: full-stack, frontend, backend

### Insights (13)
Listed in `lib/site.ts` / `lib/insights-content.ts` (governance, RAG, automation, handover, etc.)

---

## Admin

| Route | Purpose |
|-------|---------|
| `/admin` → `/admin/applications` | Applications inbox |
| `/admin/inquiries` | Contact + referral inbox |
| Layout | `AdminChrome` + notifications bell |

---

## API routes

| Path | Role |
|------|------|
| `POST /api/contact` | Contact |
| `POST /api/referrals` | Referral codes |
| `POST /api/careers/apply` | Applications + CV |
| `POST /api/admin/login` / `logout` | Auth |
| `GET /api/admin/notifications` | Admin bell |
| `GET/PATCH …/applications/[id]/cv|status` | CV + pipeline |
| `GET /api/local-cv/[name]` | Local-dev CVs |

---

## Legacy redirects (still shipped)

| From | To |
|------|-----|
| `/tech-hubs` | `/what-we-do` |
| `/services/design`, `/engineering` | `/services/custom-products` |
| `/services/product` | `/services/advisory` |
| `/solutions/websites`, `/web-apps`, `/mobile-apps` | `/solutions/custom-apps` |

---

## IA / content issues for modernization

1. Homepage Engagement omits **AI for teams** while Services nav lists three.
2. SelectedWork omits **Atlas** (present on `/work`).
3. `/refer-a-client` and `/what-we-do` under-exposed vs directive IA.
4. Orphan `lib/work-cases.ts` slugs (beacon, canvas, …) without pages.
5. Careers lack category/country filters, JobPosting schema, regional listings.
6. About lacks leadership section (removed by request; directive wants verified leadership restored carefully).
7. Service/solution pages share one spine — risk of “same page, different title.”
8. Work/insight detail pages need richer metadata.
9. No Security & Trust page yet.
10. Directive target nav (`COMPANY`, Product Demonstrations taxonomy) not yet reflected.

---

## Sitemap coverage

Included: core marketing, services, solutions, work×4, insights×13, careers + role JDs, contact, refer, legal.  
Excluded (intentional): admin, brand, apply/general/submitted, legacy redirects.
