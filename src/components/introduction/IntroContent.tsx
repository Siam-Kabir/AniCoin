import React from 'react';
import { IntroHeader } from './IntroHeader';
import { CommunityAddress } from './CommunityAddress';
import { Features } from './Features';

export function IntroContent() {
  return (
    <div className="space-y-8 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <IntroHeader />
      <CommunityAddress />
      <Features />
    </div>
  );
}