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
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
      {stats.map((stat) => (
        <Card 
          key={stat.label} 
          className="p-4 bg-[#264452]/50 border-pink-500/20 text-center"
        >
          <div className="space-y-1">
            <div className="text-lg sm:text-2xl font-bold text-white mb-1">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
              {stat.label}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}