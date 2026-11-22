import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Harmless on http://localhost; enforced by browsers on HTTPS.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Intentionally permissive enough for Next.js + Cloudflare Turnstile.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://challenges.cloudflare.com",
      "frame-src https://challenges.cloudflare.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // LAN partner testing (npm run dev:lan) — include your machine's LAN IP if needed
  allowedDevOrigins: ["127.0.0.1", "localhost", "192.168.9.26", "0.0.0.0"],
  experimental: {
    agentUpgrade: "security",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    const legacyAssociateSlugs = [
      ["junior-full-stack-engineer", "associate-full-stack-engineer"],
      ["junior-frontend-engineer", "associate-frontend-engineer"],
      ["junior-backend-engineer", "associate-backend-engineer"],
    ] as const;
    return legacyAssociateSlugs.flatMap(([from, to]) => [
      { source: `/careers/${from}`, destination: `/careers/${to}`, permanent: true },
      { source: `/careers/${from}/apply`, destination: `/careers/${to}/apply`, permanent: true },
    ]);
  },
};

export default nextConfig;
