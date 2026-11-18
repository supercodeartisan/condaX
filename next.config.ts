import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // LAN partner testing (npm run dev:lan) — include your machine's LAN IP if needed
  allowedDevOrigins: ["127.0.0.1", "localhost", "192.168.9.26", "0.0.0.0"],
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
