import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { contact, navLinks } from "../data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`flex items-center justify-between px-5 py-5 transition-all duration-500 md:px-10 ${
          scrolled ? "bg-canvas/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <a
          href="#"
          className="text-sm font-medium tracking-tight text-ink"
        >
          Pavan Thakkar
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-xs tracking-wide text-ink-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden text-ink-muted transition hover:text-ink sm:inline"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-ink-muted transition hover:text-ink"
          >
            Get in touch
          </a>
        </div>
      </motion.nav>
    </header>
  );
}