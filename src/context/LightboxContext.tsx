import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  driveEmbedUrl,
  instagramEmbedUrl,
  youtubeEmbedUrl,
} from "../lib/mediaUtils";

type LightboxItem =
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "instagram"; permalink: string; caption?: string }
  | { type: "youtube"; url: string; caption?: string }
  | { type: "drive"; url: string; caption?: string };

type LightboxContextValue = {
  open: (item: LightboxItem) => void;
  close: () => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<LightboxItem | null>(null);

  const open = useCallback((next: LightboxItem) => setItem(next), []);
  const close = useCallback(() => setItem(null), []);

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, close]);

  return (
    <LightboxContext.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {item && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-10"
            onClick={close}
          >
            <motion.button
              type="button"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-5 right-5 z-10 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:text-white"
              onClick={close}
            >
              Close
            </motion.button>

            {item.type === "image" && (
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-h-[90vh] max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
                />
                {item.caption && (
                  <p className="mt-4 text-center text-sm text-white/70">
                    {item.caption}
                  </p>
                )}
              </motion.div>
            )}

            {item.type === "instagram" && (
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[9/16] w-full max-w-[min(90vw,420px)]"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  className="h-full w-full rounded-lg border-0 bg-black"
                  src={instagramEmbedUrl(item.permalink)}
                  title={item.caption ?? "Instagram"}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
                {item.caption && (
                  <p className="mt-4 text-center text-sm text-white/70">
                    {item.caption}
                  </p>
                )}
              </motion.div>
            )}

            {item.type === "youtube" && (
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-video w-full max-w-[min(92vw,960px)]"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  className="h-full w-full rounded-lg border-0 bg-black"
                  src={youtubeEmbedUrl(item.url)}
                  title={item.caption ?? "YouTube video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {item.caption && (
                  <p className="mt-4 text-center text-sm text-white/70">
                    {item.caption}
                  </p>
                )}
              </motion.div>
            )}

            {item.type === "drive" && (
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[9/16] w-full max-w-[min(90vw,420px)]"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  className="h-full w-full rounded-lg border-0 bg-black"
                  src={driveEmbedUrl(item.url)}
                  title={item.caption ?? "Drive file"}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
                {item.caption && (
                  <p className="mt-4 text-center text-sm text-white/70">
                    {item.caption}
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}
