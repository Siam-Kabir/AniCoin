import React from 'react';
import { Target, Compass, Star } from 'lucide-react';
import { Card } from '../ui/Card';

export function MissionVision() {
  return (
    <div className="space-y-8 animate-fade-in">
      <Card className="p-6 bg-[#264452]/50 border-pink-500/20">
        <div className="flex items-center space-x-3 mb-4">
          <Target className="w-6 h-6 text-pink-400" />
          <h3 className="text-2xl font-bold text-white">Our Mission</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">
          To revolutionize the intersection of cryptocurrency and anime culture by creating
          a decentralized ecosystem that empowers fans, creators, and collectors while
          fostering a vibrant, global community of enthusiasts.
        </p>
      </Card>

      <Card className="p-6 bg-[#264452]/50 border-pink-500/20">
        <div className="flex items-center space-x-3 mb-4">
          <Compass className="w-6 h-6 text-pink-400" />
          <h3 className="text-2xl font-bold text-white">Our Vision</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">
          To become the leading blockchain platform that bridges the gap between digital
          assets and anime entertainment, creating unprecedented opportunities for
          engagement, ownership, and value creation in the anime industry.
        </p>
      </Card>
    </div>
  );
}