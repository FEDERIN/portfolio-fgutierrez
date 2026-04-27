import { useTranslation } from 'react-i18next';
import { SOCIAL_LINKS } from '../data/assets';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#03DAC6]/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna 1: Información */}
          <div>
            <h3 className="text-4xl font-black text-white mb-6">
              {t('contact.title', "Let's build something")} <br />
              <span className="text-[#03DAC6]">{t('contact.subtitle', "exceptional.")}</span>
            </h3>
            <p className="text-gray-400 mb-10 max-w-md leading-relaxed">
              {t('contact.description', "I'm currently open to new opportunities as a Senior Systems Analyst or Lead Developer. If you have a project or a position that fits my profile, let's talk.")}
            </p>

            <div className="space-y-6">
              {/* Email Card */}
              <a href={`mailto:${SOCIAL_LINKS.EMAIL}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#03DAC6]/50 transition-all">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-white group-hover:text-[#03DAC6] transition-colors">{SOCIAL_LINKS.EMAIL}</p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#03DAC6]/50 transition-all">
                  <span className="text-xl">🔗</span>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">LinkedIn</p>
                  <p className="text-white group-hover:text-[#03DAC6] transition-colors">in/federin-gutierrez-86042a173</p>
                </div>
              </a>
            </div>
          </div>

          {/* Columna 2: Formulario */}
          <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-2xl shadow-2xl">
            <form action="https://formspree.io/f/tu_id_aqui" method="POST" className="space-y-5">
              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase mb-2 block">{t('contact.name', 'Full Name')}</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#03DAC6] focus:outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase mb-2 block">{t('contact.email', 'Email Address')}</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#03DAC6] focus:outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase mb-2 block">{t('contact.message', 'Message')}</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#03DAC6] focus:outline-none transition-all resize-none"
                  placeholder={t('contact.placeholder', 'Tell me about your project...')}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#03DAC6] hover:bg-[#03DAC6]/90 text-[#000] font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1"
              >
                {t('contact.send', 'Send Message')}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}