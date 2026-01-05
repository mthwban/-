
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS, IMAGES, CONTACT_INFO } from '../constants';
import { ArrowRight, Download, ShieldCheck, MapPin, Clock, Star } from 'lucide-react';

interface HeroProps { lang: Language; }

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const content = UI_STRINGS.hero;
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]">
      {/* Refined Mesh Gradients */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[40rem] h-[40rem] bg-[#D4AF37]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[35rem] h-[35rem] bg-indigo-600/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className={`reveal-up ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 rounded-full bg-white/5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-white/70 text-[9px] font-black uppercase tracking-[0.3em]">
              {content.badge[lang]}
            </span>
          </div>
          
          <h1 className="text-7xl md:text-[9rem] font-black text-white tracking-tighter mb-8 leading-[0.8] uppercase">
            <span className="block opacity-40">{content.nameFirst[lang]}</span>
            <span className="block text-[#D4AF37]">{content.nameLast[lang]}</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-white/60 mb-12 max-w-xl leading-snug font-medium">
            {content.headline[lang]}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-20">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="group relative px-10 py-5 bg-[#D4AF37] text-black font-black rounded-full hover:scale-105 transition-all flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden"
            >
              <span>{content.ctaPrimary[lang]}</span>
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
            <a 
              href={CONTACT_INFO.resume}
              target="_blank"
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all flex items-center gap-3 w-full sm:w-auto justify-center no-print"
            >
              <Download className="w-5 h-5 text-[#D4AF37]" />
              {content.ctaSecondary[lang]}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <div className="p-6 glass-card rounded-[2rem] flex items-center gap-5 border-l-2 border-[#D4AF37]/50">
              <div className="p-3 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37]">{content.pmpBadge[lang]}</div>
                <div className="text-[11px] text-slate-400 font-bold">{content.pmpHours[lang]}</div>
              </div>
            </div>
            <div className="p-6 glass-card rounded-[2rem] flex items-center gap-5 border-l-2 border-indigo-500/50">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[9px] font-black uppercase tracking-widest text-indigo-400">{content.trainingLabel[lang]}</div>
                <div className="text-[11px] text-slate-400 font-bold">{content.trainingDetail[lang]}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
             <img src={IMAGES.profile} className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000" alt="Mohamed Thoban" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
          </div>
          
          {/* Champagne Floating Card */}
          <div className="absolute -bottom-10 -right-10 p-10 glass-card rounded-[3rem] border-t-2 border-[#D4AF37] z-20 flex flex-col items-center animate-float">
            <div className="text-5xl font-black text-white tracking-tighter">180h+</div>
            <div className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest mt-2 text-center">
              {content.trainingCounter[lang]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
