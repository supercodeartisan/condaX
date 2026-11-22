# Condax visual asset audit

**Scope:** `d:\Work\Consulting` — photography under `public/images/**`, catalog `lib/images.ts`, React product mocks in `components/visuals/**` (+ `components/work/product-uis.tsx`), usage map, icons, licensing.  
**Standard:** Premium consultancy — prefer real UI components over stock “product” photography and generic AI art; atmosphere photography only when clearly not presented as Condax staff/offices; dead assets should not remain in the ship path.  
**Date:** 2026-11-21

---

## Executive verdict

The site’s strongest visual system is already **hand-built React product UI** (Kite / Meridian / Harbor, work case UIs, service decision memo, architecture diagram). That direction matches premium consultancy standards and should be the modernization north star.

The weakest layer is a large **Unsplash stock library** that is mostly **catalogued but unused** in the current app tree, plus a homepage hero that frames a **stock dashboard photo** as Condax product UI. Several raster “product shot” JPGs and legacy plates are orphaned.

| Priority | Action |
|----------|--------|
| P0 | Replace `HeroProduct` stock photo with a real Condax UI mock (reuse `SaaSDashboard` / composition) |
| P0 | Delete or quarantine unused `public/images/**` plates (services, solutions, work covers, products JPG, plates, most about/home/shared) |
| P1 | Sync `lib/images.ts` + `MANIFEST.md` + download scripts to live usage only |
| P1 | Re-mount or retire people photos / `People` component |
| P2 | Polish React mocks for density, brand consistency, and fewer decorative chrome clones |
| P2 | Clean logo variants under `public/` and restore or drop brand-kit paths |

---

## 1. `public/images/**` file inventory (by folder)

Totals: **45 image files** + `MANIFEST.md` (~**9.3 MB** image payload). Formats: mostly `.webp`; orphans also `.jpg`.

### Root — `public/images/` (5 JPG + manifest)

| File | Size | Notes |
|------|------|--------|
| `MANIFEST.md` | 3 KB | Human inventory; **out of sync** with `lib/images.ts` photo IDs |
| `plate-bloom.jpg` | 267 KB | Legacy decorative |
| `plate-metal-edge.jpg` | 269 KB | Legacy decorative |
| `plate-portrait.jpg` | 197 KB | Legacy decorative |
| `plate-ribbon-wide.jpg` | 193 KB | Legacy decorative |
| `plate-shards.jpg` | 150 KB | Legacy decorative |

### `about/` (8)

| File | Size | Catalogued | Live usage |
|------|------|------------|------------|
| `workspace-architecture.webp` | 67 KB | Yes — Condax original | **Yes** — About hero |
| `workspace-light.webp` | 225 KB | Yes — Unsplash | No |
| `workspace-desk.webp` | 258 KB | Yes — Unsplash | No |
| `delivery-wide.webp` | 784 KB | Yes — Unsplash | No (largest plate) |
| `presence-remote.webp` | 61 KB | Yes — Unsplash | No |
| `presence-focus.webp` | 94 KB | Yes — Unsplash | No |
| `presence-craft.webp` | 65 KB | Yes — Unsplash | No |
| `presence-clarity.webp` | 79 KB | Yes — Unsplash | No |

### `about/people/` (2)

| File | Size | Registry | Live usage |
|------|------|----------|------------|
| `rheden-david.webp` | 55 KB | `lib/people.ts` | **No page mounts `People`** (component exists, unused) |
| `art-franco.webp` | 41 KB | `lib/people.ts` | Same |

### `careers/` (2)

| File | Size | Catalogued | Live usage |
|------|------|------------|------------|
| `careers-hero.webp` | 63 KB | Yes — Condax original | **Yes** — Careers hero |
| `careers-culture.webp` | 164 KB | Yes — Unsplash | No |

### `home/` (4)

