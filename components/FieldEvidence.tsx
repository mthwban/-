
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS, IMAGES } from '../constants';
import { Shield, Activity, Database, Video, MapPin, ExternalLink, ArrowUpRight, Snowflake, Truck, Boxes, Factory } from 'lucide-react';

interface FieldEvidenceProps { lang: Language; }

const FieldEvidence: React.FC<FieldEvidenceProps> = ({ lang }) => {
  const content = UI_STRINGS.fieldEvidence;

  return (
    <section id="portfolio" className="py-32 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 reveal-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-slate-800/50 border border-slate-700">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em]">
              {lang === 'ar' ? 'أرشيف العمليات الصناعية' : 'Industrial Operations Archive'}
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
            {content.title[lang]}
          </h2>
          
          <div className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900/50 rounded-2xl border-l-4 border-[#D4AF37] group hover:border-[#D4AF37] transition-all">
            <MapPin className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-lg md:text-2xl font-black text-white/90">
              {content.location[lang]}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {content.cases.map((caseItem, idx) => (
            <div key={caseItem.id} className="group relative bg-slate-900/40 rounded-[3.5rem] overflow-hidden hover:border-slate-700 transition-all duration-1000 border border-slate-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
                
                {/* Visual Content - Grid 7/12 */}
                <div className="lg:col-span-7 relative overflow-hidden bg-black">
                  <img 
                    src={IMAGES[caseItem.image as keyof typeof IMAGES]} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-[2000ms]"
                    alt={caseItem.title[lang]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#020617]"></div>
                  
                  {/* Floating Metric */}
                  <div className="absolute top-10 left-10 p-6 bg-slate-900/80 rounded-3xl border border-slate-700 backdrop-blur-3xl">
                    <div className="text-2xl font-black text-white tracking-tighter mb-1">{caseItem.kpi}</div>
                    <div className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest">{content.opMetric[lang]}</div>
                  </div>
                </div>

                {/* Textual Content - Grid 5/12 */}
                <div className="lg:col-span-5 p-12 md:p-16 flex flex-col justify-center">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-[#D4AF37]">
                        <Factory className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                        {content.workflowAnalysis[lang]}
                      </span>
                   </div>

                   <h3 className="text-3xl md:text-5xl font-black text-white mb-8 group-hover:text-[#D4AF37] transition-colors leading-tight tracking-tighter">
                     {caseItem.title[lang]}
                   </h3>

                   <p className="text-lg text-slate-400 font-medium leading-relaxed mb-12 border-l-4 border-slate-700 pl-8 rtl:border-l-0 rtl:border-r-4 rtl:pr-8">
                     {caseItem.description[lang]}
                   </p>

                   {/* Micro-Steps Bento Style */}
                   <div className="grid grid-cols-2 gap-3 mb-12">
                      <div className="p-4 bg-slate-800/30 rounded-2xl border border-slate-800 flex items-center gap-4 group/step hover:bg-[#D4AF37] transition-all">
                         <Snowflake className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />
                         <div className="text-[9px] font-black uppercase tracking-tighter text-slate-300 group-hover:text-black leading-tight">
                           {lang === 'ar' ? 'التثليج الصناعي' : 'Industrial Chilling'}
                         </div>
                      </div>
                      <div className="p-4 bg-slate-800/30 rounded-2xl border border-slate-800 flex items-center gap-4 group/step hover:bg-[#D4AF37] transition-all">
                         <Boxes className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />
                         <div className="text-[9px] font-black uppercase tracking-tighter text-slate-300 group-hover:text-black leading-tight">
                           {lang === 'ar' ? 'التغليف الفني' : 'Technical Packaging'}
                         </div>
                      </div>
                   </div>

                   <button className="self-start px-10 py-5 bg-slate-800 rounded-2xl text-[11px] font-black uppercase text-white tracking-[0.2em] border border-slate-700 hover:bg-white hover:text-black transition-all flex items-center gap-4">
                     <Truck className="w-5 h-5" />
                     {content.viewLogs[lang]}
                     <ArrowUpRight className="w-4 h-4 opacity-50" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meeting Visual Context */}
        <div className="mt-32 p-12 bg-slate-900/40 rounded-[4rem] flex flex-col lg:flex-row items-center gap-12 border border-slate-800">
           <div className="w-full lg:w-1/2 h-80 rounded-[3rem] overflow-hidden border-4 border-slate-800 shadow-2xl">
              <img src={IMAGES.meeting} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Strategic Planning Session" />
           </div>
           <div className="flex-1 text-center lg:text-right">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-xl bg-slate-800 text-slate-300 text-[10px] font-black uppercase tracking-widest">
                Strategic Operational Planning
              </div>
              <h4 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                {lang === 'ar' ? 'قيادة الفرق والعمليات تحت أقصى ضغط' : 'Leading Teams Under Peak Pressure'}
              </h4>
              <p className="text-slate-400 text-xl font-medium leading-relaxed">
                {lang === 'ar' 
                  ? 'لا تقتصر المهمة على التنفيذ فحسب، بل على إدارة التوقعات والمخاطر الميدانية لضمان تسليم 40 ألف وحدة بجودة مطابقة للمعايير العالمية لمشروع أضاحي.' 
                  : 'The mission is not just execution, but managing field expectations and risks to ensure 40,000 units meet global quality standards for the Adahi project.'}
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FieldEvidence;
