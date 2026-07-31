import React from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

/**
 * The content here is literally a set of commercial terms, so it is set
 * as one: a white sheet laid on a tinted field, terms divided by
 * hairlines. That also keeps it structurally distinct from the three
 * sticky-split sections around it without reaching for an inverted
 * colour scheme, which fought the rest of the site every time.
 */
const terms = [
  {
    value: "12",
    unit: "months",
    headline: "Replacement guarantee",
    body: "If a hire does not work out within their first twelve months — they leave, or the fit turns out wrong — we restart the search and place a replacement at no additional fee.",
  },
  {
    value: "$0",
    unit: "upfront",
    headline: "Nothing until someone starts",
    body: "No retainer, no engagement fee, no monthly minimum. Our fee is due on the hire's first day. If you never hire, the search costs you a kickoff call.",
  },
  {
    value: "0",
    unit: "lock-in",
    headline: "No exclusivity, cancel anytime",
    body: "Keep your own pipeline running. Work with other partners. Cancel a search mid-flight without penalty. We would rather earn the next role than contract our way into it.",
  },
];

export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-ultra-wash">
      <Container className="section">
        {/* Centred, unlike every other section on the page — the change of
            axis is what marks this one out. */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-eyebrow">Our guarantee</p>
          <h2 className="text-h2 mt-5">
            We carry the risk of the search. You carry none of it.
          </h2>
          <p className="text-lead mx-auto mt-6 max-w-xl">
            Most agencies are paid for effort. We think that is backwards, so
            we wrote the commercial terms the way we would want them if we were
            the ones buying.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <dl className="overflow-hidden rounded-2xl border border-rule bg-paper shadow-[0_20px_60px_-40px_rgba(11,14,28,0.45)] lg:grid lg:grid-cols-3">
            {terms.map((term) => (
              <div
                key={term.headline}
                className="border-t border-rule p-8 first:border-t-0 md:p-10 lg:border-t-0 lg:border-l lg:first:border-l-0"
              >
                <dt>
                  <span className="flex items-baseline gap-2">
                    <span className="tabular text-[clamp(2.5rem,2.1rem+1.6vw,3.25rem)] leading-none font-bold tracking-[-0.045em] text-ultra">
                      {term.value}
                    </span>
                    <span className="text-sm font-medium text-muted">
                      {term.unit}
                    </span>
                  </span>
                  <span className="text-h3 mt-6 block">{term.headline}</span>
                </dt>
                <dd className="mt-3 text-[0.9375rem] leading-relaxed text-body">
                  {term.body}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-8 text-center text-sm text-muted">
            Guarantee terms are confirmed in writing before any search begins.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
