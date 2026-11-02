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
    <div className="relative w-full max-w-xl mx-auto aspect-square rounded-2xl overflow-hidden border border-zinc-700/90 shadow-2xl select-none bg-zinc-950">
      {/* 1. Underlying Mystery Masterpiece Artwork */}
      <img
        src={currentImage.imageUrl}
        alt={currentImage.title}
        className="absolute inset-0 w-full h-full object-cover filter brightness-95"
      />

      {/* 2. 3x3 Covering Tiles */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2.5 p-3 bg-black/30 backdrop-blur-[1px]">
        {tiles.map((tile) => {
          const isRevealed = tile.isRevealed;

          if (isRevealed) {
            return (
              <div
                key={tile.id}
                className="relative rounded-xl border border-white/10 transition-all duration-500 pointer-events-none opacity-0"
              />
            );
          }

          return (
            <button
              key={tile.id}
              type="button"
              onClick={() => onSelectTile(tile)}
              className={`group relative flex flex-col items-center justify-between p-3 rounded-xl bg-[#14161f]/95 hover:bg-[#181a26] border transition-all duration-150 active:scale-95 ${
                tile.isWrongShake
                  ? 'animate-shake border-red-500 ring-2 ring-red-500/50'
                  : 'border-zinc-800 hover:border-zinc-600 shadow-md'
              }`}
            >
              <div className="w-full flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono font-bold text-xs">
                  Mảnh {tile.id + 1}
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  [{tile.row + 1},{tile.col + 1}]
                </span>
              </div>

              <div className="my-auto px-1 py-1 text-center max-w-full overflow-hidden">
                <div className="text-xs font-medium text-zinc-200 line-clamp-2">
                  <MathRenderer
                    content={tile.question.content}
                    className="!text-zinc-200 font-medium text-xs"
                  />
                </div>
              </div>

              <div className="w-full pt-1.5 border-t border-zinc-800/80 text-center">
                <span className="text-[10px] font-mono font-semibold text-zinc-400 group-hover:text-amber-400 uppercase tracking-wider">
                  Giải bài toán →
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
