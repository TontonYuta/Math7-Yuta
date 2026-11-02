import React from 'react';

export const AnimeWorldBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#07090e]">
      {/* 1. Underlying Naruto x One Piece Cinematic Artwork Wallpaper */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/anime/chap_1_naruto_luffy.jpg"
          alt="Naruto x One Piece World"
          className="w-full h-full object-cover object-center opacity-20 filter brightness-[0.7] contrast-125 saturate-125"
        />
        {/* Deep cinematic vignette overlay to keep text 100% legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/90 via-[#0a0d16]/85 to-[#07090e]/95" />
      </div>

      {/* 2. Floating Atmospheric Chakra & Haki Aura Radial Gradients */}
      {/* Amber/Flame Will of Fire & Sun God Nika Aura (Top-Left) */}
      <div
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.7) 0%, rgba(217, 119, 6, 0.2) 60%, transparent 80%)',
        }}
      />

      {/* Crimson Conqueror's Haki Aura (Bottom-Right) */}
      <div
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full blur-[160px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(225, 29, 72, 0.6) 0%, rgba(136, 19, 55, 0.25) 60%, transparent 80%)',
        }}
      />

      {/* Deep Grand Line Abyss Glow (Center Sea) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, rgba(30, 27, 75, 0.3) 60%, transparent 80%)',
        }}
      />

      {/* 3. Nautical Navigation Grid Lines */}
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

      {/* 4. Left Top Watermark: Konoha Leaf Ninja Crest */}
      <div className="absolute top-6 left-6 opacity-15 pointer-events-none">
        <svg className="w-24 h-24 text-amber-400" viewBox="0 0 100 100" fill="currentColor">
          {/* Konoha Leaf & Spiral Symbol */}
          <path d="M50 10 C30 10, 15 25, 15 45 C15 70, 45 85, 50 90 C55 85, 85 70, 85 45 C85 25, 70 10, 50 10 Z M50 25 C62 25, 72 35, 72 47 C72 62, 53 73, 50 76 C47 73, 28 62, 28 47 C28 35, 38 25, 50 25 Z" opacity="0.4" />
          <path d="M50 35 C42 35, 38 40, 38 46 C38 52, 44 56, 50 56 C56 56, 60 52, 60 47 C60 42, 54 39, 48 40" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* 5. Right Bottom Watermark: Straw Hat Pirate Jolly Roger */}
      <div className="absolute bottom-6 right-6 opacity-15 pointer-events-none">
        <svg className="w-28 h-28 text-amber-400" viewBox="0 0 100 100" fill="currentColor">
          {/* Crossbones */}
          <path d="M20 20 L80 80 M80 20 L20 80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          {/* Skull */}
          <circle cx="50" cy="50" r="22" fill="#07090e" stroke="currentColor" strokeWidth="4" />
          {/* Straw Hat Ribbon & Brim */}
          <ellipse cx="50" cy="42" rx="28" ry="8" fill="currentColor" opacity="0.8" />
          <path d="M32 40 C32 26, 68 26, 68 40 Z" fill="currentColor" />
          <rect x="34" y="38" width="32" height="4" fill="#dc2626" />
          {/* Eye sockets */}
          <circle cx="43" cy="54" r="4" fill="currentColor" />
          <circle cx="57" cy="54" r="4" fill="currentColor" />
        </svg>
      </div>

      {/* 6. Japanese Ukiyo-e Wave SVG Bottom Pattern */}
      <svg
        className="absolute -bottom-6 left-0 w-full h-44 opacity-[0.05] text-amber-400 pointer-events-none"
        viewBox="0 0 1440 320"
        fill="currentColor"
      >
        <path d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,176C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </div>
  );
};
