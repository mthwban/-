
import React from 'react';
import { SKILLS, UI_STRINGS } from '../constants';
import { Language } from '../types';

interface SkillsProps {
  lang: Language;
}

const Skills: React.FC<SkillsProps> = ({ lang }) => {
  return (
    <section id="skills" className="py-32 bg-[#0d1021] scroll-mt-24 relative overflow-hidden section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-emerald-400/50 text-xs font-black uppercase tracking-[0.5em] mb-4">{UI_STRINGS.skills.badge[lang]}</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">{UI_STRINGS.skills.title[lang]}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <div 
              key={index}
              className={`group relative p-10 glass-card rounded-[3rem] hover:bg-white/[0.05] transition-all duration-500 border border-white/5 hover:border-emerald-500/30 overflow-hidden ${
                index === 3 || index === 4 ? 'lg:col-span-1.5' : ''
              }`}
            >
              {/* Animated Background Blur */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500/5 rounded-full blur-[100px] group-hover:bg-emerald-500/10 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-10 border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500/30 transition-all duration-700">
                  {skill.icon}
                </div>
                
                <h4 className="text-2xl font-black mb-8 text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  {skill.category[lang]}
                </h4>
                
                <div className="flex flex-wrap gap-2.5">
                  {skill.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-white/5 border border-white/10 text-slate-300 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/40"
                    >
                      {item[lang]}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Decorative Accent */}
              <div className="absolute top-8 right-8 text-white/5 font-black text-6xl select-none group-hover:text-emerald-500/10 transition-colors">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action for Collaboration */}
        <div className="mt-20 flex justify-center">
           <div className="px-8 py-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-widest uppercase animate-pulse">
             {lang === 'ar' ? 'جاهز لتقديم حلول متكاملة عبر هذه التخصصات' : 'Ready to deliver integrated solutions across these pillars'}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
