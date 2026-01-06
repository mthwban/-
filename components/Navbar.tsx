import React, { useState, useEffect } from 'react';
import { Language } from '../types.ts';
import { UI_STRINGS } from '../constants.tsx';
import { Menu, X } from 'lucide-react';

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
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: UI_STRINGS.nav.about[lang], href: '#about' },
    { name: UI_STRINGS.nav.experience[lang], href: '#experience' },
    { name: UI_STRINGS.nav.certifications[lang], href: '#certifications' },
    { name: UI_STRINGS.nav.skills[lang], href: '#skills' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-10 py-6">
        <div className={`max-w-7xl mx-auto flex justify-between items-center px-8 py-4 rounded-full transition-all duration-500 border border-white/10 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl' : 'bg-white/5 backdrop-blur-md'}`}>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-all text-[10px] font-black text-white"
            >
              {lang === 'ar' ? 'EN' : 'AR'}
            </button>
            <a href="#" className="text-2xl font-black tracking-tighter text-white">
              {UI_STRINGS.brand[lang]}<span className="text-[#D4AF37]">.</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[11px] font-black uppercase tracking-widest text-slate-300 hover:text-[#D4AF37] transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-6 py-2 gold-bg text-black text-[11px] font-black uppercase rounded-full hover:scale-105 transition-all shadow-lg shadow-[#D4AF37]/20"
            >
              {UI_STRINGS.nav.contact[lang]}
            </a>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 z-[110] bg-[#020617]/98 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center space-y-8 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button className="absolute top-10 right-10 text-white" onClick={() => setIsMobileMenuOpen(false)}>
          <X className="w-10 h-10" />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="text-4xl font-black uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors"
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => {
            setLang(lang === 'ar' ? 'en' : 'ar');
            setIsMobileMenuOpen(false);
          }}
          className="px-10 py-4 gold-bg text-black font-black uppercase rounded-full text-sm"
        >
          {lang === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
        </button>
      </div>
    </>
  );
};

export default Navbar;