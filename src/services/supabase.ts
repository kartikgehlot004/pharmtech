import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Prescription, UserSession } from '../types';

// Provided by user
export const SUPABASE_PROJECT_ID = 'ptpttwpwzxnwmyoqgguw';

// Normalize URL: Supabase client requires the base project origin (e.g. https://xyz.supabase.co),
// NOT the PostgREST endpoint ending in /rest/v1 or with trailing slashes, which breaks Auth and Storage.
const rawUrl = (import.meta.env.VITE_SUPABASE_URL || `https://${SUPABASE_PROJECT_ID}.supabase.co`).trim();
export const SUPABASE_URL = rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '') || `https://${SUPABASE_PROJECT_ID}.supabase.co`;

export const SUPABASE_ANON_KEY =
  (import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_cxGZhwLpiS0dV5o4LHToUQ_WXmUuPXW').trim();

export const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export const SUPABASE_BUCKET_NAME = 'prescriptions';

/**
 * SQL Schema script to create tables and storage bucket policies in Supabase SQL editor
 */
export const SUPABASE_SQL_SETUP_SCRIPT = `-- DawaiMitra - Supabase Database & Storage Setup
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/${SUPABASE_PROJECT_ID}/sql

-- 1. Create 'prescriptions' table
CREATE TABLE IF NOT EXISTS public.prescriptions (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  user_email TEXT NOT NULL,
  doctor TEXT,
  date TEXT,
  summary TEXT,
  meds JSONB,
  warnings JSONB,
  image_url TEXT,
  lang TEXT DEFAULT 'hi',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create 'profiles' table for user details
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable RLS and add open policies for easy access
ALTER TABLE public.prescriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'prescriptions' AND policyname = 'Allow public read prescriptions'
  ) THEN
    CREATE POLICY "Allow public read prescriptions" ON public.prescriptions FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'prescriptions' AND policyname = 'Allow public insert prescriptions'
  ) THEN
    CREATE POLICY "Allow public insert prescriptions" ON public.prescriptions FOR INSERT WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'prescriptions' AND policyname = 'Allow public update prescriptions'
  ) THEN
    CREATE POLICY "Allow public update prescriptions" ON public.prescriptions FOR UPDATE USING (true) WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'prescriptions' AND policyname = 'Allow public delete prescriptions'
  ) THEN
    CREATE POLICY "Allow public delete prescriptions" ON public.prescriptions FOR DELETE USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Allow public manage profiles'
  ) THEN
    CREATE POLICY "Allow public manage profiles" ON public.profiles FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

-- 4. Create 'prescriptions' storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('${SUPABASE_BUCKET_NAME}', '${SUPABASE_BUCKET_NAME}', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 5. Storage policies for prescriptions bucket
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Allow public upload to prescriptions bucket'
  ) THEN
    CREATE POLICY "Allow public upload to prescriptions bucket" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = '${SUPABASE_BUCKET_NAME}');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Allow public view of prescriptions bucket'
  ) THEN
    CREATE POLICY "Allow public view of prescriptions bucket" ON storage.objects
    FOR SELECT USING (bucket_id = '${SUPABASE_BUCKET_NAME}');
  END IF;
END $$;
`;

// ==========================================
// AUTHENTICATION
// ==========================================

export async function signUpWithSupabase(
  email: string,
  password: string,
  name: string
): Promise<{ user: UserSession | null; error: string | null; requiresEmailConfirmation?: boolean }> {
  try {
    const trimmedEmail = email.trim().toLowerCase();
    const displayName = name.trim() || trimmedEmail.split('@')[0];

    const { data, error } = await supabase.auth.signUp({
      email: trimmedEmail,
      password,
      options: {
        data: {
          name: displayName,
        },
      },
    });

    if (error) {
      return { user: null, error: error.message };
    }

    if (data?.user) {
      // Upsert profile in Supabase profiles table
      try {
        await supabase.from('profiles').upsert({
          id: data.user.id,
          email: trimmedEmail,
          name: displayName,
          updated_at: new Date().toISOString(),
        });
      } catch (profileErr) {
        console.warn('Could not upsert profile into profiles table (table might not exist yet):', profileErr);
      }

      const sessionUser: UserSession = {
        email: trimmedEmail,
        name: displayName,
      };

      // Check if email confirmation is required by Supabase project
      const requiresEmailConfirmation = !data.session;

      return { user: sessionUser, error: null, requiresEmailConfirmation };
    }

    return { user: null, error: 'Registration failed' };
  } catch (err: any) {
    return { user: null, error: err?.message || 'Network error during signup' };
  }
}

export async function signInWithSupabase(
  email: string,
  password: string
): Promise<{ user: UserSession | null; error: string | null }> {
  try {
    const trimmedEmail = email.trim().toLowerCase();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: trimmedEmail,
      password,
    });

    if (error) {
      return { user: null, error: error.message };
    }

    if (data?.user) {
      const displayName =
        data.user.user_metadata?.name ||
        data.user.user_metadata?.full_name ||
        trimmedEmail.split('@')[0];

      const sessionUser: UserSession = {
        email: trimmedEmail,
        name: displayName,
      };

      return { user: sessionUser, error: null };
    }

    return { user: null, error: 'User not found' };
  } catch (err: any) {
    return { user: null, error: err?.message || 'Network error during signin' };
  }
}

