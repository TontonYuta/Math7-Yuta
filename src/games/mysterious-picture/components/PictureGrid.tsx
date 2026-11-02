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
    <div className="relative w-full h-[600px] sm:h-[680px] lg:h-[740px] rounded-3xl overflow-hidden border-2 border-amber-500/40 ring-4 ring-amber-500/20 shadow-2xl select-none bg-zinc-950">
      {/* 1. Underlying Mystery Anime Masterpiece Artwork filling entire container */}
      <img
        src={currentImage.imageUrl}
        alt={currentImage.title}
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 saturate-110"
      />

      {/* 2. 3x3 Ancient Poneglyph Seal Covering Tiles covering 100% of the canvas */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3.5 p-4 sm:p-6 bg-black/40 backdrop-blur-[2px]">
        {tiles.map((tile) => {
          const isRevealed = tile.isRevealed;

          if (isRevealed) {
            return (
              <div
                key={tile.id}
                className="relative rounded-2xl border border-amber-400/20 transition-all duration-500 pointer-events-none opacity-0"
              />
            );
          }

          return (
            <button
              key={tile.id}
              type="button"
              onClick={() => onSelectTile(tile)}
              className={`group relative flex flex-col items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#12141f]/95 hover:bg-[#191c2b] border transition-all duration-150 active:scale-95 shadow-xl ${
                tile.isWrongShake
                  ? 'animate-shake border-red-500 ring-4 ring-red-500/50'
                  : 'border-zinc-800 hover:border-amber-400/80 hover:shadow-amber-500/20'
              }`}
            >
              {/* Rune Header */}
              <div className="w-full flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-zinc-900 border border-amber-500/40 text-amber-300 font-mono font-black text-xs sm:text-sm">
                  Phong Ấn {tile.id + 1}
                </span>
                <span className="text-xs font-mono text-zinc-400 font-bold">
                  [{tile.row + 1},{tile.col + 1}]
                </span>
              </div>

              {/* Math Question Snippet */}
              <div className="my-auto px-2 py-1 text-center max-w-full overflow-hidden">
                <div className="text-sm sm:text-base font-semibold text-zinc-100 line-clamp-3 leading-relaxed">
                  <MathRenderer
                    content={tile.question.content}
                    className="!text-zinc-100 font-semibold text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Action Call */}
              <div className="w-full pt-2 border-t border-zinc-800/80 text-center">
                <span className="text-xs sm:text-sm font-mono font-black text-amber-400 group-hover:text-amber-300 uppercase tracking-wider">
                  Giải mã Poneglyph →
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
