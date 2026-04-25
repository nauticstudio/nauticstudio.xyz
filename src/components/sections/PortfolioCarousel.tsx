'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { GlassCard } from '../ui/GlassCard';

interface PortfolioCarouselProps {
  works: any[];
}

export const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ works }) => {
  const [selectedWork, setSelectedWork] = useState<any | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const closePortal = () => {
    setSelectedWork(null);
    setIsPlaying(false);
    if (audioRef.current) audioRef.current.pause();
  };

  return (
    <>
      <div className="relative mt-20 overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 w-max"
        >
          {[...works, ...works].map((work, i) => (
            <button 
              key={`${work.id}-${i}`}
              onClick={() => setSelectedWork(work)}
              className="relative w-64 md:w-80 aspect-square rounded-3xl overflow-hidden group border border-white/10"
            >
              <Image 
                src={work.src} 
                alt={work.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end text-left">
                <p className="text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-1">{work.category}</p>
                <h4 className="text-white font-bold text-lg leading-tight">{work.title}</h4>
              </div>
            </button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedWork && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-4xl w-full"
            >
              <GlassCard premium className="relative overflow-hidden grid md:grid-cols-2">
                <button 
                  onClick={closePortal}
                  className="absolute top-6 right-6 z-20 text-white/50 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="relative aspect-square md:aspect-auto h-full min-h-[300px]">
                  <Image src={selectedWork.src} alt={selectedWork.title} fill className="object-cover" />
                </div>

                <div className="p-8 md:p-12 flex flex-col">
                  <p className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4">{selectedWork.category}</p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">{selectedWork.title}</h3>
                  <p className="text-gray-400 mb-10 leading-relaxed">
                    {selectedWork.desc}
                  </p>

                  <div className="mt-auto space-y-6">
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={toggleAudio}
                        className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1" />}
                      </button>
                      
                      <div className="flex-grow">
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            animate={isPlaying ? { x: ["-100%", "0%"] } : {}}
                            transition={{ duration: 30, ease: "linear" }}
                            className="h-full bg-brand-accent w-full origin-left"
                          />
                        </div>
                      </div>
                    </div>

                    <a 
                      href={selectedWork.link} 
                      target="_blank"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all group"
                    >
                      <ExternalLink size={18} className="group-hover:text-brand-accent transition-colors" />
                      View Project
                    </a>
                  </div>
                </div>

                {selectedWork.audio && (
                  <audio 
                    ref={audioRef} 
                    src={selectedWork.audio} 
                    onEnded={() => setIsPlaying(false)}
                  />
                )}
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
