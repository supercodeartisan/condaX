import type { Metadata } from "next";
import { InsightsListing } from "@/components/InsightsListing";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  return (
    <main id="main-content" className="pt-36 lg:pt-40">
      <div className="paddings mx-auto max-w-[1720px] pt-12 pb-16">
        <InsightsListing />
      </div>
    </main>
  );
}
