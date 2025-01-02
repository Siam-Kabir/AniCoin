import React, { useState } from 'react';
import { Wallet } from 'lucide-react';
import { Button } from '../ui/Button';

export function WalletButton() {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    // Simulate wallet connection
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsConnecting(false);
    alert('Wallet integration coming soon!');
  };

  return (
    <Button
      onClick={handleConnect}
      disabled={isConnecting}
      className="flex items-center space-x-2"
    >
      <Wallet className="w-5 h-5" />
      <span>{isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
    </Button>
  );
}