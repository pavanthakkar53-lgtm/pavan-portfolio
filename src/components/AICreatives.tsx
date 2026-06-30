import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aiCreatives } from "../data/content";
import { useLightbox } from "../context/LightboxContext";
import { instagramEmbedUrl } from "../lib/mediaUtils";

function AIReelTile({
  permalink,
  caption,
}: {
  permalink: string;
  caption: string;
}) {
  const { open } = useLightbox();
  const ref = useRef<HTMLButtonElement>(null);
  const inView = useInView(ref, { margin: "80px" });
  const isReel = permalink.includes("/reel/");

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => open({ type: "instagram", permalink, caption })}
      className="relative shrink-0 cursor-zoom-in overflow-hidden rounded-2xl bg-zinc-900 shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow hover:shadow-[0_6px_28px_rgba(0,0,0,0.1)] w-[192px] h-[336px] sm:w-[240px] sm:h-[421px] lg:w-[288px] lg:h-[560px]"
      style={{ aspectRatio: "0.57 / 1" }}
      aria-label={caption}
    >
      {inView ? (
        <iframe
          src={instagramEmbedUrl(permalink)}
          title={caption}
          className={`pointer-events-none absolute top-1/2 left-1/2 border-0 ${
            isReel
              ? "h-[230%] w-[230%] -translate-x-1/2 -translate-y-1/2"
              : "h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
          }`}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 animate-pulse bg-zinc-200" />
      )}
    </button>
  );
}

export function AICreatives() {
  const loop = [...aiCreatives, ...aiCreatives];

  return (
    <section id="ai-creatives" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,17,19,0.05),transparent_70%)]" />

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
            Dwell Baby Air launch — our AI reels, autoplay muted. Tap to expand.
          </p>
        </motion.div>
      </div>

      <div className="relative mt-14 md:mt-16">
        <motion.div
          className="flex w-max items-center gap-5 px-6 sm:gap-6 sm:px-8 lg:gap-8 lg:px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 70,
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
    </section>
  );
}