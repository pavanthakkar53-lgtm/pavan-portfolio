import { motion } from "framer-motion";

type ImagePlaceholderProps = {
  label: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
  dark?: boolean;
};

const aspectMap = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

export function ImagePlaceholder({
  label,
  aspect = "video",
  className = "",
  dark = false,
}: ImagePlaceholderProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden rounded-2xl border ${aspectMap[aspect]} ${className} ${
        dark
          ? "border-border-dark bg-dark-elevated"
          : "border-border bg-surface"
      }`}
    >
      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-[linear-gradient(135deg,#1a1a1e_0%,#25252b_50%,#1a1a1e_100%)]"
            : "bg-[linear-gradient(135deg,#f4f4f5_0%,#fafafa_50%,#ececee_100%)]"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <p
          className={`text-center text-xs font-medium tracking-wide uppercase ${
            dark ? "text-ink-faint" : "text-ink-muted"
          }`}
        >
          {label}
        </p>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 h-px ${
          dark ? "bg-white/10" : "bg-black/5"
        }`}
      />
    </motion.div>
  );
}