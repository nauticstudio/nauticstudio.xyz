'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { StudioSection } from '@/components/sections/StudioSection';
import { ReleasesSection } from '@/components/sections/ReleasesSection';
import { TemplatesSection } from '@/components/sections/TemplatesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <div className="relative">
        {/* Section divider glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-brand-accent/20 to-transparent" />
        <StudioSection />
      </div>

      <ReleasesSection />
      <TemplatesSection />
      <PortfolioSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
