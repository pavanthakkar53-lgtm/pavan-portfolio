import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { timeline } from "../data/content";

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

  return (
    <section id="journey" ref={containerRef} className="relative" style={{ height: `${timeline.length * 100}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(24,24,27,0.04),transparent_50%)]" />

        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.25em] text-ink-faint uppercase">
                Scroll to travel
              </p>
              <h2 className="mt-2 text-3xl font-medium tracking-tight text-ink md:text-5xl">
                The journey
              </h2>
            </div>
            <div className="hidden text-right md:block">
              <p className="text-6xl font-light text-ink/10">
                {String(active + 1).padStart(2, "0")}
              </p>
              <p className="text-xs tracking-widest text-ink-faint uppercase">
                of {String(timeline.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          <div className="mb-8 flex gap-1">
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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end"
            >
              <div>
                <p className="text-xs tracking-[0.2em] text-ink-muted uppercase">
                  {item.period}
                </p>
                <h3 className="mt-3 text-4xl font-medium tracking-tight text-ink md:text-6xl md:leading-[1.05]">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg text-ink-muted md:text-xl">
                  {item.role}
                </p>
                <p className="mt-2 text-sm tracking-wide text-accent uppercase">
                  {item.badge}
                </p>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                  {item.quote}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="flex aspect-[4/5] items-center justify-center rounded-sm bg-[linear-gradient(160deg,#ececee,#f3f3f4)] md:aspect-[3/4]"
              >
                <p className="px-8 text-center text-[11px] tracking-[0.2em] text-ink-faint uppercase">
                  {item.imageLabel}
                  <br />
                  <span className="mt-2 inline-block text-ink-muted normal-case tracking-normal">
                    Photo coming — tap to open when added
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.p
            className="mt-12 text-center text-xs tracking-[0.2em] text-ink-faint uppercase md:mt-16"
            animate={{ opacity: active === timeline.length - 1 ? 0.4 : 1 }}
          >
            Keep scrolling ↓
          </motion.p>
        </div>
      </div>
    </section>
  );
}