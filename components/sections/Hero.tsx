import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const facts = [
  { value: "72 hours", label: "From kickoff call to your shortlist" },
  { value: "4–6", label: "Vetted finalists per role, not a résumé dump" },
  { value: "0–3 hours", label: "Time-zone gap with US teams" },
  { value: "12 months", label: "Replacement guarantee on every hire" },
];

export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-display">
              Hire vetted Latin American talent in 72 hours.
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-lead mt-6 max-w-2xl text-lg">
              Tell us the role. We source, screen and interview across Latin
              America, then hand you four to six finalists you would actually
              hire — in your time zone. You pay when someone starts.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg">
                Book a call
                <ArrowRight size={17} />
              </Button>
              <Button href="#process" size="lg" variant="secondary">
                See how it works
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.value}>
                <dt className="text-2xl font-bold tracking-tight text-ink">
                  {fact.value}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-body">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
