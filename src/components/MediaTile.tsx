import { motion } from "framer-motion";
import type { MediaItem } from "../data/content";
import { useLightbox } from "../context/LightboxContext";
import { driveThumbnail, youtubeThumbnail } from "../lib/mediaUtils";

type MediaTileProps = {
  item: MediaItem;
  className?: string;
};

/**
 * Renders one MediaItem (image / instagram / youtube / drive) as a tile.
 * Click behavior:
 *  - image      → opens full-size in lightbox, no distortion
 *  - youtube    → shows real YouTube thumbnail, opens playable embed
 *  - drive      → shows thumbnail (image) or play icon (video), opens embed
 *  - instagram  → shows a neutral cover (no scrape-able thumbnail available),
 *                 opens the real official embed on click
 */
export function MediaTile({ item, className = "" }: MediaTileProps) {
  const { open } = useLightbox();
  const base = `group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-sm bg-[linear-gradient(160deg,#ececee,#f3f3f4)] ${className}`;

  if (item.kind === "image") {
    return (
      <motion.button
        type="button"
        whileHover={{ scale: 1.01 }}
        className={base}
        onClick={() => open({ type: "image", src: item.src, alt: item.alt })}
        aria-label={`Open ${item.alt}`}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <PlayBadge label="Open" />
      </motion.button>
    );
  }

  if (item.kind === "youtube") {
    return (
      <motion.button
        type="button"
        whileHover={{ scale: 1.01 }}
        className={base}
        onClick={() => open({ type: "youtube", url: item.url, caption: item.caption })}
        aria-label={item.caption ?? "Open video"}
      >
        <img
          src={youtubeThumbnail(item.url)}
          alt={item.caption ?? "YouTube video"}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <PlayIcon />
        {item.caption && <Caption text={item.caption} />}
      </motion.button>
    );
  }

  if (item.kind === "drive") {
    const isVideo = item.previewType === "video";
    return (
      <motion.button
        type="button"
        whileHover={{ scale: 1.01 }}
        className={base}
        onClick={() => open({ type: "drive", url: item.url, caption: item.caption })}
        aria-label={item.caption ?? "Open file"}
      >
        {!isVideo ? (
          <img
            src={driveThumbnail(item.url)}
            alt={item.caption ?? "Drive file"}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#1a1a1e,#2d2d35)]">
            <PlayIcon />
          </div>
        )}
        {item.caption && <Caption text={item.caption} />}
      </motion.button>
    );
  }

  // instagram — no thumbnail scraping is possible (Instagram blocks it),
  // so this shows a neutral branded cover. Swap in a real screenshot via
  // a future `coverSrc` field on the data item once you have one handy.
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.01 }}
      className={base}
      onClick={() => open({ type: "instagram", permalink: item.permalink, caption: item.caption })}
      aria-label={item.caption ?? "Open Instagram post"}
    >
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#f9ce34,#ee2a7b_50%,#6228d7)]">
        <InstagramGlyph />
      </div>
      {item.caption && <Caption text={item.caption} />}
    </motion.button>
  );
}

function PlayBadge({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-[10px] tracking-widest text-white uppercase opacity-0 backdrop-blur transition group-hover:opacity-100">
      {label}
    </span>
  );
}

function PlayIcon() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur transition group-hover:scale-110">
        <div className="ml-1 h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-white/90" />
      </div>
    </div>
  );
}

function InstagramGlyph() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="opacity-90">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="white" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="white" />
    </svg>
  );
}

function Caption({ text }: { text: string }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-3">
      <p className="text-[11px] leading-tight text-white/90">{text}</p>
    </div>
  );
}
