import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-10', showText = true }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`relative ${className} flex-shrink-0`}>
        {/* Glowing background */}
        <div className="absolute inset-0 bg-amber-400/20 blur-md rounded-full animate-pulse"></div>
        
        {/* SVG Crest */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Royal Blue Outer Ring */}
          <circle cx="50" cy="50" r="45" stroke="url(#blueGoldGrad)" strokeWidth="4" />
          
          {/* Inner Circle */}
          <circle cx="50" cy="50" r="38" fill="#0B192C" />
          
          {/* Floral Pushpak Mandala (Gold & Orange) */}
          {/* Center Bud */}
          <circle cx="50" cy="50" r="8" fill="url(#goldOrangeGrad)" />
          
          {/* Petals */}
          {/* Top Petal */}
          <path
            d="M50 50 C50 35, 42 22, 50 15 C58 22, 50 35, 50 50 Z"
            fill="url(#goldOrangeGrad)"
            opacity="0.9"
          />
          {/* Bottom Petal */}
          <path
            d="M50 50 C50 65, 42 78, 50 85 C58 78, 50 65, 50 50 Z"
            fill="url(#goldOrangeGrad)"
            opacity="0.9"
          />
          {/* Right Petal */}
          <path
            d="M50 50 C65 50, 78 42, 85 50 C78 58, 65 50, 50 50 Z"
            fill="url(#goldOrangeGrad)"
            opacity="0.9"
          />
          {/* Left Petal */}
          <path
            d="M50 50 C35 50, 22 42, 15 50 C22 58, 35 50, 50 50 Z"
            fill="url(#goldOrangeGrad)"
            opacity="0.9"
          />
          
          {/* Diagonal Petals */}
          <path
            d="M50 50 C60 40, 70 30, 75 25 C70 20, 60 30, 50 50 Z"
            fill="url(#goldOrangeGrad)"
            opacity="0.75"
          />
          <path
            d="M50 50 C40 60, 30 70, 25 75 C30 80, 40 70, 50 50 Z"
            fill="url(#goldOrangeGrad)"
            opacity="0.75"
          />
          <path
            d="M50 50 C60 60, 70 70, 75 75 C80 70, 70 60, 50 50 Z"
            fill="url(#goldOrangeGrad)"
            opacity="0.75"
          />
          <path
            d="M50 50 C40 40, 30 30, 25 25 C20 30, 30 40, 50 50 Z"
            fill="url(#goldOrangeGrad)"
            opacity="0.75"
          />
          
          {/* Sparkles */}
          <circle cx="50" cy="15" r="1.5" fill="#FFF" />
          <circle cx="50" cy="85" r="1.5" fill="#FFF" />
          <circle cx="85" cy="50" r="1.5" fill="#FFF" />
          <circle cx="15" cy="50" r="1.5" fill="#FFF" />

          {/* Gradients */}
          <defs>
            <linearGradient id="goldOrangeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F5E050" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
            <linearGradient id="blueGoldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="font-sans text-lg font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-amber-600 to-amber-700 dark:from-white dark:via-amber-300 dark:to-orange-400">
            Pushpak Foundation
          </span>
          <span className="text-[10px] leading-none font-sans font-semibold text-amber-600 uppercase tracking-widest">
            Trust • Nadiad
          </span>
        </div>
      )}
    </div>
  );
};
