"use client";

import { useEffect, useId, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: Record<string, unknown>,
      ) => string;
      remove: (widgetId?: string) => void;
      reset: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string;
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
      setToken("");
      // Disable Turnstile's built-in field — it would create a second
      // cf-turnstile-response and FormData.get() would often read our empty one first.
      widgetId.current = window.turnstile.render(hostRef.current, {
        sitekey: siteKey,
        theme: "light",
        size: "normal",
        appearance: "always",
        "response-field": false,
        responseField: false,
        callback: setToken,
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
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
    <div className="rounded-2xl border border-hairline bg-surface px-4 py-3">
      <p className="mb-2 text-[12px] font-medium tracking-wide text-muted uppercase">
        Security check
      </p>
      <input
        ref={inputRef}
        type="hidden"
        name="cf-turnstile-response"
        defaultValue=""
        autoComplete="off"
      />
      <div ref={hostRef} className="min-h-[65px]" />
      <p className="mt-2 text-[12px] leading-relaxed text-muted">
        Cloudflare verifies you are human. Most visitors pass automatically; if a checkbox appears,
        click it once.
      </p>
    </div>
  );
}

/** Prefer a non-empty Turnstile token from the form (or live widget). */
export function readTurnstileToken(form: HTMLFormElement): string {
  const values = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
    '[name="cf-turnstile-response"]',
  );
  for (const el of values) {
    const v = el.value?.trim();
    if (v) return v;
  }
  try {
    const live = window.turnstile?.getResponse?.();
    if (live?.trim()) return live.trim();
  } catch {
    /* ignore */
  }
  return "";
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
