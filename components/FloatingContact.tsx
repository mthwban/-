import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Language } from '../types';

interface FloatingContactProps {
  lang: Language;
}

const FloatingContact: React.FC<FloatingContactProps> = ({ lang }) => {
  return (
    <div className={`fixed bottom-8 z-[150] ${lang === 'ar' ? 'right-8' : 'left-8'}`}>
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-all active:scale-95 group relative"
        title="WhatsApp Contact"
      >
        <MessageCircle className="w-9 h-9 fill-white" />
        <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#25D366] text-white text-[10px] font-black rounded-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-lg">تواصل مباشر</span>
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      </a>
    </div>
  );
};

export default FloatingContact;