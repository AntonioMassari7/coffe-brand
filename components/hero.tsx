"use client";

import Image from "next/image";
import { motion } from "motion/react";

const headlineWords = ["Specialty", "coffee,", "tostato", "con", "cura."];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] items-center overflow-hidden bg-bg">
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-bg/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/55 to-transparent md:from-bg/95 md:via-bg/30 md:to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_75%_at_28%_48%,var(--color-bg)_0%,transparent_70%)] opacity-90" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-text-muted"
          >
            Specialty Coffee · Developer Culture
          </motion.p>

          <h1 className="font-display text-[40px] font-black italic leading-[1.05] tracking-tight text-text sm:text-[56px] md:text-[88px]">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: easeOut,
                  delay: 0.15 + i * 0.08,
                }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.7 }}
            className="mt-6 max-w-md text-base text-text-muted md:text-lg"
          >
            Miscele in piccoli lotti, selezionate per chi passa le notti tra
            codice e caffè. Tostatura artigianale, consegna in tutta Italia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.85 }}
            className="mt-10"
          >
            <a
              href="#shop"
              className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-bg transition-transform hover:scale-[1.03]"
            >
              Scopri la selezione
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
