import React from 'react';
import { Check } from 'lucide-react';
import { Card } from '../ui/Card';

interface RoadmapPhase {
  title: string;
  period: string;
  description: string;
  milestones: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
}

interface RoadmapCardProps {
  phase: RoadmapPhase;
  index: number;
  isLeft: boolean;
}

export function RoadmapCard({ phase, index, isLeft }: RoadmapCardProps) {
  return (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} relative md:w-full`}>
      <Card 
        className={`reveal ${isLeft ? 'reveal-left' : 'reveal-right'} w-full md:w-[calc(50%-2rem)] p-6 bg-[#264452]/50 border-pink-500/20
          ${phase.status === 'completed' ? 'border-green-500/50' : 
            phase.status === 'in-progress' ? 'border-yellow-500/50' : 'border-pink-500/20'}`}
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <div className="relative">
          {/* Timeline dot - hidden on mobile */}
          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500
            ${isLeft ? '-right-[calc(2rem+8px)]' : '-left-[calc(2rem+8px)]'}`} />
          
          {/* Mobile timeline indicator */}
          <div className="md:hidden absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-yellow-400 to-pink-500">
            <div className="absolute top-4 -left-[6px] w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500" />
          </div>
          
          <div className="pl-2 md:pl-0">
            <span className={`text-sm font-medium px-3 py-1 rounded-full 
              ${phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                phase.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-pink-500/20 text-pink-400'}`}>
              {phase.period}
            </span>
            
            <h3 className="text-xl font-bold text-white mt-4 mb-3">{phase.title}</h3>
            <p className="text-gray-300 mb-4">{phase.description}</p>
            
            <ul className="space-y-2">
              {phase.milestones.map((milestone, i) => (
                <li key={i} className="flex items-start space-x-2 text-sm">
                  <Check className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{milestone}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}