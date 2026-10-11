import React, { useState, useEffect } from 'react';
import { Bell, CheckCircle2, Circle, Clock, Volume2 } from 'lucide-react';
import { Prescription, LanguageCode, ReminderItem, TimingSlot } from '../../types';
import { getTimeSlotLabel, TIME_SLOT_TIMES } from '../../data/languages';
import { TRANSLATIONS } from '../../data/translations';
import { speakText } from '../../services/speech';

interface RemindersTabProps {
  prescriptions: Prescription[];
  language: LanguageCode;
}

export const RemindersTab: React.FC<RemindersTabProps> = ({ prescriptions, language }) => {
  const [filterMode, setFilterMode] = useState<'today' | 'all'>('today');
  const [takenStatus, setTakenStatus] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem('dm_taken_status') || '{}');
    } catch {
      return {};
    }
  });
  const [activeAlert, setActiveAlert] = useState<string | null>(null);
  const t = TRANSLATIONS[language]?.rem || TRANSLATIONS.hi.rem;

  // Build scheduled reminders from prescriptions
  const buildReminders = (): ReminderItem[] => {
    const list: ReminderItem[] = [];
    const now = new Date();

    const slotHourMap: Record<TimingSlot, number> = {
      morning: 8,
      afternoon: 14,
      night: 21,
    };

    prescriptions.forEach((rx) => {
      rx.meds.forEach((med) => {
        const days = Math.max(1, med.days || 5);
        for (let i = 0; i < days; i++) {
          const d = new Date(rx.ts);
          d.setDate(d.getDate() + i);
          const dateStr = d.toISOString().split('T')[0];

          (med.times || []).forEach((slot) => {
            const h = slotHourMap[slot] || 8;
            const fullDate = new Date(d);
            fullDate.setHours(h, 0, 0, 0);

            const id = `${rx.id}_${med.name}_${dateStr}_${slot}`;
            list.push({
              id,
              rxId: rx.id,
              medicineName: med.name,
              timeSlot: slot,
              timeString: TIME_SLOT_TIMES[slot] || '08:00 AM',
              targetDate: dateStr,
              dateTime: fullDate.getTime(),
              meal: med.meal,
              isTaken: Boolean(takenStatus[id]),
            });
          });
        }
      });
    });

    return list.sort((a, b) => a.dateTime - b.dateTime);
  };

  const allReminders = buildReminders();
  const todayStr = new Date().toISOString().split('T')[0];

  const displayedReminders = allReminders.filter((r) => {
    if (filterMode === 'today') {
      return r.targetDate === todayStr;
    }
    return true;
  });

  const toggleTaken = (id: string) => {
    const next = { ...takenStatus, [id]: !takenStatus[id] };
    setTakenStatus(next);
    localStorage.setItem('dm_taken_status', JSON.stringify(next));
  };

  const handleTestChime = () => {
    const sampleMed = allReminders[0]?.medicineName || 'Paracetamol 650mg';
    const text = `${t.timeChimeAlert} ${sampleMed}।`;
    setActiveAlert(`${t.testAlertPrefix} ${sampleMed}`);
    speakText(text, language, () => {
      setTimeout(() => setActiveAlert(null), 3000);
    });
  };

  // Automated 25s live reminder checker
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const today = now.toISOString().split('T')[0];

      allReminders.forEach((r) => {
        if (r.targetDate === today && !takenStatus[r.id]) {
          const remDate = new Date(r.dateTime);
          const diffMinutes = Math.abs(
            (remDate.getTime() - now.getTime()) / (1000 * 60)
          );
          if (diffMinutes < 2) {
            const spoken = `${t.timeChimeAlert} ${r.medicineName}। ${r.meal || ''}`;
            setActiveAlert(`⏰ ${t.timeChimeAlert}: ${r.medicineName}`);
            speakText(spoken, language);
          }
        }
      });
    }, 25000);

    return () => clearInterval(interval);
  }, [allReminders, takenStatus, language, t.timeChimeAlert]);

  return (
    <div className="space-y-6">
      {/* Alert banner if active */}
      {activeAlert && (
        <div className="p-4 rounded-2xl bg-amber-500 text-white font-bold text-sm flex items-center justify-between shadow-lg shadow-amber-500/30 animate-pulse">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            <span>{activeAlert}</span>
          </div>
          <button
            onClick={() => setActiveAlert(null)}
            className="text-xs bg-black/20 px-2.5 py-1 rounded-lg cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-[var(--ink)]">
            {t.title}
          </h4>
          <p className="text-xs text-[var(--mut)]">
            {t.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleTestChime}
            className="px-3.5 py-2 rounded-xl bg-[var(--warn)] border border-[var(--a)]/40 text-amber-900 dark:text-amber-200 hover:bg-amber-100 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5 text-[var(--a)]" />
            <span>{t.testChimeBtn}</span>
          </button>

          {/* Filter toggle */}
          <div className="flex bg-[var(--bg)] border border-[var(--bd)] rounded-xl p-0.5 text-xs font-semibold">
            <button
              onClick={() => setFilterMode('today')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filterMode === 'today'
                  ? 'bg-[var(--p)] text-white shadow-xs'
                  : 'text-[var(--mut)] hover:text-[var(--ink)]'
              }`}
            >
              {t.filterToday}
            </button>
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-[var(--p)] text-white shadow-xs'
                  : 'text-[var(--mut)] hover:text-[var(--ink)]'
              }`}
            >
              {t.filterAll} ({allReminders.length})
            </button>
          </div>
        </div>
      </div>

      {/* Reminders List */}
      {displayedReminders.length === 0 ? (
        <div className="py-10 text-center space-y-3 bg-[var(--bg)] border border-[var(--bd)] rounded-3xl p-6">
          <Clock className="w-12 h-12 text-[var(--mut)] mx-auto opacity-50" />
          <h5 className="font-bold text-sm sm:text-base text-[var(--ink)]">
            {filterMode === 'today' ? t.emptyToday : t.emptyAll}
          </h5>
          <p className="text-xs text-[var(--mut)] max-w-sm mx-auto">
            {t.emptyDesc}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {displayedReminders.map((item) => {
            const isDone = Boolean(takenStatus[item.id]);
            const isToday = item.targetDate === todayStr;

            return (
              <div
                key={item.id}
                className={`p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                  isDone
                    ? 'bg-emerald-500/5 border-emerald-500/30 opacity-70'
                    : 'bg-[var(--card)] border-[var(--bd)] hover:border-[var(--p)] shadow-xs'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        item.timeSlot === 'morning'
                          ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300'
                          : item.timeSlot === 'afternoon'
                          ? 'bg-sky-500/15 text-sky-700 dark:text-sky-300'
                          : 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300'
                      }`}
                    >
                      {getTimeSlotLabel(item.timeSlot, language)} • {item.timeString}
                    </span>

                    {isToday && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-teal-500/15 text-teal-700 dark:text-teal-300">
                        {t.todayBadge}
                      </span>
                    )}
                  </div>

                  <h5
                    className={`font-bold text-sm sm:text-base ${
                      isDone ? 'line-through text-[var(--mut)]' : 'text-[var(--ink)]'
                    }`}
                  >
                    💊 {item.medicineName}
                  </h5>

                  {item.meal && (
                    <p className="text-xs text-[var(--mut)]">{item.meal}</p>
                  )}

                  <div className="text-[11px] text-[var(--mut)] pt-0.5">
                    {t.dateLabel} {new Date(item.dateTime).toLocaleDateString()}
                  </div>
                </div>

                {/* Mark as Taken button */}
                <button
                  onClick={() => toggleTaken(item.id)}
                  className={`p-2 rounded-xl transition-all cursor-pointer ${
                    isDone
                      ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10'
                      : 'text-[var(--mut)] hover:text-[var(--p)] bg-[var(--bg)] border border-[var(--bd)]'
                  }`}
                  title={isDone ? t.takenTooltip : t.markTakenTooltip}
                >
                  {isDone ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
