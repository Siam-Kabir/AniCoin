import React from 'react';
import { Users, Heart, MessageCircle } from 'lucide-react';
import { Card } from '../ui/Card';

export function JoinCommunity() {
  const stats = [
    { icon: Users, label: 'Community Members', value: '50,000+' },
    { icon: Heart, label: 'Active Contributors', value: '1,200+' },
    { icon: MessageCircle, label: 'Daily Discussions', value: '5,000+' }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {stats.map(({ icon: Icon, label, value }) => (
        <Card key={label} className="p-6 bg-[#264452]/50 border-pink-500/20 text-center">
          <Icon className="w-8 h-8 text-pink-400 mx-auto mb-4" />
          <div className="text-2xl font-bold text-white mb-2">{value}</div>
          <div className="text-gray-300">{label}</div>
        </Card>
      ))}
    </div>
  );
}