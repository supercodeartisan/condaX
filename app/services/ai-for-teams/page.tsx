import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { AIAssistant } from "@/components/visuals/AIAssistant";

export const metadata: Metadata = {
  title: "AI for teams",
  description:
    "AI enablement for operators - tool selection, pilots, policy, and training so teams can run AI without Condax in the room.",
};

const scope = encodeURIComponent("Help using AI tools");

export default function AiForTeamsPage() {
  return (
    <ServicePage
      visual={
        <div className="mx-auto grid max-w-[720px] gap-4 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div className="rounded-[20px] border border-hairline bg-paper p-5 md:p-6">
            <p className="text-[11px] tracking-[0.14em] text-muted uppercase">Pilot cohort</p>
            <p className="font-display mt-3 text-[28px] font-medium tracking-tight text-ink">
              Tools in the workflow
            </p>
            <ul className="mt-6 space-y-3 text-[14px] text-neutral">
              <li className="flex justify-between border-b border-hairline pb-3">
                <span>Writing & research</span>
                <span className="text-cobalt">Live</span>
              </li>
              <li className="flex justify-between border-b border-hairline pb-3">
                <span>Coding assistants</span>
                <span className="text-cobalt">Live</span>
              </li>
              <li className="flex justify-between">
                <span>Policy & tenancy</span>
                <span className="text-muted">Draft</span>
              </li>
            </ul>
          </div>
          <AIAssistant />
        </div>
      }
      title="AI enablement for the people who run the work."
      lede="Select the stack, place it in daily workflows, train operators, and leave governance they can apply without us in the room."
      cta="Start an AI pilot"
      ctaHref={`/get-in-touch?scope=${scope}`}
      fit={{
        bestWhen: [
          "You already have licenses - or are about to buy - and need adoption that sticks.",
          "Operators need clear rules for data, vendors, and what may leave the company.",
          "Leadership wants a measured pilot before a broader rollout.",
        ],
        notFor: [
          "Building a custom product when a tool cannot carry the job - that is Custom products.",
          "Open-ended transformation programs without a named pilot group.",
          "License procurement alone with no enablement or policy.",
        ],
      }}
      offeringsHeading="What you get"
      offeringsLede="A working pilot on live work, a practical policy, and operators who can continue without Condax."
      offerings={[
        {
          title: "Tool selection",
          text: "A short stack matched to workload, risk, and data requirements - not market momentum.",
        },
        {
          title: "Pilot rollout",
          text: "Accounts, prompts, and working sessions on live tasks - not presentation-only demos.",
        },
        {
          title: "Policy & data",
          text: "What may leave the company, what stays in your tenancy, and who is authorized to share what.",
        },
        {
          title: "Enablement",
          text: "Short, role-based training and playbooks your champions can reuse after handover.",
        },
      ]}
      processHeading="How it runs"
      processLede="Typical first pilots land in weeks - a named group, a clear success bar, then policy and handover."
      process={[
        {
          title: "Map",
          duration: "3-5 days",
          summary: "Locate the jobs AI should touch, the tools you already operate, and the pilot group.",
        },
        {
          title: "Choose",
          duration: "3-7 days",
          summary: "Recommend one or two tools that cover the real work - and say clearly what to ignore.",
        },
        {
          title: "Pilot",
          duration: "2-4 weeks",
          summary: "Operators use the tools on live work. We coach in-flow and measure against the success bar.",
        },
        {
          title: "Govern & hand over",
          duration: "1-2 weeks",
          summary: "Write the policy people can follow, train champions, and leave owners named.",
        },
      ]}
      relatedWork={["atlas", "kite"]}
      closingTitle="Share the workflows and tools in play."
      closingLede="Open contact from the hero to start with AI enablement preselected. We reply with a pilot recommendation within one business day."
    />
  );
}
