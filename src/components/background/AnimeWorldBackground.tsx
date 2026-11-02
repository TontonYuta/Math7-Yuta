import React from 'react';

export const AnimeWorldBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* 1. Deep Oceanic & Shinobi Night Sky Base */}
      <div className="absolute inset-0 bg-[#07090e]" />

      {/* 2. Floating Atmospheric Chakra & Haki Aura Radial Gradients */}
      {/* Amber/Flame Will of Fire Glow (Top-Left Konoha & Sun God Nika) */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.8) 0%, rgba(217, 119, 6, 0.2) 60%, transparent 80%)',
        }}
      />

      {/* Crimson Conqueror's Haki Glow (Bottom-Right Marineford & Wano) */}
      <div
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(225, 29, 72, 0.7) 0%, rgba(136, 19, 55, 0.3) 60%, transparent 80%)',
        }}
      />

      {/* Deep Grand Line Abyss Glow (Center Sea) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[180px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.6) 0%, rgba(30, 27, 75, 0.4) 60%, transparent 80%)',
        }}
      />

      {/* 3. Nautical Navigation Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f59e0b 1px, transparent 1px),
            linear-gradient(to bottom, #f59e0b 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* 4. Japanese Ukiyo-e Wave & Shinobi Seal Motif SVG Watermark */}
      <svg
        className="absolute -bottom-10 left-0 w-full h-64 opacity-[0.04] text-zinc-100 pointer-events-none"
        viewBox="0 0 1440 320"
        fill="currentColor"
      >
        <path d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,176C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>

      {/* 5. Subtle Vignette Border Mask */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70" />
    </div>
  );
};
