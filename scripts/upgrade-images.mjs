/**
 * Replace generic/stock-feeling assets with more editorial, real-world photography.
 * Unsplash License — free commercial use.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("public/images");

/** Prefer empty spaces, materials, infrastructure, partial figures — not staged meetings. */
const replacements = [
  // Home
  {
    path: "home/careers-teaser.webp",
    id: "1497366811353-6870744d04b2",
    w: 1600,
    note: "Quiet office light — no staged team",
  },
  {
    path: "home/capabilities-strip.webp",
    id: "1461749280684-dccba630e2f6",
    w: 2000,
    note: "Real IDE / code on monitor — documentary",
  },
  {
    path: "home/engagement-build.webp",
    id: "1581092795360-fd1ca04f0952",
    w: 1600,
    note: "Engineering lab / hands on equipment",
  },

  // Careers — ditch whiteboard huddle
  {
    path: "careers/careers-hero.webp",
    id: "1497366754035-9c1daff2bff9",
    w: 2000,
    note: "Empty modern office geometry",
  },
  {
    path: "careers/careers-culture.webp",
    id: "1497366216548-37526070297c",
    w: 2000,
    note: "Sunlit empty desks — place, not people",
  },

  // About
  {
    path: "about/workspace-light.webp",
    id: "1604328698692-f76cee437097",
    w: 1800,
    note: "Interior material / corridor",
  },
  {
    path: "about/workspace-desk.webp",
    id: "1497215728101-856f4ea42174",
    w: 1800,
    note: "Keep calm desk if works",
  },
  {
    path: "about/workspace-architecture.webp",
    id: "1487958449943-2429e8be8625",
    w: 1800,
    note: "Concrete architecture",
  },
  {
    path: "about/delivery-wide.webp",
    id: "1446776653964-20c1d3a81b06",
    w: 2200,
    note: "Earth from space / networks — less neon city",
  },
  {
    path: "about/presence-remote.webp",
    id: "1486312338219-ce68d2c6f44d",
    w: 1200,
    note: "Solo laptop desk",
  },
  {
    path: "about/presence-focus.webp",
    id: "1516321318423-f06f85e504b3",
    w: 1200,
    note: "Over-shoulder working",
  },
  {
    path: "about/presence-craft.webp",
    id: "1581291518633-83b4ebd1d83e",
    w: 1200,
    note: "Design craft desk",
  },
  {
    path: "about/presence-clarity.webp",
    id: "1434030216411-0b793f4b4173",
    w: 1200,
    note: "Planning / papers",
  },

  // Services — kill abstract AI brain
  {
    path: "services/ai-for-teams.webp",
    id: "1555949963-aa79dcee981c",
    w: 1800,
    note: "Code editor close — real tooling",
  },
  {
    path: "services/custom-products.webp",
    id: "1551288049-bebda4e38f71",
    w: 1800,
    note: "Real analytics UI on screen",
  },
  {
    path: "services/advisory.webp",
    id: "1454165804606-c3d57bc86b40",
    w: 1800,
    note: "Documents / decision work",
  },
  {
    path: "services/engineering.webp",
    id: "1542831371-29b0f74f9713",
    w: 1800,
    note: "Code immersion",
  },
  {
    path: "services/cloud-architecture.webp",
    id: "1558494949-ef010cbdcc31",
    w: 1800,
    note: "Real data center corridor",
  },

  // Solutions
  {
    path: "solutions/copilots.webp",
    id: "1516321318423-f06f85e504b3",
    w: 1600,
    note: "Builder at laptop",
  },
  {
    path: "solutions/internal-tools.webp",
    id: "1460925895917-afdab827c52f",
    w: 1600,
    note: "Ops charts on desk",
  },
  {
    path: "solutions/automations.webp",
    id: "1581091226825-a6a2a5aee158",
    w: 1600,
    note: "Industrial / systems detail",
  },
  {
    path: "solutions/custom-apps.webp",
    id: "1512941937669-90a1b58e7e9c",
    w: 1600,
    note: "Phone product in hand",
  },

  // Work covers — more distinct
  {
    path: "work/atlas-cover.webp",
    id: "1434030216411-0b793f4b4173",
    w: 1600,
    note: "Enablement / workspace papers",
  },
  {
    path: "work/meridian-cover.webp",
    id: "1551288049-bebda4e38f71",
    w: 1600,
    note: "Ops dashboard",
  },
  {
    path: "work/kite-cover.webp",
    id: "1507842217343-583bb7270b66",
    w: 1600,
    note: "Knowledge / library stacks",
  },
  {
    path: "work/harbor-cover.webp",
    id: "1518770660439-4636190af475",
    w: 1600,
    note: "Circuit / systems",
  },

  // Insights
  {
    path: "insights/tool-or-build.webp",
    id: "1504639725590-34d0984388bd",
    w: 1600,
    note: "Terminal decision work",
  },
  {
    path: "insights/rollout-without-leaking.webp",
    id: "1563986768609-322da13575f3",
    w: 1600,
    note: "Security / lock on keys",
  },
  {
    path: "insights/copilot-vs-chatgpt.webp",
    id: "1461749280684-dccba630e2f6",
    w: 1600,
    note: "Custom software context",
  },

  // Shared
  {
    path: "shared/contact-atmosphere.webp",
    id: "1497366754035-9c1daff2bff9",
    w: 2000,
    note: "Empty office geometry",
  },
  {
    path: "shared/what-we-do-wide.webp",
    id: "1497366216548-37526070297c",
    w: 2200,
    note: "Wide empty workspace — place first",
  },
];

async function fetchOne(id, w) {
  const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=82&fm=webp`;
  const res = await fetch(url, {
    headers: {
      "User-Agent": "CondaxSiteBuilder/1.0",
      Accept: "image/webp,image/*",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 8000) throw new Error(`small ${buf.length}`);
  return { buf, url };
}

const failed = [];
for (const item of replacements) {
  const dest = path.join(root, item.path);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  try {
    const { buf } = await fetchOne(item.id, item.w);
    fs.writeFileSync(dest, buf);
    console.log(`ok  ${item.path} (${(buf.length / 1024).toFixed(0)}kb) — ${item.note}`);
  } catch (e) {
    console.error(`FAIL ${item.path} [${item.id}]: ${e.message}`);
    failed.push(item);
  }
}

if (failed.length) {
  console.log("\nRetrying failures with alternates…");
  const alts = {
    "home/engagement-build.webp": ["1517694712202-14dd9538aa97", "1555949963-aa79dcee981c"],
    "about/workspace-light.webp": ["1497366811353-6870744d04b2", "1497366754035-9c1daff2bff9"],
    "about/delivery-wide.webp": ["1451187580459-43490279c0fa", "1446776816750"],
    "solutions/automations.webp": ["1518770660439-4636190af475", "1558494949-ef010cbdcc31"],
  };
  for (const item of failed) {
    const ids = alts[item.path] || [];
    let done = false;
    for (const id of ids) {
      try {
        const { buf } = await fetchOne(id, item.w);
        fs.writeFileSync(path.join(root, item.path), buf);
        console.log(`ok  ${item.path} via alt ${id}`);
        done = true;
        break;
      } catch {
        /* next */
      }
    }
    if (!done) console.error(`STILL FAIL ${item.path}`);
  }
}
