import React from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    when: "Day 0",
    title: "Kickoff call",
    body: "Thirty minutes. We map the role, the team it joins, the must-haves and the deal-breakers — so we screen against your bar, not a generic one.",
  },
  {
    when: "Day 1",
    title: "Sourcing",
    body: "We work our LatAm network and open market in parallel. Candidates are approached directly; nobody reaches you from a job board queue.",
  },
  {
    when: "Day 2",
    title: "Vetting",
    body: "Structured interview, English assessment, skills validation and reference checks. Most candidates are cut here — that is the point.",
  },
  {
    when: "Day 3",
    title: "Your shortlist",
    body: "Four to six finalists with a written brief on each: why they fit, where they are light, salary expectation and notice period. You interview and decide.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-line bg-subtle">
      <Container className="py-16 md:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="Four days from brief to finalists."
          lead="No black box. Here is exactly what happens after you book the call."
        />

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-line bg-page p-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-eyebrow">{step.when}</span>
                  <span
                    aria-hidden
                    className="h-px flex-1 bg-line"
                  />
                </div>
                <h3 className="text-h3 mt-4">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
