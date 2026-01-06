
import React from 'react';
import { Language } from '../types';
import { SKILLS } from '../constants';
import { CheckCircle2, Star, Sparkles } from 'lucide-react';

interface SkillsProps { lang: Language; }

const Skills: React.FC<SkillsProps> = ({ lang }) => {
  return (
    <section id="skills" className="py-32 bg-[#070912] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em]">
             <Sparkles className="w-3 h-3" />
             Strategic Multi-Stack
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4 leading-none">
            Capabilities.
          </h2>
          <div className="h-1.5 w-24 gold-bg mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, i) => (
            <div key={i} className="p-10 glass-card rounded-[3.5rem] group hover:border-[#D4AF37]/30 transition-all duration-700 relative overflow-hidden flex flex-col h-full border border-white/5">
              <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000">
                {React.cloneElement(skill.icon as React.ReactElement<any>, { size: 180 })}
              </div>
              
              <div className="flex items-center gap-6 mb-12 relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all shadow-xl">
                  {React.cloneElement(skill.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
                    {skill.category[lang]}
                  </h3>
                </div>
              </div>
              
              <div className="space-y-4 relative z-10 mt-auto">
                {skill.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl group/item hover:bg-white/10 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-[12px] font-bold uppercase text-slate-300 tracking-widest">{item[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
