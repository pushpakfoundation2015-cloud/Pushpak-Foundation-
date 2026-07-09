import React from 'react';
import { GalleryItem, Language } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  lang: Language;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  lang,
}) => {
  if (currentIndex < 0 || currentIndex >= items.length) return null;
  const item = items[currentIndex];

  const handleOverlayClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'lightbox-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="lightbox-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-all duration-300"
    >
      {/* Top Close Control */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
        <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
          {currentIndex + 1} / {items.length}
        </span>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-slate-950 border border-slate-800 text-white hover:bg-slate-900 transition-colors cursor-pointer"
          title="Close (Esc)"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/10] flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 md:-left-16 z-30 p-3 rounded-full bg-slate-950/80 border border-slate-800/80 text-white hover:bg-slate-900 transition-all cursor-pointer"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Display Image */}
        <div className="relative max-w-full max-h-[75vh] rounded-xl overflow-hidden border border-amber-500/20 shadow-2xl bg-black select-none">
          <img
            src={item.url}
            alt={lang === 'en' ? item.titleEn : item.titleGu}
            referrerPolicy="no-referrer"
            className="w-full max-h-[70vh] object-contain"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 md:-right-16 z-30 p-3 rounded-full bg-slate-950/80 border border-slate-800/80 text-white hover:bg-slate-900 transition-all cursor-pointer"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Localized Bottom Captions */}
      <div className="w-full max-w-3xl mt-6 text-center z-10 px-4">
        <h4 className="text-lg md:text-xl font-sans font-bold text-amber-400 drop-shadow">
          {lang === 'en' ? item.titleEn : item.titleGu}
        </h4>
        <p className="text-sm text-slate-300 mt-2 leading-relaxed max-w-2xl mx-auto">
          {lang === 'en' ? item.descriptionEn : item.descriptionGu}
        </p>
        <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mt-3">
          {item.category}
        </span>
      </div>
    </div>
  );
};
