import Navigation from "@/components/Navigation";

export default function Impressum() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        
        <div className="space-y-6 prose max-w-none">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Verantwortliche Instanz</h2>
            <p>Code Schmiede GmbH<br/>
            Aeschbachweg 12 c/o Tobias Walter<br/>
            5000 Aarau<br/>
            Schweiz</p>
            <p><strong>E-Mail</strong>: info@code-schmiede.ch</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Vertretungsberechtigte Personen</h2>
            <p>Tobias Walter</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Unternehmensdetails</h2>
            <p><strong>Name des Unternehmens</strong>: Code Schmiede GmbH</p>
            <p><strong>Registrationsnummer</strong>: CHE-465.800.752</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
            <p>Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.</p>
            <p>Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.</p>
            <p>Alle Angebote sind freibleibend. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss für Inhalte und Links</h2>
            <p>Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Urheberrechtserklärung</h2>
            <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören ausschliesslich Code Schmiede GmbH oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.</p>
          </div>

          <div className="mt-8">
            <p className="text-sm">Quelle: <a href="https://brainbox.swiss/" className="text-inherit no-underline">BrainBox Solutions</a></p>
          </div>
        </div>
      </div>
    </div>
  );
} 