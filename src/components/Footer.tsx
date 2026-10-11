import React from 'react';
import { Pill, ShieldAlert, Heart } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  language: LanguageCode;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language]?.footer || TRANSLATIONS.hi.footer;
  const navT = TRANSLATIONS[language]?.nav || TRANSLATIONS.hi.nav;

  return (
    <footer className="bg-[var(--p2)] text-teal-100 py-12 border-t border-teal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="flex items-center justify-center gap-2 text-xl font-bold text-white tracking-wide">
          <Pill className="w-6 h-6 text-[var(--a)]" />
          <span>DawaiMitra</span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 text-teal-200">
            {navT.badge}
          </span>
        </div>

        <p className="text-sm text-teal-200 max-w-xl mx-auto">
          {t.tagline}
          <br />
          {t.subtagline}
        </p>

        <div className="max-w-2xl mx-auto bg-black/20 border border-white/15 rounded-2xl p-4 text-xs text-amber-200/90 flex items-start gap-3 text-left">
          <ShieldAlert className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
          <p className="leading-relaxed">
            <strong>{t.disclaimerTitle}</strong> {t.disclaimerText}
          </p>
        </div>

        <div className="pt-4 border-t border-teal-800/80 text-xs text-teal-300/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>{t.copyright}</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> {t.madeWith}
          </span>
        </div>
      </div>
    </footer>
  );
};
