import React from 'react';
import { Language } from '../types.ts';
import { UI_STRINGS, CONTACT_INFO } from '../constants.tsx';
import { ArrowDown, FileText, Sparkles, ShieldCheck } from 'lucide-react';
import VoiceIntro from './VoiceIntro.tsx';

interface HeroProps { 
  lang: Language; 
  onExecutiveToggle?: () => void;
}

const Hero: React.FC<HeroProps> = ({ lang, onExecutiveToggle }) => {
  const content = UI_STRINGS.hero;
  
  const scrollToExperience = () => {
    const el = document.getElementById('experience');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-midnight">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="reveal active">
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-gold/10 border border-gold/30 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold animate-pulse" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">{content.badge[lang]}</span>
            </div>
            {onExecutiveToggle && (
              <button 
                onClick={onExecutiveToggle}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all active:scale-95"
              >
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Executive Mode</span>
              </button>
            )}
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none uppercase">
            {content.nameFirst[lang]} <span className="gold-gradient">{content.nameLast[lang]}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-xl leading-relaxed">
            {content.headline[lang]}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button 
              onClick={scrollToExperience}
              className="px-8 py-4 gold-bg text-black font-black rounded-2xl hover:scale-105 transition-all flex items-center gap-3 shadow-lg active:scale-95"
            >
              {content.ctaPrimary[lang]}
              <ArrowDown className="w-5 h-5" />
            </button>
            <a 
              href={CONTACT_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3 active:scale-95"
            >
              <FileText className="w-5 h-5 text-gold" />
              {content.ctaSecondary[lang]}
            </a>
            <VoiceIntro lang={lang} />
          </div>
        </div>

        <div className="relative reveal active hidden lg:block">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl relative group">
             <img src="https://lh3.googleusercontent.com/d/1Zijt_bmcVaL1Tqk9oiRXTuG5Cm4jPK30" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="Mohamed Thoban" />
             <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 p-8 glass-card rounded-3xl border-t-4 border-gold z-20 shadow-2xl">
            <div className="text-4xl font-black text-white">150k</div>
            <div className="text-[10px] font-black text-gold uppercase tracking-widest leading-tight">وحدة مدارة في الحج</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;