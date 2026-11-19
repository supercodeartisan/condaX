import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { listApplications } from "@/lib/db";
import { listInquiries } from "@/lib/inquiries-db";
import {
  isLocalDevStoreEnabled,
  listApplicationsLocal,
  listInquiriesLocal,
} from "@/lib/local-store";

export type AdminNotificationItem = {
  id: string;
  kind: "application" | "inquiry";
  title: string;
  body: string;
  href: string;
  createdAt: string;
};

const LIMIT = 30;

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const hasDb = Boolean(process.env.DATABASE_URL?.trim());
  const localOk = isLocalDevStoreEnabled();

  let applications: Awaited<ReturnType<typeof listApplications>> = [];
  let inquiries: Awaited<ReturnType<typeof listInquiries>> = [];

  try {
    if (hasDb) {
      try {
        [applications, inquiries] = await Promise.all([
          listApplications(LIMIT),
          listInquiries(LIMIT),
        ]);
      } catch (err) {
        if (!localOk) throw err;
        [applications, inquiries] = await Promise.all([
          listApplicationsLocal(LIMIT),
          listInquiriesLocal(LIMIT),
        ]);
      }
    } else if (localOk) {
      [applications, inquiries] = await Promise.all([
        listApplicationsLocal(LIMIT),
        listInquiriesLocal(LIMIT),
      ]);
    }
  } catch (err) {
    console.error("[admin] notifications list failed", err);
    return NextResponse.json({ error: "Could not load notifications." }, { status: 502 });
  }

  const appItems: AdminNotificationItem[] = applications.map((row) => ({
    id: `application:${row.id}`,
    kind: "application" as const,
    title: `Application · ${row.role_title}`,
    body: `${row.full_name} · ${row.email}`,
    href: "/admin/applications",
    createdAt: row.created_at,
  }));

  const inquiryItems: AdminNotificationItem[] = inquiries.map((row) => ({
    id: `inquiry:${row.id}`,
    kind: "inquiry" as const,
    title: row.kind === "referral" ? "Referral inquiry" : "Contact inquiry",
    body: `${row.name} · ${row.email}`,
    href: "/admin/inquiries",
    createdAt: row.created_at,
  }));

  const items = [...appItems, ...inquiryItems]
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, LIMIT);

  return NextResponse.json({
    items,
    serverTime: new Date().toISOString(),
  });
}
