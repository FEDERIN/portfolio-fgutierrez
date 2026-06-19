import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SOCIAL_LINKS } from "../data/assets";
import { useContactForm } from "../hooks/useContactForm";

export default function Contact() {
  const { t } = useTranslation();
  const { status, sendEmail, setStatus } = useContactForm(
    import.meta.env.VITE_FORMSPREE_ID,
  );
  const [charCount, setCharCount] = useState(0);
  const MAX_CHARS = 500;

  return (
    <section
      id="contact"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#03DAC6]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-4xl font-black text-white mb-6">
              {t("contact.title")} <br />
              <span className="text-[#03DAC6]">{t("contact.subtitle")}</span>
            </h3>
            <p className="text-gray-400 mb-10 max-w-md leading-relaxed text-sm">
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${SOCIAL_LINKS.EMAIL}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#03DAC6]/50 transition-all">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                    Email
                  </p>
                  <p className="text-white group-hover:text-[#03DAC6] transition-colors text-sm">
                    {SOCIAL_LINKS.EMAIL}
                  </p>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#03DAC6]/50 transition-all">
                  <span className="text-xl">🔗</span>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                    LinkedIn
                  </p>
                  <p className="text-white group-hover:text-[#03DAC6] transition-colors text-sm">
                    federin-gutierrez
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-2xl shadow-2xl min-h-[400px] flex flex-col justify-center">
            {status === "SUCCESS" ? (
              <div className="text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#03DAC6]/10 border border-[#03DAC6]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-[#03DAC6]">✓</span>
                </div>
                <h4 className="text-white font-bold text-xl mb-2">
                  {t("contact.success_title")}
                </h4>
                <p className="text-gray-400 text-sm mb-8">
                  {t("contact.success_msg")}
                </p>
                <button
                  onClick={() => {
                    setStatus("");
                    setCharCount(0);
                  }}
                  className="text-[#03DAC6] text-[10px] font-black uppercase tracking-[2px] hover:opacity-70 transition-all"
                >
                  {t("contact.send_another")}
                </button>
              </div>
            ) : (
              <form onSubmit={sendEmail} className="space-y-5">
                <input type="text" name="_gotcha" style={{ display: "none" }} />

                <div>
                  <label className="text-[15px] font-bold text-gray-500 uppercase mb-2 block tracking-widest">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    maxLength="80"
                    required
                    disabled={status === "SENDING"}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#03DAC6] focus:outline-none transition-all disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="text-[15px] font-bold text-gray-500 uppercase mb-2 block tracking-widest">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={status === "SENDING"}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title={t("contact.email_error")}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#03DAC6] focus:outline-none transition-all disabled:opacity-50 placeholder:text-gray-700"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="relative group">
                  <label className="text-[15px] font-bold text-gray-500 uppercase mb-2 block tracking-widest">
                    {t("contact.message")}
                  </label>
                  <textarea
                    name="message"
                    required
                    maxLength={MAX_CHARS}
                    rows="4"
                    disabled={status === "SENDING"}
                    onChange={(e) => setCharCount(e.target.value.length)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#03DAC6] focus:outline-none transition-all resize-none disabled:opacity-50 pr-4 pb-10"
                    placeholder={t("contact.placeholder")}
                  ></textarea>

                  <div className="absolute bottom-3 right-3 flex items-center gap-2 pointer-events-none">
                    <span
                      className={`text-[9px] font-black uppercase tracking-widest transition-colors ${charCount >= MAX_CHARS ? "text-orange-500" : "text-[#03DAC6]/40"}`}
                    >
                      {charCount} / {MAX_CHARS}
                    </span>
                    <div className="w-[1px] h-3 bg-white/10"></div>
                    <span className="text-[9px] font-bold text-gray-600 italic">
                      {t("contact.max_chars")}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "SENDING"}
                  className="w-full bg-[#03DAC6] hover:bg-[#03DAC6]/90 disabled:bg-gray-700 text-black font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {status === "SENDING" ? (
                    <span className="animate-pulse italic">
                      {t("contact.sending")}
                    </span>
                  ) : (
                    t("contact.send")
                  )}
                </button>

                {status === "ERROR" && (
                  <p className="text-red-400 text-[10px] text-center font-bold uppercase mt-4">
                    {t("contact.error")}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
