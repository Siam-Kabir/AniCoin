import React from 'react';
import { IntroStats } from './IntroStats';
import { IntroContent } from './IntroContent';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function IntroductionSection() {
  useIntersectionObserver();

  return (
    <section id="about" className="relative py-12 sm:py-24 bg-[#1b263b]">
      <div className="max-w-7xl mx-auto">
        <h2 className="reveal reveal-up text-2xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-16 px-4">
          Introduction to <span className="text-pink-400">AniCoin</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 sm:px-6">
          <div className="reveal reveal-left w-full lg:w-1/2">
            <IntroContent />
          </div>
          <div className="reveal reveal-right w-full lg:w-1/2">
            <IntroStats />
          </div>
        </div>
      </div>
    </section>
  );
}