import { useState, useEffect } from 'react';
import { Page, Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { VisionMission } from './pages/VisionMission';
import { Activities } from './pages/Activities';
import { GalleryPage } from './pages/GalleryPage';
import { NewsPage } from './pages/NewsPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { DonatePage } from './pages/DonatePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [lang, setLang] = useState<Language>('gu'); // Default to Gujarati (ગુજરાતી) to honor Nadiad community!

  // Dynamic Google Font Injection for luxury editorial headings and Gujarati legibility
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Gujarati:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Sync index.html document title to match selected bilingual brand and page
  useEffect(() => {
    const pageTitles: Record<Page, { en: string, gu: string }> = {
      home: { en: "Home", gu: "હોમ" },
      about: { en: "About Us", gu: "અમારા વિશે" },
      'vision-mission': { en: "Vision & Mission", gu: "ધ્યેય અને વિઝન" },
      activities: { en: "All Activities", gu: "સામાજિક પ્રવૃત્તિઓ" },
      education: { en: "Education Seminars", gu: "શિક્ષણ સેમિનાર" },
      scholarship: { en: "Scholarship Guidance", gu: "સ્કૉલરશિપ માર્ગદર્શન" },
      'skill-development': { en: "Skill Development", gu: "કૌશલ્ય વિકાસ" },
      'women-empowerment': { en: "Women Empowerment", gu: "મહિલા સશક્તિકરણ" },
      'health-awareness': { en: "Health Awareness", gu: "આરોગ્ય જાગૃતિ" },
      'nt-dnt': { en: "NT-DNT Community Welfare", gu: "NT-DNT જાતિ વિકાસ" },
      gallery: { en: "Photo & Video Gallery", gu: "સેવા ચિત્રો ગેલેરી" },
      news: { en: "Latest News & Events", gu: "અખબારી અહેવાલો" },
      volunteer: { en: "Join as Volunteer", gu: "સ્વયંસેવક નોંધણી" },
      donate: { en: "Donate & Support", gu: "દાન આપો સહયોગ કરો" },
      contact: { en: "Contact Us", gu: "સંપર્ક કાર્યાલય" },
    };

    const currentTitle = pageTitles[activePage] || { en: "NGO Portal", gu: "સેવા પોર્ટલ" };
    const titleText = lang === 'en' 
      ? `${currentTitle.en} - Pushpak Foundation Nadiad`
      : `${currentTitle.gu} - પુષ્પક ફાઉન્ડેશન નડિયાદ`;
    document.title = titleText;
  }, [activePage, lang]);

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} lang={lang} />;
      case 'about':
        return <About lang={lang} />;
      case 'vision-mission':
        return <VisionMission lang={lang} />;
      
      // Activities list or individual detail sub-pages
      case 'activities':
      case 'education':
      case 'scholarship':
      case 'skill-development':
      case 'women-empowerment':
      case 'health-awareness':
      case 'nt-dnt':
        return <Activities activePage={activePage} setActivePage={setActivePage} lang={lang} />;
      
      case 'gallery':
        return <GalleryPage lang={lang} />;
      case 'news':
        return <NewsPage lang={lang} />;
      case 'volunteer':
        return <VolunteerPage lang={lang} />;
      case 'donate':
        return <DonatePage lang={lang} />;
      case 'contact':
        return <ContactPage lang={lang} />;
      default:
        return <Home setActivePage={setActivePage} lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF8] text-slate-800 dark:bg-[#070F1E] dark:text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-900 transition-colors duration-300">
      
      {/* 1. STICKY GLASSMORPHIC HEADER */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        lang={lang}
        setLang={setLang}
      />

      {/* 2. MAIN ACTIVE VIEWPORT CONTAINER */}
      <main className="flex-grow animate-in fade-in duration-500">
        {renderActivePage()}
      </main>

      {/* 3. ROBUST INTERACTIVE FOOTER */}
      <Footer
        setActivePage={setActivePage}
        lang={lang}
      />

      {/* Floating WhatsApp chat trigger bubble at the bottom corner */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => {
            const msg = lang === 'en'
              ? "Hello Pushpak Foundation, I want to inquire about your social programs in Nadiad."
              : "નમસ્તે પુષ્પક ફાઉન્ડેશન, હું આપના નડિયાદ કાર્યાલયનો સંપર્ક કરવા ઈચ્છું છું.";
            window.open(`https://wa.me/919909078101?text=${encodeURIComponent(msg)}`, '_blank');
          }}
          className="flex items-center justify-center p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 group relative border border-emerald-400"
          title="Direct WhatsApp Helpline"
        >
          {/* Pulsing glow background */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-75 pointer-events-none"></span>
          
          <svg className="h-6 w-6 fill-white text-emerald-500" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.497 1.45 5.416 1.451 5.387 0 9.768-4.383 9.771-9.77.001-2.61-1.01-5.059-2.844-6.896C17.1 2.105 14.653.957 12.043.957 6.657.957 2.274 5.34 2.272 10.725c-.001 1.916.499 3.793 1.448 5.395l-.995 3.633 3.72-.976z" />
          </svg>
        </button>
      </div>

    </div>
  );
}
