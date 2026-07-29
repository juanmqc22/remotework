import React from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const facts = [
  { value: "72", unit: "hours", label: "Kickoff call to shortlist" },
  { value: "4–6", unit: "finalists", label: "Per role, never a résumé dump" },
  { value: "0–3", unit: "hours", label: "Time-zone gap with US teams" },
  { value: "12", unit: "months", label: "Replacement guarantee" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* A single wash behind the headline. No blooms, no grain — it
          exists to lift the type off pure white, nothing more. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-gradient-to-b from-ultra-wash to-transparent"
      />

      <Container className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl">
          <Reveal>
            <p className="text-eyebrow">Nearshore talent, US hours</p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="text-display mt-6">
              Hire vetted Latin American talent in 72&nbsp;hours.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lead mt-7 max-w-2xl">
              Tell us the role. We source, screen and interview across Latin
              America, then hand you four to six finalists you would actually
              hire — in your time zone. You pay when someone starts.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg">
                Book a call
              </Button>
              <Button href="#process" size="lg" variant="secondary">
                See how it works
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={420}>
          <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-rule pt-12 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="flex items-baseline gap-1.5">
                  <span className="tabular text-[2.75rem] leading-none font-bold tracking-[-0.04em] text-ink">
                    {fact.value}
                  </span>
                  <span className="text-sm font-medium text-muted">
                    {fact.unit}
                  </span>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-body">
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
