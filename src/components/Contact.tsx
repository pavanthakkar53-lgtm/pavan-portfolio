import { motion } from "framer-motion";
import { contact } from "../data/content";
import { OpenableImage } from "./OpenableImage";

export function Contact() {
  return (
    <section id="contact" className="relative bg-ink py-32 text-white md:py-48">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-16 md:grid-cols-2 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] tracking-[0.25em] text-white/40 uppercase">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl md:leading-[1.05]">
              Let's build
              <br />
              something.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-white/60 md:text-lg">
              Looking for a leadership role where I can work closely with
              creative and technical people, manage at scale, and bring real
              momentum to a team that's ready to grow.
            </p>

            <div className="mt-10 space-y-4 text-sm md:text-base">
              <a href={`mailto:${contact.email}`} className="block text-white hover:underline">
                {contact.email}
              </a>
              <a href={`tel:${contact.phone}`} className="block text-white/70 hover:text-white">
                {contact.phone}
              </a>
              <p className="text-white/50">{contact.location}</p>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-white/70 hover:text-white"
              >
                linkedin.com/in/pavan--thakkar →
              </a>
            </div>
          </motion.div>

          <OpenableImage
            src="/pavan-headshot.png"
            alt="Pavan Thakkar"
            caption="Pavan Thakkar"
            className="aspect-[3/4] max-w-sm rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}