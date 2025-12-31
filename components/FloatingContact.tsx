
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface FloatingContactProps {
  lang: Language;
}

const FloatingContact: React.FC<FloatingContactProps> = ({ lang }) => {
  return (
    // Moved to right side for Arabic and left side for English to avoid text coverage
    <div className={`fixed bottom-6 md:bottom-8 z-[60] flex flex-col gap-4 no-print transition-all duration-500 ${lang === 'ar' ? 'right-6 md:right-8' : 'left-6 md:left-8'}`}>
      {/* WhatsApp Message Me Button */}
      <a 
        href={`https://wa.me/966566162529`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] hover:-translate-y-2 active:scale-90 transition-all duration-300 border-2 border-white/20"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
        
        {/* Label on hover */}
        <span className={`absolute bg-[#0a0c1b] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-2xl border border-white/10 ${lang === 'ar' ? 'right-auto left-20' : 'left-auto right-20'}`}>
          {UI_STRINGS.floating.whatsapp[lang]}
        </span>
      </a>
    </div>
  );
};

export default FloatingContact;
