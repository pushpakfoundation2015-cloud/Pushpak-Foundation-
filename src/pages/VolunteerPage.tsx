import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Award, Users, FileText, CheckCircle, Gift, Phone, Mail, Sparkles, Printer } from 'lucide-react';

interface VolunteerPageProps {
  lang: Language;
}

export const VolunteerPage: React.FC<VolunteerPageProps> = ({ lang }) => {
  const t = translations[lang];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Nadiad',
    skills: 'Teaching'
  });
  const [registered, setRegistered] = useState(false);
  const [certId, setCertId] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.phone.trim()) {
      // Generate a custom Certificate ID
      const randomId = 'PFT/VOL/' + Math.floor(1000 + Math.random() * 9000);
      setCertId(randomId);
      setRegistered(true);
    }
  };

  const handleReset = () => {
    setRegistered(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: 'Nadiad',
      skills: 'Teaching'
    });
  };

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-[#0B192C] to-blue-950 text-white text-center px-4 overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-amber-500/5 pointer-events-none blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{lang === 'en' ? 'JOIN THE MOVEMENT' : 'સમાજ સેવા અભિયાન'}</span>
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            {t.volunteerTitle}
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            {t.volunteerSubtitle}
          </p>
        </div>
      </section>

      {/* Main Form and Reasons Body */}
      <section className="py-20 bg-white dark:bg-[#0B192C] px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Why Volunteer */}
          <div className="lg:col-span-5 text-left flex flex-col gap-6">
            <h2 className="text-2xl font-sans font-bold text-slate-900 dark:text-white">
              {t.volunteerWhyTitle}
            </h2>
            <div className="w-12 h-1 bg-amber-500 rounded-full"></div>

            <div className="space-y-5 mt-2">
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#070F1E] border border-slate-100 dark:border-slate-800">
                <div className="p-2.5 bg-amber-500/10 rounded-lg text-amber-600 dark:text-amber-400 h-fit">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{lang === 'en' ? 'Direct On-ground Social Work' : 'પ્રત્યક્ષ સામાજિક કાર્યનો અનુભવ'}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{t.volunteerWhy1}</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#070F1E] border border-slate-100 dark:border-slate-800">
                <div className="p-2.5 bg-amber-500/10 rounded-lg text-amber-600 dark:text-amber-400 h-fit">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{lang === 'en' ? 'Expand Social Network' : 'પ્રતિષ્ઠિત નાગરિકો સાથે જોડાણ'}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{t.volunteerWhy2}</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#070F1E] border border-slate-100 dark:border-slate-800">
                <div className="p-2.5 bg-amber-500/10 rounded-lg text-amber-600 dark:text-amber-400 h-fit">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{lang === 'en' ? 'Official Certificate & Reference Letter' : 'અધિકૃત સેવા પ્રમાણપત્ર અને ભલામણ પત્ર'}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{t.volunteerWhy3}</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#070F1E] border border-slate-100 dark:border-slate-800">
                <div className="p-2.5 bg-amber-500/10 rounded-lg text-amber-600 dark:text-amber-400 h-fit">
                  <Gift className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{lang === 'en' ? 'Personal Satisfaction & Growth' : 'સેવા સંતોષ અને વ્યક્તિત્વ વિકાસ'}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{t.volunteerWhy4}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Form / Visual Certificate */}
          <div className="lg:col-span-7">
            {registered ? (
              // REGISTERED WELCOME SCREEN & GENERATED CERTIFICATE
              <div className="p-6 md:p-8 bg-slate-50 dark:bg-[#070F1E] rounded-3xl border border-amber-500/20 shadow-2xl text-center space-y-8 animate-in zoom-in-95 duration-200">
                
                <div className="space-y-2">
                  <span className="p-3 bg-emerald-500/15 text-emerald-500 rounded-full inline-block animate-bounce border border-emerald-500/20">
                    <CheckCircle className="h-8 w-8" />
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white">{t.volunteerSuccessTitle}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
                    {t.volunteerSuccessMsg}
                  </p>
                </div>

                {/* VISUAL CERTIFICATE CARD */}
                <div className="relative border-8 border-double border-amber-600 bg-[#FAF9F5] text-slate-900 rounded-2xl p-6 md:p-10 shadow-lg overflow-hidden text-center mx-auto max-w-2xl select-none font-serif">
                  {/* Watermark Crest Background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <div className="w-80 h-80 rounded-full border-8 border-amber-500"></div>
                  </div>

                  {/* Header */}
                  <div className="space-y-1.5 pb-4 border-b-2 border-amber-500/20">
                    <h4 className="text-lg font-bold tracking-widest text-amber-700 uppercase font-serif">
                      {lang === 'en' ? 'PUSHPAK FOUNDATION' : 'પુષ્પક ફાઉન્ડેશન'}
                    </h4>
                    <span className="text-[9px] block uppercase tracking-widest text-slate-500">
                      Nadiad, Gujarat, India • Reg No: F/2365/Kheda
                    </span>
                  </div>

                  {/* Subtitle */}
                  <h5 className="text-xs italic font-bold text-amber-600 uppercase tracking-widest mt-6">
                    {lang === 'en' ? 'CERTIFICATE OF ENROLLMENT' : 'સ્વયંસેવક પ્રમાણપત્ર'}
                  </h5>

                  {/* Body text */}
                  <p className="text-xs md:text-sm leading-relaxed text-slate-700 mt-6 max-w-lg mx-auto font-sans">
                    {lang === 'en'
                      ? `This is to certify that ${formData.name} has successfully enrolled as an active volunteer of Pushpak Foundation on this day. We deeply appreciate their noble willingness to serve the nation through Education Seminars, Women Empowerment, and Social Development.`
                      : `આથી પ્રમાણિત કરવામાં આવે છે કે ${formData.name} એ પુષ્પક ફાઉન્ડેશન (નડિયાદ) માં સ્વયંસેવક તરીકે જોડાઈને માનવસેવા પ્રવૃત્તિઓમાં સહકાર આપવાનો સંકલ્પ કરેલ છે. અમે શિક્ષણ, મહિલા સશક્તિકરણ અને પછાત વર્ગોના ઉત્થાન માટેના તેઓના સેવાભાવની મુક્તકંઠે પ્રશંસા કરીએ છીએ.`}
                  </p>

                  {/* Skills Tag */}
                  <div className="mt-6">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-amber-700 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      {lang === 'en' ? `Assigned Domain: ${formData.skills}` : `મનપસંદ ક્ષેત્ર: ${formData.skills}`}
                    </span>
                  </div>

                  {/* Certificate ID & Stamp Signature Area */}
                  <div className="grid grid-cols-2 gap-4 items-end mt-10 pt-4 border-t border-amber-500/10 text-left text-[10px] font-sans text-slate-500">
                    <div>
                      <span className="block font-bold">CERTIFICATE ID:</span>
                      <span className="font-mono text-amber-600 font-bold">{certId}</span>
                      <span className="block mt-1">DATE: {new Date().toLocaleDateString()}</span>
                    </div>
                    
                    <div className="text-right flex flex-col items-end gap-1.5">
                      {/* Stamp graphics */}
                      <div className="w-16 h-16 rounded-full border border-amber-600/30 flex items-center justify-center text-center text-[7px] font-bold text-amber-700 uppercase p-1 transform rotate-6">
                        Pushpak Trust Seal
                      </div>
                      <span className="font-bold border-t border-slate-300 pt-1 px-4 text-slate-800">Managing Trustee</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="px-6 py-2.5 bg-slate-800 text-white rounded-xl text-xs font-bold cursor-pointer hover:bg-slate-950 flex items-center gap-2"
                  >
                    <Printer className="h-4 w-4" />
                    <span>{lang === 'en' ? 'Print Certificate' : 'પ્રિન્ટ કરો'}</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold cursor-pointer hover:bg-slate-100"
                  >
                    {lang === 'en' ? 'Enroll Another Profile' : 'બીજી નોંધણી કરો'}
                  </button>
                </div>

              </div>
            ) : (
              // STANDARD VOLUNTEER REGISTRATION FORM
              <div className="p-6 md:p-8 bg-slate-50 dark:bg-[#070F1E] rounded-3xl border border-amber-500/10 shadow-xl text-left">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans border-b border-amber-500/10 pb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-amber-500" />
                  <span>{t.volunteerFormTitle}</span>
                </h3>

                <form onSubmit={handleFormSubmit} className="space-y-4 mt-6 text-sm font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 col-span-1">
                      <label className="block text-xs font-bold text-slate-500 uppercase">{t.contactFormName} *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'en' ? 'Enter your full name' : 'પૂરું નામ લખો'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white outline-none focus:border-amber-500/50"
                      />
                    </div>

                    <div className="space-y-1.5 col-span-1">
                      <label className="block text-xs font-bold text-slate-500 uppercase">{t.contactFormPhone} *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={lang === 'en' ? '10 Digit Mobile' : 'મોબાઈલ નંબર'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 col-span-1">
                      <label className="block text-xs font-bold text-slate-500 uppercase">{t.contactFormEmail}</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white outline-none focus:border-amber-500/50"
                      />
                    </div>

                    <div className="space-y-1.5 col-span-1">
                      <label className="block text-xs font-bold text-slate-500 uppercase">{lang === 'en' ? 'City / Location' : 'શહેર અથવા ગામ'}</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Nadiad"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase">{lang === 'en' ? 'Skill / Domain of Interest' : 'તમારું મનપસંદ સેવા ક્ષેત્ર'}</label>
                    <select
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-950 dark:text-white outline-none focus:border-amber-500/50"
                    >
                      <option value="Teaching & Seminars">{lang === 'en' ? 'Teaching & Seminars' : 'શિક્ષણ અને સેમિનારો'}</option>
                      <option value="Sewing Training Support">{lang === 'en' ? 'Sewing Training Support' : 'સીવણ તાલીમ અને માર્ગદર્શન'}</option>
                      <option value="Health Camps Support">{lang === 'en' ? 'Health Camps Assistance' : 'આરોગ્ય શિબિરો વ્યવસ્થાપન'}</option>
                      <option value="Social Media & Documentation">{lang === 'en' ? 'Social Media & Documentation' : 'પ્રસાર માધ્યમ અને દસ્તાવેજીકરણ'}</option>
                      <option value="On-Ground Distribution drives">{lang === 'en' ? 'On-Ground Distribution drives' : 'જમીન સ્તરે રાશન-કપડા વિતરણ'}</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs uppercase tracking-wider shadow cursor-pointer transition-transform duration-200"
                    >
                      {lang === 'en' ? 'Register & Generate Volunteer Card' : 'નોંધણી કરો અને વૉલન્ટિયર પ્રમાણપત્ર મેળવો'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
