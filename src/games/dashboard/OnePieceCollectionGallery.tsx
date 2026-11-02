import React, { useState, useEffect, useMemo } from 'react';
import { Search, Sparkles, X, ExternalLink, ShieldAlert, Anchor } from 'lucide-react';

export interface OnePieceAssetItem {
  id: number;
  title: string;
  filename: string;
  path: string;
  size: number;
}

export const OnePieceCollectionGallery: React.FC = () => {
  const [assets, setAssets] = useState<OnePieceAssetItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [previewAsset, setPreviewAsset] = useState<OnePieceAssetItem | null>(null);

  useEffect(() => {
    fetch('/assets/onepiece/collection/onepiece_100_assets.json')
      .then((res) => res.json())
      .then((data: OnePieceAssetItem[]) => {
        setAssets(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load One Piece 100 assets manifest', err);
        setLoading(false);
      });
  }, []);

  const filteredAssets = useMemo(() => {
    return assets.filter((asset) => {
      const titleLower = asset.title.toLowerCase();
      const filenameLower = asset.filename.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === '' ||
        titleLower.includes(searchQuery.toLowerCase()) ||
        filenameLower.includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (activeCategory === 'wanted') {
        return titleLower.includes('wanted') || titleLower.includes('poster');
      }
      if (activeCategory === 'strawhat') {
        return (
          titleLower.includes('luffy') ||
          titleLower.includes('zoro') ||
          titleLower.includes('nami') ||
          titleLower.includes('usopp') ||
          titleLower.includes('sanji') ||
          titleLower.includes('chopper') ||
          titleLower.includes('robin') ||
          titleLower.includes('franky') ||
          titleLower.includes('brook') ||
          titleLower.includes('jinbe')
        );
      }
      if (activeCategory === 'ships') {
        return (
          titleLower.includes('sunny') ||
          titleLower.includes('merry') ||
          titleLower.includes('ship') ||
          titleLower.includes('force') ||
          titleLower.includes('moby')
        );
      }
      return true;
    });
  }, [assets, searchQuery, activeCategory]);

  return (
    <div className="space-y-6">
      {/* Top Filter & Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#141624]/90 backdrop-blur-md p-5 rounded-3xl border border-zinc-800/90 shadow-xl">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-400 text-zinc-950 font-black shadow-md'
                : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Tất cả ({assets.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('strawhat')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'strawhat'
                ? 'bg-amber-400 text-zinc-950 font-black shadow-md'
                : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Băng Mũ Rơm
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('wanted')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'wanted'
                ? 'bg-amber-400 text-zinc-950 font-black shadow-md'
                : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Lệnh Truy Nã (Wanted)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('ships')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'ships'
                ? 'bg-amber-400 text-zinc-950 font-black shadow-md'
                : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Chiến Thuyền & Biểu Tượng
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm nhân vật, tàu..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* Grid of 100 Assets */}
      {loading ? (
        <div className="flex items-center justify-center p-20 text-amber-400 font-mono text-base">
          Đang tải kho 100 assets One Piece...
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              onClick={() => setPreviewAsset(asset)}
              className="group relative rounded-2xl bg-[#141624]/90 border border-zinc-800 hover:border-amber-400/80 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-square w-full bg-zinc-950 overflow-hidden">
                <img
                  src={asset.path}
                  alt={asset.title}
                  loading="lazy"
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300 filter contrast-110"
                />
                <span className="absolute top-2 left-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-950/80 border border-zinc-700 text-amber-300 font-bold">
                  #{asset.id}
                </span>
              </div>
              <div className="p-3 bg-zinc-900/95 border-t border-zinc-800/80">
                <h4 className="text-xs font-bold text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
                  {asset.title}
                </h4>
                <div className="flex items-center justify-between mt-1 text-[10px] font-mono text-zinc-400">
                  <span>{(asset.size / 1024).toFixed(0)} KB</span>
                  <span className="text-amber-400/80 font-bold">Xem ảnh</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Full Preview Modal */}
      {previewAsset && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewAsset(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#141624] border border-amber-500/40 rounded-3xl p-6 shadow-2xl flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 font-black">
                  #{previewAsset.id}
                </span>
                <h3 className="text-base sm:text-lg font-black text-white">{previewAsset.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewAsset(null)}
                className="p-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full max-h-[60vh] bg-zinc-950 rounded-2xl overflow-hidden flex items-center justify-center p-4 border border-zinc-800">
              <img
                src={previewAsset.path}
                alt={previewAsset.title}
                className="max-h-[55vh] max-w-full object-contain filter contrast-110"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-1">
              <span>Tên file: <strong className="text-zinc-200">{previewAsset.filename}</strong></span>
              <a
                href={previewAsset.path}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 text-zinc-950 font-black hover:bg-amber-300 transition-colors"
              >
                <span>Mở ảnh gốc</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
