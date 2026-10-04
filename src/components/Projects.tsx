import Section from "./Section";
import Reveal from "./Reveal";
import Card from "./Card";
import DataLines from "./DataLines";
import { projects } from "@/content/landing";

export default function Projects() {
  return (
    <Section
      id="projekte"
      eyebrow="Referenzen"
      title="Ausgewählte Lösungen"
      lead="Unterschiedliche Branchen, unterschiedliche Anforderungen – verbunden durch denselben Ansatz: verstehen, entwickeln, vereinfachen."
      className="bg-sand-200/50"
      backdrop={
        <DataLines flip className="absolute -top-10 right-0 h-[26rem] w-full opacity-60 md:w-2/3" />
      }
    >
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.1}>
            <Card as="article" interactive className="flex h-full flex-col">
              <span className="text-xs font-semibold tracking-[0.2em] text-ember-600">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight">
                {project.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-muted">
                {project.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {project.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 shrink-0 text-ember-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 10.5l4 4 8-9" />
                    </svg>
                    <span className="font-medium text-anthracite">{benefit}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-8 text-xs text-ink-subtle">
                {project.technologies.join(" · ")}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
