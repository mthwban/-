
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: UI_STRINGS.nav.about[lang], href: '#about' },
    { name: UI_STRINGS.nav.services[lang], href: '#services' },
    { name: UI_STRINGS.nav.experience[lang], href: '#experience' },
    { name: UI_STRINGS.nav.portfolio[lang], href: '#portfolio' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 ${isScrolled ? 'md:py-4' : 'md:py-8'}`}>
        <div className={`max-w-7xl mx-auto flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-300 ${isScrolled ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent border border-transparent'}`}>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-2xl font-black tracking-tighter text-white">
              {UI_STRINGS.brand[lang]}<span className="text-emerald-500">.</span>
            </a>
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase text-white hover:bg-emerald-500 transition-colors"
            >
              <Globe className="w-3 h-3" />
              {lang === 'en' ? 'Arabic' : 'English'}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.href} 
                onClick={() => handleLinkClick(link.href)}
                className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleLinkClick('#contact')}
              className="px-6 py-2 bg-emerald-600 text-white text-[10px] font-black rounded-lg hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-500/20"
            >
              {UI_STRINGS.nav.contact[lang]}
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] bg-[#070912]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button className="absolute top-8 right-8 text-white" onClick={() => setIsMobileOpen(false)}><X className="w-10 h-10" /></button>
        {navLinks.map((link) => (
          <button 
            key={link.href} 
            onClick={() => handleLinkClick(link.href)}
            className="text-3xl font-black uppercase tracking-[0.2em] text-white hover:text-emerald-500 transition-colors"
          >
            {link.name}
          </button>
        ))}
        <button 
          onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
          className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-xl font-black uppercase text-white"
        >
          <Globe className="w-6 h-6" />
          {lang === 'en' ? 'Switch to Arabic' : 'التحويل للإنجليزية'}
        </button>
      </div>
    </>
  );
};

export default Navbar;
