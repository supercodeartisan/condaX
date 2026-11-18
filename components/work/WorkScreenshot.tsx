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
    url: "https://app.kite.example/assistant",
    os: "macos",
    Visual: KiteUi,
  },
  beacon: {
    title: "Beacon",
    url: "https://app.beacon.example/onboarding",
    os: "windows",
    Visual: BeaconUi,
  },
  canvas: {
    title: "Canvas",
    url: "https://app.canvas.example/inbox/4821",
    os: "macos",
    Visual: CanvasUi,
  },
  pulse: {
    title: "Pulse",
    url: "https://ops.pulse.example/triage",
    os: "linux",
    Visual: PulseUi,
  },
  harbor: {
    title: "Harbor",
    url: "https://ops.harbor.example/flows/intake",
    os: "linux",
    Visual: HarborUi,
  },
  relay: {
    title: "Relay",
    url: "https://ops.relay.example/orders/10492",
    os: "windows",
    Visual: RelayUi,
  },
  ledger: {
    title: "Ledger",
    url: "https://finance.ledger.example/invoices/INV-88421",
    os: "windows",
    Visual: LedgerUi,
  },
  signal: {
    title: "Signal",
    url: "https://crm.signal.example/qualify",
    os: "macos",
    Visual: SignalUi,
  },
  meridian: {
    title: "Meridian",
    url: "https://ops.meridian.example/board",
    os: "linux",
    Visual: MeridianUi,
  },
  atlas: {
    title: "Atlas",
    url: "https://enablement.atlas.example/governance",
    os: "macos",
    Visual: AtlasUi,
  },
};

/** Full-page product UI screenshot with mixed OS window chrome. */
export function WorkScreenshot({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
  /** @deprecated Full pages are always shown — no crop. */
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
