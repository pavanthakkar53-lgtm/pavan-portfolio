import type { MediaItem } from "../data/content";
import { useLightbox } from "../context/LightboxContext";
import { InstagramEmbedFrame } from "./InstagramEmbedFrame";
import {
  driveThumbnail,
  isInstagramReel,
  isPortraitMedia,
  mediaCaption,
  toLightboxItem,
  youtubeThumbnail,
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

  return { sizeClass, aspectClass };
}

function PreviewFrame({ item }: { item: MediaItem }) {
  const caption = mediaCaption(item);

  if (item.kind === "instagram") {
    return (
      <InstagramEmbedFrame
        permalink={item.permalink}
        title={caption}
        variant="tile"
        className="absolute inset-0"
      />
    );
  }

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

  if (item.kind === "youtube") {
    return (
      <img
        src={youtubeThumbnail(item.url)}
        alt={caption}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
    );
  }

  if (item.kind === "drive") {
    return (
      <img
        src={driveThumbnail(item.url)}
        alt={caption}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
    );
  }

  return null;
}

function CollageCell({ item }: { item: MediaItem }) {
  const { open } = useLightbox();
  const caption = mediaCaption(item);
  const { sizeClass, aspectClass } = cellLayout(item);

  return (
    <button
      type="button"
      onClick={() => open(toLightboxItem(item))}
      className={`${sizeClass} ${aspectClass} relative block shrink-0 cursor-zoom-in overflow-hidden rounded-sm bg-zinc-200`}
      aria-label={caption}
    >
      <PreviewFrame item={item} />
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