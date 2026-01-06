
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS, IMAGES, CONTACT_INFO } from '../constants';
import { ArrowRight, Download, Zap, TrendingUp, Award, Briefcase, Star, Sparkles, PieChart, Home, Activity, Boxes } from 'lucide-react';
import VoiceIntro from './VoiceIntro.tsx';

interface HeroProps { 
  lang: Language; 
  onExecutiveToggle: () => void;
}

const Hero: React.FC<HeroProps> = ({ lang, onExecutiveToggle }) => {
  const content = UI_STRINGS.hero;
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="text-white/70 text-[10px] font-black uppercase tracking-[0.3em]">
                {content.badge[lang]}
              </span>
            </div>
            
            {/* Makkah Born Indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em]">
              <Home className="w-3 h-3" />
              {CONTACT_INFO.birthPlace[lang]}
            </div>

            <button 
              onClick={onExecutiveToggle}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all"
            >
              <Briefcase className="w-3 h-3" />
              {content.ctaFastTrack[lang]}
            </button>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase">
            <span className="block opacity-40">{content.nameFirst[lang]}</span>
            <span className="block gold-gradient">{content.nameLast[lang]}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-xl leading-relaxed">
            {content.headline[lang]}
          </p>

          <div className="mb-12 p-6 glass-card rounded-[2.5rem] border-2 border-[#D4AF37]/40 shadow-[0_0_30px_rgba(212,175,55,0.15)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 blur-3xl group-hover:bg-[#D4AF37]/20 transition-all"></div>
            <div className="flex items-center gap-4 mb-4">
               <Sparkles className="text-[#D4AF37] w-6 h-6 animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-widest text-white">Strategic Growth & Credentials</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* PMP Card */}
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-all relative overflow-hidden">
                <div className="w-10 h-10 gold-bg rounded-xl flex items-center justify-center text-black shadow-lg">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-black text-white leading-tight mb-1">{content.glowingFocus.pmp[lang]}</div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-widest">{content.glowingFocus.pmpStatus[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Digital Marketing Card */}
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all relative overflow-hidden">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-black text-white leading-tight mb-1">{content.glowingFocus.marketing[lang]}</div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest">{content.glowingFocus.marketingStatus[lang]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <button 
              onClick={() => scrollToSection('experience')}
              className="group px-10 py-5 gold-bg text-black font-black rounded-full hover:scale-105 transition-all flex items-center gap-3 justify-center shadow-xl shadow-[#D4AF37]/20"
            >
              <span>{content.ctaPrimary[lang]}</span>
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
            <div className="flex gap-4">
               <a 
                href={CONTACT_INFO.resume}
                target="_blank"
                className="flex-1 px-8 py-5 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all flex items-center gap-3 justify-center"
              >
                <Download className="w-5 h-5 text-[#D4AF37]" />
                {content.ctaSecondary[lang]}
              </a>
              <VoiceIntro lang={lang} />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative group">
             <img src={IMAGES.profile} className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100" alt="Mohamed Thoban" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 p-8 glass-card rounded-[2.5rem] border-t-2 border-[#D4AF37] z-20 animate-float">
            <div className="flex items-center gap-4">
              <div className="text-5xl font-black text-white">150k</div>
              <div className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest leading-tight">
                {lang === 'ar' ? 'وحدة في ذروة\nموسم الحج' : 'Units Managed\nHajj Peak Surge'}
              </div>
            </div>
          </div>

          <div className="absolute -top-10 -left-10 p-6 glass-card rounded-[2rem] border-b-2 border-blue-500 z-20 animate-float" style={{animationDelay: '1s'}}>
            <Boxes className="w-8 h-8 text-blue-500" />
            <div className="text-[10px] font-black text-white uppercase tracking-widest mt-2">40k Monthly Scale</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
