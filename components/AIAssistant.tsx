
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Bot, X, Send, MessageSquare } from 'lucide-react';
import { Language } from '../types.ts';

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
    ? 'أهلاً بك. أنا المستشار الرقمي لمحمد ثوبان، كيف يمكنني مساعدتك في استكشاف خبراته؟'
    : "Welcome. I am Mohamed Thwban’s Digital Advisor. How can I help you explore his expertise?";

  const handleToggle = () => {
    if (!isOpen && messages.length === 0) {
      setMessages([{ role: 'bot', text: initialGreeting }]);
    }
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      // Direct initialization as required
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: lang === 'ar' 
            ? "أنت مساعد ذكي لموقع محمد ثوبان الشخصي. محمد خبير في تحليل العمليات والاقتصاد وإدارة المشاريع. أجب باحترافية." 
            : "You are an AI assistant for Mohamed Thwban's portfolio. He is an expert in operations analysis and economics. Answer professionally.",
        }
      });
      
      // Accessing .text property directly as per latest guidelines
      const botText = response.text || (lang === 'ar' ? "عذراً، لم أستطع معالجة الطلب." : "Sorry, I couldn't process that.");
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (e) {
      console.error("AI Error:", e);
      setMessages(prev => [...prev, { role: 'bot', text: lang === 'ar' ? 'حدث خطأ في الاتصال.' : "Connection error." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={`fixed bottom-8 z-[100] no-print ${lang === 'ar' ? 'left-8' : 'right-8'}`}>
      {isOpen && (
        <div className="mb-6 w-80 md:w-[400px] h-[550px] bg-[#0f172a] border border-white/10 rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl">
          <div className="p-6 bg-slate-900 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6 text-[#D4AF37]" />
              <span className="font-bold text-sm text-white">{lang === 'ar' ? 'المساعد الذكي' : 'AI Assistant'}</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5 text-white/50" /></button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-[#D4AF37] text-black' : 'bg-white/5 text-slate-200'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-[#D4AF37] text-xs animate-pulse">{lang === 'ar' ? 'جاري التفكير...' : 'Thinking...'}</div>}
          </div>
          
          <div className="p-4 border-t border-white/5 flex gap-2">
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white outline-none focus:border-[#D4AF37]"
              placeholder={lang === 'ar' ? 'اسأل شيئاً...' : 'Ask something...'}
            />
            <button onClick={handleSend} className="p-2 bg-[#D4AF37] rounded-xl text-black hover:scale-105 transition-transform shadow-lg">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
      
      <button 
        onClick={handleToggle}
        className="w-16 h-16 bg-[#D4AF37] text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all border-4 border-[#020617] relative group"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping group-hover:hidden"></span>
      </button>
    </div>
  );
};

export default AIAssistant;
