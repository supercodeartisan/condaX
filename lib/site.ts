export const site = {
  /** Short brand used in UI, titles, and conversation. */
  name: "Condax",
  /** Full legal / company name. */
  legalName: "Condax Information Technology Solutions",
  url: "https://www.condaxits.com",
  tagline: "AI, automation, and product engineering",
  description:
    "Condax Information Technology Solutions (Condax) designs and ships AI systems, workflow automation, and digital products for organizations worldwide.",
  footprint: "Worldwide",
  emails: {
    /** Public contact / forms */
    contact: "support@condaxits.com",
    /** Careers applications & hiring alerts */
    careers: "admin@condaxits.com",
  },
};

export type ProcessStep = {
  title: string;
  summary: string;
  duration: string;
  outcomes: string[];
  weDo: string[];
  youDo: string[];
};

export type OutcomeStripItem = {
  value: string;
  label: string;
};

export type UseCaseRow = {
  title: string;
  audience: string;
  text: string;
};

export const nav = {
  services: [
    {
      href: "/services/ai-for-teams",
      title: "AI for teams",
      description: "Select, deploy, and govern AI tools aligned to operational workflows.",
    },
    {
      href: "/services/custom-products",
      title: "Custom products",
      description: "Software designed around your workflows, with AI where it adds measurable value.",
    },
    {
      href: "/services/advisory",
      title: "Advisory",
      description: "A clear recommendation: adopt a tool, build a product, or defer.",
    },
  ],
  solutions: [
    {
      href: "/solutions/copilots",
      title: "Copilots & chat",
      description: "Assistants grounded in your data and operating context.",
      visual: "copilot",
    },
    {
      href: "/solutions/internal-tools",
      title: "Internal tools",
      description: "Operations systems your people can run every day.",
      visual: "internal",
    },
    {
      href: "/solutions/automations",
      title: "Automations",
      description: "Intelligent workflow automation across intake, routing, and customer operations.",
      visual: "auto",
    },
    {
      href: "/solutions/custom-apps",
      title: "Custom apps",
      description: "Customer-facing products with AI and automation built into the workflow.",
      visual: "apps",
    },
  ],
  links: [
    { href: "/work", label: "Work" },
    { href: "/about-us", label: "About us" },
    { href: "/careers", label: "Careers" },
    { href: "/insights", label: "Insights" },
  ],
};

export const footerNav = {
  company: [
    { href: "/work", label: "Work" },
    { href: "/about-us", label: "About us" },
    { href: "/what-we-do", label: "What we do" },
    { href: "/careers", label: "Careers" },
    { href: "/insights", label: "Insights" },
  ],
  services: [
    { href: "/services/ai-for-teams", label: "AI for teams" },
    { href: "/services/custom-products", label: "Custom products" },
    { href: "/services/advisory", label: "Advisory" },
  ],
  solutions: [
    { href: "/solutions/copilots", label: "Copilots & chat" },
    { href: "/solutions/internal-tools", label: "Internal tools" },
    { href: "/solutions/automations", label: "Automations" },
    { href: "/solutions/custom-apps", label: "Custom apps" },
  ],
};

export const capabilities = ["AI systems", "Workflow automation", "Custom products", "Structured handover"];

export const plans = {
  startSmall: {
    title: "Discovery and pilots",
    subtitle: "A short engagement to validate the path before full product investment.",
    items: [
      {
        name: "AI pilot",
        price: "Starting at $5k",
        text: "Select tools, place them in the workflow, and transfer operational ownership cleanly.",
      },
      {
        name: "Discovery & scoping",
        price: "Starting at $4k",
        text: "Adopt a tool or build custom software? A written recommendation and a build-ready brief.",
      },
      {
        name: "Advisory session",
        price: "$1k-$4k per session",
        text: "A structured working session on architecture, risk, or a pending technology decision.",
      },
    ],
  },
  ongoing: {
    title: "Delivery and partnership",
    subtitle: "When the path is clear - a product to ship, or continued delivery support.",
    items: [
      {
        name: "Custom product",
        price: "Quoted per scope",
        text: "Design and engineering for a tailored web, mobile, or internal product.",
      },
      {
        name: "Monthly partnership",
        price: "Starting at $4k/month",
        text: "Iteration, new automations, and support after the first release.",
      },
    ],
  },
};

export const workFilters = ["All work", "AI for customers", "Automation", "AI enablement"];

