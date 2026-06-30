import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "../data/content";

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const numeric = value.match(/[\d.]+/);
    if (!numeric) return;
    const target = parseFloat(numeric[0]);
    const prefix = value.slice(0, value.indexOf(numeric[0]));
    const suffix = value.slice(value.indexOf(numeric[0]) + numeric[0].length);
    let start = 0;
    const steps = 24;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setDisplay(`${prefix}${target}${suffix}`);
        clearInterval(timer);
      } else {
        const rounded = Number.isInteger(target) ? Math.floor(start) : start.toFixed(1);
        setDisplay(`${prefix}${rounded}${suffix}`);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-t border-white/10 py-6"
    >
      <p className="text-2xl font-medium tracking-tight text-white md:text-3xl">
        {display}
      </p>
      <p className="mt-2 text-sm text-white/50">{label}</p>
    </motion.div>
  );
}

export function StatsWall() {
  return (
    <section id="numbers" className="relative bg-ink py-32 text-white md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-[11px] tracking-[0.25em] text-white/40 uppercase">
          Impact
        </p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-5xl">
          By the numbers
        </h2>

        <div className="mt-16 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}