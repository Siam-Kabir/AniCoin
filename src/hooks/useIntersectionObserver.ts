import { useEffect } from 'react';

export function useIntersectionObserver(options = {}) {
  useEffect(() => {
    const defaultOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px',
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add active class to the element
          entry.target.classList.add('active');
          
          // If the element has stagger-children class, handle child animations
          if (entry.target.classList.contains('stagger-children')) {
            entry.target.classList.add('active');
          }
        }
      });
    }, defaultOptions);

    // Observe all elements with reveal class
    const elements = document.querySelectorAll('.reveal, .section-animate, .stagger-children');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [options]);
}