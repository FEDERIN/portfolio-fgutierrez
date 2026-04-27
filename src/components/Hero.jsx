import { useTranslation } from 'react-i18next';
import heroEsImg from '../assets/hero_es.webp'; 
import heroEnImg from '../assets/hero_en.webp';

export default function Hero() {
  const { t, i18n } = useTranslation();
  
  const currentLang = i18n.language || 'en';
  const isSpanish = currentLang.includes('es');

  const activeHeroImg = isSpanish ? heroEsImg : heroEnImg;

  const altText = isSpanish 
    ? "Federin Gutierrez - Analista de Sistemas y Arquitectura" 
    : "Federin Gutierrez - Systems Analyst & Architecture";
  
  const techTagline = isSpanish 
  ? "Analista de Sistemas // Full Stack Core" 
    : "Systems Analyst // Full Stack Core";
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Lado de la Imagen */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 bg-[#03DAC6]/10 rounded-full blur-3xl"></div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
            <img 
              src={activeHeroImg} 
              alt={altText}
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#121212] to-transparent">
              <p className="text-[10px] font-mono text-[#03DAC6] tracking-widest uppercase">
                {techTagline}
              </p>
            </div>
          </div>
        </div>

        {/* Lado del Texto */}
        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <h2 className="text-[#03DAC6] font-mono text-xs tracking-[0.3em] uppercase mb-4">
              {t('hero.roadmap_label')}
            </h2>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              {t('hero.title_top')} <br />
              <span className="text-[#03DAC6]">{t('hero.title_bottom')}</span>
            </h1>
          </div>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light italic border-l-2 border-[#03DAC6] pl-6 py-2">
            {t('hero.quote_start')}
            <span className="text-white font-semibold not-italic"> {t('hero.quote_bold')} </span> 
            {t('hero.quote_end')}
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#experience" className="bg-[#03DAC6] text-[#121212] px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#03DAC6]/20">
              {t('hero.btn_exp')}
            </a>
            <a href="mailto:federingutierrez@gmail.com" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
              {t('hero.btn_contact')}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}