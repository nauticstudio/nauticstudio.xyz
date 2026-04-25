import React from 'react';
import { SectionBadge } from '../ui/SectionBadge';
import { RevealWrapper } from '../ui/RevealWrapper';
import { releases } from '@/lib/data/releases';
import Image from 'next/image';
import { SpotifyIcon } from '../ui/Icons';
import { Dictionary } from '@/lib/i18n/dictionaries';

interface ReleasesSectionProps {
  dict: Dictionary;
}

export const ReleasesSection: React.FC<ReleasesSectionProps> = ({ dict }) => {
  return (
    <section id="dj" className="py-24 relative bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <RevealWrapper direction="right">
              <SectionBadge>{dict.releases_title}</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Discography</h2>
              <p className="text-gray-400 text-lg">
                {dict.releases_desc}
              </p>
            </RevealWrapper>
          </div>
          <RevealWrapper direction="left">
            <a 
              href="https://open.spotify.com/intl-es/artist/4X9yOas8vW2mB1UAnX9S8p" 
              target="_blank"
              className="flex items-center gap-3 px-8 py-4 bg-[#1DB954] text-black font-bold rounded-full hover:scale-105 transition-transform"
            >
              <SpotifyIcon size={24} />
              {dict.listen_spotify}
            </a>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {releases.map((release, i) => (
            <RevealWrapper key={release.id} direction="up" delay={i * 0.1}>
              <a 
                href={release.spotifyLink} 
                target="_blank" 
                className="group block relative aspect-square overflow-hidden rounded-2xl border border-white/10"
              >
                <Image 
                  src={release.src} 
                  alt={release.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <h4 className="font-bold text-sm text-white line-clamp-1">{release.title}</h4>
                  <p className="text-brand-accent text-xs font-bold uppercase tracking-widest">{release.label}</p>
                </div>
              </a>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
