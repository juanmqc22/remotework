"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#what-we-do", label: "What we do" },
  { href: "#why-latam", label: "Why LatAm" },
  { href: "#process", label: "Process" },
  { href: "#roles", label: "Roles" },
  { href: "#pricing", label: "Guarantee" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  // The mobile sheet locks the page; make sure it never survives a resize.
  useEffect(() => {
    if (!open) return;
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "border-b border-line/80 bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container size="wide">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              scrolled ? "h-16" : "h-20"
            )}
          >
            <a href="#top" className="group flex items-center gap-2.5">
              <span className="relative flex size-7 items-center justify-center">
                <span className="absolute inset-0 rounded-md bg-linear-to-br from-gold via-flame to-ember opacity-90 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-90" />
                <span className="relative size-2 rounded-[2px] bg-void" />
              </span>
              <span className="font-display text-[0.95rem] font-bold tracking-tight text-chalk">
                Modern Talent
              </span>
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative rounded-full px-3.5 py-2 text-sm text-mist transition-colors duration-300 hover:text-chalk"
                >
                  {link.label}
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-px scale-x-0 bg-linear-to-r from-transparent via-ember to-transparent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button href="#contact" variant="ghost" size="sm">
                Free assessment
              </Button>
              <Button href="#contact" size="sm">
                Book a call
                <ArrowUpRight size={15} />
              </Button>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-full border border-line-2 p-2.5 text-chalk transition-colors duration-300 hover:border-ember/50 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-line bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="py-6">
              <nav className="flex flex-col">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.5 }}
                    className="border-b border-line/70 py-3.5 font-display text-lg text-chalk"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <Button href="#contact" onClick={() => setOpen(false)}>
                  Book a discovery call
                </Button>
                <Button
                  href="#contact"
                  variant="secondary"
                  onClick={() => setOpen(false)}
                >
                  Take the free assessment
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
