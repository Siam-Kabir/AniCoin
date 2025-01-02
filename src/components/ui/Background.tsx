import React from 'react';
import { cn } from '../../utils/cn';

interface BackgroundProps {
  className?: string;
  children: React.ReactNode;
}

export function Background({ className, children }: BackgroundProps) {
  return (
    <div className={cn('relative w-full h-full overflow-hidden', className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-light to-secondary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0icmdiYSgxMTksIDE0MSwgMTY5LCAwLjEpIi8+PC9zdmc+')] opacity-40" />
      {children}
    </div>
  );
}