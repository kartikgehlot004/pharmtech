/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Dashboard } from './components/Dashboard';
import { GovernmentSchemes } from './components/GovernmentSchemes';
import { Footer } from './components/Footer';
import { LanguageCode, UserSession } from './types';
import {
  supabase,
  signOutWithSupabase,
  getCurrentSupabaseUser,
} from './services/supabase';

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    return (localStorage.getItem('dm_language') as LanguageCode) || 'hi';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('dm_theme') as 'light' | 'dark') || 'light';
  });

  const [currentUser, setCurrentUser] = useState<UserSession | null>(() => {
    try {
      return JSON.parse(localStorage.getItem('dm_session') || 'null');
    } catch {
      return null;
    }
  });

  // Listen to Supabase auth state changes and initial check
  useEffect(() => {
    // Check active Supabase session on mount
    getCurrentSupabaseUser().then((user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('dm_session', JSON.stringify(user));
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' && session?.user?.email) {
          const user: UserSession = {
            email: session.user.email,
            name: session.user.user_metadata?.name || session.user.email.split('@')[0],
          };
          setCurrentUser(user);
          localStorage.setItem('dm_session', JSON.stringify(user));
        } else if (event === 'SIGNED_OUT') {
          setCurrentUser(null);
          localStorage.removeItem('dm_session');
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('dm_theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
  }, [language]);

  const handleLanguageChange = (lang: LanguageCode) => {
    setLanguage(lang);
    localStorage.setItem('dm_language', lang);
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleLoginSuccess = (user: UserSession) => {
    setCurrentUser(user);
    localStorage.setItem('dm_session', JSON.stringify(user));
  };

  const handleLogout = async () => {
    await signOutWithSupabase();
    localStorage.removeItem('dm_session');
    setCurrentUser(null);
  };

  const scrollToApp = () => {
    const el = document.getElementById('app');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--p)]/20 selection:text-[var(--p2)]">
      {/* Top sticky navigation */}
      <Navbar
        language={language}
        onLanguageChange={handleLanguageChange}
        currentUser={currentUser}
        onLogout={handleLogout}
        onOpenDashboard={scrollToApp}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main>
        {/* Hero Section with Audio Simulation */}
        <Hero language={language} onUploadClick={scrollToApp} />

        {/* 3 Steps */}
        <HowItWorks language={language} />

        {/* 8 Core Features */}
        <Features language={language} />

        {/* Interactive Dashboard with Prescription Scanning, Audio, Reminders & AI Assistant */}
        <Dashboard
          language={language}
          onLanguageChange={handleLanguageChange}
          currentUser={currentUser}
          onLoginSuccess={handleLoginSuccess}
          onLogout={handleLogout}
        />

        {/* PMBJP Government Jan Aushadhi & Schemes */}
        <GovernmentSchemes language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}
