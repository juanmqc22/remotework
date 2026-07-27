"use client";

import React, { useState } from "react";
import Container from "./Container";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-bg">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            Modern Talent
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-text-secondary hover:text-text transition">
              How It Works
            </a>
            <a href="#process" className="text-sm text-text-secondary hover:text-text transition">
              Process
            </a>
            <a href="#about" className="text-sm text-text-secondary hover:text-text transition">
              About
            </a>
            <Button size="md">Book a Call</Button>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 hover:bg-surface rounded-lg transition"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden border-t border-border mt-4 pt-4 space-y-3">
            <a href="#how-it-works" className="block text-sm text-text-secondary hover:text-text">
              How It Works
            </a>
            <a href="#process" className="block text-sm text-text-secondary hover:text-text">
              Process
            </a>
            <a href="#about" className="block text-sm text-text-secondary hover:text-text">
              About
            </a>
            <Button size="md" className="w-full">
              Book a Call
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
