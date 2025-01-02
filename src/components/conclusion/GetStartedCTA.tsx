import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';

export function GetStartedCTA() {
  return (
    <Card className="p-8 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 border-pink-500/20 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">
        Ready to Start Your Journey?
      </h3>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
        Join thousands of anime enthusiasts who are already part of the AniCoin ecosystem
      </p>
      <button className="inline-flex items-center px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
        Get Started Now
        <ArrowRight className="w-5 h-5 ml-2" />
      </button>
    </Card>
  );
}