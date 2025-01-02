import React from 'react';

interface GetStartedButtonProps {
  className?: string;
}

export function GetStartedButton({ className = '' }: GetStartedButtonProps) {
  return (
    <button className={`bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all ${className}`}>
      Get Started
    </button>
  );
}