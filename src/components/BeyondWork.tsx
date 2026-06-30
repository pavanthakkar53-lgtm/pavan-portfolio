import { motion } from "framer-motion";
import { beyondWork } from "../data/content";

export function BeyondWork() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-[11px] tracking-[0.25em] text-ink-faint uppercase">
          Beyond work
        </p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink md:text-4xl">
          The human side
        </h2>

        <ul className="mt-12 space-y-8">
          {beyondWork.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-t border-ink/10 pt-6 text-base leading-relaxed text-ink-muted md:text-lg"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}