import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

function getAIClient(clientKey?: string): GoogleGenAI | null {
  const key = clientKey || process.env.GEMINI_API_KEY;
  if (!key) return null;
  return new GoogleGenAI({
    apiKey: key,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const LANGUAGES_MAP: Record<string, string> = {
  hi: 'Hindi (हिन्दी)',
  en: 'English',
  mwr: 'Marwari / Rajasthani (Devanagari script)',
  gu: 'Gujarati (ગુજરાતી)',
  ta: 'Tamil (தமிழ்)',
  pa: 'Punjabi (ਪੰਜਾਬੀ)',
};

/**
 * Robust JSON parser for LLM responses
 */
function extractJsonFromText(rawText: string): any {
  if (!rawText) return null;
  const trimmed = rawText.trim();

  // 1. Direct parse
  try {
    return JSON.parse(trimmed);
  } catch (e) {
    // continue
  }

  // 2. Markdown fence ```json ... ```
  const codeBlockMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (codeBlockMatch && codeBlockMatch[1]) {
    try {
      return JSON.parse(codeBlockMatch[1].trim());
    } catch (e) {
      // continue
    }
  }

  // 3. Search between first '{' and last '}'
  const firstBrace = trimmed.indexOf('{');
  const lastBrace = trimmed.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    const candidate = trimmed.substring(firstBrace, lastBrace + 1);
    try {
      return JSON.parse(candidate);
    } catch (e) {
      // continue
    }
  }

  throw new Error('Failed to parse valid JSON from AI response: ' + trimmed.substring(0, 100));
}

/**
 * Call Gemini with multi-model fallback (prefers 3.1-flash-lite, falls back to 3.8-flash)
 */
async function generateWithFallback(ai: GoogleGenAI, params: any) {
  const candidateModels = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];
  let lastError: any = null;

  for (const model of candidateModels) {
    try {
      const response = await ai.models.generateContent({
        ...params,
        model,
      });
      if (response && response.text) {
        return response;
      }
    } catch (err: any) {
      console.warn(`[Gemini] Model ${model} encountered error:`, err?.message || err);
      lastError = err;
    }
  }

  throw lastError || new Error('All Gemini model fallbacks failed.');
}

// Health status check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
  });
});

