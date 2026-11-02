import React, { useState } from 'react';
import { MysteryImageItem } from '../mysterious-picture/types';
import { Lock, X, CheckCircle2, Image } from 'lucide-react';

interface GalleryGridViewProps {
  allImages: MysteryImageItem[];
  unlockedImageIds: string[];
}

export const GalleryGridView: React.FC<GalleryGridViewProps> = ({
  allImages,
  unlockedImageIds,
}) => {
  const [lightboxImage, setLightboxImage] = useState<MysteryImageItem | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <Image className="w-4 h-4 text-amber-400" />
            <span>Kho Báu Kiệt Tác Tranh One Piece</span>
          </h3>
          <p className="text-xs text-zinc-400">
            Đã mở khóa {unlockedImageIds.length} / {allImages.length} kiệt tác tranh One Piece huyền thoại qua các ải Poneglyph
          </p>
        </div>
      </div>

      {/* Grid of Artworks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allImages.map((img) => {
          const isUnlocked = unlockedImageIds.includes(img.id);

          return (
            <div
              key={img.id}
              onClick={() => isUnlocked && setLightboxImage(img)}
              className={`group relative rounded-xl overflow-hidden border transition-all duration-150 flex flex-col justify-between ${
                isUnlocked
                  ? 'border-zinc-800 bg-[#14161f] hover:border-zinc-600 cursor-pointer shadow-md'
                  : 'border-zinc-850 bg-[#101218] opacity-50 cursor-not-allowed'
              }`}
            >
              {/* Picture Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                {isUnlocked ? (
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-zinc-600 gap-1.5">
                    <Lock className="w-6 h-6 text-zinc-700" />
                    <span className="text-[10px] font-mono uppercase tracking-wider">Đã khóa</span>
                  </div>
                )}

                {/* Badge Tag */}
                <div className="absolute top-2 left-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                      isUnlocked
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1'
                        : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
                    }`}
                  >
                    {isUnlocked ? (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Đã mở</span>
                      </>
                    ) : (
                      <span>Khóa</span>
                    )}
                  </span>
                </div>
              </div>

              {/* Picture Description Info */}
              <div className="p-3.5 space-y-1 bg-[#14161f]">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                  {img.worldName || 'Toán 7'}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
                  {img.title}
                </h4>
                <p className="text-[11px] text-zinc-400 line-clamp-2">
                  {isUnlocked ? img.description : 'Giải ải Ma Trận Poneglyph để mở khóa kiệt tác này.'}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in select-none">
          <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-[#14161f] border border-zinc-700 p-5 space-y-4 text-zinc-100 shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="rounded-xl overflow-hidden aspect-video border border-zinc-800 shadow">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-zinc-500 uppercase">
                {lightboxImage.worldName}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {lightboxImage.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {lightboxImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
