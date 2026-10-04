import Section from "./Section";
import Reveal from "./Reveal";
import Portrait from "./Portrait";
import Card from "./Card";
import DataLines from "./DataLines";
import { contact } from "@/content/landing";

const fieldClasses =
  "w-full rounded-lg border border-sand-300 bg-sand/40 px-4 py-3 text-anthracite placeholder:text-ink-subtle transition-colors focus:border-ember focus:bg-white focus:outline-none focus:ring-2 focus:ring-ember/20";

export default function Contact() {
  return (
    <Section
      id="kontakt"
      eyebrow="Kontakt"
      title="Erzählen Sie uns von Ihrem Vorhaben."
      lead="Gemeinsam finden wir die passende Softwarelösung für Ihre Herausforderung."
      className="bg-sand-200/50"
      backdrop={
        <DataLines className="absolute bottom-0 left-0 h-[28rem] w-full md:w-3/4" />
      }
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        {/* Ansprechpartner */}
        <Reveal>
          <Card className="flex h-full flex-col">
            <div className="flex items-center gap-5">
              <Portrait
                crop="bust"
                className="h-20 w-20 rounded-xl2 ring-1 ring-sand-300 sm:h-24 sm:w-24"
              />
              <div>
                <p className="text-lg font-bold tracking-tight">{contact.name}</p>
                <p className="mt-1 text-sm text-ink-muted">{contact.role}</p>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-ink-muted">{contact.note}</p>

            <div className="mt-8 border-t border-sand-200 pt-6 lg:mt-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
                Direkt schreiben
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 inline-block font-semibold text-ember-600 transition-colors hover:text-ember-700"
              >
                {contact.email}
              </a>
            </div>
          </Card>
        </Reveal>

        {/* Formular */}
        <Reveal delay={0.1}>
          <form
            id="contactForm"
            action="https://api.web3forms.com/submit"
            method="POST"
            className="rounded-xl2 border border-sand-300 bg-white/90 p-8 shadow-card"
          >
            <input
              type="hidden"
              name="access_key"
              value="5e230ecf-a57b-4d22-bc0b-9372c1d15108"
            />

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-anthracite"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={fieldClasses}
                  placeholder="Ihr Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-anthracite"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={fieldClasses}
                  placeholder="name@unternehmen.ch"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-anthracite"
                >
                  Ihr Vorhaben
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className={`${fieldClasses} resize-y`}
                  placeholder="Worum geht es? Ein paar Sätze genügen."
                  required
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-anthracite px-7 py-3.5 text-base font-semibold text-sand transition-all hover:bg-anthracite-800 hover:shadow-ember"
              >
                Projekt besprechen
              </button>
              <p className="text-sm text-ink-subtle">
                Ihre Angaben werden ausschliesslich zur Bearbeitung Ihrer Anfrage
                verwendet.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
