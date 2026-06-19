import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { packagesEn } from '../data/packages.en';
import { packagesEs } from '../data/packages.es';
import ProjectModal from './ProjectModal';

export default function Nuget() {
  const { t, i18n } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const isSpanish = (i18n.language || 'en').includes('es');
  const myPackages = isSpanish ? packagesEs : packagesEn;

  return (
    <section id="packages" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <h2 className="text-[#03DAC6] font-mono text-[10px] tracking-[0.3em] uppercase mb-2">
            {t('packages.subtitle')}
          </h2>
          <h3 className="text-3xl font-black text-white">
            Package <span className="opacity-50">Nuget</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myPackages.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl hover:border-[#03DAC6]/40 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-5">
                  <span className="text-[9px] font-bold text-[#03DAC6] bg-[#03DAC6]/10 px-2 py-1 rounded border border-[#03DAC6]/20 uppercase">
                    {project.category}
                  </span>
                  <div className="flex gap-3">
                    {project.links?.readme && (
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="text-gray-500 hover:text-[#03DAC6] transition-colors"
                        title={t('packages.readme_error')}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </button>
                    )}
                    {project.links?.nuget && (
                      <a 
                        href={project.links.nuget} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-500 hover:text-white transition-colors"
                      >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
                        <path d="M448 96v320H64V96h384m16-32H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"/>
                        <path d="M192 160h128v192H192zM160 128h192v256H160z"/>
                      </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-white font-bold text-lg mb-3 group-hover:text-[#03DAC6] transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="mb-6 space-y-2 border-l border-white/10 pl-4">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-[10px] text-gray-500 font-medium italic">
                        <span className="w-1 h-1 bg-[#03DAC6] rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="relative z-10 flex flex-wrap gap-1.5">
                {project.tech.map((tag, i) => (
                  <span key={i} className="text-[8px] font-mono text-gray-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
        readmePath={selectedProject?.links?.readme}
        title={selectedProject?.title}
      />
    </section>
  );
}