import React from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

const terms = [
  {
    headline: "12-month replacement guarantee",
    body: "If a hire does not work out within their first twelve months — they leave, or the fit turns out to be wrong — we restart the search and place a replacement at no additional fee.",
  },
  {
    headline: "Nothing until someone starts",
    body: "No retainer, no engagement fee, no monthly minimum. Our fee is due on the hire's first day. If you never hire, the search costs you a kickoff call.",
  },
  {
    headline: "No exclusivity, no lock-in",
    body: "Keep your own pipeline running. Work with other partners. Cancel a search mid-flight without penalty. We would rather earn the next role than contract our way into it.",
  },
];

export default function Guarantee() {
  return (
    <section id="guarantee" className="border-b border-line bg-navy">
      <Container className="py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-eyebrow text-blue-tint">Our guarantee</p>
          <h2 className="text-h2 mt-3 text-white">
            We carry the risk of the search. You carry none of it.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-blue-tint/80">
            Most agencies get paid for effort. We think that is backwards, so we
            built the commercial terms the way we would want them if we were the
            ones buying.
          </p>
        </Reveal>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
          {terms.map((term, i) => (
            <Reveal key={term.headline} delay={i * 0.08} className="bg-navy">
              <div className="h-full p-7">
                <dt className="text-base font-semibold text-white">
                  {term.headline}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-blue-tint/75">
                  {term.body}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={0.24}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-blue-tint/60">
            Guarantee terms are confirmed in writing before any search begins.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
