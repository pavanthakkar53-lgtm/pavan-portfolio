import { motion } from "framer-motion";
import { aiCreatives } from "../data/content";
import { useLightbox } from "../context/LightboxContext";

function CreativeTile({ permalink, caption }: { permalink: string; caption: string }) {
  const { open } = useLightbox();

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      onClick={() => open({ type: "instagram", permalink, caption })}
      className="relative h-64 w-48 shrink-0 cursor-zoom-in overflow-hidden rounded-sm md:h-80 md:w-60"
      aria-label={caption}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a1a1e,#2d2d35)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30">
          <div className="ml-1 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white/80" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <p className="text-[10px] tracking-[0.15em] text-white/80 uppercase">
          AI-generated
        </p>
        <p className="mt-1 text-xs text-white/60">{caption}</p>
      </div>
      <span className="absolute top-3 left-3 rounded-full bg-white/10 px-2 py-1 text-[9px] tracking-widest text-white/70 uppercase backdrop-blur">
        Reel
      </span>
    </motion.button>
  );
}

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
            AI-generated photos and videos from the Dwell Baby Air launch.
            Tap any tile to watch the real reel.
          </p>
        </motion.div>
      </div>

      <div className="relative mt-14">
        <motion.div
          className="flex w-max gap-4 px-5 md:gap-6 md:px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
          }}
        >
          {loop.map((item, i) => (
            <CreativeTile
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
