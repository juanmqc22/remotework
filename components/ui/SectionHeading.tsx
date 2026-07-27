"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Reveal, { RevealWords } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string[];
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  lead,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      <Reveal duration={0.7}>
        <div
          className={cn(
            "flex items-center gap-3",
            centered && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-linear-to-r from-transparent to-ember" />
          <span className="text-eyebrow text-flame">{eyebrow}</span>
          {centered && (
            <span className="h-px w-8 bg-linear-to-l from-transparent to-ember" />
          )}
        </div>
      </Reveal>

      <h2 className="text-cinema-sm mt-6 headline">
        <RevealWords text={title} highlight={highlight} delay={0.08} />
      </h2>

      {lead && (
        <Reveal delay={0.18} className="mt-6">
          <p className="text-lg leading-relaxed text-mist md:text-xl">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
