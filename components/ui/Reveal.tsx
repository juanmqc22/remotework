"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 },
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  /** Adds a defocus-to-focus pass. Reads as a camera pull, use it sparingly. */
  blur?: boolean;
  as?: "div" | "section" | "li" | "span" | "p";
}

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.9,
  direction = "up",
  blur = false,
  as = "div",
}: RevealProps) {
  const { x, y } = offsets[direction];
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{
        opacity: 0,
        x,
        y,
        filter: blur ? "blur(12px)" : "blur(0px)",
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/** Parent that releases its `Reveal.Item` children one after another. */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "div" | "ul";
}) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </MotionTag>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}

/**
 * Splits a headline into words and lifts each one out of a clipped line —
 * the single most "filmic" move on the page, so it is reserved for H1/H2.
 */
export function RevealWords({
  text,
  className,
  highlight,
  delay = 0,
  stagger = 0.055,
  animateOnMount = false,
}: {
  text: string;
  className?: string;
  /** Words matching this list render in the ember gradient. */
  highlight?: string[];
  delay?: number;
  stagger?: number;
  animateOnMount?: boolean;
}) {
  const words = text.split(" ");
  // Punctuation is stripped on both sides so callers can pass "hours." or "hours".
  const bareOf = (word: string) =>
    word.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
  const normalized = highlight?.map(bareOf) ?? [];
  const activeProp = animateOnMount
    ? { animate: "visible" as const }
    : { whileInView: "visible" as const };

  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      {...activeProp}
      viewport={{ once: true, margin: "-70px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((word, i) => {
        const isHighlighted = normalized.includes(bareOf(word));

        return (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
            aria-hidden
          >
            <motion.span
              className={cn(
                "inline-block",
                isHighlighted && "text-ember-gradient"
              )}
              variants={{
                hidden: { y: "110%", opacity: 0, rotate: 2 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  rotate: 0,
                  transition: { duration: 1, ease: EASE },
                },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        );
      })}
    </motion.span>
  );
}
