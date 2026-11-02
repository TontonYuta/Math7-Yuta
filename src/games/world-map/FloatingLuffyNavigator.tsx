import React, { useState, useEffect } from 'react';
import { Volume2, Sparkles, Navigation } from 'lucide-react';

const LUFFY_PIRATE_QUOTES = [
  'Gomu Gomu no... Thẳng tiến đảo tiếp theo!',
  'Thịt nướng ở đảo này đâu rồi?! Mau cập bến!',
  'Ta là Monkey D. Luffy, người sẽ trở thành Vua Hải Tặc!',
  'Mọi người sẵn sàng chưa? Giương buồm tàu Sunny!',
  'Bẻ gãy phong ấn Poneglyph để lấy kho báu One Piece!',
  'Haki bá vương bùng nổ! Tiến vào Tân Thế Giới!',
  'Bão biển à? Không có gì cản được băng Mũ Rơm!',
];

interface FloatingLuffyNavigatorProps {
  coords: { x: number; y: number };
  islandName: string;
  sagaName: string;
  isAutoPatrol: boolean;
  onToggleAutoPatrol: () => void;
  onLuffyClick?: () => void;
}

export const FloatingLuffyNavigator: React.FC<FloatingLuffyNavigatorProps> = ({
  coords,
  islandName,
  sagaName,
  isAutoPatrol,
  onToggleAutoPatrol,
  onLuffyClick,
}) => {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [isWaving, setIsWaving] = useState(false);

  // Cycle speech bubbles
  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % LUFFY_PIRATE_QUOTES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Animate whenever coords change (island jump)
  useEffect(() => {
    setIsWaving(true);
    setQuoteIdx((prev) => (prev + 1) % LUFFY_PIRATE_QUOTES.length);
    const timeout = setTimeout(() => setIsWaving(false), 800);
    return () => clearTimeout(timeout);
  }, [coords.x, coords.y]);

  const handleLuffyTap = () => {
    setIsWaving(true);
    setQuoteIdx((prev) => (prev + 1) % LUFFY_PIRATE_QUOTES.length);
    setTimeout(() => setIsWaving(false), 600);
    onLuffyClick?.();
  };

  return (
    <>
      {/* Dynamic Floating Luffy Sprite Positioned Over Map */}
      <div
        className="absolute pointer-events-auto z-30 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer"
        style={{
          left: `${coords.x}%`,
          top: `${coords.y}%`,
          transform: 'translate(-50%, -105%)',
        }}
        onClick={handleLuffyTap}
        title="Thuyền trưởng Monkey D. Luffy - Bấm để nghe thoại!"
      >
        {/* Animated Speech Comic Bubble */}
        <div className="relative -top-2 flex flex-col items-center">
          <div className="bg-amber-400 text-zinc-950 font-black text-[11px] sm:text-xs px-3 py-1.5 rounded-2xl shadow-2xl border-2 border-zinc-950/80 whitespace-nowrap animate-bounce flex items-center gap-1.5 max-w-[220px] sm:max-w-[280px]">
            <Sparkles className="w-3.5 h-3.5 text-red-600 shrink-0 animate-spin" />
            <span className="truncate">{LUFFY_PIRATE_QUOTES[quoteIdx]}</span>
          </div>
          {/* Comic speech caret downward pointer */}
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] border-t-amber-400 -mt-[1px]" />
        </div>

        {/* Luffy Character & Thousand Sunny Avatar Group */}
        <div className={`relative flex flex-col items-center group ${isWaving ? 'scale-110 rotate-3' : ''} transition-transform`}>
          {/* Ocean Wake / Sea Ripples (pointer-events-none so island markers underneath remain clickable) */}
          <div className="pointer-events-none absolute -bottom-2 w-16 h-5 bg-cyan-400/30 rounded-full blur-[3px] animate-pulse" />
          <div className="pointer-events-none absolute -bottom-1 w-20 h-4 border-2 border-cyan-300/40 rounded-full animate-ping opacity-40" />

          {/* Luffy Chibi Avatar Circle */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-red-500 to-yellow-300 shadow-[0_0_22px_rgba(245,158,11,0.6)] border-2 border-amber-300 flex items-center justify-center bg-zinc-900 overflow-hidden">
            <img
              src="/assets/onepiece/collection/op_007_Monkey_D__Luffy_-_Captain_Excited_a.png"
              alt="Captain Monkey D. Luffy"
              className="w-full h-full object-cover object-top filter contrast-125 saturate-125 group-hover:scale-115 transition-transform duration-200"
              onError={(e) => {
                // Fallback to Straw Hat avatar if image loading issues occur
                const target = e.target as HTMLImageElement;
                target.src = '/assets/onepiece/collection/op_004_Monkey_D__Luffy_-_20th_Anniversary_.png';
              }}
            />
            {/* Straw Hat Ribbon Badge */}
            <div className="absolute -bottom-0.5 inset-x-0 bg-red-600/90 text-amber-200 text-[9px] font-mono font-black text-center uppercase tracking-wider py-0.5">
              LUFFY
            </div>
          </div>

          {/* Mini Sunny Flagship Base */}
          <div className="mt-1 flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-950/90 border border-amber-500/50 text-[10px] font-mono text-amber-300 font-extrabold shadow-lg backdrop-blur-sm">
            <span>⛵ Sunny</span>
            <span className="text-zinc-500">•</span>
            <span className="text-white font-bold">{sagaName}</span>
          </div>
        </div>
      </div>

      {/* Map Control Bar for Luffy Auto Patrol & Navigation */}
      <div className="absolute bottom-5 right-7 z-20 flex items-center gap-2.5">
        <button
          type="button"
          onClick={onToggleAutoPatrol}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-mono font-black tracking-wide shadow-2xl backdrop-blur-md border transition-all active:scale-95 ${
            isAutoPatrol
              ? 'bg-amber-400 text-zinc-950 border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.5)] animate-pulse'
              : 'bg-zinc-900/90 text-amber-300 border-amber-500/40 hover:bg-zinc-800'
          }`}
          title="Bật/Tắt chế độ Luffy tự động giương buồm tuần tra các đảo"
        >
          <Navigation className={`w-4 h-4 ${isAutoPatrol ? 'animate-spin' : ''}`} />
          <span>{isAutoPatrol ? '⏸ Đang Tuần Tra...' : '▶ Luffy Giương Buồm Tuần Tra'}</span>
        </button>
      </div>
    </>
  );
};
