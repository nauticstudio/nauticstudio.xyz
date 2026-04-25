import React from 'react';
import { RevealWrapper } from '../ui/RevealWrapper';
import { StatCounter } from './StatCounter';
import Image from 'next/image';
import { Dictionary } from '@/lib/i18n/dictionaries';

interface AboutSectionProps {
  dict: Dictionary;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ dict }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <RevealWrapper direction="right">
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-brand-accent to-brand-violet rounded-3xl opacity-20 blur-2xl animate-pulse" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-4/5 md:aspect-square">
                <Image 
                  src="/images/studio.jpg" 
                  alt="Nautic Studio" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </RevealWrapper>

          {/* Text Column */}
          <div>
            <RevealWrapper direction="left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Obsessed with <span className="text-brand-accent">Sonic Perfection</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {dict.about_p1}
              </p>
              
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                {dict.about_p2}
              </p>

              <div className="grid grid-cols-3 gap-8 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <StatCounter value="100+" label={dict.about_tracks} />
                <StatCounter value="10+" label={dict.about_years} />
                <StatCounter value="5★" label={dict.about_rating} />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
