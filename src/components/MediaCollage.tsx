import type { MediaItem } from "../data/content";
import { useLightbox } from "../context/LightboxContext";
import {
  isInstagramReel,
  isPlayableMedia,
  isPortraitMedia,
  mediaCaption,
  mediaPosterUrl,
  toLightboxItem,
} from "../lib/mediaUtils";

type MediaCollageProps = {
  items: MediaItem[];
  className?: string;
};

function PlayOverlay() {
  return (
    <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-ink">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </span>
  );
}

function InstagramPlaceholder({ reel }: { reel: boolean }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-700 to-zinc-500 p-3">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-90">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" />
      </svg>
      <span className="text-center text-[9px] tracking-wide text-white/80 uppercase">
        {reel ? "Reel" : "Post"}
      </span>
    </div>
  );
}

function CollageCell({ item }: { item: MediaItem }) {
  const { open } = useLightbox();
  const caption = mediaCaption(item);
  const portrait = isPortraitMedia(item);
  const square = item.kind === "instagram" && !isInstagramReel(item);
  const playable = isPlayableMedia(item);
  const poster = mediaPosterUrl(item);

  const sizeClass = portrait
    ? "w-[120px] md:w-[140px]"
    : square
      ? "w-[130px] md:w-[150px]"
      : "w-[190px] md:w-[220px]";

  const aspectClass = portrait
    ? "aspect-[9/16]"
    : square
      ? "aspect-square"
      : "aspect-[4/3]";

  return (
    <button
      type="button"
      onClick={() => open(toLightboxItem(item))}
      className={`${sizeClass} ${aspectClass} relative block shrink-0 cursor-zoom-in overflow-hidden rounded-sm bg-zinc-200`}
      aria-label={caption}
    >
      {poster ? (
        <img
          src={poster}
          alt={caption}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : item.kind === "instagram" ? (
        <InstagramPlaceholder reel={isInstagramReel(item)} />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-zinc-300 p-2 text-center text-[10px] text-ink-muted">
          {caption}
        </div>
      )}
      {playable && <PlayOverlay />}
    </button>
  );
}

export function MediaCollage({ items, className = "" }: MediaCollageProps) {
  if (items.length === 0) {
    return (
      <div
        className={`flex min-h-[280px] items-center justify-center rounded-lg bg-zinc-100 ${className}`}
      >
        <p className="text-[11px] tracking-[0.2em] text-ink-faint uppercase">
          No media yet
        </p>
      </div>
    );
  }

  return (
    <div
      className={`flex max-h-[72vh] min-h-[280px] flex-wrap content-start justify-end gap-2 overflow-y-auto rounded-lg bg-zinc-50 p-2 md:gap-2.5 md:p-3 ${className}`}
    >
      {items.map((item, i) => (
        <CollageCell key={`${mediaCaption(item)}-${i}`} item={item} />
      ))}
    </div>
  );
}

export function CollageStripTile({
  permalink,
  caption,
}: {
  permalink: string;
  caption: string;
}) {
  const { open } = useLightbox();
  const reel = permalink.includes("/reel/");

  return (
    <button
      type="button"
      onClick={() => open({ type: "instagram", permalink, caption })}
      className="relative aspect-[9/16] w-32 shrink-0 cursor-zoom-in overflow-hidden rounded-sm bg-zinc-200 md:w-36"
      aria-label={caption}
    >
      <InstagramPlaceholder reel={reel} />
      <PlayOverlay />
    </button>
  );
}