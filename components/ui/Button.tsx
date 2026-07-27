"use client";

import React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface StyleProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = StyleProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

type AnchorProps = StyleProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href"> & {
    href: string;
  };

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-display font-semibold tracking-tight " +
  "transition-[transform,box-shadow,background-color,border-color,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] " +
  "hover:-translate-y-0.5 active:translate-y-0 active:duration-100 will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-linear-to-r from-gold via-flame to-ember text-void " +
    "shadow-[0_10px_34px_-14px_rgba(255,90,31,0.9)] hover:shadow-[0_18px_48px_-14px_rgba(255,138,61,0.95)]",
  secondary:
    "border border-line-2 bg-surface/60 text-chalk backdrop-blur-md " +
    "hover:border-ember/50 hover:bg-surface-2/80",
  ghost: "text-mist hover:text-chalk hover:bg-surface/60",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.9375rem]",
  lg: "px-8 py-4 text-base",
};

/** Diagonal light sweep on hover. Primary only — it needs a bright base to read. */
function Sheen() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-18deg] bg-linear-to-r from-transparent via-white/45 to-transparent transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-[140%]"
    />
  );
}

function isAnchor(props: ButtonProps | AnchorProps): props is AnchorProps {
  return typeof (props as AnchorProps).href === "string";
}

/** Peels the styling props off so only DOM-valid attributes are spread. */
function split<T extends StyleProps>(props: T) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  return { variant, size, className, children, rest };
}

export default function Button(props: ButtonProps | AnchorProps) {
  const { variant, size, className, children, rest } = split(props);
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {variant === "primary" && <Sheen />}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (isAnchor(props)) {
    return (
      <a
        className={classes}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
