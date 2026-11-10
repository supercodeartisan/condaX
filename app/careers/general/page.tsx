import type { Metadata } from "next";
import Link from "next/link";
import { ApplyForm } from "@/components/ApplyForm";

export const metadata: Metadata = { title: "General application" };

export default function GeneralApplicationPage() {
  return (
    <main id="main-content" className="paddings mx-auto max-w-[820px] pt-28 pb-24 lg:pt-32">
      <Link href="/careers" className="text-[14px] text-px-white-48 hover:text-px-lime">
        ← Careers
      </Link>
      <h1 className="font-display mt-8 text-[40px] leading-[1.1] font-light md:text-[52px]">
        General application
      </h1>
      <p className="mt-4 max-w-[46ch] text-[16px] text-px-white-64">
        No open role fits yet — still tell us what you do. Roles are remote and open internationally;
        we keep notes for when the next engagement needs your craft.
      </p>
      <div className="mt-10">
        <ApplyForm roleTitle="General application" />
      </div>
    </main>
  );
}
