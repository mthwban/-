import React from 'react';
import { EXPERIENCES, UI_STRINGS } from '../constants';
import { CheckCircle2, Calendar } from 'lucide-react';
import { Language } from '../types';

interface ExperienceProps {
  lang: Language;
}

const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-32 bg-[#0d1021] scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-indigo-400/50 text-xs font-black uppercase tracking-[0.5em] mb-4">{UI_STRINGS.experience.badge[lang]}</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">{UI_STRINGS.experience.title[lang]}</h3>
        </div>

        <div className="relative space-y-10 max-w-5xl mx-auto">
          {/* Vertical line for timeline look on desktop */}
          <div className="hidden md:block absolute left-[-2rem] top-0 w-px h-full bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent rtl:left-auto rtl:right-[-2rem]"></div>

          {EXPERIENCES.map((exp, index) => (
            <div 
              key={index} 
              className="group relative glass-card p-8 md:p-10 rounded-3xl hover:bg-white/[0.03] transition-all duration-500 hover:translate-x-2 rtl:hover:-translate-x-2 shadow-2xl"
            >
              {/* Timeline Marker */}
              <div className="hidden md:flex absolute left-[-2.4rem] top-12 w-3.5 h-3.5 rounded-full bg-indigo-500 border-4 border-[#0d1021] z-10 items-center justify-center rtl:left-auto rtl:right-[-2.4rem]">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4 flex items-center gap-2 text-indigo-300/80 font-bold uppercase tracking-widest text-xs">
                  <Calendar className="w-4 h-4 opacity-50" />
                  {exp.period[lang]}
                </div>
                
                <div className="lg:w-3/4">
                  <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors mb-2">
                        {exp.title[lang]}
                      </h4>
                      <p className="text-indigo-400/80 font-medium text-lg">{exp.company[lang]}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 text-indigo-200 text-[10px] uppercase font-bold tracking-wider rounded-lg border border-white/5">
                          {tag[lang]}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-4 text-slate-400 text-lg font-light leading-relaxed">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500/80 shrink-0 mt-0.5" />
                        <span>{point[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;