"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CalendarCheck, Handshake, Radar, Target } from "lucide-react";
import Container from "@/components/layout/Container";
import Reveal, { RevealWords } from "@/components/ui/Reveal";
import { Aurora } from "@/components/ui/Atmosphere";

const EASE = [0.16, 1, 0.3, 1] as const;

const phases = [
  {
    number: "01",
    day: "Hour 0",
    icon: Target,
    title: "Calibrate",
    body: "A 45-minute kickoff where we pin down the scorecard: the three outcomes this person owns in their first ninety days, the skills that are non-negotiable, the salary band you can defend, and who signs off.",
    output: "A written scorecard both sides agree on",
  },
  {
    number: "02",
    day: "Hours 1–36",
    icon: Radar,
    title: "Hunt",
    body: "We work our network and active pipelines across Argentina, Brazil, Colombia, Mexico, Chile, Uruguay, Peru and Costa Rica. Most people worth hiring are not applying to job posts, so we go and find them.",
    output: "40–80 sourced profiles, narrowed to ~15",
  },
  {
    number: "03",
    day: "Hours 36–70",
    icon: CalendarCheck,
    title: "Prove",
    body: "Structured interviews against your scorecard, a role-relevant skills exercise, a live English assessment, reference checks, and an open conversation about compensation and notice period.",
    output: "4–6 finalists with scorecards and recorded intros",
  },
  {
    number: "04",
    day: "Hour 72 onward",
    icon: Handshake,
    title: "Land",
    body: "We schedule your interviews, prep candidates properly, manage the offer conversation on both sides, and stay on through resignation, paperwork and day one. Nobody goes quiet after the signature.",
    output: "A signed offer and a confirmed start date",
  },
];

export default function Process() {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 65%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section
      id="process"
      className="relative isolate overflow-hidden border-y border-line/70 bg-ink-2 py-28 md:py-40"
    >
      <Aurora intensity="soft" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
          {/* Sticky title column */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal duration={0.7}>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-linear-to-r from-transparent to-ember" />
                <span className="text-eyebrow text-flame">The 72 hours</span>
              </div>
            </Reveal>

            <h2 className="text-cinema-sm mt-6 headline">
              <RevealWords
                text="Four moves. Three days. One hire."
                highlight={["One", "hire."]}
                delay={0.08}
              />
            </h2>

            <Reveal delay={0.18} className="mt-6">
              <p className="text-lg leading-relaxed text-mist">
                The clock starts when the kickoff call ends. Here is precisely what
                happens inside it — and what lands on your desk at each step.
              </p>
            </Reveal>

            <Reveal delay={0.28} className="mt-10">
              <div className="edge-card border-ember/25 p-6">
                <div className="font-display text-4xl font-bold tracking-tight text-ember-gradient">
                  72h
                </div>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  From the end of the kickoff call to finalists in your inbox. If we
                  miss it, we tell you why on hour 73 — not on day nine.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Timeline */}
          <div ref={railRef} className="relative">
            {/* Rail */}
            <div
              aria-hidden
              className="absolute top-2 bottom-2 left-[1.4375rem] w-px bg-line md:left-[1.6875rem]"
            >
              <motion.div
                className="h-full w-full origin-top bg-linear-to-b from-gold via-flame to-ember"
                style={{ scaleY: progress }}
              />
            </div>

            <div className="space-y-14">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.85, ease: EASE, delay: i * 0.05 }}
                  className="group relative flex gap-6 md:gap-8"
                >
                  <div className="relative z-10 shrink-0">
                    <span className="flex size-12 items-center justify-center rounded-full border border-line-2 bg-ink transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-ember/60 group-hover:bg-surface md:size-14">
                      <phase.icon
                        size={20}
                        className="text-mist transition-colors duration-500 group-hover:text-gold"
                      />
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 pb-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-xs font-bold tracking-widest text-dim">
                        {phase.number}
                      </span>
                      <span className="rounded-full border border-line-2 bg-ink/70 px-2.5 py-0.5 text-[0.65rem] font-medium tracking-wider text-flame uppercase">
                        {phase.day}
                      </span>
                    </div>

                    <h3 className="font-display mt-3 text-3xl font-bold tracking-tight text-chalk transition-colors duration-500 group-hover:text-ember-gradient md:text-4xl">
                      {phase.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-relaxed text-mist">
                      {phase.body}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2.5 rounded-lg border border-line bg-ink/60 px-4 py-2.5">
                      <span className="text-eyebrow text-dim">You get</span>
                      <span className="text-sm text-chalk">{phase.output}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
