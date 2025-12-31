
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface ProcessProps {
  lang: Language;
}

const Process: React.FC<ProcessProps> = ({ lang }) => {
  const content = UI_STRINGS.process;

  return (
    <section id="process" className="py-32 bg-[#0a0c1b] scroll-mt-24 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="text-emerald-400 text-[11px] font-black uppercase tracking-[0.3em]">{content.badge[lang]}</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">{content.title[lang]}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent -translate-y-12"></div>
          
          {content.steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative p-8 glass-card rounded-[2.5rem] hover:bg-white/[0.05] transition-all duration-500 border border-white/5 hover:border-emerald-500/40 z-10"
            >
              <div className="text-emerald-500/10 text-7xl font-black absolute top-4 right-6 group-hover:text-emerald-500/20 transition-colors pointer-events-none">
                0{index + 1}
              </div>
              
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform border border-emerald-500/20">
                {step.icon}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {step.title[lang]}
              </h4>
              
              <p className="text-slate-400 text-[15px] font-light leading-relaxed">
                {step.desc[lang]}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-10 glass-card rounded-[3rem] text-center border border-emerald-500/10 bg-gradient-to-b from-emerald-500/5 to-transparent">
          <p className="text-emerald-400 text-lg font-bold">
            {lang === 'en' 
              ? "Every project is a unique blend of analytical rigor and creative vision." 
              : "كل مشروع هو مزيج فريد من الصرامة التحليلية والرؤية الإبداعية."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
