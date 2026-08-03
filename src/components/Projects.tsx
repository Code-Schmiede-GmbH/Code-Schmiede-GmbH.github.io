import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/content/landing";

export default function Projects() {
  return (
    <Section
      id="projekte"
      eyebrow="Referenzen"
      title="Ausgewählte Lösungen"
      lead="Unterschiedliche Branchen, unterschiedliche Anforderungen – verbunden durch denselben Ansatz: verstehen, entwickeln, vereinfachen."
      className="bg-sand-200/60"
    >
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.1}>
            <article className="flex h-full flex-col rounded-xl2 border border-sand-300 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-copper-300 hover:shadow-card-hover">
              <span className="text-xs font-semibold tracking-[0.2em] text-copper">
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
                      className="mt-0.5 h-4 w-4 shrink-0 text-copper"
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
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
