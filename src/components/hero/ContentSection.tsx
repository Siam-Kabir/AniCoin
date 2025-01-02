import React, { useEffect } from 'react';
import { Sparkles, ArrowRight, Coins, Users, TrendingUp } from 'lucide-react';

export function ContentSection() {
  const stats = [
    { icon: Coins, label: 'Total Supply', value: '1B' },
    { icon: Users, label: 'Holders', value: '50K+' },
    { icon: TrendingUp, label: 'Growth', value: '125%' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      <div className="fixed inset-0 z-0 w-full h-screen">
        <img
          src="https://i.ibb.co/dtsKZqq/Anicoin.gif"
          alt="AniCoin Background"
          className="w-full h-full object-cover"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-16">
          <div className="reveal reveal-up inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 text-pink-400 mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-bold font-anime">The Future of Anime & Crypto</span>
          </div>
          
          <h1 className="reveal reveal-scale text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent font-anime">
            AniCoin
          </h1>
          
          <p className="reveal reveal-up delay-200 text-2xl md:text-3xl text-white mb-4 font-semibold font-jp">
            アニメとブロックチェーンの融合
          </p>

          <p className="reveal reveal-up delay-300 max-w-3xl mx-auto text-xl text-white/90 mb-12">
            Join the revolution where anime culture meets blockchain innovation
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            {stats.map(({ icon: Icon, label, value }, index) => (
              <div 
                key={label} 
                className={`reveal reveal-up delay-${(index + 2) * 100} text-center transform hover:scale-105 transition-transform`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 mb-4 animate-pulse">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-purple-300">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="reveal reveal-left delay-500 group bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center text-lg">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="reveal reveal-right delay-500 px-8 py-4 rounded-full border-2 border-purple-500/30 text-white hover:bg-purple-500/10 transition-colors flex items-center space-x-2 text-lg">
              <Sparkles className="w-5 h-5" />
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}