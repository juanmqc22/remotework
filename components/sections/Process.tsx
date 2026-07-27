"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { MessageSquare, Search, CheckCircle2, Handshake } from "lucide-react";

export default function Process() {
  const phases = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Discover",
      description: "We spend time understanding your role, culture, and what exceptional looks like for you.",
      timeline: "Day 1",
    },
    {
      number: "02",
      icon: Search,
      title: "Search",
      description: "We tap our network across Latin America — Argentina, Colombia, Mexico, Brazil, and beyond — for qualified candidates.",
      timeline: "Days 1–2",
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Evaluate",
      description: "We carefully evaluate candidates, conduct reference checks, and assess cultural fit.",
      timeline: "Day 2–3",
    },
    {
      number: "04",
      icon: Handshake,
      title: "Support",
      description: "We guide candidates through your process and support negotiations until they start.",
      timeline: "Day 3+",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 border-t border-border" id="how-it-works">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            How we do it.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Our proven 4-phase process combines strategic thinking with aggressive search and careful evaluation.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              variants={itemVariants}
              className="relative"
            >
              {/* Connector line */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
              )}

              <div className="bg-surface border border-border rounded-lg p-8 h-full hover:border-accent/30 transition">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl font-bold text-accent">{phase.number}</div>
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <phase.icon size={20} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {phase.description}
                </p>
                <div className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded w-fit">
                  {phase.timeline}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 p-8 bg-accent/5 border border-accent/20 rounded-lg text-center"
        >
          <p className="text-lg font-semibold text-text mb-2">
            From brief to hire: 72 hours
          </p>
          <p className="text-text-secondary">
            That&apos;s how long it takes to deliver exceptional candidates.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
