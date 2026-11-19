import { z } from "zod";

export const contactInquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email required").max(200),
  source: z.string().trim().max(80).optional().nullable(),
  region: z.string().trim().max(80).optional().nullable(),
  description: z.string().trim().min(1, "Description is required").max(5000),
  scope: z.string().trim().min(1, "Scope is required").max(120),
  date: z.string().trim().max(200).optional().nullable(),
  investment: z.string().trim().max(80).optional().nullable(),
  referralCode: z.string().trim().max(40).optional().nullable(),
});

export const referralSchema = z.object({
  referrerName: z.string().trim().min(1, "Your name is required").max(120),
  referrerEmail: z.string().trim().email("Valid email required").max(200),
  organization: z.string().trim().min(1, "Organization is required").max(200),
  contactName: z.string().trim().min(1, "Contact name is required").max(120),
  contactEmail: z.string().trim().email("Valid contact email required").max(200),
  notes: z.string().trim().max(3000).optional().nullable(),
});

export type ContactInquiryInput = z.infer<typeof contactInquirySchema>;
export type ReferralInput = z.infer<typeof referralSchema>;

export type InquiryRow = {
  id: string;
  kind: "contact" | "referral";
  name: string;
  email: string;
  payload: Record<string, string | null>;
  referral_code: string | null;
  status: string;
  submitter_ip: string | null;
  geo_country: string | null;
  geo_region: string | null;
  geo_city: string | null;
  created_at: string;
};

export type ReferralRow = {
  id: string;
  code: string;
  referrer_name: string;
  referrer_email: string;
  organization: string;
  contact_name: string;
  contact_email: string;
  notes: string | null;
  submitter_ip: string | null;
  geo_country: string | null;
  geo_region: string | null;
  geo_city: string | null;
  created_at: string;
};
