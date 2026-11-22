import type { Role } from "@/lib/careers";
import { site } from "@/lib/site";

const EMPLOYMENT_TYPE_MAP: Record<string, string> = {
  "Full-time": "FULL_TIME",
  Contract: "CONTRACTOR",
};

function employmentTypesForSchema(role: Role): string[] {
  return role.employmentTypes.map((t) => EMPLOYMENT_TYPE_MAP[t] ?? "OTHER");
}

export function roleJobPostingJsonLd(role: Role) {
  const description = [role.summary, ...role.about].join("\n\n");
  const jobUrl = `${site.url}/careers/${role.slug}`;
  const applyUrl = `${jobUrl}/apply`;

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description,
    identifier: {
      "@type": "PropertyValue",
      name: "Condax",
      value: role.slug,
    },
    datePosted: new Date().toISOString().slice(0, 10),
    hiringOrganization: {
      "@type": "Organization",
      name: site.legalName,
      sameAs: site.url,
    },
    employmentType: employmentTypesForSchema(role),
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: role.eligibleRegions.map((name) => ({
      "@type": name === "Europe" || name === "Latin America" ? "AdministrativeArea" : "Country",
      name,
    })),
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: role.location,
      },
    },
    directApply: true,
    url: applyUrl,
  };

  return base;
}