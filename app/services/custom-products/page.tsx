import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { SaaSDashboard } from "@/components/visuals/SaaSDashboard";

export const metadata: Metadata = { title: "Custom products" };

export default function CustomProductsPage() {
  return (
    <ServicePage
      visual={<SaaSDashboard />}
      title="Software shaped around how you already work."
      lede="When a general-purpose AI tool is not enough, we design and build the product - web, mobile, or internal - and integrate AI only where it improves measurable outcomes."
      cta="Scope a build"
      showPlans
      processHeading="Engagement process"
      processLede="From a written adopt-versus-build recommendation to a product your operators can run. We ship a first release you can evaluate - then expand only when that release earns it."
      offerings={[
        { title: "Discovery", text: "The job to be done, the data you have, and a build that a tool cannot cover." },
        { title: "Design", text: "Interfaces for the people who will use this every day - for daily operators, not concept-only deliverables." },
        { title: "Engineering", text: "Web, mobile, APIs, and model-backed features that must run in production." },
        { title: "AI inside the product", text: "Copilots, search, and automations on your data - with the same care as the rest of the stack." },
        { title: "Launch & handover", text: "Your operators can run it. We continue only if you want a monthly partnership." },
      ]}
      process={[
        {
          title: "Frame",
          duration: "1-2 weeks",
          summary:
            "We pressure-test whether you should build at all. If a configured tool is enough, we say so in writing - before you fund a product.",
          outcomes: [
            "Buy vs build recommendation",
            "Problem statement and success criteria",
            "Risks, constraints, and no-gos",
          ],
          weDo: [
            "Discovery workshops with operators and sponsors",
            "Compare tool options against a custom build",
            "Produce a decision memo leadership can circulate",
          ],
          youDo: [
            "Share the jobs, data, and constraints that matter",
            "Name the decision-maker for build / no-build",
            "Approve the frame before scoping spend",
          ],
        },
        {
          title: "Scope",
          duration: "1-2 weeks",
          summary:
            "A shippable first release - not an unscoped platform. Clear backlog, timeline band, and commercial terms for executive approval.",
          outcomes: [
            "Scoped MVP with acceptance criteria",
            "Architecture sketch and integration list",
            "Fixed or capped commercial proposal",
          ],
          weDo: [
            "Cut scope to the smallest valuable slice",
            "Identify data, auth, and vendor dependencies",
            "Quote with assumptions and out-of-scope list",
          ],
          youDo: [
            "Prioritise must-haves vs later",
            "Confirm environments and access",
            "Sign off scope before design and build",
          ],
        },
        {
          title: "Design",
          duration: "2-4 weeks",
          summary:
            "Flows and UI against real users in your company or market - calm enough to use every day, clear enough to hand to engineering.",
          outcomes: [
            "Key flows and interaction model",
            "Production-ready UI specs",
            "Validated empty states and edge cases",
          ],
          weDo: [
            "User research with your operators or customers",
            "Wireframes → high-fidelity UI",
            "Design reviews with engineering in the room",
          ],
          youDo: [
            "Provide access to users for feedback",
            "Decide brand and content constraints early",
            "Approve the design package for build",
          ],
        },
        {
          title: "Build",
          duration: "Weeks → months",
          summary:
            "Engineering in the open: demos on a fixed cadence, trade-offs visible, AI features only where they earn their place in production.",
          outcomes: [
            "Working software in a shared environment",
            "Regular demos and risk register",
            "Instrumented AI features where scoped",
          ],
          weDo: [
            "Ship iteratively with clear owners",
            "Integrate APIs, auth, and model vendors carefully",
            "Keep docs and decisions current as we go",
          ],
          youDo: [
            "Attend demos and unblock decisions quickly",
            "Provide test data and staging access",
            "Raise operational constraints as they appear",
          ],
        },
        {
          title: "Prove",
          duration: "1-3 weeks",
          summary:
            "It runs on real data and real users before we call it done. We measure against the acceptance criteria from scope.",
          outcomes: [
            "UAT against agreed criteria",
            "Performance, access, and data checks",
            "Launch readiness checklist",
          ],
          weDo: [
            "Support structured UAT and bug triage",
            "Harden logging, evals, and fallbacks for AI paths",
            "Document known limits before go-live",
          ],
          youDo: [
            "Run UAT with the people who will own it",
            "Sign acceptance or list blocking issues",
            "Confirm go-live window and comms",
          ],
        },
        {
          title: "Hand over",
          duration: "1-2 weeks",
          summary:
            "Docs, access, runbooks, and the people who own it next. We stay only if you want a clear monthly partnership.",
          outcomes: [
            "Handover pack and runbooks",
            "Access and vendor inventory",
            "Optional support / partnership proposal",
          ],
          weDo: [
            "Transfer repos, environments, and secrets process",
            "Train operators and internal engineers",
            "Close Condax access that is no longer needed",
          ],
          youDo: [
            "Name product and technical owners",
            "Accept handover and archive decisions",
            "Choose stay / pause / later expansion",
          ],
        },
      ]}
      stats={[
        { value: "Scoped", label: "Quoted per build", text: "Defined scope, not open-ended staff augmentation." },
        { value: "Weeks → months", label: "From first release to launch", text: "Pace without skipping the decision to build." },
        { value: "Your workflow", label: "Mapped to your operating model", text: "The product follows how you already operate - not a white-labeled template." },
        { value: "Handover", label: "Your operators can run it", text: "Documentation, owners, and production fundamentals included." },
      ]}
    />
  );
}
