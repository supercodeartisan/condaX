export type Role = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
  youWill: string[];
  youMight: string[];
  nice: string[];
};

export const hiringProcess = [
  {
    step: "01",
    title: "Intro",
    text: "A short call — who you are, what you want next, and whether Condax is a fit. Remote, in English.",
  },
  {
    step: "02",
    title: "Craft",
    text: "A practical session for the role: portfolio walkthrough, pairing, or a small case. No trick questions.",
  },
  {
    step: "03",
    title: "Ways of working",
    text: "How you collaborate on a remote, international team — async habits, ownership, and client delivery.",
  },
  {
    step: "04",
    title: "Offer",
    text: "Compensation, start date, and how onboarding works. We aim to close within a few weeks.",
  },
];

export const whyJoin = [
  {
    title: "Real delivery, not bench theatre",
    text: "You work on client pilots and products — AI enablement and custom builds that have to ship.",
  },
  {
    title: "International by default",
    text: "A Philippines-based company with worldwide clients and remote colleagues. Where you live is not the filter.",
  },
  {
    title: "Senior bar, small team",
    text: "Few layers. You talk to clients and own outcomes. We hire people who can run without a crowd.",
  },
  {
    title: "English, worldwide clients",
    text: "One working language. International engagements from day one.",
  },
];

export const roles: Role[] = [
  {
    slug: "senior-full-stack-engineer",
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Build and ship custom web products, internal tools, and AI-backed features for international clients.",
    youWill: [
      "Own features end to end: API, UI, deploy, and handover docs.",
      "Ship custom products and internal tools in TypeScript / modern web stacks.",
      "Integrate model-backed features where they earn their place — with evals and guardrails.",
      "Work async with a remote delivery team across time zones.",
      "Sit with clients in English: demos, trade-offs, and delivery status.",
    ],
    youMight: [
      "5+ years building production web software.",
      "Strong TypeScript and one solid front-end framework (React / Next.js or similar).",
      "Comfortable owning scope without a large supporting cast.",
      "Happy in remote, multi-timezone delivery.",
    ],
    nice: [
      "Experience with LLM features, RAG, or agent tooling in production.",
      "Prior consulting, agency, or product-studio delivery.",
      "Reliable overlap with client and team hours, wherever you are based.",
    ],
  },
  {
    slug: "ai-engineer",
    title: "AI / LLM Engineer",
    team: "AI & Engineering",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Turn AI pilots into systems clients can run — copilots, retrieval, and automations grounded in their data, not a demo chatbot.",
    youWill: [
      "Design and build copilots, RAG, and workflow automations for real client stacks.",
      "Choose models and vendors against cost, latency, and data constraints.",
      "Add evals, logging, and human checkpoints before anything is called “done.”",
      "Partner with product and engineering so AI sits inside the product, not beside it.",
      "Help with AI-for-teams rollouts: what is safe to paste, what stays in tenancy.",
    ],
    youMight: [
      "Shipped at least one LLM or ML feature that real users depended on.",
      "Can explain buy vs build for AI without a slide deck.",
      "Solid software engineering habits — not only notebooks.",
      "Clear written English for async handovers across regions.",
    ],
    nice: [
      "Experience with enterprise data constraints or regulated environments.",
      "Familiarity with common AI tooling (OpenAI, Anthropic, vector DBs, eval harnesses).",
      "Comfortable mentoring client engineers after handover.",
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    team: "Design",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Design products and internal tools that operators and customers open every day — calm UI, clear flows, no concept theatre.",
    youWill: [
      "Own UX and UI from brief to production-ready specs.",
      "Design for AI surfaces (copilots, review steps, empty states) without gimmicks.",
      "Work tightly with engineers in a small delivery squad.",
      "Talk to clients and users; turn feedback into the next slice.",
      "Keep a coherent system across web and internal tools.",
    ],
    youMight: [
      "Portfolio of shipped digital products (not only marketing sites).",
      "Strong Figma craft and interaction thinking.",
      "Comfortable writing short specs and walking engineers through them.",
      "Remote collaboration across time zones.",
    ],
    nice: [
      "Experience in consulting or product studios.",
      "Light prototyping or front-end literacy.",
      "Interest in AI product patterns that stay usable under load.",
    ],
  },
  {
    slug: "product-manager",
    title: "Product Manager",
    team: "Product",
    location: "Remote · Worldwide",
    type: "Full-time · Contract",
    summary:
      "Keep engagements pointed at outcomes — pilots, scopes, and custom builds for clients who need a clear call between tools and software.",
    youWill: [
      "Run discovery and write scopes clients can say yes or no to.",
      "Facilitate buy vs build decisions with engineering and design.",
      "Own delivery cadence: demos, risks, and handover.",
      "Coordinate a remote international team without drowning people in process.",
      "Protect quality: say when a tool is enough, and when a build should wait.",
    ],
    youMight: [
      "Led product or delivery work in software, consulting, or a studio.",
      "Can write a short brief that engineers and designers respect.",
      "Calm with international clients in English.",
      "Bias to shipping over ceremony.",
    ],
    nice: [
      "Exposure to AI product or enablement work.",
      "Experience with remote, distributed teams.",
      "Comfortable with light commercial conversations (scope, timeline).",
    ],
  },
];

export function getRole(slug: string) {
  return roles.find((r) => r.slug === slug);
}
