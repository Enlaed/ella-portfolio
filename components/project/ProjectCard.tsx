import Link from "next/link";
import type { Project } from "@/content/projects";
import { TagList } from "@/components/ui/TagList";

export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card"><span className="project-card__number">{project.number}</span><div><p className="u-eyebrow">{project.eyebrow}</p><h3 className="project-card__title">{project.title}</h3></div><p className="project-card__summary">{project.summary}</p><TagList tags={project.tags} /><Link className="project-card__link" href={`/projects/${project.slug}`}>View project →</Link></article>;
}
