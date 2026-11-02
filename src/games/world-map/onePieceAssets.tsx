import React from 'react';

/**
 * High-definition, distinct One Piece canon SVG assets.
 * Zero asset duplication between objects.
 */

// 1. Player Pawn: Captain Monkey D. Luffy Straw Hat
export const LuffyStrawHatPawn: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="24" cy="34" rx="22" ry="8" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
    <path
      d="M12 33C12 21 16 12 24 12C32 12 36 21 36 33"
      fill="#FBBF24"
      stroke="#B45309"
      strokeWidth="2"
    />
    <path
      d="M12 29C15 27 33 27 36 29C36 32 33 34 24 34C15 34 12 32 12 29Z"
      fill="#DC2626"
    />
  </svg>
);

// 2. Goal Target: Ancient One Piece Royal Gold Treasure Chest
export const OnePieceTreasureChest: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Chest Body */}
    <rect x="6" y="20" width="36" height="22" rx="4" fill="#78350F" stroke="#D97706" strokeWidth="2.5" />
    {/* Lid */}
    <path
      d="M6 22C6 14 14 8 24 8C34 8 42 14 42 22H6Z"
      fill="#92400E"
      stroke="#F59E0B"
      strokeWidth="2.5"
    />
    {/* Gold bands */}
    <path d="M16 8V42M32 8V42" stroke="#FBBF24" strokeWidth="3" strokeDasharray="2 1" />
    {/* Glowing Keyhole Lock */}
    <circle cx="24" cy="24" r="4.5" fill="#F59E0B" stroke="#78350F" strokeWidth="2" />
    <circle cx="24" cy="24" r="2" fill="#FEF08A" />
    {/* Sparkle */}
    <path d="M38 10L40 6L42 10L46 12L42 14L40 18L38 14L34 12L38 10Z" fill="#FDE047" />
  </svg>
);

// 3. Question Node: Ancient Poneglyph Stone Monolith with glowing ancient glyphs
export const AncientPoneglyphNode: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Stone Cube */}
    <rect x="8" y="8" width="32" height="32" rx="5" fill="#1E293B" stroke="#0284C7" strokeWidth="2.5" />
    {/* Glowing Joy Boy glyphs */}
    <path
      d="M15 16H21M27 16H33M15 22H33M15 28H23M27 28H33M15 34H20M24 34H33"
      stroke="#38BDF8"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <rect x="10" y="10" width="28" height="28" rx="3" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
  </svg>
);

// 4. Blocked Barrier: World Government Marine Iron Gate
export const MarineIronGateBarrier: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="7" y="10" width="34" height="30" rx="3" fill="#18181B" stroke="#DC2626" strokeWidth="2.5" />
    {/* Vertical Prison Bars */}
    <line x1="15" y1="12" x2="15" y2="38" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="12" x2="24" y2="38" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="33" y1="12" x2="33" y2="38" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
    {/* Skull / Cross bones lock */}
    <circle cx="24" cy="25" r="5" fill="#991B1B" stroke="#F87171" strokeWidth="1.5" />
    <path d="M21 28L27 22M21 22L27 28" stroke="#FECACA" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 5. Sea Obstacle: Whirlpool Reef / Sea King Domain
export const SeaReefObstacle: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Dark Jagged Rock Reef */}
    <path
      d="M6 38L16 16L24 28L32 12L42 38H6Z"
      fill="#27272A"
      stroke="#71717A"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Crashing White Sea Foam */}
    <path
      d="M4 38C10 34 16 42 22 38C28 34 34 42 44 38"
      stroke="#38BDF8"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

