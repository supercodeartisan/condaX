import Link from "next/link";
import { notFound } from "next/navigation";
import { PillLink } from "@/components/Buttons";
import { workItems } from "@/lib/site";

export default async function WorkCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = workItems.find((w) => w.slug === slug);
  if (!item) notFound();

  return (
    <main id="main-content" className="paddings mx-auto max-w-[980px] pt-28 pb-24 lg:pt-32">
      <p className="text-[13px] tracking-[0.14em] text-px-white-48 uppercase">{item.industry}</p>
      <h1 className="font-display mt-4 text-[40px] leading-[1.12] font-light md:text-[56px]">
        {item.name}
      </h1>
      <p className="mt-6 text-[18px] leading-relaxed text-px-white-64">{item.blurb}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span key={t} className="rounded-full border border-px-white-16 px-3 py-1 text-[13px]">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-12 aspect-[16/9] rounded-2xl bg-[#161814]" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Stat n="—" l="Headline metric" />
        <Stat n="—" l="Headline metric" />
        <Stat n="—" l="Headline metric" />
      </div>
      <p className="mt-12 text-[16px] leading-relaxed text-px-white-64">
        Sample case shell. Replace narrative, stills, and metrics with a live engagement when you
        have one. The page structure stays.
      </p>
      <div className="mt-16 rounded-[24px] bg-px-white-8 p-8">
        <h2 className="font-display text-[28px] font-light">Partner with us</h2>
        <p className="mt-2 text-px-white-48">Average response · one business day in your timezone</p>
        <PillLink href="/get-in-touch" variant="solid" className="mt-6">
          Let’s get started
        </PillLink>
      </div>
      <Link href="/work" className="mt-10 inline-block text-px-white-48 hover:text-px-lime">
        ← All work
      </Link>
    </main>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="border-t border-px-white-12 pt-4">
      <div className="font-display text-[36px] font-light">{n}</div>
      <div className="mt-1 text-[14px] text-px-white-48">{l}</div>
    </div>
  );
}
