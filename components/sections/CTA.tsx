"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CalendarDays, ClipboardCheck, PhoneCall } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal, { RevealWords } from "@/components/ui/Reveal";
import { Aurora, GridBackdrop } from "@/components/ui/Atmosphere";

const nextSteps = [
  {
    icon: PhoneCall,
    title: "A 20-minute call",
    body: "You describe the role. We tell you honestly whether we can fill it and what it will cost.",
  },
  {
    icon: ClipboardCheck,
    title: "A written scorecard",
    body: "Within a day, the brief we will search against — yours to approve or rewrite.",
  },
  {
    icon: CalendarDays,
    title: "Finalists in 72 hours",
    body: "Four to six people, scored and ready. You decide who to meet. No obligation, no fee until someone starts.",
  },
];

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const glow = useTransform(scrollYProgress, [0, 1], [0.15, 0.7]);
  const lift = useTransform(scrollYProgress, [0, 1], [70, 0]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative isolate overflow-hidden py-32 md:py-48"
    >
      <Aurora intensity="strong" />
      <GridBackdrop className="opacity-30" />

      <motion.div
        aria-hidden
        style={{ opacity: glow }}
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[38rem] w-[75rem] -translate-x-1/2 translate-y-1/3 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,90,31,0.22),transparent_65%)] blur-2xl"
      />

      <Container size="wide" className="relative z-10">
        <motion.div style={{ y: lift }} className="mx-auto max-w-4xl text-center">
          <Reveal duration={0.7}>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-linear-to-r from-transparent to-ember" />
              <span className="text-eyebrow text-flame">Start here</span>
              <span className="h-px w-8 bg-linear-to-l from-transparent to-ember" />
            </div>
          </Reveal>

          <h2 className="text-cinema mt-8 headline">
            <RevealWords
              text="Your next hire is already out there."
              highlight={["already", "out", "there."]}
              delay={0.1}
            />
          </h2>

          <Reveal delay={0.2} className="mt-8">
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-mist md:text-xl">
              They are working somewhere they have outgrown, three hours from your
              office, and they will not find your job post. Give us the role and
              seventy-two hours.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                href="mailto:hello@avantepeople.com?subject=Discovery%20call"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book a discovery call
                <ArrowRight
                  size={17}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-1"
                />
              </Button>
              <Button
                href="mailto:hello@avantepeople.com?subject=Hiring%20Health%20Assessment"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Take the free hiring assessment
              </Button>
            </div>
          </Reveal>
        </motion.div>

        {/* What happens next */}
        <Reveal delay={0.15} className="mt-20">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line/60 md:grid-cols-3">
            {nextSteps.map((step, i) => (
              <div
                key={step.title}
                className="group bg-ink/85 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-surface/70"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg border border-line-2 bg-ink/60 text-flame transition-colors duration-500 group-hover:text-gold">
                    <step.icon size={16} />
                  </span>
                  <span className="font-display text-xs font-bold tracking-widest text-dim">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-chalk">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
