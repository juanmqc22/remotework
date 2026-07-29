import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-page p-6 transition-colors duration-200 hover:border-line-strong",
        className
      )}
    >
      {children}
    </div>
  );
}
