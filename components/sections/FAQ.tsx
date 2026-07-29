"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    q: "We have tried recruiting agencies before and it did not work.",
    a: "Most agencies are paid to produce volume, so you get twenty résumés and do the filtering yourself. We send four to six people, each with a written brief, and we are paid only when someone starts — and we replace them free for twelve months. The incentive is to be right, not to be busy.",
  },
  {
    q: "What does it cost?",
    a: "A one-time fee based on the role, due on the hire's first day. No retainer and no monthly minimum. We quote the exact number on the kickoff call, before any work begins.",
  },
  {
    q: "How do you handle the time-zone difference?",
    a: "Latin America sits zero to three hours from US time zones, so your hire is online during your working day. That is the core reason we recruit there rather than further afield.",
  },
  {
    q: "What about English?",
    a: "Every candidate is assessed for spoken and written English before they reach your shortlist. If communication is not at the level the role needs, they do not make it through.",
  },
  {
    q: "How do we employ someone in another country?",
    a: "Most clients engage the hire as a contractor or through an employer-of-record. We walk you through the options on the call and support the contracting either way.",
  },
  {
    q: "What roles do you place?",
    a: "Engineering, data, design, finance and operations, plus customer-facing roles like support and sales development. If we do not think we can fill a role well, we will say so on the call rather than take the search.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-line">
      <Container className="py-16 md:py-24">
        <SectionHeading
          eyebrow="Questions"
          title="The things people ask before they say yes."
        />

        <dl className="mt-12 max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={Math.min(i, 4) * 0.05}>
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-h3">{faq.q}</span>
                    <span className="mt-0.5 shrink-0 text-blue">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                </dt>
                {isOpen && (
                  <dd className="max-w-2xl pb-6 text-[0.9375rem] leading-relaxed text-body">
                    {faq.a}
                  </dd>
                )}
              </Reveal>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
