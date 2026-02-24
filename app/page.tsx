import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Stats />
    </main>
  );
}
