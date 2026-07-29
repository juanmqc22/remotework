"use client";

import React, { useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "We have tried recruiting agencies before and it did not work.",
    a: "Most agencies are paid to produce volume, so you get twenty résumés and do the filtering yourself. We send four to six people, each with a written brief, and we are paid only when someone starts — then replace them free for twelve months. The incentive is to be right, not to be busy.",
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

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "mt-1 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        open ? "rotate-45" : "rotate-0"
      )}
    >
      <svg viewBox="0 0 16 16" className="size-4" fill="none">
        <path
          d="M8 2v12M2 8h12"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          className={open ? "text-ultra" : "text-muted"}
        />
      </svg>
    </span>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-rule">
      <Container className="py-24 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-eyebrow">Questions</p>
            <h2 className="text-h2 mt-5">
              The things people ask before they say yes.
            </h2>
          </Reveal>

          <dl>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal
                  key={faq.q}
                  delay={Math.min(i, 4) * 70}
                  className="border-b border-rule first:border-t first:border-rule"
                >
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-start justify-between gap-8 py-6 text-left"
                    >
                      <span
                        className={cn(
                          "text-h3 transition-colors duration-500",
                          isOpen ? "text-ultra" : "group-hover:text-ultra"
                        )}
                      >
                        {faq.q}
                      </span>
                      <Chevron open={isOpen} />
                    </button>
                  </dt>

                  {/* Grid-rows trick: animates to the content's real height
                      without measuring it in JS. */}
                  <dd
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 text-[0.9375rem] leading-relaxed text-body">
                        {faq.a}
                      </p>
                    </div>
                  </dd>
                </Reveal>
              );
            })}
          </dl>
        </div>
      </Container>
    </section>
  );
}
