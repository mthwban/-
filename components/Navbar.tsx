
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { UI_STRINGS, CONTACT_INFO } from '../constants';
import { Menu, X, ShieldCheck, FileText } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: UI_STRINGS.nav.about[lang], href: '#about' },
    { name: { ar: 'مركز العمليات', en: 'Ops Hub' }[lang], href: '#strategic-hub' },
    { name: UI_STRINGS.nav.skills[lang], href: '#skills' },
  ];

  return (
    <>
      <nav className={`fixed top-6 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-6`}>
        <div className={`max-w-5xl mx-auto flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 border border-white/10 ${isScrolled ? 'bg-slate-900/60 backdrop-blur-xl shadow-2xl scale-[0.98]' : 'bg-white/5 backdrop-blur-md'}`}>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-all text-[10px] font-black text-white"
            >
              {lang === 'ar' ? 'EN' : 'AR'}
            </button>
            
            {/* أيقونة السيرة الذاتية (الملف المطلوب) */}
            <a 
              href="https://drive.google.com/file/d/1x0cn40NvPvJuYFmlmFIjDbccFW1xc5kR/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all text-[#D4AF37] shadow-lg group"
              title={lang === 'ar' ? 'عرض ملف السيرة الذاتية' : 'View Resume File'}
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <a href="#" onClick={(e) => handleLinkClick(e, '#')} className="text-xl font-black tracking-tighter text-white mr-1">
              {UI_STRINGS.brand[lang]}<span className="text-[#D4AF37]">.</span>
            </a>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#D4AF37] transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-6 py-2 bg-[#D4AF37] text-black text-[10px] font-black uppercase rounded-full hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/10"
            >
              {UI_STRINGS.nav.contact[lang]}
            </a>
          </div>

          <button className="lg:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[150] bg-[#020617]/98 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col items-center justify-center space-y-10 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="text-3xl font-black uppercase tracking-[0.1em] text-white hover:text-[#D4AF37]"
          >
            {link.name}
          </a>
        ))}
        
        {/* رابط الملف في القائمة الجانبية للجوال */}
        <a 
          href="https://drive.google.com/file/d/1x0cn40NvPvJuYFmlmFIjDbccFW1xc5kR/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-2xl font-black uppercase text-[#D4AF37]"
        >
          <FileText className="w-8 h-8" />
          {lang === 'ar' ? 'السيرة الذاتية PDF' : 'Resume PDF'}
        </a>

        <button onClick={() => setIsMobileMenuOpen(false)} className="px-10 py-4 border border-white/10 rounded-full text-[#D4AF37] font-black uppercase text-xs">
          {lang === 'ar' ? 'إغلاق القائمة' : 'Close Menu'}
        </button>
      </div>
    </>
  );
};

export default Navbar;
