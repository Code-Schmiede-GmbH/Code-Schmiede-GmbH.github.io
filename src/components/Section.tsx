import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  children: ReactNode;
  /** Zusätzliche Klassen für abweichende Hintergründe */
  className?: string;
  /** Dekorative Ebene hinter dem Inhalt (ForgedHex, DataLines …), absolut positioniert */
  backdrop?: ReactNode;
};

/**
 * Layout-Primitive für alle Sektionen: einheitliche Abstände,
 * einheitliche Breite und einheitlicher Kopfbereich.
 */
export default function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = "",
  backdrop,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden px-6 py-20 md:py-28 lg:py-32 ${className}`}
    >
      {backdrop && <div className="absolute inset-0 -z-10">{backdrop}</div>}

      <div className="mx-auto max-w-content">
        {(eyebrow || title || lead) && (
          <Reveal className="max-w-2xl">
            {eyebrow && (
              <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-ember-600">
                <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
                  <path
                    d="M10.3 3.5 6 1 1.7 3.5v5L6 11l4.3-2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
                {eyebrow}
                <span
                  aria-hidden="true"
                  className="h-px w-12 bg-gradient-to-r from-ember/60 to-transparent"
                />
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-anthracite md:text-4xl">
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">{lead}</p>
            )}
          </Reveal>
        )}

        <div className={eyebrow || title || lead ? "mt-14 md:mt-16" : ""}>
          {children}
        </div>
      </div>
    </section>
  );
}
