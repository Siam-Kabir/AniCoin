import React from 'react';
import { CoinSection } from './hero/CoinSection';
import { ContentSection } from './hero/ContentSection';
import { Background } from './ui/Background';

export default function Hero() {
  return (
    <Background>
      <div id="home">
        <ContentSection />
        <CoinSection />
      </div>
    </Background>
  );
}