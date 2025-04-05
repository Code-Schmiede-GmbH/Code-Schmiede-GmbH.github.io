import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600">
            © {currentYear} Code Schmiede GmbH. Alle Rechte vorbehalten.
          </div>
          <div className="flex space-x-6">
            <Link 
              href="/impressum" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Impressum
            </Link>
            <Link 
              href="/legal" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Rechtliche Hinweise
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 