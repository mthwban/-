
import React from 'react';
import { Language } from '../types';
import { EXPERIENCES, UI_STRINGS } from '../constants';
import { Calendar, CheckCircle2, Snowflake, Package, Globe, Users, TrendingUp, Zap, Target, HeartPulse } from 'lucide-react';

interface ExperienceProps {
  lang: Language;
}

const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const content = UI_STRINGS.experience;
  const getIconForRole = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('adahi') || t.includes('operations')) return <Zap className="w-6 h-6 text-black" />;
    if (t.includes('elections') || t.includes('committee')) return <Globe className="w-6 h-6 text-black" />;
    if (t.includes('marketing')) return <TrendingUp className="w-6 h-6 text-black" />;
    if (t.includes('hajj') || t.includes('commander')) return <Target className="w-6 h-6 text-black" />;
    return <Users className="w-6 h-6 text-black" />;
  };

  return (
    <section id="experience" className="py-32 bg-[#0b0d17] block !visible scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-2 mb-6 rounded-lg bg-[#c29b40]/10 border border-[#c29b40]/20 text-[#c29b40] text-[10px] font-black uppercase tracking-widest">
            {content.badge[lang]}
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
            {content.title[lang]}
          </h2>
        </div>

        <div className="space-y-12 block !visible">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="group p-12 glass-card rounded-[3.5rem] hover:border-[#c29b40]/30 transition-all duration-700 flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3 text-slate-500 font-black text-[10px] uppercase tracking-widest mb-6">
                  <Calendar className="w-4 h-4 text-[#c29b40]" />
                  {exp.period[lang]}
                </div>
                <div className="w-12 h-12 mb-6 bg-[#c29b40] rounded-2xl flex items-center justify-center">
                  {getIconForRole(exp.title.en)}
                </div>
                <h3 className="text-4xl font-black text-white mb-4 leading-tight group-hover:text-[#c29b40] transition-colors">
                  {exp.title[lang]}
                </h3>
                <p className="text-[#c29b40] font-bold uppercase text-xs tracking-[0.2em] bg-white/5 py-3 px-6 rounded-2xl inline-block border border-white/5">
                  {exp.company[lang]}
                </p>
                
                {exp.period.en.includes('10/2024') && (
                  <div className="mt-10 space-y-4">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center gap-5">
                       <Snowflake className="w-8 h-8 text-[#c29b40]" />
                       <div>
                          <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{content.climateLogistics[lang]}</div>
                          <div className="text-sm font-bold text-white">{content.fridgeCommand[lang]}</div>
                       </div>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center gap-5">
                       <Package className="w-8 h-8 text-[#c29b40]" />
                       <div>
                          <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{content.outputFlow[lang]}</div>
                          <div className="text-sm font-bold text-white">{content.globalDispatch[lang]}</div>
                       </div>
                    </div>
                  </div>
                )}
                
                {exp.period.en.includes('2013') && (
                  <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center gap-5">
                     <HeartPulse className="w-8 h-8 text-emerald-500" />
                     <div>
                        <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{content.healthSafety[lang]}</div>
                        <div className="text-sm font-bold text-white">{content.healthLead[lang]}</div>
                     </div>
                  </div>
                )}
              </div>

              <div className="lg:w-2/3">
                <ul className="space-y-8">
                  {exp.description.map((point, j) => (
                    <li key={j} className="text-slate-300 text-lg font-light leading-relaxed flex gap-6">
                      <CheckCircle2 className="w-7 h-7 text-[#c29b40] mt-1 flex-shrink-0" />
                      <span>{point[lang]}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 mt-16">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase text-slate-400 hover:bg-[#c29b40] hover:text-black transition-all">
                      {tag[lang]}
                    </span>
                  ))}
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
