import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface ProcessProps {
  lang: Language;
}

const Process: React.FC<ProcessProps> = ({ lang }) => {
  const content = UI_STRINGS.process;

  return (
    <section id="process" className="py-32 bg-[#0b0d17] scroll-mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10">
            <span className="text-[#c29b40] text-[11px] font-black uppercase tracking-[0.3em]">{content.badge[lang]}</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">{content.title[lang]}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.steps.map((step, index) => (
            <div 
              key={index} 
              className="group p-10 glass-card rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 relative z-10"
            >
              <div className="text-white/5 text-8xl font-black absolute top-4 right-8 group-hover:text-[#c29b40]/10 transition-colors pointer-events-none">
                0{index + 1}
              </div>
              
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#c29b40] group-hover:text-black transition-all shadow-sm text-[#c29b40]">
                {step.icon}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#c29b40] transition-colors">
                {step.title[lang]}
              </h4>
              
              <p className="text-slate-500 text-[15px] font-light leading-relaxed">
                {step.desc[lang]}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 bg-white/5 border border-white/10 rounded-[4rem] text-center group hover:bg-[#c29b40]/10 hover:border-[#c29b40]/20 transition-all duration-1000">
          <p className="text-white text-2xl font-black tracking-tight">
            "{content.footer[lang]}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;