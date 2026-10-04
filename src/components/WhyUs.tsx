import Section from "./Section";
import Reveal from "./Reveal";
import ForgedHex from "./ForgedHex";
import { reasons } from "@/content/landing";

export default function WhyUs() {
  return (
    <Section
      id="warum"
      eyebrow="Warum Code Schmiede"
      title="Handwerk statt Konfektion."
      lead="Wir sind bewusst klein aufgestellt: kurze Wege, klare Verantwortung – und bei Bedarf zusätzliche Kapazität."
      backdrop={
        <ForgedHex
          open
          glow={[0]}
          className="absolute -right-48 -top-24 w-[34rem] opacity-50 md:-right-32 md:w-[44rem] md:opacity-100"
        />
      }
    >
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <Reveal key={reason.title} delay={index * 0.08}>
            <div className="relative border-t border-sand-300 pt-6">
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 h-px w-10 bg-ember"
              />
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-semibold tracking-[0.2em] text-ember-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold leading-snug text-anthracite">
                  {reason.title}
                </h3>
              </div>
              <p className="mt-3 pl-[2.4rem] leading-relaxed text-ink-muted">
                {reason.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
