import React from 'react';
import { ParticleField } from '@/components/ui/ParticleField';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SuccessClient } from './SuccessClient';

export default async function SuccessPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'es');

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-brand-dark">
      <ParticleField />
      <SuccessClient dict={dict} lang={lang} />
    </main>
  );
}
