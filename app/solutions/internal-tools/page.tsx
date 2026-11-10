import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = { title: "Internal tools" };

export default function InternalToolsPage() {
  return (
    <ServicePage
      title="Internal products your operators will open every morning."
      lede="Custom tools for intake, ops, and reporting — replacing the spreadsheet-and-inbox stack, with AI only where it saves time."
      showPlans
      offerings={[
        { title: "Intake & routing", text: "Requests land in one place, with the right person attached." },
        { title: "Ops consoles", text: "The status of the work, not another dashboard nobody trusts." },
        { title: "Permissions", text: "Roles that match how the company is actually organised." },
        { title: "AI in the flow", text: "Drafts, summaries, and search — behind the same login as the rest of the tool." },
      ]}
      stats={[
        { value: "Custom", label: "Built to the process you have", text: "Not a generic work OS with your logo." },
        { value: "Replace", label: "Sheets, inboxes, side chats", text: "If it does not retire a tool, we question the build." },
        { value: "Owners", label: "Named after handover", text: "Someone inside the company can change it next." },
        { value: "Worldwide", label: "Multi-timezone teams", text: "Designed for people who are not in the same room." },
      ]}
    />
  );
}
