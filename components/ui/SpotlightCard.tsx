"use client";

import React, { useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Card whose gradient highlight tracks the cursor. The position is written to
 * CSS custom properties rather than React state so it stays off the render path.
 */
export default function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn(
        "group edge-card relative overflow-hidden hover:-translate-y-1 hover:border-line-2",
        className
      )}
    >
      <span className="spotlight" aria-hidden />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
