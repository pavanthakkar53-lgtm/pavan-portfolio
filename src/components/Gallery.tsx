import { useState } from "react";
import { motion } from "framer-motion";
import { galleryItems } from "../data/content";
import type { MediaItem } from "../data/content";
import { useLightbox } from "../context/LightboxContext";
import {
  driveThumbnail,
  toLightboxItem,
  youtubeThumbnail,
} from "../lib/mediaUtils";

const categories = ["All", ...Array.from(new Set(galleryItems.map((g) => g.category)))];

function previewFor(item: MediaItem): string | null {
  switch (item.kind) {
    case "image":
      return item.src;
    case "youtube":
      return youtubeThumbnail(item.url);
    case "drive":
      return driveThumbnail(item.url);
    case "instagram":
      return null;
    default:
      return null;
  }
}

function GalleryPreviewTile({
  media,
  title,
  category,
}: {
  media: MediaItem;
  title: string;
  category: string;
}) {
  const { open } = useLightbox();
  const thumb = previewFor(media);
  const isReel =
    media.kind === "instagram" && media.permalink.includes("/reel/");
  const isYoutube = media.kind === "youtube";

  return (
    <motion.button
      type="button"
      whileHover={{ y: -3 }}
      onClick={() => open(toLightboxItem(media))}
      className={`group relative w-full cursor-zoom-in overflow-hidden rounded-sm bg-zinc-100 text-left ${
        isReel
          ? "aspect-[9/16]"
          : isYoutube
            ? "aspect-video"
            : media.kind === "instagram"
              ? "aspect-square"
              : "aspect-[4/3]"
      }`}
    >
      {thumb ? (
        <>
          <img
            src={thumb}
            alt={title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
          {(isReel || isYoutube || (media.kind === "drive" && media.previewType === "video")) && (
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/15">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-ink">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          )}
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-700 to-zinc-500 p-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-90">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" />
          </svg>
          <span className="text-center text-[10px] tracking-wide text-white/80 uppercase">
            Reel
          </span>
        </div>
      )}
      <div className="px-1 py-2">
        <p className="text-xs tracking-[0.15em] text-ink-faint uppercase md:text-sm">{category}</p>
        <p className="text-base text-ink md:text-lg">{title}</p>
      </div>
    </motion.button>
  );
}

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-sm tracking-[0.25em] text-ink-faint uppercase md:text-base">
          Gallery
        </p>
        <h2 className="mt-3 text-4xl font-medium tracking-tight text-ink md:text-6xl">
          Receipts from the field
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`text-sm tracking-wide uppercase transition md:text-base ${
                filter === cat ? "text-ink" : "text-ink-faint hover:text-ink-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.title + i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="mb-4 break-inside-avoid"
            >
              <GalleryPreviewTile
                media={item.media}
                title={item.title}
                category={item.category}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}