| File | Size | Catalogued | Live usage |
|------|------|------------|------------|
| `hero-visual.webp` | 265 KB | Yes — Unsplash | **Yes** — via `HeroProduct` |
| `capabilities-strip.webp` | 520 KB | Yes — Unsplash | No |
| `careers-teaser.webp` | 188 KB | Yes — Unsplash | No |
| `engagement-build.webp` | 449 KB | Yes — Unsplash | No |

### `insights/` (3)

| File | Size | Catalogued | Live usage |
|------|------|------------|------------|
| `tool-or-build.webp` | 210 KB | Yes | Wired in `InsightCard` but **`showCover={false}` everywhere** → effectively unused |
| `rollout-without-leaking.webp` | 200 KB | Yes | Same |
| `copilot-vs-chatgpt.webp` | 295 KB | Yes | Same |

### `products/` (5) — **not in `lib/images.ts`**

| File | Size | Live usage |
|------|------|------------|
| `architecture.jpg` | 231 KB | None found |
| `harbor-flow.jpg` | 184 KB | None |
| `hero-delivery.jpg` | 208 KB | None |
| `kite-assistant.jpg` | 276 KB | None |
| `meridian-ops.jpg` | 257 KB | None |

Likely stale raster exports of React mocks / diagrams.

### `services/` (5)

| File | Size | Live usage |
|------|------|------------|
| `ai-for-teams.webp` | 149 KB | None (pages use React visuals) |
| `custom-products.webp` | 197 KB | None |
| `advisory.webp` | 272 KB | None |
| `engineering.webp` | 218 KB | None |
| `cloud-architecture.webp` | 445 KB | None |

### `solutions/` (4)

| File | Size | Live usage |
|------|------|------------|
| `copilots.webp` | 154 KB | None (pages use `BrowserFrame` + mocks) |
| `internal-tools.webp` | 126 KB | None |
| `automations.webp` | 288 KB | None |
| `custom-apps.webp` | 135 KB | None |

### `work/` (4)

| File | Size | Live usage |
|------|------|------------|
| `atlas-cover.webp` | 126 KB | None (work pages use `WorkScreenshot` / product UIs) |
| `meridian-cover.webp` | 154 KB | None |
| `kite-cover.webp` | 490 KB | None |
| `harbor-cover.webp` | 348 KB | None |

### `shared/` (2)

| File | Size | Live usage |
|------|------|------------|
| `contact-atmosphere.webp` | 292 KB | None (scripts still reference for QA) |
| `what-we-do-wide.webp` | 183 KB | None |

### Related public assets (outside `images/`, for completeness)

| Path | Role |
|------|------|
| `public/logo.png` | Active site logo (`components/Logo.tsx`, favicon) |
| `public/logo-2x.png`, `logo-original.png`, `logo-transparent.png`, `logo1.png` | Alternate / source logos |
| `public/1.jpg` | Unclear orphan |
| `public/logos/**` | **Missing** — `app/brand/page.tsx` expects SVG/JPG kit that is not present |

---

## 2. `lib/images.ts` catalog entries

**Shape:** `ImageAsset` with `src`, `alt`, `width`, `height`, `sourceUrl`, `sourceSite` (`"Unsplash" | "Condax original"`), `license` (`"Unsplash License" | "All rights reserved"`), `photoId`, `usage`.

**Exported keys:**

| Namespace | Keys | Count |
|-----------|------|-------|
| `home` | `heroVisual`, `capabilitiesStrip`, `careersTeaser`, `engagementBuild` | 4 |
| `about` | `workspaceLight`, `workspaceDesk`, `workspaceArchitecture`, `deliveryWide`, `presenceRemote`, `presenceFocus`, `presenceCraft`, `presenceClarity` | 8 |
| `careers` | `hero`, `culture` | 2 |
| `services` | `ai-for-teams`, `custom-products`, `advisory`, `engineering`, `cloud-architecture` | 5 |
| `solutions` | `copilots`, `internal-tools`, `automations`, `custom-apps` | 4 |
| `work` | `atlas`, `meridian`, `kite`, `harbor` | 4 |
| `insights` | `tool-or-build`, `rollout-without-leaking-data`, `copilot-vs-chatgpt` | 3 |
| `shared` | `contactAtmosphere`, `whatWeDoWide` | 2 |
| **Total catalog entries** | | **32** |

