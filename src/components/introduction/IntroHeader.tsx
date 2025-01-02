import React from 'react';
import { Sparkles } from 'lucide-react';

export function IntroHeader() {
  return (
    <div className="space-y-6 text-center sm:text-left">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10">
        <Sparkles className="w-5 h-5 text-pink-400" />
        <span className="text-pink-400 font-semibold text-sm sm:text-base">Welcome to AniCoin</span>
      </div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
        The First Cryptocurrency for Anime Enthusiasts
      </h2>
      
      <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto sm:mx-0">
        AniCoin bridges the gap between cryptocurrency and anime culture, creating
        a unique ecosystem where fans can collect, trade, and engage with their
        favorite content in revolutionary ways.
      </p>
    </div>
  );
}