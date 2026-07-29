import React from "react";
import Container from "./Container";
import Logo from "@/components/ui/Logo";

const columns = [
  {
    title: "Service",
    links: [
      { label: "What we do", href: "#what-we-do" },
      { label: "How it works", href: "#process" },
      { label: "Guarantee", href: "#guarantee" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Questions", href: "#faq" },
      { label: "Talk to us", href: "#contact" },
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
    <footer className="border-t border-rule bg-mist">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.7fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="text-[0.9375rem] font-bold tracking-[-0.02em] text-ink">
                Avante People
              </span>
            </div>

            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-body">
              We find, vet and deliver Latin American professionals to US
              companies — in your time zone, with a 12-month replacement
              guarantee.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-muted">
              {regions.join(" · ")}
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-ink">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-body transition-colors duration-400 hover:text-ultra"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rule-fade mt-14" />

        <p className="mt-6 text-sm text-muted">
          © {year} Avante People. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
