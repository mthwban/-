import React from 'react';
import { Language } from '../types';
import { EXPERIENCES, UI_STRINGS } from '../constants';
import { Calendar, ChevronRight, Briefcase } from 'lucide-react';

interface ExperienceProps {
  lang: Language;
}

const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const content = UI_STRINGS.experience;

  return (
    <section id="experience" className="py-32 bg-midnight scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-2 mb-6 rounded-lg bg-gold/10 text-gold text-[10px] font-black uppercase tracking-widest border border-gold/20">
            {content.badge[lang]}
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            {content.title[lang]}
          </h2>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="reveal group p-8 md:p-12 glass-card rounded-[3rem] border-r-8 border-gold hover:bg-white/5 transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-gold transition-colors">{exp.title[lang]}</h3>
                  <p className="text-slate-400 font-bold">{exp.company[lang]}</p>
                </div>
                <div className="flex items-center gap-3 text-gold font-black text-sm uppercase">
                  <Calendar className="w-5 h-5" />
                  {exp.period[lang]}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {exp.description.map((desc, j) => (
                  <li key={j} className="flex gap-4 text-slate-300 text-sm leading-relaxed">
                    <ChevronRight className={`w-5 h-5 text-gold flex-shrink-0 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                    {desc[lang]}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {exp.tags.map((tag, j) => (
                  <span key={j} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase text-slate-400">
                    {tag[lang]}
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

export default Experience;