import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { BrowserFrame } from "@/components/visuals/BrowserFrame";
import { MeridianOps } from "@/components/visuals/MeridianOps";

export const metadata: Metadata = { title: "Internal tools" };

const scope = encodeURIComponent("Workflow automation & internal tools");

export default function InternalToolsPage() {
  return (
    <ServicePage
      eyebrow="Solution"
      visual={
        <BrowserFrame os="macos" title="Internal tools" url="ops.yourco.com / queue">
          <MeridianOps className="rounded-none border-0 shadow-none" />
        </BrowserFrame>
      }
      title="Internal applications for daily operations."
      lede="Custom tools for intake, operations, and reporting that retire spreadsheet-and-inbox workarounds - with AI only where it removes copying or search friction."
      cta="Map your operations"
      ctaHref={`/get-in-touch?scope=${scope}`}
      fit={{
        bestWhen: [
          "A core process still lives in sheets, inboxes, or side chats.",
          "Operators need one queue with owners, status, and audit trail.",
          "You want a first release people can use daily before expanding modules.",
        ],
        notFor: [
          "Customer-facing revenue products - that is Custom apps.",
          "Automating a single handoff without a new system of record - see Automations.",
          "Generic work-management platforms with only branding applied.",
        ],
      }}
      offeringsHeading="What we build"
      offeringsLede="Product-shaped delivery from discovery through handover - AI only where metrics justify it."
      offerings={[
        {
          title: "Process discovery",
          text: "Walk the real workflow with practitioners - states, handoffs, exceptions - before screens are drawn.",
        },
        {
          title: "Role-based access",
          text: "Permissions that mirror org structure for operators, approvers, and admins.",
        },
        {
          title: "Integrations",
          text: "CRM, ERP, identity, and chat - connected with defined ownership and failure behavior.",
        },
        {
          title: "AI in flow",
          text: "Summaries, classifications, and search across records - logged and bounded like any other feature.",
        },
      ]}
      processHeading="How it runs"
      processLede="Ship a first release operators can use daily, then expand only when adoption supports it."
      process={[
        {
          title: "Map",
          duration: "1-2 weeks",
          summary: "Document the current path and cut scope to the smallest release that retires one major workaround.",
        },
        {
          title: "Design",
          duration: "2-3 weeks",
          summary: "Interfaces for daily use - fast paths for operators, clear approval surfaces for stakeholders.",
        },
        {
          title: "Build",
          duration: "Weeks",
          summary: "Iterative delivery with demos on a fixed cadence and the same auth model for any AI features.",
        },
        {
          title: "Hand over",
          duration: "1-2 weeks",
          summary: "Named owners receive repos, runbooks, and training. Optional partnership for iteration.",
        },
      ]}
      relatedWork={["meridian", "harbor"]}
      closingTitle="Replace a workaround, not add another tab."
      closingLede="Open contact from the hero with internal tools preselected. We outline an MVP, integrations, and whether AI belongs in v1."
    />
  );
}
