"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type TabId = "auftraege" | "produktion" | "dokumente" | "auswertung";

const tabs: { id: TabId; label: string }[] = [
  { id: "auftraege", label: "Aufträge" },
  { id: "produktion", label: "Produktion" },
  { id: "dokumente", label: "Dokumente" },
  { id: "auswertung", label: "Auswertung" },
];

/** Klick auf den hartnäckigen Auftrag – die Ausreden gehen nie aus. */
const pendingStates = [
  "Seit 2019 in Prüfung",
  "Immer noch in Prüfung",
  "Liegt beim Chef",
  "Chef ist im Skiurlaub",
  "Jetzt aber wirklich",
];

/**
 * Automatisierungsgrad zum Hochklicken – die Durchlaufzeit sinkt mit.
 * `days` ist der Wert in Tagen, `START_DAYS` dient als Massstab für die
 * Balkenlänge.
 */
const automationSteps = [
  { value: 41, days: 12, note: "Vieles läuft noch von Hand." },
  { value: 63, days: 9, note: "Schon deutlich ruhiger." },
  { value: 82, days: 6, note: "Der Excel-Ordner wird nervös." },
  { value: 97, days: 4, note: "Fast geschafft." },
  { value: 100, days: 3, note: "Feierabend. Den Rest macht die Software." },
];

const START_DAYS = automationSteps[0].days;

const messyFiles = [
  "Offerte_final_v2_FINAL_neu(3).xlsx",
  "Rechnung_Kopie_von_Kopie.docx",
  "WICHTIG_nicht_loeschen.xlsx",
];

const tidyFiles = [
  "Offerte-2024-114.pdf",
  "Rechnung-2024-087.pdf",
  "Archiv-2019.zip",
];

const chartPaths = {
  excel: "M0 30 L34 34 L68 24 L102 40 L136 22 L170 44 L204 28 L238 34",
  eigene: "M0 46 L34 38 L68 42 L102 26 L136 30 L170 16 L204 20 L238 6",
};

const rowClasses =
  "flex w-full items-center justify-between gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-sand/70";

/**
 * Bedienbares UI-Mockup für den Hero – reines Markup/SVG, keine Bilddatei.
 * Jeder Reiter lässt sich anklicken und erzählt mit einem Augenzwinkern,
 * was individuelle Software im Alltag verändert.
 */
