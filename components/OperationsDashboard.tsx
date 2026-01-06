
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';
import { BarChart, Activity, ShieldCheck, Zap } from 'lucide-react';

interface Props { lang: Language; }

const OperationsDashboard: React.FC<Props> = ({ lang }) => {
  const content = UI_STRINGS.dashboard;

  return (
    <section className="py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-block px-4 py-2 mb-4 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest border border-[#D4AF37]/20">
              Insight Engine
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
              {content.title[lang]}
            </h2>
            <p className="text-slate-400 mt-4 text-xl max-w-xl">{content.subtitle[lang]}</p>
          </div>
          <div className="flex gap-4">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">System Live</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.stats.map((stat, i) => (
            <div key={i} className="p-8 glass-card rounded-[2.5rem] border border-white/5 hover:border-[#D4AF37]/20 transition-all group overflow-hidden relative">
              <div className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-[#D4AF37]/5 transition-colors">
                {/* Fix: Cast icon to React.ReactElement<any> to allow size prop in cloneElement */}
                {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 120 })}
              </div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 bg-white/5 rounded-xl text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  {stat.icon}
                </div>
                <div className="h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full gold-bg w-2/3 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              <div className="text-4xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label[lang]}</div>
            </div>
          ))}
        </div>

        {/* Visual Charts Simulation */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 p-10 glass-card rounded-[3rem] border border-white/5">
              <div className="flex items-center justify-between mb-10">
                 <h4 className="text-white font-bold uppercase text-xs tracking-[0.3em]">Operational Throughput (Monthly Avg)</h4>
                 <Activity className="text-[#D4AF37] w-5 h-5" />
              </div>
              <div className="flex items-end gap-2 h-48">
                 {[40, 70, 45, 90, 65, 80, 55, 95, 75, 100, 85, 90].map((val, i) => (
                   <div key={i} className="flex-1 gold-bg rounded-t-lg transition-all hover:opacity-100 opacity-40 hover:scale-x-110 cursor-pointer" style={{height: `${val}%`}}></div>
                 ))}
              </div>
           </div>
           <div className="p-10 glass-card rounded-[3rem] border border-white/5 flex flex-col justify-between">
              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-[0.3em] mb-8">Risk Compliance Score</h4>
                <div className="relative w-32 h-32 mx-auto">
                   <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path className="text-white/5" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                      <path className="text-[#D4AF37]" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                   </svg>
                   <div className="absolute inset-0 flex items-center justify-center text-2xl font-black text-white">100%</div>
                </div>
              </div>
              <p className="text-slate-500 text-[10px] font-medium leading-relaxed mt-8 text-center uppercase tracking-widest">
                 Zero-violation policy maintained across all high-pressure environments.
              </p>
           </div>
        </div>
      </div>
      <style>{`
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
    </section>
  );
};

export default OperationsDashboard;
