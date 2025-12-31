
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Process from './components/Process';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FloatingContact from './components/FloatingContact';
import AIAssistant from './components/AIAssistant';
import { Language } from './types';
import { UI_STRINGS } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`min-h-screen selection:bg-emerald-500 selection:text-white ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Certifications lang={lang} />
        <Skills lang={lang} />
        <Gallery lang={lang} />
        <Process lang={lang} />
        <Contact lang={lang} />
      </main>
      
      <AIAssistant lang={lang} />
      <FloatingContact lang={lang} />
      
      {/* Print Section */}
      <div className="hidden print:block fixed inset-0 bg-white text-black p-10 overflow-y-auto">
        <header className="border-b-2 border-black pb-4 mb-8">
          <h1 className="text-3xl font-bold uppercase">{UI_STRINGS.hero.nameFirst[lang]} {UI_STRINGS.hero.nameLast[lang]}</h1>
          <p className="text-lg">{UI_STRINGS.hero.headline[lang]}</p>
        </header>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">{UI_STRINGS.about.badge[lang]}</h2>
          <p>{UI_STRINGS.about.p1[lang]}</p>
        </section>
      </div>
    </div>
  );
};

export default App;
