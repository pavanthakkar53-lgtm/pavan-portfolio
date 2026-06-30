import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { MediaItem } from "../data/content";
import { useLightbox } from "../context/LightboxContext";
import {
  driveEmbedUrl,
  driveThumbnail,
  instagramEmbedUrl,
  youtubeEmbedUrl,
} from "../lib/mediaUtils";

type MediaTileProps = {
  item: MediaItem;
  className?: string;
};

const FRAME =
  "relative mx-auto w-full max-w-[260px] overflow-hidden rounded-sm bg-zinc-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] md:max-w-[300px]";

const PORTRAIT = `${FRAME} aspect-[9/16]`;

function LazyIframe({
  src,
  title,
  onExpand,
}: {
  src: string;
  title: string;
  onExpand?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "120px", amount: 0.2 });

  return (
    <div ref={ref} className={PORTRAIT}>
      {inView && src ? (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="absolute inset-0 animate-pulse bg-zinc-200" />
      )}
      {onExpand && (
        <button
          type="button"
          onClick={onExpand}
          className="absolute inset-0 z-10 cursor-zoom-in bg-transparent opacity-0 transition hover:opacity-100 hover:bg-black/10"
          aria-label={`Expand ${title}`}
        />
      )}
    </div>
  );
}

export function MediaTile({ item, className = "" }: MediaTileProps) {
  const { open } = useLightbox();

  if (item.kind === "image") {
    return (
      <motion.div
        whileHover={{ scale: 1.01 }}
        className={`${className}`}
      >
        <button
          type="button"
          onClick={() => open({ type: "image", src: item.src, alt: item.alt })}
          className={`${PORTRAIT} block cursor-zoom-in`}
          aria-label={`Open ${item.alt}`}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="absolute inset-0 h-full w-full object-contain"
            loading="lazy"
          />
        </button>
        {item.alt && (
          <p className="mt-2 line-clamp-2 text-center text-[11px] text-ink-muted">
            {item.alt}
          </p>
        )}
      </motion.div>
    );
  }

  if (item.kind === "youtube") {
    const src = youtubeEmbedUrl(item.url);
    const caption = item.caption ?? "Video";
    return (
      <div className={className}>
        <LazyIframe
          src={src}
          title={caption}
          onExpand={() => open({ type: "youtube", url: item.url, caption })}
        />
        <p className="mt-2 line-clamp-2 text-center text-[11px] text-ink-muted">
          {caption}
        </p>
      </div>
    );
  }

  if (item.kind === "drive") {
    const caption = item.caption ?? "File";
    if (item.previewType === "video") {
      return (
        <div className={className}>
          <LazyIframe
            src={driveEmbedUrl(item.url)}
            title={caption}
            onExpand={() => open({ type: "drive", url: item.url, caption })}
          />
          <p className="mt-2 line-clamp-2 text-center text-[11px] text-ink-muted">
            {caption}
          </p>
        </div>
      );
    }
    return (
      <motion.div whileHover={{ scale: 1.01 }} className={className}>
        <button
          type="button"
          onClick={() => open({ type: "drive", url: item.url, caption })}
          className={`${PORTRAIT} block cursor-zoom-in`}
          aria-label={caption}
        >
          <img
            src={driveThumbnail(item.url)}
            alt={caption}
            className="absolute inset-0 h-full w-full object-contain"
            loading="lazy"
          />
        </button>
        <p className="mt-2 line-clamp-2 text-center text-[11px] text-ink-muted">
          {caption}
        </p>
      </motion.div>
    );
  }

  // Instagram — inline portrait embed iframe (real reel visible, no cover)
  const src = instagramEmbedUrl(item.permalink);
  const caption = item.caption ?? "Instagram";
  return (
    <div className={className}>
      <LazyIframe
        src={src}
        title={caption}
        onExpand={() =>
          open({ type: "instagram", permalink: item.permalink, caption })
        }
      />
      <p className="mt-2 line-clamp-2 text-center text-[11px] text-ink-muted">
        {caption}
      </p>
    </div>
  );
}