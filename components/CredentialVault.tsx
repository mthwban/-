
import React from 'react';
import { Language } from '../types';
import { CERTIFICATIONS, UI_STRINGS } from '../constants';
import { X, Award, ExternalLink, ShieldCheck, Sparkles, GraduationCap, Landmark, Video, Zap, Users } from 'lucide-react';

interface Props {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

const CredentialVault: React.FC<Props> = ({ lang, isOpen, onClose }) => {
  if (!isOpen) return null;

  const getIcon = (title: string, issuer: string) => {
    const combined = (title + issuer).toLowerCase();
    if (combined.includes('pmp')) return <ShieldCheck className="w-8 h-8" />;
    if (combined.includes('economics')) return <GraduationCap className="w-8 h-8" />;
    if (combined.includes('ministry') || combined.includes('hajj')) return <Landmark className="w-8 h-8" />;
    if (combined.includes('video')) return <Video className="w-8 h-8" />;
    return <Award className="w-8 h-8" />;
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-[#020617]/95 backdrop-blur-2xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900/50 border border-white/10 rounded-[3.5rem] shadow-[0_0_100px_rgba(212,175,55,0.1)] overflow-hidden flex flex-col animate-in zoom-in-95 duration-500">
        
        {/* Header */}
        <div className="p-8 md:p-12 border-b border-white/5 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 gold-bg rounded-[1.5rem] flex items-center justify-center text-black shadow-2xl shadow-[#D4AF37]/20">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
                {lang === 'ar' ? 'خزنة الاعتمادات' : 'Credential Vault'}
              </h2>
              <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mt-2">
                Verified Global Standards & Training
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-4 hover:bg-white/5 rounded-full transition-all text-white/50 hover:text-white">
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-8 custom-scrollbar">
          
          {/* Ongoing/In Progress Section */}
          <div className="mb-12">
            <h3 className="text-white/30 text-[11px] font-black uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-white/10"></span>
              {lang === 'ar' ? 'اعتمادات قيد التحضير' : 'In-Progress Certifications'}
              <span className="flex-1 h-px bg-white/10"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {UI_STRINGS.development.items.map((dev, i) => (
                <div key={i} className="p-8 glass-card rounded-[2.5rem] border-l-4 border-[#D4AF37] relative group overflow-hidden bg-[#D4AF37]/5">
                   <div className="absolute top-4 right-4 text-[#D4AF37]/10 group-hover:text-[#D4AF37]/20 transition-all">
                      <Zap className="w-12 h-12" />
                   </div>
                   <h4 className="text-xl font-black text-white mb-2">{dev.title[lang]}</h4>
                   <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">{dev.issuer[lang]}</p>
                   <div className="text-slate-100 text-xs font-bold bg-[#D4AF37]/20 p-4 rounded-xl border border-[#D4AF37]/30 italic leading-relaxed">
                     {dev.status[lang]}
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Section */}
          <div>
            <h3 className="text-white/30 text-[11px] font-black uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-white/10"></span>
              {lang === 'ar' ? 'الاعتمادات الموثقة' : 'Verified Credentials'}
              <span className="flex-1 h-px bg-white/10"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert, i) => {
                const isBachelor = cert.title.en.toLowerCase().includes('bachelor') || cert.title.ar.includes('بكالوريوس');
                
                return (
                  <a 
                    key={i} 
                    href={cert.url} 
                    target={cert.url === '#' ? undefined : "_blank"}
                    className={`p-8 rounded-[2.5rem] group transition-all flex items-start gap-6 border-2 ${isBachelor ? 'bg-[#002366]/60 border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.4)]' : 'bg-white/5 border-white/5 hover:border-[#D4AF37]/30'}`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex flex-shrink-0 items-center justify-center transition-all ${isBachelor ? 'bg-blue-600 text-white' : 'bg-white/5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black'}`}>
                      {getIcon(cert.title.en, cert.issuer.en)}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-black leading-tight mb-2 transition-colors ${isBachelor ? 'text-blue-100' : 'text-white group-hover:text-[#D4AF37]'}`}>{cert.title[lang]}</h4>
                      <p className={`text-[9px] font-black uppercase tracking-widest mb-4 ${isBachelor ? 'text-blue-300 font-bold' : 'text-slate-500'}`}>{cert.issuer[lang]}</p>
                      <div className="flex justify-between items-center">
                        <span className={`text-[10px] font-bold ${isBachelor ? 'text-blue-200' : 'text-slate-400'}`}>{cert.date[lang]}</span>
                        {cert.url !== '#' && <ExternalLink className={`w-4 h-4 transition-opacity ${isBachelor ? 'text-blue-300 opacity-100' : 'text-[#D4AF37] opacity-0 group-hover:opacity-100'}`} />}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 bg-black/40 border-t border-white/5 text-center">
          <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.4em]">
            Bridging Economic Rigor with Operational Excellence
          </p>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default CredentialVault;
