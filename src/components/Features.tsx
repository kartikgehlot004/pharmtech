import React from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FeaturesProps {
  language: LanguageCode;
}

export const Features: React.FC<FeaturesProps> = ({ language }) => {
  const t = TRANSLATIONS[language]?.feat || TRANSLATIONS.hi.feat;

  const features = [
    {
      emoji: '🔍',
      title: t.f1Title,
      desc: t.f1Desc,
    },
    {
      emoji: '⚠️',
      title: t.f2Title,
      desc: t.f2Desc,
    },
    {
      emoji: '🗂️',
      title: t.f3Title,
      desc: t.f3Desc,
    },
    {
      emoji: '⏰',
      title: t.f4Title,
      desc: t.f4Desc,
    },
    {
      emoji: '🌐',
      title: t.f5Title,
      desc: t.f5Desc,
    },
    {
      emoji: '🎙️',
      title: t.f6Title,
      desc: t.f6Desc,
    },
    {
      emoji: '📈',
      title: t.f7Title,
      desc: t.f7Desc,
    },
    {
      emoji: '🔒',
      title: t.f8Title,
      desc: t.f8Desc,
    },
  ];

  return (
    <section id="feat" className="py-16 md:py-20 bg-[var(--card)] border-y border-[var(--bd)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider text-[var(--a)] uppercase px-3 py-1 rounded-full bg-[var(--warn)] border border-[var(--a)]/30">
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
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[var(--bg)] border border-[var(--bd)] rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--p)] hover:shadow-lg hover:shadow-[var(--p)]/10 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[var(--card)] border border-[var(--bd)] flex items-center justify-center text-2xl shadow-xs mb-4 group-hover:scale-110 transition-transform">
                  {f.emoji}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--ink)] mb-1.5 group-hover:text-[var(--p)] transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--mut)] leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
