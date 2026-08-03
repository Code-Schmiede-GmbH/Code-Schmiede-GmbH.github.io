/**
 * Sämtliche Texte der Landingpage an einem Ort.
 * Sprache: Deutsch, Sie-Form, wenig Fachjargon – Nutzen vor Technologie.
 */

export type Service = {
  id: string;
  title: string;
  description: string;
  examples: string[];
};

export type Project = {
  title: string;
  description: string;
  benefits: string[];
  technologies: string[];
};

export type Reason = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "unternehmenssoftware",
    title: "Individuelle Unternehmenssoftware",
    description:
      "Digitale Werkzeuge, die exakt zu den Prozessen Ihres Unternehmens passen – statt Prozesse, die sich an eine Standardsoftware anpassen müssen.",
    examples: ["Interne Anwendungen", "Management-Systeme", "Individuelle Workflows"],
  },
  {
    id: "ki-automatisierung",
    title: "KI & Automatisierung",
    description:
      "Sinnvoll eingesetzte künstliche Intelligenz zur Vereinfachung von Geschäftsprozessen – dort, wo sie echte Arbeit abnimmt.",
    examples: ["Intelligente Assistenten", "Dokumentenverarbeitung", "Automatisierungen"],
  },
  {
    id: "plattformen",
    title: "Moderne Plattformen & Schnittstellen",
    description:
      "Verbindung bestehender Systeme und Entwicklung moderner Anwendungen, die mit Ihrem Unternehmen mitwachsen.",
    examples: ["Webplattformen", "APIs", "Cloud-Lösungen"],
  },
];

export const projects: Project[] = [
  {
    title: "Shopfloor Management Board",
    description:
      "Entwicklung eines individuellen Management-Boards zur Visualisierung und Steuerung von Produktionsprozessen.",
    benefits: ["Bessere Transparenz", "Digitale Ablösung manueller Prozesse"],
    technologies: ["Angular", ".NET", "Cloud"],
  },
  {
    title: "Pick a Peak",
    description:
      "Web- und Mobile-App, die Wanderern hilft, passende Touren anhand persönlicher Kriterien zu finden.",
    benefits: ["Produktentwicklung", "User Experience", "Mobile Anwendungen"],
    technologies: ["Flutter", "Web", "Cloud"],
  },
  {
    title: "KI-Buchhaltungssoftware",
    description:
      "Moderne Buchhaltungssoftware mit KI-Unterstützung, bei der Unternehmen eigene KI-Modelle einsetzen können.",
    benefits: ["Automatisierung", "Intelligente Prozesse"],
    technologies: ["AI", "LLM", "Automatisierung"],
  },
];

export const reasons: Reason[] = [
  {
    title: "Persönlicher Ansprechpartner",
    description:
      "Sie sprechen direkt mit der Person, die Ihre Software entwickelt – ohne Umweg über Projektbüros.",
  },
  {
    title: "Individuelle Lösungen statt Standardsoftware",
    description:
      "Wir bauen, was Sie brauchen, und lassen weg, was Sie nicht brauchen.",
  },
  {
    title: "Verständnis für Geschäftsprozesse",
    description:
      "Zuerst verstehen wir Ihre Abläufe, danach entsteht die technische Lösung.",
  },
  {
    title: "Moderne Technologien sinnvoll eingesetzt",
    description:
      "Aktuelle Technologie dort, wo sie einen messbaren Unterschied macht – nicht als Selbstzweck.",
  },
  {
    title: "Skalierbar durch erfahrenes Entwicklernetzwerk",
    description:
      "Für grössere Vorhaben binden wir ein eingespieltes europäisches Entwicklernetzwerk ein.",
  },
];

export const contact = {
  name: "Tobias Walter",
  role: "Gründer & Softwareentwickler",
  email: "info@code-schmiede.ch",
  note: "Sie erhalten Ihre Antwort direkt von mir – in der Regel innerhalb eines Arbeitstages.",
};

export const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "#projekte" },
  { label: "Warum wir", href: "#warum" },
  { label: "Kontakt", href: "#kontakt" },
];
