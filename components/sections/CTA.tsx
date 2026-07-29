import React from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

const EMAIL = "hello@avantepeople.com";

const options = [
  {
    title: "Video call",
    body: "Thirty minutes, camera on. Best if you want to walk through the role in detail.",
    subject: "Video call",
  },
  {
    title: "Audio call",
    body: "Same thirty minutes, no camera. Some people think better without one.",
    subject: "Audio call",
  },
  {
    title: "Email first",
    body: "Not ready to talk? Send us the role and we will reply with an honest read on it.",
    subject: "Role enquiry",
  },
];

export default function CTA() {
  return (
    <section id="contact" className="border-t border-rule">
      <Container className="section">
        <Reveal className="max-w-3xl">
          <h2 className="text-h2">Start with a conversation.</h2>
          <p className="text-lead mt-7 max-w-xl">
            No pitch deck, no obligation. Tell us what you are hiring for and we
            will tell you whether we can help — and what it would cost. Pick
            whichever format suits you.
          </p>
        </Reveal>

        {/* Three across only from lg. At the md breakpoint each column
            would be ~208px, and after padding the body copy collapses to a
            ~19-character ribbon. */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule lg:grid-cols-3">
          {options.map((option, i) => (
            <Reveal key={option.title} delay={i * 110} className="bg-paper">
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(option.subject)}`}
                className="group flex h-full flex-col p-7 transition-colors duration-500 hover:bg-ultra-wash xl:p-10"
              >
                <h3 className="text-h3 transition-colors duration-500 group-hover:text-ultra">
                  {option.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-body">
                  {option.body}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ultra">
                  Get in touch
                  <span
                    aria-hidden
                    className="transition-transform duration-500 ease-settle group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
