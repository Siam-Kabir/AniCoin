import React from 'react';
import { Twitter, MessageSquare, Send, Github } from 'lucide-react';

export function SocialLinks() {
  const socials = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: MessageSquare, label: 'Discord', href: '#' },
    { icon: Send, label: 'Telegram', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' }
  ];

  return (
    <div className="flex justify-center space-x-6">
      {socials.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          className="p-3 rounded-full bg-[#264452]/50 text-gray-300 hover:text-pink-400 hover:bg-[#264452]/70 transition-colors"
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}