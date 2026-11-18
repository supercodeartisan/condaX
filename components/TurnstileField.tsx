"use client";

import { useEffect, useId, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        },
      ) => string;
      remove: (widgetId?: string) => void;
    };
    onCondaxTurnstileLoad?: () => void;
  }
}

const SCRIPT_ID = "cf-turnstile-script";

export function TurnstileField({ siteKey }: { siteKey: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const widgetId = useRef<string | null>(null);
  const reactId = useId();

  useEffect(() => {
    let cancelled = false;

    const setToken = (token: string) => {
      if (inputRef.current) inputRef.current.value = token;
    };

    const mount = () => {
      if (cancelled || !hostRef.current || !window.turnstile) return;
      if (widgetId.current) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch {
          /* ignore */
        }
        widgetId.current = null;
      }
      hostRef.current.innerHTML = "";
      widgetId.current = window.turnstile.render(hostRef.current, {
        sitekey: siteKey,
        theme: "light",
        callback: setToken,
        "expired-callback": () => setToken(""),
      });
    };

    if (window.turnstile) {
      mount();
    } else {
      const prev = window.onCondaxTurnstileLoad;
      window.onCondaxTurnstileLoad = () => {
        prev?.();
        if (!cancelled) mount();
      };
      if (!document.getElementById(SCRIPT_ID)) {
        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onCondaxTurnstileLoad";
        script.async = true;
        document.head.appendChild(script);
      } else if (window.turnstile) {
        mount();
      }
    }

    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch {
          /* ignore */
        }
      }
    };
  }, [siteKey, reactId]);

  return (
    <div className="min-h-[65px]">
      <input ref={inputRef} type="hidden" name="cf-turnstile-response" defaultValue="" />
      <div ref={hostRef} />
    </div>
  );
}

/** Invisible honeypot — leave empty. */
export function HoneypotField() {
  return (
    <div
      aria-hidden
      className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
      tabIndex={-1}
    >
      <label>
        Company website
        <input type="text" name="website" autoComplete="off" tabIndex={-1} defaultValue="" />
      </label>
    </div>
  );
}
