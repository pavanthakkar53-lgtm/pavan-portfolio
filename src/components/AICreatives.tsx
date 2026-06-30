import { motion } from "framer-motion";
import { aiCreatives } from "../data/content";
import { CollageStripTile } from "./MediaCollage";

export function AICreatives() {
  const loop = [...aiCreatives, ...aiCreatives];

  return (
    <section id="ai-creatives" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,17,19,0.06),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] tracking-[0.25em] text-ink-faint uppercase">
            AI Creatives
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-tight text-ink md:text-5xl">
            Where marketing meets machine imagination
          </h2>
          <p className="mt-4 max-w-xl text-base text-ink-muted md:text-lg">
            Dwell Baby Air launch — tap any frame to watch the full reel.
          </p>
        </motion.div>
      </div>

      <div className="relative mt-14">
        <motion.div
          className="flex w-max items-start gap-3 px-5 md:gap-4 md:px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" },
          }}
        >
          {loop.map((item, i) => (
            <CollageStripTile
              key={`${item.permalink}-${i}`}
              permalink={item.permalink}
              caption={item.caption}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}