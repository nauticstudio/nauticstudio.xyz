'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface RevealWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const RevealWrapper: React.FC<RevealWrapperProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = "",
  ...props
}) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      scale: direction === 'none' ? 0.95 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] as any 
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
