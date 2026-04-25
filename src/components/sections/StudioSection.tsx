import React from 'react';
import { SectionBadge } from '../ui/SectionBadge';
import { GlassCard } from '../ui/GlassCard';
import { GlowButton } from '../ui/GlowButton';
import { RevealWrapper } from '../ui/RevealWrapper';
import { Music, SlidersHorizontal, Check } from 'lucide-react';
import { Dictionary } from '@/lib/i18n/dictionaries';

interface StudioSectionProps {
  dict: Dictionary;
}

export const StudioSection: React.FC<StudioSectionProps> = ({ dict }) => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <RevealWrapper direction="down">
            <SectionBadge>{dict.services_title}</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Professional Sound Engineering</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {dict.services_desc}
            </p>
          </RevealWrapper>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mixing Card */}
          <RevealWrapper direction="up" className="h-full">
            <GlassCard premium className="p-8 md:p-10 h-full flex flex-col">
              <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-accent/20">
                <SlidersHorizontal className="text-brand-accent" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{dict.mixing_title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {dict.mixing_desc}
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  dict.mixing_feature1,
                  dict.mixing_feature2,
                  dict.mixing_feature3,
                  dict.mixing_feature4
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-sm">
                    <Check className="text-brand-accent mr-3" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <GlowButton href="#contact" variant="ghost" className="w-full">
                {dict.mixing_cta}
              </GlowButton>
            </GlassCard>
          </RevealWrapper>

          {/* Mastering Card */}
          <RevealWrapper direction="up" delay={0.2} className="h-full">
            <GlassCard premium className="p-8 md:p-10 h-full flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl tracking-widest">
                {dict.mastering_popular}
              </div>
              
              <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-accent/20">
                <Music className="text-brand-accent" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{dict.mastering_title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {dict.mastering_desc}
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  dict.mastering_feature1,
                  dict.mastering_feature2,
                  dict.mastering_feature3
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-sm">
                    <Check className="text-brand-accent mr-3" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <GlowButton href="#contact" className="w-full">
                {dict.mastering_cta}
              </GlowButton>
            </GlassCard>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};
