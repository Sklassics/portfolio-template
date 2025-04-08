import React from "react";

const RocketIcon = () => {
  return (
    <div className="w-full flex justify-center bg-transparent">
      <div className="relative w-24 sm:w-32 translate-y-[-2.5rem] animate-updown">
        <svg viewBox="0 0 100 100" className="w-full drop-shadow-xl bg-transparent">
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="1" />
              <stop offset="50%" stopColor="#e2e8f0" stopOpacity="1" />
              <stop offset="100%" stopColor="#94a3b8" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.8)" />
              <stop offset="100%" stopColor="rgba(30,41,59,0.9)" />
            </linearGradient>
          </defs>

          <path d="M45 20 L55 20 L58 70 L42 70 Z" fill="url(#bodyGradient)" stroke="#4b5563" strokeWidth="0.5" />
          <path d="M45 20 Q50 8 55 20" fill="url(#bodyGradient)" stroke="#4b5563" strokeWidth="0.5" />
          <path d="M42 65 L38 65 L35 85 L42 75 Z" fill="url(#bodyGradient)" stroke="#4b5563" strokeWidth="0.5" />
          <path d="M58 65 L62 65 L65 85 L58 75 Z" fill="url(#bodyGradient)" stroke="#4b5563" strokeWidth="0.5" />
          <path d="M49 65 L51 65 L52 80 L48 80 Z" fill="url(#bodyGradient)" stroke="#4b5563" strokeWidth="0.5" />

          {[25, 35, 45, 55, 65].map((y) => (
            <line
              key={y}
              x1="42"
              y1={y}
              x2="58"
              y2={y}
              stroke="#9ca3af"
              strokeWidth="0.3"
            />
          ))}

          <circle cx="50" cy="30" r="2" fill="url(#windowGradient)" stroke="#9ca3af" strokeWidth="0.3" />
          <circle cx="50" cy="40" r="1.5" fill="url(#windowGradient)" stroke="#9ca3af" strokeWidth="0.3" />
        </svg>

        {/* Thruster flames */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 animate-pulse">
          {[...Array(36)].map((_, i) => {
            const left = Math.random() * 30 - 15;
            const width = 1 + Math.random() * 2.5;
            const height = 6 + Math.random() * 12;
            const translateY = 5 + Math.random() * 25;
            return (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-b from-blue-500 via-orange-500 to-transparent"
                style={{
                  left: `${left}px`,
                  width: `${width}px`,
                  height: `${height}px`,
                  filter: "blur(1px)",
                  transform: `translateY(${translateY}px)`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RocketIcon;

// Tailwind custom animation (add this to your global CSS or Tailwind config)
// tailwind.config.js:
// extend: {
//   animation: {
//     'bounce-slow': 'bounce-slow 2.5s infinite',
//   },
//   keyframes: {
//     'bounce-slow': {
//       '0%, 100%': { transform: 'translateY(-2.5rem)' },
//       '50%': { transform: 'translateY(-3.5rem)' },
//     },
//   }
// }
