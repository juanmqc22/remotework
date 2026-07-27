"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { Zap, Shield, Clock, Handshake } from "lucide-react";

export default function Opportunity() {
  const opportunities = [
    {
      icon: Clock,
      title: "72-Hour Delivery",
      description: "Skip weeks of recruiting. Get pre-qualified LatAm candidates in 72 hours.",
    },
    {
      icon: Shield,
      title: "Rigorously Vetted",
      description: "We filter ruthlessly for skills, English fluency, and reliability. Only candidates we'd hire ourselves make it to you.",
    },
    {
      icon: Zap,
      title: "Save Your Time & Budget",
      description: "We handle search and evaluation. You get a stronger team for less, and focus on running your business.",
    },
    {
      icon: Handshake,
      title: "Complete Support",
      description: "We guide candidates and your team through interviews, negotiations, and onboarding.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
    <section className="py-16 md:py-24 lg:py-32 bg-surface border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What hiring should be.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Fast. Confident. Supported. We help you hire exceptional people without the chaos.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {opportunities.map((opp) => (
            <motion.div
              key={opp.title}
              variants={itemVariants}
              className="bg-bg border border-border rounded-lg p-8 hover:border-accent/30 transition"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <opp.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{opp.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {opp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
