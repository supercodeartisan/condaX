export const site = {
  /** Short brand used in UI, titles, and conversation. */
  name: "Condax",
  /** Full legal / company name. */
  legalName: "Condax Information Technology Solutions",
  url: "https://condax.solutions",
  tagline: "AI tools and custom products",
  description:
    "Condax Information Technology Solutions (Condax) is an international consulting company based in the Philippines. We help clients worldwide adopt AI tools and build custom products — delivered remotely, in English.",
  base: "Philippines",
  footprint: "Worldwide",
};

export type ProcessStep = {
  title: string;
  summary: string;
  duration: string;
  outcomes: string[];
  weDo: string[];
  youDo: string[];
};

export const nav = {
  services: [
    {
      href: "/services/ai-for-teams",
      title: "AI for teams",
      description: "Choose, adopt, and govern the tools your people will actually use.",
    },
    {
      href: "/services/custom-products",
      title: "Custom products",
      description: "Software built around your workflow — often with AI inside.",
    },
    {
      href: "/services/advisory",
      title: "Advisory",
      description: "A clear call: buy a tool, build a product, or wait.",
    },
  ],
  solutions: [
    {
      href: "/solutions/copilots",
      title: "Copilots & chat",
      description: "Assistants trained on your work, not a generic chatbot.",
      visual: "copilot",
    },
    {
      href: "/solutions/internal-tools",
      title: "Internal tools",
      description: "Ops systems your team can run every day.",
      visual: "internal",
    },
    {
      href: "/solutions/automations",
      title: "Automations",
      description: "Repeatable work, moved out of inboxes and spreadsheets.",
      visual: "auto",
    },
    {
      href: "/solutions/custom-apps",
      title: "Custom apps",
      description: "Web and mobile products built for your customers.",
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

export const capabilities = ["AI for teams", "Custom products", "Advisory", "Worldwide"];

export const plans = {
  startSmall: {
    title: "Start small",
    subtitle: "A short engagement to prove the path before you commit to a build.",
    items: [
      {
        name: "AI pilot",
        price: "Starting at $5k",
        text: "Pick tools, put them in the workflow, and leave the team able to run them.",
      },
      {
        name: "Discovery & scoping",
        price: "Starting at $4k",
        text: "Should you buy a tool or build? A written recommendation and a build-ready brief.",
      },
      {
        name: "Advisory session",
        price: "$1k–$4k per session",
        text: "A focused working session on stack, risk, or a decision that is stuck.",
      },
    ],
  },
  ongoing: {
    title: "Build and stay",
    subtitle: "When the path is clear — a product to ship, or a team to keep moving.",
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

export const workFilters = ["All work", "AI enablement", "Custom product", "Automation"];

export const workItems = [
  {
    slug: "atlas",
    name: "Atlas",
    blurb: "Rolled out AI writing and coding tools across a distributed ops team — with a simple policy, not a slide deck.",
    tags: ["AI enablement"],
    industry: "AI enablement",
    chip: "Sample",
  },
  {
    slug: "meridian",
    name: "Meridian",
    blurb: "A custom internal product that replaced three spreadsheets and a shared inbox for a services company.",
    tags: ["Internal tool", "Custom product"],
    industry: "Custom product",
    chip: "Sample",
  },
  {
    slug: "kite",
    name: "Kite",
    blurb: "A customer-facing assistant on top of the client’s own knowledge — scoped, built, and handed over to their team.",
    tags: ["Copilot", "Custom product"],
    industry: "Custom product",
    chip: "Sample",
  },
  {
    slug: "harbor",
    name: "Harbor",
    blurb: "Automations that moved intake, routing, and status updates out of email for a multi-timezone team.",
    tags: ["Automation"],
    industry: "Automation",
    chip: "Sample",
  },
];

export const insights = [
  {
    slug: "tool-or-build",
    type: "Guide",
    topic: "AI",
    date: "October 2026",
    title: "Buy the tool, or build the product?",
    dek: "A short way to decide whether ChatGPT-class tools are enough, or you need something that lives in your stack.",
    author: "Condax Team",
    role: "Studio",
  },
  {
    slug: "rollout-without-leaking-data",
    type: "Guide",
    topic: "AI",
    date: "September 2026",
    title: "Rolling out AI tools without leaking the company",
    dek: "What to lock down before you hand everyone a copilot: data, vendors, and a policy people will follow.",
    author: "Condax Team",
    role: "Studio",
  },
  {
    slug: "copilot-vs-chatgpt",
    type: "Guide",
    topic: "Product",
    date: "August 2026",
    title: "When a custom copilot beats a generic chat window",
    dek: "The cases where wrapping your own data and workflow is worth the build — and the cases where it is not.",
    author: "Condax Team",
    role: "Studio",
  },
];

export const team = [
  ["International", "Clients across regions"],
  ["Remote-first", "Delivery without on-site theatre"],
  ["English", "One working language"],
  ["Hands-on", "Pilots and products that ship"],
];

export const values = [
  ["Useful", "If it does not change how the team works next week, it is not done."],
  ["Clear", "Buy vs build, in plain language, with the trade-offs visible."],
  ["Ship", "Pilots and products leave the slide and enter the workflow."],
  ["Careful with data", "Client information stays in the tenancy you choose. Models are a vendor, not a vault."],
  ["Distributed", "Remote by default. We schedule to the client’s working day, not ours alone."],
  ["Straight", "We will say when a tool is enough, and when you should not hire us to build."],
];

export const faqs = [
  {
    q: "Do you help us use tools like ChatGPT, Claude, or Cursor — or do you only build software?",
    a: "Both. We roll out AI tools the team will actually use, and we design and build custom products when a generic tool is not enough. Many clients start with a pilot, then decide.",
  },
  {
    q: "How do I know if I should buy a tool or build a product?",
    a: "If a well-configured existing tool covers 80% of the job, we help you adopt it. If the work lives in your data, your process, or your customer experience, we scope a custom build. Advisory exists for that call.",
  },
  {
    q: "Where are you based?",
    a: "Condax Information Technology Solutions is based in the Philippines and works with clients internationally. Delivery is remote and in English — we align to your working day.",
  },
  {
    q: "Do you work with companies outside the Philippines?",
    a: "Yes. Condax is built for international work. Location is not a gate — we schedule around the client’s day.",
  },
  {
    q: "What happens to our data if we use AI?",
    a: "We prefer vendors and setups where your content stays in your workspace. We do not train public models on your files. Governance is part of an AI pilot, not an afterthought.",
  },
  {
    q: "How long is a typical first engagement?",
    a: "An AI pilot or advisory is usually measured in weeks. A custom product is scoped after that — months, not an open-ended retainer, unless you ask for ongoing partnership.",
  },
  {
    q: "Do you replace our internal team?",
    a: "No. We work beside the people who will own the tools or the product after we leave. Handover is part of the work.",
  },
];

export const comparison = [
  [
    "Starting point",
    "Hand everyone ChatGPT and hope it sticks.",
    "A short pilot: the right tools, in the real workflow, with a policy.",
  ],
  [
    "Buy vs build",
    "A slide that says “AI strategy.”",
    "A written call: adopt a tool, build a product, or wait.",
  ],
  [
    "Custom work",
    "A generic chatbot with your logo.",
    "Software that runs on your process and your data.",
  ],
  [
    "Delivery",
    "Local hours, on-site theatre, a long ramp.",
    "Remote from week one, in English — aligned to your working day.",
  ],
  [
    "Data",
    "Pasted into whatever model is handy.",
    "Tenancy, vendors, and access agreed before the rollout.",
  ],
  [
    "After launch",
    "A deck, then silence.",
    "Your team can run it — or we stay on a clear monthly scope.",
  ],
];

export const sourceOptions = ["Word of mouth", "Google search", "AI search", "Social media", "Referral", "Other"];
export const scopeOptions = [
  "Help using AI tools",
  "A custom product",
  "Not sure — help me decide",
];
export const regionOptions = [
  "Americas",
  "Europe / UK",
  "Middle East / Africa",
  "Asia Pacific",
  "Other / worldwide",
];
export const investmentOptions = ["Under $10k", "$10k–$40k", "$40k–$120k", "$120k+", "Not sure yet"];
