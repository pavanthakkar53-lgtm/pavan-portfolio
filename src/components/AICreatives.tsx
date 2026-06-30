import { motion } from "framer-motion";
import { aiCreatives } from "../data/content";
import { useLightbox } from "../context/LightboxContext";
import { InstagramEmbedFrame } from "./InstagramEmbedFrame";

function AIReelTile({
  permalink,
  caption,
}: {
  permalink: string;
  caption: string;
}) {
  const { open } = useLightbox();
  const isReel = permalink.includes("/reel/");

  return (
    <button
      type="button"
      onClick={() => open({ type: "instagram", permalink, caption })}
      className={`relative shrink-0 cursor-zoom-in overflow-hidden rounded-sm ${
        isReel ? "aspect-[9/16] w-[100px] sm:w-[116px] md:w-[128px]" : "aspect-square w-[100px] sm:w-[116px] md:w-[128px]"
      }`}
      aria-label={caption}
    >
      <InstagramEmbedFrame
        permalink={permalink}
        title={caption}
        variant="tile"
        className="absolute inset-0"
      />
    </button>
  );
}

export function AICreatives() {
  const loop = [...aiCreatives, ...aiCreatives];

  return (
    <section id="ai-creatives" className="relative py-32 md:py-40">
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
            Dwell Baby Air launch — reels autoplay muted. Tap to expand.
          </p>
        </motion.div>

        <div className="relative mt-10 overflow-hidden rounded-lg bg-zinc-50 py-3 md:mt-12 md:py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-zinc-50 to-transparent md:w-12" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-zinc-50 to-transparent md:w-12" />

          <motion.div
            className="flex w-max items-center gap-2.5 px-3 md:gap-3 md:px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 55,
                ease: "linear",
              },
            }}
          >
            {loop.map((item, i) => (
              <AIReelTile
                key={`${item.permalink}-${i}`}
                permalink={item.permalink}
                caption={item.caption}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}