"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { Briefcase, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-bg to-bg -z-10" />

      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Text Content */}
          <div className="space-y-8">
            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                World-class talent from Latin America, hired in 72 hours.
              </h1>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Pre-vetted, English-fluent professionals in your time zone — at a fraction of the cost of hiring locally. No spam lists. No endless recruiting.
              </p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button size="lg" className="gap-2">
                Book a Discovery Call <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="secondary">
                Take Assessment
              </Button>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6" variants={itemVariants}>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">72h</div>
                <p className="text-sm text-text-secondary">Candidate delivery</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">0–3h</div>
                <p className="text-sm text-text-secondary">Time zone difference</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">4–6</div>
                <p className="text-sm text-text-secondary">Pre-qualified candidates</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            className="relative hidden lg:block"
            variants={itemVariants}
          >
            <div className="relative h-96 bg-surface rounded-2xl border border-border p-8 space-y-6 overflow-hidden">
              {/* Animated hiring pipeline */}
              <div className="space-y-4">
                {[
                  { label: "Open Position", icon: Briefcase, progress: 0 },
                  { label: "Candidate Search", icon: Users, progress: 33 },
                  { label: "Evaluation", icon: CheckCircle, progress: 66 },
                  { label: "Interview & Hire", icon: CheckCircle, progress: 100 },
                ].map((step, index) => (
                  <motion.div
                    key={step.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <step.icon size={16} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-text">
                        {step.label}
                      </div>
                      <div className="w-full bg-border rounded-full h-1 mt-1">
                        <motion.div
                          className="h-full bg-accent rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${step.progress}%` }}
                          transition={{
                            delay: 0.7 + index * 0.15,
                            duration: 0.8,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-20 -mt-20 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full -ml-20 -mb-20 blur-3xl" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