**Not catalogued but on disk:** `about/people/*`, `products/*`, root `plate-*`, all logo variants.

### Live vs dead catalog (code references)

| Status | Entries |
|--------|---------|
| **Live** | `home.heroVisual`, `about.workspaceArchitecture`, `careers.hero` |
| **Dead-wired** | All `insights.*` (imported by `InsightCard`, covers never shown) |
| **Dead catalog** | Remaining 26 entries — no TSX imports of those keys |

### Catalog drift / integrity issues

1. **`MANIFEST.md` / `scripts/download-images.mjs` photo IDs disagree with `lib/images.ts`** for several files (e.g. `capabilities-strip`, `careers-teaser`, `engagement-build`, `workspace-light`, careers culture, contact / what-we-do). Treat `images.ts` as the intended runtime registry, but re-verify files on disk against Unsplash IDs before licensing claims.
2. **`download-images.mjs` still lists `workspace-architecture` / `careers-hero` as Unsplash IDs**, while `images.ts` correctly marks them **Condax original** — script is stale and dangerous if re-run.
3. **Heavy reuse of the same Unsplash plate** (`1551288049-bebda4e38f71`) as homepage hero, internal-tools solution, and Meridian work cover — looks generic and self-duplicating if those surfaces return.
4. **People photos** live only in `lib/people.ts`, not in `images.ts`.

---

## 3. `components/visuals/**` React product mocks / diagrams

| File | Role | Approx. LOC | Used? |
|------|------|-------------|-------|
| `HeroProduct.tsx` | Mac-chrome frame + Unsplash dashboard photo + floating “Production” card | 54 | **Yes** — homepage hero |
| `SaaSDashboard.tsx` | Condax ops console mock | 117 | **Yes** — `/services/custom-products` |
| `AIAssistant.tsx` | Grounded ops assistant card | 62 | **Yes** — `/services/ai-for-teams` |
| `DecisionMemo.tsx` | Adopt / Build / Defer memo UI | 90 | **Yes** — `/services/advisory` |
| `KiteAssistant.tsx` | Knowledge assistant concept | 115 | **Yes** — home Selected Work, copilots, custom-apps |
| `MeridianOps.tsx` | Ops board concept | 117 | **Yes** — home Selected Work, internal-tools |
| `HarborFlow.tsx` | Dark automation canvas | 78 | **Yes** — home Selected Work, automations |
| `BrowserFrame.tsx` | macOS / Chrome / dark window chrome | 126 | **Yes** — solutions pages, `WorkScreenshot` |
| `ArchitectureVisual.tsx` | Delivery topology diagram | 93 | **Yes** — homepage Principles |
| `ProductShot.tsx` | Generic image-in-frame helper | 36 | **No imports** |
| `WorkflowDiagram.tsx` | Simple node strip diagram | 39 | **No imports** |

### Adjacent (not under `visuals/`, critical to product visuals)

| File | Role |
|------|------|
| `components/work/WorkScreenshot.tsx` | Maps work slugs → browser chrome + product UI |
| `components/work/product-uis.tsx` | ~810 LOC — full-page mocks: Kite, Beacon, Canvas, Pulse, Harbor, Relay, Ledger, Signal, Meridian, Atlas |

These React surfaces are the correct premium pattern: **product truth as UI**, not stock photography of anonymous laptops.

---

## 4. Where `HeroProduct` and other visuals are used

### Homepage (`app/page.tsx`)

