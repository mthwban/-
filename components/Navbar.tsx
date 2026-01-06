import React, { useState, useEffect } from 'react';
import { Language } from '../types.ts';
import { UI_STRINGS } from '../constants.tsx';
import { Menu, X, Globe } from 'lucide-react';

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
    { name: UI_STRINGS.nav.experience[lang], href: '#experience' },
    { name: UI_STRINGS.nav.portfolio[lang], href: '#portfolio' },
    { name: UI_STRINGS.nav.skills[lang], href: '#skills' },
  ];

  return (
    <>
      <nav className={`fixed top-6 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-6`}>
        <div className={`max-w-5xl mx-auto flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 border border-white/10 ${isScrolled ? 'bg-slate-900/60 backdrop-blur-xl shadow-2xl' : 'bg-white/5 backdrop-blur-md'}`}>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-all text-[10px] font-black text-white gap-1 group"
            >
              <Globe className="w-3 h-3 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
              {lang === 'ar' ? 'EN' : 'AR'}
            </button>
            <a href="#" onClick={(e) => handleLinkClick(e, '#')} className="text-xl font-black tracking-tighter text-white uppercase">
              {UI_STRINGS.brand[lang]}<span className="text-[#D4AF37]">.</span>
            </a>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#D4AF37] transition-all cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-6 py-2 bg-[#D4AF37] text-black text-[10px] font-black uppercase rounded-full hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/10"
            >
              {UI_STRINGS.hero.ctaContact[lang]}
            </a>
          </div>

          <button className="lg:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 z-[99] bg-[#020617]/98 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col items-center justify-center space-y-10 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="text-3xl font-black uppercase tracking-[0.1em] text-white hover:text-[#D4AF37] cursor-pointer"
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => {
            setLang(lang === 'ar' ? 'en' : 'ar');
            setIsMobileMenuOpen(false);
          }} 
          className="text-gold font-black uppercase text-xl"
        >
          {lang === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
        </button>
        <button onClick={() => setIsMobileMenuOpen(false)} className="px-10 py-4 border border-white/10 rounded-full text-white/50 font-black uppercase text-xs">
          {lang === 'ar' ? 'إغلاق القائمة' : 'Close Menu'}
        </button>
      </div>
    </>
  );
};

export default Navbar;