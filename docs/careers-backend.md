# Careers applications backend

## Stack

- **Vercel** — Next.js site + API routes
- **Neon Postgres** — `applications` table (`db/schema.sql`)
- **Vercel Blob** — CV uploads
- **Resend** — email alert on each submission
- **`/admin/applications`** — password-gated review UI

## One-time setup

1. Create a Neon project → copy `DATABASE_URL`.
2. In Neon SQL Editor, run `db/schema.sql`.
3. In Vercel, create a Blob store → copy `BLOB_READ_WRITE_TOKEN`.
4. Create a Resend API key → set `RESEND_API_KEY`, `RESEND_FROM`, `CAREERS_TO`.
5. Set a strong `ADMIN_PASSWORD` and a random `ADMIN_SESSION_SECRET` (`openssl rand -base64 48`).
6. Set Cloudflare Turnstile keys (`NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY`).
7. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
8. Deploy on Vercel; point GoDaddy DNS to Vercel.

## Flow

1. Candidate submits `/careers/[slug]/apply`.
2. `POST /api/careers/apply` validates fields, uploads CV, inserts row, emails hiring.
3. Open `https://your-domain/admin/applications`, sign in, review and update status.

## Local (no cloud yet)

In development, if `DATABASE_URL` / `BLOB_READ_WRITE_TOKEN` are missing, the app stores
applications in `.data/applications.json` and CVs in `.data/cvs/`.

```bash
# optional: set only admin credentials for local review
# Use a password you will not reuse in production.
cat > .env.local <<'EOF'
ADMIN_PASSWORD=replace-me-local-only
ADMIN_SESSION_SECRET=replace-me-local-session-secret
EOF

npm run dev:lan
```

1. Find your LAN IP (Windows: `ipconfig` → IPv4).
2. Partner opens `http://YOUR_LAN_IP:3000/careers`.
3. You review at `http://YOUR_LAN_IP:3000/admin/applications` (same Wi‑Fi / network).
4. CV files stay private — open them from the admin UI after signing in.
5. Allow Node through Windows Firewall if the partner cannot connect.

## Production DB (before real domain launch)

1. Create a free [Neon](https://neon.tech) project → copy `DATABASE_URL` into `.env.local` and Vercel.
2. Run `db/schema.sql` in the Neon SQL Editor.
3. Add Vercel Blob + Resend keys (see above).
4. Redeploy — submissions then go to Postgres instead of `.data/`.
