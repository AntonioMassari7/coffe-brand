"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function Shop() {
  return (
    <section id="shop" className="bg-bg px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl bg-accent px-8 py-16 text-bg md:px-16 md:py-24"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-bg/60">
            Shop
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-black italic leading-[1.05] md:text-6xl">
            Il caffè arriva, il codice continua.
          </h2>
          <p className="mt-6 max-w-md text-base text-bg/70 md:text-lg">
            Abbonamenti mensili o sacchetti singoli, spediti in 24/48h in
            tutta Italia.
          </p>
          <Link
            href="/shop"
            className="mt-10 inline-flex items-center rounded-full bg-bg px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-text transition-transform hover:scale-[1.03]"
          >
            Vai allo shop
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
