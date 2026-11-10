"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Curtain() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const t = window.setTimeout(() => setVisible(false), 720);
    return () => window.clearTimeout(t);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="animate-curtain-up pointer-events-none fixed inset-0 z-[80] bg-px-black"
    />
  );
}
