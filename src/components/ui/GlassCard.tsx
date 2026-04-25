import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  premium?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', premium = false }) => {
  return (
    <div className={`${premium ? 'glass-card-premium' : 'glass-card'} ${className}`}>
      {children}
    </div>
  );
};
