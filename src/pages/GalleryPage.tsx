import React, { useState } from 'react';
import { Page, Language, GalleryItem } from '../types';
import { translations, galleryItems } from '../translations';
import { Lightbox } from '../components/Lightbox';
import { Play, Grid, Film, SlidersHorizontal, Image as ImageIcon } from 'lucide-react';

interface GalleryPageProps {
  lang: Language;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  // Filtered gallery items
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const categories = [
    { key: 'all', labelEn: 'All Photos', labelGu: 'બધી તસવીરો' },
    { key: 'education', labelEn: 'Education', labelGu: 'શિક્ષણ સેમિનાર' },
    { key: 'women', labelEn: 'Women Empowerment', labelGu: 'મહિલા આત્મનિર્ભરતા' },
    { key: 'skills', labelEn: 'Skill Dev', labelGu: 'કૌશલ્ય વિકાસ' },
    { key: 'health', labelEn: 'Health Camps', labelGu: 'આરોગ્ય કેમ્પ' },
    { key: 'community', labelEn: 'NT-DNT welfare', labelGu: 'સમુદાય સેવા' },
    { key: 'environment', labelEn: 'Environmental', labelGu: 'પર્યાવરણ' }
  ];

  const videos = [
    {
      id: 'v1',
      titleEn: "Pushpak Trust 11th Annual Day Celebrations Documentary",
      titleGu: "પુષ્પક ટ્રસ્ટ ૧૧મો વાર્ષિક સ્થાપના મહોત્સવ ડોક્યુમેન્ટરી",
      duration: "12:45",
      thumbnail: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=800",
      categoryEn: "Annual Event",
      categoryGu: "મુખ્ય ઉત્સવ"
    },
    {
      id: 'v2',
      titleEn: "Women Tailoring Graduation & Machinery Distribution Drive Nadiad",
      titleGu: "નડિયાદ ખાતે બહેનોનો સિલાઈ મશીન વિતરણ અને તાલીમ વિડીયો",
      duration: "06:20",
      thumbnail: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800",
      categoryEn: "Women Empowerment",
      categoryGu: "મહિલા સશક્તિકરણ"
    },
    {
      id: 'v3',
      titleEn: "On-ground relief with NT-DNT tribal settlements - Kheda",
      titleGu: "ખેડા જિલ્લાના વિચરતી જાતિના હંગામી વસવાટોમાં પ્રત્યક્ષ રાશન વિતરણ",
      duration: "08:15",
      thumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      categoryEn: "Tribal Welfare",
      categoryGu: "સમુદાય કલ્યાણ"
    }
  ];

  // Open Lightbox
  const openLightbox = (item: GalleryItem) => {
    // Find index of item within the FILTERED list so next/prev works correctly inside that filter
    const idx = filteredItems.findIndex(f => f.id === item.id);
    setLightboxIndex(idx);
  };

  // Lightbox Navigation
  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-[#0B192C] to-blue-950 text-white text-center px-4 overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-amber-500/5 pointer-events-none blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{lang === 'en' ? 'OUR IMAGERY' : 'સેવા ઝાંખી ફોટો-વિડીયો'}</span>
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            {t.galleryTitle}
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            {t.gallerySubtitle}
          </p>
        </div>
      </section>

      {/* Main Photo Gallery Grid with Tabs */}
      <section className="py-20 bg-white dark:bg-[#0B192C] px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          {/* Category Filter bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-amber-500/30 border-b border-slate-100 dark:border-slate-800">
            <SlidersHorizontal className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mr-2" />
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'bg-slate-50 text-slate-600 border border-slate-100 hover:bg-amber-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800/80 dark:hover:bg-amber-950/20'
                }`}
              >
                {lang === 'en' ? cat.labelEn : cat.labelGu}
              </button>
            ))}
          </div>

          {/* Masonry-like dynamic Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative rounded-2xl overflow-hidden border border-amber-500/10 shadow-sm cursor-pointer hover:shadow-xl hover:border-amber-500/30 transition-all duration-300 aspect-square bg-slate-100"
              >
                <img
                  src={item.url}
                  alt={lang === 'en' ? item.titleEn : item.titleGu}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gold hover details overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full w-fit">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-2 font-sans line-clamp-1">
                    {lang === 'en' ? item.titleEn : item.titleGu}
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                    {lang === 'en' ? item.descriptionEn : item.descriptionGu}
                  </p>
                </div>
                
                {/* Normal corner indicator */}
                <div className="absolute top-3 right-3 bg-white/80 dark:bg-[#0B192C]/80 p-1.5 rounded-lg border border-amber-500/20 group-hover:scale-0 transition-transform">
                  <ImageIcon className="h-4 w-4 text-amber-600" />
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 font-sans text-slate-400 italic">
              {lang === 'en' ? 'No photographs available under this category.' : 'આ શ્રેણી હેઠળ હાલમાં કોઈ ફોટા ઉપલબ્ધ નથી.'}
            </div>
          )}

        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 bg-slate-50 dark:bg-[#070F1E] px-4 border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto text-left mb-12">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
            {t.videoGalleryTitle}
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 dark:text-white mt-1">
            {t.videoGallerySubtitle}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-3"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => {
                const text = lang === 'en' 
                  ? "Playing high-resolution documentary video directly..." 
                  : "હાઇ-રિઝોલ્યુશન ડોક્યુમેન્ટરી વિડીયો લોડ થઈ રહ્યો છે...";
                alert(`${text}\n"${lang === 'en' ? vid.titleEn : vid.titleGu}"`);
              }}
              className="group bg-white dark:bg-[#0B192C] rounded-2xl overflow-hidden border border-amber-500/10 shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                <img
                  src={vid.thumbnail}
                  alt={lang === 'en' ? vid.titleEn : vid.titleGu}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                
                {/* Glowing Play Circle Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/45 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-amber-600 transition-all duration-300">
                    <Play className="h-6 w-6 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Duration indicator */}
                <span className="absolute bottom-3 right-3 text-[10px] font-bold text-white bg-slate-950/80 px-2 py-1 rounded-md border border-slate-800">
                  {vid.duration}
                </span>

                <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-wider text-amber-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                  {lang === 'en' ? vid.categoryEn : vid.categoryGu}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug font-sans group-hover:text-amber-500 transition-colors line-clamp-2">
                  {lang === 'en' ? vid.titleEn : vid.titleGu}
                </h4>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 mt-4 font-mono uppercase">
                  <Film className="h-3.5 w-3.5 text-amber-500" />
                  <span>{lang === 'en' ? 'Documentary Video' : 'ડોક્યુમેન્ટરી અહેવાલ'}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Trigger overlay rendering */}
      {lightboxIndex >= 0 && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
          onNext={handleNext}
          onPrev={handlePrev}
          lang={lang}
        />
      )}

    </div>
  );
};
