const NUGET_BASE = "https://www.nuget.org/packages";

export const packagesEn = [
  {
    id: "distributed-cache",
    title: "FGutierrez.Core.DistributedCache",
    category: "Infrastructure Library",
    description: "High-performance .NET 8 distributed caching library with unified abstraction, resilient fallback strategies, and native OpenTelemetry observability.",
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
    description: "High-performance .NET 8 library designed to guarantee exactly-once execution of critical operations, preventing duplicates through distributed persistence.",
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
    description: "A comprehensive observability kit for .NET 8 applications, providing seamless integration with modern distributed tracing and monitoring backends.",
    tech: ["OpenTelemetry", "Jaeger", "Prometheus", "Grafana", "gRPC"],
    links: {
      nuget: `${NUGET_BASE}/FGutierrez.Core.Observability/`,
      readme: "https://raw.githubusercontent.com/FEDERIN/CoreSystem/refs/heads/main/src/Core.Observability/README.md"
    },
    highlights: [
    ],
  },
];