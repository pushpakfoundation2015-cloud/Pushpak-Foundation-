import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Sparkles, CheckCircle } from 'lucide-react';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const t = translations[lang];

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim() && form.phone.trim()) {
      setSuccess(true);
      setForm({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSuccess(false), 6000);
    }
  };

  const handleWhatsAppClick = () => {
    const text = lang === 'en'
      ? "Hello Pushpak Foundation, I visited your website and would like to contact your team regarding voluntary social programs."
      : "નમસ્તે પુષ્પક ફાઉન્ડેશન, હું નડિયાદથી આપની વેબસાઈટ નિહાળી રહ્યો છું અને આપની સામાજિક પ્રવૃત્તિઓમાં સહભાગી બનવા ઈચ્છું છું.";
    window.open(`https://wa.me/919909078101?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-[#0B192C] to-blue-950 text-white text-center px-4 overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 bg-amber-500/5 pointer-events-none blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{lang === 'en' ? 'REACH OUT' : 'અમારો સંપર્ક વિગત'}</span>
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            {t.contactTitle}
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            {t.contactSubtitle}
          </p>
        </div>
      </section>

      {/* Main Details and Form block */}
      <section className="py-20 bg-white dark:bg-[#0B192C] px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Helplines and location maps */}
          <div className="lg:col-span-5 text-left flex flex-col gap-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-sans font-bold text-slate-900 dark:text-white">
                {lang === 'en' ? 'Direct Trust Helpline' : 'મુખ્ય સંપર્ક કાર્યાલય'}
              </h2>
              <p className="text-xs text-slate-400">
                {lang === 'en'
                  ? 'Reach out directly via phone or visit our main office in Nadiad.'
                  : 'નડિયાદ ખાતે આવેલા ફાઉન્ડેશનના મુખ્ય મથકની રૂબરૂ મુલાકાત માટે.'}
              </p>
              <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
            </div>

            {/* List entries */}
            <ul className="space-y-6 text-sm font-sans text-slate-600 dark:text-slate-300">
              <li className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#070F1E] border border-slate-100 dark:border-slate-800">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 h-fit">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{lang === 'en' ? 'Address' : 'સરનામું'}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{t.address}</p>
                </div>
              </li>

              <li className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#070F1E] border border-slate-100 dark:border-slate-800">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 h-fit">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{lang === 'en' ? 'Phone Helpline' : 'હેલ્પલાઈન નંબર'}</h4>
                  <a href="tel:+919909078101" className="text-xs font-bold text-amber-600 mt-1 block">
                    +91 99090 78101
                  </a>
                  <span className="text-[10px] text-slate-400 block mt-1">{lang === 'en' ? 'Direct call (Active 9 AM to 7 PM)' : 'સવારે ૯ થી સાંજે ૭ દરમિયાન સક્રિય'}</span>
                </div>
              </li>

              <li className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#070F1E] border border-slate-100 dark:border-slate-800">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 h-fit">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{lang === 'en' ? 'Email Correspondence' : 'ઈમેલ આઈડી'}</h4>
                  <a href="mailto:pushpakfoundation2015@gmail.com" className="text-xs font-bold text-amber-600 mt-1 block break-all">
                    pushpakfoundation2015@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            {/* Quick WhatsApp Floating box */}
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex gap-4 items-center">
              <div className="p-3 bg-emerald-600 text-white rounded-full">
                <MessageSquare className="h-6 w-6 fill-white text-emerald-600" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{lang === 'en' ? 'Immediate WhatsApp support' : 'વોટ્સએપ ત્વરિત સહાય'}</h4>
                <button
                  onClick={handleWhatsAppClick}
                  className="mt-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                >
                  {t.btnWhatsAppChat} →
                </button>
              </div>
            </div>
          </div>

          {/* Right Block: Message Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-[#070F1E] border border-amber-500/10 shadow-xl text-left">
              {success ? (
                // SUCCESS MESSAGE WITH ANIMATED SPARKLE
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <span className="p-3 bg-emerald-500/15 text-emerald-500 border border-emerald-500/20 rounded-full inline-block">
                    <CheckCircle className="h-8 w-8" />
                  </span>
                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                    {lang === 'en' ? 'Message Sent Successfully!' : 'સંદેશો મોકલી દેવાયો છે!'}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
                    {t.contactSuccess}
                  </p>
                </div>
              ) : (
                // STANDARD INTAKE MESSAGE FORM
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-amber-500/10 pb-3 flex items-center gap-2">
                    <Send className="h-5 w-5 text-amber-500" />
                    <span>{lang === 'en' ? 'Send an Inquiry Message' : 'અમને સીધો ઓનલાઈન સંદેશ મોકલો'}</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="space-y-1">
                      <label className="block font-bold text-slate-500 uppercase">{t.contactFormName} *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={lang === 'en' ? 'Your full name' : 'પૂરું નામ'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white outline-none focus:border-amber-500/50 text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-bold text-slate-500 uppercase">{t.contactFormPhone} *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Mobile"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white outline-none focus:border-amber-500/50 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block font-bold text-slate-500 uppercase">{t.contactFormEmail}</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white outline-none focus:border-amber-500/50 text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-bold text-slate-500 uppercase">{t.contactFormSubject}</label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder={lang === 'en' ? 'Subject of discussion' : 'ચર્ચાનો વિષય'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white outline-none focus:border-amber-500/50 text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block font-bold text-slate-500 uppercase">{t.contactFormMessage}</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={lang === 'en' ? 'Describe your query here...' : 'તમારી ચર્ચા વિગતવાર લખો...'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white outline-none focus:border-amber-500/50 text-xs resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold uppercase tracking-widest rounded-xl shadow transition-transform cursor-pointer"
                  >
                    {t.btnSubmit}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Embedded Full Width Google Map with luxury frame */}
      <section className="w-full h-96 relative border-t border-slate-100 dark:border-slate-800">
        <iframe
          title="Pushpak Foundation Location Nadiad Gujarat"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14742.664426553856!2d72.84656209556108!3d22.684841663409895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e840a5a3a29%3A0xc66c1f5139a04cb5!2sNadiad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full border-0 absolute inset-0"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};
