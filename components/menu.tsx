"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { products } from "@/lib/products";
import { useCart } from "@/context/cart-context";
import { CodeTag } from "./code-tag";

export function Menu() {
  const { addItem } = useCart();

  return (
    <section id="menu" className="bg-surface px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Menu
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-black italic leading-tight text-text md:text-5xl">
            Le miscele del momento.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {products.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl font-black italic text-text md:text-3xl">
                  {product.name}
                </h3>
                <span className="whitespace-nowrap text-sm text-accent">
                  € {product.price} / {product.unit}
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text-muted">
                {product.origin}
              </p>
              <p className="mt-3 text-base leading-[1.65] text-text-muted">
                {product.notes}
              </p>
              <CodeTag origin={product.spec.origin} roast={product.spec.roast} />
              <button
                onClick={() => addItem(product)}
                className="mt-5 inline-flex items-center rounded-full border border-line px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-text transition-colors hover:border-accent hover:text-accent"
              >
                Aggiungi al carrello
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
