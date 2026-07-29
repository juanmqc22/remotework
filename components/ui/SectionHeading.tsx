import React from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="text-eyebrow">{eyebrow}</p>}
      <h2 className={cn("text-h2", eyebrow && "mt-3")}>{title}</h2>
      {lead && <p className="text-lead mt-4">{lead}</p>}
    </Reveal>
  );
}
