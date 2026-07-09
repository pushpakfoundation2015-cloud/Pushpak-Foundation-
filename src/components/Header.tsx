import React, { useState } from 'react';
import { Logo } from './Logo';
import { Page, Language } from '../types';
import { translations } from '../translations';
import { Globe, Menu, X, ChevronDown, HandHeart } from 'lucide-react';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  lang,
  setLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activitiesDropdownOpen, setActivitiesDropdownOpen] = useState(false);
  const t = translations[lang];

  // Primary navigation items
  const mainNavItems = [
    { page: 'home' as Page, label: t.navHome },
    { page: 'about' as Page, label: t.navAbout },
    { page: 'vision-mission' as Page, label: t.navVisionMission },
  ];

  const secondaryNavItems = [
    { page: 'gallery' as Page, label: t.navGallery },
    { page: 'news' as Page, label: t.navNews },
    { page: 'volunteer' as Page, label: t.navVolunteer },
    { page: 'contact' as Page, label: t.navContact },
  ];

  // Specific activities submenu
  const subActivities = [
    { page: 'education' as Page, label: t.navEducation },
    { page: 'scholarship' as Page, label: t.navScholarship },
    { page: 'skill-development' as Page, label: t.navSkillDev },
    { page: 'women-empowerment' as Page, label: t.navWomenEmp },
    { page: 'health-awareness' as Page, label: t.navHealth },
    { page: 'nt-dnt' as Page, label: t.navNTDNT },
  ];

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setActivitiesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'gu' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#0B192C]/90 backdrop-blur-lg border-b border-amber-500/30 shadow-md transition-all duration-300">
      {/* Premium Luxury Gold-Orange Top Line */}
      <div className="h-[3px] bg-gradient-to-r from-amber-500 via-[#D4AF37] to-orange-500 w-full absolute top-0 left-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 pt-[3px]">
          
          {/* Logo Brand */}
          <div className="cursor-pointer" onClick={() => handleNavClick('home')}>
            <Logo className="h-11 w-11" showText={true} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNavItems.map((item) => (
              <button
                key={item.page}
                id={`nav-${item.page}`}
                onClick={() => handleNavClick(item.page)}
                className={`px-3 py-2 rounded-md font-sans text-sm font-semibold transition-all duration-200 hover:text-amber-600 ${
                  activePage === item.page
                    ? 'text-amber-600 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-500/10'
                    : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Activities Dropdown */}
            <div className="relative">
              <button
                id="nav-activities-dropdown"
                onMouseEnter={() => setActivitiesDropdownOpen(true)}
                onClick={() => setActivitiesDropdownOpen(!activitiesDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md font-sans text-sm font-semibold transition-all duration-200 hover:text-amber-600 ${
                  ['activities', 'education', 'scholarship', 'skill-development', 'women-empowerment', 'health-awareness', 'nt-dnt'].includes(activePage)
                    ? 'text-amber-600 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-500/10'
                    : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                {t.navActivities}
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activitiesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Dropdown Panel on Hover/Click */}
              {activitiesDropdownOpen && (
                <div
                  className="absolute left-0 mt-2.5 w-64 rounded-xl bg-white/95 dark:bg-[#0B192C]/95 border border-[#D4AF37]/35 shadow-2xl p-2.5 z-50 backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setActivitiesDropdownOpen(false)}
                >
                  <button
                    onClick={() => handleNavClick('activities')}
                    className="w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/30 rounded-lg mb-1"
                  >
                    {t.btnOurActivities} →
                  </button>
                  <div className="border-b border-slate-100 dark:border-slate-800 my-1"></div>
                  {subActivities.map((sub) => (
                    <button
                      key={sub.page}
                      onClick={() => handleNavClick(sub.page)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:text-amber-600 ${
                        activePage === sub.page
                          ? 'text-amber-600 bg-amber-50 dark:bg-amber-950/20 font-bold'
                          : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {secondaryNavItems.map((item) => (
              <button
                key={item.page}
                id={`nav-${item.page}`}
                onClick={() => handleNavClick(item.page)}
                className={`px-3 py-2 rounded-md font-sans text-sm font-semibold transition-all duration-200 hover:text-amber-600 ${
                  activePage === item.page
                    ? 'text-amber-600 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-500/10'
                    : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Bilingual Switcher Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-500/30 text-xs font-bold text-slate-700 dark:text-slate-200 bg-amber-50/20 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-all duration-200"
              title="Change Language / ભાષા બદલો"
            >
              <Globe className="h-3.5 w-3.5 text-amber-600 animate-spin-slow" />
              <span>{lang === 'en' ? 'ગુજરાતી' : 'English'}</span>
            </button>

            {/* Premium CTA Donate Button */}
            <button
              onClick={() => handleNavClick('donate')}
              className="relative group overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-bold shadow-md hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <HandHeart className="h-4 w-4 relative z-10 text-white animate-bounce" />
              <span className="relative z-10">{t.navDonate}</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Lang Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-amber-500/30 text-xs font-bold text-slate-700 dark:text-slate-200 bg-amber-50/30"
            >
              <Globe className="h-3.5 w-3.5 text-amber-600" />
              <span>{lang === 'en' ? 'GU' : 'EN'}</span>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0B192C] border-t border-slate-100 dark:border-slate-800 animate-in slide-in-from-top duration-300 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {/* Primary Mobile Menu Links */}
            {mainNavItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold ${
                  activePage === item.page
                    ? 'text-amber-600 bg-amber-50 dark:bg-amber-950/20'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Activities Sub-Section */}
            <div className="border-y border-slate-100 dark:border-slate-800 py-2 my-2">
              <span className="block px-4 py-1 text-xs font-bold uppercase tracking-wider text-amber-600">
                {t.navActivities}
              </span>
              <button
                onClick={() => handleNavClick('activities')}
                className={`block w-full text-left px-6 py-2.5 text-sm font-bold ${
                  activePage === 'activities' ? 'text-amber-600' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                • {t.btnOurActivities}
              </button>
              {subActivities.map((sub) => (
                <button
                  key={sub.page}
                  onClick={() => handleNavClick(sub.page)}
                  className={`block w-full text-left px-6 py-2.5 text-sm font-medium ${
                    activePage === sub.page
                      ? 'text-amber-600 font-bold bg-amber-50/40 dark:bg-amber-950/10'
                      : 'text-slate-600 dark:text-slate-400 hover:text-amber-600'
                  }`}
                >
                  — {sub.label}
                </button>
              ))}
            </div>

            {/* Secondary Mobile Links */}
            {secondaryNavItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold ${
                  activePage === item.page
                    ? 'text-amber-600 bg-amber-50 dark:bg-amber-950/20'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile CTA Button */}
            <div className="pt-4 px-4">
              <button
                onClick={() => handleNavClick('donate')}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold shadow-md"
              >
                <HandHeart className="h-5 w-5 text-white animate-pulse" />
                <span>{t.navDonate}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
