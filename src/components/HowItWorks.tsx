import React from 'react';
import { Camera, Sparkles, Volume2 } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HowItWorksProps {
  language: LanguageCode;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ language }) => {
  const t = TRANSLATIONS[language]?.how || TRANSLATIONS.hi.how;

  const steps = [
    {
      step: '1',
      icon: <Camera className="w-6 h-6 text-white" />,
      title: t.step1Title,
      description: t.step1Desc,
    },
    {
      step: '2',
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: t.step2Title,
      description: t.step2Desc,
    },
    {
      step: '3',
      icon: <Volume2 className="w-6 h-6 text-white" />,
      title: t.step3Title,
      description: t.step3Desc,
    },
  ];

  return (
    <section id="how" className="py-16 md:py-20 bg-[var(--bg)]">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-[var(--card)] border border-[var(--bd)] rounded-3xl p-6 sm:p-7 relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--p)]/10 hover:border-[var(--p)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[var(--p)] to-teal-600 flex items-center justify-center shadow-md shadow-teal-700/20">
                    {s.icon}
                  </div>
                  <span className="w-9 h-9 rounded-full bg-[var(--a)] text-amber-950 font-black text-sm flex items-center justify-center shadow-xs">
                    0{s.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)] mb-2">{s.title}</h3>
                <p className="text-[var(--mut)] text-sm leading-relaxed">{s.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--bd)]/60 text-xs font-semibold text-[var(--p)] flex items-center gap-1.5">
                <span>{t.stepCompleted} {s.step}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--p)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
