import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Ansatz", href: "#approach" },
    { label: "Leistungen", href: "#services" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <nav className="p-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <Image
            src="/logo-blue.png"
            alt="Code Schmiede Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          Code Schmiede
        </Link>
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 