'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Basic redirection to /en as default for static export
    // You could also detect browser language here
    const lang = localStorage.getItem('nb_lang') || 'en';
    router.replace(`/${lang}`);
  }, [router]);

  return null;
}
