const GITHUB_BASE = "https://github.com/FEDERIN";

export const projectsEn = [
  {
    title: "CoreSystem Ecosystem",
    description:
      "Enterprise-grade .NET library suite to standardize telemetry and cross-cutting concerns across microservices.",
    tech: ["OpenTelemetry", "OTLP", "NuGet", "Serilog"],
    link: `${GITHUB_BASE}/CoreSystem`,
    readmePath: "https://raw.githubusercontent.com/FEDERIN/CoreSystem/main/README.md",
    type: "Infrastructure / Library",
    highlights: [
      "Standardized OTLP Telemetry",
      "Single-line integration architecture",
      "Trace ↔ Logs ↔ Metrics correlation",
    ],
  },
  {
    title: "EventHouse Management API",
    description:
      "Cloud-native REST API built with .NET 8, applying DDD, Clean Architecture, and an Observability-First approach.",
    tech: ["Clean Architecture", "CQRS", "MediatR", "xUnit", "PostgreSQL"],
    link: `${GITHUB_BASE}/eventhouse-management-api-demo`,
    readmePath: "https://raw.githubusercontent.com/FEDERIN/eventhouse-management-api-demo/main/README.md",
    type: "Backend / Implementation",
    highlights: [
      "CQRS Pattern with MediatR",
      "Observability with Jaeger & Prometheus",
      "TDD with Bogus & FluentValidation",
    ],
  },
];
