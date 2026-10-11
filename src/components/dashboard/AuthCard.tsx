import React, { useState } from 'react';
import { Lock, LogIn, UserPlus, AlertCircle } from 'lucide-react';
import { UserSession, LanguageCode } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import {
  signUpWithSupabase,
  signInWithSupabase,
} from '../../services/supabase';

interface AuthCardProps {
  onLoginSuccess: (user: UserSession) => void;
  language: LanguageCode;
}

export const AuthCard: React.FC<AuthCardProps> = ({ onLoginSuccess, language }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [infoMsg, setInfoMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const t = TRANSLATIONS[language]?.auth || TRANSLATIONS.hi.auth;

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg('');
    setInfoMsg('');

    const trimmedEmail = email.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      setErrorMsg(t.emailError);
      return;
    }

    if (password.length < 6) {
      setErrorMsg(t.pwdError);
      return;
    }

    setIsLoading(true);

    try {
      if (mode === 'signup') {
        const displayName = name.trim() || trimmedEmail.split('@')[0];
        const res = await signUpWithSupabase(trimmedEmail, password, displayName);

        if (res.error) {
          const lowerErr = res.error.toLowerCase();
          if (lowerErr.includes('already registered')) {
            setErrorMsg('यह ईमेल पहले से Supabase में पंजीकृत है। कृपया ऊपर दिए गए "लॉगिन करें" टैब पर क्लिक करके पासवर्ड दर्ज करें।');
          } else if (lowerErr.includes('rate limit') || lowerErr.includes('over_email_send_rate_limit')) {
            setErrorMsg(
              '⚠️ Supabase ईमेल सीमा (Rate Limit) पूरी हो गई है: Supabase फ्री टियर प्रति घंटे केवल 3-4 ईमेल भेजने की अनुमति देता है। यदि आपने पहले साइनअप किया था (उदा. kartikgehlot004@gmail.com), तो कृपया ऊपर "लॉगिन करें" टैब से सीधा लॉगिन करें। नए खाते के लिए Supabase Dashboard > Authentication > Providers > Email में "Confirm email" बंद करें।'
            );
          } else {
            setErrorMsg(res.error);
          }
        } else if (res.user) {
          if (res.requiresEmailConfirmation) {
            setInfoMsg(
              'खाता Supabase में सफलतापूर्वक बन गया! आपके ईमेल पर पुष्टि (verification) लिंक भेजा गया है। कृपया ईमेल सत्यापित करें या लॉगिन करें।'
            );
          }
          localStorage.setItem('dm_session', JSON.stringify(res.user));
          onLoginSuccess(res.user);
        }
      } else {
        const res = await signInWithSupabase(trimmedEmail, password);

        if (res.error) {
          if (res.error.toLowerCase().includes('invalid login credentials')) {
            setErrorMsg('ईमेल या पासवर्ड गलत है। यदि नया खाता बनाया है तो कृपया सही क्रेडेंशियल दर्ज करें।');
          } else if (res.error.toLowerCase().includes('email not confirmed')) {
            setErrorMsg('कृपया पहले अपने ईमेल इनबॉक्स में जाकर वेरिफिकेशन लिंक पर क्लिक करें।');
          } else {
            setErrorMsg(res.error);
          }
        } else if (res.user) {
          localStorage.setItem('dm_session', JSON.stringify(res.user));
          onLoginSuccess(res.user);
        }
      }
    } catch (err: any) {
      setErrorMsg(err?.message || 'Authentication error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-[var(--card)] border border-[var(--bd)] rounded-3xl p-6 sm:p-8 shadow-xl shadow-[var(--p)]/10 text-center relative">
      <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-[var(--p)] flex items-center justify-center mx-auto mb-4">
        <Lock className="w-8 h-8" />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-[var(--ink)]">
        {mode === 'login' ? t.loginTitle : t.signupTitle}
      </h3>
      <p className="text-xs sm:text-sm text-[var(--mut)] mt-1 mb-6">
        {t.desc}
      </p>

      {/* Mode Switcher Tabs */}
      <div className="flex bg-[var(--bg)] border border-[var(--bd)] rounded-2xl p-1 mb-6">
        <button
          type="button"
          onClick={() => {
            setMode('login');
            setErrorMsg('');
            setInfoMsg('');
          }}
          className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            mode === 'login'
              ? 'bg-[var(--p)] text-white shadow-xs'
              : 'text-[var(--mut)] hover:text-[var(--ink)]'
          }`}
        >
          {t.loginTab}
        </button>
        <button
          type="button"
          onClick={() => {
            setMode('signup');
            setErrorMsg('');
            setInfoMsg('');
          }}
          className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            mode === 'signup'
              ? 'bg-[var(--p)] text-white shadow-xs'
              : 'text-[var(--mut)] hover:text-[var(--ink)]'
          }`}
        >
          {t.signupTab}
        </button>
      </div>

      {errorMsg && (
        <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs sm:text-sm flex items-center gap-2 text-left">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {infoMsg && (
        <div className="mb-4 p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs sm:text-sm text-left">
          {infoMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
        {mode === 'signup' && (
          <div>
            <label className="block text-xs font-semibold text-[var(--mut)] mb-1">
              {t.nameLabel}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--bd)] bg-[var(--bg)] text-[var(--ink)] text-sm focus:outline-hidden focus:border-[var(--p)] transition-colors"
            />
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold text-[var(--mut)] mb-1">
            {t.emailLabel}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            autoComplete="username"
            required
            className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--bd)] bg-[var(--bg)] text-[var(--ink)] text-sm focus:outline-hidden focus:border-[var(--p)] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[var(--mut)] mb-1">
            {t.pwdLabel}
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t.pwdPlaceholder}
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            required
            className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--bd)] bg-[var(--bg)] text-[var(--ink)] text-sm focus:outline-hidden focus:border-[var(--p)] transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--p)] to-[var(--p2)] hover:opacity-95 text-white font-bold text-sm shadow-md shadow-[var(--p)]/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-60"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : mode === 'login' ? (
            <LogIn className="w-4 h-4" />
          ) : (
            <UserPlus className="w-4 h-4" />
          )}
          <span>
            {isLoading
              ? mode === 'login'
                ? 'लॉगिन हो रहा है...'
                : 'खाता बन रहा है...'
              : mode === 'login'
              ? t.loginBtn
              : t.signupBtn}
          </span>
        </button>
      </form>

      {/* Clean Privacy note */}
      <div className="mt-5 pt-4 border-t border-[var(--bd)]">
        <p className="text-[11px] text-[var(--mut)]">
          {t.privacyNote}
        </p>
      </div>
    </div>
  );
};
