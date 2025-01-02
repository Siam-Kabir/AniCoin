import React, { useEffect, useState } from 'react';
import { TrendingUp, DollarSign, Users, BarChart2 } from 'lucide-react';
import { Card } from './ui/Card';

interface TokenMetric {
  label: string;
  value: string;
  change: string;
  icon: React.ElementType;
}

export function TokenMetrics() {
  const [metrics, setMetrics] = useState<TokenMetric[]>([
    {
      label: 'Price',
      value: '$0.0458',
      change: '+3.9%',
      icon: DollarSign,
    },
    {
      label: 'Market Cap',
      value: '$45.8M',
      change: '+4.3%',
      icon: TrendingUp,
    },
    {
      label: 'Holders',
      value: '12,458',
      change: '+4.3%',
      icon: Users,
    },
    {
      label: '24h Volume',
      value: '$1.2M',
      change: '+4.7%',
      icon: BarChart2,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(currentMetrics =>
        currentMetrics.map(metric => ({
          ...metric,
          change: `+${(Math.random() * 10).toFixed(1)}%`,
        }))
      );
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card 
          key={metric.label} 
          className="p-4 bg-primary/50"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center space-x-4 group">
            <div className="p-2 rounded-full bg-gradient-to-r from-secondary to-accent group-hover:animate-pulse-slow">
              <metric.icon className="w-6 h-6 text-light" />
            </div>
            <div>
              <p className="text-sm text-accent">{metric.label}</p>
              <p className="text-xl font-semibold text-light transition-all group-hover:text-accent">
                {metric.value}
              </p>
              <p className="text-sm text-green-400">{metric.change}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}