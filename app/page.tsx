import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyLatam from "@/components/sections/WhyLatam";
import Problem from "@/components/sections/Problem";
import Opportunity from "@/components/sections/Opportunity";
import Process from "@/components/sections/Process";
import Philosophy from "@/components/sections/Philosophy";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyLatam />
        <Problem />
        <Opportunity />
        <Process />
        <Philosophy />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
