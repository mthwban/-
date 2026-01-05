
import React from 'react';
import { Language } from '../types';
import { CERTIFICATIONS, UI_STRINGS } from '../constants';
import { Award, GraduationCap, ShieldCheck, TrendingUp, Landmark, Video, Zap, ExternalLink, Sparkles } from 'lucide-react';

interface CertificationsProps {
  lang: Language;
}

const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  const content = UI_STRINGS.certifications;
  const devContent = UI_STRINGS.development;
  
  const getIcon = (title: string, issuer: string) => {
    const combined = (title + issuer).toLowerCase();
    if (combined.includes('pmp')) return <ShieldCheck className="w-10 h-10" />;
    if (combined.includes('marketing')) return <TrendingUp className="w-10 h-10" />;
    if (combined.includes('economics') || combined.includes('university')) return <GraduationCap className="w-10 h-10" />;
    if (combined.includes('ministry') || combined.includes('terhab') || combined.includes('hajj')) return <Landmark className="w-10 h-10" />;
    if (combined.includes('video')) return <Video className="w-10 h-10" />;
    if (combined.includes('pm') || combined.includes('google project')) return <Zap className="w-10 h-10" />;
    return <Award className="w-10 h-10" />;
  };

  return (
    <section id="certifications" className="py-32 bg-[#020617] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal-up">
          <div className="inline-block px-4 py-2 mb-6 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest border border-[#D4AF37]/20">
            {content.badge[lang]}
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            {content.title[lang]}
          </h2>
        </div>

        {/* Development Section - Restoration */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
           {devContent.items.map((dev, i) => (
             <div key={i} className="p-10 glass-card rounded-[3rem] border-l-4 border-[#D4AF37] relative overflow-hidden group">
                <div className="absolute top-6 right-6 text-[#D4AF37]/20 group-hover:text-[#D4AF37] transition-all">
                  <Sparkles className="w-10 h-10" />
                </div>
                <div className="flex items-center gap-6 mb-8">
                   <div className="p-4 bg-white/5 rounded-2xl text-[#D4AF37]">
                     {dev.icon}
                   </div>
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-1">{devContent.badge[lang]}</div>
                      <h3 className="text-2xl font-black text-white">{dev.title[lang]}</h3>
                   </div>
                </div>
                <div className="text-slate-400 font-medium mb-2 uppercase text-[10px] tracking-widest">{dev.issuer[lang]}</div>
                <p className="text-slate-200 font-bold bg-[#D4AF37]/10 p-4 rounded-2xl border border-[#D4AF37]/20 inline-block">
                  {dev.status[lang]}
                </p>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, i) => (
            <a 
              key={i} 
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-10 glass-card rounded-[3rem] relative overflow-hidden transition-all duration-500 hover:scale-[1.02] flex flex-col h-full border border-white/5 hover:border-[#D4AF37]/30"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all shadow-xl">
                  {getIcon(cert.title.en, cert.issuer.en)}
                </div>
                <div className="p-3 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
              
              <h3 className="text-xl font-black text-white mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors">
                {cert.title[lang]}
              </h3>
              
              <p className="text-slate-500 mb-2 uppercase text-[10px] font-black tracking-widest">
                {cert.issuer[lang]}
              </p>
              
              <div className="mt-auto pt-8 flex justify-between items-end border-t border-white/5">
                <div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">{content.verifyLabel[lang]}</div>
                  <div className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">{cert.date[lang]}</div>
                </div>
                <div className="px-4 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-[9px] font-black text-emerald-400 tracking-widest uppercase">
                  {content.approved[lang]}
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#D4AF37]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
