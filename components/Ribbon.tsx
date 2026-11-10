export function Ribbon({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg
        className="animate-ribbon absolute -right-[18%] -top-[30%] h-[160%] w-[120%] opacity-90"
        viewBox="0 0 1200 900"
        fill="none"
      >
        <defs>
          <linearGradient id="cd-ribbon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8ff6a" />
            <stop offset="28%" stopColor="#d4ff1f" />
            <stop offset="52%" stopColor="#1a1a16" />
            <stop offset="74%" stopColor="#e8e6e1" />
            <stop offset="100%" stopColor="#6e6e68" />
          </linearGradient>
          <filter id="cd-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
        </defs>
        <path
          d="M-80 220 C 180 40, 420 -40, 640 160 S 980 420, 1280 300"
          stroke="url(#cd-ribbon)"
          strokeWidth="70"
          strokeLinecap="round"
          filter="url(#cd-soft)"
          opacity="0.9"
        />
        <path
          d="M-40 640 C 260 780, 520 820, 760 560 S 1100 220, 1320 480"
          stroke="url(#cd-ribbon)"
          strokeWidth="92"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
      <div className="absolute inset-0 bg-px-black/20" />
    </div>
  );
}

export function RibbonShard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden>
      <svg className="animate-hero-slide h-full w-full" viewBox="0 0 640 420" fill="none">
        <defs>
          <linearGradient id="cd-shard" x1="0.1" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#e8ff6a" />
            <stop offset="32%" stopColor="#d4ff1f" />
            <stop offset="62%" stopColor="#141410" />
            <stop offset="100%" stopColor="#e8e6e1" />
          </linearGradient>
        </defs>
        <path
          d="M80 360 C 200 80, 360 40, 560 210 L 610 40 L 660 420 L 40 420 Z"
          fill="url(#cd-shard)"
          opacity="0.95"
        />
      </svg>
    </div>
  );
}
