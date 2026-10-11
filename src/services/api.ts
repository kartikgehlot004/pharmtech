import { Prescription, LanguageCode, HealthHistoryData, ChatMessage } from '../types';

export function compressImageToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const rawDataUrl = e.target?.result as string;
      if (!rawDataUrl) {
        reject(new Error('फ़ाइल लोड नहीं हो सकी'));
        return;
      }

      const img = new Image();
      img.onload = () => {
        try {
          const maxDim = 1600;
          const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
          const canvas = document.createElement('canvas');
          canvas.width = Math.round(img.width * scale);
          canvas.height = Math.round(img.height * scale);
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const compressed = canvas.toDataURL('image/jpeg', 0.85);
            resolve(compressed);
            return;
          }
        } catch (canvasError) {
          console.warn('Canvas resize fallback to raw DataURL:', canvasError);
        }
        resolve(rawDataUrl);
      };
      img.onerror = () => {
        // Fallback to raw data url if Image element fails
        resolve(rawDataUrl);
      };
      img.src = rawDataUrl;
    };
    reader.onerror = () => reject(new Error('फ़ाइल पढ़ने में त्रुटિ'));
    reader.readAsDataURL(file);
  });
}

export async function checkServerHealth(): Promise<{ hasApiKey: boolean }> {
  try {
    const res = await fetch('/api/health');
    if (!res.ok) return { hasApiKey: false };
    return await res.json();
  } catch (e) {
    return { hasApiKey: false };
  }
}

export async function analyzePrescriptionApi(
  imageBase64: string,
  lang: LanguageCode = 'hi',
  customKey?: string
): Promise<Prescription> {
  // Extract real mime type from data uri
  const mimeMatch = imageBase64.match(/^data:([^;]+);base64,/);
  const mimeType = mimeMatch ? mimeMatch[1] : 'image/jpeg';

  const response = await fetch('/api/analyze-prescription', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      imageBase64,
      mimeType,
      lang,
      customKey,
    }),
  });

  const data = await response.json();
  if (!response.ok || !data.prescription) {
    throw new Error(data.error || 'पर्ची की जानकारी नहीं निकाली जा सकी। कृपया दोबारा प्रयास करें।');
  }

  return data.prescription;
}

export async function translatePrescriptionApi(
  prescription: Prescription,
  targetLang: LanguageCode,
  customKey?: string
): Promise<Prescription> {
  const response = await fetch('/api/translate-prescription', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prescription,
      targetLang,
      customKey,
    }),
  });

  const data = await response.json();
  if (!response.ok || !data.prescription) {
    throw new Error(data.error || 'भाषा बदलने में त्रुटિ हुई');
  }

  return data.prescription;
}

export async function fetchHealthHistoryApi(
  prescriptions: Prescription[],
  lang: LanguageCode,
  customKey?: string
): Promise<HealthHistoryData> {
  const response = await fetch('/api/health-history', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prescriptions,
      lang,
      customKey,
    }),
  });

  const data = await response.json();
  if (!response.ok || !data.history) {
    throw new Error(data.error || 'हेल्थ हिस्ट्री तैयार नहीं की जा सकी');
  }

  return data.history;
}

export async function sendChatMessageApi(
  message: string,
  history: ChatMessage[],
  prescriptions: Prescription[],
  lang: LanguageCode,
  customKey?: string
): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message,
      history: history.map((h) => ({ role: h.role, content: h.content })),
      prescriptions,
      lang,
      customKey,
    }),
  });

  const data = await response.json();
  if (!response.ok || !data.reply) {
    throw new Error(data.error || 'उत्तर प्राप्त नहीं हो सका');
  }

  return data.reply;
}
