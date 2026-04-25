'use client';

import React, { useRef, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n/context';
import { GlowButton } from '../ui/GlowButton';
import { ParticleField } from '../ui/ParticleField';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current || window.innerWidth < 1024) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      
      const x = (clientX - (left + width / 2)) / (width / 2);
      const y = (clientY - (top + height / 2)) / (height / 2);
      
      const rotateY = x * 15;
      const rotateX = -y * 15;
      
      imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    const section = heroRef.current;
    section?.addEventListener('mousemove', handleMouseMove);
    section?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section?.removeEventListener('mousemove', handleMouseMove);
      section?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <ParticleField />
      
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-xl">
                 <Image src="/images/np_64x64.png" alt="NauticPlayer" width={32} height={32} />
              </div>
              <span className="text-sm font-bold tracking-widest text-brand-accent uppercase">Now Playing</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-gradient">NauticPlayer</span>
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-lg leading-relaxed font-light"
              dangerouslySetInnerHTML={{ __html: t('software_tagline') }}
            />
            
            <ul className="space-y-4 mb-10">
              {[
                t('software_feature1'),
                t('software_feature2'),
                t('software_feature3')
              ].map((feature, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start text-gray-400"
                >
                  <span className="text-brand-accent mr-3 mt-1 text-sm">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: feature }} />
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <GlowButton href="https://player.nauticstudio.xyz" className="gap-2">
                <Download size={20} />
                {t('software_cta')}
              </GlowButton>
              <GlowButton href="#services" variant="secondary" className="gap-2">
                {t('hero_cta1')}
                <ExternalLink size={18} />
              </GlowButton>
            </div>
          </motion.div>

          {/* Interactive 3D Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative perspective-2000 hidden lg:flex justify-center"
          >
            <div 
              ref={imageRef}
              className="relative w-full max-w-[500px] transition-transform duration-200 transform-style-3d shadow-2xl rounded-3xl overflow-hidden"
            >
              {/* Aura effect behind image */}
              <div className="absolute -inset-10 bg-brand-violet/20 blur-[100px] rounded-full animate-pulse" />
              
              <Image 
                src="/images/player-bl.webp" 
                alt="NauticPlayer Interface" 
                width={600} 
                height={400}
                className="relative z-10 w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 cursor-pointer hover:text-white transition-colors"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
