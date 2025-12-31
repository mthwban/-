import React from 'react';
import { Mail, Linkedin, MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const content = UI_STRINGS.contact;
  
  return (
    <section id="contact" className="py-32 bg-[#0a0c1b] scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-indigo-900/30 border border-indigo-500/20">
              <span className="text-emerald-400 text-[11px] font-black uppercase tracking-[0.3em]">{content.badge[lang]}</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black mb-10 text-white tracking-tighter leading-none">{content.title[lang]}</h3>
            
            <div className="space-y-5 mt-12">
              <a 
                href="mailto:M.THWBAN@GMAIL.COM" 
                className="flex items-center gap-5 text-slate-300 hover:text-white transition-all group p-6 glass-card rounded-2xl hover:scale-[1.02] shadow-xl"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-indigo-950 group-hover:bg-emerald-600 rounded-2xl transition-all border border-white/10 group-hover:border-emerald-500 shadow-lg">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase font-black tracking-widest text-indigo-400/60 mb-1">{content.emailLabel[lang]}</p>
                  <p className="text-xl font-bold uppercase">M.THWBAN@GMAIL.COM</p>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
              </a>

              <a 
                href="https://www.linkedin.com/in/mohamed-imijine-32093b362" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-5 text-slate-300 hover:text-white transition-all group p-6 glass-card rounded-2xl hover:scale-[1.02] shadow-xl"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-indigo-950 group-hover:bg-indigo-600 rounded-2xl transition-all border border-white/10 group-hover:border-indigo-500 shadow-lg">
                  <Linkedin className="w-7 h-7" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-[10px] uppercase font-black tracking-widest text-indigo-400/60 mb-1">{content.linkedinLabel[lang]}</p>
                  <p className="text-sm md:text-base font-bold break-all">https://www.linkedin.com/in/mohamed-imijine-32093b362</p>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 shrink-0" />
              </a>

              <div className="flex items-center gap-5 text-slate-400 p-6">
                <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl border border-white/5">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-indigo-400/60 mb-1">{content.locationLabel[lang]}</p>
                  <p className="text-xl font-bold">{content.locationValue[lang]}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative glass-card p-10 md:p-14 rounded-[3rem] shadow-2xl overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] group-hover:bg-indigo-500/20 transition-all"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 bg-indigo-500/20 rounded-2xl shadow-inner">
                  <GraduationCap className="w-10 h-10 text-emerald-500" />
                </div>
                <h4 className="text-3xl font-black text-white leading-tight">
                  {lang === 'en' ? 'Upcoming Milestones' : 'تطوير مهني مستمر'}
                </h4>
              </div>

              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                  {lang === 'en' 
                    ? "Currently enhancing expertise in Digital Marketing & E-commerce, perfecting the transition from operational excellence to digital growth strategies."
                    : "أعمل حالياً على تعزيز خبراتي في التسويق الرقمي والتجارة الإلكترونية، وأنا على وشك إتمام الساعات المعتمدة للحصول على الشهادة الاحترافية."}
                </p>

                <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 font-black text-sm uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  {lang === 'en' ? 'Specialization: Digital Growth' : 'التخصص: التسويق الرقمي والتجارة الإلكترونية'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} Mohamed Imijine. {content.footerRights[lang]}.</p>
          <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-indigo-400/60">
            <a href="#about" className="hover:text-emerald-500 transition-colors">Portfolio</a>
            <a href="#experience" className="hover:text-emerald-500 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;