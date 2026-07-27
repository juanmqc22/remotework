"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, FileText, Inbox, Send, X } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Aurora } from "@/components/ui/Atmosphere";

const EASE = [0.16, 1, 0.3, 1] as const;

const columns = [
  {
    icon: Send,
    step: "You bring",
    title: "A role and 45 minutes",
    items: [
      "One kickoff call to define the bar",
      "The salary band you can defend",
      "Whoever makes the final call",
    ],
    tone: "muted" as const,
  },
  {
    icon: Inbox,
    step: "We run",
    title: "The entire search",
    items: [
      "Sourcing across eight LatAm markets",
      "Structured screening against your scorecard",
      "Skills exercise and live English assessment",
      "Reference checks and salary alignment",
      "Interview scheduling in your calendar",
      "Offer negotiation through day one",
    ],
    tone: "brand" as const,
  },
  {
    icon: FileText,
    step: "You get",
    title: "Four to six real finalists",
    items: [
      "A written scorecard per candidate",
      "A recorded intro you can share internally",
      "Verified salary expectations and notice period",
      "A confirmed start date",
    ],
    tone: "muted" as const,
  },
];

const shortlist = [
  { code: "Candidate A", city: "São Paulo, BR", score: 96, tag: "Ready now" },
  { code: "Candidate B", city: "Medellín, CO", score: 92, tag: "2-week notice" },
  { code: "Candidate C", city: "Buenos Aires, AR", score: 89, tag: "Ready now" },
  { code: "Candidate D", city: "Guadalajara, MX", score: 85, tag: "3-week notice" },
];

const notThis = [
  "Send you forty résumés and call it a pipeline",
  "Charge a retainer before you have seen anyone",
  "Disappear the moment the offer is signed",
  "Pass along a candidate we would not hire ourselves",
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative isolate overflow-hidden border-y border-line/70 bg-ink-2 py-28 md:py-40"
    >
      <Aurora intensity="soft" />

      <Container size="wide" className="relative z-10">
        <SectionHeading
          eyebrow="What we actually do"
          title="We are not a job board. We are the recruiting team you never hired."
          highlight={["recruiting", "team"]}
          lead={
            <>
              Avante People plugs into your company as an outsourced talent
              function. You keep every hiring decision. We absorb everything that
              happens before it.
            </>
          }
        />

        {/* Three-column division of labour */}
        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3"
          stagger={0.12}
        >
          {columns.map((column) => (
            <RevealItem key={column.step}>
              <SpotlightCard
                className={
                  column.tone === "brand"
                    ? "h-full border-ember/30 bg-linear-to-b from-surface-2 to-ink-2 p-8"
                    : "h-full p-8"
                }
              >
                <div className="flex items-center gap-3">
                  <span
                    className={
                      column.tone === "brand"
                        ? "flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-gold to-ember text-void"
                        : "flex size-10 items-center justify-center rounded-xl border border-line-2 bg-ink/60 text-flame"
                    }
                  >
                    <column.icon size={18} />
                  </span>
                  <span className="text-eyebrow text-dim">{column.step}</span>
                </div>

                <h3 className="font-display mt-6 text-2xl font-bold tracking-tight text-chalk">
                  {column.title}
                </h3>

                <ul className="mt-6 space-y-3">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-mist">
                      <Check
                        size={15}
                        className={
                          column.tone === "brand"
                            ? "mt-0.5 shrink-0 text-gold"
                            : "mt-0.5 shrink-0 text-dim"
                        }
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {column.tone === "brand" && (
                  <div className="mt-7 rounded-lg border border-ember/25 bg-ember/8 px-4 py-3 text-xs leading-relaxed text-flame">
                    Roughly 40 hours of recruiting work per role — off your team&apos;s
                    calendar.
                  </div>
                )}
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* The deliverable, rendered */}
        <div className="mt-24 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right" blur>
            <span className="text-eyebrow text-flame">The deliverable</span>
            <h3 className="text-cinema-sm mt-5 text-chalk">
              Day three, one link, decision ready.
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              No inbox archaeology. Every finalist arrives scored against the
              scorecard you approved on the kickoff call, with a recorded intro,
              verified compensation expectations and a confirmed availability date.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-mist">
              Your job shrinks to the only part that was ever yours:{" "}
              <span className="text-chalk">deciding who you like best.</span>
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.12}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 z-0 rounded-[2rem] bg-ember/10 blur-3xl"
              />
              <div className="edge-card overflow-hidden border-line-2 p-1">
                <div className="rounded-[0.85rem] bg-void/70 backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-line px-5 py-4">
                    <div>
                      <div className="font-display text-sm font-semibold text-chalk">
                        Shortlist · Senior Backend Engineer
                      </div>
                      <div className="mt-0.5 text-xs text-dim">
                        Delivered 71h after kickoff
                      </div>
                    </div>
                    <span className="rounded-full border border-aurora/30 bg-aurora/10 px-2.5 py-1 text-[0.65rem] font-medium tracking-wide text-aurora uppercase">
                      Ready
                    </span>
                  </div>

                  <ul className="divide-y divide-line/70">
                    {shortlist.map((candidate, i) => (
                      <motion.li
                        key={candidate.code}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 0.7,
                          ease: EASE,
                          delay: 0.15 + i * 0.12,
                        }}
                        className="flex items-center gap-4 px-5 py-4"
                      >
                        <span className="font-display flex size-9 shrink-0 items-center justify-center rounded-full border border-line-2 bg-surface text-xs font-bold text-mist">
                          {candidate.code.slice(-1)}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="truncate text-sm font-medium text-chalk">
                              {candidate.code}
                            </span>
                            <span className="font-display shrink-0 text-sm font-bold text-gold">
                              {candidate.score}
                            </span>
                          </div>
                          <div className="mt-2 h-1 overflow-hidden rounded-full bg-line">
                            <motion.div
                              className="h-full rounded-full bg-linear-to-r from-gold to-ember"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${candidate.score}%` }}
                              viewport={{ once: true, margin: "-60px" }}
                              transition={{
                                duration: 1.2,
                                ease: EASE,
                                delay: 0.35 + i * 0.12,
                              }}
                            />
                          </div>
                          <div className="mt-2 flex items-center gap-2 text-[0.7rem] text-dim">
                            <span>{candidate.city}</span>
                            <span className="size-0.5 rounded-full bg-dim" />
                            <span>{candidate.tag}</span>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-center text-[0.7rem] text-dim">
                Illustrative view of a delivered shortlist.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Anti-promises */}
        <Reveal delay={0.1} className="mt-24">
          <div className="edge-card border-line-2 p-8 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
              <div className="md:w-1/3">
                <span className="text-eyebrow text-dim">Just as important</span>
                <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-chalk">
                  What we will never do.
                </h3>
              </div>
              <ul className="grid flex-1 grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {notThis.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-mist">
                    <X size={15} className="mt-0.5 shrink-0 text-ember" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
