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
    <section id="experience" className="py-32 scroll-mt-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-2 mb-6 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest border border-[#D4AF37]/20">
            {content.badge[lang]}
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            {content.title[lang]}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line for Timeline */}
          <div className={`absolute top-0 bottom-0 w-1 bg-white/5 hidden md:block ${lang === 'ar' ? 'right-1/2' : 'left-1/2'} -translate-x-1/2`}></div>
          
          <div className="space-y-16">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-12 group ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Center Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gold-bg hidden md:flex items-center justify-center text-black z-20 shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform">
                   <Briefcase className="w-6 h-6" />
                </div>

                <div className="w-full md:w-1/2">
                  <div className={`p-10 glass-card rounded-[3rem] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-700 shadow-2xl relative ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    
                    <div className={`flex items-center gap-3 mb-4 text-[#D4AF37] font-black text-xl ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Calendar className="w-5 h-5" />
                      {exp.period[lang]}
                    </div>

                    <div className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mb-4">
                      {exp.company[lang]}
                    </div>

                    <h3 className="text-3xl font-black text-white mb-6 group-hover:text-[#D4AF37] transition-colors leading-tight tracking-tighter">
                      {exp.title[lang]}
                    </h3>

                    <div className="space-y-4">
                      {exp.description.map((desc, j) => (
                        <p key={j} className={`text-slate-400 text-lg leading-relaxed flex items-start gap-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <ChevronRight className={`w-5 h-5 mt-1 text-[#D4AF37] flex-shrink-0 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                          {desc[lang]}
                        </p>
                      ))}
                    </div>

                    <div className={`flex flex-wrap gap-3 mt-8 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {exp.tags.map((tag, j) => (
                        <span key={j} className="px-5 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase text-slate-300">
                          {tag[lang]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;