import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Measure steps up with the viewport rather than locking at one width —
 * an ultrawide display should not render a narrow column adrift in space.
 * Gutters grow alongside it so the content never crowds the edge.
 */
export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12 2xl:max-w-canvas",
        className
      )}
    >
      {children}
    </div>
  );
}
