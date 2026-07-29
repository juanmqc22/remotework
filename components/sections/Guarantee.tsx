import React from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

const terms = [
  {
    lead: "12 months",
    headline: "Replacement guarantee",
    body: "If a hire does not work out within their first twelve months — they leave, or the fit turns out wrong — we restart the search and place a replacement at no additional fee.",
  },
  {
    lead: "$0",
    headline: "Until someone starts",
    body: "No retainer, no engagement fee, no monthly minimum. Our fee is due on the hire's first day. If you never hire, the search costs you a kickoff call.",
  },
  {
    lead: "No",
    headline: "Exclusivity or lock-in",
    body: "Keep your own pipeline running. Work with other partners. Cancel a search mid-flight without penalty. We would rather earn the next role than contract our way into it.",
  },
];

export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-abyss">
      <Container className="section">
        <Reveal className="max-w-3xl">
          <p className="text-eyebrow text-ultra-glow">Our guarantee</p>
          <h2 className="text-h2 mt-5 text-white">
            We carry the risk of the search. You carry none of it.
          </h2>
          <p className="text-lead mt-7 max-w-xl text-[#a8afc9]">
            Most agencies are paid for effort. We think that is backwards, so
            we wrote the commercial terms the way we would want them if we were
            the ones buying.
          </p>
        </Reveal>

        <dl className="mt-20 grid gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {terms.map((term, i) => (
            <Reveal key={term.headline} delay={i * 120}>
              <div className="border-t border-white/12 pt-7">
                <dt>
                  <span className="tabular block text-[2.5rem] leading-none font-bold tracking-[-0.04em] text-white">
                    {term.lead}
                  </span>
                  <span className="mt-3 block text-base font-semibold text-ultra-glow">
                    {term.headline}
                  </span>
                </dt>
                <dd className="mt-4 text-[0.9375rem] leading-relaxed text-[#a8afc9]">
                  {term.body}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={400}>
          <p className="mt-16 text-sm text-[#7c8298]">
            Guarantee terms are confirmed in writing before any search begins.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
