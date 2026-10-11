import { LanguageCode } from '../types';
import { LANGUAGES } from '../data/languages';

export function isSpeechSynthesisSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function isSpeechRecognitionSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)
  );
}

export function stopSpeaking() {
  if (isSpeechSynthesisSupported()) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      console.warn('speechSynthesis cancel error', e);
    }
  }
}

export function speakText(
  text: string,
  langCode: LanguageCode = 'hi',
  onEnd?: () => void
): boolean {
  if (!isSpeechSynthesisSupported() || !text) return false;

  try {
    window.speechSynthesis.cancel();

    // Clean text of markdown asterisks or code symbols
    const cleanText = text
      .replace(/[*#_`]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    const speechCode = LANGUAGES[langCode]?.speechCode || 'hi-IN';
    utterance.lang = speechCode;
    utterance.rate = 0.88; // Slower rate for clear elderly comprehension
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const matchedVoice =
      voices.find((v) => v.lang.toLowerCase() === speechCode.toLowerCase()) ||
      voices.find((v) => v.lang.toLowerCase().startsWith(speechCode.slice(0, 2).toLowerCase()));

    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = () => onEnd();
    }

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.error('Speech synthesis error:', err);
    if (onEnd) onEnd();
    return false;
  }
}

export function startSpeechRecognition(
  langCode: LanguageCode,
  onResult: (text: string) => void,
  onError: (err: string) => void,
  onEnd?: () => void
): { stop: () => void } | null {
  if (!isSpeechRecognitionSupported()) {
    onError('आपके ब्राउज़र में बोलकर पूछने की सुविधा उपलब्ध नहीं है। कृपया लिखकर प्रश्न पूछें।');
    return null;
  }

  try {
    const SpeechRec =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRec();

    const speechCode = LANGUAGES[langCode]?.speechCode || 'hi-IN';
    recognition.lang = speechCode;
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      if (event.results && event.results[0] && event.results[0][0]) {
        const transcript = event.results[0][0].transcript;
        onResult(transcript);
      }
    };

    recognition.onerror = (event: any) => {
      console.warn('Speech recognition error:', event.error);
      if (event.error === 'not-allowed') {
        onError('माइक्रोफ़ोन की अनुमति अस्वीकृत है। कृपया ब्राउज़र सेटिंग्स में माइक्रोफ़ोन चालू करें।');
      } else {
        onError('आवाज़ साफ़ सुनाई नहीं दी, कृपया दोबारा बोलें या लिखें।');
      }
    };

    recognition.onend = () => {
      if (onEnd) onEnd();
    };

    recognition.start();

    return {
      stop: () => {
        try {
          recognition.stop();
        } catch (e) {
          // ignore
        }
      },
    };
  } catch (e: any) {
    onError('माइक्रोफ़ोन शुरू नहीं हो सका: ' + (e?.message || 'Error'));
    return null;
  }
}
