"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import { useState, FormEvent, useRef } from 'react';

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
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
    show: boolean;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const scrollToContact = () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    
    contactForm?.scrollIntoView({ behavior: 'smooth' });
    // Small delay to ensure scroll completes before focus
    setTimeout(() => nameInput?.focus(), 800);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('_replyto') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    let firstName = name;
    if (firstName.indexOf(' ') >= 0) {
      firstName = name.split(' ').slice(0, -1).join(' ');
    }

    try {
      const response = await fetch('https://papamuffloncontact20231031175711.azurewebsites.net/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      setFormStatus({
        success: true,
        message: 'Nachricht erfolgreich gesendet.',
        show: true
      });

      formRef.current?.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus({
        success: false,
        message: `Sorry ${firstName}, it seems that my mail server is not responding. Please try again later!`,
        show: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputFocus = () => {
    setFormStatus(null);
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

          <form id="contactForm" ref={formRef} onSubmit={handleSubmit} noValidate className="w-full">
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
                    onFocus={handleInputFocus}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="_replyto"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent form-control"
                    placeholder="E-Mail*"
                    required
                    onFocus={handleInputFocus}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent form-control"
                    placeholder="Telefonnummer"
                    onFocus={handleInputFocus}
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
                  onFocus={handleInputFocus}
                />
              </div>
            </div>

            <input type="hidden" name="_subject" id="email-subject" value="Kontakt-Formular Bestätigung" />
            <input type="hidden" name="_next" value="#" />
            <input type="text" name="_gotcha" className="hidden" />

            <div className="mt-8 text-center">
              {formStatus && (
                <div id="success" className={`mb-4 ${formStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                  <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-danger'} p-4 rounded-md ${formStatus.success ? 'bg-green-50' : 'bg-red-50'}`}>
                    <strong>{formStatus.message}</strong>
                  </div>
                </div>
              )}
              <button
                id="sendMessageButton"
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-500 text-white px-8 py-3 rounded-md transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Nachricht absenden'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
} 