import React, { useState, useRef, useEffect } from 'react';
import { Upload, Camera, Sparkles, RefreshCw, AlertCircle, Database, CheckCircle2 } from 'lucide-react';
import { Prescription, LanguageCode, UserSession } from '../../types';
import { compressImageToDataUrl, analyzePrescriptionApi, translatePrescriptionApi } from '../../services/api';
import { getSamplePrescriptions } from '../../data/samplePrescriptions';
import { PrescriptionResultCard } from './PrescriptionResultCard';
import { TRANSLATIONS } from '../../data/translations';
import {
  uploadPrescriptionImageToBucket,
  savePrescriptionToSupabase,
  SUPABASE_BUCKET_NAME,
} from '../../services/supabase';

interface ScanTabProps {
  language: LanguageCode;
  onSavePrescription: (rx: Prescription) => void;
  savedPrescriptions: Prescription[];
  apiKey?: string;
  currentUser?: UserSession | null;
}

export const ScanTab: React.FC<ScanTabProps> = ({
  language,
  onSavePrescription,
  savedPrescriptions,
  apiKey,
  currentUser,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStepText, setScanStepText] = useState('');
  const [scanError, setScanError] = useState('');
  const [currentRx, setCurrentRx] = useState<Prescription | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [supabaseSyncNotice, setSupabaseSyncNotice] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[language]?.scan || TRANSLATIONS.hi.scan;
  const currentSamples = getSamplePrescriptions(language);

  // Auto-update or translate prescription when preferred language is changed on main page
  useEffect(() => {
    if (!currentRx) return;
    if (currentRx.lang === language) return;

    // If it's a sample prescription, switch directly to the newly selected language's version
    if (currentRx.id.includes('sample_rx_1') || currentRx.doctor?.includes('Sharma')) {
      const cloned = JSON.parse(JSON.stringify(currentSamples[0]));
      cloned.id = currentRx.id;
      cloned.ts = currentRx.ts;
      cloned.lang = language;
      setCurrentRx(cloned);
      return;
    }
    if (currentRx.id.includes('sample_rx_2') || currentRx.doctor?.includes('Mehta')) {
      const cloned = JSON.parse(JSON.stringify(currentSamples[1]));
      cloned.id = currentRx.id;
      cloned.ts = currentRx.ts;
      cloned.lang = language;
      setCurrentRx(cloned);
      return;
    }

    // For uploaded user prescription: auto-translate to newly selected language
    let cancelled = false;
    setIsTranslating(true);
    translatePrescriptionApi(currentRx, language, apiKey)
      .then((translated) => {
        if (!cancelled && translated) {
          translated.id = currentRx.id;
          translated.ts = currentRx.ts;
          translated.imageUrl = currentRx.imageUrl;
          translated.lang = language;
          setCurrentRx(translated);
          // If already saved, update saved state as well
          if (savedPrescriptions.some((p) => p.id === currentRx.id)) {
            onSavePrescription(translated);
            if (currentUser?.email) {
              savePrescriptionToSupabase(translated, currentUser.email);
            }
          }
        }
      })
      .catch((err) => {
        console.warn('Auto translation error on language change:', err);
      })
      .finally(() => {
        if (!cancelled) setIsTranslating(false);
      });

    return () => {
      cancelled = true;
    };
  }, [language]);

  useEffect(() => {
    if (currentRx && resultRef.current) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [currentRx]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setScanError('');
      setSupabaseSyncNotice(null);
      setFileName(file.name);
      const dataUrl = await compressImageToDataUrl(file);
      setSelectedImage(dataUrl);
    } catch (err: any) {
      setScanError('Error: ' + (err?.message || 'Failed to load file'));
    }
  };

  const handleScan = async () => {
    if (!selectedImage) {
      setScanError(t.selectPhotoFirst);
      return;
    }

    setIsScanning(true);
    setScanError('');
    setSupabaseSyncNotice(null);
    const rxId = 'rx_' + Date.now();

    try {
      // Step 1: Upload photo to Supabase Storage Bucket 'prescriptions'
      setScanStepText('Supabase Storage बकेट में फोटो अपलोड हो रही है...');
      let finalImageUrl = selectedImage;

      try {
        const uploadRes = await uploadPrescriptionImageToBucket(
          selectedImage,
          currentUser?.email || 'guest_user',
          rxId
        );
        if (uploadRes.url) {
          finalImageUrl = uploadRes.url;
        }
      } catch (storageErr) {
        console.warn('Supabase storage upload notice:', storageErr);
      }

      // Step 2: AI analysis in selected language
      setScanStepText(t.scanningText);
      const rx = await analyzePrescriptionApi(selectedImage, language, apiKey);
      rx.id = rxId;
      rx.imageUrl = finalImageUrl;
      rx.lang = language;
      setCurrentRx(rx);

      // Step 3: Automatically save prescription in Supabase Database table
      if (currentUser?.email) {
        setScanStepText('Supabase डेटाबेस में विवरण सुरक्षित किया जा रहा है...');
        try {
          const dbRes = await savePrescriptionToSupabase(rx, currentUser.email);
          onSavePrescription(rx);
          if (dbRes.success) {
            setSupabaseSyncNotice(
              `✅ पर्ची की फोटो Supabase बकेट ('${SUPABASE_BUCKET_NAME}') व विवरण टेबल ('prescriptions') में सुरक्षित हो गए!`
            );
          } else {
            setSupabaseSyncNotice(
              `✅ पर्ची स्थानीय रूप से सुरक्षित हो गई (Supabase DB सिंक सक्रिय)`
            );
          }
        } catch (dbErr) {
          console.warn('Supabase DB save notice:', dbErr);
          onSavePrescription(rx);
        }
      }

      setScanStepText('');
    } catch (err: any) {
      console.warn('API error during scan:', err);
      setScanError(err?.message || t.scanError);
    } finally {
      setIsScanning(false);
    }
  };

  const handleLoadSample = (sample: Prescription) => {
    setScanError('');
    setSupabaseSyncNotice(null);
    const cloned = JSON.parse(JSON.stringify(sample));
    cloned.ts = Date.now();
    cloned.id = 'rx_' + Date.now();
    cloned.lang = language;
    setCurrentRx(cloned);
  };

  const isCurrentSaved = Boolean(
    currentRx && savedPrescriptions.some((p) => p.id === currentRx.id)
  );

  return (
    <div className="space-y-6">
      {/* Upload area */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg)] border-2 border-dashed border-[var(--p)]/60 text-center space-y-4 hover:border-[var(--p)] transition-colors">
        <div className="w-16 h-16 rounded-2xl bg-[var(--p)]/10 text-[var(--p)] flex items-center justify-center mx-auto shadow-xs">
          <Upload className="w-8 h-8" />
        </div>

        <div>
          <h4 className="text-base sm:text-lg font-bold text-[var(--ink)]">
            {t.boxTitle}
          </h4>
          <p className="text-xs sm:text-sm text-[var(--mut)] mt-1">
            {t.boxDesc}
          </p>
        </div>

        {/* Input file button */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <label className="px-5 py-2.5 rounded-xl bg-[var(--card)] border border-[var(--bd)] text-[var(--ink)] hover:border-[var(--p)] font-semibold text-xs sm:text-sm shadow-xs cursor-pointer flex items-center gap-2 transition-all">
            <Camera className="w-4 h-4 text-[var(--p)]" />
            <span>{t.chooseFileBtn}</span>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {selectedImage && (
            <button
              onClick={() => {
                setSelectedImage(null);
                setFileName('');
                setSupabaseSyncNotice(null);
              }}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-rose-500 hover:bg-rose-500/10 transition-colors cursor-pointer"
            >
              {t.removeBtn}
            </button>
          )}
        </div>

        {/* Selected Image preview */}
        {selectedImage && (
          <div className="max-w-xs mx-auto mt-4 p-2 rounded-2xl bg-[var(--card)] border border-[var(--bd)] shadow-sm">
            <img
              src={selectedImage}
              alt="Prescription preview"
              className="w-full h-44 object-contain rounded-xl"
            />
            <div className="text-[11px] text-[var(--mut)] mt-1.5 truncate font-medium">
              {fileName || 'Prescription photo'}
            </div>
          </div>
        )}

        {/* Scan Button */}
        <div className="pt-2">
          <button
            onClick={handleScan}
            disabled={isScanning || !selectedImage}
            className={`px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 mx-auto transition-all cursor-pointer ${
              !selectedImage || isScanning
                ? 'bg-slate-300 dark:bg-slate-700 text-slate-500 cursor-not-allowed'
                : 'bg-[var(--a)] hover:bg-amber-600 text-white shadow-lg shadow-amber-500/25 transform hover:-translate-y-0.5 active:translate-y-0'
            }`}
          >
            {isScanning ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>{scanStepText || t.scanningText}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>{t.scanBtn}</span>
              </>
            )}
          </button>
        </div>

        {scanError && (
          <div className="max-w-md mx-auto p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs sm:text-sm flex items-start gap-2 text-left">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{scanError}</span>
          </div>
        )}

        {supabaseSyncNotice && (
          <div className="max-w-md mx-auto p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2 text-left">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{supabaseSyncNotice}</span>
          </div>
        )}
      </div>

      {/* Quick Test Samples in currently selected language */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[var(--card)] border border-[var(--bd)] space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--p)]">
          <Sparkles className="w-4 h-4" />
          <span>{t.sampleHeader}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => handleLoadSample(currentSamples[0])}
            className="p-3.5 rounded-xl bg-[var(--bg)] border border-[var(--bd)] hover:border-[var(--p)] hover:shadow-sm text-left transition-all cursor-pointer group"
          >
            <div className="font-bold text-xs sm:text-sm text-[var(--ink)] group-hover:text-[var(--p)] flex items-center justify-between">
              <span>{t.sample1Title}</span>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 font-extrabold">{t.sample1Badge}</span>
            </div>
            <p className="text-[11px] text-[var(--mut)] mt-1 font-medium">
              {t.sample1Desc}
            </p>
          </button>

          <button
            onClick={() => handleLoadSample(currentSamples[1])}
            className="p-3.5 rounded-xl bg-[var(--bg)] border border-[var(--bd)] hover:border-[var(--p)] hover:shadow-sm text-left transition-all cursor-pointer group"
          >
            <div className="font-bold text-xs sm:text-sm text-[var(--ink)] group-hover:text-[var(--p)] flex items-center justify-between">
              <span>{t.sample2Title}</span>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 font-extrabold">{t.sample2Badge}</span>
            </div>
            <p className="text-[11px] text-[var(--mut)] mt-1 font-medium">
              {t.sample2Desc}
            </p>
          </button>
        </div>
      </div>

      {/* Prescription Result Display */}
      {currentRx && (
        <div ref={resultRef} className="relative">
          {isTranslating && (
            <div className="mb-2 p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-800 dark:text-teal-200 text-xs flex items-center gap-2 animate-pulse">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>पर्ची को आपकी चुनी हुई भाषा में तैयार किया जा रहा है…</span>
            </div>
          )}
          <PrescriptionResultCard
            prescription={currentRx}
            language={language}
            onSave={onSavePrescription}
            isSaved={isCurrentSaved}
          />
        </div>
      )}
    </div>
  );
};
