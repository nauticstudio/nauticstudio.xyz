import React from 'react';

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'white';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href,
  target
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-brand-accent text-white shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:shadow-[0_0_30px_rgba(255,107,0,0.6)]",
    secondary: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.2)]",
    ghost: "bg-transparent border border-white/10 text-white hover:bg-white/5",
    white: "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href} 
      target={target} 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};
