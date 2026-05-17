const GITHUB_BASE = "https://github.com/FEDERIN";

export const projectsEs = [
  {
    title: "CoreSystem Ecosystem",
    description:
      "Suite de librerías .NET de grado empresarial para estandarizar la telemetría y aspectos transversales en microservicios.",
    tech: ["OpenTelemetry", "OTLP", "NuGet", "Serilog"],
    link: `${GITHUB_BASE}/CoreSystem`,
    readmePath: "https://raw.githubusercontent.com/FEDERIN/CoreSystem/main/README.md",
    type: "Infraestructura / Librería",
    highlights: [
      "Telemetría OTLP estandarizada",
      "Arquitectura de integración en una sola línea",
      "Correlación trazas ↔ logs ↔ métricas",
    ],
  },
  {
    title: "EventHouse Management API",
    description:
      "API REST nativa de la nube construida con .NET 8, aplicando DDD, Clean Architecture y un enfoque de observabilidad primero.",
    tech: ["Clean Architecture", "CQRS", "MediatR", "xUnit", "PostgreSQL"],
    link: `${GITHUB_BASE}/eventhouse-management-api-demo`,
    readmePath: "https://raw.githubusercontent.com/FEDERIN/eventhouse-management-api-demo/main/README.md",
    type: "Backend / Implementación",
    highlights: [
      "Patrón CQRS con MediatR",
      "Observabilidad con Jaeger y Prometheus",
      "TDD con Bogus y FluentValidation",
    ],
  },
];
