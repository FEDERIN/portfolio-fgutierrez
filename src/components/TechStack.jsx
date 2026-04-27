import { useTranslation } from 'react-i18next';

export default function TechStack() {
  const { i18n } = useTranslation();
  const isSpanish = (i18n.language || 'en').includes('es');

  const skillGroups = [
    {
      category: isSpanish ? "ANÁLISIS Y PROCESOS" : "ANALYSIS & PROCESSES",
      items: ["Camunda (BPMN 2.0)", "DDD", "Clean Architecture", "Enterprise APIs"]
    },
    {
      category: "BACKEND & CLOUD",
      items: [".NET 8 / C#", "Java", "Azure (AKS)", "AWS (Lambda/SQS)", "Microservices"]
    },
    {
      category: "FRONTEND & OBSERVABILITY",
      items: ["Vue.js", "React", "Angular","OpenTelemetry", "Prometheus / Jaeger"]
    },
    {
      category: isSpanish ? "CUALIDADES GLOBALES" : "GLOBAL MINDSET",
      items: [
        isSpanish ? "Adaptabilidad Internacional" : "International Adaptability",
        isSpanish ? "Trabajo Multicultural" : "Multicultural Collaboration",
        isSpanish ? "Disponibilidad Global" : "Global Availability"
      ]
    }
  ];

  return (
    <section className="py-12 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-[#03DAC6] font-mono text-[10px] tracking-[0.2em] uppercase opacity-70">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {group.items.map((item, i) => (
                  <span key={i} className="text-gray-400 text-sm font-medium hover:text-white transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}