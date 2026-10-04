import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Code Schmiede – Individuelle Software für Schweizer Unternehmen",
  description:
    "Code Schmiede entwickelt individuelle Softwarelösungen für Schweizer Unternehmen – von internen Anwendungen bis zu KI-gestützten Automatisierungen.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#E2571E"
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192"
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512"
      }
    ]
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#F7F7F4",
    "msapplication-config": "/browserconfig.xml"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${manrope.className} bg-sand text-anthracite antialiased`}>
        {children}
      </body>
    </html>
  );
}
