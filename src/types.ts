export type TimingSlot = 'morning' | 'afternoon' | 'night';

export interface Medicine {
  name: string;
  local_name?: string;
  type?: string;
  info?: string;
  purpose: string;
  uses?: string;
  dose?: string;
  times: TimingSlot[];
  meal?: string;
  days?: number;
  side_effects?: string;
  avoid_food?: string;
  food_interactions?: string;
  avoid_drugs?: string;
  drug_interactions?: string;
  special_instructions?: string;
}

export interface Prescription {
  id: string;
  ts: number;
  doctor?: string;
  date?: string;
  summary: string;
  meds: Medicine[];
  warnings?: string[];
  imageUrl?: string;
  lang?: LanguageCode;
}

export interface UserSession {
  email: string;
  name: string;
}

export type LanguageCode = 'hi' | 'en' | 'mwr' | 'gu' | 'ta' | 'pa';

export interface LanguageInfo {
  code: LanguageCode;
  label: string;
  speechCode: string;
  englishName: string;
}

export interface HealthHistoryData {
  overview: string;
  changes: string[];
  advice: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ReminderItem {
  id: string;
  rxId: string;
  medicineName: string;
  timeSlot: TimingSlot;
  timeString: string;
  targetDate: string; // ISO date YYYY-MM-DD
  dateTime: number; // timestamp
  meal?: string;
  isTaken: boolean;
}
