"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AdminNotifications } from "@/components/admin/AdminNotifications";
import { cn } from "@/lib/cn";

const links = [
  { href: "/admin/applications", label: "Applications", short: "Apps" },
  { href: "/admin/inquiries", label: "Inquiries", short: "Inbox" },
] as const;

export function AdminChrome({
  authed,
  children,
}: {
  authed: boolean;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="min-h-dvh bg-[linear-gradient(180deg,#fbfaf7_0%,#f3f0ea_100%)]">
      <header className="sticky top-0 z-40 border-b border-hairline/80 bg-paper/95 backdrop-blur-xl">
        <div className="paddings mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-3 sm:h-16">
          <div className="flex min-w-0 items-center gap-3 sm:gap-5">
            <Link
              href={authed ? "/admin/applications" : "/admin/applications"}
              className="shrink-0 font-display text-[17px] font-medium tracking-tight text-ink sm:text-[18px]"
            >
              Condax <span className="text-cobalt">Admin</span>
            </Link>
            {authed ? (
              <nav
                className="flex items-center gap-1 rounded-full bg-warm/80 p-1 ring-1 ring-hairline"
                aria-label="Admin"
              >
                {links.map((link) => {
                  const active =
                    pathname === link.href || pathname.startsWith(`${link.href}/`);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors sm:px-3.5 sm:text-[14px]",
                        active
                          ? "bg-surface text-ink shadow-sm ring-1 ring-hairline"
                          : "text-neutral hover:text-ink",
                      )}
                    >
                      <span className="sm:hidden">{link.short}</span>
                      <span className="hidden sm:inline">{link.label}</span>
                    </Link>
                  );
                })}
              </nav>
            ) : null}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {authed ? <AdminNotifications /> : null}
            <Link
              href="/"
              className="hidden rounded-full px-3 py-1.5 text-[13px] text-neutral hover:text-ink sm:inline"
            >
              View site
            </Link>
            {authed ? (
              <button
                type="button"
                className="rounded-full border border-hairline bg-surface px-3 py-1.5 text-[13px] font-medium text-charcoal hover:border-cobalt hover:text-cobalt sm:px-3.5"
                onClick={async () => {
                  await fetch("/api/admin/logout", { method: "POST" });
                  router.refresh();
                }}
              >
                Sign out
              </button>
            ) : null}
          </div>
        </div>
      </header>

      <main id="main-content" className="paddings mx-auto w-full max-w-[1200px] pt-6 pb-16 sm:pt-8 sm:pb-20">
        {children}
      </main>
    </div>
  );
}
