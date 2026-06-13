"use client";

import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="bg-bg px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            About
          </p>
          <h2 className="mt-4 font-display text-3xl font-black italic leading-tight text-text md:text-5xl">
            Tostato in piccoli lotti, per chi non scende a compromessi.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-6 text-text-muted"
        >
          <p className="text-base leading-[1.65] md:text-lg">
            Dev Kafe nasce dall&apos;idea che il caffè buono sia parte degli
            strumenti di lavoro, non un&apos;eccezione. Selezioniamo lotti di
            origine singola e li tostiamo in piccole quantità per mantenere
            ogni nota distinta.
          </p>
          <p className="text-base leading-[1.65] md:text-lg">
            Dalla torrefazione alla tazza, ogni passaggio è pensato per chi
            beve caffè con la stessa cura con cui scrive codice.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
