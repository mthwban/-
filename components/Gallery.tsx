
import React from 'react';
import { Language } from '../types';
import { GALLERY_ITEMS } from '../constants';
import { Info, Target, Sparkles, MapPin } from 'lucide-react';

interface GalleryProps {
  lang: Language;
}

const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  return (
    <section id="portfolio" className="py-32 bg-[#020617] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em]">
            <Sparkles className="w-3 h-3" />
            Field Operations Log
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Muaisem 2 Showcase<span className="text-[#D4AF37]">.</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-slate-500 font-black uppercase text-[10px] tracking-widest">
            <MapPin className="w-4 h-4" />
            Strategic Site Documentation
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, i) => (
            <div key={i} className="group relative rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl bg-slate-900/40 h-[450px]">
              <img 
                src={item.src} 
                alt={item.title[lang]} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-40 group-hover:opacity-100 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent p-10 flex flex-col justify-end">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-lg text-[8px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Target className="w-3 h-3 text-[#D4AF37]" /> {item.kpi[lang]}
                  </span>
                  <span className="px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] rounded-lg text-[8px] font-black uppercase tracking-widest">
                    {item.category[lang]}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-[#D4AF37] transition-colors">{item.title[lang]}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {item.caption[lang]}
                </p>
                
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all delay-100">
                   <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.phase[lang]}</div>
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                      <Info className="w-4 h-4" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 bg-slate-900/40 rounded-[3rem] border border-white/5 text-center">
           <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-[10px]">
             Industrial Operations & Logistics • Verified Field Performance
           </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
