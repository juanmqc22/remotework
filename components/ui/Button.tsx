import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
  }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

    const variants = {
      primary:
        "bg-accent text-white hover:bg-accent-dark focus-visible:outline-accent",
      secondary:
        "bg-surface border border-border text-text hover:bg-border focus-visible:outline-accent",
      ghost:
        "text-text hover:bg-surface focus-visible:outline-accent",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm rounded",
      md: "px-6 py-3 text-base rounded",
      lg: "px-8 py-4 text-lg rounded-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
