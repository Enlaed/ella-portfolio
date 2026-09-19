export type ExperienceRole = {
  period: string;
  role: string;
  organization: string;
  location: string;
  kicker: string;
  lead: string;
  story: readonly string[];
  details?: readonly string[];
  metrics?: readonly { value: string; label: string; note: string }[];
  tags?: readonly string[];
  impact?: {
    figure: string;
    label: string;
    headline: string;
    body: string;
  };
};

export const experienceIntro = {
  kicker: "Experience",
  title: "I didn’t start in data. I started by solving operational problems.",
  body: "The roles below are the working path: trucks and schedules first, then live network data, then closer to the database.",
} as const;

export const roles: readonly ExperienceRole[] = [
  {
    period: "Apr 2026 — Present",
    role: "Report Analyst",
    organization: "Huawei Technologies Nigeria · RGS Worldwide",
    location: "Lagos, Nigeria",
    kicker: "Current role · telecommunications",
    lead: "Working with operational data in a live Network Operations environment, where accuracy, consistency, and timely reporting support decision-making.",
    story: [
      "The work sits in business analytics and reporting for a regional network analysis setting: operational data, KPI reporting, service performance, and data quality.",
      "Day to day that means compiling, cleaning, validating, and analysing operational datasets for recurring performance reports; building reporting workflows, dashboards, and presentations; looking at SLA compliance, site performance, incident trends, and service delivery metrics; and working with operational and field teams to check the data and communicate findings.",
    ],
    details: [
      "Validate, clean, reconcile, and audit operational datasets to improve reporting accuracy, consistency, and completeness.",
      "Analyse operational datasets, investigate performance patterns, and identify discrepancies that need attention.",
      "Prepare national operational governance reports and translate multiple data sources into executive-ready insights.",
      "Use analytical and AI-assisted workflows to reduce repetitive work, then independently check outputs for accuracy.",
    ],
    impact: {
      figure: "83%",
      label: "Report generation improvement",
      headline: "30 minutes → 5 minutes",
      body: "Redesigned the end-to-end reporting logic and partnered with the development team to implement the improved workflow, reducing report generation time from approximately 30 minutes to 5 minutes.",
    },
  },
  {
    period: "Feb 2026 — May 2026",
    role: "Software Engineering Intern",
    organization: "Smartlink",
    location: "Lagos, Nigeria",
    kicker: "Technology",
    lead: "A stretch closer to the database: PostgreSQL, SQL, backend integration, testing, and collaborative software workflows.",
    story: [
      "This internship sat alongside the network-operations path rather than replacing it. The useful part was getting nearer to how data is stored and queried, not only how it is reported.",
    ],
    details: [
      "PostgreSQL — database structures",
      "SQL — queries and validation",
      "Git — version control",
      "Docker — working knowledge",
    ],
  },
  {
    period: "Jul 2025 — Mar 2026",
    role: "Data Analyst Intern · NYSC",
    organization: "NYSC · Network operations",
    location: "Lagos, Nigeria",
    kicker: "The beginning in network operations",
    lead: "The first role inside the Network Operations environment — learning to read operations through live datasets.",
    story: [
      "I supported daily reporting, monitored performance indicators, cleaned and reconciled data, and worked with senior analysts to look at service incidents and operational reviews.",
    ],
    tags: [
      "Data cleaning",
      "Data validation",
      "SLA monitoring",
      "Operational reporting",
      "Data analysis",
    ],
  },
  {
    period: "Nov 2024 — Apr 2025",
    role: "Assistant Fleet Manager",
    organization: "Kachicares Resources Limited",
    location: "Lagos, Nigeria",
    kicker: "Operations",
    lead: "Before dashboards, there were trucks. Fleet and logistics work in a maritime logistics environment, with reporting attached to the day.",
    story: [
      "I coordinated fleet scheduling, resource allocation, logistics planning, stakeholder communication, and operational continuity across a 25-truck fleet.",
      "I also designed an Excel operational monitoring dashboard that gave management a central view of fleet performance and key metrics.",
    ],
    metrics: [
      { value: "25", label: "Trucks", note: "Daily fleet operations" },
      { value: "700+", label: "Shipments", note: "Monthly container operations" },
    ],
    tags: ["Excel", "Operations", "Reporting", "Fleet management"],
  },
];

export const experienceClose = {
  title: "Operations taught me the problem. Data taught me how to see it.",
  body: "Every role has moved a little closer to the same question: how can better information lead to better decisions?",
} as const;

export const education = {
  period: "2020 — 2024",
  credential: "B.Sc. Mathematics",
  school: "University of Benin (UNIBEN)",
  location: "Edo State, Nigeria",
  note: "Second Class Upper Honours (2:1)",
} as const;

export const courses = [
  "Google Data Analytics Professional Certificate",
  "Google IT Support Professional Certificate",
  "IoT Wireless & Cloud Computing — Yonsei University",
  "Jobberman Soft Skills Training",
] as const;

export const skills = [
  "SQL",
  "Python",
  "Excel",
  "Power BI",
  "Power Query",
  "PostgreSQL",
  "Data analysis",
  "Data visualization",
  "Reporting",
] as const;
