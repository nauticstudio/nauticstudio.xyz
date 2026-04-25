import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { RevealWrapper } from '../ui/RevealWrapper';
import { InstagramIcon } from '../ui/Icons';
import { MessageSquare } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { Dictionary } from '@/lib/i18n/dictionaries';

interface ContactSectionProps {
  dict: Dictionary;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ dict }) => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealWrapper direction="up">
          <GlassCard premium className="p-8 md:p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-accent/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{dict.contact_title}</h2>
                <p className="text-gray-400 text-lg">
                  {dict.contact_desc}
                </p>
              </div>

              <ContactForm dict={dict} />

              {/* Social Links */}
              <div className="flex justify-center gap-8 mt-16 border-t border-white/5 pt-12">
                <a href="https://www.instagram.com/nautic.studio/" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <InstagramIcon size={24} className="group-hover:text-brand-accent transition-colors" />
                  <span className="font-bold text-sm tracking-widest uppercase">Instagram</span>
                </a>
                <a href="https://t.me/+QJCKqq-wpR45MmJh" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <MessageSquare size={24} className="group-hover:text-brand-violet transition-colors" />
                  <span className="font-bold text-sm tracking-widest uppercase">Telegram</span>
                </a>
              </div>
            </div>
          </GlassCard>
        </RevealWrapper>
      </div>
    </section>
  );
};
