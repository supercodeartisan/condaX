import fs from "node:fs";
import path from "node:path";

const jobs = [
  {
    path: "public/images/careers/careers-hero.webp",
    ids: ["1497366811353-6870744d04b2", "1487958449943-2429e8be8625", "1556761175-5973dc0f32e7"],
  },
  {
    path: "public/images/shared/contact-atmosphere.webp",
    ids: ["1497215728101-856f4ea42174", "1487958449943-2429e8be8625", "1497366216548-37526070297c"],
  },
];

for (const job of jobs) {
  let ok = false;
  for (const id of job.ids) {
    const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&q=82&fm=webp`;
    const res = await fetch(url, {
      headers: { "User-Agent": "CondaxSiteBuilder/1.0", Accept: "image/webp,image/*" },
    });
    console.log(path.basename(job.path), id, res.status);
    if (!res.ok) continue;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 8000) continue;
    fs.mkdirSync(path.dirname(job.path), { recursive: true });
    fs.writeFileSync(job.path, buf);
    console.log("wrote", job.path, `${(buf.length / 1024).toFixed(0)}kb`);
    ok = true;
    break;
  }
  if (!ok) console.error("failed", job.path);
}
