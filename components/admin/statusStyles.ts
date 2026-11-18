export const APPLICATION_STATUSES = [
  "new",
  "screening",
  "interview",
  "offer",
  "hired",
  "rejected",
  "archived",
] as const;

export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number];

const STATUS_CLASS: Record<string, string> = {
  new: "bg-cobalt/12 text-cobalt ring-cobalt/20",
  screening: "bg-amber-500/12 text-amber-800 ring-amber-500/25",
  interview: "bg-violet-500/12 text-violet-800 ring-violet-500/25",
  offer: "bg-emerald-500/12 text-emerald-800 ring-emerald-500/25",
  hired: "bg-emerald-700/15 text-emerald-900 ring-emerald-700/25",
  rejected: "bg-red-500/10 text-red-800 ring-red-500/20",
  archived: "bg-neutral/10 text-neutral ring-hairline",
};

export function statusBadgeClass(status: string) {
  return STATUS_CLASS[status] ?? "bg-warm text-neutral ring-hairline";
}

export function formatStatusLabel(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function formatAdminDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
