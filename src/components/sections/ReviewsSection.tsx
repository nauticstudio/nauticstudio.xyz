import React from 'react';
import { RevealWrapper } from '../ui/RevealWrapper';
import { testimonials } from '@/lib/data/testimonials';
import { TestimonialSlider } from './TestimonialSlider';
import { Dictionary } from '@/lib/i18n/dictionaries';

interface ReviewsSectionProps {
  dict: Dictionary;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ dict }) => {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <RevealWrapper direction="down">
            <h2 className="text-4xl md:text-5xl font-bold">{dict.reviews_title}</h2>
          </RevealWrapper>
        </div>

        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
};
