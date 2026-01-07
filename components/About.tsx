
import React from 'react';
import { Language } from '../types.ts';
import { UI_STRINGS } from '../constants.tsx';
import { Factory, Camera, Sparkles, Target, ChevronRight, Zap, Award, ShieldCheck, GraduationCap, TrendingUp } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const content = UI_STRINGS.about;
  const hobbies = UI_STRINGS.hobbies;
  const development = UI_STRINGS.development;

  return (
    <section id="about" className="py-32 bg-[#020617] scroll-mt-24 relative overflow-hidden">
      {/* Structural background elements */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 reveal">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-xl bg-slate-900/80 text-[#D4AF37] text-[11px] font-black uppercase tracking-[0.4em] border border-slate-700 backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            {content.badge[lang]}
          </div>
          <h2 className="text-5xl md:text-8xl font-[1000] text-white mb-10 tracking-tighter leading-[0.9] uppercase">
            {content.title[lang]}
          </h2>
          <div className="h-2 w-32 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        {/* Continuous Learning & Professional Development Mastery Box */}
        <div className="reveal mb-20">
           <div className="p-8 md:p-12 glass-card rounded-[3rem] border-2 border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent flex flex-col gap-10 shadow-[0_0_80px_rgba(212,175,55,0.15)] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                <div className="w-24 h-24 bg-[#D4AF37] rounded-[2rem] flex items-center justify-center text-black shadow-2xl flex-shrink-0 animate-pulse">
                  <GraduationCap className="w-12 h-12" />
                </div>
                
                <div className="flex-1 text-center md:text-right rtl:text-right">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">
                    <span className="gold-gradient">{lang === 'ar' ? 'رحلة التعلم المستمر' : 'Continuous Learning Journey'}</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* PMP Focus */}
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#D4AF37]/40 transition-all">
                      <div className="flex items-center gap-3 mb-3 text-[#D4AF37]">
                        <ShieldCheck className="w-5 h-5" />
                        <span className="font-black text-xs uppercase tracking-widest">{development.items[0].title[lang]}</span>
                      </div>
                      <p className="text-slate-300 text-sm font-bold leading-relaxed">
                        {development.items[0].status[lang]}
                      </p>
                    </div>

                    {/* Google Marketing Focus */}
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#D4AF37]/40 transition-all">
                      <div className="flex items-center gap-3 mb-3 text-[#D4AF37]">
                        <TrendingUp className="w-5 h-5" />
                        <span className="font-black text-xs uppercase tracking-widest">{development.items[1].title[lang]}</span>
                      </div>
                      <p className="text-slate-300 text-sm font-bold leading-relaxed">
                        {development.items[1].status[lang]}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 relative z-10 hidden lg:block">
                   <div className="px-8 py-4 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-2xl text-[#D4AF37] font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                     <Award className="w-4 h-4" />
                     Strategic Development
                   </div>
                </div>
              </div>
           </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          {content.pillars?.map((pillar, idx) => (
            <div key={idx} className="reveal group p-12 glass-card rounded-[4rem] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-1000 flex flex-col h-full relative overflow-hidden" style={{ transitionDelay: `${idx * 0.2}s` }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-20 h-20 bg-slate-800 rounded-[2rem] flex items-center justify-center text-[#D4AF37] mb-12 group-hover:bg-[#D4AF37] group-hover:text-black transition-all shadow-2xl group-hover:scale-110 duration-700">
                {pillar.icon}
              </div>
              
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
                {pillar.title[lang]}
              </h3>
              
              <p className="text-slate-400 text-lg font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {pillar.text[lang]}
              </p>
              
              <div className="mt-auto pt-10 flex items-center gap-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-700">
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Domain Insight</span>
                <ChevronRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Hobbies Section */}
        <div className="reveal mb-24">
           <h4 className="text-center text-slate-500 font-black uppercase tracking-[0.5em] text-xs mb-10">{hobbies.title[lang]}</h4>
           <div className="flex flex-wrap justify-center gap-6">
              {hobbies.items.map((hobby, i) => (
                <div key={i} className="px-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] flex items-center gap-4 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all group">
                   <div className="text-[#D4AF37] group-hover:scale-110 transition-transform">{hobby.icon}</div>
                   <span className="text-white font-black text-[11px] uppercase tracking-widest">{hobby.label[lang]}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-t border-white/5 pt-24 reveal">
          <div className="p-12 bg-slate-900/40 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-10 group hover:border-[#D4AF37]/20 transition-all border-l-8 border-[#D4AF37]">
            <div className="w-24 h-24 bg-slate-800 rounded-[2.5rem] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all shadow-2xl flex-shrink-0">
              <Target className="w-12 h-12" />
            </div>
            <div>
              <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">{content.roiTitle[lang]}</h4>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">
                {content.roiDesc[lang]}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {content.metrics.map((metric, i) => (
              <div key={i} className={`p-10 bg-slate-900/60 rounded-[3rem] text-center border-b-4 transition-all hover:-translate-y-2 ${metric.highlight ? 'border-[#D4AF37] shadow-[0_20px_60px_rgba(212,175,55,0.08)]' : 'border-slate-800'}`}>
                <div className={`text-5xl font-black mb-3 tracking-tighter ${metric.highlight ? 'gold-gradient' : 'text-white'}`}>{metric.value}</div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] leading-tight">
                  {metric.label[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
