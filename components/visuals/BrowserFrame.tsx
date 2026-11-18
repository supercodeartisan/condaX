import { cn } from "@/lib/cn";

export type WindowOs = "macos" | "windows" | "linux";

/** Multi-OS window chrome so product UIs read as captured screenshots. */
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
        "overflow-hidden border border-hairline bg-surface shadow-[0_20px_60px_rgba(17,17,16,0.10)]",
        os === "macos" && "rounded-[14px]",
        os === "windows" && "rounded-sm",
        os === "linux" && "rounded-md",
        className,
      )}
    >
      {os === "macos" ? <MacChrome title={title} url={url} /> : null}
      {os === "windows" ? <WindowsChrome title={title} url={url} /> : null}
      {os === "linux" ? <LinuxChrome title={title} url={url} /> : null}
      <div className="bg-paper">{children}</div>
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
        macOS
      </span>
    </div>
  );
}

function WindowsChrome({ title, url }: { title: string; url?: string }) {
  return (
    <div className="border-b border-[#d0d0d0] bg-[#f3f3f3]">
      <div className="flex items-center justify-between px-2 py-1.5">
        <div className="flex min-w-0 items-center gap-2 px-1">
          <span className="grid size-4 place-items-center rounded-[2px] bg-cobalt text-[8px] font-bold text-white">
            {title.slice(0, 1)}
          </span>
          <span className="truncate text-[11px] text-[#323130]">{title} — Microsoft Edge</span>
        </div>
        <div className="flex shrink-0 items-center text-[#323130]" aria-hidden>
          <span className="grid h-7 w-10 place-items-center text-[14px] leading-none">─</span>
          <span className="grid h-7 w-10 place-items-center text-[12px] leading-none">□</span>
          <span className="grid h-7 w-10 place-items-center text-[14px] leading-none hover:bg-[#e81123] hover:text-white">
            ×
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 border-t border-[#e5e5e5] bg-white px-2 py-1.5">
        <div className="flex gap-1 text-[11px] text-[#605e5c]" aria-hidden>
          <span className="px-1">←</span>
          <span className="px-1">→</span>
          <span className="px-1">↻</span>
        </div>
        <div className="min-w-0 flex-1 rounded-full bg-[#f3f3f3] px-3 py-1 text-[11px] text-[#605e5c] truncate">
          {url ?? `https://${title.toLowerCase()}.example`}
        </div>
        <span className="hidden text-[10px] font-medium tracking-wide text-muted uppercase sm:inline">
          Windows
        </span>
      </div>
    </div>
  );
}

function LinuxChrome({ title, url }: { title: string; url?: string }) {
  return (
    <div className="border-b border-[#2a2f3a] bg-[#1c212b] text-[#e8eaed]">
      <div className="flex items-center gap-3 px-3 py-2">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full border border-white/25 bg-[#e25c5c]" />
          <span className="size-2.5 rounded-full border border-white/25 bg-[#c8a44a]" />
          <span className="size-2.5 rounded-full border border-white/25 bg-[#5aa86c]" />
        </div>
        <div className="min-w-0 flex-1 rounded border border-white/10 bg-[#12161e] px-3 py-1 text-center text-[11px] text-white/55 truncate">
          {url ?? title}
        </div>
        <span className="hidden text-[10px] font-medium tracking-wide text-white/40 uppercase sm:inline">
          Linux
        </span>
      </div>
    </div>
  );
}
