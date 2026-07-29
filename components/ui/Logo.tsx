import React from "react";
import { cn } from "@/lib/utils";

/**
 * Placeholder mark: an upward chevron ("avante"). Swap for the real
 * logotype when the brand identity exists.
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
      <svg viewBox="0 0 24 24" className="size-3.5 text-white" fill="none">
        <path
          d="M5 16l7-8 7 8"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
