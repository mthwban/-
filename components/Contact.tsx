
import React from 'react';
import { Language } from '../types';
import { CONTACT_INFO, UI_STRINGS } from '../constants';
import { Mail, Linkedin } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const content = UI_STRINGS.contact;
  return (
    <section id="contact" className="py-32 bg-[#0a0c1b]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter">
          {content.title[lang]}
        </h2>
        <p className="text-2xl text-slate-400 mb-20 max-w-2xl mx-auto font-light leading-relaxed">
          {content.subtitle[lang]}
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 text-slate-400 hover:text-emerald-500 transition-colors group">
            <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold uppercase tracking-widest">{CONTACT_INFO.email}</span>
          </a>
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-emerald-500 transition-colors group">
            <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold uppercase tracking-widest">
              {content.linkedin[lang]}
            </span>
          </a>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">
          © {new Date().getFullYear()} {UI_STRINGS.brand[lang]} • {content.footer[lang]}
        </div>
      </div>
    </section>
  );
};

export default Contact;
