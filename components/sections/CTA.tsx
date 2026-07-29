import React from "react";
import { Mail, Phone, Video } from "lucide-react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

const EMAIL = "hello@avantepeople.com";

const options = [
  {
    icon: Video,
    title: "Video call",
    body: "Thirty minutes, camera on. Best if you want to walk through the role in detail.",
    action: "Request a video call",
    subject: "Video call",
  },
  {
    icon: Phone,
    title: "Audio call",
    body: "Same thirty minutes, no camera. Some people think better without one.",
    action: "Request an audio call",
    subject: "Audio call",
  },
  {
    icon: Mail,
    title: "Email first",
    body: "Not ready to talk? Send us the role and we will reply with an honest read on it.",
    action: "Send us the role",
    subject: "Role enquiry",
  },
];

export default function CTA() {
  return (
    <section id="contact">
      <Container className="py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <h2 className="text-h2">Start with a conversation.</h2>
          <p className="text-lead mt-4">
            No pitch deck and no obligation. Tell us what you are hiring for and
            we will tell you whether we can help — and what it would cost.
            Choose whichever format suits you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {options.map((option, i) => (
            <Reveal key={option.title} delay={i * 0.08}>
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(option.subject)}`}
                className="group flex h-full flex-col rounded-xl border border-line bg-page p-6 transition-colors duration-200 hover:border-blue"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-blue-tint text-blue">
                  <option.icon size={18} />
                </span>
                <h3 className="text-h3 mt-5">{option.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-body">
                  {option.body}
                </p>
                <span className="mt-5 text-sm font-semibold text-blue">
                  {option.action} →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
