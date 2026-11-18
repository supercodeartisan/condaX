/**
 * Download curated Unsplash assets into public/images.
 * Unsplash License: https://unsplash.com/license — free for commercial use.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outRoot = path.join(root, "public", "images");

/** @type {{ file: string; dir: string; id: string; w: number; note: string }[]} */
const assets = [
  // Home / shared editorial
  { dir: "home", file: "capabilities-strip.webp", id: "1542831371-29b0f74f9713", w: 1800, note: "Code on screen — capabilities atmosphere" },
  { dir: "home", file: "careers-teaser.webp", id: "1522071820081-009f0129c71c", w: 1400, note: "Collaborative workspace — illustrative, not Condax staff" },
  { dir: "home", file: "engagement-build.webp", id: "1517694712202-14dd9538aa97", w: 1400, note: "Hands on laptop — build path" },

  // About
  { dir: "about", file: "workspace-light.webp", id: "1497366216548-37526070297c", w: 1600, note: "Bright modern office interior" },
  { dir: "about", file: "workspace-desk.webp", id: "1497215728101-856f4ea42174", w: 1600, note: "Calm desk with natural light" },
  { dir: "about", file: "workspace-architecture.webp", id: "1487958449943-2429e8be8625", w: 1600, note: "Architectural exterior / structure" },
  { dir: "about", file: "delivery-wide.webp", id: "1451187580459-43490279c0fa", w: 2000, note: "Earth at night / networks — delivery worldwide" },
  { dir: "about", file: "presence-remote.webp", id: "1486312338219-ce68d2c6f44d", w: 1200, note: "Laptop workspace — remote presence" },
  { dir: "about", file: "presence-focus.webp", id: "1555066931-4365d14bab8c", w: 1200, note: "Code on screen — focus" },
  { dir: "about", file: "presence-craft.webp", id: "1581291518633-83b4ebd1d83e", w: 1200, note: "Design desk craft" },
  { dir: "about", file: "presence-clarity.webp", id: "1454165804606-c3d57bc86b40", w: 1200, note: "Planning documents — clarity" },

  // Careers
  { dir: "careers", file: "careers-hero.webp", id: "1531482615713-2afd69097998", w: 1800, note: "Team at whiteboard — illustrative culture" },
  { dir: "careers", file: "careers-culture.webp", id: "1519389950473-47ba0277781c", w: 1600, note: "Open tech workspace" },

  // Services
  { dir: "services", file: "ai-for-teams.webp", id: "1677442136019-21780ecad995", w: 1600, note: "Abstract AI / neural visual (restrained)" },
  { dir: "services", file: "custom-products.webp", id: "1460925895917-afdab827c52f", w: 1600, note: "Analytics dashboard on desk" },
  { dir: "services", file: "advisory.webp", id: "1552664730-d307ca884978", w: 1600, note: "Workshop / sticky notes session" },
  { dir: "services", file: "engineering.webp", id: "1516321318423-f06f85e504b3", w: 1600, note: "Person coding at desk" },
  { dir: "services", file: "cloud-architecture.webp", id: "1558494949-ef010cbdcc31", w: 1600, note: "Data center corridor" },

  // Solutions
  { dir: "solutions", file: "copilots.webp", id: "1555949963-aa79dcee981c", w: 1400, note: "Code editor close-up" },
  { dir: "solutions", file: "internal-tools.webp", id: "1551288049-bebda4e38f71", w: 1400, note: "Dashboard charts" },
  { dir: "solutions", file: "automations.webp", id: "1518770660439-4636190af475", w: 1400, note: "Circuit / hardware detail" },
  { dir: "solutions", file: "custom-apps.webp", id: "1512941937669-90a1b58e7e9c", w: 1400, note: "Mobile product in hand" },

  // Work covers
  { dir: "work", file: "atlas-cover.webp", id: "1434030216411-0b793f4b4173", w: 1400, note: "Workspace planning — Atlas AI enablement" },
  { dir: "work", file: "meridian-cover.webp", id: "1551288049-bebda4e38f71", w: 1400, note: "Ops dashboard charts — Meridian" },
  { dir: "work", file: "kite-cover.webp", id: "1507842217343-583bb7270b66", w: 1400, note: "Library stacks — knowledge / Kite" },
  { dir: "work", file: "harbor-cover.webp", id: "1460925895917-afdab827c52f", w: 1400, note: "Workflow / analytics — Harbor" },

  // Insights covers
  { dir: "insights", file: "tool-or-build.webp", id: "1504639725590-34d0984388bd", w: 1400, note: "Laptop terminal — buy vs build" },
  { dir: "insights", file: "rollout-without-leaking.webp", id: "1563986768609-322da13575f3", w: 1400, note: "Security / lock abstract" },
  { dir: "insights", file: "copilot-vs-chatgpt.webp", id: "1516321318423-f06f85e504b3", w: 1400, note: "Focused builder at laptop" },

  // Contact / shared
  { dir: "shared", file: "contact-atmosphere.webp", id: "1497366811353-6870744d04b2", w: 1800, note: "Quiet office light — contact" },
  { dir: "shared", file: "what-we-do-wide.webp", id: "1486312338219-ce68d2c6f44d", w: 2000, note: "Wide workspace — what we do" },
];

function urlFor(id, w) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=78&fm=webp`;
}

async function downloadOne(asset) {
  const dir = path.join(outRoot, asset.dir);
  fs.mkdirSync(dir, { recursive: true });
  const dest = path.join(dir, asset.file);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 10_000) {
    console.log(`skip ${asset.dir}/${asset.file}`);
    return { ...asset, status: "skipped", bytes: fs.statSync(dest).size };
  }
  const url = urlFor(asset.id, asset.w);
  const res = await fetch(url, {
    headers: {
      "User-Agent": "CondaxSiteBuilder/1.0 (local asset mirror; Unsplash License)",
      Accept: "image/webp,image/*,*/*",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5_000) throw new Error(`too small ${buf.length} for ${asset.file}`);
  fs.writeFileSync(dest, buf);
  console.log(`ok   ${asset.dir}/${asset.file} (${(buf.length / 1024).toFixed(0)}kb)`);
  return { ...asset, status: "downloaded", bytes: buf.length, url };
}

const results = [];
for (const asset of assets) {
  try {
    results.push(await downloadOne(asset));
  } catch (err) {
    console.error(`FAIL ${asset.dir}/${asset.file}:`, err.message);
    results.push({ ...asset, status: "failed", error: err.message });
  }
}

const failed = results.filter((r) => r.status === "failed");
console.log(`\nDone. ok=${results.length - failed.length} failed=${failed.length}`);
if (failed.length) process.exitCode = 1;
