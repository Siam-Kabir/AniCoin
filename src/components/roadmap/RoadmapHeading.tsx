import React from 'react';
import { Milestone } from 'lucide-react';

export function RoadmapHeading() {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Milestone className="w-8 h-8 text-pink-400" />
        <h2 className="text-4xl font-bold text-white">Development Roadmap</h2>
      </div>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Our strategic plan to revolutionize the anime and cryptocurrency ecosystem
      </p>
    </div>
  );
}