export async function signOutWithSupabase(): Promise<void> {
  try {
    await supabase.auth.signOut();
  } catch (err) {
    console.warn('Supabase sign out error:', err);
  }
}

export async function getCurrentSupabaseUser(): Promise<UserSession | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (user && user.email) {
      return {
        email: user.email,
        name: user.user_metadata?.name || user.email.split('@')[0],
      };
    }
  } catch (err) {
    console.warn('Failed to get Supabase user:', err);
  }
  return null;
}

// ==========================================
// STORAGE: BUCKET UPLOAD
// ==========================================

/**
 * Converts a base64 Data URL to a Blob
 */
function dataURLtoBlob(dataurl: string): { blob: Blob; mimeType: string } {
  const arr = dataurl.split(',');
  const mimeMatch = arr[0].match(/:(.*?);/);
  const mimeType = mimeMatch ? mimeMatch[1] : 'image/jpeg';
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return { blob: new Blob([u8arr], { type: mimeType }), mimeType };
}

/**
 * Uploads a prescription image to Supabase Storage bucket 'prescriptions'.
 * Returns the public URL if successful, or falls back to the original dataUrl.
 */
export async function uploadPrescriptionImageToBucket(
  fileOrDataUrl: string | File,
  userEmail: string,
  prescriptionId?: string
): Promise<{ url: string; error?: string; uploadedToBucket: boolean }> {
  try {
    const sanitizedEmail = (userEmail || 'guest').replace(/[^a-zA-Z0-9_-]/g, '_');
    const timestamp = Date.now();
    const fileName = `${sanitizedEmail}/${prescriptionId || 'rx'}_${timestamp}.jpg`;

    let blob: Blob;
    let contentType = 'image/jpeg';

    if (typeof fileOrDataUrl === 'string') {
      if (fileOrDataUrl.startsWith('data:')) {
        const converted = dataURLtoBlob(fileOrDataUrl);
        blob = converted.blob;
        contentType = converted.mimeType;
      } else {
        // Already a remote URL
        return { url: fileOrDataUrl, uploadedToBucket: true };
      }
    } else {
      blob = fileOrDataUrl;
      contentType = fileOrDataUrl.type || 'image/jpeg';
    }

    // Attempt upload to Supabase bucket
    const { data, error } = await supabase.storage
      .from(SUPABASE_BUCKET_NAME)
      .upload(fileName, blob, {
        contentType,
        upsert: true,
      });

    if (error) {
      console.warn('Supabase storage bucket upload notice:', error.message);
      // Return original URL as fallback so the app functions seamlessly even before bucket creation
      return {
        url: typeof fileOrDataUrl === 'string' ? fileOrDataUrl : '',
        error: error.message,
        uploadedToBucket: false,
      };
    }

    if (data?.path) {
      const { data: publicUrlData } = supabase.storage
        .from(SUPABASE_BUCKET_NAME)
        .getPublicUrl(data.path);

      return {
        url: publicUrlData.publicUrl,
        uploadedToBucket: true,
      };
    }

    return {
      url: typeof fileOrDataUrl === 'string' ? fileOrDataUrl : '',
      uploadedToBucket: false,
    };
  } catch (err: any) {
    console.warn('Storage upload error:', err);
    return {
      url: typeof fileOrDataUrl === 'string' ? fileOrDataUrl : '',
      error: err?.message || 'Storage error',
      uploadedToBucket: false,
    };
  }
}

