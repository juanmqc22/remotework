import React from "react";
import Container from "./Container";
import { Hairline } from "@/components/ui/Atmosphere";

const columns = [
  {
    title: "The offer",
    links: [
      { label: "What we do", href: "#what-we-do" },
      { label: "Why Latin America", href: "#why-latam" },
      { label: "The 72 hours", href: "#process" },
      { label: "Roles we place", href: "#roles" },
      { label: "Cost comparison", href: "#value" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How we think", href: "#philosophy" },
      { label: "Guarantee", href: "#pricing" },
      { label: "Questions", href: "#faq" },
      { label: "Talk to us", href: "#contact" },
    ],
  },
  {
    title: "For candidates",
    links: [
      { label: "Open roles", href: "#contact" },
      { label: "Join the network", href: "#contact" },
    ],
  },
];

const regions = [
  "Argentina",
  "Brazil",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Mexico",
  "Peru",
  "Uruguay",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-void">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-72 left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-ember/6 blur-[150px]"
      />

      <Container size="wide" className="relative py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="relative flex size-7 items-center justify-center">
                <span className="absolute inset-0 rounded-md bg-linear-to-br from-gold via-flame to-ember opacity-90" />
                <span className="relative size-2 rounded-[2px] bg-void" />
              </span>
              <span className="font-display text-[0.95rem] font-bold tracking-tight text-chalk">
                Avante People
              </span>
            </div>

            <p className="mt-5 max-w-sm leading-relaxed text-mist">
              The recruiting team you never hired. We find, vet and deliver
              exceptional Latin American professionals to US companies — in seventy-two
              hours, in your time zone.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {regions.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-line px-3 py-1 text-xs text-dim transition-colors duration-400 hover:border-line-2 hover:text-mist"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-eyebrow text-dim">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-mist transition-colors duration-300 hover:text-chalk"
                    >
                      <span className="h-px w-0 bg-ember transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Hairline className="my-12 opacity-60" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-dim md:flex-row">
          <p>© {year} Avante People. All rights reserved.</p>
          <p className="text-center md:text-right">
            Built for teams that refuse to compromise on who they hire.
          </p>
        </div>
      </Container>
    </footer>
  );
}
