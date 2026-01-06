
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';
import { Factory, Camera, Code, Sparkles, Snowflake, Target } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const content = UI_STRINGS.about;

  return (
    <section id="about" className="py-24 bg-[#020617] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal-up">
          <div className="inline-block px-4 py-2 mb-6 rounded-lg bg-slate-800/50 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest border border-slate-700">
            {content.badge[lang]}
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
            {content.title[lang]}
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {content.pillars?.map((pillar, idx) => (
            <div key={idx} className="group p-10 glass-card rounded-[3rem] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-700 flex flex-col h-full">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-8 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
                {pillar.title[lang]}
              </h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                {pillar.text[lang]}
              </p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-t border-white/5 pt-20">
          <div className="p-10 bg-slate-900/40 rounded-[2.5rem] flex items-center gap-8 group hover:border-slate-700 transition-all border-l-4 border-slate-700">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">{content.roiTitle[lang]}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {content.roiDesc[lang]}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {content.metrics.map((metric, i) => (
              <div key={i} className={`p-8 bg-slate-900/60 rounded-[2.5rem] text-center border-b-4 ${metric.highlight ? 'border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.05)]' : 'border-slate-800'}`}>
                <div className={`text-4xl font-black mb-2 tracking-tighter ${metric.highlight ? 'gold-gradient' : 'text-white'}`}>{metric.value}</div>
                <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-tight">
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
