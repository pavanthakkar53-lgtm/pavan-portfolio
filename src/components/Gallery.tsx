import { useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { galleryItems } from "../data/content";
import { useLightbox } from "../context/LightboxContext";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { open } = useLightbox();

  const categories = useMemo(
    () => Array.from(new Set(galleryItems.map((g) => g.category))),
    [],
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(
      categories.length - 1,
      Math.max(0, Math.floor(v * categories.length)),
    );
    setActive(index);
  });

  const activeCategory = categories[active];
  const filtered = galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative z-20"
      style={{ height: `${categories.length * 100}vh` }}
    >
      <div
        className="sticky z-20 flex min-h-[calc(100vh-5.5rem)] flex-col bg-canvas"
        style={{ top: "5.5rem" }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-8 md:px-8 md:py-10">
          <div className="mb-6 flex shrink-0 items-end justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.25em] text-ink-faint uppercase">
                Scroll through categories
              </p>
              <h2 className="mt-2 text-3xl font-medium tracking-tight text-ink md:text-5xl">
                Receipts from the field
              </h2>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-4xl font-medium text-ink/30 md:text-5xl">
                {String(active + 1).padStart(2, "0")}
              </p>
              <p className="text-xs tracking-widest text-ink-muted uppercase">
                of {String(categories.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          <div className="mb-6 flex gap-1">
            {categories.map((cat, i) => (
              <div
                key={cat}
                className="h-[2px] flex-1 overflow-hidden rounded-full bg-ink/10"
              >
                <motion.div
                  className="h-full bg-ink"
                  animate={{ width: i <= active ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs tracking-[0.2em] text-accent uppercase">
                {activeCategory}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                {filtered.map((item, i) => {
                  const src = makePlaceholderDataUrl(item.title, active * 10 + i);
                  return (
                    <motion.button
                      key={item.title}
                      type="button"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.06 }}
                      whileHover={{ y: -3 }}
                      onClick={() =>
                        open({
                          src,
                          alt: item.title,
                          caption: `${item.category} — ${item.title}`,
                        })
                      }
                      className="group cursor-zoom-in overflow-hidden rounded-sm text-left"
                    >
                      <img
                        src={src}
                        alt={item.title}
                        className={`w-full object-cover transition duration-500 group-hover:scale-[1.02] ${
                          i % 3 === 0 ? "h-40 md:h-52" : i % 3 === 1 ? "h-32 md:h-40" : "h-44 md:h-56"
                        }`}
                      />
                      <p className="mt-2 text-sm text-ink transition group-hover:text-ink-muted">
                        {item.title}
                      </p>
                      <span className="text-[10px] tracking-widest text-ink-faint uppercase opacity-0 transition group-hover:opacity-100">
                        Open
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <p
            className={`mt-8 shrink-0 text-center text-xs tracking-[0.2em] uppercase ${
              active === categories.length - 1 ? "text-ink-faint/40" : "text-ink-faint"
            }`}
          >
            Keep scrolling ↓
          </p>
        </div>
      </div>
    </section>
  );
}