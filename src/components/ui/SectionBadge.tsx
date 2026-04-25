import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ children, className = '' }) => {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-brand-accent/10 text-brand-accent border border-brand-accent/20 mb-4 ${className}`}>
      {children}
    </span>
  );
};
