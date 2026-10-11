import React, { useState, useEffect } from 'react';
import {
  Camera,
  FolderHeart,
  Bell,
  TrendingUp,
  Mic,
  LogOut,
  Key,
  Globe,
  Database,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';
import { Prescription, LanguageCode, UserSession } from '../types';
import { LANGUAGES } from '../data/languages';
import { TRANSLATIONS } from '../data/translations';
import { AuthCard } from './dashboard/AuthCard';
import { ScanTab } from './dashboard/ScanTab';
import { MyPrescriptionsTab } from './dashboard/MyPrescriptionsTab';
import { RemindersTab } from './dashboard/RemindersTab';
import { HealthHistoryTab } from './dashboard/HealthHistoryTab';
import { AssistantTab } from './dashboard/AssistantTab';
import { PrescriptionResultCard } from './dashboard/PrescriptionResultCard';
import {
  savePrescriptionToSupabase,
  fetchPrescriptionsFromSupabase,
  deletePrescriptionFromSupabase,
  SUPABASE_PROJECT_ID,
  SUPABASE_BUCKET_NAME,
  SUPABASE_SQL_SETUP_SCRIPT,
} from '../services/supabase';

interface DashboardProps {
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  currentUser: UserSession | null;
  onLoginSuccess: (user: UserSession) => void;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  language,
  onLanguageChange,
  currentUser,
  onLoginSuccess,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<'scan' | 'my' | 'reminders' | 'history' | 'assistant'>('scan');
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [selectedRxForView, setSelectedRxForView] = useState<Prescription | null>(null);
  const [customApiKey, setCustomApiKey] = useState<string>(() => localStorage.getItem('dm_key') || '');
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [keyInput, setKeyInput] = useState('');
  const [showSupabaseModal, setShowSupabaseModal] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  const t = TRANSLATIONS[language]?.dash || TRANSLATIONS.hi.dash;
  const scanT = TRANSLATIONS[language]?.scan || TRANSLATIONS.hi.scan;

  // Storage key for user's prescriptions
  const storageKey = currentUser ? `dm_db_data_users_${currentUser.email}` : '';

  useEffect(() => {
    if (!currentUser?.email) return;

    // 1. Initial quick load from local cache
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');
      if (Array.isArray(stored) && stored.length > 0) {
        setPrescriptions(stored);
      }
    } catch (e) {
      // ignore
    }

    // 2. Fetch from Supabase backend table 'prescriptions'
    let isCurrent = true;
    fetchPrescriptionsFromSupabase(currentUser.email).then(({ data, error }) => {
      if (!isCurrent) return;
      if (data && data.length > 0) {
        setPrescriptions(data);
        localStorage.setItem(storageKey, JSON.stringify(data));
      }
    });

    return () => {
      isCurrent = false;
    };
  }, [currentUser?.email, storageKey]);

  const savePrescriptionsToStorage = (updated: Prescription[]) => {
    setPrescriptions(updated);
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    }
  };

  const handleSavePrescription = async (rx: Prescription) => {
    const existingIdx = prescriptions.findIndex((p) => p.id === rx.id);
    let updated: Prescription[];
    if (existingIdx >= 0) {
      updated = [...prescriptions];
      updated[existingIdx] = rx;
    } else {
      updated = [rx, ...prescriptions];
    }
    savePrescriptionsToStorage(updated);

    // Save/upsert to Supabase database table
    if (currentUser?.email) {
      await savePrescriptionToSupabase(rx, currentUser.email);
    }
  };

  const handleDeletePrescription = async (id: string) => {
    const updated = prescriptions.filter((p) => p.id !== id);
    savePrescriptionsToStorage(updated);
    if (selectedRxForView?.id === id) {
      setSelectedRxForView(null);
    }
    // Delete from Supabase database table
    if (currentUser?.email) {
      await deletePrescriptionFromSupabase(id, currentUser.email);
    }
  };

  const handleOpenRxDetail = (rx: Prescription) => {
    setSelectedRxForView(rx);
    setActiveTab('scan');
  };

  const handleSaveCustomKey = () => {
    const trimmed = keyInput.trim();
    if (trimmed) {
      localStorage.setItem('dm_key', trimmed);
      setCustomApiKey(trimmed);
      setShowKeyModal(false);
    }
  };

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SETUP_SCRIPT);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2500);
  };

  return (
    <section id="app" className="py-16 md:py-20 bg-gradient-to-b from-[var(--bg)] to-teal-500/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider text-[var(--p)] uppercase px-3 py-1 rounded-full bg-[var(--p)]/10 border border-[var(--p)]/20">
            {t.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--ink)] mt-3">
            {t.title}
          </h2>
          <p className="text-[var(--mut)] text-xs sm:text-sm mt-1.5">
            {currentUser ? t.subtitleLogged : t.subtitleGuest}
          </p>
        </div>

        {/* Not Logged In */}
        {!currentUser ? (
          <AuthCard onLoginSuccess={onLoginSuccess} language={language} />
        ) : (
          /* Main Dashboard Box */
          <div className="bg-[var(--card)] border border-[var(--bd)] rounded-3xl p-5 sm:p-8 shadow-xl shadow-[var(--p)]/10 space-y-6">
            {/* Top User Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--bd)] pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">🙏</span>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-[var(--ink)] leading-tight">
                    {t.greeting}, {currentUser.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[var(--mut)]">
                    <span>{currentUser.email}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* Supabase backend status button */}
                <button
                  type="button"
                  onClick={() => setShowSupabaseModal(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-500/20 transition-colors cursor-pointer"
                  title="Supabase Backend Details"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <Database className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Supabase Connected</span>
                </button>

                {/* Language Switcher inside dashboard */}
                <div className="flex items-center gap-1.5 bg-[var(--bg)] border border-[var(--bd)] rounded-xl px-2.5 py-1.5 text-xs">
                  <Globe className="w-3.5 h-3.5 text-[var(--p)]" />
                  <span className="text-[var(--mut)] font-semibold">{t.langLabel}</span>
                  <select
                    value={language}
                    onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
                    className="bg-transparent text-[var(--ink)] font-semibold focus:outline-hidden cursor-pointer"
                  >
                    {Object.values(LANGUAGES).map((l) => (
                      <option key={l.code} value={l.code} className="bg-[var(--card)]">
                        {l.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* API Key Modal Trigger */}
                <button
                  onClick={() => setShowKeyModal(true)}
                  title={t.apiKeyTitle}
                  className="p-2 rounded-xl bg-[var(--bg)] border border-[var(--bd)] text-[var(--mut)] hover:text-[var(--ink)] text-xs transition-colors cursor-pointer"
                >
                  <Key className="w-4 h-4" />
                </button>

                {/* Logout Button */}
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 rounded-xl bg-[var(--bg)] border border-[var(--bd)] hover:bg-rose-500/10 hover:text-rose-600 text-[var(--mut)] font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{t.logout}</span>
                </button>
              </div>
            </div>

            {/* Custom API Key Modal */}
            {showKeyModal && (
              <div className="p-4 rounded-2xl bg-[var(--warn)] border border-[var(--a)]/40 text-xs sm:text-sm text-amber-950 dark:text-amber-100 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-bold flex items-center gap-1.5 text-sm">
                    <Key className="w-4 h-4 text-[var(--a)]" />
                    <span>{t.apiKeyTitle}</span>
                  </div>
                  <button
                    onClick={() => setShowKeyModal(false)}
                    className="text-xs font-bold text-[var(--mut)] hover:text-[var(--ink)] cursor-pointer"
                  >
                    {t.apiKeyClose}
                  </button>
                </div>
                <p className="text-xs leading-relaxed text-amber-900 dark:text-amber-200">
                  {t.apiKeyDesc}
                </p>
                <div className="flex gap-2">
                  <input
                    type="password"
                    placeholder="AIzaSy..."
                    value={keyInput}
                    onChange={(e) => setKeyInput(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl border border-amber-300 dark:border-amber-700 bg-white dark:bg-black/40 text-xs text-[var(--ink)]"
                  />
                  <button
                    onClick={handleSaveCustomKey}
                    className="px-4 py-2 rounded-xl bg-[var(--p)] text-white font-bold text-xs cursor-pointer shadow-xs"
                  >
                    {t.apiKeySave}
                  </button>
                </div>
              </div>
            )}

            {/* Supabase Details Modal */}
            {showSupabaseModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                <div className="bg-[var(--card)] border border-[var(--bd)] rounded-3xl p-6 max-w-xl w-full text-left shadow-2xl max-h-[85vh] flex flex-col">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--bd)]">
                    <div className="flex items-center gap-2">
                      <Database className="w-5 h-5 text-emerald-500" />
                      <h4 className="font-bold text-base text-[var(--ink)]">
                        Supabase Backend (kartikgehlot004's Project)
                      </h4>
                    </div>
                    <button
                      onClick={() => setShowSupabaseModal(false)}
                      className="text-[var(--mut)] hover:text-[var(--ink)] font-bold text-sm cursor-pointer p-1"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="py-4 space-y-3 text-xs text-[var(--mut)]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--bd)]">
                        <div className="text-[10px] uppercase font-bold text-[var(--mut)]">Project ID</div>
                        <div className="font-mono font-bold text-[var(--ink)]">{SUPABASE_PROJECT_ID}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--bd)]">
                        <div className="text-[10px] uppercase font-bold text-[var(--mut)]">Database Table</div>
                        <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400">public.prescriptions</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--bd)]">
                        <div className="text-[10px] uppercase font-bold text-[var(--mut)]">Storage Bucket</div>
                        <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{SUPABASE_BUCKET_NAME}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--bd)]">
                        <div className="text-[10px] uppercase font-bold text-[var(--mut)]">Auth Status</div>
                        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span>Connected & Active</span>
                        </div>
                      </div>
                    </div>

                    <p className="pt-2">
                      पर्ची अपलोड करने पर फोटो Supabase Storage बकेट (<code className="font-mono font-bold">{SUPABASE_BUCKET_NAME}</code>) में और दवाइयों की जानकारी, खुराक व चेतावनी डेटाबेस टेबल (<code className="font-mono font-bold">public.prescriptions</code>) में सुरक्षित होती है।
                    </p>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200">
                      <span>Supabase Dashboard me SQL setup chalane ke liye:</span>
                      <a
                        href={`https://supabase.com/dashboard/project/${SUPABASE_PROJECT_ID}/sql`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold text-[11px] hover:bg-emerald-700 flex items-center gap-1"
                      >
                        <span>Open SQL Editor</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="relative flex-1 overflow-auto bg-slate-950 text-slate-100 p-3 rounded-xl font-mono text-[11px] border border-slate-800">
                    <pre className="whitespace-pre-wrap">{SUPABASE_SQL_SETUP_SCRIPT}</pre>
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-3 border-t border-[var(--bd)] mt-3">
                    <button
                      onClick={handleCopySql}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      {copiedSql ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedSql ? 'Copied to Clipboard!' : 'Copy SQL Script'}</span>
                    </button>
                    <button
                      onClick={() => setShowSupabaseModal(false)}
                      className="px-4 py-2 rounded-xl bg-[var(--bg)] border border-[var(--bd)] text-[var(--ink)] font-semibold text-xs cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Dashboard Tabs Bar */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-[var(--bg)] border border-[var(--bd)] rounded-2xl">
              <button
                onClick={() => {
                  setSelectedRxForView(null);
                  setActiveTab('scan');
                }}
                className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'scan'
                    ? 'bg-[var(--p)] text-white shadow-md shadow-[var(--p)]/25'
                    : 'bg-[var(--bg)] border border-[var(--bd)] text-[var(--mut)] hover:text-[var(--ink)]'
                }`}
              >
                <Camera className="w-4 h-4" />
                <span>{t.tabScan}</span>
              </button>

              <button
                onClick={() => setActiveTab('my')}
                className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'my'
                    ? 'bg-[var(--p)] text-white shadow-md shadow-[var(--p)]/25'
                    : 'bg-[var(--bg)] border border-[var(--bd)] text-[var(--mut)] hover:text-[var(--ink)]'
                }`}
              >
                <FolderHeart className="w-4 h-4" />
                <span>
                  {t.tabMy} ({prescriptions.length})
                </span>
              </button>

              <button
                onClick={() => setActiveTab('reminders')}
                className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'reminders'
                    ? 'bg-[var(--p)] text-white shadow-md shadow-[var(--p)]/25'
                    : 'bg-[var(--bg)] border border-[var(--bd)] text-[var(--mut)] hover:text-[var(--ink)]'
                }`}
              >
                <Bell className="w-4 h-4" />
                <span>{t.tabReminders}</span>
              </button>

              <button
                onClick={() => setActiveTab('history')}
                className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'history'
                    ? 'bg-[var(--p)] text-white shadow-md shadow-[var(--p)]/25'
                    : 'bg-[var(--bg)] border border-[var(--bd)] text-[var(--mut)] hover:text-[var(--ink)]'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>{t.tabHistory}</span>
              </button>

              <button
                onClick={() => setActiveTab('assistant')}
                className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'assistant'
                    ? 'bg-[var(--p)] text-white shadow-md shadow-[var(--p)]/25'
                    : 'bg-[var(--bg)] border border-[var(--bd)] text-[var(--mut)] hover:text-[var(--ink)]'
                }`}
              >
                <Mic className="w-4 h-4" />
                <span>{t.tabAssistant}</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="pt-2">
              {activeTab === 'scan' && (
                <>
                  {selectedRxForView ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => setSelectedRxForView(null)}
                          className="text-xs font-bold text-[var(--p)] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          {scanT.backToScan}
                        </button>
                        <span className="text-xs font-semibold text-[var(--mut)]">
                          {scanT.savedRxDetail}
                        </span>
                      </div>
                      <PrescriptionResultCard
                        prescription={selectedRxForView}
                        language={language}
                        isSaved={true}
                      />
                    </div>
                  ) : (
                    <ScanTab
                      language={language}
                      onSavePrescription={handleSavePrescription}
                      savedPrescriptions={prescriptions}
                      apiKey={customApiKey}
                      currentUser={currentUser}
                    />
                  )}
                </>
              )}

              {activeTab === 'my' && (
                <MyPrescriptionsTab
                  prescriptions={prescriptions}
                  onSelectPrescription={handleOpenRxDetail}
                  onDeletePrescription={handleDeletePrescription}
                  onGoToScan={() => {
                    setSelectedRxForView(null);
                    setActiveTab('scan');
                  }}
                  language={language}
                />
              )}

              {activeTab === 'reminders' && (
                <RemindersTab
                  prescriptions={prescriptions}
                  language={language}
                />
              )}

              {activeTab === 'history' && (
                <HealthHistoryTab
                  prescriptions={prescriptions}
                  language={language}
                  apiKey={customApiKey}
                />
              )}

              {activeTab === 'assistant' && (
                <AssistantTab
                  prescriptions={prescriptions}
                  language={language}
                  apiKey={customApiKey}
                />
              )}
            </div>

            {/* Medical Disclaimer under dashboard */}
            <div className="pt-4 border-t border-[var(--bd)] text-center text-[11px] text-[var(--mut)]">
              {t.medicalDisclaimer}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
