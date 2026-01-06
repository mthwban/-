import React from 'react';
import { Language } from '../types.ts';
import { UI_STRINGS, IMAGES, CONTACT_INFO } from '../constants.tsx';
import { ArrowRight, Download, Zap, TrendingUp, Award, Briefcase, Star, Sparkles, PieChart, Home, Activity, Boxes, Target } from 'lucide-react';
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
      {/* Background technical grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="reveal active">
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">
                {content.badge[lang]}
              </span>
            </div>
            
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em]">
              <Home className="w-3.5 h-3.5" />
              {CONTACT_INFO.birthPlace[lang]}
            </div>

            <button 
              onClick={onExecutiveToggle}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all shadow-lg hover:shadow-blue-500/20"
            >
              <Briefcase className="w-3.5 h-3.5" />
              {content.ctaFastTrack[lang]}
            </button>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-[1000] text-white tracking-tighter mb-10 leading-[0.85] uppercase">
            <span className="block opacity-30 select-none">{content.nameFirst[lang]}</span>
            <span className="block gold-gradient drop-shadow-2xl">{content.nameLast[lang]}</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-400 mb-14 max-w-2xl leading-relaxed font-medium">
            {content.headline[lang]}
          </p>

          <div className="mb-14 p-8 glass-card rounded-[3rem] border-2 border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.1)] relative overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-700">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 blur-3xl group-hover:bg-[#D4AF37]/20 transition-all"></div>
            <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-[#D4AF37]/10 rounded-xl">
                 <Sparkles className="text-[#D4AF37] w-6 h-6 animate-pulse" />
               </div>
               <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white">Strategic Roadmap & Verified Credentials</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* PMP Card */}
              <div className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all relative overflow-hidden">
                <div className="w-12 h-12 gold-bg rounded-xl flex items-center justify-center text-black shadow-xl">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[12px] font-black text-white leading-tight mb-1">{content.glowingFocus.pmp[lang]}</div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
                    <span className="text-[10px] text-[#D4AF37] font-black uppercase tracking-widest">{content.glowingFocus.pmpStatus[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Digital Marketing Card */}
              <div className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all relative overflow-hidden">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-xl">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[12px] font-black text-white leading-tight mb-1">{content.glowingFocus.marketing[lang]}</div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                    <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest">{content.glowingFocus.marketingStatus[lang]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <button 
              onClick={() => scrollToSection('experience')}
              className="group px-12 py-6 gold-bg text-black font-black rounded-2xl hover:scale-105 transition-all flex items-center gap-4 justify-center shadow-2xl shadow-[#D4AF37]/20 active:scale-95"
            >
              <span className="text-sm uppercase tracking-widest">{content.ctaPrimary[lang]}</span>
              <ArrowRight className={`w-6 h-6 transition-transform group-hover:translate-x-2 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
            <div className="flex gap-4">
               <a 
                href={CONTACT_INFO.resume}
                target="_blank"
                className="flex-1 px-8 py-6 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all flex items-center gap-4 justify-center active:scale-95"
              >
                <Download className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-[11px] uppercase tracking-widest">{content.ctaSecondary[lang]}</span>
              </a>
              <VoiceIntro lang={lang} />
            </div>
          </div>
        </div>

        <div className="relative reveal active" style={{ transitionDelay: '0.4s' }}>
          <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-2 border-white/10 shadow-[0_0_100px_rgba(212,175,55,0.1)] relative group">
             <img src={IMAGES.profile} className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="Mohamed Thoban" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>
             
             {/* Dynamic Scan Line Effect */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent h-24 w-full top-[-100px] animate-[scan_6s_linear_infinite] pointer-events-none"></div>
          </div>
          
          <div className="absolute -bottom-12 -right-12 p-10 glass-card rounded-[3.5rem] border-t-4 border-[#D4AF37] z-20 animate-float shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="text-6xl font-black text-white tracking-tighter">150k</div>
              <div className="h-12 w-1 bg-[#D4AF37]/30 rounded-full"></div>
              <div className="text-[11px] font-black text-[#D4AF37] uppercase tracking-widest leading-tight">
                {lang === 'ar' ? 'وحدة في ذروة\nموسم الحج' : 'Industrial Scale\nHajj Peak Surge'}
              </div>
            </div>
          </div>

          <div className="absolute -top-12 -left-12 p-8 glass-card rounded-[3rem] border-b-4 border-blue-500 z-20 animate-float shadow-2xl" style={{animationDelay: '1s'}}>
            <div className="flex items-center gap-4 mb-2">
              <Boxes className="w-8 h-8 text-blue-500" />
              <div className="text-2xl font-black text-white">40k</div>
            </div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly Logistics Surge</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: -100px; }
          100% { top: 110%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;