
import React from 'react';
import { Language } from '../types';
import { Camera, Play, ExternalLink, Image as ImageIcon, Briefcase } from 'lucide-react';

interface GalleryProps {
  lang: Language;
}

const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const title = lang === 'ar' ? 'ألبوم المشاريع الاحترافي' : 'Professional Project Album';
  const subtitle = lang === 'ar' ? 'عرض مرئي لنتاجي في التحليل، التصميم، والإنتاج الميديا' : 'A visual showcase of my work in analysis, design, and media production';
  
  const projects = [
    {
      title: lang === 'ar' ? 'التحول الرقمي - مناسك' : 'Digital Transformation - Manasek',
      category: lang === 'ar' ? 'تحليل عمليات' : 'Operations Analysis',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      type: 'analysis'
    },
    {
      title: lang === 'ar' ? 'إنتاج مرئي استراتيجي' : 'Strategic Visual Content',
      category: lang === 'ar' ? 'إنتاج ميديا' : 'Media Production',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
      type: 'video'
    },
    {
      title: lang === 'ar' ? 'هوية منصات الأعمال' : 'Business Platform Identity',
      category: lang === 'ar' ? 'تصميم رقمي' : 'Digital Design',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
      type: 'design'
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-[#0d1021] scroll-mt-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <Briefcase className="w-4 h-4 text-amber-500" />
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">Portfolio Showcase</span>
          </div>
          <h3 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">{title}</h3>
          <p className="text-slate-400 max-w-2xl mx-auto font-light text-lg leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative rounded-[3rem] overflow-hidden bg-[#0a0c1b] border border-white/5 aspect-[4/5] cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c1b] via-[#0a0c1b]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
              
              {/* Floating Icon for Type */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-emerald-500 transition-colors">
                {project.type === 'video' ? <Play className="w-5 h-5 text-white fill-white" /> : <ImageIcon className="w-5 h-5 text-white" />}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-10 translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-4 py-1.5 mb-5 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors leading-tight">
                  {project.title}
                </h4>
                <div className="flex items-center gap-3 text-white/30 group-hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.2em]">
                  {lang === 'ar' ? 'استعراض المشروع' : 'Explore Project'} <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <div className="inline-block p-1 rounded-full bg-white/5 border border-white/10 group cursor-help transition-all hover:border-emerald-500/30">
             <div className="px-6 py-3 rounded-full bg-white/5 text-slate-500 text-xs font-bold uppercase tracking-widest group-hover:text-emerald-400 transition-colors">
               {lang === 'ar' ? 'المزيد من المشاريع قيد التجهيز...' : 'More projects coming soon...'}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
