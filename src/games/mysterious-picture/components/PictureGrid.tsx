import React from 'react';
import { MysteryTile, MysteryImageItem } from '../types';
import { MathRenderer } from '../../../components/MathRenderer';
import { Sparkles, HelpCircle } from 'lucide-react';

interface PictureGridProps {
  tiles: MysteryTile[];
  currentImage: MysteryImageItem;
  onSelectTile: (tile: MysteryTile) => void;
}

export const PictureGrid: React.FC<PictureGridProps> = ({
  tiles,
  currentImage,
  onSelectTile,
}) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square rounded-3xl overflow-hidden border-4 border-amber-600/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none">
      {/* 1. Underlying Mystery Masterpiece Artwork */}
      <img
        src={currentImage.imageUrl}
        alt={currentImage.title}
        className="absolute inset-0 w-full h-full object-cover filter brightness-95"
      />

      {/* 2. Mystery 3x3 Covering Tiles */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-2 sm:p-3 bg-stone-950/20 backdrop-blur-[1px]">
        {tiles.map((tile) => {
          const isRevealed = tile.isRevealed;

          if (isRevealed) {
            // Revealed Tile - Transparent Hole
            return (
              <div
                key={tile.id}
                className="relative rounded-2xl border border-white/20 shadow-inner transition-all duration-700 pointer-events-none opacity-0"
              />
            );
          }

          // Unrevealed Mystery Tile Card
          return (
            <button
              key={tile.id}
              type="button"
              onClick={() => onSelectTile(tile)}
              className={`group relative flex flex-col items-center justify-between p-2 sm:p-3 rounded-2xl bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 border-2 border-amber-500/70 shadow-xl transition-all duration-200 hover:scale-[1.03] active:scale-95 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] ${
                tile.isWrongShake ? 'animate-shake border-red-500 ring-2 ring-red-500' : ''
              }`}
            >
              {/* Top Tile Badge */}
              <div className="w-full flex items-center justify-between">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/50 flex items-center justify-center font-black text-xs sm:text-sm">
                  {tile.id + 1}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400/60 group-hover:text-amber-300" />
              </div>

              {/* Arithmetic Expression Preview with KaTeX */}
              <div className="my-auto px-1 py-1 text-center max-w-full overflow-hidden">
                <div className="text-xs sm:text-sm font-semibold text-amber-100 line-clamp-2">
                  <MathRenderer
                    content={tile.question.content}
                    className="!text-amber-100 font-medium text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Bottom Tap Prompt */}
              <div className="w-full pt-1 border-t border-stone-800 text-center">
                <span className="text-[10px] font-bold text-amber-400 group-hover:text-yellow-300 uppercase tracking-wider">
                  Mở mảnh ghép →
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
