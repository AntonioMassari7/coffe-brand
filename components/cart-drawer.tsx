"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "@/context/cart-context";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="fixed inset-0 z-40 bg-bg/60"
            onClick={closeCart}
          />
          <motion.aside
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-surface px-6 py-8 md:px-8"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-black italic text-text">
                Carrello
              </h2>
              <button
                onClick={closeCart}
                aria-label="Chiudi carrello"
                className="text-text-muted transition-colors hover:text-text"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <p className="mt-10 text-sm text-text-muted">
                Il tuo carrello è vuoto.
              </p>
            ) : (
              <div className="mt-8 flex-1 space-y-6 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-display text-lg font-black italic text-text">
                          {item.name}
                        </h3>
                        <span className="whitespace-nowrap text-sm text-accent">
                          € {item.price * item.quantity}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs uppercase tracking-[0.2em] text-text-muted">
                        {item.unit}
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          aria-label="Diminuisci quantità"
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-text transition-colors hover:border-accent hover:text-accent"
                        >
                          −
                        </button>
                        <span className="w-4 text-center text-sm text-text">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          aria-label="Aumenta quantità"
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-text transition-colors hover:border-accent hover:text-accent"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-xs uppercase tracking-[0.2em] text-text-muted transition-colors hover:text-text"
                        >
                          Rimuovi
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {items.length > 0 && (
              <div className="mt-8 border-t border-line pt-6">
                <div className="flex items-baseline justify-between text-text">
                  <span className="text-xs uppercase tracking-[0.3em] text-text-muted">
                    Totale
                  </span>
                  <span className="font-display text-2xl font-black italic">
                    € {total}
                  </span>
                </div>
                <button className="mt-6 w-full rounded-full bg-accent px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-bg transition-transform hover:scale-[1.02]">
                  Procedi al pagamento
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
