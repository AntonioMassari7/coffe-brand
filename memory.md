# Dev Kafe — Project Memory

Stato del progetto, decisioni prese e riferimenti utili. Questo file affianca `CLAUDE.md` (che contiene le linee guida generali) con i dettagli specifici di **questo** progetto.

## Brand

- **Nome**: DEV KAFE
- **Tagline**: "Specialty Coffee · Developer Culture"
- **Lingua sito**: italiano (`lang="it"`)
- **Direzione visiva**: verde scuro / crema, ispirata al logo "RAVO KAFE" + tipografia dal brand board "dev_kafe_brand_fraunces.html"

## Stack

- Next.js 16.2.9 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4 (config via `@theme inline` in `app/globals.css`)
- Motion (`motion/react`) per le animazioni
- Deploy: Vercel

## Design tokens (`app/globals.css`)

| Token | Valore | Uso |
|---|---|---|
| `--color-bg` | `#15241b` | sfondo principale |
| `--color-surface` | `#1e332a` | sfondo sezioni alternate (Menu) |
| `--color-text` | `#f4f1e8` | testo principale |
| `--color-text-muted` | `#a9b6a8` | testo secondario |
| `--color-accent` | `#d9a15b` | unico colore accento (ambra) |
| `--color-line` | `rgba(244,241,232,0.1)` | divisori |

## Tipografia

- **Display**: Fraunces (variable, italic black) — titoli, headline
- **Body**: DM Sans — testo
- **Mono**: font-mono di sistema (Tailwind default) — solo per i tocchi "dev culture" (tag prodotto, riga terminale nel footer)

## Struttura del sito

`app/page.tsx` (homepage): Header → Hero → About → Menu → Locations → Shop (CTA) → Footer

`app/shop/page.tsx`: pagina shop dedicata, header "solido" (sticky), griglia prodotti con bottone "Aggiungi al carrello"

### Componenti principali

- `components/header.tsx` — nav centrata, prop `variant` (`transparent` per la hero, `solid` per le altre pagine), icona carrello con badge
- `components/hero.tsx` — video `public/herovideo.mp4` (tazza di caffè fumante su tronco nel bosco), reveal parola per parola
- `components/hero-video.tsx` — `HeroVideo`, crossfade tra due copie dello stesso clip poco prima della fine (0.8s) per nascondere lo scatto del loop. `public/hero.jpg` e `public/hero.mp4` non più usati ma lasciati in `/public`.
- `components/about.tsx`, `components/locations.tsx` (Milano/Torino/Bologna), `components/shop.tsx` (CTA finale, pannello colore accent)
- `components/menu.tsx` — card prodotto con immagine, prezzo, tag codice, bottone "Aggiungi al carrello"
- `components/footer.tsx` — link di navigazione + riga terminale `$ git commit -m "ottimo caffè, ottimo codice"`
- `components/cart-drawer.tsx` — cassetto laterale carrello (quantità, rimozione, totale, bottone "Procedi al pagamento" — **placeholder, da collegare a Stripe o altro in futuro**)
- `components/code-tag.tsx` — tag stile JSX `<coffee origin="..." roast="..." />` sotto ogni prodotto

### Dati e stato

- `lib/products.ts` — fonte unica dei prodotti (Forest Reserve € 14/250g, Morning Build € 12/250g), condivisa tra Menu e pagina Shop
- `context/cart-context.tsx` — `CartProvider` + `useCart()`, stato persistito in `localStorage` (`devkafe-cart`)

## Deploy

- Progetto Vercel: `antonios-projects-48ff2f99/coffe-brand`
- **URL produzione**: https://coffe-brand-sable.vercel.app
- Non collegato a un repo Git remoto → i redeploy si fanno manualmente con `npx vercel --prod --yes`

## Note tecniche / caveat

- **Cache immagini in dev**: il dev server di Next.js cache-a `/_next/image` in memoria. Dopo aver sostituito un file in `/public` referenziato da `next/image`, serve un riavvio completo del server (non basta cancellare `.next/cache`).
- **Screenshot full-page con Playwright**: le animazioni `whileInView` non si attivano se la pagina non viene scrollata prima dello screenshot (IntersectionObserver non scatta su `full_page` renderizzato in un colpo).

## Pending / idee future

- Collegare "Procedi al pagamento" a un vero processore (Stripe o altro)
- Eventuale collegamento del progetto a un repo Git per deploy automatici
