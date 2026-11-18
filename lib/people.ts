export type PersonLink = {
  label: string;
  href: string;
};

export type Person = {
  name: string;
  role: string;
  bio: string;
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
    bio: "Rheden leads Condax’s product and delivery direction — from adopt-versus-build calls through architecture and production handover. He stays close to the engineering work so recommendations stay practical, and clients always have a senior owner accountable for outcomes.",
    links: [],
  },
  {
    name: "Art Franco",
    role: "Senior Software Engineer",
    initials: "AF",
    photo: "/images/about/people/art-franco.webp",
    bio: "Art builds the systems Condax ships — web products, internal tools, and AI-backed workflows with an eye on maintainability after handover. He focuses on clean implementation, reliable integrations, and the operational detail that keeps software usable in production.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/art-angelo-franco" },
      { label: "X", href: "https://x.com/ArtFrancoaw2g" },
    ],
  },
];
