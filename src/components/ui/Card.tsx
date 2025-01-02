import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ className, children, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl backdrop-blur-lg border-[0.5px] border-anime-purple/20 animate-fade-in',
        'transition-all duration-300',
        hover && 'hover:translate-y-[-2px] hover:shadow-lg hover:shadow-anime-purple/10',
        'bg-gradient-to-br from-[#1b263b]/80 to-[#1b263b]/60',
        className
      )}
    >
      {children}
    </div>
  );
}