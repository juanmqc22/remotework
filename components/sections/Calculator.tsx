"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Aurora } from "@/components/ui/Atmosphere";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Fully loaded annual cost midpoints, USD. Indicative, not quotes. */
const roles = [
  { id: "swe", label: "Senior Engineer", us: 172_000, latam: 74_000 },
  { id: "design", label: "Product Designer", us: 150_000, latam: 60_000 },
  { id: "data", label: "Data Engineer", us: 168_000, latam: 72_000 },
  { id: "ae", label: "Account Executive", us: 140_000, latam: 58_000 },
  { id: "csm", label: "Customer Success", us: 112_000, latam: 43_000 },
  { id: "fin", label: "Financial Analyst", us: 118_000, latam: 46_000 },
];

const usd = (value: number) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export default function Calculator() {
  const [roleId, setRoleId] = useState(roles[0].id);
  const [hires, setHires] = useState(3);

  const role = roles.find((r) => r.id === roleId) ?? roles[0];

  const { usTotal, latamTotal, saved, extraHires, pct } = useMemo(() => {
    const usTotal = role.us * hires;
    const latamTotal = role.latam * hires;
    const saved = usTotal - latamTotal;
    return {
      usTotal,
      latamTotal,
      saved,
      extraHires: Math.floor(saved / role.latam),
      pct: Math.round((saved / usTotal) * 100),
    };
  }, [role, hires]);

  return (
    <section
      id="value"
      className="relative isolate overflow-hidden border-y border-line/70 bg-ink-2 py-28 md:py-40"
    >
      <Aurora intensity="medium" />

      <Container size="wide" className="relative z-10">
        <SectionHeading
          eyebrow="Run the numbers"
          title="What the same team costs, built the other way."
          highlight={["other", "way"]}
          align="center"
          lead={
            <>
              Pick a role, set the headcount, and see what changes. The gap is not a
              rounding error — for most teams it is the difference between one hire
              and three.
            </>
          }
        />

        <Reveal delay={0.12} blur className="mt-16">
          <div className="edge-card mx-auto max-w-5xl border-line-2 p-7 md:p-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              {/* Controls */}
              <div>
                <label className="text-eyebrow text-dim">Role</label>
                <div className="mt-4 flex flex-wrap gap-2">
                  {roles.map((option) => {
                    const isActive = option.id === roleId;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setRoleId(option.id)}
                        className={`rounded-full border px-4 py-2 text-sm transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive
                            ? "border-ember/60 bg-ember/12 text-chalk"
                            : "border-line-2 text-mist hover:border-line-2 hover:bg-surface hover:text-chalk"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-10">
                  <div className="flex items-baseline justify-between">
                    <label htmlFor="hires" className="text-eyebrow text-dim">
                      Headcount
                    </label>
                    <span className="font-display text-2xl font-bold text-ember-gradient">
                      {hires}
                    </span>
                  </div>
                  <input
                    id="hires"
                    type="range"
                    min={1}
                    max={10}
                    step={1}
                    value={hires}
                    onChange={(e) => setHires(Number(e.target.value))}
                    className="range-ember mt-4"
                    aria-label="Number of hires"
                  />
                  <div className="mt-2 flex justify-between text-xs text-dim">
                    <span>1 hire</span>
                    <span>10 hires</span>
                  </div>
                </div>

                {/* Cost bars */}
                <div className="mt-10 space-y-5">
                  <div>
                    <div className="mb-2 flex items-baseline justify-between text-sm">
                      <span className="text-mist">Hiring in the US</span>
                      <span className="font-display font-semibold text-chalk">
                        {usd(usTotal)}
                      </span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-line">
                      <div className="h-full w-full rounded-full bg-violet/50" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-baseline justify-between text-sm">
                      <span className="text-mist">Hiring through us</span>
                      <span className="font-display font-semibold text-gold">
                        {usd(latamTotal)}
                      </span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-line">
                      <motion.div
                        className="h-full rounded-full bg-linear-to-r from-gold to-ember"
                        animate={{ width: `${(latamTotal / usTotal) * 100}%` }}
                        transition={{ duration: 0.7, ease: EASE }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="relative flex flex-col justify-center rounded-2xl border border-ember/25 bg-linear-to-br from-surface-2 via-ink to-ink p-8 md:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 size-56 rounded-full bg-ember/15 blur-[90px]"
                />

                <div className="relative">
                  <div className="flex items-center gap-2 text-flame">
                    <TrendingUp size={16} />
                    <span className="text-eyebrow">Annual difference</span>
                  </div>

                  <motion.div
                    key={saved}
                    initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.55, ease: EASE }}
                    className="font-display mt-4 text-5xl leading-none font-bold tracking-tight text-ember-gradient md:text-6xl"
                  >
                    {usd(saved)}
                  </motion.div>

                  <p className="mt-5 leading-relaxed text-mist">
                    That is <span className="text-chalk">{pct}% less</span> for the
                    same {hires === 1 ? "role" : `${hires} roles`} — enough to fund{" "}
                    <span className="text-chalk">
                      {extraHires} additional {extraHires === 1 ? "hire" : "hires"}
                    </span>{" "}
                    at the same bar.
                  </p>

                  <div className="mt-8 border-t border-line pt-6">
                    <Button href="#contact" className="w-full sm:w-auto">
                      Get a real quote for this role
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-1"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs leading-relaxed text-dim">
              Estimates use indicative fully loaded annual costs — base compensation
              plus typical employer overhead — for senior-leaning profiles. They are
              a starting point for a conversation, not a quote.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