export const workItems = [
  {
    slug: "kite",
    name: "Kite",
    blurb:
      "Customer knowledge assistant with retrieval, citations, and a calm conversation surface.",
    tags: ["Customer AI", "Copilot"],
    industry: "AI for customers",
    chip: "Sample",
  },
  {
    slug: "beacon",
    name: "Beacon",
    blurb:
      "Guided customer onboarding that answers product questions from approved documentation.",
    tags: ["Customer AI", "Onboarding"],
    industry: "AI for customers",
    chip: "Sample",
  },
  {
    slug: "canvas",
    name: "Canvas",
    blurb:
      "Sales and support copilot that drafts replies from CRM context and policy sources.",
    tags: ["Customer AI", "Copilot"],
    industry: "AI for customers",
    chip: "Sample",
  },
  {
    slug: "pulse",
    name: "Pulse",
    blurb:
      "AI-assisted support triage that classifies intent, urgency, and ownership before a human steps in.",
    tags: ["Automation", "Customer AI"],
    industry: "Automation",
    chip: "Sample",
  },
  {
    slug: "harbor",
    name: "Harbor",
    blurb:
      "Intake, routing, and status automation with clear human checkpoints.",
    tags: ["Automation"],
    industry: "Automation",
    chip: "Sample",
  },
  {
    slug: "relay",
    name: "Relay",
    blurb:
      "Order-to-fulfillment automation that reduces handoffs across CRM, warehouse, and customer email.",
    tags: ["Automation", "Operations"],
    industry: "Automation",
    chip: "Sample",
  },
  {
    slug: "ledger",
    name: "Ledger",
    blurb:
      "Invoice intake automation - extract, validate, and route exceptions for finance review.",
    tags: ["Automation", "Finance"],
    industry: "Automation",
    chip: "Sample",
  },
  {
    slug: "signal",
    name: "Signal",
    blurb:
      "Lead qualification and routing automation with scoring rules and CRM write-back.",
    tags: ["Automation", "Sales"],
    industry: "Automation",
    chip: "Sample",
  },
  {
    slug: "meridian",
    name: "Meridian",
    blurb:
      "Operations queue and workflow visibility that replaces spreadsheet sprawl before automation expands.",
    tags: ["Automation", "Internal tool"],
    industry: "Automation",
    chip: "Sample",
  },
  {
    slug: "atlas",
    name: "Atlas",
    blurb:
      "Rolling out AI writing and coding tools with a documented usage policy and governance model.",
    tags: ["AI enablement"],
    industry: "AI enablement",
    chip: "Sample",
  },
];

export const insightTopicFilters = [
  "All topics",
  "AI",
  "Automation",
  "Customer AI",
  "Governance",
  "Workflow automation",
  "Product",
] as const;

export const insights = [
  {
    slug: "ai-governance-review-cadence",
    type: "Guide",
    topic: "Governance",
    date: "November 2026",
    title: "An AI governance review cadence operators will actually follow",
    dek: "Quarterly checkpoints that connect policy, tooling, and real usage - without turning governance into a slide deck nobody opens.",
    author: "Condax",
    role: "AI enablement",
  },
  {
    slug: "customer-ai-guardrails",
    type: "Guide",
    topic: "Customer AI",
    date: "October 2026",
    title: "Guardrails for customer-facing AI assistants",
    dek: "How to define allowed actions, escalation paths, and review steps before a copilot talks to customers in production.",
    author: "Condax",
    role: "Product engineering",
  },
  {
    slug: "workflow-automation-checkpoints",
    type: "Guide",
    topic: "Workflow automation",
    date: "October 2026",
    title: "Designing workflow automation with human checkpoints",
    dek: "Where to keep people in the loop so automation speeds up work without hiding errors until they reach a customer.",
    author: "Condax",
    role: "Advisory & delivery",
  },
  {
    slug: "tool-or-build",
    type: "Guide",
    topic: "AI",
    date: "September 2026",
    title: "Adopt a tool or build custom software",
    dek: "A practical framework for deciding when general-purpose AI tools are enough, and when you need software that lives in your stack.",
    author: "Condax",
    role: "Advisory & delivery",
  },
  {
    slug: "measuring-ai-pilot-success",
    type: "Article",
    topic: "AI",
    date: "September 2026",
    title: "Metrics that prove an AI pilot is worth scaling",
    dek: "Leading indicators for adoption, quality, and risk - and the thresholds we use before recommending a wider rollout.",
    author: "Condax",
    role: "AI enablement",
  },
  {
    slug: "rollout-without-leaking-data",
    type: "Guide",
    topic: "Governance",
    date: "August 2026",
    title: "Rolling out AI tools without compromising data governance",
    dek: "What to lock down before organization-wide access: data boundaries, vendors, and a policy people can follow.",
    author: "Condax",
    role: "AI enablement",
  },
  {
    slug: "retrieval-for-customer-answers",
    type: "Guide",
    topic: "Customer AI",
    date: "August 2026",
    title: "Retrieval quality for customer support answers",
    dek: "Corpus design, chunking, and evaluation habits that keep citations trustworthy when pressure on response time is high.",
    author: "Condax",
    role: "Product engineering",
  },
  {
    slug: "intake-routing-automation",
    type: "Guide",
    topic: "Automation",
    date: "July 2026",
    title: "Automating intake and routing without breaking SLA commitments",
    dek: "Classifiers, queues, and exception paths that respect service levels when volume spikes.",
    author: "Condax",
    role: "Advisory & delivery",
  },
  {
    slug: "vendor-due-diligence-for-ai",
    type: "Article",
    topic: "Governance",
    date: "July 2026",
    title: "Vendor due diligence for enterprise AI platforms",
    dek: "A practical questionnaire for security, data residency, subprocessors, and model behavior - before legal is already in contract review.",
    author: "Condax",
    role: "AI enablement",
  },
  {
    slug: "copilot-vs-chatgpt",
    type: "Guide",
    topic: "Product",
    date: "June 2026",
    title: "When a custom copilot outperforms a generic chat interface",
    dek: "The cases where wrapping your own data and workflow justifies a build - and the cases where it does not.",
    author: "Condax",
    role: "Product engineering",
  },
  {
    slug: "automation-roi-first-90-days",
    type: "Guide",
    topic: "Automation",
    date: "May 2026",
    title: "How to prove automation ROI in the first 90 days",
    dek: "Pick one workflow, instrument the baseline, and define the go/no-go metrics before expanding connectors.",
    author: "Condax",
    role: "Advisory & delivery",
  },
  {
    slug: "handover-checklist-for-ai-systems",
    type: "Checklist",
    topic: "Product",
    date: "May 2026",
    title: "A handover checklist for AI and automation systems",
    dek: "Owners, runbooks, eval suites, and access - what must transfer so operators can run the system without the builders.",
    author: "Condax",
    role: "Product engineering",
  },
  {
    slug: "choosing-human-checkpoints",
    type: "Article",
    topic: "Workflow automation",
    date: "April 2026",
    title: "Choosing where humans stay in the loop",
    dek: "A practical way to decide which steps stay manual, which can draft for review, and which can run unattended.",
    author: "Condax",
    role: "Advisory & delivery",
  },
];

