
import React from 'react';
import { Language } from '../types';
import { GALLERY_ITEMS } from '../constants';
import { Info, Target } from 'lucide-react';

interface GalleryProps {
  lang: Language;
}

const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  return (
    <section id="portfolio" className="py-32 bg-[#0a0c1b]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black mb-20 tracking-tighter text-center">Featured Projects.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {GALLERY_ITEMS.map((item, i) => (
            <div key={i} className="group relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src={item.src} alt={item.title[lang]} className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                <div className="flex gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-emerald-600 text-white rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Target className="w-3 h-3" /> {item.kpi[lang]}
                  </span>
                </div>
                <h3 className="text-4xl font-black text-white mb-4">{item.title[lang]}</h3>
                <p className="text-slate-300 text-lg font-light leading-relaxed max-w-md">{item.caption[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
