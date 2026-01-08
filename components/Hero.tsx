
import React from 'react';
import { Language } from '../types.ts';
import { UI_STRINGS, CONTACT_INFO, IMAGES } from '../constants.tsx';
import { ArrowDownRight, FileText, Sparkles, ShieldCheck, Activity, Radio } from 'lucide-react';
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
      {/* Background Matrix Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Animated Orbitals */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full pointer-events-none animate-[spin_40s_linear_infinite_reverse]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="reveal active">
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-gold/10 border border-gold/30 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold animate-pulse" />
              <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">{content.badge[lang]}</span>
            </div>
            {onExecutiveToggle && (
              <button 
                onClick={onExecutiveToggle}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all active:scale-95 group"
              >
                <ShieldCheck className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest">Executive Mode</span>
              </button>
            )}
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.85] uppercase">
            {content.nameFirst[lang]} <br />
            <span className="gold-gradient">{content.nameLast[lang]}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
            {content.headline[lang]}
          </p>

          <div className="flex flex-wrap gap-5 mb-16">
            <button 
              onClick={scrollToExperience}
              className="px-10 py-5 gold-bg text-black font-black rounded-2xl hover:scale-105 transition-all flex items-center gap-3 shadow-2xl shadow-gold/20 active:scale-95"
            >
              {content.ctaPrimary[lang]}
              <ArrowDownRight className="w-6 h-6" />
            </button>
            <a 
              href={CONTACT_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3 active:scale-95"
            >
              <FileText className="w-6 h-6 text-gold" />
              {content.ctaSecondary[lang]}
            </a>
          </div>

          <div className="flex items-center gap-8">
            <VoiceIntro lang={lang} />
            <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
            <div className="hidden sm:flex items-center gap-4 text-slate-500">
               <Activity className="w-5 h-5 animate-pulse text-emerald-500" />
               <span className="text-[9px] font-black uppercase tracking-[0.3em]">Operational Readiness: 100%</span>
            </div>
          </div>
        </div>

        <div className="relative reveal active hidden lg:block group">
          <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden border-2 border-white/10 shadow-[0_40px_100px_rgba(212,175,55,0.2)] group-hover:shadow-[0_60px_120px_rgba(212,175,55,0.3)] transition-all duration-1000">
             <img 
               src={IMAGES.profile} 
               className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-110 transition-all duration-[2s] ease-out" 
               alt="Mohamed Thwban Professional Portrait" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
             
             {/* Dynamic Live Status on Photo */}
             <div className="absolute top-8 left-8 flex items-center gap-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                <Radio className="w-3 h-3 text-emerald-500 animate-pulse" />
                <span className="text-[8px] font-black text-white uppercase tracking-[0.3em]">Field Deployment Ready</span>
             </div>
          </div>
          
          {/* Decorative Framing */}
          <div className="absolute -inset-4 border border-gold/10 rounded-[5rem] -z-10 group-hover:scale-105 transition-transform duration-1000"></div>

          {/* Floating Performance Tag */}
          <div className="absolute -bottom-10 -right-10 p-10 glass-card rounded-[3rem] border-t-8 border-gold z-20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] animate-bounce-slow">
            <div className="text-5xl font-black text-white tracking-tighter">150k</div>
            <div className="text-[10px] font-black text-gold uppercase tracking-[0.4em] leading-tight mt-2">
              {lang === 'ar' ? 'وحدة مدارة في الحج' : 'Hajj Units Managed'}
            </div>
          </div>

          {/* Experience Badge */}
          <div className="absolute top-10 -left-10 p-6 glass-card rounded-3xl border-l-4 border-emerald-500 z-20 shadow-2xl animate-pulse">
            <div className="text-2xl font-black text-white">10+</div>
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">
              {lang === 'ar' ? 'سنوات خبرة ميدانية' : 'Years Field Exp'}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
