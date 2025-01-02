import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';
import { formatDistanceToNow } from 'date-fns';

interface NewsItem {
  title: string;
  summary: string;
  url: string;
  publishedAt: Date;
}

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <Card className="hover:scale-[1.02] transition-transform bg-[#1b263b]/50 border-pink-500/20">
      <a 
        href={news.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4"
      >
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold mb-2 flex-1 text-white">{news.title}</h3>
          <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
        </div>
        <p className="text-gray-300 text-sm mb-2 line-clamp-2">{news.summary}</p>
        <p className="text-gray-400 text-xs">
          {formatDistanceToNow(news.publishedAt, { addSuffix: true })}
        </p>
      </a>
    </Card>
  );
}