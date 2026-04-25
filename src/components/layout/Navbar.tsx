'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n/context';
import { GlowButton } from '../ui/GlowButton';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { t, lang, toggleLang } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_studio'), href: '#services' },
    { name: t('nav_releases'), href: '#dj' },
    { name: t('nav_templates'), href: '#templates' },
    { name: t('nav_portfolio'), href: '#work' },
    { name: t('nav_software'), href: '#software' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 pt-4 px-4">
      <nav 
        className={`relative flex items-center justify-between px-6 py-3 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] mx-auto max-w-6xl rounded-2xl border border-white/10 ${
          isScrolled 
          ? 'bg-black/80 backdrop-blur-2xl shadow-[0_16px_40px_0_rgba(0,0,0,0.4)]' 
          : 'bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
        }`}
      >
        {/* Left: Logo */}
        <div className="flex items-center flex-1">
          <a href="#" className="relative z-20 flex items-center gap-1 font-bold tracking-tighter text-white text-lg whitespace-nowrap hover:opacity-80 transition-opacity">
            NAUTIC<span className="text-brand-accent">BOY</span>
            <span className="text-gray-500 mx-1">&</span>
            <span className="text-brand-accent">STUDIO</span>
          </a>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center gap-7">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Options & Mobile */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          <button 
            onClick={toggleLang}
            className="relative z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
          >
            <Globe className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-glow transition-colors" />
            <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors uppercase">
              {lang === 'en' ? 'es' : 'en'}
            </span>
          </button>

          <GlowButton 
            href="#contact" 
            variant="white" 
            className="hidden lg:inline-flex !py-2 !px-5 !text-sm"
          >
            {t('nav_contact')}
          </GlowButton>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute inset-x-4 top-20 z-40 lg:hidden"
          >
            <div className="bg-neutral-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <GlowButton 
                href="#contact" 
                variant="white" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              >
                {t('nav_contact')}
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
