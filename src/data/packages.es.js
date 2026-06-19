const NUGET_BASE = "https://www.nuget.org/packages";

export const packagesEs = [
  {
    id: "distributed-cache",
    title: "FGutierrez.Core.DistributedCache",
    category: "Infrastructure Library",
    description: "Biblioteca de caché distribuida de alto rendimiento para .NET 8, con abstracción unificada, estrategias de resiliencia y observabilidad nativa.",
    tech: ["OpenTelemetry", "Redis", "MemoryCache", ".NET 8", "NuGet"],
    links: {
      nuget: `${NUGET_BASE}/FGutierrez.Core.DistributedCache/`,
      readme: "https://raw.githubusercontent.com/FEDERIN/CoreSystem/refs/heads/main/src/Core.DistributedCache/README.md"
    },
    highlights: [
    ],
  },
  {
    id: "idempotency-engine",
    title: "FGutierrez.Core.Idempotency",
    category: "Infrastructure Library",
    description: "Motor de idempotencia para .NET 8 que garantiza la ejecución 'exactly-once' en operaciones críticas mediante persistencia distribuida.",
    tech: ["OpenTelemetry", "PostgreSQL", "Redis", "Dapper", ".NET 8"],
    links: {
      nuget: `${NUGET_BASE}/FGutierrez.Core.Idempotency/`,
      readme: "https://raw.githubusercontent.com/FEDERIN/CoreSystem/main/src/Core.Idempotency/README.md"
    },
    highlights: [
    ],
  },
  {
    id: "observability-kit",
    title: "FGutierrez.Core.Observability",
    category: "Infrastructure / Observability",
    description: "Kit completo de observabilidad para aplicaciones .NET 8, facilitando la integración nativa con backends de trazabilidad y monitoreo distribuido.",
    tech: ["OpenTelemetry", "Jaeger", "Prometheus", "Grafana", "gRPC"],
    links: {
      nuget: `${NUGET_BASE}/FGutierrez.Core.Observability/`,
      readme: "https://raw.githubusercontent.com/FEDERIN/CoreSystem/refs/heads/main/src/Core.Observability/README.md"
    },
    highlights: [
    ],
  }
];