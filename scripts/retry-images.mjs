import fs from "node:fs";
import path from "node:path";

const retries = [
  { dir: "home", file: "capabilities-strip.webp", id: "1542831371-29b0f74f9713", w: 1800 },
  { dir: "work", file: "atlas-cover.webp", id: "1434030213-d0d5bd2f0b0e", w: 1400 },
];

for (const a of retries) {
  const url = `https://images.unsplash.com/photo-${a.id}?auto=format&fit=crop&w=${a.w}&q=78&fm=webp`;
  const res = await fetch(url, {
    headers: { "User-Agent": "CondaxSiteBuilder/1.0", Accept: "image/webp,image/*" },
    redirect: "follow",
  });
  console.log(a.file, res.status, url);
  if (!res.ok) continue;
  const buf = Buffer.from(await res.arrayBuffer());
  const dest = path.join("public/images", a.dir, a.file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  console.log("wrote", dest, `${(buf.length / 1024).toFixed(0)}kb`);
}
