import { Capabilities } from "@/components/home/Capabilities";
import { Engagement } from "@/components/home/Engagement";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { Principles } from "@/components/home/Principles";
import { SelectedWork } from "@/components/home/SelectedWork";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Capabilities />
      <Engagement />
      <Principles />
      <SelectedWork />
      <FinalCTA />
    </main>
  );
}