export default function HeroMockup() {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<TabId>("produktion");
  const [pending, setPending] = useState(0);
  const [step, setStep] = useState(0);
  const [tidy, setTidy] = useState(false);
  const [chart, setChart] = useState<"excel" | "eigene">("eigene");

  const automation = automationSteps[step];

  return (
    <div className="relative w-full max-w-[32rem]">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-xl2 border border-white/80 bg-white/85 shadow-card-hover ring-1 ring-sand-300/70 backdrop-blur-md"
      >
        {/* Fensterleiste */}
        <div className="flex items-center gap-3 border-b border-sand-200 bg-sand/70 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-sand-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-sand-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-sand-300" />
          </div>
          <div className="flex-1 rounded-md bg-white px-3 py-1 text-center text-[11px] font-medium text-ink-subtle">
            app.ihr-unternehmen.ch
          </div>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-[auto_minmax(0,1fr)]">
          {/* Reiter: mobil horizontal, ab sm als Seitennavigation */}
          <div
            role="tablist"
            aria-label="Beispielbereiche der Anwendung"
            className="flex gap-1 overflow-x-auto border-b border-sand-200 bg-sand/60 px-3 py-2 sm:flex-col sm:gap-2 sm:border-b-0 sm:border-r sm:px-4 sm:py-6"
          >
            {tabs.map((item) => {
              const active = tab === item.id;
              return (
                <button
                  key={item.id}
                  role="tab"
                  type="button"
                  id={`tab-${item.id}`}
                  aria-selected={active}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => setTab(item.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-md px-2 py-1 text-[11px] font-medium transition-colors sm:px-1 ${
                    active
                      ? "text-anthracite"
                      : "text-ink-subtle hover:text-anthracite"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-4 w-1 rounded-full transition-colors ${
                      active ? "bg-ember" : "bg-sand-300"
                    }`}
                  />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Inhalt */}
          <div className="min-h-[17rem] px-5 py-6 sm:px-6">
            {/* key={tab} montiert das Panel neu – bewusst ohne AnimatePresence,
                damit der Inhalt sofort da ist und nie auf ein Exit wartet. */}
            <motion.div
              key={tab}
              id={`panel-${tab}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab}`}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
                {tab === "auftraege" && (
                  <>
                    <PanelHead eyebrow="Aufträge" title="Diese Woche" />
                    <div className="mt-5 space-y-1">
                      <div className={rowClasses}>
                        <span className="text-[12px] font-medium text-anthracite">
                          Meier AG · Sondermaschine
                        </span>
                        <Pill tone="ember">In Produktion</Pill>
                      </div>
                      <div className={rowClasses}>
                        <span className="text-[12px] font-medium text-anthracite">
                          Bosshard GmbH · Wartung
                        </span>
                        <Pill>Geplant</Pill>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setPending((p) => (p + 1) % pendingStates.length)
                        }
                        className={rowClasses}
                      >
                        <span className="text-[12px] font-medium text-anthracite">
                          Offerte #2019-114
                        </span>
                        <Pill tone="muted">{pendingStates[pending]}</Pill>
                      </button>
                    </div>
                  </>
                )}

                {tab === "produktion" && (
                  <>
                    <PanelHead eyebrow="Produktion" title="Laufende Aufträge">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-ember-50 px-2.5 py-1 text-[11px] font-semibold text-ember-600">
                        <motion.span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-ember"
                          animate={
                            reduceMotion ? undefined : { opacity: [1, 0.35, 1] }
                          }
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        Live
                      </span>
                    </PanelHead>

                    <div className="mt-5 space-y-4">
                      <Bar
                        label="Durchlaufzeit"
                        display={`${automation.days} Tage`}
                        fill={(automation.days / START_DAYS) * 100}
                        tone="dark"
                        hint={
                          step > 0
                            ? `−${START_DAYS - automation.days} Tage`
                            : undefined
                        }
                      />
                      <Bar
                        label="Automatisiert"
                        display={`${automation.value} %`}
                        fill={automation.value}
                        tone="ember"
                      />
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setStep((s) => (s + 1) % automationSteps.length)
                        }
                        className="rounded-md bg-anthracite px-3 py-1.5 text-[11px] font-semibold text-sand transition-colors hover:bg-anthracite-800"
                      >
                        {automation.value === 100
                          ? "Nochmal von vorn"
                          : "Mehr automatisieren"}
                      </button>
                      <span className="text-[11px] text-ink-subtle">
                        {automation.note}
                      </span>
                    </div>
                  </>
                )}

                {tab === "dokumente" && (
                  <>
                    <PanelHead
                      eyebrow="Dokumente"
                      title={tidy ? "Abgelegt" : "Irgendwo im Ordner"}
                    />
                    <ul className="mt-5 space-y-2">
                      {(tidy ? tidyFiles : messyFiles).map((file) => (
                        <li
                          key={file}
                          className="flex items-center gap-2.5 text-[12px] text-anthracite"
                        >
                          <span
                            aria-hidden="true"
                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                              tidy ? "bg-ember" : "bg-sand-300"
                            }`}
                          />
                          <span className="truncate">{file}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setTidy((t) => !t)}
                        className="rounded-md bg-anthracite px-3 py-1.5 text-[11px] font-semibold text-sand transition-colors hover:bg-anthracite-800"
                      >
                        {tidy ? "Zurück ins Chaos" : "Aufräumen"}
                      </button>
                      <span className="text-[11px] text-ink-subtle">
                        {tidy
                          ? "Gefunden in 0,3 Sekunden statt in 20 Minuten."
                          : "Drei Dateien, drei Meinungen zur Ablage."}
                      </span>
                    </div>
                  </>
                )}

                {tab === "auswertung" && (
                  <>
                    <PanelHead eyebrow="Auswertung" title="Entwicklung" />
                    <div className="mt-4 flex gap-1.5">
                      {(["excel", "eigene"] as const).map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setChart(mode)}
                          aria-pressed={chart === mode}
                          className={`rounded-md px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                            chart === mode
                              ? "bg-anthracite text-sand"
                              : "bg-sand-200 text-ink-muted hover:text-anthracite"
                          }`}
                        >
                          {mode === "excel" ? "Mit Excel" : "Mit eigener Software"}
                        </button>
                      ))}
                    </div>
                    <svg
                      viewBox="0 0 238 52"
                      className="mt-4 h-16 w-full"
                      fill="none"
                      role="img"
                      aria-label={
                        chart === "excel"
                          ? "Zickzack-Verlauf ohne erkennbaren Trend"
                          : "Stetig steigender Verlauf"
                      }
                    >
                      <motion.path
                        stroke={chart === "excel" ? "#8A8A84" : "#B87333"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={false}
                        animate={{ d: chartPaths[chart] }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                      <motion.circle
                        r="3.5"
                        cx="238"
                        fill={chart === "excel" ? "#8A8A84" : "#B87333"}
                        initial={false}
                        animate={{ cy: chart === "excel" ? 34 : 6 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                    </svg>
                    <Caption>
                      {chart === "excel"
                        ? "Stand: letzter Monat. Vermutlich."
                        : "Stand: jetzt. Ohne Nachrechnen."}
                    </Caption>
                  </>
                )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function PanelHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-[11px] uppercase tracking-[0.16em] text-ink-subtle">
          {eyebrow}
        </p>
        <p className="mt-1 text-sm font-bold text-anthracite">{title}</p>
      </div>
      {children}
    </div>
  );
}

function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "ember" | "muted";
}) {
  const tones = {
    neutral: "bg-sand-200 text-ink-muted",
    ember: "bg-ember-50 text-ember-600",
    muted: "bg-sand-200 text-ink-subtle",
  };
  return (
    <span
      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function Bar({
  label,
  display,
  fill,
  tone,
  hint,
}: {
  label: string;
  /** Beschriftung rechts, z. B. "9 Tage" oder "63 %" */
  display: string;
  /** Balkenlänge in Prozent */
  fill: number;
  tone: "dark" | "ember";
  /** Optionaler Zusatz, z. B. die eingesparten Tage */
  hint?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-2 text-[11px]">
        <span className="font-medium text-ink-muted">{label}</span>
        <span className="flex items-baseline gap-1.5">
          {hint && <span className="font-semibold text-ember-600">{hint}</span>}
          <span className="font-semibold text-anthracite">{display}</span>
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-sand-200">
        <motion.div
          className={`h-full rounded-full ${
            tone === "dark" ? "bg-anthracite" : "bg-ember"
          }`}
          initial={reduceMotion ? false : { width: 0 }}
          animate={{ width: `${fill}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 text-[11px] text-ink-subtle">{children}</p>;
}
