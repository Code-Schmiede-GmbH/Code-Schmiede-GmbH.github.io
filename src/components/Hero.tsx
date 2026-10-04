"use client";

import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import HeroMockup from "./HeroMockup";
import Portrait from "./Portrait";
import ForgedHex from "./ForgedHex";
import DataLines from "./DataLines";
import { contact } from "@/content/landing";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
    // kurze Verzögerung, damit der Fokus erst nach dem Scrollen greift
    setTimeout(() => document.getElementById("name")?.focus(), 800);
  };

  // `animate` muss immer gesetzt sein: Das statische HTML enthält bereits
  // opacity 0 – ohne Zielwert bliebe der Text bei reduzierter Bewegung unsichtbar.
  const fadeIn = (delay: number): MotionProps => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion
      ? { duration: 0 }
      : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="start"
      className="relative isolate overflow-hidden px-6 pb-20 pt-14 md:pb-32 md:pt-24 lg:pt-28"
    >
      {/* Visuelle Diagonale: Datenlinien unten links, Hexagon-Rahmen rechts */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <DataLines className="absolute bottom-0 left-0 h-56 w-full md:h-64 lg:w-[68%]" />
        <ForgedHex
          glow={[3, 4]}
          className="absolute hidden md:-right-24 md:block lg:-right-20 top-0 w-[36rem] opacity-50 lg:top-10 lg:w-[42rem] lg:opacity-100"
        />
      </div>

      <div className="mx-auto grid max-w-content items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.p
            {...fadeIn(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white/80 px-4 backdrop-blur-sm py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ember" />
            Technologiepartner für Schweizer KMU
          </motion.p>

          <motion.h1
            {...fadeIn(0.08)}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
          >
            Software, die sich exakt an Ihre{" "}
            <span className="text-ember">Arbeitsweise</span> anpasst.
          </motion.h1>

          <motion.p
            {...fadeIn(0.16)}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl"
          >
            Code Schmiede entwickelt individuelle Softwarelösungen für Schweizer
            Unternehmen – von internen Anwendungen bis zu KI-gestützten
            Automatisierungen.
          </motion.p>

          <motion.div
            {...fadeIn(0.24)}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center rounded-lg bg-anthracite px-7 py-3.5 text-base font-semibold text-sand transition-all hover:bg-anthracite-800 hover:shadow-ember"
            >
              Projekt besprechen
            </button>
            <a
              href="#leistungen"
              className="group inline-flex items-center justify-center gap-2 rounded-lg px-2 py-3.5 text-base font-semibold text-ember-600 transition-colors hover:text-ember-700"
            >
              Mehr erfahren
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </motion.div>

          <motion.div
            {...fadeIn(0.32)}
            className="mt-10 flex items-center gap-3 border-t border-sand-300 pt-6"
          >
            <Portrait
              className="h-10 w-10 rounded-full ring-1 ring-sand-300"
              priority
            />
            <p className="text-sm text-ink-muted">
              Persönlich betreut von{" "}
              <span className="font-semibold text-anthracite">{contact.name}</span>
              {" – "}
              {contact.role}
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
