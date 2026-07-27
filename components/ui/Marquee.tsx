"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Infinite horizontal ticker. Every item carries its own trailing separator so
 * both halves of the track are byte-identical — translating -50% then loops
 * with no visible seam.
 */
export default function Marquee({
  items,
  reverse = false,
  className,
}: {
  items: React.ReactNode[];
  reverse?: boolean;
  className?: string;
}) {
  const track = [...items, ...items];

  return (
    <div className={cn("mask-fade-x relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-8 pr-8 whitespace-nowrap"
            aria-hidden={i >= items.length}
          >
            {item}
            <span className="size-1 shrink-0 rounded-full bg-ember/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
