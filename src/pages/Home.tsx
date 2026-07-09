import React, { useState, useEffect } from 'react';
import { Page, Language } from '../types';
import { translations, galleryItems, newsArticles } from '../translations';
import { StatCounters } from '../components/StatCounters';
import { HandHeart, Users, BookOpen, ShieldCheck, Heart, ArrowRight, MessageSquare, Quote, Play } from 'lucide-react';

interface HomeProps {
  setActivePage: (page: Page) => void;
  lang: Language;
}

export const Home: React.FC<HomeProps> = ({ setActivePage, lang }) => {
  const t = translations[lang];
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      nameEn: "Daxaben Patel",
      nameGu: "દક્ષાબેન પટેલ",
      roleEn: "Sewing Beneficiary, Narsanda",
      roleGu: "સીવણ તાલીમ લાભાર્થી, નરસાંડા",
      quoteEn: "After losing my husband, I struggled to feed my two daughters. Pushpak Foundation gave me 3 months of free tailoring training and an automatic sewing machine. Today, I earn ₹8,000 monthly stitching dresses. They literally saved my family.",
      quoteGu: "પતિના અવસાન પછી બે દીકરીઓનું ગુજરાન ચલાવવું મુશ્કેલ હતું. પુષ્પક ફાઉન્ડેશને મને ૩ મહિના ફ્રી સિલાઈ તાલીમ આપી અને સિલાઈ મશીન આપ્યું. આજે હું દર મહિને ૮૦૦૦ હજાર રૂપિયા કમાઉં છું. આ સંસ્થાએ મારા પરિવારને નવું જીવન આપ્યું."
    },
    {
      nameEn: "Ritesh Harijan",
      nameGu: "હરીજન રિતેશ",
      roleEn: "Engineering Student, Nadiad",
      roleGu: "એન્જિનિયરિંગ વિદ્યાર્થી, નડિયાદ",
      quoteEn: "I belong to the NT-DNT community. Nobody in my family has ever finished school. Pushpak Trust guided me to get the central government scholarship and paid my remaining books fees. I am now in my final year of computer engineering.",
      quoteGu: "હું વિચરતી જાતિમાંથી આવું છું અને મારા પરિવારમાં કોઈ ક્યારેય શાળાએ ગયું નથી. પુષ્પક ટ્રસ્ટે મને સરકારી સ્કોલરશિપ મેળવવામાં સંપૂર્ણ મદદ કરી અને ભણતરનો બીજો ખર્ચ ઉપાડ્યો. આજે હું કોમ્પ્યુટર એન્જિનિયરિંગના છેલ્લા વર્ષમાં છું."
    },
    {
      nameEn: "Lilaben Solanki",
      nameGu: "લીલાબેન સોલંકી",
      roleEn: "Local Self-Help Leader, Kheda",
      roleGu: "મહિલા બચત જૂથ અગ્રણી, ખેડા",
      quoteEn: "The medical camps and sanitary hygiene seminars organized by Pushpak Foundation in our village brought massive awareness. Women who used to feel shy talking about reproductive health now attend camps confidently.",
      quoteGu: "અમારા ગામમાં પુષ્પક ફાઉન્ડેશન દ્વારા યોજાયેલા મેડિકલ કેમ્પ અને સેનિટરી સેમિનારોથી ભારે જાગૃતિ આવી છે. જે સ્ત્રીઓ સ્વાસ્થ્ય અંગે વાત કરતા શરમાતી હતી તે હવે ખુલ્લી ચર્ચા કરી કેમ્પનો લાભ લે છે."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#050C16] via-[#0E1E31] to-[#1E293B] text-white overflow-hidden py-20 px-4">
        {/* Luxury Glowing Background shapes */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/15 text-amber-400 text-xs font-bold uppercase tracking-widest w-fit shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>{t.registration}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-sans font-extrabold tracking-tight leading-tight">
              {lang === 'en' ? 'Service to Humanity is' : 'સેવા દ્વારા સમાજમાં'} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
                {t.heroTitle}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t.heroSubtitle}
            </p>

            <div className="text-sm font-semibold text-amber-400 font-mono tracking-wider">
              {t.tagline}
            </div>

            {/* Premium Interactive Hero CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <button
                onClick={() => {
                  setActivePage('donate');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm shadow-[0_4px_20px_rgba(234,88,12,0.3)] hover:shadow-[0_4px_25px_rgba(234,88,12,0.4)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <HandHeart className="h-4 w-4" />
                <span>{t.navDonate}</span>
              </button>
              
              <button
                onClick={() => {
                  setActivePage('volunteer');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 shadow-lg"
              >
                <Users className="h-4 w-4 text-amber-400" />
                <span>{t.btnVolunteer}</span>
              </button>
            </div>
          </div>

          {/* Hero Right Interactive Card (Bilingual quick stats card) */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl border border-amber-500/25 bg-slate-950/50 backdrop-blur-xl p-8 shadow-[0_0_50px_rgba(212,175,55,0.12)] overflow-hidden group hover:border-[#D4AF37]/50 transition-all duration-500">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500"></div>
              
              {/* Premium Flower SVG graphic representing Pushpak */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg shadow-orange-500/20">
                  <Heart className="h-6 w-6 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-sans text-white">{t.brandName}</h3>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-widest">{t.brandLocation}</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-xs font-bold text-amber-400 uppercase tracking-widest mb-1.5">
                    {lang === 'en' ? 'OUR MOTTO' : 'અમારો સંકલ્પ'}
                  </span>
                  <p className="text-sm italic font-medium text-white/90">
                    {lang === 'en' 
                      ? '"To serve with pure devotion, educating children, inspiring cultures, and cultivating self-reliance in rural Kheda."'
                      : '"શિક્ષણ, સેવા અને નૈતિક સંસ્કારોના પ્રસાર દ્વારા ગામડાઓ અને વંચિત જાતિઓમાં સ્વાવલંબન પ્રગટાવવું."'}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
                    <span className="block text-[10px] text-amber-400/80 font-bold uppercase tracking-wider">{lang === 'en' ? 'ESTABLISHED' : 'સ્થાપના'}</span>
                    <span className="text-sm font-bold text-white mt-1 block">30 June 2015</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
                    <span className="block text-[10px] text-amber-400/80 font-bold uppercase tracking-wider">{lang === 'en' ? 'GOVT REG' : 'નોંધણી ક્રમાંક'}</span>
                    <span className="text-sm font-bold text-white mt-1 block">F/2365/Kheda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATS SECTION (Counter Animation) */}
      <section className="py-12 bg-slate-50 dark:bg-[#070F1E] px-4 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto">
          <StatCounters lang={lang} />
        </div>
      </section>

      {/* 3. ABOUT TRUST INTRODUCTION */}
      <section className="py-20 bg-white dark:bg-[#0B192C] px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl aspect-[4/3] group bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
                alt="Community service camp"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{lang === 'en' ? 'Since 2015' : '૨૦૧૫ થી સતત સક્રિય'}</span>
                <h4 className="text-lg font-bold text-white mt-1">
                  {lang === 'en' ? 'Empowering Rural Gujarat' : 'ગ્રામીણ ગુજરાતનું સશક્તિકરણ'}
                </h4>
              </div>
            </div>
            {/* Little floating detail card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-orange-600 text-white p-5 rounded-xl shadow-2xl hidden sm:block max-w-[210px] border border-amber-400/30">
              <span className="block text-3xl font-extrabold font-sans">10+</span>
              <span className="text-xs font-bold leading-tight block mt-1 tracking-wider uppercase">
                {lang === 'en' ? 'Years of Local Social Dev' : 'વર્ષોથી લોકલ લેવલે સેવારત'}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 text-left flex flex-col gap-5">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
              {t.secAboutTitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 dark:text-white tracking-tight">
              {lang === 'en' ? 'Nurturing Potential, Building Self-Reliance' : 'સેવા, શિક્ષણ અને સંસ્કાર દ્વારા જનસેવા'}
            </h2>
            <div className="border-l-4 border-amber-500 pl-4 py-1">
              <p className="text-sm text-slate-600 dark:text-slate-300 italic font-medium">
                {lang === 'en' 
                  ? '"Registered under registration F/2365/Kheda, actively striving for sustainable upliftment in Nadiad and neighboring rural sectors."'
                  : '"નોંધણી ક્રમાંક F/2365/ખેડા હેઠળ, નડિયાદ અને આજુબાજુના વિસ્તારોમાં વંચિત પરિવારોને ઉજ્જવળ ભવિષ્ય આપવા મથતું ટ્રસ્ટ."'}
              </p>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-sans">
              {t.secAboutDesc}
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 group cursor-pointer"
              >
                <span>{t.btnReadMore}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MISSION & VISION SPLIT SECTION */}
      <section className="py-20 bg-slate-50 dark:bg-[#070F1E] px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Mission Card */}
          <div className="relative overflow-hidden bg-white dark:bg-[#0B192C] rounded-2xl p-8 border border-amber-500/20 shadow-lg group hover:border-amber-500/40 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl text-blue-900 dark:text-blue-400">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-sans text-slate-900 dark:text-white">{t.secMissionTitle}</h3>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">{lang === 'en' ? 'Our On-Ground Purpose' : 'અમારું કાર્ય લક્ષ્ય'}</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-left">
              {t.secMissionDesc}
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative overflow-hidden bg-white dark:bg-[#0B192C] rounded-2xl p-8 border border-amber-500/20 shadow-lg group hover:border-amber-500/40 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 bg-orange-50 dark:bg-orange-950/40 rounded-xl text-orange-600 dark:text-orange-400">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-sans text-slate-900 dark:text-white">{t.secVisionTitle}</h3>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">{lang === 'en' ? 'Our Future Dream' : 'અમારું આદર્શ સ્વપ્ન'}</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-left">
              {t.secVisionDesc}
            </p>
          </div>

        </div>
      </section>

      {/* 5. FEATURED ACTIVITIES GRID */}
      <section className="py-20 bg-white dark:bg-[#0B192C] px-4">
        <div className="max-w-7xl mx-auto text-center flex flex-col gap-4 mb-16">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
            {t.latestActivitiesTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 dark:text-white">
            {t.latestActivitiesSubtitle}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-2"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Activity 1: Education */}
          <div className="group bg-slate-50 dark:bg-[#070F1E] rounded-2xl overflow-hidden border border-amber-500/20 shadow-lg hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col">
            <div className="relative aspect-video overflow-hidden bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800"
                alt="Education Camp"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-amber-400/30 shadow-md">
                {lang === 'en' ? 'Education' : 'શિક્ષણ'}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans group-hover:text-amber-500 transition-colors duration-150">
                {lang === 'en' ? 'Education Awareness Seminars' : 'શિક્ષણ જાગૃતિ શિબિરો'}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-2.5 leading-relaxed font-sans flex-grow">
                {lang === 'en' 
                  ? 'Supporting rural schools with books distribution, teaching aids, career mentoring, and morals orientation classes.'
                  : 'ગરીબ બાળકોને મફત સ્કૂલ કીટ વિતરણ, ઉનાળુ વર્ગો અને નૈતિક સંસ્કારોના સિંચન માટે ચલાવાતી કાયમી શિક્ષણ યોજના.'}
              </p>
              <button
                onClick={() => {
                  setActivePage('education');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400 transition-colors cursor-pointer"
              >
                <span>{t.btnReadMore}</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Activity 2: Women Empowerment */}
          <div className="group bg-slate-50 dark:bg-[#070F1E] rounded-2xl overflow-hidden border border-amber-500/20 shadow-lg hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col">
            <div className="relative aspect-video overflow-hidden bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800"
                alt="Women Sewing Class"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-amber-400/30 shadow-md">
                {lang === 'en' ? 'Empowerment' : 'સશક્તિકરણ'}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans group-hover:text-amber-500 transition-colors duration-150">
                {lang === 'en' ? 'Free Sewing & Stitching Classes' : 'સીવણ તાલીમ અને આત્મનિર્ભરતા'}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-2.5 leading-relaxed font-sans flex-grow">
                {lang === 'en' 
                  ? 'Uplifting rural women and widow mothers with professional cutting, tailoring, and embroidery workshops.'
                  : 'બહેનોને તાલીમ આપી ઘરબેઠા આજીવિકા મેળવી આપતો સીવણ વર્ગ અને ઉત્કૃષ્ટ બહેનોને સિલાઈ મશીનનું વિનામૂલ્યે વિતરણ.'}
              </p>
              <button
                onClick={() => {
                  setActivePage('women-empowerment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400 transition-colors cursor-pointer"
              >
                <span>{t.btnReadMore}</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Activity 3: NT-DNT Welfare */}
          <div className="group bg-slate-50 dark:bg-[#070F1E] rounded-2xl overflow-hidden border border-amber-500/20 shadow-lg hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col">
            <div className="relative aspect-video overflow-hidden bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
                alt="Community Welfare"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-amber-400/30 shadow-md">
                {lang === 'en' ? 'NT-DNT Community' : 'સમુદાય સેવા'}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans group-hover:text-amber-500 transition-colors duration-150">
                {lang === 'en' ? 'Nomadic Tribes Upliftment' : 'વિચરતી જાતિ વિકાસ અભિયાન'}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-2.5 leading-relaxed font-sans flex-grow">
                {lang === 'en' 
                  ? 'Assisting Nomadic and De-Notified Tribes with Aadhaar/Ration card credentials and primary school enrollments.'
                  : 'મૂળભૂત હકોથી વંચિત વિચરતી-વિમુક્ત જાતિના પરિવારોને સરકારી ઓળખ પત્રો અને કલ્યાણકારી લાભો અપાવવા માટેનું સક્રિય કાર્ય.'}
              </p>
              <button
                onClick={() => {
                  setActivePage('nt-dnt');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400 transition-colors cursor-pointer"
              >
                <span>{t.btnReadMore}</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* View All button */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              setActivePage('activities');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-full border-2 border-amber-500 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:text-white font-bold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            {lang === 'en' ? 'Explore All Activities' : 'બધી સામાજિક પ્રવૃત્તિઓ જુઓ'}
          </button>
        </div>
      </section>

      {/* 6. TESTIMONIALS SLIDER SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#050C16] via-[#0E1E31] to-[#1E293B] text-white px-4 relative overflow-hidden border-t border-b border-amber-500/10">
        <div className="absolute inset-0 bg-amber-500/5 pointer-events-none blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <div className="p-4 bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 rounded-full mb-6 shadow-lg shadow-amber-500/5">
            <Quote className="h-8 w-8 text-amber-400 fill-amber-400/20" />
          </div>

          <h2 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight mb-2">
            {t.testimonialsTitle}
          </h2>
          <span className="text-xs text-amber-400 font-bold uppercase tracking-widest block mb-10">
            {t.testimonialsSubtitle}
          </span>

          {/* Sliding Testimonial Content */}
          <div className="relative min-h-[180px] w-full flex items-center justify-center">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center px-4 md:px-12 ${
                  activeTestimonial === index 
                    ? 'opacity-100 translate-y-0 scale-100 z-10' 
                    : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                }`}
              >
                <p className="text-base md:text-lg italic text-slate-200 leading-relaxed max-w-3xl font-sans">
                  "{lang === 'en' ? test.quoteEn : test.quoteGu}"
                </p>
                <h4 className="text-lg font-bold text-amber-400 mt-6 tracking-wide">
                  {lang === 'en' ? test.nameEn : test.nameGu}
                </h4>
                <span className="text-xs text-slate-400 mt-1.5 font-semibold tracking-wider uppercase">
                  {lang === 'en' ? test.roleEn : test.roleGu}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonial Select Dots */}
          <div className="flex items-center gap-2.5 mt-8 relative z-20">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === i ? 'w-8 bg-amber-400' : 'w-2.5 bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              ></button>
            ))}
          </div>

        </div>
      </section>

      {/* 7. QUICK LATEST NEWS / EVENTS RECAP */}
      <section className="py-20 bg-[#FCFBF8] dark:bg-[#070F1E] px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest block">
              {t.newsTitle}
            </span>
            <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white tracking-tight mt-2">
              {t.newsSubtitle}
            </h2>
          </div>
          <button
            onClick={() => {
              setActivePage('news');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400 transition-colors cursor-pointer"
          >
            <span>{lang === 'en' ? 'View All News' : 'બધા સમાચાર જુઓ'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {newsArticles.slice(0, 3).map((art) => (
            <div
              key={art.id}
              className="bg-white dark:bg-[#0B192C] rounded-2xl overflow-hidden border border-amber-500/20 shadow-lg hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                <img
                  src={art.image}
                  alt={lang === 'en' ? art.titleEn : art.titleGu}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 dark:bg-[#070F1E] px-2.5 py-1 rounded-full border border-amber-500/30">
                  {lang === 'en' ? art.categoryEn : art.categoryGu}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[11px] font-bold font-mono text-amber-600 dark:text-amber-400 block mb-1">
                  {art.date}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">
                  {lang === 'en' ? art.titleEn : art.titleGu}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-2.5 leading-relaxed line-clamp-3">
                  {lang === 'en' ? art.summaryEn : art.summaryGu}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <button
                    onClick={() => {
                      setActivePage('news');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400 cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'Read Full Article' : 'સંપૂર્ણ અહેવાલ વાંચો'}</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CALL TO ACTION - HELP US (DONATE & VOLUNTEER) */}
      <section className="py-24 bg-white dark:bg-[#0B192C] px-4">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/30 p-8 md:p-12 text-center relative overflow-hidden group shadow-xl">
          <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-4">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
              {lang === 'en' ? 'SUPPORT THE MOVEMENT' : 'સેવાના સહભાગી બનો'}
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 dark:text-white tracking-tight">
              {t.donateCTATitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
              {t.donateCTASubtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <button
                onClick={() => {
                  setActivePage('donate');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm shadow-[0_4px_20px_rgba(245,158,11,0.25)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                {t.btnDonateNow}
              </button>
              
              <button
                onClick={() => {
                  setActivePage('volunteer');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-full border-2 border-slate-800 dark:border-white/20 text-slate-800 dark:text-white font-bold text-sm hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                {t.btnVolunteer}
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
