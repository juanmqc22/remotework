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
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold " +
  "transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-blue text-white hover:bg-blue-deep",
  secondary:
    "border border-line-strong bg-page text-ink hover:border-blue hover:text-blue",
  onDark: "bg-white text-navy hover:bg-blue-tint",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.9375rem]",
  lg: "px-6 py-3.5 text-base",
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
