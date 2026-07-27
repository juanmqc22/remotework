"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Aurora } from "@/components/ui/Atmosphere";

const EASE = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "Are these contractors or employees?",
    a: "Either. Most clients start with a contractor arrangement because it is fast and simple across borders, then move to an employer-of-record setup as the relationship settles. We walk you through the trade-offs on the kickoff call and introduce EOR partners where it makes sense — we do not push a structure that suits us over one that suits you.",
  },
  {
    q: "How do payments and compliance actually work?",
    a: "You pay the person directly, or through an employer of record, on your normal cycle. Contracts, IP assignment and confidentiality are handled in the hiring agreement before day one. We flag the country-specific details that matter — notice periods, mandatory bonuses, local holidays — so nothing surprises you in month three.",
  },
  {
    q: "Who owns the work and the intellectual property?",
    a: "You do, without ambiguity. IP assignment and confidentiality clauses are part of every agreement we help put in place, written to hold up in the candidate's jurisdiction as well as yours.",
  },
  {
    q: "Is 72 hours realistic, or is it a marketing number?",
    a: "It is the shortlist, not the signature. Seventy-two hours after the kickoff call you have four to six vetted finalists with scorecards and recorded intros. Your own interview loop and notice periods set the actual start date — typically two to five weeks out.",
  },
  {
    q: "What if none of the finalists are right?",
    a: "We recalibrate and go again at no additional cost. In practice a miss usually means the scorecard was wrong rather than the search, so we redo that conversation first. You are never billed for a search that did not produce a hire.",
  },
  {
    q: "How is the English level assessed?",
    a: "Live, by a human, in a conversation about the actual work — not a written test. Every finalist has held a fluent technical discussion before they reach your inbox, and the recorded intro lets you judge for yourself before you spend interview time.",
  },
  {
    q: "We are a small team. Are we too small for this?",
    a: "Most of our clients hire between one and five people a year. A small team is exactly where a single wrong hire hurts most, which is why the shortlist is short and the guarantee exists.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative isolate overflow-hidden py-28 md:py-40">
      <Aurora intensity="soft" />

      <Container size="wide" className="relative z-10">
        <SectionHeading
          eyebrow="Before you ask"
          title="The questions that come up on every first call."
          highlight={["every", "first", "call."]}
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-line">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={faq.q}
                  className="border-b border-line/70 last:border-b-0"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 px-6 py-6 text-left transition-colors duration-400 hover:bg-surface/50 md:px-8"
                  >
                    <span className="font-display text-base font-medium text-chalk md:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-line-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen
                          ? "rotate-45 border-ember/60 bg-ember/15 text-ember"
                          : "text-mist group-hover:border-line-2 group-hover:text-chalk"
                      }`}
                    >
                      <Plus size={14} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 leading-relaxed text-mist md:px-8 md:pr-20">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
