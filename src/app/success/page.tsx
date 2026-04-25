'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from '@/lib/i18n/context';
import { GlowButton } from '@/components/ui/GlowButton';
import { ParticleField } from '@/components/ui/ParticleField';
import { CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function SuccessPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-brand-dark">
      <ParticleField />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full mx-4 relative z-10 text-center"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-3xl shadow-2xl">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12, delay: 0.2 }}
            className="w-24 h-24 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-accent/30"
          >
            <CheckCircle className="text-brand-accent" size={48} />
          </motion.div>
          
          <h1 className="text-4xl font-bold text-white mb-4">{t('success_title')}</h1>
          <p className="text-gray-400 text-lg mb-10">
            {t('success_desc')}
          </p>
          
          <div className="space-y-6">
            <GlowButton href="/" className="w-full">
              {t('success_cta')}
            </GlowButton>
            
            <p className="text-gray-500 text-sm">
              {t('success_redirect', { seconds })}
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
