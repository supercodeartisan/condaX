"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/cn";
import type { AdminNotificationItem } from "@/app/api/admin/notifications/route";

const SEEN_KEY = "condax-admin-notif-seen";
const DESKTOP_KEY = "condax-admin-notif-desktop";
const SEEDED_KEY = "condax-admin-notif-seeded";
const POLL_MS = 20_000;
const POLL_HIDDEN_MS = 45_000;

function readSeen(): Set<string> {
  try {
    const raw = localStorage.getItem(SEEN_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as string[];
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function writeSeen(ids: Set<string>) {
  const trimmed = [...ids].slice(-200);
  localStorage.setItem(SEEN_KEY, JSON.stringify(trimmed));
}

function desktopPrefOn(): boolean {
  return localStorage.getItem(DESKTOP_KEY) === "on";
}

function formatWhen(iso: string): string {
  const t = Date.parse(iso);
  if (!Number.isFinite(t)) return "";
  const diff = Date.now() - t;
  if (diff < 60_000) return "Just now";
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
  return new Date(t).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export function AdminNotifications() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<AdminNotificationItem[]>([]);
  const [seen, setSeen] = useState<Set<string>>(() => new Set());
  const [desktopOn, setDesktopOn] = useState(false);
  const [permission, setPermission] = useState<NotificationPermission | "unsupported">(
    "default",
  );
  const [error, setError] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const seededRef = useRef(false);
  const knownDesktopTags = useRef<Set<string>>(new Set());

  const unread = useMemo(
    () => items.filter((item) => !seen.has(item.id)),
    [items, seen],
  );

  const markAllRead = useCallback(() => {
    setSeen((prev) => {
      const next = new Set(prev);
      for (const item of items) next.add(item.id);
      writeSeen(next);
      return next;
    });
  }, [items]);

  const markOneRead = useCallback((id: string) => {
    setSeen((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      writeSeen(next);
      return next;
    });
  }, []);

  const fireDesktop = useCallback((item: AdminNotificationItem) => {
    if (typeof window === "undefined" || !("Notification" in window)) return;
    if (Notification.permission !== "granted") return;
    if (!desktopPrefOn()) return;
    if (knownDesktopTags.current.has(item.id)) return;
    knownDesktopTags.current.add(item.id);

    try {
      const n = new Notification(item.title, {
        body: item.body,
        tag: item.id,
      });
      n.onclick = () => {
        window.focus();
        router.push(item.href);
        n.close();
      };
    } catch {
      /* ignore browsers that throw on Notification ctor */
    }
  }, [router]);

  const fetchItems = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/notifications", { cache: "no-store" });
      if (res.status === 401) {
        setError(null);
        return;
      }
      if (!res.ok) {
        setError("Could not refresh notifications.");
        return;
      }
      const data = (await res.json()) as { items?: AdminNotificationItem[] };
      const next = Array.isArray(data.items) ? data.items : [];
      setItems(next);
      setError(null);

      if (!seededRef.current) {
        const alreadySeeded = localStorage.getItem(SEEDED_KEY) === "1";
        if (!alreadySeeded) {
          const seed = new Set(next.map((i) => i.id));
          writeSeen(seed);
          setSeen(seed);
          localStorage.setItem(SEEDED_KEY, "1");
          for (const i of next) knownDesktopTags.current.add(i.id);
          seededRef.current = true;
          return;
        }
        setSeen(readSeen());
        seededRef.current = true;
      }

      const currentSeen = readSeen();
      for (const item of next) {
        if (!currentSeen.has(item.id)) {
          fireDesktop(item);
        }
      }
    } catch {
      setError("Network error refreshing notifications.");
    }
  }, [fireDesktop]);

  useEffect(() => {
    setSeen(readSeen());
    setDesktopOn(desktopPrefOn());
    if (typeof window !== "undefined" && "Notification" in window) {
      setPermission(Notification.permission);
    } else {
      setPermission("unsupported");
    }
  }, []);

  useEffect(() => {
    void fetchItems();
    let timer = window.setInterval(
      () => void fetchItems(),
      document.hidden ? POLL_HIDDEN_MS : POLL_MS,
    );

    const resetInterval = () => {
      window.clearInterval(timer);
      timer = window.setInterval(
        () => void fetchItems(),
        document.hidden ? POLL_HIDDEN_MS : POLL_MS,
      );
    };

    const onVisibility = () => {
      if (!document.hidden) void fetchItems();
      resetInterval();
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [fetchItems]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function enableDesktop() {
    if (!("Notification" in window)) {
      setPermission("unsupported");
      return;
    }
    const result = await Notification.requestPermission();
    setPermission(result);
    if (result === "granted") {
      localStorage.setItem(DESKTOP_KEY, "on");
      setDesktopOn(true);
    } else {
      localStorage.setItem(DESKTOP_KEY, "off");
      setDesktopOn(false);
    }
  }

  function disableDesktop() {
    localStorage.setItem(DESKTOP_KEY, "off");
    setDesktopOn(false);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={
          unread.length > 0
            ? `Notifications, ${unread.length} unread`
            : "Notifications"
        }
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "relative inline-flex size-9 items-center justify-center rounded-full border border-hairline bg-surface text-charcoal transition-colors hover:border-cobalt hover:text-cobalt",
          open && "border-cobalt text-cobalt",
        )}
      >
        <BellIcon />
        {unread.length > 0 ? (
          <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-cobalt px-1 text-[10px] font-semibold text-white">
            {unread.length > 9 ? "9+" : unread.length}
          </span>
        ) : null}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label="Admin notifications"
          className="absolute top-[calc(100%+0.5rem)] right-0 z-50 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-hairline bg-paper shadow-[0_20px_60px_rgba(17,17,16,0.12)]"
        >
          <div className="flex items-center justify-between gap-3 border-b border-hairline px-4 py-3">
            <p className="text-[14px] font-medium text-ink">Notifications</p>
            <button
              type="button"
              className="text-[12px] font-medium text-cobalt hover:underline disabled:text-muted disabled:no-underline"
              disabled={unread.length === 0}
              onClick={markAllRead}
            >
              Mark all read
            </button>
          </div>

          <div className="border-b border-hairline px-4 py-3">
            {permission === "unsupported" ? (
              <p className="text-[12px] text-muted">Desktop alerts are not supported in this browser.</p>
            ) : desktopOn && permission === "granted" ? (
              <div className="flex items-center justify-between gap-2">
                <p className="text-[12px] text-neutral">Desktop alerts on</p>
                <button
                  type="button"
                  className="text-[12px] font-medium text-cobalt hover:underline"
                  onClick={disableDesktop}
                >
                  Turn off
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-2">
                <p className="text-[12px] text-neutral">
                  {permission === "denied"
                    ? "Desktop permission blocked in browser settings"
                    : "Get OS alerts for new apps & inquiries"}
                </p>
                {permission !== "denied" ? (
                  <button
                    type="button"
                    className="shrink-0 text-[12px] font-medium text-cobalt hover:underline"
                    onClick={() => void enableDesktop()}
                  >
                    Enable
                  </button>
                ) : null}
              </div>
            )}
          </div>

          <ul className="max-h-[22rem] overflow-y-auto">
            {items.length === 0 ? (
              <li className="px-4 py-8 text-center text-[13px] text-muted">No recent activity</li>
            ) : (
              items.map((item) => {
                const isUnread = !seen.has(item.id);
                return (
                  <li key={item.id} className="border-b border-hairline last:border-b-0">
                    <button
                      type="button"
                      className={cn(
                        "flex w-full flex-col gap-1 px-4 py-3 text-left transition-colors hover:bg-warm/70",
                        isUnread && "bg-cobalt/[0.04]",
                      )}
                      onClick={() => {
                        markOneRead(item.id);
                        setOpen(false);
                        router.push(item.href);
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-[13px] font-medium text-ink">{item.title}</span>
                        <span className="shrink-0 text-[11px] text-muted">
                          {formatWhen(item.createdAt)}
                        </span>
                      </div>
                      <span className="text-[12px] leading-snug text-neutral">{item.body}</span>
                      {isUnread ? (
                        <span className="mt-0.5 text-[11px] font-medium tracking-wide text-cobalt uppercase">
                          New
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })
            )}
          </ul>

          {error ? (
            <p className="border-t border-hairline px-4 py-2 text-[12px] text-red-700">{error}</p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 7H3s3 0 3-7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 19a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
