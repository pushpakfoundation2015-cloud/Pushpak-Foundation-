import React, { useState } from 'react';
import { Language, NewsArticle } from '../types';
import { translations, newsArticles } from '../translations';
import { Calendar, Tag, ArrowRight, X, Mail, Sparkles, Bell } from 'lucide-react';

interface NewsPageProps {
  lang: Language;
}

export const NewsPage: React.FC<NewsPageProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [subEmail, setSubEmail] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);

  const handleSubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail.trim()) {
      setSubSuccess(true);
      setSubEmail('');
      setTimeout(() => setSubSuccess(false), 5000);
    }
  };

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-[#0B192C] to-blue-950 text-white text-center px-4 overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-amber-500/5 pointer-events-none blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{lang === 'en' ? 'NGO PRESS & EVENTS' : 'અખબારી અહેવાલો અને ઘટનાઓ'}</span>
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            {t.newsTitle}
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            {t.newsSubtitle}
          </p>
        </div>
      </section>

      {/* News Listings Grid */}
      <section className="py-20 bg-white dark:bg-[#0B192C] px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {newsArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group bg-slate-50 dark:bg-[#070F1E] rounded-2xl overflow-hidden border border-amber-500/10 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 flex flex-col"
            >
              {/* Image with Tag overlay */}
              <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                <img
                  src={art.image}
                  alt={lang === 'en' ? art.titleEn : art.titleGu}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 dark:bg-[#0B192C] px-2.5 py-1 rounded-full border border-amber-500/20 shadow">
                  {lang === 'en' ? art.categoryEn : art.categoryGu}
                </span>
              </div>

              {/* Text Context */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-400 mb-2">
                  <Calendar className="h-3.5 w-3.5 text-amber-500" />
                  <span>{art.date}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-amber-500 transition-colors">
                  {lang === 'en' ? art.titleEn : art.titleGu}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-xs mt-3 leading-relaxed line-clamp-3">
                  {lang === 'en' ? art.summaryEn : art.summaryGu}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                  <span>{lang === 'en' ? 'Read Detailed Article' : 'સંપૂર્ણ વિગત વાંચો'}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Callout Banner */}
      <section className="py-20 bg-slate-50 dark:bg-[#070F1E] px-4 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto rounded-2xl bg-white dark:bg-[#0B192C] border border-amber-500/15 p-8 md:p-12 shadow-md flex flex-col lg:flex-row items-center gap-10 text-left">
          <div className="flex-1">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
              <Bell className="h-4 w-4 animate-bounce text-amber-500" />
              <span>{lang === 'en' ? 'NEWSLETTER UPDATES' : 'સેવા માહિતીપત્રક (ન્યૂઝલેટર)'}</span>
            </span>
            <h3 className="text-xl md:text-2xl font-sans font-bold text-slate-900 dark:text-white mt-2">
              {lang === 'en' ? 'Get Monthly Impact Newsletters' : 'દર મહિને સેવા અહેવાલ મેળવો'}
            </h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              {lang === 'en'
                ? 'Join our mailing list to receive verified social program summaries, distribution videos, and health camps invitations.'
                : 'પુષ્પક ફાઉન્ડેશનના આગામી શિબિરો અને સિદ્ધિઓના સેવા રિપોર્ટ સીધા આપના ઈમેલ પર મેળવવા માટે સબ્સ્ક્રાઇબ કરો.'}
            </p>
          </div>
          
          <div className="w-full lg:w-96 flex-shrink-0">
            {subSuccess ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-semibold rounded-xl text-center flex flex-col items-center gap-2">
                <Sparkles className="h-5 w-5 text-emerald-500 animate-spin-slow" />
                <span>
                  {lang === 'en' ? 'Subscribed successfully! Thank you.' : 'સફળતાપૂર્વક સબ્સ્ક્રાઇબ થયું છે! આભાર.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder={lang === 'en' ? 'Enter Email Address' : 'ઈમેલ એડ્રેસ લખો'}
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  className="flex-grow px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#070F1E] text-slate-900 dark:text-white text-sm outline-none focus:border-amber-500/50"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs rounded-xl hover:shadow-md cursor-pointer transition-transform"
                >
                  {lang === 'en' ? 'Subscribe' : 'સબ્સ્ક્રાઇબ'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FULL-SIZE DETAIL DIALOG MODAL ON CLICK */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-white dark:bg-[#0B192C] w-full max-w-3xl rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col text-left">
            
            {/* Modal Title / Top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                {lang === 'en' ? selectedArticle.categoryEn : selectedArticle.categoryGu}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Context Body */}
            <div className="overflow-y-auto p-6 md:p-8 space-y-6">
              
              {/* Date & Main Title */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono font-semibold">
                  <Calendar className="h-3.5 w-3.5 text-amber-500" />
                  <span>{selectedArticle.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-sans font-extrabold text-slate-900 dark:text-white leading-tight">
                  {lang === 'en' ? selectedArticle.titleEn : selectedArticle.titleGu}
                </h2>
              </div>

              {/* News Banner */}
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-100 dark:border-slate-800 shadow">
                <img
                  src={selectedArticle.image}
                  alt={lang === 'en' ? selectedArticle.titleEn : selectedArticle.titleGu}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main Text Content */}
              <p className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-200 border-l-4 border-amber-500 pl-4 italic">
                {lang === 'en' ? selectedArticle.summaryEn : selectedArticle.summaryGu}
              </p>

              <div className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans space-y-4">
                <p>
                  {lang === 'en' ? selectedArticle.contentEn : selectedArticle.contentGu}
                </p>
              </div>

            </div>

            {/* Bottom Closing bar */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-[#070F1E] border-t border-slate-100 dark:border-slate-800/80 text-right">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 text-white rounded-lg text-xs font-bold cursor-pointer"
              >
                {lang === 'en' ? 'Close Article' : 'પાછા જાઓ'}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
