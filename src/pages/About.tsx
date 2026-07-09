import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ShieldCheck, Target, Heart, Award, Users, CheckCircle, Calendar, FileText } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang];

  const values = [
    {
      titleEn: "Pure Dedication (સેવા ભાવ)",
      titleGu: "નિઃસ્વાર્થ સેવા ભાવ",
      descEn: "We believe that serving people is serving God. Our projects are executed with total empathy.",
      descGu: "અમારું માનવું છે કે જનસેવા એ જ પ્રભુસેવા છે. અમારા તમામ કાર્યો સંવેદનશીલતા અને નિષ્ઠા સાથે થાય છે."
    },
    {
      titleEn: "Full Transparency (પારદર્શકતા)",
      titleGu: "સંપૂર્ણ પારદર્શકતા",
      descEn: "Every single rupee donated is logged and utilized directly for beneficiary welfare programs.",
      descGu: "દરેક રૂપિયાના દાનનો સચોટ હિસાબ રાખવામાં આવે છે અને તે સીધો જ લાભાર્થીઓના ઉત્કર્ષ પાછળ વપરાય છે."
    },
    {
      titleEn: "Dignity & Inclusivity (સન્માન)",
      titleGu: "સન્માન અને સર્વસમાવેશકતા",
      descEn: "We support individuals irrespective of caste, religion, or community, restoring their dignity.",
      descGu: "જ્ઞાતિ, ધર્મ કે લિંગના ભેદભાવ વિના દરેક જરૂરિયાતમંદ નાગરિકને સમાન અધિકાર અને સન્માન આપવામાં આવે છે."
    }
  ];

  const trustees = [
    {
      nameEn: "Pankajbhai Patel",
      nameGu: "પંકજભાઈ પટેલ",
      roleEn: "Managing Trustee",
      roleGu: "મેનેજિંગ ટ્રસ્ટી",
      descEn: "Leading with vision and deep social commitment since 2015.",
      descGu: "૨૦૧૫ થી દૂરંદેશી અને ઊંડા સામાજિક સમર્પણ સાથે ટ્રસ્ટનું નેતૃત્વ કરી રહ્યા છે."
    },
    {
      nameEn: "Dineshbhai Shah",
      nameGu: "દિનેશભાઈ શાહ",
      roleEn: "Co-Trustee & Accountant",
      roleGu: "સહ-ટ્રસ્ટી અને ઓડિટર",
      descEn: "Ensuring high accountability and smooth on-ground operations.",
      descGu: "નાણાકીય શિસ્ત, પારદર્શકતા અને જમીની વ્યવસ્થાપનની સંભાળ રાખે છે."
    },
    {
      nameEn: "Smt. Shardaben Parmar",
      nameGu: "શ્રીમતી શારદાબેન પરમાર",
      roleEn: "Women Welfare Advisor",
      roleGu: "મહિલા કલ્યાણ પરામર્શક",
      descEn: "Directing sewing centers and women empowerment campaigns.",
      descGu: "સીવણ તાલીમ કેન્દ્રો અને બહેનોના કલ્યાણકારી કાર્યક્રમોનું નિર્દેશન કરે છે."
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-[#0B192C] to-blue-950 text-white text-center px-4 overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-amber-500/5 pointer-events-none blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{t.established}</span>
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            {lang === 'en' ? 'Our Foundation History' : 'પુષ્પક ફાઉન્ડેશનનો ઇતિહાસ'}
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            {lang === 'en' 
              ? 'Serving marginalized rural communities and empowering women in Nadiad since 2015.'
              : '૨૦૧૫ થી નડિયાદ અને આસપાસના ગ્રામ્ય વિસ્તારોમાં પીડિતો અને વંચિતોની સેવામાં સમર્પિત યાત્રા.'}
          </p>
        </div>
      </section>

      {/* History deep dive */}
      <section className="py-20 bg-white dark:bg-[#0B192C] px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 text-left flex flex-col gap-5">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
              {lang === 'en' ? 'HOW WE STARTED' : 'અમારી શરૂઆત'}
            </span>
            <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white">
              {lang === 'en' ? 'Over a Decade of Pure Grassroots Action' : 'છેલ્લા ૧૦ વર્ષથી અવિરત જનસેવા યજ્ઞ'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-sans">
              {lang === 'en'
                ? "Pushpak Foundation was born out of a collective realization by local citizens in Nadiad, Gujarat. On June 30, 2015, under the registration number F/2365/Kheda, we initiated small tutoring batches for children in local slums and distributed blankets to nomadic tribes. Sensing a massive need for skill-based survival, we launched free sewing and tailoring courses in Narsanda, helping widows earn with dignity."
                : "પુષ્પક ફાઉન્ડેશનનો ઉદય નડિયાદના સેવાભાવી નાગરિકોના એક સામૂહિક વિચારબીજમાંથી થયો હતો. ૩૦ જૂન ૨૦૧૫ ના રોજ ખેડા જિલ્લા પંથકમાં નોંધણી ક્રમાંક F/2365/ખેડા હેઠળ ટ્રસ્ટની સ્થાપના કરવામાં આવી. શરૂઆતમાં ઝૂંપડપટ્ટીના બાળકો માટે નાના શૈક્ષણિક વર્ગો ચલાવાતા અને શિયાળામાં ધાબળા વિતરણ થતું. સમય જતાં, બહેનોમાં સ્વાવલંબન લાવવા માટે નરસાંડા અને આસપાસના ગામોમાં સીવણ તાલીમ કેન્દ્રોની સ્થાપના કરાઈ."}
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-sans">
              {lang === 'en'
                ? "Today, the trust operates permanent vocational classrooms, sponsors school tuition fees, leads state-wide scholarship drives, and serves as a vital welfare center for Nomadic and De-Notified Tribes (NT-DNT) around Kheda district. We maintain high integrity, completely funded by compassionate individual donors without heavy commercial overheads."
                : "આજે પુષ્પક ટ્રસ્ટ કાયમી કૌશલ્ય કેન્દ્રો ચલાવે છે, ગરીબ તેજસ્વી બાળકોના શિક્ષણનો ફી ખર્ચ ઉઠાવે છે અને વિચરતી-વિમુક્ત જાતિઓ (NT-DNT) ના ઉત્કર્ષ માટે ખેડા જિલ્લાનું એક મહત્વનું સેન્ટર બન્યું છે. અમારું તમામ ભંડોળ ઉદાર અને સહૃદયી દાનદાતાઓ દ્વારા પૂરું પાડવામાં આવે છે, જે સીધું જ સેવાકાર્યમાં વાપરવામાં આવે છે."}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500" />
                <span>{lang === 'en' ? 'Fully Registered NGO' : 'સરકાર માન્ય રજિસ્ટર્ડ ટ્રસ્ટ'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500" />
                <span>{lang === 'en' ? 'Zero Commercial Overheads' : '૧૦૦% સેવામાં વપરાતું ફંડ'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500" />
                <span>{lang === 'en' ? 'Verified Bank Accounts' : 'ઑડિટેડ બેંક ખાતાઓ'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500" />
                <span>{lang === 'en' ? '100+ Active Volunteers' : '૧૦૦ થી વધુ સક્રિય સ્વયંસેવકો'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 shadow-xl p-8 bg-slate-50 dark:bg-[#070F1E] flex flex-col gap-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-amber-500/20 pb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-500" />
                <span>{lang === 'en' ? 'Legal Credentials' : 'કાનૂની પ્રમાણપત્ર વિગતો'}</span>
              </h3>
              
              <div className="space-y-4 text-sm font-sans">
                <div className="flex items-start justify-between gap-4 p-3 bg-white dark:bg-[#0B192C] rounded-lg border border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-500">{lang === 'en' ? 'Registration Name' : 'ટ્રસ્ટનું નામ'}</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right">Pushpak Foundation</span>
                </div>
                
                <div className="flex items-start justify-between gap-4 p-3 bg-white dark:bg-[#0B192C] rounded-lg border border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-500">{lang === 'en' ? 'Incorporation Date' : 'સ્થાપના તારીખ'}</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right">30 June 2015</span>
                </div>

                <div className="flex items-start justify-between gap-4 p-3 bg-white dark:bg-[#0B192C] rounded-lg border border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-500">{lang === 'en' ? 'Reg Authority' : 'નોંધણી સત્તાધિકારી'}</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right">Asst. Charity Commissioner, Kheda</span>
                </div>

                <div className="flex items-start justify-between gap-4 p-3 bg-white dark:bg-[#0B192C] rounded-lg border border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-500">{lang === 'en' ? 'Registration Number' : 'નોંધણી નંબર'}</span>
                  <span className="font-mono font-bold text-amber-600 dark:text-amber-400">F/2365/Kheda</span>
                </div>
              </div>

              {/* Simulated Visual Stamp */}
              <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none transform rotate-12">
                <div className="w-24 h-24 rounded-full border-4 border-amber-500 flex items-center justify-center text-center text-[10px] font-bold p-1">
                  PUSHPAK FOUNDATION NADIAD
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Values */}
      <section className="py-20 bg-slate-50 dark:bg-[#070F1E] px-4">
        <div className="max-w-7xl mx-auto text-center flex flex-col gap-3 mb-16">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
            {lang === 'en' ? 'OUR GUIDING PILLARS' : 'અમારા આદર્શ મૂલ્યો'}
          </span>
          <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white">
            {lang === 'en' ? 'Principles That Direct Our Action' : 'જે સિદ્ધાંતો પર અમે કામ કરીએ છીએ'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-2"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0B192C] rounded-2xl p-8 border border-amber-500/10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-xl w-fit mb-6">
                <Award className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">
                {lang === 'en' ? val.titleEn : val.titleGu}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 leading-relaxed font-sans">
                {lang === 'en' ? val.descEn : val.descGu}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-20 bg-white dark:bg-[#0B192C] px-4">
        <div className="max-w-7xl mx-auto text-center flex flex-col gap-3 mb-16">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
            {lang === 'en' ? 'FOUNDATION LEADERSHIP' : 'ટ્રસ્ટની ટીમ અને સ્થાપકો'}
          </span>
          <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white">
            {lang === 'en' ? 'Our Dedicated Trustees & Mentors' : 'અમારા સમર્પિત ટ્રસ્ટીઓ અને માર્ગદર્શક મંડળ'}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-2"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {trustees.map((tr, idx) => (
            <div
              key={idx}
              className="group bg-slate-50 dark:bg-[#070F1E] rounded-2xl p-6 border border-amber-500/10 shadow-sm hover:border-amber-500/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Elegant Profile Avatar circle with initials or icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-900 to-[#0B192C] border-2 border-amber-500 flex items-center justify-center text-white font-sans font-extrabold text-xl mb-4 group-hover:scale-105 transition-transform">
                {tr.nameEn.split(' ').map(n => n[0]).join('')}
              </div>
              
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">
                {lang === 'en' ? tr.nameEn : tr.nameGu}
              </h3>
              <span className="text-xs text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider block mt-1">
                {lang === 'en' ? tr.roleEn : tr.roleGu}
              </span>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-3.5 leading-relaxed font-sans">
                {lang === 'en' ? tr.descEn : tr.descGu}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
