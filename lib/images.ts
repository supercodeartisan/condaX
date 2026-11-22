/**
 * Local visual assets under /public/images.
 * Catalog matches files on disk only — orphan Unsplash plates were pruned in Phase 4.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sourceUrl: string | null;
  sourceSite: "Unsplash" | "Condax original";
  license: "Unsplash License" | "All rights reserved";
  photoId: string | null;
  usage: string;
};

const u = (photoId: string) => `https://unsplash.com/photos/${photoId}`;

export const images = {
  about: {
    workspaceArchitecture: {
      src: "/images/about/workspace-architecture.webp",
      alt: "Contemporary consulting office with glass conference rooms and dual-monitor workstations — empty of people",
      width: 1920,
      height: 1080,
      sourceUrl: null,
      sourceSite: "Condax original",
      license: "All rights reserved",
      photoId: null,
      usage: "About page hero visual - business office atmosphere (2026 refresh)",
    },
  },
  careers: {
    hero: {
      src: "/images/careers/careers-hero.webp",
      alt: "Engineering office with standing desks, dual monitors, and frosted meeting pods — empty of people",
      width: 1920,
      height: 1080,
      sourceUrl: null,
      sourceSite: "Condax original",
      license: "All rights reserved",
      photoId: null,
      usage: "Careers page hero visual - business office atmosphere (2026 refresh)",
    },
  },
  insights: {
    "tool-or-build": {
      src: "/images/insights/tool-or-build.webp",
      alt: "Laptop terminal screen for a buy-versus-build guide",
      width: 1400,
      height: 933,
      sourceUrl: u("1504639725590-34d0984388bd"),
      sourceSite: "Unsplash",
      license: "Unsplash License",
      photoId: "1504639725590-34d0984388bd",
      usage: "Insight cover - tool or build",
    },
    "rollout-without-leaking-data": {
      src: "/images/insights/rollout-without-leaking.webp",
      alt: "Padlock on a keyboard suggesting data protection",
      width: 1400,
      height: 933,
      sourceUrl: u("1563986768609-322da13575f3"),
      sourceSite: "Unsplash",
      license: "Unsplash License",
      photoId: "1563986768609-322da13575f3",
      usage: "Insight cover - rollout without leaking",
    },
    "copilot-vs-chatgpt": {
      src: "/images/insights/copilot-vs-chatgpt.webp",
      alt: "Person building software at a laptop",
      width: 1400,
      height: 933,
      sourceUrl: u("1516321318423-f06f85e504b3"),
      sourceSite: "Unsplash",
      license: "Unsplash License",
      photoId: "1516321318423-f06f85e504b3",
      usage: "Insight cover - copilot vs chatgpt",
    },
  },
} as const satisfies Record<string, Record<string, ImageAsset>>;

export type InsightSlug = keyof typeof images.insights;
