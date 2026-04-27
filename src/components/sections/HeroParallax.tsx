'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const HeroParallax: React.FC = () => {
  // Motion values for normalized mouse position (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid movement
  // Stiffness 150, damping 20 provides a nice premium "weighty" feel
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map normalized values to degrees of rotation
  // Max rotation of 15 degrees for a subtle effect
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      
      // Normalize mouse position relative to window center
      // This ensures rotation values are bounded and predictable
      const xPct = (e.clientX / window.innerWidth) - 0.5;
      const yPct = (e.clientY / window.innerHeight) - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      // Return to neutral position when mouse leaves the viewport
      x.set(0);
      y.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="relative perspective-2000 hidden lg:flex justify-center"
    >
      <motion.div 
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[500px] shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Glow effect that moves with the container */}
        <div className="absolute -inset-10 bg-brand-violet/20 blur-[100px] rounded-full animate-pulse" />
        
        <Image 
          src="/images/player-bl.webp" 
          alt="NauticPlayer Interface" 
          width={600} 
          height={400}
          className="relative z-10 w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
          priority
        />
      </motion.div>
    </motion.div>
  );
};
