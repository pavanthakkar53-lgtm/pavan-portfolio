import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { rotatingHeadlines } from "../data/content";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingHeadlines.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20 pb-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(24,24,27,0.05),transparent_55%)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <p className="text-[11px] tracking-[0.3em] text-ink-faint uppercase">
            Portfolio · 2026
          </p>

          <h1 className="mt-5 text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] font-medium tracking-tight text-ink">
            Pavan Thakkar
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-ink-muted md:text-xl">
            I think like an owner.
            <br />
            Marketing is just how it shows up.
          </p>

          <p className="mt-3 text-sm text-ink-faint md:text-base">
            Six years building brands, running campaigns, and making the calls
            that matter past this quarter — Godhra, Gujarat
          </p>

          <div className="mt-8 h-14 overflow-hidden border-l border-ink/15 pl-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="text-sm leading-relaxed text-ink md:text-base"
              >
                {rotatingHeadlines[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center gap-3"
          >
            <p className="text-[10px] tracking-[0.25em] text-ink-faint uppercase">
              Scroll
            </p>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="h-6 w-[1px] bg-ink/25"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          aria-hidden
        >
          <div className="pointer-events-none relative aspect-[4/5] overflow-hidden rounded-sm md:aspect-[3/4]">
            <img
              src="/pavan-headshot.png"
              alt=""
              className="h-full w-full object-cover object-top grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/30 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}