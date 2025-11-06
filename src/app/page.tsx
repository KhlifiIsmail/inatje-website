import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { StatsSection } from '@/components/sections/StatsSection';
import { PartnersPreview } from '@/components/sections/PartnersPreview';
import { EventsPreview } from '@/components/sections/EventsPreview';
import { CTASection } from '@/components/sections/CTASection';

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
