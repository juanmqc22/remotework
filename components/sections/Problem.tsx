"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { AlertCircle, Clock, Users, TrendingDown } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: Clock,
      title: "Slow Process",
      description: "Traditional recruiting takes 3–4 weeks per hire. You're losing momentum and market opportunity.",
    },
    {
      icon: Users,
      title: "Poor Quality",
      description: "Job boards generate hundreds of unqualified applications. Your time is wasted filtering noise.",
    },
    {
      icon: TrendingDown,
      title: "High Risk",
      description: "Bad hires are expensive. Misaligned candidates drain your team's energy and culture.",
    },
    {
      icon: AlertCircle,
      title: "No Support",
      description: "You're left to navigate negotiations, evaluations, and onboarding alone.",
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
    <section className="py-16 md:py-24 lg:py-32 border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Hiring is broken.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Traditional recruiting is slow, noisy, and risky. Recruiters manage volume, not quality. Job boards waste your time. You need something different.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className="bg-surface border border-border rounded-lg p-6 hover:border-accent/30 transition"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <problem.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
