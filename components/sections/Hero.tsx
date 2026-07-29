import React from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const facts = [
  { value: "72", unit: "hours", label: "Kickoff call to shortlist" },
  { value: "4–6", unit: "finalists", label: "Per role, never a résumé dump" },
  { value: "0–3", unit: "hours", label: "Time-zone gap with US teams" },
  { value: "12", unit: "months", label: "Replacement guarantee" },
];

/**
 * Above the fold, so nothing here uses the scroll-driven .reveal —
 * that would hold the largest contentful paint behind hydration and an
 * observer callback. These entrances are pure CSS and run at first paint.
 */
function rise(delay: number) {
  return { "--rise-delay": `${delay}ms` } as React.CSSProperties;
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* A single wash behind the headline. No blooms, no grain — it
          exists to lift the type off pure white, nothing more. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(38rem,85%)] bg-gradient-to-b from-ultra-wash to-transparent"
      />

      <Container className="section relative">
        <div className="max-w-4xl">
          <p className="text-eyebrow rise" style={rise(0)}>
            Nearshore talent, US hours
          </p>

          <h1 className="text-display rise mt-6" style={rise(70)}>
            Hire vetted Latin American talent in 72&nbsp;hours.
          </h1>

          <p className="text-lead rise mt-7 max-w-2xl" style={rise(150)}>
            Tell us the role. We source, screen and interview across Latin
            America, then hand you four to six finalists you would actually
            hire — in your time zone. You pay when someone starts.
          </p>

          <div
            className="rise mt-10 flex flex-col gap-3 sm:flex-row"
            style={rise(230)}
          >
            <Button href="#contact" size="lg">
              Book a call
            </Button>
            <Button href="#process" size="lg" variant="secondary">
              See how it works
            </Button>
          </div>
        </div>

        <dl
          className="rise mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-rule pt-12 lg:grid-cols-4"
          style={rise(320)}
        >
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="flex items-baseline gap-1.5">
                <span className="tabular text-[clamp(2.25rem,1.9rem+1.5vw,2.75rem)] leading-none font-bold tracking-[-0.04em] text-ink">
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
      </Container>
    </section>
  );
}
