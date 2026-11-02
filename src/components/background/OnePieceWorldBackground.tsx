import React from 'react';

export const OnePieceWorldBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#07090e]">
      {/* 1. Underlying Pure One Piece Grand Line Artwork Wallpaper */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/onepiece/op_world_background.jpg"
          alt="One Piece Grand Line Ocean"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-[0.75] contrast-125 saturate-125"
        />
        {/* Deep ocean vignette overlay guaranteeing WCAG 2.2 contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/92 via-[#090c16]/85 to-[#07090e]/95" />
      </div>

      {/* 2. Floating Atmospheric Haki Aura Radial Gradients */}
      {/* Sun God Nika Golden Flame Aura (Top-Left) */}
      <div
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.75) 0%, rgba(217, 119, 6, 0.2) 60%, transparent 80%)',
        }}
      />

      {/* Conqueror's Haki Lightning Crimson Aura (Bottom-Right) */}
      <div
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full blur-[160px] opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(225, 29, 72, 0.7) 0%, rgba(136, 19, 55, 0.3) 60%, transparent 80%)',
        }}
      />

      {/* Deep Grand Line Abyss Glow (Center Sea) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full blur-[180px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.6) 0%, rgba(30, 27, 75, 0.35) 60%, transparent 80%)',
        }}
      />

      {/* 3. Nautical Navigation Coordinate Grid (Grand Line Coordinates) */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f59e0b 1px, transparent 1px),
            linear-gradient(to bottom, #f59e0b 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* 4. Top-Left Watermark: Grand Line 3-Needle Log Pose Compass */}
      <div className="absolute top-6 left-6 opacity-20 pointer-events-none flex items-center gap-2">
        <svg className="w-20 h-20 text-amber-400" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="42" strokeWidth="3" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="32" strokeWidth="2" />
          {/* 3 Glass Needles of New World Log Pose */}
          <polygon points="50,22 54,50 50,46 46,50" fill="currentColor" />
          <polygon points="26,64 50,50 46,54 50,50" fill="currentColor" opacity="0.7" />
          <polygon points="74,64 50,50 54,54 50,50" fill="currentColor" opacity="0.7" />
          <circle cx="50" cy="50" r="5" fill="#f59e0b" />
        </svg>
      </div>

      {/* 5. Bottom-Right Watermark: Pure Straw Hat Pirates Jolly Roger */}
      <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none">
        <svg className="w-28 h-28 text-amber-400" viewBox="0 0 100 100" fill="currentColor">
          {/* Crossbones */}
          <path d="M20 20 L80 80 M80 20 L20 80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          {/* Skull Base */}
          <circle cx="50" cy="52" r="22" fill="#07090e" stroke="currentColor" strokeWidth="4" />
          {/* Straw Hat Ribbon & Brim */}
          <ellipse cx="50" cy="40" rx="30" ry="9" fill="currentColor" opacity="0.9" />
          <path d="M30 38 C30 22, 70 22, 70 38 Z" fill="currentColor" />
          <rect x="32" y="36" width="36" height="4" fill="#ef4444" />
          {/* Skull Eyes & Grin */}
          <circle cx="43" cy="55" r="4.5" fill="currentColor" />
          <circle cx="57" cy="55" r="4.5" fill="currentColor" />
          <path d="M42 66 Q50 72 58 66" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* 6. Grand Line Waves & Calm Belt Bottom Silhouette */}
      <svg
        className="absolute -bottom-6 left-0 w-full h-44 opacity-[0.06] text-amber-400 pointer-events-none"
        viewBox="0 0 1440 320"
        fill="currentColor"
      >
        <path d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,176C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </div>
  );
};
