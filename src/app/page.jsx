import Navbar from "@/components/layout/Navbar";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Stats from "@/components/sections/Stats";
import Network from "@/components/sections/Network";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

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
      <CTA />
      <Footer />
      <div className="" />
    </main>
  );
}
