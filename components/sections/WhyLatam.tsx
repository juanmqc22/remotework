"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Clock, GraduationCap, Languages, Wallet } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { GridBackdrop } from "@/components/ui/Atmosphere";

const EASE = [0.16, 1, 0.3, 1] as const;

const advantages = [
  {
    icon: Clock,
    title: "Eight hours of real overlap",
    body: "Most of Latin America sits within three hours of US business hours. Standups happen live, blockers get cleared the same afternoon, and nobody works a graveyard shift to attend your sprint review.",
  },
  {
    icon: Wallet,
    title: "Senior people, junior budget",
    body: "The same seniority bar you would set locally, at a materially lower total cost. Teams typically redirect that difference into a second hire rather than into savings.",
  },
  {
    icon: GraduationCap,
    title: "A deep and growing bench",
    body: "Engineering, design, data, finance, marketing and support — trained at strong regional universities and, in most cases, already shipping for US companies.",
  },
  {
    icon: Languages,
    title: "Fluent English, familiar norms",
    body: "Written and spoken English assessed live before anyone reaches your shortlist, plus working habits shaped by years of proximity to the US market.",
  },
];

/** Working-day windows expressed in US Eastern time, as % of a 24h track. */
const timezones = [
  {
    label: "Your team",
    detail: "9:00 – 18:00 ET",
    blocks: [{ start: 37.5, width: 37.5 }],
    tone: "bg-chalk/70",
    overlap: "—",
  },
  {
    label: "LatAm hire",
    detail: "8:00 – 17:00 ET",
    blocks: [{ start: 33.3, width: 37.5 }],
    tone: "bg-linear-to-r from-gold to-ember",
    overlap: "8 hours",
  },
  {
    label: "Far-shore team",
    detail: "22:30 – 7:30 ET",
    blocks: [
      { start: 93.75, width: 6.25 },
      { start: 0, width: 31.25 },
    ],
    tone: "bg-violet/50",
    overlap: "≈ 0 hours",
  },
];

const comparison = [
  {
    label: "Overlap with your day",
    local: "Full",
    offshore: "Under 1 hour",
    latam: "6–8 hours",
  },
  {
    label: "Time to a shortlist",
    local: "4–6 weeks",
    offshore: "2–4 weeks",
    latam: "72 hours",
  },
  {
    label: "Cost versus a US hire",
    local: "Baseline",
    offshore: "Lowest, quality varies",
    latam: "40–60% less",
  },
  {
    label: "English in daily work",
    local: "Native",
    offshore: "Varies by candidate",
    latam: "Assessed before shortlist",
  },
  {
    label: "Who runs the search",
    local: "Your team",
    offshore: "The vendor's bench",
    latam: "Us, against your scorecard",
  },
];

export default function WhyLatam() {
  return (
    <section id="why-latam" className="relative isolate overflow-hidden py-28 md:py-40">
      <GridBackdrop className="opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 z-0 size-[36rem] rounded-full bg-aurora/8 blur-[150px]"
      />

      <Container size="wide" className="relative z-10">
        <SectionHeading
          eyebrow="Why Latin America"
          title="The only region that gives you proximity and price at once."
          highlight={["proximity", "and", "price"]}
          lead={
            <>
              Nearshore is not a discount version of local hiring. It is the one
              arrangement where the calendar, the budget and the talent bar can all
              hold at the same time.
            </>
          }
        />

        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2"
          stagger={0.1}
        >
          {advantages.map((advantage) => (
            <RevealItem key={advantage.title}>
              <SpotlightCard className="h-full p-8">
                <span className="flex size-11 items-center justify-center rounded-xl border border-line-2 bg-ink/60">
                  <advantage.icon size={19} className="text-gold" />
                </span>
                <h3 className="font-display mt-6 text-xl font-semibold tracking-tight text-chalk">
                  {advantage.title}
                </h3>
                <p className="mt-3 leading-relaxed text-mist">{advantage.body}</p>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Time zone overlap, drawn */}
        <Reveal blur className="mt-20">
          <div className="edge-card border-line-2 p-7 md:p-10">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <h3 className="font-display text-2xl font-bold tracking-tight text-chalk">
                A working day, side by side
              </h3>
              <p className="text-sm text-dim">All windows shown in US Eastern time</p>
            </div>

            <div className="mt-10 space-y-7">
              {timezones.map((row, rowIndex) => (
                <div key={row.label}>
                  <div className="mb-2.5 flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm font-semibold text-chalk">
                        {row.label}
                      </span>
                      <span className="text-xs text-dim">{row.detail}</span>
                    </div>
                    <span
                      className={
                        rowIndex === 1
                          ? "font-display text-sm font-bold text-gold"
                          : "text-xs text-dim"
                      }
                    >
                      {row.overlap}
                    </span>
                  </div>

                  <div className="relative h-8 overflow-hidden rounded-lg border border-line bg-ink/70">
                    {/* Your working window, as a reference band */}
                    <div
                      aria-hidden
                      className="absolute inset-y-0 border-x border-dashed border-line-2/80 bg-chalk/[0.03]"
                      style={{ left: "37.5%", width: "37.5%" }}
                    />
                    {row.blocks.map((block, i) => (
                      <motion.div
                        key={i}
                        className={`absolute inset-y-1.5 rounded-md ${row.tone}`}
                        style={{ left: `${block.start}%` }}
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: `${block.width}%`, opacity: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 1.1,
                          ease: EASE,
                          delay: 0.15 + rowIndex * 0.18 + i * 0.08,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-between text-[0.65rem] tracking-wider text-dim">
              {["12a", "6a", "12p", "6p", "12a"].map((tick, i) => (
                <span key={i}>{tick}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Comparison */}
        <Reveal delay={0.1} className="mt-16">
          <h3 className="font-display text-xl font-semibold tracking-tight text-chalk">
            How the three options compare
          </h3>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <thead>
                <tr className="bg-ink-2">
                  <th className="px-6 py-5 text-xs font-medium tracking-wider text-dim uppercase">
                    &nbsp;
                  </th>
                  <th className="px-6 py-5 text-xs font-medium tracking-wider text-dim uppercase">
                    US hire
                  </th>
                  <th className="px-6 py-5 text-xs font-medium tracking-wider text-dim uppercase">
                    Far-shore vendor
                  </th>
                  <th className="border-x border-ember/25 bg-ember/8 px-6 py-5 text-xs font-semibold tracking-wider text-gold uppercase">
                    LatAm with us
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <motion.tr
                    key={row.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                    className="border-t border-line"
                  >
                    <td className="px-6 py-5 text-sm font-medium text-chalk">
                      {row.label}
                    </td>
                    <td className="px-6 py-5 text-sm text-mist">{row.local}</td>
                    <td className="px-6 py-5 text-sm text-mist">{row.offshore}</td>
                    <td className="border-x border-ember/25 bg-ember/8 px-6 py-5 text-sm font-medium text-chalk">
                      <span className="inline-flex items-center gap-2">
                        <Check size={14} className="shrink-0 text-gold" />
                        {row.latam}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-dim">
            Ranges reflect typical nearshore market conditions and will vary by role
            and seniority.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
