
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Bot, X, Send, MessageSquare, Sparkles, User, Briefcase, GraduationCap } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface AIAssistantProps {
  lang: Language;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user'|'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const initialGreeting = lang === 'ar' 
    ? 'أهلاً بك في منصة محمد ثوبان الاستراتيجية. أنا مستشارك الرقمي، سأساعدك في استكشاف كيف يمكن لمحمد أن يكون الأصل الأهم في فريقك.'
    : "Welcome to Mohamed Thwban’s Strategic Platform. I am your Digital Advisor. I’ll help you explore how Mohamed can be your team’s most valuable asset.";

  const handleToggle = () => {
    if (!isOpen && messages.length === 0) {
      setMessages([{ role: 'bot', text: initialGreeting }]);
    }
    setIsOpen(!isOpen);
  };

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isTyping) return;
    
    if (!customText) setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsTyping(true);

    try {
      // Use the required direct initialization with process.env.API_KEY
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: textToSend,
        config: {
          systemInstruction: lang === 'ar' ? "أنت مستشار توظيف خبير، وظيفتك الترويج لمهارات محمد ثوبان بناءً على سيرته الذاتية." : "You are an expert recruiter, your job is to promote Mohamed Thwban's skills.",
        }
      });
      // Correctly access .text property from GenerateContentResponse
      setMessages(prev => [...prev, { role: 'bot', text: response.text || "..." }]);
    } catch (e) {
      // Removed mention of API Key in error message to comply with security requirements
      setMessages(prev => [...prev, { role: 'bot', text: lang === 'ar' ? 'الخدمة غير متوفرة حالياً.' : "Service unavailable." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={`fixed bottom-8 z-[100] no-print ${lang === 'ar' ? 'left-8' : 'right-8'}`}>
      {isOpen && (
        <div className="mb-6 w-80 md:w-[420px] h-[600px] bg-[#161b2c] border border-white/10 rounded-[3rem] flex flex-col overflow-hidden shadow-2xl">
          <div className="p-6 bg-[#0b0d17] flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-4">
              <Bot className="w-7 h-7 text-[#c29b40]" />
              <span className="font-black text-[12px] uppercase tracking-widest text-white">
                {lang === 'ar' ? 'المستشار الرقمي' : 'Digital Advisor'}
              </span>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-6 h-6 text-white/50" /></button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0b0d17]/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-4 rounded-3xl text-sm ${m.role === 'user' ? 'bg-[#c29b40] text-black' : 'bg-white/5 text-slate-200'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-[#161b2c] border-t border-white/5 flex gap-3">
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white"
              placeholder="..."
            />
            <button onClick={() => handleSend()} className="p-4 bg-[#c29b40] rounded-2xl text-black disabled:opacity-50" disabled={isTyping}>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
      
      <button 
        onClick={handleToggle}
        className="w-16 h-16 md:w-20 md:h-20 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all border-4 border-[#0b0d17]"
      >
        <MessageSquare className="w-8 h-8" />
      </button>
    </div>
  );
};

export default AIAssistant;