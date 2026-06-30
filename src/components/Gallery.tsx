import { useState } from "react";
import { motion } from "framer-motion";
import { galleryItems } from "../data/content";
import { useLightbox } from "../context/LightboxContext";

const categories = ["All", ...Array.from(new Set(galleryItems.map((g) => g.category)))];

function makePlaceholderDataUrl(title: string, index: number) {
  const light = index % 2 === 0;
  const bg = light ? "#e8e8ea" : "#2a2a30";
  const fg = light ? "#52525b" : "#a1a1aa";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="${index % 3 === 0 ? 1000 : index % 3 === 1 ? 700 : 900}">
    <rect width="100%" height="100%" fill="${bg}"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${fg}" font-family="Helvetica,Arial,sans-serif" font-size="14">${title}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const { open } = useLightbox();
  const filtered =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-[11px] tracking-[0.25em] text-ink-faint uppercase">
          Gallery
        </p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink md:text-5xl">
          Receipts from the field
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`text-xs tracking-wide uppercase transition ${
                filter === cat ? "text-ink" : "text-ink-faint hover:text-ink-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((item, i) => {
            const src = makePlaceholderDataUrl(item.title, i);
            return (
              <motion.button
                key={item.title}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                onClick={() =>
                  open({
                    src,
                    alt: item.title,
                    caption: `${item.category} — ${item.title}`,
                  })
                }
                className="group mb-4 w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-sm"
              >
                <img
                  src={src}
                  alt={item.title}
                  className={`w-full object-cover transition duration-500 group-hover:scale-[1.02] ${
                    i % 3 === 0 ? "h-72" : i % 3 === 1 ? "h-52" : "h-80"
                  }`}
                />
                <div className="flex items-center justify-between py-3">
                  <div className="text-left">
                    <p className="text-[10px] tracking-[0.15em] text-ink-faint uppercase">
                      {item.category}
                    </p>
                    <p className="text-sm text-ink">{item.title}</p>
                  </div>
                  <span className="text-[10px] tracking-widest text-ink-faint uppercase opacity-0 transition group-hover:opacity-100">
                    Open
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}