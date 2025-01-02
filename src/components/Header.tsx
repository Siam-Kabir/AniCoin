import React, { useState, useEffect } from 'react';
import { Menu, X, Coins } from 'lucide-react';
import { NavLinks } from './nav/NavLinks';
import { GetStartedButton } from './nav/GetStartedButton';
import { useScrollState } from '../hooks/useScrollState';

export default function Header() {
  const { isScrolled, handleScroll } = useScrollState(20);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#1b263b] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Coins className="w-8 h-8 text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              AniCoin
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} />
            <GetStartedButton />
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-[#1b263b]`}
      >
        <div className="px-4 pt-2 pb-3 space-y-3">
          <NavLinks 
            isScrolled={true} 
            className="block px-3 py-2"
          />
          <GetStartedButton className="w-full mt-4" />
        </div>
      </div>
    </header>
  );
}