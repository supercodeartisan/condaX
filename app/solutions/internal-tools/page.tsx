import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { BrowserFrame } from "@/components/visuals/BrowserFrame";
import { MeridianOps } from "@/components/visuals/MeridianOps";

export const metadata: Metadata = { title: "Internal tools" };

export default function InternalToolsPage() {
  return (
    <ServicePage
      eyebrow="Solution · Operations software"
      visual={
        <BrowserFrame title="Internal tools" url="ops.yourco.com / queue">
          <MeridianOps className="rounded-none border-0 shadow-none" />
        </BrowserFrame>
      }
      title="Internal applications for daily operations."
      lede="Custom tools for intake, operations, and reporting that retire the spreadsheet-and-inbox stack - with AI only where it removes copying, drafting, or search friction."
      cta="Map your operations"
      statsHeading="Built for operators, not demos"
      statsLede="If the release does not change how work moves through your organization within the first cycle, we question the build."
      outcomeStripHeading="What changes after launch"
      outcomeStrip={[
        { value: "One queue", label: "Requests with owners, not threads" },
        { value: "Live status", label: "Dashboards that match real work" },
        { value: "AI in flow", label: "Drafts and search behind the same login" },
      ]}
      useCasesHeading="Operations we replace"
      useCasesLede="Each engagement targets a defined process - intake, fulfillment, compliance, or reporting - with permissions that match how your organization is structured."
      useCases={[
        {
          title: "Intake and routing",
          audience: "Shared services",
          text: "Single front door for requests, auto-routing by category, SLA visibility, and audit trail instead of forwarded email.",
        },
        {
          title: "Ops consoles",
          audience: "Floor & field operators",
          text: "Live queues, assignments, and exceptions - designed for people who need status without opening five tools.",
        },
        {
          title: "Compliance and approvals",
          audience: "Risk & legal stakeholders",
          text: "Checkpoints, evidence attachments, and immutable history where judgment cannot be automated away.",
        },
        {
          title: "Reporting and exports",
          audience: "Leadership & finance",
          text: "Scheduled and on-demand views tied to the same system of record - not manual sheet merges every Friday.",
        },
      ]}
      offeringsHeading="Capabilities in the build"
      offeringsLede="Product-shaped delivery: discovery through handover, with automation and AI embedded only where metrics justify them."
      offerings={[
        {
          title: "Process discovery",
          text: "Walk the real workflow with practitioners - states, handoffs, and exceptions - before screens are drawn.",
        },
        {
          title: "Role-based access",
          text: "Permissions that mirror org structure, with clear separation between operators, approvers, and admins.",
        },
        {
          title: "Integrations",
          text: "CRM, ERP, identity, and chat - connected with defined ownership and failure behavior.",
        },
        {
          title: "AI assistance",
          text: "Summaries, classifications, and search across records - logged and bounded like any other feature.",
        },
      ]}
      processHeading="From inbox chaos to one system"
      processLede="We ship a first release operators can use daily, then expand modules only when adoption and metrics support it."
      process={[
        {
          title: "Map",
          duration: "1-2 weeks",
          summary:
            "Document the current path - tools, roles, and pain - and cut scope to the smallest release that retires one major workaround.",
          outcomes: ["Process map and pain priorities", "MVP feature list with acceptance criteria", "Integration inventory"],
          weDo: [
            "Facilitate workshops with practitioners",
            "Prototype critical states in lo-fi flows",
            "Flag build vs configure decisions in writing",
          ],
          youDo: [
            "Provide access to operators and sample requests",
            "Prioritize must-have vs later modules",
            "Name the executive sponsor for go-live",
          ],
        },
        {
          title: "Design",
          duration: "2-3 weeks",
          summary:
            "Interfaces for daily use - fast paths for operators, clear approval surfaces for stakeholders, empty states that teach the process.",
          outcomes: ["Key flows and UI package", "Accessibility and mobile constraints", "Content model for requests and records"],
          weDo: [
            "Test prototypes with real operators",
            "Align design with engineering on data model",
            "Document edge cases and error handling",
          ],
          youDo: [
            "Staff feedback sessions on schedule",
            "Decide branding and notification rules",
            "Approve design before build sprint",
          ],
        },
        {
          title: "Build",
          duration: "Weeks",
          summary:
            "Iterative delivery with demos on a fixed cadence. Automation and AI features ship only when wired to the same auth and audit model as the core app.",
          outcomes: ["Staging environment with integrations", "Demo cadence and risk register", "Production fundamentals scoped"],
          weDo: [
            "Ship features against acceptance criteria",
            "Instrument AI paths with logging",
            "Keep decision log current for handover",
          ],
          youDo: [
            "Attend demos and unblock decisions",
            "Supply test data and service accounts",
            "Raise operational constraints early",
          ],
        },
        {
          title: "Hand over",
          duration: "1-2 weeks",
          summary:
            "Named owners inside your organization receive repos, runbooks, and training. Optional partnership if you want iteration without hiring a full internal squad.",
          outcomes: ["Handover pack and on-call basics", "Admin and operator training", "Roadmap for phase two"],
          weDo: [
            "Transfer environments and access process",
            "Train admins and primary operators",
            "Document known limits and extension patterns",
          ],
          youDo: [
            "Assign product and technical owners",
            "Run parallel with legacy tools during cutover",
            "Accept handover and confirm support model",
          ],
        },
      ]}
      showPlans
      closingTitle="Replace a workaround, not add another tab."
      closingLede="Share the process that still lives in sheets or inboxes. We will outline an MVP, integration footprint, and whether AI belongs in the first release."
      closingCta="Scope internal tooling"
      stats={[
        {
          value: "Custom",
          label: "Mapped to your process",
          text: "Not a generic work-management platform with your logo applied.",
        },
        {
          value: "Replace",
          label: "Sheets, inboxes, side chats",
          text: "Every build should retire a tool people are patching around.",
        },
        {
          value: "Owners",
          label: "Named after handover",
          text: "Someone inside the organization can change workflows and permissions next.",
        },
        {
          value: "Async-ready",
          label: "Clear across handoffs",
          text: "Status and ownership stay visible for distributed operators and client stakeholders.",
        },
      ]}
    />
  );
}