import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Calculator, DollarSign } from 'lucide-react';

export function PriceCalculator() {
  const [amount, setAmount] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const currentPrice = 0.0458;

  const handleCalculate = async () => {
    const tokens = parseFloat(amount);
    if (!isNaN(tokens)) {
      setIsCalculating(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      setResult(tokens * currentPrice);
      setIsCalculating(false);
    }
  };

  return (
    <Card className="p-6 bg-[#1b263b]/50">
      <div className="flex items-center space-x-2 mb-4">
        <Calculator className="w-5 h-5 text-accent animate-pulse-slow" />
        <h3 className="text-xl font-semibold text-light">Token Calculator</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-accent mb-1">
            Number of Tokens
          </label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 bg-[#0d1b2a]/50 border border-accent/20 rounded-lg text-light placeholder-accent/50 
                focus:ring-2 focus:ring-accent focus:border-transparent transition-all
                hover:border-accent/40"
              placeholder="Enter amount..."
            />
          </div>
        </div>
        
        <Button 
          onClick={handleCalculate}
          disabled={isCalculating}
          className="w-full bg-gradient-to-r from-secondary to-accent text-light
            transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {isCalculating ? 'Calculating...' : 'Calculate'}
        </Button>

        {result !== null && (
          <div className="mt-4 p-4 bg-[#0d1b2a]/50 rounded-lg border border-accent/20 animate-fade-in">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-accent" />
              <p className="text-sm text-accent">Estimated Value:</p>
            </div>
            <p className="text-2xl font-bold text-light mt-1">
              ${result.toFixed(2)} USD
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}