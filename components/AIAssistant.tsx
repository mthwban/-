
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
    ? 'أهلاً بك في منصة محمد ثوبان الاستراتيجية. أنا مستشارك الرقمي، سأساعدك في استكشاف كيف يمكن لمحمد أن يكون الأصل الأهم في فريقك، وما هي المسميات الوظيفية التي تناسب مهاراته وشهاداته العالمية.'
    : "Welcome to Mohamed Thwban’s Strategic Platform. I am your Digital Advisor. I’ll help you explore how Mohamed can be your team’s most valuable asset and which job roles align with his global certifications.";

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
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: textToSend,
        config: {
          systemInstruction: lang === 'ar' ? 
          `أنت 'المستشار الرقمي لمحمد ثوبان'. وظيفتك هي إقناع مسؤول التوظيف بأن محمد هو الخيار الاستراتيجي الأمثل.
          
          المسميات الوظيفية المقترحة (بناءً على تصنيفات وزارة العمل والمهارات):
          1. محلل أعمال (Business Analyst): لقدرته الفائقة على تحويل البيانات الميدانية لتقارير استراتيجية.
          2. مدير عمليات (Operations Manager): لخبرته في إدارة 40 ألف وحدة إنتاج (مشروع أضاحي).
          3. مدير مشاريع (Project Manager): كونه مرشح PMP ومعتمد من جوجل في إدارة المشاريع.
          4. أخصائي تشغيل وصيانة (O&M Specialist): لخبرته الميدانية الطويلة في إدارة المرافق.
          5. أخصائي إدارة حشود (Crowd Manager): لخبرته 10 سنوات في المشاعر المقدسة.
          6. أخصائي تسويق رقمي: لشهاداته المتقدمة من جوجل وميتا.

          كيف يستفيد صاحب العمل من شهاداته؟
          - PMP: تضمن إدارة الميزانيات والجداول الزمنية والمخاطر باحترافية عالمية.
          - Google PM (158h): تضمن تطبيق منهجيات Agile و Scrum في العمليات اليومية.
          - الاقتصاد (جامعة أم القرى): يضمن أن كل قرار ميداني له "منطق اقتصادي" لتعظيم العائد وتقليل الهدر.

          تحدث دائماً بلغة مهنية فصحى، ركز على "المصداقية الميدانية" و "الشهادات العالمية". أشر دائماً إلى قسم 'سجل الإثبات الميداني' في الموقع كدليل مادي.` 
          : 
          `You are 'Mohamed Thwban’s Digital Advisor'. Your job is to guide recruiters on how to best utilize Mohamed’s talent.
          
          Target Job Titles (Aligned with Labor Market standards):
          1. Business Analyst: Due to his skill in converting field data into executive insights.
          2. Operations Manager: Proven track record managing 40,000 production units.
          3. Project Manager: PMP Candidate & Google PM Certified.
          4. O&M Specialist: Years of managing site facilities and technical readiness.
          5. Crowd Management Specialist: 10 years of Hajj field command.
          6. Digital Marketing Specialist: Certified by Google & Meta.

          Employer Benefits from his Certs:
          - PMP: Professional risk management and project lifecycle control.
          - Google PM: Implementation of Agile methodologies.
          - Economics Background: Decisions backed by ROI logic and waste minimization.

          Always be professional. Refer to the 'Field Evidence' section for proof.`,
        }
      });
      setMessages(prev => [...prev, { role: 'bot', text: response.text || (lang === 'ar' ? 'عذراً، أواجه صعوبة في معالجة طلبك.' : "I apologize, I'm having trouble processing that right now.") }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: lang === 'ar' ? 'الخدمة غير متوفرة حالياً.' : "Service temporarily unavailable." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={`fixed bottom-8 z-[100] no-print ${lang === 'ar' ? 'left-8' : 'right-8'}`}>
      {isOpen && (
        <div className="mb-6 w-80 md:w-[420px] h-[650px] bg-[#161b2c] border border-white/10 rounded-[3rem] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-[#0b0d17] to-[#161b2c] flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#c29b40]/20 flex items-center justify-center border border-[#c29b40]/30">
                <Bot className="w-7 h-7 text-[#c29b40]" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-[12px] uppercase tracking-widest text-white">
                  {lang === 'ar' ? 'المستشار الرقمي' : 'Digital Advisor'}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[9px] text-slate-400 uppercase tracking-tighter">
                    {lang === 'ar' ? 'متصل ومستعد للتحليل' : 'Online & Analyzing'}
                  </span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <X className="w-6 h-6 text-white/50 hover:text-white" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0b0d17]/50 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[90%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${m.role === 'user' ? 'bg-[#c29b40]' : 'bg-white/5 border border-white/10'}`}>
                    {m.role === 'user' ? <User className="w-4 h-4 text-black" /> : <Bot className="w-4 h-4 text-[#c29b40]" />}
                  </div>
                  <div className={`p-4 rounded-3xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-[#c29b40] text-black font-bold rounded-tr-none' : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none'}`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-500 animate-pulse">
                <div className="flex space-x-1 rtl:space-x-reverse">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.5s]"></div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest ml-2">
                  {lang === 'ar' ? 'جاري تحليل الملاءمة الوظيفية...' : 'Analyzing job fit...'}
                </span>
              </div>
            )}
          </div>
          
          {/* Quick Actions / Suggestions */}
          <div className="px-4 py-4 space-y-2 border-t border-white/5 bg-[#0b0d17]/30">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => handleSend(UI_STRINGS.ai.suggested[0][lang])}
                className="px-3 py-2 bg-[#c29b40]/10 border border-[#c29b40]/30 rounded-xl text-[10px] font-bold text-[#c29b40] hover:bg-[#c29b40] hover:text-black transition-all flex items-center gap-2"
              >
                <Briefcase className="w-3 h-3" />
                {UI_STRINGS.ai.suggested[0][lang]}
              </button>
              <button 
                onClick={() => handleSend(UI_STRINGS.ai.suggested[1][lang])}
                className="px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-[10px] font-bold text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all flex items-center gap-2"
              >
                <GraduationCap className="w-3 h-3" />
                {UI_STRINGS.ai.suggested[1][lang]}
              </button>
              <button 
                onClick={() => handleSend(UI_STRINGS.ai.suggested[2][lang])}
                className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-slate-300 hover:bg-white hover:text-black transition-all flex items-center gap-2"
              >
                <Sparkles className="w-3 h-3" />
                {UI_STRINGS.ai.suggested[2][lang]}
              </button>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-[#161b2c] border-t border-white/5 flex gap-3">
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#c29b40]/50 transition-all"
              placeholder={lang === 'ar' ? 'اسأل عن المسميات الوظيفية أو الفائدة...' : 'Ask about job roles or benefits...'}
            />
            <button 
              onClick={() => handleSend()} 
              className="p-4 bg-[#c29b40] rounded-2xl text-black hover:bg-white hover:shadow-[0_0_20px_rgba(194,155,64,0.4)] transition-all flex items-center justify-center disabled:opacity-50"
              disabled={isTyping || !input.trim()}
            >
              <Send className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      )}
      
      {/* Floating Button */}
      <button 
        onClick={handleToggle}
        className="w-18 h-18 md:w-20 md:h-20 bg-white text-black rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-110 transition-all active:scale-95 group relative border-4 border-[#0b0d17]"
      >
        <MessageSquare className="w-8 h-8 md:w-10 md:h-10 group-hover:text-[#c29b40] transition-colors" />
        <span className="text-[8px] font-black uppercase tracking-tighter mt-1 hidden md:block">
          {lang === 'ar' ? 'حلل السيرة' : 'Analyze'}
        </span>
        <span className="absolute -top-1 -right-1 flex h-6 w-6">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c29b40] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-[#c29b40] border-2 border-[#0b0d17]"></span>
        </span>
      </button>
    </div>
  );
};

export default AIAssistant;