// Analyze prescription endpoint
app.post('/api/analyze-prescription', async (req, res) => {
  try {
    const { imageBase64, mimeType, lang = 'hi', customKey } = req.body;
    if (!imageBase64) {
      return res.status(400).json({ error: 'Image base64 data is required' });
    }

    const ai = getAIClient(customKey);
    if (!ai) {
      return res.status(400).json({
        error: 'Gemini API Key is not configured. Please add GEMINI_API_KEY to your environment or settings.',
      });
    }

    const langName = LANGUAGES_MAP[lang] || 'Hindi (हिन्दी)';

    // Extract clean base64 data & detect mimeType
    const mimeMatch = imageBase64.match(/^data:([^;]+);base64,/);
    const cleanBase64 = imageBase64.replace(/^data:[^;]+;base64,/, '').trim();
    const resolvedMimeType = mimeMatch ? mimeMatch[1] : (mimeType || 'image/jpeg');

    const promptText = `You are an expert pharmacist and medical assistant helping Indian patients and their families.
Carefully inspect this prescription image. Read handwritten or printed medication names, dosages, frequencies, and instructions.

CRITICAL LANGUAGE REQUIREMENT:
The user has chosen their language as: ${langName} (Language code: "${lang}").
ALL medical explanations, the overall summary, medicine info (दवाई की जानकारी), uses (उपयोग), side effects (साइड इफेक्ट्स), food interactions (भोजन के साथ इंटरैक्शन), and drug interactions (अन्य दवाइयों के साथ इंटरैक्शन), meal instructions, and warnings MUST BE WRITTEN ENTIRELY IN ${langName}.
Do NOT output English or untranslated Hindi unless the selected language is English or Hindi! Use natural, clear phrasing suitable for patients and elders.
Keep only the brand/generic drug name in standard Latin/English characters (e.g. "Paracetamol 650mg", "Pantoprazole 40mg"), while all explanations are in ${langName}.

For EVERY medicine found, provide:
1. info: Complete medicine information/type/form (दवाई की जानकारी) in ${langName}
2. uses: Detailed medical uses and what conditions it cures (दवाई के उपयोग) in ${langName}
3. dose: Recommended dose (e.g., 500mg, 1 गोली, 2 चम्मच)
4. times: Array from ["morning", "afternoon", "night"]
5. meal: Meal timing (खाने के बाद / खाली पेट) in ${langName}
6. days: Duration in days (number)
7. side_effects: Potential side effects to be aware of (दवाई के साइड इफेक्ट्स) in ${langName}
8. food_interactions: Food and diet interactions (भोजन के साथ इंटरैक्शन - क्या खाना या नहीं खाना चाहिए) in ${langName}
9. drug_interactions: Interactions with other medications (अन्य दवाइयों के साथ इंटरैक्शन - किन दवाओं से सावधान रहना है) in ${langName}

Always output valid JSON conforming strictly to this format:
{
  "doctor": "Doctor name or clinic if readable, else empty",
  "date": "Prescription date if visible",
  "summary": "1-2 simple sentences explaining what this prescription is treating in ${langName}",
  "meds": [
    {
      "name": "Exact brand or generic medicine name",
      "info": "Complete medicine information/category in ${langName}",
      "purpose": "What this medicine treats in ${langName}",
      "uses": "Detailed uses and indications in ${langName}",
      "dose": "e.g., 500mg or 1 गोली or 2 चम्मच",
      "times": ["morning", "afternoon", "night"],
      "meal": "e.g., खाने के बाद (After food) or खाली पेट (Before food) in ${langName}",
      "days": 5,
      "side_effects": "Common side effects in ${langName}",
      "food_interactions": "Food & drink interactions in ${langName}",
      "drug_interactions": "Interactions with other drugs or contraindications in ${langName}",
      "avoid_food": "Specific foods or drinks to avoid in ${langName}",
      "avoid_drugs": "Known drug-drug interaction cautions in ${langName}"
    }
  ],
  "warnings": [
    "Important safety cautions or drug interaction alerts in ${langName}"
  ]
}`;

    const response = await generateWithFallback(ai, {
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: resolvedMimeType,
            },
          },
          {
            text: promptText,
          },
        ],
      },
      config: {
        responseMimeType: 'application/json',
        temperature: 0.2,
      },
    });

    const parsed = extractJsonFromText(response.text || '{}');

    // Normalize result object
    const normalizedRx = {
      id: 'rx_' + Date.now(),
      ts: Date.now(),
      doctor: parsed.doctor || '',
      date: parsed.date || new Date().toLocaleDateString(),
      summary: parsed.summary || 'पर्ची की जानकारी',
      lang: lang,
      meds: Array.isArray(parsed.meds)
        ? parsed.meds.map((m: any) => ({
            name: String(m.name || 'दवाई'),
            info: String(m.info || m.purpose || ''),
            purpose: String(m.purpose || m.uses || ''),
            uses: String(m.uses || m.purpose || ''),
            dose: String(m.dose || ''),
            times: Array.isArray(m.times) && m.times.length ? m.times : ['morning', 'night'],
            meal: String(m.meal || ''),
            days: typeof m.days === 'number' ? m.days : parseInt(m.days) || 5,
            side_effects: String(m.side_effects || ''),
            food_interactions: String(m.food_interactions || m.avoid_food || ''),
            drug_interactions: String(m.drug_interactions || m.avoid_drugs || ''),
            avoid_food: String(m.avoid_food || m.food_interactions || ''),
            avoid_drugs: String(m.avoid_drugs || m.drug_interactions || ''),
          }))
        : [],
      warnings: Array.isArray(parsed.warnings) ? parsed.warnings.map(String) : [],
    };

    return res.json({ success: true, prescription: normalizedRx });
  } catch (error: any) {
    console.error('Error analyzing prescription:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to read prescription. Please ensure image is clear.',
    });
  }
});

// Translate prescription
app.post('/api/translate-prescription', async (req, res) => {
  try {
    const { prescription, targetLang = 'hi', customKey } = req.body;
    if (!prescription) {
      return res.status(400).json({ error: 'Prescription data is required' });
    }

    const ai = getAIClient(customKey);
    if (!ai) {
      return res.status(400).json({ error: 'Gemini API Key missing' });
    }

    const langName = LANGUAGES_MAP[targetLang] || 'Hindi (हिन्दी)';

    const promptText = `You are an expert pharmacist and translator. Translate all explanatory text of this prescription JSON into ${langName} (language code: "${targetLang}").
Translate these fields in each medicine:
- info (दवाई की जानकारी)
- purpose
- uses (उपयोग)
- meal
- side_effects (साइड इफेक्ट्स)
- food_interactions (भोजन इंटरैक्शन)
- drug_interactions (अन्य दवाई इंटरैक्शन)
- avoid_food
- avoid_drugs

Also translate 'summary' and the 'warnings' array into ${langName}.
Keep medicine names in standard Latin/English (e.g. Paracetamol 650mg).
Keep keys, IDs, timestamps, numbers, and the 'times' string array (["morning", "afternoon", "night"]) unchanged.
Return ONLY valid JSON.

Input JSON:
${JSON.stringify(prescription)}`;

    const response = await generateWithFallback(ai, {
      contents: promptText,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.2,
      },
    });

    const translated = extractJsonFromText(response.text || '{}');
    translated.ts = prescription.ts || Date.now();
    translated.id = prescription.id || 'rx_' + Date.now();
    translated.lang = targetLang;

    return res.json({ success: true, prescription: translated });
  } catch (error: any) {
    console.error('Error translating prescription:', error);
    return res.status(500).json({ error: error?.message || 'Translation failed' });
  }
});

