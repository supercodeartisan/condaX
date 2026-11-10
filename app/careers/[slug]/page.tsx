import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PillLink } from "@/components/Buttons";
import { getRole, roles } from "@/lib/careers";

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  return { title: role ? role.title : "Role" };
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  return (
    <main id="main-content" className="paddings mx-auto max-w-[980px] pt-28 pb-24 lg:pt-32">
      <Link href="/careers" className="text-[14px] text-px-white-48 hover:text-px-lime">
        ← All careers
      </Link>
      <p className="mt-8 text-[13px] tracking-[0.14em] text-px-white-48 uppercase">
        {role.team} · {role.type}
      </p>
      <h1 className="font-display mt-4 text-[40px] leading-[1.12] font-light md:text-[56px]">{role.title}</h1>
      <p className="mt-4 text-[15px] text-px-white-48">{role.location}</p>
      <p className="mt-6 text-[18px] leading-relaxed text-px-white-64">{role.summary}</p>
      <PillLink href={`/careers/${role.slug}/apply`} variant="solid" className="mt-8">
        Apply for this role
      </PillLink>

      <section className="mt-16">
        <h2 className="font-display text-[28px] font-light md:text-[32px]">What you&apos;ll do</h2>
        <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-px-white-64">
          {role.youWill.map((item) => (
            <li key={item} className="border-t border-px-white-12 pt-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-[28px] font-light md:text-[32px]">You might be a fit if</h2>
        <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-px-white-64">
          {role.youMight.map((item) => (
            <li key={item} className="border-t border-px-white-12 pt-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-[28px] font-light md:text-[32px]">Nice to have</h2>
        <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-px-white-64">
          {role.nice.map((item) => (
            <li key={item} className="border-t border-px-white-12 pt-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-[24px] border border-px-lime/15 bg-px-white-8 p-8">
        <h2 className="font-display text-[28px] font-light">Ready to apply?</h2>
        <p className="mt-2 text-px-white-48">
          Remote role with Condax — open internationally. We reply within a few business days.
        </p>
        <PillLink href={`/careers/${role.slug}/apply`} variant="solid" className="mt-6">
          Apply for {role.title}
        </PillLink>
      </section>
    </main>
  );
}
