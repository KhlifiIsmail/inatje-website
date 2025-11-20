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
  metadataBase: new URL("https://inatje.com"),
  title:
    "INAT Junior Entreprise | Innovation Agronomique et Développement Durable",
  description:
    "Leader de son écosystème — Une organisation étudiante engagée pour l'innovation, le développement durable et l'excellence professionnelle.",
  keywords:
    "junior entreprise tunisie, ingénierie agronomique, hydroponie tunisie, études agricoles, INAT",
  authors: [{ name: "INAT Junior Entreprise" }],
  openGraph: {
    title: "INAT Junior Entreprise",
    description:
      "Leader de son écosystème — Innovation, développement durable et excellence professionnelle.",
    type: "website",
    locale: "fr_FR",
    url: "https://inatje.com",
    siteName: "INAT Junior Entreprise",
    images: [
      {
        url: "/images/simpleLogo.png",
        width: 1200,
        height: 630,
        alt: "INAT Junior Entreprise - Innovation Agronomique et Développement Durable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INAT Junior Entreprise",
    description:
      "Leader de son écosystème — Innovation, développement durable et excellence professionnelle.",
    images: ["/images/simpleLogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "INAT Junior Entreprise",
    url: "https://inatje.com",
    logo: "https://inatje.com/logo.png",
    description:
      "Leader de son écosystème — Une organisation étudiante engagée pour l'innovation, le développement durable et l'excellence professionnelle.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TN",
    },
    sameAs: [
      "https://www.facebook.com/inatje",
      "https://www.linkedin.com/company/inat-junior-entreprise",
      "https://www.instagram.com/inatje",
    ],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