| Component | Visual |
|-----------|--------|
| `components/home/Hero.tsx` | **`HeroProduct`** → `images.home.heroVisual` |
| `components/home/Principles.tsx` | `ArchitectureVisual` |
| `components/home/SelectedWork.tsx` | `KiteAssistant`, `MeridianOps`, `HarborFlow` |
| Capabilities / Engagement / FinalCTA | Typography only — catalog atmosphere images unused |

### Services

| Page | Visual |
|------|--------|
| `/services/custom-products` | `SaaSDashboard` |
| `/services/ai-for-teams` | Inline “Pilot cohort” panel + `AIAssistant` |
| `/services/advisory` | `DecisionMemo` |
| Other service pages | No shared photo heroes from catalog |

### Solutions

| Page | Visual |
|------|--------|
| `/solutions/copilots` | `BrowserFrame` + `KiteAssistant` |
| `/solutions/custom-apps` | `BrowserFrame` + `KiteAssistant` |
| `/solutions/internal-tools` | `BrowserFrame` + `MeridianOps` |
| `/solutions/automations` | `BrowserFrame` + `HarborFlow` |

### Work

| Page | Visual |
|------|--------|
| `/work`, `/work/[slug]` | `WorkScreenshot` → `product-uis` (not work cover webps) |

### Editorial / people

| Surface | Visual |
|---------|--------|
| `/about-us` | `EditorialImage` → `images.about.workspaceArchitecture` only |
| `/careers` | `EditorialImage` → `images.careers.hero` only |
| Insights listing / cards | Text-first; covers off |
| `components/about/People.tsx` | Would use people webps — **not mounted on any page** |

### Usage graph (summary)

```
HeroProduct ─────────── home Hero
ArchitectureVisual ──── home Principles
KiteAssistant ───────── SelectedWork + copilots + custom-apps
MeridianOps ─────────── SelectedWork + internal-tools
HarborFlow ──────────── SelectedWork + automations
SaaSDashboard ───────── custom-products
AIAssistant ─────────── ai-for-teams
DecisionMemo ────────── advisory
BrowserFrame ────────── solutions + WorkScreenshot
WorkScreenshot ──────── work list/detail → product-uis/*
EditorialImage ──────── about hero, careers hero, InsightCard (covers off)
ProductShot / WorkflowDiagram ── orphan
```

---

## 5. Icons under `components/ui/icons`

**Path:** `components/ui/icons.tsx` (single module — **no** `components/ui/icons/` directory).

| Export | Purpose | Consumers |
|--------|---------|-----------|
| `ArrowRightIcon` | CTA / chrome forward | `Button`, `Buttons`, `BrowserFrame` (Chrome) |
| `ArrowLeftIcon` | Back / chrome back | `BackLink`, `BrowserFrame` |
| `ArrowUpIcon` | Send control | `AIAssistant` |

**Also inline SVGs (not in icons module):** LinkedIn / X in `People.tsx`; Chrome mark in `BrowserFrame.tsx`.

**Assessment:** Intentionally minimal custom stroke set — good for a consultancy (no Lucide/Heroicons sprawl). Expand only when new interaction metaphors are needed; keep stroke weight / sizing tokens consistent.

---

## 6. Classification by major asset category

Legend: **KEEP** · **IMPROVE** · **REPLACE** · **REBUILD** · **REMOVE**

### A. Homepage hero — `HeroProduct` + `hero-visual.webp`

| Verdict | **REPLACE** (photo) / **REBUILD** (composition) |
|---------|--------------------------------------------------|
| Rationale | Chrome + floating “Production” badge present a **stock Unsplash analytics laptop** (`1551288049…`) as Condax product UI. Premium shops show owned product surfaces. Prefer composing `SaaSDashboard` + `AIAssistant` (already built) or a dedicated hero mock — no stock-as-product. Drop decorative radial purple glow if brand direction avoids default AI gradients. |

### B. Condax original office plates

