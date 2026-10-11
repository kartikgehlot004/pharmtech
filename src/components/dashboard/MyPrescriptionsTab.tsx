import React from 'react';
import { Calendar, Trash2, Eye, Volume2, Pill, Plus } from 'lucide-react';
import { Prescription, LanguageCode } from '../../types';
import { speakText } from '../../services/speech';
import { TRANSLATIONS } from '../../data/translations';

interface MyPrescriptionsTabProps {
  prescriptions: Prescription[];
  onSelectPrescription: (rx: Prescription) => void;
  onDeletePrescription: (id: string) => void;
  onGoToScan: () => void;
  language: LanguageCode;
}

export const MyPrescriptionsTab: React.FC<MyPrescriptionsTabProps> = ({
  prescriptions,
  onSelectPrescription,
  onDeletePrescription,
  onGoToScan,
  language,
}) => {
  const t = TRANSLATIONS[language]?.my || TRANSLATIONS.hi.my;
  const rxT = TRANSLATIONS[language]?.rxCard || TRANSLATIONS.hi.rxCard;

  const handleSpeakSummary = (rx: Prescription) => {
    const text = `${rx.doctor || rxT.rxHeader}। ${rx.summary || ''} ${rxT.medsSectionTitle}: ${rx.meds
      .map((m) => m.name)
      .join(', ')}।`;
    speakText(text, language);
  };

  if (prescriptions.length === 0) {
    return (
      <div className="py-12 text-center space-y-4 bg-[var(--bg)] border border-[var(--bd)] rounded-3xl p-6">
        <div className="w-16 h-16 rounded-2xl bg-teal-500/10 text-[var(--p)] flex items-center justify-center mx-auto">
          <Pill className="w-8 h-8" />
        </div>
        <h4 className="text-base sm:text-lg font-bold text-[var(--ink)]">
          {t.emptyTitle}
        </h4>
        <p className="text-xs sm:text-sm text-[var(--mut)] max-w-sm mx-auto">
          {t.emptyDesc}
        </p>
        <button
          onClick={onGoToScan}
          className="px-5 py-2.5 rounded-xl bg-[var(--p)] text-white font-bold text-xs sm:text-sm shadow-md shadow-[var(--p)]/20 hover:opacity-95 transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{t.startAddingBtn}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-[var(--ink)]">
          {t.title} ({prescriptions.length})
        </h4>
        <button
          onClick={onGoToScan}
          className="px-3 py-1.5 rounded-xl bg-[var(--p)]/10 text-[var(--p)] hover:bg-[var(--p)]/20 font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>{t.addNewBtn}</span>
        </button>
      </div>

      <div className="space-y-3">
        {prescriptions.map((rx) => (
          <div
            key={rx.id}
            className="p-4 sm:p-5 rounded-2xl bg-[var(--card)] border border-[var(--bd)] hover:border-[var(--p)] transition-all shadow-xs space-y-3"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h5 className="font-bold text-sm sm:text-base text-[var(--ink)]">
                    {rx.doctor || rxT.rxHeader}
                  </h5>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--mut)] mt-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    {rx.date || new Date(rx.ts).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleSpeakSummary(rx)}
                  title={rxT.listenAllBtn}
                  className="p-2 rounded-xl bg-[var(--bg)] border border-[var(--bd)] text-[var(--p)] hover:bg-[var(--p)]/10 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectPrescription(rx)}
                  className="px-3 py-1.5 rounded-xl bg-[var(--p)] text-white hover:opacity-90 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t.viewBtn}</span>
                </button>
                <button
                  onClick={() => {
                    if (confirm(t.deleteConfirm)) {
                      onDeletePrescription(rx.id);
                    }
                  }}
                  title="Delete"
                  className="p-2 rounded-xl bg-[var(--bg)] border border-[var(--bd)] text-rose-500 hover:bg-rose-500/10 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Summary */}
            {rx.summary && (
              <p className="text-xs sm:text-sm text-[var(--mut)] line-clamp-2">
                {rx.summary}
              </p>
            )}

            {/* Meds Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {rx.meds.map((m, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-full bg-[var(--bg)] border border-[var(--bd)] text-xs text-[var(--ink)] font-medium"
                >
                  💊 {m.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
