'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const StatCounter = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="text-4xl md:text-5xl font-bold text-white mb-1"
      >
        {value}
      </motion.div>
      <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
        {label}
      </div>
    </div>
  );
};
