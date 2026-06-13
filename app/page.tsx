import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Menu } from "@/components/menu";
import { Locations } from "@/components/locations";
import { Shop } from "@/components/shop";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <Locations />
        <Shop />
      </main>
      <Footer />
    </>
  );
}
