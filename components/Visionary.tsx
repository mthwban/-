
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';
import { Eye, TrendingUp, Zap } from 'lucide-react';

interface VisionaryProps {
  lang: Language;
}

const Visionary: React.FC<VisionaryProps> = ({ lang }) => {
  const content = UI_STRINGS.vision;

  return (
    <section id="vision" className="py-32 bg-[#0b0d17] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-[4rem] p-16 md:p-24 border-t-8 border-[#c29b40] !important relative">
          <div className="absolute top-10 right-10 opacity-10">
            <Eye className="w-48 h-48 text-[#c29b40]" />
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block px-4 py-2 mb-8 rounded-lg bg-[#c29b40]/10 text-[#c29b40] text-xs font-black uppercase tracking-widest">
              {content.badge[lang]}
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black text-white mb-12 tracking-tighter leading-tight">
              {content.title[lang]}
            </h2>
            
            <p className="text-2xl md:text-4xl font-bold text-slate-300 leading-snug mb-16 italic">
              "{content.text[lang]}"
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center gap-6 p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-[#c29b40] rounded-2xl flex items-center justify-center text-black shadow-lg">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-white font-black uppercase text-xs tracking-widest mb-1">
                    {content.maxRoi[lang]}
                  </div>
                  <div className="text-slate-400 text-sm">{content.preciseEco[lang]}</div>
                </div>
              </div>
              <div className="flex items-center gap-6 p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#c29b40]">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-white font-black uppercase text-xs tracking-widest mb-1">
                    {content.minWaste[lang]}
                  </div>
                  <div className="text-slate-400 text-sm">{content.strictControl[lang]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visionary;
