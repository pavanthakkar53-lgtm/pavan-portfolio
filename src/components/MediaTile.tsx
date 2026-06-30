import { motion } from "framer-motion";
import type { MediaItem } from "../data/content";
import { useLightbox } from "../context/LightboxContext";
import { useInstagramThumbnail } from "../hooks/useInstagramThumbnail";
import {
  driveThumbnail,
  mediaCaption,
  toLightboxItem,
  youtubeThumbnail,
} from "../lib/mediaUtils";

type MediaTileProps = {
  item: MediaItem;
  className?: string;
};

function TilePreview({ item }: { item: MediaItem }) {
  const caption = mediaCaption(item);
  const instagramThumb = useInstagramThumbnail(
    item.kind === "instagram" ? item.permalink : "",
  );

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

  if (item.kind === "instagram") {
    if (!instagramThumb) {
      return <div className="absolute inset-0 animate-pulse bg-zinc-200" />;
    }
    return (
      <img
        src={instagramThumb}
        alt={caption}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
    );
  }

  return null;
}

function tileAspect(item: MediaItem): string {
  if (item.kind === "instagram" && item.permalink.includes("/reel/")) {
    return "aspect-[9/16]";
  }
  if (item.kind === "youtube") return "aspect-video";
  if (item.kind === "instagram") return "aspect-square";
  return "aspect-[4/3]";
}

export function MediaTile({ item, className = "" }: MediaTileProps) {
  const { open } = useLightbox();
  const caption = mediaCaption(item);

  return (
    <motion.div whileHover={{ scale: 1.01 }} className={className}>
      <button
        type="button"
        onClick={() => open(toLightboxItem(item))}
        className={`relative mx-auto block w-full max-w-[260px] cursor-zoom-in overflow-hidden rounded-sm bg-zinc-200 shadow-[0_2px_16px_rgba(0,0,0,0.06)] md:max-w-[300px] ${tileAspect(item)}`}
        aria-label={caption}
      >
        <TilePreview item={item} />
      </button>
      {caption && (
        <p className="mt-2 line-clamp-2 text-center text-[11px] text-ink-muted">
          {caption}
        </p>
      )}
    </motion.div>
  );
}