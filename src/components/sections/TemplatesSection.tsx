'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n/context';
import { SectionBadge } from '../ui/SectionBadge';
import { GlassCard } from '../ui/GlassCard';
import { templates } from '@/lib/data/templates';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, Pause, ExternalLink } from 'lucide-react';
import Script from 'next/script';

declare global {
  interface Window {
    SC: any;
  }
}

export const TemplatesSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [widget, setWidget] = useState<any>(null);

  const handlePlay = (trackUrl: string) => {
    if (activeTrack === trackUrl) {
      if (isPlaying) {
        widget?.pause();
      } else {
        widget?.play();
      }
    } else {
      setActiveTrack(trackUrl);
      setIsPlaying(true);
      // Widget will load new track via effect
    }
  };

  useEffect(() => {
    if (!window.SC || !activeTrack) return;

    const iframe = document.getElementById('sc-hidden-iframe') as HTMLIFrameElement;
    if (!iframe) return;

    const scWidget = window.SC.Widget(iframe);
    setWidget(scWidget);

    scWidget.load(activeTrack, {
      auto_play: true,
      show_artwork: false,
      show_comments: false,
      show_playcount: false,
      show_user: false,
      hide_related: true,
      visual: false
    });

    scWidget.bind(window.SC.Widget.Events.PLAY, () => setIsPlaying(true));
    scWidget.bind(window.SC.Widget.Events.PAUSE, () => setIsPlaying(false));
    scWidget.bind(window.SC.Widget.Events.FINISH, () => setIsPlaying(false));

    return () => {
      scWidget.unbind(window.SC.Widget.Events.PLAY);
      scWidget.unbind(window.SC.Widget.Events.PAUSE);
      scWidget.unbind(window.SC.Widget.Events.FINISH);
    };
  }, [activeTrack]);

  return (
    <section id="templates" className="py-24 relative overflow-hidden bg-white/5">
      <Script src="https://w.soundcloud.com/player/api.js" strategy="lazyOnload" />
      
      <iframe
        id="sc-hidden-iframe"
        style={{ display: 'none' }}
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1&auto_play=false"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <SectionBadge>Producer Tools</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Production <span className="text-brand-accent">Templates</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('templates_desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard premium className="overflow-hidden group flex flex-col h-full">
                <div className="relative aspect-square overflow-hidden">
                  {template.isNew && (
                    <div className="absolute top-4 left-4 z-20 bg-brand-accent text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                      NEW
                    </div>
                  )}
                  
                  <Image
                    src={template.src}
                    alt={template.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handlePlay(template.scTrackUrl)}
                      className={`w-16 h-16 rounded-full bg-brand-accent text-white flex items-center justify-center transition-all duration-300 transform shadow-2xl ${
                        activeTrack === template.scTrackUrl 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                      }`}
                    >
                      {activeTrack === template.scTrackUrl && isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
                    </button>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-white text-xl">{template.title}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                      template.platform.includes('Ableton') ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {template.platform}
                    </span>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-6 flex-grow">Complete professional project template.</p>
                  
                  <a 
                    href={template.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-brand-accent/30 rounded-xl hover:bg-brand-accent/10 transition-colors text-sm font-bold text-brand-glow group/btn"
                  >
                    {t('template_cta')}
                    <ExternalLink size={16} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
