import React from 'react';
import { SectionBadge } from '../ui/SectionBadge';
import { RevealWrapper } from '../ui/RevealWrapper';
import { templates } from '@/lib/data/templates';
import { SCPlayerWrapper } from './SCPlayerWrapper';
import Script from 'next/script';
import { Dictionary } from '@/lib/i18n/dictionaries';

interface TemplatesSectionProps {
  dict: Dictionary;
}

export const TemplatesSection: React.FC<TemplatesSectionProps> = ({ dict }) => {
  return (
    <section id="templates" className="py-24 relative overflow-hidden">
      <Script src="https://w.soundcloud.com/player/api.js" strategy="afterInteractive" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <RevealWrapper direction="down">
            <SectionBadge>{dict.templates_title}</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ableton & Logic Templates</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {dict.templates_desc}
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper direction="up">
          <SCPlayerWrapper tracks={templates} ctaText={dict.template_cta} />
        </RevealWrapper>
      </div>
    </section>
  );
};
