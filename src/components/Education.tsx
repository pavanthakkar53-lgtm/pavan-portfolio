import { motion } from "framer-motion";

export function Education() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 border-t border-ink/10 pt-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] tracking-[0.2em] text-ink-faint uppercase">
              Education
            </p>
            <h3 className="mt-3 text-xl font-medium text-ink">B.Sc. Chemistry</h3>
            <p className="mt-2 text-sm text-ink-muted">
              Maharaja Sayajirao University of Baroda (2019)
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              Top 1% HSC Science · INSPIRE Scholarship Recipient
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-[11px] tracking-[0.2em] text-ink-faint uppercase">
              Certifications
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li>Google Digital Marketing</li>
              <li>Google Analytics (Individual Qualification, Basic & Advanced)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}