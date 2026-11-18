import type { Metadata } from "next";
import Link from "next/link";
import { AdminApplicationsClient } from "@/components/admin/AdminApplicationsClient";
import { isAdminAuthenticated, getAdminPassword } from "@/lib/admin-auth";
import { listApplications } from "@/lib/db";
import { isLocalDevStoreEnabled, listApplicationsLocal } from "@/lib/local-store";

export const metadata: Metadata = {
  title: "Applications · Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminApplicationsPage() {
  const passwordConfigured = Boolean(getAdminPassword());
  const authed = await isAdminAuthenticated();

  if (!passwordConfigured) {
    return (
      <main className="paddings mx-auto max-w-[720px] pt-28 pb-24">
        <h1 className="font-display text-[36px] font-light">Applications admin</h1>
        <p className="mt-4 text-[16px] text-neutral">
          Set <code className="text-ink">ADMIN_PASSWORD</code> in the environment to enable this
          page.
        </p>
      </main>
    );
  }

  if (!authed) {
    return (
      <main className="paddings mx-auto max-w-[480px] pt-28 pb-24">
        <h1 className="font-display text-[36px] font-light">Applications admin</h1>
        <p className="mt-3 text-[15px] text-neutral">Sign in to review career applications.</p>
        <AdminApplicationsClient mode="login" />
      </main>
    );
  }

  let applications: Awaited<ReturnType<typeof listApplications>> = [];
  let loadError: string | null = null;
  try {
    if (process.env.DATABASE_URL?.trim()) {
      applications = await listApplications(200);
    } else if (isLocalDevStoreEnabled()) {
      applications = await listApplicationsLocal(200);
    } else {
      loadError = "Set DATABASE_URL (Neon) or use local-dev store in development.";
    }
  } catch (err) {
    console.error(err);
    if (isLocalDevStoreEnabled()) {
      applications = await listApplicationsLocal(200);
    } else {
      loadError =
        "Could not load applications. Check DATABASE_URL and that db/schema.sql has been applied.";
    }
  }

  return (
    <main className="paddings mx-auto max-w-[1100px] pt-28 pb-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-[36px] font-light md:text-[44px]">Applications</h1>
          <p className="mt-2 text-[15px] text-neutral">
            {applications.length} recent · newest first
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/admin/inquiries" className="text-[14px] text-cobalt underline underline-offset-4">
            Inquiries & referrals
          </Link>
          <AdminApplicationsClient mode="logout" />
        </div>
      </div>
      {loadError ? (
        <p className="mt-8 text-[15px] text-neutral">{loadError}</p>
      ) : (
        <AdminApplicationsClient mode="list" applications={applications} />
      )}
    </main>
  );
}
