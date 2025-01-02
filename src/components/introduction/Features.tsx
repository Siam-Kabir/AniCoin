import React from 'react';
import { Shield, Coins } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Built on advanced blockchain technology"
    },
    {
      icon: Coins,
      title: "Tokenized Anime",
      description: "Exclusive digital collectibles"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
      {features.map((feature) => (
        <div 
          key={feature.title} 
          className="flex items-start gap-4 p-4 rounded-xl bg-[#1b263b]/20 hover:bg-[#1b263b]/30 transition-colors"
        >
          <div className="p-2 rounded-lg bg-pink-500/10">
            <feature.icon className="w-5 h-5 text-pink-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}