import { useTranslation } from 'react-i18next';
import { experienceEn } from '../data/experience.en';
import { experienceEs } from '../data/experience.es';


export default function Experience() {
  
  const { i18n } = useTranslation();
  
  const isSpanish = (i18n.language || 'en').includes('es');
  const myExperience = isSpanish ? experienceEs : experienceEn;

  return (
    <section id="experience" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="mb-16">
          <h2 className="text-[#03DAC6] font-mono text-[10px] tracking-[0.3em] uppercase mb-2">
            Career Roadmap
          </h2>
          <h3 className="text-3xl font-black text-white">
            Professional <span className="opacity-50">Experience</span>
          </h3>
        </div>
        {myExperience.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-20">
            
            {/* Título de la Categoría */}
            <div className="flex items-center gap-6 mb-10">
              <h4 className="text-white font-bold text-sm uppercase tracking-tighter whitespace-nowrap">
                {group.category}
              </h4>
              <div className="h-px bg-white/10 w-full"></div>
            </div>

            <div className="space-y-16">
              {group.roles.map((exp, index) => (
                <div key={index} className="relative group">
                  <div className="flex flex-col md:flex-row gap-6">
                    
                    {/* Columna Izquierda: Tiempo y Empresa */}
                    <div className="md:w-1/4">
                      <span className="text-[#03DAC6] font-mono text-[11px] font-bold block mb-1">
                        {exp.period}
                      </span>
                      <span className="text-gray-500 text-xs font-medium">
                        {exp.company}
                      </span>
                    </div>
                    <div className="md:w-3/4 border-l border-white/5 pl-8 relative">
                      <div className="absolute left-[-1px] top-0 w-[2px] h-6 bg-[#03DAC6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <h5 className="text-white font-bold text-lg mb-3 group-hover:text-[#03DAC6] transition-colors">
                        {exp.role}
                      </h5>
                      
                      <p className="text-gray-400 text-[11px] leading-relaxed mb-5 italic opacity-70">
                        {exp.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-[12px] text-gray-500 leading-relaxed">
                            <span className="text-[#03DAC6] mt-1.5 text-[10px]">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <span key={i} className="text-[9px] font-mono text-gray-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded hover:border-[#03DAC6]/30 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* <div className="mt-10 pt-10 border-t border-white/5 text-center">
          <a 
            href="/Federin_CV.pdf" 
            target="_blank"
            className="text-[#03DAC6] font-mono text-[10px] uppercase tracking-widest hover:underline"
          >
            Download Full Resume (PDF)
          </a>
        </div> */}

      </div>
    </section>
  );
}