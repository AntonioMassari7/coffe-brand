import Link from "next/link";
import { Logo } from "./logo";

const links = [
  { href: "/#menu", label: "Menu" },
  { href: "/#about", label: "About" },
  { href: "/#locations", label: "Locations" },
  { href: "/shop", label: "Shop" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg px-6 py-10 text-text md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs text-text-muted">
          <span className="text-accent">$</span>{" "}
          git commit -m &quot;ottimo caffè, ottimo codice&quot;
        </p>
        <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <Link href="/" className="text-2xl">
            <Logo />
          </Link>
          <nav className="flex gap-6 text-[10px] uppercase tracking-[0.2em] text-text-muted">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted/70">
            devkafe.com · @devkafe
          </p>
        </div>
      </div>
    </footer>
  );
}
