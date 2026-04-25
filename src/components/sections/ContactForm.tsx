'use client';

import React, { useState, useEffect } from 'react';
import { GlowButton } from '../ui/GlowButton';
import { Send } from 'lucide-react';

interface ContactFormProps {
  dict: any;
}

export const ContactForm: React.FC<ContactFormProps> = ({ dict }) => {
  const [successUrl, setSuccessUrl] = useState('');

  useEffect(() => {
    // Construct the success URL dynamically on the client
    setSuccessUrl(new URL('./success', window.location.href).href);
  }, []);

  return (
    <form 
      action="https://formsubmit.co/53d80d68db36dcd2dd6a289cf9c0d041" 
      method="POST"
      className="grid md:grid-cols-2 gap-6"
    >
      <input type="text" name="_honey" style={{ display: 'none' }} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={successUrl} />

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{dict.form_name}</label>
          <input 
            type="text" 
            name="name" 
            required 
            placeholder={dict.form_name_ph}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-all placeholder:text-gray-600"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{dict.form_email}</label>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="your@email.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-all placeholder:text-gray-600"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{dict.form_service}</label>
          <select 
            name="subject" 
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-all appearance-none cursor-pointer"
          >
            <option value="Mixing" className="bg-neutral-900">Mixing</option>
            <option value="Mastering" className="bg-neutral-900">Mastering</option>
            <option value="DJ Set / Live Act" className="bg-neutral-900">DJ Set / Live Act</option>
            <option value="Templates" className="bg-neutral-900">Templates</option>
            <option value="Other" className="bg-neutral-900">{dict.form_other}</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col">
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{dict.form_message}</label>
        <textarea 
          name="message" 
          required 
          rows={8}
          placeholder={dict.form_message_ph}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-all placeholder:text-gray-600 flex-grow resize-none"
        />
      </div>

      <div className="md:col-span-2 mt-4">
        <GlowButton className="w-full gap-3 py-5 text-lg">
          <Send size={20} />
          {dict.form_submit}
        </GlowButton>
      </div>
    </form>
  );
};
