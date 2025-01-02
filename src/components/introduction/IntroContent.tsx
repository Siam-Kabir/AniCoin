import React from 'react';
import { IntroHeader } from './IntroHeader';
import { CommunityAddress } from './CommunityAddress';
import { Features } from './Features';

export function IntroContent() {
  return (
    <div className="space-y-8">
      <IntroHeader />
      <CommunityAddress />
      <Features />
    </div>
  );
}