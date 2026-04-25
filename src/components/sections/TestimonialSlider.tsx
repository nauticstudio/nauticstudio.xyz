'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialSliderProps {
  testimonials: any[];
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
      {/* Image Stack */}
      <div className="relative h-[400px] md:h-[500px] w-full perspective-2000">
        <AnimatePresence mode="popLayout">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            const offset = (index - activeIndex + testimonials.length) % testimonials.length;
            
            return isActive ? (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0, z: 10 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 z-30"
              >
                <Image 
                  src={testimonial.src} 
                  alt={testimonial.name} 
                  fill 
                  className="object-cover rounded-3xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)] border border-white/10" 
                />
              </motion.div>
            ) : offset === 1 ? (
               <div key={testimonial.id} className="absolute inset-0 z-20 transform translate-x-8 translate-y-8 scale-95 opacity-40 blur-[2px]">
                  <Image src={testimonial.src} alt={testimonial.name} fill className="object-cover rounded-3xl grayscale" />
               </div>
            ) : null;
          })}
        </AnimatePresence>
      </div>

      {/* Content Column */}
      <div className="flex flex-col justify-center">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Quote className="text-brand-accent mb-8" size={48} />
          
          <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed italic mb-10 font-light">
            "{testimonials[activeIndex].quote}"
          </p>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-1">{testimonials[activeIndex].name}</h3>
            <p className="text-brand-accent text-sm font-bold uppercase tracking-widest">{testimonials[activeIndex].role}</p>
          </div>

          <div className="flex gap-6">
            <button 
              onClick={prev}
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-accent/30 transition-all"
            >
              <ChevronLeft className="text-gray-400 group-hover:text-white transform group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={next}
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-accent/30 transition-all"
            >
              <ChevronRight className="text-gray-400 group-hover:text-white transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
