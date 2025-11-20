import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { StatsSection } from '@/components/sections/StatsSection';
import { PartnersPreview } from '@/components/sections/PartnersPreview';
import { EventsPreview } from '@/components/sections/EventsPreview';
import { CTASection } from '@/components/sections/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'INAT Junior Entreprise | Innovation Agronomique et Développement Durable',
  description: 'INAT JE - Leader de son écosystème. Organisation étudiante tunisienne spécialisée en ingénierie agronomique, hydroponie, études agricoles et développement durable.',
  keywords: 'inatje, inat je, inat junior entreprise, junior entreprise tunisie, ingénierie agronomique tunisie, hydroponie tunisie, études agricoles, INAT, agronomie tunisie',
  openGraph: {
    title: 'INAT Junior Entreprise | INATJE',
    description: 'Leader de son écosystème - Innovation, développement durable et excellence professionnelle en agronomie.',
    url: 'https://inatje.com',
    siteName: 'INAT Junior Entreprise',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesPreview />
      <PartnersPreview />
      <EventsPreview />
      <CTASection />
    </main>
  );
}
