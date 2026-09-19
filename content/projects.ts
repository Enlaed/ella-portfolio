export type ProjectCover = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectImage = { src: string; alt: string; caption: string };

export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  hook: string;
  summary: string;
  featured: boolean;
  cover: ProjectCover;
  tags: readonly string[];
};

export const projects: readonly Project[] = [
  {
    slug: "smart-city-lagos",
    number: "01",
    eyebrow: "Data & IoT",
    title: "Smart City Lagos",
    hook: "What happens when a city starts talking in data?",
    summary:
      "A Lagos-focused IoT simulation: connected devices, messy location codes, and dashboards built from generated readings — not live municipal data.",
    featured: true,
    cover: {
      src: "/projects/smart-city-lagos/06_city_overview_dashboard_view.png",
      alt: "Smart City Lagos city overview dashboard",
      width: 2400,
      height: 1350,
    },
    tags: ["Python", "PostgreSQL", "IoT", "Power BI"],
  },
  {
    slug: "nexus-ops",
    number: "02",
    eyebrow: "Database systems",
    title: "Nexus Ops",
    hook: "What happens when the data itself needs rules?",
    summary:
      "A PostgreSQL investigation into synthetic telemetry, least-privilege roles, query logs, and what a writer is — and is not — allowed to touch.",
    featured: true,
    cover: {
      src: "/projects/nexus-ops/analyst_select.png",
      alt: "Nexus Ops analyst read-only query in psql",
      width: 1600,
      height: 1000,
    },
    tags: ["PostgreSQL", "SQL", "Roles", "EXPLAIN ANALYZE"],
  },
  {
    slug: "sales-analysis",
    number: "03",
    eyebrow: "Business analytics",
    title: "Sales Analysis",
    hook: "What happens when thousands of rows are really trying to tell you why the business is moving?",
    summary:
      "Superstore sales in SQL and Excel: revenue, profit, discount, and the gap between a busy chart and a useful commercial question.",
    featured: true,
    cover: {
      src: "/projects/sales-analysis/discount-impact-on-profit.png",
      alt: "Sales Analysis chart of discount impact on profit",
      width: 2400,
      height: 1350,
    },
    tags: ["SQL", "Excel", "Visualization"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
