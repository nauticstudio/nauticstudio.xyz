'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowButton } from '../ui/GlowButton';

interface MobileMenuProps {
  links: { name: string; href: string }[];
  contactText: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ links, contactText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors relative z-50"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute inset-x-4 top-20 z-40 lg:hidden"
          >
            <div className="bg-neutral-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <GlowButton 
                href="#contact" 
                variant="white" 
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                {contactText}
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
