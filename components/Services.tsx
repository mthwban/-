
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const content = UI_STRINGS.services;

  return (
    <section id="services" className="py-32 bg-[#0b0d17]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-2 mb-6 rounded-lg bg-white/5 text-[#c29b40] text-[10px] font-black uppercase tracking-widest border border-white/10">
            {content.badge[lang]}
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            {content.title[lang]}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((item, i) => (
            <div key={i} className="group p-12 glass-card rounded-[3rem] transition-all duration-500 hover:-translate-y-2 hover:border-[#c29b40]/30">
              <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-[#c29b40] mb-10 group-hover:scale-110 group-hover:bg-[#c29b40] group-hover:text-black transition-all">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black text-white mb-6 tracking-tight group-hover:text-[#c29b40] transition-colors">
                {item.title[lang]}
              </h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                {item.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
