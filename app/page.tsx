import { Capabilities } from "@/components/home/Capabilities";
import { CareersTeaser } from "@/components/home/CareersTeaser";
import { Engagement } from "@/components/home/Engagement";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { Method } from "@/components/home/Method";
import { Principles } from "@/components/home/Principles";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Capabilities />
      <Engagement />
      <Principles />
      <Method />
      <InsightsPreview />
      <CareersTeaser />
      <FinalCTA />
    </main>
  );
}
