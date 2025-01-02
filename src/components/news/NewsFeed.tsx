import React from 'react';
import { NewsCard } from './NewsCard';
import { NewsHeading } from './NewsHeading';
import { newsData } from './newsData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function NewsFeed() {
  useIntersectionObserver();

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="reveal reveal-up">
        <NewsHeading />
      </div>
      <div className="grid gap-4 w-full max-w-3xl mx-auto">
        {newsData.map((news, index) => (
          <div 
            key={news.title}
            className="reveal reveal-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </div>
  );
}