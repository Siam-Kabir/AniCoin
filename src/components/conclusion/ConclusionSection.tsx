import React from 'react';
import { JoinCommunity } from './JoinCommunity';
import { GetStartedCTA } from './GetStartedCTA';
import { SocialLinks } from './SocialLinks';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function ConclusionSection() {
  useIntersectionObserver();

  return (
    <section className="py-24 bg-gradient-to-b from-[#1b263b] to-[#1a263b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal reveal-up text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join the AniCoin Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be part of the future where anime and blockchain technology converge
          </p>
        </div>
        
        <div className="grid gap-12">
          <div className="reveal reveal-up delay-100">
            <JoinCommunity />
          </div>
          <div className="reveal reveal-up delay-200">
            <GetStartedCTA />
          </div>
          <div className="reveal reveal-up delay-300">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}