import type { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

/**
 * Gemeinsame Hülle für Impressum und Datenschutzerklärung.
 * Die Typografie wird zentral über Child-Selektoren gesetzt, damit der
 * Rechtstext im Markup unformatiert bleiben kann.
 */
export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-grow px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            {title}
          </h1>
          <div
            className="mt-12 space-y-10
              [&_a:hover]:text-ember-700 [&_a]:font-medium [&_a]:text-ember-600 [&_a]:transition-colors
              [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-anthracite
              [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-anthracite
              [&_li]:leading-relaxed
              [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-ink-muted
              [&_strong]:font-semibold [&_strong]:text-anthracite
              [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-ink-muted"
          >
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
