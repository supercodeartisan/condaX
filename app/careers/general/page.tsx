import type { Metadata } from "next";
import { headers } from "next/headers";
import { ApplyForm } from "@/components/ApplyForm";
import { BackLink } from "@/components/ui/BackLink";
import { generalApplyQuestions } from "@/lib/careers";
import {
  getRequestGeoFromHeaders,
  locationPrefillFromGeo,
} from "@/lib/request-geo";

export const metadata: Metadata = { title: "General application" };

export default async function GeneralApplicationPage() {
  const geo = getRequestGeoFromHeaders(await headers());
  const locationDefaults = locationPrefillFromGeo(geo);

  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-40 pb-24 lg:pt-44">
      <BackLink href="/careers">Careers</BackLink>
      <h1 className="font-display mt-8 text-[40px] leading-[1.1] font-light md:text-[52px]">
        General application
      </h1>
      <p className="mt-4 max-w-[46ch] text-[16px] text-neutral">
        If no listed role matches your profile, you may still submit a general application. Roles are
        remote and open internationally; we retain strong profiles for future engagements. LinkedIn is
        required.
      </p>
      <div className="mt-10">
        <ApplyForm
          roleTitle="General application"
          roleSlug="general"
          questions={generalApplyQuestions}
          locationDefaults={locationDefaults}
        />
      </div>
    </main>
  );
}
