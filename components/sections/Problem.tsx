"use client";

import React from "react";
import { AlertTriangle, Clock, MoonStar, Wallet } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { GridBackdrop } from "@/components/ui/Atmosphere";

const problems = [
  {
    icon: Wallet,
    cost: "$180k+",
    title: "The local hire prices you out",
    body: "A senior US hire lands near $180k fully loaded once you add benefits, payroll tax and equipment. For most teams that is one hire instead of the three the roadmap needs.",
  },
  {
    icon: MoonStar,
    cost: "8–12h",
    title: "Far-shore costs you the day",
    body: "Traditional outsourcing sits half a world away. Every question becomes a 24-hour round trip, every clarification a lost sprint day. Cheap on the invoice, expensive on the calendar.",
  },
  {
    icon: AlertTriangle,
    cost: "0%",
    title: "Freelance marketplaces are a coin flip",
    body: "No vetting, no references, no accountability. When a contractor stops replying mid-project, the platform refunds a fee — it does not rebuild your quarter.",
  },
  {
    icon: Clock,
    cost: "44 days",
    title: "In-house recruiting is a second job",
    body: "Six weeks of sourcing, screening and scheduling, run by someone who already has a full-time role. The position stays open, the team keeps absorbing the work.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative isolate overflow-hidden py-28 md:py-40">
      <GridBackdrop className="opacity-20" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 z-0 h-[40rem] w-[70rem] -translate-x-1/2 rounded-full bg-violet/10 blur-[160px]"
      />

      <Container size="wide" className="relative z-10">
        <SectionHeading
          eyebrow="The state of play"
          title="Every hiring option asks you to give something up."
          highlight={["give", "something", "up."]}
          lead={
            <>
              Budget, hours, certainty, or your own calendar. Most teams pick the
              least painful compromise and call it a strategy — then wonder why the
              roadmap keeps slipping.
            </>
          }
        />

        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
          stagger={0.1}
        >
          {problems.map((problem) => (
            <RevealItem key={problem.title}>
              <SpotlightCard className="h-full p-7">
                <div className="flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-line-2 bg-ink/60">
                    <problem.icon size={19} className="text-flame" />
                  </span>
                  <span className="font-display text-lg font-bold tracking-tight text-dim transition-colors duration-500 group-hover:text-ember">
                    {problem.cost}
                  </span>
                </div>

                <h3 className="font-display mt-6 text-lg leading-snug font-semibold text-chalk">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {problem.body}
                </p>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} blur className="mt-20">
          <figure className="relative mx-auto max-w-3xl text-center">
            <div
              aria-hidden
              className="mx-auto mb-8 h-px w-24 bg-linear-to-r from-transparent via-ember to-transparent"
            />
            <blockquote className="font-editorial text-2xl leading-snug text-chalk italic md:text-4xl">
              “There is a fourth option. It has been sitting one flight and zero
              time zones away the entire time.”
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
