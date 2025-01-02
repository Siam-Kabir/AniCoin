import React from 'react';
import { Shield, Zap, Users, Coins, Star } from 'lucide-react';
import { Card } from '../ui/Card';

const reasons = [
  {
    icon: Shield,
    title: "Secure & Transparent",
    description: "Built on advanced blockchain technology ensuring complete transparency and security for all transactions."
  },
  {
    icon: Zap,
    title: "Fast Transactions",
    description: "Lightning-fast processing with minimal fees, making it perfect for digital collectibles and merchandise."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Governed by our community of anime enthusiasts, ensuring decisions align with fan interests."
  },
  {
    icon: Coins,
    title: "Unique Tokenomics",
    description: "Innovative token distribution model that rewards long-term holders and supports anime creators."
  }
];

export function WhyChooseSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
        <Star className="w-6 h-6 text-pink-400" />
        Why Choose AniCoin?
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        {reasons.map((reason, index) => (
          <Card 
            key={reason.title}
            className="p-4 bg-[#264452]/50 border-pink-500/20 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FF69B4] group-hover:animate-pulse-slow">
                <reason.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">{reason.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}