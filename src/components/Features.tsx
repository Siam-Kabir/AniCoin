import React from 'react';
import { Shield, Zap, Users, Gem } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Trading',
    description: 'Advanced blockchain technology ensures your investments are protected.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Execute trades at unprecedented speeds with our optimized network.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join a vibrant community of anime and crypto enthusiasts.',
  },
  {
    icon: Gem,
    title: 'Unique Rewards',
    description: 'Earn exclusive anime-themed NFTs and digital collectibles.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-primary/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-4">
            Why Choose AniCoin?
          </h2>
          <p className="text-xl text-white/80">
            Experience the perfect blend of anime culture and cryptocurrency innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-secondary/10 backdrop-blur-sm rounded-2xl border border-secondary/20 hover:bg-secondary/20 transition-all"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}