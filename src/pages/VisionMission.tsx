import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ShieldCheck, Compass, Eye, HeartHandshake, CheckCircle2, Award } from 'lucide-react';

interface VisionMissionProps {
  lang: Language;
}

export const VisionMission: React.FC<VisionMissionProps> = ({ lang }) => {
  const t = translations[lang];

  const pillars = [
    {
      titleEn: "Education (શિક્ષણ)",
      titleGu: "ગુણવત્તાસભર શિક્ષણ",
      descEn: "Opening academic pathways, career seminars, and providing school books and scholarships to underprivileged children.",
      descGu: "ગરીબ અને મધ્યમવર્ગીય પરિવારોના બાળકોને શિક્ષણ સામગ્રી પૂરી પાડવી, સ્કોલરશિપ અને વ્યવસાયિક માર્ગદર્શન આપવું."
    },
    {
      titleEn: "Values (સંસ્કાર)",
      titleGu: "સંસ્કાર સિંચન",
      descEn: "Conducting festival shibirs, ethical seminars, and character-building workshops for holistic child development.",
      descGu: "બાળકોમાં માત્ર ભણતર જ નહીં પણ સંસ્કાર, નૈતિકતા અને દેશભક્તિની ભાવના દ્રઢ થાય તે માટેના વિશેષ અભિયાનો."
    },
    {
      titleEn: "Women Self-Reliance (મહિલા સ્વાવલંબન)",
      titleGu: "મહિલા સ્વાવલંબન",
      descEn: "Vocational sewing classes, micro-finance awareness, self-help groups, and providing free industrial stitching tools.",
      descGu: "બહેનો માટે મફત સીવણ-કટીંગ તાલીમ વર્ગ ચલાવવા અને સફળ તાલીમાર્થી બહેનોને ઘરબેઠા રોજગારી માટે સિલાઈ મશીન અર્પણ કરવા."
    },
    {
      titleEn: "Community Development (સમાજ વિકાસ)",
      titleGu: "સમગ્ર સામાજિક કલ્યાણ",
      descEn: "Targeted support for NT-DNT settlements, general medical diagnostic drives, and environmental tree plantations.",
      descGu: "વિચરતી-વિમુક્ત જાતિઓનું પુનર્વસન, સરકારી લાયકાત દસ્તાવેજો અપાવવા, મફત આરોગ્ય શિબિર અને વૃક્ષારોપણ પ્રવૃત્તિઓ."
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-[#0B192C] to-blue-950 text-white text-center px-4 overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-amber-500/5 pointer-events-none blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{lang === 'en' ? 'OUR BLUEPRINT' : 'અમારો સેવા સંકલ્પ'}</span>
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            {t.navVisionMission}
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            {lang === 'en' 
              ? 'Our comprehensive long-term roadmap towards an educated, self-reliant, and healthy society.'
              : 'એક અક્ષરજ્ઞાની, આર્થિક રીતે સ્વતંત્ર અને સંસ્કારી સમાજના નિર્માણ માટેનો અમારો દાર્શનિક નકશો.'}
          </p>
        </div>
      </section>

      {/* Vision & Mission Double Grid */}
      <section className="py-20 bg-white dark:bg-[#0B192C] px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Mission Left Card */}
          <div className="relative overflow-hidden bg-slate-50 dark:bg-[#070F1E] rounded-3xl p-8 md:p-12 border border-amber-500/10 shadow-md flex flex-col text-left justify-between">
            <div className="flex flex-col gap-5">
              <div className="p-4 bg-amber-500/10 rounded-2xl w-fit text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Compass className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 dark:text-white">
                {t.secMissionTitle}
              </h2>
              <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-sans mt-2">
                {t.secMissionDesc}
              </p>
              
              <div className="space-y-3.5 mt-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Provide modern job-ready skills' : 'રોજગારીલક્ષી વ્યાવસાયિક તાલીમનું આયોજન કરવું'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Integrate NT-DNT tribes into main stream' : 'વિચરતી જાતિઓના બાળકોને મુખ્ય શૈક્ષણિક પ્રવાહમાં જોડવા'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Deliver transparent healthcare access' : 'પાયાની આરોગ્ય સગવડો ગામડે-ગામડે પહોંચાડવી'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Right Card */}
          <div className="relative overflow-hidden bg-slate-50 dark:bg-[#070F1E] rounded-3xl p-8 md:p-12 border border-amber-500/10 shadow-md flex flex-col text-left justify-between">
            <div className="flex flex-col gap-5">
              <div className="p-4 bg-blue-500/10 rounded-2xl w-fit text-blue-600 dark:text-blue-400 border border-blue-500/20">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 dark:text-white">
                {t.secVisionTitle}
              </h2>
              <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-sans mt-2">
                {t.secVisionDesc}
              </p>

              <div className="space-y-3.5 mt-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Build 100% literate rural child clusters' : '૧૦૦% શૈક્ષણિક સાક્ષરતા ગ્રામીણ વિસ્તારોમાં લાવવી'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Every rural mother with independent income source' : 'દરેક વિધવા અને ગરીબ માતા માટે આજીવિકાની સુરક્ષા'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'An equal society without social bias or poverty' : 'ભેદભાવ રહિત, સમરસ અને સ્વાવલંબી સમાજનું સ્વપ્ન'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Philosophy Callout (Bilingual quote block) */}
      <section className="py-16 bg-gradient-to-br from-[#0B192C] to-slate-900 text-white text-center px-4 relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
          <Award className="h-10 w-10 text-amber-400" />
          <h3 className="text-xl md:text-3xl font-sans font-bold italic leading-relaxed max-w-3xl">
            {lang === 'en'
              ? '"True social growth cannot happen when any part of our society is left in the dark. We work for the last person standing."'
              : '"ખરો સામાજિક વિકાસ ત્યારે જ કહી શકાય જ્યારે સમાજનો છેવાડાનો માનવી પણ સન્માનભેર જીવી શકે. અમારો અવિરત પ્રયાસ એવા લોકો સુધી પહોંચવાનો છે."'}
          </h3>
          <span className="text-xs uppercase font-mono tracking-widest text-amber-500 font-bold block mt-2">
            — Pushpak Foundation Board
          </span>
        </div>
      </section>

      {/* Four Guiding Pillars Grid */}
      <section className="py-20 bg-white dark:bg-[#0B192C] px-4">
        <div className="max-w-7xl mx-auto text-center flex flex-col gap-3 mb-16">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
            {lang === 'en' ? 'OUR STRATEGIC FOCUS' : 'અમારા ચાર મુખ્ય આધારસ્તંભો'}
          </span>
          <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white">
            {lang === 'en' ? 'The Foundation of All Our Operations' : 'શિક્ષણ, સેવા અને સંસ્કારનો વિવેક સમન્વય'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-2"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {pillars.map((pil, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-[#070F1E] rounded-2xl p-6 border border-amber-500/10 shadow-sm hover:border-amber-500/20 transition-all duration-300"
            >
              <div className="text-sm font-sans font-extrabold text-amber-500 mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">
                {lang === 'en' ? pil.titleEn : pil.titleGu}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-3 leading-relaxed font-sans">
                {lang === 'en' ? pil.descEn : pil.descGu}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
