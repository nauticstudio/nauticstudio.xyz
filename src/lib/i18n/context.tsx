'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationKeys } from './translations';

interface I18nContextType {
  lang: Language;
  t: (key: TranslationKeys, variables?: Record<string, string | number>) => string;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('nb_lang') as Language;
    if (saved && (saved === 'en' || saved === 'es')) {
      setLangState(saved);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'es') setLangState('es');
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('nb_lang', newLang);
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'es' : 'en';
    setLang(newLang);
  };

  const t = (key: TranslationKeys, variables?: Record<string, string | number>): string => {
    let text = translations[lang][key] || translations['en'][key] || key;
    
    if (variables) {
      Object.entries(variables).forEach(([vKey, vVal]) => {
        text = text.replace(`{${vKey}}`, vVal.toString());
      });
    }
    
    return text;
  };

  return (
    <I18nContext.Provider value={{ lang, t, setLang, toggleLang }}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
}
