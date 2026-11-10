# Condax

Marketing site for **Condax Information Technology Solutions** (Condax) — AI enablement and custom product consulting.

Built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**.

## Prerequisites

- **Node.js** 20.9+ (22 or 24 LTS recommended)
- **npm** 10+ (this repo uses `package-lock.json`)

Check versions:

```bash
node -v
npm -v
```

## Setup

```bash
git clone <YOUR_GITHUB_REPO_URL>
cd <repo-folder>
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> On Windows, the dev script uses `next dev --webpack` for stability.

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Local development server   |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | ESLint                     |

## Environment

No `.env` is required for the current demo site (forms are client-side stubs).

If you add secrets later:

1. Copy `.env.example` → `.env.local`
2. Never commit `.env*` (already in `.gitignore`)

## Project layout

```
app/           # App Router pages
components/    # UI
lib/           # Site copy, careers data, helpers
public/        # Static assets (logo, images)
```

## Notes for contributors

- Brand short name: **Condax**
- Legal name: **Condax Information Technology Solutions**
- Content lives mainly in `lib/site.ts` and `lib/careers.ts`
- Keep PRs focused; run `npm run lint` and `npm run build` before opening a PR
