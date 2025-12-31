
import React, { useState } from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';
import { ChevronDown, ArrowRight, User, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const content = UI_STRINGS.hero;
  const [imageError, setImageError] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Using the specific ID provided in the prompt
  const personalPhotoUrl = "https://lh3.googleusercontent.com/d/1Zijt_bmcVaL1Tqk9oiRXTuG5Cm4jPK30";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#070912] pt-20">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${lang === 'ar' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          
          <div className={`lg:w-3/5 text-center ${lang === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}>
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-[10px]">
                {content.status[lang]}
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-white leading-[1.1]">
              {content.nameFirst[lang]} <br /> 
              <span className="text-emerald-500 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">{content.nameLast[lang]}</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mb-12 leading-relaxed opacity-90">
              {content.headline[lang]}
            </p>
            
            <div className={`flex flex-col sm:flex-row items-center gap-6 no-print ${lang === 'ar' ? 'lg:justify-start' : 'lg:justify-end'}`}>
              <a 
                href="#services" 
                onClick={(e) => handleSmoothScroll(e, 'services')}
                className="group w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-600/30 flex items-center justify-center gap-3 active:scale-95"
              >
                {content.ctaExplore[lang]}
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="w-full sm:w-auto px-10 py-5 glass-card text-white font-black rounded-2xl hover:bg-white/10 transition-all active:scale-95 border border-white/10 text-center"
              >
                {content.ctaContact[lang]}
              </a>
            </div>
          </div>

          <div className="lg:w-2/5 relative group">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-[4rem] blur-3xl group-hover:blur-2xl transition-all duration-700 opacity-30"></div>
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-[#0d1021]">
              {!imageError ? (
                <img 
                  src={personalPhotoUrl} 
                  alt="Mohamed Thwban Imijine"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  loading="eager"
                />
              ) : (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                   <User className="w-24 h-24 text-emerald-500/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070912]/60 via-transparent to-transparent opacity-60"></div>
            </div>
            
            <div className={`absolute -bottom-6 -left-6 bg-[#070912] border border-emerald-500/30 p-5 rounded-3xl shadow-2xl z-20 ${lang === 'ar' ? 'right-auto -left-6' : 'left-auto -right-6'}`}>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase text-emerald-500 tracking-widest leading-none mb-1">Results Focused</p>
                    <p className="text-sm font-bold text-white">Strategic Excellence</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 animate-bounce cursor-pointer no-print group hidden lg:block" 
        onClick={(e) => handleSmoothScroll(e as any, 'services')}
      >
        <ChevronDown className="w-8 h-8 text-white group-hover:text-emerald-500 transition-colors" />
      </div>
    </section>
  );
};

export default Hero;
