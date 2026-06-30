import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { timeline } from "../data/content";
import { MediaTile } from "./MediaTile";

const NAV_OFFSET = "5.5rem";

export function ScrollJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(
      timeline.length - 1,
      Math.max(0, Math.floor(v * timeline.length)),
    );
    setActive(index);
  });

  const item = timeline[active];
  const hasMedia = item.media.length > 0;

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative z-20"
      style={{ height: `${timeline.length * 100}vh` }}
    >
      <div
        className="sticky z-20 flex min-h-[calc(100vh-5.5rem)] flex-col bg-canvas"
        style={{ top: NAV_OFFSET }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-8 md:px-8 md:py-10">
          <div className="mb-8 flex shrink-0 items-end justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.25em] text-ink-faint uppercase">
                Scroll to travel
              </p>
              <h2 className="mt-2 text-3xl font-medium tracking-tight text-ink md:text-5xl">
                The journey
              </h2>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-4xl font-medium text-ink/30 md:text-5xl">
                {String(active + 1).padStart(2, "0")}
              </p>
              <p className="text-xs tracking-widest text-ink-muted uppercase">
                of {String(timeline.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          <div className="mb-6 flex shrink-0 gap-1">
            {timeline.map((_, i) => (
              <div
                key={i}
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
              key={item.period}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid min-h-0 flex-1 gap-8 overflow-y-auto md:grid-cols-[1fr_1fr] md:items-start"
            >
              <div className="min-w-0">
                <p className="text-xs tracking-[0.2em] text-ink-muted uppercase">
                  {item.period}
                </p>
                <h3 className="mt-2 text-3xl font-medium tracking-tight text-ink md:text-5xl md:leading-[1.08]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-ink-muted md:text-lg">
                  {item.role}
                </p>
                <p className="mt-1 text-sm tracking-wide text-accent uppercase">
                  {item.badge}
                </p>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
                  {item.quote}
                </p>

                {item.links && item.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {item.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs tracking-wide text-ink underline underline-offset-4 hover:text-accent"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {hasMedia ? (
                <div className="grid max-h-[60vh] grid-cols-2 gap-3 overflow-y-auto pr-1 md:max-h-[65vh]">
                  {item.media.map((m, i) => (
                    <MediaTile key={i} item={m} />
                  ))}
                </div>
              ) : (
                <div className="flex aspect-[4/3] min-h-[180px] items-center justify-center rounded-sm bg-[linear-gradient(160deg,#ececee,#f3f3f4)] md:aspect-[3/4] md:max-h-[340px]">
                  <p className="px-6 text-center text-[11px] tracking-[0.2em] text-ink-faint uppercase">
                    No media yet
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <p
            className={`mt-8 shrink-0 text-center text-xs tracking-[0.2em] uppercase ${
              active === timeline.length - 1 ? "text-ink-faint/40" : "text-ink-faint"
            }`}
          >
            Keep scrolling ↓
          </p>
        </div>
      </div>
    </section>
  );
}