// 6. 10 Island Canon SVG Badges (100% Unique)
export const ISLAND_UNIQUE_BADGES: Record<string, React.FC<{ className?: string }>> = {
  EAST_BLUE: ({ className = 'w-7 h-7' }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="16" fill="#0C4A6E" stroke="#38BDF8" strokeWidth="2" />
      <path d="M18 6V30M6 18H30" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="18" cy="18" r="4" fill="#FBBF24" />
      <circle cx="18" cy="18" r="9" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  ),
  ALABASTA: ({ className = 'w-7 h-7' }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="16" fill="#78350F" stroke="#F59E0B" strokeWidth="2" />
      <polygon points="18,8 6,28 30,28" fill="#D97706" stroke="#FEF08A" strokeWidth="1.5" />
      <circle cx="18" cy="20" r="3" fill="#FEF08A" />
    </svg>
  ),
  SKYPIEA: ({ className = 'w-7 h-7' }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="16" fill="#1E1B4B" stroke="#A855F7" strokeWidth="2" />
      {/* Golden Angel Wings & Lightning */}
      <path d="M8 20C12 12 18 14 18 24C18 14 24 12 28 20" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M19 6L14 18H20L17 30" stroke="#EAB308" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  ENIES_LOBBY: ({ className = 'w-7 h-7' }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="16" fill="#18181B" stroke="#E11D48" strokeWidth="2" />
      {/* Tower of Justice & Balance Scales */}
      <path d="M18 7V28M11 14H25M11 14L8 20H14L11 14ZM25 14L22 20H28L25 14Z" stroke="#FDA4AF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  SABAODY: ({ className = 'w-7 h-7' }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="16" fill="#064E3B" stroke="#34D399" strokeWidth="2" />
      {/* Yarukiman Mangrove Tree & Bubbles */}
      <circle cx="13" cy="14" r="5" fill="#6EE7B7" fillOpacity="0.5" stroke="#A7F3D0" strokeWidth="1.5" />
      <circle cx="23" cy="16" r="6" fill="#6EE7B7" fillOpacity="0.5" stroke="#A7F3D0" strokeWidth="1.5" />
      <path d="M18 18V28" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  IMPEL_DOWN: ({ className = 'w-7 h-7' }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="16" fill="#3B0764" stroke="#C084FC" strokeWidth="2" />
      {/* Impel Down Underwater Prison Chains */}
      <rect x="10" y="11" width="16" height="15" rx="3" stroke="#E9D5FF" strokeWidth="2" />
      <line x1="14" y1="11" x2="14" y2="26" stroke="#A855F7" strokeWidth="2" />
      <line x1="22" y1="11" x2="22" y2="26" stroke="#A855F7" strokeWidth="2" />
      <path d="M8 29H28" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  MARINEFORD: ({ className = 'w-7 h-7' }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="16" fill="#1E293B" stroke="#60A5FA" strokeWidth="2" />
      {/* Marine Gull & Anchor */}
      <path d="M9 16C13 11 18 15 18 15C18 15 23 11 27 16" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 16V27M13 24C13 27 23 27 23 24" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  FISHMAN_ISLAND: ({ className = 'w-7 h-7' }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="16" fill="#0C4A6E" stroke="#38BDF8" strokeWidth="2" />
      {/* Giant Underwater Bubble & Trident */}
      <circle cx="18" cy="18" r="11" fill="#38BDF8" fillOpacity="0.25" stroke="#7DD3FC" strokeWidth="2" />
      <path d="M18 9V27M14 11V16C14 18 18 18 18 18C18 18 22 18 22 16V11" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  WANO_KUNI: ({ className = 'w-7 h-7' }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="16" fill="#4C0519" stroke="#FB7185" strokeWidth="2" />
      {/* Crossed Samurai Katanas & Sakura Cherry Blossom */}
      <path d="M9 27L27 9M27 27L9 9" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="18" cy="18" r="3.5" fill="#FFE4E6" stroke="#BE123C" strokeWidth="1.5" />
    </svg>
  ),
  LAUGH_TALE: ({ className = 'w-7 h-7' }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="16" fill="#713F12" stroke="#FBBF24" strokeWidth="2.5" />
      {/* Pirate King Crown & Grand Gold Star */}
      <path d="M9 25L11 13L18 19L25 13L27 25H9Z" fill="#F59E0B" stroke="#FEF08A" strokeWidth="1.5" />
      <circle cx="18" cy="10" r="2" fill="#EF4444" />
      <circle cx="11" cy="13" r="1.5" fill="#3B82F6" />
      <circle cx="25" cy="13" r="1.5" fill="#10B981" />
    </svg>
  ),
};

// 7. Distinct Boss Avatars (10 Bosses)
export const BOSS_DISTINCT_AVATARS: Record<string, string> = {
  chuong_1_so_huu_ti: '🦈', // Arlong Sawtooth & Buggy
  chuong_2_so_thuc: '🦂', // Sir Crocodile Desert Hook
  chuong_3_goc_va_duong_thang_song_song: '⚡', // God Enel Thunder
  chuong_4_tam_giac_bang_nhau: '🐆', // Rob Lucci Leopard
  chuong_5_thong_ke_thu_thap_du_lieu: '✨', // Admiral Kizaru Laser
  chuong_6_ti_le_thuc_va_dai_luong_ti_le: '🐉', // Warden Magellan Poison Hydra
  chuong_7_bieu_thuc_dai_so_va_da_thuc: '🌋', // Fleet Admiral Akainu Magma
  chuong_8_bien_co_va_xac_suat: '🔱', // Hody Jones Fishman Trident
  chuong_9_quan_he_trong_tam_giac_dong_quy: '🐲', // Emperor Kaido Dragon
  chuong_10_hinh_khoi_trong_thuc_tien: '👑', // Pirate King Gol D. Roger
};
