import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solvanta.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Solvanta Technologies | Turning Challenges into Solutions",
    template: "%s | Solvanta Technologies",
  },
  description:
    "Solvanta Technologies is a software development company building modern web applications, business management systems, and scalable digital solutions. Academic project demonstration.",
  keywords: [
    "Solvanta Technologies",
    "software development",
    "web applications",
    "business management systems",
    "API development",
    "UI/UX design",
  ],
  authors: [{ name: "Solvanta Technologies" }],
  openGraph: {
    type: "website",
    siteName: "Solvanta Technologies",
    title: "Solvanta Technologies | Turning Challenges into Solutions",
    description:
      "We design and develop modern web applications, business management systems, and scalable digital solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvanta Technologies | Turning Challenges into Solutions",
    description:
      "We design and develop modern web applications, business management systems, and scalable digital solutions.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1730",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-white text-ink">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
