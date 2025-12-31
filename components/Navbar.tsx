
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
    { name: UI_STRINGS.nav.services[lang], href: '#services' },
    { name: UI_STRINGS.nav.about[lang], href: '#about' },
    { name: UI_STRINGS.nav.experience[lang], href: '#experience' },
    { name: UI_STRINGS.nav.certifications[lang], href: '#certifications' },
    { name: UI_STRINGS.nav.skills[lang], href: '#skills' },
    { name: UI_STRINGS.nav.process[lang], href: '#process' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-6 ${isScrolled ? 'py-2 md:py-4' : 'py-6 md:py-8'}`}>
        <div className={`max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-2.5 rounded-2xl transition-all duration-500 ${isScrolled ? 'glass-card shadow-lg' : 'bg-transparent'}`}>
          
          <div className="flex items-center gap-4 no-print">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-white/10 transition-colors"
            >
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>
          </div>

          <a 
            href="#" 
            onClick={(e) => handleLinkClick(e, '#')} 
            className="text-2xl font-black tracking-tighter text-white"
          >
            MI<span className="text-emerald-500">.</span>
          </a>
          
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-6 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-500 transition-all no-print"
            >
              {UI_STRINGS.hero.ctaContact[lang]}
            </a>
          </div>

          <button 
            className="lg:hidden text-white" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[99] bg-[#0a0c1b]/95 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="text-2xl font-black uppercase tracking-widest text-white"
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
