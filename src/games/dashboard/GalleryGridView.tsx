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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
            <Image className="w-5 h-5 text-amber-400" />
            <span>Kho Báu Kiệt Tác Tranh One Piece</span>
          </h3>
          <p className="text-sm sm:text-base text-zinc-300 mt-1 font-medium">
            Đã mở khóa {unlockedImageIds.length} / {allImages.length} kiệt tác tranh One Piece huyền thoại qua các ải Poneglyph
          </p>
        </div>
      </div>

      {/* Grid of Artworks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allImages.map((img) => {
          const isUnlocked = unlockedImageIds.includes(img.id);

          return (
            <div
              key={img.id}
              onClick={() => isUnlocked && setLightboxImage(img)}
              className={`group relative rounded-3xl overflow-hidden border transition-all duration-150 flex flex-col justify-between ${
                isUnlocked
                  ? 'border-zinc-800 bg-[#14161f]/95 hover:border-amber-400/60 cursor-pointer shadow-xl hover:shadow-2xl'
                  : 'border-zinc-850 bg-[#101218]/80 opacity-50 cursor-not-allowed'
              }`}
            >
              {/* Picture Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                {isUnlocked ? (
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 saturate-110"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-zinc-500 gap-2">
                    <Lock className="w-8 h-8 text-zinc-600" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">Đã khóa</span>
                  </div>
                )}

                {/* Badge Tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider shadow ${
                      isUnlocked
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5'
                        : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                    }`}
                  >
                    {isUnlocked ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Đã mở</span>
                      </>
                    ) : (
                      <span>Khóa</span>
                    )}
                  </span>
                </div>
              </div>

              {/* Picture Description Info */}
              <div className="p-5 space-y-2 bg-[#14161f]">
                <span className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider block">
                  {img.worldName || 'Toán 7'}
                </span>
                <h4 className="text-base sm:text-lg font-black text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
                  {img.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed font-medium">
                  {isUnlocked ? img.description : 'Giải ải Ma Trận Poneglyph để mở khóa kiệt tác này.'}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in select-none">
          <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-[#14161f] border border-zinc-700/90 p-6 sm:p-8 space-y-5 text-zinc-100 shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden aspect-video border border-zinc-700 shadow-xl">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-amber-300 font-bold uppercase">
                {lightboxImage.worldName}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {lightboxImage.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
                {lightboxImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
