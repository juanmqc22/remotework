import React from "react";
import { cn } from "@/lib/utils";

/**
 * The Avante People mark.
 *
 * An "A" made of two strokes, each carrying part of the business. The
 * ascending chevron is the name — avante, forward — and the direction a
 * career moves when the hire is right. Its legs are the two sides of every
 * placement, the US team and the LatAm candidate, and the bar laid across
 * them is what we actually sell: the band of hours they share, and the
 * bridge over the distance between them.
 *
 * Drawn on a 24-unit grid with round caps, so the whole identity is two
 * paths and survives down to 16px. `app/icon.svg` repeats the geometry on
 * a bare tile, and `scripts/render-icons.py` rasterises the same numbers
 * to `app/favicon.ico` and `app/apple-icon.png` — move the mark here and
 * all three follow.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex size-[1.625rem] shrink-0 items-center justify-center rounded-[0.5rem] bg-ultra",
        "transition-transform duration-700 ease-settle group-hover:-translate-y-0.5",
        className
      )}
    >
      <svg viewBox="0 0 24 24" className="size-[1.1875rem] text-white" fill="none">
        <path
          d="M4 20 12 4.4 20 20"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* The bar ends on the legs' centre lines, not short of them: a
            round cap whose radius equals the stroke's half-width sits
            inscribed in the leg it lands on, so the junction is seamless
            instead of leaving a nub under the counter at 16px. */}
        <path
          d="M6.36 15.4h11.28"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
