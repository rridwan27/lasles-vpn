import Navbar from "@/components/layout/Navbar";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Stats from "@/components/sections/Stats";
import Network from "@/components/sections/Network";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Network />
      <Testimonials />
      <div className="h-screen" />
    </main>
  );
}
