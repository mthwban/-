import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Bot, X, Send, Sparkles } from 'lucide-react';
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
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

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
          systemInstruction: `أنت المساعد الذكي لمحمد ثوبان إيميجين. محمد خبير اقتصاد (خريج جامعة أم القرى)، متخصص في العمليات الميدانية والتشغيل.
          سيرته الذاتية تشمل:
          1. مسؤول تشغيل وصيانة في شركة مناسك الملبي (مشروع الأضاحي بالهيئة الملكية) - أشرف على استمرارية العمل في موسم الحج.
          2. عضو لجنة في القنصلية الموريتانية بجدة - نسق العمليات الانتخابية والناخبين.
          3. أخصائي تسويق لشركات المقاولات والنقل.
          مهاراته: تخطيط، تنسيق، ضمان جودة، تصوير، مونتاج فيديو.
          شخصيته: منضبط، سريع التعلم، يتحمل الضغط الشديد.
          مهمتك: الترويج لمحمد كخبير تشغيلي وإبداعي مثالي للشركات الكبرى في السعودية والخليج. كن ذكياً، واثقاً، ومختصراً.`,
        }
      });
      
      setMessages(prev => [...prev, { role: 'bot', text: response.text || "أهلاً بك، كيف يمكنني مساعدتك؟" }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: "عذراً، يبدو أن هناك ضغطاً على العمليات الميدانية الآن، لكن محمد جاهز دائماً للتواصل المباشر عبر الواتساب!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={`fixed bottom-32 z-[200] ${lang === 'ar' ? 'left-8' : 'right-8'}`}>
      {isOpen && (
        <div className="mb-6 w-80 md:w-[350px] h-[500px] bg-midnight border border-white/10 rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl animate-in zoom-in duration-300">
          <div className="p-5 gold-bg text-black flex justify-between items-center font-black">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="text-xs uppercase">Strategic Advisor</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-6 h-6 hover:rotate-90 transition-transform" /></button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-midnight/90">
            <div className="max-w-[85%] p-4 rounded-2xl text-xs bg-white/5 text-slate-200 border border-white/5">
              مرحباً بك. أنا المساعد الذكي لمحمد ثوبان. كيف يمكن لخبراته في التشغيل الميداني أو الإنتاج الإبداعي أن تخدم مشروعك القادم؟
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${m.role === 'user' ? 'bg-gold text-black font-bold' : 'bg-white/5 text-slate-200 border border-white/5'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-gold text-[10px] animate-pulse">جاري تحليل البيانات...</div>}
          </div>
          <div className="p-4 bg-midnight border-t border-white/5 flex gap-2">
            <input 
              value={input} onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white outline-none focus:border-gold"
              placeholder="اسألني عن خبرات محمد..."
            />
            <button onClick={handleSend} className="p-3 gold-bg rounded-full text-black hover:scale-110 transition-all"><Send className="w-4 h-4" /></button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-16 h-16 gold-bg text-black rounded-2xl flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-all group"
      >
        <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="text-[8px] font-black uppercase mt-1">ذكاء</span>
      </button>
    </div>
  );
};

export default AIAssistant;