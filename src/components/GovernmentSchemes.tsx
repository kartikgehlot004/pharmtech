import React from 'react';
import { ExternalLink } from 'lucide-react';
import { LanguageCode } from '../types';
import { getHealthSchemes } from '../data/schemes';
import { TRANSLATIONS } from '../data/translations';

interface GovernmentSchemesProps {
  language: LanguageCode;
}

export const GovernmentSchemes: React.FC<GovernmentSchemesProps> = ({ language }) => {
  const t = TRANSLATIONS[language]?.schemes || TRANSLATIONS.hi.schemes;
  const schemesList = getHealthSchemes(language);

  return (
    <section id="schemes" className="py-16 md:py-20 bg-[var(--card)] border-t border-[var(--bd)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider text-[var(--p)] uppercase px-3 py-1 rounded-full bg-[var(--p)]/10 border border-[var(--p)]/20">
            {t.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--ink)] mt-3">
            {t.title}
          </h2>
          <p className="text-[var(--mut)] text-base mt-2">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {schemesList.map((s, idx) => (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--bg)] border border-[var(--bd)] rounded-2xl p-5 hover:border-[var(--p)] hover:shadow-lg hover:shadow-[var(--p)]/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                    {s.level}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[var(--mut)] group-hover:text-[var(--p)] transition-colors" />
                </div>
                <h3 className="text-base font-bold text-[var(--ink)] mb-1.5 group-hover:text-[var(--p)] transition-colors leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs text-[var(--mut)] leading-relaxed">{s.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--bd)] flex items-center justify-between text-xs font-semibold text-[var(--p)]">
                <span>{t.openPortal}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
