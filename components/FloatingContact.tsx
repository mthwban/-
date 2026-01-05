
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Language } from '../types';

interface FloatingContactProps {
  lang: Language;
}

const FloatingContact: React.FC<FloatingContactProps> = ({ lang }) => {
  return (
    <div className={`fixed bottom-8 z-[60] no-print ${lang === 'ar' ? 'right-8' : 'left-8'}`}>
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all active:scale-95"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
      </a>
    </div>
  );
};

export default FloatingContact;
