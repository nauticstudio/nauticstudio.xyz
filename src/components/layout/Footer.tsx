import React from 'react';
import { InstagramIcon } from '../ui/Icons';
import { Send, ArrowUp } from 'lucide-react';
import { Dictionary } from '@/lib/i18n/dictionaries';

interface FooterProps {
  dict: Dictionary;
}

export const Footer: React.FC<FooterProps> = ({ dict }) => {
  return (
    <footer className="bg-black pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-brand-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="inline-block font-bold tracking-tighter text-white text-2xl mb-6">
              NAUTIC<span className="text-brand-accent">BOY</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              {dict.footer_desc}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/nautic.studio/" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all">
                <InstagramIcon size={18} />
              </a>
              <a href="https://t.me/+QJCKqq-wpR45MmJh" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-violet hover:text-white hover:border-brand-violet transition-all">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">{dict.footer_services}</h4>
            <ul className="space-y-4">
              {['Mixing', 'Mastering', 'Live Acts', 'Software'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">{dict.footer_nav}</h4>
            <ul className="space-y-4">
              {[
                { name: dict.nav_studio, href: '#services' },
                { name: dict.nav_releases, href: '#dj' },
                { name: dict.nav_templates, href: '#templates' },
                { name: dict.nav_portfolio, href: '#work' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-500 hover:text-white transition-colors text-sm">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">{dict.footer_newsletter}</h4>
            <p className="text-gray-500 text-sm mb-6">{dict.footer_newsletter_desc}</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder={dict.footer_email_ph}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-accent flex-grow"
              />
              <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-accent hover:text-white transition-all">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Nautic Boy & Studio. {dict.footer_rights}
          </p>
          
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">{dict.footer_privacy}</a>
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">{dict.footer_terms}</a>
          </div>

          <a 
            href="#"
            className="group flex items-center gap-3 text-gray-500 hover:text-white transition-colors"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Back to top</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-accent group-hover:text-brand-accent transition-all">
              <ArrowUp size={14} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
