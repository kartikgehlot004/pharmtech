import React, { useState } from 'react';
import { Camera, ShieldCheck, Volume2, Sparkles } from 'lucide-react';
import { LanguageCode } from '../types';
import { speakText, stopSpeaking } from '../services/speech';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  language: LanguageCode;
  onUploadClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onUploadClick }) => {
  const [isPlayingSample, setIsPlayingSample] = useState(false);
  const t = TRANSLATIONS[language]?.hero || TRANSLATIONS.hi.hero;

  const handleTestAudio = () => {
    if (isPlayingSample) {
      stopSpeaking();
      setIsPlayingSample(false);
    } else {
      setIsPlayingSample(true);
      speakText(t.sampleSpokenText, language, () => {
        setIsPlayingSample(false);
      });
    }
  };

  return (
    <header id="top" className="relative overflow-hidden py-12 md:py-16 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)] to-teal-500/5">
      {/* Decorative gradient glow spots */}
      <div className="absolute -top-32 right-[-10%] w-[550px] h-[550px] bg-gradient-to-br from-amber-400/15 via-teal-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 -left-20 w-[450px] h-[450px] bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--warn)] border border-[var(--a)]/40 text-[var(--a)] font-bold text-xs sm:text-sm tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[var(--a)] animate-ping" />
              <span>{t.tag}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold tracking-tight leading-[1.18] text-[var(--ink)]">
              {t.title1} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[var(--p)] via-teal-600 to-[var(--a)] bg-clip-text text-transparent">
                {t.title2}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[var(--mut)] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onUploadClick}
                className="px-6 py-3.5 rounded-2xl bg-[var(--a)] hover:bg-amber-600 text-white font-bold text-base shadow-md shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <Camera className="w-5 h-5" />
                <span>{t.uploadBtn}</span>
              </button>

              <a
                href="#schemes"
                className="px-6 py-3.5 rounded-2xl border-2 border-[var(--p)] text-[var(--p)] hover:bg-[var(--p)]/10 font-bold text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>{t.schemesBtn}</span>
              </a>
            </div>

            {/* Language badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-medium text-[var(--mut)]">
              <span className="font-semibold text-[var(--ink)]">{t.availableLangs}</span>
              <span className="px-2 py-0.5 rounded-md bg-[var(--card)] border border-[var(--bd)]">हिन्दी</span>
              <span className="px-2 py-0.5 rounded-md bg-[var(--card)] border border-[var(--bd)]">मारवाड़ी</span>
              <span className="px-2 py-0.5 rounded-md bg-[var(--card)] border border-[var(--bd)]">English</span>
              <span className="px-2 py-0.5 rounded-md bg-[var(--card)] border border-[var(--bd)]">ગુજરાતી</span>
              <span className="px-2 py-0.5 rounded-md bg-[var(--card)] border border-[var(--bd)]">தமிழ்</span>
              <span className="px-2 py-0.5 rounded-md bg-[var(--card)] border border-[var(--bd)]">ਪੰਜਾਬੀ</span>
            </div>
          </div>

          {/* Right Column: Interactive Mock Prescription Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[var(--card)] border border-[var(--bd)] rounded-3xl p-5 sm:p-6 shadow-xl shadow-[var(--p)]/15 relative animate-float">
              {/* Doctor header badge */}
              <div className="flex items-center justify-between border-b border-[var(--bd)] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-[var(--mut)] tracking-wide">
                    {t.rxDoctor}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-[var(--mut)] bg-[var(--bg)] px-2 py-0.5 rounded-md border border-[var(--bd)]">
                  {t.rxVerified}
                </span>
              </div>

              {/* Doctor's Handwritten simulation note */}
              <div
                className="p-4 rounded-xl text-slate-800 text-sm leading-relaxed mb-4 font-mono shadow-inner border border-amber-200"
                style={{
                  background: 'repeating-linear-gradient(#fffdf0 0 28px, #faedd0 28px 29px)',
                  transform: 'rotate(-1deg)',
                }}
              >
                <div className="font-bold text-teal-900 text-base mb-1">{t.rxTitle}</div>
                <div>1. Tab. Paracetamol 650mg — 1-0-1 × 5 din (Khane k baad)</div>
                <div>2. Cap. Pan-40 — 1-0-0 (Khali pet subah)</div>
                <div>3. Syp. Cough 10ml — TDS × 5 din</div>
              </div>

              {/* AI Voice Output Bubble */}
              <div className="bg-[var(--bg)] border border-[var(--bd)] rounded-2xl p-4 flex items-start gap-3.5 shadow-sm">
                <button
                  onClick={handleTestAudio}
                  title={t.rxVoiceBtnListen}
                  className={`w-11 h-11 shrink-0 rounded-2xl flex items-center justify-center text-white transition-all cursor-pointer ${
                    isPlayingSample ? 'bg-[var(--p)] animate-pulse' : 'bg-[var(--a)] shadow-md shadow-amber-500/30'
                  }`}
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                <div className="text-xs sm:text-sm space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[var(--ink)] text-sm">{t.rxVoiceSampleTitle}</span>
                    <span className="text-[10px] font-semibold text-[var(--p)] bg-[var(--p)]/10 px-2 py-0.5 rounded-full">
                      {t.rxVoiceSampleBadge}
                    </span>
                  </div>
                  <p className="text-[var(--mut)] leading-snug">
                    {t.rxVoiceSampleDesc}
                  </p>
                  <button
                    onClick={handleTestAudio}
                    className="text-xs font-semibold text-[var(--p)] hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer"
                  >
                    <span>{isPlayingSample ? t.rxVoiceBtnStop : t.rxVoiceBtnListen}</span>
                  </button>
                </div>
              </div>

              {/* Trust markers */}
              <div className="mt-4 pt-3 border-t border-[var(--bd)] flex items-center justify-between text-[11px] text-[var(--mut)]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {t.safePrivate}
                </span>
                <span className="flex items-center gap-1 text-[var(--p)] font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.aiPartner}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
