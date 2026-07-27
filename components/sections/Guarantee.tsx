"use client";

import React from "react";
import { CircleDollarSign, RefreshCw, Unlock } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { GridBackdrop } from "@/components/ui/Atmosphere";

const pillars = [
  {
    icon: CircleDollarSign,
    headline: "Nothing until someone starts",
    body: "No retainer, no engagement fee, no monthly minimum. Our fee is due on the hire's first day. If you never hire, you never pay — the search costs you a kickoff call.",
    tag: "Success-based",
  },
  {
    icon: RefreshCw,
    headline: "A replacement window on every hire",
    body: "If a placement does not work out inside the guarantee period, we restart the search and place a replacement at no additional fee. Our incentive is the same as yours: get it right the first time.",
    tag: "90-day guarantee",
  },
  {
    icon: Unlock,
    headline: "No exclusivity, no lock-in",
    body: "Keep your own pipeline running. Work with other partners. Cancel a search mid-flight without penalty. We would rather earn the next role than contract our way into it.",
    tag: "Cancel anytime",
  },
];

export default function Guarantee() {
  return (
    <section id="pricing" className="relative isolate overflow-hidden py-28 md:py-40">
      <GridBackdrop className="opacity-20" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 z-0 size-[34rem] rounded-full bg-gold/8 blur-[150px]"
      />

      <Container size="wide" className="relative z-10">
        <SectionHeading
          eyebrow="How we get paid"
          title="We carry the risk of the search. You carry none of it."
          highlight={["You", "carry", "none", "of", "it."]}
          align="center"
          lead={
            <>
              Most agencies get paid for effort. We think that is backwards, so we
              built the commercial model the way we would want it if we were the
              ones buying.
            </>
          }
        />

        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3"
          stagger={0.12}
        >
          {pillars.map((pillar) => (
            <RevealItem key={pillar.headline}>
              <SpotlightCard className="h-full p-8">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-linear-to-br from-gold to-ember text-void">
                    <pillar.icon size={19} />
                  </span>
                  <span className="rounded-full border border-line-2 bg-ink/60 px-3 py-1 text-[0.65rem] font-medium tracking-wider text-flame uppercase">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-display mt-6 text-xl leading-snug font-semibold text-chalk">
                  {pillar.headline}
                </h3>
                <p className="mt-3 leading-relaxed text-mist">{pillar.body}</p>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} blur className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <div
              aria-hidden
              className="mx-auto mb-8 h-px w-24 bg-linear-to-r from-transparent via-ember to-transparent"
            />
            <p className="font-editorial text-2xl leading-snug text-chalk italic md:text-3xl">
              “If the hire does not work, we have not done our job — and we should
              not be holding your money while we figure that out.”
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
