export type Product = {
  id: string;
  name: string;
  origin: string;
  notes: string;
  price: number;
  unit: string;
  image: string;
  spec: { origin: string; roast: string };
};

export const products: Product[] = [
  {
    id: "forest-reserve",
    name: "Forest Reserve",
    origin: "Etiopia · Tostatura chiara",
    notes: "Note floreali, agrumi e frutti rossi. Per chi inizia presto.",
    price: 14,
    unit: "250g",
    image: "/forest-cup.jpg",
    spec: { origin: "ethiopia", roast: "light" },
  },
  {
    id: "morning-build",
    name: "Morning Build",
    origin: "Brasile · Colombia · Tostatura media",
    notes:
      "Cioccolato, nocciola e un finale rotondo. Il blend di tutti i giorni.",
    price: 12,
    unit: "250g",
    image: "/latte-art.jpg",
    spec: { origin: "brazil+colombia", roast: "medium" },
  },
];
