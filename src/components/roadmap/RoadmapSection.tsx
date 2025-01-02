import React from 'react';
import { RoadmapTimeline } from './RoadmapTimeline';
import { RoadmapHeading } from './RoadmapHeading';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function RoadmapSection() {
  useIntersectionObserver();

  return (
    <section className="py-24 bg-[#1b263b]" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal reveal-up">
          <RoadmapHeading />
        </div>
        <div className="reveal reveal-up delay-200">
          <RoadmapTimeline />
        </div>
      </div>
    </section>
  );
}