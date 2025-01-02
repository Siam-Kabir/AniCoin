import React, { useState, useEffect } from 'react';
import { Coins } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { NavButtons } from './NavButtons';
import { useScrollState } from '../../hooks/useScrollState';

export default function NavBar() {
  const { isScrolled, handleScroll } = useScrollState(20);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#264452]/90 backdrop-blur-lg shadow-lg border-b border-pink-500/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-200" />
              <div className="relative">
                <Coins className="w-8 h-8 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              AniCoin
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} />
            <NavButtons />
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu 
            isOpen={isMenuOpen}
            setIsOpen={setIsMenuOpen}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-[#264452]/95 backdrop-blur-lg border-t border-pink-500/10`}
      >
        <div className="px-4 py-6 space-y-4">
          <NavLinks isScrolled={true} isMobile={true} />
          <NavButtons isMobile={true} />
        </div>
      </div>
    </header>
  );
}