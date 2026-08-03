import Link from "next/link";
import Wordmark from "./Wordmark";
import { contact } from "@/content/landing";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-anthracite px-6 py-14 text-sand/70">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-8 border-b border-sand/15 pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark tone="light" />
            <p className="mt-4 text-sm leading-relaxed">
              Individuelle Software für Schweizer Unternehmen. Persönlich betreut,
              skalierbar durch ein erfahrenes europäisches Entwicklernetzwerk.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:items-end">
            <a
              href={`mailto:${contact.email}`}
              className="font-semibold text-sand transition-colors hover:text-copper-300"
            >
              {contact.email}
            </a>
            <p>Aarau, Schweiz</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Code Schmiede GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="transition-colors hover:text-copper-300"
            >
              Impressum
            </Link>
            <Link href="/legal" className="transition-colors hover:text-copper-300">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
