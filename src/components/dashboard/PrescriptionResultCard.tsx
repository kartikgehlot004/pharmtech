import React, { useState } from 'react';
import {
  Volume2,
  VolumeX,
  Save,
  Check,
  AlertTriangle,
  Clock,
  Calendar,
  Sparkles,
  Pill,
  Target,
  ArrowLeftRight,
  Utensils,
  ShieldAlert,
} from 'lucide-react';
import { Prescription, LanguageCode } from '../../types';
import { getTimeSlotLabel } from '../../data/languages';
import { TRANSLATIONS } from '../../data/translations';
import { speakText, stopSpeaking } from '../../services/speech';

interface PrescriptionResultCardProps {
  prescription: Prescription;
  language: LanguageCode;
  onSave?: (prescription: Prescription) => void;
  isSaved?: boolean;
}

export const PrescriptionResultCard: React.FC<PrescriptionResultCardProps> = ({
  prescription,
  language,
  onSave,
  isSaved = false,
}) => {
  const [activeSpeakingIdx, setActiveSpeakingIdx] = useState<number | 'all' | null>(null);
  const t = TRANSLATIONS[language]?.rxCard || TRANSLATIONS.hi.rxCard;

  const handleSpeakMed = (idx: number) => {
    const med = prescription.meds[idx];
    if (!med) return;

    if (activeSpeakingIdx === idx) {
      stopSpeaking();
      setActiveSpeakingIdx(null);
      return;
    }

    setActiveSpeakingIdx(idx);

    const timingWords = (med.times || [])
      .map((slot) => getTimeSlotLabel(slot, language))
      .join(', ');

    const infoPart = med.info ? `${t.infoLabel}: ${med.info}। ` : '';
    const usesPart = med.uses || med.purpose ? `${t.usesLabel}: ${med.uses || med.purpose}। ` : '';
    const dosagePart = `${t.dosageLabel}: ${timingWords}। ${med.meal || ''}। ${
      med.days ? med.days + ' ' + t.daysCourse : ''
    }। `;
    const sideEffectsPart = `${t.sideEffectsLabel}: ${med.side_effects || t.safeCommon}। `;
    const foodPart = (med.food_interactions || med.avoid_food)
      ? `${t.foodInteractionLabel}: ${med.food_interactions || med.avoid_food}। `
      : '';
    const drugPart = (med.drug_interactions || med.avoid_drugs)
      ? `${t.drugInteractionLabel}: ${med.drug_interactions || med.avoid_drugs}। `
      : '';

    const text = `${med.name}। ${infoPart}${usesPart}${dosagePart}${sideEffectsPart}${foodPart}${drugPart}`;

    speakText(text, language, () => {
      setActiveSpeakingIdx(null);
    });
  };

  const handleSpeakAll = () => {
    if (activeSpeakingIdx === 'all') {
      stopSpeaking();
      setActiveSpeakingIdx(null);
      return;
    }

    setActiveSpeakingIdx('all');

    let fullText = `${prescription.summary || ''}। `;
    prescription.meds.forEach((med, i) => {
      const timingWords = (med.times || [])
        .map((slot) => getTimeSlotLabel(slot, language))
        .join(', ');
      const infoText = med.info ? `${t.infoLabel}: ${med.info}। ` : '';
      const usesText = med.uses || med.purpose ? `${t.usesLabel}: ${med.uses || med.purpose}। ` : '';
      fullText += `${i + 1}. ${med.name}। ${infoText}${usesText}${timingWords}। ${med.meal || ''}। ${t.sideEffectsLabel}: ${med.side_effects || t.safeCommon}। `;
    });

    if (prescription.warnings && prescription.warnings.length) {
      fullText += `${t.warningsTitle}: ${prescription.warnings.join('। ')}`;
    }

    speakText(fullText, language, () => {
      setActiveSpeakingIdx(null);
    });
  };

  return (
    <div className="bg-[var(--card)] border border-[var(--bd)] rounded-3xl p-5 sm:p-7 shadow-lg shadow-[var(--p)]/10 space-y-6 mt-6">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--bd)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-lg sm:text-xl font-bold text-[var(--ink)]">
              {prescription.doctor || t.rxHeader}
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs text-[var(--mut)] mt-1">
            <span className="flex items-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              {prescription.date || new Date(prescription.ts).toLocaleDateString()}
            </span>
            <span>•</span>
            <span className="font-medium">
              {prescription.meds.length} {t.medsCountSuffix}
            </span>
          </div>
        </div>

        {/* Global Speak All Button */}
        <button
          onClick={handleSpeakAll}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
            activeSpeakingIdx === 'all'
              ? 'bg-rose-600 text-white shadow-md'
              : 'bg-gradient-to-r from-[var(--p)] to-[var(--p2)] hover:opacity-95 text-white shadow-sm hover:shadow-md'
          }`}
        >
          {activeSpeakingIdx === 'all' ? (
            <>
              <VolumeX className="w-4 h-4" />
              <span>{t.stopAudioBtn}</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 animate-bounce" />
              <span>{t.listenAllBtn}</span>
            </>
          )}
        </button>
      </div>

      {/* Summary Box with high contrast */}
      {prescription.summary && (
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-zinc-900 border border-amber-300 dark:border-amber-700/80 border-l-4 border-l-amber-600 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 flex items-start gap-3 shadow-xs">
          <Sparkles className="w-5 h-5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-extrabold text-amber-900 dark:text-amber-300 mr-2">
              {t.summaryTitle}
            </span>
            <span className="font-medium">{prescription.summary}</span>
          </div>
        </div>
      )}

      {/* Medicines List */}
      <div className="space-y-6">
        <h4 className="text-sm font-extrabold text-[var(--ink)] uppercase tracking-wider flex items-center gap-2">
          <span>
            {t.medsSectionTitle} ({prescription.meds.length})
          </span>
        </h4>

        {prescription.meds.map((med, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-2xl bg-[var(--bg)] border border-[var(--bd)] border-l-6 border-l-[var(--p)] hover:border-[var(--p)] transition-all space-y-4 shadow-xs"
          >
            {/* Med title and Listen Button */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--bd)]/60 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-[var(--p)] text-white text-xs font-black flex items-center justify-center shadow-xs">
                  {idx + 1}
                </span>
                <h5 className="font-extrabold text-base sm:text-lg text-[var(--ink)] tracking-tight">
                  💊 {med.name}
                </h5>
              </div>

              {/* Read this med button */}
              <button
                onClick={() => handleSpeakMed(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeSpeakingIdx === idx
                    ? 'bg-rose-600 border-rose-600 text-white shadow-xs'
                    : 'bg-[var(--card)] border-[var(--p)]/40 text-[var(--p)] hover:bg-[var(--p)]/10'
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>{activeSpeakingIdx === idx ? t.stopMedBtn : t.listenMedBtn}</span>
              </button>
            </div>

            {/* Quick dosage & timing badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {med.dose && (
                <span className="px-3 py-1 rounded-lg bg-teal-700 text-white font-bold shadow-xs">
                  {med.dose}
                </span>
              )}

              {(med.times || []).map((slot) => (
                <span
                  key={slot}
                  className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-950 dark:text-amber-200 border border-amber-300 dark:border-amber-700 font-extrabold"
                >
                  {getTimeSlotLabel(slot, language)}
                </span>
              ))}

              {med.meal && (
                <span className="px-2.5 py-1 rounded-lg bg-sky-100 text-sky-950 dark:bg-sky-950/80 dark:text-sky-200 font-bold border border-sky-300/60 dark:border-sky-800">
                  {med.meal}
                </span>
              )}

              {med.days && (
                <span className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 font-bold flex items-center gap-1 border border-slate-300 dark:border-slate-600">
                  <Clock className="w-3 h-3 text-slate-700 dark:text-slate-300" />
                  {med.days} {t.daysCourse}
                </span>
              )}
            </div>

            {/* 4 Dedicated Required Detail Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              {/* 1. दवाई की जानकारी (Medicine Information) */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-teal-50/90 dark:bg-zinc-900 border border-teal-200 dark:border-teal-800/60 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal-900 dark:text-teal-300">
                  <Pill className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
                  <span>{t.infoLabel}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 font-semibold leading-relaxed">
                  {med.info || med.purpose || med.name}
                </p>
              </div>

              {/* 2. दवाई के उपयोग (Medicine Uses) */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50/90 dark:bg-zinc-900 border border-emerald-200 dark:border-emerald-800/60 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 dark:text-emerald-300">
                  <Target className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                  <span>{t.usesLabel}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 font-semibold leading-relaxed">
                  {med.uses || med.purpose}
                </p>
              </div>

              {/* 3. दवाई के साइड इफेक्ट्स (Side Effects) - Crystal clear contrast */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-rose-50/90 dark:bg-zinc-900 border border-rose-300 dark:border-rose-900/60 border-l-4 border-l-rose-600 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-rose-900 dark:text-rose-300">
                  <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                  <span>{t.sideEffectsLabel}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 font-semibold leading-relaxed">
                  {med.side_effects || t.safeCommon}
                </p>
              </div>

              {/* 4. दवाई के इंटरैक्शन (Food & Drug Interactions) - Crystal clear contrast */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/90 dark:bg-zinc-900 border border-amber-300 dark:border-amber-800/60 border-l-4 border-l-amber-500 space-y-2 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-950 dark:text-amber-300">
                  <ArrowLeftRight className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>{t.interactionsLabel}</span>
                </div>

                <div className="space-y-1.5 text-xs sm:text-sm">
                  {/* Food interaction */}
                  <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-amber-200 dark:border-zinc-700">
                    <div className="text-[11px] font-extrabold text-amber-950 dark:text-amber-300 flex items-center gap-1 mb-0.5">
                      <Utensils className="w-3.5 h-3.5 text-amber-600" />
                      <span>{t.foodInteractionLabel}:</span>
                    </div>
                    <p className="text-zinc-900 dark:text-zinc-100 font-semibold leading-relaxed">
                      {med.food_interactions || med.avoid_food || t.safeCommon}
                    </p>
                  </div>

                  {/* Medicine interaction */}
                  <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-rose-200 dark:border-zinc-700">
                    <div className="text-[11px] font-extrabold text-rose-950 dark:text-rose-300 flex items-center gap-1 mb-0.5">
                      <Pill className="w-3.5 h-3.5 text-rose-600" />
                      <span>{t.drugInteractionLabel}:</span>
                    </div>
                    <p className="text-zinc-900 dark:text-zinc-100 font-semibold leading-relaxed">
                      {med.drug_interactions || med.avoid_drugs || t.safeCommon}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Global Safety & Drug Interaction Warnings with high contrast */}
      {prescription.warnings && prescription.warnings.length > 0 && (
        <div className="p-5 rounded-2xl bg-amber-50 dark:bg-zinc-900 border-2 border-amber-500/90 dark:border-amber-500 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 font-black text-sm sm:text-base text-amber-950 dark:text-amber-300">
            <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>{t.warningsTitle}</span>
          </div>
          <div className="space-y-2">
            {prescription.warnings.map((w, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 font-semibold leading-relaxed p-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-amber-200/80 dark:border-zinc-700"
              >
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                <span>{w}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Save Button */}
      {onSave && (
        <div className="pt-2 flex flex-wrap justify-end gap-3">
          <button
            onClick={() => onSave(prescription)}
            disabled={isSaved}
            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
              isSaved
                ? 'bg-emerald-600 text-white cursor-default shadow-xs'
                : 'bg-[var(--a)] hover:bg-amber-600 text-white shadow-md shadow-amber-500/20'
            }`}
          >
            {isSaved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            <span>{isSaved ? t.savedRxBtn : t.saveRxBtn}</span>
          </button>
        </div>
      )}
    </div>
  );
};