| Assets | `about/workspace-architecture.webp`, `careers/careers-hero.webp` |
|--------|------------------------------------------------------------------|
| Verdict | **IMPROVE** (keep category, raise quality) |
| Rationale | Correct ownership (`All rights reserved`) and currently live. Files are small (~63–67 KB) for wide heroes — verify resolution/grade. Ensure they read as **atmosphere**, not claimed Condax HQ if they are commissioned stock-like stills. Prefer real Condax workspace or abstract materials if authenticity is weak. |

### C. Unused Unsplash atmosphere library

| Assets | Most of `home/*` (except hero), `about/*` (except architecture), `careers/culture`, `services/*`, `solutions/*`, `work/*-cover`, `shared/*`, insights covers |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Verdict | **REMOVE** from ship path (or **REPLACE** only if a page intentionally needs atmosphere again) |
| Rationale | Dead weight (~7+ MB), duplicates, catalog/script drift. Stock code/desks/datacenters are commodity. When a section needs visual weight, prefer React UI, diagrams, or owned photography — not Unsplash “dev aesthetic.” |

### D. Legacy plates + products JPG exports

| Assets | `plate-*.jpg`, `products/*.jpg` |
|--------|--------------------------------|
| Verdict | **REMOVE** |
| Rationale | Explicitly unused; JPG mock exports compete with live React components and risk being mistaken for current product truth. |

### E. React concept mocks (`KiteAssistant`, `MeridianOps`, `HarborFlow`, `SaaSDashboard`, `AIAssistant`, `DecisionMemo`)

| Verdict | **KEEP** + **IMPROVE** |
|---------|------------------------|
| Rationale | Aligns with “prefer real UI components.” Clearly labeled as sample concepts on Selected Work. Improve: shared design tokens, reduce chrome duplication with `BrowserFrame`, tighten typography hierarchy, ensure data looks operational (not placeholder lorem), consistent Condax cobalt/ink language. |

### F. Work case product UIs (`product-uis.tsx` + `WorkScreenshot` + `BrowserFrame`)

| Verdict | **KEEP** + **IMPROVE** |
|---------|------------------------|
| Rationale | Strongest proof surface for a build shop. Improve fidelity, distinctiveness per case, and accessibility (`aria-hidden` is fine for decorative mocks — ensure surrounding copy carries meaning). Avoid screenshotting Unsplash into these frames. |

### G. Diagrams (`ArchitectureVisual`, orphan `WorkflowDiagram`)

| Verdict | `ArchitectureVisual` **KEEP/IMPROVE**; `WorkflowDiagram` **REMOVE** or fold into Harbor |
|---------|------------------------------------------------------------------------------------------|
| Rationale | Topology diagram supports delivery narrative without fake photos. Orphan diagram should not linger. |

### H. Orphan helpers (`ProductShot`)

| Verdict | **REMOVE** unless product photography returns |
|---------|-----------------------------------------------|
| Rationale | Encourages framing stock images as product shots. |

### I. People photography

| Verdict | **KEEP** assets; **REBUILD** placement |
|---------|----------------------------------------|
| Rationale | Real named principals beat stock “team huddles.” Remount `People` on About (or equivalent) or stop shipping unused portraits. Confirm likeness rights on file. |

### J. Insights covers

| Verdict | **REMOVE** stock covers **or REPLACE** with typography-led / diagram covers |
|---------|-----------------------------------------------------------------------------|
| Rationale | Currently unused; if re-enabled, generic padlock/laptop stock undermines editorial seriousness. Prefer custom illustration, diagram, or cover-free list (current). |

### K. Icon system

| Verdict | **KEEP** |
|---------|----------|
| Rationale | Small custom set; professional restraint. |

### L. Logo / brand kit

| Verdict | **IMPROVE** / cleanup |
|---------|----------------------|
| Rationale | Active `logo.png` works; multiple alternate PNGs and missing `/public/logos` for brand page create inconsistency. Consolidate one production mark + archived sources. |

---

