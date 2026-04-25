'use client';

import React from 'react';
import { useTranslation } from '@/lib/i18n/context';
import { GlassCard } from '../ui/GlassCard';
import { GlowButton } from '../ui/GlowButton';
import { motion } from 'framer-motion';
import { Send, MessageSquare } from 'lucide-react';
import { InstagramIcon } from '../ui/Icons';

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard premium className="p-8 md:p-16 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-accent/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('contact_title')}</h2>
              <p className="text-gray-400 text-lg">
                {t('contact_desc')}
              </p>
            </div>

            <form 
              action="https://formsubmit.co/53d80d68db36dcd2dd6a289cf9c0d041" 
              method="POST"
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Hidden Fields for FormSubmit */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? new URL('/success', window.location.href).href : ''} />

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{t('form_name')}</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder={t('form_name_ph')}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-all placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{t('form_email')}</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-all placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{t('form_service')}</label>
                  <select 
                    name="subject" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-all appearance-none cursor-pointer"
                  >
                    <option value="Mixing" className="bg-neutral-900">Mixing</option>
                    <option value="Mastering" className="bg-neutral-900">Mastering</option>
                    <option value="DJ Set / Live Act" className="bg-neutral-900">DJ Set / Live Act</option>
                    <option value="Templates" className="bg-neutral-900">Templates</option>
                    <option value="Other" className="bg-neutral-900">{t('form_other')}</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{t('form_message')}</label>
                <textarea 
                  name="message" 
                  required 
                  rows={8}
                  placeholder={t('form_message_ph')}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-all placeholder:text-gray-600 flex-grow resize-none"
                />
              </div>

              <div className="md:col-span-2 mt-4">
                <GlowButton className="w-full gap-3 py-5 text-lg">
                  <Send size={20} />
                  {t('form_submit')}
                </GlowButton>
              </div>
            </form>

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
      </div>
    </section>
  );
};
