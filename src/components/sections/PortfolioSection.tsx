import React from 'react';
import { SectionBadge } from '../ui/SectionBadge';
import { RevealWrapper } from '../ui/RevealWrapper';
import { works } from '@/lib/data/works';
import { PortfolioCarousel } from './PortfolioCarousel';
import { Dictionary } from '@/lib/i18n/dictionaries';

interface PortfolioSectionProps {
  dict: Dictionary;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ dict }) => {
  return (
    <section id="work" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <RevealWrapper direction="down">
            <SectionBadge>{dict.nav_portfolio}</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{dict.work_title}</h2>
            <p className="text-gray-400 text-lg">{dict.work_subtitle}</p>
          </RevealWrapper>
        </div>

        <PortfolioCarousel works={works} />
      </div>
    </section>
  );
};
