import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';
import { BarChart, Activity, ShieldCheck, Zap, TrendingUp, PieChart, Layers, Clock, Cpu, Radio } from 'lucide-react';

interface Props { lang: Language; }

const OperationsDashboard: React.FC<Props> = ({ lang }) => {
  const content = UI_STRINGS.dashboard;
  const [liveValue, setLiveValue] = useState(150000);
  const [activeUnits, setActiveUnits] = useState(1240);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveValue(prev => prev + Math.floor(Math.random() * 5));
      setActiveUnits(prev => {
        const delta = Math.floor(Math.random() * 21) - 10;
        return Math.max(1200, Math.min(1300, prev + delta));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="reveal">
            <div className="inline-block px-5 py-2 mb-6 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] border border-[#D4AF37]/20">
              {content.insightEngine[lang]}
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight uppercase">
              {content.title[lang]}<span className="text-[#D4AF37]">.</span>
            </h2>
            <p className="text-slate-400 mt-6 text-2xl max-w-2xl font-medium leading-relaxed">{content.subtitle[lang]}</p>
          </div>
          <div className="flex items-center gap-5 reveal">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{content.systemStatus[lang]}</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{content.liveOptimal[lang]}</span>
            </div>
            <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)] animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {content.stats.map((stat, i) => (
            <div key={i} className="reveal p-10 glass-card rounded-[3.5rem] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-700 group overflow-hidden relative" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="absolute -right-6 -bottom-6 text-white/5 group-hover:text-[#D4AF37]/10 transition-all duration-700 group-hover:scale-110">
                {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 140 })}
              </div>
              <div className="flex items-center justify-between mb-10 relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all shadow-2xl">
                  {stat.icon}
                </div>
                <div className="h-2 w-16 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full gold-bg w-2/3 animate-[shimmer_3s_infinite]"></div>
                </div>
              </div>
              <div className="text-5xl font-black text-white mb-3 tracking-tighter relative z-10">
                {stat.label.en === "Hajj Units" ? liveValue.toLocaleString() : stat.value}
              </div>
              <div className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] relative z-10">{stat.label[lang]}</div>
            </div>
          ))}
        </div>

        {/* Technical Data Visualization Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Throughput Bar Chart */}
           <div className="lg:col-span-8 p-12 glass-card rounded-[4rem] border border-white/5 reveal">
              <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                 <div>
                    <h4 className="text-white font-black uppercase text-sm tracking-[0.4em] mb-2">{content.throughputTitle[lang]}</h4>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{content.throughputSubtitle[lang]}</p>
                 </div>
                 <div className="flex gap-6 items-center bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3">
                       <Radio className="w-4 h-4 text-emerald-500 animate-ping" />
                       <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                         Live Field: <span className="text-white">{activeUnits} Units</span>
                       </span>
                    </div>
                    <div className="h-4 w-px bg-white/10"></div>
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 gold-bg rounded-sm"></div>
                       <span className="text-[9px] font-black text-slate-500">{content.actual[lang]}</span>
                    </div>
                 </div>
              </div>
              <div className="flex items-end gap-3 h-64">
                 {[40, 75, 50, 95, 70, 85, 60, 100, 80, 110, 90, 150].map((val, i) => (
                   <div key={i} className="flex-1 group relative">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-1 bg-[#D4AF37] text-black text-[10px] font-black rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-20">
                        {val}k Managed
                      </div>
                      <div className="w-full gold-bg rounded-t-xl transition-all duration-1000 group-hover:opacity-100 opacity-30 cursor-pointer" style={{height: `${(val/150)*100}%`}}></div>
                      <div className="absolute bottom-0 w-full bg-white/5 rounded-t-xl -z-10" style={{height: '95%'}}></div>
                   </div>
                 ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 flex justify-between text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">
                 <span>{lang === 'ar' ? 'يناير ٢٠٢٤' : 'JAN 2024'}</span>
                 <span>{lang === 'ar' ? 'ذروة الحج (يونيو)' : 'HAJJ PEAK SURGE (JUN)'}</span>
                 <span>{lang === 'ar' ? 'سبتمبر ٢٠٢٥' : 'SEP 2025'}</span>
              </div>
           </div>

           {/* Circular Metric and Risk Info */}
           <div className="lg:col-span-4 flex flex-col gap-8 reveal">
              <div className="flex-1 p-10 glass-card rounded-[3.5rem] border border-white/5 flex flex-col justify-center items-center text-center group">
                <div className="relative w-40 h-40 mb-8 transition-transform group-hover:scale-105 duration-700">
                   <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" className="text-white/5" stroke="currentColor" strokeWidth="3" />
                      <circle cx="18" cy="18" r="16" fill="none" className="text-[#D4AF37]" stroke="currentColor" strokeWidth="3" strokeDasharray="100, 100" strokeLinecap="round" />
                   </svg>
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-black text-white">100%</span>
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{content.compliance[lang]}</span>
                   </div>
                </div>
                <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-4">{content.riskTitle[lang]}</h4>
                <p className="text-slate-500 text-[10px] font-medium leading-relaxed uppercase tracking-widest px-4">
                   {content.complianceDesc[lang]}
                </p>
              </div>

              <div className="p-8 bg-blue-600/10 rounded-[3rem] border border-blue-500/20 flex items-center gap-6 group hover:bg-blue-600/20 transition-all cursor-default">
                 <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                    <ShieldCheck className="w-7 h-7" />
                 </div>
                 <div>
                    <div className="text-white font-black uppercase text-xs tracking-widest mb-1">{content.riskTitle[lang]}</div>
                    <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">{content.riskSubtitle[lang]}</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsDashboard;