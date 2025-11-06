import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12" }) => {
  return (
    <svg viewBox="0 0 1024 1024" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1024" height="1024" fill="white"/>
      <path d="M427 122C467.317 122 512.317 125.333 562 132L512 238L427 122Z" fill="#0C3B4D"/>
      <path d="M467 238C448.667 254 427 286 402 334C369 397.5 362 456.5 362 511.5C362 566.5 369 626 402 690C427 738 448.667 770 467 786L512 680L562 786C580.333 770 602 738 627 690C660 626 667 566.5 667 511.5C667 456.5 660 397.5 627 334C602 286 580.333 254 562 238L512 344L467 238Z" fill="#0C3B4D"/>
      <text x="512" y="820" fontFamily="Arial, sans-serif" fontSize="140" fontWeight="700" fill="#0C3B4D" textAnchor="middle">Finance</text>
      <text x="512" y="940" fontFamily="Arial, sans-serif" fontSize="180" fontWeight="700" fill="#0C3B4D" textAnchor="middle">Bro</text>
    </svg>
  );
};

export default Logo;
