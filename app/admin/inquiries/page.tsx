import type { Metadata } from "next";
import Link from "next/link";
import { AdminInquiriesClient } from "@/components/admin/AdminInquiriesClient";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { listInquiries, listReferrals } from "@/lib/inquiries-db";
import {
  isLocalDevStoreEnabled,
  listInquiriesLocal,
  listReferralsLocal,
} from "@/lib/local-store";

export const metadata: Metadata = {
  title: "Inquiries · Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminInquiriesPage() {
  const authed = await isAdminAuthenticated();

  if (!authed) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-hairline bg-surface p-6 sm:p-8">
        <h1 className="font-display text-[28px] font-medium text-ink">Admin · Inquiries</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral">
          Sign in at{" "}
          <Link
            href="/admin/applications"
            className="font-medium text-cobalt underline underline-offset-4"
          >
            /admin/applications
          </Link>{" "}
          first.
        </p>
      </div>
    );
  }

  let inquiries: Awaited<ReturnType<typeof listInquiries>> = [];
  let referrals: Awaited<ReturnType<typeof listReferrals>> = [];
  let loadError: string | null = null;

  try {
    if (process.env.DATABASE_URL?.trim()) {
      [inquiries, referrals] = await Promise.all([listInquiries(100), listReferrals(100)]);
    } else if (isLocalDevStoreEnabled()) {
      [inquiries, referrals] = await Promise.all([
        listInquiriesLocal(100),
        listReferralsLocal(100),
      ]);
    } else {
      loadError = "Set DATABASE_URL (Neon) or use local-dev store in development.";
    }
  } catch (err) {
    console.error("[admin] inquiries load failed", err);
    if (isLocalDevStoreEnabled()) {
      [inquiries, referrals] = await Promise.all([
        listInquiriesLocal(100),
        listReferralsLocal(100),
      ]);
    } else {
      loadError =
        "Could not load inquiries. Confirm DATABASE_URL and that inquiries/referrals tables from db/schema.sql exist on Neon.";
    }
  }

  if (loadError) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 px-5 py-6 text-[15px] text-red-800">
        {loadError}
      </div>
    );
  }

  return <AdminInquiriesClient inquiries={inquiries} referrals={referrals} />;
}
