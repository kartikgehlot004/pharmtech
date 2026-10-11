import React from 'react';
import { Pill, Sun, Moon, Globe } from 'lucide-react';
import { LanguageCode, UserSession } from '../types';
import { LANGUAGES } from '../data/languages';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  currentUser: UserSession | null;
  onLogout: () => void;
  onOpenDashboard: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  currentUser,
  onLogout,
  onOpenDashboard,
  theme,
  onToggleTheme,
}) => {
  const t = TRANSLATIONS[language]?.nav || TRANSLATIONS.hi.nav;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/90 border-b border-[var(--bd)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-[var(--ink)]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[var(--p)] to-[var(--a)] flex items-center justify-center text-white shadow-sm shadow-[var(--p)]/30">
            <Pill className="w-5 h-5" />
          </div>
          <span className="flex items-center gap-1">
            DawaiMitra
            <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-[var(--p)]/10 text-[var(--p)] ml-1 border border-[var(--p)]/20">
              {t.badge}
            </span>
          </span>
        </a>

        {/* Center navigation links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--mut)]">
          <a href="#how" className="hover:text-[var(--p)] transition-colors">
            {t.howItWorks}
          </a>
          <a href="#feat" className="hover:text-[var(--p)] transition-colors">
            {t.features}
          </a>
          <a href="#app" className="hover:text-[var(--p)] transition-colors">
            {t.myDashboard}
          </a>
          <a href="#schemes" className="hover:text-[var(--p)] transition-colors">
            {t.schemes}
          </a>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language selector */}
          <div className="relative flex items-center">
            <label htmlFor="nav-lang-select" className="sr-only">
              {t.selectLanguage}
            </label>
            <div className="flex items-center gap-1.5 bg-[var(--card)] border border-[var(--bd)] rounded-xl px-2.5 py-1.5 text-xs sm:text-sm font-medium shadow-xs">
              <Globe className="w-3.5 h-3.5 text-[var(--p)]" />
              <select
                id="nav-lang-select"
                aria-label={t.selectLanguage}
                value={language}
                onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
                className="bg-transparent text-[var(--ink)] focus:outline-hidden cursor-pointer font-medium"
              >
                {Object.values(LANGUAGES).map((l) => (
                  <option key={l.code} value={l.code} className="bg-[var(--card)] text-[var(--ink)]">
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            title={theme === 'dark' ? t.lightMode : t.darkMode}
            className="p-2 rounded-xl bg-[var(--card)] border border-[var(--bd)] text-[var(--mut)] hover:text-[var(--ink)] transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Auth Action */}
          {currentUser ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenDashboard}
                className="hidden sm:inline-flex px-3 py-1.5 rounded-xl bg-[var(--p)]/10 text-[var(--p)] font-semibold text-xs border border-[var(--p)]/30 hover:bg-[var(--p)]/20 transition-colors cursor-pointer"
              >
                👤 {currentUser.name}
              </button>
              <button
                onClick={onLogout}
                className="px-3 py-1.5 rounded-xl bg-[var(--card)] border border-[var(--bd)] text-[var(--mut)] hover:text-red-500 font-semibold text-xs transition-colors cursor-pointer"
              >
                {t.logout}
              </button>
            </div>
          ) : (
            <a
              href="#app"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--p)] to-[var(--p2)] text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md hover:shadow-[var(--p)]/30 transition-all active:scale-95"
            >
              {t.startBtn}
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};
