import { useRef } from "react";
import { useInView } from "framer-motion";
import type { MediaItem } from "../data/content";
import { useLightbox } from "../context/LightboxContext";
import {
  driveEmbedUrl,
  driveThumbnail,
  instagramEmbedUrl,
  isInstagramReel,
  isPortraitMedia,
  mediaCaption,
  toLightboxItem,
  youtubeEmbedUrl,
} from "../lib/mediaUtils";

type MediaCollageProps = {
  items: MediaItem[];
  className?: string;
};

function cellLayout(item: MediaItem) {
  const portrait = isPortraitMedia(item);
  const square = item.kind === "instagram" && !isInstagramReel(item);

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

  return { sizeClass, aspectClass, portrait, square };
}

function embedSrc(item: MediaItem): string | null {
  switch (item.kind) {
    case "youtube":
      return youtubeEmbedUrl(item.url);
    case "instagram":
      return instagramEmbedUrl(item.permalink);
    case "drive":
      return item.previewType === "video" ? driveEmbedUrl(item.url) : null;
    default:
      return null;
  }
}

function AutoplayFrame({
  item,
  inView,
}: {
  item: MediaItem;
  inView: boolean;
}) {
  const caption = mediaCaption(item);
  const { portrait } = cellLayout(item);

  if (item.kind === "image") {
    return (
      <img
        src={item.src}
        alt={item.alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
    );
  }

  if (item.kind === "drive" && item.previewType !== "video") {
    return (
      <img
        src={driveThumbnail(item.url)}
        alt={caption}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
    );
  }

  const src = embedSrc(item);
  if (!inView || !src) {
    return <div className="absolute inset-0 animate-pulse bg-zinc-200" />;
  }

  const cropInstagram =
    item.kind === "instagram" && (portrait || item.permalink.includes("/p/"));

  if (cropInstagram) {
    return (
      <iframe
        src={src}
        title={caption}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[230%] w-[230%] -translate-x-1/2 -translate-y-1/2 border-0"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <iframe
      src={src}
      title={caption}
      className="pointer-events-none absolute inset-0 h-full w-full border-0"
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

function CollageCell({ item }: { item: MediaItem }) {
  const { open } = useLightbox();
  const ref = useRef<HTMLButtonElement>(null);
  const inView = useInView(ref, { margin: "80px", amount: 0.1 });
  const caption = mediaCaption(item);
  const { sizeClass, aspectClass } = cellLayout(item);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => open(toLightboxItem(item))}
      className={`${sizeClass} ${aspectClass} relative block shrink-0 cursor-zoom-in overflow-hidden rounded-sm bg-zinc-900`}
      aria-label={caption}
    >
      <AutoplayFrame item={item} inView={inView} />
    </button>
  );
}

export function MediaCollage({ items, className = "" }: MediaCollageProps) {
  if (items.length === 0) return null;

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

