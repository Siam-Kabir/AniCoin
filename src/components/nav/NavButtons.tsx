import React from 'react';
import { Wallet } from 'lucide-react';
import { cn } from '../../utils/cn';

interface NavButtonsProps {
  isMobile?: boolean;
}

export function NavButtons({ isMobile = false }: NavButtonsProps) {
  return (
    <div className={cn(
      "flex items-center",
      isMobile ? "flex-col space-y-2" : "space-x-4"
    )}>
      <button className={cn(
        "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all",
        "bg-pink-500/10 text-pink-400 hover:bg-pink-500/20",
        isMobile && "w-full justify-center"
      )}>
        <Wallet className="w-5 h-5" />
        <span>Connect</span>
      </button>
      
      <button className={cn(
        "px-4 py-2 rounded-lg font-medium transition-all",
        "bg-gradient-to-r from-pink-500 to-yellow-500",
        "hover:shadow-lg hover:shadow-pink-500/20",
        "text-white",
        isMobile && "w-full"
      )}>
        Get Started
      </button>
    </div>
  );
}