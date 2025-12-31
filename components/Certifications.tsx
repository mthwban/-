
import React from 'react';
import { CERTIFICATIONS, UI_STRINGS, IN_PROGRESS_CERT, BRAND_COLORS } from '../constants';
import { FileDown, ExternalLink, Award, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';

interface CertificationsProps {
  lang: Language;
}

const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  const consolidatedPdfUrl = "https://drive.google.com/file/d/1qYKnm4ZJH2ABGWys8hMkZkKCjD82cnCG/view?usp=drive_link";

  return (
    <section id="certifications" className="py-32 bg-[#0a0c1b] scroll-mt-24 relative overflow-hidden section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-20 gap-10">
          <div className="max-w-2xl text-center lg:text-left rtl:lg:text-right">
            <h2 className="text-[#c29b40] text-xs font-black uppercase tracking-[0.5em] mb-4 opacity-70">{UI_STRINGS.certs.badge[lang]}</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tighter">{UI_STRINGS.certs.title[lang]}</h3>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              {lang === 'en' 
                ? "Validated expertise through global professional credentials in management, digital strategy, and media production."
                : "خبرات موثقة من خلال اعتمادات مهنية عالمية في الإدارة، الاستراتيجية الرقمية، وإنتاج الميديا."}
            </p>
          </div>
          <button 
            onClick={() => window.open(consolidatedPdfUrl, '_blank')}
            className="group flex items-center gap-3 px-10 py-5 bg-[#c29b40] text-white font-bold rounded-2xl hover:bg-[#d4b05a] transition-all shadow-xl hover:scale-105 active:scale-95 no-print"
          >
            <FileDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            {UI_STRINGS.certs.cta[lang]}
          </button>
        </div>

        {/* Professional Development Highlight Section */}
        <div className="mb-20">
          <div className="relative glass-card p-10 md:p-14 rounded-[3rem] border border-[#c29b40]/30 bg-gradient-to-br from-[#006233]/20 via-transparent to-transparent overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
              <Zap className="w-48 h-48 text-[#c29b40]" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-[#c29b40]/10 border border-[#c29b40]/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c29b40] animate-pulse"></span>
                  <span className="text-[#c29b40] text-[12px] font-black uppercase tracking-widest">{UI_STRINGS.certs.inProgressTitle[lang]}</span>
                </div>
                <h4 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  {IN_PROGRESS_CERT.title[lang]}
                </h4>
                <div className="flex items-center gap-3 text-slate-300 font-medium text-lg">
                  <div className="w-10 h-[1px] bg-[#c29b40]/50"></div>
                  {IN_PROGRESS_CERT.issuer[lang]}
                </div>
              </div>

              <div className="bg-[#0a0c1b]/50 p-8 rounded-[2rem] border border-white/5">
                <div className="flex justify-between items-end mb-6">
                   <p className="text-white text-sm font-black uppercase tracking-[0.2em]">{UI_STRINGS.certs.expectedSoon[lang]}</p>
                   <p className="text-[#c29b40] text-3xl font-black">{IN_PROGRESS_CERT.progress}%</p>
                </div>
                <div className="w-full h-5 bg-white/5 rounded-full overflow-hidden border border-white/10 p-1">
                  <div 
                    className="h-full bg-gradient-to-r from-[#006233] to-[#c29b40] rounded-full transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(194,155,64,0.3)]"
                    style={{ width: `${IN_PROGRESS_CERT.progress}%` }}
                  ></div>
                </div>
                <div className="mt-8 flex items-center gap-3">
                   <ShieldCheck className="w-5 h-5 text-emerald-500" />
                   <p className="text-slate-400 text-sm font-medium italic">Verified via Coursera & Google Partnership</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index}
              className="group relative p-10 glass-card rounded-[2.5rem] hover:border-[#c29b40]/40 transition-all duration-500 flex flex-col h-full shadow-lg hover:bg-white/[0.04]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Award className="w-24 h-24 text-[#c29b40]" />
              </div>
              
              <div className="w-16 h-16 bg-[#c29b40]/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#c29b40]/20 transition-colors border border-[#c29b40]/20">
                <Award className="w-9 h-9 text-[#c29b40] transition-transform group-hover:scale-110" />
              </div>
              
              <h4 className="text-2xl font-black mb-4 text-white group-hover:text-[#c29b40] transition-colors leading-tight tracking-tight">
                {cert.title[lang]}
              </h4>
              <p className="text-slate-400 text-lg font-medium mb-2">{cert.issuer[lang]}</p>
              <p className="text-slate-500 text-xs mt-auto pt-8 font-black uppercase tracking-[0.3em]">{cert.date[lang]}</p>
              
              {cert.url && (
                <a 
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-3 w-full py-4 bg-white/5 border border-white/10 rounded-xl text-[11px] font-black uppercase tracking-widest text-white hover:bg-[#c29b40] hover:text-[#0a0c1b] hover:border-[#c29b40] transition-all no-print group/btn"
                >
                  {UI_STRINGS.certs.verify[lang]} 
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
