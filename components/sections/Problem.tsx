"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { AlertCircle, Clock, Users, TrendingDown } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Local Talent Is Expensive",
      description: "Competitive US salaries put strong hires out of reach for small and mid-size teams — before benefits and overhead.",
    },
    {
      icon: Clock,
      title: "Offshore Means Odd Hours",
      description: "Typical offshore outsourcing runs 8–12 hours out of sync with US business hours, killing real-time collaboration.",
    },
    {
      icon: Users,
      title: "Freelance Platforms Are a Gamble",
      description: "No vetting, no accountability, and no support when a contractor disappears mid-project.",
    },
    {
      icon: AlertCircle,
      title: "Traditional Recruiting Is Slow",
      description: "Weeks of searching, filtering, and negotiating — with no guarantee the hire actually works out.",
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
            Every other option has a catch.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Local hires stretch your budget. Offshore outsourcing stretches your patience. Freelance platforms stretch your luck. You need something different.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {problems.map((problem) => (
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