export const team = [
  ["Ownership", "Named owners on every engagement"],
  ["Senior delivery", "Practitioners who can decide and ship"],
  ["Handover", "Your operators can run what we leave"],
  ["Independent guidance", "We recommend deferring or adopting existing tools when that is the better investment"],
];

export const values = [
  ["Useful", "If it does not change operational workflow within the first release cycle, it is not complete."],
  ["Clear", "Adopt versus build, with trade-offs documented for decision-makers."],
  ["Ship", "Pilots and products move from presentation into production workflows."],
  ["Careful with data", "Client information stays in the tenancy you choose. Models are a vendor, not a vault."],
  ["Accountable", "Clear owners and status you can rely on."],
  ["Candor", "We recommend adoption when it meets requirements, and decline build work when it does not."],
];

export const faqs = [
  {
    q: "Do you provide AI enablement, or only custom development?",
    a: "Both. We deploy AI tools the organization can adopt with governance and measurable usage, and we design and build custom products when a general-purpose tool is not enough. Many clients begin with a pilot, then decide.",
  },
  {
    q: "How do I know whether to adopt a tool or build a product?",
    a: "If a well-configured existing tool covers most of the job, we help you adopt it. If the work depends on your data, process, or customer experience, we scope a custom build. Advisory exists for that decision.",
  },
  {
    q: "How do you work with clients?",
    a: "Delivery is remote by default. English is our working language, and we schedule around your working day - whether you operate in one region or several.",
  },
  {
    q: "Do you work with international companies?",
    a: "Yes. Cross-border engagements are the default. We align to the client’s calendar and stakeholders, not a single local office hour.",
  },
  {
    q: "What happens to our data if we use AI?",
    a: "We prefer vendors and setups where your content stays in your workspace. We do not train public models on your files. Governance is part of an AI pilot, not an afterthought.",
  },
  {
    q: "How long is a typical first engagement?",
    a: "An AI pilot or advisory is usually measured in weeks. A custom product is scoped after that - typically months, not an open-ended retainer, unless you request ongoing partnership.",
  },
  {
    q: "Do you supplement or replace internal staff?",
    a: "We work alongside the people who will own the tools or product after we leave. Handover is part of the engagement.",
  },
];

export const comparison = [
  [
    "Starting point",
    "Deploy general-purpose AI tools without adoption planning, governance, or success metrics.",
    "A short pilot: the right tools, in the real workflow, with a documented policy.",
  ],
  [
    "Adopt vs build",
    "A strategy document without operational commitments.",
    "A written recommendation: adopt a tool, build a product, or defer.",
  ],
  [
    "Custom work",
    "A thin chat interface without integration into core workflows.",
    "Software that runs on your process and your data.",
  ],
  [
    "Delivery",
    "Long mobilization, heavy on-site presence, and slow time-to-value.",
    "Senior owners from week one - async-friendly, aligned to your working day.",
  ],
  [
    "Data",
    "Ad hoc use of consumer tools without data controls.",
    "Tenancy, vendors, and access agreed before the rollout.",
  ],
  [
    "After launch",
    "A presentation without operational transfer.",
    "Your operators can run it - or we continue on a defined monthly scope.",
  ],
];

export const sourceOptions = ["Word of mouth", "Google search", "AI search", "Social media", "Referral", "Other"];
export const scopeOptions = [
  "Help using AI tools",
  "A custom product",
  "Not sure - help me decide",
];
export const regionOptions = [
  "Americas",
  "Europe / UK",
  "Middle East / Africa",
  "Asia Pacific",
  "Other / worldwide",
];
export const investmentOptions = ["Under $10k", "$10k-$40k", "$40k-$120k", "$120k+", "Not sure yet"];
