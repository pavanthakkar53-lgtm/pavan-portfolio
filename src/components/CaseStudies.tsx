import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { caseStudies } from "../data/content";
import { MediaTile } from "./MediaTile";

export function CaseStudies() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40%" });

  const study = caseStudies[active];
  const hasMedia = study.media.length > 0;

  return (
    <section id="work" ref={ref} className="relative py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] tracking-[0.25em] text-ink-faint uppercase">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink md:text-5xl">
            Case studies
          </h2>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2">
          {caseStudies.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              className={`text-sm transition ${
                active === i
                  ? "text-ink underline underline-offset-4"
                  : "text-ink-faint hover:text-ink-muted"
              }`}
            >
              {String(i + 1).padStart(2, "0")} — {item.tags[0]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0.3, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h3 className="max-w-4xl text-3xl font-medium tracking-tight text-ink md:text-5xl md:leading-[1.1]">
              {study.title}
            </h3>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div className="space-y-6 text-base leading-relaxed text-ink-muted md:text-lg">
                <p>
                  <span className="text-ink">Challenge — </span>
                  {study.challenge}
                </p>
                <p>
                  <span className="text-ink">What I did — </span>
                  {study.action}
                </p>
                <p>
                  <span className="text-ink">Result — </span>
                  {study.result}
                </p>

                {"links" in study && study.links && study.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
                    {study.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs tracking-wide text-ink underline underline-offset-4 hover:text-accent"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {hasMedia ? (
                <div className="grid max-h-[480px] grid-cols-2 gap-3 overflow-y-auto pr-1">
                  {study.media.map((m, i) => (
                    <MediaTile key={i} item={m} />
                  ))}
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center rounded-sm bg-[linear-gradient(160deg,#ececee,#f0f0f2)]">
                  <span className="text-[11px] tracking-[0.2em] text-ink-faint uppercase">
                    No media yet
                  </span>
                </div>
              )}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
