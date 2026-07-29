import React from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

/**
 * Values are kept short and comparable — "12", "$0", "0" — so they align
 * in one column. Mixing a nine-character phrase with a two-character one
 * at display size is what left the previous three-column version looking
 * half-empty.
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
    <section id="guarantee" className="bg-deep">
      <Container className="section">
        <Reveal className="max-w-3xl">
          <p className="text-eyebrow text-ultra-glow">Our guarantee</p>
          <h2 className="text-h2 mt-5 text-white">
            We carry the risk of the search. You carry none of it.
          </h2>
          <p className="text-lead mt-6 max-w-xl text-deep-body">
            Most agencies are paid for effort. We think that is backwards, so
            we wrote the commercial terms the way we would want them if we were
            the ones buying.
          </p>
        </Reveal>

        {/* Rows rather than columns: each term spans the full measure, so
            nothing ends ragged and the values stay aligned down one edge. */}
        <dl className="mt-14">
          {terms.map((term, i) => (
            <Reveal
              key={term.headline}
              delay={i * 100}
              className="grid gap-x-12 gap-y-4 border-t border-white/15 py-8 md:grid-cols-[11rem_minmax(0,1fr)] md:py-10"
            >
              <dt className="flex items-baseline gap-2">
                <span className="tabular text-[clamp(2.5rem,2.1rem+1.6vw,3.25rem)] leading-none font-bold tracking-[-0.045em] text-white">
                  {term.value}
                </span>
                <span className="text-sm font-medium text-deep-dim">
                  {term.unit}
                </span>
              </dt>

              <dd className="max-w-2xl">
                <span className="block text-lg font-semibold text-deep-bright">
                  {term.headline}
                </span>
                <p className="mt-2.5 leading-relaxed text-deep-body">
                  {term.body}
                </p>
              </dd>
            </Reveal>
          ))}

        </dl>

        {/* Closes the list on the same hairline rhythm instead of floating
            alone under a large gap. Outside the <dl>, which only admits
            dt/dd pairs and the divs that wrap them. */}
        <Reveal
          delay={300}
          className="border-t border-white/15 pt-6 md:grid md:grid-cols-[11rem_minmax(0,1fr)] md:gap-x-12"
        >
          <p className="text-sm text-deep-dim md:col-start-2">
            Guarantee terms are confirmed in writing before any search begins.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
