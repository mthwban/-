import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Bot, X, Send, MessageSquare, Sparkles, UserCheck } from 'lucide-react';
import { Language } from '../types.ts';
import { UI_STRINGS } from '../constants.tsx';

interface AIAssistantProps {
  lang: Language;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState<'chat' | 'matcher'>('chat');
  const [messages, setMessages] = useState<{role: 'user'|'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [jdInput, setJdInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const initialGreeting = lang === 'ar' 
    ? 'أهلاً بك. أنا المستشار الاستراتيجي لـ "محمد ثوبان". كيف أساعدك في استكشاف مهاراته اليوم؟'
    : "Welcome. I am Mohamed Thwban’s Strategic Advisor. How can I help you explore his expertise today?";

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
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: lang === 'ar' 
            ? "أنت المستشار الذكي لمحمد ثوبان. بياناته الدقيقة: بكالوريوس اقتصاد من جامعة أم القرى 2018. شهادات احترافية مؤكدة: إدارة المشاريع من جوجل، قيادة الفرق من جامعة ميشيغان، إنتاج الفيديو من جامعة كولورادو، والتسويق عبر فيسبوك. خبرته الكبرى هي إدارة 150 ألف وحدة في مجمع المعيصم (أصول استراتيجية). ركز على كونه مرشح PMP ومحلل أعمال يجمع بين الانضباط الاقتصادي والإبداع البصري." 
            : "You are the AI Strategic Advisor for Mohamed Thwban. His accurate data: Bachelor of Economics from Umm Al-Qura 2018. Verified Certs: Google Project Management, Michigan Leading Teams, Colorado Video Production, Facebook Marketing. Major achievement: Managed 150k+ units at Al-Muaisem Complex. Highlight his status as a PMP candidate and a Business Analyst who bridges economic discipline with visual creativity.",
        }
      });
      
      const botText = response.text || (lang === 'ar' ? "عذراً، حدث خطأ في الاتصال." : "Sorry, a connection error occurred.");
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: lang === 'ar' ? "خطأ في الاتصال بالمستشار الذكي." : "AI Connection error." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleMatch = async () => {
    if (!jdInput.trim() || isTyping) return;
    setIsTyping(true);
    setTab('chat');
    setMessages(prev => [...prev, { role: 'user', text: lang === 'ar' ? `تحليل الملاءمة الوظيفية للوصف التالي: ${jdInput.substring(0, 50)}...` : `Analyzing JD Match for: ${jdInput.substring(0, 50)}...` }]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: jdInput,
        config: {
          systemInstruction: lang === 'ar' 
            ? "أنت محلل توظيف احترافي. قم بتقييم محمد ثوبان بناءً على: تخصص الاقتصاد، خبرة 10 سنوات في الحج، شهادة جوجل لإدارة المشاريع، ومهارات التحليل الميداني لـ 150 ألف وحدة. أعطِ نسبة مئوية للمطابقة وتقرير نقاط القوة والضعف (إن وجدت) بأسلوب استراتيجي." 
            : "You are a professional recruitment analyst. Evaluate Mohamed Thwban based on: Economics degree, 10y Hajj ops experience, Google Project Management cert, and field analysis skills for 150k units. Provide match percentage and a strategic strengths/weaknesses report.",
        }
      });
      setMessages(prev => [...prev, { role: 'bot', text: response.text || "Match analysis failed." }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: "Analysis error." }]);
    } finally {
      setIsTyping(false);
      setJdInput('');
    }
  };

  return (
    <div className={`fixed bottom-8 z-[100] no-print ${lang === 'ar' ? 'left-8' : 'right-8'}`}>
      {isOpen && (
        <div className="mb-6 w-80 md:w-[450px] h-[650px] bg-[#020617] border border-white/10 rounded-[3rem] flex flex-col overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
          <div className="p-8 bg-slate-900/50 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 gold-bg rounded-2xl flex items-center justify-center text-black shadow-lg">
                <Bot className="w-7 h-7" />
              </div>
              <div>
                <span className="font-black text-sm text-white block">Strategic Advisor</span>
                <span className="text-[10px] text-[#D4AF37] uppercase font-bold tracking-widest flex items-center gap-1">
                  <UserCheck className="w-3 h-3" /> Profile Verified
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <X className="w-6 h-6 text-white/50" />
            </button>
          </div>

          <div className="flex bg-white/5 p-3 gap-2">
             <button onClick={() => setTab('chat')} className={`flex-1 py-3 text-[11px] font-black uppercase rounded-2xl transition-all ${tab === 'chat' ? 'gold-bg text-black shadow-lg' : 'text-slate-400 hover:bg-white/5'}`}>Interactive Chat</button>
             <button onClick={() => setTab('matcher')} className={`flex-1 py-3 text-[11px] font-black uppercase rounded-2xl transition-all ${tab === 'matcher' ? 'gold-bg text-black shadow-lg' : 'text-slate-400 hover:bg-white/5'}`}>JD Matcher</button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6">
            {tab === 'chat' ? (
              messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-[2rem] text-sm leading-relaxed ${m.role === 'user' ? 'bg-[#D4AF37] text-black font-bold shadow-xl' : 'bg-white/5 text-slate-200 border border-white/5'}`}>
                    {m.text}
                  </div>
                </div>
              ))
            ) : (
              <div className="space-y-8">
                 <div className="text-center p-6 glass-card rounded-3xl border border-[#D4AF37]/20">
                    <Sparkles className="w-10 h-10 text-[#D4AF37] mx-auto mb-4 animate-pulse" />
                    <h4 className="text-white font-black uppercase tracking-widest text-xs">{UI_STRINGS.matcher.title[lang]}</h4>
                    <p className="text-slate-500 text-[10px] mt-2 leading-relaxed">Our AI will audit Mohamed's dossier against your JD requirements.</p>
                 </div>
                 <textarea 
                   value={jdInput}
                   onChange={e => setJdInput(e.target.value)}
                   className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl p-5 text-xs text-white outline-none focus:border-[#D4AF37] transition-all"
                   placeholder={UI_STRINGS.matcher.placeholder[lang]}
                 />
                 <button onClick={handleMatch} disabled={isTyping} className="w-full py-5 gold-bg text-black font-black rounded-2xl uppercase tracking-widest text-[12px] flex items-center justify-center gap-4 active:scale-95 transition-transform">
                    {isTyping ? 'Generating Report...' : 'Launch Match Audit'}
                 </button>
              </div>
            )}
            {isTyping && (
              <div className="flex items-center gap-3 text-[#D4AF37] text-[11px] font-black animate-pulse uppercase tracking-[0.2em]">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                Analyzing Credential Vault...
              </div>
            )}
          </div>
          
          {tab === 'chat' && (
            <div className="p-6 border-t border-white/5 bg-slate-900/30 flex gap-3">
              <input 
                value={input} onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white outline-none focus:border-[#D4AF37]"
                placeholder="Ask about 150k units, PMP, or Economics..."
              />
              <button onClick={handleSend} className="p-4 gold-bg rounded-2xl text-black shadow-lg hover:scale-105 active:scale-95 transition-all"><Send className="w-6 h-6" /></button>
            </div>
          )}
        </div>
      )}
      
      <button onClick={handleToggle} className="w-20 h-20 gold-bg text-black rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:scale-110 transition-all border-4 border-[#020617] relative group overflow-hidden">
        <MessageSquare className="w-8 h-8 relative z-10" />
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        <div className="absolute top-0 right-0 w-5 h-5 bg-red-600 rounded-full border-4 border-[#020617] animate-pulse"></div>
      </button>
    </div>
  );
};

export default AIAssistant;