import { useTranslation } from 'react-i18next';
import Logo from './Logo';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  const isSpanish = (i18n.language || 'en').includes('es');

  return (
    <footer className="py-16 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Marca e Identidad - Replicando estilo Navbar */}
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <Logo />
          <div className="flex flex-col text-left">
            <span className="text-white font-bold tracking-tighter leading-none text-xl uppercase">
              FGUTIERREZ
            </span>
            <span className="text-[#03DAC6] text-[10px] font-mono tracking-widest uppercase mt-1">
              {t('nav.role')}
            </span>
          </div>
        </div>

        {/* Enlaces con el mismo estilo de interacción */}
        <div className="flex gap-8">
          <a 
            href="https://www.linkedin.com/in/federin-gutierrez-86042a173" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-[#03DAC6] transition-all text-xs font-mono uppercase tracking-widest"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/FEDERIN" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-[#03DAC6] transition-all text-xs font-mono uppercase tracking-widest"
          >
            GitHub
          </a>
        </div>

        {/* Copyright y Status Check */}
        <div className="text-center md:text-right">
          <p className="text-gray-600 text-[10px] font-mono">
            © {year} — {isSpanish ? 'SISTEMA OPERATIVO' : 'SYSTEM OPERATIONAL'}
          </p>
          <div className="flex items-center justify-center md:justify-end gap-2 mt-1">
            <span className="w-1.5 h-1.5 bg-[#03DAC6] rounded-full animate-pulse shadow-[0_0_8px_#03DAC6]"></span>
            <span className="text-[9px] text-gray-500 font-mono uppercase tracking-widest opacity-70">
              {isSpanish ? 'Conexión Estable' : 'Connection Stable'}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}