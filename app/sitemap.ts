import type { MetadataRoute } from "next";
import { roles } from "@/lib/careers";
import { insights, nav, site, workItems } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/what-we-do",
    "/work",
    "/about-us",
    "/insights",
    "/careers",
    "/get-in-touch",
    "/refer-a-client",
    "/legal/privacy-policy",
    "/legal/cookie-policy",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.7,
    })),
    ...nav.services.map((item) => ({
      url: `${base}${item.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...nav.solutions.map((item) => ({
      url: `${base}${item.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...workItems.map((item) => ({
      url: `${base}/work/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...insights.map((item) => ({
      url: `${base}/insights/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...roles.map((role) => ({
      url: `${base}/careers/${role.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
  ];
}
