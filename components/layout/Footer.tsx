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
    <footer className="border-t border-line bg-subtle">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="text-[0.95rem] font-bold tracking-tight text-ink">
                Avante People
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
              We find, vet and deliver Latin American professionals to US
              companies — in your time zone, with a 12-month replacement
              guarantee.
            </p>

            <p className="mt-5 text-sm text-muted">
              {regions.join(" · ")}
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-ink">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-body transition-colors duration-200 hover:text-blue"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-sm text-muted">
            © {year} Avante People. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
