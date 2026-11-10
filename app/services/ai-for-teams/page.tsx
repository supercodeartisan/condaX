import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "AI for teams" };

export default function AiForTeamsPage() {
  return (
    <ServicePage
      title="AI tools your people will actually use."
      lede="We help you choose the stack, put it in the daily workflow, train the team, and set a policy they will follow — worldwide, remotely."
      cta="Start an AI pilot"
      processHeading="Engagement process"
      processLede="From mapping real work to a team that can run the tools without us. Typical first pilots land in weeks — not a multi-year transformation programme."
      offerings={[
        { title: "Tool selection", text: "ChatGPT, Claude, Cursor, and the rest — matched to the job, not the hype cycle." },
        { title: "Rollout", text: "Accounts, prompts, and working sessions so the team uses the tools on live work, not a demo." },
        { title: "Policy & data", text: "What may leave the company, what stays in your tenancy, and who is allowed to paste what." },
        { title: "Enablement", text: "Short training for operators, managers, and builders — in English, across time zones." },
      ]}
      process={[
        {
          title: "Map",
          duration: "3–5 days",
          summary:
            "We learn where work actually happens — systems, handoffs, and the tools you already pay for — before anyone buys another license.",
          outcomes: [
            "Current-state map of the jobs AI should touch",
            "Inventory of existing tools, access, and friction",
            "Named pilot group and success bar",
          ],
          weDo: [
            "Stakeholder interviews and workflow walkthroughs",
            "Stack and vendor scan against your constraints",
            "Draft pilot scope and risk flags",
          ],
          youDo: [
            "Introduce owners of the target workflows",
            "Share access to tools and sample (non-sensitive) work",
            "Confirm what “good” looks like for the pilot",
          ],
        },
        {
          title: "Choose",
          duration: "3–7 days",
          summary:
            "A small stack beats a catalogue. We recommend one or two tools that cover the real jobs — and say clearly what to ignore.",
          outcomes: [
            "Recommended tool stack with rationale",
            "Buy vs wait notes for each major option",
            "License and tenancy preferences written down",
          ],
          weDo: [
            "Compare vendors on fit, cost, data posture, and adoption risk",
            "Facilitate a short decision session with your leads",
            "Produce a one-page recommendation you can circulate",
          ],
          youDo: [
            "Decide who owns vendor and budget approvals",
            "Surface security or legal constraints early",
            "Approve the shortlist before rollout spend",
          ],
        },
        {
          title: "Pilot",
          duration: "2–4 weeks",
          summary:
            "A named group uses the tools on live work. We coach in the workflow, measure against the success bar, and cut what does not stick.",
          outcomes: [
            "Pilot running on real tasks, not demos",
            "Usage notes, wins, and drop-off points",
            "Go / adjust / stop recommendation",
          ],
          weDo: [
            "Configure accounts, prompts, and working patterns",
            "Office hours and pairing on live work",
            "Weekly readout against the success bar",
          ],
          youDo: [
            "Protect calendar time for the pilot group",
            "Bring real work into sessions",
            "Nominate an internal champion for each tool",
          ],
        },
        {
          title: "Policy",
          duration: "1–2 weeks",
          summary:
            "Before you scale licenses, we write what may leave the company, what stays in tenancy, and who is allowed to paste what.",
          outcomes: [
            "Practical AI / data policy your people can follow",
            "Vendor and tenancy decisions recorded",
            "Access roles and escalation path",
          ],
          weDo: [
            "Draft policy language in plain English",
            "Align with your security / legal reviewers",
            "Translate rules into day-to-day do’s and don’ts",
          ],
          youDo: [
            "Route the draft through security and legal",
            "Confirm approved vendors and tenancy choices",
            "Name the policy owner after we leave",
          ],
        },
        {
          title: "Train",
          duration: "1–2 weeks",
          summary:
            "Short enablement for operators, managers, and builders — so adoption survives after Condax steps back.",
          outcomes: [
            "Role-based training sessions delivered",
            "Prompt / workflow playbooks for daily use",
            "Internal owners ready to coach peers",
          ],
          weDo: [
            "Run focused workshops by role",
            "Leave reusable materials, not a slide archive",
            "Coach your champions to continue enablement",
          ],
          youDo: [
            "Assemble the right audiences",
            "Require attendance for the pilot cohort",
            "Schedule follow-up practice on live work",
          ],
        },
        {
          title: "Handover",
          duration: "2–5 days",
          summary:
            "Playbooks, owners, and a clear next step: stay on tools, extend the rollout, or scope a custom build.",
          outcomes: [
            "Handover pack with owners and playbooks",
            "License and access checklist",
            "Written next-step recommendation",
          ],
          weDo: [
            "Compile docs, owners, and open risks",
            "Final readout with leadership",
            "Optional proposal for the next paid step",
          ],
          youDo: [
            "Confirm internal ownership of each tool",
            "Accept or reject the next-step recommendation",
            "Close access Condax no longer needs",
          ],
        },
      ]}
      stats={[
        { value: "Weeks", label: "Typical first pilot", text: "Not a six-month transformation programme." },
        { value: "Your stack", label: "Tools you already pay for", text: "We start with what you have, then fill the gaps." },
        { value: "Your tenancy", label: "Data stays where you put it", text: "We do not train public models on your files." },
        { value: "Worldwide", label: "Remote by default", text: "English delivery, scheduled around your working day." },
      ]}
    />
  );
}
