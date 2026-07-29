import React from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

const columns = [
  {
    index: "01",
    title: "You bring",
    items: [
      "The role and what good looks like",
      "A 30-minute kickoff call",
      "Final interviews with the finalists",
      "The hiring decision — always yours",
    ],
  },
  {
    index: "02",
    title: "We run",
    items: [
      "Sourcing across eight LatAm markets",
      "Screening, English assessment, reference checks",
      "First-round interviews and skills validation",
      "Offer support, contracting and onboarding",
    ],
  },
  {
    index: "03",
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
    <section id="what-we-do" className="border-t border-rule">
      <Container className="py-24 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-eyebrow">What we do</p>
            <h2 className="text-h2 mt-5">
              We are the recruiting team you never hired.
            </h2>
            <p className="text-lead mt-6 max-w-md">
              Avante People plugs into your company as an outsourced talent
              function. You keep every hiring decision. We absorb everything
              that happens before it.
            </p>
          </Reveal>

          <div>
            {columns.map((column, i) => (
              <Reveal
                key={column.title}
                delay={i * 110}
                className="border-t border-rule py-9 first:border-t-0 first:pt-0"
              >
                <div className="flex items-baseline gap-4">
                  <span className="tabular text-sm font-semibold text-ultra">
                    {column.index}
                  </span>
                  <h3 className="text-h3">{column.title}</h3>
                </div>

                <ul className="mt-5 space-y-3 pl-10">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="relative text-[0.9375rem] leading-relaxed text-body before:absolute before:-left-5 before:top-[0.7em] before:size-1 before:rounded-full before:bg-rule-strong"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
