import { motion } from "framer-motion";
import { useLightbox } from "../context/LightboxContext";

type OpenableImageProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  grayscale?: boolean;
};

export function OpenableImage({
  src,
  alt,
  caption,
  className = "",
  grayscale = false,
}: OpenableImageProps) {
  const { open } = useLightbox();

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.3 }}
      onClick={() => open({ src, alt, caption })}
      className={`group relative cursor-zoom-in overflow-hidden ${className}`}
      aria-label={`Open ${alt}`}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
          grayscale ? "grayscale hover:grayscale-0" : ""
        }`}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
      <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-[10px] tracking-widest text-white uppercase opacity-0 backdrop-blur transition group-hover:opacity-100">
        Open
      </span>
    </motion.button>
  );
}