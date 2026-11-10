import type { Metadata } from "next";
import { PillLink } from "@/components/Buttons";

export const metadata: Metadata = { title: "Refer a client" };

export default function ReferPage() {
  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-28 pb-24 lg:pt-32">
      <h1 className="font-display text-[48px] leading-[1.1] font-light md:text-[64px]">
        Introduce a team that needs AI help or a custom product.
      </h1>
      <p className="mt-6 text-[18px] text-px-white-64">
        If the engagement lands, we will talk through a referral fee on the first year. Worldwide
        introductions welcome — start with a short note.
      </p>
      <PillLink href="/get-in-touch" variant="solid" className="mt-10">
        Make an introduction
      </PillLink>
    </main>
  );
}
