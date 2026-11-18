"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Extra delay after the element enters the viewport (ms). */
  delay?: number;
  /** Observe once (default) or toggle with scroll. */
  once?: boolean;
};

type MotionState = "static" | "hidden" | "visible";

/**
 * GPU-friendly scroll reveal: opacity + translate only.
 * Starts as plain content (no opacity:0) until JS opts into motion -
 * so a failed/disabled script never leaves the page blank.
 */
export function Reveal({ children, className, delay = 0, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<MotionState>("static");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("visible");
      return;
    }

    const inView = () => {
      const rect = node.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    };

    if (inView()) {
      setState("visible");
      if (once) return;
    } else {
      setState("hidden");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          if (once) observer.disconnect();
          return;
        }
        if (!once) setState("hidden");
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn(
        state !== "static" && "motion-reveal",
        state === "visible" && "is-visible",
        className,
      )}
      style={
        delay
          ? ({ "--motion-delay": `${delay}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
