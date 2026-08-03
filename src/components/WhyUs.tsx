import Section from "./Section";
import Reveal from "./Reveal";
import { reasons } from "@/content/landing";

export default function WhyUs() {
  return (
    <Section
      id="warum"
      eyebrow="Warum Code Schmiede"
      title="Handwerk statt Konfektion."
      lead="Wir sind bewusst klein aufgestellt: kurze Wege, klare Verantwortung – und bei Bedarf zusätzliche Kapazität."
      tone="dark"
      className="bg-anthracite"
    >
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <Reveal key={reason.title} delay={index * 0.08}>
            <div className="border-t border-sand/15 pt-6">
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-semibold tracking-[0.2em] text-copper-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold leading-snug text-sand">
                  {reason.title}
                </h3>
              </div>
              <p className="mt-3 pl-[2.4rem] leading-relaxed text-sand/60">
                {reason.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
