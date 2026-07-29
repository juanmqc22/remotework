"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#what-we-do", label: "What we do" },
  { href: "#process", label: "How it works" },
  { href: "#guarantee", label: "Guarantee" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A menu left open behind a resize to desktop would sit there orphaned.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const close = () => setOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-settle",
        scrolled
          ? "border-b border-rule bg-paper/80 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-(--header-h) items-center justify-between">
          <a href="#top" className="group flex items-center gap-2.5">
            <Logo />
            <span className="text-[0.9375rem] font-bold tracking-[-0.02em] text-ink">
              Avante People
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[0.875rem] font-medium text-body transition-colors duration-400 hover:text-ink"
              >
                {link.label}
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-0 h-px w-0 bg-ultra transition-[width] duration-500 ease-settle group-hover:w-full"
                />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact">Book a call</Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 p-2 text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-rule bg-paper lg:hidden">
          <Container className="py-5">
            <nav className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-rule py-3.5 text-[0.9375rem] font-medium text-body last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Button
              href="#contact"
              className="mt-5 w-full"
              onClick={() => setOpen(false)}
            >
              Book a call
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
