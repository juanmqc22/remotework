"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Milliseconds to hold before resolving. Stagger siblings with this. */
  delay?: number;
  as?: "div" | "li" | "section" | "dd" | "dt";
}

/**
 * Resolves content into place the first time it enters view: lift,
 * a hair of scale, and a defocus pass, all landing together.
 *
 * The animation itself lives in CSS (.reveal) so it survives hydration
 * without a flash — this only flips the data attribute.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
        // Release the compositor layer once the transition has run.
        window.setTimeout(() => setSettled(true), 1000 + delay);
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      // Tag is polymorphic, so the ref type has to be widened by hand.
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement & HTMLElement>}
      className={cn("reveal", className)}
      data-shown={shown || undefined}
      data-settled={settled || undefined}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
