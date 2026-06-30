import { motion } from "framer-motion";
import { skillGroups } from "../data/content";

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-sm tracking-[0.25em] text-ink-faint uppercase md:text-base">
          Capabilities
        </p>
        <h2 className="mt-4 text-4xl font-medium tracking-tight text-ink md:text-6xl">
          What I work with
        </h2>

        <div className="mt-20 space-y-14 md:space-y-16">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid gap-6 border-t border-ink/10 pt-10 md:grid-cols-[minmax(240px,300px)_1fr] md:gap-10"
            >
              <h3 className="text-xl font-medium text-ink md:text-2xl">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {group.items.map((item) => (
                  <span key={item} className="text-lg text-ink-muted md:text-xl">
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