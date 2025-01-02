import React from 'react';
import { cn } from '../../utils/cn';
import { scrollToSection, navItems } from '../../utils/navigation';

interface NavLinksProps {
  isScrolled: boolean;
  isMobile?: boolean;
  className?: string;
}

export function NavLinks({ isScrolled, isMobile = false, className = '' }: NavLinksProps) {
  const baseStyles = "relative font-medium transition-colors";
  const mobileStyles = "block w-full px-4 py-2 hover:bg-pink-500/10 rounded-lg";
  const desktopStyles = `
    after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5
    after:bg-gradient-to-r after:from-pink-500 after:to-yellow-500
    after:scale-x-0 after:origin-left after:transition-transform
    hover:after:scale-x-100
  `;
  
  return (
    <div className={cn(
      isMobile ? "flex flex-col space-y-1" : "flex items-center space-x-8",
      className
    )}>
      {navItems.map(({ label, id }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => scrollToSection(e, id)}
          className={cn(
            baseStyles,
            isMobile ? mobileStyles : desktopStyles,
            isScrolled ? 'text-white hover:text-pink-400' : 'text-white/90 hover:text-white',
          )}
        >
          {label}
        </a>
      ))}
    </div>
  );
}