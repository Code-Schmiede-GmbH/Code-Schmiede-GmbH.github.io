import Section from "./Section";
import Reveal from "./Reveal";
import Card from "./Card";
import { services } from "@/content/landing";

const icons: Record<string, JSX.Element> = {
  unternehmenssoftware: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 9v11" />
    </>
  ),
  "ki-automatisierung": (
    <>
      <path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z" />
      <path d="M18 15.5l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8.8-1.9z" />
    </>
  ),
  plattformen: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="7" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M7.9 7.6l2.6 8M16.6 9.2l-3 7.1M8.4 5.6h7.2" />
    </>
  ),
};

export default function Services() {
  return (
    <Section
      id="leistungen"
      eyebrow="Kernleistungen"
      title="Wir lösen Geschäftsprobleme – mit Software, die dazu passt."
      lead="Drei Bereiche, in denen wir Schweizer Unternehmen unterstützen. Immer mit demselben Ziel: einfachere Prozesse und weniger Handarbeit."
    >
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.1}>
            <Card as="article" interactive className="flex h-full flex-col">
              <span className="relative mb-6 inline-flex h-14 w-14 items-center justify-center">
                <svg
                  viewBox="0 0 56 56"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden="true"
                >
                  <path
                    d="M28 3.5 49.2 15.75v24.5L28 52.5 6.8 40.25v-24.5z"
                    className="fill-ember-50 stroke-ember-100 transition-colors duration-300 group-hover:stroke-ember-300"
                    strokeWidth="1.2"
                  />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  className="relative h-6 w-6 text-ember-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {icons[service.id]}
                </svg>
              </span>

              <h3 className="text-xl font-bold leading-snug tracking-tight">
                {service.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-muted">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2 border-t border-sand-200 pt-6 md:mt-auto">
                {service.examples.map((example) => (
                  <li
                    key={example}
                    className="flex items-center gap-3 text-sm text-ink-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-4 shrink-0 bg-ember/50"
                    />
                    {example}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
