import React from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";

const split = [
  {
    title: "You bring",
    items: [
      "The role and what good looks like",
      "A 30-minute kickoff call",
      "Final interviews with the finalists",
      "The hiring decision — always yours",
    ],
  },
  {
    title: "We run",
    items: [
      "Sourcing across eight LatAm markets",
      "Screening, English assessment and reference checks",
      "First-round interviews and skills validation",
      "Offer support, contracting and onboarding",
    ],
  },
  {
    title: "You get",
    items: [
      "Four to six finalists in 72 hours",
      "A written brief on every candidate",
      "Someone who overlaps your working day",
      "A 12-month replacement guarantee",
    ],
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-b border-line">
      <Container className="py-16 md:py-24">
        <SectionHeading
          eyebrow="What we do"
          title="We are the recruiting team you never hired."
          lead="Avante People plugs into your company as an outsourced talent function. You keep every hiring decision. We absorb everything that happens before it."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {split.map((column, i) => (
            <Reveal key={column.title} delay={i * 0.08}>
              <Card className="h-full">
                <h3 className="text-h3">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-body"
                    >
                      <span
                        aria-hidden
                        className="mt-2 size-1 shrink-0 rounded-full bg-blue"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
