import { BrowserFrame, type WindowOs } from "@/components/visuals/BrowserFrame";
import {
  AtlasUi,
  BeaconUi,
  CanvasUi,
  HarborUi,
  KiteUi,
  LedgerUi,
  MeridianUi,
  PulseUi,
  RelayUi,
  SignalUi,
} from "@/components/work/product-uis";
import { cn } from "@/lib/cn";

const catalog: Record<
  string,
  {
    title: string;
    url: string;
    os: WindowOs;
    Visual: (props: { className?: string }) => React.ReactNode;
  }
> = {
  kite: {
    title: "Kite",
    url: "https://app.condaxits.com/kite/assistant",
    os: "dark",
    Visual: KiteUi,
  },
  beacon: {
    title: "Beacon",
    url: "https://app.condaxits.com/beacon/onboarding",
    os: "chrome",
    Visual: BeaconUi,
  },
  canvas: {
    title: "Canvas",
    url: "https://app.condaxits.com/canvas/inbox/4821",
    os: "macos",
    Visual: CanvasUi,
  },
  pulse: {
    title: "Pulse",
    url: "https://app.condaxits.com/pulse/triage",
    os: "chrome",
    Visual: PulseUi,
  },
  harbor: {
    title: "Harbor",
    url: "https://app.condaxits.com/harbor/flows/intake",
    os: "dark",
    Visual: HarborUi,
  },
  relay: {
    title: "Relay",
    url: "https://app.condaxits.com/relay/orders/10492",
    os: "macos",
    Visual: RelayUi,
  },
  ledger: {
    title: "Ledger",
    url: "https://app.condaxits.com/ledger/invoices/INV-88421",
    os: "chrome",
    Visual: LedgerUi,
  },
  signal: {
    title: "Signal",
    url: "https://app.condaxits.com/signal/qualify",
    os: "macos",
    Visual: SignalUi,
  },
  meridian: {
    title: "Meridian",
    url: "https://app.condaxits.com/meridian/board",
    os: "dark",
    Visual: MeridianUi,
  },
  atlas: {
    title: "Atlas",
    url: "https://app.condaxits.com/atlas/governance",
    os: "chrome",
    Visual: AtlasUi,
  },
};

/** Full-page product UI screenshot with distinct browser chrome per case. */
export function WorkScreenshot({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
  /** @deprecated Full pages are always shown - no crop. */
  compact?: boolean;
}) {
  const entry = catalog[slug] ?? catalog.kite;
  const { title, url, os, Visual } = entry;

  return (
    <BrowserFrame title={title} url={url} os={os} className={cn(className)}>
      <Visual />
    </BrowserFrame>
  );
}
