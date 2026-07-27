"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { Clock, DollarSign, GraduationCap, MessageCircle, CheckCircle2 } from "lucide-react";

export default function WhyLatam() {
  const advantages = [
    {
      icon: Clock,
      title: "Real overlap, real time",
      description:
        "Most of Latin America sits 0–3 hours from US time zones. No graveyard shifts, no waiting overnight for a Slack reply — your team works when you work.",
    },
    {
      icon: DollarSign,
      title: "More budget, same bar",
      description:
        "Access senior-level talent at a fraction of typical US hiring costs, so you can build a stronger team without stretching your budget.",
    },
    {
      icon: GraduationCap,
      title: "A deep, skilled talent pool",
      description:
        "A fast-growing pool of professionals across engineering, design, marketing, and operations — trained at top regional universities and experienced with US companies.",
    },
    {
      icon: MessageCircle,
      title: "Fluent English, aligned culture",
      description:
        "Strong English proficiency and business practices shaped by close ties to the US market make onboarding and daily collaboration feel local.",
    },
  ];

  const comparison = [
    {
      label: "Time zone overlap",
      local: "Full overlap",
      offshore: "8–12 hr gap",
      latam: "0–3 hr overlap",
    },
    {
      label: "Cost to hire",
      local: "Highest",
      offshore: "Lowest, variable quality",
      latam: "Significant savings",
    },
    {
      label: "Time to hire",
      local: "4–6+ weeks",
      offshore: "Weeks, often slower",
      latam: "72 hours",
    },
    {
      label: "Communication",
      local: "Native English",
      offshore: "Fluency varies",
      latam: "Fluent English",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface border-t border-border" id="why-latam">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            The nearshore advantage.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Latin America gives you the best of both worlds: the real-time collaboration of a local hire and the
            economics of offshore — without the trade-offs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {advantages.map((advantage) => (
            <motion.div
              key={advantage.title}
              variants={itemVariants}
              className="bg-bg border border-border rounded-lg p-6 hover:border-accent/30 transition"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <advantage.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-xl font-semibold mb-6">How it stacks up</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-bg">
                  <th className="p-4 text-sm font-medium text-text-secondary border-b border-border">
                    &nbsp;
                  </th>
                  <th className="p-4 text-sm font-medium text-text-secondary border-b border-border">
                    Local (US) hire
                  </th>
                  <th className="p-4 text-sm font-medium text-text-secondary border-b border-border">
                    Typical offshore
                  </th>
                  <th className="p-4 text-sm font-semibold text-accent border-b border-accent/30 bg-accent/5">
                    LatAm with us
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={row.label} className={index % 2 === 0 ? "bg-bg" : "bg-surface"}>
                    <td className="p-4 text-sm font-medium text-text border-b border-border last:border-b-0">
                      {row.label}
                    </td>
                    <td className="p-4 text-sm text-text-secondary border-b border-border last:border-b-0">
                      {row.local}
                    </td>
                    <td className="p-4 text-sm text-text-secondary border-b border-border last:border-b-0">
                      {row.offshore}
                    </td>
                    <td className="p-4 text-sm font-medium text-text border-b border-accent/20 last:border-b-0 bg-accent/5">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                        {row.latam}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
