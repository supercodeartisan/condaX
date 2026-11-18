import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ApplyForm } from "@/components/ApplyForm";
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
  return { title: role ? `Apply · ${role.title}` : "Apply" };
}

export default async function ApplyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-40 pb-24 lg:pt-44">
      <Link href={`/careers/${role.slug}`} className="text-[14px] text-neutral hover:text-cobalt">
        ← {role.title}
      </Link>
      <h1 className="font-display mt-8 text-[40px] leading-[1.1] font-light md:text-[52px]">
        Apply · {role.title}
      </h1>
      <p className="mt-4 text-[16px] text-neutral">
        {role.location}. LinkedIn, role questions, and CV required.
      </p>
      <div className="mt-10">
        <ApplyForm roleTitle={role.title} roleSlug={role.slug} questions={role.applyQuestions} />
      </div>
    </main>
  );
}