## 7. Licensing notes (from `lib/images.ts` + manifest)

### Declared model in code

```text
sourceSite: "Unsplash" | "Condax original"
license:    "Unsplash License" | "All rights reserved"
```

Header comment in `lib/images.ts`:

> Prefer Condax originals for About/Careers heroes. Older Unsplash plates remain as illustrative atmosphere only — never Condax staff or offices.

`MANIFEST.md` restates Unsplash License (free commercial use; attribution appreciated, not required) and the same art-direction rules.

### Condax original / All rights reserved (catalog)

| Key | Path |
|-----|------|
| `about.workspaceArchitecture` | `/images/about/workspace-architecture.webp` |
| `careers.hero` | `/images/careers/careers-hero.webp` |

### Unsplash License (all other catalog entries)

Every remaining catalog asset sets `license: "Unsplash License"` with `sourceUrl` → `https://unsplash.com/photos/{photoId}` and non-null `photoId`.

**Notable Unsplash IDs in live or high-risk reuse:**

| photoId | Catalog uses |
|---------|----------------|
| `1551288049-bebda4e38f71` | `home.heroVisual` (**live**), `solutions.internal-tools`, `work.meridian` |
| `1460925895917-afdab827c52f` | `services.custom-products`, `work.harbor` |
| `1497366811353-6870744d04b2` | `home.careersTeaser`, `about.workspaceLight` |
| `1516321318423-f06f85e504b3` | `services.engineering`, `insights.copilot-vs-chatgpt` |
| `1555949963-aa79dcee981c` | `services.ai-for-teams`, `solutions.copilots` |
| `1497366216548-37526070297c` | `careers.culture`, `shared.whatWeDoWide` |
| `1497215728101-856f4ea42174` | `about.workspaceDesk`, `shared.contactAtmosphere` |

### Outside catalog

| Asset class | Licensing status in repo |
|-------------|--------------------------|
| `about/people/*` | Not declared in `images.ts` — treat as Condax / individual likeness rights; document explicitly |
| `products/*.jpg`, `plate-*.jpg` | Undeclared; safe to delete as unused |
| Logo PNGs | Condax IP (assume ARR); consolidate |

### Operational risks

1. Re-running `scripts/download-images.mjs` could **overwrite Condax originals** with Unsplash pulls for architecture/careers heroes.
2. Manifest vs `images.ts` ID mismatch means **attribution/provenance may be wrong** for files that were upgraded via `upgrade-images.mjs` / `retry-*.mjs`.
3. Stock photos must never be captioned or framed as Condax employees or offices (already stated; reinforce in modernization copy rules).

---

## Recommended modernization backlog

1. **Hero:** Rebuild `HeroProduct` as real Condax UI (compose existing mocks); delete dependency on `hero-visual.webp`.
2. **Prune disk:** Remove `plate-*`, `products/*`, and unused Unsplash folders after confirming no CMS/og references; shrink catalog to live originals only (plus people when remounted).
3. **Registry:** Rewrite `lib/images.ts` + `MANIFEST.md` to match reality; fix download scripts so originals are never overwritten.
4. **About:** Remount `People` with owned portraits; keep one strong office plate or replace with typography + diagram.
5. **Work/Services/Solutions:** Keep React mocks as the primary visual language; ban Unsplash-as-product-UI.
6. **Icons/logos:** Keep minimal icons; clean logo variants and restore or remove brand page kit.

---

## Appendix — quick counts

| Bucket | Count |
|--------|-------|
| Files under `public/images/**` (images only) | 45 |
| Catalog entries in `lib/images.ts` | 32 |
| Catalog entries with live page usage | 3 |
| `components/visuals/*` modules | 11 |
| Visuals actively imported | 9 |
| Orphan visual modules | 2 (`ProductShot`, `WorkflowDiagram`) |
| Work product UI surfaces in `product-uis.tsx` | 10 |
| Icons in `components/ui/icons.tsx` | 3 |
