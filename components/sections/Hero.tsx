"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import Marquee from "@/components/ui/Marquee";
import { Aurora, GridBackdrop } from "@/components/ui/Atmosphere";
import { RevealWords } from "@/components/ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: <Counter to={72} suffix="h" />, label: "Brief to shortlist" },
  { value: "0–3h", label: "Gap to US hours" },
  { value: "4–6", label: "Finalists per role" },
  {
    value: <Counter to={60} suffix="%" prefix="~" />,
    label: "Lower cost per hire",
  },
];

const ticker = [
  "Senior React Engineers",
  "Argentina",
  "Product Designers",
  "Colombia",
  "RevOps Analysts",
  "Mexico",
  "Data Engineers",
  "Brazil",
  "Customer Success Leads",
  "Chile",
  "QA Automation",
  "Uruguay",
  "Finance Analysts",
  "Costa Rica",
  "Growth Marketers",
  "Peru",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The hero recedes as the next section climbs over it — a rack focus, not a jump.
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(6px)"]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-24"
    >
      <GridBackdrop />
      <Aurora intensity="strong" />

      {/* Overhead key light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-1/4 z-0 h-[70vh] bg-[radial-gradient(ellipse_55%_50%_at_50%_50%,rgba(255,138,61,0.2),transparent_70%)]"
      />
      {/* Vignette last, so the frame darkens without the blooms being erased */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,transparent_25%,rgba(9,7,15,0.8)_100%)]"
      />

      <motion.div style={{ y, opacity, scale, filter: blur }}>
        <Container size="wide" className="relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-surface/50 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-aurora opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-aurora" />
              </span>
              <span className="text-eyebrow text-mist">
                Talent partner · LatAm → US
              </span>
            </motion.div>

            <h1 className="text-cinema mt-7 headline">
              <RevealWords
                text="We find, vet and deliver your next hire in 72 hours."
                highlight={["72", "hours."]}
                delay={0.45}
                animateOnMount
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: EASE, delay: 1.15 }}
              className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-mist md:text-xl"
            >
              Tell us the role. We run the entire search across Latin America —
              sourcing, screening, skills and English assessment, references — and
              hand you four to six finalists you&apos;d actually hire.{" "}
              <span className="text-chalk">
                Your time zone. Around half the cost.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 1.35 }}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            >
              <Button href="#contact" size="lg" className="w-full sm:w-auto">
                Book a discovery call
                <ArrowRight
                  size={17}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-1"
                />
              </Button>
              <Button
                href="#what-we-do"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Sparkles size={16} className="text-gold" />
                See exactly how it works
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="mt-6 text-sm text-dim"
            >
              No retainers. No résumé dumps. You pay when someone starts.
            </motion.p>
          </div>

          {/* Stat bar */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.7 }}
            className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line/60 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-ink-2/80 px-6 py-7 text-center backdrop-blur-sm transition-colors duration-500 hover:bg-surface/80"
              >
                <div className="font-display text-3xl font-bold tracking-tight text-ember-gradient md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs tracking-wide text-dim uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </Container>
      </motion.div>

      {/* Ticker of roles and regions — range, without inventing client logos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="absolute inset-x-0 bottom-0 border-t border-line/70 bg-ink/40 py-4 backdrop-blur-sm"
      >
        <Marquee
          items={ticker.map((item, i) => (
            <span
              key={item}
              className={
                i % 2 === 0
                  ? "font-display text-sm font-medium text-mist"
                  : "text-sm text-dim"
              }
            >
              {item}
            </span>
          ))}
        />
      </motion.div>
    </section>
  );
}
