"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const steps = [
  {
    when: "Day 0",
    title: "Kickoff call",
    body: "Thirty minutes. We map the role, the team it joins, the must-haves and the deal-breakers — so we screen against your bar, not a generic one.",
  },
  {
    when: "Day 1",
    title: "Sourcing",
    body: "We work our LatAm network and the open market in parallel. Candidates are approached directly; nobody reaches you from a job-board queue.",
  },
  {
    when: "Day 2",
    title: "Vetting",
    body: "Structured interview, English assessment, skills validation and reference checks. Most candidates are cut here — that is the point.",
  },
  {
    when: "Day 3",
    title: "Your shortlist",
    body: "Four to six finalists with a written brief on each: why they fit, where they are light, salary expectation and notice period. You interview and decide.",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!nodes.length) return;

    // Whichever step is nearest the middle of the viewport owns the rail.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = nodes.indexOf(visible.target as HTMLLIElement);
        if (index >= 0) setActive(index);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="border-t border-rule bg-mist">
      <Container className="py-24 md:py-36">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-eyebrow">How it works</p>
            <h2 className="text-h2 mt-5">Four days from brief to finalists.</h2>
            <p className="text-lead mt-6 max-w-md">
              No black box. Here is exactly what happens after you book the
              call.
            </p>

            {/* Rail — fills as the reader moves through the steps. */}
            <div className="mt-10 hidden lg:block">
              <div className="flex items-center gap-3">
                <span className="tabular text-sm font-semibold text-ultra">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-rule-strong">
                  <div
                    className="h-px bg-ultra transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      width: `${((active + 1) / steps.length) * 100}%`,
                    }}
                  />
                </div>
                <span className="tabular text-sm font-medium text-muted">
                  {String(steps.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          <ol className="space-y-4">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <li
                  key={step.title}
                  ref={(node) => {
                    stepRefs.current[i] = node;
                  }}
                  className={cn(
                    "rounded-2xl border p-8 transition-[background-color,border-color,transform,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:p-10",
                    isActive
                      ? "border-ultra/25 bg-paper shadow-[0_16px_50px_-28px_rgba(11,14,28,0.4)] lg:-translate-y-0.5"
                      : "border-transparent bg-paper/45"
                  )}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={cn(
                        "text-eyebrow transition-colors duration-700",
                        isActive ? "text-ultra" : "text-muted"
                      )}
                    >
                      {step.when}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "h-px flex-1 transition-colors duration-700",
                        isActive ? "bg-ultra/25" : "bg-rule"
                      )}
                    />
                  </div>

                  <h3 className="text-h3 mt-5">{step.title}</h3>
                  <p
                    className={cn(
                      "mt-3 max-w-xl leading-relaxed transition-colors duration-700",
                      isActive ? "text-body" : "text-muted"
                    )}
                  >
                    {step.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
