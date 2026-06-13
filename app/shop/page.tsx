"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { products } from "@/lib/products";
import { useCart } from "@/context/cart-context";
import { CodeTag } from "@/components/code-tag";

export default function ShopPage() {
  const { addItem } = useCart();

  return (
    <>
      <Header variant="solid" />
      <main className="flex-1 bg-bg px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12 md:mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Shop
            </p>
            <h1 className="mt-4 max-w-xl font-display text-3xl font-black italic leading-tight text-text md:text-5xl">
              La selezione completa.
            </h1>
            <p className="mt-4 max-w-md text-base text-text-muted md:text-lg">
              Sacchetti da 250g, tostati su richiesta e spediti entro 48 ore
              in tutta Italia.
            </p>
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
                  <h2 className="font-display text-2xl font-black italic text-text md:text-3xl">
                    {product.name}
                  </h2>
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
                  className="mt-5 inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-bg transition-transform hover:scale-[1.03]"
                >
                  Aggiungi al carrello
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
