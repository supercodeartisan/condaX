export type PersonLink = {
  label: string;
  href: string;
  network: "linkedin" | "x";
};

export type Person = {
  name: string;
  role: string;
  bio: string;
  focus: string[];
  initials: string;
  photo: string;
  featured?: boolean;
  links?: PersonLink[];
};

/** Named people shown on About. */
export const people: Person[] = [
  {
    name: "Rheden David",
    role: "CEO & Lead Engineer",
    featured: true,
    initials: "RD",
    photo: "/images/about/people/rheden-david.webp",
    bio: "Leads Condax’s practice across AI strategy, product architecture, and delivery. Advises leadership on adopt-versus-build decisions and stays accountable through design, build, and production handover.",
    focus: ["AI & product strategy", "System architecture", "Executive delivery ownership"],
  },
  {
    name: "Art Franco",
    role: "Senior Software Engineer",
    initials: "AF",
    photo: "/images/about/people/art-franco.webp",
    bio: "Designs and ships production systems for Condax clients - web platforms, internal tools, and AI-backed workflows. Emphasizes maintainable architecture, reliable integrations, and operational readiness after launch.",
    focus: ["Full-stack platforms", "Integrations & automation", "Production reliability"],
    links: [
      {
        label: "LinkedIn",
        network: "linkedin",
        href: "https://www.linkedin.com/in/art-angelo-franco",
      },
      { label: "X", network: "x", href: "https://x.com/ArtFrancoaw2g" },
    ],
  },
];
