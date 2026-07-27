"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Code2, LineChart, Palette } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { GridBackdrop } from "@/components/ui/Atmosphere";

const EASE = [0.16, 1, 0.3, 1] as const;

const families = [
  {
    id: "engineering",
    label: "Engineering",
    icon: Code2,
    blurb:
      "Product teams that ship. Most of our engineering placements come in as full team members, not ticket-takers.",
    roles: [
      { title: "Senior Full-Stack Engineer", us: "150–190k", latam: "60–85k" },
      { title: "Backend Engineer (Go, Python, Node)", us: "140–180k", latam: "55–80k" },
      { title: "DevOps / SRE", us: "150–195k", latam: "60–90k" },
      { title: "Mobile Engineer (React Native, Swift)", us: "140–175k", latam: "55–78k" },
      { title: "QA Automation Engineer", us: "110–140k", latam: "38–58k" },
      { title: "Data Engineer", us: "150–185k", latam: "58–85k" },
    ],
  },
  {
    id: "design",
    label: "Design & Product",
    icon: Palette,
    blurb:
      "Designers and PMs who can hold a room, defend a decision and work directly with your founders.",
    roles: [
      { title: "Senior Product Designer", us: "135–170k", latam: "48–72k" },
      { title: "UX Researcher", us: "120–150k", latam: "42–62k" },
      { title: "Design Systems Designer", us: "130–165k", latam: "46–70k" },
      { title: "Product Manager", us: "145–185k", latam: "55–82k" },
      { title: "Technical Writer", us: "95–125k", latam: "32–50k" },
    ],
  },
  {
    id: "gtm",
    label: "Go-to-market",
    icon: LineChart,
    blurb:
      "Revenue roles where the accent question comes up — and where our English bar earns its keep.",
    roles: [
      { title: "Sales Development Rep", us: "70–95k", latam: "24–40k" },
      { title: "Account Executive", us: "120–160k OTE", latam: "45–70k OTE" },
      { title: "Growth / Performance Marketer", us: "110–145k", latam: "38–60k" },
      { title: "Content & SEO Lead", us: "95–130k", latam: "34–54k" },
      { title: "Revenue Operations Analyst", us: "105–140k", latam: "36–58k" },
    ],
  },
  {
    id: "ops",
    label: "Operations & Finance",
    icon: BarChart3,
    blurb:
      "The back office that quietly decides whether the rest of the company can move quickly.",
    roles: [
      { title: "Financial Analyst", us: "100–135k", latam: "34–55k" },
      { title: "Bookkeeper / Staff Accountant", us: "70–95k", latam: "24–40k" },
      { title: "Executive Assistant", us: "75–100k", latam: "22–38k" },
      { title: "Customer Success Manager", us: "95–125k", latam: "32–52k" },
      { title: "Support Team Lead", us: "85–110k", latam: "28–46k" },
    ],
  },
];

export default function Roles() {
  const [active, setActive] = useState(families[0].id);
  const current = families.find((f) => f.id === active) ?? families[0];

  return (
    <section id="roles" className="relative isolate overflow-hidden py-28 md:py-40">
      <GridBackdrop className="opacity-20" />

      <Container size="wide" className="relative z-10">
        <SectionHeading
          eyebrow="Roles we place"
          title="If the work can be done well remotely, we can staff it."
          highlight={["we", "can", "staff", "it."]}
          lead={
            <>
              Four families, one bar. Below are the roles we place most often and
              what each one typically costs on either side of the equator.
            </>
          }
        />

        {/* Family tabs */}
        <Reveal delay={0.1} className="mt-14">
          <div className="flex flex-wrap gap-2">
            {families.map((family) => {
              const isActive = family.id === active;
              return (
                <button
                  key={family.id}
                  onClick={() => setActive(family.id)}
                  className={`relative flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-400 ${
                    isActive ? "text-void" : "text-mist hover:text-chalk"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="role-tab"
                      className="absolute inset-0 rounded-full bg-linear-to-r from-gold to-flame"
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2.5">
                    <family.icon size={16} />
                    {family.label}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <p className="max-w-2xl text-lg leading-relaxed text-mist">
                {current.blurb}
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl border border-line">
                <div className="hidden grid-cols-[1fr_auto_auto] gap-6 border-b border-line bg-ink-2 px-6 py-4 sm:grid">
                  <span className="text-eyebrow text-dim">Role</span>
                  <span className="text-eyebrow w-32 text-right text-dim">
                    US market
                  </span>
                  <span className="text-eyebrow w-32 text-right text-gold">
                    Through us
                  </span>
                </div>

                {current.roles.map((role, i) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.05 + i * 0.06 }}
                    className="group grid grid-cols-2 gap-x-6 gap-y-1 border-b border-line/70 px-6 py-5 transition-colors duration-400 last:border-b-0 hover:bg-surface/50 sm:grid-cols-[1fr_auto_auto]"
                  >
                    <span className="col-span-2 font-display text-[0.95rem] font-medium text-chalk sm:col-span-1">
                      {role.title}
                    </span>
                    <span className="w-32 text-sm text-dim line-through decoration-ember/50 sm:text-right">
                      ${role.us}
                    </span>
                    <span className="font-display w-32 text-sm font-semibold text-gold sm:text-right">
                      ${role.latam}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <p className="mt-4 text-xs leading-relaxed text-dim">
            Indicative annual USD ranges for full-time, senior-leaning profiles.
            Actual compensation depends on country, seniority, specialisation and
            your own band — we confirm real numbers with every candidate before they
            reach your shortlist.
          </p>
        </div>
      </Container>
    </section>
  );
}
