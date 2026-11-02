import React from 'react';
import { MysteryTile, MysteryImageItem } from '../types';
import { MathRenderer } from '../../../components/MathRenderer';

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
    <div className="relative w-full h-[460px] sm:h-[680px] lg:h-[740px] rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl select-none bg-zinc-950">
      {/* 1. Underlying Mystery One Piece Artwork filling 100% of the canvas seamlessly */}
      <img
        src={currentImage.imageUrl}
        alt={currentImage.title}
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 saturate-110"
      />

      {/* 2. Seamless 3x3 Ancient Poneglyph Grid with Zero Gap & Straight 90-Degree Perpendicular Cuts */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0 p-0">
        {tiles.map((tile) => {
          const isRevealed = tile.isRevealed;

          // When revealed: Completely transparent & non-interactive to reveal the underlying artwork seamlessly without any gap
          if (isRevealed) {
            return (
              <div
                key={tile.id}
                className="relative w-full h-full pointer-events-none opacity-0"
              />
            );
          }

          // Unrevealed tile: 100% straight perpendicular cuts (rounded-none), zero gap (flush against adjacent tiles)
          return (
            <button
              key={tile.id}
              type="button"
              onClick={() => onSelectTile(tile)}
              className={`group relative flex flex-col items-center justify-between p-2 sm:p-5 rounded-none bg-[#0e101a]/95 hover:bg-[#161a2b] border border-zinc-700/80 transition-all duration-150 active:scale-[0.99] shadow-inner ${
                tile.isWrongShake
                  ? 'animate-shake bg-red-950/80 border-red-500'
                  : 'hover:border-amber-400 hover:z-10'
              }`}
            >
              {/* Rune Header Badge */}
              <div className="w-full flex items-center justify-between">
                <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-none bg-zinc-900 border border-amber-500/50 text-amber-300 font-mono font-black text-[10px] sm:text-sm shadow-sm">
                  <span className="hidden sm:inline">Phong Ấn </span>#{tile.id + 1}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-zinc-400 font-bold">
                  [{tile.row + 1},{tile.col + 1}]
                </span>
              </div>

              {/* Math Question Snippet */}
              <div className="my-auto px-1 sm:px-2 py-0.5 sm:py-1 text-center max-w-full overflow-hidden">
                <div className="text-xs sm:text-base font-bold text-zinc-100 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                  <MathRenderer
                    content={tile.question.content}
                    className="!text-zinc-100 font-bold text-xs sm:text-base"
                  />
                </div>
              </div>

              {/* Action Call Banner */}
              <div className="w-full pt-1 sm:pt-2 border-t border-zinc-800/90 text-center">
                <span className="text-[10px] sm:text-sm font-mono font-black text-amber-400 group-hover:text-amber-300 uppercase tracking-wider">
                  <span className="hidden sm:inline">Giải mã phong ấn →</span>
                  <span className="sm:hidden">Mở ô →</span>
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
