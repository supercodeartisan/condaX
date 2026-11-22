# Condax visual asset manifest

**Updated:** 2026-11-21 (visual refresh A+B)  
**Source of truth:** `lib/images.ts` + files under `public/images/`  
**People photos:** `lib/people.ts`

---

## Live rasters (KEEP)

| Path | Source | Used by |
|------|--------|---------|
| `/images/about/workspace-architecture.webp` | Condax original (2026 refresh) | About hero |
| `/images/about/people/rheden-david.webp` | Condax original | Leadership |
| `/images/about/people/art-franco.webp` | Condax original | Leadership |
| `/images/careers/careers-hero.webp` | Condax original (2026 refresh) | Careers hero |
| `/images/insights/tool-or-build.webp` | Unsplash | Insight covers |
| `/images/insights/rollout-without-leaking.webp` | Unsplash | Insight covers |
| `/images/insights/copilot-vs-chatgpt.webp` | Unsplash | Insight covers |

## Product / diagram proof (React + SVG)

| Asset | Form | Used by |
|-------|------|---------|
| Homepage hero | `HeroProduct` → denser `SaaSDashboard` + `AIAssistant` | `/` |
| Selected work + Work | Shared `WorkScreenshot` / `product-uis` (Kite, Meridian, Harbor, Atlas deepened) | `/`, `/work`, `/work/[slug]` |
| RAG / automation / SaaS | SVG diagrams in `components/visuals/diagrams/*` | Solutions pages |

## Rules

1. No stock “AI brain / robot” as product proof.
2. Homepage and `/work` must share the same product UI components.
3. About/Careers atmosphere photos: empty of people unless real Condax staff.
4. Update this file when adding or replacing rasters.
