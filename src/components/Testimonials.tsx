import { motion } from "framer-motion";

const placeholders = [
  {
    quote: "Placeholder — quote from JJB or Dwell leadership coming soon.",
    name: "Name, Title",
    company: "Company",
  },
  {
    quote: "A short testimonial builds trust fast in interviews.",
    name: "Name, Title",
    company: "Company",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-[11px] tracking-[0.25em] text-ink-faint uppercase">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink md:text-4xl">
          What people say
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {placeholders.map((item, i) => (
            <motion.blockquote
              key={item.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-ink/10 pt-8"
            >
              <p className="text-lg leading-relaxed text-ink-muted md:text-xl">
                "{item.quote}"
              </p>
              <footer className="mt-6 text-sm text-ink-faint">
                — {item.name}, {item.company}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}