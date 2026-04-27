import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { certificatesEn } from '../data/certificates.en';
import { certificatesEs } from '../data/certificates.es';

export default function Certifications() {
  const { t, i18n } = useTranslation();
  const isSpanish = (i18n.language || 'en').includes('es');
  const myCertificates = isSpanish ? certificatesEs : certificatesEn;

  const [selectedHub, setSelectedHub] = useState(null);

  return (
    <section id="certificate" className="py-20 bg-[#0f0f0f] relative">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-black text-white mb-12">
          {t('certs.title', 'Certifications')} <span className="opacity-50">& Skills</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {myCertificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => cert.isHub && setSelectedHub(cert)}
              className={`group relative border p-5 rounded-xl transition-all duration-500 flex flex-col justify-between overflow-hidden 
                ${cert.isHub ? 'cursor-pointer bg-white/5 border-white/10 hover:border-[#03DAC6]/40' : 'bg-[#1a1a1a] border-white/5'}`}
            >
              <div className="relative z-10">
                <div className="mb-4 flex justify-between items-start">
                  <div className="bg-white/5 p-1.5 rounded-lg w-10 h-10 flex items-center justify-center">
                    {cert.isEnglish ? (
                      <span className="text-xl">🌎</span>
                    ) : (
                      <img src={cert.badgeUrl} alt="badge" className="w-full h-full object-contain" />
                    )}
                  </div>
                </div>
                <h4 className="text-white font-bold text-[13px] leading-tight h-10 line-clamp-2">
                  {cert.title}
                </h4>
              </div>

              <div className="mt-6 flex justify-between items-center relative z-10 border-t border-white/5 pt-3">
                <div className="flex items-center gap-2">
                  {/* Código */}
                  <span className="text-[8px] font-bold px-1.5 py-0.5 rounded border border-white/10 text-gray-400 bg-white/5 whitespace-nowrap">
                    {cert.code}
                  </span>
                  
                  {!cert.isHub && cert.date && (
                    <span className="text-[9px] text-gray-600 font-mono uppercase whitespace-nowrap border-l border-white/10 pl-2">
                      {cert.date}
                    </span>
                  )}
                </div>

                <div className="flex-shrink-0">
                  {cert.isHub ? (
                    <span className="text-[#03DAC6] text-[9px] font-bold">
                      {t('certs.view_list', 'View list')} →
                    </span>
                  ) : (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-gray-500 hover:text-white text-[9px] font-bold transition-colors whitespace-nowrap"
                    >
                      Link →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedHub && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" 
          onClick={() => setSelectedHub(null)}
        >
          <div 
            className="bg-[#1a1a1a] border border-white/10 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl" 
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
              <div>
                <h3 className="text-white font-bold text-lg capitalize">{selectedHub.hubType} Path</h3>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest">
                  {t('certs.specialized_training', 'Specialized Training')}
                </p>
              </div>
              <button 
                onClick={() => setSelectedHub(null)} 
                className="text-gray-400 hover:text-white text-3xl transition-colors"
              >
                &times;
              </button>
            </div>

            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
              {selectedHub.courses.map((course, i) => (
                <a 
                  key={i} 
                  href={course.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-[#03DAC6]/10 hover:border-[#03DAC6]/30 transition-all group"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm text-gray-300 group-hover:text-white">
                      {course.name}
                    </span>
                    <span className="text-[9px] text-[#03DAC6]/70 font-bold uppercase tracking-tighter">
                      {t('certs.validate', 'Validate Certificate')}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-600 font-mono">
                    {course.date}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}