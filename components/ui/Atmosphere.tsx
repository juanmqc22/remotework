"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Slow-drifting colour blooms behind a section. Purely decorative: heavy blur,
 * GPU-only transforms. Sizes are deliberately larger than the viewport so the
 * light reads as ambient rather than as three visible circles.
 */
export function Aurora({
  className,
  intensity = "medium",
}: {
  className?: string;
  intensity?: "soft" | "medium" | "strong";
}) {
  const opacity = {
    soft: "opacity-50",
    medium: "opacity-75",
    strong: "opacity-90",
  }[intensity];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        opacity,
        className
      )}
    >
      <div className="animate-drift-slow absolute -top-1/3 -left-1/4 h-[46rem] w-[52rem] rounded-full bg-ember/20 blur-[120px] will-change-transform" />
      <div className="animate-drift-slower absolute top-1/4 -right-1/4 h-[42rem] w-[48rem] rounded-full bg-violet/18 blur-[130px] will-change-transform" />
      <div className="animate-drift-slow absolute -bottom-1/3 left-1/4 h-[38rem] w-[44rem] rounded-full bg-gold/14 blur-[140px] will-change-transform" />
    </div>
  );
}

/** Faint technical grid, faded out at the edges. */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "grid-lines mask-radial-soft pointer-events-none absolute inset-0 z-0",
        className
      )}
    />
  );
}

/** Hairline rule that brightens toward the centre — used between sections. */
export function Hairline({ className }: { className?: string }) {
  return <div aria-hidden className={cn("hairline h-px w-full", className)} />;
}
