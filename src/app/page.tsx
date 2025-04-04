"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";

const approachSteps = [
  {
    icon: "/idea.png",
    title: "Idee",
    description: "Wir starten mit Ihren Ideen und Zielen – der Grundstein für den Erfolg.",
  },
  {
    icon: "/analysis.png",
    title: "Analyse",
    description: "Detaillierte Vor-Ort-Besprechung, um alle Anforderungen präzise zu erfassen.",
  },
  {
    icon: "/transfer.png",
    title: "Transfer",
    description: "Effiziente Weitergabe an unser erfahrenes europäisches Entwicklerteam.",
  },
  {
    icon: "/development.png",
    title: "Entwicklung",
    description: "Technische Umsetzung mit höchster Qualität unter Schweizer Leitung.",
  },
  {
    icon: "/success.png",
    title: "Erfolg",
    description: "Maßgeschneiderte Lösungen, die begeistern und langfristig Kosten sparen.",
  },
];

export default function Home() {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    
    contactForm?.scrollIntoView({ behavior: 'smooth' });
    // Small delay to ensure scroll completes before focus
    setTimeout(() => nameInput?.focus(), 800);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Code Schmiede:
              <br />
              <span className="text-3xl md:text-4xl">
                Hochwertige Software,
                <br />
                erschwinglich entwickelt.
              </span>
            </h1>
            <p className="text-lg mb-8">
              Wir verbinden Schweizer Präzision mit europäischen Top-Entwicklern – so entsteht kostengünstige Software auf höchstem Niveau.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Kontakt aufnehmen
            </button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/dev.png"
              alt="Developer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="bg-gray-50 rounded-t-[2rem] px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Unser Ansatz</h2>

          {/* Flags Image */}
          <div className="relative w-full h-40">
            <Image
              src="/flags.png"
              alt="Swiss and EU Flags"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          
          {/* Swiss and European Teams */}
          <div className="grid md:grid-cols-2 gap-8 mb-32">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Schweizer Beratung</h3>
              <p className="text-xl">
                Wir bieten umfassende Beratung<br />
                und Unterstützung für maß-<br />
                geschneiderte Schweizer Lösungen.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Europäische Entwicklung</h3>
              <p className="text-xl">
                Wir entwickeln europäische<br />
                Ideen und Projekte, die den<br />
                höchsten Standards entsprechen
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {approachSteps.map((step, index) => (
              <div key={step.title} className="text-center relative">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 80px, 80px"
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm">{step.description}</p>
                {index < approachSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-8 transform translate-x-1/2">
                    <Image
                      src="/arrow-right.svg"
                      alt="Next Step"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">LEISTUNGEN</h2>
          <p className="text-xl text-center text-gray-600 italic mb-16">Was wir anbieten.</p>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Process Automation */}
            <div className="text-center">
              <div className="bg-yellow-300 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/cloud.svg"
                  alt="Process Automation"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Prozess-Automatisierung</h3>
              <p className="text-gray-600">
                Massgeschneiderte Cloud-Software-Entwicklung, auch für KMUs, die Ihre Anforderungen perfekt erfüllt.
              </p>
            </div>

            {/* Mobile Apps */}
            <div className="text-center">
              <div className="bg-yellow-300 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/mobile.svg"
                  alt="Mobile Apps"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mobile Apps</h3>
              <p className="text-gray-600">
                Innovative und nutzerfreundliche App-Entwicklung für iOS und Android, um Ihre Ideen in erstklassige mobile Anwendungen umzusetzen.
              </p>
            </div>

            {/* AI Bots */}
            <div className="text-center">
              <div className="bg-yellow-300 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/robot.svg"
                  alt="AI Bots"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI</h3>
              <p className="text-gray-600">
                Entwicklung oder Konfiguration von AI-Systemen mit individuellen Daten oder eingebauten Aktionen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">KONTAKT</h2>
          <p className="text-xl text-center text-gray-600 italic mb-12">Lassen Sie uns zusammenarbeiten!</p>

          <form id="contactForm" noValidate method="POST" className="w-full">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent form-control"
                    placeholder="Name*"
                    required
                    data-validation-required-message="Geben Sie einen Namen ein."
                  />
                  <div className="help-block text-red-500 text-sm mt-1"></div>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="_replyto"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent form-control"
                    placeholder="E-Mail*"
                    required
                    data-validation-required-message="Geben Sie Ihre E-Mail-Addresse ein."
                  />
                  <div className="help-block text-red-500 text-sm mt-1"></div>
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent form-control"
                    placeholder="Telefonnummer"
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent form-control"
                  placeholder="Nachricht*"
                  required
                  data-validation-required-message="Schreiben Sie etwas..."
                />
                <div className="help-block text-red-500 text-sm mt-1"></div>
              </div>
            </div>

            <input type="hidden" name="_subject" id="email-subject" value="Kontakt-Formular Bestätigung" />
            <input type="hidden" name="_next" value="#" />
            <input type="text" name="_gotcha" className="hidden" />

            <div className="mt-8 text-center">
              <div id="success"></div>
              <button
                id="sendMessageButton"
                type="submit"
                className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors text-uppercase"
              >
                Nachricht absenden
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
} 