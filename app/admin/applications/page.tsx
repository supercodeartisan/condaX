import type { Metadata } from "next";
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
      <div className="mx-auto max-w-lg rounded-3xl border border-hairline bg-surface p-6 sm:p-8">
        <h1 className="font-display text-[28px] font-medium text-ink">Applications admin</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral">
          Set <code className="rounded bg-warm px-1.5 py-0.5 text-ink">ADMIN_PASSWORD</code> in the
          environment to enable this page.
        </p>
      </div>
    );
  }

  if (!authed) {
    return <AdminApplicationsClient mode="login" />;
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
      const detail = err instanceof Error ? err.message : "";
      loadError =
        /nationality/i.test(detail)
          ? "Database is missing the nationality column. Run db/migrations/002_add_nationality.sql on Neon, then refresh."
          : "Could not load applications. Check DATABASE_URL and that db/schema.sql has been applied.";
    }
  }

  if (loadError) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 px-5 py-6 text-[15px] text-red-800">
        {loadError}
      </div>
    );
  }

  return <AdminApplicationsClient mode="list" applications={applications} />;
}
