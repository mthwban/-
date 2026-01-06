import React from 'react';
import { Language } from '../types';
import { CERTIFICATIONS, UI_STRINGS, CONTACT_INFO } from '../constants';
import { Award, GraduationCap, ExternalLink, Zap, Video, FileText, ChevronRight } from 'lucide-react';

interface CertificationsProps {
  lang: Language;
}

const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  const content = UI_STRINGS.certifications;
  
  const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('economics') || t.includes('bachelor')) return <GraduationCap className="w-8 h-8" />;
    if (t.includes('video')) return <Video className="w-8 h-8" />;
    if (t.includes('project')) return <Zap className="w-8 h-8" />;
    return <Award className="w-8 h-8" />;
  };

  return (
    <section id="certifications" className="py-32 bg-midnight scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="inline-block px-4 py-2 mb-6 rounded-lg bg-gold/10 text-gold text-[10px] font-black uppercase tracking-widest border border-gold/20">
            {content.badge[lang]}
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            {content.title[lang]}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CERTIFICATIONS.map((cert, i) => (
            <a 
              key={i} 
              href={cert.url} 
              target={cert.url === '#' ? undefined : "_blank"} 
              rel="noopener noreferrer"
              className="group p-8 glass-card rounded-[2.5rem] border border-white/5 hover:border-gold/30 transition-all flex flex-col h-full active:scale-95"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all mb-8 shadow-xl">
                {getIcon(cert.title.en)}
              </div>
              <h3 className="text-lg font-black text-white mb-2 leading-tight group-hover:text-gold transition-colors">{cert.title[lang]}</h3>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">{cert.issuer[lang]}</p>
              
              <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400">{cert.date[lang]}</span>
                {cert.url !== '#' && <ExternalLink className="w-4 h-4 text-gold opacity-50 group-hover:opacity-100" />}
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
           <a 
            href={CONTACT_INFO.resume} // رابط مجلد الشهادات أو السيرة
            target="_blank"
            className="flex items-center gap-4 px-10 py-6 glass-card rounded-2xl border border-white/10 text-white font-black hover:bg-white/5 transition-all group"
           >
             <div className="p-3 bg-gold/10 rounded-xl group-hover:bg-gold group-hover:text-black transition-all">
               <FileText className="w-6 h-6" />
             </div>
             <div className="text-right">
                <div className="text-[10px] font-black uppercase tracking-widest text-gold mb-1">Google Drive Access</div>
                <div className="text-lg">{content.folderCta[lang]}</div>
             </div>
             <ChevronRight className={`w-6 h-6 text-slate-500 group-hover:text-gold transition-all ${lang === 'ar' ? 'rotate-180' : ''}`} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;