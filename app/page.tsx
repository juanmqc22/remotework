import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhyLatam from "@/components/sections/WhyLatam";
import Process from "@/components/sections/Process";
import Roles from "@/components/sections/Roles";
import Calculator from "@/components/sections/Calculator";
import Guarantee from "@/components/sections/Guarantee";
import Philosophy from "@/components/sections/Philosophy";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <WhatWeDo />
        <WhyLatam />
        <Process />
        <Roles />
        <Calculator />
        <Guarantee />
        <Philosophy />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
