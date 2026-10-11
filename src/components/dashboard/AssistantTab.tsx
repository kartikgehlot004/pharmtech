import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, Volume2, Bot, AlertCircle } from 'lucide-react';
import { Prescription, LanguageCode, ChatMessage } from '../../types';
import { sendChatMessageApi } from '../../services/api';
import { speakText, startSpeechRecognition, isSpeechRecognitionSupported } from '../../services/speech';
import { TRANSLATIONS } from '../../data/translations';

interface AssistantTabProps {
  prescriptions: Prescription[];
  language: LanguageCode;
  apiKey?: string;
}

export const AssistantTab: React.FC<AssistantTabProps> = ({
  prescriptions,
  language,
  apiKey,
}) => {
  const t = TRANSLATIONS[language]?.asst || TRANSLATIONS.hi.asst;

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      role: 'assistant',
      content: t.welcomeMessage,
      timestamp: Date.now(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [micError, setMicError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<{ stop: () => void } | null>(null);

  // Update welcome message if language changed and only welcome message is present
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            role: 'assistant',
            content: t.welcomeMessage,
            timestamp: Date.now(),
          },
        ];
      }
      return prev;
    });
  }, [language, t.welcomeMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isSending) return;

    setInputText('');
    setMicError('');

    const userMsg: ChatMessage = {
      id: 'msg_' + Date.now(),
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };

    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setIsSending(true);

    try {
      const replyText = await sendChatMessageApi(
        text,
        nextHistory,
        prescriptions,
        language,
        apiKey
      );

      const botMsg: ChatMessage = {
        id: 'reply_' + Date.now(),
        role: 'assistant',
        content: replyText,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, botMsg]);
      speakText(replyText, language);
    } catch (err: any) {
      console.warn('Chat error:', err);
      const fallbackReply = t.fallbackReply;
      const botMsg: ChatMessage = {
        id: 'reply_' + Date.now(),
        role: 'assistant',
        content: fallbackReply,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, botMsg]);
      speakText(fallbackReply, language);
    } finally {
      setIsSending(false);
    }
  };

  const handleToggleMic = () => {
    setMicError('');
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    if (!isSpeechRecognitionSupported()) {
      setMicError(t.micUnsupported);
      return;
    }

    setIsListening(true);
    const rec = startSpeechRecognition(
      language,
      (transcript) => {
        setIsListening(false);
        if (transcript) {
          handleSend(transcript);
        }
      },
      (error) => {
        setIsListening(false);
        setMicError(error);
      },
      () => {
        setIsListening(false);
      }
    );

    recognitionRef.current = rec;
  };

  const sampleQuestions = [t.sug1, t.sug2, t.sug3, t.sug4];

  return (
    <div className="space-y-4">
      {/* Header info */}
      <div className="flex items-center justify-between border-b border-[var(--bd)] pb-3">
        <div>
          <h4 className="font-bold text-sm sm:text-base text-[var(--ink)] flex items-center gap-2">
            <Bot className="w-5 h-5 text-[var(--p)]" />
            <span>{t.title}</span>
          </h4>
          <p className="text-xs text-[var(--mut)]">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Chat Messages thread */}
      <div className="min-h-[280px] max-h-[380px] overflow-y-auto p-4 rounded-2xl bg-[var(--bg)] border border-[var(--bd)] space-y-3.5">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-2.5 ${
              m.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {m.role === 'assistant' && (
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[var(--p)] to-teal-600 text-white flex items-center justify-center shrink-0 text-xs shadow-xs">
                💊
              </div>
            )}

            <div
              className={`max-w-[85%] sm:max-w-[75%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-[var(--p)] text-white rounded-tr-xs shadow-xs'
                  : 'bg-[var(--card)] border border-[var(--bd)] text-[var(--ink)] rounded-tl-xs shadow-xs'
              }`}
            >
              <div className="whitespace-pre-wrap">{m.content}</div>

              {m.role === 'assistant' && (
                <div className="mt-2 pt-2 border-t border-[var(--bd)]/50 flex items-center justify-end">
                  <button
                    onClick={() => speakText(m.content, language)}
                    className="text-[11px] font-semibold text-[var(--p)] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{t.listenAgain}</span>
                  </button>
                </div>
              )}
            </div>

            {m.role === 'user' && (
              <div className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-700 text-[var(--ink)] flex items-center justify-center shrink-0 text-xs">
                👤
              </div>
            )}
          </div>
        ))}

        {isSending && (
          <div className="flex items-center gap-2 text-xs text-[var(--mut)] italic py-1">
            <span className="w-2 h-2 rounded-full bg-[var(--p)] animate-bounce" />
            <span>{t.thinking}</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {micError && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{micError}</span>
        </div>
      )}

      {/* Suggested quick questions */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-bold text-[var(--mut)]">{t.suggestionsLabel}</span>
        {sampleQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => handleSend(q)}
            className="text-xs px-2.5 py-1 rounded-full bg-[var(--card)] border border-[var(--bd)] hover:border-[var(--p)] text-[var(--mut)] hover:text-[var(--ink)] transition-colors cursor-pointer"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 pt-1">
        <div className="relative flex-1">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder={t.inputPlaceholder}
            disabled={isSending}
            className="w-full pl-4 pr-10 py-3 rounded-2xl bg-[var(--card)] border border-[var(--bd)] text-[var(--ink)] text-xs sm:text-sm focus:outline-hidden focus:border-[var(--p)] transition-colors"
          />
        </div>

        {/* Mic button */}
        <button
          onClick={handleToggleMic}
          title={isListening ? t.micActiveTitle : t.micInactiveTitle}
          className={`p-3 rounded-2xl font-bold transition-all cursor-pointer flex items-center justify-center shrink-0 ${
            isListening
              ? 'bg-rose-500 text-white animate-pulse shadow-md shadow-rose-500/30'
              : 'bg-[var(--card)] border border-[var(--bd)] text-[var(--p)] hover:border-[var(--p)]'
          }`}
        >
          {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </button>

        {/* Send button */}
        <button
          onClick={() => handleSend()}
          disabled={!inputText.trim() || isSending}
          className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer ${
            !inputText.trim() || isSending
              ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
              : 'bg-[var(--a)] hover:bg-amber-600 text-white shadow-md shadow-amber-500/20'
          }`}
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">{t.sendBtn}</span>
        </button>
      </div>
    </div>
  );
};
