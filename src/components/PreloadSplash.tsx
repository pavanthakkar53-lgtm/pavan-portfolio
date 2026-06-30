import { useEffect, useState, type ReactNode } from "react";

// Never trap a visitor on a frozen loading screen — if Instagram's script
// is slow, blocked, or the venue wifi is bad, reveal the site anyway after
// this many milliseconds.
const MAX_WAIT_MS = 7000;
// Small buffer after the script loads, giving Instagram's own JS a moment
// to walk the DOM and hydrate every blockquote before we reveal everything.
const SETTLE_MS = 1200;

export function PreloadSplash({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let settled = false;

    const reveal = () => {
      if (settled) return;
      settled = true;
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
      setReady(true);
    };

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="instagram.com/embed.js"]',
    );

    if (existing) {
      // Script already present (e.g. fast refresh in dev) — just settle.
      window.setTimeout(reveal, SETTLE_MS);
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => window.setTimeout(reveal, SETTLE_MS);
      script.onerror = reveal; // script blocked/failed — reveal anyway
      document.body.appendChild(script);
    }

    // Hard safety net regardless of script outcome.
    const fallback = window.setTimeout(reveal, MAX_WAIT_MS);

    return () => window.clearTimeout(fallback);
  }, []);

  return (
    <>
      {!ready && (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-canvas">
          <div className="h-8 w-8 animate-spin rounded-full border border-ink/15 border-t-ink/60" />
          <p className="text-[11px] tracking-[0.3em] text-ink-faint uppercase">
            Loading the work
          </p>
        </div>
      )}
      {/*
        Content stays mounted (not unmounted) even before reveal, just
        visually hidden — this is required so every Instagram blockquote on
        the page, including ones below the fold, is already in the DOM for
        Embeds.process() to find and hydrate during the splash window.
      */}
      <div
        style={{ visibility: ready ? "visible" : "hidden" }}
        aria-hidden={!ready}
      >
        {children}
      </div>
    </>
  );
}
