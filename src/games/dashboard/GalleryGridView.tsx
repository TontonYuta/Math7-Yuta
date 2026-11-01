import React, { useState } from 'react';
import { MysteryImageItem } from '../mysterious-picture/types';
import { Lock, Sparkles, X, CheckCircle2, Image } from 'lucide-react';

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
          <h3 className="text-lg sm:text-xl font-black text-amber-200 flex items-center gap-2">
            <Image className="w-5 h-5 text-amber-400" />
            <span>BỘ SƯU TẬP KIỆT TÁC TRANH ĐÃ MỞ KHÓA</span>
          </h3>
          <p className="text-xs text-stone-400">
            Đã thu thập {unlockedImageIds.length} / {allImages.length} bức tranh phong cảnh & toán học kỳ vĩ
          </p>
        </div>
      </div>

      {/* Grid of Artworks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {allImages.map((img) => {
          const isUnlocked = unlockedImageIds.includes(img.id);

          return (
            <div
              key={img.id}
              onClick={() => isUnlocked && setLightboxImage(img)}
              className={`group relative rounded-3xl overflow-hidden border-2 transition-all duration-200 flex flex-col justify-between ${
                isUnlocked
                  ? 'border-amber-500/60 bg-stone-900 shadow-xl hover:scale-[1.02] cursor-pointer hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]'
                  : 'border-stone-800 bg-stone-900/40 opacity-70 cursor-not-allowed'
              }`}
            >
              {/* Picture Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden bg-stone-950">
                {isUnlocked ? (
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-stone-950 text-stone-600 gap-2">
                    <Lock className="w-8 h-8 text-stone-700" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Chưa mở khóa</span>
                  </div>
                )}

                {/* Badge Tag */}
                <div className="absolute top-2.5 left-2.5">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow ${
                      isUnlocked
                        ? 'bg-emerald-500 text-stone-950 flex items-center gap-1'
                        : 'bg-stone-800 text-stone-400 border border-stone-700'
                    }`}
                  >
                    {isUnlocked ? (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Đã sở hữu</span>
                      </>
                    ) : (
                      <span>Khóa</span>
                    )}
                  </span>
                </div>
              </div>

              {/* Picture Description Info */}
              <div className="p-3.5 space-y-1 bg-stone-900">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                  {img.worldName || 'Toán 7'}
                </span>
                <h4 className="text-sm font-black text-amber-100 line-clamp-1 group-hover:text-amber-200">
                  {img.title}
                </h4>
                <p className="text-[11px] text-stone-400 line-clamp-2">
                  {isUnlocked ? img.description : 'Vượt qua ải Bức Tranh Bí Ẩn để mở khóa kiệt tác này.'}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Zoom Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in select-none">
          <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-stone-900 border-4 border-amber-500 shadow-2xl space-y-4 p-5 sm:p-6 text-stone-100">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-stone-200 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="rounded-2xl overflow-hidden aspect-video border border-stone-700 shadow-2xl">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-400 uppercase">
                {lightboxImage.worldName}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-amber-100">
                {lightboxImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {lightboxImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
