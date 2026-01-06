
import React, { useState } from 'react';
import { Language } from '../types.ts';
import { UI_STRINGS, IMAGES, CONTACT_INFO } from '../constants.tsx';
import { ArrowRight, Download, Briefcase, Home, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import VoiceIntro from './VoiceIntro.tsx';
import CredentialVault from './CredentialVault.tsx';

interface HeroProps { 
  lang: Language; 
  onExecutiveToggle: () => void;
}

const Hero: React.FC<HeroProps> = ({ lang, onExecutiveToggle }) => {
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const content = UI_STRINGS.hero;
  
  const scrollToStrategicHub = () => {
    const el = document.getElementById('strategic-hub');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <CredentialVault lang={lang} isOpen={isVaultOpen} onClose={() => setIsVaultOpen(false)} />
      
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="reveal active">
          {/* Action Badges & Status Rectangles */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {/* PMP STATUS RECTANGLE - HIGHEST PRIORITY */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37] backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-[#D4AF37] tracking-widest">{content.glowingFocus.pmp[lang]}</span>
                <span className="text-[9px] font-bold text-white leading-tight mt-0.5">{content.glowingFocus.pmpStatus[lang]}</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">
                {content.badge[lang]}
              </span>
            </div>
            
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] font-black uppercase tracking-[0.3em]">
              <Home className="w-3.5 h-3.5" />
              {CONTACT_INFO.birthPlace[lang]}
            </div>

            <button 
              onClick={onExecutiveToggle}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95"
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

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            {/* Fix: use scrollToStrategicHub instead of non-existent scrollToTop */}
            <button 
              onClick={scrollToStrategicHub}
              className="group px-12 py-6 gold-bg text-black font-black rounded-2xl hover:scale-105 transition-all flex items-center gap-4 justify-center shadow-2xl shadow-[#D4AF37]/20 active:scale-95"
            >
              <span className="text-sm uppercase tracking-widest">{content.ctaPrimary[lang]}</span>
              <ArrowRight className={`w-6 h-6 transition-transform group-hover:translate-x-2 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
            <div className="flex gap-4">
               <button 
                onClick={() => setIsVaultOpen(true)}
                className="flex-1 px-8 py-6 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all flex items-center gap-4 justify-center active:scale-95"
              >
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-[11px] uppercase tracking-widest">{content.ctaSecondary[lang]}</span>
              </button>
              <VoiceIntro lang={lang} />
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-slate-500">
             <a href={CONTACT_INFO.resume} target="_blank" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors group">
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em]">DOWNLOAD FULL CV</span>
             </a>
          </div>
        </div>

        <div className="relative reveal active" style={{ transitionDelay: '0.4s' }}>
          <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-2 border-white/10 shadow-[0_0_100px_rgba(212,175,55,0.1)] relative group">
             <img src={IMAGES.profile} className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="Mohamed Thoban" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>
          </div>
          
          <div className="absolute -bottom-12 -right-12 p-10 glass-card rounded-[3.5rem] border-t-4 border-[#D4AF37] z-20 animate-float shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="text-6xl font-black text-white tracking-tighter">150k</div>
              <div className="h-12 w-1 bg-[#D4AF37]/30 rounded-full"></div>
              <div className="text-[11px] font-black text-[#D4AF37] uppercase tracking-widest leading-tight">
                {UI_STRINGS.common.hajjUnits[lang].split('\n').map((line, i) => (
                  <React.Fragment key={i}>{line}<br/></React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
