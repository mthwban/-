import React, { useState, useEffect } from 'react';
import { Language } from './types.ts';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Visionary from './components/Visionary.tsx';
import Services from './components/Services.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import FieldEvidence from './components/FieldEvidence.tsx';
import Certifications from './components/Certifications.tsx';
import Contact from './components/Contact.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import FloatingContact from './components/FloatingContact.tsx';
import Process from './components/Process.tsx';
import Gallery from './components/Gallery.tsx';
import LeadershipQuiz from './components/LeadershipQuiz.tsx';
import OperationsDashboard from './components/OperationsDashboard.tsx';
import ExecutiveMode from './components/ExecutiveMode.tsx';
import { UI_STRINGS } from './constants.tsx';
import { X, ChevronUp } from 'lucide-react';

const Hobbies = ({ lang }: { lang: Language }) => (
  <section className="py-24 bg-[#020617] border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16 text-center reveal">
        <h3 className="text-4xl font-black text-white tracking-tighter uppercase">{UI_STRINGS.hobbies.title[lang]}</h3>
        <div className="h-1.5 w-24 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {UI_STRINGS.hobbies.items.map((hobby, i) => (
          <div key={i} className="reveal p-10 glass-card rounded-[3rem] group hover:border-[#D4AF37]/30 transition-all duration-700 hover:-translate-y-2 border border-white/5">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-8 group-hover:bg-[#D4AF37] group-hover:text-black transition-all shadow-xl">
              {hobby.icon}
            </div>
            <h4 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">{hobby.title[lang]}</h4>
            <p className="text-slate-400 text-base font-medium leading-relaxed opacity-80">{hobby.desc[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [isExecutiveMode, setIsExecutiveMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className={`min-h-screen bg-[#020617] text-slate-100 selection:bg-[#D4AF37] selection:text-black ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Dynamic Background Noise/Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/5 blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] bg-blue-600/5 blur-[140px] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      </div>

      <Navbar lang={lang} setLang={setLang} />
      
      {isExecutiveMode && (
        <div className="fixed top-0 left-0 w-full bg-[#D4AF37] py-2 z-[110] text-center text-black font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 shadow-xl">
          <div className="w-1.5 h-1.5 bg-black rounded-full animate-ping"></div>
          <span>{UI_STRINGS.executive.title[lang]} BRIEFING ACTIVE</span>
          <button onClick={() => setIsExecutiveMode(false)} className="p-1 hover:bg-black/10 rounded-full transition-colors ml-4">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <main className={`relative z-10 transition-all duration-1000 ${isExecutiveMode ? 'pt-20 opacity-0 animate-fade-in' : 'pt-4 md:pt-0'}`}>
        {isExecutiveMode ? (
          <ExecutiveMode lang={lang} onExit={() => setIsExecutiveMode(false)} />
        ) : (
          <>
            <Hero lang={lang} onExecutiveToggle={() => setIsExecutiveMode(true)} />
            <div className="reveal"><OperationsDashboard lang={lang} /></div>
            <div className="reveal"><About lang={lang} /></div>
            <div className="reveal"><Visionary lang={lang} /></div>
            <div className="reveal"><LeadershipQuiz lang={lang} /></div>
            <div className="reveal"><Process lang={lang} /></div>
            <div className="reveal"><Experience lang={lang} /></div>
            <div className="reveal"><FieldEvidence lang={lang} /></div>
            <div className="reveal"><Services lang={lang} /></div>
            <div className="reveal"><Gallery lang={lang} /></div>
            <div className="reveal"><Skills lang={lang} /></div>
            <div className="reveal"><Certifications lang={lang} /></div>
            <Hobbies lang={lang} />
            <div className="reveal"><Contact lang={lang} /></div>
          </>
        )}
      </main>

      <AIAssistant lang={lang} />
      <FloatingContact lang={lang} />

      {/* Scroll Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 left-8 z-[60] w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white transition-all duration-500 hover:bg-[#D4AF37] hover:text-black hover:scale-110 active:scale-95 shadow-2xl ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      <footer className="py-20 bg-[#010409] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 grayscale bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">
            {UI_STRINGS.brand[lang]}<span className="text-[#D4AF37]">.</span>
          </div>
          <p className="text-slate-500 text-[11px] font-black uppercase tracking-[0.6em] mb-12">
            ARCHITECT OF STRATEGIC OPERATIONS & VISUAL ARTS
          </p>
          <div className="flex justify-center gap-8 mb-12">
            {['LOGISTICS', 'ECONOMICS', 'CINEMA', 'DESIGN'].map(tag => (
              <span key={tag} className="text-[9px] font-black text-white/20 tracking-[0.2em]">{tag}</span>
            ))}
          </div>
          <div className="text-slate-700 text-[9px] font-bold uppercase tracking-widest">
            Handcrafted for the next era of industrial leadership.
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&family=Inter:wght@300;400;600;800;900&display=swap');
        
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-arabic { font-family: 'Cairo', sans-serif; }
        
        .glass-card { 
          background: rgba(15, 23, 42, 0.4) !important; 
          backdrop-filter: blur(16px) !important; 
          border: 1px solid rgba(255, 255, 255, 0.05) !important; 
        }
        
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .animate-float { animation: float 5s ease-in-out infinite; }
        
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        
        .gold-bg { background: linear-gradient(135deg, #D4AF37 0%, #F1D592 100%) !important; }
        .gold-gradient { background: linear-gradient(135deg, #D4AF37 0%, #F1D592 50%, #D4AF37 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        
        .reveal { opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(0.2, 0, 0.2, 1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        
        section { position: relative; width: 100%; }
        
        ::selection { background: #D4AF37; color: #020617; }
      `}</style>
    </div>
  );
};

export default App;