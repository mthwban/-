
import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Loader2, UserCheck, MessageSquareText } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';
import { EXPERIENCES, SKILLS, CONTACT_INFO, UI_STRINGS } from '../constants';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIAssistantProps {
  lang: Language;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = lang === 'ar' 
        ? "أهلاً بك! أنا المساعد الاستراتيجي لمحمد إميجن. كيف يمكنني إطلاعك على خبراته في تحليل الأعمال، التنسيق الميداني، أو الإنتاج المرئي؟" 
        : "Welcome! I'm Mohamed Imijine's Strategic Assistant. How can I help you learn more about his expertise in Business Analysis, Field Coordination, or Visual Production?";
      setMessages([{ role: 'assistant', content: greeting }]);
    }
    scrollToBottom();
  }, [isOpen, messages, lang]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const skillsContext = SKILLS.map(s => `${s.category.en}: ${s.items.map(i => i.en).join(', ')}`).join('; ');
      const expContext = EXPERIENCES.map(e => `${e.title.en} at ${e.company.en} (${e.period.en})`).join('; ');

      const systemInstruction = `
        You are the "Strategic Representative" for Mohamed Imijine.
        Identify: Mohamed is an expert in 5 core areas: Business & Ops Analysis, Field Coordination, Team Leadership, Visual Content Creation, and Strategic Marketing.
        Background: ${expContext}. Skills: ${skillsContext}.
        Goal: Represent Mohamed as a professional ready for high-impact strategic collaboration.
        Language: ${lang === 'ar' ? 'Arabic (Professional/Gulf business style)' : 'English (High-end corporate)'}.
        Constraint: Be concise, helpful, and always suggest contacting Mohamed via the provided buttons for deep collaboration.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: { 
          systemInstruction: systemInstruction,
          temperature: 0.7 
        }
      });

      const aiResponse = response.text || (lang === 'ar' ? "عذراً، حدث خطأ في المعالجة." : "Processing error.");
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error(error);
      const errorMsg = lang === 'ar' ? "فشل الاتصال بالخادم." : "Server connection failed.";
      setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-24 md:bottom-28 z-[70] flex flex-col no-print transition-all duration-500 ${lang === 'ar' ? 'right-6 md:right-8 items-end' : 'left-6 md:left-8 items-start'}`}>
      {/* Chat Window */}
      {isOpen && (
        <div className={`mb-4 w-[320px] md:w-[400px] h-[500px] glass-card rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden border border-emerald-500/30 animate-in fade-in slide-in-from-bottom-8 duration-500`}>
          {/* Header */}
          <div className="p-5 bg-gradient-to-br from-emerald-900/80 to-slate-950 border-b border-white/10 flex justify-between items-center backdrop-blur-3xl">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-widest leading-none mb-1">MI Strategy AI</h4>
                <p className="text-[8px] text-emerald-400 font-black uppercase tracking-tighter">Online & Ready</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-all text-slate-400">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-hide bg-[#0a0c1b]/95">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-[13px] leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none font-light'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <Loader2 className="w-3 h-3 text-emerald-500 animate-spin" />
                  <span className="text-[9px] text-emerald-500 font-black uppercase tracking-widest">Analysing</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-5 bg-emerald-950/20 border-t border-white/10">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'ar' ? 'اطرح سؤالاً استراتيجياً...' : 'Ask a strategic question...'}
                className={`w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-[13px] text-white focus:outline-none focus:border-emerald-500/50 transition-all ${lang === 'ar' ? 'pl-14' : 'pr-14'}`}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`absolute p-2 bg-emerald-600 rounded-lg text-white hover:bg-emerald-500 transition-all shadow-lg active:scale-95 disabled:opacity-30 ${lang === 'ar' ? 'left-2' : 'right-2'}`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all duration-700 active:scale-90 z-20 ${
          isOpen ? 'bg-amber-500 hover:bg-amber-400 rotate-90 scale-110' : 'bg-[#0a0c1b] border-2 border-emerald-500/40'
        }`}
      >
        {isOpen ? <X className="w-7 h-7 text-[#0a0c1b]" /> : <Bot className="w-7 h-7 text-emerald-500" />}
      </button>
    </div>
  );
};

export default AIAssistant;
