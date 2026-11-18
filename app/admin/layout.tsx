import { AdminChrome } from "@/components/admin/AdminChrome";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const authed = await isAdminAuthenticated();
  return <AdminChrome authed={authed}>{children}</AdminChrome>;
}
