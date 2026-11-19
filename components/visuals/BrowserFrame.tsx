import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export type WindowOs = "macos" | "chrome" | "dark";

/** Distinct browser chrome so Work screenshots feel like real product captures. */
export function BrowserFrame({
  title,
  url,
  os = "macos",
  children,
  className = "",
}: {
  title: string;
  url?: string;
  os?: WindowOs;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden border bg-surface",
        os === "macos" &&
          "rounded-[16px] border-hairline shadow-[0_24px_70px_rgba(17,17,16,0.12)]",
        os === "chrome" &&
          "rounded-[12px] border-[#dadce0] shadow-[0_18px_50px_rgba(60,64,67,0.18)]",
        os === "dark" &&
          "rounded-[10px] border-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      {os === "macos" ? <MacChrome title={title} url={url} /> : null}
      {os === "chrome" ? <ChromeFrame title={title} url={url} /> : null}
      {os === "dark" ? <DarkChrome title={title} url={url} /> : null}
      <div className={cn(os === "dark" ? "bg-[#0f1419]" : "bg-paper")}>{children}</div>
    </div>
  );
}

function MacChrome({ title, url }: { title: string; url?: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-hairline bg-[#ecebe7] px-3 py-2.5 sm:px-4">
      <div className="flex items-center gap-1.5" aria-hidden>
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="min-w-0 flex-1 rounded-md border border-hairline bg-white/90 px-3 py-1 text-center text-[11px] text-muted truncate">
        {url ?? title}
      </div>
      <span className="hidden text-[10px] font-medium tracking-wide text-muted uppercase sm:inline">
        Safari
      </span>
    </div>
  );
}

function ChromeFrame({ title, url }: { title: string; url?: string }) {
  return (
    <div className="border-b border-[#dadce0] bg-[#dee1e6]">
      <div className="flex items-end gap-1 px-2 pt-2">
        <div className="flex min-w-0 items-center gap-2 rounded-t-lg bg-white px-3 py-2 shadow-[0_-1px_0_rgba(0,0,0,0.04)]">
          <ChromeMark />
          <span className="max-w-[12rem] truncate text-[11px] font-medium text-[#202124]">{title}</span>
          <span className="text-[12px] leading-none text-[#5f6368]" aria-hidden>
            ×
          </span>
        </div>
        <div className="mb-1.5 ml-1 hidden size-6 place-items-center rounded-full text-[14px] text-[#5f6368] sm:grid" aria-hidden>
          +
        </div>
      </div>
      <div className="flex items-center gap-2 bg-white px-2 py-1.5">
        <div className="flex items-center gap-0.5 text-[#5f6368]" aria-hidden>
          <span className="grid size-7 place-items-center rounded-full hover:bg-[#f1f3f4]">
            <ArrowLeftIcon className="size-3.5" />
          </span>
          <span className="grid size-7 place-items-center rounded-full hover:bg-[#f1f3f4]">
            <ArrowRightIcon className="size-3.5" />
          </span>
          <span className="grid size-7 place-items-center rounded-full text-[13px] hover:bg-[#f1f3f4]">
            ↻
          </span>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-[#f1f3f4] px-3 py-1.5">
          <span className="grid size-3.5 place-items-center rounded-full bg-[#34a853]/20 text-[8px] font-bold text-[#188038]">
            ✓
          </span>
          <span className="truncate text-[11px] text-[#202124]">{url ?? `https://app.condaxits.com/${title.toLowerCase()}`}</span>
        </div>
        <span className="hidden text-[10px] font-medium tracking-wide text-[#5f6368] uppercase sm:inline">
          Chrome
        </span>
      </div>
    </div>
  );
}

function DarkChrome({ title, url }: { title: string; url?: string }) {
  return (
    <div className="border-b border-white/10 bg-[#171c24] text-[#e8eaed]">
      <div className="flex items-center gap-3 px-3 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]/90" />
          <span className="size-2.5 rounded-full bg-[#febc2e]/90" />
          <span className="size-2.5 rounded-full bg-[#28c840]/90" />
        </div>
        <div className="min-w-0 flex-1 rounded-lg border border-white/10 bg-[#0f1419] px-3 py-1.5 text-center text-[11px] text-white/55 truncate">
          {url ?? title}
        </div>
        <span className="hidden text-[10px] font-medium tracking-wide text-white/35 uppercase sm:inline">
          Desktop
        </span>
      </div>
    </div>
  );
}

function ChromeMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden className="shrink-0">
      <circle cx="24" cy="24" r="20" fill="#fff" />
      <path fill="#EA4335" d="M24 4a20 20 0 0 1 17.32 10H24z" />
      <path fill="#FBBC05" d="M41.32 14A20 20 0 0 1 34 41.32L24 24z" />
      <path fill="#34A853" d="M34 41.32A20 20 0 0 1 6.68 14H24z" />
      <path fill="#4285F4" d="M6.68 14A20 20 0 0 1 24 4v20z" />
      <circle cx="24" cy="24" r="8" fill="#fff" />
      <circle cx="24" cy="24" r="6" fill="#4285F4" />
    </svg>
  );
}
