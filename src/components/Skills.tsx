import { motion } from "framer-motion";
import { skillGroups } from "../data/content";

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-[11px] tracking-[0.25em] text-ink-faint uppercase">
          Capabilities
        </p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink md:text-5xl">
          What I work with
        </h2>

        <div className="mt-16 space-y-16">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid gap-6 border-t border-ink/10 pt-8 md:grid-cols-[200px_1fr]"
            >
              <h3 className="text-sm font-medium text-ink">{group.title}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {group.items.map((item) => (
                  <span key={item} className="text-sm text-ink-muted">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}