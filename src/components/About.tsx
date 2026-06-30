import { useState } from "react";
import { motion } from "framer-motion";

const shortBio = `I didn't start in marketing. I started in a chemistry lab, then a classroom, then somehow ended up running a 35-year-old brick company's entire brand from a blank page.`;

const longBio = `Six years later, I've built digital presences from zero, led teams of 10, managed crores in budget, and learned that the best campaigns aren't won on a dashboard — they're won by understanding what actually makes a person say yes.

Since ChatGPT launched, I've gone deep into AI — not as a tool I bolted onto my workflow, but as the operating system I build on top of. I write scrapers, build chatbots, and design automation pipelines that let me do the work of a team three times my size.`;

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="relative -mt-8 pb-32 md:-mt-16 md:pb-40">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 md:grid-cols-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.25em] text-ink-faint uppercase">
            About
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-4xl">
            The one-line story
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-muted md:text-xl">
            {shortBio}
          </p>
          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            className="overflow-hidden"
          >
            <p className="pt-6 text-lg leading-relaxed whitespace-pre-line text-ink-muted">
              {longBio}
            </p>
          </motion.div>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-6 text-sm text-ink underline-offset-4 hover:underline"
          >
            {expanded ? "Show less" : "Read more →"}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col justify-end"
        >
          <div className="rounded-sm bg-ink p-8 text-white md:p-10">
            <p className="text-[11px] tracking-[0.2em] text-white/50 uppercase">
              Positioning
            </p>
            <p className="mt-4 text-xl leading-relaxed font-light md:text-2xl">
              AI-first marketer who also builds the systems marketing runs on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}