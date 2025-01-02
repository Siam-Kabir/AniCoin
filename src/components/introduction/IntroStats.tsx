import React from 'react';
import { Card } from '../ui/Card';

export function IntroStats() {
  const stats = [
    { label: 'Total Users', value: '50K+' },
    { label: 'Daily Transactions', value: '100K+' },
    { label: 'Market Cap', value: '$45.8M' },
    { label: 'Community Members', value: '120K+' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-fit">
      {stats.map((stat) => (
        <Card 
          key={stat.label} 
          className="p-6 bg-[#264452]/50 border-pink-500/20 text-center hover:bg-[#264452]/70"
        >
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-white">
              {stat.value}
            </div>
            <div className="text-sm text-gray-300">
              {stat.label}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}