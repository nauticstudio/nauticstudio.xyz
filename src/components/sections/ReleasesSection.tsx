'use client';

import React from 'react';
import { useTranslation } from '@/lib/i18n/context';
import { SectionBadge } from '../ui/SectionBadge';
import { releases } from '@/lib/data/releases';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const ReleasesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="dj" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-violet/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <SectionBadge>Discography</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Official <span className="text-brand-accent">Releases</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('releases_desc')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {releases.map((release, index) => (
            <motion.a
              key={release.id}
              href={release.spotifyLink}
              target="_blank"
              rel="noopener noreferrer"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden block shadow-2xl"
            >
              <Image
                src={release.src}
                alt={release.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm">
                <h4 className="text-white font-bold text-lg mb-4">{release.title}</h4>
                <span className="inline-flex items-center gap-2 px-6 py-2 bg-[#1DB954] text-black rounded-full text-xs font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  {t('listen_spotify')}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
