"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const menuItems = [
    { label: "Ansatz", href: "#approach" },
    { label: "Leistungen", href: "#services" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <nav className="p-4 max-w-7xl">
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
            <Link
              key={item.href}
              href={isHomePage ? item.href : `/${item.href}`}
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 