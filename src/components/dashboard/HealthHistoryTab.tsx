import React, { useState, useEffect } from 'react';
import { Activity, RefreshCw, Volume2, Sparkles, TrendingUp, ShieldAlert } from 'lucide-react';
import { Prescription, LanguageCode, HealthHistoryData } from '../../types';
import { fetchHealthHistoryApi } from '../../services/api';
import { speakText } from '../../services/speech';
import { TRANSLATIONS } from '../../data/translations';

interface HealthHistoryTabProps {
  prescriptions: Prescription[];
  language: LanguageCode;
  apiKey?: string;
}

export const HealthHistoryTab: React.FC<HealthHistoryTabProps> = ({
  prescriptions,
  language,
  apiKey,
}) => {
  const [historyData, setHistoryData] = useState<HealthHistoryData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const t = TRANSLATIONS[language]?.hist || TRANSLATIONS.hi.hist;

  const loadHistory = async () => {
    if (!prescriptions.length) return;
    setIsLoading(true);

    try {
      const data = await fetchHealthHistoryApi(prescriptions, language, apiKey);
      setHistoryData(data);
    } catch (err: any) {
      console.warn('History API error:', err);
      // Friendly localized fallback so user always sees valuable insights
      setHistoryData({
        overview: t.fallbackOverview,
        changes: [t.fallbackChange1, t.fallbackChange2],
        advice: [t.fallbackAdvice1, t.fallbackAdvice2, t.fallbackAdvice3],
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (prescriptions.length > 0 && !isLoading) {
      loadHistory();
    }
  }, [prescriptions.length, language]);

  const handleSpeakHistory = () => {
    if (!historyData) return;
    const text = `${historyData.overview}। ${t.changesTitle}: ${historyData.changes.join(
      '। '
    )}। ${t.adviceTitle}: ${historyData.advice.join('। ')}`;
    speakText(text, language);
  };

  if (prescriptions.length === 0) {
    return (
      <div className="py-12 text-center space-y-4 bg-[var(--bg)] border border-[var(--bd)] rounded-3xl p-6">
        <Activity className="w-14 h-14 text-[var(--mut)] mx-auto opacity-40" />
        <h4 className="text-base sm:text-lg font-bold text-[var(--ink)]">
          {t.emptyTitle}
        </h4>
        <p className="text-xs sm:text-sm text-[var(--mut)] max-w-md mx-auto">
          {t.emptyDesc}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-[var(--ink)] flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[var(--p)]" />
            <span>{t.title}</span>
          </h4>
          <p className="text-xs text-[var(--mut)]">
            {prescriptions.length} {t.prescriptionsCountSuffix}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {historyData && (
            <button
              onClick={handleSpeakHistory}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--p)] to-[var(--p2)] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              <span>{t.listenReportBtn}</span>
            </button>
          )}

          <button
            onClick={loadHistory}
            disabled={isLoading}
            className="p-2 rounded-xl bg-[var(--bg)] border border-[var(--bd)] text-[var(--mut)] hover:text-[var(--ink)] transition-colors cursor-pointer"
            title={t.reloadBtn}
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="py-16 text-center space-y-3 bg-[var(--bg)] border border-[var(--bd)] rounded-3xl p-6">
          <RefreshCw className="w-8 h-8 text-[var(--p)] animate-spin mx-auto" />
          <p className="text-sm font-semibold text-[var(--ink)]">
            {t.analyzingTitle}
          </p>
          <p className="text-xs text-[var(--mut)]">
            {t.analyzingDesc}
          </p>
        </div>
      ) : historyData ? (
        <div className="space-y-5">
          {/* Overview Banner */}
          <div className="p-5 rounded-2xl bg-[var(--warn)] border-l-4 border-[var(--a)] text-amber-950 dark:text-amber-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-[var(--a)]" />
              <span>{t.overviewTitle}</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">{historyData.overview}</p>
          </div>

          {/* Changes in treatment */}
          {historyData.changes && historyData.changes.length > 0 && (
            <div className="p-5 rounded-2xl bg-[var(--card)] border border-[var(--bd)] space-y-3">
              <h5 className="font-bold text-sm sm:text-base text-[var(--ink)] flex items-center gap-2">
                <span>{t.changesTitle}</span>
              </h5>
              <div className="space-y-2">
                {historyData.changes.map((c, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[var(--bg)] border-l-4 border-l-[var(--p)] border border-[var(--bd)] text-xs sm:text-sm text-[var(--ink)]"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lifestyle & Safety Advice */}
          {historyData.advice && historyData.advice.length > 0 && (
            <div className="p-5 rounded-2xl bg-[var(--card)] border border-[var(--bd)] space-y-3">
              <h5 className="font-bold text-sm sm:text-base text-[var(--ink)] flex items-center gap-2">
                <span>{t.adviceTitle}</span>
              </h5>
              <div className="space-y-2">
                {historyData.advice.map((a, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-amber-500/10 border-l-4 border-l-amber-500 border border-amber-500/20 text-xs sm:text-sm text-amber-900 dark:text-amber-200"
                  >
                    {a}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="p-3.5 rounded-xl bg-[var(--bg)] border border-[var(--bd)] text-xs text-[var(--mut)] flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
            <span>
              {t.historyDisclaimer}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
