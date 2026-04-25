'use client';

import React, { useState } from 'react';
import { useTranslation } from '@/lib/i18n/context';
import { works, Work } from '@/lib/data/works';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, Pause, X } from 'lucide-react';
import { GlowButton } from '../ui/GlowButton';

export const PortfolioSection: React.FC = () => {
  const { t } = useTranslation();
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenModal = (work: Work) => {
    setSelectedWork(work);
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(work.audioSrc);
    setAudio(newAudio);
    setIsPlaying(false);
  };

  const handleCloseModal = () => {
    if (audio) {
      audio.pause();
    }
    setSelectedWork(null);
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => console.error("Audio play failed", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('work_title')}</h2>
          <p className="text-gray-400 text-lg">{t('work_subtitle')}</p>
        </div>

        {/* Infinite Moving Cards */}
        <div className="relative w-full overflow-hidden mask-gradient">
          <div className="flex w-max gap-6 animate-scroll hover-pause py-8">
            {[...works, ...works].map((work, index) => (
              <div 
                key={`${work.id}-${index}`}
                onClick={() => handleOpenModal(work)}
                className="w-[300px] md:w-[400px] flex-shrink-0 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 shadow-xl">
                  <Image 
                    src={work.src} 
                    alt={work.title} 
                    fill 
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-accent/80 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{work.title}</h3>
                <p className="text-gray-400 text-sm">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedWork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10"
            >
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto h-full min-h-[300px]">
                  <Image 
                    src={selectedWork.src} 
                    alt={selectedWork.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                
                <div className="p-8 flex flex-col">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedWork.title}</h3>
                  <p className="text-brand-accent font-medium mb-6">{selectedWork.description}</p>
                  
                  <div className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                    {selectedWork.content}
                  </div>

                  <GlowButton 
                    onClick={toggleAudio}
                    variant={isPlaying ? 'secondary' : 'primary'}
                    className="w-full gap-2"
                  >
                    {isPlaying ? (
                      <>
                        <Pause size={20} />
                        Pause Preview
                      </>
                    ) : (
                      <>
                        <Play size={20} className="ml-1" />
                        Listen to Sample
                      </>
                    )}
                  </GlowButton>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
