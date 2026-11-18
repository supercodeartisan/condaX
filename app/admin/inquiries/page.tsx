import type { Metadata } from "next";
import Link from "next/link";
import { AdminInquiriesClient } from "@/components/admin/AdminInquiriesClient";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { listInquiriesLocal, listReferralsLocal } from "@/lib/local-store";

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
          <Link href="/admin/applications" className="font-medium text-cobalt underline underline-offset-4">
            /admin/applications
          </Link>{" "}
          first.
        </p>
      </div>
    );
  }

  const [inquiries, referrals] = await Promise.all([
    listInquiriesLocal(100),
    listReferralsLocal(100),
  ]);

  return <AdminInquiriesClient inquiries={inquiries} referrals={referrals} />;
}
