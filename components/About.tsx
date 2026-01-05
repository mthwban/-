
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';
import { Scale } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const content = UI_STRINGS.about;

  return (
    <section id="about" className="py-32 bg-[#0b0d17] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {content.metrics.map((metric, i) => (
              <div key={i} className="p-8 glass-card rounded-[2.5rem] group hover:bg-[#c29b40]/5 transition-all duration-500">
                <div className="text-4xl font-black text-white mb-2 tracking-tighter group-hover:text-[#c29b40] transition-colors">{metric.value}</div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{metric.label[lang]}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-10 glass-card rounded-[3rem] flex items-center gap-8 group hover:border-[#c29b40]/30 transition-all">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#c29b40] group-hover:bg-[#c29b40] group-hover:text-black transition-all shadow-sm">
              <Scale className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">{content.roiTitle[lang]}</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {content.roiDesc[lang]}
              </p>
            </div>
          </div>
        </div>

        <div className={`order-1 lg:order-2 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <div className="inline-block px-4 py-2 mb-6 rounded-lg bg-white/5 text-[#c29b40] text-[10px] font-black uppercase tracking-widest border border-white/10">
            {content.badge[lang]}
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
            {content.title[lang]}
          </h2>
          <p className="text-xl text-slate-400 font-light leading-relaxed mb-10">
            {content.text[lang]}
          </p>
          <div className="h-2 w-32 bg-[#c29b40] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
