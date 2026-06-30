import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

type InstagramEmbedProps = {
  /** Full permalink, e.g. "https://www.instagram.com/reel/DZSfgg7PeXx/" */
  permalink: string;
  caption?: string;
  className?: string;
};

/**
 * Renders Instagram's official oEmbed skeleton. Does NOT load the script
 * itself — that happens once, globally, in PreloadSplash. This component
 * just needs to exist in the DOM with the right data attributes; the splash
 * calls window.instgrm.Embeds.process() once after every embed on the page
 * has mounted, which hydrates all of them in one pass.
 *
 * If you navigate client-side after the initial splash (not applicable here,
 * single-page scroll site) you'd need to re-call process() — not needed for
 * this site's structure since everything mounts up front.
 */
export function InstagramEmbed({
  permalink,
  caption,
  className = "",
}: InstagramEmbedProps) {
  const ref = useRef<HTMLQuoteElement>(null);

  // Safety: if this individual embed mounts after the global splash has
  // already fired (e.g. future lazy-loaded sections), try to process it too.
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [permalink]);

  return (
    <blockquote
      ref={ref}
      className={`instagram-media ${className}`}
      data-instgrm-permalink={`${permalink}${permalink.endsWith("/") ? "" : "/"}?utm_source=ig_embed&utm_campaign=loading`}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: 3,
        boxShadow:
          "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px auto",
        maxWidth: 540,
        minWidth: 326,
        width: "100%",
      }}
    >
      <div style={{ padding: 16 }}>
        <a
          href={permalink}
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#FFFFFF",
            lineHeight: 0,
            padding: 0,
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
            display: "block",
          }}
        >
          {caption ?? "View this post on Instagram"}
        </a>
      </div>
    </blockquote>
  );
}
