import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { IntroductionSection } from './components/introduction/IntroductionSection';
import { TokenMetrics } from './components/layout/TokenMetrics';
import { PriceChart } from './components/charts/PriceChart';
import { NewsFeed } from './components/news/NewsFeed';
import { PriceCalculator } from './components/calculator/PriceCalculator';
import { RoadmapSection } from './components/roadmap/RoadmapSection';
import { DisclaimerSection } from './components/disclaimer/DisclaimerSection';
import { ConclusionSection } from './components/conclusion/ConclusionSection';
import './styles/fonts.css';
import './styles/theme.css';
import './styles/animations.css';

export default function App() {
  return (
    <div className="min-h-screen font-roboto">
      <Header />
      <main className="relative">
        <Hero />
        <IntroductionSection />
        <div className="relative z-10 bg-primary-light">
          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
            <TokenMetrics />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <PriceChart />
              </div>
              <div>
                <PriceCalculator />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <NewsFeed />
              </div>
            </div>
          </div>
          <RoadmapSection />
          <DisclaimerSection />
          <ConclusionSection />
        </div>
      </main>
    </div>
  );
}