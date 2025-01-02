import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <button
      className="md:hidden p-2 rounded-lg hover:bg-pink-500/10 transition-colors"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <X className="w-6 h-6 text-white" />
      ) : (
        <Menu className="w-6 h-6 text-white" />
      )}
    </button>
  );
}