// ==========================================
// DATABASE: PRESCRIPTIONS TABLE
// ==========================================

export interface SupabasePrescriptionRow {
  id: string;
  user_email: string;
  user_id?: string | null;
  doctor?: string | null;
  date?: string | null;
  summary: string;
  meds: any;
  warnings?: any;
  image_url?: string | null;
  lang?: string | null;
  created_at?: string;
  updated_at?: string;
}

/**
 * Saves or updates a prescription in Supabase 'prescriptions' table.
 */
export async function savePrescriptionToSupabase(
  rx: Prescription,
  userEmail: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { data: authData } = await supabase.auth.getUser();
    const currentUserId = authData?.user?.id || null;

    const row: SupabasePrescriptionRow = {
      id: rx.id,
      user_email: userEmail.toLowerCase(),
      user_id: currentUserId,
      doctor: rx.doctor || 'Unknown Doctor',
      date: rx.date || new Date(rx.ts).toLocaleDateString(),
      summary: rx.summary,
      meds: rx.meds,
      warnings: rx.warnings || [],
      image_url: rx.imageUrl || null,
      lang: rx.lang || 'hi',
      created_at: new Date(rx.ts).toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from('prescriptions')
      .upsert(row, { onConflict: 'id' });

    if (error) {
      console.warn('Supabase DB save prescription warning:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.warn('Supabase DB error saving prescription:', err);
    return { success: false, error: err?.message || 'Failed to save to Supabase' };
  }
}

/**
 * Fetches all prescriptions for a user from Supabase 'prescriptions' table.
 */
export async function fetchPrescriptionsFromSupabase(
  userEmail: string
): Promise<{ data: Prescription[]; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('prescriptions')
      .select('*')
      .eq('user_email', userEmail.toLowerCase())
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase DB fetch prescriptions warning:', error.message);
      return { data: [], error: error.message };
    }

    if (!data) return { data: [] };

    const prescriptions: Prescription[] = data.map((row: any) => ({
      id: row.id,
      ts: row.created_at ? new Date(row.created_at).getTime() : Date.now(),
      doctor: row.doctor || undefined,
      date: row.date || undefined,
      summary: row.summary || '',
      meds: Array.isArray(row.meds) ? row.meds : [],
      warnings: Array.isArray(row.warnings) ? row.warnings : [],
      imageUrl: row.image_url || undefined,
      lang: row.lang || undefined,
    }));

    return { data: prescriptions };
  } catch (err: any) {
    console.warn('Supabase DB fetch error:', err);
    return { data: [], error: err?.message };
  }
}

/**
 * Deletes a prescription by ID from Supabase 'prescriptions' table.
 */
export async function deletePrescriptionFromSupabase(
  id: string,
  userEmail: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('prescriptions')
      .delete()
      .eq('id', id)
      .eq('user_email', userEmail.toLowerCase());

    if (error) {
      console.warn('Supabase delete error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.warn('Supabase delete error:', err);
    return { success: false, error: err?.message };
  }
}
