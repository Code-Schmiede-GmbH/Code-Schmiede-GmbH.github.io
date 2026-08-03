"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Wordmark from "./Wordmark";
import { navItems } from "@/content/landing";

export default function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Anker funktionieren auf Unterseiten nur mit vorangestelltem "/"
  const hrefFor = (href: string) => (isHomePage ? href : `/${href}`);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || isOpen
          ? "border-sand-300 bg-sand/85 backdrop-blur-md"
          : "border-transparent bg-sand/60 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4"
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="shrink-0"
          aria-label="Code Schmiede – zur Startseite"
        >
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={hrefFor(item.href)}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-anthracite"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={hrefFor("#kontakt")}
            className="rounded-lg bg-anthracite px-5 py-2.5 text-sm font-semibold text-sand transition-colors hover:bg-anthracite-800"
          >
            Projekt besprechen
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Menü schliessen" : "Menü öffnen"}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-anthracite transition-colors hover:bg-sand-200 md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-sand-300 transition-[max-height,opacity,visibility] duration-300 ease-out md:hidden ${
          isOpen
            ? "visible max-h-96 opacity-100"
            : "invisible max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-content flex-col gap-1 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={hrefFor(item.href)}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-medium text-ink-muted transition-colors hover:bg-sand-200 hover:text-anthracite"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={hrefFor("#kontakt")}
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-lg bg-anthracite px-5 py-3 text-center text-base font-semibold text-sand transition-colors hover:bg-anthracite-800"
          >
            Projekt besprechen
          </Link>
        </div>
      </div>
    </header>
  );
}
