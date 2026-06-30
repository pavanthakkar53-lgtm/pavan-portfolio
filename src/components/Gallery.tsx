import { useState } from "react";
import { motion } from "framer-motion";
import { galleryItems } from "../data/content";
import type { MediaItem } from "../data/content";
import { useLightbox } from "../context/LightboxContext";
import { useInstagramThumbnail } from "../hooks/useInstagramThumbnail";
import {
  driveThumbnail,
  toLightboxItem,
  youtubeThumbnail,
} from "../lib/mediaUtils";

const categories = ["All", ...Array.from(new Set(galleryItems.map((g) => g.category)))];

function GalleryMediaFrame({ media, title }: { media: MediaItem; title: string }) {
  const instagramThumb = useInstagramThumbnail(
    media.kind === "instagram" ? media.permalink : "",
  );

  if (media.kind === "image") {
    return (
      <img
        src={media.src}
        alt={title}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        loading="lazy"
      />
    );
  }

  if (media.kind === "youtube") {
    return (
      <img
        src={youtubeThumbnail(media.url)}
        alt={title}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        loading="lazy"
      />
    );
  }

  if (media.kind === "drive") {
    return (
      <img
        src={driveThumbnail(media.url)}
        alt={title}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        loading="lazy"
      />
    );
  }

  if (media.kind === "instagram") {
    if (!instagramThumb) {
      return <div className="h-full w-full animate-pulse bg-zinc-200" />;
    }
    return (
      <img
        src={instagramThumb}
        alt={title}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        loading="lazy"
      />
    );
  }

  return null;
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
  const isReel = media.kind === "instagram" && media.permalink.includes("/reel/");
  const isYoutube = media.kind === "youtube";

  return (
    <div className="text-left">
      <motion.button
        type="button"
        whileHover={{ y: -3 }}
        onClick={() => open(toLightboxItem(media))}
        className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-sm bg-zinc-200 ${
          isReel
            ? "aspect-[9/16]"
            : isYoutube
              ? "aspect-video"
              : media.kind === "instagram"
                ? "aspect-square"
                : "aspect-[4/3]"
        }`}
      >
        <GalleryMediaFrame media={media} title={title} />
      </motion.button>
      <div className="px-1 py-2">
        <p className="text-xs tracking-[0.15em] text-ink-faint uppercase md:text-sm">{category}</p>
        <p className="text-base text-ink md:text-lg">{title}</p>
      </div>
    </div>
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