"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { Award, Users, Lightbulb, Heart } from "lucide-react";

export default function Philosophy() {
  const principles = [
    {
      icon: Award,
      title: "Quality Over Volume",
      description: "We deliver 4–6 candidates, not 20. Fewer options, higher quality.",
    },
    {
      icon: Lightbulb,
      title: "Strategic Understanding",
      description: "We spend time learning your business before we search. Context matters.",
    },
    {
      icon: Users,
      title: "Ruthless Filtering",
      description: "We only present candidates we'd hire ourselves. We take the risk seriously.",
    },
    {
      icon: Heart,
      title: "Success-Based",
      description: "Our success depends on your success. We're invested in the outcome.",
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Why it works.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            We succeed because we think differently about hiring. Here's what guides our work.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {principles.map((principle) => (
            <motion.div
              key={principle.title}
              variants={itemVariants}
              className="flex gap-6"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <principle.icon size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
