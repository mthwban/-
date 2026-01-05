
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS, IMAGES } from '../constants';
import { Shield, Activity, Database, Video, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';

interface FieldEvidenceProps { lang: Language; }

const FieldEvidence: React.FC<FieldEvidenceProps> = ({ lang }) => {
  const content = UI_STRINGS.fieldEvidence;

  return (
    <section id="portfolio" className="py-32 bg-[#070912] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 reveal-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-[#c29b40]/5 border border-[#c29b40]/20">
            <Shield className="w-4 h-4 text-[#c29b40]" />
            <span className="text-[#c29b40] text-[10px] font-black uppercase tracking-[0.4em]">
              {lang === 'ar' ? 'أرشيف التنفيذ الميداني' : 'Field Execution Archive'}
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
            {content.title[lang]}
          </h2>
          
          <div className="inline-flex items-center justify-center gap-3 px-8 py-4 glass-card rounded-2xl border-l-4 border-[#c29b40] group hover:border-[#c29b40] transition-all">
            <MapPin className="w-6 h-6 text-[#c29b40]" />
            <span className="text-lg md:text-2xl font-black text-white/90">
              {content.location[lang]}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {content.cases.map((caseItem, idx) => (
            <div key={caseItem.id} className="group relative glass-card rounded-[3.5rem] overflow-hidden hover:border-[#c29b40]/40 transition-all duration-1000">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
                
                {/* Visual Content - Grid 7/12 */}
                <div className="lg:col-span-7 relative overflow-hidden bg-black">
                  <img 
                    src={IMAGES[caseItem.image as keyof typeof IMAGES]} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-[2000ms]"
                    alt={caseItem.title[lang]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070912] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#070912]"></div>
                  
                  {/* Floating Metric */}
                  <div className="absolute top-10 left-10 p-6 glass-card rounded-3xl border border-[#c29b40]/50 backdrop-blur-3xl">
                    <div className="text-2xl font-black text-white tracking-tighter mb-1">{caseItem.kpi}</div>
                    <div className="text-[9px] font-black text-[#c29b40] uppercase tracking-widest">{content.opMetric[lang]}</div>
                  </div>
                </div>

                {/* Textual Content - Grid 5/12 */}
                <div className="lg:col-span-5 p-12 md:p-16 flex flex-col justify-center">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 rounded-full bg-[#c29b40]/10 flex items-center justify-center text-[#c29b40]">
                        <Activity className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                        {content.workflowAnalysis[lang]}
                      </span>
                   </div>

                   <h3 className="text-3xl md:text-5xl font-black text-white mb-8 group-hover:text-[#c29b40] transition-colors leading-tight tracking-tighter">
                     {caseItem.title[lang]}
                   </h3>

                   <p className="text-lg text-slate-400 font-medium leading-relaxed mb-12 border-l-4 border-[#c29b40]/50 pl-8 rtl:border-l-0 rtl:border-r-4 rtl:pr-8">
                     {caseItem.description[lang]}
                   </p>

                   {/* Micro-Steps Bento Style */}
                   <div className="grid grid-cols-2 gap-3 mb-12">
                      {caseItem.steps.map((step, sIdx) => (
                        <div key={sIdx} className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4 group/step hover:bg-[#c29b40] transition-all">
                           <div className="text-[#c29b40] group-hover/step:text-black transition-colors">
                              {/* Fix: Cast icon to React.ReactElement<any> to allow className prop in cloneElement */}
                              {React.cloneElement(step.icon as React.ReactElement<any>, { className: 'w-5 h-5' })}
                           </div>
                           <div className="text-[9px] font-black uppercase tracking-tighter text-slate-300 group-hover/step:text-black leading-tight">
                             {step.label[lang]}
                           </div>
                        </div>
                      ))}
                   </div>

                   <button className="self-start px-10 py-5 bg-white/5 rounded-2xl text-[11px] font-black uppercase text-white tracking-[0.2em] border border-white/10 hover:bg-white hover:text-black transition-all flex items-center gap-4">
                     <Database className="w-5 h-5" />
                     {content.viewLogs[lang]}
                     <ArrowUpRight className="w-4 h-4 opacity-50" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-32 p-12 glass-card rounded-[4rem] flex flex-col lg:flex-row items-center gap-12 border border-[#c29b40]/20 bg-gradient-to-br from-[#c29b40]/5 to-transparent">
           <div className="w-56 h-56 rounded-[3rem] overflow-hidden border-4 border-[#c29b40]/30 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
              <img src={IMAGES.fieldSelfie} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Mohamed Field Ready" />
           </div>
           <div className="flex-1 text-center lg:text-right">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-xl bg-[#c29b40]/10 text-[#c29b40] text-[10px] font-black uppercase tracking-widest">
                Professionalism Guaranteed
              </div>
              <h4 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                {lang === 'ar' ? 'الالتزام التام بمعايير السلامة المهنية' : 'Absolute Commitment to HSE Standards'}
              </h4>
              <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-4xl ml-auto">
                {lang === 'ar' 
                  ? 'التواجد الميداني الفعال يتطلب انضباطاً صارماً بمبادئ السلامة والصحة المهنية لضمان استمرارية العمل وحماية الكوادر البشرية.' 
                  : 'Effective field presence requires strict discipline in HSE principles to ensure business continuity and workforce protection.'}
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FieldEvidence;
