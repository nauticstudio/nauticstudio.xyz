import React from 'react';
import { GlowButton } from '../ui/GlowButton';
import { NavbarWrapper } from './NavbarWrapper';
import { LanguageToggle } from './LanguageToggle';
import { MobileMenu } from './MobileMenu';
import { Dictionary } from '@/lib/i18n/dictionaries';

interface NavbarProps {
  dict: Dictionary;
  lang: string;
}

export const Navbar: React.FC<NavbarProps> = ({ dict, lang }) => {
  const navLinks = [
    { name: dict.nav_studio, href: '#services' },
    { name: dict.nav_releases, href: '#dj' },
    { name: dict.nav_templates, href: '#templates' },
    { name: dict.nav_portfolio, href: '#work' },
    { name: dict.nav_software, href: '#software' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 pt-4 px-4">
      <NavbarWrapper>
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
          <LanguageToggle currentLang={lang} />

          <GlowButton 
            href="#contact" 
            variant="white" 
            className="hidden lg:inline-flex !py-2 !px-5 !text-sm"
          >
            {dict.nav_contact}
          </GlowButton>

          <MobileMenu links={navLinks} contactText={dict.nav_contact} />
        </div>
      </NavbarWrapper>
    </header>
  );
};
