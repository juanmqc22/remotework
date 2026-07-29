"use client";

import React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "onDark";
type Size = "md" | "lg";

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
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] " +
  "transition-[background-color,border-color,color,transform,box-shadow] duration-500 ease-settle " +
  "active:scale-[0.98] active:duration-100";

const variants: Record<Variant, string> = {
  primary:
    "bg-ultra text-white shadow-[0_8px_24px_-12px_rgba(27,46,229,0.7)] " +
    "hover:bg-ultra-deep hover:shadow-[0_14px_34px_-12px_rgba(27,46,229,0.75)]",
  secondary:
    "border border-rule-strong bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white",
  onDark: "bg-white text-ink hover:bg-ultra-wash",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.875rem]",
  lg: "px-7 py-3.5 text-[0.9375rem]",
};

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

  if (isAnchor(props)) {
    return (
      <a
        className={classes}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
