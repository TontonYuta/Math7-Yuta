import React, { useState, useEffect } from 'react';
import { Sparkles, Navigation } from 'lucide-react';

const LUFFY_PIRATE_QUOTES = [
  'Gomu Gomu no... Thẳng tiến đảo tiếp theo!',
  'Thịt nướng ở đảo này đâu rồi?! Cập bến thôi!',
  'Ta nhất định sẽ trở thành Vua Hải Tặc!',
  'Mọi người sẵn sàng chưa? Giương buồm!',
  'Bẻ gãy phong ấn Poneglyph để lấy kho báu!',
  'Haki bá vương bùng nổ! Tiến lên!',
  'Không có gì cản được băng Mũ Rơm!',
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
  isAutoPatrol,
  onToggleAutoPatrol,
  onLuffyClick,
}) => {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [isWaving, setIsWaving] = useState(false);

  // Cycle speech bubbles periodically
  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % LUFFY_PIRATE_QUOTES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Jump animation on coordinate change
  useEffect(() => {
    setIsWaving(true);
    setQuoteIdx((prev) => (prev + 1) % LUFFY_PIRATE_QUOTES.length);
    const timeout = setTimeout(() => setIsWaving(false), 700);
    return () => clearTimeout(timeout);
  }, [coords.x, coords.y]);

  const handleLuffyTap = () => {
    setIsWaving(true);
    setQuoteIdx((prev) => (prev + 1) % LUFFY_PIRATE_QUOTES.length);
    setTimeout(() => setIsWaving(false), 500);
    onLuffyClick?.();
  };

  return (
    <>
      {/* Floating Luffy Sprite Hovering Over Active Island */}
      <div
        className="absolute pointer-events-auto z-30 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer select-none"
        style={{
          left: `${coords.x}%`,
          top: `${coords.y}%`,
          transform: 'translate(-50%, -115%)',
        }}
        onClick={handleLuffyTap}
        title="Thuyền trưởng Monkey D. Luffy - Bấm để đổi thoại!"
      >
        {/* Animated Speech Comic Bubble (Compact, Non-overlapping, Responsive) */}
        <div className="relative -top-1 flex flex-col items-center">
          <div className="bg-amber-400 text-zinc-950 font-black text-[10px] sm:text-xs px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl sm:rounded-2xl shadow-2xl border sm:border-2 border-zinc-950/90 flex items-center gap-1 sm:gap-1.5 max-w-[150px] sm:max-w-[210px] text-center leading-tight animate-bounce">
            <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-red-600 shrink-0 animate-spin" />
            <span className="line-clamp-2">{LUFFY_PIRATE_QUOTES[quoteIdx]}</span>
          </div>
          {/* Downward comic pointer */}
          <div className="w-0 h-0 border-l-[4px] sm:border-l-[6px] border-l-transparent border-r-[4px] sm:border-r-[6px] border-r-transparent border-t-[5px] sm:border-t-[7px] border-t-amber-400 -mt-[1px]" />
        </div>

        {/* Luffy Chibi Avatar */}
        <div className={`relative flex flex-col items-center mt-0.5 sm:mt-1 group ${isWaving ? 'scale-115 rotate-3' : ''} transition-transform`}>
          {/* Gentle Sea Splash Glow under Luffy */}
          <div className="pointer-events-none absolute -bottom-1 w-10 sm:w-14 h-3 sm:h-4 bg-cyan-400/30 rounded-full blur-[2px] animate-pulse" />

          {/* Luffy Avatar Frame */}
          <div className="relative w-10 h-10 sm:w-15 sm:h-15 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-red-500 to-yellow-300 shadow-[0_0_22px_rgba(245,158,11,0.7)] border sm:border-2 border-amber-300 flex items-center justify-center bg-zinc-900 overflow-hidden">
            <img
              src="/assets/onepiece/collection/op_007_Monkey_D__Luffy_-_Captain_Excited_a.png"
              alt="Captain Monkey D. Luffy"
              className="w-full h-full object-cover object-top filter contrast-125 saturate-125 group-hover:scale-110 transition-transform duration-150"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/assets/onepiece/collection/op_004_Monkey_D__Luffy_-_20th_Anniversary_.png';
              }}
            />
            {/* Straw Hat Ribbon Badge */}
            <div className="absolute -bottom-0.5 inset-x-0 bg-red-600 text-amber-200 text-[7px] sm:text-[8px] font-mono font-black text-center uppercase tracking-wider py-0.5 shadow">
              LUFFY
            </div>
          </div>
        </div>
      </div>

      {/* Map Control Bar for Luffy Auto Patrol & Navigation */}
      <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-7 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={onToggleAutoPatrol}
          className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-mono font-black tracking-wide shadow-2xl backdrop-blur-md border transition-all active:scale-95 ${
            isAutoPatrol
              ? 'bg-amber-400 text-zinc-950 border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.6)] animate-pulse'
              : 'bg-zinc-900/95 text-amber-300 border-amber-500/50 hover:bg-zinc-800 hover:border-amber-400'
          }`}
          title="Bật/Tắt chế độ Luffy tự động giương buồm tuần tra các đảo"
        >
          <Navigation className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isAutoPatrol ? 'animate-spin' : ''}`} />
          <span>{isAutoPatrol ? '⏸ Tuần Tra...' : '▶ Luffy Tuần Tra'}</span>
        </button>
      </div>
    </>
  );
};
