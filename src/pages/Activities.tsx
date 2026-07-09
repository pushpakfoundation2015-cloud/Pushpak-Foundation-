import React from 'react';
import { Page, Language } from '../types';
import { translations, activityDetails } from '../translations';
import { BookOpen, Award, GraduationCap, Scissors, HeartPulse, ShieldAlert, ArrowLeft, ArrowRight, HandHeart, CheckCircle } from 'lucide-react';

interface ActivitiesProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  lang: Language;
}

export const Activities: React.FC<ActivitiesProps> = ({
  activePage,
  setActivePage,
  lang,
}) => {
  const t = translations[lang];

  // Map icons to pages
  const getIcon = (pageId: string) => {
    switch (pageId) {
      case 'education':
        return <GraduationCap className="h-6 w-6 text-amber-500" />;
      case 'scholarship':
        return <Award className="h-6 w-6 text-amber-500" />;
      case 'skill-development':
        return <BookOpen className="h-6 w-6 text-amber-500" />;
      case 'women-empowerment':
        return <Scissors className="h-6 w-6 text-amber-500" />;
      case 'health-awareness':
        return <HeartPulse className="h-6 w-6 text-amber-500" />;
      case 'nt-dnt':
        return <ShieldAlert className="h-6 w-6 text-amber-500" />;
      default:
        return <BookOpen className="h-6 w-6 text-amber-500" />;
    }
  };

  const handleBackToAll = () => {
    setActivePage('activities');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. RENDER SUB-PAGE DEEP DIVE (If the active page is a specific sub-activity)
  if (activePage !== 'activities') {
    const detail = activityDetails.find((d) => d.pageId === activePage);

    if (detail) {
      return (
        <div className="w-full">
          {/* Header */}
          <section className="relative py-12 bg-gradient-to-br from-slate-900 via-[#0B192C] to-blue-950 text-white text-center px-4 border-b border-amber-500/20">
            <div className="absolute inset-0 bg-amber-500/5 pointer-events-none blur-3xl"></div>
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
              <button
                onClick={handleBackToAll}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 mb-4 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full cursor-pointer transition-all"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>{t.btnBackToActivities}</span>
              </button>
              
              <div className="p-3 bg-amber-500/15 rounded-xl border border-amber-500/20 mb-2">
                {getIcon(detail.pageId)}
              </div>

              <h1 className="text-2xl md:text-4xl font-sans font-bold text-white tracking-tight">
                {lang === 'en' ? detail.titleEn : detail.titleGu}
              </h1>
            </div>
          </section>

          {/* Deep dive content */}
          <section className="py-16 bg-white dark:bg-[#0B192C] px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left detail body */}
              <div className="lg:col-span-7 text-left flex flex-col gap-6">
                <div>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                    {lang === 'en' ? 'PROGRAM REPORT' : 'અહેવાલ અને ઝાંખી'}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 dark:text-white mt-1">
                    {lang === 'en' ? 'Core On-ground Scope & Objectives' : 'પ્રત્યક્ષ પ્રવૃત્તિ અને ભવિષ્યની રૂપરેખા'}
                  </h2>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                  {lang === 'en' ? detail.descriptionEn : detail.descriptionGu}
                </p>

                {/* Specific features display based on what sub-page it is */}
                <div className="mt-4 p-6 bg-slate-50 dark:bg-[#070F1E] rounded-2xl border border-amber-500/10">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500" />
                    <span>{lang === 'en' ? 'Key Milestones Accomplished' : 'કાર્યના મુખ્ય સિદ્ધિઓ'}</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {(lang === 'en' ? detail.highlightsEn : detail.highlightsGu).map((high, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                        <span>{high}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => {
                      setActivePage('donate');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs rounded-full shadow cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <HandHeart className="h-4 w-4" />
                    <span>{lang === 'en' ? `Support ${detail.titleEn}` : `${detail.titleGu} માટે દાન કરો`}</span>
                  </button>
                  <button
                    onClick={handleBackToAll}
                    className="px-6 py-3 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold rounded-full cursor-pointer transition-colors"
                  >
                    {t.btnBackToActivities}
                  </button>
                </div>
              </div>

              {/* Right Illustration/Banner */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 shadow-xl aspect-square bg-slate-100">
                  <img
                    src={detail.image}
                    alt={lang === 'en' ? detail.titleEn : detail.titleGu}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5 text-left">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                      {t.brandName}
                    </span>
                    <h4 className="text-white text-base font-bold">
                      {lang === 'en' ? detail.titleEn : detail.titleGu}
                    </h4>
                  </div>
                </div>

                {/* Additional Sidebar Info */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0B192C]/5 to-amber-500/5 border border-amber-500/20 text-left">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                    {lang === 'en' ? 'How to Benefit / Apply?' : 'કેવી રીતે લાભ મેળવવો?'}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-sans">
                    {lang === 'en'
                      ? 'Are you or anyone you know living around Kheda district in need of assistance regarding this program? Reach out directly via our contact helpline or visit the Pushpak Foundation main center in Nadiad with credentials.'
                      : 'જો આપ અથવા આપની ઓળખમાં કોઈ વ્યક્તિ આ કાર્યક્રમ હેઠળ મદદ મેળવવા ઈચ્છતું હોય તો સીધો નડિયાદ મુખ્ય મથકનો અથવા સંપર્ક નંબર પર કોલ કરીને સંપર્ક કરી શકો છો.'}
                  </p>
                  <button
                    onClick={() => {
                      setActivePage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mt-4 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                  >
                    {lang === 'en' ? 'Get Contact Guidelines' : 'સંપર્ક માર્ગદર્શન મેળવો'} →
                  </button>
                </div>
              </div>

            </div>
          </section>
        </div>
      );
    }
  }

  // 2. RENDER MAIN ACTIVITIES DIRECTORY OVERVIEW (Default view)
  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-[#0B192C] to-blue-950 text-white text-center px-4 overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-amber-500/5 pointer-events-none blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{lang === 'en' ? 'WHAT WE DO' : 'અમારી સેવાની ધારા'}</span>
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            {t.latestActivitiesTitle}
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            {lang === 'en' 
              ? 'Comprehensive view of our ongoing operations driving educational and skill equity.'
              : 'ખેડા અને નડિયાદ પંથકમાં કાર્યરત અમારી મુખ્ય સામાજિક કલ્યાણ પ્રવૃત્તિઓનો અહેવાલ.'}
          </p>
        </div>
      </section>

      {/* Main Grid View */}
      <section className="py-20 bg-white dark:bg-[#0B192C] px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {activityDetails.map((act) => (
            <div
              key={act.id}
              className="group bg-slate-50 dark:bg-[#070F1E] rounded-2xl overflow-hidden border border-amber-500/10 shadow-sm hover:shadow-xl hover:border-amber-500/30 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-200">
                <img
                  src={act.image}
                  alt={lang === 'en' ? act.titleEn : act.titleGu}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 p-2 bg-slate-950/80 rounded-lg text-amber-400 border border-slate-800">
                  {getIcon(act.pageId)}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans group-hover:text-amber-500 transition-colors duration-150 leading-snug">
                  {lang === 'en' ? act.titleEn : act.titleGu}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-3 leading-relaxed font-sans line-clamp-3 flex-grow">
                  {lang === 'en' ? act.descriptionEn : act.descriptionGu}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setActivePage(act.pageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400 cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'Open Deep Dive Report' : 'વિગતવાર અહેવાલ જુઓ'}</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
