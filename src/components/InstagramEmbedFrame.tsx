import { useRef } from "react";
import { useInView } from "framer-motion";
import { instagramEmbedUrl } from "../lib/mediaUtils";

type InstagramEmbedFrameProps = {
  permalink: string;
  title: string;
  /** tile = cropped autoplay preview; lightbox = full playable embed */
  variant?: "tile" | "lightbox";
  className?: string;
  /** false = load immediately (for marquee tiles) */
  lazy?: boolean;
};

export function InstagramEmbedFrame({
  permalink,
  title,
  variant = "tile",
  className = "",
  lazy = true,
}: InstagramEmbedFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "120px", amount: 0.05 });
  const isReel = permalink.includes("/reel/");
  const src = instagramEmbedUrl(permalink);
  const shouldLoad = !lazy || inView || variant === "lightbox";

  const cropClass =
    variant === "lightbox"
      ? "absolute inset-0 h-full w-full border-0"
      : isReel
        ? "pointer-events-none absolute top-1/2 left-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-[48%] border-0"
        : "pointer-events-none absolute top-1/2 left-1/2 h-[240%] w-[240%] -translate-x-1/2 -translate-y-[42%] border-0";

  return (
    <div
      ref={ref}
      className={`relative h-full w-full min-h-[80px] overflow-hidden bg-zinc-200 ${className}`}
    >
      {shouldLoad ? (
        <iframe
          src={src}
          title={title}
          className={cropClass}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : null}
    </div>
  );
}