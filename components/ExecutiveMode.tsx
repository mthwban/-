import React from 'react';
import { Language } from '../types';
import { UI_STRINGS, CONTACT_INFO, EXPERIENCES, CERTIFICATIONS } from '../constants';
import { Briefcase, Award, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

interface Props { 
  lang: Language;
  onExit: () => void;
}

const ExecutiveMode: React.FC<Props> = ({ lang, onExit }) => {
  const content = UI_STRINGS.executive;

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
      <div className="flex items-center justify-between mb-16">
         <button onClick={onExit} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors group">
            <ArrowLeft className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            <span className="text-[10px] font-black uppercase tracking-widest">{content.exit[lang]}</span>
         </button>
         <div className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black rounded-full uppercase tracking-widest">
            Executive View Activated
         </div>
      </div>

      <div className="mb-20 text-center">
         <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">{UI_STRINGS.brand[lang]} Summary.</h1>
         <p className="text-slate-400 text-xl font-medium">{content.subtitle[lang]}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
         <div className="p-10 glass-card rounded-[3rem] border-l-4 border-[#D4AF37]">
            <h3 className="text-[#D4AF37] font-black uppercase text-xs tracking-widest mb-6 flex items-center gap-3">
               <Briefcase className="w-4 h-4" /> Core Expertise
            </h3>
            <div className="space-y-4">
               {EXPERIENCES.slice(0, 2).map((exp, i) => (
                 <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <div>
                       <div className="text-white font-bold">{exp.title[lang]}</div>
                       <div className="text-slate-500 text-xs">{exp.company[lang]}</div>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="p-10 glass-card rounded-[3rem] border-l-4 border-blue-500">
            <h3 className="text-blue-400 font-black uppercase text-xs tracking-widest mb-6 flex items-center gap-3">
               <Award className="w-4 h-4" /> Credentials
            </h3>
            <div className="space-y-4">
               {CERTIFICATIONS.map((cert, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <div>
                       <div className="text-white font-bold">{cert.title[lang]}</div>
                       <div className="text-slate-500 text-xs">{cert.issuer[lang]}</div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      <div className="p-12 glass-card rounded-[4rem] text-center bg-gradient-to-br from-[#D4AF37]/5 to-transparent">
         <h2 className="text-3xl font-black text-white mb-8">Direct Channel.</h2>
         <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`mailto:${CONTACT_INFO.email}`} className="px-10 py-5 gold-bg text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all">
               <Send className="w-5 h-5" />
               Get in Touch
            </a>
            <a href={CONTACT_INFO.resume} target="_blank" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
               View Full Dossier
            </a>
         </div>
      </div>
    </div>
  );
};

export default ExecutiveMode;