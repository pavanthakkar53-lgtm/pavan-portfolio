import { motion } from "framer-motion";
import { useInstagramThumbnail } from "../hooks/useInstagramThumbnail";
import { driveThumbnail, youtubeThumbnail } from "../lib/mediaUtils";

const panelMotion = {
  initial: { scale: 0.94, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.96, opacity: 0 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
};

function ExternalLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-5 inline-block text-sm text-white/80 underline underline-offset-4 hover:text-white"
      onClick={(e) => e.stopPropagation()}
    >
      {label} ↗
    </a>
  );
}

export function InstagramLightbox({
  permalink,
  caption,
}: {
  permalink: string;
  caption?: string;
}) {
  const thumb = useInstagramThumbnail(permalink);
  const isReel = permalink.includes("/reel/");

  return (
    <motion.div
      {...panelMotion}
      className={`relative w-full ${isReel ? "max-w-[min(90vw,360px)]" : "max-w-[min(90vw,480px)]"}`}
      onClick={(e) => e.stopPropagation()}
    >
      {thumb ? (
        <img
          src={thumb}
          alt={caption ?? "Instagram"}
          className={`mx-auto w-full rounded-lg object-cover ${isReel ? "aspect-[9/16]" : "aspect-square"}`}
        />
      ) : (
        <div className={`mx-auto animate-pulse rounded-lg bg-white/10 ${isReel ? "aspect-[9/16]" : "aspect-square"}`} />
      )}
      {caption && (
        <p className="mt-4 text-center text-sm text-white/70">{caption}</p>
      )}
      <div className="text-center">
        <ExternalLink href={permalink} label="Watch on Instagram" />
      </div>
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
      className="relative w-full max-w-[min(92vw,960px)]"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={youtubeThumbnail(url)}
        alt={caption ?? "YouTube video"}
        className="aspect-video w-full rounded-lg object-cover"
      />
      {caption && (
        <p className="mt-4 text-center text-sm text-white/70">{caption}</p>
      )}
      <div className="text-center">
        <ExternalLink href={url} label="Watch on YouTube" />
      </div>
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
      className="relative w-full max-w-[min(90vw,720px)]"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={driveThumbnail(url)}
        alt={caption ?? "Google Drive file"}
        className="aspect-[4/3] w-full rounded-lg object-cover"
      />
      {caption && (
        <p className="mt-4 text-center text-sm text-white/70">{caption}</p>
      )}
      <div className="text-center">
        <ExternalLink href={url} label="Open in Google Drive" />
      </div>
    </motion.div>
  );
}