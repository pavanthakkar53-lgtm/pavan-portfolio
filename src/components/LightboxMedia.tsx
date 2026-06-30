import { motion } from "framer-motion";
import { InstagramEmbedFrame } from "./InstagramEmbedFrame";
import { driveEmbedUrl, youtubeEmbedUrl } from "../lib/mediaUtils";

const panelMotion = {
  initial: { scale: 0.94, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.96, opacity: 0 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
};

export function InstagramLightbox({
  permalink,
  caption,
}: {
  permalink: string;
  caption?: string;
}) {
  const isReel = permalink.includes("/reel/");

  return (
    <motion.div
      {...panelMotion}
      className={`relative w-full ${isReel ? "aspect-[9/16] max-w-[min(90vw,400px)]" : "aspect-square max-w-[min(90vw,480px)]"}`}
      onClick={(e) => e.stopPropagation()}
    >
      <InstagramEmbedFrame
        permalink={permalink}
        title={caption ?? "Instagram"}
        variant="lightbox"
        className="h-full w-full rounded-lg"
      />
      {caption && (
        <p className="mt-4 text-center text-sm text-white/70">{caption}</p>
      )}
    </motion.div>
  );
}

export function YouTubeLightbox({
  url,
  caption,
}: {
  url: string;
  caption?: string;
}) {
  return (
    <motion.div
      {...panelMotion}
      className="relative aspect-video w-full max-w-[min(92vw,960px)]"
      onClick={(e) => e.stopPropagation()}
    >
      <iframe
        src={youtubeEmbedUrl(url)}
        title={caption ?? "YouTube video"}
        className="h-full w-full rounded-lg border-0 bg-black"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {caption && (
        <p className="mt-4 text-center text-sm text-white/70">{caption}</p>
      )}
    </motion.div>
  );
}

export function DriveLightbox({
  url,
  caption,
}: {
  url: string;
  caption?: string;
}) {
  return (
    <motion.div
      {...panelMotion}
      className="relative aspect-[4/3] w-full max-w-[min(92vw,900px)]"
      onClick={(e) => e.stopPropagation()}
    >
      <iframe
        src={driveEmbedUrl(url)}
        title={caption ?? "Google Drive file"}
        className="h-full w-full rounded-lg border-0 bg-black"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
      {caption && (
        <p className="mt-4 text-center text-sm text-white/70">{caption}</p>
      )}
    </motion.div>
  );
}