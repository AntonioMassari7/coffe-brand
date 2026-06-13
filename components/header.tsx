"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useCart } from "@/context/cart-context";

const navLinks = [
  { href: "/#menu", label: "Menu" },
  { href: "/#about", label: "About" },
  { href: "/#locations", label: "Locations" },
  { href: "/shop", label: "Shop" },
];

export function Header({
  variant = "transparent",
}: {
  variant?: "transparent" | "solid";
}) {
  const { openCart, count } = useCart();

  return (
    <header
      className={`inset-x-0 top-0 z-20 grid grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 py-6 md:px-12 ${
        variant === "solid"
          ? "sticky border-b border-line bg-bg/90 backdrop-blur"
          : "absolute"
      }`}
    >
      <Link href="/" className="justify-self-start text-xl text-text md:text-2xl">
        <Logo />
      </Link>

      <nav className="col-start-2 hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-text-muted md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-text"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        onClick={openCart}
        aria-label="Carrello"
        className="relative justify-self-end text-text transition-colors hover:text-accent"
      >
        <BagIcon className="h-5 w-5" />
        {count > 0 && (
          <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-medium text-bg">
            {count}
          </span>
        )}
      </button>
    </header>
  );
}

function BagIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 8h12l1 13H5L6 8Z" strokeLinejoin="round" />
      <path d="M9 8a3 3 0 0 1 6 0" strokeLinecap="round" />
    </svg>
  );
}
