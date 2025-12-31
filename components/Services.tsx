
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const content = UI_STRINGS.services;

  return (
    <section id="services" className="py-32 bg-[#0a0c1b] scroll-mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="text-emerald-400 text-[11px] font-black uppercase tracking-[0.3em]">{content.badge[lang]}</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">{content.title[lang]}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-10 glass-card rounded-[2.5rem] hover:bg-white/[0.05] transition-all duration-500 border border-white/5 hover:border-emerald-500/40"
            >
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-5 group-hover:text-emerald-400 transition-colors">
                {service.title[lang]}
              </h4>
              
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                {service.desc[lang]}
              </p>
              
              {/* Bottom line indicator */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-700 group-hover:w-full rounded-b-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
