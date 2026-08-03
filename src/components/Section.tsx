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
  tone?: "dark" | "light";
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
  tone = "light",
}: SectionProps) {
  const isDark = tone === "dark";

  return (
    <section id={id} className={`px-6 py-20 md:py-28 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-content">
        {(eyebrow || title || lead) && (
          <Reveal className="max-w-2xl">
            {eyebrow && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`text-3xl font-extrabold leading-tight tracking-tight md:text-4xl ${
                  isDark ? "text-sand" : "text-anthracite"
                }`}
              >
                {title}
              </h2>
            )}
            {lead && (
              <p
                className={`mt-5 text-lg leading-relaxed ${
                  isDark ? "text-sand/70" : "text-ink-muted"
                }`}
              >
                {lead}
              </p>
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