// Health history summary
app.post('/api/health-history', async (req, res) => {
  try {
    const { prescriptions = [], lang = 'hi', customKey } = req.body;
    if (!prescriptions.length) {
      return res.status(400).json({ error: 'No prescriptions provided' });
    }

    const ai = getAIClient(customKey);
    if (!ai) {
      return res.status(400).json({ error: 'Gemini API Key missing' });
    }

    const langName = LANGUAGES_MAP[lang] || 'Hindi (हिन्दी)';

    const summaryPayload = prescriptions.map((p: any) => ({
      date: new Date(p.ts || Date.now()).toDateString(),
      doctor: p.doctor || 'Unknown',
      summary: p.summary || '',
      medicines: (p.meds || []).map((m: any) => ({
        name: m.name,
        dose: m.dose,
        purpose: m.purpose,
        days: m.days,
      })),
    }));

    const promptText = `You are DawaiMitra, a caring medical health advisor for Indian patients.
Review this patient's chronological prescription history:
${JSON.stringify(summaryPayload)}

Compare older and newer prescriptions. Note repeating medications, newly added medicines, dosage shifts, and what this indicates regarding their recovery or chronic illness.
Write in simple spoken ${langName} in warm, reassuring words.
Never formally diagnose or replace a licensed physician. Always recommend confirming any major changes with their doctor.

Return ONLY a JSON response:
{
  "overview": "Overall patient health summary and progression in 2-3 sentences",
  "changes": ["List of notable changes across prescriptions (e.g. new antibiotic added, dosage reduced)"],
  "advice": ["Practical health & lifestyle precautions for taking these current medicines safely"]
}`;

    const response = await generateWithFallback(ai, {
      contents: promptText,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.3,
      },
    });

    const result = extractJsonFromText(response.text || '{}');
    return res.json({ success: true, history: result });
  } catch (error: any) {
    console.error('Error generating health history:', error);
    return res.status(500).json({ error: error?.message || 'Health history generation failed' });
  }
});

// Chatbot voice assistant endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [], prescriptions = [], lang = 'hi', customKey } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const ai = getAIClient(customKey);
    if (!ai) {
      return res.status(400).json({ error: 'Gemini API Key missing' });
    }

    const langName = LANGUAGES_MAP[lang] || 'Hindi (हिन्दी)';

    const activeMeds = prescriptions.slice(0, 5).map((r: any) => ({
      date: new Date(r.ts).toLocaleDateString(),
      doctor: r.doctor,
      meds: (r.meds || []).map((m: any) => ({
        name: m.name,
        purpose: m.purpose,
        dose: m.dose,
        times: m.times,
        meal: m.meal,
        avoid_food: m.avoid_food,
      })),
    }));

    const systemPrompt = `You are DawaiMitra, a warm, polite and highly reliable voice assistant for Indian patients, including elderly individuals and family caretakers.
Your goal is to answer questions about their prescribed medicines clearly, gently, and accurately.
Reply in simple, natural spoken ${langName} in 2 to 4 short sentences.
Patient's saved prescriptions context:
${JSON.stringify(activeMeds)}

Important safety rules:
1. Never give a medical diagnosis.
2. If the user asks about dangerous symptoms (severe chest pain, shortness of breath, sudden weakness), immediately advise visiting a hospital emergency room or doctor.
3. Mention whether medicine should be taken with food, milk, or water if relevant.`;

    const conversationParts = history.slice(-6).map((h: any) => `${h.role}: ${h.content}`).join('\n');
    const fullPrompt = `${systemPrompt}\n\nChat History:\n${conversationParts}\nuser: ${message}\nassistant:`;

    const response = await generateWithFallback(ai, {
      contents: fullPrompt,
      config: {
        temperature: 0.3,
      },
    });

    const reply = response.text || 'माफ़ कीजिए, अभी जवाब नहीं मिल सका। कृपया दोबारा पूछें।';
    return res.json({ success: true, reply });
  } catch (error: any) {
    console.error('Error in chat assistant:', error);
    return res.status(500).json({ error: error?.message || 'Chat assistant failed' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`DawaiMitra server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
