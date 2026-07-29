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
        "flex size-7 shrink-0 items-center justify-center rounded-md bg-blue",
        className
      )}
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
        <path
          d="M6 15l6-7 6 7"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        />
      </svg>
    </span>
  );
}
