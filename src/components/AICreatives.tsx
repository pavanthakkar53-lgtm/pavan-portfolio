import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { aiCreatives } from "../data/content";
import { useLightbox } from "../context/LightboxContext";

function AIVideoTile({
  videoSrc,
  caption,
  permalink,
}: {
  videoSrc: string;
  caption: string;
  permalink?: string;
}) {
  const { open } = useLightbox();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, [videoSrc]);

  return (
    <button
      type="button"
      onClick={() =>
        permalink
          ? open({ type: "instagram", permalink, caption })
          : undefined
      }
      className="group shrink-0 cursor-zoom-in overflow-hidden rounded-2xl bg-zinc-900 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] w-[240px] h-[420px] sm:w-[300px] sm:h-[526px] lg:w-[360px] lg:h-[700px]"
      style={{ aspectRatio: "0.57 / 1" }}
      aria-label={caption}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover object-center"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </button>
  );
}

export function AICreatives() {
  const loop = [...aiCreatives, ...aiCreatives];

  return (
    <section id="ai-creatives" className="relative overflow-hidden py-28 md:py-40">
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
            Dwell Baby Air launch — AI-generated creatives, looping silently.
          </p>
        </motion.div>
      </div>

      <div className="relative mt-16 md:mt-20">
        <motion.div
          className="flex w-max items-center gap-6 px-6 sm:gap-8 sm:px-10 lg:gap-10 lg:px-12"
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
            <AIVideoTile
              key={`${item.videoSrc}-${i}`}
              videoSrc={item.videoSrc}
              caption={item.caption}
              permalink={item.permalink}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}