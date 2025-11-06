import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INAT Junior Entreprise | Innovation Agronomique et Développement Durable",
  description: "Leader de son écosystème — Une organisation étudiante engagée pour l'innovation, le développement durable et l'excellence professionnelle.",
  keywords: "junior entreprise tunisie, ingénierie agronomique, hydroponie tunisie, études agricoles, INAT",
  authors: [{ name: "INAT Junior Entreprise" }],
  openGraph: {
    title: "INAT Junior Entreprise",
    description: "Leader de son écosystème — Innovation, développement durable et excellence professionnelle.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-brand-white text-brand-darkgray`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
