import React from 'react';
import { AlertTriangle, Shield, Info } from 'lucide-react';
import { Card } from '../ui/Card';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const risks = [
  {
    icon: AlertTriangle,
    title: "Market Volatility",
    description: "Cryptocurrency prices can be highly volatile and may fluctuate significantly. The value of your investment can go down as well as up."
  },
  {
    icon: Shield,
    title: "Security Risks",
    description: "While we implement robust security measures, cryptocurrency investments are subject to various risks including hacking, technical vulnerabilities, and human error."
  },
  {
    icon: Info,
    title: "Regulatory Changes",
    description: "Cryptocurrency regulations vary by jurisdiction and are subject to change, which could impact the value and legality of your holdings."
  }
];

export function DisclaimerSection() {
  useIntersectionObserver();

  return (
    <section className="py-24 bg-[#1b263b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal reveal-up text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Risk Disclosure & Disclaimer
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Please read and understand the following important information before investing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {risks.map((risk, index) => (
            <Card 
              key={risk.title} 
              className="reveal reveal-up p-6 bg-[#264452]/50 border-pink-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                  <risk.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{risk.title}</h3>
                <p className="text-gray-300">{risk.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="reveal reveal-up delay-300 p-8 bg-[#264452]/50 border-red-500/20">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-white mb-4">Legal Disclaimer</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice.
              </p>
              <p>
                AniCoin does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.
              </p>
              <p>
                By purchasing AniCoin, you agree that you are not purchasing a security or investment product and you hold the team harmless and not liable for any losses or taxes you may incur.
              </p>
              <p className="font-semibold">
                Cryptocurrency investment involves high risk and volatility. Past performance is not indicative of future results. Only invest what you can afford to lose.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}