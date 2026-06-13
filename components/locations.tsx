"use client";

import { motion } from "motion/react";

const locations = [
  {
    city: "Milano",
    role: "Flagship",
    address: "Via Tortona 31, 20144",
    hours: "Lun–Ven 7:30–18:00 · Sab–Dom 8:00–19:00",
  },
  {
    city: "Torino",
    role: "Roastery",
    address: "Via Po 12, 10124",
    hours: "Lun–Dom 8:00–19:00",
  },
  {
    city: "Bologna",
    role: "Coffee Bar",
    address: "Via Zamboni 45, 40126",
    hours: "Lun–Ven 7:00–17:00",
  },
];

export function Locations() {
  return (
    <section id="locations" className="bg-bg px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Locations
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-black italic leading-tight text-text md:text-5xl">
            Dove trovarci.
          </h2>
        </motion.div>

        <div className="mt-12 border-t border-line md:mt-16">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.08 }}
              className="grid gap-2 border-b border-line py-8 md:grid-cols-[1fr_auto_auto] md:items-baseline md:gap-8"
            >
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-2xl font-black italic text-text md:text-4xl">
                  {loc.city}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-accent">
                  {loc.role}
                </span>
              </div>
              <p className="text-sm text-text-muted md:text-base">
                {loc.address}
              </p>
              <p className="text-sm text-text-muted md:text-right md:text-base">
                {loc.hours}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
