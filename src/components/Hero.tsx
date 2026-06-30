import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { rotatingHeadlines } from "../data/content";
import { OpenableImage } from "./OpenableImage";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingHeadlines.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-0">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[11px] tracking-[0.3em] text-ink-faint uppercase"
        >
          Portfolio · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.08] font-medium tracking-tight text-ink"
        >
          Pavan Thakkar builds brands from zero — and the AI systems that scale
          them.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-5 max-w-lg text-base text-ink-muted md:text-lg"
        >
          6 years · 3 brands · Godhra, Gujarat
        </motion.p>

        <div className="mx-auto mt-6 h-12 max-w-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="text-sm text-ink-muted md:text-base"
            >
              {rotatingHeadlines[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-14 max-w-4xl px-5 md:mt-20 md:px-8"
      >
        <OpenableImage
          src="/pavan-headshot.png"
          alt="Pavan Thakkar"
          caption="Pavan Thakkar — professional headshot"
          grayscale
          className="aspect-[4/5] w-full rounded-sm md:aspect-[16/11]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col items-center gap-3 py-16"
      >
        <p className="text-[10px] tracking-[0.25em] text-ink-faint uppercase">
          Scroll to explore
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-ink/20"
        />
      </motion.div>
    </section>
  );
}