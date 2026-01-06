
import React, { useState } from 'react';
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
import { UI_STRINGS } from './constants.tsx';

const Hobbies = ({ lang }: { lang: Language }) => (
  <section className="py-24 bg-[#020617]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16 text-center">
        <h3 className="text-3xl font-black text-white tracking-tighter uppercase">{UI_STRINGS.hobbies.title[lang]}</h3>
        <div className="h-1 w-20 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {UI_STRINGS.hobbies.items.map((hobby, i) => (
          <div key={i} className="p-8 glass-card rounded-[2.5rem] group hover:border-[#D4AF37]/30 transition-all duration-500">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
              {hobby.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{hobby.title[lang]}</h4>
            <p className="text-slate-400 text-sm font-light leading-relaxed">{hobby.desc[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');

  return (
    <div className={`min-h-screen bg-[#020617] text-slate-100 selection:bg-[#D4AF37] selection:text-black ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/5 blur-[120px] rounded-full"></div>
      </div>

      <Navbar lang={lang} setLang={setLang} />
      
      <main className="relative z-10">
        <Hero lang={lang} />
        <About lang={lang} />
        <Visionary lang={lang} />
        <Process lang={lang} />
        <Experience lang={lang} />
        <FieldEvidence lang={lang} />
        <Services lang={lang} />
        <Gallery lang={lang} />
        <Skills lang={lang} />
        <Certifications lang={lang} />
        <Hobbies lang={lang} />
        <Contact lang={lang} />
      </main>

      <AIAssistant lang={lang} />
      <FloatingContact lang={lang} />

      <footer className="py-12 bg-[#010409] border-t border-white/5 text-center">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">
          {UI_STRINGS.brand[lang]} • ARCHITECT OF STRATEGIC OPERATIONS
        </p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800;900&family=Noto+Sans+Arabic:wght@300;400;600;800;900&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-arabic { font-family: 'Noto Sans Arabic', sans-serif; }
        .glass-card { background: rgba(15, 23, 42, 0.3) !important; backdrop-filter: blur(12px) !important; border: 1px solid rgba(255, 255, 255, 0.05) !important; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default App;
