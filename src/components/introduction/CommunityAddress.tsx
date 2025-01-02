import React from 'react';
import { Copy, Coins, ExternalLink, Check } from 'lucide-react';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

export function CommunityAddress() {
  const communityAddress = "kaspa:qq9vsknd7hj2ncn0629fusnw8nqsyxe4hqgn2us2tgtn79c5qy2cx5spyan08";
  const { copied, copyToClipboard } = useCopyToClipboard();

  return (
    <div className="p-6 bg-[#0d1b2a]/50 rounded-xl border border-pink-500/20 backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-white mb-4">
        Community Address
      </h3>
      
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-[#1b263b]/50 p-4 rounded-lg border border-accent/20 mb-6">
        <div className="w-full overflow-hidden">
          <code className="text-accent text-sm block w-full truncate">
            {communityAddress}
          </code>
        </div>
        <button
          onClick={() => copyToClipboard(communityAddress)}
          className="flex items-center gap-2 px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors flex-shrink-0 text-accent"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <a
          href="https://example.com/buy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-pink-500/20 transition-all text-sm sm:text-base group"
        >
          <Coins className="w-5 h-5 mr-2" />
          Buy Now
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
        </a>
        
        <a
          href="https://example.com/chart"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-3 bg-[#1b263b]/50 text-accent border border-accent/20 rounded-xl hover:bg-accent/10 transition-all text-sm sm:text-base group"
        >
          View Chart
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}