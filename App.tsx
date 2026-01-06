import React, { useState, useEffect } from 'react';
import { Language } from './types.ts';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Certifications from './components/Certifications.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import FloatingContact from './components/FloatingContact.tsx';
import FieldEvidence from './components/FieldEvidence.tsx';
import OperationsDashboard from './components/OperationsDashboard.tsx';
import LeadershipQuiz from './components/LeadershipQuiz.tsx';
import ExecutiveMode from './components/ExecutiveMode.tsx';
import CredentialVault from './components/CredentialVault.tsx';
import { UI_STRINGS } from './constants.tsx';
import { ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [isExecutiveMode, setIsExecutiveMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isExecutiveMode]); // Re-observe if mode changes

  if (isExecutiveMode) {
    return (
      <div className={`min-h-screen bg-[#010409] text-slate-100 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <ExecutiveMode lang={lang} onExit={() => setIsExecutiveMode(false)} />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&display=swap');
          .font-arabic { font-family: 'Cairo', sans-serif; }
          .gold-bg { background: linear-gradient(135deg, #D4AF37 0%, #F1D592 100%) !important; }
        `}</style>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[#010409] text-slate-100 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full"></div>
      </div>

      <Navbar lang={lang} setLang={setLang} />
      
      <main className="relative z-10 pt-4 md:pt-0">
        <Hero lang={lang} onExecutiveToggle={() => setIsExecutiveMode(true)} />
        
        <div className="reveal"><About lang={lang} /></div>
        <div className="reveal"><Experience lang={lang} /></div>
        
        {/* قسم الأعمال (Portfolio) الذي كانت تشير إليه الأيقونات المعطلة */}
        <div id="portfolio" className="reveal"><FieldEvidence lang={lang} /></div>
        
        <div className="reveal"><OperationsDashboard lang={lang} /></div>
        
        <div className="reveal">
          <Certifications lang={lang} />
          <div className="flex justify-center pb-20">
             <button 
               onClick={() => setIsVaultOpen(true)}
               className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-[#D4AF37] font-black uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-all flex items-center gap-3"
             >
                {UI_STRINGS.common.vault[lang]}
             </button>
          </div>
        </div>

        <div className="reveal"><Skills lang={lang} /></div>
        <div className="reveal"><LeadershipQuiz lang={lang} /></div>
        <div className="reveal"><Contact lang={lang} /></div>
      </main>

      <AIAssistant lang={lang} />
      <FloatingContact lang={lang} />
      
      <CredentialVault 
        lang={lang} 
        isOpen={isVaultOpen} 
        onClose={() => setIsVaultOpen(false)} 
      />

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className={`fixed bottom-24 left-8 z-[60] w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white transition-all duration-500 hover:bg-[#D4AF37] hover:text-black ${showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      <footer className="py-20 bg-[#010409] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">
            {UI_STRINGS.brand[lang]}<span className="text-[#D4AF37]">.</span>
          </div>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.6em]">
            {UI_STRINGS.common.footerSubtitle[lang]}
          </p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&display=swap');
        .font-arabic { font-family: 'Cairo', sans-serif; }
        .gold-bg { background: linear-gradient(135deg, #D4AF37 0%, #F1D592 100%) !important; }
        .gold-gradient { background: linear-gradient(135deg, #D4AF37 0%, #F1D592 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .reveal { opacity: 0; transform: translateY(30px); transition: all 1s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .glass-card { background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.05); }
      `}</style>
    </div>
  );
};

export default App;