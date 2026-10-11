import { LanguageCode, LanguageInfo, TimingSlot } from '../types';
import { TRANSLATIONS } from './translations';

export const LANGUAGES: Record<LanguageCode, LanguageInfo> = {
  hi: {
    code: 'hi',
    label: 'हिन्दी',
    speechCode: 'hi-IN',
    englishName: 'Hindi',
  },
  mwr: {
    code: 'mwr',
    label: 'मारवाड़ी',
    speechCode: 'hi-IN',
    englishName: 'Marwari (Rajasthani, Devanagari script)',
  },
  en: {
    code: 'en',
    label: 'English',
    speechCode: 'en-IN',
    englishName: 'English',
  },
  gu: {
    code: 'gu',
    label: 'ગુજરાતી',
    speechCode: 'gu-IN',
    englishName: 'Gujarati',
  },
  ta: {
    code: 'ta',
    label: 'தமிழ்',
    speechCode: 'ta-IN',
    englishName: 'Tamil',
  },
  pa: {
    code: 'pa',
    label: 'ਪੰਜਾਬੀ',
    speechCode: 'pa-IN',
    englishName: 'Punjabi',
  },
};

export const TIME_SLOT_TIMES: Record<TimingSlot, string> = {
  morning: '08:00 AM',
  afternoon: '02:00 PM',
  night: '09:00 PM',
};

export function getTimeSlotLabel(slot: TimingSlot, lang: LanguageCode): string {
  const t = TRANSLATIONS[lang]?.rem || TRANSLATIONS.hi.rem;
  if (slot === 'morning') return t.timeLabelMorning;
  if (slot === 'afternoon') return t.timeLabelAfternoon;
  if (slot === 'night') return t.timeLabelNight;
  return slot;
}

export const TIME_LABELS: Record<string, { hi: string; time: string }> = {
  morning: { hi: 'सुबह', time: '08:00 AM' },
  afternoon: { hi: 'दोपहर', time: '02:00 PM' },
  night: { hi: 'रात', time: '09:00 PM' },
};
