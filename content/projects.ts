export type ProjectImage = { src: string; alt: string; caption: string };
export type Project = {
  slug: "nexus-ops" | "sales-analysis" | "smart-city-lagos";
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  tags: readonly string[];
  images?: readonly ProjectImage[];
};

export const projects: readonly Project[] = [
  {
    slug: "smart-city-lagos", number: "01", eyebrow: "Data & IoT", title: "Smart City Lagos",
    summary: "Exploring how connected infrastructure and data can help us understand the systems that keep a city moving.",
    tags: ["Python", "PostgreSQL", "IoT", "Data analysis", "Power BI"],
  },
  {
    slug: "nexus-ops", number: "02", eyebrow: "Database systems", title: "Nexus Ops",
    summary: "An operational analytics project focused on structured data, database roles, observability, and analytical insights.",
    tags: ["PostgreSQL", "SQL", "pgAdmin 4", "EXPLAIN ANALYZE"],
    images: [
      { src: "/nexusops/admin_login.png", alt: "Nexus Ops administrator login", caption: "Administrator access" },
      { src: "/nexusops/analyst_select.png", alt: "Nexus Ops analyst SELECT query", caption: "Read-only analysis" },
      { src: "/nexusops/writer_insert.png", alt: "Nexus Ops writer telemetry insertion", caption: "Controlled ingestion" },
      { src: "/nexusops/auditors_logs.png", alt: "Nexus Ops auditor query logs", caption: "Query observability" },
    ],
  },
  {
    slug: "sales-analysis", number: "03", eyebrow: "Business analytics", title: "Sales Analysis",
    summary: "A business analytics project examining sales performance, trends, and key commercial insights.",
    tags: ["SQL", "Excel", "Data analysis", "Data visualization"],
  },
];

export function getProject(slug: Project["slug"]) {
  return projects.find((project) => project.slug === slug);
}
