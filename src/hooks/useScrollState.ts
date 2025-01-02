import { useState, useCallback } from 'react';

export function useScrollState(threshold: number) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > threshold);
  }, [threshold]);

  return { isScrolled, handleScroll };
}