"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/layout/Container";
import Reveal, { RevealWords } from "@/components/ui/Reveal";
import { Aurora } from "@/components/ui/Atmosphere";

const EASE = [0.16, 1, 0.3, 1] as const;

const principles = [
  {
    index: "I",
    title: "Six good options beat sixty résumés",
    body: "A long list is a way of moving the filtering work onto you. We would rather spend three extra days saying no on your behalf and send a shortlist where every name is a real yes.",
  },
  {
    index: "II",
    title: "Context before candidates",
    body: "We ask what broke the last time you hired for this role, who the person will disappoint if they get it wrong, and what your team actually rewards. Then we search. Never the other way around.",
  },
  {
    index: "III",
    title: "We only send people we would hire",
    body: "The bar is not 'meets the requirements'. It is 'we would put this person on our own team tomorrow'. If nobody clears that line this week, you hear that from us instead of receiving filler.",
  },
  {
    index: "IV",
    title: "The job ends on day ninety, not day one",
    body: "We stay through resignation, paperwork, onboarding and the first months. A signature is the middle of the process, not the end of it.",
  },
];

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      id="philosophy"
      className="relative isolate overflow-hidden border-y border-line/70 bg-ink-2 py-28 md:py-40"
    >
      <Aurora intensity="soft" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-24">
          <motion.div style={{ y }} className="lg:pt-8">
            <Reveal duration={0.7}>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-linear-to-r from-transparent to-ember" />
                <span className="text-eyebrow text-flame">How we think</span>
              </div>
            </Reveal>

            <h2 className="text-cinema-sm mt-6 headline">
              <RevealWords
                text="Four rules we do not break."
                highlight={["not", "break."]}
                delay={0.08}
              />
            </h2>

            <Reveal delay={0.2} className="mt-6">
              <p className="text-lg leading-relaxed text-mist">
                Recruiting is a trust business dressed up as a volume business. These
                are the commitments that keep us on the right side of that line.
              </p>
            </Reveal>
          </motion.div>

          <ul className="space-y-px overflow-hidden rounded-2xl border border-line bg-line/50">
            {principles.map((principle, i) => (
              <motion.li
                key={principle.index}
                initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
                className="group relative bg-ink-2 p-8 transition-colors duration-500 hover:bg-surface/70 md:p-10"
              >
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-linear-to-b from-gold to-ember transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
                />
                <div className="flex gap-6 md:gap-8">
                  <span className="font-editorial mt-0.5 shrink-0 text-2xl text-dim transition-colors duration-500 group-hover:text-gold">
                    {principle.index}
                  </span>
                  <div>
                    <h3 className="font-display text-xl leading-snug font-semibold text-chalk md:text-2xl">
                      {principle.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-mist">
                      {principle.body}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
