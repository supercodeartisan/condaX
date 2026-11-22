import type { Metadata } from "next";
import { Capabilities } from "@/components/home/Capabilities";
import { Engagement } from "@/components/home/Engagement";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { Principles } from "@/components/home/Principles";
import { SelectedWork } from "@/components/home/SelectedWork";

export const metadata: Metadata = {
  title: "Condax · Digital products & AI engineering",
  description:
    "Condax helps organizations turn AI opportunities into production systems — strategy, automation, and custom software for real operational environments.",
};

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
