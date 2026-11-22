import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { DecisionMemo } from "@/components/visuals/DecisionMemo";

export const metadata: Metadata = {
  title: "Advisory",
  description:
    "Paid advisory sessions with a written recommendation: adopt AI tools, build a product, or defer.",
};

const scope = encodeURIComponent("Advisory / decision session");

export default function AdvisoryPage() {
  return (
    <ServicePage
      eyebrow="Service"
      visualTone="paper"
      visual={<DecisionMemo />}
      title="A clear recommendation: adopt, build, or defer."
      lede="Short paid sessions and a written memo when leadership is deciding between AI tools, a custom product, and waiting — grounded in your stack, data posture, and what operators can actually run."
      cta="Book a session"
      ctaHref={`/get-in-touch?scope=${scope}`}
      fit={{
        bestWhen: [
          "The decision is stuck between adopt, build, and defer.",
          "You need a written recommendation leadership can circulate.",
          "You want a time-boxed session - not an open-ended retainer.",
        ],
        notFor: [
          "Hands-on pilot rollout or product engineering - those are separate engagements.",
          "Ongoing general advisory without a defined decision.",
          "Procurement theater when the answer is already known.",
        ],
      }}
      offeringsHeading="What you get"
      offeringsLede="A decision aid with a defined outcome - not ongoing consulting by default."
      offerings={[
        {
          title: "Adopt vs build",
          text: "Whether general-purpose AI tools cover the job, or you need software of your own.",
        },
        {
          title: "Stack review",
          text: "What you already operate, what to discontinue, and what is worth adding.",
        },
        {
          title: "Risk & data",
          text: "Vendors, tenancy, retention, and a policy posture that remains enforceable once teams start using AI on live work.",
        },
        {
          title: "Sequence",
          text: "Pilot, then product, then stop - with owners attached and the next paid step only if justified.",
        },
      ]}
      processHeading="How it runs"
      processLede="Hours to days. You leave with a memo - and a next engagement only when one is warranted."
      process={[
        {
          title: "Brief",
          duration: "1-2 days",
          summary: "Lock the stuck decision, stakeholders, and what done means before we dig in.",
        },
        {
          title: "Read",
          duration: "2-5 days",
          summary: "Review stack, workflows, and constraints so the session is working time - not discovery on the call.",
        },
        {
          title: "Session",
          duration: "Half day to 2 days",
          summary: "Facilitated trade-offs until the recommendation is clear enough to write.",
        },
        {
          title: "Write-up",
          duration: "2-5 days",
          summary: "A decision memo: adopt, build, or defer - with constraints, sequence, and optional next proposal.",
        },
      ]}
      relatedWork={["atlas", "harbor"]}
      closingTitle="Tell us the decision that is stuck."
      closingLede="Open contact from the hero with advisory preselected. We confirm fit, inputs, and a session band before we start."
    />
  );
}
