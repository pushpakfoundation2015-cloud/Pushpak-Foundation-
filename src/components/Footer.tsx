import React from 'react';
import { Logo } from './Logo';
import { Page, Language } from '../types';
import { translations } from '../translations';
import { Phone, Mail, MapPin, Calendar, FileText, ArrowUpRight, MessageCircle } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: Page) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, lang }) => {
  const t = translations[lang];

  const handleLinkClick = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const msg = lang === 'en' 
      ? "Hello Pushpak Foundation, I want to know more about your social welfare activities." 
      : "નમસ્તે પુષ્પક ફાઉન્ડેશન, મને આપની સામાજિક સેવા પ્રવૃત્તિઓ વિશે વધુ જણાવશો.";
    window.open(`https://wa.me/919909078101?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <footer className="relative bg-[#070F1E] text-slate-300 overflow-hidden pt-16 pb-8 border-t-2 border-amber-500/20">
      {/* Decorative Gold Light Beam */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-5">
            <div className="cursor-pointer" onClick={() => handleLinkClick('home')}>
              <Logo className="h-12 w-12" showText={true} />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              {t.footerDesc}
            </p>
            <div className="flex flex-col gap-2.5 text-xs text-amber-500 font-semibold font-sans">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-amber-500/70" />
                <span>{t.established}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-amber-500/70" />
                <span>{t.registration}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              {t.footerLinksHeader}
            </h3>
            <div className="grid grid-cols-2 gap-x-2 gap-y-3 text-sm">
              <button onClick={() => handleLinkClick('home')} className="text-left text-slate-400 hover:text-amber-400 transition-colors duration-150 flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3 opacity-60" /> {t.navHome}
              </button>
              <button onClick={() => handleLinkClick('about')} className="text-left text-slate-400 hover:text-amber-400 transition-colors duration-150 flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3 opacity-60" /> {t.navAbout}
              </button>
              <button onClick={() => handleLinkClick('vision-mission')} className="text-left text-slate-400 hover:text-amber-400 transition-colors duration-150 flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3 opacity-60" /> {t.navVisionMission}
              </button>
              <button onClick={() => handleLinkClick('gallery')} className="text-left text-slate-400 hover:text-amber-400 transition-colors duration-150 flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3 opacity-60" /> {t.navGallery}
              </button>
              <button onClick={() => handleLinkClick('news')} className="text-left text-slate-400 hover:text-amber-400 transition-colors duration-150 flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3 opacity-60" /> {t.navNews}
              </button>
              <button onClick={() => handleLinkClick('volunteer')} className="text-left text-slate-400 hover:text-amber-400 transition-colors duration-150 flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3 opacity-60" /> {t.navVolunteer}
              </button>
              <button onClick={() => handleLinkClick('donate')} className="text-left text-slate-400 hover:text-amber-400 transition-colors duration-150 flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3 opacity-60" /> {t.navDonate}
              </button>
              <button onClick={() => handleLinkClick('contact')} className="text-left text-slate-400 hover:text-amber-400 transition-colors duration-150 flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3 opacity-60" /> {t.navContact}
              </button>
            </div>
            <div className="pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold shadow-md transition-transform duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4 fill-white text-emerald-600" />
                <span>{t.btnWhatsAppChat}</span>
              </button>
            </div>
          </div>

          {/* Column 3: Contact details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              {t.footerContactHeader}
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>{t.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a href="tel:+919909078101" className="hover:text-amber-400 transition-colors">
                  +91 99090 78101
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a href="mailto:pushpakfoundation2015@gmail.com" className="hover:text-amber-400 transition-colors break-all">
                  pushpakfoundation2015@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Google Map Embed */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              {t.footerMapHeader}
            </h3>
            <div className="w-full h-36 rounded-xl overflow-hidden border border-amber-500/20 shadow-md">
              <iframe
                title="Pushpak Foundation Location Nadiad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14742.664426553856!2d72.84656209556108!3d22.684841663409895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e840a5a3a29%3A0xc66c1f5139a04cb5!2sNadiad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <span className="text-[11px] text-slate-500 italic">
              * Centered near Narsanda National Highway, Nadiad, Gujarat
            </span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="font-sans">
            © {new Date().getFullYear()} {translations[lang].brandName}. {t.footerCopy}
          </div>
          <div className="flex items-center gap-4 font-sans font-medium">
            <button onClick={() => handleLinkClick('about')} className="hover:text-amber-400">
              {lang === 'en' ? 'History' : 'ઇતિહાસ'}
            </button>
            <span>•</span>
            <button onClick={() => handleLinkClick('volunteer')} className="hover:text-amber-400">
              {lang === 'en' ? 'Get Involved' : 'સામેલ થાઓ'}
            </button>
            <span>•</span>
            <button onClick={() => handleLinkClick('donate')} className="hover:text-amber-400">
              {lang === 'en' ? 'Trustee Panel' : 'ટ્રસ્ટી બોર્ડ'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
