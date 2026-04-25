'use client';

import React from 'react';
import { useTranslation } from '@/lib/i18n/context';
import { motion } from 'framer-motion';
import Image from 'next/image';

const StatCounter = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="text-4xl md:text-5xl font-bold text-white mb-1"
      >
        {value}
      </motion.div>
      <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
        {label}
      </div>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-brand-accent to-brand-violet rounded-3xl opacity-20 blur-2xl animate-pulse" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-4/5 md:aspect-square">
              <Image 
                src="/images/studio.jpg" 
                alt="Nautic Studio" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-white">Studio Online</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Obsessed with <span className="text-brand-accent">Sonic Perfection</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              {t('about_p1')}
            </p>
            
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              {t('about_p2')}
            </p>

            <div className="grid grid-cols-3 gap-8 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
              <StatCounter value="100+" label={t('about_tracks')} />
              <StatCounter value="10+" label={t('about_years')} />
              <StatCounter value="5★" label={t('about_rating')} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
