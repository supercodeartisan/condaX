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
    <main id="main-content" className="paddings mx-auto max-w-[980px] pt-40 pb-24 lg:pt-44">
      <Link href="/careers" className="text-[14px] text-neutral hover:text-cobalt">
        ← All careers
      </Link>
      <p className="mt-8 text-[13px] tracking-[0.14em] text-muted uppercase">
        {role.team} · {role.type}
      </p>
      <h1 className="font-display mt-4 text-[40px] leading-[1.12] font-light md:text-[56px]">
        {role.title}
      </h1>
      <p className="mt-4 text-[15px] text-neutral">{role.location}</p>
      <p className="mt-6 text-[18px] leading-relaxed text-neutral">{role.summary}</p>
      <PillLink href={`/careers/${role.slug}/apply`} variant="solid" className="mt-8">
        Apply for this role
      </PillLink>

      <section className="mt-16">
        <h2 className="font-display text-[28px] font-light md:text-[32px]">About the role</h2>
        <p className="mt-6 text-[16px] leading-relaxed text-neutral">{role.about}</p>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-[28px] font-light md:text-[32px]">What you&apos;ll do</h2>
        <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-neutral">
          {role.youWill.map((item) => (
            <li key={item} className="border-t border-hairline pt-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-[28px] font-light md:text-[32px]">
          What we&apos;re looking for
        </h2>
        <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-neutral">
          {role.youMight.map((item) => (
            <li key={item} className="border-t border-hairline pt-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-[28px] font-light md:text-[32px]">Nice to have</h2>
        <ul className="mt-6 space-y-3 text-[16px] leading-relaxed text-neutral">
          {role.nice.map((item) => (
            <li key={item} className="border-t border-hairline pt-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-[24px] border border-cobalt/15 bg-paper p-8">
        <h2 className="font-display text-[28px] font-light">Ready to apply?</h2>
        <p className="mt-2 text-neutral">
          Remote role with Condax - open internationally. Application includes LinkedIn, location,
          and a few role-specific questions. We hire for strong technical craft and clear English
          communication in interviews and client delivery.
        </p>
        <PillLink href={`/careers/${role.slug}/apply`} variant="solid" className="mt-6">
          Apply for {role.title}
        </PillLink>
      </section>
    </main>
  );
}
