import React, { useState } from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';
import { User, GraduationCap, MapPin, Globe, Home } from 'lucide-react';

interface AboutProps { lang: Language; }

const About: React.FC<AboutProps> = ({ lang }) => {
  const content = UI_STRINGS.about;
  const [imageError, setImageError] = useState(false);
  
  // Photo ID: 1Zijt_bmcVaL1Tqk9oiRXTuG5Cm4jPK30
  const personalPhotoUrl = "https://lh3.googleusercontent.com/d/1Zijt_bmcVaL1Tqk9oiRXTuG5Cm4jPK30";
  
  return (
    <section id="about" className="py-32 bg-[#070912] scroll-mt-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#006233]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="relative group w-full max-w-[440px] lg:w-1/2">
            <div className="absolute -inset-8 bg-gradient-to-tr from-[#006233]/20 to-[#c29b40]/10 rounded-[4rem] blur-3xl group-hover:blur-2xl transition-all duration-700 opacity-30"></div>
            
            <div className="relative z-10 aspect-[4/5] rounded-[3.5rem] overflow-hidden border-2 border-white/5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] group-hover:border-[#c29b40]/30 transition-all duration-500 bg-[#0d1021]">
              {!imageError ? (
                <img 
                  src={personalPhotoUrl} 
                  alt="Mohamed Thwban Imijine" 
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-800/50">
                   <User className="w-24 h-24 text-[#c29b40]/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070912]/90 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
            </div>
            
            <div className="absolute -bottom-10 -right-6 lg:-right-12 bg-gradient-to-br from-[#006233] to-[#004d28] text-white p-8 rounded-[2.5rem] shadow-[0_25px_50px_rgba(0,0,0,0.5)] border border-[#c29b40]/30 z-20">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] leading-none mb-2 opacity-70">Imagine.</p>
              <p className="text-4xl font-black tracking-tighter text-[#c29b40]">Strategy</p>
            </div>
          </div>

          <div className="lg:w-1/2 text-center lg:text-left rtl:lg:text-right">
            <div className="inline-block px-6 py-2.5 mb-10 rounded-full bg-[#c29b40]/10 border border-[#c29b40]/20 text-[#c29b40] text-[10px] font-black uppercase tracking-[0.5em]">
              {content.badge[lang]}
            </div>
            
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 text-white tracking-tighter leading-[1.05]">
              {content.title[lang]}
            </h3>
            
            <div className="space-y-10 text-slate-300 text-lg md:text-xl leading-relaxed font-light">
              <p className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#c29b40]/40 pl-8 rtl:pr-8 py-3 bg-[#c29b40]/5 rounded-r-3xl rtl:rounded-r-none rtl:rounded-l-3xl">
                {content.p1[lang]}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-6 h-6 text-[#c29b40]" />
                  <span>{lang === 'ar' ? 'بكالوريوس اقتصاد - جامعة أم القرى (٢٠١٨)' : 'Bachelor of Economics - UQU (2018)'}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Home className="w-6 h-6 text-[#c29b40]" />
                  <span>{content.origin[lang]}</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-[#c29b40]" />
                  <span>{lang === 'ar' ? 'الموقع: المملكة العربية السعودية' : 'Location: Saudi Arabia'}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="w-6 h-6 text-[#c29b40]" />
                  <span>{lang === 'ar' ? 'الجنسية: موريتاني' : 'Nationality: Mauritanian'}</span>
                </div>
              </div>

              <p className="opacity-70 leading-relaxed">
                {content.p2[lang]}
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-4 italic text-[#c29b40] font-bold text-xl">
                  <span className="w-14 h-[2px] bg-[#c29b40]/40"></span>
                  {content.p3[lang]}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;