import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { ApplyForm } from "@/components/ApplyForm";
import { BackLink } from "@/components/ui/BackLink";
import { getRole, roles } from "@/lib/careers";
import {
  getRequestGeoFromHeaders,
  locationPrefillFromGeo,
} from "@/lib/request-geo";

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

  const geo = getRequestGeoFromHeaders(await headers());
  const locationDefaults = locationPrefillFromGeo(geo);

  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-40 pb-24 lg:pt-44">
      <BackLink href={`/careers/${role.slug}`}>{role.title}</BackLink>
      <h1 className="font-display mt-8 text-[40px] leading-[1.1] font-light md:text-[52px]">
        Apply · {role.title}
      </h1>
      <p className="mt-4 text-[16px] text-neutral">
        {role.location}. LinkedIn, role questions, and CV required.
      </p>
      <div className="mt-10">
        <ApplyForm
          roleTitle={role.title}
          roleSlug={role.slug}
          questions={role.applyQuestions}
          locationDefaults={locationDefaults}
        />
      </div>
    </main>
  );
}
