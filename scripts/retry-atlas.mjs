import fs from "node:fs";
import path from "node:path";

const ids = [
  "1484480974693-6ca0a8b6d1f7",
  "1434030216411-0b793f4b4173",
  "1504384308090-c894fdcc538d",
  "1522202176988-66273c2fd55f",
  "1516321497480-0c7ae4d23208",
];

for (const id of ids) {
  const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=78&fm=webp`;
  const res = await fetch(url, {
    headers: { "User-Agent": "CondaxSiteBuilder/1.0", Accept: "image/webp,image/*" },
  });
  console.log(id, res.status);
  if (!res.ok) continue;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) continue;
  const dest = path.join("public/images/work/atlas-cover.webp");
  fs.writeFileSync(dest, buf);
  console.log("wrote atlas", `${(buf.length / 1024).toFixed(0)}kb`, id);
  break;
}
