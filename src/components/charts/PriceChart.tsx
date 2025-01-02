import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card } from '../ui/Card';
import { TrendingUp } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(27, 38, 59, 0.8)',
      titleColor: '#E0E1DD',
      bodyColor: '#E0E1DD',
      borderColor: 'rgba(119, 141, 169, 0.2)',
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#778DA9',
      },
    },
    y: {
      grid: {
        color: 'rgba(119, 141, 169, 0.1)',
      },
      ticks: {
        color: '#778DA9',
      },
    },
  },
};

const generateData = () => {
  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const data = Array.from({ length: 24 }, () => 
    Math.random() * (0.055 - 0.045) + 0.045
  );
  
  return {
    labels,
    datasets: [
      {
        data,
        borderColor: '#778DA9',
        backgroundColor: 'rgba(119, 141, 169, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };
};

export function PriceChart() {
  return (
    <div id="features">
      <Card className="p-6 bg-[#1b263b]/50">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-accent" />
          <h3 className="text-xl font-semibold text-light">Price Chart (24h)</h3>
        </div>
        <div className="h-[300px]">
          <Line options={options} data={generateData()} />
        </div>
      </Card>
    </div>
  );
}