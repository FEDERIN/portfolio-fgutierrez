import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language || 'en';
  const isSpanish = currentLang.includes('es');

  const toggleLanguage = () => {
    const newLang = isSpanish ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#121212]/90 backdrop-blur-xl z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Logo />
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tighter leading-none text-xl">FGUTIERREZ</span>
            <span className="text-[#03DAC6] text-[10px] font-mono tracking-widest uppercase">
              {t('nav.role')}
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium text-gray-400">
            <li><a href="#about" className="hover:text-[#03DAC6] transition-colors">{t('nav.about')}</a></li>
            <li><a href="#projects" className="hover:text-[#03DAC6] transition-colors">{t('nav.projects')}</a></li>
            <li><a href="#experience" className="hover:text-[#03DAC6] transition-colors">{t('nav.experience')}</a></li>
            <li><a href="#certificate" className="hover:text-[#03DAC6] transition-colors">{t('nav.certs')}</a></li>
            <li><a href="#contact" className="hover:text-[#03DAC6] transition-colors">{t('nav.contact')}</a></li>
          </ul>
          
          <button 
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 border border-[#03DAC6]/30 text-[#03DAC6] font-mono text-[10px] rounded hover:bg-[#03DAC6]/10 transition-all uppercase tracking-tighter"
          >
            {isSpanish ? 'English' : 'Español'}
          </button>
        </div>

        {/* Botón Móvil */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#1a1a1a] border-b border-white/5 px-8 py-6`}>
        <ul className="flex flex-col gap-6 text-sm font-medium text-gray-400 mb-6">
          <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-[#03DAC6] block">{t('nav.about')}</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[#03DAC6] block">{t('nav.projects')}</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-[#03DAC6] block">{t('nav.experience')}</a></li>
          <li><a href="#certificate" onClick={() => setIsOpen(false)} className="hover:text-[#03DAC6] block">{t('nav.certs')}</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#03DAC6] block">{t('nav.contact')}</a></li>
        </ul>
        <button 
          onClick={toggleLanguage}
          className="w-full py-3 border border-[#03DAC6]/20 text-[#03DAC6] font-mono text-xs rounded"
        >
          {isSpanish ? 'Switch to English' : 'Cambiar a Español'}
        </button>
      </div>
    </nav>
  );
}