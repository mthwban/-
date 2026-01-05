
import React from 'react';
import { Language } from '../types';
import { SKILLS } from '../constants';

interface SkillsProps { lang: Language; }

const Skills: React.FC<SkillsProps> = ({ lang }) => {
  return (
    <section id="skills" className="py-32 bg-[#070912]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {SKILLS.map((skill, i) => (
            <div key={i} className="p-12 glass-card rounded-[3.5rem] group hover:border-[#c29b40]/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                {/* Fix: Cast icon to React.ReactElement<any> to allow className prop in cloneElement */}
                {React.cloneElement(skill.icon as React.ReactElement<any>, { className: 'w-48 h-48' })}
              </div>
              
              <div className="mb-12 w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-[#c29b40] group-hover:bg-[#c29b40] group-hover:text-black transition-all shadow-xl">
                {/* Fix: Cast icon to React.ReactElement<any> to allow className prop in cloneElement */}
                {React.cloneElement(skill.icon as React.ReactElement<any>, { className: 'w-10 h-10' })}
              </div>
              
              <h3 className="text-3xl font-black text-white mb-10 uppercase tracking-tighter group-hover:text-[#c29b40] transition-colors leading-none">
                {skill.category[lang]}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {skill.items.map((item, j) => (
                  <span key={j} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black uppercase text-slate-300 tracking-widest hover:bg-white hover:text-black transition-all cursor-default">
                    {item[lang]}
                  </span>
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
