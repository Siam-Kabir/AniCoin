import React from 'react';
import { IntroStats } from './IntroStats';
import { IntroContent } from './IntroContent';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function IntroductionSection() {
  useIntersectionObserver();

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-[#1b263b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="reveal reveal-up text-3xl sm:text-4xl font-bold text-center text-white mb-12 sm:mb-16">
          Introduction to <span className="text-pink-400">AniCoin</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="reveal reveal-up">
            <IntroContent />
          </div>
          <div className="reveal reveal-up delay-100">
            <IntroStats />
          </div>
        </div>
      </div>
    </section>
  );
}