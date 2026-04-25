'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const HeroParallax: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current || window.innerWidth < 1024) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      
      const x = (clientX - (left + width / 2)) / (width / 2);
      const y = (clientY - (top + height / 2)) / (height / 2);
      
      const rotateY = x * 15;
      const rotateX = -y * 15;
      
      imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    // We attach to window or a parent to make it smoother
    window.addEventListener('mousemove', handleMouseMove);
    imageRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      imageRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="relative perspective-2000 hidden lg:flex justify-center"
    >
      <div 
        ref={imageRef}
        className="relative w-full max-w-[500px] transition-transform duration-200 transform-style-3d shadow-2xl rounded-3xl overflow-hidden"
      >
        <div className="absolute -inset-10 bg-brand-violet/20 blur-[100px] rounded-full animate-pulse" />
        
        <Image 
          src="/images/player-bl.webp" 
          alt="NauticPlayer Interface" 
          width={600} 
          height={400}
          className="relative z-10 w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
          priority
        />
      </div>
    </motion.div>
  );
};
