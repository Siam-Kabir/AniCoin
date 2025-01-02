import React from 'react';
import { RoadmapCard } from './RoadmapCard';
import { roadmapData } from './roadmapData';

export function RoadmapTimeline() {
  return (
    <div className="relative">
      {/* Timeline line - hidden on mobile */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-pink-500" />
      
      <div className="relative space-y-8 md:space-y-16">
        {roadmapData.map((phase, index) => (
          <RoadmapCard
            key={phase.title}
            phase={phase}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}